import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      
      {/* Floating Glow Effect */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-glow opacity-30 rounded-full animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-glow opacity-20 rounded-full animate-float" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Ashwini C Shetty
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Data Analytics Specialist
          </p>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Computer Science & Engineering Student passionate about transforming data into actionable insights through machine learning and predictive modeling
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="glow" 
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="animate-float"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>
          
          {/* Quick Contact Links */}
          <div className="flex justify-center gap-6">
            <a 
              href="https://linkedin.com/in/ashwini-shetty-" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gradient-card border border-border hover:bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
            >
              <Linkedin className="w-6 h-6 text-foreground group-hover:text-primary-foreground" />
            </a>
            <a 
              href="https://github.com/ashwini-31" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gradient-card border border-border hover:bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
            >
              <Github className="w-6 h-6 text-foreground group-hover:text-primary-foreground" />
            </a>
            <a 
              href="mailto:cashwinibtech22@ced.alliance.edu.in"
              className="p-3 rounded-full bg-gradient-card border border-border hover:bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
            >
              <Mail className="w-6 h-6 text-foreground group-hover:text-primary-foreground" />
            </a>
            <a 
              href="tel:+916363180087"
              className="p-3 rounded-full bg-gradient-card border border-border hover:bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
            >
              <Phone className="w-6 h-6 text-foreground group-hover:text-primary-foreground" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;