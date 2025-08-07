import { Button } from "@/components/ui/button";
import { Play, Calendar, Clock, Heart } from "lucide-react";
import heroImage from "@/assets/hero-dental.png";

const HeroSection = () => {
  return (
<section className="relative flex items-center bg-gradient-to-br from-background via-primary-light/10 to-secondary/20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary-vibrant/10 rounded-full blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Announcement badge */}
            {/* <div className="inline-flex items-center bg-primary-light/20 text-primary-dark px-4 py-2 rounded-full text-sm font-medium">
              <Heart className="h-4 w-4 mr-2" />
              Trusted by 500+ dental practices nationwide
            </div> */}
             
            {/* Main headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Agenda más citas en piloto automático desde la <span className="bg-gradient-hero bg-clip-text text-transparent"> primera semana</span>
                <span className="bg-gradient-hero bg-clip-text text-transparent"> </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
Te ayudamos a mejorar la experiencia de tus pacientes desde el primer contacto y a crecer tu clínica sin complicaciones.              </p>
            </div>

            {/* Key benefits */}
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center bg-secondary/20 text-secondary-foreground px-3 py-2 rounded-lg">
                <Clock className="h-4 w-4 mr-2" />
                Disponible 24/7
              </div>
              <div className="flex items-center bg-secondary/20 text-secondary-foreground px-3 py-2 rounded-lg">
                <Calendar className="h-4 w-4 mr-2" />
                Agenda inteligente
              </div>
              <div className="flex items-center bg-secondary/20 text-secondary-foreground px-3 py-2 rounded-lg">
                <Heart className="h-4 w-4 mr-2" />
                Atención humanizada
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">

                              <a
                href="https://calendly.com/hola-argentle/15min?back=1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
              <Button variant="hero" size="lg" className="shadow-floating">
                <Calendar className="h-5 w-5" />
                Agendar una demostración
              </Button></a>
              {/* <Button variant="outline" size="lg" className="group">
                <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
                Ver un video demostrativo
              </Button> */}
            </div>

            {/* Trust indicators */}
            {/* <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Trusted by leading dental practices:</p>
              <div className="flex items-center space-x-6 opacity-60">
                <div className="text-lg font-semibold">SmileCare+</div>
                <div className="text-lg font-semibold">Elite Dental</div>
                <div className="text-lg font-semibold">Bright Smiles</div>
              </div>
            </div> */}
          </div>

          {/* Hero image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-floating">
              <img 
                src={heroImage} 
                alt="Professional dental office reception area" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating stats */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-card border">
              <div className="text-3xl font-bold text-primary">99.8%</div>
              <div className="text-sm text-muted-foreground">Satisfacción del paciente</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-card p-6 rounded-xl shadow-card border">
              <div className="text-3xl font-bold text-secondary-vibrant">47%</div>
              <div className="text-sm text-muted-foreground">Menos inasistencias</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;