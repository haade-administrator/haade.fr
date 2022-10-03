---
guid: 23
title: "Box Domotique rail din Home-assistant et Rpi4"
description: "Création et montage d'une box intégrer au tableau électrique sur rail-din à base de Raspberry4 et Homeassistant"
date: "2021-10-05"
last_modified_at: "2022-10-03"
layout: post
author: Nico
categories: Tests Haade-lab Home-Assistant
tags: Test Raspberry Homeassistant
image: box-domotique-rail-din-home-assistant.png
published: true
sitemap:
  changefreq: #always hourly daily weekly monthly yearly never
  exclude: #'yes' or 'no'
  priority: #between 0.0 to 1.0, 1.0 high priority
  lastmod: # date to end modification
locale: fr_FR
toc: true
beforetoc:
comments: true
---

Durant longtemps j'avais le système domotique intégré dans docker sur le NAS familial. Mais avec le temps l'installation a pris de l'ampleur et comme tout le monde le sait le matériel physique est partie intégrante d'une habitation, hors un NAS est plutôt personnel. La question d'un déménagement ne pose pas de soucis pour le NAS mais en ce qui concerne la domotique elle doit continuer à fonctionner sans ses effets personnels. C'est pourquoi j'ai décidé d'intégrer la box domotique Home-Assistant sur rail din dans le tableau électrique.


## Prérequis Matériel

Pour ma part l'installation du système est monté [sur une carte sd de 128Go de marque sandisk en version extrême pro](https://s.click.aliexpress.com/e/_DdZe15z){:target="_blank"},

{% include product-embed.html image="https://ae01.alicdn.com/kf/H0dfe1c3f837e4b35bfe4fa859a919956b/SanDisk-Carte-Micro-SD-Extreme-Pro-16-Go-32-Go-64-Go-128-Go-256-Go.jpg_640x640.jpg" title="Carte sdcard mini sandisk extreme, etreme pro et highendurance" brand="Sandisk" description="SanDisk — Carte Micro SD Extreme, 32 Go/64 Go/128 Go, U3, V30, A2, A1, TF, mémoire flash" affiliate="_DdZe15z" %}

 _ne lésine jamais sur la qualité de la carte sd !_ . Comme il existe un boitier compatible rail din pour Raspberrypi 4, je me suis orienté naturellement vers cette carte en 4Gb, **la version 2Gb sous home-assistant peut vite devenir limite**, mais le processeur du PI4 a **tendance à chauffer.** Comme je possède un switch compatible POE+ au dessus du tableau, je suis parti sur l'achat d'une  [carte complémentaire Waveshare type C en POE+](https://s.click.aliexpress.com/e/_DElHtRZ){:target="_blank"}

## Vous pouvez remplacer la type C par B sans aucuns soucis. Pourquoi cette [carte Waveshare poe+ type B ou C](https://s.click.aliexpress.com/e/_DDwVMIL){:target="_blank"}, par rapport aux cartes officielles raspberry pi

{% picture posts/{{ page.guid }}/waveshare-poe-typec-raspberrypi-4.png --alt Waveshareshare plugin raspberrypi 4 poe type c %}

- Elle est compatible avec les derniers standards POE+
- les GPIO sont toujours accessibles ( [si on veut rajouter un écran tft-lcd de 2.2](https://s.click.aliexpress.com/e/_DkJsUqT){:target="_blank"} pouces, c'est mieux )
- Elle dispose d'une sortie USB supplémentaire de type A en 3.0
- Enfin on peut y connecter un ventilateur de 12V pour un refroidissement optimal.
- Elle possède un petit ventilateur pour refroidir le processeur du Raspberry
- Possibilité de contrôler le ventilateur embarqué

Pour être sûre de ne pas rencontrer de surchauffe [j'ai acheté des dissipateurs de 5mm en cuivre](https://s.click.aliexpress.com/e/_AMjOYn){:target="_blank"}, au montage ça passe mais il faut positionner en fonction des composants du waveshare, si tu veux un peut plus de liberté passe sur des dissipateurs de 3mm, mais ils seront moins efficaces.

## La température

- Boitier rail din ouvert **28°C**
- Boitier fermé **38°C**
- Tableau électrique fermé et remonté **42°C**

Aucune ouverture supplémentaire sur le boitier rail din a été réalisée lors de la mesure des températures, et résultat final j'arrive à tenir 42°C avec des pics à 48°C, **maintenant il reste à voir en pleine saison estivale sil les pics ne sont pas trop élevés.**

{% picture posts/{{ page.guid }}/dissipateur-raspberry-pi-home-assistant.png --alt dissipateur raspberrypi 4 cuivre %}

**Ci-dessus:** La mise en place des dissipateurs de 5mm d'épaisseur se fait sans mal, mais il faut tout de même orienter le positionnement en fonction de la carte additionnelle waveshare poe+ type C.

{% picture posts/{{ page.guid }}/box-domotique-tableau.png --alt Intégration final box raspberrypi tableau électrique %}

**Ci-dessus:** L'intégration dans le tableau électrique sur rail din se fait sans soucis, l'alimentation par poe+ est un point positif à l'intégration.

{% include product-embed.html image="https://ae01.alicdn.com/kf/S5312b91ea7dd4c869142b035dcd3c954X/Bo-tier-en-ABS-pour-Raspberry-Pi-4-mod-le-B-montage-sur-Rail-DIN-grand.jpg_640x640.jpg" title="Boitier rail din raspberry pi 3 ou 4" brand="Waveshare" description="Boîtier en ABS pour Raspberry Pi 4 modèle B, montage sur Rail DIN, grand boîtier de Protection pour RPI 4B Pi4 ou Pi 3B + 3B" affiliate="_DkXxvDl" %}

**Ci-dessous:** grâce à Home-Assistant et à l'intégration systemmonitor on peut contrôler l'état général du Raspberrypi, tu peux voir que les 128GO de sdcard suffisent amplement, la mémoire utilisée est de 25% de 4Gb sachant que l'intégration des plugins additionnels est relativement complète ( z-wave,esphome,zigbee,mosquitto,xiaomi,doorbird, etc... ), [l'ajout d'un écran tft/lcd de 2,2" s'intègre parfaitement au boitier ou l'on pourrait faire du monitoring voir la présentation de l'intégration Jeedom](https://community.jeedom.com/t/presentation-box-diy-raspberry-4b-ecran-spi-tft-2-2-boitier-din-alim-5v-2-4a-din/35177){:target="_blank"}. Mais d'après un retour d'expérience l'ajout d'un tel écran fait augmenter la température de presque 10°C. Peut être que j'effectuerai un upgrade mais pour l'instant je ne trouve pas ça indispensable.

{% picture posts/{{ page.guid }}/systemmonitor-raspberry.png --alt Intégration totale lovelace home-assistant d'un raspberrypi %}

## En conclusion

Désormais l'installation domotique sous home assistant fait partie intégrante du domicile, c'est plus waf et pour moi plus logique, le fait de l'intégrer au tableau est indéniablement une place de choix en positionnant le contrôleur domotique au centre du réseau électrique de l'habitat pour un coût total d'environ 120€.