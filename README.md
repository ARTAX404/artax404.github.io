# 🚀 ARTAX404 - Portfolio Moderne

Portfolio professionnel moderne d'ARTAX404, développé avec Next.js, TypeScript et Tailwind CSS. Ce site présente mes compétences en développement web, création de PWA, montage vidéo, développement de jeux et community management.

## ✨ Fonctionnalités

- **🎨 Design moderne et responsive** - Interface élégante adaptée à tous les appareils
- **⚡ PWA (Progressive Web App)** - Installable sur mobile et desktop
- **🔍 SEO optimisé** - Métadonnées complètes et structure sémantique
- **♿ Accessible** - Conforme aux standards WCAG AA
- **📱 Mobile-first** - Optimisé pour les appareils mobiles
- **🎭 Animations fluides** - Avec Framer Motion
- **🚀 Performance optimisée** - Lighthouse score > 90

## 🛠️ Technologies utilisées

- **Framework**: Next.js 15 avec App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **PWA**: next-pwa
- **CI/CD**: GitHub Actions
- **Tests**: Lighthouse CI

## 📦 Installation et développement

### Prérequis

- Node.js 18+ 
- npm ou yarn

### Installation

```bash
# Cloner le repository
git clone https://github.com/ARTAX404/artax404.github.io.git
cd artax404.github.io

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000).

### Scripts disponibles

```bash
npm run dev          # Serveur de développement
npm run build        # Build de production
npm run start        # Serveur de production
npm run lint         # Vérification du code
npm run type-check   # Vérification TypeScript
npm run lighthouse   # Audit Lighthouse local
```

## 📝 Guide de modification du contenu

### 🎯 Modifier les informations personnelles

1. **Hero Section** (`src/components/Hero.tsx`)
   - Modifier le titre et la description
   - Changer les liens sociaux

2. **About Section** (`src/components/About.tsx`)
   - Modifier la présentation
   - Ajuster les objectifs et la philosophie

### 🛠️ Modifier les compétences

Éditer `src/components/Skills.tsx` :

```typescript
const skillCategories = [
  {
    title: "Votre Catégorie",
    icon: "🎯",
    skills: [
      { name: "Compétence", level: 90 },
      // ...
    ]
  }
];
```

### 📂 Modifier les projets

Éditer `src/components/Projects.tsx` :

```typescript
const projects = [
  {
    id: 1,
    title: "Nom du projet",
    description: "Description du projet",
    category: "web", // web, game, content, community
    technologies: ["React", "Next.js"],
    link: "https://votre-projet.com",
    github: "https://github.com/votre-repo"
  }
];
```

### 📈 Modifier l'expérience

Éditer `src/components/Experience.tsx` :

```typescript
const experiences = [
  {
    id: 1,
    year: "2024",
    title: "Titre du poste",
    company: "Nom de l'entreprise",
    description: "Description du poste",
    technologies: ["React", "Node.js"],
    type: "freelance" // fulltime, freelance, contract
  }
];
```

### 📧 Modifier les informations de contact

Éditer `src/components/Contact.tsx` :
- Changer l'email de contact
- Modifier les liens sociaux
- Ajuster les services proposés

## 🚀 Déploiement

### Vercel (Recommandé)

1. Connecter votre repository GitHub à Vercel
2. Configurer les variables d'environnement si nécessaire
3. Déployer automatiquement

### GitHub Pages

```bash
# Build pour GitHub Pages
npm run build
npm run export

# Déployer le dossier out/
```

### Variables d'environnement

Créer un fichier `.env.local` :

```env
NEXT_PUBLIC_SITE_URL=https://artax404.fr.nf
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## 🔧 Configuration PWA

Le site est configuré comme PWA avec :

- **Manifest** : `/public/manifest.json`
- **Service Worker** : Configuré via `next-pwa`
- **Icons** : Utilise le logo existant

### Personnaliser la PWA

1. Modifier `/public/manifest.json`
2. Ajouter des icônes dans `/public/`
3. Ajuster la configuration dans `next.config.ts`

## 📊 Tests et qualité

### Lighthouse

```bash
# Test local
npm run lighthouse

# Test CI
npm run lighthouse:ci
```

### Vérifications automatiques

Le CI/CD vérifie automatiquement :
- ✅ Build de production
- ✅ Tests TypeScript
- ✅ Linting ESLint
- ✅ Audit Lighthouse
- ✅ Déploiement preview

## 🎨 Personnalisation du design

### Couleurs

Modifier `tailwind.config.ts` :

```typescript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#eff6ff',
        600: '#2563eb',
        // ...
      }
    }
  }
}
```

### Typographie

Le site utilise Inter par défaut. Pour changer :

1. Modifier `src/app/layout.tsx`
2. Importer une nouvelle police Google Fonts
3. Ajuster les classes Tailwind

## 📱 PWA Features

- ✅ Installable sur mobile et desktop
- ✅ Fonctionnement hors ligne
- ✅ Notifications push (configurable)
- ✅ Splash screen personnalisé
- ✅ Thème adaptatif

## 🔍 SEO et métadonnées

### Métadonnées principales

Modifier `src/app/layout.tsx` :

```typescript
export const metadata: Metadata = {
  title: "Votre titre",
  description: "Votre description",
  // ...
};
```

### Open Graph

Les métadonnées Open Graph sont configurées pour :
- Facebook et LinkedIn
- Twitter Cards
- WhatsApp et autres réseaux

## 🚨 Dépannage

### Problèmes courants

1. **Build échoue**
   ```bash
   npm run type-check
   npm run lint
   ```

2. **PWA ne s'installe pas**
   - Vérifier le manifest.json
   - Tester sur HTTPS
   - Vérifier les icônes

3. **Lighthouse score bas**
   - Optimiser les images
   - Réduire le bundle JavaScript
   - Améliorer le Core Web Vitals

## 📄 Structure du projet

```
artax404.github.io/
├── src/
│   ├── app/                 # App Router Next.js
│   ├── components/          # Composants React
│   └── styles/             # Styles globaux
├── public/                 # Assets statiques
├── .github/workflows/      # CI/CD
├── .lighthouserc.json     # Configuration Lighthouse
└── README.md              # Ce fichier
```

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📞 Support

- **Email** : contact@artax404.fr.nf
- **GitHub** : [@ARTAX404](https://github.com/ARTAX404)
- **YouTube** : [@ARTAX404](https://youtube.com/c/ARTAX404)

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

---

**Développé avec ❤️ par ARTAX404**

*Dernière mise à jour : Août 2024*
