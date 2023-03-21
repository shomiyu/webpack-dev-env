module.exports = {
  plugins: [
    require('autoprefixer')({
      grid: true,
    }),
    require('css-mqpacker')({
      sort: true,
    }),
  ],
};
