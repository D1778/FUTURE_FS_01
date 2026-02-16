import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Main-Project-Data",
      description: "Frontend for the university internship group project, built with HTML, Tailwind CSS, and JavaScript.",
      tech: ["HTML", "Tailwind CSS", "JavaScript"],
      link: "#",
      github: "https://github.com/D1778/Main-Project-Data.git"
    },
    {
      title: "Mini Employee Management System",
      description: "A full-stack employee management web app that lets users search and filter employee data using a Node.js API.",
      tech: ["HTML","Tailwind CSS", "JavaScript", "Node.js"],
      link: "#",
      github: "https://github.com/D1778/node_website_1.git"
    },
    {
      title: "Mini Employee Hub - Express Version",
      description: "A full-stack employee management web application built with Node.js and Express that allows users to view, search, and filter employee records through a clean and responsive interface.",
      tech: ["HTML","Tailwind CSS", "JavaScript", "Node.js","Express.js"],
      link: "#",
      github: "https://github.com/D1778/Express_website.git"
    },
    {
      title: "Next.js Multi-Page Web Application",
      description: "A modern multi-page web application built with Next.js, featuring reusable React components and responsive UI design using Tailwind CSS.",
      tech: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
      link: "#",
      github: "https://github.com/D1778/nextjs.git"
    },
    {
      title: "Mini Movie Management CRUD Application",
      description: "A Node.js and MySQL-based CRUD application developed to perform basic movie data management operations with image upload support.",
      tech: ["Node.js", "Express.js", "MySQL", "HTML", "Tailwind CSS", "Multer"],
      link: "#",
      github: "https://github.com/D1778/Mini_Moviewebapp.git"
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12">
          Featured <span className="gradient-text">Web Works</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-neutral-900 p-8 rounded-xl border border-neutral-800 hover:-translate-y-2 hover:border-[#ff6b35] transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-[#ff6b35]/10 flex flex-col h-full">
              <h3 className="font-serif text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-neutral-400 leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-neutral-950 border border-neutral-800 rounded-full text-sm text-neutral-400">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-6 mt-auto">
                {project.link !== "#" && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#ff6b35] font-medium hover:gap-3 transition-all">
                    View Project <ExternalLink size={16} />
                  </a>
                )}
                {project.github !== "#" && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-neutral-500 hover:text-[#ff6b35] font-medium hover:gap-3 transition-all">
                    GitHub <Github size={16} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}