/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes:{
        heroAn:{
          '0%':{
            transform:'translateY(-20px)',
            opacity:'0'
          },
          '50%':{
            opacity:'0.5'
          },
          '100%':{
            transform:'translateY(0)',
            opacity:'1'
          }
        },
        cardAn:{
          
          '0%':{
            transform:'translateY(20px)',
            opacity:'0'
          },
          '50%':{
            opacity:'0.5'
          },
          '100%':{
            transform:'translateY(0)',
            opacity:'1'
          }
        }
      },
      animation:{
        startAn:'heroAn 1.5s ',
        secondAn:'cardAn 1.5s '
      },
      fontFamily:{
        'poppins':['Poppins']
      },
      colors:{
        mainorange:'#FB9A7F',
        bluregray:'rgba(0,0,0,0.2)',
        blurblack:'rgba(0,0,0,0.5)'
      },
      gridTemplateColumns:{
        'mainhome':'  grid-template-columns: 70% auto'
      
      }
    },
  },
  plugins: [],
}
