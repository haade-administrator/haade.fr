---
guid: 110
title: Sonoff zigbee SNZB-03P and SNZB-06P sensor tests
description: test of sonoff SNZB-03P and SNZB-06P zigbee movement and human presence sensors what differences, are they well recognized in our assistants.
ref: SNZB-03P and SNZB-06P
layout: post
author: Nico
date: 2024-02-27 18:43
last_modified_at: null
categories:
  - Tests
  - Zigbee
tags: []
image: detecteur-mouvement-et-presence-humaine-zigbee-sonoff-snzb-03p-snzb-06p.png
toc: true
beforetoc: ""
published: true
noindex: false
sitemap:
  changefreq: monthly
  exclude: no
  priority: 0.5
  lastmod: null
locale: en_GB
comments: true
rating: 4
addViews: 7
redirect_from:
  - /en/blog/sonoff-zigbee-snzb-03p-snzb-06p-sensor-tests
sourcelink:
  - https://sonoff.tech/product/gateway-and-sensors/snzb-03p/
  - https://sonoff.tech/product/gateway-and-sensors/snzb-06p/
---

As usual **I thank Domadoo and itead** for the loan of these two **Sonoff** Zigbee modules which are the {{ page.ref }}, these are two presence detection modules that are completely opposed, and yet quite similar. In this article I will test the operation and integration in Zigbee2mqtt and ZHA.

##Sonoff SNZB-03P

{% include product-embed.html guid="2191" %}

The [Sonoff snzb-03P](https://www.domadoo.fr/fr/securite/6923-sonoff-detecteur-de-mouvement-zigbee-30.html?domid=39){: target="_blank"} is similar to what the competition can do, a long design, a pairing button and a magnetic holder **make this product what it is.**

To begin, let's detail the packaging of the sonoff snzb-03p, delivered in orange packaging like the rest of the zigbee range, the module comes with:
- a magnetic support,
- double sided
- a set of dowels and screws.
- To complete a summary but sufficient notice.

{% picture posts/{{ page.guid }}/deballage-capteur-presence-sonoff-zigbee-snzb-03p.png --alt unboxing the presence sensor on zigbee 3.0 battery from the Sonoff brand the snzb-03p --img width="940" height="529" %}

Opening the module for access **to the 2477 format battery** is relatively simple and well made. Overall the Sonoff SNZB-03P detector is well designed.

> The Sonoff brand has been able to adapt and rise to the Chinese high-end which is at the same level as the Xiaomi Aqara range, in my opinion of course.

{% picture posts/{{ page.guid }}/demontage-capteur-presence-zigbee-sonoff-snzb-03p.png --alt dismantling and presentation of the innards of the Zigbee 3.0 battery-powered presence sensor from the Sonoff brand, the snzb-03p --img width="940" height="529" %}

In order to see the size of the module, here is just for you a small screenshot to show you the volume of the product. The size is still impressive, we might have preferred a flatter, round sensor for more discreet integration in our homes.

{% picture posts/{{ page.guid }}/taille-sonoff-snzb-03p.png --alt rendering of the size of the presence sensor on zigbee 3.0 battery from the Sonoff brand the snzb-03p --img width="940" height="529" %}

### Features of the Sonoff snzb-03p

**Faster detection in 5 seconds**
Automatically turn on the lights immediately when you pass by and turn off the light after you leave, the shortest time can reach 5 seconds, helping you save energy.
**3 year battery life**
Powered by CR2477 battery, the battery life is extended to over 3 years, eliminating the worries of frequent battery replacement.
**Zigbee 3.0 compatible**
Supports Zigbee hubs using Zigbee 3.0 protocol such as SONOFF NSPanel Pro, SONOFF iHost, SONOFF ZB Bridge Pro, SONOFF ZBDongle-E and Echo Plus 2nd…


### Technical characteristics of the Sonoff snzb-03p

|Model|SNZB-03P|
|Operating temperature|-10°C~60°C|
|Wireless connection|Zigbee 3.0|
|Operating humidity|5-95% RH, non-condensing|
|Detection range|6m(20f), 110°|
|Battery model|CR2477(3V)|
|Net weight|54g|
|Product dimensions|44x44x65mm|

## Presentation of the Sonoff SNZB-06P

{% include product-embed.html guid="2190" %}

Here is a new addition to the Sonoff range, it is a new generation motion detector which manages, in addition to classic presence capture, the static detection of people **thanks to the new microwave detection.**

{% picture posts/{{ page.guid }}/presentation-capteur-presence-humaine-sonoff-zigbee-snzb-06p.png --alt presentation of the human presence sensor on zigbee 3.0 sector from the Sonoff snzb-06p brand --img width="940" height="529" %}

From what I have read right and left, this new generation 5.8Ghz microwave sensor surpasses everything that has been done so far in the field of capturing human presence. Negative point at first glance **this module does not work on batteries but on 5v** on the sector thanks to a USB-C connection and adapter supplied with the module.

> Yes, microwave detection consumes energy

As you can see below, the new generation sonoff SNZB-06P human presence sensor comes with instructions for use and instructions on false negatives that can be detected, and yes this module is ultra sensitive. **you will also find a usb-c cable**, dowels and screws as well as a **double-sided 3M** and of course the famous *magnetic support.*

{% include doclink.html pdf="SNZB-06P-Pre-Use-Instructions.pdf" title="Sonoff SNZB-06P false-positive notice" %}

{% picture posts/{{ page.guid }}/deballage-capteur-presence-humaine-sonoff-zigbee-snzb-06p.png --alt unboxing the human presence sensor on zigbee 3.0 sector from the brand Sonoff snzb-06p --img width="940" height="529" %}

> According to the manufacturer, this module is very precise and capable of measuring the difference in light as well as static human presence.

A little screenshot to show you the size of the Sonoff SNZB-06P

{% picture posts/{{ page.guid }}/taille-sonoff-snzb-06p.png --alt rendering of the size of the human presence sensor on zigbee 3.0 sector from the Sonoff snzb-06p brand --img width="940" height="529" %}

Below is an image which allows you to better judge the similar architecture of the two products, a remarkable difference in terms of the sensor, the rest is relatively similar.

{% picture posts/{{ page.guid }}/comparatif-taille-et-design-detecteur-de-mouvement-presence-personne-sonoff-snzb-03p-et-snzb-06p.png --alt comparison of the size and design of the presence sensors on zigbee 3.0 battery from the Sonoff brand the snzb-03p vs snzb-06p --img width="940" height="529" %}

### Features of the Sonoff snzb-06p

Additionally, the SNZB-06P features **three sensitivity levels**, up to a detection distance of 4m (13ft). And it has multiple installation options, like magnetic attraction, sticking with 3M adhesive or screw, you can place it anywhere you need.

**SNZB-06P presence detection based on 5.8GHz microwave radar**, it can detect movement or stationary person. It automatically turns on the lights when you approach and keeps them on until you leave.
**Light Sensing** The built-in light sensor ensures that the lights only turn on when a presence is detected in the dark, helping you save energy.

{% include doclink.html pdf="User-Manual_SNZB-06PEN-V1.0.pdf" title="Sonoff SNZB-06P User Manual" %}

### Technical characteristics of the sonoff snzb-06p

|Model|SNZB-06P|
|Power supply|5V⎓1A|
|Wireless connection|Zigbee 3.0|
|Operating temperature|-10℃~60℃|
|Zigbee Device Type|Router|
|Working humidity|0 ~ 90% RH, non-condensing|
|Product dimensions|44.2 × 44.2x59 mm|

## Z2M and ZHA opensource integration {{ page.ref }}

### the SNZB-03P

{% include product-embed.html guid="2191" %}

The SNZB-03P detection module is well recognized in Zigbee2mqtt and **ZHA**, therefore compatible with Jeedom and Home Assistant.

{% picture posts/{{ page.guid }}/sonoff-snzb-03p-mouvement-illumination-z2m.png --alt sonoff snzb-03p and zigbee2mqtt compatibility --img width="940" height="529" %}

**The positive points of zigbee2mqtt are undeniable, you will be able to:**
- configure the presence detection status return time
- check the battery level

{% picture posts/{{ page.guid }}//detection-mouvement-sonoff-snzb-03p-z2m.png --alt sonoff snzb-03p and zigbee2mqtt motion detection --img width="940" height="529" %}

Take a good look at the **presence detection which is very hatched** a little further down with the Sonoff SNZB-06P the detection is totally different, it's up to you to see what might suit you best.

**Brightness detection is done without problems whether in zigbee2mqtt or ZHA.**

{% picture posts/{{ page.guid }}/detection-luminosite-sonoff-snzb-03p-z2m.png --alt sonoff snzb-03p and zigbee2mqtt brightness detection --img width="940" height="529" %}

The Sonoff SNZB-03P presence detection does not bring any new features to this type of module but it has the merit of functioning correctly and being precise.

### SNZB-06P

{% include product-embed.html guid="2190" %}

**Advertised as compatible in ZHA by Sonoff**, I realize that this is **not** really **the case**, in zigbee2mqtt all functions are compatible.

{% picture posts/{{ page.guid }}/compatibilite-zha-errone-snzb-06p-selon-sonoff.png --alt snzb-06p compatibility announced by Sonoff --img width="940" height="529" %}

> In zigbee2mqtt compatibility is 100%

{% picture posts/{{ page.guid }}/detection-presence-luminosite-sonoff-snzb-06p-zigbee2mqtt.png --alt integration of sonoff snzb-06p and zigbee2mqtt --img width="940" height="529" %}

Brightness detection is also functional in zigbee2mqtt which is unfortunately not the case in ZHA.

{% picture posts/{{ page.guid }}/detection-luminosite-sonoff-snzb-06p-dans-zigbee2mqtt.png --alt sonoff snzb-06p and zigbee2mqtt brightness detection --img width="940" height="529" %}

Regarding presence detection in zigbee2mqtt **you can see that the detection ranges are wide and constant** I am afraid that this will create **false positives**, the detection is ultra sensitive , you can adjust the sensitivity either on the module or in zigbee2mqtt, which perhaps makes this module more complex to configure. Especially if you use it in your alarm management.

{% picture posts/{{ page.guid }}/detection-presence-sonoff-snzb-06p-zigbee2mqtt.png --alt presence detection in zigbee2mqtt of sonoff snzb-06p and zigbee2mqtt --img width="940" height="529" %}

**In Zigbee2mqtt you can set:**
- sensitivity according to 3 levels
- as well as the very practical detected/undetected status return delay

{% picture posts/{{ page.guid }}/sensibilite-distance-snzb-06p-sonoff.png --alt sonoff snzb-06p detection sensitivity adjustment diagram --img width="940" height="529" %}

**Regarding compatibility with ZHA** I am quite skeptical, already you cannot configure the different sensitivities through the interface, moreover two commands come up, one for detection which does not work and the other for occupancy this one works, there is **an error because the detection should be the capture of brightness** and this is not the case.

{% picture posts/{{ page.guid }}/sonoff-snzb-06p-occupation-mouvement-zha-homeassistant.png --alt integration in ZHA of sonoff snzb-03p and zigbee2mqtt --img width="940" height="529" %}

> You may realize that the brightness detection is incorrectly entered in ZHA

{% picture posts/{{ page.guid }}/detection-mouvement-erreur-zha-sonoff-snzb-06P.png --alt erroneous movement detection in ZHA of sonoff snzb-03p and zigbee2mqtt --img width="940" height="529" %}

**Motion (occupancy) detection in ZHA works** the same way as in Zigbee2mqtt

{% picture posts/{{ page.guid }}/detection-occupation-zha-sonoff-snzb-06p.png --alt occupancy presence detection in ZHA of sonoff snzb-03p and zigbee2mqtt --img width="940" height="529" %}

{% include product-embed.html image="SNZB-03P.png" title="Presence detector SNZB-03P" brand="Sonoff" description="latest generation zigbee presence detector" iteadlink="sonoff-zigbee-motion-sensor-snzb-03p" domlink="securite/6923-sonoff-detecteur-de-mouvement-zigbee-30.html" %}

## Conclusion

Personally at least for the moment **I would be** rather **tempted to buy the Sonoff SNZB-03P** instead of the Sonoff SNZB-06P, I'm not talking to you about the fact that the latter must be constantly connected to a power source, but by the fact that microwave detection is **very very sensitive**, even when setting this sensitivity and could thus trigger the alarm too easily. I do not doubt its effectiveness which is certainly superior to the Sonoff SNZB-03P but **I am afraid that it will trigger more false positives than its big brother.**

> Overall, these two modules are well made and the manufacturing quality is undeniable. Now it's up to you.

{% include product-embed.html image="SNZB-06P.png" title="Microwave human presence detector SNZB-06P" brand="Sonoff" description="new generation zigbee microwave presence detector" iteadlink="sonoff-zigbee-human-presence-sensor" domlink="securite/6827-capteur-de-presence-humaine-zigbee-30-technologie-radar-sonoff.html" %}
