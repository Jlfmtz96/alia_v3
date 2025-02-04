import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  weight: ["300", "400", "500", "600", "700", "900"], // Especifica los pesos que necesitas
  subsets: ["latin"], // Subconjunto de caracteres
  variable: "--font-barlow", // Define una variable CSS para la fuente
});

export const metadata: Metadata = {
  title: "Alía Residencial",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${barlow.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
