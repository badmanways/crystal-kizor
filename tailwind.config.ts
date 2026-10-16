import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        page: "#EFECE6",
        primary: "#3F5243",
        ink: "#1C1B19",
        muted: "#605D57",
        darkWhite: "#BFB9AC",
        crispWhite: "#F7F5F0",
        surfaceDark: "#161615",
      },
      fontFamily: {
        sans: ["var(--font-instrument-sans)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;

