// eslint-disable-next-line
const colors = require("tailwindcss/colors");

module.exports = {
  jit: "enable",
  purge: ["./{components,app,pages}/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["'Source Sans 3'", "sans-serif"],
      mono: ["Source Code Pro", "monospace"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      purple: colors.purple,
      yellow: colors.yellow,
      red: colors.red,
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      opacity: ["disabled"],
      borderWidth: ["hover"],
      display: ["group-hover"],
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
