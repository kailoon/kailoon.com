const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
	purge: ['./src/**/*.njk', './src/**/*.md', './src/**/*.js', './.*.js'],
	darkMode: 'media', // or 'media' or 'class'
	theme: {
		colors: {
			gray: colors.blueGray,
			purple: colors.purple,
			green: colors.green,
			yellow: colors.yellow,
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
				'"Crimson Pro"',
				'ui-serif',
				'Georgia',
				'Cambria',
				'"Times New Roman"',
				'Times',
				'serif'
			]
		}
	},
	variants: {
		backgroundColor: ['responsive', 'dark', 'hover', 'focus', 'active'],
		extend: { space: ['last'] }
	},
	plugins: []
}
