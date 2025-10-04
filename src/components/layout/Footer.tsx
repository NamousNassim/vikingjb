import { Sword } from "lucide-react";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={`bg-gradient-to-b from-red-50 to-red-100 border-t border-red-200 py-12 ${className || ''}`}>
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center viking-glow">
              <Sword className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-red-600 via-red-800 to-red-600 bg-clip-text text-transparent">
              VIKING BITES & JUICE
            </h2>
          </div>
          
          <p className="text-gray-600 mb-4 max-w-md mx-auto">
            Where Norwegian tradition meets Moroccan hospitality
          </p>
          
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-gray-500 hover:text-red-600 transition-colors">Privacy</a>
            <a href="#" className="text-gray-500 hover:text-red-600 transition-colors">Terms</a>
            <a href="#" className="text-gray-500 hover:text-red-600 transition-colors">Support</a>
          </div>
          
          <p className="text-gray-500 text-sm">
            <span className="runic-text text-red-600">ᛋᚴᚨᛚ!</span> (Skål! - Cheers!) © 2024 Viking Bites & Juice
          </p>
        </div>
      </div>
    </footer>
  );
}