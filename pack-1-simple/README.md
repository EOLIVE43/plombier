# Pack 1 — Site Plombier Simple

**7 pages essentielles** pour artisan plombier qui démarre son SEO local. Plus simple que le Pack 2, mais avec le même socle technique : SEO complet, charte camion, formulaire fonctionnel.

## ⚠️ Mode Staging actif

Toutes les pages sont en `noindex, nofollow`. Voir section "Bascule production" plus bas.

## 📁 Structure (7 pages)

```
pack-1-simple/
├── index.html                    # Accueil
├── services/index.html           # TOUS les services en une seule page
├── zones/index.html              # Zones d'intervention
├── a-propos/index.html           # Présentation artisan
├── contact/index.html            # Formulaire + coordonnées
├── mentions-legales/index.html   # (noindex)
├── politique-cookies/index.html  # (noindex)
├── assets/
│   ├── css/style.css
│   ├── css/responsive.css
│   └── js/main.js
├── robots.txt
├── sitemap.xml
└── .htaccess
```

## 🎯 Différences vs Pack 2

| | Pack 1 Simple | Pack 2 Standard |
|---|---|---|
| Nombre de pages | **7** | 17 |
| Pages services | 1 page unique avec tous les services en encarts | 1 hub + 7 sous-pages dédiées |
| Pages zones | 1 page unique | 1 hub + 4 sous-pages dédiées |
| Page Rénovation SDB | Intégrée dans Services | Page dédiée |
| Page Avis | Intégrée dans Accueil | Page dédiée |
| Page Blog | Non | Structure prête |
| SEO de base | ✅ Complet | ✅ Complet + plus profond |
| Volume contenu | ~6 000 mots | ~15 000 mots |

## ✅ SEO en place

Chaque page contient :
- Meta title + description optimisés
- Open Graph + Twitter Cards
- Geo meta (FR-43, GPS Vézézoux)
- Canonical URL
- Schema.org JSON-LD : `Plumber` (LocalBusiness avec aggregateRating 5.0/12), `BreadcrumbList`, `FAQPage`
- HTML5 sémantique, breadcrumbs, accessibilité

## 🚀 Liens relatifs

Tous les liens internes sont en **liens relatifs** (`./`, `../`). Ça veut dire que ce site fonctionne :
- À la racine d'un domaine (`https://burande-plomberie.fr/`)
- Dans un sous-dossier (`https://votre-pseudo.github.io/plombier/pack-1-simple/`)
- N'importe où ailleurs

## 🔓 Bascule staging → production

Voir le README principal du repo `plombier/` pour la procédure de bascule en production.
