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
      gradient: "from-red-500 to-red-600",
      borderColor: "border-red-500/50"
    },
    {
      icon: Phone,
      title: "Contact",
      content: ["0780-088000", "+212 780-088000"],
      gradient: "from-orange-500 to-red-500",
      borderColor: "border-orange-500/50"
    },
    {
      icon: Mail,
      title: "Email",
      content: ["Vikingbitesjuice", "@gmail.com"],
      gradient: "from-yellow-500 to-orange-500",
      borderColor: "border-yellow-500/50"
    }
  ];

  return (
    <section id="contact" className={`py-20 bg-gradient-to-b from-slate-900/50 to-slate-900 ${className || ''}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="runic-text text-red-400">ᚢᛁᛋᛁᛏ ᚢᛋ</span>
          </h2>
          <h3 className="text-2xl font-semibold text-slate-300 mb-6">Visit Our Great Hall</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contactItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card key={index} className={`bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 hover:${item.borderColor} transition-all duration-300 group`}>
                <div className="p-8 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-300 leading-relaxed">
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