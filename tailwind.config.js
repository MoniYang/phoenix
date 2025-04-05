/** @type {import('tailwindcss').Config} */

import colors from 'tailwindcss/colors';
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        theme: {
          red: 'var(--theme-red)',
          darkRed: 'var(--theme-dark-red)',
        },
        black: {
          DEFAULT: colors.black,
          1: 'var(--black-opacity-1)',
          2: 'var(--black-opacity-2)',
          3: 'var(--black-opacity-3)',
          4: 'var(--black-opacity-4)',
          5: 'var(--black-opacity-5)',
          6: 'var(--black-opacity-6)',
        },
        white: {
          DEFAULT: colors.white,
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
