const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "7xl": "5rem",
        "8xl": "6.25rem",
        "9xl": "7.5rem",
        "10xl": "9rem",
      },
      colors: {
        twitter: "#1da0f2",
        primary: {
          "100": "#D9E2EC",
          "200": "#BCCCDC",
          "300": "#9FB3C8",
          "400": "#829AB1",
          "500": "#627D98",
          "600": "#486581",
          "700": "#334E68",
          "800": "#243B53",
          "900": "#102A43",
        },
        secondary: {
          "100": "#E0FCFF",
          "200": "#BEF8FD",
          "300": "#87EAF2",
          "400": "#54D1DB",
          "500": "#38BEC9",
          "600": "#2CB1BC",
          "700": "#14919B",
          "800": "#0E7C86",
          "900": "#0A6C74",
        },
        accent: {
          "100": "#FFF3C4",
          "200": "#FCE588",
          "300": "#FADB5F",
          "400": "#F7C948",
          "500": "#F0B429",
          "600": "#DE911D",
          "700": "#CB6E17",
          "800": "#B44D12",
          "900": "#8D2B0B",
        },
      },
    },
  },
  variants: {
    textColor: ["responsive", "hover", "focus", "active"],
    borderWidth: ["responsive", "hover", "focus"],
  },
  plugins: [],
}
