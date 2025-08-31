'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    year: "2024",
    title: "Lead Developer & Content Creator",
    company: "ARTAX404 Studio",
    description: "Développement de PWA modernes, création de contenu tech sur YouTube, et gestion de communauté.",
    technologies: ["Next.js", "React", "PWA", "YouTube", "Community Management"],
    type: "freelance"
  },
  {
    id: 2,
    year: "2023",
    title: "Full Stack Developer",
    company: "Startup Tech",
    description: "Développement d'applications web complètes avec focus sur l'expérience utilisateur et les performances.",
    technologies: ["React", "Node.js", "TypeScript", "MongoDB", "AWS"],
    type: "fulltime"
  },
  {
    id: 3,
    year: "2022",
    title: "Game Developer",
    company: "Indie Game Studio",
    description: "Conception et développement de jeux mobiles avec Unity, focus sur le game design et l'optimisation.",
    technologies: ["Unity", "C#", "Mobile Development", "Game Design"],
    type: "contract"
  },
  {
    id: 4,
    year: "2021",
    title: "Video Editor & Motion Designer",
    company: "Digital Agency",
    description: "Création de contenu vidéo pour des marques, montage et motion design pour campagnes marketing.",
    technologies: ["Premiere Pro", "After Effects", "Motion Design", "Storytelling"],
    type: "freelance"
  },
  {
    id: 5,
    year: "2020",
    title: "Community Manager",
    company: "Tech Startup",
    description: "Gestion de communauté sur les réseaux sociaux, stratégie de contenu et growth hacking.",
    technologies: ["Social Media", "Analytics", "Content Strategy", "Growth Hacking"],
    type: "fulltime"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Expérience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-blue-200"></div>

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex flex-col md:flex-row items-center`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-5/12 ${
                index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
              }`}>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                      {experience.year}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      experience.type === 'fulltime' ? 'bg-green-100 text-green-800' :
                      experience.type === 'freelance' ? 'bg-purple-100 text-purple-800' :
                      'bg-orange-100 text-orange-800'
                    }`}>
                      {experience.type === 'fulltime' ? 'CDI' :
                       experience.type === 'freelance' ? 'Freelance' : 'Mission'}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {experience.title}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {experience.company}
                  </p>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {experience.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              📈 Évolution continue
            </h3>
            <p className="text-gray-600 mb-6">
              Chaque expérience m&apos;a permis d&apos;acquérir de nouvelles compétences et de développer 
              une vision holistique du développement numérique moderne.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">5+</div>
                <div className="text-sm text-gray-600">Années d&apos;expérience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-600">Projets réalisés</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">20+</div>
                <div className="text-sm text-gray-600">Technologies maîtrisées</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-gray-600">Satisfaction client</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}