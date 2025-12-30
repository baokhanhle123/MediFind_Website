import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // MediFind Brand Colors
        medifind: {
          red: "#C41E3A",
          "red-dark": "#9E1830",
          "red-light": "#E8495D",
          blue: "#1E88E5",
          "blue-dark": "#1565C0",
          "blue-light": "#64B5F6",
        },
        // Background colors
        background: {
          DEFAULT: "#ffffff",
          alt: "#F8F9FA",
        },
        // Text colors
        foreground: {
          DEFAULT: "#1A1A2E",
          secondary: "#7D7987",
          light: "#FFFFFF",
        },
        // Gray scale
        gray: {
          50: "#F8F9FA",
          100: "#F1F3F5",
          200: "#E9ECEF",
          300: "#DEE2E6",
          400: "#CED4DA",
          500: "#ADB5BD",
          600: "#868E96",
          700: "#495057",
          800: "#343A40",
          900: "#212529",
          text: "#7D7987",
        },
      },
      fontFamily: {
        sans: ["var(--font-vietnam)", "Be Vietnam Pro", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Custom font sizes for consistency
        "display-lg": ["4rem", { lineHeight: "1.1", fontWeight: "700" }],
        "display-md": ["3rem", { lineHeight: "1.2", fontWeight: "700" }],
        "display-sm": ["2.5rem", { lineHeight: "1.2", fontWeight: "700" }],
        h1: ["2.25rem", { lineHeight: "1.3", fontWeight: "700" }],
        h2: ["1.875rem", { lineHeight: "1.3", fontWeight: "600" }],
        h3: ["1.5rem", { lineHeight: "1.4", fontWeight: "600" }],
        h4: ["1.25rem", { lineHeight: "1.4", fontWeight: "600" }],
        body: ["1rem", { lineHeight: "1.6", fontWeight: "400" }],
        small: ["0.875rem", { lineHeight: "1.5", fontWeight: "400" }],
      },
      spacing: {
        // Section spacing
        section: "5rem",
        "section-mobile": "3rem",
      },
      boxShadow: {
        // Custom shadows
        sm: "0 2px 4px rgba(0, 0, 0, 0.05)",
        DEFAULT: "0 4px 12px rgba(0, 0, 0, 0.1)",
        md: "0 4px 12px rgba(0, 0, 0, 0.1)",
        lg: "0 8px 24px rgba(0, 0, 0, 0.12)",
        xl: "0 12px 32px rgba(0, 0, 0, 0.15)",
        card: "0 2px 8px rgba(0, 0, 0, 0.08)",
        "card-hover": "0 8px 16px rgba(0, 0, 0, 0.12)",
      },
      borderRadius: {
        // Custom border radiuses
        card: "1rem",
        button: "9999px", // Fully rounded buttons
      },
      transitionDuration: {
        fast: "200ms",
        normal: "300ms",
        slow: "500ms",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "slide-down": "slideDown 0.6s ease-out forwards",
        "slide-left": "slideLeft 0.6s ease-out forwards",
        "slide-right": "slideRight 0.6s ease-out forwards",
        "scale-in": "scaleIn 0.4s ease-out forwards",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        spin: "spin 1s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideLeft: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        spin: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #C41E3A 0%, #E8495D 100%)",
        "gradient-secondary": "linear-gradient(135deg, #1E88E5 0%, #64B5F6 100%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
} satisfies Config;
