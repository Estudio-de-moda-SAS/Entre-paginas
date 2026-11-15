# Entre páginas

*Las historias que escribimos contigo.*

Libro digital de homenaje, hecho por todo el equipo de Ecommerce.
Sitio 100 % estático (Next.js), sin backend.

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
    book.ts                  título, sello de portada, orden de capítulos, modo demo
    portada.ts               la Polaroid de la tapa
    prologo.ts               carta de bienvenida
    indice.ts                fotos sueltas junto al índice
    chapters/
      lo-que-quisimos-decirte.ts  un archivo por capítulo
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
| `mensajes`      | Mensajes personales completos, uno por página. El papel se elige según el largo |
| `momentos`      | Videos y fotos con su pie, uno por página |
| `bienvenida`    | Apertura de solo texto con una nota de advertencia |
| `despedida`     | Carta en dos hojas a doble página (epílogo) |
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

## Mensajes nuevos

En `src/content/chapters/lo-que-quisimos-decirte.ts`, agregar un elemento a
`messages` con `id`, `from` y `body` (texto completo, párrafos separados con
`

`). El índice lista solo a quien escribió y su página.

## Cómo entregar fotos, audios y videos

1. Descargar los archivos (de Drive o de donde estén) y ponerlos en
   `entregas/<capítulo>/` (por ejemplo `entre-risas`). Se pueden usar subcarpetas.
2. Ejecutar:
   ```bash
   npm run medios -- entre-risas
   ```
3. El script deja las versiones para el libro en `public/fotos/entre-risas/`,
   `public/audio/entre-risas/` y `public/videos/entre-risas/`, e imprime la ruta de cada una (la que va en `src`).

Qué hace con cada archivo:

- **Fotos** (JPG, PNG, WebP…): las gira según la cámara, las reduce a 2000 px
  por el lado largo, las convierte a WebP de alta calidad y quita los datos
  de ubicación (GPS).
- **Audios** (MP3, M4A…): los copia tal cual.
- **HEIC de iPhone**: no se pueden leer. Hay que exportarlos como JPG.
- **Videos** (MP4): los copia tal cual a `public/videos/` (los de WhatsApp ya
  vienen comprimidos) y avisa si alguno pasa de 40 MB.

`entregas/` no va a git: los originales se quedan en el computador de cada uno
y nunca se modifican. Las versiones de `public/` sí van al repositorio,
así el libro no depende de ningún servicio externo.
