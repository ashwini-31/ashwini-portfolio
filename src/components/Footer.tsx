import { Github, Linkedin, Mail, Phone, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-hero border-t border-border relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-gradient-glow opacity-10 rounded-full" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Ashwini C Shetty
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Data Analytics Specialist crafting intelligent solutions through machine learning and predictive modeling.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {['About', 'Education', 'Experience', 'Skills', 'Projects', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase());
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-left text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Connect</h4>
            <div className="space-y-3">
              <a 
                href="mailto:cashwinibtech22@ced.alliance.edu.in"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
                <span className="text-sm">cashwinibtech22@ced.alliance.edu.in</span>
              </a>
              <a 
                href="tel:+916363180087"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <Phone className="w-5 h-5" />
                <span className="text-sm">+91 6363180087</span>
              </a>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              <a 
                href="https://linkedin.com/in/ashwini-shetty-" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gradient-card border border-border hover:bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-foreground group-hover:text-primary-foreground" />
              </a>
              <a 
                href="https://github.com/ashwini-31" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gradient-card border border-border hover:bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
              >
                <Github className="w-5 h-5 text-foreground group-hover:text-primary-foreground" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Ashwini C Shetty. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>and modern web technologies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;