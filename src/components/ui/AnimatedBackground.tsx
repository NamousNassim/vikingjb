"use client";

import { useEffect, useState } from "react";

const RUNES = ["ᚱ", "ᚢ", "ᚦ", "ᚨ", "ᚱ", "ᚲ", "ᚷ", "ᚹ", "ᚺ", "ᚾ", "ᛁ", "ᛃ", "ᛇ", "ᛈ", "ᛉ", "ᛋ", "ᛏ", "ᛒ", "ᛖ", "ᛗ", "ᛚ", "ᛜ", "ᛞ", "ᛟ"];

export function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="runic-background">
      {Array.from({ length: 15 }, (_, i) => (
        <div
          key={i}
          className="floating-rune"
          style={{
            left: `${(i * 6.67) % 100}%`,
            animationDelay: `${i * -1.5}s`,
            animationDuration: `${15 + (i % 10)}s`,
          }}
        >
          {RUNES[i % RUNES.length]}
        </div>
      ))}
    </div>
  );
}