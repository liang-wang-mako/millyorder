import type { Config } from 'tailwindcss'

import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    screens: {
      xs: '380px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        karantina: ['Karantina',],
      },
      colors: {
        breadorange: '#feca6d',
        breadyellow: '#fedc7f',
        cartnumber: '#fe1dc6',
        logobg: '#004a87',
        mouseover: '#d0a966',
      },
    },
  },

  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['light'],

          primary: '#fbbf24',
          '.toaster-con': {
            'background-color': 'white',
            color: 'black',
          },
        },
        dark: {
          ...require('daisyui/src/theming/themes')['dark'],

          primary: '#fbbf24',
          '.toaster-con': {
            'background-color': 'black',
            color: 'white',
          },
        },
      },
    ],
  },
  darkMode: ['class', '["dark"]'],
  plugins: [require('daisyui')],
}
export default config
