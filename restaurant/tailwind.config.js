/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        fullLarge: "24rem",
      },

      blur: {
        xxs: "1px"
      },

      width: {
        semiLarge: "13rem",
        large: "23rem",
        fullLarge: "40rem",
        xtraFullLarge: "35rem"
      },

      boxShadow: {
        medium: "0 4px 10px rgba(0, 0, 0, 0.5);",
      },

      fontFamily: {
        pizzahut: "pizzahut-font",
      },

      colors: {
        main: {
          primary: "#ffff",
          secondary: "#f1e9de",
          third: "#f8deb9",
          fourth: "#f5f4eb",
          bgMain: "#f7ead8",
          cardFont: "#431915"
        },
      },

      zIndex: {
        one: "1",
        two: "2",
        tree: "3",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
