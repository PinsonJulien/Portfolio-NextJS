// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary': {
        500: '#233554',
        700: '#112240',
        900: '#0A192F',
      },
      'secondary': {
        900: '#64FFDA'
      },
      'gray' : {
        500: '#CCD6F6',
        700: '#A8B2D1',
        900: '#8892B0',
      }
    },
    extend: {

    },
  },
  plugins: [],
  // ...
}