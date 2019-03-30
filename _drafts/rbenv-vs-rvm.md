---
layout: post
current: post
cover:  assets/images/hello-world.png
navigation: True
title: Memilih Ruby Version Management Tools
description: Deskripsi singkat untuk opengraph
summary: Ini adalah contoh YAML template untuk post baru.<br/>Akan terus diupdate tergantung kebutuhan dan versi terbaru.
tags: [coding]
class: post-template
subclass: 'post tag-coding'
author: artcytech
comments: true
mathjax:
---

rbenv vs. RVM
Choosing a Ruby version management tool often comes down to two players: rbenv and RVM. The latter was widely accepted as the norm, greatly due to its wide toolkit. However, rbenv has become a strong contender with its lightweight approach.

Under the Hood
So, how do these tools get the job done? This is where things get a little scary with RVM. RVM overrides the cd shell command in order to load the current Ruby environment variables. Not only can the override cause unexpected behavior, but it also means that rubies and gemsets are loaded when switching directories.

rbenv does things on the fly by using shims to execute commands.

* A directory of shims (~/.rbenv/shims) is inserted to the front of PATH.
* The directory holds a shim for every Ruby command.
* The operating system searches for a shim that matches the name of the command, which in turn passes it to rbenv, determining the Ruby version to execute.

rbenv configuration for an application is dirt simple:

# .ruby-version
2.3.0

The RBENV_VERSION variable also makes it easy to quickly specify a Ruby version via the command line. It’s first in line when rbenv checks for the current Ruby version.

Delegating the Workload
There are a few features in RVM that make it the heavier tool. RVM comes with its own Ruby installation mechanism:

rvm install ruby-2.3.0

With rbenv, you can either install Ruby yourself (by saving to ~/.rbenv/versions) or make use of ruby-build, a plugin that will install the versions for you. Like rbenv, ruby-build has a homebrew recipe.

brew install ruby-build
rbenv install 2.3.0

RVM gives the ability to separate dependencies by project with gemsets. Gemsets, however, are more of a thing of the past, thanks to the widespread use of Bundler.

With Bundler, one can easily manage the gems for a project.

gem install bundler

# Gemfile in root of application
source 'https://rubygems.org'

gem 'rails'
gem 'rspec'

bundle install

Although most projects use Bundler now, the plugin rbenv-gemsets is the rbenv equivalent of gemsets.

Light is Might
While the versatility of RVM can be resourceful, when it comes to Ruby version management, it can be overkill. Using rbenv allows you to keep things simple and let other tools handle other aspects of the process. rbenv’s primary focus on Ruby versioning leads to a more dev-friendly setup and configuration.  We have been using rbenv with our apps for a few years now. Partnered with Capistrano, rbenv-capistrano makes Ruby version maintenance for our deployable environments straightforward.