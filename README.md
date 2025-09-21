[README_LIKELANDI.txt](https://github.com/user-attachments/files/22055977/README_LIKELANDI.txt)
# Likelandi — Deploy rápido

1) Entrá a: https://github.com/Likelandi/Likelandi.github.io/upload/main
2) Arrastrá estos archivos a la raíz del repo:
   - index.html
   - og_hero.jpg
   - music_cds.jpg
   - likelandii_logo.png
   - likelandii_logo.svg
   - CNAME  (para likelandi.com.ar)
3) Abajo: "Commit changes".
4) Abrí https://likelandi.github.io (o tu dominio si ya apunta).
# Landia’s Musik — Carpeta de audios

Aquí van los archivos MP3 que querés reproducir en la página:
https://likelandi.github.io/landias-musik.html

## Instrucciones:

1. Crear carpeta:
   assets/audio/

2. Subir tus archivos MP3 a esa carpeta.
   Ejemplo:
     landia-01.mp3
     landia-02.mp3
     landia-03.mp3

3. Revisá que los nombres estén escritos exactamente igual
   (respetar mayúsculas/minúsculas y extensión .mp3).

4. Editá la parte de JavaScript en `landias-musik.html`:
   Busca este bloque:

     const playlist = [
       { title: "Landia — Tema 1", url: "/assets/audio/landia-01.mp3" },
       { title: "Landia — Tema 2", url: "/assets/audio/landia-02.mp3" },
       { title: "Landia — Tema 3", url: "/assets/audio/landia-03.mp3" },
     ];

   Y cambiá `title` y `url` según tus archivos.

   Ejemplo, si subiste:
     justicia.mp3
     cosmiclove.mp3

   Entonces quedaría:
     const playlist = [
       { title: "Justice — D.A.N.C.E", url: "/assets/audio/justicia.mp3" },
       { title: "Florence + the Machine — Cosmic Love", url: "/assets/audio/cosmiclove.mp3" },
     ];

5. Guardá cambios y hacé commit/push en GitHub.
   Luego recargá tu página y ya debería sonar tu playlist. 🎶

---

## Consejos

- Usá nombres cortos, sin espacios ni tildes en los archivos.  
  Ej: `justice-dance.mp3` ✅  |  `Justice D.A.N.C.E (2007).mp3` ❌
- Si un tema no carga, revisá la consola del navegador (F12) o asegurate que la URL exista:
  https://likelandi.github.io/assets/audio/NOMBRE.mp3
