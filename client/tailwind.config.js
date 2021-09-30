module.exports = {
  // mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        600: "600px",
        500: "520px",
        400: "400px",
        85: "85px",
      },
      fontSize: {
        card: "9rem",
        cardhover: "10rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    // ...
    container: false,
  },
};
