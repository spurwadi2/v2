---
layout: page
current: about
title: Hello World v2.7.3
description: A fast and flexible modern static blogsite built with ❤
date: 2018-04-01 10:00:00
modified: 2019-02-14 00:00:00
navigation: true
class: page-template
subclass: 'post page'
cover: assets/images/about.webp
logo:
---

I have been away from the blogging scene for quite a while now, suddenly today it dawned upon me that I need to start writing/posting again. My writing is a little bit rusty now, and I need to brush on that. [^1]

>&quot;The beginning is the most important part of the work.&quot;<small><cite>Plato</cite></small>

Anyways, the moment I thought about blogging, Wordpress flashed in my mind. Well, I used Wordpress in the past and it worked well for a while, then I had to face issues like high-traffic and high CPU load and unexpected spikes in my server. [^2]

Those weren’t too much trouble, I would avoid fixing those bugs if I was busy, and sometimes I would leave the system untouched for 2 days straight and let the server admins frown and try to mitigate the outage. <i>I had a pretty straight forward deal with my hosting provider, that no matter what, they can’t shut down my website.</i>

The PHP runtime errors weren’t a big deal, the hundreds of thousands of SQL database queries weren’t a trouble, sometimes the site would run a tad bit slower than average, but it was OK overall for me. A sample of the emails I would receive from my hosting provider is given below:

>   Hello, 
>
>    I apologize, but I was forced to suspend the script "/home/xxxxx/public_html/xxxxxx/index.php" as it was causing a high load on the server, and due to it affecting all of the other accounts on the system, I was forced to take immediate action for the health of the server. 
>
>    I did notice that this was a Wordpress installation, and would recommend that you enable caching for it.
>
>    Please note that if you already have caching enabled, you will need to take more action such as looking into any high use modules or plugins, and seeing if there are any updates, or possibly any that you can disable to reduce the load that your site causes. 
>
>    If you reply back to this with your IP address we will be more than happy to go ahead enable HTTP access for you, so that you can safely work on the script without it causing further issues. Please let me know how you would like to proceed.  

But the game was changed when my site got hacked. Wordpress is notorious in getting hacked. The PHP code libraries are huge, and while Automattic tries to keep it relatively clean and bug free, bugs do persist among the thousands of lines of codes and every once in a while a bug gets discovered by the code breakers. If the bug can be exploited in some way to gain access of the site, the code breakers tend to do some serious damage. While I wasn’t been exclusively targeted by such individuals, I was part of a victimized group who used the same version of Wordpress, and all of our sites got defaced by some mass defacing software. Although it didn’t do serious damage, as I have daily off-site backup, I became dubious about the Wordpress platform.

So, this time around, while I was still brainstorming for ideas and theme designs and what not, I decided to go back to Jekyll, or you may say, rather old school. Why not use plain static HTML files with some CSS styling and JS animations?

<center><blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Proudly present: The new <a href="https://t.co/MNbxc6b6mF">https://t.co/MNbxc6b6mF</a> , a fast and flexible modern static blogsite built with love 💖</p>&mdash; Sigit Purwadi H. W. (@S_Purwadi) <a href="https://twitter.com/S_Purwadi/status/677392010395836420">December 17, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script></center>

Static sites are impossible to hack, as there are no codes needed to be run on the server. The only way a static site can be compromised if the code breakers have access to your FTP account. So I used Jekyll and GIT Version Control to do that for me. And it was so efficient that I would post materials daily instead of weekly. It was like love on first use. But Wordpress had lots of theme choices and for my personal site I decided to use Wordpress anyways disregarding the simpleness and speed static sites provided.

After the takeover of my Wordpress powered blog happened, I turned to self written PHP sites and static sites completely. I have built a social network based on PHP for my peer group which is highly secure but when it comes down to speed it lags behind. So I built this site using Jekyll, a blog aware static site generator.

I hope this site will perform as envisioned.

<center>•   •   •</center>

**Update:* Thanks for visiting my blog. I don’t post as often as I’d like. It’s a little contingent on time and motivation. Mostly time I’d say. But enjoy.. :D

-----

[^1]: [Sigit Purwadi on Medium]({{ site.url }}{% post_url 2017-01-27-sigit-purwadi-on-medium %})
[^2]: This domain previously hosted a Wordpress blog.