import type { Config } from "tailwindcss"
const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#9E1B1B",
        },
        secondary: {
          DEFAULT: "#D2642C",
        },
        tertiary: {
          DEFAULT: "#2C3E66",
        },
        accent: {
          DEFAULT: "#5D3A82",
        },
        backgroundBrand: {
          DEFAULT: "#F5EEE6",
        },
        charcoal: {
          DEFAULT: "#222222",
        },
        red: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
          950: "#450a0a",
        },
        orange: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
          950: "#431407",
        },
        blue: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
        purple: {
          900: "#311f69",
          800: "#403592",
        },
        magenta: {
          900: "#801c45",
          800: "#ad245b",
        },
        templeDeepNavy: 'var(--temple-deep-navy)',
        sacredSoftNavy: 'var(--sacred-soft-navy)',
        divineRoyalGold: 'var(--divine-royal-gold)',
        sacredBellGold: 'var(--sacred-bell-gold)',
        scrollIvory: 'var(--scroll-ivory)',
        wisdomSandGold: 'var(--wisdom-sand-gold)',
        saffronWarning: 'var(--saffron-warning)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        heading: ["Rajdhani", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        rajdhani: ["var(--font-rajdhani)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      perspective: {
        "1000": "1000px",
      },
      gradientColorStops: {
        'brand-start': '#9E1B1B',
        'brand-mid': '#D2642C',
        'brand-end': '#2C3E66',
        'brand-accent': '#5D3A82',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
