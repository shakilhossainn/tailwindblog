module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens:{
      sm:'576px',
      md:'768px',
      lg:'992px',
      xl:'1200px',
    },
    extend: {
      fontFamily:{
        'poppins':['Poppins', 'sans-serif'],
        'roboto':['Roboto', 'sans-serif'],
      } 
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
