# DevMarket - Plateforme Multi-Services

Une plateforme moderne et complète pour les créateurs digitaux, offrant des templates, designs et outils de publication.

## 🚀 Fonctionnalités

### Divisions
- **Tech** - Templates web & mobile professionnels
- **Design** - Designs UI/UX premium et ressources graphiques
- **Market** - Publication et vente multi-plateforme

### Pages Principales
- **Accueil** - Hero moderne avec sections animées et témoignages
- **Services** - Présentation détaillée de nos services
- **À propos** - Notre histoire, mission et valeurs
- **Contact** - Formulaire de contact et informations
- **Carrières** - Opportunités d'emploi
- **Documentation** - Centre de documentation complet
- **FAQ** - Questions fréquentes avec recherche

## 🎨 Design

Interface inspirée de Lumynis avec :
- Gradients animés
- Effets de hover sophistiqués
- Animations fluides (fadeInUp, gradient, pulse)
- Grille de fond élégante
- Cards avec bordures animées
- Navigation avec menu déroulant "Divisions"

## 📁 Structure

```
app/
├── page.tsx              # Page d'accueil
├── services/             # Page des services
├── about/                # À propos
├── contact/              # Contact
├── careers/              # Carrières
├── docs/                 # Documentation
├── faq/                  # FAQ
├── tech/                 # Division Tech
├── design/               # Division Design
├── market/               # Division Market
└── admin/                # Administration

components/
├── navigation.tsx        # Navigation avec menu Divisions
├── hero.tsx              # Hero section avec effets
├── featured-sections.tsx # Sections des divisions
├── testimonials.tsx      # Témoignages clients
├── footer.tsx            # Footer complet
└── ui/                   # Composants UI réutilisables
```

## 🛠️ Technologies

- **Next.js 15** - Framework React
- **TypeScript** - Typage statique
- **Tailwind CSS** - Styling
- **Lucide Icons** - Icônes modernes

## 📱 Responsive

Toutes les pages sont entièrement responsives avec :
- Navigation mobile avec menu hamburger
- Grilles adaptatives
- Typography responsive
- Espacement optimisé

## 🎯 Améliorations Apportées

1. **Navigation restructurée** - Menu "Divisions" pour Tech, Design, Market
2. **Nouvelles pages** - Services, À propos, Contact, Carrières, Docs, FAQ
3. **Footer complet** - Liens, réseaux sociaux, newsletter
4. **Hero amélioré** - Effets visuels, animations, badges
5. **Témoignages** - Section dédiée avec notes et avatars
6. **Sections animées** - Animations d'apparition progressive
7. **CSS personnalisé** - Animations gradient, float, pulse-glow

## 🚦 Pour démarrer

```bash
# Installer les dépendances
pnpm install

# Lancer le serveur de développement
pnpm dev

# Build pour production
pnpm build

# Lancer en production
pnpm start
```

## 📝 Notes

- Toutes les sections "Divisions" maintiennent leurs fonctionnalités d'origine
- Interface cohérente sur toutes les pages
- Optimisé pour les performances et le SEO
- Accessibilité améliorée

## 🎨 Personnalisation

Les couleurs et thèmes sont définis dans `app/globals.css` avec des variables CSS personnalisées :
- `--primary` - Couleur principale (bleu)
- `--accent` - Couleur d'accent (orange)
- `--card` - Fond des cartes
- `--border` - Couleurs des bordures

## 📞 Support

Pour toute question, consultez :
- [Documentation](/docs)
- [FAQ](/faq)
- [Contact](/contact)
