import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
      colors: {
        brand: {
          DEFAULT: "#3b82f6",
          foreground: "#f8fafc",
          50: "#eef4ff",
          100: "#d9e2ff",
          200: "#b9c8ff",
          300: "#92a4ff",
          400: "#6f83ff",
          500: "#4c63ff",
          600: "#3b49d9",
          700: "#2f3ab8",
          800: "#262f91",
          900: "#1f276f"
        },
        muted: "#0f172a",
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(circle at 20% 20%, rgba(79,70,229,0.25), transparent 25%), radial-gradient(circle at 80% 0%, rgba(14,165,233,0.25), transparent 22%), linear-gradient(135deg, rgba(15,23,42,0.9), rgba(6,8,20,0.95))",
        "glass-gradient": "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))"
      },
      boxShadow: {
        glass: "0 10px 45px rgba(15,23,42,0.35)",
      }
    },
  },
  plugins: [],
};

export default config;
