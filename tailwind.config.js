/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
		container: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px',
				'3xl': '1660px',
      },
      center: true,
      padding: {

      },
    },
		fontFamily: {
      'base': ['DM-sans', 'ui-sans-serif', 'system-ui',],
			'cormorant': ['Cormorant', 'DM-sans', 'ui-sans-serif', 'system-ui',]
    },
		fontSize: {
			small: ['1.2rem', {
        lineHeight: 'auto',
        letterSpacing: 'auto',
        fontWeight: '400',
      }],
			base: ['1.6rem', {
        lineHeight: 'auto',
        letterSpacing: '.01em',
        fontWeight: '400',
      }],
			medium: ['2rem', {
        lineHeight: 'auto',
        letterSpacing: 'auto',
        fontWeight: '400',
      }],
			large: ['2.4rem', {
        lineHeight: 'auto',
        letterSpacing: 'auto',
        fontWeight: '400',
      }],
			h3: ['3.5rem', {
        lineHeight: 'auto',
        letterSpacing: 'auto',
        fontWeight: '500',
      }],
			h2: ['6rem', {
        lineHeight: 'auto',
        letterSpacing: 'auto',
        fontWeight: '500',
      }],
			h1: ['7.2rem', {
        lineHeight: 'auto',
        letterSpacing: 'auto',
        fontWeight: '500',
      }],
			h3Mobile: ['3rem', {
        lineHeight: 'auto',
        letterSpacing: 'auto',
        fontWeight: '500',
      }],
			h2Mobile: ['4.5rem', {
        lineHeight: 'auto',
        letterSpacing: 'auto',
        fontWeight: '500',
      }],
			h1Mobile: ['5.5rem', {
        lineHeight: 'auto',
        letterSpacing: 'auto',
        fontWeight: '500',
      }],
		},
    extend: {
			colors: {
        'blue': '#002A32',
				'darkBlue': '#21282D',
        'offblack': '#121313',
        'beige': '#f1f1f1',
				'brick': '#643737',
				'green': '#435943',
				'darkstone': '#797063',
      },
			padding: {
        'section': '12vw',
      }
		},
  },
  plugins: [],
}

