

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      colors: {
        vuejs: '#49e659',
        breadorange: '#feca6d',
        breadyellow: '#fedc7f',
        cartnumber: '#fe1dc6',
        logobg: '#004a87',
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
