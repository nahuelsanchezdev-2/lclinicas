import { Button } from "@/components/ui/button";
import { Users, Calendar, Clock, Brain, Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import heroImage from "@/assets/hero-dental.png";
import workflowImage from '@/assets/workflow.png';



const BenefitsSection = () => {

      const benefits = [
    {
      icon: <Calendar className="w-6 h-6 text-dental-blue" />,
      title: "Gestión inteligente de turnos",
      description: "Sistema avanzado de agendado que reduce las ausencias hasta en un 40% y optimiza tu rutina diaria."
    },
    {
      icon: <Users className="w-6 h-6 text-dental-green" />,
      title: "Atención mejorada para tus pacientes",
      description: "Recomendaciones personalizadas de tratamiento y recordatorios automáticos de seguimiento."
    },
    {
      icon: <Brain className="w-6 h-6 text-dental-blue" />,
      title: "Diagnóstico inteligente",
      description: "Análisis avanzado para una planificación de tratamientos más rápida y precisa."
    },
    {
      icon: <Clock className="w-6 h-6 text-dental-green" />,
      title: "Eficiencia en tu tiempo",
      description: "Ahorrá más de 3 horas diarias en tareas administrativas con flujos de trabajo automatizados."
    }
  ];

  const features = [
    "Asistente virtual 24/7 potenciado por VEO 3",
    "Agendado y recordatorios de turnos automatizados",
    "Gestión inteligente del ingreso de pacientes y su historial",
    // "Verificación de cobertura médica en tiempo real",
    // "Predictive analytics for treatment outcomes",
    "Integración sin complicaciones con tu software de clínica actual"
  ];
  
  return (
      <section className="py-20 bg-dental-blue-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-dental-trust mb-4">
              Resultados comprobados para clínicas dentales
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Únete a la comunidad de clínicas que ya transformaron su atención y resultados.
            </p>
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
                Todo lo que necesitás en una sola plataforma
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
            <div className="animate-float">
              <img 
                src={workflowImage} 
                alt="Dental Workflow" 
                className="w-full h-auto rounded-xl shadow-card"
              />
            </div>
          </div>
        </div>
      </section>
  );
};

export default BenefitsSection;


