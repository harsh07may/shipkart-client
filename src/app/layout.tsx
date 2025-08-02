import { Toaster } from "@/components/ui/sonner";
import siteConfig from "@/config/siteConfig";
import QueryProvider from "@/providers/QueryProvider";
import type { Metadata } from "next";
import { overpassMono, rubikMono } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: siteConfig.seo.titleTemplate,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.business.name }],
  creator: siteConfig.business.name,
  publisher: siteConfig.business.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.description,
    siteName: siteConfig.business.name,
    images: [
      {
        url: `${siteConfig.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: siteConfig.business.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
    creator: siteConfig.twitter.handle,
    site: siteConfig.twitter.site,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
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
