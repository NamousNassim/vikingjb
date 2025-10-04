"use client";

import Image from "next/image";
import { Star, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";

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
    <section className={`relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-red-50/80 to-white/80 ${className || ''}`}>
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <motion.div 
            className="mb-8 md:mb-12 relative"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="w-28 h-28 md:w-40 md:h-40 mx-auto relative">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-400/10 rounded-full blur-3xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              />
              <Image
                src="/image.png"
                alt="Viking Bites & Juice Logo"
                width={160}
                height={160}
                className="w-full h-full object-cover rounded-full border-4 border-red-600/30 relative z-10 viking-glow"
                priority
              />
            </div>
          </motion.div>

          {/* Hero Text */}
          <motion.div 
            className="space-y-6 md:space-y-8 mb-12 md:mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 md:mb-6"
              animate={{ 
                textShadow: [
                  "0 0 10px rgba(220, 38, 38, 0.3)",
                  "0 0 20px rgba(220, 38, 38, 0.5)",
                  "0 0 10px rgba(220, 38, 38, 0.3)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="runic-text bg-gradient-to-r from-red-600 via-red-800 to-red-600 bg-clip-text text-transparent">
                ᚢᛁᚴᛁᚾᚴ ᛒᛁᛏᛖᛋ
              </span>
            </motion.h1>
            <motion.h2 
              className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Authentic Norwegian Cuisine
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Experience the bold flavors of Norway in the heart of Marrakesh. 
              Traditional Scandinavian dishes crafted with the finest ingredients.
            </motion.p>
          </motion.div>

          {/* Stats - Mobile Optimized with animations */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 mb-12 md:mb-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div 
                  key={index} 
                  className="text-center glass-card p-4 md:p-6 viking-glow"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.8 + (index * 0.1),
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 40px rgba(220, 38, 38, 0.3)"
                  }}
                >
                  <motion.div 
                    className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 transform transition-transform`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </motion.div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-1 md:mb-2">{stat.value}</div>
                  <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA Buttons - Mobile Optimized with animations */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <motion.button 
              onClick={() => scrollToSection('menu')}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition-all transform viking-glow w-full sm:w-auto"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(220, 38, 38, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              View Menu
            </motion.button>
            <motion.button 
              onClick={() => scrollToSection('contact')}
              className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition-all glass-card w-full sm:w-auto"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(220, 38, 38, 1)",
                color: "white"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}