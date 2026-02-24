import { useState } from 'react';
import './index.css';


function App() {
  const [activeSection, setActiveSection] = useState('about');

  const projects = [
    {
      title: "Sentiment Analysis with Embeddings",
      description: "Advanced NLP project comparing Bag-of-Words with word embeddings, achieving 92% test accuracy using PyTorch and scikit-learn.",
      tags: ["Python", "PyTorch", "NLP", "Machine Learning"]
    },
    {
      title: "Named Entity Recognition System",
      description: "Implemented NER models for entity extraction and classification with systematic LLM-based annotation approaches.",
      tags: ["Python", "NLP", "Deep Learning", "LLMs"]
    },
    {
      title: "Language Proficiency Visualizations",
      description: "Interactive infographics showing English proficiency statistics among Russians with regional variations.",
      tags: ["Data Visualization", "Python", "Analytics"]
    }
  ];

  const skills = {
    "Languages": ["Python", "TypeScript", "JavaScript"],
    "ML/AI": ["PyTorch", "scikit-learn", "NLP", "Deep Learning"],
    "Tools": ["React", "Git", "VS Code"],
    "Interests": ["German Language (A1.1)", "Soccer", "Music"]
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            <button onClick={() => setActiveSection('about')} className="hover:underline">
              MO
            </button>
          </h1>
          <nav className="flex gap-6">
            {['about', 'projects', 'skills', 'contact'].map(section => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`capitalize transition-colors ${
                  activeSection === section 
                    ? 'text-blue-400' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {section}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col items-center text-center">
          <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-6 flex items-center justify-center text-5xl font-bold">
            MO
          </div>
          <h1 className="text-5xl font-bold mb-4">Maxim Onashchenko</h1>
          <p className="text-xl text-slate-400 mb-2">Computer Science Student & ML Enthusiast</p>
          <p className="text-lg text-slate-500 mb-8">Northeastern University, Boston</p>
          
          <div className="flex gap-4">
            <a href="https://github.com/MEO256" target="_blank" rel="noopener noreferrer" 
               className="px-6 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/maximonashchenko/" target="_blank" rel="noopener noreferrer"
               className="px-6 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
              LinkedIn
            </a>
            <a href="mailto:onaschehnko.m@northeastern.edu"
               className="px-6 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
              Email
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      {activeSection === 'about' && (
        <section className="max-w-4xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">📚 About Me</h2>
          <div className="bg-slate-800/50 rounded-lg p-8 space-y-4">
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm a Computer Science student at Northeastern University with a passion for machine learning 
              and natural language processing. Currently seeking software engineering opportunities at 
              companies like Google where I can apply my skills in ML and Python development.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              My recent work includes sentiment analysis projects achieving 92% accuracy, Named Entity 
              Recognition systems, and data visualization projects. I'm particularly interested in NLP 
              applications and deep learning with PyTorch.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Originally from Russia, I enjoy German culture, playing soccer with international friends, 
              and I'm currently learning German at the A1.1 level.
            </p>
          </div>
        </section>
      )}

      {/* Projects Section */}
      {activeSection === 'projects' && (
        <section className="max-w-4xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">💻 Projects</h2>
          <div className="grid gap-6">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-colors">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-slate-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills Section */}
      {activeSection === 'skills' && (
        <section className="max-w-4xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">🚀 Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-slate-800/50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-400">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-700 rounded-md text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Contact Section */}
      {activeSection === 'contact' && (
        <section className="max-w-4xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">📬 Get In Touch</h2>
          <div className="bg-slate-800/50 rounded-lg p-8 text-center">
            <p className="text-lg text-slate-300 mb-6">
              I'm currently seeking software engineering opportunities. Feel free to reach out!
            </p>
            <div className="flex flex-col gap-4 items-center">
              <a href="mailto:your.email@example.com" 
                 className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                📧 Send Email
              </a>
              <p className="text-slate-400">📍 Boston, MA</p>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-700 mt-20 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-slate-500">
          <p>© 2025 Maxim Onashchenko. Built with React & TypeScript.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;