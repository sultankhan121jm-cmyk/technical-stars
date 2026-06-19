/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0f172a",
          blue: "#2563EB",
          "blue-hover": "#1d4ed8",
          "blue-light": "#eff6ff",
          dark: "#1a1a2e",
          muted: "#64748b",
          light: "#f8fafc",
          border: "#f0f0f0",
          cta: "#f59e0b",
        },
      },
      fontFamily: {
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
