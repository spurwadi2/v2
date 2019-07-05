---
layout: post
current: post
cover:  assets/images/markdown.jpeg
navigation: True
title: Markdown Extended Syntax
description: Advanced features that build on the basic Markdown syntax
summary: Advanced features that build on the basic Markdown syntax
tags: [webmaster]
class: post-template
subclass: 'post tag-webmaster'
author: artcytech
comments: true
mathjax:
---

There are lots of powerful things you can do with Markdown

If you've gotten pretty comfortable with [all the basics](/markdown-basic) of writing, then you may enjoy some more advanced tips about the types of things you can do with Markdown!

As with the last post about the editor, you'll want to be actually editing this post as you read it so that you can see all the Markdown code we're using.

## Embeds

Sometimes all you want to do is embed a little love from another location and set your post alive.

### Video

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

<iframe src="//player.vimeo.com/video/103224792?title=0&amp;byline=0&amp;portrait=0" width="600" height="338" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

Culpa qui officia deserunt mollit anim id est laborum.

### Slides

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

<script async class="speakerdeck-embed" data-id="34d2856027ce01316b5d621ab8e7d421" data-ratio="1.33333333333333" src="//speakerdeck.com/assets/embed.js"></script>

Culpa qui officia deserunt mollit anim id est laborum.

### Audio

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/169381837&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>

Culpa qui officia deserunt mollit anim id est laborum.

### Code

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.

<div data-height="268" data-theme-id="0" data-slug-hash="bcqhe" data-default-tab="js" data-user="rglazebrook" class='codepen'>

<pre><code>var c = new Sketch.create({autoclear: false}),
    bigCircle = 50,
    littleCircle = 5,
    // The velocity value determines how much to move the spinner head (in radians).
    velocity = 0.105,
    hue = 0,
    // The alpha value below determines the length of the spinner&#39;s tail.
    bg = &#39;rgba(40,40,40,.075)&#39;;
    Spinner = function() {};

Spinner.prototype.setup = function() {
  this.x = c.width / 2;
  this.y = c.height / 2 - bigCircle;
  this.rotation = 0;
}
Spinner.prototype.update = function() {
  this.rotation += velocity;
  this.rotation = this.rotation % TWO_PI;
  this.x = c.width /2 + cos(this.rotation) * bigCircle;
  this.y = c.height / 2 + sin(this.rotation) * bigCircle;
}
Spinner.prototype.draw = function() {
  c.fillStyle = &#39;hsl(&#39;+hue+&#39;,50%,50%)&#39;;
  c.beginPath();
  c.arc(this.x, this.y, littleCircle, 0, TWO_PI);
  c.fill();
  c.closePath();
}
c.setup = function() {
  spinner = new Spinner();
  spinner.setup();
}
c.update = function() {
  spinner.update();
  hue = ++hue % 360;
}
c.draw = function() {
  spinner.draw();
  c.fillStyle = bg;
  c.fillRect(0,0,c.width,c.height);
}
</code></pre>

See the Pen <a href='http://codepen.io/rglazebrook/pen/bcqhe/'>Simple Rotating Spinner</a> by Rob Glazebrook (<a href='http://codepen.io/rglazebrook'>@rglazebrook</a>) on <a href='http://codepen.io'>CodePen</a>.

</div><script async src="//codepen.io/assets/embed/ei.js"></script>

| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |

| Syntax      | Description | Test Text     |
| :---        |    :----:   |          ---: |
| Header      | Title       | Here's this   |
| Paragraph   | Text        | And more      |

First Term
: This is the definition of the first term.

Second Term
: This is one definition of the second term.
: This is another definition of the second term.

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media