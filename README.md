My simple portfolio blog built using [11ty](https://www.11ty.dev/) and [tailwindcss](http://tailwindcss.com/) based on [11ty base blog](https://github.com/11ty/eleventy-base-blog) Now come with dark mode.

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
  pattern: /^(?!(https:\/\/mmdsharifi\.com|#)).*$/gm,
  attrs: {
    target: '_blank',
    rel: 'noreferrer'
  }
})
eleventyConfig.setLibrary('md', markdownLibrary)
```

2. Draft post enabled.
3. Responsve images using srcset
4. Cloudinary and Netlify ready.
5. score 4 x 100 in Google lighthouse.
6. CSSnano (minify) ready.

![](https://res.cloudinary.com/mmdsharifi/image/upload/v1613408502/mmdsharifi.com/Screenshot_on_2021-02-14_at_19-06-24.png)

### Installation

1. Clone or download this repo and run `npm install`.
2. Remove unwated posts / works.
3. Update the site info in `metadata.json`.
4. Update the homepage info `in data.json`.
5. Update `about.md`.
6. Go nuts :)

Hope you like it ❤️

### Update

The current site is built with Nextjs and hosted on Vercel and can be found [here](https://github.com/mmdsharifi/mmdsharifi-next). However, I will continue to maintain this repo.
