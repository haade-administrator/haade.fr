---
guid: 96
title: "Nspanel Pro V2.2.0 Zigbee Update"
description: "This is an update that will not go unnoticed, now with V2.2.0 The Nspanel Pro can be configured as a coordinator or router, a very very interesting function."
ref: "NSPanel Pro"
layout: post
authors: Nico
date: 2023-11-21 01:00
last_modified_at: 
categories: [News, Zigbee, Matter]
tags: []
image: 'v2.2.0-nspanel-pro-zigbee-coordinateur-routeur.png'
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
rating:  
sourcelink:
  - https://sonoff.tech/product-review/product-insight/sonoff-nspanel-pro-version-update-information-and-faq/
  - https://sonoff.tech/nspanelpro-api/
  - https://itead.cc/product/sonoff-nspanel-pro-smart-home-control-panel/ref/122/
  - https://www.domo-blog.fr/sonoff-nspanel-pro-zigbee-et-pilotage-de-la-piscine-via-la-domotique-home-assistant/
---

Until now I did not find any **real interests** concerning the NSPanel Pro which is, **it must be admitted, difficult to malleable**, I am not talking about the original firmware, but the **possibility of hacking ** in order to make it compatible with your favorite home automation assistant. NspanelPro like many other control screens, runs on Android and it must be admitted that it is far from being the operating system to choose for open source home automation. In addition, the Zigbee chip until now worked in **coordinator** mode. Which restricted the system even more. **But all this is about to change.**

{% include product-embed.html image="https://i0.wp.com/itead.cc/wp-content/uploads/2022/07/NSPanel-P_preorder_dim_gray.jpg?fit=1000%2C1000&ssl=1" title="Sonoff Nspanel Pro Controller" brand="Sonoff" description="Sonoff Nspanel Pro controller with zigbee 3.0 and integrated wifi" affiliate="_DCgKVON" domlink="objets-connectes/6625-sonoff-interrupteur-mural-noir-zigbee-30-nspanel-pro.html" iteadlink="sonoff-nspanel-pro-smart-home-control-panel" %}

Indeed since version 2.2.0 it is possible to **configure the EFR32MG21 zigbee chip as a coordinator or as a router**. Which will ultimately make it compatible with Zigbee2mqtt or ZHA and therefore easily integrate it into its opensource network Home-assistant, Jeedom, Gladys, openhab, etc... And that's a big plus. Moreover, an integration request on the zigbee2mqtt github is in progress, see the link below.

[Z2M issues Github](https://github.com/Koenkk/zigbee2mqtt/issues/19721){: target="_blank"}

## What’s new Version 2.1.0 and 2.2.0

**Here are the new updates since the presentation of version 2.0.0:**

1. Support **SONOFF Zigbee thermostatic radiator valve**. You can turn on and off, switch between manual/automatic modes and set the target temperature on NSPanel Pro.
2. **Optimizes screen swiping experience**. It's more precise when you swipe down to access settings and swipe left or right to change screens.
3. Support for GSM switch and socket equipment.
4. **Support switching NSPanel Pro from Zigbee gateway mode to Zigbee router mode**. Click “Device Settings – Driver Features – Zigbee Mode” in the app to enable Zigbee router mode. After switching to a Zigbee router, you need to link it to other gateways.
5. Multi-channel **Matter** switches and sockets added to NSPanel Pro support **All ON and All OFF** control.
6. Support setting **SNZB-06P** as a trigger device for intelligent security.

> Note: *The app needs to be upgraded to **version 5.1.0** (It should be available at the end of this month for iOS users.)

## But that's not all

As listed in a previous article [on the presentation of V1.7.0 of Nspanel Pro]({% post_url /en/2023-04-16-update-nspanel-pro-v1.7.0 %}), [Sonoff.tech has developed a complete web api](https://sonoff.tech/nspanelpro-api/){: target="_blank"} for this product.

{% picture posts/{{ page.guid }}/control-nspanel-pro-api-home-assistant.png --alt presentation of the architecture of the web API developed by sonoff.tech for the NSPanel Pro --img width="940" height="803" %}

> Which suggests perfect integration into Home Assistant, all that remains is to develop.

**By looking more closely at the diagram you will realize that we can integrate almost everything and link many elements**. Which would have the ultimate goal of not hacking the {{ page.ref }}. And that’s a major asset.

Currently you can find on the net **tutorials to operate the NSPanel pro with Home-assistant** either by hacking or by using the web page. [Domo-blog has produced an effective tutorial on this subject.](https://www.domo-blog.fr/sonoff-nspanel-pro-zigbee-et-pilotage-de-la-piscine-via-la-domotique-home-assistant/){: target="_blank"} **However, the interface is not large enough for comfortable use.** With these integrations the {{ page.ref }} allows you to control everything but the interface and the commands are much too small and make the operation of the less clear.

> In my opinion it is important to keep the original firmware whose commands are more refined and use WAF.

{% include product-embed.html image="https://i0.wp.com/itead.cc/wp-content/uploads/2022/07/NSPanel-P_preorder_dim_gray.jpg?fit=1000%2C1000&ssl=1" title="Sonoff Nspanel Pro Controller" brand="Sonoff" description="Sonoff Nspanel Pro controller with zigbee 3.0 and integrated wifi" affiliate="_DCgKVON" domlink="objets-connectes/6625-sonoff-interrupteur-mural-noir-zigbee-30-nspanel-pro.html" iteadlink="sonoff-nspanel-pro-smart-home-control-panel" %}

## Black Friday

Currently you will find the module at ridiculous prices [Itead offers it at $67.90](https://itead.cc/product/sonoff-nspanel-pro-smart-home-control-panel/ref/122/){: target="_blank"} for the purchase of a unit, **until December 10, 2023**.

## Conclusion

From the beginning Sonoff.tech has promised us constant evolution of its {{ page.ref }} module, **and this has been the case**, with the appearance of version v2.2.0, the {{ page.ref }} **becomes very interesting**, the perspective of evolution and the fact of making the Zigbee component in router mode **make it an essential control module**. *In addition, the screen scanning has been revised* this is proof that the evolution of the firmware respects its users. In short, go buy this module, [currently €62 at Itead.](https://itead.cc/product/sonoff-nspanel-pro-smart-home-control-panel/ref/122/){: target="_blank"}
