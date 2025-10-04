import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { MenuSection } from "@/components/sections/MenuSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Animated Runic Background */}
      <AnimatedBackground />
      
      {/* Main Content */}
      <div className="content-layer">
        <Header />
        <HeroSection />
        <MenuSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}