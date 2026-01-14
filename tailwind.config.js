/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9', // Sky blue for trust
          600: '#0284c7',
          900: '#0c4a6e',
        },
        accent: {
          500: '#f97316', // Orange from reference for CTAs
          600: '#ea580c',
        }
      },
      boxShadow: {
        'soft': '0 20px 40px -15px rgba(0, 0, 0, 0.05)',
        'glow': '0 0 20px rgba(249, 115, 22, 0.3)',
      }
    }
  },
  plugins: [],
}