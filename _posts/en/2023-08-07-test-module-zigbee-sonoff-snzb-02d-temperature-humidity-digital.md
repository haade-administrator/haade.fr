---
guid: 78
title: "Sonoff SNZB-02D Sensor Test"
description: "Sonoff SNZB-02D zigbee 3.0 digital temperature and humidity sensor test"
ref: "SNZB-02D"
layout: post
authors: Nico
date: 2023-08-07 12:27
last_modified_at: 
categories: [Tests, Zigbee]
tags: []
image: 'test-module-zigbee-temperature-humidite-sonoff-snzb-02d.png'
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
rating: 4.7
sourcelink:
  - https://www.domadoo.fr/fr/peripheriques/6614-sonoff-capteur-de-temperature-et-d-humidite-zigbee-30-avec-ecran.html?domid=39
  - https://sonoff.tech/product/gateway-and-sensors/snzb-2d/
---

To start this article **I wanted to thank Domadoo** for providing me with this product which allows me to give you more feedback on the modules of the Sonoff range. As you will have been able to read on this blog, I have already tested various products of this brand and **I must say that I have never been disappointed**, whether it is a module including the wifi protocol or Zigbee, then what about this Sonoff module {{ page.ref }}, is it of good quality and for what purpose was it developed?

## List of Cognitive articles

- [Test capteur température et humidité Sonoff SNZB-02]({% post_url /en/2021-09-10-test-sensor-temperature-and-humidity-sonoff-snzb-02 %})
- [Test capteur porte Sonoff SNZB-04]({% post_url /en/2021-09-20-sensor-test-door-zigbee-3-0-sonoff-snzb-04 %})
- [Test interrupteur ZBMINI-L2 Extrême]({% post_url /en/2023-03-06-test-sonoff-zbminil2-extreme-zigbee-end-device %})
- [Test Nspanel Pro]({% post_url /en/2023-03-10-unboxing-test-and-installation-sonoff-nspanel-pro %})
- [Zbdongle-P vs Zbdongle-E]({% post_url /en/2022-11-20-zb-dongle-p-vs-zb-dongle-e-zigbee-sonoff %})

{% include product-embed.html image="sonoff-capteur-de-temperature-et-d-humidite-zigbee-30-avec-ecran.jpg" title="Sonoff SNZB-02D" brand="Sonoff" description="Temperature and humidity sensor with Zigbee display" iteadlink="sonoff-snzb-02d-zigbee-lcd-smart-temperature-humidity-sensor" domlink="peripheriques/6614-sonoff-capteur-de-temperature-et-d-humidite-zigbee-30-avec-ecran.html" affiliate="_DlxqGhv" %}

The sphere of Sonoff Zigbee modules is growing month by month, the company is currently developing several home automation controllers such as ihost, zBbridge pro, [Nspanel pro]({% post_url /en/2023-03-10-unboxing-test-and-installation-sonoff-nspanel-pro %}). We feel that the company has created a whole universe around the modules of the brand. So it's good that proves that the company is doing well on the other hand **it's a shame that these products are not developed multi-brands and here I am talking about the NSpanel Pro which in my opinion loses its meaning**.

## Presentation of the Sonoff {{ page.ref }}

This module presents very well, it is delivered in a bright orange cardboard box famous for the Sonoff brand, without embellishment. Inside you will find the module packed in a film pouch accompanied by the instructions and... nothing more 😄.

{% include doclink.html pdf="technical-data-SNZB-02D-V1.0.pdf" title="Données techniques du module Sonoff SNZB-02D" %}
{% include doclink.html pdf="user-guide-Sonoff-SNZB-02D-V1.0.pdf" title="Notice utilisateurs du module Sonoff SNZB-02D" %}

{% picture posts/{{ page.guid }}/presentation-module-zigbee-temperature-humidite-sonoff-snzb-02d-suite.png --alt following presentation photos of the Sonoff zigbee module {{ page.ref }} --img width="940" height="529" %}

Once in hand the **product presents very well** the LCD panel is large, the weight is consistent **78gr**, probably due to the integrated magnets, the display is clear, you can also see the output of air for the temperature/humidity probe.

{% picture posts/{{ page.guid }}/presentation-module-zigbee-temperature-humidite-sonoff-snzb-02d.png --alt presentation of the Sonoff zigbee module {{ page.ref }} --img width="940" height="529" %}

The module is accompanied by a wall bracket covered with a double-sided **3M brand**. The {{ page.ref }} module and the support are magnetic, the interlocking is done from the top and is automatically oriented in the support. **Really very well thought out.** Important the magnets are on the module side, **so you can also place it against a metal surface such as a refrigerator**.

![animated image of the magnetic wall support of the zigbe sonoff module {{page.ref}}]({{ site.baseurl}}/assets/images/posts/{{ page.guid }}/Sonoff SNZB-02D-237.webp{{ cachebuster }}){: width="237" height="240" class="lazyload pictaninpost"}

**To finish** the Sonoff {{page.ref}} module has a table support that is adjustable and integrated into the whole.

{% picture posts/{{ page.guid }}/divers-support-module-zigbee-temperature-humidite-sonoff-snzb-02d.png --alt image presenting the different supports of the Sonoff zigbee module {{ page.ref }} --img width="940" height="428" %}

Let's move on to the display, **it presents very very well**, with a diagonal greater than 7cm, just that, even before disassembling it, I felt that the LCD screen of the Sonoff {{page. ref}} was quality.

{% picture posts/{{ page.guid }}/qualité-ecran-lcd-module-zigbee-temperature-humidite-sonoff-snzb-02d.png --alt lcd side of the zigbee Sonoff module {{ page.ref }} --img width="940" height="529" %}

**The display is very readable, even when the surface is reflected by ambient light.**

It includes the configurable temperature in °C or °F, as well as the humidity content of the air expressed in %, but not only:

1. the network pairing light (once paired it will remain visible)
2. battery level
3. humidity or dryness indicator lights (depending on the humidity level)
4. coolness or heat indicators (depending on the temperature)

**TO KNOW:**

The temperature varies in increments of +/- 0.2°
Humidity varies in steps of 2%

{% picture posts/{{ page.guid }}/affichage-info-lcd-module-zigbee-temperature-humidite-sonoff-snzb-02d-suite.png --alt display of info from the zigbee Sonoff module {{ page.ref }} --img width="940" height="529" %}

The assembly can be easily disassembled, you will find a printed circuit board with a **temperature and humidity sensor model SH60 AD1AFU** manufactured by Sensirion, a Swiss company, a Zigbee chip **Silabs EFR32MG22** (identical to the zbmini extreme) and the magnets on the back cover.

> The circuit is well done.

{% picture posts/{{ page.guid }}/module-zigbee-temperature-humidite-sonoff-snzb-02d-circuit-imprime-silabs-efr32mg22.png --alt circuit board of the zigbee module Sonoff {{ page.ref }} zigbee chip Silabs EFR32MG22 --img width="940" height="529" %}

## Compatibility

- **SONOFF:** ZBBridge, ZBBridge-P, iHost, ZBDongle-P, ZBDongle-E
- **Amazon:** Echo Plus 2nd, Echo 4th Gen, Echo Show 2nd

### Integration in ZHA (HomeAssistant)

Integration into ZHA poses no worries and so much the better.

> Inclusion is done by keeping the dedicated button pressed for 5 seconds

{% picture posts/{{ page.guid }}/integration-zha-homeassistant-module-zigbee-temperature-humidite-sonoff-snzb-02d.png --alt integration in ZHA and HomeAssistant with the Zigbee module of the Sonoff zigbee module {{ page.ref }} --img width="940" height="664" %}

### Integration in ZIGBEE2MQTT (HA and Jeedom)

In Zigbee2mqtt same observation

{% picture posts/{{ page.guid }}/integration-zigbee2mqtt-module-zigbee-temperature-humidite-sonoff-snzb-02d.png --alt integration in Zigbee2mqtt with the Zigbee module of the Sonoff zigbee module {{ page.ref }} --img width="940" height="1050" %}

You will note all the same that in Z2M it is easy to calibrate the probes. The temperature probe does not need to be calibrated, **The humidity measurement** must be **compensated by 5 to 6% this calibration** is absolutely necessary. Zigbee2MQTT users can create an offset directly in the UI, under the Settings (specific) menu. ZHA users can create sensor models with the offset.

{% picture posts/{{ page.guid }}/zigbee2mqtt-parametre-supplementaire-module-zigbee-temperature-humidite-sonoff-snzb-02d.png --alt additional parameter of the calibrations in in Zigbee2mqtt with the Zigbee module of the zigbee module Sonoff {{ page.ref }} --img width="940" height="252" %}

### Integration in JEEDOM (zigbee module)

In Jeedom with the zigbee module, the integration is also done without flinching, it's great.

{% picture posts/{{ page.guid }}/integration-jeedom-module-zigbee-temperature-humidite-sonoff-snzb-02d.png --alt integration in Jeedom with the Zigbee module of the Sonoff zigbee module {{ page.ref }} --img width="940" height="437" %}

## Technical characteristics

{% include doclink.html pdf="technical-data-SNZB-02D-V1.0.pdf" title="Données techniques du module Sonoff SNZB-02D" %}
{% include doclink.html pdf="user-guide-Sonoff-SNZB-02D-V1.0.pdf" title="Notice utilisateurs du module Sonoff SNZB-02D" %}

{% picture posts/{{ page.guid }}/Sonoff-SNZB-2D-size-dimension.png --alt Sonoff zigbee module dimension {{ page.ref }} --img width="940" height="441" %}

|Brand|SONOFF|
|------|------|
|Model|SNZB-02D|
|Color|White|
|Battery|CR2450(3V)|
|LCD Dimensions|Diagonal 7.11cm|
|Overall dimensions|59.5x62.5x18.5mm|
|Battery life|2 years|
|Wireless connections|Zigbee 3.0|
|Working humidity|5-95% RH (non-condensing)|
|Working temperature|-5℃~40℃/14℉~140℉|
|Housing materials|PC+LCD|

{% include product-embed.html guid="2171" %}

## **the + of the product** {{ page.ref }}
{: .blue}
- manufacturing quality
- zigbee 3.0 certified
- the many compatibilities
- barely more expensive than a module without screen
- the various supports

## **the - of the product** {{ page.ref }}
{: .red}

- resumption of humidity calibration

{% include product-embed.html guid="2171" %}

## Conclusion

Once again Sonoff signs strongly, even very strongly because this module **costs a little more than 1€ more expensive than its big brother without screen!**, you will find it for less than 12€ at your favorite merchant, in other words that it's a nugget, if you are looking for a module with LCD screen then as much to tell you that the Sonoff {{ page.ref }} is, what you are looking for.

