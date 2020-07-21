---
layout: post
title:  "A simple carousel"
date:   2020-07-21 17:44:00 +0200
categories: javascript
---

Making a carousel is a common task for many web developers. So what? This article offers a practical application of a linked list, more specifically, a circular doubly linked list.

A linked list is a collection of nodes where each node points to (at least) another node.

The simplest example is an ordinary linked list. Each node has some space to point to the next node in the chain. This is often taught (and then also often forgotten) in computer science classes. Here's a [quick refresher](https://www.geeksforgeeks.org/linked-list-set-1-introduction/).

A doubly linked list is similar to the above but with an extra pointer for the previous element. So from any given node it is possible to go forward or backward. A common practical example of this is a track list in a CD player. You can skip to the next track or to the previous and when you hit the last track (you reach the end) or the first track (you reach the beginning) that's it.

A circular doubly linked list is the same as a doubly linked list but the last node's "next" pointer points to the first node and the first node's "previous" pointer points to the last node. This makes it possible to cycle indefinitely in either direction: also sometimes known in web development as a carousel.

Here is a [javascript snippet](https://gist.github.com/wrburnham/861bb1f5f351253dffbd45baabf09aff) and here is a simple [demo](/etc/simple-carousel/demo.html) that also incorporates some basic css.
