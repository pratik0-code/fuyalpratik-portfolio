import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pratik Fuyal | Web Developer & AI/ML Enthusiast",
  description:
    "Portfolio of Pratik Fuyal — a passionate web developer and AI/ML learner building smart, beautiful digital experiences.",
  keywords: [
    "Pratik Fuyal",
    "web developer",
    "AI ML",
    "portfolio",
    "React",
    "Next.js",
    "machine learning",
  ],
  authors: [{ name: "Pratik Fuyal" }],
  openGraph: {
    title: "Pratik Fuyal | Web Developer & AI/ML Enthusiast",
    description:
      "Portfolio of Pratik Fuyal — a passionate web developer and AI/ML learner.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
