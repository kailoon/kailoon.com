const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
	purge: ['./src/**/*.njk', './src/**/*.md', './src/**/*.js', './.*.js'],
	darkMode: 'media', // or 'media' or 'class'
	theme: {
		colors: {
			gray: colors.coolGray,
			purple: colors.purple,
			orange: colors.orange,
			rose: colors.rose,
			green: colors.green,
			yellow: colors.yellow,
			white: colors.white,
			black: colors.black,
			current: 'currentColor',
			transparent: 'transparent'
		},
		fontFamily: {
			sans: [
				'Inter',
				'ui-sans-serif',
				'system-ui',
				'-apple-system',
				'BlinkMacSystemFont',
				'Segoe UI',
				'Roboto',
				'Helvetica Neue',
				'Arial',
				'Noto Sans',
				'sans-serif',
				'Apple Color Emoji',
				'Segoe UI Emoji',
				'Segoe UI Symbol',
				'Noto Color Emoji'
			],
			serif: [
				'ui-serif',
				'Georgia',
				'Cambria',
				'Times New Roman',
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
