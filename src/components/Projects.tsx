import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Featured Projects</h2>

        <div className="flex flex-col gap-10 max-w-5xl mx-auto">

          {/* GitLink Developer Platform */}
          <div className="p-6 bg-card rounded-2xl shadow border border-border/40 flex flex-col gap-4">
            <h3 className="text-2xl font-bold">GitLink Developer Platform</h3>
            <p className="text-muted-foreground text-lg">
              Platform aggregating GitHub metrics in real-time for 50+ users. Accelerated hiring
              decisions by 40% through optimized developer insights dashboards.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="tag">React</span>
              <span className="tag">Node.js</span>
              <span className="tag">GitHub API</span>
              <span className="tag">Real-time Analytics</span>
            </div>

            <div className="highlights">
              <span className="highlight">50+ active users</span>
              <span className="highlight">40% faster hiring</span>
              <span className="highlight">Real-time metrics</span>
            </div>

            <div className="buttons">
              <a href="https://gitlink-w7ve.onrender.com/" target="_blank" className="btn-primary">
                <ExternalLink className="icon"/> Live
              </a>
              <a href="https://github.com/mirigerzon/GitLink" target="_blank" className="btn-secondary">
                <Github className="icon"/> Code
              </a>
            </div>
          </div>

          {/* AI Commit Assistant */}
          <div className="p-6 bg-card rounded-2xl shadow border border-border/40 flex flex-col gap-4">
            <h3 className="text-2xl font-bold">AI Commit Assistant</h3>
            <p className="text-muted-foreground text-lg">
              VS Code extension that increased developer efficiency by 50% and automates 80% of
              commit workflows.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="tag">Node.js</span>
              <span className="tag">VS Code API</span>
              <span className="tag">Google Gemini AI</span>
              <span className="tag">Azure DevOps</span>
            </div>

            <div className="highlights">
              <span className="highlight">50% efficiency increase</span>
              <span className="highlight">80% workflow automation</span>
              <span className="highlight">AI-powered analysis</span>
            </div>

            <div className="buttons">
              <a href="https://vscode-commit-ai-buddy.vercel.app/" target="_blank" className="btn-primary">
                <ExternalLink className="icon"/> Live
              </a>
              <a href="https://github.com/sara6310472/AI-Commit-Assistant" target="_blank" className="btn-secondary">
                <Github className="icon"/> Code
              </a>
            </div>
          </div>

          {/* Volunteer Management System */}
          <div className="p-6 bg-card rounded-2xl shadow border border-border/40 flex flex-col gap-4">
            <h3 className="text-2xl font-bold">Volunteer Management System</h3>
            <p className="text-muted-foreground text-lg">
              Full‑stack system managing 100+ volunteers with rule‑based matching and 50%
              coordination time reduction.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="tag">React</span>
              <span className="tag">C#</span>
              <span className="tag">.NET</span>
              <span className="tag">MVVM</span>
            </div>

            <div className="highlights">
              <span className="highlight">100+ volunteers</span>
              <span className="highlight">50% time reduction</span>
              <span className="highlight">Smart matching algorithm</span>
            </div>

            <div className="buttons">
              <a href="https://aid-nexus-21.vercel.app/" target="_blank" className="btn-primary">
                <ExternalLink className="icon"/> Live
              </a>
              <a href="https://github.com/sara6310472/dotNet5785_9427_1873" target="_blank" className="btn-secondary">
                <Github className="icon"/> Code
              </a>
            </div>
          </div>

          {/* Employee Management System */}
          <div className="p-6 bg-card rounded-2xl shadow border border-border/40 flex flex-col gap-4">
            <h3 className="text-2xl font-bold">Employee Management System</h3>
            <p className="text-muted-foreground text-lg">
              Modern employee management with real‑time sync, CRUD tools, and responsive Chakra UI
              design.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="tag">React</span>
              <span className="tag">TypeScript</span>
              <span className="tag">Chakra UI</span>
              <span className="tag">TanStack Query</span>
              <span className="tag">Vite</span>
            </div>

            <div className="highlights">
              <span className="highlight">Real-time updates</span>
              <span className="highlight">Complete CRUD operations</span>
              <span className="highlight">Modern UI components</span>
            </div>

            <div className="buttons">
              <a href="https://blue-emp-hub.vercel.app/" target="_blank" className="btn-primary">
                <ExternalLink className="icon"/> Live
              </a>
              <a href="https://github.com/sara6310472/Employee-Management" target="_blank" className="btn-secondary">
                <Github className="icon"/> Code
              </a>
            </div>
          </div>

          {/* Posts Social Network */}
          <div className="p-6 bg-card rounded-2xl shadow border border-border/40 flex flex-col gap-4">
            <h3 className="text-2xl font-bold">Posts Social Network</h3>
            <p className="text-muted-foreground text-lg">
              Social network with profiles, follows, personal feed, real‑time interactions and
              modern responsive UI.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="tag">React</span>
              <span className="tag">React Router</span>
              <span className="tag">JavaScript ES6+</span>
              <span className="tag">CSS3</span>
              <span className="tag">Local Storage</span>
            </div>

            <div className="highlights">
              <span className="highlight">Social interactions</span>
              <span className="highlight">Follow system</span>
              <span className="highlight">Seamless navigation</span>
            </div>

            <div className="buttons">
              <a href="https://pink-petal-network.vercel.app/" target="_blank" className="btn-primary">
                <ExternalLink className="icon"/> Live
              </a>
              <a href="https://github.com/sara6310472/Posts-Tasks-Albums" target="_blank" className="btn-secondary">
                <Github className="icon"/> Code
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* Utility classes inside your CSS/tailwind if needed:
.tag { @apply px-3 py-1 bg-primary/10 text-primary rounded-md text-sm font-medium; }
.highlight { @apply flex items-center gap-2 bg-secondary/40 px-3 py-2 rounded-md text-sm text-muted-foreground; }
.icon { @apply w-4 h-4; }
.btn-primary { @apply inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90; }
.btn-secondary { @apply inline-flex items-center gap-2 border px-
