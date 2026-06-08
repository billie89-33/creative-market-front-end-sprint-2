/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "cm-green": "#00B268",
        "cm-green-hover": "#009658",
        "cm-charcoal": "#222222",

        "cm-light-bg": "#FFFFFF",
        "cm-light-surface": "#F8F9FA",
        "cm-light-border": "#EAEAEA",
        "cm-light-text": "#111111",
        "cm-text-muted": "#767676",

        "cm-dark-bg": "#181A1B",
        "cm-dark-surface": "#242526",
        "cm-dark-border": "#3E3E3F",
        "cm-dark-text": "#E8E6E3",
        "cm-dark-text-muted": "#A8A095",
      },
      fontFamily: {
        // ✏️ กำหนด Anuphan เป็นฟอนต์หลัก (Default Sans)
        sans: ["Anuphan", "sans-serif"],
      },
      boxShadow: {
        "cm-card": "0 1px 3px rgba(0,0,0,0.08)",
        "cm-card-hover":
          "0 8px 24px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)",
      },
      borderRadius: {
        md: "6px",
        lg: "8px",
        xl: "12px",
      },
    },
  },
  plugins: [],
};
