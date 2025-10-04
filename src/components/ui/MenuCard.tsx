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
    <Card className={`glass-card hover:${borderColor} transition-all duration-500 overflow-hidden group viking-glow ${className || ''}`}>
      <div className="p-8">
        <div className="text-center mb-8">
          <div className={`w-18 h-18 bg-gradient-to-br ${iconGradient} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="w-10 h-10 text-white" />
          </div>
          <h3 className={`runic-text text-3xl font-bold mb-3 ${priceColor}`}>
            {runicTitle}
          </h3>
          <h4 className="text-xl font-semibold text-gray-800">{title}</h4>
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
    <Card className="bg-white/80 border border-gray-200 p-4 hover:bg-white/90 hover:shadow-md transition-all duration-300 group/item">
      <div className="flex gap-4">
        <div className="relative w-24 h-24 rounded-xl overflow-hidden border-2 border-gray-200">
          <Image
            src={item.img}
            alt={item.name}
            width={96}
            height={96}
            className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start mb-2">
            <h4 className="font-semibold text-gray-800 text-base leading-tight">{item.name}</h4>
            <span className={`font-bold text-base ${priceColor} ml-3`}>{item.price}</span>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
        </div>
      </div>
    </Card>
  );
}