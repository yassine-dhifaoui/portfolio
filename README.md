# Portfolio Professionnel - Yassine DHIFAOUI

Portfolio web moderne et responsive présentant mon parcours professionnel, mes compétences techniques et mes projets en tant qu'Ingénieur Systèmes Embarqués et Imagerie Médicale.

## 🎯 Caractéristiques

- ✅ **Design moderne** avec thème "neon" (cyan/pink)
- ✅ **Bilingue** : Français et Anglais avec switch de langue
- ✅ **Responsive** : Optimisé pour mobile, tablette et desktop
- ✅ **Sections complètes** :
  - À propos avec 3 langues (Français C1, Anglais B1, Arabe C2)
  - Compétences techniques organisées en 8 catégories
  - 8 expériences professionnelles détaillées
  - 5 projets académiques et personnels
  - Formation avec spécialisations
  - Contact avec liens sociaux

## 🚀 Technologies Utilisées

- **React 19** avec TypeScript
- **Vite** pour le build et le développement
- **Tailwind CSS** pour le styling
- **Context API** pour la gestion de l'état (langue)
- **pnpm** pour la gestion des dépendances

## 📦 Installation

```bash
# Installer les dépendances
pnpm install

# Lancer le serveur de développement
pnpm dev

# Construire pour la production
pnpm build

# Prévisualiser le build de production
pnpm preview
```

## 🌐 Déploiement

### GitHub Pages (Recommandé)

1. **Créer un dépôt GitHub** pour votre portfolio
2. **Pousser le code** :
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/VOTRE_USERNAME/portfolio.git
   git push -u origin main
   ```

3. **Configurer GitHub Actions** (créer le fichier `.github/workflows/deploy.yml`)
4. **Activer GitHub Pages** dans Settings → Pages → Source : GitHub Actions

Votre portfolio sera accessible à : `https://VOTRE_USERNAME.github.io/portfolio/`

Pour plus de détails, consultez le fichier `GUIDE_HEBERGEMENT_GIT.md`.

### Autres Options

- **Vercel** : `vercel --prod`
- **Netlify** : Glissez-déposez le dossier `dist` sur Netlify
- **Cloudflare Pages** : Connectez votre dépôt GitHub

## 📝 Personnalisation

### Modifier le Contenu

Tout le contenu (textes, expériences, projets, compétences) se trouve dans le fichier :
```
translations.ts
```

Ce fichier contient deux objets : `fr` (français) et `en` (anglais).

### Modifier les Couleurs

Les couleurs du thème sont définies dans les classes Tailwind :
- **Cyan** : `text-cyan-400`, `border-cyan-400`, etc.
- **Pink** : `text-pink-400`, `border-pink-400`, etc.
- **Fond** : `bg-[#0d1117]` (gris foncé GitHub)

### Ajouter une Expérience

Dans `translations.ts`, ajoutez un nouvel objet dans `experience.jobs` :

```typescript
{
  date: "janv. 2025 - juin 2025",
  role: "Votre rôle",
  company: "Nom de l'entreprise",
  description: "Description courte",
  tasks: [
    "Tâche 1",
    "Tâche 2",
    "Tâche 3"
  ],
  tech: ["Tech1", "Tech2", "Tech3"],
  link: "https://github.com/votre-projet" // Optionnel
}
```

### Ajouter un Projet

Dans `translations.ts`, ajoutez un nouvel objet dans `projects.items` :

```typescript
{
  title: "Nom du projet",
  date: "2025",
  description: "Description courte",
  details: [
    "Détail 1",
    "Détail 2",
    "Détail 3"
  ],
  tech: ["Tech1", "Tech2"],
  link: "https://github.com/votre-projet" // Optionnel
}
```

## 📂 Structure du Projet

```
portfolio_work/
├── components/          # Composants React
│   ├── About.tsx       # Section À propos
│   ├── Education.tsx   # Section Formation
│   ├── Experience.tsx  # Section Expériences
│   ├── Footer.tsx      # Pied de page
│   ├── Header.tsx      # En-tête avec switch de langue
│   ├── Projects.tsx    # Section Projets
│   ├── Skills.tsx      # Section Compétences
│   └── icons.tsx       # Icônes SVG
├── contexts/           # Contexts React
│   └── LanguageContext.tsx  # Gestion de la langue
├── App.tsx             # Composant principal
├── index.tsx           # Point d'entrée
├── translations.ts     # Contenu FR/EN
├── types.ts            # Types TypeScript
├── index.html          # HTML de base
├── package.json        # Dépendances
├── vite.config.ts      # Configuration Vite
└── tsconfig.json       # Configuration TypeScript
```

## 🎨 Sections du Portfolio

### 1. Header
- Titre principal avec animation
- Bouton de switch de langue (FR/EN)
- Bouton "Voir le CV"

### 2. À Propos
- Description professionnelle complète
- 3 langues avec niveaux

### 3. Compétences
- 8 catégories de compétences techniques
- Barres de progression visuelles
- Secteurs d'expertise

### 4. Expériences Professionnelles
- 8 expériences détaillées
- Timeline visuelle
- Technologies utilisées
- Liens vers projets GitHub

### 5. Projets
- 5 projets académiques et personnels
- Détails techniques
- Liens vers dépôts

### 6. Formation
- 3 diplômes avec spécialisations
- Timeline verticale

### 7. Footer
- Informations de contact
- Liens sociaux (Email, LinkedIn, GitHub)

## 🔧 Scripts Disponibles

```bash
# Développement
pnpm dev              # Lance le serveur de développement

# Production
pnpm build            # Construit pour la production
pnpm preview          # Prévisualise le build

# Déploiement
pnpm deploy           # Déploie sur GitHub Pages (si configuré)
```

## 📱 Responsive Design

Le portfolio est entièrement responsive et optimisé pour :
- 📱 **Mobile** : < 768px
- 💻 **Tablette** : 768px - 1024px
- 🖥️ **Desktop** : > 1024px

## 🌟 Fonctionnalités Avancées

- **Switch de langue** : Changement instantané FR/EN sans rechargement
- **Animations** : Effets de survol et transitions fluides
- **Thème neon** : Design moderne avec effets de glow
- **Liens externes** : Ouverture dans un nouvel onglet
- **SEO-friendly** : Métadonnées optimisées

## 📄 Licence

Ce portfolio est un projet personnel. Vous êtes libre de vous en inspirer pour créer le vôtre.

## 👤 Auteur

**Yassine DHIFAOUI**
- Email : yassine.dhifaoui.94@gmail.com
- LinkedIn : [linkedin.com/in/yassine-dhifaoui](https://www.linkedin.com/in/yassine-dhifaoui/)
- GitHub : [github.com/yassine-dhifaoui](https://github.com/yassine-dhifaoui)

---

**Dernière mise à jour** : Octobre 2025

