import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tejasva Midha | Software Engineering Portfolio",
  description:
    "Portfolio of Tejasva Midha, a Software Engineering Internship candidate building full-stack products, automation systems, and real-time applications.",
  keywords: [
    "Tejasva Midha",
    "Software Engineer",
    "Software Engineering Intern",
    "Full Stack Developer",
    "Next.js",
    "React",
    "Python",
    "TypeScript",
  ],
  authors: [{ name: "Tejasva Midha" }],
  creator: "Tejasva Midha",
  metadataBase: new URL("https://example.com"),
  robots: {
    index: true,
    follow: true,
  },
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#09090b",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetBrainsMono.variable}`}>
      <body className="min-h-screen bg-zinc-950 font-sans text-zinc-100">
        {children}
      </body>
    </html>
  );
}