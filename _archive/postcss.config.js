const nano = require('cssnano')({
  preset: 'advanced',
});

module.exports = {
    plugins: [
      // ...
      require('tailwindcss')('./tailwindcss-config.js'),
      require('autoprefixer'),
      ...process.env.NODE_ENV === 'production' ? [nano] : [],
      // ...
    ]
  }