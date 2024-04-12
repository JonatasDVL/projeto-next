import type { Metadata } from "next";
import "./globals.css";
// import { Manrope } from "next/font/google";

// const fontFamilyMarope = Manrope({
//   weight: ["300", "400", "700"],
//   subsets: ["latin"],
//   variable: "--font-family-marope",
// })

export const metadata: Metadata = {
  title: "Projeto",
  description: "teste",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // className={fontFamilyMarope.variable} colocar no html
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
