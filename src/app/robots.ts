import { MetadataRoute } from "next";
import siteConfig from "@/config/siteConfig";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/admin/",
        "/_next/",
        "/private/",
        "/temp/",
      ],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
} 