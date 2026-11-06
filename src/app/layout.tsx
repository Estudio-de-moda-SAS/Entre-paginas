import type { Metadata, Viewport } from "next";
import { Caveat, Cormorant_Garamond, Lora } from "next/font/google";
import { Bookmark } from "@/components/book/Bookmark";
import { CloseBook } from "@/components/book/CloseBook";
import { DemoStamp } from "@/components/book/DemoStamp";
import { book } from "@/content/book";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: book.title,
  description: book.tagline,
  // Libro privado: que los buscadores no lo indexen.
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#e8ddc9",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${cormorant.variable} ${lora.variable} ${caveat.variable}`}>
      <body>
        {children}
        <CloseBook />
        <Bookmark />
        {book.demoMode && <DemoStamp />}
      </body>
    </html>
  );
}
