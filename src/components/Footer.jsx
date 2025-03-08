import { Facebook, Twitter, CircleDashed } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full border-t py-4 bg-gray-50 px-6 flex flex-col md:flex-row justify-between items-center">
      {/* Left Section - Logo & Copyright */}
      <div className="flex items-center gap-3">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-blue-500 rotate-45"></div>
          <div className="w-4 h-4 bg-purple-600 -ml-2 rotate-45"></div>
        </div>
        <span className="text-lg font-bold text-gray-800">bg.removal</span>
        <span className="text-gray-500 text-sm">
          | Copyright @GreatStack.dev | All rights reserved.
        </span>
      </div>

      {/* Right Section - Social Icons */}
      <div className="flex gap-3 mt-3 md:mt-0">
        <button className="w-9 h-9 rounded-full flex items-center justify-center bg-white shadow hover:shadow-lg transition">
          <Facebook size={16} className="text-gray-700" />
        </button>
        <button className="w-9 h-9 rounded-full flex items-center justify-center bg-white shadow hover:shadow-lg transition">
          <Twitter size={16} className="text-gray-700" />
        </button>
        <button className="w-9 h-9 rounded-full flex items-center justify-center bg-white shadow hover:shadow-lg transition">
          <CircleDashed size={16} className="text-gray-700" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
