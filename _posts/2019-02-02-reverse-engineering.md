---
layout: post
current: post
cover:  assets/images/reverse-eng.png
navigation: True
title: Reverse Engineering
description: Reverse engineering itu ibarat mencari tahu resep, bahan, bumbu dan rempah suatu masakan dengan cara "menguliti" rasa dan aroma dalam setiap sendoknya.
summary: Reverse engineering itu ibarat mencari tahu resep, bahan, bumbu dan rempah suatu masakan dengan cara "menguliti" rasa dan aroma dalam setiap sendoknya.
tags: [coding]
class: post-template
subclass: 'post tag-coding'
author: artcytech
comments: true
mathjax:
---

Reverse engineering merupakan topik paling menarik, tetapi juga butuh waktu yang sangat lama untuk mempelajarinya.

*Reverse Engineering (RE)* atau rekayasa terbalik atau rekayasa mundur secara bebas dapat diartikan sebagai prosedur dan proses dalam membongkar suatu objek untuk mengetahui bahan, cara kerja, atau teknologi yang dipakai sehingga objek tersebut bisa berfungsi dengan baik.

Orang bisa merekayasa balik berbagai macam hal, ambilah contoh paling sederhana seperti mencari tahu resep suatu masakan. Kita bisa menerka bahan, bumbu dan rempah yang dipakai dalam suatu masakan, atau bisa juga dengan melakukan riset komprehensif untuk "menguliti" rasa dan aroma dalam setiap sendoknya.

Setelah melalui proses yang panjang, akhirnya kita tahu bahwa masakan itu terbuat dari bahan utama berupa daging ayam yang direbus bersama rempah tradisional, misalnya..

<center>•   •   •</center>

Kembali pada *reverse engineering*, dalam konteks ini RE adalah proses bagaimana kita bisa mengetahui algoritma program atau source codenya jika memungkinkan.

Rekayasa balik perangkat lunak melibatkan kode mesin atau bilangan biner pada suatu program untuk dikembalikan ke sumber (kode) aslinya.

Sedangkan untuk rekayasa balik pada perangkat keras biasanya melibatkan pembongkaran pada perangkat untuk mengetahui cara kerjanya.

Misalnya, jika produsen prosesor komputer ingin melihat cara kerja prosesor dari pabrikan lain, mereka akan membeli prosesor tersebut dan membongkarnya untuk membuat prosesor mereka sendiri yang serupa atau lebih baik dari pesaingnya.

Namun, proses ini ilegal di banyak negara. Secara umum, rekayasa perangkat keras terbalik membutuhkan banyak keahlian yang cukup mahal. [^1]

## Tujuan dan Implementasi Secara Umum

Ada banyak hal yang bisa dilakukan dengan reverse engineering.

Dalam kasus virus dan malware, kita bisa menganalisis virus atau malware dan membuat anti yang tepat. Berbagai file yang terkena ransomware berhasil didekrip karena ada kelemahan dalam enkripsinya, dan ini ditemukan dengan reverse engineering dan tentunya ilmu kriptografi.

Malware yang sangat spesifik (misalnya yang digunakan untuk hacking Bank Sentral Bangladesh) harus dianalisis khusus, tidak akan ketemu oleh antivirus biasa. Malware yang tertarget (via email/web) untuk perusahaan tertentu juga perlu dianalisis secara khusus.

Dalam kasus proteksi program, kita akan bisa membongkar proteksi seperti serial number atau expiration date, baik berupa patch atau keygen. Bisa juga dipakai untuk memodifikasi, misalnya memperbaiki bug suatu program atau menambah fitur dan fungsi.

Dalam kasus kehilangan source code, kita bisa mengembalikan sebagian kode yang hilang untuk memperbaiki atau meningkatkan kinerja suatu program.

Reverse engineering untuk tujuan menyalin atau menduplikat program merupakan pelanggaran hak cipta. Dalam beberapa kasus, penggunaan perangkat lunak berlisensi secara khusus melarang praktik reverse engineering (lihat bagian [etika dan legalitas RE](#etika-dan-legalitas-dalam-melakukan-re)).

Jika kita ingin membuat program yang bisa membaca format program lain, kita juga perlu merekayasa balik jika format tersebut tidak bisa dibuka secara umum.

## Menjadi Seorang Reverse Engineer

Jumlah orang yang bisa melakukan *reverse engineering* di dunia ini tidak banyak. Sesuai hukum *supply* dan *demand*, karena yang bisa melakukan RE relatif sedikit maka harga jasanya pun menjadi mahal.

Mempelajari *reverse engineering* ini juga membutuhkan waktu yang cukup lama. Jangan bayangkan RE ini sekedar membuka IDA Pro atau tool sejenis dan langsung bisa menemukan di mana harus patch sesuatu atau menemukan algoritma tertentu.

Harga jasa RE akan lebih mahal jika program memiliki proteksi kompleks. Jika harga sebuah software hanya puluhan hingga ratusan USD, mungkin akan lebih murah membeli software tersebut daripada membayar orang untuk membongkarnya.

Dalam kasus malware dan ransomware, jarang sekali malware yang tidak diproteksi, jadi proses reversingnya tidak sebentar. Untuk menganalisis satu macam saja bisa membutuhkan waktu minimal beberapa jam sampai berhari-hari. Belum lagi ada banyak sekali varian ransomware yang masing-masing versinya sudah berbeda sama sekali.

FireEye dulu menyediakan jasa decrypt ransomware, tapi kemudian terlalu banyak varian yang ada, jadi mereka sudah tidak mau lagi menghabiskan sumber daya untuk ini. [^2]

> If your computer has recently been infected with ransomware, chances are that the infection has been caused by one of the many copycat attacks that use the same or similar name and method of operation.
>
> Since these new ransomware variants use different encryption keys, we have discontinued the DecryptCryptoLocker website and its associated decryption service. <small><cite>[FireEye](https://www.fireeye.com/blog/executive-perspective/2014/08/your-locker-of-information-for-cryptolocker-decryption.html)</cite></small>

<h5> Mempelajari Reverse Engineering </h5>

Karena proses reversing ini pada dasarnya adalah membaca kode, maka hal pertama yang perlu Anda pelajari adalah mengenal bahasa pemrograman yang akan Anda bongkar.

Jika ingin membongkar aplikasi Android, maka pelajarilah bahasa pemrograman <code>Java</code>. Atau jika ingin reversing kode mesin, belajarlah <code>C</code> dan atau <code>Assembly</code>.

Meskipun sudah bisa menggunakan debugger, disassembler, decompiler tapi tidak memahami yang Anda lihat maka percuma saja, oleh karena itu sebaiknya Anda punya dasar yang baik.

Setelah memahami dasarnya, Anda akan bisa dengan cepat menggunakan tools yang ada, misalnya apktool, dex2jar, JD-GUI untuk mengembalikan sebagian besar kode sebuah APK Android ke versi <code>Java</code>.[^3]

Jangan terpaku pada satu tutorial, pakailah Google, karena sekarang ini ada banyak informasi tersebar di Internet. Sebuah tutorial tidak akan cukup untuk mengajari semuanya.

Sebagai pemberi semangat, carilah apps untuk dibongkar dengan tujuan fun. Coba juga lihat berbagai apps yang kalian pakai sehari-hari, pelajari protokolnya, misalnya bagaimana protokol WhatsApp, atau Twitter.

## Etika dan Legalitas dalam Melakukan RE

Mereka yang sudah ahli dan terbukti dalam melakukan RE biasanya sudah punya pekerjaan. Ada banyak jalan untuk menghasilkan uang dari skill RE.

Orang-orang yang sudah mendapatkan banyak uang dari aktivitas-aktivitas tersebut biasanya akan malas menerima pekerjaan baru.

Melakukan RE pada aplikasi tertentu secara rutin biasanya akan lebih mudah. Kode program biasanya tidak berubah drastis dari satu versi ke berikut, jadi jangan heran juga jika seseorang lebih memilih melakukan pekerjaan RE yang rutin daripada menerima proyek yang sesekali datang.

Untuk legalitas praktik ini sebenarnya tergantung pada tempat (negara) kalian berada, RE bisa legal, illegal, atau dalam area abu-abu.

<h5> Pekerjaan Legal Reverse Engineering</h5>

Pekerjaan RE legal biasanya di bidang keamanan software, meskipun tidak selalu.

Ada beberapa pekerjaan yang berhubungan dengan RE:
* Reversing virus/malware. Kerjanya membongkar berbagai malware/virus baru tiap hari.
* Mencari bug di software dan membuat exploit untuk software tersebut.
* Mencari bug di hardware dan membuat exploit untuk hardware tersebut.
* Memberikan training. Banyak perusahaan mulai memperhatikan masalah security, jadi para engineer diharapkan bisa membongkar sendiri hasil kerja mereka apakah aman atau tidak.
* Pentesting aplikasi (baik resmi ataupun untuk bug bounty).
* Rekonstruksi program berdasarkan program lama yang source codenya hilang.

Saat ini kebanyakan pekerjaan legal seperti ini lebih mudah didapatkan dari luar Indonesia karena belum terlalu banyak riset security tingkat lanjut di Indonesia.

Negara paling dekat yang membutuhkan banyak reverse engineer adalah Singapura.

Ada juga jalan legal lain yang menurut saya unik. Dialah Jane M. Wong (@wongmjane) yang melakukan RE berbagai aplikasi mobile dan beberapa website populer untuk mengetahui fitur apa yang baru atau akan dirilis (lihat: [Jane Manchun Wong: The woman scooping Silicon Valley - BBC News](https://www.bbc.com/news/technology-47630849)).

Dalam artikel tersebut bahkan dituliskan bahwa dia menghabiskan 18 jam sehari untuk melakukan reverse engineering berbagai aplikasi.

Dengan jalan legal, gaji yang didapatkan bisa cukup banyak. Semakin tinggi skillnya, makin besar yang bisa didapatkan. Gaji terendah sudah setara dengan gaji programmer level menengah.

Untuk kasus yang sangat ekstrim, jika sudah sangat jago RE maka bisa menemukan dan membuat eksploit zero day yang harga per eksploitnya puluhan ribu hingga ratusan ribu USD. Bahkan exploit untuk iOS bisa dihargai hingga 1 juta USD.

<h5> Bagaimana dengan yang ilegal? </h5>

Ada banyak hal ilegal yang bisa dilakukan, seperti:
* Cracking aplikasi, misalnya untuk menghilangkan proteksi tertentu.
* Hacking game atau modifikasi.
* Hacking aplikasi untuk mengubah/menambah fungsionalitas dan fitur.

Baru-baru ini Niantic (pembuat Pokemon Go) menuntut group Hacker yang membuat mod IPA game Pokemon Go dan Wizards Unite (lihat: [The creator of ‘Pokémon Go’ is suing an ‘association of hackers’ that it says helps players cheat at its games](https://www.businessinsider.sg/niantic-global-hacker-group-lawsuit-harry-potter2019-6/?r=US&IR=T)).

Dalam tuntutannya disebutkan bahwa para hacker ini menggunakan Patreon di mana para pengguna bisa membayar biaya bulanan untuk mendapatkan modnya. Para pengguna harus membayar minimum 5 USD, dan jumlah total pengguna sudah lebih dari 10 ribu orang. Artinya mereka mendapatkan minimum 50 ribu USD per bulan.

Pokemon Go bukan satu-satunya game yang dicurangi hacker, masih ada banyak contoh game yang lain, hanya saja yang lain lebih susah dilacak karena memakai cryptocoin dan memakai group yang tertutup.

Biasanya proses mencurangi game bukan sekedar membaca kode, tapi juga menulis kode baru. Contoh game lain juga masih banyak, misalnya ada hacker yang didenda 5.1 juta dollar karena [hacking PUBG dan mencuri informasi user](https://steamcommunity.com/games/578080/announcements/detail/1651009712401016828).

Bahkan tanpa RE pun, cheating di berbagai game ini imbalannya sangat menjanjikan, misalnya ada contoh kisah bagaimana seorang remaja 16 tahun mendapatkan 200 ribu USD dari hacking game (lihat: [How I Made $200,000 When I Was 16 Years Old Through Coding](https://medium.com/tech-product-and-life/how-i-made-200-000-when-i-was-16-years-old-304f0e87cfb6)).

Di dalam negeri ada juga mereka yang memodifikasi aplikasi Gojek dan Grab (lihat: [Grab Rugi Rp6 Miliar Akibat Order Fiktif](https://tirto.id/grab-rugi-rp6-miliar-akibat-order-fiktif-cGpG)). Saya tidak tahu berapa jumlah pengguna yang memakai APK yang dimodifikasi ini, tapi dari pengamatan saya di berbagai forum internet, jumlahnya setidaknya ribuan orang.

Saat ini ada lebih dari 2 juta driver Gojek, jadi mungkin perkiraan saya itu terlalu rendah, mungkin ada puluhan ribu orang yang memakai APK yang dimodifikasi. Uang bulanan untuk mendapatkan APK antara puluhan sampai ratusan ribu rupiah. Jadi para hacker ini mendapatkan setidaknya puluhan juta rupiah per bulannya.

Di Singapore, aplikasi Grab dan GO-JEK juga dihack dengan tarif 200-350 SGD per bulan (lihat: [S'pore Drivers Are Hacking Grab, Gojek Apps To Get Paid Even When They Cancel Bookings](https://vulcanpost.com/670163/grab-gojek-hackers-singapore/)).

Andaikan bagian RE mendapatkan 10% saja (20-35 USD per driver), dari 100 driver bisa didapatkan 2000-3500 SGD (20-35 juta rupiah per bulan). Angka tersebut merupakan perkiraan yang sangat rendah, baik dari share untuk RE (bisa 25% atau lebih), maupun jumlah usernya (bisa ribuan).

Dengan banyaknya kesempatan mendapatkan uang dari RE ilegal, jangan heran jika tidak banyak yang mau men-crack software untuk Anda (meskipun Anda berani membayar). Kemungkinan sudah ada pekerjaan ilegal lain yang hasilnya lebih besar dan lebih teratur.

<h5> Lalu bagaimana dengan yang abu-abu? </h5>

Beberapa pekerjaan yang masuk area abu-abu karena tergantung hukum dan interpretasi terhadap hukum tersebut.

Kita ambil contoh misalnya reverse engineering aplikasi untuk mendapatkan API-nya dan reverse engineering hardware untuk membuat clonenya atau membuat aksesori tambahan. Di beberapa negara ini ilegal, di tempat lain bisa dianggap legal karena bertujuan untuk <abbr title="Interoperabilitas mengacu pada kemampuan satu sistem informasi untuk terhubung dengan sistem lainnya">interoperabilitas</abbr>.

Contoh hal lain yang abu-abu adalah membongkar script trading untuk mengetahui strategi apa yang dipakai seseorang. Selama strateginya tidak dicopy dan disebarkan umum, ini sulit dituntut karena tujuannya hanya untuk mempelajari sesuatu.

## Konklusi

Membaca kode biner bisa sangat membosankan apalagi ketika awal belajar dan belum tahu harus dari mana untuk mempelajarinya. Dan reverse engineering memang sulit, sangat teknis dan butuh ketekunan kita untuk mendalami sampai level kode mesin.

Namun saya yakin kalian mampu menguasai sesuatu kalau ada niat kuat dan tekun dalam mempelajarinya. Jika Anda merasa memakai jasa orang lain terlampau mahal, cobalah untuk belajar sendiri.

Saran utama saya untuk belajar reverse engineering, buatlah program sendiri, compile, disassembler, lalu bongkar sendiri.

Terakhir, khusus buat kalian yang sekarang ini sedang menargetkan diri menjadi carder untuk hal-hal negatif atau semacamnya, Indonesia sedang membutuhkan generasi terbaiknya, kalian bisa lebih baik dari itu!

---
**Pranala:**

[^1]: [What is reverse engineering? - Definition from WhatIs.com](https://searchsoftwarequality.techtarget.com/definition/reverse-engineering)

[^2]: [Biaya Reverse Engineering - Amazing Grace](https://blog.compactbyte.com/2019/07/24/biaya-reverse-engineering/)

[^3]: [Reverse Engineer - Amazing Grace](https://blog.compactbyte.com/2015/09/08/reverse-engineering/)