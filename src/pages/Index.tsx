import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Benefits from "@/components/Benefits";
import Demo from "@/components/Demo";
import VideoShowcase from "@/components/VideoShowcase";
// import FeaturesSection from "@/components/FeaturesSection";
// import DemoVideosSection from "@/components/DemoVideosSection";
// import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASections";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <Benefits />
      <VideoShowcase />
      <Demo />
      <CTASection />
      {/* 
      <FeaturesSection />
      <DemoVideosSection />
      <TestimonialsSection />
      
      */}
      <Footer /> 
    </div>
  );
};

export default Index;