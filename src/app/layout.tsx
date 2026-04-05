import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Devphicx Digital Agency | Websites That Bring You Customers",
  description:
    "Full-stack digital agency helping businesses grow through high-converting websites, modern UI/UX design, and result-driven digital solutions. 50+ projects delivered.",
  keywords: [
    "web development agency",
    "website design",
    "digital agency India",
    "Devphicx",
    "UI/UX design",
    "e-commerce development",
    "SEO services",
  ],
  authors: [{ name: "Devphicx Digital Agency" }],
  openGraph: {
    title: "Devphicx Digital Agency | Websites That Bring You Customers",
    description:
      "We help businesses grow 3x through stunning, high-converting websites. 50+ projects. 30+ happy clients.",
    type: "website",
    locale: "en_IN",
    siteName: "Devphicx Digital Agency",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devphicx Digital Agency",
    description:
      "We build websites that bring you customers. 50+ projects delivered.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="min-h-screen bg-bg-primary text-text-primary antialiased selection:bg-accent/30 selection:text-white">
        {/* Global Texture Overlay */}
        <div className="pointer-events-none fixed inset-0 z-[100] opacity-[0.03] mix-blend-overlay">
          <svg className="h-full w-full">
            <filter id="noiseFilter">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.65"
                numOctaves="3"
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter)" />
          </svg>
        </div>

        {/* Global Grid Overlay */}
        <div 
          className="pointer-events-none fixed inset-0 z-[1] opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.2) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {children}
      </body>
    </html>
  );
}
