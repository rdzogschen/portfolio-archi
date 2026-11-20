# Site portfolio – images 3D et modélisation

Pages : `index.html` (accueil), `projets.html`, `services.html`, `studio.html`, `contact.html`.

Site statique (HTML/CSS/JS), prêt pour GitHub Pages. Aucune dépendance externe : la police Archivo est hébergée dans `fonts/`.

## À remplacer avant la mise en ligne

Dans `index.html` (recherche / remplacement) :

| Texte actuel | À remplacer par |
|---|---|
| `ton.email@exemple.com` | ton email pro |
| `+33 6 00 00 00 00` et `tel:+33600000000` | ton téléphone |
| `https://www.linkedin.com/in/ton-profil` | ton profil LinkedIn |
| `Références : A2RC Architects, Bruxelles.` | à garder seulement avec l'accord d'A2RC |

## Ajouter une image

1. Exporte trois versions JPG : `images/full/nom.jpg` (2200 px max), `images/hero/nom.jpg` (1600 px) et `images/thumb/nom.jpg` (1200 px max).
2. Dans `projets.html`, copie un bloc `<figure class="tile">` et change :
   - `data-type` : `ext` (extérieur) ou `int` (intérieur) ;
   - les chemins, `width`/`height`, le texte `alt`, le projet et la vue.
3. Pour l'afficher aussi sur l'accueil, copie un bloc `<figure class="card">` dans `index.html`.

## Mise en ligne (GitHub Pages)

1. Crée un dépôt GitHub et envoie-y tout le contenu de ce dossier (index.html à la racine).
2. Settings → Pages → Source : branche `main`, dossier `/root`.
3. Domaine perso : indique-le dans Settings → Pages → Custom domain, puis crée chez ton registraire les enregistrements DNS demandés par GitHub (comme pour driesbormans.com).
