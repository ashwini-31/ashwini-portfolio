import { Briefcase, Calendar, Building } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-36 h-36 bg-gradient-glow opacity-20 rounded-full animate-float" />
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>
        
        <div className="bg-gradient-card rounded-2xl p-8 md:p-12 border border-border shadow-elevated relative hover:shadow-glow transition-all duration-300">
          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-gradient-glow opacity-10 rounded-2xl" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                <Briefcase className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
            
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Research Intern
              </h3>
              <div className="flex items-center gap-2 text-primary font-semibold mb-4">
                <Building className="w-5 h-5" />
                <span className="text-lg">IEEE Computer Society – Alliance University</span>
              </div>
              
              <div className="flex items-center gap-2 text-accent mb-6">
                <Calendar className="w-5 h-5" />
                <span className="font-medium">March 2024 – Sept 2024</span>
              </div>
              
              <p className="text-lg leading-relaxed text-foreground/90">
                Worked on HIV risk prediction models using GANs and contributed to published healthcare analytics research. Developed advanced machine learning models to predict health outcomes and collaborated with research teams to implement cutting-edge data science solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;