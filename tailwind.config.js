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
      maxWidth: {
       '1000': '1000px',
      },
      backgroundImage: theme => ({
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
