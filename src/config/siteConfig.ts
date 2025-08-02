const siteConfig = {
  // Basic Info
  title: "Shipkart",
  description: "Minimalistic, Neobrutalist e-commerce site for fashion and lifestyle products.",
  keywords: ["ecommerce", "fashion", "clothing", "lifestyle", "shopping"],
  
  // URLs
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  
  // Social Media
  twitter: {
    handle: "@shipkart",
    site: "@shipkart",
  },
  
  // Contact
  contact: {
    email: "support@shipkart.com",
    phone: "+1-800-SHIPKART",
  },
  
  // Business Info
  business: {
    name: "Shipkart",
    type: "E-commerce",
    founded: "2024",
  },
  
  // SEO
  seo: {
    titleTemplate: "%s | Shipkart",
    defaultTitle: "Shipkart - Fashion & Lifestyle E-commerce",
    additionalMetaTags: [
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        name: "theme-color",
        content: "#000000",
      },
    ],
  },
};

export default siteConfig;
