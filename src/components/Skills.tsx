'use client';

import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Développement Web",
    icon: "💻",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Node.js", level: 75 },
      { name: "Tailwind CSS", level: 90 },
      { name: "PWA", level: 85 }
    ]
  },
  {
    title: "Création de Contenu",
    icon: "🎬",
    skills: [
      { name: "Montage Vidéo", level: 85 },
      { name: "Adobe Premiere", level: 80 },
      { name: "After Effects", level: 70 },
      { name: "Motion Design", level: 75 },
      { name: "Storytelling", level: 80 }
    ]
  },
  {
    title: "Game Development",
    icon: "🎮",
    skills: [
      { name: "Unity", level: 70 },
      { name: "C#", level: 75 },
      { name: "Game Design", level: 80 },
      { name: "3D Modeling", level: 65 },
      { name: "Level Design", level: 75 }
    ]
  },
  {
    title: "Community Management",
    icon: "👥",
    skills: [
      { name: "Stratégie Social Media", level: 85 },
      { name: "Gestion de Communauté", level: 90 },
      { name: "Content Strategy", level: 80 },
      { name: "Analytics", level: 75 },
      { name: "Growth Hacking", level: 70 }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Compétences
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-blue-600 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              🚀 Toujours en apprentissage
            </h3>
            <p className="text-gray-600 mb-6">
              Je suis constamment en train d&apos;apprendre de nouvelles technologies et méthodologies 
              pour rester à la pointe de l&apos;innovation numérique.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {["AI/ML", "Web3", "AR/VR", "Cloud Native", "DevOps", "Mobile Dev"].map((tech) => (
                <span
                  key={tech}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}