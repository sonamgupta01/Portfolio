/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },

      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },

      colors: {
        /* Premium Black / Charcoal Theme */
        bodyColor: "#0D0D0F",
        bodyColorLight: "#141416",

        /* Text */
        lightText: "#D1D1D6",

        /* Cards / Surfaces */
        boxBg: "linear-gradient(145deg, #111113, #19191C)",

        /* Accent Colors */
        designColor: "#ff014f",
        designColorViolet: "#7C3AED",

        /* Borders */
        borderColor: "#252529",
        borderColorLight: "#34343A",
      },

      boxShadow: {
        shadowOne:
          "10px 10px 19px #080809, -10px -10px 19px #17171A",

        "glow-pink":
          "0 0 30px rgba(255, 1, 79, 0.25)",

        "glow-pink-sm":
          "0 0 15px rgba(255, 1, 79, 0.15)",

        "glow-violet":
          "0 0 30px rgba(124, 58, 237, 0.15)",

        "card-shadow":
          "0 10px 40px rgba(0, 0, 0, 0.45)",

        "nav-shadow":
          "0 4px 30px rgba(0, 0, 0, 0.35)",
      },

      backgroundImage: {
        "gradient-radial":
          "radial-gradient(var(--tw-gradient-stops))",

        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",

        /* Subtle charcoal mesh */
        "mesh-gradient":
          "linear-gradient(135deg, #0D0D0F 0%, #151518 50%, #0D0D0F 100%)",

        /* Hero background */
        "hero-gradient":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(124, 58, 237, 0.12) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 100% 0%, rgba(255, 1, 79, 0.08) 0%, transparent 60%), linear-gradient(180deg, #0D0D0F 0%, #141416 100%)",
      },

      animation: {
        "fade-in-up":
          "fadeInUp 0.6s ease-out forwards",

        "pulse-slow":
          "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },

      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },

          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
    },
  },

  plugins: [],
};