/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-radial":
          "radial-gradient(circle at 50% -20%, #ffffff22, #0000000f)",
      },
      aspectRatio: {
        golden: "1.586 / 1",
      },
      borderRadius: {
        ray: "80% 80% 0 0",
      },
      boxShadow: {
        card: "0 1px 5px #00000099",
        "card-hover": "0 5px 20px 5px #00000044",
        "hard-button": "-4px 4px 0px #ffffff",
      },
      transform: {
        "rotate-y-180": "rotateY(180deg)",
      },
      transitionProperty: {
        "transform-shadow": "transform, box-shadow",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        ray: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        cloud: {
          "0%": {
            transform: "translate(-22%, 10vh)",
            opacity: "0.8",
          },
          "50%": {
            opacity: "0.8",
          },
          "100%": {
            transform: "translate(122%, 10vh)",
            opacity: "0.4",
          },
        },
      },
      animation: {
        wiggle: "wiggle 1.2s ease-in-out infinite",
        ray: "ray 60s linear infinite",
        cloud: "cloud 60s linear infinite",
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
