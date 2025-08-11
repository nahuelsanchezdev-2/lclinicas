import { Button } from "@/components/ui/button";
import { Phone, Calendar, MessageSquare, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="container mx-auto px-4 py-4 relative">
        <div className="flex items-center justify-between">
          {/* Logo + byline */}
          <div className="flex items-start">
            <div className="flex flex-col leading-none">
              <img
                src={logo}
                alt="Denta"
                className="h-10 w-auto"
              />
              {/* <span className="text-[11px] md:text-xs italic text-muted-foreground/80 mt-0.5 ml-1">
                ...............by Argentle
              </span> */}
            </div>
          </div>

          {/* Menú centrado */}
          <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2">
            <a href="#benefecits" className="text-muted-foreground hover:text-foreground transition-colors">Características</a>
            <a href="#demo" className="text-muted-foreground hover:text-foreground transition-colors">Demo</a>
            <a href="#recepcionist" className="text-muted-foreground hover:text-foreground transition-colors">Recepcionista</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contacto</a>
          </nav>

          {/* Bloque derecho */}
          <div className="flex items-center space-x-3">{/* ... */}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
