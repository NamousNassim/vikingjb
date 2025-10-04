import { Sword } from "lucide-react";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={`bg-slate-900 border-t border-slate-800 py-12 ${className || ''}`}>
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
              <Sword className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              VIKING BITES & JUICE
            </h2>
          </div>
          
          <p className="text-slate-400 mb-4 max-w-md mx-auto">
            Where Norwegian tradition meets Moroccan hospitality
          </p>
          
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-slate-400 hover:text-red-400 transition-colors">Privacy</a>
            <a href="#" className="text-slate-400 hover:text-red-400 transition-colors">Terms</a>
            <a href="#" className="text-slate-400 hover:text-red-400 transition-colors">Support</a>
          </div>
          
          <p className="text-slate-500 text-sm">
            <span className="runic-text">ᛋᚴᚨᛚ!</span> (Skål! - Cheers!) © 2024 Viking Bites & Juice
          </p>
        </div>
      </div>
    </footer>
  );
}