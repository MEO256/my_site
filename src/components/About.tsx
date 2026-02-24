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
            graduating in April 2026. I'm fascinated by how machines can understand human
            language, which led me deep into the worlds of{" "}
            <span className="text-foreground font-medium">Machine Learning</span> and{" "}
            <span className="text-foreground font-medium">Natural Language Processing</span>.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            With an international background and a builder mindset, I love turning complex
            research ideas into working systems. Whether it's training sentiment classifiers
            or designing NER pipelines, I'm always looking for the next problem to solve.
          </p>
        </div>

        {/* Decorative graphic */}
        <div className="relative flex items-center justify-center">
          <div className="glass rounded-2xl p-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
            <div className="relative grid grid-cols-2 gap-6">
              <div className="flex flex-col items-center gap-3 p-4">
                <Brain className="w-10 h-10 text-primary" />
                <span className="text-sm text-muted-foreground text-center">ML & NLP</span>
              </div>
              <div className="flex flex-col items-center gap-3 p-4">
                <Code className="w-10 h-10 text-primary" />
                <span className="text-sm text-muted-foreground text-center">Full Stack</span>
              </div>
              <div className="col-span-2 text-center">
                <div className="text-4xl font-black text-gradient">2026</div>
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
