# Magicajas — sitio web

Cajas y empaques personalizados en Bogotá. Sitio estático publicado con GitHub Pages en https://magicajas.com

## Estructura
- `index.html` — página principal
- `support.js` — motor de la página (no editar)
- `_ds/` — sistema de diseño Magicajas (estilos y componentes)
- `assets/` — logo, favicons, iconos, imagen para redes
- `img/` — fotografías y catálogo
- `CNAME` — dominio personalizado (magicajas.com)
- `.nojekyll` — obligatorio: sin él GitHub ignora la carpeta `_ds`
- `robots.txt`, `sitemap.xml`, `llms.txt`, `site.webmanifest` — SEO y GEO

## Publicar un cambio
```
git add .
git commit -m "Describe el cambio"
git push
```
GitHub Pages actualiza el sitio en 1–3 minutos.
