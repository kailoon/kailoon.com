---
templateEngineOverride: njk,md
metaTitle: Hello World!
metaDescription: Why I write in my blog as a designer?
title: Hello World!
description: Move from WordPress to Static Sites Generators — 11ty, and others.
featuredImg: wp-11ty
subHeading: Yo! hello world! I'll talk about my reasons that I love blogging in a static site generator as designer and ex-developer. let's get started...
tags: ['SSG', 'WordPress', 'Web Development']
date: 2023-02-12
updated:
published: true
---

<div class="col-start-3 col-end-9">

### What Changed?

The web development landscape changed a lot in recent years. Developers moved to modern web development ([JAMstack](https://jamstack.org/)) and become more specialised. There are now front-end, backend and full-stack web development stacks. I believe, front-end web development became the automatic choice for most developers with designer background.

Other than that, WordPress evolved from a simple blogging platform to a [full-site-editing CMS](https://fullsiteediting.com/) (soon). We kinda see that coming. After years of reviewing on ThemeForest, the demands for a full fledge CMS from WordPress are increasing and page builder is gaining popularity since the introduction of [WPBakery](https://codecanyon.net/item/visual-composer-page-builder-for-wordpress/242431).

### Static Site Generators

I first encountered SSG back in 2017. I forgot the reason why I get into SSG but once I get started, I cannot stop. I tried [Gatsby](https://www.gatsbyjs.com/) & [Hugo](https://gohugo.io/) but 11ty became my favourite.

What fascinate me is the fact that we are using basic HTML/CSS again for building websites. This might sound like a return to the old ways of making sites but there are some key differences:

- SSG has improved over the years. You can basically get a site running within minutes.
- Different templating languages to choose from. Choose the one you like and go nuts.
- Automation became mainstream.
- It is secured, easy to scale and the performance is insane. These are also my main reasons of using SSG.

**SSG** simply makes more sense for most company static websites with minimal interaction or less-frequent content update.

#### Gatsby

[Gatsby](https://www.gatsbyjs.com/) is my first attempt to the SSG world. Well, I have my personal reason behind this. WordPress started using [React](https://reactjs.org/) for [Gutenberg](https://wordpress.org/gutenberg/) and it's just a good timing to learn React. There is definitely a learning curve when dealing with Gatsby while learning ReactJS at the same time. However, the performance of Gatsby is no doubt one of the best.

I found this article by [Bryce Wray](https://brycewray.com/posts/2019/07/why-staying-with-hugo) who has the similar struggle or experience with Gatsby. The plugins dependencies and those errors / warnings in the CLI are driving me crazy. There is this _uncertainty_ playing in head every time I install / run a build. Further, I find it is an overkilled to use Gatsby for personal blog.

#### Hugo

The thing about [Hugo](https://gohugo.io/) is that it feels lightweight, I was intrigued by the reported build speed. Site as big as [SmashingMagazine](https://www.smashingmagazine.com/2019/05/switch-wordpress-hugo/) is build on Hugo, this won't go wrong. So I dive in, having fun building my personal site 2.0 on Hugo using Go's html/template which based on [Golang](https://golang.org/). I'd recommend Hugo to anyone who would like to try SSG, I may still try it for a few small projects in the future.

The [Archetypes](https://gohugo.io/content-management/archetypes/) feature is really handy and I really hope I can do the same with 11ty.

#### 11ty

[Eleventy](https://www.11ty.dev/) is fairly new, if comparing to Gatsby and Hugo. It supports plugins and you can write it in multiple template languages, you can pick one or use them all together!

Eleventy seems to have all the features I wanted ( no archetypes tho ), fast-enough build speed, easy-to-use collections to group content. Further, I can add shortcodes easily for easy content management. The folder system is simple, dummy proof.

</div>
<div class="col-start-2 col-end-10">
{% figure 'Screenshot_on_2021-02-14_at_19-06-24', 'google lighthouse score 400', 'The magic 400 on Google Lighthouse.' %}

</div>
<div class="col-start-3 col-end-9">

This site is built with [11ty & TailwindCSS](https://github.com/mmdsharifi/mmdsharifi.com). It scores the magic 400 on Google Lighthouse.

</div>
