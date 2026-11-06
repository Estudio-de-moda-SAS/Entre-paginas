# Entre páginas

*Las historias que escribimos contigo.*

Libro digital de homenaje, hecho entre los equipos de Producto, Desarrollo,
Marketplace, Marketing y Smartsale. Sitio 100 % estático (Next.js), sin backend.

## Comandos

```bash
npm install
npm run dev     # http://localhost:3000 mientras se trabaja
npm run build   # genera la carpeta out/ lista para publicar
npm start       # sirve out/ para revisarla antes de subirla
```

## Dónde está cada cosa

```
src/
  content/                 ← TODO el contenido del libro (textos, fotos, audios)
    book.ts                  título, equipos, orden de capítulos, modo demo
    portada.ts               la Polaroid de la tapa
    prologo.ts               carta de bienvenida
    indice.ts                fotos sueltas junto al índice
    chapters/
      desarrollo.ts          un archivo por capítulo
      index.ts               registro de capítulos con contenido
    types.ts                 qué campos acepta cada cosa
  components/
    book/                  ← el libro: portada, pliegos, marcapáginas, cierres
    objects/               ← objetos físicos: fotos, Polaroid, cinta, notas, sobre, audio, video
    blocks/                ← composiciones de un capítulo (apertura, collage, notas…)
  app/                     ← rutas: /, /prologo, /indice, /capitulos/[slug]
```

Los componentes no contienen textos: para cambiar el libro se edita `src/content/`.

## Cómo se arma un capítulo

Un capítulo es una lista de **bloques**. Cada bloque se dibuja como un pliego
(doble página en escritorio, páginas seguidas en el celular):

| Bloque          | Qué es |
|-----------------|--------|
| `apertura`      | Título del capítulo, introducción y una foto a sangre |
| `collage`       | 3 a 6 fotos superpuestas, con pies y anotaciones a mano |
| `notas`         | Mensajes en papeles distintos (`carta`, `adhesiva`, `cuaderno`, `kraft`, `rasgado`). Si son muchos, ocupan varios pliegos solos |
| `foto-completa` | Una foto a doble página con una frase encima |
| `sobre-y-voces` | Carta lacrada que se abre, nota de voz y video |

Los capítulos sin archivo aparecen como "en preparación" en el índice.

## Contenido real vs. demostración

- Todo lo provisional lleva `demo: true` y en pantalla se ve con una anotación a lápiz.
- Fotos: se pone la URL en `src`. Sin `src` se dibuja un marcador.
  Los enlaces de Google Drive "compartir" se convierten solos en enlace directo
  (el archivo debe estar compartido como "cualquier persona con el enlace").
- Videos: `youtube` acepta la URL completa (también no listados) o el ID.
- Audios: `src` con la URL directa al `.mp3` / `.m4a`.
- Cuando no quede nada de demostración: `demoMode: false` en `book.ts`.

## Cómo entregar fotos y audios

1. Descargar los archivos (de Drive o de donde estén) y ponerlos en
   `entregas/<equipo>/`: `producto`, `desarrollo`, `marketplace`, `marketing`,
   `smartsale`, `todos`, `notas-personales`. Se pueden usar subcarpetas.
2. Ejecutar:
   ```bash
   npm run medios -- producto
   ```
3. El script deja las versiones para el libro en `public/fotos/producto/` y
   `public/audio/producto/`, e imprime la ruta de cada una (la que va en `src`).

Qué hace con cada archivo:

- **Fotos** (JPG, PNG, WebP…): las gira según la cámara, las reduce a 2000 px
  por el lado largo, las convierte a WebP de alta calidad y quita los datos
  de ubicación (GPS).
- **Audios** (MP3, M4A…): los copia tal cual.
- **HEIC de iPhone**: no se pueden leer. Hay que exportarlos como JPG.
- **Videos**: no se procesan. Van a YouTube (no listado) y se usa el enlace.

`entregas/` no va a git: los originales se quedan en el equipo de cada uno
y nunca se modifican. Las versiones de `public/` sí van al repositorio,
así el libro no depende de ningún servicio externo.
