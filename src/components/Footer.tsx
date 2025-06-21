
const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-400">
              © 2024 mesa. All rights reserved.
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-400">
              Built with passion for gaming ✨
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
