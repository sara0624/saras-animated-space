import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Gamepad2 } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <main className="min-h-screen">
      {/* Game Button - Fixed Position */}
      <Button
        onClick={() => navigate("/color-rush")}
        size="lg"
        className="fixed top-4 right-4 z-50 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-2xl animate-pulse"
      >
        <Gamepad2 className="w-5 h-5 mr-2" />
        Play Color Rush
      </Button>
      
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Experience />
      <Contact />
      
      <footer className="py-8 text-center text-muted-foreground border-t border-border/50">
        <p>© 2025 Sara Chester. Built with React & TypeScript.</p>
      </footer>
    </main>
  );
};

export default Index;
