---
guid: 27
title: "Domotiser simplement l'allumage de la lumière de la piscine"
description: "Ewelink propose un module à 11€ avec puce zigbee qui nous permet de domotiser la lumière traditionnelle d'une piscine"
layout: post
author: Nico
date: 2022-11-07 22:00
last_modified_at: 
categories: [Domotique, Haade-lab, Home-Assistant]
tags: []
image: 'domotiser-lumière-piscine-traditionnelle-zigbee-ewelink.jpg'
toc: true
beforetoc: ''
published: true
noindex: false
sitemap:
  changefreq: 'monthly'
  exclude: 'no'
  priority: 0.5 #between 0.0 to 1.0, 1.0 high priority
  lastmod:  # date to end modification
locale: fr_FR
comments: true
rating:  
---

## Intro

{% include product-embed.html image="1-600x600.jpg" title="Module relais 1 zigbee 7-32v" brand="Ewelink" description="Module 1 relais zigbee eweling pour domotiser moteur ou lumière 7-32v" affiliate="_DEAPYLZ" %}

Présentation d'un petit module à 7€ qui sans le rappeler fait penser à un petit [tuto de domotisation d'une porte de garage pour 5€]({% post_url /fr/2021-05-19-domotiser-sa-porte-de-garage-pour-5€ %}).
La grande nouveauté de cet article c'est le fait que Ewelink produise un module équivalent intégrant le protocole Zigbee 3.0 et en plus ils embarquent le RF 433 Mhz dispo à la vente avec une télécommande pour ceux qui le désirent.

## Prérequis
- Une piscine avec une ampoule traditionnelle ( donc une vieille piscine 🤪 )
- Une box domotique sous home-assistant
- le module Zigbee2mqtt intégré à HA
- Un module Ewelink simple relais dispo ici.
- toucher un minimum en éléctricité.

## l'avantage du module

Grâce à son large spectre d'alimentation usb 5v et 7-32v
on peut domotiser facilement tout ce qui est commandé par moteur électrique dans la maison
- moteur de portail
- porte de garage
- lumière de piscine
- etc...

On peut le commander sans hub domotique grâce à la fréquence radio et à la télécommande ( en option )

## Schéma des connectiques

- Relais AC-DC 30v-230v
- alimentation micro usb 5v
- alimentation filaire 7-32v
- bouton-switch manuel
- bouton d'appairage
- led de fonctionnement et du relais
- antenne RF-433Mhz

{% picture posts/{{ page.guid }}/detail-relais-ewelink-zigbee.jpg --alt détail relais ewelink zigbee --img width="820" height="820" %}

## Reconnaissance dans Zigbee2mqtt

Le module est reconnu comme interrupteur ewelink zb-sw01 et entièrement fonctionnel, il est d'ailleurs compatible avec **Zha, domoticz, jeedom, Tasmota et Deconz**, autant vous dire que vous pouvez foncer, d'ailleurs vous pouvez aussi vous orienter vers cet interrupteur au cas ou le module relais ne serait pas disponible.

{% picture posts/{{ page.guid }}/zb-sw01-domotiser-lumière-piscine.png --alt reconnaissance du relais dans zigbee2mqtt ewelink --img width="939" height="686" %}

[Lien de compatibilité Blakkader](https://zigbee.blakadder.com/eWeLink_ZB-SW015.html){: target="_blank"}

## Photo mise en place

{% picture posts/{{ page.guid }}/integration-module-lumière-piscine-traditionnelle-zigbee-homeassistant-ewelink.png --alt integration du module dans un boitier ip44 --img width="940" height="529" %}

En suivant le schéma un peut plus haut il sera facile de brancher en parallèle sur le circuit de lumière.

## Conclusion
Voilà un module zigbee à ne pas manquer pour domotiser tout ce qui fonctionne entre 7 et 32v comme les lumières de piscines, moteur de porte de garage, moteur de portail etc, et le tout en **ZIGBEE!**{: .red}

{% include product-embed.html image="1-600x600.jpg" title="Module relais 1 zigbee 7-32v" brand="Ewelink" description="Module 1 relais zigbee eweling pour domotiser moteur ou lumière 7-32v" affiliate="_DEAPYLZ" %}
