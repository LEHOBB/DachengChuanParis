# Da Cheng Chuan Paris

Site statique de l'Association Française de Da Cheng Chuan et de Traditions Martiales Chinoises (AFDCCTMC).

Recréé à partir du site Webflow (export + contenu CMS de dachengchuanparis.webflow.io), en HTML/CSS/JS sans dépendance.

## Structure

```
index.html              Accueil (article à la une + 8 derniers articles)
latest-posts.html       Nouveautés (tous les articles)
a-propos.html           À propos
posts/*.html            Articles
category/*.html         Pages de catégorie
team-members/*.html     Pages auteur
404.html                Page introuvable
css/style.css           Styles
js/main.js              Menu mobile et animations
images/                 Logos, favicon, illustrations
images/cms/             Images des articles
```

## Ajouter un article

1. Copiez un fichier existant de `posts/` (par ex. `posts/travail-de-los.html`) sous un nouveau nom et modifiez le titre, la catégorie, l'image et le contenu de `<div class="rich-text">`.
2. Placez les images dans `images/cms/`.
3. Ajoutez une carte `<article class="post-card">…</article>` (copiez-en une existante) en tête de la grille dans `index.html`, `latest-posts.html`, la page de catégorie concernée et la page auteur.

## Hébergement

Le site est publié avec GitHub Pages depuis la branche `main` (dossier racine).
