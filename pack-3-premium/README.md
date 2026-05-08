# Site Julien Burande Plomberie Chauffagiste

Site statique HTML/CSS/JS, sans framework, optimisé SEO pour le ranking local.

---

## ⚠️ ÉTAT ACTUEL : MODE STAGING / PREVIEW

**Le site est actuellement bloqué à l'indexation par les moteurs de recherche.** Cette protection est volontaire pour éviter que :
- Les URLs de preview (Netlify, GitHub Pages, etc.) soient indexées par Google
- Le contenu (avec placeholders Unsplash, adresse vide, clé Web3Forms manquante) crée du duplicate content avec le futur vrai site
- Le schema LocalBusiness pointe vers la mauvaise URL dans les SERP

**Mécanismes de protection en place** :
1. `<meta name="robots" content="noindex, nofollow">` sur les **21 pages HTML**
2. `robots.txt` qui bloque tous les User-agents (`Disallow: /`)
3. Aucun sitemap déclaré dans le `robots.txt`

Voir la section **"Bascule staging → production"** plus bas dans ce README pour la procédure de mise en ligne réelle.

---

## 📁 Structure du site

```
burande-site/
├── index.html                              # Page d'accueil
├── robots.txt                              # Indications crawlers
├── sitemap.xml                             # Plan du site (Google)
├── .htaccess                               # Config Apache (redirections, cache, gzip)
├── README.md                               # Ce fichier
│
├── assets/
│   ├── css/
│   │   ├── style.css                       # Design system principal
│   │   └── responsive.css                  # Adaptations mobile/tablette
│   ├── js/
│   │   └── main.js                         # JS interactions (menu, cookies, formulaire)
│   └── images/                             # PLACEHOLDER - à remplir
│
├── services/
│   ├── index.html                          # Hub des services
│   ├── plomberie.html
│   ├── depannage-plomberie.html
│   ├── chauffage-chaudiere.html
│   ├── pompe-a-chaleur.html
│   ├── climatisation.html
│   ├── chauffe-eau.html
│   └── poele-granules.html
│
├── zones/
│   ├── index.html                          # Hub des zones
│   ├── plombier-brioude.html
│   ├── plombier-issoire.html
│   ├── plombier-sainte-florine.html
│   └── plombier-lempdes-massiac.html
│
├── renovation-salle-de-bain/index.html     # Activité dédiée
├── a-propos/index.html
├── avis-clients/index.html
├── contact/index.html
├── blog/index.html                         # Structure prête, pas d'articles
├── mentions-legales/index.html
└── politique-cookies/index.html
```

---

## 🎯 Stratégie SEO mise en place

### Mots-clés ciblés (extraits de l'analyse Keyword Planner)

| Page | Mot-clé principal | Volume/mois | Concurrence |
|------|-------------------|-------------|-------------|
| `/zones/plombier-brioude/` | plombier brioude | 90 | **Faible** |
| `/zones/plombier-brioude/` | plomberie brioude | 90 | **Faible** |
| `/services/chauffage-chaudiere/` | chauffagiste brioude | 20 | **Faible** |
| `/zones/plombier-issoire/` | plombier issoire | - | Test marché 14k hab |
| `/services/pompe-a-chaleur/` | pompe à chaleur brioude | - | Gros panier moyen |
| `/services/climatisation/` | climatisation brioude | - | Gros panier moyen |
| `/renovation-salle-de-bain/` | rénovation salle de bain | - | Gros panier moyen |

### Schema.org JSON-LD (rich snippets)

Chaque page contient au minimum :
- **LocalBusiness / Plumber** — NAP, géolocalisation, horaires, avis agrégés
- **AggregateRating** — 5,0/5 sur 12 avis Google → étoiles dans les SERP
- **BreadcrumbList** — Fil d'Ariane visible dans les résultats Google
- **FAQPage** — Questions/réponses en accordéon dans Google

Pages spéciales :
- Accueil : ajoute `WebSite`, `Organization`, 4 `Review` individuelles
- Pages services : ajoute `Service` + `OfferCatalog`
- Pages zones : ajoute `Place` + `areaServed` ciblé
- À propos : ajoute `Person` lié à `LocalBusiness`
- Contact : ajoute `ContactPage`

### Meta SEO

Toutes les pages ont :
- `<title>` 50-60 caractères avec mot-clé en début
- `<meta description>` 150-160 caractères avec CTA
- `<link rel="canonical">` pour éviter le duplicate content
- Open Graph + Twitter Cards
- Geo meta tags (geo.region FR-43, lat/lng)
- `noindex` sur mentions légales et politique cookies

---

## ⚙️ À PERSONNALISER AVANT MISE EN LIGNE

### 1. Domaine

Tous les fichiers contiennent l'URL placeholder `https://www.burande-plomberie.fr/`. Si le domaine final est différent, remplacer partout via un `find & replace` :

```bash
find . -type f \( -name "*.html" -o -name "*.xml" -o -name "*.txt" \) \
  -exec sed -i 's|https://www.burande-plomberie.fr|https://VRAI-DOMAINE.fr|g' {} +
```

### 2. Email de contact

Placeholder : `contact@burande-plomberie.fr` — à confirmer avec Julien.

### 3. Adresse postale

Placeholder dans le JSON-LD : `[Adresse à compléter]`. À remplacer par la vraie adresse de Julien à Vézézoux.

### 4. Clé Web3Forms (formulaire de contact)

Dans `contact/index.html`, remplacer `VOTRE_CLE_WEB3FORMS_ICI` par la clé obtenue sur [web3forms.com](https://web3forms.com) (gratuit, illimité).

```html
<input type="hidden" name="access_key" value="VOTRE_CLE_WEB3FORMS_ICI">
```

### 5. Mentions légales

Compléter dans `mentions-legales/index.html` :
- SIRET de l'entreprise
- N° TVA intracommunautaire (si applicable)
- Hébergeur (nom, adresse, téléphone)

### 6. Images

Le dossier `assets/images/` est vide. À fournir :
- `favicon.svg` (logo simplifié)
- `favicon-32x32.png`, `apple-touch-icon.png`
- `og-image.jpg` (1200×630, pour partages réseaux sociaux)
- `camion-burande.jpg` (photo du camion pour Schema.org)
- `logo.png` (logo entreprise)

Conseil : créer aussi des photos pour chaque service et page zone, en WebP avec fallback JPG.

### 7. Photos d'illustration (15 emplacements VISUEL #1 à #15)

Le site contient **15 emplacements visuels** marqués par des commentaires `<!-- VISUEL #N : ... -->` dans le code HTML. En attendant les vraies photos de Julien, des **placeholders Unsplash** (libres de droit, usage commercial autorisé sans attribution) sont en place.

**Recherche rapide** : `grep -rn "VISUEL #" *.html services/ zones/ a-propos/ renovation-salle-de-bain/`

| # | Emplacement | Page | Type | Format conseillé |
|---|-------------|------|------|------------------|
| 1 | Hero principal | `index.html` | Photo verticale Julien/camion | 800×1000 px (4:5) |
| 2 | Section À propos | `index.html` | Photo carrée détail/mains | 900×900 px (1:1) |
| 3 | Galerie #1 | `index.html` | SDB rénovée | 800×800 px (1:1) |
| 4 | Galerie #2 | `index.html` | PAC installée | 800×800 px (1:1) |
| 5 | Galerie #3 | `index.html` | Chaudière | 800×800 px (1:1) |
| 6 | Galerie #4 | `index.html` | Plomberie | 800×800 px (1:1) |
| 7 | Page Plomberie | `services/plomberie.html` | Photo prestation | 1200×675 px (16:9) |
| 8 | Page Dépannage | `services/depannage-plomberie.html` | Photo intervention | 1200×675 px (16:9) |
| 9 | Page Chauffage | `services/chauffage-chaudiere.html` | Chaudière propre | 1200×675 px (16:9) |
| 10 | Page PAC | `services/pompe-a-chaleur.html` | PAC extérieure | 1200×675 px (16:9) |
| 11 | Page Clim | `services/climatisation.html` | Split intérieur | 1200×675 px (16:9) |
| 12 | Page Chauffe-eau | `services/chauffe-eau.html` | Ballon installé | 1200×675 px (16:9) |
| 13 | Page Poêle | `services/poele-granules.html` | Poêle dans salon | 1200×675 px (16:9) |
| 14 | Hero SDB | `renovation-salle-de-bain/index.html` | Belle SDB rénovée | 1920×1080 px (16:9) |
| 15 | Page À propos | `a-propos/index.html` | Portrait/atelier | 1000×563 px (16:9) |

**Comment remplacer une photo** :

1. Préparer la photo aux bonnes dimensions (utiliser [Squoosh](https://squoosh.app) pour optimiser le poids — viser < 200 Ko par image)
2. La placer dans `assets/images/realisations/` (créer le dossier)
3. Dans le fichier HTML, remplacer l'URL Unsplash par le chemin local :
   ```html
   <!-- AVANT -->
   <img src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?..."
   <!-- APRÈS -->
   <img src="/assets/images/realisations/camion-burande.jpg"
   ```
4. Mettre à jour l'attribut `alt=` avec une description précise (important pour le SEO image)

**Conseils prises de vue** pour Julien :
- **Camion** : photo prise en extérieur en lumière douce (matin ou fin d'après-midi), camion bien centré, fond pas trop chargé
- **Chantiers terminés** : prendre une vue générale propre + 1-2 détails (robinetterie, soudure cuivre…). Avant/après très impactant pour SDB
- **Portrait** : photo de Julien devant son camion ou en atelier, pas trop "studio". Lumière naturelle.
- **Outils/mains** : gros plan sur des mains qui travaillent (cuivre, sertissage, etc.) — donne du caractère
- **Règle d'or** : ne JAMAIS publier de photos floues, mal cadrées ou sombres. Mieux vaut garder le placeholder Unsplash que mettre une mauvaise photo réelle.

**Format technique recommandé** : JPG ou WebP, qualité 80-85%, dimensions exactes du tableau ci-dessus. Pour la performance Google PageSpeed, tous les visuels doivent être **< 200 Ko** (sauf le hero SDB qui peut aller jusqu'à 300 Ko).

---

## 🚀 DÉPLOIEMENT

### Hébergement recommandé

Au choix selon budget et préférence du client :
- **Hébergeur classique avec FTP** (OVH, Infomaniak, o2switch, Hostinger) — Apache, donc le `.htaccess` fourni fonctionne tel quel
- **Netlify / Vercel / Cloudflare Pages** — gratuit pour les sites statiques, déploiement via Git ou drag-and-drop

### Procédure de déploiement (FTP classique)

1. Acheter un nom de domaine (ex: `burande-plomberie.fr` chez un registrar)
2. Souscrire un hébergement web
3. Activer le SSL/HTTPS (souvent inclus avec Let's Encrypt)
4. Connexion FTP avec FileZilla ou équivalent
5. Uploader **tout le contenu** du dossier (sauf `_generate_*.py` qui sont des scripts de build) à la racine du serveur (généralement `/www` ou `/public_html`)
6. Vérifier que le site s'affiche correctement à l'URL
7. Décommenter dans le `.htaccess` les lignes de **redirection HTTPS** (lignes 16-17)

### Étapes post-déploiement (CRUCIAL pour le SEO)

#### Google Search Console
1. Créer un compte sur [search.google.com/search-console](https://search.google.com/search-console)
2. Ajouter la propriété `https://www.burande-plomberie.fr/`
3. Vérifier la propriété (méta-tag, fichier HTML ou DNS)
4. Soumettre le sitemap : `https://www.burande-plomberie.fr/sitemap.xml`
5. Demander l'indexation des pages prioritaires (accueil, services principaux, plombier-brioude)

#### Google Business Profile
1. Créer/réclamer la fiche [business.google.com](https://business.google.com)
2. **NAP rigoureusement identique** au site (Nom, Adresse, Téléphone exactement)
3. Catégorie principale : "Plombier"
4. Catégories secondaires : "Chauffagiste", "Service de réparation de chaudière", "Service de climatisation"
5. Zone d'intervention : Brioude, Issoire, Sainte-Florine, Massiac, Vézézoux, etc.
6. Photos (camion, chantiers terminés, logo)
7. Demander aux nouveaux clients de laisser un avis

#### Annuaires locaux (citations NAP)
Inscrire l'entreprise (avec les MÊMES infos NAP) sur :
- PagesJaunes.fr
- Mappy.com
- Yelp.fr
- 118000.fr
- Hoodspot.fr
- Habitatpresto.com (artisans)

#### Analytics (optionnel, avec consentement RGPD)
Ajouter un script de mesure d'audience dans `index.html` et toutes les autres pages, juste avant `</head>` :

**Google Analytics 4** :
```html
<!-- Ne se déclenche qu'après consentement cookies (voir main.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
```

Ou alternative privacy-friendly : **Plausible**, **Fathom**, **Umami**.

---

## 🔓 BASCULE STAGING → PRODUCTION

Le jour où vous mettez le site en ligne sur le **vrai domaine** (`https://www.burande-plomberie.fr/`), il faut **réactiver l'indexation**. Sans cette étape, le site ne ressortira JAMAIS sur Google.

### Procédure en 3 étapes (10 minutes)

#### Étape 1 — Réactiver l'indexation sur les 19 pages publiques

Les pages `mentions-legales` et `politique-cookies` doivent **rester en noindex** (c'est volontaire). Les **19 autres pages** doivent passer en `index, follow`.

Méthode rapide en ligne de commande (Linux/Mac) :

```bash
# Repérer les fichiers à modifier
grep -rln "MODE PREVIEW" --include="*.html" .

# Remplacer le bloc preview par le bloc production sur les 19 pages publiques
# (à exécuter à la racine du projet)
find . -name "*.html" -not -path "./mentions-legales/*" -not -path "./politique-cookies/*" -exec sed -i \
  -e '/<!-- ⚠️ MODE PREVIEW.*-->$/,/<meta name="robots" content="noindex, nofollow">/c\
<meta name="robots" content="index, follow, max-image-preview:large">' {} \;
```

Méthode manuelle (si pas de terminal) : ouvrir chaque fichier HTML, chercher `MODE PREVIEW` (Ctrl+F dans VSCode), remplacer le bloc :

```html
<!-- ⚠️ MODE PREVIEW/STAGING : pages bloquées à l'indexation
     À LA MISE EN PRODUCTION, remplacer cette ligne par :
     <meta name="robots" content="index, follow, max-image-preview:large"> -->
<meta name="robots" content="noindex, nofollow">
```

Par cette unique ligne :

```html
<meta name="robots" content="index, follow, max-image-preview:large">
```

⚠️ **Ne PAS toucher** aux fichiers `mentions-legales/index.html` et `politique-cookies/index.html` — ils doivent rester en `noindex`.

#### Étape 2 — Réactiver le robots.txt en mode production

Ouvrir `robots.txt` et **remplacer tout son contenu** par cette version production :

```
User-agent: *
Allow: /

Disallow: /mentions-legales/
Disallow: /politique-cookies/
Disallow: /_generate_*.py

Sitemap: https://www.burande-plomberie.fr/sitemap.xml

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: DuckDuckBot
Allow: /
```

#### Étape 3 — Vérifier avant de pousser

1. **Tester le robots.txt** : ouvrir `https://www.burande-plomberie.fr/robots.txt` → doit afficher `Allow: /` et le sitemap
2. **Vérifier les meta robots** : faire un `curl https://www.burande-plomberie.fr/ | grep robots` → doit retourner `index, follow`
3. **Tester avec l'outil Google** : [search.google.com/test/rich-results](https://search.google.com/test/rich-results) → la page doit être "indexable"
4. **Demander l'indexation** dans Google Search Console (Inspection d'URL → Demander indexation)

### Checklist complète de mise en production

À cocher avant de basculer :

- [ ] Domaine acheté et DNS configurés
- [ ] Hébergement souscrit, SSL actif (HTTPS opérationnel)
- [ ] Tous les **placeholders remplacés** : adresse, SIRET, TVA, hébergeur dans mentions légales
- [ ] **Clé Web3Forms** insérée dans `contact/index.html`
- [ ] **Email `contact@burande-plomberie.fr`** créé et opérationnel (test d'envoi/réception)
- [ ] **Vraies photos** de Julien remplacent les placeholders Unsplash (15 emplacements VISUEL #)
- [ ] **Favicon, OG image, logo** placés dans `assets/images/`
- [ ] **Lignes HTTPS du `.htaccess` décommentées** (lignes 16-17)
- [ ] **Robots.txt** basculé en mode production (étape 2 ci-dessus)
- [ ] **Meta robots** des 19 pages publiques basculés en `index, follow` (étape 1)
- [ ] Test final : ouvrir le site dans un navigateur privé, vérifier qu'aucun lien ne casse
- [ ] **Google Search Console** : sitemap soumis, indexation demandée pour les pages prioritaires
- [ ] **Google Business Profile** : créé/réclamé avec NAP identique au site

---

## 🛠️ MAINTENANCE

### Modifier une page
Éditer directement le fichier HTML correspondant. Chaque page est autonome (pas de système de templates côté serveur).

### Ajouter un article de blog
Créer un fichier dans `blog/` (ex: `blog/comment-choisir-pompe-a-chaleur.html`), en s'inspirant de la structure des pages services. Mettre à jour `blog/index.html` pour lister l'article.

### Ajouter une nouvelle zone d'intervention
1. Créer `zones/plombier-NOUVELLE-VILLE.html` en s'inspirant de `zones/plombier-brioude.html`
2. Ajouter le lien dans le footer de toutes les pages (chercher `<h4>Zones</h4>` dans tous les `.html`)
3. Ajouter l'URL dans `sitemap.xml`
4. Ajouter la ville dans le JSON-LD `areaServed` de l'accueil

### Ajouter un nouveau service
Même principe que pour une zone, avec `services/`.

### Mettre à jour les avis
Les avis Google sont intégrés en dur dans :
- `index.html` (4 avis dans le JSON-LD + cartes visibles)
- `avis-clients/index.html` (10 avis)
- `zones/plombier-brioude.html` (3 avis sélectionnés)

Il faudra mettre à jour le **nombre total d'avis** dans le JSON-LD :
```json
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "5.0",
  "reviewCount": "12",  ← à mettre à jour
  "bestRating": "5"
}
```

---

## 📊 SUIVI DE PERFORMANCE

### Outils gratuits recommandés
- **Google Search Console** — Suivi du positionnement, des impressions, des clics
- **Google PageSpeed Insights** — Tests Core Web Vitals (LCP, FID, CLS)
- **Schema.org Validator** ([validator.schema.org](https://validator.schema.org/)) — Tester les rich snippets
- **Rich Results Test** ([search.google.com/test/rich-results](https://search.google.com/test/rich-results)) — Vérifier l'affichage dans Google
- **GTmetrix** — Performance complète

### KPIs à suivre
- Position moyenne sur "plombier brioude", "chauffagiste brioude", "plombier issoire"
- Nombre de demandes de devis via le formulaire
- Nombre d'appels via le clic-to-call (06 38 48 18 09)
- Note moyenne et nombre d'avis Google
- Trafic depuis Google Search Console

### Objectifs réalistes (6 mois)
- Position 1-3 sur "plombier brioude" et "plomberie brioude" (concurrence faible, fort potentiel)
- Position 1-5 sur "chauffagiste brioude"
- Apparition dans le pack local Google Maps pour Brioude et Vézézoux
- 5-10 demandes de devis via le formulaire par mois

---

## 📝 NOTES TECHNIQUES

### Compatibilité navigateurs
- Chrome, Firefox, Safari, Edge : versions des 2 dernières années
- Mobile : iOS 14+, Android 10+

### Performance attendue (Lighthouse)
- Performance : 90-95+
- Accessibilité : 95+
- Best Practices : 95+
- SEO : 100

### Accessibilité
- Contrastes WCAG AA minimum
- Navigation au clavier
- Skip-link, aria-labels, focus-visible
- `prefers-reduced-motion` respecté

---

## 📞 CONTACT

Pour toute question sur ce site, contacter votre agence SEO ou Julien Burande directement.

**Julien Burande Plomberie Chauffagiste**
- Tél : 06 38 48 18 09
- Email : contact@burande-plomberie.fr
- Adresse : Vézézoux, 43390

---

*Site créé en 2026. Stack : HTML/CSS/JS pur, sans framework. Compatible avec tout hébergeur.*
