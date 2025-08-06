import { Button } from "@/components/ui/button";
import { MessagesSquare, CalendarCheck2 , WandSparkles, SquareUserRound, Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import heroImage from "@/assets/hero-dental.png";
import workflowImage from '@/assets/workflow.png';



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
      title: "Un miembro más en tu equipo, sin cargas sociales",
      description: "Integra una asistente virtual con rostro e identidad, que brinda calidez humana y cero cargas sociales."
    },
    {
      icon: <WandSparkles className="w-6 h-6 text-dental-green" />,
      title: "Contenido atractivo sin esfuerzo",
      description: "Genera publicaciones que conectan con tus pacientes y mantienen activa la presencia de tu clínica en redes sociales."
    }
  ];

  const features = [
    "Centralizamos la gestión de todas tus conversaciones, desde tu web hasta WhatsApp.",
    "Integramos nuestra solución con tu CRM actual para una transición sin interrupciones.",
    "Creamos un asistente virtual a medida que refleje la identidad y los valores de tu clínica.",
    "Formamos a tu equipo para que trabaje en perfecta armonía con su nueva asistente virtual."
  ];
  
  return (
      <section className="py-20 bg-dental-blue-light/30">
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
              <Card key={index} className="text-center shadow-card hover:shadow-hero transition-all duration-300 animate-scale-in bg-white">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-dental-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-dental-trust mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in-up">
              <h3 className="text-2xl md:text-3xl font-bold text-dental-trust mb-6">
                Integra nuestra solución sin complicaciones
              </h3>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-dental-green flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-float w-full min-h-[420px] h-[420px] rounded-xl shadow-card">
<iframe src="https://app.relevanceai.com/agents/d7b62b/d4fbd6cc-d20b-44dc-884b-d253b11c24ff/30af0a1c-86e2-4c19-9b7c-879ffbe928c7/embed-chat?starting_message_prompts=Quiero+agendar+una+cita&hide_tool_steps=true&hide_file_uploads=true&hide_conversation_list=false&bubble_style=agent&primary_color=%23685FFF&bubble_icon=pd%2Fchat&input_placeholder_text=Escribe+tu+mensaje...&hide_logo=true&hide_description=true" width="100%" height="100%" frameborder="0"></iframe>
            </div>
          </div>
        </div>
      </section>
  );
};

export default BenefitsSection;


