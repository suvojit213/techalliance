/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./*.{js,jsx,ts,tsx,html}", // Include files in the root directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};