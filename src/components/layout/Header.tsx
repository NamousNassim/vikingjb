"use client";

import { Sword } from "lucide-react";
import { useEffect, useState } from "react";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 shadow-xl ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl border-b border-red-600/20' 
        : 'bg-transparent border-b border-transparent'
    } ${className || ''}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center viking-glow">
              <Sword className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-red-600 via-red-800 to-red-600 bg-clip-text text-transparent">
                VIKING BITES & JUICE
              </h1>
              <p className={`text-sm transition-colors duration-300 ${
                isScrolled ? 'text-gray-600' : 'text-gray-300'
              }`}>
                Marrakesh • Norwegian Cuisine
              </p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#menu" className={`transition-colors font-medium ${
              isScrolled 
                ? 'text-gray-700 hover:text-red-600' 
                : 'text-white hover:text-red-400'
            }`}>
              Menu
            </a>
            <a href="#about" className={`transition-colors font-medium ${
              isScrolled 
                ? 'text-gray-700 hover:text-red-600' 
                : 'text-white hover:text-red-400'
            }`}>
              About
            </a>
            <a href="#contact" className={`transition-colors font-medium ${
              isScrolled 
                ? 'text-gray-700 hover:text-red-600' 
                : 'text-white hover:text-red-400'
            }`}>
              Contact
            </a>
            <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-2 rounded-full transition-all transform hover:scale-105 viking-glow">
              Order Now
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}