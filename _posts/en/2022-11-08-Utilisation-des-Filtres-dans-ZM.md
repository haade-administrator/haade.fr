---
guid: 28
author: Nico
layout: post
title: 'Use of filters in Zoneminder'
description: "the use of filters in zoneminder is an essential setting so as not to store too many events"
date: '2022-11-08 09:25'
last_modified_at: 
categories: [Security, Automation]
tags: []
image: 'use-of-filter-zoneminder.png'
toc: true
beforetoc: ''
published: true
noindex: false
sitemap:
  changefreq: 'monthly'
  exclude: 'no'
  priority: 0.5 #between 0.0 to 1.0, 1.0 high priority
  lastmod:  # date to end modification
locale: en_GB
addViews: 26
comments: true
rating:  
---

The filters in ZoneMinder have a very important role, they allow you to classify, archive and delete almost everything in Zoneminder, whether events, videos or images.

By default there are two functional filters:

- PurgeWhenFull\*
- Updatediskspace\*

First, the asterisk at the end of the title indicates to the user that the filter is linked to a cron job in order to operate repeatedly in the background, simply select the &gt;&gt;&gt; run filters in the background.

PurgeWhenFull: [Official Doc](https://wiki.zoneminder.com/PurgeWhenFull){: target="_blank"}, allows you to empty the hard disk

## Actions to select:

- Archive: archive events
- FilterUnarchiveEvents: Unarchive events
- Update used disk space: Update used disk space
- Make a video
- Execute a command
- Delete: Delete events
- FilterCopyEvents: Copy all events
- Move all Matches: move all events

## Options to select

- launch filters in the background
- Run filter concurrently: Run filter concurrently
- Filter lock rows: lock rows

## test

Then we click on **execute** and **list matches** in order to see the *events concerned*.

## Conclusion

Well this tutorial is not complete, and I apologize, I waited so long to write this article that now I no longer use Zoneminder, why!
This software is complete but the management of events, the configuration of the cameras is complex and frankly cannot be optimized.
> **Furthermore I have decided to stop using ZM.**
Why this changeover: since zm decided to stop the evolution of the ZMevenvnotification program in November 2021, suddenly it no longer has any real interest, especially since there has been a free NVR for Homeassistant for a while, it is is from **[Frigate](https://frigate.video/)**{: target="_blank"}, **this project is young but already very promising.**