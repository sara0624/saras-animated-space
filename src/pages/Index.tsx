import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
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
