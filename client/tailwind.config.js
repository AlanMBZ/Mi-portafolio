/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#121212",
        card: "#1E1E1E",
        neon: "#00F0FF",
      }
    },
  },
  plugins: [],
}