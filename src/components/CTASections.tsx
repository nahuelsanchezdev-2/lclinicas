import { Button } from "@/components/ui/button";
import { Calendar, Phone, ArrowRight, CheckCircle } from "lucide-react";
import dentalOfficeImage from "@/assets/hero-dental.png";

const CTASection = () => {
  return (
    <section className="py-10 bg-gradient-to-br from-primary/5 via-background to-secondary/10">
      <div className="container mx-auto px-4">
        <hr /><br />
        <div className="grid  gap-12 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
                          <h2 className="text-3xl md:text-4xl font-bold text-dental-trust mb-4">
              Agenda una demostración sin compromiso y comienza a gestionar citas en piloto automático.
            </h2>

              {/* <p className="text-xl text-muted-foreground leading-relaxed">
                Join the growing number of dental practices that trust DentalConnect to deliver warm, professional patient communication that never sleeps.
              </p> */}
            </div>

            {/* Benefits checklist */}
            {/* <div className="space-y-3">
              {[
                "Setup completed in under 24 hours",
                "No long-term contracts required", 
                "Seamless integration with your practice management system",
                "Dedicated support team during implementation"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-secondary-vibrant flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div> */}

            {/* CTA buttons */}
            {/* https://calendly.com/hola-argentle/15min?back=1 */}
<div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
  <a
    href="https://calendly.com/hola-argentle/15min?back=1"
    target="_blank"
    rel="noopener noreferrer"
    className="w-full sm:w-auto"
  >
    <Button variant="hero" size="lg" className="shadow-floating w-full sm:w-auto">
      <Calendar className="h-5 w-5" />
      Quiero una demostración
      <ArrowRight className="h-5 w-5" />
    </Button>
  </a>
</div>
<hr />

            {/* Urgency/scarcity */}
            {/* <div className="bg-warm-accent/10 border border-warm-accent/20 p-4 rounded-xl">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-warm-accent rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-warm-accent">Limited Availability This Month</p>
                  <p className="text-sm text-muted-foreground">We're accepting only 15 new practices in July to ensure personalized onboarding. Reserve your spot today.</p>
                </div>
              </div>
            </div> */}
          </div>

          {/* Image */}
          {/* <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-floating">
              <img 
                src={dentalOfficeImage} 
                alt="Modern dental office interior" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
            
       
            <div className="absolute -bottom-6 -left-6 bg-secondary-vibrant text-white p-6 rounded-xl shadow-floating">
              <div className="text-2xl font-bold">30-Day</div>
              <div className="text-sm opacity-90">Money-Back Guarantee</div>
            </div>
       
            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-card border">
              <div className="text-2xl font-bold text-primary">&lt; 24hrs</div>
              <div className="text-sm text-muted-foreground">Setup Time</div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default CTASection;