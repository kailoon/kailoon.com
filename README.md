My simple portfolio blog built using [11ty](https://www.11ty.dev/) and [tailwindcss](http://tailwindcss.com/). Now come with dark mode.

### Shortcodes

**Responsive gallery** or single image using srcset via cloudinary, output webp format.
]

```
{% respimg path, alt, style %}

<!-- settings: -->
eleventyConfig.srcsetWidths = [
  { w: 400, v: 400 },
  { w: 600, v: 600 },
  { w: 800, v: 800 },
  { w: 1200, v: 1200 },
  { w: 1440, v: 1440 }
```

**(figure) Image** with caption tag.

```
{% figure path, alt %}
```

### Features

1. Convert external links to target \_blank and noreferrer for better SEO optimisation, using [markdown-it](https://www.npmjs.com/package/markdown-it) & [markdown-it-link-attributes](https://www.npmjs.com/package/markdown-it-link-attributes) plugins.

```
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
```

---

Hope you like it ❤️
