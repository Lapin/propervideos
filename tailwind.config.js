module.exports = {
  purge: [
    './prod/**/*.html',
    './prod/**/*.vue',
    './prod/**/*.jsx',
  ],
  theme: {
    aspectRatio: { // defaults to {}
    'none': 0,
    'square': [1, 1], // or 1 / 1, or simply 1
    '16/9': [16, 9],  // or 16 / 9
    '4/3': [4, 3],    // or 4 / 3
    '21/9': [21, 9],  // or 21 / 9
    },
    fontFamily: {
      sans: 'Jost',
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
      
        propgrey: '#F1F1F1',
        propblu: '#51AFEF',
        propblack: '#222222',
      
        },
    },
  },
  variants: {
    aspectRatio: ['responsive'], // defaults to ['responsive']
  },
  plugins: [
    require('tailwindcss-aspect-ratio'),
  ],
}
