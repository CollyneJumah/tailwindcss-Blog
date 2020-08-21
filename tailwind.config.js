module.exports = {
  purge: [],
  theme: {
    extend: {
      colors:{
        primary: '#FF6363',
        secondary:{
          100: '#E2E2DS',
          200: '#888883',
        }
      },
      fontFamily:{
        bodyFont: ['Nunito'],
      }
    },
  },
  variants: {},
  plugins: [],

  future:{
    removeDeprecatedGapUtilities: true,
  }
}
