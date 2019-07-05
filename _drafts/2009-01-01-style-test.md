---
layout: post
current: post
cover:  assets/images/hello-world.png
navigation: True
title: A Full and Comprehensive Style Test
summary: Below is just about everything you’ll need to style in the theme. Check the source code to see the many embedded elements within paragraphs.
date: 2012-09-01 10:00:00
tags: [draft]
class: post-template
subclass: 'post tag-draft'
author: artcytech
---

Below is just about everything you’ll need to style in the theme.

Check the source code to see the many embedded elements within paragraphs.

...

* Auto generated table of contents
{:toc}

---

# Heading 1 #

## Heading 2 ##

### Heading 3 ###

#### Heading 4 ####

##### Heading 5 #####

###### Heading 6 ######

<h7> Heading 7 </h7>

---

Lorem ipsum dolor sit amet, <a title="test link" href="#">test link</a> adipiscing elit. <strong>This is strong.</strong> Nullam dignissim convallis est. Quisque aliquam. <em>This is emphasized.</em> Donec faucibus. Nunc iaculis suscipit dui. 5<sup>sup</sup> = 125. Water is H<sub>sub</sub>O. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. <cite>The New York Times</cite> (That’s a citation). <u>Underline.</u> Maecenas ornare tortor. Donec sed tellus eget sapien fringilla nonummy. Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus.

      Lorem ipsum dolor sit amet, test link adipiscing elit.

<abbr title="Hyper Text Markup Language">HTML abbr</abbr> and <abbr title="Cascading Style Sheets">CSS abbr</abbr> are our tools. Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. <del>This is **del** correction</del> Morbi imperdiet augue quis tellus.  Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus. To copy a file type <code>COPY <var>filename</var></code>.  <ins>Let’s make that 7.</ins> This <strike>**strike** text</strike> has been struck.

***

    This is strong. Nullam dignissim convallis est. Quisque aliquam. This is emphasized. Donec faucibus. Nunc iaculis suscipit dui. 5sup = 125. Water is HsubO.

***

    Hello,

    I apologize, but I was forced to suspend the script "/home/xxxxx/public_html/xxxxxx/index.php" as it was causing a high load on the server, and due to it affecting all of the other accounts on the system, I was forced to take immediate action for the health of the server.

    I did notice that this was a Wordpress installation, and would recommend that you enable caching for it.
  
    Please note that if you already have caching enabled, you will need to take more action such as looking into any high use modules or plugins, and seeing if there are any updates, or possibly any that you can disable to reduce the load that your site causes. 
  
    If you reply back to this with your IP address we will be more than happy to go ahead enable HTTP access for you, so that you can safely work on the script without it causing further issues. Please let me know how you would like to proceed.

## Media ##

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.

### Big Image

<img src="assets/images/topics.png#full" alt="Test Image" />

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

### Small Image

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.

![img](assets/images/sigit-cover.png#small)
<small>Your image caption</small>

Labore et dolore.

## List Types

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

### Table

<table>
<tbody>
<tr>
<th>Table Header 1</th>
<th>Table Header 2</th>
<th>Table Header 3</th>
</tr>
<tr>
<td>Division 1</td>
<td>Division 2</td>
<td>Division 3</td>
</tr>
<tr class="even">
<td>Division 1</td>
<td>Division 2</td>
<td>Division 3</td>
</tr>
<tr>
<td>Division 1</td>
<td>Division 2</td>
<td>Division 3</td>
</tr>
</tbody>
</table>

## Preformatted Text

Typographically, preformatted text is not the same thing as code. Sometimes, a faithful execution of the text requires preformatted text that may not have anything to do with code. Most browsers use Courier and that’s a good default — with one slight adjustment, Courier 10 Pitch over regular Courier for Linux users.

<h3 id="code">Code</h3>

Code can be presented inline, like <code>&lt;?php bloginfo('stylesheet_url'); ?&gt;</code>, or within a <code>&lt;pre&gt;</code> block. Because we have more specific typographic needs for code, we’ll specify Consolas and Monaco ahead of the browser-defined monospace font.

Code blocks can also be inserted with the highlight tag as below:
<pre>
    {% raw %}
    {% highlight language-x %}
    # some code
    {% endhighlight %}
    {% endraw %}
</pre>

More information about code highlighting in jekyll can be found  <a href="https://jekyllrb.com/docs/templates/#code-snippet-highlighting">in Jekyll documentation</a>.

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

<hr />

<h2 id="blockquotes">Blockquotes</h2>

Let’s keep it simple. Italics are good to help set it off from the body text. Be sure to style the citation.

<blockquote>
  Good afternoon, gentlemen. I am a HAL 9000 computer. I became operational at the H.A.L. <q>plant in Urbana</q>, Illinois on the 12th of January 1992. My instructor was Mr. Langley, and he taught me to sing a song. If you’d like to hear it I can sing it for you. <cite>— <a href="http://en.wikipedia.org/wiki/HAL_9000">HAL 9000</a></cite>
</blockquote>

And here’s a bit of trailing text.

> Good afternoon, gentlemen. I am a HAL 9000 computer. I became operational at the H.A.L. plant in Urbana, Illinois on the 12th of January 1992. My instructor was Mr. Langley, and he taught me to sing a song. If you’d like to hear it I can sing it for you. <small><cite>HAL9000</cite></small>

> &quot;The beginning is the most important part of the work.&quot; <small><cite title="Plato">Plato</cite></small>

> &quot;The beginning is the most important part of the work.&quot;
> <br/><small><cite title="Plato">Plato</cite></small>

<hr />

<h2 id="textlevelsemantics">Text-level semantics</h2>

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

<hr />

<h2 id="forms">Forms</h2>

<form>
<fieldset>
<legend>Inputs as descendents of labels (form legend)</legend>
<label>
<b>Text input</b>
<input type="text" value="default value">
</label>
<label>
<b>Email input</b>
<input type="email">
</label>
<label>
<b>Search input</b>
<input type="search">
</label>
<label>
<b>Tel input</b>
<input type="tel">
</label>
<label>
<b>URL input</b>
<input type="url" placeholder="http://">
</label>
<label>
<b>Password input</b>
<input type="password" value="password">
</label>
<label>
<b>File input</b>
<input type="file">
</label>
<label>
<b>Radio input</b>
<input type="radio" name="rad">
</label>
<label>
<b>Checkbox input</b>
<input type="checkbox">
</label>
<label>
<input type="radio" name="rad"> Radio input
</label>
<label>
<input type="checkbox"> Checkbox input
</label>
<label>
<b>Select field</b>
<select>
<option>Option 01</option>
<option>Option 02</option>
</select>
</label>
<label>
<b>Textarea</b>
<textarea cols="30" rows="5" >Textarea text</textarea>
</label>
</fieldset>

<fieldset>
<legend>Clickable inputs and buttons</legend>
<input type="image" src="http://placekitten.com/90/24" alt="Image (input)">
<input type="reset" value="Reset (input)">
<input type="button" value="Button (input)">
<input type="submit" value="Submit (input)">
<button type="reset">Reset (button)</button>
<button type="button">Button (button)</button>
<button type="submit">Submit (button)</button>
</fieldset>

<fieldset id="boxsize">
<legend>box-sizing tests</legend>
<div><input type="text" value="text"></div>
<div><input type="email" value="email"></div>
<div><input type="search" value="search"></div>
<div><input type="url" value="http://example.com"></div>
<div><input type="password" value="password"></div>

<div><input type="color" value="#000000"></div>
<div><input type="number" value="5"></div>
<div><input type="range" value="10"></div>
<div><input type="date" value="1970-01-01"></div>
<div><input type="month" value="1970-01"></div>
<div><input type="week" value="1970-W01"></div>
<div><input type="time" value="18:23"></div>
<div><input type="datetime" value="1970-01-01T00:00:00Z"></div>
<div><input type="datetime-local" value="1970-01-01T00:00"></div>

<div><input type="radio"></div>
<div><input type="checkbox"></div>

<div><select><option>Option 01</option><option>Option 02</option></select></div>
<div><textarea cols="30" rows="5" >Textarea text</textarea></div>

<div><input type="image" src="http://placekitten.com/90/24" alt="Image (input)"></div>
<div><input type="reset" value="Reset (input)"></div>
<div><input type="button" value="Button (input)"></div>
<div><input type="submit" value="Submit (input)"></div>

<div><button type="reset">Reset (button)</button></div>
<div><button type="button">Button (button)</button></div>
<div><button type="submit">Submit (button)</button></div>
</fieldset>
</form>

<hr />

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