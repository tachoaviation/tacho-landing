import type { Metadata } from "next";
import { Poppins, Geist_Mono, Geist } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar';
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
  title: "Tacho Aviation",
  description: "Managing Assets for you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body
        className={`${poppins.variable} ${geistMono.variable} antialiased`}
        style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
        suppressHydrationWarning
      >
        {/* Fixed Floating Navbar */}
        <div
          className="px-4 sm:px-6 md:px-12 lg:px-12 fixed left-0 right-0 z-[50] top-4 md:top-[50px]"
        >
          <Navbar />
        </div>
        {children}
        <FooterWrapper />
      </body>
    </html>
  );
}
