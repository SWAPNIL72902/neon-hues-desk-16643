const Footer = () => {
  return (
    <footer className="py-8 bg-foreground/5 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Swapnil Pahari. Built with passion and code.
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            Final Year @ BITS Pilani | Program Manager | Backend Developer
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
