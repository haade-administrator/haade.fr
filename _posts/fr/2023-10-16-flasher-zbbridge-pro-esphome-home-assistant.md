---
guid: 86
title: "Hack Sonoff Zbbridge-pro et Esphome"
description: "Comment hacker facilement le Sonoff Zbbridge-pro facilement sur Esphome et Home-Assistant et en faire une télécommande Zigbee, wifi et Bluetooth"
ref: "ZBbridge-pro"
layout: post
author: Nico
date: 2023-10-15 20:16
last_modified_at: 
categories: [Haade-lab, Zigbee]
tags: []
image: 'hack-sonoff-zbbridge-pro-esphome-home-assistant-cle-deporte-zigbee-wifi-bluetooth.png'
toc: true
beforetoc: ''
published: false
noindex: false
sitemap:
  changefreq: 'monthly'
  exclude: 'no'
  priority: 0.5 #between 0.0 to 1.0, 1.0 high priority
  lastmod:  # date to end modification
locale: fr_FR
comments: true
rating: 4.0
sourcelink:
  - https://community.home-assistant.io/t/itead-sonoff-zigbee-bridge-pro-zbbridge-p-new-cc2652p-and-esp32-based-zigbee-gateway-to-wifi-bridge/378924/22
  - https://jonasled.dev/jonasled/sonoff-zigbee-bridge-pro-esphome/-/blob/master/zigbee_bridge.yaml?ref_type=heads
  - https://github.com/Giancky79/ZB-Bridge-P
  - https://itead.cc/product/sonoff-zigbee-bridge-pro/ref/122/
---

Il n'est plus à présenter, le Sonoff {{ page.ref }} une box de contrôle de produits exclusivement de la marque Sonoff. Tu trouveras sur internet plusieurs discussions qui te permettront de faire fonctionner le {{ page.ref }} dans Home Assistant, mais, il y a un mais en installant un firmware Tasmota. Après quelques recherches j'ai pu hacker le {{ page.ref }} directement avec un Firmware Esphome et ainsi faire fonctionner la clé Zigbee cc2652 avec ZHA ou Zigbee2mqtt le tout très facilement.

## Prérequis
- Home-assistant installé
- Esphome installé
- Module de [conversion usb uart ft232]({% link _products/{{ page.locale | slice: 0,2 }}/2021-05-19-module-de-conversion-usb-uart-ft232.md %})

## Présentation du {{ page.ref }}

Merci à Itead de m'avoir fournis ce module, tu pourras te rendre compte que ce module dispose d'un emballage tout à fait ordinaire et aux couleurs utilisées par Sonoff.

Pour accéder au circuit imprimé afin de povoir connecter le Ftdi il faudra enlever les 4 mini-pads qui cachent les visses. Ensuite rien de plus simple connecte le ftdi suivant le tableau ci-dessous:

|Sonoff ZB Bridge PRO|FTDI programmer|
|3V3|Vcc/3.3v|
|GND|GND|
|RX|TX|
|TX|RX|
|GPIO00|GND (on power on)|

source:
[Intégration Zbbridge-pro Giancky79](https://github.com/Giancky79/ZB-Bridge-P){: target="_blank"}

{% gist fc18feaca7c75653e816a40dbeea6495 %}

## Configuration ZHA

{% highlight yaml %}
socket://[your_address_ip]:6638
baudrate: 115200
target: sofware

ou 

socket://[devicename.local]:6638 // remplace le device name par le nom de substitution dans mon cas zbbridge
baudrate: 115200
target: software
{% endhighlight %}