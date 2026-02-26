import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Vestmark Inc",
    role: "Software Engineer Intern",
    location: "Hybrid",
    period: "September 2024 – December 2024",
    description: [
      "Collaborated with 7 team members to develop the Multi-Custodian feature in the VestmarkONE platform, enhancing support for multiple custodians and expanding product functionality",
      "Enhanced the trading feature by identifying user error scenarios, improving reliability using Yarn, Java and JavaScript",
      "Diagnosed and resolved race condition issues in automated tests, improving test stability and reducing false failures",
      "Made UI enhancements to the trade generation interface, improving usability and user interaction",
      "Implemented data decoding solutions to transform UTF-8 encoded information into human-readable formats"
    ],
    stack: ["Java", "JavaScript", "Yarn", "Docker", "Gradle", "Jenkins"]
  },
  {
    company: "Anisad",
    role: "Software Engineer Intern",
    location: "Remote",
    period: "May 2024 – August 2024",
    description: [
      "Developed an AI-powered real estate search tool using the JAICP platform, enabling users to effortlessly find properties",
      "Optimized the real estate AI system's learning platform to support multiple languages",
      "Deployed the bot to Telegram for user interaction",
      "Implemented geographical search into the AI to display exact location of properties",
      "Integrated various LLMs to improve question-answering capabilities and overall system performance"
    ],
    stack: ["JavaScript", "JSON", "JAICP", "Telegram Bot", "LLM", "AI"]
  },
  {
    company: "JunziTech Solutions LLC",
    role: "Front End Engineer",
    location: "Remote",
    period: "April 2024 – May 2024",
    description: [
      "Developed a responsive website using Vite, incorporating modern development practices for optimal performance",
      "Designed the main page layout and user interface in Figma, ensuring a visually appealing and user-friendly experience",
      "Implemented the website's front-end interface using React and Vue.js, ensuring cross-browser compatibility and accessibility"
    ],
    stack: ["React", "Vue.js", "Vite", "Figma", "Tailwind CSS"]
  }
];

const Experience = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="experience" className="py-28 px-6 bg-background/50">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 tracking-tight text-center">
          Work <span className="text-gradient">Experience</span>
        </h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 sm:p-8 group hover:glow-border hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                    <Briefcase className="w-4 h-4" />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <div className="flex flex-col sm:items-end gap-1 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tech}
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

export default Experience;