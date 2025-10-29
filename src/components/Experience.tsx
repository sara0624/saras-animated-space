import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      type: "work",
      title: "Full Stack Developer",
      company: "Oz Software",
      period: "Present",
      description: "Temporary Role",
      achievements: [
        "Refactored legacy backend into modular microservices architecture, reducing API response times by 30%",
        "Optimized client-side data management with React Query and Context API, improving data-fetch speed by 25%",
        "Delivered production features using React, TypeScript, NestJS, Prisma, and PostgreSQL"
      ]
    },
    {
      type: "work",
      title: "Math & Computer Science Tutor",
      company: "Perach Project",
      period: "2025",
      description: "Educational Mentoring",
      achievements: [
        "Developed personalized learning programs with gamification, improving student grades by 20% across 15+ students",
        "Designed interactive problem-solving methods that increased engagement by 40%"
      ]
    },
    {
      type: "education",
      title: "Software Engineering Certificate",
      company: "MAHAT",
      period: "2024–2025",
      description: "Professional Certification",
      achievements: []
    },
    {
      type: "education",
      title: "Teaching Certificate",
      company: "Professional Development",
      period: "2024",
      description: "Educational Qualification",
      achievements: []
    }
  ];

  return (
    <section id="experience" className="py-24">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold">Experience & Education</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary-light hidden md:block" />
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-0 md:pl-20 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-gradient-to-br from-primary to-accent border-4 border-background hidden md:block" />
                  
                  <div className="bg-card rounded-2xl p-6 shadow-lg border border-border/50 hover:shadow-xl hover:border-primary/30 transition-all duration-300 group">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl group-hover:scale-110 transition-transform">
                        {exp.type === "work" ? (
                          <Briefcase className="w-6 h-6 text-primary" />
                        ) : (
                          <GraduationCap className="w-6 h-6 text-primary" />
                        )}
                      </div>
                      
                      <div className="flex-1 space-y-3">
                        <div>
                          <h3 className="text-xl font-bold group-hover:gradient-text transition-all">
                            {exp.title}
                          </h3>
                          <p className="text-muted-foreground font-medium">{exp.company}</p>
                          <p className="text-sm text-muted-foreground">{exp.period} • {exp.description}</p>
                        </div>
                        
                        {exp.achievements.length > 0 && (
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start gap-2 text-muted-foreground">
                                <span className="text-primary mt-1 flex-shrink-0">▸</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
