import type { NextConfig } from "next";

// Sitio 100 % estático: `npm run build` genera la carpeta `out/`,
// lista para subir a cualquier hosting (Vercel, Netlify, GitHub Pages...).
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  turbopack: { root: process.cwd() },
};

export default nextConfig;
