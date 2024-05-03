/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  future: { hoverOnlyWhenSupported: true },
  theme: {
    extend: {
      colors: {
        "blue-700": "#027BAF",
        "blue-dark": "#0069BB",
        "blue-main": "#0098D9",
        "blue-500": "#008FFF",
        "blue-light": "#00D1FF",
        "blue-000": "#F0F3F7",
        "dark-blue-700": "#232B36",
        "dark-blue-main": "#002934",
        "dark-blue-400": "#7B8189",
        "dark-blue-300": "#989DA4",
        "dark-blue-000": "#F0F3F7",
        black: "#000000",
        white: "#FFFFFF",
      },
      boxShadow: {
        "shadow-btn": "0 0.25rem 2rem #00847A80",
      },
      screens: {
        xl: "1600px",
        lg: "1280px",
        md: "768px",
      },
      zIndex: {
        header: 5,
        "header+1": 6,
        "header-1": 4,
        text: 6,
        modal: 10,
        "modal+1": 11,
        "modal-1": 9,
      },
    },
  },
  plugins: [],
};
