import { Button } from "@/components/ui/button";
import { Phone, Calendar, MessageSquare, ArrowRight } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
              <MessageSquare className="h-6 w-6 text-white" />
            </div> */}
            <span className="text-2xl font-bold text-foreground">Argentle</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#benefecits" className="text-muted-foreground hover:text-foreground transition-colors">Características</a>
            <a href="#demo" className="text-muted-foreground hover:text-foreground transition-colors">Demo</a>
            <a href="#recepcionist" className="text-muted-foreground hover:text-foreground transition-colors">Recepcionista</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contacto</a>
          </nav>

          <div className="flex items-center space-x-3">
            {/* <Button variant="outline" size="sm" className="hidden sm:flex">
              <Phone className="h-4 w-4" />
              (555) 123-4567
            </Button> */}
  {/* <a
    href="https://calendly.com/hola-argentle/15min?back=1"
    target="_blank"
    rel="noopener noreferrer"
    className="w-full sm:w-auto"
  >
    <Button variant="hero" size="sm" className="shadow-floating w-full sm:w-auto">
      <Calendar className="h-5 w-5" />
      Agendar Demostración
    </Button>
  </a> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;