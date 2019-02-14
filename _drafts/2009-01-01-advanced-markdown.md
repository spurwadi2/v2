---
layout: post
current: post
cover:  assets/images/hello-world.png
navigation: True
title: Advanced Markdown Tips
date: 2009-01-01 05:00:00
tags: [draft]
class: post-template
subclass: 'post tag-draft'
author: artcytech
---

There are lots of powerful things you can do with the Ghost editor

If you've gotten pretty comfortable with <a href="#">all the basics</a> of writing in Ghost, then you may enjoy some more advanced tips about the types of things you can do with Markdown!

As with the last post about the editor, you'll want to be actually editing this post as you read it so that you can see all the Markdown code we're using.

## Special formatting

As well as bold and italics, you can also use some other special formatting in Markdown when the need arises, for example:

* <s>strike through</s>
* <mark>highlight</mark> with <code>< mark ></code>
* *escaped characters*

## Writing code blocks
There are two types of code elements which can be inserted in Markdown, the first is inline, and the other is block. Inline code is formatted by wrapping any word or words in back-ticks, <code>like this</code>. Larger snippets of code can be displayed across multiple lines using triple back ticks:

<pre><code>.my-link {
    text-decoration: underline;
}
</code></pre>

If you want to get really fancy, you can even add syntax highlighting using <a href="http://prismjs.com/">Prism.js</a>.

## Full bleed images

One neat trick which you can use in Markdown to distinguish between different types of images is to add a <code>#hash</code> value to the end of the source URL, and then target images containing the hash with special styling. For example:

![img](assets/images/sigit-cover-wht.png#full)

which is styled with...

<pre><code>img[src$=&quot;#full&quot;] {
    max-width: 100vw;
}
</code></pre>

This creates full-bleed images in the Casper theme, which stretch beyond their usual boundaries right up to the edge of the window. Every theme handles these types of things slightly differently, but it's a great trick to play with if you want to have a variety of image sizes and styles.

## Reference lists

<strong>The quick brown <a href="https://en.wikipedia.org/wiki/Fox" title="Wikipedia: Fox">fox</a>, jumped over the lazy <a href="https://en.wikipedia.org/wiki/Dog" title="Wikipedia: Dog">dog</a>.</strong>

Another way to insert links in markdown is using reference lists. You might want to use this style of linking to cite reference material in a Wikipedia-style. All of the links are listed at the end of the document, so you can maintain full separation between content and its source or reference.

## Creating footnotes

The quick brown fox [^1] jumped over the lazy dog [^2].

Footnotes are a great way to add additional contextual details when appropriate. Ghost will automatically add footnote content to the very end of your post.

## Full HTML

Perhaps the best part of Markdown is that you're never limited to just Markdown. You can write HTML directly in the Ghost editor and it will just work as HTML usually does. No limits! Here's a standard YouTube embed code as an example:

<iframe width="560" height="315" src="https://www.youtube.com/embed/Cniqsc9QfDo?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>

---

[^1]: Foxes are red 
[^2]: Dogs are usually not red
