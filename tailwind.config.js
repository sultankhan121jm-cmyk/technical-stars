/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B4FD8',
          dark: '#0F2F8A',
          light: '#E8EFFE',
        },
        accent: {
          DEFAULT: '#F5A623',
          hover: '#D4891A',
        },
        surface: '#FFFFFF',
        background: '#F0F4FF',
        textMain: '#0D1B2A',
        textSub: '#4A5568',
        brand: {
          primary: '#0F2F8A',
          dark: '#0A1E6E',
          light: '#93B8F8',
          accent: '#F5A623',
          cta: '#F5A623',
          bg: '#F0F4FF',
          background: '#F0F4FF',
          surface: '#FFFFFF',
          navy: '#0D1B2A',
          muted: '#4A5568',
          blue: '#1B4FD8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}