import { LucideIcon } from "lucide-react";

export interface MenuItem {
  img: string;
  name: string;
  desc: string;
  price: string;
}

export interface StatItem {
  icon: LucideIcon;
  value: string;
  label: string;
  gradient: string;
}

export interface ContactItem {
  icon: LucideIcon;
  title: string;
  content: string[];
  gradient: string;
  borderColor: string;
}

export interface MenuCategory {
  title: string;
  runicTitle: string;
  icon: LucideIcon;
  items: MenuItem[];
  iconGradient: string;
  borderColor: string;
  priceColor: string;
}

// New menu categories
export type MenuCategoryName = 
  | 'asgard-garden'
  | 'valkyrie-elixirs' 
  | 'norn-smoothies'
  | 'other-drinks'
  | 'viking-bites'
  | 'little-vikings'
  | 'viking-planks'
  | 'shield-wraps'
  | 'valhalla-burgers';

export interface RestaurantInfo {
  name: string;
  location: {
    address: string;
    country: string;
  };
  contact: {
    phone: string;
    international: string;
    email: string;
  };
  tagline: string;
}