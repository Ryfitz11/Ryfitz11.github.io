import { Code2 } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900/80 backdrop-blur-sm py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Code2 className="h-6 w-6 text-indigo-400" />
            <span className="text-lg font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              BlockDev
            </span>
          </div>
          
          <div className="text-gray-500 text-sm">
            &copy; {currentYear} | Built with React & TailwindCSS
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;