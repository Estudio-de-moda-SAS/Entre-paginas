#!/usr/bin/env node
/**
 * Prepara las fotos, audios y videos entregados para usarlos en el libro.
 *
 *   npm run medios -- producto        (un equipo)
 *   npm run medios                    (todos los equipos de entregas/)
 *   npm run medios -- producto --rehacer   (vuelve a generar aunque ya existan)
 *
 * Lee:      entregas/<equipo>/          ← originales, NUNCA se modifican
 * Escribe:  public/fotos/<equipo>/*.webp  (máx. 2000 px, calidad alta, sin datos GPS)
 *           public/audio/<equipo>/*       (copia tal cual)
 *           public/videos/<equipo>/*.mp4  (copia tal cual; los de WhatsApp ya vienen comprimidos)
 *
 * Al final imprime una tabla con cada foto, su proporción y la ruta que va
 * en el contenido del capítulo (campo `src`).
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const ENTREGAS = process.env.ENTREGAS_DIR ?? path.join(ROOT, "entregas");
const PUBLIC = process.env.PUBLIC_DIR ?? path.join(ROOT, "public");

const MAX = 2000; // lado largo en px: nítido en pantallas grandes y retina
const QUALITY = 84;

const FOTO = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".tif", ".tiff", ".gif"]);
const VIDEO = new Set([".mp4", ".m4v", ".webm"]);
const VIDEO_PESADO_MB = 40; // GitHub avisa desde 50 MB y rechaza desde 100 MB

/**
 * Lee duración y tamaño de un MP4 sin herramientas externas
 * (cajas mvhd y tkhd; tiene en cuenta la rotación de los videos de celular).
 */
function infoMp4(file) {
  try {
    const b = fs.readFileSync(file);
    const m = b.indexOf("mvhd");
    const v = b[m + 4];
    const escala = v ? b.readUInt32BE(m + 24) : b.readUInt32BE(m + 16);
    const dur = v ? Number(b.readBigUInt64BE(m + 28)) : b.readUInt32BE(m + 20);
    let w = 0;
    let h = 0;
    for (let t = b.indexOf("tkhd"); t > 0 && !w; t = b.indexOf("tkhd", t + 4)) {
      const o = b[t + 4] ? 12 : 0;
      const girado = b.readInt32BE(t + 44 + o) === 0;
      const tw = b.readUInt32BE(t + 80 + o) / 65536;
      const th = b.readUInt32BE(t + 84 + o) / 65536;
      if (tw && th) [w, h] = girado ? [th, tw] : [tw, th];
    }
    const s = Math.round(dur / escala);
    return { w, h, duracion: `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}` };
  } catch {
    return { w: 0, h: 0, duracion: "?" };
  }
}

const AUDIO = new Set([".mp3", ".m4a", ".aac", ".ogg", ".opus", ".wav"]);
const NO_SOPORTADO = new Set([".heic", ".heif"]);

const args = process.argv.slice(2);
const rehacer = args.includes("--rehacer");
const equipos = args.filter((a) => !a.startsWith("--"));

/** "Foto Cumpleaños Ana (2).JPG" → "foto-cumpleanos-ana-2" */
function slug(name) {
  return name
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "archivo";
}

function ratioDe(w, h) {
  const r = w / h;
  if (r > 1.65) return "wide";
  if (r > 1.15) return "landscape";
  if (r < 0.87) return "portrait";
  return "square";
}

/** Recorre una carpeta (incluye subcarpetas) y devuelve archivos. */
function archivos(dir) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith(".") || e.name.startsWith("_")) continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...archivos(p));
    else out.push(p);
  }
  return out.sort((a, b) => a.localeCompare(b, "es", { numeric: true }));
}

/** Evita que dos archivos distintos terminen con el mismo nombre. */
function nombreLibre(usados, base, ext) {
  let name = base + ext;
  for (let i = 2; usados.has(name); i++) name = `${base}-${i}${ext}`;
  usados.add(name);
  return name;
}

async function procesarEquipo(equipo) {
  const origen = path.join(ENTREGAS, equipo);
  const destFotos = path.join(PUBLIC, "fotos", equipo);
  const destAudio = path.join(PUBLIC, "audio", equipo);
  const destVideo = path.join(PUBLIC, "videos", equipo);
  const filas = [];
  const avisos = [];
  const usados = new Set();

  for (const file of archivos(origen)) {
    const ext = path.extname(file).toLowerCase();
    const rel = path.relative(origen, file);
    const base = slug(path.relative(origen, file).slice(0, -ext.length || undefined));

    if (NO_SOPORTADO.has(ext)) {
      avisos.push(`${rel}: formato HEIC de iPhone. Expórtala como JPG y vuelve a ponerla.`);
      continue;
    }

    if (FOTO.has(ext)) {
      const name = nombreLibre(usados, base, ".webp");
      const out = path.join(destFotos, name);
      fs.mkdirSync(destFotos, { recursive: true });
      try {
        const al = fs.existsSync(out) && !rehacer && fs.statSync(out).mtimeMs >= fs.statSync(file).mtimeMs;
        if (!al) {
          await sharp(file)
            .rotate() // respeta la orientación de la cámara
            .resize({ width: MAX, height: MAX, fit: "inside", withoutEnlargement: true })
            .webp({ quality: QUALITY, effort: 5 })
            .toFile(out); // sharp no copia metadatos (GPS, cámara) salvo que se pida
        }
        const meta = await sharp(out).metadata();
        const kb = Math.round(fs.statSync(out).size / 1024);
        const orig = await sharp(file).metadata();
        if (Math.max(orig.width ?? 0, orig.height ?? 0) < 1000) {
          avisos.push(`${rel}: es pequeña (${orig.width}×${orig.height}). Se verá bien solo en tamaño reducido; si hay una versión más grande, mejor.`);
        }
        filas.push({
          original: rel,
          src: `/fotos/${equipo}/${name}`,
          tamaño: `${meta.width}×${meta.height}`,
          ratio: ratioDe(meta.width, meta.height),
          kb,
          estado: al ? "ya estaba" : "nueva",
        });
      } catch (e) {
        avisos.push(`${rel}: no se pudo leer (${e.message.split("\n")[0]}).`);
      }
      continue;
    }

    if (AUDIO.has(ext)) {
      const name = nombreLibre(usados, base, ext);
      const out = path.join(destAudio, name);
      fs.mkdirSync(destAudio, { recursive: true });
      const al = fs.existsSync(out) && !rehacer;
      if (!al) fs.copyFileSync(file, out);
      const mb = (fs.statSync(out).size / 1048576).toFixed(1);
      if (ext === ".wav") avisos.push(`${rel}: WAV pesa mucho (${mb} MB). Si se puede, mejor en MP3 o M4A.`);
      filas.push({ original: rel, src: `/audio/${equipo}/${name}`, tamaño: `${mb} MB`, ratio: "audio", kb: "", estado: al ? "ya estaba" : "nueva" });
      continue;
    }

    if (VIDEO.has(ext)) {
      const name = nombreLibre(usados, base, ext);
      const out = path.join(destVideo, name);
      fs.mkdirSync(destVideo, { recursive: true });
      const al = fs.existsSync(out) && !rehacer;
      if (!al) fs.copyFileSync(file, out);
      const mb = fs.statSync(out).size / 1048576;
      const { w, h, duracion } = infoMp4(out);
      if (mb > VIDEO_PESADO_MB) avisos.push(`${rel}: pesa ${mb.toFixed(0)} MB. Mejor comprimirlo (por ejemplo, enviándolo por WhatsApp) antes de subirlo.`);
      const forma = !w ? "?" : w / h < 0.9 ? "vertical" : w / h > 1.1 ? "horizontal" : "square";
      filas.push({ original: rel, src: `/videos/${equipo}/${name}`, tamaño: `${w}×${h} · ${duracion}`, ratio: forma, kb: `${mb.toFixed(1)} MB`, estado: al ? "ya estaba" : "nuevo" });
      continue;
    }

    if ([".mov", ".avi", ".mkv"].includes(ext)) {
      avisos.push(`${rel}: este formato no se reproduce en todos los navegadores. Pásalo a MP4 (WhatsApp lo convierte al enviarlo).`);
    } else {
      avisos.push(`${rel}: tipo de archivo no reconocido, se omite.`);
    }
  }

  console.log(`\n── ${equipo} ──`);
  if (filas.length) console.table(filas);
  else console.log("No hay fotos, audios ni videos.");
  for (const a of avisos) console.log("  ⚠ " + a);
}

if (!fs.existsSync(ENTREGAS)) {
  console.log(`No existe la carpeta ${path.relative(ROOT, ENTREGAS) || ENTREGAS}. Crea entregas/<equipo>/ y pon ahí los archivos.`);
  process.exit(1);
}

const lista = equipos.length
  ? equipos
  : fs.readdirSync(ENTREGAS, { withFileTypes: true }).filter((e) => e.isDirectory()).map((e) => e.name);

for (const eq of lista) {
  if (!fs.existsSync(path.join(ENTREGAS, eq))) {
    console.log(`\n── ${eq} ──\n  ⚠ No existe entregas/${eq}/`);
    continue;
  }
  await procesarEquipo(eq);
}
