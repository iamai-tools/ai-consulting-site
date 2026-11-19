/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f1f5f2",
          100: "#e2ebe5",
          200: "#c4d6cb",
          300: "#9cbba8",
          400: "#6f9680",
          500: "#4d7a62",
          600: "#3b6550",
          700: "#2f5443",
          800: "#254437",
          900: "#1d362c",
          950: "#10201a",
        },
        night: {
          800: "#1d2b25",
          900: "#15201b",
          950: "#0f1814",
        },
        ink: {
          900: "#161614",
          700: "#3e3d38",
          500: "#6f6d66",
          300: "#a9a69d",
          200: "#dcd9d0",
          100: "#eeece6",
        },
        paper: "#f7f5f0",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Helvetica", "Arial", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      keyframes: {
        "spin-slow": { from: { transform: "rotate(0deg)" }, to: { transform: "rotate(360deg)" } },
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
      },
      animation: {
        "spin-slow": "spin-slow 24s linear infinite",
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [],
};
