import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // "Latent Space" Theme
        background: "#0F172A", // Slate 900
        surface: "#1E293B",    // Slate 800
        primary: "#14B8A6",    // Teal 500 (High contrast accent)
        secondary: "#64748B",  // Slate 500 (Muted text)
        text: "#F8FAFC",       // Slate 50
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-jetbrains)'],
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
