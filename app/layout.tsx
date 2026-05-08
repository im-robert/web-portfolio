import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  title: "Roberto Capellan — .NET Backend Developer & Software QA Analyst",
  description:
    "Portfolio of Roberto Capellan, .NET Backend Developer & Software QA Analyst specialized in C#, and modern software architectures.",
  keywords: [
    ".NET developer",
    "C# developer",
    "backend developer",
    "software architect",
    "QA Analyst",
    "portfolio",
  ],
  authors: [{ name: "Roberto Capellan" }],
  openGraph: {
    title: "Roberto Capellan — .NET Backend Developer & Software QA Analyst",
    description:
      "Solid architectures, lasting code.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
