const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border/50 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-semibold mb-4 gradient-text">Professional Summary</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Full Stack Developer with proven ability to improve system performance by 30% through architectural optimization and clean code principles. 
                  Strong Computer Science foundation (GPA: 92) with expertise in building scalable, data-driven applications.
                </p>
              </div>
              
              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border/50 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-semibold mb-4 gradient-text">Current Focus</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Working with modern technologies including React, TypeScript, NestJS, and PostgreSQL. 
                  Passionate about refactoring legacy systems into modular microservices architectures and optimizing performance.
                </p>
              </div>
            </div>
            
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border/50 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-semibold mb-4 gradient-text">Key Achievements</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">▸</span>
                    <span>Reduced API response times by 30% through backend refactoring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">▸</span>
                    <span>Improved data-fetch speed by 25% with React Query optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">▸</span>
                    <span>Increased developer efficiency by 50% with AI-powered tools</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">▸</span>
                    <span>Accelerated hiring decisions by 40% through platform optimization</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border/50 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-semibold mb-4 gradient-text">Education</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p className="font-medium text-foreground">B.Sc. Computer Science</p>
                  <p>JCT | 2024–2026 | GPA: 92</p>
                  <p className="text-sm">73 credits completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
