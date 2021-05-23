const tailwindcss = require('tailwindcss')
const cssnano = require('cssnano')
const autoprefixer = require('autoprefixer')
const jit = require('@tailwindcss/jit')
const plugins = [tailwindcss(), autoprefixer(), cssnano(), jit()]

module.exports = {
	plugins
}
