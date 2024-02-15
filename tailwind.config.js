module.exports = {
  prefix: 'tw-',
  content: [
    './**/*.{html,js,liquid}',
  ],
  theme: {
    extend: {
      colors: {
        'iron': '#DCDDDF',
        'gray': '#666666',
      },
    },
    container: {
      center: true,
      padding: {
        lg: '18px',
      },
      screens: {
        'sm': '100%',
        'md': '100%',
        'lg': '1370px'
      },
    },
    screens: {
      'sm': '576px',
      'max-md': {'max': '749px'},
      'md': '750px',
      'max-lg': {'max': '989px'},      
      'lg': '990px',
      'xl': '1200px',
      'xxl': '1400px',
    }
  },
  plugins: [],
}