/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'ws-green': '#61892F',
        'ws-lime-green': '#86C232',
        'ws-black': '#222629',
        'ws-dark-gray': '#474B4F',
        'ws-light-gray': '#6B6E70',
      },
      backgroundImage: {
        'ws-background': "url('../public/images/ws-bg.jpg')",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
