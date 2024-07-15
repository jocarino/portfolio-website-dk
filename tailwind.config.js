/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["ClashDisplay-Variable", "sans-serif", ...fontFamily.sans],
        montserrat: ["Montserrat-Variable", "sans-serif", ...fontFamily.sans],
      },
      backgroundImage: {
        verdeVerseBackground: "url('../public/verdeVerseBackground.jpg')",
        dkDotCom: "url('../public/dkdotcom.jpg')",
      },
    },
  },
  plugins: [],
};
