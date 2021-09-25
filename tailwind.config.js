module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: [
        'YakuHanJP_Noto',
        'Noto Sans JP',
        'Helvetica Neue',
        'Arial',
        'Hiragino Kaku Gothic ProN',
        'Hiragino Sans',
        'BIZ UDPGothic',
        'Meiryo',
        'san-serif',
      ],
    },
    extend: {
      maxWidth: {
        '1000': '1000px',
      },
      // backgroundImage: (theme) => ({
      //   'hero-pattern': "url('/img/hero-pattern.svg')",
      //   'footer-texture': "url('/img/footer-texture.png')",
      // }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
