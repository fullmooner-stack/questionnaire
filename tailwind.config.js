module.exports = {
  theme: {
    extend: {
      animation: {
        float: "float 3s ease-in-out infinite",
        "float-slow": "float 6s ease-in-out infinite",
        slideInLeft: "slideInLeft 0.8s ease-out",
        slideInRight: "slideInRight 0.8s ease-out",
        fadeIn: "fadeIn 0.8s ease-out forwards",
        "bounce-right": "bounce-right 1.5s infinite",
        gradient: "gradient 3s ease infinite",
        "loading-bar": "loadingBar 2s ease-in-out infinite",
      },
      keyframes: {
        loadingBar: {
          "0%": { transform: "translateX(-100%)" },
          "50%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(100%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)", opacity: "0" },
          "50%": { transform: "translateY(-20px)", opacity: "1" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "bounce-right": {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(5px)" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
};
