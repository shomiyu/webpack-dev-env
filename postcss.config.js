module.exports = {
  plugins: [
    require("autoprefixer")({
      grid: true,
    }),
    require("css-declaration-sorter")({
      order: "alphabetical",
    }),
    require("css-mqpacker")({
      sort: true,
    }),
  ],
};
