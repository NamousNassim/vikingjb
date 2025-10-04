import Image from "next/image";
import { Star, Clock, Users } from "lucide-react";

interface HeroSectionProps {
  className?: string;
}

export function HeroSection({ className }: HeroSectionProps) {
  const stats = [
    { icon: Star, value: "4.8", label: "Rating", gradient: "from-red-500 to-red-600" },
    { icon: Clock, value: "30min", label: "Delivery", gradient: "from-orange-500 to-red-500" },
    { icon: Users, value: "2K+", label: "Customers", gradient: "from-red-600 to-orange-500" }
  ];

  return (
    <section className={`relative py-20 overflow-hidden ${className || ''}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 text-8xl runic-text">ᚱ</div>
        <div className="absolute top-1/3 right-1/4 text-6xl runic-text">ᚢ</div>
        <div className="absolute bottom-1/3 left-1/3 text-7xl runic-text">ᚾ</div>
        <div className="absolute bottom-1/4 right-1/3 text-8xl runic-text">ᛖ</div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 relative">
            <div className="w-32 h-32 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full blur-2xl"></div>
              <Image
                src="/image.png"
                alt="Viking Bites & Juice Logo"
                width={128}
                height={128}
                className="w-full h-full object-cover rounded-full border-4 border-red-500/50 relative z-10"
                priority
              />
            </div>
          </div>

          {/* Hero Text */}
          <div className="space-y-6 mb-12">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="runic-text bg-gradient-to-r from-red-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                ᚢᛁᚴᛁᚾᚴ ᛒᛁᛏᛖᛋ
              </span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Authentic Norwegian Cuisine
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Experience the bold flavors of Norway in the heart of Marrakesh. 
              Traditional Scandinavian dishes crafted with the finest ingredients.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mb-12">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-3`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg">
              View Menu
            </button>
            <button className="border-2 border-red-500 text-red-400 hover:bg-red-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}