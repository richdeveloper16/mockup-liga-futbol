/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gym: {
          purple: '#9d4edd',   // Morado neón
          darkPurple: '#5a189a',
          black: '#0a0a0a',
          card: '#1c1c1c',     // Color de la tarjeta
        }
      },
      boxShadow: {
        'neon': '0 0 20px rgba(157, 78, 221, 0.5)',
        'neon-strong': '0 0 30px rgba(157, 78, 221, 0.8)',
      }
    },
  },
  plugins: [],
}