import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, MapPin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6363180087",
      href: "tel:+916363180087",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Mail,
      label: "Email",
      value: "cashwinibtech22@ced.alliance.edu.in",
      href: "mailto:cashwinibtech22@ced.alliance.edu.in",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/ashwini-shetty-",
      href: "https://linkedin.com/in/ashwini-shetty-",
      color: "from-blue-600 to-blue-500"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/ashwini-31",
      href: "https://github.com/ashwini-31",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-48 h-48 bg-gradient-glow opacity-15 rounded-full animate-float" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-glow opacity-20 rounded-full animate-glow-pulse" />
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground mt-6 max-w-3xl mx-auto">
            Ready to collaborate on data-driven solutions? Let's discuss how we can transform your business with intelligent analytics.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-gradient-card rounded-2xl p-8 border border-border shadow-card">
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <a
                      key={index}
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 border border-border/50 hover:bg-gradient-primary hover:text-primary-foreground hover:shadow-glow transition-all duration-300 group"
                    >
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${contact.color} flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground group-hover:text-primary-foreground">
                          {contact.label}
                        </p>
                        <p className="text-muted-foreground group-hover:text-primary-foreground/80">
                          {contact.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
            
            {/* Location */}
            <div className="bg-gradient-card rounded-2xl p-8 border border-border shadow-card">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center shadow-glow">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Location</h4>
                  <p className="text-muted-foreground">Bengaluru, India</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="bg-gradient-card rounded-2xl p-8 border border-border shadow-card relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-glow opacity-10 rounded-2xl" />
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-foreground mb-6">Let's Collaborate</h3>
              
              <p className="text-foreground/80 leading-relaxed mb-8">
                Whether you need predictive modeling, data pipeline development, or business intelligence solutions, 
                I'm here to help turn your data into actionable insights.
              </p>
              
              <div className="space-y-4">
                <Button 
                  variant="glow" 
                  size="lg" 
                  className="w-full"
                  onClick={() => window.open('mailto:cashwinibtech22@ced.alliance.edu.in', '_blank')}
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Email
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full"
                  onClick={() => window.open('https://linkedin.com/in/ashwini-shetty-', '_blank')}
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  Connect on LinkedIn
                </Button>
              </div>
              
              <div className="mt-8 p-4 bg-muted/30 rounded-lg border border-border/50">
                <p className="text-sm text-muted-foreground text-center">
                  Available for freelance projects and collaboration opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;