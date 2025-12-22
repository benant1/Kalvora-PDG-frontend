# Flux d'Inscription - Espace de Publication

## 📋 Vue d'ensemble

Le système d'inscription pour l'Espace de Publication comprend plusieurs étapes pour garantir la sécurité et la qualité des vendeurs sur la plateforme.

## 🔄 Flux Complet

### 1️⃣ Page d'Informations (`/market/publication-space/info`)
**Objectif** : Présenter les avantages et fonctionnalités de l'Espace de Publication

**Contenu** :
- Hero avec CTA principal
- 4 fonctionnalités principales (Publication Multi-Plateforme, Gestion Centralisée, etc.)
- Processus en 4 étapes
- Documents requis pour l'inscription
- Tarifs (Essai gratuit 7 jours + Plan Pro à 29€/mois)
- CTA vers l'inscription

**Boutons d'action** :
- "S'inscrire maintenant" → Redirige vers `/market/publication-space/register`

---

### 2️⃣ Page d'Inscription (`/market/publication-space/register`)
**Objectif** : Collecter toutes les informations nécessaires en 3 étapes

#### **Étape 1 : Informations Personnelles**
- Prénom *
- Nom *
- Email *
- Téléphone *

#### **Étape 2 : Documents d'Identité**
- Type de document (Carte d'identité, Passeport, Permis de conduire, Autre)
- Numéro du document *
- Téléversement du document * (JPG, PNG ou PDF, max 5MB)
  - Aperçu en temps réel pour les images
  - Validation de la taille et du format

#### **Étape 3 : Informations sur la Boutique**
- Type d'activité (Boutique, Communauté, Marketplace, Entreprise, Autre)
- Nom de la boutique / Entreprise *
- Description (optionnel)
- Acceptation des CGU *

**Validation** :
- Validation par étape (impossible de passer à l'étape suivante sans remplir les champs requis)
- Messages d'erreur clairs
- Barre de progression visuelle

**Boutons d'action** :
- "Précédent" (à partir de l'étape 2)
- "Continuer" (étapes 1 et 2)
- "Valider l'inscription" (étape 3) → Redirige vers `/market/publication-space/pending`

---

### 3️⃣ Page En Attente (`/market/publication-space/pending`)
**Objectif** : Informer l'utilisateur que son inscription est en cours de vérification

**Contenu** :
- Message de confirmation d'inscription reçue
- Timeline visuelle du processus :
  1. ✅ Inscription complétée
  2. 🕐 Vérification en cours (24h max)
  3. ⏳ Email de confirmation à venir
- Informations sur les prochaines étapes
- Rappel de vérifier les emails (y compris spams)
- Statistiques : 24h délai max / 7j essai gratuit / Support 24/7

**Boutons d'action** :
- "Retour à l'accueil"
- Lien vers le support

---

### 4️⃣ Validation par l'Admin (Backend)
**⏰ Délai** : Maximum 24 heures

**Processus** :
1. L'admin reçoit une notification de nouvelle inscription
2. Vérification des documents d'identité
3. Validation ou refus du compte
4. Si validé : Création des identifiants de connexion
5. Envoi de l'email avec :
   - Confirmation de validation
   - Identifiants de connexion (email + mot de passe temporaire)
   - Lien vers la page de connexion

---

### 5️⃣ Page de Connexion (`/market/publication-space/login`)
**Objectif** : Permettre aux utilisateurs validés de se connecter

**Contenu** :
- Formulaire de connexion (Email + Mot de passe)
- Option "Se souvenir de moi"
- Lien "Mot de passe oublié"
- Gestion des erreurs :
  - Email ou mot de passe incorrect
  - **Compte en attente de validation** → Affiche un message spécial
- Lien vers création de compte

**Scénarios** :
1. **Compte validé** → Redirection vers `/market/publication-space/purchase`
2. **Compte en attente** → Message d'information (attente validation 24h)
3. **Identifiants incorrects** → Message d'erreur

**Demo** :
- Email `pending@test.com` pour tester le message d'attente

---

### 6️⃣ Page d'Achat (`/market/publication-space/purchase`)
**Objectif** : Permettre à l'utilisateur de souscrire à l'abonnement après l'essai gratuit

**Contenu** :
- **Bannière Essai Gratuit Actif** (si applicable)
  - Compteur de jours restants (X/7)
  - Message de rappel
  
- **Toggle Mensuel / Annuel**
  - Mensuel : 29€/mois
  - Annuel : 278€/an (au lieu de 348€, -20%, économie de 70€)

- **Plan Pro** avec :
  - 8 fonctionnalités principales
  - Liste des plateformes supportées (Amazon, eBay, Shopify, etc.)
  - Badge de paiement sécurisé
  
- **Bouton d'achat**
  - Si essai actif : "Souscrire maintenant (essai gratuit actif)"
  - Sinon : "Souscrire pour XX€"
  - Note : Débit uniquement après la fin de l'essai

- **Section FAQ** avec 4 questions courantes

**Informations importantes** :
- Résiliable à tout moment
- Garantie satisfait ou remboursé 30 jours
- Aucun frais caché
- Support inclus

---

## 📊 Résumé du Parcours Utilisateur

```
1. Page Market
   ↓ (Clique sur "Créer un Espace de Publication")
   
2. Page Info (/market/publication-space/info)
   ↓ (Clique sur "S'inscrire maintenant")
   
3. Page Inscription (/market/publication-space/register)
   → Étape 1 : Infos personnelles
   → Étape 2 : Documents
   → Étape 3 : Boutique
   ↓ (Clique sur "Valider l'inscription")
   
4. Page En Attente (/market/publication-space/pending)
   ↓ (Attend validation admin - max 24h)
   
5. Email de Confirmation
   ↓ (Clique sur lien de connexion)
   
6. Page Connexion (/market/publication-space/login)
   ↓ (Se connecte avec identifiants reçus)
   
7. Page Achat (/market/publication-space/purchase)
   → Essai gratuit 7 jours activé automatiquement
   → Après 7 jours : choix mensuel (29€) ou annuel (278€)
   → Peut souscrire avant la fin de l'essai
```

## ✅ Points Clés

- ✨ **Essai gratuit automatique** : 7 jours dès la validation du compte
- 🔒 **Validation manuelle** : Sécurité via vérification d'identité (24h max)
- 💳 **Pas de carte requise** : Pour l'essai gratuit
- 📧 **Email de confirmation** : Contient les identifiants de connexion
- ⚡ **Accès immédiat** : Après connexion, l'utilisateur peut commencer
- 🎯 **Conversion flexible** : Choix mensuel ou annuel après l'essai

## 🔐 Sécurité

- Documents d'identité vérifiés manuellement
- Validation en 24h maximum
- Paiement sécurisé
- Données cryptées
- Conformité RGPD

## 🎨 Design

- Interface cohérente avec le reste de la plateforme
- Style Lumynis (gradients, animations, cards modernes)
- Responsive sur tous les écrans
- Messages d'erreur clairs
- Feedback visuel pour chaque action
