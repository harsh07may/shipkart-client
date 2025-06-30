import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Overpass_Mono,
  Rubik_Mono_One,
} from "next/font/google";
import "./globals.css";

const overpassMono = Overpass_Mono({
  variable: "--font-overpass-mono",
  subsets: ["latin"],
});

const rubrikMono = Rubik_Mono_One({
  weight: ["400"],
  variable: "--font-rubrik-mono",
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
        className={`${overpassMono.variable} ${rubrikMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
