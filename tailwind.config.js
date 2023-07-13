/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-in-out",
        fadeOut: "fadeOut 0.3s ease-in-out",
      },
      colors: {
        primary: "#0E6FFF",
        primaryFade: "#EDF4FF",
        deepGray: "#999CA0",
        graybg: "#F5F5F5",
        grayLight: "#EBEBEB",
        grayLighter: "#617DA4",
        grayLightest: "#8494AC",
        grayDarker: "#2A456B",
        lightBeerus: "#F2F2F2",
        darkTrunks: "#999CA0",
        purpleLight: "#E7E9FE",
        blueLight: "#D2E3FF",
        lightBlue: "#E0EEF9",
        cardBlue: "#F4FAFF",
        blueLink: "#0E6FFF",
        blueBgLight: "#EEF4FF",
        red: "#D33030",
        divider: "#D8D8D8",
        positive: "#4AD15F",
        negative: "#D33030",
        lavender: "#e2e4fa",
        chartGreen: "#3AC953",
        landingLightGray: "#617DA4",
        landingDarkGray: "#2A456B",
      },
      boxShadow: {
        primary: "0px 4px 12px rgba(14, 111, 255, 0.6);",
        black:
          "0px 8px 24px -6px rgba(0, 0, 0, 0.16), 0px 0px 1px rgba(0, 0, 0, 0.4)",
      },
      screens: {
        xxs: "390px",
      },
    },
  },
  plugins: [],
};
