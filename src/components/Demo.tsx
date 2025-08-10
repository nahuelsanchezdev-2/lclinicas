import { MessagesSquare, CalendarCheck2, WandSparkles, SquareUserRound, Check } from "lucide-react";
import { Card, CardContent } from '@/components/ui/card';
import { MessagesSquare as ChatIcon , ArrowDown     } from "lucide-react"; // Agregamos un icono de chat para el badge

const Demo = () => {
  const features = [
    "Centralizamos la gestión de todas tus conversaciones, desde tu web hasta WhatsApp.",
    "Integramos nuestra solución con tu CRM actual para una transición sin interrupciones.",
    "Creamos un asistente virtual a medida que refleje la identidad y los valores de tu clínica.",
    "Formamos a tu equipo para que trabaje en perfecta armonía con su nueva asistente virtual."
  ];

  return (
    <section id="benefits" className="py-20 bg-dental-blue-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="demo">
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
            <div className="relative animate-float w-full min-h-[420px] h-[420px] rounded-xl shadow-card">
              {/* Iframe del chatbot */}
              <iframe
                src="https://app.relevanceai.com/agents/d7b62b/d4fbd6cc-d20b-44dc-884b-d253b11c24ff/30af0a1c-86e2-4c19-9b7c-879ffbe928c7/embed-chat?starting_message_prompts=Quiero+agendar+una+cita&hide_tool_steps=true&hide_file_uploads=true&hide_conversation_list=false&bubble_style=agent&primary_color=%23685FFF&bubble_icon=pd%2Fchat&input_placeholder_text=Escribe+tu+mensaje...&hide_logo=true&hide_description=true"
                width="100%"
                height="100%"
                frameBorder="0"
              ></iframe>

              {/* Badge flotante en la esquina superior derecha */}
              <div className="absolute top-2 right-2 bg-dental-green px-3 py-1 rounded-full shadow-md flex items-center gap-2 animate-bounce">
                <ArrowDown      className="w-4 h-4" />
                <span className="text-sm font-semibold ">Chatea con Lucía ahora</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;