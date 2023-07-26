---
guid: 71
title: "Test of the zigbee module Nodon special roller shutter SIN-4-RS-20"
description: "Nodon produces several quality zigbee 3.0 modules, in this article I will introduce the SIN-4-RS-20 roller shutter control module"
layout: post
author: Nico
date: 2023-06-19 08:00
last_modified_at: 
categories: [Tests, Zigbee]
tags: []
image: 'test-module-nodon-zigbee-volet-roulant-SIN-4-RS-20.png'
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
rating: 4.5
sourcelink:
  - https://nodon.fr/nodon/module-volet-roulant-zigbee/
  - https://nodon.fr/support/module-volet-roulant-zigbee/
---

**Nodon French touch manufactures very good quality modules**, today and thanks to our partner Domadoo I am going to present to you the roller shutter micromodule **SIN-4-RS-20** as well as the compatible din rail module with all the brand's micromodules.

This module has all the advantages on its side apart from the thickness which could have been revised downwards as well as that of the din rail support.

> But I can't blame them when you have it in your hands you clearly feel it's heavy.

**It is not only compatible with roller shutters, far from it you can easily use it on BSOs, awnings, finally everything that opens and closes on a rotary axis provided you have the necessary electrical inputs. **

**This module leaves nothing to chance**, nodon even stuck a customizable label on the side for clear archiving in your electrical panel or behind the switch.

{% include product-embed.html guid="2144" %}
{% include product-embed.html guid="2142" %}

On the image presented below you will be able to realize the size of the module and the Nodon din-rail. **The DIN rail will take up one and a half places in the electrical panel**

{% picture posts/{{ page.guid }}/nodon-zigbee-SIN-4-RS-20-module-volet-roulant-plus-rail-din.png --alt nodon zigbee module SIN-4-RS-20 for roller shutter size and din rail compatibility--img width="940" height="529" %}

## Nodon installation video

The video presents the installation of the module and the connection with a wired shutter switch, and finally the integration into Jeedom which is probably the most used home automation system in France.

{% include videoPlayer.html youtubeId="cujMkYiD-f8" %}

## Assembly diagrams

Mounting on rolling shutter with or without switches

{% picture posts/{{ page.guid }}/Schema_montage_SIN_4-RS-20-VR-avec-ou-sans-inter.png --alt diagram of the nodon zigbee SIN-4-RS-20 module for rolling shutters with or without switches --img width="940" height="470" %}

Mounting on awnings with or without switches

{% picture posts/{{ page.guid }}/Schema_montage_SIN_4-RS-20-Store-Banne-avec-ou-sans-inter.png --alt diagram of the nodon zigbee SIN-4-RS-20 module for awnings with or without switches --img width="940" height="470" %}

## Zibee2mqtt integration

**Integration in Z2M is easy** you will find all the commands there as well as the control of the opening position.

{% picture posts/{{ page.guid }}/appairage-nodon-sin-4-rs-20-zigbee2mqtt.png --alt integration of nodon zigbee SIN-4-RS-20 module for rolling shutter in zigbee2mqtt --img width="940" height="38" %}

{% picture posts/{{ page.guid }}/appairage-nodon-sin-4-rs-20-zigbee2mqtt-a-propos.png --alt integration of nodon zigbee SIN-4-RS-20 module for rolling shutter in zigbee2mqtt state --img width="940" height="689" %}

I find the **setting up of the commands very clear**, you only have to judge for yourself, three commands open, down, stop and a percentage bar for the position at the opening.

{% picture posts/{{ page.guid }}/appairage-nodon-sin-4-rs-20-zigbee2mqtt-expose.png --alt integration of nodon zigbee SIN-4-RS-20 module for rolling shutter in zigbee2mqtt command show --img width="940" height="219" %}

## Integration in Jeedom with Zigbee

Jeedom's Zigbee module ** easily recognizes it and all the commands are there **, the setting is a little less clear than z2m but remains operational

{% picture posts/{{ page.guid }}/appairage-nodon-sin-4-rs-20-jeedom-zigbee.png --alt integration of nodon zigbee SIN-4-RS-20 module for roller shutter in jeedom with zigbee module --img width="940" height="270" %}

{% picture posts/{{ page.guid }}/appairage-nodon-sin-4-rs-20-jeedom-zigbee-commande.png --alt integration of nodon zigbee SIN-4-RS-20 module for rolling shutter in jeedom with zigbee module command exposure --img width="940" height="279" %}

## Integration in ZHA

For Zha there too, no integration problems, however ** the opening position adjustment is missing ** ... So either I missed it, or it was an integration oversight, too bad.

{% picture posts/{{ page.guid }}/appairage-nodon-sin-4-rs-20-zha.png --alt integration of nodon zigbee SIN-4-RS-20 module for rolling shutter in zha --img width="940" height="33" %}

{% picture posts/{{ page.guid }}/appairage-nodon-sin-4-rs-20-zha-a-propos.png --alt integration of nodon zigbee SIN-4-RS-20 module for rolling shutter in zha module status --img width="940" height="449" %}

The entity layout in Home assistant is top notch. You can find the same with Z2M

{% picture posts/{{ page.guid }}/appairage-nodon-sin-4-rs-20-zha-expose.png --alt integration of nodon zigbee SIN-4-RS-20 module for rolling shutter in zha state of entity --img width="604" height="570" %}


## Technical characteristics

|Power supply|230V AC ~ 50Hz|
|Switching capacities|230V AC – 3A|
|Maximum motor power|280W Max – 60 Nm Max – Integrated zero crossing|
|Consumption|< 1W|
|Radio frequency band used|2.4 GHz|
|Maximum radio power|+10dBm|
|Range|up to 30m indoors|
|Operating temperature|-20°C to 60°C|
|Ingress protection|IP 20|
|Device ID Type|Window Cover Device (0x0202)|
|Dimensions|40mm (w) x 44mm (l) x 16.9mm (h)|

![Nodon SIN-4-RS-20 3D Image Capture]({{ site.baseurl }}/assets/images/posts/71/SIN-4-RS-20-360.webp{{ cachebuster }}){: width="400" height="319"}{: target="_blank"}

## Compatibility

- ZHA (home assistant)
- Zigbee2mqtt (home assistant, jeedom, Gladys, Majordomo, etc.)
- Zigbee by Domoticz
- Zigbee Jeedom
- Overkiz
- Smartthings
- Smart&Connective

## **the + of the product**
{: .blue}
- manufacturing quality
- OTA update support
- zigbee 3.0 certified
- the many compatibilities
- self-calibration

## **the - of the product**
{: .red}

- the price

{% include product-embed.html guid="2144" %}
{% include product-embed.html guid="2142" %}

## Downloadable instructions

Here are the links of all the instructions concerning the SIN-4-RS-20 module of the Nodon roller shutter module

**P**resentation note of the Nodon module

{% include doclink.html pdf="NodOn_Zigbee_RollerShutterModule_SIN-4-RS-20-Datasheet_FR.pdf" title="Data sheet Nodon zigbee roller shutter SIN-4-RS-20" %}

**S**hutter motor compatibility note, I think this is only exhaustive, it must certainly be compatible with all wired shutter motors on the market.

{% include doclink.html pdf="NodOn_Compatibilite-VR_V0-04_FR_160523-2.pdf" title="Compatibility with wired motors of the Nodon zigbee rolling shutter SIN-4-RS-20" %}

**T**echnical note that you find in the box of the module

{% include doclink.html pdf="SIN-4-RS-20-UG_FR_EN-V6_digital-1.pdf" title="Installation instructions for the Nodon zigbee roller shutter SIN-4-RS-20" %}

## Conclusion

I repeat myself, but I want to say it **Nodon** is a company that manufactures modules of **quality, well thought out and thoughtful**. I find only one negative point to this product, **it's the price which is around 45€**, after that there are more expensive like the Legrand brand to name a few. **I was surprised by the hardware and software compatibility**, as well as the robustness of this product. If you are interested in din rail integration, don't hesitate to buy the additional module which gives you **access to all the functions except the module's reset switch**.
