---
guid: 65
title: "Cube Aqara T1 Pro review"
description: "test of the Aqara multifunction t1 pro cube and full integration with zigbee2mqtt and Zha, an essential for home automation and impeccable quality for Aqara"
layout: post
authors: Nico
date: 2023-05-14 18:41
last_modified_at: 
categories: [Tests, Zigbee, Automation]
tags: []
image: 'test-et-foctionnement-cube-t1-pro-aqara-zigbee-CTP-R01.png'
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
addViews: 4
comments: true
rating: 5.0
sourcelink:
  - https://www.aqara.com/eu/product/cube-t1-pro
  - https://www.domadoo.fr/fr/peripheriques/6413-aqara-controleur-intelligent-zigbee-30-aqara-cube-t1-pro-6970504217614.html?domid=39
  - https://www.nxp.com/products/wireless/thread/jn5189-88-t-high-performance-and-ultra-low-power-mcus-for-zigbee-and-thread-with-built-in-nfc-option:JN5189_88_T
---

**test of the Aqara multifunction t1 pro cube and full integration with Zigbee2mqtt and Zha**, an essential for home automation and *impeccable quality* for Aqara. **This Cube T1 Pro controller is simply amazing**, similar to its predecessor, the Cube T1 Pro recognizes different actions such as **push, shake, rotate, flip and tap**. A new scene mode is added, and when the mode is activated, the cube also recognizes different sides. So users can simply use each side to control various scenes and devices. Dice-shaped indicators are printed on the sides to help users distinguish them from each other. Thanks to Domadoo for allowing me to carry out this test/tutorial. 👍

{% include product-embed.html guid="2159" %}

## Déballage

{% picture posts/{{page.guid}}/deballage-aqara-cube-t1-pro-zigbee.png --alt unboxing cube t1 pro Aqara --img width="940" height="529" %}

**As usual, Aqara cares about the quality of packaging and products**, the T1 pro cube is no exception to this standard. Cardboard box and product description signed in Aqara blue, you will find a cube carefully packaged and well protected accompanied by a complete descriptive notice and a key allowing you to open the cube and thus access the initialization switch and the Panasonic brand and reference CR2450 folds with **a 2-year functional warranty**.

### Functions

- Battery powered
- Small size and lightweight, easy to use
- HomeKit support
- **10 actions** in scene mode
- Original cube classic mode
- Support IFTTT and Alexa
 
### Features

|Power|CR2450 battery|
|Wireless protocol|Zigbee|
|Zigbee operating frequency|2400-2483.5 MHz|
|Zigbee maximum output power ≤ 13 dBm|
|Operating temperature|-10°C ~ 50°C (14°F ~ 122°F)|
|Operating humidity|≤ 95% RH, non-condensing|
|Dimensions|4.5 x 4.5 x 4.5 cm|
|Weight|76 grams|

### Technical manual

{% include doclink.html pdf="notice-technique-cube-t1-pro-aqara.pdf" title="Aqara Cube T1 Pro technical manual" %}

## Under the hood of the Cube T1 Pro Aqara

{% picture posts/{{page.guid}}/ouverture-du-cube-t1-pro-fabrication-du-module.png --alt opening of cube t1 pro Aqara --img width="940" height="529" %}

The assembly of the elements is of high quality, the printed circuit is very well made, the zigbee chip is fully integrated into the circuit

{% picture posts/{{page.guid}}/circuit-imprime-cube-t1-pro-aqara.png --alt circuit board of cube t1 pro Aqara--img width="940" height="529" %}

> Xiaomi has decided to integrate the NXP JN5189 zigbee chip based on ARM Cortex-M4 into its circuits, it's a good thing, the choice not to choose a Tuya chip like many other manufacturers is in my opinion a good thing thing.

It is relatively easy to flash this type of chips.

[Features zigbee NXP JN5189 chip](https://www.nxp.com/products/wireless/thread/jn5189-88-t-high-performance-and-ultra-low-power-mcus-for-zigbee-and-thread-with-built-in-nfc-option:JN5189_88_T){: target="_blank"}


## **the + of the product**
{: .blue}
- the price
- manufacturing quality
- the number of orders that can be associated
- OTA update support

## **the - of the product**
{: .red}

- integration can be complex for novices
- it is not possible to use scene and action modes at the same time


## Zigbee2mqtt

### Integration of the T1 Pro Aqara cube in Z2M

{% picture posts/{{page.guid}}/integration-aqara-cube-t1pro-zigbee2mqtt.png --alt integration in Z2M of the t1 pro Aqara cube --img width="940" height="38" %}

The Cube T1 pro is perfectly recognized in Zigbee2mqtt, a good point for recognition in assistants such as Homeassistant, Jeedom and Gladys, to name a few!

{% picture posts/{{page.guid}}/integration-aqara-cube-t1pro-zigbee2mqtt-a-propos.png --alt about zigbee2mqtt cube t1 pro Aqara --img width="940" height="701" %}

The T1 pro cube is fully recognized in Zigbee2mqtt and 100% functional.

{% picture posts/{{page.guid}}/integration-aqara-cube-t1pro-zigbee2mqtt-expose.png --alt z2m exposes cube t1 pro Aqara --img width="940" height="701" %}

### Blueprint operation by Sir_Goodenough for Zigbee2mqtt

By following the very well documented discussion link below you can easily use all the functions of the cube T Pro, thanks to Sir_Goodenough.

[Blueprint discussion link by Sir_Goodenough](https://community.home-assistant.io/t/zigbee2mqtt-aqara-magic-cube-t1-pro-ctp-r01-xiaomi-lumi-cagl02/525111){: target="_blank"}

{% include homeassistantlink.html blueprint_import="https://github.com/SirGoodenough/HA_Blueprints/blob/master/Automations/Zigbee2MQTT-Aqara-Magic-Cube-T1-Pro-CTP-R01-Xiaomi-Lumi.yaml" %}

## ZHA

### Aqara T1 Pro Cube Integration

In Zha the integration is also done without any worries, you just have to keep pressing for 5 seconds

{% picture posts/{{page.guid}}/integration-aqara-cube-t1pro-zha.png --alt integration in ZHA and Homeassistant of the cube t1 pro Aqara --img width="940" height="29" %}

The exposure of the functions in ZHA turns out to be longer, for example you will be able to see that the info is not uploaded after the integration, however the rotation was done without any problems look at the info logs?

{% picture posts/{{page.guid}}/integration-aqara-cube-t1pro-zha-expose.png --alt recognition in ZHA of the t1 pro Aqara cube --img width="940" height="685" %}

## operation of the Blueprint 128 actions for ZHA

Here too I use the Blueprint provided by Sir_Goodenough and very well documented on the community, the functions are largely automated and functional, a good point for Blueprint and Homeassistant.

[Blueprint discussion link by Sir_Goodenough](https://community.home-assistant.io/t/zha-xiaomi-cube-controller/495975){: target="_blank"}

{% include homeassistantlink.html blueprint_import="https://github.com/SirGoodenough/HA_Blueprints/blob/master/Automations/ZHA-Xiaomi_Cube_Controller.yaml" %}

### Create a number for the blueprint

![Create a number in Homeassistant to create the 6 faces of the cube]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/creer-nombre-ha-cube-t1-pro.webp{{ cachebuster }}){: width="820" height="409" class="lazyload pictaninpost"}{: target="_blank"}

## Conclusion integration

> For this integration Zigbee2mqtt comes out with flying colors against ZHA

{% include product-embed.html guid="2159" %}

## Conclusion

Aqara Cube T1 Pro is a user-friendly smart remote control with many functions, ideal for controlling many actions in the home.
> so well done that you will quickly find it essential