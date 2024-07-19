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
        displaceByHome: "url('../public/diaplaceByHome.jpg')",
        tache: "url('../public/tache-bg.jpg')",
        psychedelicAfrofuturism: "url('../public/psychedelic-afrofut-bg.png')",
        creativeAdult: "url('../public/creative-adult-bg.jpg')",
        aiStoryBoarding: "url('../public/ai-story-bg.png')",
        latoja: "url('../public/latoja-bg.png')",
        bunganow: "url('../public/bunganow-bg.jpg')",
        others: "url('../public/others-bg.png')",
        waitingForYou: "url('../public/waiting-for-you-bg.png')",
        theCavemenLive: "url('../public/cavemen-bg.jpg')",
        omoAtoke: "url('../public/omo-atoke-bg.png')",
        othersCinematography: "url('../public/others-bg-cine.jpg')",
        handDrawn: "url('../public/hand-drawn-bg.png')",
        cad: "url('../public/cad-bg.png')",
        urbanCultures: "url('../public/urban-cul-bg.png')",
        architectureAndCity: "url('../public/arch-and-city.png')",
        advandedDesign: "url('../public/adv-cul-des.png')",
      },
    },
  },
  plugins: [],
};
