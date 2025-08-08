import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, CheckCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-14 bg-gradient-to-br from-primary/5 via-background to-secondary/10">
      <div className="container mx-auto px-4">
        <hr className="border-border/50" />
        <div className="max-w-5xl mx-auto py-10">
          <div className="flex flex-col items-center text-center space-y-6">
            {/* Título */}
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              <span className="text-dental-trust">
                Agenda una demostración sin compromiso
              </span>
              <br />
              <span className="bg-gradient-hero bg-clip-text text-transparent"> 
                y gestiona citas en piloto automático
              </span>
              .
            </h2>

            {/* Subtítulo/beneficio */}
            {/* <p className="text-lg text-muted-foreground max-w-2xl">
              Ahorra tiempo, atrae más pacientes y ofrece atención 24/7 desde el primer día.
            </p> */}

            {/* Botón principal */}
            <div className="w-full flex justify-center">
              <a
                href="https://calendly.com/hola-argentle/15min?back=1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Agendar una demostración de 15 minutos"
                className="w-full sm:w-auto"
              >
<Button variant="hero" size="lg" className="shadow-floating">
                  <Calendar className="h-5 w-5 mr-2" />
                  Quiero una demostración
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </a>
            </div>

            {/* Señal de urgencia/credibilidad */}
            {/* <div className="flex items-center justify-center gap-2 text-sm text-secondary-vibrant">
              <CheckCircle className="h-4 w-4" />
              <span>Quedan pocos turnos disponibles esta semana</span>
            </div> */}
          </div>
        </div>
        <hr className="border-border/50" />
      </div>
    </section>
  );
};

export default CTASection;
