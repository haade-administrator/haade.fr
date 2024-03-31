---
guid: 114
title: "Test Lixee Zlinky plug'n play teleinfo"
description: "Test of the Zlinky module for the feedback of special linky teleinformation manufactured by Lixee and plug'n play, compatible with all opensource boxes"
ref: "Zlinky_TIC"
layout: post
authors: Nico
date: 2024-03-20 12:00
last_modified_at: 
categories: [Tests, Zigbee, Haade-lab]
tags: []
image: 'lixee-zlinky-tic-teleinformation-linky-france-zigbee-plug-n-play.png'
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
rating: 4.4
sourcelink:
  - https://lixee.fr/produits/37-73-zigate-usb-ttl-3770014375148.html#/27-antenneexterne-non
  - https://www.domadoo.fr/en/smart-home-gateway/5914-lixee-tic-module-to-zigbee-30-for-linky-meter-lixee-zlinky-3770014375148.html
  - https://faire-ca-soi-meme.fr/domotique/2023/09/06/edito-de-la-rentree-2023-2024-part-1/
  - https://github.com/fairecasoimeme/Zlinky_TIC
  - https://www.nxp.com/products/wireless-connectivity/thread/jn5189-88-t-high-performance-and-ultra-low-power-mcus-for-zigbee-and-thread-with-built-in-nfc-option:JN5189_88_T
---

Actuellement il y a de **nombreuses façons de relever la téléinformation**, j'en ai déjà testé quelques unes, aujourd'hui je vais te parler du Lixee, je sais ce que tu te dit, **il vient en retard !** d'autres l'ont déjà fait. Pour ma défense je ne possède pas de Linky, mais depuis **l'arrivée D'august** la donne a changé. Alors Ce fameux {{ page.ref }} est-il à la hauteur ?

{% picture posts/{{ page.guid }}/presentation-lixee-zlinky-tic-teleinformation-linky.png --alt presentation of the zlinky_tic teleinformation module by lixee --img width="940" height="529" %}

**{{ page.ref }} is a device allowing all Linky information to be transmitted in ZigBee 3.0.**
In addition, it is **powered directly by the Linky meter**. An almost Plug'n play function, simply remove the cash (neon yellow) and "plug" the device by pressing the orange button.
Initially, {{ page.ref }} **is waiting for pairing** but if you want to reset the device, simply hold down the "link" button for 10 seconds. Then, when the button is released, **the LED goes out then starts flashing.**
Once paired to your home automation box via a ZiGate or another ZigBee coordinator, you will be able to manage your electricity consumption.

{% include product-embed.html image="lixee-module-tic-vers-zigbee-30-pour-compteur-linky-lixee-zlinky.jpg" title="Lixee Zlinky_TIC" brand="Lixee" description="Monitor your home's consumption via remote information by connecting the zlinky to your linky" domlink="smart-home-gateway/5914-lixee-tic-module-to-zigbee-30-for-linky-meter-lixee-zlinky-3770014375148.html" %}

{% picture posts/{{ page.guid }}/zlinky_tic-v1.6-sous-le-capot.png --alt opening of the teleinformation module zlinky_tic by lixee --img width="940" height="529" %}

A quick disassembly of the case is carried out using the two screws, we feel the **made in France side**, simplistic but functional.

{% picture posts/{{ page.guid }}/lixee-zlinky_tic-circuit-imprime-face-avant-teleinformation-linky.png --alt front face of the printed circuit of the zlinky_tic teleinformation module by lixee --img width="940" height="529" %}

The front of the printed circuit displays the current version of the {{ page.ref }}, you should know that this project saw the light of day last year on the blog [faire-ca-soi-same](https://faire-ca-soi-meme.fr/domotique/2023/09/06/edito-de-la-rentree-2023-2024-part-1/){: target="_blank"}. Almost open source until the Blog representative decided to commercialize it.

{% picture posts/{{ page.guid }}/lixee-zlinky_tic-circuit-imprime-puce-zigbee-nxp-jn5189.png --alt rear side of the printed circuit of the zlinky_tic teleinformation module by lixee with NXP JN5189 chip --img width="940" height="529" %}

What mainly interests us on the rear side is the nature of the Zigbee component, it is a [NXP JN5189](https://www.nxp.com/products/wireless-connectivity/thread/jn5189-88-t-high-performance-and-ultra-low-power-mcus-for-zigbee-and-thread-with-built-in-nfc-option:JN5189_88_T){: target="_blank"}, I had already talked about it in a previous article, these are very high quality chips but which have a higher cost than silabs. In short, you have to ask the question to the creator.

## Limit of {{ page.ref }}
Currently, the device **works with the Linky meter's History and standard mode**.
It allows you to manage all single or three-phase subscriptions and production mode (only in standard mode)

{%- include alert.html type="info" text="historical mode only works with classic subscriptions (BASE, peak/off-peak hours, blue white red). For all special subscriptions (e.g. off-peak hours), it is mandatory to switch the Linky to standard mode." link="https://lixee.fr/produits/37-73-zigate-usb-ttl-3770014375148.html#/27-antenneexterne-non" textlink="More informations of Lixee" %}

## Functions of the Zigbee Linky Lixee ICT Module:

- Zlinky_TIC is powered by the Linky meter terminals.
- It is compatible and complies with the ZigBee 3.0 protocol.
- It currently manages the historical and standard mode with BASE / HCHP / Tempo subscription in Single or Three-phase or Production.

{% picture posts/{{ page.guid }}/lixee-module-tic-vers-zigbee-30-pour-compteur-zlinky-tic.png --alt nomenclatures in images of Lixee zlinky_tic teleinformation for zigbee home automation systems --img width="777" height="502" %}

## Technical characteristics of {{ page.ref }}

|-------------|---------|
|Communication|ZigBee® 2.4Ghz|
|Weight|15g|
|Dimensions|63 x 24 x 16 mm|
|Package Dimensions|110 x 110 x 20mm|
|Operating Temperature|0°C - 60°C|

## {{ page.ref }} compatibility

**Jeedom**
- JeeZigbee plugin (official)
- Zigbee plugin
- zigbeelinker plugin
- Bee plugin

**Home Assistant**
- ZHA integration
- Zigbee2MQTT
- Deconz

**Homey**

**Zigate**

{% include doclink.html pdf="LiXee_Zlinky_TIC.pdf" title="Lixee Zlinky_TIC summary user manual" %}

## Zigbee2mqtt integration

Nothing could be simpler, you **activate the pairing and you connect** the {{ page.ref }} to the linky, if it is a first connection it will automatically be in pairing mode, otherwise press the little button that fits well.

{% picture posts/{{ page.guid }}/lixee-zlinky-zigbee2mqtt-a-propos-remonte-info-home-assistant-teleinfo.png --alt integration into zigbee2mqtt of the lixee teleinformation module Zlinky_TIC about tab --img width="940" height="652" %}

The Lixee {{ page.ref }} is immediately recognized, works in router mode and all the functions are there. The OTA update works, you can find [the firmware on the do-it-yourself github](https://github.com/fairecasoimeme/Zlinky_TIC){: target="_blank"}

{% picture posts/{{ page.guid }}/lixee-zlinky-zigbee2mqtt-expose-home-assistant-teleinfo.png --alt integration into zigbee2mqtt of the lixee teleinformation module Zlinky_TIC exposed tab --img width="940" height="653" %}

In addition to all the functions exposed *(similar in all respects to the ICT modules on the market)*, you will be able to find additional parameters, in the tab dedicated to this purpose available in Z2M.

{% picture posts/{{ page.guid }}/lixee-zlinky-zigbee2mqtt-parametres-specifiques-home-assistant-teleinfo.png --alt integration into zigbee2mqtt of the lixee teleinformation module Zlinky_TIC specific parameters tab --img width="940" height="651" %}

- linky mode
- precision
- rate
- production
- phasing
- etc...

will also be configurable, nothing exceptional **but it has the merit of being complete.**

## Energy Home Assistant

The feedback **Kwh based on base function** is present, you can integrate it directly into the **energy table** of Home Assistant and make consumption more intuitive.

{% picture posts/{{ page.guid }}/lixee-zlinky-tic-information-energie-home-assistant.png --alt intégration dans l'onglet énergie de home assistant du integration into the home assistant energy tab of the lixee Zlinky_TIC teleinformation module specific parameters tabmodule de téléinformation lixee Zlinky_TIC onglet paramètres spécifiques --img width="894" height="481" %}

Here I have put together a presentation map of the different feedbacks from {{ page.ref }} in Home assistant and thus with a simple glance **you will know the consumption of your household.**

{% picture posts/{{ page.guid }}/lixee-zlinky-carte-affichage-home-assistant-teleinfo.png --alt example of displays of energy feedback in home assistant of the lixee teleinformation module Zlinky_TIC specific parameters tab --img width="498" height="355" %}

## **product advantages** {{ page.ref }}
{: .blue}

- Great Linky compatibility
- self-powered
- French project
- easily integrated
- recognized by many modules
- almost plug'n play (z2m, zha, etc.)


## **the - of the product** {{ page.ref }}
{: .red}

- The excessive price (50€)
- some incompatibility issues

{% include product-embed.html image="lixee-module-tic-vers-zigbee-30-pour-compteur-linky-lixee-zlinky.jpg" title="Lixee Zlinky_TIC" brand="Lixee" description="Monitor your home's consumption via remote information by connecting the zlinky to your linky" domlink="smart-home-gateway/5914-lixee-tic-module-to-zigbee-30-for-linky-meter-lixee-zlinky-3770014375148.html" %}

## Conclusion

The {{ page.ref }} is a compliant product **and waf in all respects**, it is a product of **French designs and assemblies**. The integration is **perfect**, the Lixee {{ page.ref }} is compatible with most opensource modules on the market, that's a good point, what makes it **exceptional** is the fact that 'it is **self-powered** by the Linky, but what makes it **less attractive** is its **high price** you will have to count **50€** to obtain the Grail, it's up to you to see if the cost of self-powering will make you take the plunge, [because for all the other functions the competition knows how to do it, and for twice as much.]({% post_url /en/2023-06-06-domotics-linky-µteleinfo-homeassistant-20€-5minutes %})