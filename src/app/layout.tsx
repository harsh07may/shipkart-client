import { Toaster } from "@/components/ui/sonner";
import siteConfig from "@/config/siteConfig";
import QueryProvider from "@/providers/QueryProvider";
import type { Metadata } from "next";
import { overpassMono, rubikMono } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${overpassMono.variable} ${rubikMono.variable} antialiased`}
      >
        <QueryProvider>{children}</QueryProvider>
        <Toaster richColors closeButton position="top-center" />
      </body>
    </html>
  );
}
