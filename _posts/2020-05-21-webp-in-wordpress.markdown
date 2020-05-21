---
layout: post
title:  "A WordPress WebP Encoder"
date:   2020-05-21 18:36:00 +0200
categories: [wordpress, webp, wasm]
---

The [previous post](https://wrburnham.github.io/react/webp/wasm/2020/04/30/libwebp-encode.html) talked about encoding images to WebP in a web browser thanks to WebAssembly and Google's cwebp encoder. This was, all things considered, a fairly straighhtforward first try as there were no constraints of any kind other than my own imagination.

In many projects though it's not so easy. A friend of mine asked me if it was possible to create a plugin for WebP encoding in WordPress and so I set out to try.

Disclaimer: I'm not a WordPress guy. In fact, the last time I did any work in php was years ago. Fortunately WordPress is quite well-documented so there were no hurdles that couldn't be overcome without a bit of study.

The [source code](https://github.com/wrburnham/wp-webp-wasm) is fairly straightforward as was planning how to write it. I broke the project down into a few simple steps.

1. Create a small UI on the "edit post" page.
2. Bind the UI to the conversion logic from [this app](https://wrburnham.github.io/etc/libwebp-encode/).
3. Create another small UI (plugin admin page) to handle a batch conversion (all files in the media library).
4. Create the appropriate backend hooks (actions) for points 1-3 and send data to the backend via ajax requests.
5. Create a filter for swapping `.jpeg` and `.png` images with `.webp` where available on content rendering.

I'm going to do a few more tests and then release it as a plugin. I'm not sure how popular such a plugin could be as there are already several others out there that do the same thing but one difference is all others require some form of server-side configuration. This is because php doesn't natively support webp without some kind of extension or invocation of external procedures. By moving the actual conversion to the client this problem is solved albeit at the expense of having to send the converted webp image to the server.

This article ties into a larger concept, which was one of Java's original selling points: [write once, run anywhere](https://en.wikipedia.org/wiki/Write_once,_run_anywhere). Admittedly it's almost never that simple but in my experience as a Java developer so far, it's usually pretty nice to have code that "just works" from one platform to another.
