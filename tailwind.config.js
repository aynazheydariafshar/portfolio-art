/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        fade: 'fadeOut 2s ease-in-out',
      },

      // that is actual animation
      keyframes: theme => ({
        fadeOut: {
          '0%': { opacity : 0 },
          '100%': { opacity: 100 },
        },
      }),
      boxShadow: {
        'white': '0 0 4px rgba(255, 255, 255, 0.9)',
      }
    },
  },
  plugins: [],
}
