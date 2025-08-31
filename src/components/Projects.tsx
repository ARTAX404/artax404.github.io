'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: "E-commerce PWA",
    description: "Application e-commerce progressive avec React et Next.js, optimisée pour mobile et offline.",
    category: "web",
    technologies: ["React", "Next.js", "PWA", "Stripe"],
    image: "/api/placeholder/400/250",
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "Plateforme de Streaming",
    description: "Plateforme de streaming vidéo avec gestion de contenu et système de recommandations.",
    category: "web",
    technologies: ["Node.js", "React", "WebRTC", "MongoDB"],
    image: "/api/placeholder/400/250",
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "Jeu Mobile Unity",
    description: "Jeu mobile 2D développé avec Unity, avec système de progression et achievements.",
    category: "game",
    technologies: ["Unity", "C#", "Mobile", "Game Design"],
    image: "/api/placeholder/400/250",
    link: "#",
    github: "#"
  },
  {
    id: 4,
    title: "Série YouTube Tech",
    description: "Série de tutoriels sur le développement web moderne et les PWA.",
    category: "content",
    technologies: ["Premiere Pro", "After Effects", "Motion Design"],
    image: "/api/placeholder/400/250",
    link: "https://youtube.com/c/ARTAX404",
    github: null
  },
  {
    id: 5,
    title: "Dashboard Analytics",
    description: "Dashboard d'analytics en temps réel pour la gestion de communauté.",
    category: "web",
    technologies: ["React", "D3.js", "WebSocket", "Node.js"],
    image: "/api/placeholder/400/250",
    link: "#",
    github: "#"
  },
  {
    id: 6,
    title: "Campagne Social Media",
    description: "Campagne de community management pour une startup tech.",
    category: "community",
    technologies: ["Social Media", "Analytics", "Growth Hacking"],
    image: "/api/placeholder/400/250",
    link: "#",
    github: null
  }
];

const categories = [
  { id: "all", name: "Tous", icon: "🌟" },
  { id: "web", name: "Web", icon: "💻" },
  { id: "game", name: "Jeux", icon: "🎮" },
  { id: "content", name: "Contenu", icon: "🎬" },
  { id: "community", name: "Community", icon: "👥" }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projets" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mes Projets
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          
          {/* Filtres */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 ${
                  activeCategory === category.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                <div className="text-white text-6xl opacity-20">
                  {project.category === "web" && "💻"}
                  {project.category === "game" && "🎮"}
                  {project.category === "content" && "🎬"}
                  {project.category === "community" && "👥"}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg transition-colors duration-200"
                    >
                      Voir le projet
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-gray-300 text-gray-700 hover:bg-gray-50 text-center py-2 px-4 rounded-lg transition-colors duration-200"
                    >
                      Code source
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 text-lg">
              Aucun projet trouvé dans cette catégorie.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}