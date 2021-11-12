---
layout: default
current: topics
title: Explore Topics 💡
description: Topics pages provide rich coverage about certain information, opinion, and discussion.
navigation: True
cover: assets/images/cover/topics.webp
class: 'page-template'
subclass: 'post page'
logo: 'assets/images/ghost.png'
---

<header class="site-header outer" style="background-image: url({{ site.baseurl }}{% if page.cover %}{{ page.cover }}{% else %}{{ site.cover }}{% endif %}">
    <div class="inner">
    	{% include site-nav.html %}
        <div class="site-header-content">
            <h1 class="site-title">{{ page.title }}</h1>
            <h2 class="site-description">{{ page.description }}</h2>
        </div>
    </div>
</header>

<main id="site-main" class="site-main outer" role="main">

        <div class="post-feed">
            {%  include topics.html %}
        </div>

</main>
