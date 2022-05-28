// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
      fontFamily: {
        'sans': "Calibre, Inter, San Francisco, SF Pro Text, -apple-system, system-ui, sans-serif",
        'serif': [],
        'mono': "SF Mono, Fira Code, Fira Mono, Roboto Mono, monospace",
      }
    },
  },
  plugins: [],
  // ...
}