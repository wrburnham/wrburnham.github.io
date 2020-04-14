---
layout: post
title:  "Snake Case to Camel Case"
date:   2020-04-14 15:26:00 +0200
categories: react
---
What's snake case anyway? What's camel case? Where did these words come from?

Underscores have long been used as word separators, such as when naming variables. Consider

{% highlight c %}
int some_number = 4;
{% endhighlight %}

which is typical of C, python and sometimes php, known as snake case

and 

{% highlight java %}
int someNumber = 4;
{% endhighlight %}

which is typical of Java and C#, known as camel case.

> There are only two hard things in Computer Science: cache invalidation and naming things.

This quote is often attributed to Martin Fowler but he attributes it to Phil Karlton.

I'm not really sure where terms such as snake case, camel case and even kebab case came from but there sure are a lot of them. One helpful rule in coding is consistent naming / code conventions.

Sometimes it can be necessary to convert from one form to the other. To that end, I've created a small react project for converting snake case to camel case. Check it out [here](https://wrburnham.github.io/etc/snake-to-camel) or view the [source code](https://github.com/wrburnham/snake-to-camel).
