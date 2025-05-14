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
          DEFAULT: '#0056b3', // A sporty blue color
          dark: '#003b7a',
          light: '#0074e0',
        },
        secondary: {
          DEFAULT: '#e63946', // A sporty red color
          dark: '#c01e2d',
          light: '#f45c69',
        },
        neutral: {
          DEFAULT: '#f1faee',
          dark: '#1d3557',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

