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

## Injection du code Esphome
Commence par connecter le {{ page.ref }} en usb à l'aide d'un module Uart/ftdi. Pour accéder au circuit imprimé afin de pouvoir connecter le Ftdi il faudra enlever les 4 mini-pads qui cachent les visses. Ensuite rien de plus simple connecte le ftdi suivant le tableau ci-dessous:

|Sonoff ZB Bridge PRO|FTDI programmer|
|3V3|Vcc/3.3v|
|GND|GND|
|RX|TX|
|TX|RX|
|GPIO00|GND (on power on)|

Ensuite crée un nouveau device dans l'onglet esphome ( attention le nom du module devicename doit être tout attaché sans trait d'union ) et colle le code ci-dessous en adaptant les mots de passe. 

{% gist fc18feaca7c75653e816a40dbeea6495 %}

Le gist ne s'est pas fait tout seul je me suis inspiré du dépôt Github source:
[Intégration Zbbridge-pro Giancky79](https://github.com/Giancky79/ZB-Bridge-P){: target="_blank"}

Il ne te reste plus qu'à valider le code et à pousser le tout sur le Sonoff {{ page.ref }}.

Une fois uploadé dernière étape d'intégration Esphome, rendez-vous dans les applications et configure ton devive esphome, clic sur le lien ci-dessous

{% include homeassistantlink.html integrations="" %}

Rendu du module dans esphome:

{% picture posts/{{ page.guid }}/integration-sonoff-zbbridge-pro-esphome-commande.png --alt rendu de la passerelle Sonoff {{ page.ref }} dans esphome --img width="940" height="948" %}

Quelles sont les infos qui remontent dans esphome:
- zb_bridge_pro_fw_update ( switch d'intégration de la clé zigbee utile pour ZHA )
- zb_bridge_pro_uptime_readable (temps de lecture)
- température interne
- adresse ip
- adress mac
- le voltage de la batterie interne

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

![Méthode de connection et de fonctionnement de la clé cc2652 zigbee du zbbridge-pro dans ZHA]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/integration-zha-zigbee-esphome-zbbridge-pro.webp{{ cachebuster }}){: width="720" height="384"}

## Configuration zigbee2mqtt

Va dans le fichier configuration.yaml du dossier zigbee2mqtt et modifie les lignes suivante:

{% highlight yaml %}
serial:
  port: tcp://[your_address_ip]:6638
  adapter: auto
{% endhighlight %}

## Documents Sonoff {{ page.ref }}
{% include doclink.html pdf="ZB-Bridge-pro-specification-product.pdf" title="Spécifications produits Sonoff {{page.ref}}" %}
{% include doclink.html pdf="ZB-Bridge-Pro-quick-install.pdf" title="Guide rapide Sonoff {{ page.ref }}" %}
{% include doclink.html pdf="ZB-Bridge-Pro-user-manual.pdf" title="Manuel complet Sonoff {{ page.ref }}" %}