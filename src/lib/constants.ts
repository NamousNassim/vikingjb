import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const RESTAURANT_INFO = {
  name: "Viking Bites & Juice",
  location: {
    address: "Izdihar, Marrakesh",
    country: "Morocco"
  },
  contact: {
    phone: "0780-088000",
    international: "+212 780-088000",
    email: "Vikingbitesjuice@gmail.com"
  },
  tagline: "Where Norwegian tradition meets Moroccan hospitality"
} as const;

export const RUNIC_TRANSLATIONS = {
  welcome: "ᚢᛁᚴᛁᚾᚴ ᛒᛁᛏᛖᛋ",
  menu: "ᛗᛖᚾᚢ",
  asgardGarden: "ᚨᛋᚷᚨᚱᛞ ᚷᚨᚱᛞᛖᚾ",
  valkyrieElixirs: "ᚢᚨᛚᚴᛁᚱᛃᛖᛋ ᛖᛚᛁᚲᛋᛁᚱᛋ",
  nornSmoothies: "ᚾᛟᚱᚾ ᛋᛗᛟᛟᚦᛁᛖᛋ",
  otherDrinks: "ᛟᚦᛖᚱ ᛞᚱᛁᚾᚴᛋ",
  vikingBites: "ᚢᛁᚴᛁᚾᚴ ᛒᛁᛏᛖᛋ",
  littleVikings: "ᛚᛁᛏᛏᛚᛖ ᚢᛁᚴᛁᚾᚷᛋ",
  vikingPlanks: "ᚢᛁᚴᛁᚾᚴ ᛈᛚᚨᚾᚴᛋ",
  shieldWraps: "ᛋᚺᛁᛖᛚᛞ ᚹᚱᚨᛈᛋ",
  valhallaBurgers: "ᚢᚨᛚᚺᚨᛚᛚᚨ ᛒᚢᚱᚷᛖᚱᛋ",
  visit: "ᚢᛁᛋᛁᛏ ᚢᛋ",
  cheers: "ᛋᚴᚨᛚ!"
} as const;