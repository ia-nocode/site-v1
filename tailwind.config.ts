import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        forest: {
          DEFAULT: "#1A1F2C", // Changed from blue to dark purple
          light: "#2A2F3C", // Slightly lighter variant
        },
        mint: {
          DEFAULT: "#9b87f5", // Changed to primary purple
        },
        divine: {
          DEFAULT: "#8B5CF6", // Changed to vivid purple
        }
      },
      fontFamily: {
        sans: ["Inter var", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;