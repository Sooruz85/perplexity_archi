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
        'warm-white': '#FAF9F7',
        'pale-gray': '#F5F4F2',
        'sand': '#E8E3DB',
        'soft-beige': '#D9D2C7',
        'text-soft': '#4A4A4A',
      }
    },
  },
  plugins: [],
}
