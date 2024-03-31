---
guid: 63
title: "Owon THS317-ET remote temperature sensor test"
description: "The Multi-sensor is used to measure the ambient temperature & humidity with built-in sensor and external temperature with remote probe. It is available to detect motion, vibration and allows you to receive notifications from mobile app. The above functions can be customized, please use this guide according to your customized functions."
layout: post
authors: Nico
date: 2023-04-30 18:17
last_modified_at: 
categories: [Tests, Zigbee, Automation]
tags: []
image: 'capteur-temperature-air-fluide-interieur-exterieur-owon-ths317-ET-zigbee.png'
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
addViews: 20
comments: true
rating: 3.8
sourcelink:
  - https://www.owon-smart.com/zigbee-temperature-sensor-with-probe-ths-317-et-product/
---

Given the rainy weather at the moment, I wanted to stay in the same state of mind by presenting to you today a **temperature and fluid sensor with remote probe Owon THS317-ET**, it stands out from the other products in the same range , but it costs 20€ so will it interest you in any case it is one of [the top sellers on domadoo](https://www.domadoo.fr/fr/peripheriques/5998-owon-sonde-de-temperature-deportee-sur-cable-zigbee.html?domid=39){: target="_blank"}, **whom I would like to thank for graciously providing me with this module.**

{% include product-embed.html guid="2158" %}

Owon manufactures **a product range called PIR323** and the THS317 sensor is one of them, this PIR323 range **includes 6 models** and all use the same box but do not have the same functions. This is why this box has a PIR lens and holes on both sides but are not used in the THS317-ET, **this one is only a remote temperature sensor**, but in the range you find PIR sensors, temperature and humidity sensors and even a vibration sensor.

> Download the technical characteristics notice a little further down, you will understand better what I wanted to tell you.

{% picture posts/{{ page.guid }}/presentation-capteur-temperature-Owon-THS317-ET.png --alt presentation of the Owon THS317 temperature sensor --img width="940" height="529" %}

The box is of good quality, I still regret that the connecting wire of the temperature sensor is not more reinforced, especially since it is a temperature sensor for external use.

> I tested it in the water and the feedback seems correct.

Under the hood is a relatively simple printed circuit and Owon has equipped its module with a Zigbee Tuya ZS3L chip. **I would have preferred a CC253X chip here too** in order to be able to modify the Firmware more easily, but currently all manufacturers are turning to Tuya to equip Zigbee modules, certainly it is a question of price.
> The dimensions of the modules are relatively imposing, more than 6cm on each side, which is enormous for this type of product.

{% picture posts/{{ page.guid }}/sous-le-capot-du-capteur-temperature-Owon-THS317-ET.png --alt Zigbee Tuya board and Owon THS317-ET temperature sensor PCB--img width="940" height="529" %}

## Inclusion

The inclusion is done without worries in ** Zigbee2mqtt, ZHA and Jeedom ** however I did not respect the instructions which ** tell me about red and green LED ** after 10 seconds of pressing the reset button . I have never been able to see Led Rouge.
> Certainly that it is activated in case of inclusion errors, in short it is not so serious at this stage.

### Zigbee2mqtt

everything went well the temperature increase did not happen immediately after the integration, apart from that no problems encountered.

{% picture posts/{{ page.guid }}/owon-ths317-et-integration-zigbee2mqtt.png --alt integration with Z2M of the Owon THS317 temperature sensor --img width="940" height="43" %}

{% picture posts/{{ page.guid }}/owon-ths317-et-integration-zigbee2mqtt-a-propos.png --alt product recognized as enddevice  --img width="940" height="709" %}

{% picture posts/{{ page.guid }}/owon-ths317-et-integration-zigbee2mqtt-expose.png --alt module exposure in Z2M --img width="940" height="264" %}

### ZHA integration

On the side of ZHA no worries either, the temperature rise was done correctly, you can see that the precision counts one digit after the decimal point, I regret a precision which could have been made two digits after the decimal point but here I quibble.

{% picture posts/{{ page.guid }}/owon-ths317-et-integration-zha-homeassistant.png --alt integration of the Owon THS317-ET zigbee module in ZHA and homeassistant --img width="940" height="26" %}

{% picture posts/{{ page.guid }}/owon-ths317-et-integration-zha-homeassistant-expose.png --alt module exposure in ZHA --img width="940" height="769" %}

### Jeedom integration

> Finally under jeedom, an integration there also correct, in short, only happiness.

{% picture posts/{{ page.guid }}/owon-ths317-et-integration-zigbee-jeedom.png --alt The ths317-et is well recognized in jeedom --img width="940" height="254" %}

{% picture posts/{{ page.guid }}/owon-ths317-et-integration-zigbee-jeedom-commande.png --alt full integration of the module in Jeedom --img width="940" height="93" %}

Personally **I'll put ZHA in mind for this integration**, the fact that it's integrated directly into Homeassistant is a plus, and yes, if you haven't understood it yet, it's my favorite home automation system.

{% include doclink.html pdf="guide-demarrage-rapide-owon-ths317-et.pdf" title="GOwon THS317-ET Quick Start Guide" %}

{% include doclink.html pdf="caracteristique-technique-pir323-Ths317-et.pdf" title="Technical characteristics of the pir323 sensors of the Owon range including the THS317-ET" %}

## Technical characteristics

|ZigBee|2.4GHz IEEE 802.15.4|
|ZigBee Profile|ZigBee 3.0|
|RF Characteristics|**Operating frequency:** 2.4GHz<br>**Range outdoor:** 100m (open area)<br>Internal PCB Antenna|
|Battery|DC 3V (Two AAA batteries)|
|LED|2-color LED (Red,Green)|
|Temperature|Internal:<br>**Sensing Range:** −10~85°C<br>**Sensing Accuracy:** ±0.5°C<br>Remote probe:<br>**Sensing Range:** −20~100°C<br>**Sensing Accuracy:** ±1°C|
|Reporting Cycle|Temperature/Humidity: 1~5min<br>**PIR & Vibration:**<br>**When triggered:**<br>report immediately<br>**Untriggered:**<br>report once an hour|
|Operating environment|Temperature: -10 ℃ ~ +55 ℃<br>Humidity: ≤ 85% non-condensing|
|Detecting range|**Distance:** 5m<br>**Angle:** up/down 100°, left/right 120°|
|Dimensions|62(L) × 62 (W)× 15.5(H) mm|
|Line length of remote probe:|External temperature: 2.5m|
|Mounting Type|Table top stand or Wall  mounting|

{% include product-embed.html guid="2158" %}

## Conclusion

**Domadoo has decided to market this module in a simple temperature version** for less than 20€, this module stands out thanks to the remote probe for the rest everything is ordinary to say the least, depending on your needs it could suit you perfectly, moreover it is fully compatible with HA and Jeedom.