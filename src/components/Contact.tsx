import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold">Let's Connect</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Open to new opportunities and collaborations. Feel free to reach out!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="mailto:Sara3280624@gmail.com"
              className="group bg-card rounded-2xl p-8 shadow-lg border border-border/50 hover:shadow-xl hover:border-primary/30 transition-all duration-300 animate-scale-in"
            >
              <div className="flex items-start gap-4">
                <div className="p-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground group-hover:text-primary transition-colors">
                    Sara3280624@gmail.com
                  </p>
                </div>
              </div>
            </a>
            
            <a
              href="tel:+972-58-328-0624"
              className="group bg-card rounded-2xl p-8 shadow-lg border border-border/50 hover:shadow-xl hover:border-primary/30 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: '0.1s' }}
            >
              <div className="flex items-start gap-4">
                <div className="p-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Phone</h3>
                  <p className="text-muted-foreground group-hover:text-primary transition-colors">
                    +972-58-328-0624
                  </p>
                </div>
              </div>
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 pt-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Button asChild size="lg" className="group">
              <a
                href="https://github.com/sara6310472"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                GitHub Profile
              </a>
            </Button>
            
            <Button asChild size="lg" className="group">
              <a
                href="https://linkedin.com/in/sara-Chester"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn Profile
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
