const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
	content: [
		'./src/**/*.njk',
		'./src/**/*.md',
		'./src/**/*.js',
		'./.*.js',
		'./_site/**/*.html'
	],
	darkMode: 'media', // or 'media' or 'class'
	theme: {
		colors: {
			gray: colors.slate,
			blue: colors.blue,
			orange: colors.orange,
			rose: colors.rose,
			blue: colors.blue,
			green: colors.green,
			blue: colors.blue,
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
		backgroundColor: ['responsive', 'dark', 'focus', 'active', 'hover'],
		extend: { space: ['last'] }
	},
	plugins: []
}
