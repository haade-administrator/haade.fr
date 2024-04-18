---
guid: 81
title: "Testing new Sonoff SNZB-02P temperature and humidity sensor"
description: "Test of the new temperature and humidity sensor based on a Silabs EFR32MG22 chip with a reworked design and impeccable quality in bright orange colors from the Sonoff brand, nothing to do with the big brother SNZB-02, Sonoff improves its image as a premium Chinese brand"
ref: "SNZB-02P"
layout: post
authors: Nico
date: 2023-09-04 14:59
last_modified_at: 
categories: [Tests, Zigbee]
tags: []
image: 'test-new-sensor-temperature-humidity-sonoff-snzb-02p-zigbee-quality-design-improved.png'
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
rating: 4.9
sourcelink:
  - https://itead.cc/product/sonoff-zigbee-temperature-and-humidity-sensor-snzb-02p/ref/122/
  - https://s.click.aliexpress.com/e/_DkB333v
  - https://sonoff.tech/product-document/gateway-and-sensors-doc/snzb-02p-doc/
---

It's been more than two weeks since I published any articles, due to summer vacation... the break was good. Now we are already at the beginning of September and for this start of the school year I am offering you a new Sonoff {{ page.ref }} temperature and humidity sensor module working with a Silabs EFR32MG22 chip.

If you have read the **latest articles on Sonoff brand products** you have been able to realize the **the move upmarket** of the brand, for this product it is even more [blatant if we look at it compare with our big brother the Sonoff SNZB-02]({% post_url /en/2021-09-10-test-sensor-temperature-and-humidity-sonoff-snzb-02 %})

## List of Cognitive articles

- [Test sensor SNZB-02D]({% post_url /en/2023-08-07-test-module-zigbee-sonoff-snzb-02d-temperature-humidity-digital %})
- [Test temp sensor and humidity Sonoff SNZB-02]({% post_url /en/2021-09-10-test-sensor-temperature-and-humidity-sonoff-snzb-02 %})
- [Test capteur porte Sonoff SNZB-04]({% post_url /en/2021-09-20-sensor-test-door-zigbee-3-0-sonoff-snzb-04 %})
- [Test interrupteur ZBMINI-L2 Extrême]({% post_url /en/2023-03-06-test-sonoff-zbminil2-extreme-zigbee-end-device %})
- [Test Nspanel Pro]({% post_url /en/2023-03-10-unboxing-test-and-installation-sonoff-nspanel-pro %})
- [Zbdongle-P vs Zbdongle-E]({% post_url /en/2022-11-20-zb-dongle-p-vs-zb-dongle-e-zigbee-sonoff %})

{% include product-embed.html guid="2172" %}

**you will also find it at the same price directly** [at Itead](https://itead.cc/product/sonoff-zigbee-temperature-and-humidity-sensor-snzb-02p/ref/122/){: target="_blank"}

With this new Sonoff temperature and humidity sensor {{ page.ref }}, the quality is very close to the Chinese products of the Aqara brand, by **signing its Zigbee products with the famous bright orange**.

This sensor comes with a small metal shell **bright orange shot-blasted** that you can easily attach to the wall, and which will magnetically accommodate the {{ page.ref }}. **I must say that it is very successful**.

## Contents of the box

1. a Sonoff zigbee module {{ page.ref }}
2. an orange metal support
3. an explanatory note
4. a screw
5. 3M double sided

{% picture posts/{{ page.guid }}/contenu-capteur-temperature-humidite-sonoff-snzb-02p-zigbee.png --alt Sonoff temperature and humidity sensor package contents {{ page.ref }} --img width="940" height="428" %}

In the photos below you can see the size and manufacturing quality of the module. With a pairing button and an opening for the temperature/humidity probe.

{% picture posts/{{ page.guid }}/differente-face-et-taille-sonoff-snzb-02P-nouveautee.png --alt cutting plan of the new Sonoff temperature and humidity sensor {{ page.ref }} --img width="940" height="428" %}

You can easily attach the module to the wall either by double sided or by screwing.

> The magnetic support works correctly, however the module does not center itself even if you move it too far from the support.

{% picture posts/{{ page.guid }}/image-wall-fixation-sonoff-snzb-02p.png --alt Sonoff temperature and humidity sensor wall mounting type {{ page.ref }} --img width="940" height="980" %}

> Surprisingly, the module integrates a **CR2477 battery** which is quite rare in use but which allows Sonoff to guarantee the **4-year operating life** just that?

{% picture posts/{{ page.guid }}/boitier-sonoff-snzb-02p-interieur-pile-magnet.png --alt opening the Sonoff snzb-02p module and unusual battery cr2477 {{ page.ref }} --img width="940" height="529" %}


## Integration in Zigbee2mqtt (ha and jeedom)

The integration into Z2M is done without problems and the module is well recognized and already included in the Z2M base, it's a good thing but that doesn't surprise me. Sonoff is still renowned.

{% picture posts/{{ page.guid }}/integration-apropos-zigbee2mqtt-sonoff-snzb-02p.png --alt integration of the sonoff zigbee efr322 module {{ page.ref }} in zigbee2mqtt about --img width="940" height="731" %}

> All information appears correctly. Don't worry about the battery **it works** too only I took the capture too quickly after integration.

{% picture posts/{{ page.guid }}/remonte-information-expose-zigbee2mqtt-sonoff-snzb-02p.png --alt exposure of sonoff zigbee efr32mg22 module commands {{page.ref}} in zigbee2mqtt --img width="940" height="475" %}

**Zigbee2Mqtt allows you to report 6 data:**

1. battery level
2. temperature reading
3. humidity reading
4. empty battery indication
5. battery voltage
6. the quality of the mesh link

## Comparisons of measurements from {{ page.ref }}

I wanted to test and compare the measurements of the Sonoff SNZB-02P to the [SNZB-02D module]({% post_url /en/2023-08-07-test-module-zigbee-sonoff-snzb-02d-temperature-humidity-digital %}) et [Xiaomi Aqara VOCKQJK11LM]({% post_url /en/2023-07-06-test-aqara-air-quality-monitor-AAQS-S01-zigbee3 %})

By looking at the **animated gif** below you will see that the data from SNZB-02D and {{ page.ref }} are almost similar. **But there is a difference in humidity reading** with the Xiaomi. It will probably be necessary to calibrate the sonoffs, the difference **in humidity is only 5%.**

{% picture posts/{{ page.guid }}/data-comparison-temperature-sonoff-snzb-02P.png --alt comparison of the measurements of the sonoff snzb-02d, {{ page.ref }} and the xiaomi Aqara VOCKQJK11LM --img width="940" height="529" %}

|control|SNZB-02D|SNZB-02P|Aqara AAQS-S01|
|--------|--------|--------|---------|
|**temperature**|25.6|25.4|25.91|
|**humidity**|43.4|42.6|47.41|

![Comparison of temperature and humidity reading Sonoff SNZB-02D, SNZB-02P and Aqara VOCKQJK11LM]({{ site.baseurl}}/assets/images/posts/{{ page.guid }}/comparatif-mesure-temperature-humidite-sonoff-snzb-02P.webp{{ cachebuster }}){: width="940" height="884" class="lazy"}

## Technical characteristics

{% picture posts/{{ page.guid }}/caracteristique-technique-sonoff-snzb-02p.png --alt sonoff technical characteristics {{ page.ref }} --img width="940" height="316" %}

## Instructions for use {{ page.ref }}

{% include doclink.html pdf="manuel-utilisation-sonoff-SNZB-02P-V1.0.pdf" title="sonoff snzb-02p user manual" %}

## **product advantages** {{ page.ref }}
{:.blue}
- manufacturing quality
- the price **10€**
- zigbee 3.0 certified
- the many compatibilities
- compatibility (ZHA and Zigbee2mqtt and Ewelink)


## **the - of the product** {{ page.ref }}
{:.red}

- resuming humidity calibration
- the unusual stack

{% include product-embed.html image="sonoff-capteur-de-temperature-et-d-humidite-zigbee-30-avec-support-snzb-02p.jpg" title="Sensor Sonoff SNZB-02P" brand="Sonoff" description="The SONOFF SNZB-02P temperature and humidity sensor informs you of the temperature and humidity." domlink="chauffage-clim/6732-sonoff-capteur-de-temperature-et-d-humidite-zigbee-30-avec-support-snzb-02p.html" iteadlink="sonoff-zigbee-temperature-and-humidity-sensor-snzb-02p" %}

## Conclusion

The evolution of Sonoff modules **worth the detour** and this temperature and humidity controller is no exception to the rule. You can go ahead and buy it currently available on the platforms [Domadoo](https://www.domadoo.fr/fr/chauffage-clim/6732-sonoff-capteur-de-temperature-et-d-humidite-zigbee-30-avec-support-snzb-02p.html){: target="_blank"} and [Itead](https://itead.cc/product/sonoff-zigbee-temperature-and-humidity-sensor-snzb-02p/ref/122/){: target="_blank"}.
