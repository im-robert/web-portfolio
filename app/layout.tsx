import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alex Rodríguez — Senior .NET Backend Developer",
  description:
    "Portafolio profesional de Alex Rodríguez, Senior .NET Backend Developer y Software Architect especializado en C#, Azure y arquitecturas de microservicios.",
  keywords: [
    ".NET developer",
    "C# developer",
    "backend developer",
    "software architect",
    "Azure",
    "microservices",
    "portfolio",
  ],
  authors: [{ name: "Alex Rodríguez" }],
  openGraph: {
    title: "Alex Rodríguez — Senior .NET Backend Developer",
    description:
      "Arquitecturas de software sólidas, escalables y orientadas a resultados.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
