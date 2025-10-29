import { Code2, Database, GitBranch, Layers, Server, Wrench } from "lucide-react";

const TechStack = () => {
  const categories = [
    {
      title: "Frontend",
      icon: Code2,
      techs: ["React", "Angular", "TypeScript", "JavaScript (ES6)", "HTML5", "CSS3", "React Query", "React Router"]
    },
    {
      title: "Backend",
      icon: Server,
      techs: ["Node.js", "NestJS", "Express.js", "C# (.NET Core)", "REST APIs", "Prisma", "WPF"]
    },
    {
      title: "Databases",
      icon: Database,
      techs: ["PostgreSQL", "MySQL", "MongoDB", "SQL Server"]
    },
    {
      title: "DevOps & Tools",
      icon: GitBranch,
      techs: ["Git", "Docker", "Azure DevOps", "VS Code", "Visual Studio", "GitHub API"]
    },
    {
      title: "Concepts",
      icon: Layers,
      techs: ["OOP", "SOLID", "MVVM", "Design Patterns", "Microservices", "Clean Architecture"]
    },
    {
      title: "Soft Skills",
      icon: Wrench,
      techs: ["Agile", "Mentoring", "Problem-solving", "Team Collaboration", "Rapid Learning"]
    }
  ];

  return (
    <section id="tech" className="py-24">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold">Technology Stack</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive expertise across modern web technologies and software development practices
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.title}
                  className="group bg-card rounded-2xl p-6 shadow-lg border border-border/50 hover:shadow-xl hover:border-primary/30 transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.techs.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
