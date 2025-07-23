import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Overpass_Mono, Rubik_Mono_One } from "next/font/google";
import "./globals.css";

const overpassMono = Overpass_Mono({
  variable: "--font-overpass-mono",
  subsets: ["latin"],
});

const rubikMono = Rubik_Mono_One({
  weight: ["400"],
  variable: "--font-rubik-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shipkart",
  description: "Minimalistic, Neobrutalist e-commerce site.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${overpassMono.variable} ${rubikMono.variable} antialiased`}
      >
        {children}
        <Toaster richColors closeButton position="top-center" />
      </body>
    </html>
  );
}
