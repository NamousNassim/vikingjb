import { MenuItem } from "@/components/ui/MenuCard";
import { LucideIcon } from "lucide-react";
import { 
  Leaf, 
  Zap, 
  Coffee, 
  Utensils, 
  Crown, 
  Sandwich, 
  Shield, 
  Beef 
} from "lucide-react";

export interface MenuCategory {
  id: string;
  title: string;
  runicTitle: string;
  icon: LucideIcon;
  items: MenuItem[];
  color: string;
  gradient: string;
}

// Icon mapping
const iconMap = {
  "Leaf": Leaf,
  "Zap": Zap,
  "Coffee": Coffee,
  "Utensils": Utensils,
  "Crown": Crown,
  "Sandwich": Sandwich,
  "Shield": Shield,
  "Beef": Beef
};

export async function loadMenuData(): Promise<MenuCategory[]> {
  try {
    // Load the menu data from the single JSON file
    const response = await fetch('/data/menu.json');
    if (!response.ok) {
      throw new Error(`Failed to fetch menu data: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Transform the data to include proper icon components
    const categories = data.categories.map((category: any) => ({
      id: category.id,
      title: category.title,
      runicTitle: category.runicTitle,
      icon: iconMap[category.icon as keyof typeof iconMap],
      items: category.items,
      color: category.color,
      gradient: category.gradient
    }));
    
    return categories;
  } catch (error) {
    console.error('Failed to load menu data:', error);
    
    // Return empty array or fallback data
    return [];
  }
}

// Static fallback data in case JSON loading fails
export function getStaticMenuData(): MenuCategory[] {
  return [
    {
      id: "salads",
      title: "Asgard Garden",
      runicTitle: "ᚨᛋᚷᚨᚱᛞ ᚷᚨᚱᛞᛖᚾ",
      icon: Leaf,
      items: [],
      color: "emerald",
      gradient: "from-emerald-600 to-green-700"
    }
    // Add other categories as fallback if needed
  ];
}