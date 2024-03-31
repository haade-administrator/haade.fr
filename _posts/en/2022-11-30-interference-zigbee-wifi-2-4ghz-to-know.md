---
guid: 31
title: "interference between zigbee and wifi frequency 2.4ghz"
description: "to take into account, the zigbee and the wifi are calibrated on the 2.4ghz frequency, some advice to take into account when setting the channels in order to improve the quality of the mesh"
layout: post
authors: Nico
date: 2022-11-30 22:54
last_modified_at: 
categories: [Zigbee, Wifi, Haade-lab]
tags: []
image: 'interference-zigbee-wifi-freqeunce-2.4ghz-en.png'
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
addViews: 636
comments: true
rating:  
sourcelink:
  - https://www.metageek.com/training/resources/zigbee-wifi-coexistence/
  - https://openwrt.org/start
---

Both ZigBee and Wi-Fi channels operate in the 2.4 GHz band, the frequencies are very close so interference may occur depending on the channel settings. Careful planning must be done to ensure that they do not interfere with each other.
Using a ZigBee network and a Wi-Fi network on the same frequency will cause them to interfere with each other. **The zigbee network will be impacted first.**

## Prerequisites

- Have access to the parameters of the router or the internet box
- Have access to the parameters of the zigbee key ( ex: zigbee2mqtt )

First, if you want to buy a configurable router, I recommend the **tp-link Archer (C5, C6, C7 or C50, C60)**, they are cheap and compatible with **the latest version of openwrt software**.

{% include product-embed.html image="Routeur-Wifi-double-bande-AC1200-tp-link-Archer-C50.jpg" title="TP-link archer C50 Router" brand="TP-Link" description= "tp-link router compatible with 2.4Ghz and 5Ghz dual band wifi" affiliate="_DdQQgD5" %}

## Which setting to choose

Often routers have the wifi network set to channel 1, 6 or 11, and on the zigbee side the favorite channel is 11, *some manufacturers like Legrand, not to mention it, distribute zigbee modules **which only work under channel 11.***
If you let these two parameters coexist and if the router is close to the zigbee key you will encounter interference, if the zigbee network seems to work, the mesh will still be weakened.

## What I recommend

If you have a zigbee network in place with quite a few modules, I think it's **relatively important to keep the zigbee channel "probably set" to 11** and it's certainly easier to start changing the channel of the wifi router/box.
Based on this principle the winning duo would be:

1. **Zigbee:** channel **11**{:.blue}
2. **Wifi:** channel **6 or 11**{:.blue}

By setting this way, **we can see on the diagram below**, that the zigbee frequency will be outside the wifi frequencies, the setting will thus be optimized.

{% picture posts/{{ page.guid }}/canaux-moyennement-favorable-wifi-zigbee.png --alt example of ultra-favorable channels to interference --img width="940" height="529" %}

#### Other favorable case

On the other hand, if you do things well, and you have not yet started your Zigbee mesh, then select your channel carefully and in this case I advise you rather 15, 20, 25 ** but especially 26 **. This will be outside of almost all standard wifi interference settings.

1. **Zigbee:** channel **26**{:.blue} or 25
2. **Wifi:** channel **1 or 6**{:.blue}

{% picture posts/{{ page.guid }}/canaux-hautement-favorable-zigbee-wifi.png --alt another example of channels favorable to interference --img width="940" height="529" %}

## wifi limit

In 2.4Ghz the wifi channels extend from 1 to 14 or 13 channels separated by a width of 5Mhz. Only channels, 1, 6 and 11 do not overlap, which is why they are widely used. As a result, and to overcome interference concerns, a new wifi frequency has appeared on the market, the 5Ghz frequency.

#### Let's talk about our accommodation

When the accommodation is not very large and you have a single AP router, it is easy to choose your channel on the 2.4Ghz frequency. But more and more homes are equipped with wifi signal repeaters in AP, you should know that in this case it is important to put your box / router on channel 6 or 11, and your repeater on channel 11 so the wifi coverage will be optimal.
But it's not that simple, because it doesn't depend only on our network, in fact we will have to take into account the network of our neighbors, especially for apartment-type accommodation where proximity is essential. To analyze wifi waves, equip yourself with analysis software, the choice is varied.

#### Concrete case

I am lucky to live in a house, to have a multi-channel router (2.4 and 5ghz), my neighbors are nearby, around 10-12 meters. **On the diagram below** you can see that I have set the 2.4ghz wifi channel of the router to 11 (pink line -50db), you can also see that all the other wifi networks do not belong to me and they are all set to channel 1, well those belong to the neighbors 🤬. Fortunately the signal strength is between -100 and -80Db.

> In this case to optimize the frequencies you should put the **zigbee channel on frequency 15 or 26**{: .blue}
> In apartments, network analyzes are more complex. It will be important to choose the zigbee network on the downward curves of wifi.

{% picture posts/{{ page.guid }}/wifi-analyzer.png --alt concrete case analyzes a wifi network --img width="940" height="509" %}

In the case where you keep your different access points on the same channel, you will also encounter intra-wifi interference and the coverage will not be optimized, even degraded depending on where you are in the accommodation. where it can be a problem is when you start setting up 3 or more access points. We are obliged to use the three wifi channels (1, 6 and 11).
In this case, the Zigbee channel should be reviewed.

### Interesting Zigbee channels

The most interesting zigbee channels are:
**on 15, 20, 25 and 26**{: .blue}

{% picture posts/{{ page.guid }}/canaux-favorable-wifi-zigbee.png --alt faborable zigbee channels in case of overlapping wifi networks --img width="940" height="529" %}

### Channels to avoid

If you look at the diagram below you realize that in bad cases you find yourself systematically **within 10Mhz of wifi frequencies and this is to be avoided.**{: .red}

{% picture posts/{{ page.guid }}/canaux-defavorable-wifi-zigbee.png --alt zigbee channels unfavorable in case of overlapping wifi networks --img width="940" height="529" %}

## Conclusion

Many topics talk about these interference phenomena, I think each case is different.
- First analyze the wifi environment, and find the area that would be the most advantageous for you.
- Then set the zigbee channel if you can, otherwise set the wifi channel
  
Make sure to harmonize and space the frequencies on your wireless network as well as possible, and I hope you will come across these articles before starting your zigbee network, it will allow you to have more amplitudes on your final configuration .

> Do not hesitate to expose your case on our forum or by a comment, we will try to find a solution together.