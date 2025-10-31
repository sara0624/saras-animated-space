import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background -z-10" />
      
      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="container px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
              Sara Chester
            </h1>
            <p className="text-3xl md:text-4xl gradient-text font-semibold">
              Full Stack Developer
            </p>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Specializing in React, Node.js, and C#. Building scalable, data-driven applications with clean architecture and modern best practices.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Jerusalem, Israel</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <a href="mailto:Sara3280624@gmail.com" className="hover:text-primary transition-colors">
                Sara3280624@gmail.com
              </a>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button asChild size="lg" className="group">
              <a href="#projects" className="flex items-center gap-2">
                View Projects
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="group">
              <a 
                href="https://github.com/sara6310472" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="group">
              <a 
                href="https://www.linkedin.com/in/sara-chester-/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
