import { Overpass_Mono, Rubik_Mono_One } from "next/font/google";

export const overpassMono = Overpass_Mono({
  variable: "--font-overpass-mono",
  subsets: ["latin"],
});

export const rubikMono = Rubik_Mono_One({
  weight: ["400"],
  variable: "--font-rubik-mono",
  subsets: ["latin"],
});
