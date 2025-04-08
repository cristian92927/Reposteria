import type React from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kry Cake | Repostería Artesanal",
  description:
    "Descubre nuestra selección de productos de repostería artesanal. Pasteles, cupcakes, galletas y más. Haz tu pedido por WhatsApp.",
};

export default function ReposeriaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
