
const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t mt-auto py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center text-sm text-muted-foreground">
          <div>AiDEx - AI powered Data Extraction</div>
          <div>© {new Date().getFullYear()} Barclays Financial Services</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
