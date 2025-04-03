/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit', 
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      scrollbar: {
        thumb: {
          background: '#e6a500',
          borderRadius: '10px',
        },
        track: {
          background: 'transparent',
        },
      },
      screens: {
        xs: "320px",
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
