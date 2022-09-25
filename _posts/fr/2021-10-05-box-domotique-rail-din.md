---
guid: 23
title: "Box Domotique rail din Home-assistant et Rpi4"
description: "Création et montage d'une box intégrer au tableau électrique sur rail-din à base de Raspberry4 et Homeassistant"
date: "2021-10-05"
last_modified_at:
layout: post
author: Nico
categories: Tests Haade-lab Home-Assistant
tags: Test Raspberry Homeassistant
image: box-domotique-rail-din-home-assistant
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

Pour ma part l'installation du système est monté [sur une carte sd de 128Go de marque sandisk en version extrême pro](https://s.click.aliexpress.com/e/_AsN9If){:target="_blank"}, _ne lésine jamais sur la qualité de la carte sd !_ . Comme il existe un boitier compatible rail din pour Raspberrypi 4, je me suis orienté naturellement vers cette carte en 4Gb, **la version 2Gb sous home-assistant peut vite devenir limite**, mais le processeur du PI4 a **tendance à chauffer.** Comme je possède un switch compatible POE+ au dessus du tableau, je suis parti sur l'achat d'une [carte complémentaire Waveshare type C en POE+](https://s.click.aliexpress.com/e/_ALSRv5){:target="_blank"}

## Pourquoi cette [carte Waveshare poe+ type C](https://s.click.aliexpress.com/e/_ALSRv5){:target="_blank"}, par rapport aux cartes officielles raspberry pi

![Waveshareshare plugin raspberrypi 4 poe type c]({{- site.baseurl }}/assets/images/posts/{{- page.guid }}/waveshare-poe-typec-raspberrypi-4-820.webp{{- cachebuster }})

- Elle est compatible avec les derniers standards POE+
- les GPIO sont toujours accessibles ( [si on veut rajouter un écran tft-lcd de 2.2](https://s.click.aliexpress.com/e/_ANZpYP){:target="_blank"} pouces, c'est mieux )
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

![dissipateur raspberrypi 4 cuivre]({{- site.baseurl }}/assets/images/posts/{{- page.guid }}/dissipateur-raspberry-pi-home-assistant-820.webp{{- cachebuster }})

**Ci-dessus:** La mise en place des dissipateurs de 5mm d'épaisseur se fait sans mal, mais il faut tout de même orienter le positionnement en fonction de la carte additionnelle waveshare poe+ type C.

![Intégration final box raspberrypi tableau électrique]({{- site.baseurl }}/assets/images/posts/{{- page.guid }}/box-domotique-tableau-820.webp{{- cachebuster }})

**Ci-dessus:** L'intégration dans le tableau électrique sur rail din se fait sans soucis, l'alimentation par poe+ est un point positif à l'intégration.

**Ci-dessous:** grâce à Home-Assistant et à l'intégration systemmonitor on peut contrôler l'état général du Raspberrypi, tu peux voir que les 128GO de sdcard suffisent amplement, la mémoire utilisée est de 25% de 4Gb sachant que l'intégration des plugins additionnels est relativement complète ( z-wave,esphome,zigbee,mosquitto,xiaomi,doorbird, etc... ), [l'ajout d'un écran tft/lcd de 2,2" s'intègre parfaitement au boitier ou l'on pourrait faire du monitoring voir la présentation de l'intégration Jeedom](https://community.jeedom.com/t/presentation-box-diy-raspberry-4b-ecran-spi-tft-2-2-boitier-din-alim-5v-2-4a-din/35177){:target="_blank"}. Mais d'après un retour d'expérience l'ajout d'un tel écran fait augmenter la température de presque 10°C. Peut être que j'effectuerai un upgrade mais pour l'instant je ne trouve pas ça indispensable.

![Intégration totale lovelace home-assistant d'un raspberrypi]({{- site.baseurl }}/assets/images/posts/{{- page.guid }}/systemmonitor-raspberry-820.webp{{- cachebuster }})

## En conclusion

Désormais l'installation domotique sous home assistant fait partie intégrante du domicile, c'est plus waf et pour moi plus logique, le fait de l'intégrer au tableau est indéniablement une place de choix en positionnant le contrôleur domotique au centre du réseau électrique de l'habitat pour un coût total d'environ 120€.
