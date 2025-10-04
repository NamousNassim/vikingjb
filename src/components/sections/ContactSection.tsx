import { MapPin, Phone, Mail, LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ContactItem {
  icon: LucideIcon;
  title: string;
  content: string[];
  gradient: string;
  borderColor: string;
}

interface ContactSectionProps {
  className?: string;
}

export function ContactSection({ className }: ContactSectionProps) {
  const contactItems: ContactItem[] = [
    {
      icon: MapPin,
      title: "Location",
      content: ["Izdihar, Marrakesh", "Morocco"],
      gradient: "from-red-600 to-red-700",
      borderColor: "border-red-500/30"
    },
    {
      icon: Phone,
      title: "Contact",
      content: ["0780-088000", "+212 780-088000"],
      gradient: "from-red-500 to-red-600",
      borderColor: "border-red-500/30"
    },
    {
      icon: Mail,
      title: "Email",
      content: ["Vikingbitesjuice", "@gmail.com"],
      gradient: "from-red-700 to-red-800",
      borderColor: "border-red-600/30"
    }
  ];

  return (
    <section id="contact" className={`py-24 bg-gradient-to-b from-red-50 to-white ${className || ''}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            <span className="runic-text bg-gradient-to-r from-red-600 via-red-800 to-red-600 bg-clip-text text-transparent">
              ᚢᛁᛋᛁᛏ ᚢᛋ
            </span>
          </h2>
          <h3 className="text-3xl font-semibold text-gray-700 mb-8">Visit Our Great Hall</h3>
          <div className="w-32 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contactItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card key={index} className={`glass-card hover:${item.borderColor} transition-all duration-300 group viking-glow`}>
                <div className="p-8 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.content.map((line, lineIndex) => (
                      <span key={lineIndex}>
                        {line}
                        {lineIndex < item.content.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}