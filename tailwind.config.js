/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "accent-orange": "#ff9900",
        "accent-lightblue": "#18a0fb",
        "accent-deepblue": "#03426b",
        "neutral-black": "#373737",
        "neutral-white": "#ffffff",
        "neutral-white-100": "#f6f6f6",
        "neutral-white-300": "#e4e4e4",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        sidebar: "5px 0px 5px rgb(206, 204, 204)",
      },
    },
  },
  plugins: [],
};
