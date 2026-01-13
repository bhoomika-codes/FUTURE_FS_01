import { Code2, Lightbulb, Rocket, Heart } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, readable, and efficient code.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Breaking complex problems into elegant solutions.",
  },
  {
    icon: Rocket,
    title: "Fast Learner",
    description: "Always eager to learn new technologies.",
  },
  {
    icon: Heart,
    title: "Passionate",
    description: "Love building things that make a difference.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative overflow-hidden py-32">
      <div className="floating-orb absolute w-72 h-72 bg-primary/20 -left-36 top-1/4" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-primary text-sm uppercase tracking-widest block mb-4">
              About Me
            </span>

            <h2 className="section-title mb-6">
              Crafting Digital{" "}
              <span className="gradient-text">Experiences</span>
            </h2>

            <div className="space-y-4 text-muted-foreground">
              <p>
                I&apos;m a Full-Stack Developer and MCA student with a strong
                foundation in Python and modern web technologies.
              </p>
              <p>
                I focus on clean, scalable solutions and continuous improvement.
              </p>
              <p>I enjoy learning by building real-world projects.</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div key={item.title} className="glass p-6 rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
