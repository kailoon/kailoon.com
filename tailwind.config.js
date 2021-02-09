const colors = require('tailwindcss/colors')

module.exports = {
	purge: ['./src/**/*.njk', './src/**/*.md', './src/**/*.js', './.*.js'],
	darkMode: 'media', // or 'media' or 'class'
	theme: {
		colors: {
			gray: colors.coolGray,
			purple: colors.purple,
			green: colors.green,
			white: colors.white,
			black: colors.black,
			current: 'currentColor',
			transparent: 'transparent'
		},
		fontFamily: {
			sans: [
				'"SF Pro Display"',
				'-apple-system',
				'BlinkMacSystemFont',
				'"Segoe UI"',
				'Roboto',
				'Helvetica',
				'Arial',
				'sans-serif',
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"'
			],
			serif: [
				'"IBM Plex Serif"',
				'ui-serif',
				'Georgia',
				'Cambria',
				'"Times New Roman"',
				'Times',
				'serif'
			]
		},
		boxShadow: {
			DEFAULT: '0 1px 0 0 rgba(221, 214, 254,1)',
			md: '0 1px 0 0 rgba(91, 33, 182,1)'
		},
		extend: {}
	},
	variants: {
		backgroundColor: ['responsive', 'hover', 'focus', 'active'],
		extend: { space: ['last'] }
	},
	plugins: []
}
