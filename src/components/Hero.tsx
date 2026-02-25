import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const tagline = "CS student passionate about ML & NLP — building things that understand language.";

const Hero = () => {
  const [typed, setTyped] = useState("");
  const [showCursors, setShowCursors] = useState(true);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTyped(tagline.slice(0, i + 1));
      i++;
      if (i >= tagline.length) {
        clearInterval(interval);
        setTimeout(() => setShowCursors(false), 1500);
      }
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-sky-500/10 rounded-full blur-[100px] animate-pulse-glow [animation-delay:1.5s]" />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <div className="absolute -top-10 -left-10 w-24 h-24 bg-pink-500/20 rounded-full blur-[60px] animate-pulse-glow [animation-delay:0.5s]" />
        <div className="flex justify-center mb-6">
          <img 
            src="/132910564.jpg" 
            alt="Maxim Onashchenko" 
            className="w-64 h-64 rounded-full object-cover shadow-2xl shadow-blue-500/50 animate-float border-4 border-blue-500/30"
          />
        </div>
        <h1 className="text-6xl sm:text-8xl font-black tracking-tighter mb-6 animate-fade-up">
          <span className="text-gradient">Maxim</span>
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground mb-10 h-16 animate-fade-up [animation-delay:0.3s] opacity-0">
          {typed}
          {showCursors && (
            <span className="inline-block w-0.5 h-5 bg-primary ml-0.5 animate-pulse-glow" />
          )}
        </p>
        <div className="flex gap-4 justify-center animate-fade-up [animation-delay:0.6s] opacity-0">
          <a
            href="#projects"
            className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:brightness-110 transition-all hover:shadow-[0_0_25px_hsl(var(--primary)/0.4)]"
          >
            See My Work
          </a>
          <a
            href="#"
            className="px-6 py-3 border border-border text-foreground font-semibold rounded-lg hover:border-primary/50 hover:text-primary transition-all"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-scroll-indicator">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
