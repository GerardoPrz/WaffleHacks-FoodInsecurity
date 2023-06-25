/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#28BC63",
        secondary: "#8F96A0",
        text: "#3F3D56",
        light: "#FDFDFD",
        dark: "#1C1B1F",
        disabled: "#F2F5F9",
        danger: "#DC2A2A",
        warning: "#F0A535",
        separator: "#3C3C43",
      },
    },
    safelist: [
      {
        pattern: /bg-.*/,
        variants: ["hover"],
      },
      {
        pattern: /text-.*/,
        variants: ["hover"],
      },
      {
        pattern: /border-.*/,
        variants: ["hover"],
      },
    ],
  },
  plugins: [],
}
