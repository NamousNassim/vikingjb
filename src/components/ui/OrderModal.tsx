"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, MessageCircle, Shield, Crown } from "lucide-react";
import Image from "next/image";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MODAL_RUNES = [
  { symbol: "ᚠ", name: "Fehu" },
  { symbol: "ᚢ", name: "Uruz" },
  { symbol: "ᚦ", name: "Thurisaz" },
  { symbol: "ᚨ", name: "Ansuz" },
  { symbol: "ᚱ", name: "Raidho" },
  { symbol: "ᚲ", name: "Kenaz" },
  { symbol: "ᚷ", name: "Gebo" },
  { symbol: "ᚹ", name: "Wunjo" },
  { symbol: "ᚺ", name: "Hagalaz" },
  { symbol: "ᚾ", name: "Nauthiz" },
  { symbol: "ᛁ", name: "Isa" },
  { symbol: "ᛃ", name: "Jera" }
];

export function OrderModal({ isOpen, onClose }: OrderModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  const handleCall = () => {
    window.location.href = 'tel:+212780088000';
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hail! I'd like to order from Viking Bites & Juice. What feast do you recommend today? ⚔️🍽️");
    window.open(`https://wa.me/212780088000?text=${message}`, '_blank');
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
        >
          {/* Enhanced Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Floating Runes in Background - Reduced for performance */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {MODAL_RUNES.slice(0, 6).map((rune, i) => (
              <motion.div
                key={`bg-rune-${i}`}
                className="absolute text-red-600/4 text-4xl sm:text-6xl select-none"
                style={{
                  fontFamily: 'var(--font-runic)',
                  left: `${10 + i * 15}%`,
                  top: `${10 + (i % 2) * 40}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 180],
                  opacity: [0.02, 0.06, 0.02],
                }}
                transition={{
                  duration: 8 + i,
                  delay: i * 0.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {rune.symbol}
              </motion.div>
            ))}
          </div>

          {/* Modal Content - Fixed sizing */}
          <motion.div
            className="relative w-full max-w-sm mx-auto bg-gradient-to-br from-red-50 via-white to-red-50/80 rounded-2xl shadow-2xl border-2 border-red-200 overflow-hidden max-h-[90vh] flex flex-col"
            initial={{ opacity: 0, scale: 0.3, rotateY: -90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.3, rotateY: 90 }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20,
              duration: 0.8
            }}
          >
            {/* Floating Runes Inside Modal - Reduced */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {Array.from({ length: 4 }, (_, i) => (
                <motion.div
                  key={`modal-rune-${i}`}
                  className="absolute text-red-600/6 text-xl select-none"
                  style={{
                    fontFamily: 'var(--font-runic)',
                    left: `${20 + i * 20}%`,
                    top: `${20 + (i % 2) * 30}%`,
                  }}
                  animate={{
                    rotate: [0, 360],
                    opacity: [0.04, 0.1, 0.04],
                  }}
                  transition={{
                    duration: 6 + i * 2,
                    delay: i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {MODAL_RUNES[i].symbol}
                </motion.div>
              ))}
            </div>

            {/* Header - Compact */}
            <div className="relative bg-gradient-to-r from-red-600 to-red-800 p-4 text-center overflow-hidden flex-shrink-0">
              {/* Header Background Pattern */}
              <div className="absolute inset-0 opacity-8">
                <div 
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `radial-gradient(circle at 20px 20px, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                  }}
                ></div>
              </div>

              <button
                onClick={onClose}
                className="absolute top-2 right-2 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors group z-10"
                aria-label="Close modal"
              >
                <X className="w-4 h-4 text-white group-hover:rotate-90 transition-transform" />
              </button>

              {/* Compact Logo */}
              <motion.div
                className="relative w-12 h-12 mx-auto mb-3"
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              >
                <motion.div 
                  className="absolute inset-0 bg-white/20 rounded-full blur-lg"
                  animate={{
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <div className="relative w-full h-full bg-white/20 rounded-full border-2 border-white/30 p-1">
                  <Image
                    src="/image.png"
                    alt="Viking Bites & Juice Logo"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover rounded-full"
                    priority
                  />
                </div>
              </motion.div>

              <motion.h2 
                className="text-lg font-bold text-white mb-1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="runic-text">ᛟᚱᛞᛖᚱ</span>
              </motion.h2>
              <motion.h3 
                className="text-sm font-semibold text-white/90 mb-1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Order Your Feast
              </motion.h3>
              <motion.p 
                className="text-red-100 text-xs"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Choose your path, warrior!
              </motion.p>
            </div>

            {/* Content - Scrollable if needed */}
            <div className="relative p-4 flex-1 overflow-y-auto">
              <motion.div 
                className="text-center mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  Ready to embark on a culinary journey to Valhalla? 
                  Contact our Viking warriors!
                </p>
                <div className="w-12 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto rounded-full"></div>
              </motion.div>

              {/* Order Options - Compact */}
              <motion.div 
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                {/* Phone Option - Compact */}
                <motion.button
                  onClick={handleCall}
                  className="w-full group relative overflow-hidden bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white p-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left flex-1 min-w-0">
                      <h4 className="font-bold text-sm mb-0.5">Call Our Hall</h4>
                      <p className="text-white/90 text-xs">+212 780-088000</p>
                      <p className="text-white/70 text-xs">Direct contact</p>
                    </div>
                    <Shield className="w-4 h-4 text-white/50 group-hover:text-white/80 transition-colors flex-shrink-0" />
                  </div>
                </motion.button>

                {/* WhatsApp Option - Compact */}
                <motion.button
                  onClick={handleWhatsApp}
                  className="w-full group relative overflow-hidden bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white p-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left flex-1 min-w-0">
                      <h4 className="font-bold text-sm mb-0.5">WhatsApp Order</h4>
                      <p className="text-white/90 text-xs">Quick & Easy</p>
                      <p className="text-white/70 text-xs">Send ravens</p>
                    </div>
                    <Crown className="w-4 h-4 text-white/50 group-hover:text-white/80 transition-colors flex-shrink-0" />
                  </div>
                </motion.button>
              </motion.div>

              {/* Footer Message - Compact */}
              <motion.div 
                className="mt-4 text-center"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
              >
                <div className="bg-gradient-to-r from-red-100 to-red-50 rounded-lg p-3 border border-red-200 relative overflow-hidden">
                  {/* Subtle pattern overlay */}
                  <div className="absolute inset-0 opacity-4">
                    <div 
                      className="w-full h-full"
                      style={{
                        backgroundImage: `radial-gradient(circle at 15px 15px, rgba(220,38,38,0.1) 1px, transparent 1px)`,
                        backgroundSize: '30px 30px'
                      }}
                    ></div>
                  </div>
                  
                  <motion.p 
                    className="text-red-700 text-xs font-medium mb-1 relative"
                    animate={{
                      textShadow: [
                        "0 0 3px rgba(220, 38, 38, 0.3)",
                        "0 0 6px rgba(220, 38, 38, 0.5)",
                        "0 0 3px rgba(220, 38, 38, 0.3)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="runic-text">ᛋᚴᚨᛚ!</span> (Skål!)
                  </motion.p>
                  <p className="text-red-600 text-xs relative leading-relaxed">
                    Our Viking chefs are ready to prepare your legendary feast!
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}