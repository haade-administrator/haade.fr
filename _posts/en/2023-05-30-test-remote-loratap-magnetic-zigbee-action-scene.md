---
guid: 67
title: "Loratap 4 button Zigbee remote control"
description: "Testing Loratap SS9400ZB-YA magnetic remote control compatible zigbee 3.0 wireless for stage, action, switch"
layout: post
authors: Nico
date: 2023-05-30 20:29
last_modified_at: 
categories: [Tests, Zigbee, Haade-lab]
tags: []
image: 'remote-control-zigbee-loratap-magnetic-4-keys.png'
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
  - https://www.loratap.com/collections/zigbee-remote
  - https://www.domadoo.fr/peripheriques/6040-loratap-interrupteur-mural-de-scene-sans-fil-zigbee-30-4-boutons.html?domid=39
  - https://www.zigbee2mqtt.io/devices/TS0044.html
  - https://zigbee.blakadder.com/LoraTap_SS9400ZB-YA.html
---

First of all **I wanted to thank** [Domadoo](https://www.domadoo.fr/peripheriques/6040-loratap-interrupteur-mural-de-scene-sans-fil-zigbee-30-4-boutons.html?domid=39){: target="_blank" } for providing me with the LoraTap SS9400ZB-YA wireless magnetic 4-key remote control module. It is one of those modules that make home automation [WAF](https://en.wikipedia.org/wiki/Wife_acceptance_factor){: target="_blank" }, by facilitating access to actions and scenes.

I tested the remote control with zigbee2mqtt and Zha in the homeassistant and with Zigbee in Jeedom, you will find integration feedback a little lower.

## Gear

**Frankly nothing to complain about**, the remote control is supplied **with screws and dowels** to install the wall bracket, a screwdriver is even provided (it is not used to fix the bracket, but to open the rear part to access to the stack).
A brief technical notice accompanies it, all in a rigid and small box.

{% picture posts/{{page.guid}}/loratap-telecommande-ts044-SS9400ZB-YA-demontage-complet.png --alt remote control SS9400ZB-YA zigbee 3.0 loratap 4 buttons wireless complete disassembly --img width="940" height="529" %}

Where this remote control stands out is its ergonomics, **you can use it at the same time as a wall-mounted and nomadic remote control thanks to this magnetic support**, which is very well made.

{% picture posts/{{page.guid}}/telecommande-zigbee-loratap-test-magnetique-4-touches.png --alt remote control SS9400ZB-YA zigbee 3.0 loratap 4 buttons magnet test --img width="940" height="529" %}

On **the image** below you will be able to see **the size** a dimension of 80x80, which is quite impressive, *but not too much to spoil everything*, I ended up completely dismantling the module to see what was hiding underneath.

> In fact, not much, a relatively basic printed circuit, good, no need for more

LoraTap decided to integrate a **Tuya ZS3L chip**, it must be said but I repeat myself, it is a chip which is more and more common, because it is inexpensive.

{% picture posts/{{page.guid}}/telecommande-zigbee-loratap-4-boutons-actions-scenes-taille-tuya.png --alt remote control SS9400ZB-YA zigbee 3.0 loratap 4 buttons wireless cr2032 scenes and actions --img width="940" height="529" %}

## Technical part

**the mode of inclusion** is done **by pressing 7 seconds** on one of the keys, the orange light remains fixed for 4 seconds, then goes out and starts flashing at the 7th second

**In addition to the 4 keys, this remote control allows you to call an action by:**
- short press: the orange light flashes once
- double press: the orange light flashes twice
- long press: the light remains fixed for 4 seconds after it goes out.

So if you choose this remote **you can control 12 different actions or scenes** and *that's a great point*.

**Another positive point is the price, less than 15€ at Domadoo**

{% include product-embed.html guid="2160" %}

## Compatibility

Currently it is officially (according to Loratap) compatible:
- Homeassistant by Zigbee2mqtt
-Tuya
- Smart life

But it is also because tested by me see below, compatible with
- Jeedom by the Zigbee module or Zigbee2mqtt
- Zha with Homeassistant

## **the + of the product**
{: .blue}
- the price
- manufacturing quality
- the number of orders that can be associated **i.e. 12**
- it is possible to use scene and action modes at the same time
- wall-mounted and nomadic

## **the - of the product**
{: .red}
- laborious Jeedom integration
- chinese brand cr2032 battery
- Zigbee ZS3L chip from the manufacturer TUYA

## Integration in Zigbee2mqtt

Integration in Zigbee2mqtt is very simple

{% picture posts/{{page.guid}}/integration-loratap-telecommande-ts044-zigbee-zigbee2mqtt.png --alt remote control SS9400ZB-YA zigbee 3.0 loratap 4 buttons in zigbee2mqtt --img width="940" height="39" %}

It is recognized as the Loratap SS6400 remote control which has similar characteristics because both are listed as model **Tuya TS0044**.

{% picture posts/{{page.guid}}/integration-loratap-telecommande-ts044-zigbee-zigbee2mqtt-a-propos.png --alt remote control SS9400ZB-YA zigbee 3.0 loratap 4 buttons in zigbee2mqtt about recognized as SS6400 module --img width="940" height="745" %}

The exhibition in Z2M is very basic with 3 entries:
- battery
- button actions
- the quality of the link.

{% picture posts/{{page.guid}}/integration-loratap-telecommande-ts044-zigbee-zigbee2mqtt-expose.png --alt remote control SS9400ZB-YA zigbee 3.0 loratap 4 buttons in zigbee2mqtt commands show --img width="940" height="273" %}

**Here is the most interesting part** how does it work as a device with Z2M and homeassistant:

There is an action sensor, which will briefly show the action performed. You can see in the log that the actions are well recognized:
- simple support
- double support
- long press (not present on the capture but functional)

{% picture posts/{{page.guid}}/integration-loratap-telecommande-ts044-homeassistant.png --alt remote control SS9400ZB-YA zigbee 3.0 loratap 4 buttons in homeassistant integrated device with z2m --img width="940" height="677" %}

## Integration in ZHA

In ZHA no integration problems, the remote control is as for Zigbee2mqtt recognized as Tuya TS044

{% picture posts/{{page.guid}}/integration-loratap-telecommande-ts044-zha-homeassistant.png --alt remote control SS9400ZB-YA zigbee 3.0 loratap 4 buttons in zha under homeassistant --img width="940" height="28" %}

On the other hand, no action sensors instead of 4 battery diagnostic entities.

> So negative point for ZHA integration instead we should see action sensors named from 1 to 4 for example.

**On the other hand, the newspaper goes back well to the actions:**
- simple support
- double support
- long press (not present on the capture but functional)

{% picture posts/{{page.guid}}/integration-loratap-telecommande-ts044-zha-homeassistant-avec-actions.png
--alt remote control SS9400ZB-YA zigbee 3.0 loratap 4 buttons in zha under homeassistant device view --img width="940" height="492" %}

## Integration in Jeedom

In Jeedom the integration was done without worries with the Zigbee module, here too the remote control is recognized as Tuya TS044

{% picture posts/{{page.guid}}/integration-loratap-telecommande-ts044-SS9400ZB-YA-jeedom-zigbee.png
--alt remote control SS9400ZB-YA zigbee 3.0 loratap 4 buttons in jeedom with the zigbee module --img width="940" height="263" %}

On the other hand **I did not manage to see if the 3 types of actions are functional** namely:
- simple support
- double support
- long press (not present on the capture but functional)

> It must be said that the Jeedom interface is not the clearest on this point.

{% picture posts/{{page.guid}}/integration-loratap-telecommande-ts044-SS9400ZB-YA-jeedom-zigbee-commande.png
--alt remote control SS9400ZB-YA zigbee 3.0 loratap 4 buttons in jeedom with the zigbee module view of the commands --img width="940" height="170" %}

**Domadoo advises against using this product in Jeedom (overconsumption of batteries etc...)**{: .red}
**it seems under Luna at least that it is resolved**. just update the latest firmware of the built-in chip.

 
## Features

|Color|White|
|Wireless Protocol|Tuya Zigbee 3.0|
|Control distance|10 meters around the Tuya ZigBee Hub|
|Dimensions|80mm*80mm*12mm|
|Battery type|CR2032 battery (included in box)|
|Patent Design|Yes|

{% include product-embed.html guid="2160" %}

## Conclusion

The variants of this remote control are numerous, ** available from 1 to 6 keys ** for the new models. **It's a module that you can buy with your eyes closed**, the product stands out for its magnetic support. And big important point you benefit from 12 commands in total for the 4-key version. For the integration **I advise you to go through the Zigbee2mqtt module**.
