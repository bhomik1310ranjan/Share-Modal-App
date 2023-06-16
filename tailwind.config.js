/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      spacing: {
        '1/20': '5%',
        '3/10': '30%',
      },
      colors: {
        'venetianRed': '#d84869',
        'chineseOrange': '#f46641',
        'iris': '#5648d8',
        'lavenderIndigo': '#8641f4',
        'white1a': '#ffffff1a',
        'white30': '#ffffff30',
        'white85': '#ffffff85',
        'whiteb9': '#ffffffb9',
        'white53': '#ffffff53',
        'white59': '#ffffff59',
        'graniteGray': '#5f5f5f83',
        'black88': '#00000088',
        'brightNavyBlue': '#1771e6',
        'buttonBlue': '#1c99e6',
        'magenta': '#cb2770',
        'UFOGreen': '#2fe664',
        'blueNCS': '#0081c2',
      },
      boxShadow: {
        'circle': '0px 0px 50px',
      },
      animation: {
        'circleOne': 'circleOneAnimation 15s ease infinite',
        'circleTwo': 'circleTwoAnimation 8s ease infinite',
      },
      keyframes: {
        circleOneAnimation: {
          '0%, 100%': { transform: 'scale(1)', left: '30%', top: '5%' },
          '50%': { transform: 'scale(1.11)', left: '33%', top: '4%' },
        },
        circleTwoAnimation: {
          '0%, 100%': { right: '30%', bottom: '5%' },
          '50%': { right: '31%', bottom: '6%' },
        },
      },
      backdropBlur: {
        'bwMD&LG': '15px',
      },
      screens: {
        'xs': '400px',
      }
    },
  },
  plugins: [],
}

