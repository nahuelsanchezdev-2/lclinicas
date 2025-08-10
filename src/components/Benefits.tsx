
import { MessagesSquare, CalendarCheck2 , WandSparkles, SquareUserRound, Check } from "lucide-react";
import { Card, CardContent } from '@/components/ui/card';




const BenefitsSection = () => {

      const benefits = [
    {
      icon: <CalendarCheck2  className="w-6 h-6 text-dental-blue" />,
      title: "Cita en 2 minutos",
      description: "Agenda citas en menos de 2 minutos, mejorando la experiencia de tus pacientes desde el primer contacto."
    },
    {
      icon: <MessagesSquare className="w-6 h-6 text-dental-green" />,
      title: "Respuesta inmediata 24x7",
      description: "Ofrece atención 24/7 para que tus pacientes siempre tengan a alguien disponible cuando lo necesiten."
    },
    {
      icon: <SquareUserRound className="w-6 h-6 text-dental-blue" />,
      title: "Haz crecer tu equipo sin pagar demás",
      description: "Integra una asistente virtual con rostro e identidad, que brinda calidez humana y cero cargas sociales."
    },
    {
      icon: <WandSparkles className="w-6 h-6 text-dental-green" />,
      title: "Contenido atractivo sin esfuerzo",
      description: "Genera publicaciones que conectan con tus pacientes y mantienen activa la presencia de tu clínica en redes sociales."
    }
  ];
  
  return (
      <section id="benefecits" className="py-20 bg-dental-blue-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-dental-trust mb-4">
              Qué beneficios le aportamos a tu clínica?
            </h2>
            {/* <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Únete a la comunidad de clínicas que ya transformaron su atención y resultados.
            </p> */}
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-center shadow-card bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.03]"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-dental-blue-light rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300 group-hover:bg-dental-green">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-dental-trust mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
  );
};

export default BenefitsSection;


