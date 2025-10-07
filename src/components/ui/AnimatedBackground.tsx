"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Extended Viking runes with their meanings
const VIKING_RUNES = [
  { symbol: "ᚠ", name: "Fehu", meaning: "wealth" },
  { symbol: "ᚢ", name: "Uruz", meaning: "strength" },
  { symbol: "ᚦ", name: "Thurisaz", meaning: "giant" },
  { symbol: "ᚨ", name: "Ansuz", meaning: "god" },
  { symbol: "ᚱ", name: "Raidho", meaning: "journey" },
  { symbol: "ᚲ", name: "Kenaz", meaning: "torch" },
  { symbol: "ᚷ", name: "Gebo", meaning: "gift" },
  { symbol: "ᚹ", name: "Wunjo", meaning: "joy" },
  { symbol: "ᚺ", name: "Hagalaz", meaning: "hail" },
  { symbol: "ᚾ", name: "Nauthiz", meaning: "need" },
  { symbol: "ᛁ", name: "Isa", meaning: "ice" },
  { symbol: "ᛃ", name: "Jera", meaning: "year" },
  { symbol: "ᛇ", name: "Eihwaz", meaning: "yew" },
  { symbol: "ᛈ", name: "Perthro", meaning: "lot cup" },
  { symbol: "ᛉ", name: "Algiz", meaning: "elk" },
  { symbol: "ᛋ", name: "Sowilo", meaning: "sun" },
  { symbol: "ᛏ", name: "Tiwaz", meaning: "god Tyr" },
  { symbol: "ᛒ", name: "Berkano", meaning: "birch" },
  { symbol: "ᛖ", name: "Ehwaz", meaning: "horse" },
  { symbol: "ᛗ", name: "Mannaz", meaning: "man" },
  { symbol: "ᛚ", name: "Laguz", meaning: "lake" },
  { symbol: "ᛜ", name: "Ingwaz", meaning: "Ing" },
  { symbol: "ᛞ", name: "Dagaz", meaning: "day" },
  { symbol: "ᛟ", name: "Othala", meaning: "heritage" }
] as const;

// Create a type for any rune from the array
type VikingrRune = typeof VIKING_RUNES[number];

interface FloatingRune {
  id: number;
  rune: VikingrRune;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  rotation: number;
  opacity: number;
}

export function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);
  const [runes, setRunes] = useState<FloatingRune[]>([]);
  const [windowHeight, setWindowHeight] = useState(1000);

  const generateRunes = useCallback(() => {
    const newRunes: FloatingRune[] = [];
    for (let i = 0; i < 25; i++) {
      newRunes.push({
        id: i,
        rune: VIKING_RUNES[Math.floor(Math.random() * VIKING_RUNES.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 60 + 40,
        duration: Math.random() * 20 + 15,
        delay: Math.random() * -30,
        rotation: Math.random() * 360,
        opacity: Math.random() * 0.15 + 0.05,
      });
    }
    setRunes(newRunes);
  }, []);

  const updateWindowHeight = useCallback(() => {
    if (typeof window !== 'undefined') {
      setWindowHeight(window.innerHeight);
    }
  }, []);

  useEffect(() => {
    setMounted(true);
    updateWindowHeight();
    
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', updateWindowHeight);
    }
    
    generateRunes();
    
    const interval = setInterval(generateRunes, 45000);
    
    return () => {
      clearInterval(interval);
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', updateWindowHeight);
      }
    };
  }, [updateWindowHeight, generateRunes]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating Runes */}
      <AnimatePresence mode="wait">
        {runes.map((runeObj) => (
          <motion.div
            key={`rune-${runeObj.id}`}
            className="absolute select-none"
            style={{
              left: `${runeObj.x}%`,
              top: `${runeObj.y}%`,
              fontSize: `${runeObj.size}px`,
              opacity: runeObj.opacity,
              color: '#dc2626',
              fontFamily: 'var(--font-runic)',
              textShadow: '0 0 20px rgba(220, 38, 38, 0.3)',
            }}
            animate={{
              y: [0, -100, -200, -300],
              x: [0, Math.sin(runeObj.id) * 50, Math.cos(runeObj.id) * 30, 0],
              rotate: [runeObj.rotation, runeObj.rotation + 360],
              scale: [0.8, 1, 1.2, 0.8],
              opacity: [0, runeObj.opacity, runeObj.opacity, 0],
            }}
            transition={{
              duration: runeObj.duration,
              delay: runeObj.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {runeObj.rune.symbol}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Mystical Particles */}
      <div className="absolute inset-0">
        {mounted && Array.from({ length: 30 }, (_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-red-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -(windowHeight + 100)],
              opacity: [0, 0.6, 0.6, 0],
              scale: [0, 1, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 8,
              delay: Math.random() * -20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Ambient Glow Effects */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle, rgba(220, 38, 38, 0.05) 0%, transparent 70%)"
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Runic Circle Patterns */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative"
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        >
          {mounted && Array.from({ length: 8 }, (_, i) => (
            <motion.div
              key={`circle-rune-${i}`}
              className="absolute text-6xl text-red-600/10 select-none"
              style={{
                fontFamily: 'var(--font-runic)',
                transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-300px)`,
                left: '50%',
                top: '50%',
              }}
              animate={{
                scale: [0.8, 1.2, 0.8],
                opacity: [0.05, 0.15, 0.05],
              }}
              transition={{
                duration: 4,
                delay: i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {VIKING_RUNES[i % VIKING_RUNES.length].symbol}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightning Effects */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, transparent, rgba(220, 38, 38, 0.05), transparent)"
        }}
        animate={{
          opacity: [0, 0, 0, 0.8, 0],
          scaleX: [0, 0, 0, 1, 0],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatDelay: 15,
          ease: "easeOut",
        }}
      />
    </div>
  );
}