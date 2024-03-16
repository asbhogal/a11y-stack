import type { Config } from "tailwindcss";

const config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
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
      chineseBlack: "#101010",
      gray: "#808080",
      antiFlashWhite: "#f1f1f1",
      lotion: "#fafafa",
    },
  },
} satisfies Config;

export default config;
