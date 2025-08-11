const About = () => {
  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-glow opacity-20 rounded-full animate-float" />
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>
        
        <div className="bg-gradient-card rounded-2xl p-8 md:p-12 border border-border shadow-card relative">
          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-gradient-glow opacity-10 rounded-2xl" />
          
          <div className="relative z-10">
            <p className="text-lg md:text-xl leading-relaxed text-foreground/90 mb-8">
              Ashwini C Shetty is a Computer Science and Engineering student with a focus on Data Analytics at Alliance University. She is a passionate researcher and data enthusiast with experience in predictive modeling, A/B testing, and smart systems development.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
              Her work integrates machine learning, data engineering, and visualization to solve real-world problems in healthcare and business. With a strong foundation in both theoretical concepts and practical implementation, she strives to bridge the gap between complex data insights and actionable business solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;