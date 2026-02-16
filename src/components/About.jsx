import React from 'react';
import { User, Code, Briefcase } from 'lucide-react';

export default function About() {
  const skills = {
    "Frontend": ["React.js", "JavaScript (ES6+)", "HTML5 & CSS3", "Tailwind CSS", "Responsive Design"],
    // UPDATED BACKEND LIST BELOW:
    "Backend": ["Node.js", "Express.js", "Python", "PHP", "SQL", "MongoDB"],
    "Tools & Others": ["Git & GitHub", "VS Code", "Figma", "Agile/Scrum", "SEO Optimization"]
  };

  return (
    <section id="about" className="min-h-screen flex items-center py-24 bg-neutral-900">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12">
          About <span className="gradient-text">Me</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {[
            { icon: User, title: "Background", text: "I'm a full-stack developer with a passion for creating seamless user experiences. Currently pursuing my degree in Computer Science while building real-world applications." },
            { icon: Code, title: "Interests", text: "Beyond coding, I'm interested in UI/UX design, open-source contribution, and emerging web technologies. I enjoy solving complex problems." },
            { icon: Briefcase, title: "Goals", text: "I'm looking to join a dynamic team where I can contribute to meaningful projects, continue learning, and grow as a developer." }
          ].map((item, index) => (
            <div key={index} className="group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ff6b35] to-[#ff8555] flex items-center justify-center text-white shadow-lg shadow-[#ff6b35]/30">
                  <item.icon size={24} />
                </div>
                <h3 className="text-2xl font-bold">{item.title}</h3>
              </div>
              <p className="text-neutral-400 leading-relaxed text-lg">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div>
          <h3 className="font-serif text-3xl font-bold mb-8">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, techs], index) => (
              <div key={category} className="bg-neutral-950 p-8 rounded-xl border border-neutral-800 hover:-translate-y-1 hover:border-[#ff6b35] transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-[#ff6b35]/10">
                <h4 className="text-xl font-bold text-[#ff6b35] mb-4">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {techs.map(tech => (
                    <span key={tech} className="px-3 py-1.5 bg-neutral-900 border border-neutral-800 rounded-full text-sm text-neutral-400 hover:text-[#ff6b35] hover:border-[#ff6b35] transition-colors cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}