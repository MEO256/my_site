import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <NavBar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <footer className="py-8 text-center text-xs text-muted-foreground border-t border-border/30">
        © {new Date().getFullYear()} Maxim. Built with React & Tailwind.
      </footer>
    </main>
  );
};

export default Index;
