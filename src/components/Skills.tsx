import { Code, Database, Brain, BarChart3, Wrench, Laptop } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Core Expertise",
      icon: Brain,
      skills: ["Predictive Modeling", "Data Analytics", "Machine Learning"],
      color: "from-purple-500 to-blue-500"
    },
    {
      title: "Data Engineering",
      icon: Database,
      skills: ["SQL (PostgreSQL, MySQL)", "dbt", "Apache Airflow"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Programming",
      icon: Code,
      skills: ["Python", "Java", "C/C++", "JavaScript"],
      color: "from-cyan-500 to-teal-500"
    },
    {
      title: "Tools & Frameworks",
      icon: Wrench,
      skills: ["TensorFlow", "Scikit-Learn", "XGBoost", "OpenCV"],
      color: "from-teal-500 to-green-500"
    },
    {
      title: "Visualization",
      icon: BarChart3,
      skills: ["Power BI", "Matplotlib", "Data Visualization"],
      color: "from-green-500 to-blue-500"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-gradient-glow opacity-10 rounded-full animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/3 w-32 h-32 bg-gradient-glow opacity-15 rounded-full animate-float" />
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="bg-gradient-card rounded-2xl p-6 border border-border shadow-card hover:shadow-glow transition-all duration-300 group relative overflow-hidden"
              >
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-glow opacity-5 group-hover:opacity-10 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center shadow-glow`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 border border-border/50 hover:bg-muted/50 transition-colors duration-200"
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-primary" />
                        <span className="text-foreground/90 font-medium">{skill}</span>
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

export default Skills;