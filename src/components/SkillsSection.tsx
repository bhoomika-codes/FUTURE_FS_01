import { Code, Server, Database, GitBranch, Cpu, Puzzle } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    skills: ["HTML5", "CSS3", "JavaScript", "React"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Python", "Flask", "REST APIs"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["SQL", "PostgreSQL", "MongoDB"],
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "Tools",
    icon: GitBranch,
    skills: ["Git", "GitHub", "VS Code", "Linux"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Concepts",
    icon: Cpu,
    skills: ["OOP", "DSA", "Algorithms"],
    color: "from-red-500 to-rose-500",
  },
  {
    title: "Soft Skills",
    icon: Puzzle,
    skills: ["Problem Solving", "Communication", "Teamwork"],
    color: "from-indigo-500 to-violet-500",
  },
];

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="relative hero-gradient overflow-hidden "
    >
      <div className="floating-orb absolute w-80 h-80 bg-accent/20 -right-40 top-1/3" />

      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-sm uppercase tracking-widest block mb-4">
            My Skills
          </span>
          <h2 className="section-title">
            Technologies I <span className="gradient-text">Work With</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Tools and technologies I use to bring ideas to life.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div key={category.title} className="skill-card relative">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} p-0.5`}
                >
                  <div className="w-full h-full bg-card rounded-[10px] flex items-center justify-center">
                    <category.icon className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="font-heading font-semibold text-lg">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-lg bg-muted/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
