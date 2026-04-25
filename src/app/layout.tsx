import type { Metadata } from "next";
import { Poppins, Geist_Mono, Geist } from "next/font/google";
import "./globals.css";
import NavbarWrapper from '@/components/NavbarWrapper';
import FooterWrapper from '@/components/FooterWrapper';
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.tachoaviation.com'),
  title: {
    default: "Tacho Aviation | Aviation Asset Technical Advisory",
    template: "%s | Tacho Aviation",
  },
  description: "Independent, conflict-free, and commercially aware technical advisory for aviation assets. We specialize in Leasing Support, Asset Management, and Technical Oversight.",
  keywords: ["Aviation Asset Management", "Aircraft Lessors", "Leasing Support", "Technical Oversight", "Pre-purchase inspections", "Aviation Technical Advisory"],
  icons: {
    icon: "/favicon.webp",
    shortcut: "/favicon.webp",
    apple: "/favicon.webp",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.tachoaviation.com",
    title: "Tacho Aviation | Aviation Asset Technical Advisory",
    description: "Bridging the gap between technical status and commercial value for the modern aircraft lessor.",
    siteName: "Tacho Aviation",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tacho Aviation",
    description: "Technical extension of the modern aircraft lessor, focusing on Precision Over Assumptions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Tacho Aviation",
              "url": "https://www.tachoaviation.com",
              "logo": "https://www.tachoaviation.com/tachologo.svg",
              "description": "Independent, conflict-free, and commercially aware technical advisory for aviation assets.",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "987654321",
                "contactType": "Customer Service"
              }
            })
          }}
        />
      </head>
      <body
        className={`${poppins.variable} ${geistMono.variable} antialiased`}
        style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
        suppressHydrationWarning
      >
        <NavbarWrapper />
        {children}
        <FooterWrapper />
      </body>
    </html>
  );
}
