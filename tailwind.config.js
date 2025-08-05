/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyan': {
          300: '#66fcf1',
          400: '#45a29e',
          500: '#2a8c85',
          600: '#1f6a63',
          700: '#154742',
          900: '#0a2523',
        }
      }
    },
  },
  plugins: [],
}