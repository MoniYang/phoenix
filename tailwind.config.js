/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        theme: {
          red: 'var(--theme-red)',
          darkRed: 'var(--theme-dark-red)',
          darkRed2: 'var(--theme-dark-red2)',
          darkRed3: 'var(--theme-dark-red3)',
        },
        highlight: {
          green: 'var(--highlight-green)',
          blue: 'var(--highlight-blue)',
          yellow: 'var(--highlight-yellow)',
        },
        grey: 'var(--grey)',
        brown: 'var(--brown)',
        darkGrey: 'var(--dark-grey)',
        infoBoard: 'var(--info-board)',

        blackOpacity: {
          1: 'var(--black-opacity-1)',
          2: 'var(--black-opacity-2)',
          3: 'var(--black-opacity-3)',
          4: 'var(--black-opacity-4)',
          5: 'var(--black-opacity-5)',
          6: 'var(--black-opacity-6)',
        },
        whiteOpacity: {
          1: 'var(--white-opacity-1)',
          2: 'var(--white-opacity-2)',
          3: 'var(--white-opacity-3)',
          4: 'var(--white-opacity-4)',
          5: 'var(--white-opacity-5)',
          6: 'var(--white-opacity-6)',
        },
      },
    },
  },
  plugins: [],
}
