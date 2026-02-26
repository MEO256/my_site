import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Code, Brain } from "lucide-react";

const About = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-28 px-6">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Text */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Hey! I'm Maxim — a Computer Science student at{" "}
            <span className="text-foreground font-medium">Northeastern University</span>{" "}
            graduating in May 2026. That is my personal website. Made it for fun actually. I'm 
            passionate about building software that solves real problems, from{" "}
            <span className="text-foreground font-medium">trading platforms</span> to{" "}
            <span className="text-foreground font-medium">intelligent chatbots</span>.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            I've had the opportunity to work with different amazing teams at{" "}
            <span className="text-foreground font-medium">Vestmark</span> on financial trading 
            systems and at <span className="text-foreground font-medium">Anisad</span> developing 
            multilingual AI chatbot. I love making life easier for humans and companies by building reliable software.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            When I'm not coding, you'll find me playing soccer, volleyball, 
            learning German (currently at A2), or cheering for{" "}
            <span className="text-foreground font-medium">Borussia Dortmund</span> or 
            <span className="text-foreground font-medium">Ferrari</span> in Formula 1.
             I'm actively 
            seeking full-time software engineering opportunities where I can contribute to 
            meaningful projects and continue growing as a developer.
          </p>
        </div>

        {/* Decorative graphic */}
        <div className="relative flex items-center justify-center">
          <div className="glass rounded-2xl p-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
            <div className="relative grid grid-cols-2 gap-6">
              <div className="flex flex-col items-center gap-3 p-4">
                <Brain className="w-10 h-10 text-primary" />
                <span className="text-sm text-muted-foreground text-center">Frontend and Backend Engineer</span>
              </div>
              <div className="flex flex-col items-center gap-3 p-4">
                <Code className="w-10 h-10 text-primary" />
                <span className="text-sm text-muted-foreground text-center">Full Stack</span>
              </div>
              <div className="col-span-2 text-center">
                <div className="text-4xl font-black text-gradient">May 2026</div>
                <div className="text-xs text-muted-foreground mt-1">Northeastern University</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
