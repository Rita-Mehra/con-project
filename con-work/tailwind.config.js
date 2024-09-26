/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#1e293b',
        'theme-purple': '#4f46e5'
      },
    },
    placeholderColor: {
      'primary': '#64748B',
     }
  },
  plugins: [],
}