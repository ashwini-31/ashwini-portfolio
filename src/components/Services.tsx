import { Brain, Database, BarChart3, Search } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Machine Learning Modeling & Analytics",
      description: "Advanced predictive modeling solutions using state-of-the-art algorithms to solve complex business problems and drive data-driven decision making.",
      icon: Brain,
      features: ["Predictive Analytics", "Classification & Regression", "Model Optimization", "Performance Evaluation"],
      color: "from-purple-500 to-blue-500"
    },
    {
      title: "End-to-End Data Pipeline Design",
      description: "Complete data engineering solutions from data collection to visualization, ensuring scalable and automated data workflows.",
      icon: Database,
      features: ["Data Architecture", "ETL/ELT Processes", "Workflow Automation", "Data Quality Assurance"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Business Intelligence & Dashboards",
      description: "Interactive dashboards and comprehensive reporting solutions that transform complex data into actionable business insights.",
      icon: BarChart3,
      features: ["Interactive Dashboards", "KPI Monitoring", "Data Visualization", "Automated Reporting"],
      color: "from-cyan-500 to-teal-500"
    },
    {
      title: "Research-Based Data Modeling",
      description: "Specialized research and simulation services for healthcare and business applications, combining academic rigor with practical solutions.",
      icon: Search,
      features: ["Healthcare Analytics", "Business Simulation", "Research Publication", "Custom Modeling"],
      color: "from-teal-500 to-green-500"
    }
  ];

  return (
    <section id="services" className="py-20 px-6 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-1/4 w-56 h-56 bg-gradient-glow opacity-10 rounded-full animate-glow-pulse" />
      <div className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-gradient-glow opacity-15 rounded-full animate-float" />
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Services
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground mt-6 max-w-3xl mx-auto">
            Specialized data science and analytics services to transform your business through intelligent data solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-gradient-card rounded-2xl p-8 border border-border shadow-card hover:shadow-glow transition-all duration-300 group relative overflow-hidden"
              >
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-glow opacity-5 group-hover:opacity-15 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  {/* Service Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center shadow-glow mb-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Service Title */}
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {service.title}
                  </h3>
                  
                  {/* Service Description */}
                  <p className="text-foreground/80 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  {/* Service Features */}
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-primary flex-shrink-0" />
                        <span className="text-foreground/90 font-medium">{feature}</span>
                      </div>
                    ))}
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

export default Services;