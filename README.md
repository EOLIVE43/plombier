# Repo `plombier` — Showcase de templates plombier chauffagiste

Repository contenant **2 templates de site web** pour artisans plombiers chauffagistes, présentés via une page vitrine commune.

## 📁 Structure

```
plombier/
├── index.html              ← Page vitrine (showcase des packs)
├── README.md               ← Ce fichier
│
├── pack-1-simple/          ← Pack 1 : 7 pages essentielles
│   ├── index.html
│   ├── services/
│   ├── zones/
│   ├── ...
│   └── README.md
│
└── pack-2-standard/        ← Pack 2 : 17 pages SEO complet
    ├── index.html
    ├── services/
    ├── zones/
    ├── ...
    └── README.md
```

## 🌐 URLs après déploiement GitHub Pages

Si vous nommez ce repo `votre-pseudo.github.io/plombier`, vous obtiendrez :

| URL | Contenu |
|---|---|
| `votre-pseudo.github.io/plombier/` | Page vitrine (catalogue des packs) |
| `votre-pseudo.github.io/plombier/pack-1-simple/` | Démo Pack 1 |
| `votre-pseudo.github.io/plombier/pack-2-standard/` | Démo Pack 2 |

## 🚀 Déploiement sur GitHub Pages

### Étape 1 — Créer le repository

1. [github.com](https://github.com) → **New repository**
2. Nom : `plombier` (ou tout autre nom)
3. Public ✅
4. Pas d'initialisation (vide)
5. Create

### Étape 2 — Uploader les fichiers

1. Décompressez le ZIP livré
2. Sur la page du repo vide, cliquez **"uploading an existing file"**
3. Glissez-déposez **TOUT le contenu** du dossier `plombier-repo/` :
   - `index.html`
   - `README.md`
   - Le dossier `pack-1-simple/`
   - Le dossier `pack-2-standard/`
4. Commit : "Initial showcase upload"

### Étape 3 — Activer GitHub Pages

1. **Settings** → **Pages**
2. Source : Branch `main`, Folder `/ (root)`
3. Save
4. Attendre 1-3 minutes

Votre vitrine est en ligne à `https://votre-pseudo.github.io/plombier/` !

## 🔁 Pour ajouter un nouveau template

Pour ajouter un Pack 3 ou un autre métier (électricien, coiffeur, etc.), suivez le pattern :

1. Créer un nouveau dossier (ex: `pack-3-premium/` ou créer un repo `electricien` séparé)
2. Y placer les fichiers du template
3. **IMPORTANT** : utiliser des **liens relatifs** (`./` et `../`) partout — JAMAIS `/...`
4. Mettre à jour le `index.html` à la racine de `plombier/` pour ajouter une carte du nouveau pack
5. Commit et push

## ⚠️ Mode Staging actif

Toutes les pages des deux packs sont en `noindex, nofollow`. Les `robots.txt` bloquent tous les crawlers. **Aucun risque d'indexation par Google** sur les URLs GitHub Pages.

Pour passer un template en production sur le **vrai domaine d'un client** (ex: `burande-plomberie.fr`), suivez la procédure dans le README spécifique de chaque pack.

## 📝 Différences entre les packs

| | Pack 1 Simple | Pack 2 Standard |
|---|---|---|
| Pages totales | **7** | 17 |
| Pages services | 1 page unique | 1 hub + 7 sous-pages |
| Pages zones | 1 page unique | 1 hub + 4 sous-pages |
| Page rénovation SDB | Intégrée | Page dédiée |
| Page avis | Sur la home | Page dédiée |
| Blog | Non | Structure prête |
| Volume contenu | ~6 000 mots | ~15 000 mots |
| Visuels | 3 emplacements | 15 emplacements |
| **Cible** | Artisan qui débute | Artisan qui veut dominer |

## 🎨 Charte commune

Les deux packs utilisent la **charte du camion Burande** :
- Bleu glacier `#1E5FA8` (structure, header)
- Bleu deep `#154780` (footer, zones sombres)
- Rouge flamme `#E63027` (CTAs, accents)
- Logo flamme + flocon (cohérent avec le camion réel)

Pour un autre client (autre plombier), il suffit de modifier les variables CSS dans `assets/css/style.css` et le logo SVG.

## ✅ Compatible partout

Tous les liens internes sont **relatifs**. Les sites fonctionnent :
- En racine d'un domaine (vrai site client : `https://burande-plomberie.fr/`)
- En sous-dossier GitHub Pages (`https://pseudo.github.io/plombier/pack-1-simple/`)
- Sur Netlify, Vercel, Cloudflare Pages, hébergeur classique
- En local en double-cliquant sur `index.html`

## 📞 Pour aller plus loin

Pour transformer un de ces packs en site client opérationnel :
1. Cloner le pack souhaité dans un nouveau repo dédié
2. Personnaliser couleurs (variables CSS) et logo (SVG)
3. Remplacer placeholders : adresse, téléphone, email, mots-clés
4. Mettre les vraies photos du client
5. Insérer la clé Web3Forms dans le formulaire
6. Suivre la procédure de bascule staging → production du README du pack
7. Acheter domaine + hébergement, mettre en ligne

---

*Showcase agence SEO — Templates statiques HTML/CSS/JS sans framework*
