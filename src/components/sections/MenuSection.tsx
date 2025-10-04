import { Utensils, Zap, Crown, Leaf, Sandwich, Coffee, Shield, Beef } from "lucide-react";
import { MenuCard, MenuItem } from "../ui/MenuCard";

interface MenuSectionProps {
  className?: string;
}

export function MenuSection({ className }: MenuSectionProps) {
 // Asgard Garden - Salads (7 items)
const asgardGardenItems: MenuItem[] = [
  { img: "/food.jpg", name: "Odin's Wisdom Salad", desc: "Mixed greens with Nordic herbs and seeds", price: "85 MAD" },
  { img: "/food.jpg", name: "Thor's Power Bowl", desc: "Quinoa, kale, and lightning vegetables", price: "95 MAD" },
  { img: "/food.jpg", name: "Freya's Garden Delight", desc: "Fresh seasonal vegetables with goddess dressing", price: "90 MAD" },
  { img: "/food.jpg", name: "Loki's Mischief Mix", desc: "Surprising combination of fruits and greens", price: "88 MAD" },
  { img: "/food.jpg", name: "Balder's Light Salad", desc: "Bright citrus and leafy greens", price: "82 MAD" },
  { img: "/food.jpg", name: "Heimdall's Guardian Bowl", desc: "Protective antioxidant-rich salad", price: "92 MAD" },
  { img: "/food.jpg", name: "Frigg's Motherly Care", desc: "Nourishing salad with ancient grains", price: "87 MAD" }
];

// Valkyrie's Elixirs - Special Drinks (10 items)
const valkyrieElixirItems: MenuItem[] = [
  { img: "/food.jpg", name: "Valkyrie's Wings", desc: "Energizing herbal blend with berries", price: "65 MAD" },
  { img: "/food.jpg", name: "Warrior's Strength", desc: "Protein-packed battle fuel", price: "70 MAD" },
  { img: "/food.jpg", name: "Divine Recovery", desc: "Healing potion with superfoods", price: "68 MAD" },
  { img: "/food.jpg", name: "Thunder Strike", desc: "Lightning-fast energy boost", price: "72 MAD" },
  { img: "/food.jpg", name: "Asgard's Nectar", desc: "Heavenly fruit combination", price: "75 MAD" },
  { img: "/food.jpg", name: "Battle Fury", desc: "Intense pre-workout elixir", price: "78 MAD" },
  { img: "/food.jpg", name: "Mystic Mead", desc: "Ancient honey-based elixir", price: "80 MAD" },
  { img: "/food.jpg", name: "Raven's Flight", desc: "Dark berry warrior blend", price: "73 MAD" },
  { img: "/food.jpg", name: "Golden Horn", desc: "Turmeric and ginger power drink", price: "67 MAD" },
  { img: "/food.jpg", name: "Valhalla's Glory", desc: "Ultimate champion's elixir", price: "85 MAD" }
];

// Norn Smoothies (6 items)
const nornSmoothieItems: MenuItem[] = [
  { img: "/food.jpg", name: "Past Memories", desc: "Nostalgic berry and vanilla blend", price: "55 MAD" },
  { img: "/food.jpg", name: "Present Moment", desc: "Fresh tropical fruits of today", price: "58 MAD" },
  { img: "/food.jpg", name: "Future Vision", desc: "Innovative superfood combination", price: "62 MAD" },
  { img: "/food.jpg", name: "Fate's Choice", desc: "Destiny-defining green smoothie", price: "60 MAD" },
  { img: "/food.jpg", name: "Thread of Life", desc: "Life-sustaining protein smoothie", price: "65 MAD" },
  { img: "/food.jpg", name: "Wyrd's Web", desc: "Mysterious dark fruit blend", price: "63 MAD" }
];

// Other Drinks (4 items)
const otherDrinkItems: MenuItem[] = [
  { img: "/food.jpg", name: "Midgard Coffee", desc: "Strong Nordic roast coffee", price: "35 MAD" },
  { img: "/food.jpg", name: "Jotun Ice Tea", desc: "Refreshing giant-sized iced tea", price: "30 MAD" },
  { img: "/food.jpg", name: "Alfheim Lemonade", desc: "Light elf's magical lemonade", price: "32 MAD" },
  { img: "/food.jpg", name: "Bifrost Sparkle", desc: "Rainbow bridge sparkling water", price: "28 MAD" }
];

// Viking Bites (7 items)
const vikingBiteItems: MenuItem[] = [
  { img: "/food.jpg", name: "Mjölnir's Thunder Feast", desc: "Traditional Viking warrior meal", price: "280 MAD" },
  { img: "/food.jpg", name: "Berserker's Rage", desc: "Spicy warrior's meat platter", price: "295 MAD" },
  { img: "/food.jpg", name: "Longship Salmon", desc: "Nordic-style grilled salmon", price: "320 MAD" },
  { img: "/food.jpg", name: "Raven's Feast", desc: "Dark meat with ancient spices", price: "275 MAD" },
  { img: "/food.jpg", name: "Shield Maiden's Choice", desc: "Balanced warrior meal", price: "285 MAD" },
  { img: "/food.jpg", name: "Jarl's Privilege", desc: "Noble's premium meat selection", price: "350 MAD" },
  { img: "/food.jpg", name: "Skald's Story", desc: "Storyteller's mixed grill", price: "290 MAD" }
];

// Little Vikings (2 items)
const littleVikingItems: MenuItem[] = [
  { img: "/food.jpg", name: "Young Warrior's Meal", desc: "Kid-friendly Viking portions", price: "120 MAD" },
  { img: "/food.jpg", name: "Little Berserker's Bites", desc: "Mini Viking feast for children", price: "110 MAD" }
];

// Viking Planks (5 items)
const vikingPlankItems: MenuItem[] = [
  { img: "/food.jpg", name: "Longboat Plank", desc: "Shared feast for the crew", price: "450 MAD" },
  { img: "/food.jpg", name: "Valhalla's Table", desc: "Epic sharing platter", price: "520 MAD" },
  { img: "/food.jpg", name: "Raid Party Board", desc: "Perfect for group dining", price: "480 MAD" },
  { img: "/food.jpg", name: "Chief's Plank", desc: "Leader's grand sharing board", price: "580 MAD" },
  { img: "/food.jpg", name: "Mead Hall Feast", desc: "Traditional Viking banquet plank", price: "650 MAD" }
];

// Shield Wraps (5 items)
const shieldWrapItems: MenuItem[] = [
  { img: "/food.jpg", name: "Defender's Wrap", desc: "Protective layers of flavor", price: "85 MAD" },
  { img: "/food.jpg", name: "Battle Shield", desc: "Fortified wrap with strength", price: "90 MAD" },
  { img: "/food.jpg", name: "Guardian's Choice", desc: "Watchman's hearty wrap", price: "88 MAD" },
  { img: "/food.jpg", name: "Round Shield Special", desc: "Classic circular wrap", price: "82 MAD" },
  { img: "/food.jpg", name: "Tower Shield Supreme", desc: "Ultimate protection wrap", price: "95 MAD" }
];

// Valhalla Burgers (2 items)
const valhallaBurgerItems: MenuItem[] = [
  { img: "/food.jpg", name: "Einherjar's Burger", desc: "Chosen warrior's epic burger", price: "150 MAD" },
  { img: "/food.jpg", name: "All-Father's Supreme", desc: "Odin's ultimate burger creation", price: "165 MAD" }
];

  return (
    <section id="menu" className={`py-20 bg-gradient-to-b from-transparent to-slate-900/50 ${className || ''}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="runic-text text-red-400">ᛗᛖᚾᚢ</span>
          </h2>
          <h3 className="text-2xl font-semibold text-slate-300 mb-6">Our Viking Feast</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full"></div>
        </div>
        
        {/* First Row - Salads, Elixirs, Smoothies */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          <MenuCard
            title="Asgard Garden"
            runicTitle="ᚨᛋᚷᚨᚱᛞ ᚷᚨᚱᛞᛖᚾ"
            icon={Leaf}
            items={asgardGardenItems}
            iconGradient="from-green-500 to-emerald-600"
            borderColor="border-green-500/50"
            priceColor="text-green-400"
          />
          
          <MenuCard
            title="Valkyrie's Elixirs"
            runicTitle="ᚢᚨᛚᚴᛁᚱᛃᛖᛋ ᛖᛚᛁᚲᛋᛁᚱᛋ"
            icon={Zap}
            items={valkyrieElixirItems}
            iconGradient="from-purple-500 to-pink-500"
            borderColor="border-purple-500/50"
            priceColor="text-purple-400"
          />
          
          <MenuCard
            title="Norn Smoothies"
            runicTitle="ᚾᛟᚱᚾ ᛋᛗᛟᛟᚦᛁᛖᛋ"
            icon={Coffee}
            items={nornSmoothieItems}
            iconGradient="from-blue-500 to-cyan-500"
            borderColor="border-blue-500/50"
            priceColor="text-blue-400"
          />
        </div>

        {/* Second Row - Other Drinks, Viking Bites, Little Vikings */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          <MenuCard
            title="Other Drinks"
            runicTitle="ᛟᚦᛖᚱ ᛞᚱᛁᚾᚴᛋ"
            icon={Coffee}
            items={otherDrinkItems}
            iconGradient="from-amber-500 to-orange-500"
            borderColor="border-amber-500/50"
            priceColor="text-amber-400"
          />
          
          <MenuCard
            title="Viking Bites"
            runicTitle="ᚢᛁᚴᛁᚾᚴ ᛒᛁᛏᛖᛋ"
            icon={Utensils}
            items={vikingBiteItems}
            iconGradient="from-red-500 to-red-600"
            borderColor="border-red-500/50"
            priceColor="text-red-400"
          />
          
          <MenuCard
            title="Little Vikings"
            runicTitle="ᛚᛁᛏᛏᛚᛖ ᚢᛁᚴᛁᚾᚷᛋ"
            icon={Crown}
            items={littleVikingItems}
            iconGradient="from-yellow-400 to-orange-400"
            borderColor="border-yellow-500/50"
            priceColor="text-yellow-400"
          />
        </div>

        {/* Third Row - Viking Planks, Shield Wraps, Valhalla Burgers */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <MenuCard
            title="Viking Planks"
            runicTitle="ᚢᛁᚴᛁᚾᚴ ᛈᛚᚨᚾᚴᛋ"
            icon={Sandwich}
            items={vikingPlankItems}
            iconGradient="from-orange-600 to-red-500"
            borderColor="border-orange-500/50"
            priceColor="text-orange-400"
          />
          
          <MenuCard
            title="Shield Wraps"
            runicTitle="ᛋᚺᛁᛖᛚᛞ ᚹᚱᚨᛈᛋ"
            icon={Shield}
            items={shieldWrapItems}
            iconGradient="from-slate-500 to-slate-700"
            borderColor="border-slate-500/50"
            priceColor="text-slate-300"
          />
          
          <MenuCard
            title="Valhalla Burgers"
            runicTitle="ᚢᚨᛚᚺᚨᛚᛚᚨ ᛒᚢᚱᚷᛖᚱᛋ"
            icon={Beef}
            items={valhallaBurgerItems}
            iconGradient="from-red-600 to-red-800"
            borderColor="border-red-600/50"
            priceColor="text-red-500"
          />
        </div>
      </div>
    </section>
  );
}