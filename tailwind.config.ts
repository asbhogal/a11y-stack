import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    screens: {
      xs: "375px",
      sm: "768px",
      md: "1024px",
      lg: "1440px",
      xl: "2560px",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    colors: {
      black: "#000000",
      vampireBlack: "#0b0b0b",
      chineseBlack: "#101010",
      gray: "#808080",
      turkishRed: "#C8102E",
      accent: "#b7b7a4",
      antiFlashWhite: "#f1f1f1",
      lotion: "#fafafa",
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    fontFamily: {
      sans: ["var(--font-generalSans)"],
      serif: ["var(--font-boska)"],
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
