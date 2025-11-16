import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "GitLink Developer Platform",
      description: "Platform aggregating GitHub metrics in real-time for 50+ users. Accelerated hiring decisions by 40% through optimized developer insights dashboards with seamless navigation and user profiles.",
      tech: ["React", "Node.js", "GitHub API", "Real-time Analytics"],
      github: "https://github.com/mirigerzon/GitLink",
      live: "https://gitlink-w7ve.onrender.com/",
      highlights: ["50+ active users", "40% faster hiring", "Real-time metrics"]
    },
    {
      title: "AI Commit Assistant",
      description: "VS Code extension that increased developer efficiency by 50% with AI-powered commit generation and code analysis. Automated 80% of commit workflows using Azure DevOps and Google Gemini AI.",
      tech: ["Node.js", "VS Code API", "Google Gemini AI", "Azure DevOps"],
      github: "https://github.com/sara6310472/AI-Commit-Assistant",
      live: "https://vscode-commit-ai-buddy.vercel.app/",
      highlights: ["50% efficiency increase", "80% workflow automation", "AI-powered analysis"]
    },
    {
      title: "Volunteer Management System",
      description: "Full-stack application managing 100+ volunteers with dashboard, cutting coordination time by 50%. Features rule-based matching algorithm improving assignment accuracy by 50%.",
      tech: ["React", "C#", ".NET", "MVVM", "Responsive Design"],
      github: "https://github.com/sara6310472/dotNet5785_9427_1873",
      live: "https://aid-nexus-21.vercel.app/",
      highlights: ["100+ volunteers managed", "50% time reduction", "Smart matching algorithm"]
    },
    {
      title: "Employee Management System",
      description: "Modern full-stack employee management with real-time data synchronization and intuitive CRUD operations. Features status tracking, form validation, and responsive design with Chakra UI.",
      tech: ["React", "TypeScript", "Chakra UI", "TanStack Query", "Vite"],
      github: "https://github.com/sara6310472/Employee-Management",
      live: "https://blue-emp-hub.vercel.app/",
      highlights: ["Real-time updates", "Complete CRUD operations", "Modern UI components"]
    },
    {
      title: "Posts Social Network",
      description: "Modern social media application with seamless navigation using React Router. Features personal feed, user profiles, follow system, and real-time social interactions with responsive design.",
      tech: ["React", "React Router", "JavaScript ES6+", "CSS3", "Local Storage"],
      github: "https://github.com/sara6310472/Posts-Tasks-Albums",
      live: "https://pink-petal-network.vercel.app/",
      highlights: ["Social interactions", "Follow system", "Seamless navigation"]
    }
  ];

  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real-world applications delivering measurable impact and value
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group bg-card rounded-2xl p-8 shadow-lg border border-border/50 hover:shadow-2xl hover:border-primary/30 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:gradient-text transition-all">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    {project.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary/50 px-4 py-2 rounded-lg"
                      >
                        <span className="w-2 h-2 bg-accent rounded-full" />
                        {highlight}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 pt-4">

                    {/* View Live */}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 group/btn flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Live
                        <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                      </a>
                    )}

                    {/* View Code */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 group/btn flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>

                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
