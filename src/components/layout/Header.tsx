"use client";

import { Sword } from "lucide-react";
import { useEffect, useState } from "react";
import { OrderModal } from "@/components/ui/OrderModal";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-300 shadow-xl ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl border-b border-red-600/20' 
          : 'bg-transparent border-b border-transparent'
      } ${className || ''}`}>
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center viking-glow">
                <Sword className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-red-600 via-red-800 to-red-600 bg-clip-text text-transparent">
                  VIKING BITES & JUICE
                </h1>
                <p className={`text-xs sm:text-sm transition-colors duration-300 ${
                  isScrolled ? 'text-gray-600' : 'text-gray-300'
                }`}>
                  Marrakesh • Norwegian Cuisine
                </p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <button
                onClick={() => scrollToSection('menu')}
                className={`transition-colors font-medium ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-red-600' 
                    : 'text-white hover:text-red-400'
                }`}
              >
                Menu
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`transition-colors font-medium ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-red-600' 
                    : 'text-white hover:text-red-400'
                }`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`transition-colors font-medium ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-red-600' 
                    : 'text-white hover:text-red-400'
                }`}
              >
                Contact
              </button>
              <button 
                onClick={() => setIsOrderModalOpen(true)}
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-4 lg:px-6 py-2 rounded-full transition-all transform hover:scale-105 viking-glow text-sm lg:text-base"
              >
                Order Now
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <button 
                onClick={() => setIsOrderModalOpen(true)}
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-3 py-1.5 rounded-full transition-all transform hover:scale-105 viking-glow text-sm"
              >
                Order
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-lg transition-colors ${
                  isScrolled 
                    ? 'text-gray-700 hover:bg-gray-100' 
                    : 'text-white hover:bg-white/10'
                }`}
                aria-label="Toggle mobile menu"
              >
                <div className="w-5 h-5 flex flex-col justify-center space-y-1">
                  <span className={`block h-0.5 w-5 bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                  }`}></span>
                  <span className={`block h-0.5 w-5 bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : ''
                  }`}></span>
                  <span className={`block h-0.5 w-5 bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                  }`}></span>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className={`md:hidden mt-4 py-4 border-t transition-colors ${
              isScrolled ? 'border-gray-200' : 'border-white/20'
            }`}>
              <nav className="flex flex-col space-y-3">
                <button
                  onClick={() => scrollToSection('menu')}
                  className={`text-left py-2 transition-colors font-medium ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-red-600' 
                      : 'text-white hover:text-red-400'
                  }`}
                >
                  Menu
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className={`text-left py-2 transition-colors font-medium ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-red-600' 
                      : 'text-white hover:text-red-400'
                  }`}
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className={`text-left py-2 transition-colors font-medium ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-red-600' 
                      : 'text-white hover:text-red-400'
                  }`}
                >
                  Contact
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Order Modal */}
      <OrderModal 
        isOpen={isOrderModalOpen} 
        onClose={() => setIsOrderModalOpen(false)} 
      />
    </>
  );
}