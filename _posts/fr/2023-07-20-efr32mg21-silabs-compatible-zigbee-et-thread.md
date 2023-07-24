---
guid: 76
title: "EFR32MG21 compatible Zigbee et Matter"
description: "Flasher le Sonoff zbdongle-e, skyconnect pour activer Matter thread et zigbee en même temps basé sur la puce Silabs EFR32MG21 est désormais faisable. En parcourant cet article tu découvriras la manip ultra simple à réaliser en cliquant simplement sur un bouton pour activer le multi-protocole et l'utiliser dans home assistant."
ref: ""
layout: post
author: Nico
date: 2023-07-20 09:16
last_modified_at: 
categories: [Haade-lab, Domotique, Zigbee]
tags: []
image: 'efr32mg21-compatible-zigbee-et-thread-matter-silabs-confirme.png'
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
  - https://github.com/NabuCasa/silabs-firmware
  - https://sonoff.tech/wp-content/uploads/2023/02/SONOFF-Zigbee-3.0-USB-dongle-plus-firmware-flashing.pdf
  - https://github.com/itead/Sonoff_Zigbee_Dongle_Firmware/tree/master/Dongle-E/NCP
  - https://skyconnect.home-assistant.io/documentation/
  - https://github.com/darkxst/silabs-firmware-builder
  - https://dialedin.com.au/blog/sonoff-zbdongle-e-rcp-firmware
---

**Ça y est ! Silabs confirme la prise en charge de la passerelle Matter vers zigbee et thread en simultané** pour les puces EFR32MG21, qui équipent diverses clés du marché comme la clé de Sonoff ZBDongle-E, pour ne citer qu'elle. Mais il y a un mais cette prise en charge est conseillé pour les proc avec un minimum de 1024k de RAM, et ce n'est pas le cas pour la Skyconnect de Nabu Casa. Pour aller plus loin **Silabs conseil d'utiliser la puce EFR32MG24 pour faire du multiprotocole.**

## Tableau de prise en charge

|Cas d'utilisation|Protocoles|Image OTA|EFR32MG21<br>1024 ko Flash<br>96 ko RAM|EFR32MG24<br>1536 ko Flash<br>256 ko RAM|
|-----------------|----------|---------|---------------------------------------|----------------------------------------|
|Passerelle Matter -> thread|Mode RCP à protocole unique|Flash externe (hôte)|✔|✔|
|Passerelle Matter -> Zigbee/Thread|**Zigbee simultané/thread**<br>dynamique 802.15.4/Bluetooth LE¹|Flash externe (hôte)|✔|✔|
|Dispositif d'extrémité de fil de Matter|Dynamique 802.15.4/Bluetooth LE SoC<br>Mode²|Flash externe||✔|
|Dispositif d'extrémité de fil de Matter|Dynamique 802.15.4/Bluetooth LE SoC<br>Mode²|Flash interne||✔|

**Mieux encore grâce au travail de Nabu Casa et darkxst** il est désormais possible de flasher dans ton navigateur la liste des clés ci-dessous par simple clic sur un bouton et de choisir le firmware à installer. Le tout sans avoir à accéder au circuit imprimé de la clé.

## Installation des nouveaux firmwares

### liste des clés

1. Skyconnect de Home Assistant (nabu casa)
2. ITead Sonoff Zigbee 3.0 USB Dongle Plus V2 model "ZBDongle-E"
3. CoolKit ZB-GW04 USB dongle (a.k.a. easyiot stick)
4. Z-Wave.Me Z-Station dual Zigbee & Z-Wave

### Liste des firmwares dispo

- Zigbee ezsp ( v7.3.0.0 )
- Multi-protocole rcp (MULTI-PAN v4.3.0) 
- Openthread ( v2.3.0.0 )
- choisir un firmware **personnalisé**

### Flash Nabu Casa Skyconnect

{% include flashfirmware/ezsp.html hub="skyconnect" %}

### Flash Sonoff ZBDongle-E

{% include flashfirmware/ezsp.html hub="zbdongle-e" %}

[Lien du firmware original Sonoff ZBDongle-e](https://github.com/itead/Sonoff_Zigbee_Dongle_Firmware/raw/master/Dongle-E/NCP/ncp-uart-sw_EZNet6.10.3_V1.0.1.gbl)

{% include flashfirmware/ezsp.html hub="zb-gw04-11" %}



{% include flashfirmware/ezsp.html hub="zb-gw04-12" %}







{% include product-embed.html guid="2128" %}
{% include product-embed.html guid="2170" %}

## Performances supérieures et connectivité sans faille

### SoC sans fil multiprotocole EFR32MG24 série 2
Les SoC sans fil EFR32MG24 sont idéaux pour la connectivité sans fil IoT maillé à l'aide des protocoles Matter, OpenThread et Zigbee pour la domotique. Avec des fonctionnalités clés telles que la haute performance RF 2,4 GHz, une faible consommation de courant, unIA/MLaccélérateur matériel etCoffre-fort sécurisé™. Un ARM Cortex®-M33 fonctionnant jusqu'à 78 MHz et jusqu'à 1,5 Mo de mémoire Flash et 256 Ko de RAM fournit des ressources pour les applications exigeantes tout en laissant de la place pour une croissance future.
<cite>Silabs.com/wireless/matter</cite>

## SoC sans fil multiprotocole EFR32MG21 série 2
Les appareils EFR32MG21 apportent des solutions hautes performances, basse consommation et sécurisées à l'IoT. Conçus pour augmenter la capacité de traitement, améliorer les performances RF et réduire le courant actif, les dispositifs EFR32MG21 sont des SoC sans fil 2,4 GHz optimisés pour les applications de maillage Zigbee, Thread et Bluetooth alimentées par la ligne, y compris l'éclairage connecté, les passerelles, les assistants vocaux et les compteurs intelligents.

La famille de SoC EFR32MG21 comprend un sous-système de sécurité intégré et des dispositifs qui peuvent tirer parti des technologies Secure Vault. Secure Vault fournit des fonctionnalités logicielles de sécurité de pointe avec une technologie matérielle à fonction physique non clonable (PUF) pour réduire considérablement le risque de failles de sécurité IoT et de compromission de la propriété intellectuelle

Avec une sensibilité supérieure à -104 dBm pour 802.15.4 et Bluetooth longue portée et une puissance de sortie jusqu'à +20 dBm, l'EFR32MG21 fournit une liaison RF robuste pour assurer des communications fiables. EFR32MG21 utilise les outils de développement Simplicity Studio 5, offrant une migration facile et une mise sur le marché rapide avec des kits de développement, des SDK, des applications mobiles et notre analyseur de réseau breveté.

[Silabs compatibilité Matter](https://www.silabs.com/wireless/matter?tab=start#thread){: target="_blank"}
[Silabs firmware nabu casa](https://github.com/NabuCasa/silabs-firmware/tree/main){: target="_blank"}
[Prise en charge multi protocole Home Assistant](){: target="_blank"}



## Clé à base de puce EFR32MG21


1. Skyconnect de Home Assistant (nabu casa)
2. ITead Sonoff Zigbee 3.0 USB Dongle Plus V2 model "ZBDongle-E"
3. CoolKit ZB-GW04 USB dongle (a.k.a. easyiot stick)
4. Z-Wave.Me Z-Station dual Zigbee & Z-Wave


[Comparatif ZBDongle Sonoff CC2652 Et EFR32]({% post_url /fr/2022-11-20-zb-dongle-p-vs-zb-dongle-e-zigbee-sonoff %})


## SoC sans fil multiprotocole EFR32MG24 série 2
Les SoC sans fil EFR32MG24 sont idéaux pour la connectivité sans fil IoT maillé à l'aide des protocoles Matter, OpenThread et Zigbee pour les produits de maison intelligente, d'éclairage et d'automatisation des bâtiments. Avec des fonctionnalités clés telles que la haute performance RF 2,4 GHz, une faible consommation de courant, unIA/MLaccélérateur matériel etCoffre-fort sécurisé™, les fabricants d'appareils IoT peuvent créer des produits intelligents, robustes et économes en énergie qui sont protégés contre les cyberattaques à distance et locales. Un ARM Cortex®-M33 fonctionnant jusqu'à 78 MHz et jusqu'à 1,5 Mo de mémoire Flash et 256 Ko de RAM fournit des ressources pour les applications exigeantes tout en laissant de la place pour une croissance future. Les applications cibles incluent les passerelles et les hubs,capteurs,commutateurs,serrures de porte,Éclairage LED, luminaires, services de localisation, maintenance prédictive, détection de bris de verre, détection de mot d'activation, etc.

## Conclusion

{% include product-embed.html guid="2128" %}
{% include product-embed.html guid="2170" %}

