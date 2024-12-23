// eslint-disable

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Crème colors
        creme: {
          100: "#fffaf3",
          200: "#fef1d6",
          300: "#f7e1b8",
          400: "#f5e7da",
          500: "#f2d3b2",
          600: "#d7b997",
          700: "#c69d7d",
          800: "#b38c64",
          900: "#d4c3b2",
        },
        // Pink colors
        pink: {
          100: "#ffe5ec",
          200: "#ffb3c7",
          300: "#ff80a3",
          400: "#fcb1c4",
          500: "#f79bb0",
          600: "#f36a8f",
          700: "#e57390",
          800: "#d25c7d",
          900: "#c1476a",
        },
        // Light mode colors
        light: {
          background: "#ffffff",
          foreground: "#171717",
          text: "#333333",
          accent: "#f9fafb",
        },
        // Dark mode colors
        dark: {
          background: "#0a0a0a",
          foreground: "#ededed",
          text: "#e5e7eb",
          accent: "#111827",
        },
      },
    },
  },
  plugins: [],
};
