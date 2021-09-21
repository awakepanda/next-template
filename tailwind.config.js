module.exports = {
  mode: 'jit',
  purge: ['src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans JP'],
        // display: ['Noto Sans JP'],
        // body: ['Noto Sans JP'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
