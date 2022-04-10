const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
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
        pink: "var(--pink)",
        blue: "var(--blue)",
        green: "var(--green)",
        "dark-green": "var(--dark-green)",
        "primary-text-color": "var(--primary-text)",
        "dark-text-color": "var(--dark-text)",
        gray: "var(--gray)",
        "primary-bg": "var(--primary-bg-color)",
        yellow: "var(--yellow)",
        white: "var(--white)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
