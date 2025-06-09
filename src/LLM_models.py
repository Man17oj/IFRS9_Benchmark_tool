
import json
import time
from typing import List, Tuple, Optional, Dict, Any
import requests
from dotenv import load_dotenv
from chromadb.api.types import EmbeddingFunction  # type: ignore
import os

AUTH_HEADER_NAME = "api-key"


ENV_PATH = os.path.join(os.path.dirname(os.path.dirname(__file__)), "ATT27768.env")
load_dotenv(ENV_PATH)


# =============================================================================
# Custom Classes
# =============================================================================
class EYQEmbeddings(EmbeddingFunction):  # type: ignore
    def __init__(self, model: str, api_key: str, api_base: str, api_version: str,
                 auth_header_name: str = "Authorization", use_bearer: bool = True):
        self.model = model
        self.api_key = api_key
        self.api_base = api_base
        self.api_version = api_version
        self.auth_header_name = auth_header_name
        self.use_bearer = use_bearer
        self.session = requests.Session()

    def __call__(self, inputs: List[str]) -> List[List[float]]:
        headers = {"Content-Type": "application/json",
                   self.auth_header_name: f"Bearer {self.api_key}" if self.use_bearer else self.api_key}
        embeddings_list: List[List[float]] = []
        for text in inputs:
            # EYQ specific payload might only need 'input' if model is in URL
            payload = {"input": text}
            endpoint = f"{self.api_base}/openai/deployments/{self.model}/embeddings?api-version={self.api_version}"
            try:
                response = self.session.post(endpoint, headers=headers, json=payload, timeout=30)
                response.raise_for_status()
                data = response.json()
                embeddings_list.append(data["data"][0]["embedding"])
            except requests.exceptions.RequestException as e:
                print(f"Embedding request failed: {e}")
                if 'response' in locals() and response is not None:
                    print(f"Response content: {response.text}")
                raise
            except (KeyError, IndexError) as e:
                print(f"Failed to parse embedding response: {e}")
                if 'data' in locals():
                    print(f"Problematic data: {data}")
                raise
        return embeddings_list

    def embed_documents(self, texts: List[str]) -> List[List[float]]:
        return self.__call__(texts)

    def embed_query(self, text: str) -> List[float]:
        return self.__call__([text])[0]


# In EY_DataExtract.py

class EYQChat:
    def __init__(self, deployment_name: str, api_key: str, api_base: str, api_version: str,
                 temperature: float = 0, verbose: bool = False):
        self.deployment_name = deployment_name
        self.api_key = api_key
        self.api_base = api_base
        self.api_version = api_version
        self.temperature = temperature
        self.verbose = verbose
        self.session = requests.Session()

    def __call__(self, messages: List[Dict[str, str]], retries: int = 3, delay: int = 2, **kwargs: Any) -> str:
        headers = {AUTH_HEADER_NAME: self.api_key, "Content-Type": "application/json"}

        # Extract client-side timeout from kwargs, or use a default (e.g., 180 seconds).
        # This removes 'timeout' from kwargs so it won't be added to the api_payload.
        client_side_timeout = kwargs.pop('timeout', 180)

        # Construct the payload for the API.
        # Only include parameters that the API endpoint actually expects.
        api_payload: Dict[str, Any] = {
            "messages": messages,
            "temperature": self.temperature,
            # "model": self.deployment_name # Optional: Some Azure OpenAI setups might expect 'model' in payload.
            # Usually, if deployment_name is in URL, this isn't needed.
            # Test without it first. If you get errors about missing 'model' field, uncomment it.
        }

        # If there are other kwargs that ARE meant for the API payload (e.g., max_tokens, stop sequences),
        # you can add them here from the remaining 'kwargs'.
        # Example:
        # if 'max_tokens' in kwargs:
        #     api_payload['max_tokens'] = kwargs['max_tokens']
        # For now, we'll assume only messages and temperature are primary, and model is handled by URL.
        # You can add other valid API parameters from the remaining `kwargs` to `api_payload` if needed:
        api_payload.update(
            kwargs)  # This adds any remaining kwargs to the payload (after 'timeout' and optionally 'model' were popped)

        endpoint = f"{self.api_base}/openai/deployments/{self.deployment_name}/chat/completions?api-version={self.api_version}"

        if self.verbose:
            print(f"Sending request to {endpoint} with headers: {headers}")
            print(f"Payload (to be sent to API): {json.dumps(api_payload, indent=2)}")  # Log the actual payload

        for attempt in range(retries):
            try:
                # Use the extracted client_side_timeout for the requests.post call
                response = self.session.post(endpoint, headers=headers, json=api_payload, timeout=client_side_timeout)
                response.raise_for_status()  # Raise HTTPError for bad responses (4xx or 5xx)

                response_json = response.json()
                if "choices" not in response_json or not response_json["choices"]:
                    raise ValueError("LLM response missing 'choices' or 'choices' is empty.")
                if "message" not in response_json["choices"][0] or "content" not in response_json["choices"][0][
                    "message"]:
                    raise ValueError("LLM response choices missing 'message' or 'content'.")

                return response_json["choices"][0]["message"]["content"]

            except requests.exceptions.Timeout:
                print(
                    f"Chat request timed out (Attempt {attempt + 1}/{retries}). Client waited for {client_side_timeout}s.")
                if attempt < retries - 1:
                    sleep_duration = delay * (2 ** attempt)
                    print(f"Retrying in {sleep_duration} seconds...")
                    time.sleep(sleep_duration)
                else:
                    print(f"Failed after {retries} timeout attempts.")
                    raise  # Re-raise the timeout error
            except requests.exceptions.RequestException as e:
                print(f"Chat request failed (Attempt {attempt + 1}/{retries}): {e}")
                if 'response' in locals() and response is not None:
                    print(f"Status Code: {response.status_code}, Response Text: {response.text}")
                if attempt < retries - 1:
                    sleep_duration = delay * (2 ** attempt)
                    print(f"Retrying in {sleep_duration} seconds...")
                    time.sleep(sleep_duration)
                else:
                    print(f"Failed after {retries} attempts.")
                    raise
            except (KeyError, IndexError, ValueError) as e:  # Added ValueError for parsing issues
                print(
                    f"Failed to parse chat response or response structure invalid (Attempt {attempt + 1}/{retries}): {e}")
                if 'response' in locals() and response is not None:
                    try:
                        print(f"Problematic chat response JSON: {response.json()}")
                    except json.JSONDecodeError:
                        print(f"Problematic chat response text (not valid JSON): {response.text}")
                if attempt < retries - 1:
                    sleep_duration = delay * (2 ** attempt)
                    print(f"Retrying in {sleep_duration} seconds...")
                    time.sleep(sleep_duration)
                else:
                    print(f"Failed after {retries} attempts due to response parsing issues.")
                    raise
        return "Error: LLM call failed after multiple retries and did not return a valid response."  # Should not be reached if an exception is raised
