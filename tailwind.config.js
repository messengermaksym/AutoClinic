/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          deep: '#2d1b4e',
          purple: '#5a3791',
          accent: '#00c6ff',
          dark: '#0f172a',
          light: '#f8fafc'
        }
      }
    },
  },
  plugins: [],
}
