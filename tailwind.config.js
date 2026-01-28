/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary brand colors
        cream: {
          50: "#FFFBF7",
          100: "#FEF5EE",
          200: "#F4E7E1", // Background shade
          300: "#FBD9BE", // Accent shade
          400: "#F0CBA8",
          500: "#E5BC92",
        },
        warm: {
          50: "#FDF8F3",
          100: "#F9EDE1",
          200: "#F3DCC8",
          300: "#E8C5A0",
          400: "#D4A574",
          500: "#C69563",
          600: "#B88552",
          700: "#8B6F47",
          800: "#6B5744",
          900: "#4A3D2F",
        },
        coral: {
          100: "#FFE5D9",
          200: "#FFCBB5",
          300: "#FFB088",
          400: "#FF9666",
          500: "#FF7A42",
        },
        sage: {
          100: "#E8F0E8",
          200: "#D1E1D1",
          300: "#A8C5A8",
          400: "#7FA87F",
          500: "#5A8A5A",
        },
      },
      fontFamily: {
        display: ["Parkinsans", "sans-serif"],
        body: ["Parkinsans", "sans-serif"],
        funky: ["Parkinsans", "sans-serif"],
        serif: ["Georgia", "serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out infinite 2s",
        wiggle: "wiggle 2s ease-in-out infinite",
        "bounce-slow": "bounce 3s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
        "slide-up": "slide-up 0.6s ease-out",
        "slide-down": "slide-down 0.6s ease-out",
        "fade-in": "fade-in 0.8s ease-out",
        "scale-in": "scale-in 0.5s ease-out",
        marquee: "marquee 25s linear infinite",
        "marquee-reverse": "marquee-reverse 25s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.7 },
        },
        "slide-up": {
          "0%": { transform: "translateY(30px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        "slide-down": {
          "0%": { transform: "translateY(-30px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "scale-in": {
          "0%": { transform: "scale(0.9)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-funky": "linear-gradient(135deg, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
