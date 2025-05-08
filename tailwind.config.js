/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lilita': ['Lilita One', 'sans-serif'],
        'permanent': ['Permanent Marker', 'cursive'],
        'luckiest': ['Luckiest Guy', 'cursive'],
      },

      boxShadow: {
        'bottom-only': '0 3px 0 rgba(0, 0, 0, 0.5)', // Change values as needed
      },
    },
  },
  plugins: [],
}