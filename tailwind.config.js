/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    clipPath: {
      mypolygon: "polygon(0 0, 100% 0%, 100% 20%, 50% 41%, 0 20%)",
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("tailwind-clip-path"),
  ],
};
