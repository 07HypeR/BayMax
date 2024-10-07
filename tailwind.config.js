/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#AF1125",
        secondary: "#C71E25",
        white: "#fff",
        border: "#fff",
        text: "#222",
        lightcolors: [
          "rgba(255,255,255,1)",
          "rgba(255,255,255,0.9)",
          "rgba(255,255,255,0.7)",
          "rgba(255,255,255,0.6)",
          "rgba(255,255,255,0.5)",
          "rgba(255,255,255,0.4)",
          "rgba(255,255,255,0.003)",
        ],
      },
      fontFamily: {
        Regular: "Okra-Regular",
        Medium: "Okra-Medium",
        Light: "Okra-MediumLight",
        SemiBold: "Okra-Bold",
        Theme: "Bangers-Regular",
      },
    },
  },
  plugins: [],
};
