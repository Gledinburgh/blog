// @type { import('tailwindcss').Config }
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mdlg': '900px'
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'eight': 'float 15s infinite linear',
      },
      keyframes: {
        roll: {
          '100%': { transform: ' translate' }
        },
        float: {
          '0%': { transform: 'translateX(-20vw) translateY(0)' },
          '100%': { transform: 'translateX(100vw)' }
        }
      }
    },

  },
  plugins: [],
}