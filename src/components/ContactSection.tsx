import { useState } from 'react';
import { Send, Mail, MapPin, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: 'Message sent!',
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="relative ">
      {/* Decorative background */}
      <div className="floating-orb w-80 h-80 bg-primary/20 -left-40 bottom-0" />
      <div className="floating-orb w-64 h-64 bg-accent/15 right-0 top-1/4" />

      <div className="section-container relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-widest block mb-4">
            Get In Touch
          </span>

          <h2 className="section-title">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>

          <p className="section-subtitle mx-auto mt-4">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="glass p-6 rounded-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold">Let&apos;s Talk</h3>
                  <p className="text-sm text-muted-foreground">
                    I&apos;m always open to new opportunities
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground text-sm">
                Whether you have a project in mind, a question about my work,
                or just want to say hello – I&apos;d love to hear from you!
              </p>
            </div>

            <div className="glass p-6 rounded-2xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-heading font-medium">Email</h4>
                <a
                  href="mailto:your.email@example.com"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  your.email@example.com
                </a>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-heading font-medium">Location</h4>
                <p className="text-muted-foreground text-sm">
                  Your City, Country
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="glass-strong p-8 rounded-2xl space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                className="form-input resize-none"
                placeholder="Tell me about your project or just say hello..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;