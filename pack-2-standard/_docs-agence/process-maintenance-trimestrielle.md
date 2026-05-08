# 🔄 Process Maintenance Trimestrielle - Guide Agence

> **Document interne agence**. Ne pas partager au client.
> Sert à formaliser le process de publication trimestrielle des chantiers.

## 🎯 Objectif

Maintenir le site client **vivant et indexé** par Google avec une fréquence de mise à jour suffisante (minimum 1 fois par trimestre, idéalement 4 chantiers par publication).

## 📅 Calendrier type

| Mois | Action | Qui |
|---|---|---|
| Mois 1 | Le client uploade chantier 1 dans Drive + remplit Google Doc | Client |
| Mois 1-3 | Le client uploade chantiers 2, 3, 4 progressivement | Client |
| **Mois 4 (premiers jours)** | **L'agence intervient pour publier** | **Agence** |
| Mois 4 (jour 5) | Site mis à jour, mail au client avec liens | Agence |
| Mois 4-7 | Le client recommence à uploader | Client |

**Périodes de publication recommandées** : début janvier, début avril, début juillet, début octobre. C'est un calendrier qui évite les vacances scolaires.

## 🛠 Process de publication agence (1-2h par batch)

### 1. Préparation (15 min)

- [ ] Récupérer le Google Doc partagé du trimestre
- [ ] Récupérer les photos du Drive partagé
- [ ] Vérifier qu'il y a bien de la matière (au moins 2 chantiers complets)
- [ ] Si moins de 2 chantiers, **relancer le client** par mail avec un récap

### 2. Optimisation des photos (15 min)

Pour chaque photo :
- [ ] Redimensionner à 1500 px de large max
- [ ] Compresser avec [TinyPNG](https://tinypng.com) ou [Squoosh.app](https://squoosh.app/) (cible : < 200 Ko)
- [ ] Renommer en kebab-case : `pompe-chaleur-issoire-installation.jpg`
- [ ] Ajouter dans le repo : `pack-2-standard/assets/images/realisations/`

### 3. Génération des pages chantiers via Claude Code (30-45 min)

**Prompt à utiliser** :

```
Voici le contenu Google Doc du chantier que je veux publier sur le site burande-plomberie.fr :

[COLLER LE CONTENU DU BLOC GOOGLE DOC ICI]

Photos disponibles :
- pack-2-standard/assets/images/realisations/[nom-fichier-1].jpg
- pack-2-standard/assets/images/realisations/[nom-fichier-2].jpg

Crée une nouvelle entrée dans /pack-2-standard/realisations/index.html
en suivant exactement le pattern des chantiers existants.

Optimise pour le SEO local :
- Titre H3 : inclure ville et type de prestation
- Alt-texts photos descriptifs
- 4 highlights pertinents

Mets à jour aussi le sitemap.xml.
```

### 4. Mise à jour du sitemap

- [ ] Ajouter les nouvelles pages chantiers individuelles si applicable
- [ ] Mettre à jour la `<lastmod>` de la page `/realisations/`

### 5. Tests avant push

- [ ] Ouvrir `realisations/index.html` en local pour vérifier le visuel
- [ ] Vérifier que toutes les images chargent
- [ ] Vérifier que les CTA fonctionnent
- [ ] Vérifier le responsive mobile (DevTools)

### 6. Push GitHub + Notification client

- [ ] `git add .` puis `git commit -m "Maintenance Q1 2025 - 4 nouveaux chantiers"` puis `git push`
- [ ] Attendre que GitHub Pages redéploie (~2 min)
- [ ] Tester l'URL en ligne
- [ ] Mail au client avec :
  - Lien vers la page Réalisations
  - Liste des chantiers ajoutés
  - Note pour les 3 mois à venir

## 💰 Tarification suggérée

| Volume | Prix HT | Inclus |
|---|---|---|
| 1-2 chantiers/trim. | 120 € | Publication, optimisation photos, test |
| 3-4 chantiers/trim. | 200 € | Idem + mise à jour pages services |
| 5-8 chantiers/trim. | 350 € | Idem + page individuelle pour 2 chantiers vedettes |

> Ces tarifs supposent que le client a bien rempli le Google Doc.
> Si le contenu est incomplet et qu'on doit "deviner" / demander des infos, **+30%**.

## 📧 Templates emails

### Mail de relance (mois 3, 1 semaine avant publication)

> Objet : Petit rappel — vos chantiers du trimestre 🔧
>
> Bonjour Julien,
>
> J'espère que tout va bien de votre côté. La publication trimestrielle de vos chantiers approche (prévue le [DATE]).
>
> J'ai vu que vous avez ajouté X chantiers dans le Drive, c'est super.
>
> Si vous avez d'autres chantiers récents à ajouter avant la publication, c'est le moment !
> N'oubliez pas le Google Doc : [LIEN].
>
> À très vite,
> [Votre nom]

### Mail de confirmation publication

> Objet : ✅ Vos nouveaux chantiers sont en ligne !
>
> Bonjour Julien,
>
> Bonne nouvelle : vos X chantiers du trimestre sont publiés sur votre site.
>
> 👉 [LIEN PAGE RÉALISATIONS]
>
> Au programme cette fois :
> - [Chantier 1]
> - [Chantier 2]
> - [...]
>
> Pour le prochain trimestre, vous pouvez recommencer à uploader vos photos et compléter le Google Doc.
>
> Bonne semaine,
> [Votre nom]

## 🚦 Indicateurs à monitorer

À vérifier dans Google Search Console après chaque publication :
- [ ] Nouvelles pages indexées (compter)
- [ ] Mots-clés ressortants sur ces pages
- [ ] Évolution du trafic global (Search Console + Analytics)

## ⚠️ Cas particuliers

### Le client n'a rien envoyé du tout sur le trimestre

→ Mail de relance puis appel téléphonique. Si toujours rien, **publier au moins 1 article éditorial** (ex: "Comment bien choisir sa pompe à chaleur en Haute-Loire ?") pour que le site continue d'être actif aux yeux de Google.

### Le client envoie 8+ chantiers d'un coup

→ Bonne nouvelle ! Mais ne pas tout publier d'un coup, sinon Google va voir une montée brutale puis plus rien. **Étaler sur 2 publications** (50/50) avec 6 semaines d'écart.

### Photos pas exploitables (floues, mal cadrées, etc.)

→ Mail au client : "J'ai bien reçu, mais ces photos ne mettront pas votre travail en valeur. Pourriez-vous m'en envoyer d'autres pour ces chantiers ?" Toujours expliquer **pourquoi** (effort qualité = retombées SEO).

---

*Process Agence × Julien Burande - v1.0 - À adapter par retour d'expérience*
