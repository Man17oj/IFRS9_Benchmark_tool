
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { ArrowRight, Check } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const banks = [
  { id: 'barclays',      name: 'Barclays' },
  { id: 'hsbc',          name: 'HSBC' },
  { id: 'lloyds',        name: 'Lloyds Banking Group' },
  { id: 'natwest',       name: 'NatWest Group' },
  { id: 'santander',     name: 'Santander UK' },
  { id: 'standard',      name: 'Standard Chartered' },
  { id: 'nationwide',    name: 'Nationwide Building Society' },
  { id: 'vmuk',          name: 'Virgin Money UK' },
  { id: 'lbg',           name: 'Lloyds Banking Group' },
  { id: 'nwg',           name: 'NatWest Group' },
  { id: 'principality',  name: 'Principality Building Society' },
  { id: 'coventry',      name: 'Coventry Building Society' },
  { id: 'yorkshire',     name: 'Yorkshire Building Society' },
  { id: 'leeds',         name: 'Leeds Building Society' },
  { id: 'nottingham',    name: 'Nottingham Building Society' },
  { id: 'klarna',        name: 'Klarna' },
  { id: 'revolut',       name: 'Revolut' },
  { id: 'monzo',         name: 'Monzo' },
  { id: 'starling',      name: 'Starling' },
  { id: 'skipton',       name: 'Skipton' },
  {id: 'OakNorth',       name: 'OakNorth'},
  {id: 'Aldermore',       name: 'Aldermore'},
  {id: 'Shawbrook',       name: 'Shawbrook'},
  {id: 'MetroBank',       name: 'MetroBank'}

];

const BankSelection = () => {
  const navigate = useNavigate();
  const [selectedBank, setSelectedBank] = useState<string>('');
  const [selectedBanks, setSelectedBanks] = useState<string[]>([]);
  const [enableMultiBanks, setEnableMultiBanks] = useState<boolean>(false);

  // Update selected banks when toggling multi-bank mode
  useEffect(() => {
    if (enableMultiBanks) {
      // If switching to multi-bank mode, initialize with the current selection
      if (selectedBank && !selectedBanks.includes(selectedBank)) {
        setSelectedBanks([selectedBank]);
      }
    } else {
      // If switching to single bank mode, use the first selected bank or empty
      setSelectedBank(selectedBanks.length > 0 ? selectedBanks[0] : '');
    }
  }, [enableMultiBanks]);

  const handleContinue = () => {
    if ((enableMultiBanks && selectedBanks.length > 0) || (!enableMultiBanks && selectedBank)) {
      // Store the selected bank(s) in session storage for use across the application
      sessionStorage.setItem('selectedBank', enableMultiBanks ? selectedBanks[0] : selectedBank);
      sessionStorage.setItem('selectedBanks', JSON.stringify(enableMultiBanks ? selectedBanks : [selectedBank]));
      sessionStorage.setItem('enableMultiBanks', enableMultiBanks.toString());
      navigate('/dashboard');
    }
  };

  const toggleBankSelection = (bankId: string) => {
    setSelectedBanks(prevSelected => {
      if (prevSelected.includes(bankId)) {
        return prevSelected.filter(id => id !== bankId);
      } else {
        return [...prevSelected, bankId];
      }
    });
  };

  // Check if a bank is selected in multi-bank mode
  const isBankSelected = (bankId: string) => {
    return selectedBanks.includes(bankId);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-ey-black text-white">
      <div className="w-full max-w-md px-6 py-12 text-center">
        <div className="mb-8">
          <div className="flex justify-center mb-6">
            <div className="h-16 w-16 bg-ey-yellow rounded-md"></div>
          </div>
          
          <h1 className="text-4xl font-bold mb-2">AiDEx</h1>
          <p className="text-ey-gray-400">
            AI powered Data Extraction
          </p>
          <p className="text-ey-gray-500 text-sm mt-1">
            Supported by EYQ
          </p>
        </div>
        
        <div className="border border-ey-gray-700 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-6">Select Bank</h2>
          <p className="text-sm text-ey-gray-400 mb-6">
            Choose the bank you want to analyze for data extraction.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3 mt-4 mb-4 p-3 bg-ey-gray-800/50 rounded-md">
              <Checkbox 
                id="enableMultiBanks" 
                checked={enableMultiBanks} 
                onCheckedChange={(checked) => setEnableMultiBanks(checked as boolean)}
                className="data-[state=checked]:bg-ey-yellow data-[state=checked]:text-black"
              />
              <Label htmlFor="enableMultiBanks" className="text-sm cursor-pointer">
                Enable multi-bank analysis & comparison (Beta Version)
              </Label>
            </div>

            {enableMultiBanks ? (
              // Multi-bank selection UI
              <div className="space-y-2">
                <label className="text-sm font-medium mb-1 block text-left">
                  Financial Institutions
                </label>
                <div className="border border-ey-gray-600 bg-ey-black text-white rounded-md p-1">
                  <div className="space-y-1">
                    {banks.map(bank => (
                      <div 
                        key={bank.id}
                        onClick={() => toggleBankSelection(bank.id)}
                        className={`flex items-center justify-between p-3 rounded-md cursor-pointer transition-colors ${
                          isBankSelected(bank.id) ? 'bg-ey-yellow/20 border border-ey-yellow' : 'hover:bg-ey-gray-800'
                        }`}
                      >
                        <span className="text-sm">{bank.name}</span>
                        {isBankSelected(bank.id) && (
                          <Check className="h-4 w-4 text-ey-yellow" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                {selectedBanks.length === 0 && (
                  <p className="text-xs text-ey-yellow mt-1">Please select at least one bank</p>
                )}
              </div>
            ) : (
              // Single bank selection UI
              <div className="text-left">
                <label className="text-sm font-medium mb-1 block">
                  Financial Institution
                </label>
                <Select onValueChange={setSelectedBank} value={selectedBank}>
                  <SelectTrigger className="w-full border-ey-gray-600 bg-ey-black text-white">
                    <SelectValue placeholder="Select a bank" />
                  </SelectTrigger>
                  <SelectContent className="bg-ey-black text-white border-ey-gray-700">
                    {banks.map(bank => (
                      <SelectItem key={bank.id} value={bank.id} className="hover:bg-ey-gray-800">
                        {bank.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
            
            <Button 
              onClick={handleContinue}
              disabled={enableMultiBanks ? selectedBanks.length === 0 : !selectedBank}
              className="w-full bg-ey-yellow hover:bg-ey-yellow/90 text-ey-black font-medium mt-6"
            >
              Continue to Dashboard
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="text-xs text-ey-gray-500">
          <p>© {new Date().getFullYear()} EY | A better working world</p>
        </div>
      </div>
    </div>
  );
};

export default BankSelection;
