import type { Metadata } from "next";
import type { Viewport } from "next";
import { Fredoka, Nunito } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-display-loaded",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-body-loaded",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Malchingui Eats | Comida local a tu puerta",
  description: "Descubre y pide tus sabores favoritos de Malchingui.",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#F26B1D",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
