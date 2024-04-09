/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'tsbanner': "url('/"
      },
      fontFamily: {
        'sans': ['Inter', ...defaultTheme.fontFamily.sans]
      },
      textShadow: {
        noblur: '1px 1px 0px var(--tw-shadow-color)',
        DEFAULT: '1px 1px 1px var(--tw-shadow-color)',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    })
  ],
}
