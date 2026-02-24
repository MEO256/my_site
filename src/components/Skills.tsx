import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Code2, Brain, Globe, Wrench } from "lucide-react";

const categories = [
  {
    label: "Languages",
    icon: <Code2 className="w-5 h-5" />,
    skills: ["Python", "JavaScript", "TypeScript"],
  },
  {
    label: "ML / NLP",
    icon: <Brain className="w-5 h-5" />,
    skills: ["scikit-learn", "spaCy", "NLTK", "Word Embeddings"],
  },
  {
    label: "Web",
    icon: <Globe className="w-5 h-5" />,
    skills: ["React", "Tailwind CSS"],
  },
  {
    label: "Tools",
    icon: <Wrench className="w-5 h-5" />,
    skills: ["Git", "GitHub"],
  },
];

const Skills = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills" className="py-28 px-6">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 tracking-tight text-center">
          Tech <span className="text-gradient">Stack</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div key={cat.label} className="glass rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4 text-primary">
                {cat.icon}
                <span className="font-semibold text-sm">{cat.label}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 rounded-full bg-secondary text-foreground border border-border/50 hover:border-primary/40 hover:bg-primary/10 hover:text-primary transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
