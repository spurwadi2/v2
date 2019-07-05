---
layout: post
current: post
cover:  assets/images/markdown.jpeg
navigation: True
title: Markdown Basic Syntax
description: Using Markdown doesn't mean that you can't also use HTML.
summary: Using Markdown doesn't mean that you can't also use HTML.
tags: [webmaster]
class: post-template
subclass: 'post tag-webmaster'
author: artcytech
comments: true
mathjax:
---

Nearly all Markdown applications support the basic syntax outlined in John Gruber’s original design document.

There are minor variations and discrepancies between Markdown processors — those are noted inline wherever possible.

Using Markdown doesn't mean that you can't also use HTML. You can add HTML tags to any Markdown file. This is helpful if you prefer certain HTML tags to Markdown syntax. For example, some people find that it's easier to use HTML tags for images [^1].

<h1>Table of content</h1>
Check the source code to see the many embedded elements within paragraphs.
* Auto generated table of contents
{:toc}

---

# Headings

To create a heading, add number signs (*#*) in front of a word or phrase. The number of number signs you use should correspond to the heading level. For example, to create a heading level three (*<h3>*), use three number signs (e.g., *### Heading 3*).

<h1># Heading 1</h1>
<h2>## Heading 2</h2> 
<h3>### Heading 3</h3>
<h4>#### Heading 4</h4>
<h5>##### Heading 5</h5>
<h6>###### Heading 6</h6>
<h7>Heading 7</h7>

# Paragraphs

To create paragraphs, use a blank line to separate one or more lines of text. You should not indent paragraphs with spaces or tabs.

Here's some [Markdown Extended Syntax](/markdown-extended) for Advanced features that build on the basic Markdown syntax.

<center>•   •   •</center>

Lorem ipsum dolor sit amet, <a title="test link" href="#">test link</a> adipiscing elit. <strong>This is strong.</strong> Nullam dignissim convallis est. Quisque aliquam. <em>This is emphasized.</em> Donec faucibus. Nunc iaculis suscipit dui. 5<sup>sup</sup> = 125. Water is H<sub>sub</sub>O.

Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. <cite>The New York Times</cite> (That’s a citation). <u>Underline.</u> Maecenas ornare tortor. Donec sed tellus eget sapien fringilla nonummy. Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus.

<abbr title="Hyper Text Markup Language">HTML abbr</abbr> and <abbr title="Cascading Style Sheets">CSS abbr</abbr> are our tools. Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. <del>This is **del** correction</del> Morbi imperdiet augue quis tellus.  Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus. To copy a file type <code>COPY <var>filename</var></code>.  <ins>Let’s make that 7.</ins> This <strike><b>strike</b> text</strike> has been struck.

<center>•   •   •</center>

# Emphasis

You can add emphasis by making text **bold**, *italic* or ***bold and italic***

<pre><code>
*italic*
_italic_

**bold**
__bold__

***bold and italic***
__*bold and italic***
</code></pre>

## Special formating

As well as bold and italics, you can also use some other special formatting in Markdown when the need arises, for example:

The <s>strike through</s> example<br/>
The <code>highlight</code> with <code>< code > mark</code> example<br/>
The *escaped characters* example<br/>
The <a href="#">a element</a> example <br />
The <abbr>abbr element</abbr> and <abbr title="Title text">abbr element with title</abbr> examples <br />
The <b>b element</b> example <br />
The <cite>cite element</cite> example <br />
The <code>code element</code> example <br />
The <del>del element</del> example <br />
The <dfn>dfn element</dfn> and <dfn title="Title text">dfn element with title</dfn> examples <br />
The <em>em element</em> example <br />
The <i>i element</i> example <br />
The <ins>ins element</ins> example <br />
The <kbd>kbd element</kbd> example <br />
The <mark>mark element</mark> example <br />
The <q>q element <q>inside</q> a q element</q> example <br />
The <s>s element</s> example <br />
The <samp>samp element</samp> example <br />
The <small>small element</small> example <br />
The <span>span element</span> example <br />
The <strong>strong element</strong> example <br />
The <sub>sub element</sub> example <br />
The <sup>sup element</sup> example <br />
The <var>var element</var> example <br />
The <u>u element</u> example

# Link

To create a link, enclose the link text in brackets (e.g., [Duck Duck Go]) and then follow it immediately with the URL in parentheses (e.g., (https://duckduckgo.com)).

<pre><code>My favorite search engine is [Duck Duck Go](https://duckduckgo.com).
</code></pre>

The rendered output looks like this:

My favorite search engine is [Duck Duck Go](https://duckduckgo.com).


# Media

To add an image, add an exclamation mark (*!*), followed by alt text in brackets, and the path or URL to the image asset in parentheses. You can optionally add a title after the URL in the parentheses.

## Full image

One neat trick which you can use in Markdown to distinguish between different types of images is to add a <code>#hash</code> value to the end of the source URL, and then target images containing the hash with special styling. For example:

<pre><code>![ALT text](assets/images/markdown.jpeg#full "Title text example")</code></pre>

which is styled with...

<pre><code>img[src$=&quot;#full&quot;] {
    max-width: 100vw;
}
</code></pre>

This creates full-bleed images in the Casper theme, which stretch beyond their usual boundaries right up to the edge of the window. Every theme handles these types of things slightly differently, but it's a great trick to play with if you want to have a variety of image sizes and styles.

The rendered output looks like this:

![ALT text](assets/images/markdown.jpeg#full "Title text example")

## Small image

<pre><code>![ALT Text](assets/images/markdown.jpeg#small "Title text example")</code></pre>

![ALT Text](assets/images/markdown.jpeg#small "Title text example")

To add a link to an image, enclose the Markdown for the image in brackets, and then add the link in parentheses.

<pre><code>[![ALT Text](assets/images/markdown.jpeg "IMG default size")](#media)</code></pre>

[![ALT Text](assets/images/markdown.jpeg "IMG default size")](#media)

# Line Breaks & horizontal rule

To create a line break (<code><\br></code>), end a line with two or more spaces, and then type return.

To create a horizontal rule, use three or more asterisks (***), dashes (---), or underscores (___) on a line by themselves.

    <center>•   •   •</center>
<center>•   •   •</center>

---

# Blockquotes

Let’s keep it simple. Italics are good to help set it off from the body text. Be sure to style the citation.

To create a blockquote, add a > in front of a paragraph.

{% highlight html %}
> Good afternoon, gentlemen. I am a HAL 9000 computer. I became operational at the H.A.L. plant in Urbana, Illinois on the 12th of January 1992.
>
> My instructor was Mr. Langley, and he taught me to sing a song. If you’d like to hear it I can sing it for you.
<small><cite>[HAL9000](http://en.wikipedia.org/wiki/HAL_9000 "Wikipedia: HAL 9000")</cite></small>
{% endhighlight %}

The rendered output looks like this:

> Good afternoon, gentlemen. I am a HAL 9000 computer. I became operational at the H.A.L. plant in Urbana, Illinois on the 12th of January 1992.
>
> My instructor was Mr. Langley, and he taught me to sing a song. If you’d like to hear it I can sing it for you.
<small><cite>[HAL9000](http://en.wikipedia.org/wiki/HAL_9000 "Wikipedia: HAL 9000")</cite></small>

# List

### Definition List

<dl>
<dt>Definition List Title</dt>
<dd>This is a definition list division.</dd>

<dt>Definition</dt>
<dd>An exact statement or description of the nature, scope, or meaning of something: <em>our definition of what constitutes poetry.</em></dd>
</dl>

### Ordered List

1.  Item 1
2.  Item 2
    1. Sub item 1
    2. Sub item 2
3.  Item 3

### Unordered List

* Item 1
* Item 2
  * Sub item 1
    Desciption sub item 1
  * Sub item 2
    * Sub item 1
* Item 3

# Reference and footnotes

Another way to insert links in markdown is using reference lists. You might want to use this style of linking to cite reference material in a Wikipedia-style.

All of the links are listed at the end of the document, so you can maintain full separation between content and its source or reference.

<pre><code>The quick brown [fox](https://en.wikipedia.org/wiki/Fox "Wikipedia: Fox")[^2], jumped over the lazy [dog](https://en.wikipedia.org/wiki/Dog "Wikipedia: Dog")[^3].</code></pre>

The quick brown [fox](https://en.wikipedia.org/wiki/Fox "Wikipedia: Fox")[^2], jumped over the lazy [dog](https://en.wikipedia.org/wiki/Dog "Wikipedia: Dog")[^3].

# Code

There are two types of code elements which can be inserted in Markdown, the first is inline, and the other is block.

Inline code is formatted by wrapping any word or words in back-ticks, <code>like this</code>. Larger snippets of code can be displayed across multiple lines using triple back ticks:

{% highlight css %}
.my-link {
    text-decoration: underline;
}
{% endhighlight %}

Code blocks can also be inserted with the highlight tag as below:
<pre>
    {% raw %}
    {% highlight language-x %}
    # some code
    {% endhighlight %}
    {% endraw %}
</pre>

If you want to get really fancy, you can even add syntax highlighting using <a href="http://prismjs.com/">Prism.js</a>.

<center>•   •   •</center>

These area a couple of examples showing the resulting highlighted code:

{% highlight css %}
/* css code sample */
#container {
    float: left;
    margin: 0 -240px 0 0;
    width: 100%;
}
{% endhighlight %}

{% highlight javascript lineos %}
// javascript code sample
$.ajax({
  type: 'POST',
  url: 'backend.php',
  data: "q="+myform.serialize(),
  success: function(data){
    // on success use return data here
  },
  error: function(xhr, type, exception) {
    // if ajax fails display error alert
    alert("ajax error response type "+type);
  }
});
{% endhighlight %}

Now you can also use <a href="https://highlightjs.org/">highlight.js</a>.
For more on how to use it and on the available styles check their
<a href="https://highlightjs.org/static/demo/">demo</a> and
<a href="http://highlightjs.readthedocs.org/en/latest/">documentation</a> pages.

{% highlight swift %}
// Swift code sample
import Foundation

@objc class Person: Entity {
  var name: String!
  var age:  Int!

  init(name: String, age: Int) {
    /* /* ... */ */
  }

  // Return a descriptive string for this person
  func description(offset: Int = 0) -> String {
    return "\(name) is \(age + offset) years old"
  }
}
{% endhighlight %}

# Escaping Characters

To display a literal character that would otherwise be used to format text in a Markdown document, add a backslash (*\\*) in front of the character.

<pre><code>\* Without the backslash, this would be a bullet in an unordered list.</code></pre>

\* Without the backslash, this would be a bullet in an unordered list.

# Full HTML

Perhaps the best part of Markdown is that you're never limited to just Markdown. You can write HTML directly in the Ghost editor and it will just work as HTML usually does. No limits! Here's a standard YouTube embed code as an example:

<iframe width="560" height="315" src="https://www.youtube.com/embed/Cniqsc9QfDo?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>

---

[^1]: [Basic Syntax: The Markdown elements outlined in John Gruber's design document](https://www.markdownguide.org/basic-syntax)

[^2]: Foxes are red  
[^3]: Dogs are usually not red
