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
        verdeVerseBackground: "url('../public/verdeVerseBackground.webp')",
        dkDotCom: "url('../public/dkdotcom.webp')",
        displaceByHome: "url('../public/diaplaceByHome.webp')",
        tache: "url('../public/tache-bg.webp')",
        psychedelicAfrofuturism: "url('../public/psychedelic-afrofut-bg.webp')",
        creativeAdult: "url('../public/creative-adult-bg.webp')",
        aiStoryBoarding: "url('../public/ai-story-bg.webp')",
        latoja: "url('../public/latoja-bg.webp')",
        bunganow: "url('../public/bunganow-bg.webp')",
        others: "url('../public/others-bg.webp')",
        waitingForYou: "url('../public/waiting-for-you-bg.webp')",
        theCavemenLive: "url('../public/cavemen-bg.webp')",
        omoAtoke: "url('../public/omo-atoke-bg.webp')",
        othersCinematography: "url('../public/others-bg-cine.webp')",
        handDrawn: "url('../public/hand-drawn-bg.webp')",
        cad: "url('../public/cad-bg.webp')",
        urbanCultures: "url('../public/urban-cul-bg.webp')",
        architectureAndCity: "url('../public/arch-and-city.webp')",
        advandedDesign: "url('../public/adv-cul-des.webp')",
        photography: "url('../public/photo-1.webp')",
        handDrawn: "url('../public/bed-3.webp')",
        aad: "url('../public/aad-5.webp')",
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
