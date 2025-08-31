'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            À propos de moi
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Passionné par la création numérique
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Je suis ARTAX404, un créateur polyvalent passionné par l&apos;innovation numérique. 
                Mon expertise s&apos;étend du développement web moderne à la création de contenu vidéo, 
                en passant par la conception de jeux et la gestion de communauté.
              </p>
              <p>
                Spécialisé dans les technologies web modernes, je crée des applications performantes 
                et des PWA (Progressive Web Apps) qui offrent une expérience utilisateur exceptionnelle 
                sur tous les appareils.
              </p>
              <p>
                Mon approche combine créativité technique et vision stratégique pour transformer 
                vos idées en solutions numériques innovantes et impactantes.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3">🎯 Mes objectifs</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Créer des expériences numériques exceptionnelles</li>
                <li>• Innover avec les technologies les plus récentes</li>
                <li>• Partager mes connaissances avec la communauté</li>
                <li>• Construire des solutions durables et évolutives</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3">🚀 Ma philosophie</h4>
              <p className="text-gray-600">
                &ldquo;La technologie doit servir l&apos;humain. Chaque ligne de code, chaque pixel, 
                chaque seconde de vidéo doit créer de la valeur et améliorer l&apos;expérience utilisateur.&rdquo;
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}