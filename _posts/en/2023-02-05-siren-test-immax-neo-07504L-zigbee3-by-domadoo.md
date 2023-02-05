---
guid: 44
title: "Immax Neo 07504L zigbee 3.0 siren test"
description: "Testing and unpacking the Immax Neo zigbee 3.0 07504L siren, what are its advantages?"
layout: post
author: Nico
date: 2023-02-05 11:09
last_modified_at: 
categories: [Tests, Haade-lab, Zigbee]
tags: []
image: 'immax-neo-07504L-smart-siren-exterieur-ip65-zigbee-3-fix-mural.png'
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
rating: 0
sourcelink:
  - https://www.immax.eu/immax-neo-smart-siren-zigbee-3-0-p11154/?cid=301
  - https://www.domadoo.fr/fr/peripheriques/6352-immax-sirene-intelligente-exterieure-zigbee-30-tuya-ip65.html?domid=39
---

The packaging is basic, the alarm is accompanied by a mains plug, 4 screws and dowels as well as the installation manual which can be downloaded below.

{% include doclink.html pdf="Immax-Neo-Sirene-07504L-manual.pdf" title="Manual alarm Immax Neo 07504L" %}

{% include product-embed.html guid="2137" %}

A security alarm or simply a siren will protect your property at home, in a cottage or in a garage. Its basic location is to use it as a house alarm, but you can choose any space for the location. As standard, the siren is powered by a mains adapter and is also equipped with an integrated battery. The siren will therefore work even if it is disconnected from the electrical source by the intruder. The siren has a volume of up to 95 dB, so you can rely on sound even in a very crowded room.

> For now **this alarm is only compatible with Jeedom** and the Zigbee plugin, that's I can't test the operation of the module, for those who follow me I'm on HA. However Domadoo provided me with a Jeedom Luna for testing, I will be able to do the test soon.

In the meantime I will work on this product to make it compatible with Zigbee2mqtt so it will also be usable in Homeassistant.

Below is a rendering of the dimensions of the Immax 07504L.

{% picture posts/{{ page.guid }}/rendu-dimension-immax-sirene-zigbee-07504L.png --alt rendering in hand of immax neo 07504L zigbee 3.0 alarm --img width="940" height="529" %}

This alarm is interesting for its outdoor characteristics. **Indeed it is IP65**. A rubber seal is provided with which allows the internal components to be properly isolated. I advise all the same to put this comic under a porch or overhang of the roof.

Regarding the adaptation of the socket, it can easily be modified without welding because it is fixed thanks to a connector.

# The **+**{: .blue} of the product

- Outdoor compatible
- On the rear side a gray security button which allows the alarm to be triggered in the event of a break-in on the module.
- An internal switch allows you to turn the alarm on or off
- This module is equipped with a Tuya TYZS3 zigbee antenna
- It is equipped with a link button
- Equipped with 3.7V/300mAh lithium battery in case of power failure

# The **-**{: .red} of the product

- incompatible with Zigbee2mqtt, Zha

{% picture posts/{{ page.guid }}/immax-neo-07504L-smart-siren-exterieur-ip65-zigbee-3-diverse-photo.png --alt various photos of immax neo 07504L zigbee 3.0 alarm for exterior ip65 --img width="940" height="529" %}

## Technical specifications:

Power supply: DC 5V / 1A
Built-in battery: lithium battery 3.7 V / 300 mAh
Protocol: ZigBee 3.0
Frequency: 2400MHz ~ 2483.5MHz
Maximum RF output power: ZigBee: 10dBm - max 19dBm
Wireless range: 30 m direct visibility, 10 m in built-up area
Internal siren: 95 dB
Static current: max. 35 mA
Alarm current: max. 150 mA
Case material: ABS plastic
Operating temperature: -10 ° C to + 55 ° C
Operating humidity: maximum 80% (no condensation)
Degree of siren protection: IP65
Degree of protection of the power supply: IP20
Dimensions: 145x74.5x38mm
Package contents: Smart siren, mains power adapter 230V, user manual

Compatibility with systems: iOS, Android, Amazon Alexa, Apple Siri shortcuts, Google Assistant, TUYA, Lidl.

{% include product-embed.html guid="2137" %}

# Conclusion

Very good product, qualitative it combines all the assets to become a must in the alarm category, it is a relatively recent introduction on the market, only sold at Domadoo. If you're patient it will soon be Zigbee2mqtt compatible, I'll take care of it 👷.
