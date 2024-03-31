---
guid: 98
title: "Test of Sonoff SNZB-01P"
description: "Sonoff SNZB-01P Zigbee 3.0 Smart Scene Button Review"
ref: "SNZB-01P"
layout: post
authors: Nico
date: 2023-11-28 16:07
last_modified_at: 
categories: [Tests, Zigbee]
tags: []
image: 'test-bouton-scene-intelligent-sonoff-snzb-01p.png'
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
rating: 4.3
sourcelink:
  - https://sonoff.tech/product/gateway-and-sensors/snzb-01p/
---

After testing the Sonoff SNZB-02P temperature and humidity sensor a short time ago, it is now time to test the {{ page.ref }} intelligent scene button. **I could have presented both at the same time** but I preferred to do it separately. Following on from what **Sonoff offers, does this push button do the job for the price!**

{% picture posts/{{ page.guid }}/sonoff-snzb-01p-en-photo.png --alt Photos of Sonoff SNZB-01P zigbee 3.0 smart scene button --img width="940" height="529" %}

**Frankly I don't have much negative to say** about this module. Aesthetically the {{ page.ref }} is successful, the integration and the lifespan of the battery is a plus. Equipped with silabs EFR32MG22 zigbee chip, makes the product smaller, mesh and inclusion is no problem for it.

{% include product-embed.html image="https://i0.wp.com/itead.cc/wp-content/uploads/2023/05/SNZB-01P.jpg?fit=1000%2C1000&ssl=1" title="Sonoff Smart Scene Button SNZB-01P" brand="Sonoff" description="Sonoff SNZB-01P zigbee 3-function intelligent scene button" iteadlink="sonoff-zigbee-wireless-switch-snzb-01p" domlink="peripheriques/6733-sonoff-bouton-connecte-sans-fil-zigbee-30-compatible-alexa-snzb-01p.html" affiliate="_DBdcwQL" %}

## Overview of {{ page.ref }}

The **package is simple and clear**. you will find inside the package:
- a {{ page.ref }} sensor (luckily otherwise you've been fooled)
- an orange magnetic steel wall support
- a double sided **3M** for support or live
- a screw for the support
- a **sticker sheet**
- a technical notice

{% picture posts/{{ page.guid }}/contenu-du-bouton-scene-intelligent-sonoff-snzb-01p.png --alt box contents of the Sonoff SNZB-01P zigbee 3.0 intelligent scene button --img width="940" height="529" %}

> J'ai repris une image du fonctionnement du support magnétique déjà présent sur le [SNZB-02P]({% post_url /en/2023-08-20-test-zigbee-sensor-temperature-humidity-sonoff-SNZB-02P %})

{% picture posts/{{ page.guid }}/montage-support-sonoff-snzp-01-magnetisme-zigbee.png --alt Sonoff SNZB-01P zigbee 3.0 intelligent scene button wall bracket mounting --img width="940" height="303" %}

## List of Cognitive articles

- [Test sensor SNZB-02D]({% post_url /en/2023-08-07-test-module-zigbee-sonoff-snzb-02d-temperature-humidity-digital %})
- [Test temp sensor and humidity Sonoff SNZB-02]({% post_url /en/2021-09-10-test-sensor-temperature-and-humidity-sonoff-snzb-02 %})
- [Test temp sensor and humidity Sonoff SNZB-02]({% post_url /en/2023-08-20-test-zigbee-sensor-temperature-humidity-sonoff-SNZB-02P %})
- [Test capteur porte Sonoff SNZB-04]({% post_url /en/2021-09-20-sensor-test-door-zigbee-3-0-sonoff-snzb-04 %})
- [Test interrupteur ZBMINI-L2 Extrême]({% post_url /en/2023-03-06-test-sonoff-zbminil2-extreme-zigbee-end-device %})
- [Test Nspanel Blackymas]({% post_url /en/2023-11-03-nspanel-control-your-home-easily-home-assistant-esphome-blackymas %})
- [Test Nspanel Pro]({% post_url /en/2023-03-10-unboxing-test-and-installation-sonoff-nspanel-pro %})
- [Zbdongle-P vs Zbdongle-E]({% post_url /en/2022-11-20-zb-dongle-p-vs-zb-dongle-e-zigbee-sonoff %})

## liste des compatibilités

La liste de compatibilité du Sonoff {{ page.ref }} est intéressante et large **grâce à la compatibilité Z2M**

- Home assistant
- Jeedom
- Openhab
- Gladys
- Ewelink
- IFTT
- Amazon Alexa

## Compatible avec Zigbee2mqtt

Le produit est efficacement compatible avec ZM je n'ai rencontré aucun soucis d'inclusion. Ce qui le rendra compatible avec les box et systèmes domotiques du moment ( Home assistant, Jeedom, Gladys, etc...)

{% picture posts/{{ page.guid }}/snzb-01p-integration-zigbee2mqtt.png --alt intégration dans Z2M du bouton scene intelligente Sonoff SNZB-01P zigbee 3.0 --img width="940" height="698" %}

### Possible actions of {{ page.ref }}

**3 actions are available** with this button, as is often the case with this type of button:
- single click
- double click
- 5 seconds long click

{% picture posts/{{ page.guid }}/snzb-01p-integration-expose-zigbee2mqtt.png --alt integration into Z2M of the intelligent scene button Sonoff SNZB-01P zigbee 3.0 exposed tab --img width="940" height="348" %}

{% picture posts/{{ page.guid }}/snzb-01p-integration-home-assistant-zigbee2mqtt.png --alt rendering in Home Assistant intelligent scene button Sonoff SNZB-01P zigbee 3.0 --img width="940" height="739" %}

**The reaction time** between the moment you press and the exit reaction is **approximately 1 second**, it is not instantaneous unfortunately, in fact a red light will indicate that the command has been sent .

**Big negative point** the Sonoff {{ page.ref }} is not compatible in direct association, binding (live operation without Zigbe2mqtt and a coordinator) between two modules. It's a shame, especially since the onOff function is available on this switch. Personally I haven't been able to get it to work but maybe someone has. If this is the case, don't hesitate to let me know.

## compatible with ZHA

In ZHA nothing to say either the Sonoff {{ page.ref }} is purely compatible.

The {{ page.ref }} is well compatible with ZHA and Home Assistant, integration is done simply by pressing the inclusion button for 5 seconds

{% picture posts/{{ page.guid }}/prise-en-charge-sonoff-snzb01-p-zha.png --alt support in zha home intelligent scene button assistant Sonoff SNZB-01P zigbee 3.0 --img width="473" height="542" %}

In ZHA on the {{ page.ref }} interface, you cannot clearly see the returns of the three simple, double or long functions. However, these are well recognized, you can test via the Blueprint integration below.

{% picture posts/{{ page.guid }}/integration-snzb-01p-dans-zha-home-assistant.png --alt rendering in home assistant of the intelligent scene button Sonoff SNZB-01P zigbee 3.0 --img width="940" height="665" %}

## Blueprint automation of {{ page.ref }}

To create an automation and use all 3 functions of Sonoff {{ page.ref }}, **just choose between Z2M and ZHA** and click on the link below and configure the entities in function of a press (single, double or long).

### For Zigbee2mqtt

{% include homeassistantlink.html blueprint_import="https://gist.github.com/haade-administrator/1a9c217a3f2cdf0ba149d4f2f186e6d4" %}

### For ZHA

{% include homeassistantlink.html blueprint_import="https://gist.github.com/haade-administrator/85e9ec76c36469806bf47ceb726d6632" %}

## Binding function of {{ page.ref }}

**Unlike its big brother the SNZB-01**, the Sonoff {{ page.ref }} is **not compatible** with the Binding function, at least I haven't managed to get it to work nor in ZHA nor in Zigbee2mqtt. Too bad this function is very useful and allows you to speed up response times between modules.

## **product advantages** {{ page.ref }}
{:.blue}
- manufacturing quality
- zigbee 3.0 certified **EFR32MG22 chip**
- battery life
- battery life
- **the price (around €13)**
- supplied with various stickers
- the many compatibilities
- the various supports

## **the - of the product** {{ page.ref }}
{:.red}

- Binding mode (non-functional binding).

{% picture posts/{{ page.guid }}/taille-bouton-scene-intelligent-sonoff-snzb-01p.png --alt rendering button size intelligent scene Sonoff SNZB-01P zigbee 3.0 --img width="940" height="529" %}

## Characteristics of {{ page.ref }}

|Custom Button Action|you can customize the button actions as you want. Control multiple devices with single tap, double tap and long press.|
|Compatible with Zigbee 3.0|supports Zigbee hubs using the Zigbee 3.0 protocol and theoretically supports adding to any Zigbee hub developed in accordance with Zigbee 3.0 protocols. Like SONOFF NSPanel Pro, ZB Bridge Pro and ZBDongle-E.|
|Trigger Alexa Routines|Trigger Alexa routines by pressing the wireless switch.|
|Emergency Button|SNZB-01P can be used as an emergency button in case of emergency, your family can press the button to send an alert notification to your phone.|
|5 years of battery life|powered by a CR2477 battery. *Battery life data is obtained from SONOFF in-house laboratory, please refer to actual usage.|

### Technical specifications:

|Model|SNZB-01P|
|Wireless connection|ZigBee (IEEE 802.15.4)|
|Battery model|CR2477|
|Working temperature|-10°C-60°C|
|Case Material|PC|
|Net weight|27.8g|
|Product dimensions|45 x 45 x 17.7 mm|

{% include product-embed.html image="https://i0.wp.com/itead.cc/wp-content/uploads/2023/05/SNZB-01P.jpg?fit=1000%2C1000&ssl=1" title="Sonoff Smart Scene Button SNZB-01P" brand="Sonoff" description="Sonoff SNZB-01P zigbee 3-function intelligent scene button" iteadlink="sonoff-zigbee-wireless-switch-snzb-01p" domlink="peripheriques/6733-sonoff-bouton-connecte-sans-fil-zigbee-30-compatible-alexa-snzb-01p.html" affiliate="_DBdcwQL" %}

## Conclusion

**The Sonoff {{page.ref}} is a very well finished product**, which does the job. To compare with its predecessor the SNZB-01 there is no photo the {{ page.ref }} is well in the lead however I have removed points because the {{ page.ref }} does not support the link in direct (binging), while its big brother SNZB-01 supports it, and that's a shame. If the Binding function is not an obligation for you then go ahead and buy this module. **I would like to take advantage of this article to thank Itead for providing me with this little gem.**