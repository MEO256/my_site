import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Github, ExternalLink, BarChart3, Type, Plus, Calendar, Gamepad2 } from "lucide-react";

const projects = [
  {
    title: "Sentiment Analysis System",
    description:
      "Compared Bag-of-Words vs. word embedding approaches for sentiment classification, achieving 92% accuracy on benchmark datasets.",
    stack: ["Python", "scikit-learn", "NLP"],
    icon: <BarChart3 className="w-8 h-8" />,
    github: null,
    demo: null,
  },
  {
    title: "Named Entity Recognition",
    description:
      "Built a custom NER pipeline to extract entities from unstructured text using statistical and rule-based methods.",
    stack: ["Python", "spaCy", "NLTK"],
    icon: <Type className="w-8 h-8" />,
    github: null,
    demo: null,
  },
  {
    title: "Calendar Task Manager",
    description:
      "Built a comprehensive calendar application with 5000+ lines of code featuring full CRUD operations for tasks and events with customizable layouts.",
    stack: ["Java", "JSON", "XML", "SceneBuilder"],
    icon: <Calendar className="w-8 h-8" />,
    github: "https://github.com/MEO256/Calendar",
    demo: null,
  },
  {
    title: "Multiplayer Battleship Game",
    description:
      "Developed an online Battleship game with Hunt/Target AI algorithm and real-time multiplayer using socket programming, following MVC architecture.",
    stack: ["Java", "Sockets", "JSON", "AI"],
    icon: <Gamepad2 className="w-8 h-8" />,
    github: "https://github.com/MEO256/Battle_Ship",
    demo: null,
  },
];

const Projects = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="py-28 px-6">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 tracking-tight text-center">
          Featured <span className="text-gradient">Projects</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="glass rounded-2xl p-6 group hover:glow-border hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-primary mb-4">{p.icon}</div>
              <h3 className="text-lg font-bold mb-2 text-foreground">{p.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                {p.github && (
                  <a
                    href={p.github}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {p.demo && (
                  <a
                    href={p.demo}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Live demo"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          ))}

          {/* Placeholder card */}
          <div className="rounded-2xl border-2 border-dashed border-border/50 p-6 flex flex-col items-center justify-center text-center min-h-[250px]">
            <Plus className="w-8 h-8 text-muted-foreground/50 mb-3" />
            <span className="text-sm text-muted-foreground/50 font-medium">
              Coming Soon
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
