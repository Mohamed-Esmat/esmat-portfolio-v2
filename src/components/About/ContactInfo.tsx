import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {[
        {
          icon: <Phone className="w-5 h-5 text-blue-400" />,
          label: "Phone",
          bg: "bg-blue-500/20",
          text: "+201100108798",
          href: "tel:+201100108798",
        },
        {
          icon: <Mail className="w-5 h-5 text-purple-400" />,
          label: "Email",
          bg: "bg-purple-500/20",
          text: "msmt0452@gmail.com",
          href: "mailto:msmt0452@gmail.com",
        },
        {
          icon: <MapPin className="w-5 h-5 text-emerald-400" />,
          label: "Location",
          bg: "bg-emerald-500/20",
          text: "Giza, Egypt",
          href: "https://www.google.com/maps/place/Giza,+Egypt",
        },
        {
          icon: <ExternalLink className="w-5 h-5 text-orange-400" />,
          label: "Website",
          bg: "bg-orange-500/20",
          text: "Visit Website",
          href: "https://mohamedesmat.me",
        },
      ].map((item, index) => (
        <a href={item.href} target="_blank" rel="noopener noreferrer">
          <div
            key={index}
            className="flex items-center gap-3 text-white/80  cursor-pointer hover:bg-opacity-80 transition-all duration-200 ease-in-out hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 p-4 rounded-lg"
          >
            <div
              className={`w-10 h-10 ${item.bg} rounded-full flex items-center justify-center`}
            >
              {item.icon}
            </div>
            <span>{item.text}</span>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ContactInfo;
