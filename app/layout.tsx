import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://uriel-gandelman.dev"),
  title: "Uriel Gandelman | Software Developer & Community Leader",
  description:
    "Portfolio for Uriel Gandelman, a TIC student and software developer focused on AI agents, scalable systems, low-level architecture, and community leadership.",
  openGraph: {
    title: "Uriel Gandelman",
    description: "Building AI agents, scalable systems, and participating in hackathons.",
    type: "website",
    images: ["/credentials/platanus-hack-26-UriGandel.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
