import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "Portfolio Website",
    description: "Modern portfolio with animations and glassmorphism.",
    tech: ["React", "TypeScript", "Tailwind"],
  },
  {
    title: "Task Management App",
    description: "Full-stack app with authentication and REST APIs.",
    tech: ["Python", "Flask", "PostgreSQL"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative ">
      <div className="floating-orb absolute w-96 h-96 bg-primary/15 left-1/4 -bottom-48" />

      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-sm uppercase tracking-widest block mb-4">
            My Work
          </span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="project-card">
              <div className="h-48 flex items-center justify-center bg-primary/10">
                <Folder className="w-14 h-14 text-primary/40" />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-xl mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs rounded-md bg-primary/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
