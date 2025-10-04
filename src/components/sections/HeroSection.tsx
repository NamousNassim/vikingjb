"use client";

import Image from "next/image";
import { Star, Clock, Users } from "lucide-react";

interface HeroSectionProps {
  className?: string;
}

export function HeroSection({ className }: HeroSectionProps) {
  const stats = [
    { icon: Star, value: "5", label: "Rating", gradient: "from-red-600 to-red-700" },
    { icon: Clock, value: "30min", label: "Delivery", gradient: "from-red-500 to-red-600" },
    { icon: Users, value: "2K+", label: "Customers", gradient: "from-red-700 to-red-900" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className={`relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-red-50 to-white ${className || ''}`}>
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 md:mb-12 relative">
            <div className="w-28 h-28 md:w-40 md:h-40 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-400/10 rounded-full blur-3xl animate-pulse"></div>
              <Image
                src="/image.png"
                alt="Viking Bites & Juice Logo"
                width={160}
                height={160}
                className="w-full h-full object-cover rounded-full border-4 border-red-600/30 relative z-10 viking-glow"
                priority
              />
            </div>
          </div>

          {/* Hero Text */}
          <div className="space-y-6 md:space-y-8 mb-12 md:mb-16">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 md:mb-6">
              <span className="runic-text bg-gradient-to-r from-red-600 via-red-800 to-red-600 bg-clip-text text-transparent">
                ᚢᛁᚴᛁᚾᚴ ᛒᛁᛏᛖᛋ
              </span>
            </h1>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
              Authentic Norwegian Cuisine
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Experience the bold flavors of Norway in the heart of Marrakesh. 
              Traditional Scandinavian dishes crafted with the finest ingredients.
            </p>
          </div>

          {/* Stats - Mobile Optimized */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 mb-12 md:mb-16 max-w-2xl mx-auto">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center glass-card p-4 md:p-6 viking-glow">
                  <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 transform hover:scale-110 transition-transform`}>
                    <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-1 md:mb-2">{stat.value}</div>
                  <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* CTA Buttons - Mobile Optimized */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center px-4">
            <button 
              onClick={() => scrollToSection('menu')}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition-all transform hover:scale-105 viking-glow w-full sm:w-auto"
            >
              View Menu
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition-all glass-card w-full sm:w-auto"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}