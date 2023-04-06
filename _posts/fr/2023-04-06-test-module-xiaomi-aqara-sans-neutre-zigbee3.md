---
guid: 59
title: "Test Xiaomi Aqara T1 dlkzmk12lm - SSM-U02"
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
published: true
noindex: false
sitemap:
  changefreq: 'monthly'
  exclude: 'no'
  priority: 0.5 #between 0.0 to 1.0, 1.0 high priority
  lastmod:  # date to end modification
locale: fr_FR
comments: true
rating: 4.1
sourcelink:
---

Le monde des modules sans neutre dit enddevice ne cesse d'accroître sur le marché, Xiaomi présente un Module similaire avec antenne externe et quelques fonctions des plus ympathiques, Mais ce module sera-t-il à la hauteur face à la concurrence de plus en plus rude ?

{% include product-embed.html guid="2155" %}

Ce module est vendu pas loin de 25-30€ plus du double du prix de la conccurence je pense au ZbminiL2 de Sonoff, d'ailleurs tu peux comparer la différence de taille entre les deux modules ci-dessous

{% picture posts/{{ page.guid }}/xiaomi-aqara-single-switch-module-no-neutral-dlkzmk12lm.png --alt module Xiaomi single switch sans neutre SSM-U02 --img width="940" height="529" %}

Vu les captures ci-dessus tu peux te rendre compte de la taille du module, de la prohiminente antenne qui selon moi ne fait pas des miracles et tu pourras te rendre compte de la taille par rapport au [ZBMiniL2 de Sonoff.]({% post_url /fr/2023-03-06-test-sonoff-zbminil2-extreme-zigbee-end-device %}){: target="_blank"}

{% picture posts/{{ page.guid }}/integration-aqara-t1-espace-taille-zbminiL2.png --alt module Xiaomi single switch sans neutre SSM-U02 intégration boite dérivation 40mm --img width="940" height="529" %}

Là tu pourras te rendre compte de l'espace couvert par le module dans un boitier d'encastrement de 40mm de profondeur il restera 20mm d'espace pour accueillir un interrupteur, alors normalement c'est suffisant mais pour une nouvelle construction je te conseil tout de même de passer sur du 60mm ou alors [sur un boitier BLM]({% post_url /fr/2023-03-15-presentation-de-la-gamme-boitier-blm %}){: target="_blank"}

# Caractéristiques Techniques

|Alimentation|100 - 250VAC, 50-60Hz|
|Charge maximale|5A (1250W)|
|Humidité de fonctionnement|0-95% HR|
|Température ambiante|0°C à 35°C|
|Communication|ZigBee 3.0|
|Distance de communication effective|30m (à l'intérieur)|
|Dimensions|42,9 × 40 × 21,4mm|
|Poids|40g|

# Manuel d'utilisation

{% include doclink.html pdf="Single Switch Module T1 SSM-U02(No Neutral) manual.pdf" title="Manuel d'utilisation Xiaomi Aqara T1" %}

# Intégration du module T1 par Aqara

## Intégration dans ZHA

L'intégration dans ZHA **ne s'est pas fait sans mal**, malgré l'antenne externe j'ai du m'y reprendre à plusieurs fois avant de réussir à intégrer le module, une fois intégré et le module réveillé je me rend compte **que la sonde du thermomètre** interne ne fonctionne pas sous ZHA, certainement une erreur due au programme. Vu le prix c'est bien dommage.

{% picture posts/{{ page.guid }}/module-xiaomi-aqara-SSM-U02-avec-ZHA-dans-homeassistant.png --alt module Xiaomi single switch sans neutre SSM-U02 intégration ZHA --img width="940" height="864" %}

## Intégration avec Zigbee2mqtt ( Z2M)

Avec **Zigbee2mqtt ça ne rigole pas** le module T1 par Aqara remonte:
- l'état On/Off (normal)
- la position après coupure de courant
- choix entre toogle et switch
- le nombre de coupure de courant
- la température

{% picture posts/{{ page.guid }}/module-xiaomi-aqara-SSM-U02-avec-Zigbee2mqtt-dans-homeassistant.png --alt module Xiaomi single switch sans neutre SSM-U02 intégration Zigbee2mqtt --img width="940" height="552" %}

{% picture posts/{{ page.guid }}/module-xiaomi-aqara-SSM-U02-avec-Z2M-dans-homeassistant-onglet-expose.png --alt module Xiaomi single switch sans neutre SSM-U02 intégration Z2M onglet expose --img width="940" height="475" %}

## Intégration Dans Jeedom avec le module Zigbee

L'intégration dans Jeedom avec le module Zigbee se fait sans soucis cependant je te conseil de l'inclure avec le module Zigbee2mqtt vu le nombre de fonctions qu'il fait remonter pour les modules Xiaomi Aqara ?

{% picture posts/{{ page.guid }}/Intégration-aqara-SSM-U02-avec-Jeedom.png --alt module Xiaomi single switch sans neutre SSM-U02 intégration Jeedom Zigbee --img width="796" height="402" %}

> Jeedom ne fait remonter que les fonctions États, On et Off du module, trop léger pour le tarif.

{% picture posts/{{ page.guid }}/Intégration-aqara-SSM-U02-avec-Jeedom-option-commande.png --alt module Xiaomi single switch sans neutre SSM-U02 intégration Jeedom zigbee options commandes --img width="715" height="288" %}

> Pour les modules Aqara **l'intégration Z2M est top** mais ce n'est pas toujours le cas pour d'autres marques.

# **les + du produit**
{: .blue}
- la qualité de fabrication
- la taille ( ce n'est pas le plus petit mais il s'intègre dans une boite de dérivation 40mm)
- l'antenne extérieur

# **les - du produit**
{: .red}
- le prix
- l'inclusion de l'antenne dans une boite de dérivation
- le gain de l'antenne est à confirmer

# Variante (version avec neutre)

{% include product-embed.html guid="2156" %}


Ce module existe aussi en version avec Neutre il a des caractéristiques physiques similaires **mais il a plusieurs avantages:**
- il coûte moins cher
- compatible **routeur** meilleur pour le maillage avec Z2M
- relève la **puissance**, **énergie** et **voltage** en W avec Z2M
- tu peux **désactiver la LED** avec Z2M
- il est compatible **2500W**

> Je conseil toujours aux nouvelles constructions d'inclure le neutre derrière chaque interrupteur un plus non négligeable.

# Conclusion

Bon on le sait déjà les modules Aqara sont chinois mais de bonnes qualitées, cependant pour le prix et les intégrations actuelles je le trouve un peut cher, si tu le peux, passe sur la version avec neutre qui est selon moi une très bonne réussite.