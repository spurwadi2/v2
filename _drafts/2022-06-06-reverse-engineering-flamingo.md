---
layout: post
current: post
cover:  assets/images/cover/no-cover.webp
navigation: True
title: Reverse Engineering Flamingo App
description: Deskripsi singkat untuk keperluan meta tag dan OpenGraph (55 characters or under)
summary: Ringkasan artikel untuk ditampilkan pada postcard di laman utama, topik, dan artikel terkait.
tags: [coding]
class: post-template
subclass: 'post tag-coding'
author: sigit
comments: true
mathjax:
---

-----
<center><sup>⚠ <i><b>DISCLAIMER</b>: This post is for educational purposes only</i></sup></center>
-----

### Introduction

The famous Twitter client for Android - Flamingo - is dead.

This was known all the way back in April 2018 when the developer himself stated it will no longer be available, due to the Twitter API token limit being almost reached.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">It is gone for now, yes. There are no immediate plans for a sequel</p>&mdash; Sam Ruston (@Sam_Ruston) <a href="https://twitter.com/Sam_Ruston/status/981683491225194497?ref_src=twsrc%5Etfw">April 5, 2018</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Twitter gives out a limited number of tokens to third-party developers, meaning that once you reach the limit you will no longer be able to issue new tokens for users.
This is exactly what happened to Flamingo - the token limit was almost reached - so Sam decided to unpublish the app from the Play Store. This would allow users who have previously logged in (and thus authorized the app on their Twitter - an action that requires a valid token) to keep using Flamingo, while preventing new users from signing up (it was never mentioned how many tokens were exactly left).

Being a paid app, there were several "cracked" releases which not only removed the license check but also allowed new users to sign up with the remaining few tokens.

As of recently, it appears that the Twitter App (as in, the application itself registered on Twitters Developer platform) had the permissions changed from "Read, write, and direct messages" (required for liking/retweeting/direct messages) to "Read-only" - which only allows viewing your timeline and other basic functionality.

So what if we - hypothetically - already owned Flamingo and wanted the "write" permissions back and also the ability to add a new account to the app? (which would not be possible once the token limit was reached)

-Patching time!

### Generating our own API keys

Generating our own custom API keys would require registering a new Twitter Application on the Twitter Developer Platform. The open-source Twitter client Talon has a section in the readme explaining how to register a new app.

> tl;dr: Create a new app, fill all the boring required fields, set a unique name of your choice and most importantly set the Permissions of the app to "Read, Write and Access direct messages".

After that, you can head to the "Details" page of your newly created app and in the "Keys and tokens" tab you can find your Consumer API keys - one being API key and the other API secret key.
(Note that these are not the limited tokens, the tokens will be unique for each user of the app).

### Patching Flamingo to use our new API keys

The next step is to patch the Flamingo apk (which you can probably manage to "acquire" yourself :) ) to use our own API keys instead of the ones of the original developer.

Apktool should be sufficient for decompiling and recompiling the apk.

First, we decompile the apk by running:

``` s
~ $ apktool d Flamingo.apk
```

which will decompile Flamingo into a directory of the same name.

Now the fun part - finding the API keys and replacing them with our own ones.

From the decompiled output we can see that Flamingo uses the Twitter4J Java library for interfacing to Twitter.
Skimming through the docs/examples we can see that there is a function called setOAuthConsumerKey which sets the consumerKey and consumerSecret.

> You seem to be able to pass both arguments to this function, even though there is an additional setOAuthConsumerSecret which ends up being used in Flamingo.

If we search for that function we can see (ignoring the results from the twitter4j library itself) that it's being called from smali/com/samruston/twitter/api/API.smali

``` java
const-string v3, "by5z8vvD0MJbQrvMd6ZN9g"

.line 870
invoke-virtual {v2, v3}, Ltwitter4j/conf/ConfigurationBuilder;->setOAuthConsumerKey(Ljava/lang/String;)Ltwitter4j/conf/ConfigurationBuilder;

move-result-object v2

const-string v3, "mX2MZJLIngw3fNFnwwe3TPEDkg4yPpTVAvvbiFhhCs"

.line 871
invoke-virtual {v2, v3}, Ltwitter4j/conf/ConfigurationBuilder;->setOAuthConsumerSecret(Ljava/lang/String;)Ltwitter4j/conf/ConfigurationBuilder;
```

> I had to set the syntax highlight to Java as I have yet to add the proper syntax highlighting for Smali. Gross.

Here we can see both the consumerKey (shorter one) and consumerSecret.

Just to be sure, let's search for the key itself to see if it's being used somewhere else as well:

``` s
~/Flamingo $ grep -r "by5z8vvD0MJbQrvMd6ZN9g"  
smali/com/samruston/twitter/authentication/a.smali:    const-string v1, "by5z8vvD0MJbQrvMd6ZN9g"
smali/com/samruston/twitter/api/API.smali:    const-string v3, "by5z8vvD0MJbQrvMd6ZN9g"
```

Seems like it's being used in smali/com/samruston/twitter/authentication/a.smali as well, so let's check it out:

``` java
const-string v1, "by5z8vvD0MJbQrvMd6ZN9g"

invoke-virtual {v0, v1}, Lcom/github/scribejava/core/a/b;->b(Ljava/lang/String;)Lcom/github/scribejava/core/a/a;

move-result-object v0

check-cast v0, Lcom/github/scribejava/core/a/b;

const-string v1, "mX2MZJLIngw3fNFnwwe3TPEDkg4yPpTVAvvbiFhhCs"

invoke-virtual {v0, v1}, Lcom/github/scribejava/core/a/b;->c(Ljava/lang/String;)Lcom/github/scribejava/core/a/a;
```

> ScribeJava is an OAuth client for Java, so this makes sense.

Now that we have identified where the keys reside, we can replace them with our own.

``` s
~/Flamingo $ sed -i -e 's/by5z8vvD0MJbQrvMd6ZN9g/YOUR_CONSUMER_KEY/g'  \  
-e 's/mX2MZJLIngw3fNFnwwe3TPEDkg4yPpTVAvvbiFhhCs/YOUR_CONSUMER_SECRET/g' \  
smali/com/samruston/twitter/authentication/a.smali smali/com/samruston/twitter/api/API.smali
```

If we were to recompile the apk and test it out now, we would be very disappointed as hitting the "Login with Twitter" button would not do anything.

We can get a hint at what's wrong by looking at the logcat output:

``` s
~ $ adb logcat  
[OMITTED FOR LENGTH]
ActivityManager: Displayed com.samruston.twitter/.authentication.AuthenticationActivity: +134ms
System.err: com.github.scribejava.core.exceptions.OAuthException: Response body is incorrect.  
Cannot extract token and secret from this:  
'Callback URL not approved for this client application.  
Approved callback URLs can be adjusted in your application settings'
System.err: 	at com.github.scribejava.core.b.g.a(Unknown Source)
System.err: 	at com.github.scribejava.core.b.g.a(Unknown Source)
System.err: 	at com.github.scribejava.core.c.a.a(Unknown Source)
System.err: 	at com.samruston.twitter.authentication.a$1.run(Unknown Source)
System.err: 	at java.lang.Thread.run(Thread.java:761)
[OMITTED FOR LENGTH]
```

Remember that callback URL setting when creating the app on Twitters Developer Platform?

Well it turns out Flamingo uses it's own scheme:// as defined in the AndroidManifest.xml:

``` xml
<activity android:launchMode="singleTop" android:name="com.samruston.twitter.authentication.AuthenticationActivity">
    <intent-filter>
        <action android:name="android.intent.action.VIEW"/>
        <category android:name="android.intent.category.DEFAULT"/>
        <category android:name="android.intent.category.BROWSABLE"/>
        <data android:scheme="flamingo" android:host="x-oauthflow-twitter"/>
    </intent-filter>
</activity>
```

Here we can see that the android:scheme property is flamingo which means the correct callback URL is flamingo://.
You can either go to your Twitter Apps settings and add it under Callback URLs or you can change it to your own (something like mycooltwitterapp://, in which case make sure you also replace it in the decompiled source.

With those changes in place, we can now recompile Flamingo:

``` s
~/Flamingo $ apktool b
```

and all that is left is to zipalign the apk, sign it, and install it:

``` s
~/Flamingo/dist/ $ zipalign -f -v 4 Flamingo.apk Flamingo_aligned.apk
~/Flamingo/dist/ $ apksigner sign --ks ~/keystore.jks Flamingo_aligned.apk
~/Flamingo/dist/ $ adb install -r Flamingo_aligned.apk
```

Congratulations, you now have a working version of Flamingo that uses your own API keys.