module.exports = {
  purge: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
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
