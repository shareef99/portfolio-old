const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    container: {
      padding: "2rem",
      center: true,
    },
    extend: {
      backgroundImage: {
        codingMan: "url('/images/coding man.webp')",
      },
      colors: {
        orange: "var(--orange)",
        white: "var(--white)",
        pink: "var(--pink)",
        "primary-text-color": "var(--primary-text)",
      },
    },
  },
  plugins: [],
};
