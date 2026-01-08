/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        background: {
          light: "#ffffff",
          dark: "#09090b",
        },
        foreground: {
          light: "#18181b",
          dark: "#fafafa",
        },
        muted: {
          light: "#71717a",
          dark: "#a1a1aa",
        },
        surface: {
          light: "#f4f4f5",
          dark: "#18181b",
        },
        border: {
          light: "#e4e4e7",
          dark: "#27272a",
        },
        accent: "#4f46e5", // indigo-600 (fintech-safe)
      },
    },
  },
  plugins: [],
};
