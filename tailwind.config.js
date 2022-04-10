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
        blue: "var(--blue)",
        "primary-text-color": "var(--primary-text)",
        "dark-text-color": "var(--dark-text)",
        "primary-bg": "var(--primary-bg-color)",
        yellow: "var(--yellow)",
        white: "var(--white)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
