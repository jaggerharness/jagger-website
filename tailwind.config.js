const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'ws-dark-green': '#507227',
        'ws-green': '#61892F',
        'ws-lime-green': '#86C232',
        'ws-black': '#222629',
        'ws-dark-gray': '#474B4F',
        'ws-light-gray': '#6B6E70',
      },
      backgroundImage: {
        'ws-background': "url('../public/images/ws-bg.jpg')",
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      animation: {
        shake: 'shake 1s ease-in-out',
      },
      keyframes: {
        shake: {
          '0%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(-2deg)',
          },
          '75%': {
            transform: 'rotate(2deg)',
          },
        },
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',

          /* Firefox */
          'scrollbar-width': 'none',

          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }
      })
    })
  ],
}
