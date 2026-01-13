import { Github, Linkedin, Download, Mail, ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Background orbs */}
      <div className="floating-orb w-96 h-96 bg-primary/30 top-20 -left-48" />
      <div className="floating-orb w-64 h-64 bg-accent/30 bottom-20 -right-32" />

      <div className="section-container w-full relative z-10">
        {/* ⬇️ reduced gap from 16 → 10 */}
        <div className="grid lg:grid-cols-2 items-center gap-60">
          
          {/* TEXT */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight whitespace-nowrap">
              Hello, I&apos;m{' '}
              <span className="gradient-text">Bhoomika B</span>
            </h1>

            <p className="mt-5 text-xl text-muted-foreground">
              Full-Stack Developer | Python Enthusiast
            </p>

            <p className="mt-3 max-w-xl mx-auto lg:mx-0 text-muted-foreground">
              Passionate about building clean, scalable web applications and
              learning modern technologies.
            </p>

            <div className="mt-7 flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="/resume.pdf" download className="btn-primary">
                <Download className="w-5 h-5" />
                Download Resume
              </a>

              <a href="#contact" className="btn-secondary">
                <Mail className="w-5 h-5" />
                Contact Me
              </a>
            </div>

            <div className="mt-7 flex gap-4 justify-center lg:justify-start">
              <a
                className="social-icon"
                href="https://github.com/bhoomika-codes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github />
              </a>
              <a
                className="social-icon"
                href="https://www.linkedin.com/in/b-bhoomika"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin />
              </a>
            </div>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center lg:justify-start">
            {/* ⬇️ Bigger photo + ring */}
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full glass-strong p-3">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  src="/profile.jpg"
                  alt="Bhoomika B"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* SCROLL */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
          <a href="#about">
            <ArrowDown className="animate-bounce text-muted-foreground" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;