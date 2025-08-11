import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Brain, TrendingUp, Package } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Customer Churn Prediction & Retention Strategy Simulation",
      description: "Built an ML pipeline with churn scoring, SHAP explainability, and business-oriented simulation to strategize retention. Implemented advanced machine learning algorithms to predict customer behavior and optimize retention strategies.",
      icon: TrendingUp,
      technologies: ["Python", "Scikit-Learn", "SHAP", "Machine Learning"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Behavioral Analytics Platform for A/B Testing",
      description: "Developed a full data engineering pipeline with Airflow, dbt, and Power BI for a mental health app. Created comprehensive analytics dashboards to track user behavior and measure the effectiveness of different app features.",
      icon: Brain,
      technologies: ["Apache Airflow", "dbt", "Power BI", "SQL"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Smart Inventory Management System",
      description: "Built a demand forecasting system using ML, with Power BI dashboards and future IoT integration. Implemented predictive analytics to optimize inventory levels and reduce operational costs.",
      icon: Package,
      technologies: ["Machine Learning", "Power BI", "IoT", "Forecasting"],
      color: "from-cyan-500 to-teal-500"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-glow opacity-15 rounded-full animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-glow opacity-20 rounded-full animate-glow-pulse" />
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={index}
                className="bg-gradient-card rounded-2xl p-8 border border-border shadow-card hover:shadow-glow transition-all duration-300 group relative overflow-hidden hover:scale-105"
              >
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-glow opacity-5 group-hover:opacity-15 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  {/* Project Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center shadow-glow mb-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-foreground mb-4 leading-tight">
                    {project.title}
                  </h3>
                  
                  {/* Project Description */}
                  <p className="text-foreground/80 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm bg-muted/50 border border-border/50 rounded-full text-foreground/90 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button variant="glow" size="sm" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;