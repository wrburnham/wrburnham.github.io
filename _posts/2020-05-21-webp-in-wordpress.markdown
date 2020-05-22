---
layout: post
title:  "A WordPress webp encoder"
date:   2020-05-21 18:36:00 +0200
categories: [wordpress, webp, wasm]
---

## So what is webp anyway and why is it important?

WebP is an image format designed to produce images with a smaller file size when compared to jpeg or png versions of those same images. Much more information on the subject is available on [wikipedia](https://en.wikipedia.org/wiki/WebP) or directly in Google's developer [documentation](https://developers.google.com/speed/webp). Serving images as `.webp` files where supported by the browser is a good way to reduce the size of a webpage and it will also help with Search Engine Optimization (SEO). One useful tool for checking this is Google's [pagespeed insights](https://developers.google.com/speed/pagespeed/insights).

## Convert an image to webp in a web browser

The [previous post](https://wrburnham.github.io/react/webp/wasm/2020/04/30/libwebp-encode.html) talked about encoding images to WebP in a web browser thanks to WebAssembly and Google's cwebp encoder. This was, all things considered, a fairly straighhtforward first try as there were no constraints of any kind other than my own imagination.

## Packaging it as a WordPress plugin

A friend of mine asked me if it was possible to create a plugin for WebP encoding in WordPress and so I set out to try.

**Disclaimer**: I'm not a WordPress guy. In fact, the last time I did any work in php was years ago. Fortunately WordPress is quite well-documented so after a bit of study I could get to work.

The [source code](https://github.com/wrburnham/wp-webp-wasm) is simple enough, as was planning how to write it. I broke the project down into the following steps.

1. Create a small UI on the "edit post" page.
2. Bind the UI to the conversion logic from [this app](https://wrburnham.github.io/etc/libwebp-encode/).
3. Create another small UI (plugin admin page) to handle a batch conversion (all files in the media library).
4. Create the appropriate backend hooks (actions) for points 1-3 and send data to the backend via ajax requests.
5. Create a filter for swapping `.jpeg` and `.png` images with `.webp` where available on content rendering.

There are already several WordPress plugins out there that do the same thing but one difference is all others require some form of server-side configuration. This is because php doesn't natively support webp without some kind of extension or invocation of external procedures. By moving the actual conversion to the client this problem is solved albeit at the expense of having to send the converted webp image to the server.

## Write once, run anywhere

This article ties into a larger concept, which was one of Java's original selling points: [write once, run anywhere](https://en.wikipedia.org/wiki/Write_once,_run_anywhere). Admittedly it's almost never that simple but in my experience as a Java developer so far, it's usually pretty nice to have code that "just works" from one platform to another. That was the idea with this plugin, as all the php-based server-side webp solutions I've seen so far don't always work out of the box.
