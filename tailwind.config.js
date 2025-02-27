/** @type {import('tailwindcss').Config} */

  module.exports = {
    theme: {
      extend: {
        animation: {
          "fade-in": "fadeIn 0.5s ease-in-out",
          "fade-in-up": "fadeInUp 0.5s ease-in-out",
          "fade-in-left": "fadeInLeft 0.5s ease-in-out",
          "fade-in-right": "fadeInRight 0.5s ease-in-out",
        },
        keyframes: {
          fadeIn: {
            "0%": { opacity: 0 },
            "100%": { opacity: 1 },
          },
          fadeInUp: {
            "0%": { opacity: 0, transform: "translateY(20px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
          },
          fadeInLeft: {
            "0%": { opacity: 0, transform: "translateX(-20px)" },
            "100%": { opacity: 1, transform: "translateX(0)" },
          },
          fadeInRight: {
            "0%": { opacity: 0, transform: "translateX(20px)" },
            "100%": { opacity: 1, transform: "translateX(0)" },
          },
        },
      },
    },
  };