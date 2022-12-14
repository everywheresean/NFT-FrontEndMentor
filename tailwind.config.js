/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: '375px',
      xl: '1440px',
    },
    fontFamily: {
      'serif': ['Outfit', 'sans-serif'],
    },
    extend: {
      colors: {
        veryDarkBlueMain: 'hsl(217, 54%, 11%)',
        veryDarkBlueCard: 'hsl(216, 50%, 16%)',
        veryDarkBlueLine: 'hsl(215, 32%, 27%)',
      },
    },
  },
  plugins: [],
}
