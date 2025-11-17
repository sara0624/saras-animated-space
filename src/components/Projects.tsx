import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  console.log("THIS IS THE REAL PROJECTS FILE");

  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Title */}
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real-world applications delivering measurable impact and value
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-8">

            {/* ---------------------------------------------------------- */}
            {/* 1) GitLink Developer Platform */}
            {/* ---------------------------------------------------------- */}
            <div
              className="group bg-card rounded-2xl p-8 shadow-lg border border-border/50 hover:shadow-2xl hover:border-primary/30 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: "0s" }}
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:gradient-text transition-all">
                    GitLink Developer Platform
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Platform aggregating GitHub metrics in real-time for 50+ users. Accelerated hiring decisions by 40% through optimized developer insights dashboards with seamless navigation and user profiles.
                  </p>
                </div>

                {/* Tech */}
                <div className="flex flex-wrap gap-2">
                  {["React", "Node.js", "GitHub API", "Real-time Analytics"].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  {["50+ active users", "40% faster hiring", "Real-time metrics"].map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary/50 px-4 py-2 rounded-lg"
                    >
                      <span className="w-2 h-2 bg-accent rounded-full" />
                      {highlight}
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3 pt-4">
                  <a
                    href="https://gitlink-w7ve.onrender.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 group/btn"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Live <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                  </a>

                  <a
                    href="https://github.com/mirigerzon/GitLink"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                </div>
              </div>
            </div>

            {/* ---------------------------------------------------------- */}
            {/* 2) AI Commit Assistant */}
            {/* ---------------------------------------------------------- */}
            <div
              className="group bg-card rounded-2xl p-8 shadow-lg border border-border/50 hover:shadow-2xl hover:border-primary/30 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:gradient-text transition-all">
                    AI Commit Assistant
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    VS Code extension that increased developer efficiency by 50% with AI-powered commit generation and code analysis. Automated 80% of commit workflows using Azure DevOps and Google Gemini AI.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {["Node.js", "VS Code API", "Google Gemini AI", "Azure DevOps"].map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  {["50% efficiency increase", "80% workflow automation", "AI-powered analysis"].map((highlight) => (
                    <div key={highlight} className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary/50 px-4 py-2 rounded-lg">
                      <span className="w-2 h-2 bg-accent rounded-full" />
                      {highlight}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-4">
                  <a
                    href="https://vscode-commit-ai-buddy.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 group/btn"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Live <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                  </a>

                  <a
                    href="https://github.com/sara6310472/AI-Commit-Assistant"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md text-sm font-medium h-10 px-4 py-2"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                </div>
              </div>
            </div>

            {/* ---------------------------------------------------------- */}
            {/* 3) Volunteer Management System */}
            {/* ---------------------------------------------------------- */}
            <div
              className="group bg-card rounded-2xl p-8 shadow-lg border border-border/50 hover:shadow-2xl hover:border-primary/30 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:gradient-text transition-all">
                    Volunteer Management System
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Full-stack application managing 100+ volunteers with dashboard, cutting coordination time by 50%. Features rule-based matching algorithm improving assignment accuracy by 50%.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {["React", "C#", ".NET", "MVVM", "Responsive Design"].map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  {["100+ volunteers managed", "50% time reduction", "Smart matching algorithm"].map((highlight) => (
                    <div key={highlight} className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary/50 px-4 py-2 rounded-lg">
                      <span className="w-2 h-2 bg-accent rounded-full" />
                      {highlight}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-4">
                  <a
                    href="https://aid-nexus-21.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 group/btn"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Live <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                  </a>

                  <a
                    href="https://github.com/sara6310472/dotNet5785_9427_1873"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md text-sm font-medium h-10 px-4 py-2"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                </div>
              </div>
            </div>

            {/* ---------------------------------------------------------- */}
            {/* 4) Employee Management System */}
            {/* ---------------------------------------------------------- */}
            <div
              className="group bg-card rounded-2xl p-8 shadow-lg border border-border/50 hover:shadow-2xl hover:border-primary/30 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:gradient-text transition-all">
                    Employee Management System
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Modern full-stack employee management with real-time data synchronization and intuitive CRUD operations. Features status tracking, form validation, and responsive design with Chakra UI.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {["React", "TypeScript", "Chakra UI", "TanStack Query", "Vite"].map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  {["Real-time updates", "Complete CRUD operations", "Modern UI components"].map((highlight) => (
                    <div key={highlight} className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary/50 px-4 py-2 rounded-lg">
                      <span className="w-2 h-2 bg-accent rounded-full" />
                      {highlight}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-4">
                  <a
                    href="https://blue-emp-hub.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 group/btn"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Live <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                  </a>

                  <a
                    href="https://github.com/sara6310472/Employee-Management"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md text-sm font-medium h-10 px-4 py-2"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                </div>
              </div>
            </div>

            {/* ---------------------------------------------------------- */}
            {/* 5) Posts Social Network */}
            {/* ---------------------------------------------------------- */}
            <div
              className="group bg-card rounded-2xl p-8 shadow-lg border border-border/50 hover:shadow-2xl hover:border-primary/30 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: "0.8s" }}
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:gradient-text transition-all">
                    Posts Social Network
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Modern social media application with seamless navigation using React Router. Features personal feed, user profiles, follow system, and real-time social interactions with responsive design.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {["React", "React Router", "JavaScript ES6+", "CSS3", "Local Storage"].map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  {["Social interactions", "Follow system", "Seamless navigation"].map((highlight) => (
                    <div key={highlight} className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary/50 px-4 py-2 rounded-lg">
                      <span className="w-2 h-2 bg-accent rounded-full" />
                      {highlight}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-4">
                  <a
                    href="https://pink-petal-network.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 group/btn"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Live <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                  </a>

                  <a
                    href="https://github.com/sara6310472/Posts-Tasks-Albums"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md text-sm font-medium h-10 px-4 py-2"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
