/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#6B7280",
        accent: "#E85925",
        surface: "#FFFFFF",
        muted: "#D1D5DB",
        "gray-400": "#9CA3AF",
        "gray-600": "#4B5563",
        "purple-900": "#4C1D95",
        brand: "#FF6B35",
        veya: "#7F45AE",
        remote: "#4B5563",
      },
    },
  },
  plugins: [],
};
