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


        <div className="flex justify-center gap-4 mt-8">
          {[
            { icon: <Github className="w-20 h-20" />, href: "https://github.com/MEO256", label: "GitHub" },
            { icon: <Linkedin className="w-20 h-20" />, href: "https://www.linkedin.com/in/maximonashchenko/", label: "LinkedIn" },
            { icon: <Mail className="w-20 h-20" />, href: "mailto:onashchenko.m@northeastern.edu", label: "Email" },
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
