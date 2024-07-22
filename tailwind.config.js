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
      colors: {
        pink: {
          400: "#CE0988",
          200: "#FFDFF3",
        },
      },
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
        photography: "url('../public/photo-1.jpg')",
        handDrawn: "url('../public/bed-3.png')",
        aad: "url('../public/aad-5.jpg')",
        customGradient:
          "linear-gradient(90deg, #FFDFF3 0%, #FFDFF3 49.5%, #F9DFFF 72.5%, #FFFFFF 99%)",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1100px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
