const pluginNavigation = require('@11ty/eleventy-navigation')
const markdownIt = require('markdown-it')
const markdownitlinkatt = require('markdown-it-link-attributes')

module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy('./src/css/styles.css')
	eleventyConfig.addPassthroughCopy('./src/browserconfig.xml')
	eleventyConfig.addPassthroughCopy('./src/site.webmanifest')
	eleventyConfig.addPassthroughCopy('./src/img')

	eleventyConfig.addPlugin(pluginNavigation)
	eleventyConfig.setDataDeepMerge(true)
	eleventyConfig.addShortcode('respimg', (path, alt, style) => {
		const fetchBase = `https://res.cloudinary.com/kailoon/image/upload/`
		const src = `${fetchBase}q_auto,f_auto,w_${eleventyConfig.fallbackWidth}/${path}.${eleventyConfig.format}`
		const srcset = eleventyConfig.srcsetWidths
			.map(({ w, v }) => {
				return `${fetchBase}dpr_auto,q_auto,w_${w}/kailoon.com/${path}.${eleventyConfig.format} ${v}w`
			})
			.join(', ')

		return `<img class="rounded" loading="lazy" src="${src}" srcset="${srcset}" alt="${
			alt ? alt : ''
		}" width="400" height="300">`
	})

	eleventyConfig.addShortcode('figure', (path, alt, caption) => {
		const fetchBase = `https://res.cloudinary.com/kailoon/image/upload/`
		const src = `${fetchBase}q_auto,f_auto,w_${eleventyConfig.fallbackWidth}/${path}.${eleventyConfig.format}`
		const srcset = eleventyConfig.srcsetWidths
			.map(({ w, v }) => {
				return `${fetchBase}dpr_auto,q_auto,w_${w}/kailoon.com/${path}.${eleventyConfig.format} ${v}w`
			})
			.join(', ')

		return `<figure class="mb-10 md:-mx-10"><img class="rounded" loading="lazy" src="${src}" srcset="${srcset}" alt="${
			alt ? alt : ''
		}" width="400" height="300"><figcaption class="text-center text-sm mt-3 text-gray-600">${
			caption ? caption : ''
		}</figcaption></figure>`
	})

	// https://github.com/eeeps/eleventy-respimg
	eleventyConfig.cloudinaryCloudName = 'kailoon'
	eleventyConfig.srcsetWidths = [
		{ w: 400, v: 400 },
		{ w: 600, v: 600 },
		{ w: 800, v: 800 },
		{ w: 1000, v: 1200 }
	]
	eleventyConfig.format = 'webp'
	eleventyConfig.fallbackWidth = 800

	/* Markdown Overrides */
	let markdownLibrary = markdownIt({
		html: true,
		breaks: true
	}).use(markdownitlinkatt, {
		pattern: /^(?!(https:\/\/kailoon\.com|#)).*$/gm,
		attrs: {
			target: '_blank',
			rel: 'noreferrer'
		}
	})
	eleventyConfig.setLibrary('md', markdownLibrary)

	return {
		dir: {
			input: 'src',
			output: '_site',
			data: '_data'
		}
	}
}
