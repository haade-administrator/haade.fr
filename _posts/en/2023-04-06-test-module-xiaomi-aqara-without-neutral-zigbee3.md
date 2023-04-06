---
guid: 59
title: "Xiaomi Aqara T1 dlkzmk12lm review - SSM-U02"
description: "Newcomer to the market xiaomimi presents its micro module T1 without neutral SSM-U02 and compatible zigbee 3.0"
layout: post
author: Nico
date: 2023-04-05 18:14
last_modified_at: 
categories: [Zigbee, Tests]
tags: [post]
image: 'xiaomi-aqara-module-sans-neutre-dlkzmk12lm-zigbee-3.png'
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
rating: 4.1
sourcelink:
---

The world of modules without neutral said enddevice is constantly growing in the market, Xiaomi presents a similar Module with external antenna and some of the most sympathetic functions, But will this module be up to the challenge against the competition more and more? rougher?

{% include product-embed.html guid="2155" %}

This module is sold close to 25-30€ more than double the price of the competition I think of the ZbminiL2 from Sonoff, moreover you can compare the difference in size between the two modules below

{% picture posts/{{ page.guid }}/xiaomi-aqara-single-switch-module-no-neutral-dlkzmk12lm.png --alt Xiaomi single switch module without neutral SSM-U02 --img width="940" height="529" %}

Seen the captures above you can realize the size of the module, the prominent antenna which in my opinion does not work miracles and you will be able to realize the size compared to the [ZBMiniL2 of Sonoff.]({% post_url /en/2023-03-06-test-sonoff-zbminil2-extreme-zigbee-end-device %}){: target="_blank"}

{% picture posts/{{ page.guid }}/integration-aqara-t1-espace-taille-zbminiL2.png --alt Xiaomi single switch module without neutral SSM-U02 40mm junction box integration --img width="940" height="529" %}

There you will be able to realize the space covered by the module in a 40mm deep flush-mounting box there will remain 20mm of space to accommodate a switch, then normally it is sufficient but for a new construction I advise you everything likewise to switch to 60mm or so [on a BLM box]({% post_url /en/2023-03-15-presentation-of-the-range-boitier-blm %}){: target="_blank"}

# Technical characteristics

|Power supply|100 - 250VAC, 50-60Hz|
|Max load|5A (1250W)|
|Operating humidity|0-95% RH|
|Ambient temperature|0°C to 35°C|
|Communication|ZigBee 3.0|
|Effective communication distance|30m (indoor)|
|Dimensions|42.9 × 40 × 21.4mm|
|Weight|40g|

# User Manual

{% include doclink.html pdf="Single Switch Module T1 SSM-U02(No Neutral) manual.pdf" title="Xiaomi Aqara T1 User Manual" %}

# Integration of the T1 module by Aqara

## Integration in ZHA

The integration in ZHA **was not done without difficulty**, despite the external antenna I had to try several times before succeeding in integrating the module, once integrated and the module woke up I I realize **that the internal thermometer probe** doesn't work under ZHA, definitely a program error. Considering the price, it's a shame.

{% picture posts/{{ page.guid }}/module-xiaomi-aqara-SSM-U02-avec-ZHA-dans-homeassistant.png --alt Xiaomi single switch module without neutral SSM-U02 ZHA integration --img width ="940" height="864" %}

## Integration with Zigbee2mqtt (Z2M)

With **Zigbee2mqtt it's no joke** the T1 module by Aqara goes up:
- the On/Off state (normal)
- position after power cut
- choice between tool and switch
- the number of power cuts
- temperature

{% picture posts/{{ page.guid }}/module-xiaomi-aqara-SSM-U02-avec-Zigbee2mqtt-dans-homeassistant.png --alt Xiaomi single switch module without neutral SSM-U02 Zigbee2mqtt integration --img width ="940" height="552" %}

{% picture posts/{{ page.guid }}/module-xiaomi-aqara-SSM-U02-avec-Z2M-dans-homeassistant-onglet-expose.png --alt Xiaomi single switch module without neutral SSM-U02 Z2M integration expose tab --img width="940" height="475" %}

## Integration In Jeedom with the Zigbee module

The integration in Jeedom with the Zigbee module is done without worries, however I advise you to include it with the Zigbee2mqtt module given the number of functions it brings up for the Xiaomi Aqara modules?

{% picture posts/{{ page.guid }}/Intégration-aqara-SSM-U02-avec-Jeedom.png --alt Xiaomi single switch module without neutral SSM-U02 Jeedom Zigbee integration --img width="796" height ="402" %}

> Jeedom only brings up the State, On and Off functions of the module, too light for the price.

{% picture posts/{{ page.guid }}/Intégration-aqara-SSM-U02-avec-Jeedom-option-commande.png --alt Xiaomi single switch module without neutral SSM-U02 Jeedom zigbee integration options commands --img width="715" height="288" %}

> For Aqara modules **Z2M integration is great** but this is not always the case for other brands.

# **the + of the product**
{: .blue}
- manufacturing quality
- the size (it's not the smallest but it fits in a 40mm junction box)
- the outdoor antenna

# **the - of the product**
{: .red}
- the price
- the inclusion of the antenna in a junction box
- the gain of the antenna is to be confirmed

# Variant (version with neutral)

{% include product-embed.html guid="2156" %}


This module also exists in a version with Neutral it has similar physical characteristics **but it has several advantages:**
- it costs less
- **router** compatible best for meshing with Z2M
- reads the **power**, **energy** and **voltage** in W with Z2M
- you can **deactivate the LED** with Z2M
- it is **2500W** compatible

> I always advise new builds to include the neutral behind each switch a significant plus.

# Conclusion

Well we already know that the Aqara modules are Chinese but of good quality, however for the price and the current integrations I find it a bit expensive, if you can, switch to the version with neutral which is in my opinion a very good success.