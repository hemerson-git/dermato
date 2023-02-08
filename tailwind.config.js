/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          50: "#F7F7F7",
          100: "#EDEDED",
          200: "#DEDEDE",
          300: "#CCCCCC",
          400: "#B2B2B2",
          500: "#9C9C9C",
          600: "#717171",
          700: "#595959",
          800: "#404040",
          900: "#2E2E2E",
        },

        "bg-theme": {
          500: "#E4D0B4",
        },

        primary: {
          500: "#DC2428",
        },

        secondary: {
          500: "#644B2C",
        },

        light: {
          200: "#F7F1DF",
          500: "#FFCCD1",
        },
      },
    },
  },
  plugins: [],
};
