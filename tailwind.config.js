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
        'eight': 'float 18s infinite linear',
        'flip': 'flip 18s infinite linear',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(400%)' },
        },
        flip: {
          '0%': { transform: 'scaleX(1) ' },
          '50%': { transform: 'scaleX(1)' },
          '51%': { transform: 'scaleX(-1) ' },
          '100%': { transform: 'scaleX(-1)' },

        },

      }
    },

  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}