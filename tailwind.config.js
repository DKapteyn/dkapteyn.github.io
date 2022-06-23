const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xxs: "480px",
      xs: "530px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        darkGrey: "#586369",
      },
    },
  },
  plugins: [],
};
