module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      lightBlue: '#E3F1FF',
      headerBlue: '#133054',
      darkBlue: '#081C2B',
      whiteGray: '#F0F4F7',
      grey: '#666666',
      white: '#FFFFFF',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
