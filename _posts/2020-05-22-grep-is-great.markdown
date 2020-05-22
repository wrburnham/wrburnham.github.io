---
layout: post
title:  "Grep is great"
date:   2020-05-22 18:35:00 +0200
categories: [linux]
---

Grep, or __general regular expression print__, is a fantastic program for searching for things. It's blazingly fast and available on many platforms, even in [git bash](https://gitforwindows.org/).

Often when working on some big multi-module Java project it's quicker to just use grep to search for an import or instantiation of a class. Here is one such example

```
grep -r "whatever" . --include=\*.java
```

Translated, that says

> Look for the text __whatever__ in all `.java` files in the current directory and all subdirectories

It's a quick one-liner I use to find a string in a module and its dependent modules, provided that they're all in the same directory.
