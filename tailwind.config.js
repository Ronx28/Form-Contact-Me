/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Menentukan lokasi file JSX dan TSX untuk proyek React
    './public/index.html', // Jika ada file HTML di folder public
  ],
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }
    },
  },
  plugins: [],
}
