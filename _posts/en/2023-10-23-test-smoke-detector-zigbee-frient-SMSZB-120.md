---
guid: 87
title: "Frient SMSZB-120 zigbee 3.0 smoke detector review"
description: "test is integration in zha and zigbee2mqtt of the smoke detector module Frient smszb-120 zigbee 3.0"
ref: "SMSZB-120"
layout: post
authors: Nico
date: 2023-10-23 09:22
last_modified_at: 
categories: [Tests, Zigbee]
tags: []
image: 'test-smoke-sensor-frient-zigbee-3-smszb-120.png'
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
  - https://frient.com/products/intelligent-smoke-alarm/
  - https://www.develcoproducts.com/products/sensors-and-alarms/intelligent-smoke-alarm/
  - https://zigbee.blakadder.com/Develco_SMSZB-120.html
  - https://www.domadoo.fr/fr/peripheriques/5409-frient-detecteur-de-fumee-intelligent-zigbee-30-5713594002330.html?domid=39
---

Today I am going to test a very important item for home fire safety. Domadoo graciously lent me this product, the first test of the Frient brand for me.
**We expect this type of article to be simple and reliable** in order to get us out of a bad situation. So does the Frient {{ page.ref }} keep its promises, I will also try to find out if it is compatible with commercial opensource boxes.

{% picture posts/{{ page.guid }}/test-detecteur-fumee-frien-smszb-120-zigbee.png --alt frient smszb-120 zigbee 3.0 smoke detector test --img width="940" height="529" %}

{% include product-embed.html guid="2175" %}

{% picture posts/{{ page.guid }}/presentation-du-detecteur-de-fumee-frient-smszb-120-zigbee.png --alt presentation of the frient smszb-120 zigbee 3.0 smoke detector --img width="940" height="529" %}

In the image a small presentation of the **Frient {{ page.ref }}**, on the front side the module is equipped with a large alarm operation test button, if you click on it a red light will flicker like this a resounding sound. On the lower part, a red illuminated pairing button. The {{ page.ref }} is of very good manufacturing quality, there is no doubt about increased longevity.
> The packaging is well done, the packaging also nothing to complain about.

## What is hidden under the hood of {{ page.ref }}

This product was released in 2020 which explains the integration of a Zigbee CC2530 chip, it has the disadvantage of being immense but it has the advantage of being hackable, well you will tell me it remains a product that is difficult to divert. Regarding the assembly and welding, nothing to complain about.

{% picture posts/{{ page.guid }}/caracteristique-circuit-puce-zigbee-frient-smszb120.png --alt presentation of the cc2530 circuit of the frient smszb-120 zigbee 3.0 smoke detector --img width="940" height="529" %}

## Inclusion Zigbee operating mode

during the **first inclusion**, simply plug in the battery, the module will start flashing
If you need to do a **reset of the module** you have to hold down for about 15 seconds until it starts flashing constantly:
- after 5 seconds flashes every second
- 5 seconds later flashes 2 times per second
- 5 seconds later flashes several times
- release the red dot remains fixed for 1 second
- the Frient {{ page.ref }} is reset.

## Compatibility

- Zigbee2mqtt
- deconz
- zigbee Domoticz
- **zigbee Jeedom**
-Homey
- Homely
- Smartthings
-Eva
-futurehome
-Nimly
- Hubitat

## Inclusion in ZHA

The inclusion is done without difficulty in ZHA under Home Assistant, but no commands come up despite several attempts, the Frient {{ page.ref }} remains unusable in this configuration.

{% picture posts/{{ page.guid }}/integration-frient-smszb-120-zha-home-assistant-integration.png --alt integration into ZHA of the frient smszb-120 zigbee 3.0 smoke detector --img width="940" height="717" %}

After an attempt at **reconfiguration the commands still do not come up**, contrary to what Blackadder announces, the module does not work in ZHA

{% picture posts/{{ page.guid }}/reconfiguration-frient-smszb-120-zha-home-assistant-integration.png --alt reconfiguration in zha of the smoke detector frient smszb-120 zigbee 3.0 --img width="610" height="949" %}

## Inclusion in Zigbee2mqtt

> As is often the case and so much the better, the integration of Frient {{ page.ref }} into Z2M was very easy.

{% picture posts/{{ page.guid }}/integration-frient-smszb-120-zigbee2mqtt-home-assistant.png --alt integration into z2m of the frient smszb-120 zigbee 3.0 smoke detector --img width="940" height="41" %}

All the information comes back perfectly, you will need to leave a few seconds for the synchronization of the orders. In addition, between pressing a command and the action, one or two seconds can pass.

{% picture posts/{{ page.guid }}/integration-frient-smszb-120-zigbee2mqtt-home-assistant-a-propos.png --alt about page in z2m of the frient smszb-120 zigbee 3.0 smoke detector --img width="922" height="754" %}

As you can see in the next two images, the Frient {{ page.ref }} smoke detector module allows you to:

- measure the room temperature
- see battery level
- binary smoke detection
- empty battery detection
- device test indication (by pressing the large front button)
- setting the duration of the siren
- manual alarm start
- indication of the reason for a defect
- measurement of a malfunction
- measures the quality of the zigbee signal

> Here are 10 functions for this module in z2m, pretty good!

{% picture posts/{{ page.guid }}/integration-frient-smszb-120-zigbee2mqtt-home-assistant-expose.png --alt page exposed in z2m of the smoke detector frient smszb-120 zigbee 3.0 --img width="940" height="533" %}

**Perfect integration of Frient {{ page.ref }} in zigbee2mqtt.**

{% picture posts/{{ page.guid }}/integration-frient-smszb-120-zigbee2mqtt-home-assistant-integration.png --alt final integration into z2m of the frient smszb-120 zigbee 3.0 smoke detector --img width="940" height="837" %}

## Characteristics {{ page.ref }}

{% picture posts/{{ page.guid }}/smoke-sensor-size-ffrient-smszb-120.png --alt dimension of the frient smszb-120 zigbee 3.0 smoke detector --img width="622" height="350" %}

**General**
- Dimensions: Ø65 x 40 mm
- Weight: 80.3 g (with packaging: 111.7 g)
- White color
**Power source**
- Battery: 1 x CR123, exchangeable
- Battery life: **3 years, report every 5 minutes**
- Battery level and low battery warning can be reported
**Radio features**
- Sensitivity: -92 dBm
- Output power: Typ. +4 dBm
**Environment**
- IP class: IP20
- Operating temperature: 0 to +50°C
- Relative humidity 10-95% non-condensing
**Smoke Sensor Specifications**
- Optics
- Siren output 85 dB/3m
**Temperature sensor specifications**
- Range: 0 to +50°C
- Resolution: 0.1°C (Typ precision ±0.5°C and Max ±2°C)
- Sampling time: config. : 2 s -65,000 s
- Reports: configurable
**Communication**
- Wireless protocol
- Zigbee home automation
- Zigbee end device
**Certifications**
- Complies with CE, RED and RoHS directives
- **DIN EN 14604 and DIN 14676 certified**
- Zigbee 3.0 certified

## Documents {{ page.ref }}

{% include doclink.html pdf="h6500160-intelligent-smoke-alarm-installation-manual-v16.pdf" title="Frient smszb-120 smoke sensor installation guide" %}
{% include doclink.html pdf="h6500185-intelligent-smoke-alarm-multilingual-installation-manual-v16.pdf" title="Multilingual instructions for the Frient smszb-120 module" %}


## **product advantages** {{ page.ref }}
{: .blue}

- manufacturing quality
- Huge compatibility
- the number of functions available
- A Duracel battery
- Reduced size
- A successful design
- Battery life of 3 years


## **the - of the product** {{ page.ref }}
{: .red}

- The price (around €50)
- the zigbee cc2530 chip
- Incompatible with ZHA
- the choice of an expensive CR123 battery

{% include product-embed.html guid="2175" %}

## Conclusion

The Frient Smoke sensor module {{ page.ref }} **is of very good quality**, the functionalities are there however it remains expensive compared to a Xiaomi Honeywell module or a Heiman detector. **And this for the same operating characteristics**. However, if aesthetics are important to you then this module is made for you!