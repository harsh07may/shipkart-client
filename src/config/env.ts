export const env = {
  // API Configuration
  API_URL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:7019/api",
  
  SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",

  // App Configuration
  NODE_ENV: process.env.NODE_ENV || "development",
  IS_PRODUCTION: process.env.NODE_ENV === "production",
  IS_DEVELOPMENT: process.env.NODE_ENV === "development",
  
  // Feature Flags
  ENABLE_ANALYTICS: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === "true",
  ENABLE_DEBUG: process.env.NEXT_PUBLIC_ENABLE_DEBUG === "true",
} as const;

// Type-safe environment variables
export type Env = typeof env; 