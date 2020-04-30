---
layout: post
title:  "Client-side webp encoding"
date:   2020-04-30 13:15:00 +0200
categories: [react, webp, wasm]
---
Leveraging web assembly is amazing and in some cases it replaces the need for server-side processing. It's not always straight-forward depending on what needs to be done but the (huge) advantage is being able to compile libraries to a format that is executable in the browser. There are many tutorials readily available on the subject and I followed some of them to do a fairly common task&mdash;see [here](https://developers.google.com/web/updates/2018/03/emscripting-a-c-library) and my own first try [here](https://github.com/wrburnham/webp-wasm).

Integrating a wasm module into a react app wasn't simple and I eventually opted for putting both the **a.out.wasm** module and the **a.out.js** script that wraps it directly in the public directory and including the script in **index.html**. See [here](https://wrburnham.github.io/etc/libwebp-encode) for a working example or view the [source code](https://github.com/wrburnham/libwebp-encode).
