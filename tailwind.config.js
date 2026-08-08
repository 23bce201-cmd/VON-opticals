/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Inter", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        von: {
          blue: {
            100: "rgb(var(--von-blue-100-rgb) / <alpha-value>)",
            500: "rgb(var(--von-blue-500-rgb) / <alpha-value>)",
            700: "rgb(var(--von-blue-700-rgb) / <alpha-value>)",
            900: "rgb(var(--von-blue-900-rgb) / <alpha-value>)",
          },
          accent: "rgb(var(--von-accent-rgb) / <alpha-value>)",
          white: "rgb(var(--von-white-rgb) / <alpha-value>)",
          ink: "rgb(var(--von-ink-rgb) / <alpha-value>)",
          mist: "rgb(var(--von-mist-rgb) / <alpha-value>)",
        },
      },
      boxShadow: {
        soft: "none",
        lift: "none",
      },
    },
  },
  plugins: [],
};
