import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const { ref, isVisible } = useScrollReveal();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  const subject = encodeURIComponent(`Message from ${form.name}`);
  const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
  window.location.href = `mailto:onashchenko.m@northeastern.edu?subject=${subject}&body=${body}`;
};

  return (
    <section id="contact" className="py-28 px-6">
      <div
        ref={ref}
        className={`max-w-2xl mx-auto transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-3 tracking-tight text-center">
          Let's <span className="text-gradient">Connect</span>
        </h2>
        <p className="text-center text-muted-foreground mb-10">
          Open to new grad roles — let's connect!
        </p>

        <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-5">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Name</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-lg border border-border bg-background/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-lg border border-border bg-background/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={4}
              className="w-full rounded-lg border border-border bg-background/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none"
              placeholder="What's on your mind?"
            />
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:brightness-110 transition-all hover:shadow-[0_0_25px_hsl(var(--primary)/0.4)]"
          >
            <Send className="w-4 h-4" />
            Send Message
          </button>
        </form>

        <div className="flex justify-center gap-4 mt-8">
          {[
            { icon: <Github className="w-5 h-5" />, href: "https://github.com/MEO256", label: "GitHub" },
            { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/maximonashchenko/", label: "LinkedIn" },
            { icon: <Mail className="w-5 h-5" />, href: "mailto:onashchenko.m@northeastern.edu", label: "Email" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="p-3 rounded-full glass text-muted-foreground hover:text-primary hover:border-primary/40 hover:glow-border transition-all"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
