import type { Metadata } from "next";
import { Cinzel, Nosifer, Metal_Mania } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-viking",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const nosifer = Nosifer({
  variable: "--font-runic",
  subsets: ["latin"],
  weight: ["400"],
});

const metalMania = Metal_Mania({
  variable: "--font-metal",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "⚔️ Viking Bites & Juice | Marrakesh - Authentic Norwegian Cuisine ⚔️",
  description: "Experience the bold flavors of Norway in the heart of Marrakesh. Located in Izdihar, serving traditional Viking-inspired dishes and fresh juices with authentic runic atmosphere.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cinzel.variable} ${nosifer.variable} ${metalMania.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}