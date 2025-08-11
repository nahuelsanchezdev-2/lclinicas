import { Button } from "@/components/ui/button";
import { Phone, Calendar, MessageSquare, ArrowRight } from "lucide-react";
import logo from "@/assets/logo_argentle.png";

const Footer = () => {
  return (
<footer className="border-t border-gray-200 py-4">
  <div className="container mx-auto px-4">
    <div className="flex justify-end items-center gap-2">
    <span className="text-[11px] md:text-xs italic text-muted-foreground/80">Una solución de</span>
      <a href="https://argentle.com" target="_blank">

      
      <img
        src={logo}// Cambiá por tu ruta real
        alt="Argentle"
        className="h-8 w-auto"
      />
      </a>
    </div>
  </div>
</footer>
  );
};

export default Footer;
