---
guid: 59
title: "Test Xiaomi Aqara dlkzmk12lm - SSM-U02"
description: "Nouveau venu sur le marché xiaomimi présente son micro module T1 sans neutre SSM-U02 et compatible zigbee 3.0"
layout: post
author: Nico
date: 2023-04-05 18:14
last_modified_at: 
categories: [Zigbee, Tests]
tags: [post]
image: 'xiaomi-aqara-module-sans-neutre-dlkzmk12lm-zigbee-3.png'
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
rating:  
sourcelink:
  - 
---

Le monde des modules sans neutre dit enddevice ne cesse d'accroître sur le marché, Xiaomi présente un Module similaire avec antenne externe et quelques fonctions des plus ympathiques, Mais ce module sera-t-il à la hauteur face à la concurrence de plus en plus rude ?

Ce module est vendu pas loin de 25-30€ plus du double du prix de la conccurence ke pense au ZbminiL2 de Sonoff, d'ailleurs tu peux comparer la différence de taille entre les deux modules ci-dessous

{% picture posts/{{ page.guid }}/xiaomi-aqara-single-switch-module-no-neutral-dlkzmk12lm.png --alt module Xiaomi single switch sans neutre SSM-U02 --img width="940" height="529" %}

# Caractéristiques
|Alimentation|100 - 250VAC, 50/60Hz|
|Charge maximale|5A (1250W)|
|Humidité de fonctionnement|0-95% HR|
|Température ambiante|0 °C à 35 °C|
|Communication|ZigBee 3.0|
|Distance de communication effective|30 m (à l'intérieur)|
|Dimensions|42,9 × 40 × 21,4mm|
|Poids|40g|

# Intégration dans ZHA

L'intégration dans ZHA ne s'est pas fait sans mal, malgré l'antenne externe j'ai du m'y reprendre à plusieurs fois avant de réussir à intégrer le module, une fois intégré et le module réveillé je me rend compte que la sonde du thermomètre interne ne fonctionne pas sous ZHA, certainement une erreur due au programme.

{% picture posts/{{ page.guid }}/module-xiaomi-aqara-SSM-U02-avec-ZHA-dans-homeassistant.png --alt module Xiaomi single switch sans neutre SSM-U02 intégration ZHA --img width="940" height="864" %}

# Intégration avec Zigbee2mqtt

Avec Zigbee2mqtt ça ne rigole pas le module T1 par Aqara remonte:
- l'état On/Off (normal)
- la position après coupure de courant
- choix entre toogle et switch
- le nombre de coupure de courant
- la température

{% picture posts/{{ page.guid }}/module-xiaomi-aqara-SSM-U02-avec-Zigbee2mqtt-dans-homeassistant.png --alt module Xiaomi single switch sans neutre SSM-U02 intégration Zigbee2mqtt --img width="940" height="552" %}

{% picture posts/{{ page.guid }}/module-xiaomi-aqara-SSM-U02-avec-Z2M-dans-homeassistant-onglet-expose.png --alt module Xiaomi single switch sans neutre SSM-U02 intégration Z2M onglet expose --img width="940" height="475" %}

# Intégration Dans Jeedom avec le module Zigbee

{% picture posts/{{ page.guid }}/Intégration-aqara-SSM-U02-avec-Jeedom.png --alt module Xiaomi single switch sans neutre SSM-U02 intégration Jeedom Zigbee --img width="796" height="402" %}

{% picture posts/{{ page.guid }}/Intégration-aqara-SSM-U02-avec-Jeedom-option-commande.png --alt module Xiaomi single switch sans neutre SSM-U02 intégration Jeedom zigbee options commandes --img width="715" height="288" %}

{% include doclink.html pdf="Single Switch Module T1 SSM-U02(No Neutral) manual.pdf" title="Manuel d'utilisation Xiaomi Aqara T1" %}
