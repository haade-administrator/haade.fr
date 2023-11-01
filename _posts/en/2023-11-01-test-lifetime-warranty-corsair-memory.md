---
guid: 89
title: "I tested the Corsair Lifetime Warranty"
description: "I tested the support for the lifetime warranty of Corsair DDR4 Vengeance memories, feedback"
ref: "Vengeance LPX"
layout: post
author: Nico
date: 2023-11-01 15:40
last_modified_at: 
categories: [Tests, Haade-lab]
tags: []
image: 'lifetime-warranty-corsair-memory-ddr4-i-tested.png'
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
comments: true
rating: 4.6
sourcelink:
  - https://www.corsair.com/fr/fr
  - https://help.corsair.com/hc/fr
  - https://s.click.aliexpress.com/e/_DBI3pAX
  - https://www.amazon.fr/s?k=corasir+vengeance+lpx&i=computers&camp=1642&creative=6746&linkCode=ur2&linkId=f8f98039c8a5393630e52926f92c9a9a&tag=haade0a-21
---

I wanted to share with you some feedback regarding **the lifetime warranty offered** by Corsair on the failure of a Corsair Vengeance LPX memory.
**The facts:** In 2018 I purchased a set of two 2x8GB 2666MHZ ddr4 sticks on Aliexpress, they were installed on a DIY NAS assembled by me. A short time ago I encountered instabilities on the NAS, after a quick test with memtest86+ I realized that one of the two strips had failed. And then I said to myself, **but of course Corasir guarantees the Vengance LPX bars for life...**

These bars **did the job for 5 years**. Manufacturers often find a subterfuge to not support equipment under warranty, **is this the case at Corsair?**

{% include product-embed.html image="https://ae01.alicdn.com/kf/S4b27b6f183cd4541be0205b384fe869fs/CORSAIR-DDR4-RAM-M-moire-De-Bureau-Vengeance-16GB-8GB-3200MHz-3600MHz-Dimm-Memoria-Rams-PC4.jpg_640x640.jpg" title="Corsair vengeance LPX" brand="Corsair" description="Corsair Memory vengeance LPX ddr4" affiliate="_DBI3pAX" amazlink="40jjIdY" %}

## Corsair Features {{ page.ref }}

A quick overview of the Corsair bars {{ page.ref }}, you can also buy them directly on their site.

**DESIGNED FOR HIGH-PERFORMANCE OVERCLOCKING**

VENGEANCE LPX memory was specifically designed for high-performance overclocking. The heatsink is made of aluminum for rapid heat dissipation, and the custom-made PCB manages heat and provides superior overclocking headroom. Each integrated circuit is individually selected to ensure the potential for peak activity.

{% include videoPlayer.html youtubeId="8wbcW__ASbA?si=IG7L1FrrgIyxKrME" %}

## Preparation before requesting support

In order to prepare the warranty claim from Corsair, you will first need to prepare:

1. The purchase invoice
2. The memory reference (in my case CMK16GM...)
3. A copy of the memtest86+ test

> If you purchased a set of 2 or 4 bars **you will have to return the entire set**.

### memtest86+ test

Memtest86+ is a utility that launches on a USB key when the PC starts, thanks to it you can test the memory sticks and thus see which one is faulty plus the problems encountered, a 2-pass test will be enough, at the end a link to the test will be provided to you and you will be able to download the result which you will submit to Corsair.

[Download Memtest86+](https://memtest.org/){: target="_blank"}

{% picture posts/{{ page.guid }}/page-memtest-zone-telechargement.png --alt page de téléchargement memtest86+ --img width="940" height="600" %}

[Documentation Memtest86+](https://memtest.org/readme){: target="_blank"}

**Windows installation:** Plug in a standard FAT32 formatted USB drive, download and launch the Windows USB installer and follow the quick steps. Restart your computer and select the USB drive from your boot menu.

**Linux installation:** The ISO image must be written directly ("dumped") to the raw device, either using the dd command or using a utility offering the same functionality like [ balenaEtcher](https://www.balena.io/etcher/){: target="_blank"}.

**Mac Installation:** We recommend [balenaEtcher](https://www.balena.io/etcher/){: target="_blank"} to burn the image to a USB flash drive under MacOS. PS: Using the Restore function in Apple Disk Utility does not work.

## Request support

At Corsair to make a request under warranty for support click on this [corsair warranty request link](https://help.corsair.com/hc/fr){: target="_blank"} and select Warranty replacement, then all you have to do is fill out the form. Within 48 hours you will have a response.

{% include product-embed.html image="https://ae01.alicdn.com/kf/S4b27b6f183cd4541be0205b384fe869fs/CORSAIR-DDR4-RAM-M-moire-De-Bureau-Vengeance-16GB-8GB-3200MHz-3600MHz-Dimm-Memoria-Rams-PC4.jpg_640x640.jpg" title="Corsair vengeance LPX" brand="Corsair" description="Corsair memory vengeance LPX ddr4" affiliate="_DBI3pAX" amazlink="40jjIdY" %}

## Conclusion

Communication with the Corsair Warranty service was done without any problems. After sending all the information concerning my problem and the confirmation of support, a week passed. **And 10 days later I received a new batch of bars in their original packaging and delivered by DHL.** This is support carried out without a hitch, **THANK YOU CORSAIR** 👏
