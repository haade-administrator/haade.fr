---
guid: 38
title: "Ledvance Smartplug+ Zigbee outdoor socket test"
description: "Testing and unboxing the SMART+ Compact Outdoor Plug | Compact connected outdoor socket to control conventional devices with Zigbee technology"
layout: post
author: Nico
date: 2023-01-05 15:20
last_modified_at: 
categories: [Tests]
tags: []
image: 'external-wire-ledvance-smartplug-plus-zigbee-ip44-4058075729322-prise-externe.png'
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
addViews: 52
comments: true
rating: 3
sourcelink:
  - https://www.ledvance.com/en/tech/products/index?productId=4058075729322&category=141283&documentId=408
  - https://www.benelux.ledvance.com/fr/particuliers/produits/smart-home/smart-home-components/smart-zigbee/composants-exterieurs-smart-avec-technologie-zigbee/prises-smart-avec-technologie-zigbee/prise-exterieure-connectee-compacte-pour-controler-des-appareils-conventionnels-avec-la-technologie-zigbee-c141283?productId=203923
---
Today, I'm going to test and detail a rare Zigbee 3.0 compatible product on the market, that of connected sockets **compatible outdoors**. In France at the time of writing these few lines, it is to my knowledge the [only product available for sale](https://amzn.to/3VU9igT){: target="_blank"}in France. If you are a Belgian national, you can get the [lidl plug](https://www.lidl.be/p/fr-BE/silvercrest-prise-connectee-smart-home-pour-l-exterieur/p100351932){: target="_blank"} for outdoor with consumption measurement and at the price of 22€. *What a lucky bunch!*

{% include product-embed.html image="ledvance-prise-externe-smartplug-4058075729322-shop.png" title="Ledvance outdoor switch zigbee" brand="Ledvance" description="Ledvance outdoor smart plug+ zigbee technology" amazlink="3VU9igT" %}

# For or Against this take

{% picture posts/{{ page.guid }}/prise-eu-german-zigbee-plug-ledvance-femelle.png --alt Outdoor socket Smartplug+ Ledvance quality outdoor socket --img width="840" height="500" %}

**Product Advantage**{: .blue}

- Integrates conventional electrical equipment into compatible smart home systems.
- Allows the switching of conventional light sources and other electrical devices.
- Simple connection of electrical devices via a standard socket.
- Suitable for **outdoor use with IP44**, protection against splashing water.
- Manufacturing quality.
- Physical switch with green light.
- **Zigbee2mqtt compatible**
- Recognized as **router** in the mesh

**Inconvenience**{: .red}

- Absence of consumption statement
- Plug to German Eu Standards (incompatible with EU France standards, an adapter will be needed) or this [type of Legrand 069570 plug](https://amzn.to/3Xb7t0f){: target="_blank"}
- Its price [about 35€ on amazon](https://amzn.to/3VU9igT){: target="_blank"}

{% picture posts/{{ page.guid }}/prise-eu-german-zigbee-plug-ledvance.png --alt Too bad can not be used simply without an adapter --img width="775" height="525" %}


# Features

|Nominal voltage| 230V|
|Admissible power| up to 3680w / 16A|
|Network frequency| 50Hz|
|Protocol| ZigBee 3.0|
|Startup time|< 0.5s|
|Product Weight| 120.00g|
|Diameter| 57.0mm|
|Width| 57.0mm|
|Height| 98.0mm|
|Number of switching cycles| 100000|
|Product color| Anthracite|
|Body Material| Plastic|
|Ambient temperature range| -10°C to +35°C|
|Type of protection| **IP44**|

# Sizes

{% picture posts/{{ page.guid }}/dimensions-size-smartplug-ledvance-4058075729322-prise-externe-zigbee.png --alt Ledvance external socket zigbee dimensions --img width="300" height="207" %}

> In order to make you better aware of it, a small screenshot of the "handling", what puns 😜.

{% picture posts/{{ page.guid }}/taille-prise-en-main-ledvance-smartplug+-externe-4058075729322.png --alt Ledvance smartplug+ external plug grip --img width="775" height="525" %}

# Technical notices

You need the manual or the product sheet, don't hesitate to download it's in French.

{% include doclink.html pdf="notice-technique-smartplug-ledvance-externe.pdf" title="technical notice smartplug + external zigbee socket Ledvance" %}

{% include doclink.html pdf="4058075729322_SMART_ZB_COMPACT_OUTDOOR_PLUG_EU_en.pdf" title="product sheet smartplug + external zigbee socket Ledvance 4058075729322" %}

# Integration [Zigbee2mqtt](https://www.zigbee2mqtt.io/){: target="_blank"}

As often, the integration in Z2M is done without worries and that's good :).

{% picture posts/{{ page.guid }}/integration-into-ledvance-smartplug-exterieur-4058075729322-zigbee2mqtt.png --alt Ledvance external socket zigbee dimensions --img width="493" height="672" %}

# Conclusion

The socket is of good quality, the integration into zigbee2mqtt (therefore Homeassistant and Jeedom compatible) is done without problem, the translucent button is well done, however I put 3 stars because the socket does not meet EU France standards so not usable without an additional plug and that's a shame, personally I still haven't understood why French sockets don't have the same standard.

{% include product-embed.html image="ledvance-prise-externe-smartplug-4058075729322-shop.png" title="Ledvance outdoor switch zigbee" brand="Ledvance" description="Ledvance outdoor smart plug+ zigbee technology" amazlink="3VU9igT" %}

