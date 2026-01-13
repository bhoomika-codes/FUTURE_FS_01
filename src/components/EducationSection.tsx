import { GraduationCap, Calendar } from 'lucide-react';

const education = [
  {
    degree: 'MCA',
    institution: 'Maharaja Institute of Technology',
    period: '2024 – Present',
  },
  {
    degree: "Bachelor's Degree",
    institution: 'MIT First Grade College',
    period: '2021 – 2024',
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="relative ">
      <div className="floating-orb absolute w-64 h-64 bg-accent/20 -right-32 top-1/4" />

      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-sm uppercase tracking-widest block mb-4">
            Education
          </span>
          <h2 className="section-title">
            Academic <span className="gradient-text">Journey</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {education.map((edu) => (
            <div key={edu.degree} className="glass p-6 rounded-2xl">
              <div className="flex items-center gap-4 mb-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                <h3 className="font-heading font-semibold">{edu.degree}</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                {edu.institution} • {edu.period}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
