/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        C1: "#14b8a6",
        C2: "#111827",
        C3: "#6b7280",
      },
      screens: {
        "2xl": "1320",
      },
    },
  },
  plugins: [],
};
