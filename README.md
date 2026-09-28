# Da Cheng Chuan Paris

Site statique de l'Association Française de Da Cheng Chuan et de Traditions Martiales Chinoises (AFDCCTMC).

Recréé à partir de l'export Webflow, en HTML/CSS/JS sans dépendance.

## Structure

```
index.html          Accueil
latest-posts.html   Nouveautés
a-propos.html       À propos
404.html            Page introuvable
css/style.css       Styles
js/main.js          Menu mobile et animations
images/             Logos, favicon, illustrations
```

## Ajouter un article

Dans `index.html` et `latest-posts.html`, ajoutez une carte dans `<div class="posts-grid">` puis supprimez le bloc `<div class="empty-state">` :

```html
<article class="post-card">
  <a href="mon-article.html">
    <img src="images/mon-image.jpg" alt="Description de l'image">
    <span class="section-title-text">Catégorie</span>
    <h3>Titre de l'article</h3>
  </a>
</article>
```

## Hébergement

Le site est publié avec GitHub Pages depuis la branche `main` (dossier racine).
