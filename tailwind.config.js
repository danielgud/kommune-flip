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
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        ray: "ray 60s linear infinite",
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
