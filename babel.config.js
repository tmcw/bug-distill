module.exports = {
  presets: [
    [
      "blitz/babel",
      {
        "preset-env": {
          targets: {
            browsers: "last 2 chrome versions",
          },
        },
      },
    ],
  ],
  plugins: [],
};
