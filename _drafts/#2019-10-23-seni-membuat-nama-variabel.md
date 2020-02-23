---
layout: post
current: post
cover:  assets/images/no-cover.gif
navigation: True
title: Seni dalam Penamaan Variabel
description: Deskripsi singkat untuk keperluan meta tag dan OpenGraph
summary: Ringkasan artikel untuk ditampilkan pada postcard di laman utama, topik, dan artikel terkait.
tags: [coding]
class: post-template
subclass: 'post tag-coding'
author: artcytech
comments: true
mathjax:
---

Terkadang untuk sekadar memberi nama pada sesuatu bisa menjadi sedikit sulit. Penamaan yang baik tentu memudahkan kita dan orang lain dalam memanfaatkannya.

Misalnya ketika orang tua memberikan nama kepada anaknya, harapannya adalah si anak kelak menjadi orang yang diharapkan oleh orang tuanya.

Pernakah Anda melihat kode seperti ini?

```javascript
const convertObj = (x, y, z) => {
    const k = Object.keys(x);
    return k.map((key) => {
        return {
            [y]: key,
            [z]: x[key],
        }
    });
}
```

```javascript
// bad
const fruit = ['apple', 'banana', 'cucumber'];// okay
const fruitArr = ['apple', 'banana', 'cucumber'];// good
const fruits = ['apple', 'banana', 'cucumber'];// great - "names" implies strings
const fruitNames = ['apple', 'banana', 'cucumber'];// great
const fruits = [{
    name: 'apple',
    genus: 'malus'
}, {
    name: 'banana',
    genus: 'musa'
}, {
    name: 'cucumber',
    genus: 'cucumis'
}];
```

```javascript
// bad
const open = true;
const write = true;
const fruit = true;// good
const isOpen = true;
const canWrite = true;
const hasFruit = true;
```

```javascript
const open = true;
```

There are only two hard things in Computer Science: cache invalidation and naming things. <small><cite>Phil Karlton</cite></small>

<center>•   •   •</center>



---

[^1]: [Nama](www.com)