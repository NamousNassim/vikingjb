import Image from "next/image";
import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

export interface MenuItem {
  img: string;
  name: string;
  desc: string;
  price: string;
}

interface MenuCardProps {
  title: string;
  runicTitle: string;
  icon: LucideIcon;
  items: MenuItem[];
  iconGradient: string;
  borderColor: string;
  priceColor: string;
  className?: string;
}

export function MenuCard({ 
  title, 
  runicTitle, 
  icon: Icon, 
  items, 
  iconGradient, 
  borderColor, 
  priceColor,
  className 
}: MenuCardProps) {
  return (
    <Card className={`bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 hover:${borderColor} transition-all duration-300 overflow-hidden group ${className || ''}`}>
      <div className="p-8">
        <div className="text-center mb-8">
          <div className={`w-16 h-16 bg-gradient-to-br ${iconGradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          <h3 className={`runic-text text-2xl font-bold mb-2 ${priceColor}`}>
            {runicTitle}
          </h3>
          <h4 className="text-lg font-semibold text-white">{title}</h4>
        </div>
        
        <div className="space-y-6">
          {items.map((item, index) => (
            <MenuItemCard 
              key={index} 
              item={item} 
              priceColor={priceColor}
            />
          ))}
        </div>
      </div>
    </Card>
  );
}

interface MenuItemCardProps {
  item: MenuItem;
  priceColor: string;
}

function MenuItemCard({ item, priceColor }: MenuItemCardProps) {
  return (
    <Card className="bg-slate-700/30 border border-slate-600/30 p-4 hover:bg-slate-700/50 transition-all group/item">
      <div className="flex gap-4">
        <div className="relative w-20 h-20 rounded-xl overflow-hidden">
          <Image
            src={item.img}
            alt={item.name}
            width={80}
            height={80}
            className="w-full h-full object-cover group-hover/item:scale-110 transition-transform"
          />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start mb-2">
            <h4 className="font-semibold text-white text-sm">{item.name}</h4>
            <span className={`font-bold text-sm ${priceColor}`}>{item.price}</span>
          </div>
          <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
        </div>
      </div>
    </Card>
  );
}