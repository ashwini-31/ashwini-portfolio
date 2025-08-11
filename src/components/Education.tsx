import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-glow opacity-15 rounded-full animate-glow-pulse" />
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>
        
        <div className="bg-gradient-card rounded-2xl p-8 md:p-12 border border-border shadow-elevated relative hover:shadow-glow transition-all duration-300">
          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-gradient-glow opacity-10 rounded-2xl" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                <GraduationCap className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
            
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                B. Tech in Computer Science & Engineering
              </h3>
              <p className="text-lg text-primary font-semibold mb-2">
                Specialization in Data Analytics
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Alliance University - Alliance School of Advanced Computing
              </p>
              <p className="text-base text-muted-foreground mb-4">
                Bengaluru, India
              </p>
              
              <div className="flex items-center gap-2 text-accent">
                <Calendar className="w-5 h-5" />
                <span className="font-medium">Dec 2022 – Present (Expected graduation in 2026)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;