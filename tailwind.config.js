/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        finance: {
          dark: '#0f172a',
          profit: '#10b981',
          loss: '#ef4444',
          accent: '#6366f1'
        }
      },
      boxShadow: {
        'finance': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
