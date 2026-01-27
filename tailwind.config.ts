import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1120px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "Menlo", "Monaco", "monospace"],
      },
      colors: {
        navy: {
          DEFAULT: "#0A1628",
          50: "#E8EBF0",
          100: "#C5CBD6",
          200: "#9DA8BA",
          300: "#74859E",
          400: "#4B6282",
          500: "#233F66",
          600: "#1A2B47",
          700: "#0A1628",
          800: "#050B14",
          900: "#020509",
        },
        slate: {
          DEFAULT: "#64748B",
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
        },
        accent: {
          DEFAULT: "#0EA5E9",
          dark: "#0284C7",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
