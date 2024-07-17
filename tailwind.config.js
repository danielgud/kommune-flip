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
      boxShadow: {
        card: "0 1px 5px #00000099",
        "card-hover": "0 5px 20px 5px #00000044",
      },
      transitionProperty: {
        "transform-shadow": "transform, box-shadow",
      }
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
