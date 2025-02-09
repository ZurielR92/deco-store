import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ContextWrapper } from "@/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cuadros Decorativos en Medellín | Canaima.Store",
  description: "Explora Canaima.Store y encuentra una amplia colección de cuadros, descubre arte único y personalizado para tu hogar, oficina, o local en la ciudad de Medellín",
  openGraph:{
    title: "Cuadros Decorativos en Medellín | Canaima.Store",
    description:"Explora Canaima.Store y encuentra una amplia colección de cuadros, descubre arte único y personalizado para tu hogar, oficina, o local en la ciudad de Medellín",
    images: 'https://deco-store.vercel.app/images/og.jpg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ContextWrapper>
          {children}
        </ContextWrapper>
        
      </body>
    </html>
  );
}
