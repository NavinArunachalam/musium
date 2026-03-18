import type { Config } from "tailwindcss";

export default {
  darkMode: ["class", "[data-theme='dark']"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        midnight: "#0C0705",
        ink: "#1C1008",
        espresso: "#2D1A0A",
        walnut: "#4A2E12",
        gold: {
          dark: "#8B6914",
          DEFAULT: "#B8860B",
          mid: "#C9A84C",
          light: "#EDD9A3",
          pale: "#F5E6C8",
        },
        parchment: "#F5E6C8",
        museum: {
          bg: "#F7F3EC",
          surface: "#FFFDF9",
          surface2: "#F2EDE3",
          linen: "#EEE8DC",
          stone: "#8C8278",
        },
        teal: {
          DEFAULT: "#2A5F5F",
          light: "#EEF6F6",
        },
        burgundy: "#6B2D2D",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "serif"],
        body: ["DM Sans", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        "museum-sm": "0 1px 4px rgba(28,16,8,0.06)",
        "museum-md": "0 4px 12px rgba(28,16,8,0.07)",
        "museum-lg": "0 8px 24px rgba(28,16,8,0.08)",
        "museum-xl": "0 16px 40px rgba(28,16,8,0.10)",
        "gold-sm": "0 4px 12px rgba(184,134,11,0.15)",
        "gold-md": "0 8px 24px rgba(184,134,11,0.18)",
        "gold-lg": "0 16px 40px rgba(184,134,11,0.22)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        "ken-burns": {
          from: { transform: "scale(1)" },
          to: { transform: "scale(1.08) translate(-1%,-1%)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-gold": {
          "0%,100%": { boxShadow: "0 0 0 0 rgba(184,134,11,0.4)" },
          "50%": { boxShadow: "0 0 0 6px rgba(184,134,11,0)" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shimmer: "shimmer 1.6s linear infinite",
        "ken-burns": "ken-burns 30s ease-in-out infinite alternate",
        "fade-up": "fade-up 0.45s cubic-bezier(0.22,1,0.36,1) forwards",
        "pulse-gold": "pulse-gold 2s ease-in-out infinite",
        "fade-in": "fade-in 0.3s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
