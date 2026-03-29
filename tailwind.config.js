/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1B4F72',
          'blue-mid': '#24678F',
          'blue-light': '#EDF3F8',
          'blue-bright': '#2980B9',
        },
        ink: {
          DEFAULT: '#0D0D0D',
          soft: '#1A1A1A',
          muted: '#3A3A3A',
        },
        grey: {
          50: '#F7F8F9',
          100: '#EEF0F2',
          200: '#D8DCE0',
          300: '#B0B6BE',
          400: '#7E8691',
          500: '#5A6270',
        },
      },
      fontFamily: {
        sans: ['Figtree', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
