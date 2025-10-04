"use client";

import { Sword } from "lucide-react";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  return (
    <header className={`sticky top-0 z-50 bg-slate-900/95 backdrop-blur-xl border-b border-red-500/20 shadow-xl ${className || ''}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center">
              <Sword className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                VIKING BITES & JUICE
              </h1>
              <p className="text-sm text-slate-400">Marrakesh • Norwegian Cuisine</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#menu" className="text-slate-300 hover:text-red-400 transition-colors">Menu</a>
            <a href="#about" className="text-slate-300 hover:text-red-400 transition-colors">About</a>
            <a href="#contact" className="text-slate-300 hover:text-red-400 transition-colors">Contact</a>
            <button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-2 rounded-full transition-all transform hover:scale-105">
              Order Now
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}