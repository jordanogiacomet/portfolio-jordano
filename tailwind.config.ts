import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
          surface: "var(--bg-surface)",
          "surface-muted": "var(--bg-surface-muted)"
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          "on-light": "var(--text-on-light)"
        },
        accent: {
          DEFAULT: "var(--accent)",
          hover: "var(--accent-hover)"
        },
        border: "var(--border)"
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-body)", "sans-serif"]
      },
      boxShadow: {
        panel: "0 18px 60px rgba(0, 0, 0, 0.35)"
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top, rgba(243, 235, 221, 0.12), transparent 35%), radial-gradient(circle at bottom right, rgba(142, 35, 54, 0.22), transparent 30%)"
      }
    }
  },
  plugins: []
};

export default config;
