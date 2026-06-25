/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cesde: {
          blue: {
            DEFAULT: '#0F2647', // Azul institucional principal
            light: '#1E3E6B',
            dark: '#08162B'
          },
          yellow: {
            DEFAULT: '#F2C12E', // Amarillo/Dorado complementario
            hover: '#D9AB20'
          },
          gray: {
            bg: '#F4F6F9',
            text: '#4A5568'
          }
        }
      }
    },
  },
  plugins: [],
}