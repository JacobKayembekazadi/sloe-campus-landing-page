/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./App.tsx",
    "./index.tsx",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#006AE6', // Blue primary
        'primary-hover': '#0055B4', // Darker blue for hover
        'surface-primary': '#0A0D14', // Deep dark background
        'surface-secondary': '#0F1420', // Card background
        'surface-tertiary': '#0B1020', // Alternate card bg
        'accent': '#5EF0C3', // Green accent
        'accent-blue': '#3A9EFF', // Secondary blue accent
        'text-primary': '#F1F5F9', // slate-100
        'text-secondary': '#94A3B8', // slate-400
        'border-primary': '#1E293B', // slate-800
        'border-secondary': '#2B3A55', // Custom border
        'warning': '#FFC24B', // Amber/yellow
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      boxShadow: {
        'primary': '0 8px 20px rgba(14, 132, 255, 0.25)',
        'primary-lg': '0 16px 40px rgba(3, 8, 20, 0.35)',
        'card': '0 10px 30px rgba(3, 8, 20, 0.35)',
      },
    },
  },
  plugins: [],
}
