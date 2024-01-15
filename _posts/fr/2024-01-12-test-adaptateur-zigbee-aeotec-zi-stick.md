---
guid: 104
title: "Aeotec sort enfin son controlleur Zigbee"
description: "ça y est Aeotec se met au zigbee, la célèbre marque connue pour ses modules de qualités sort enfin un controlleur zigbee le zi-stick"
ref: "zi-stick ZGA008"
layout: post
author: Nico
date: 2024-01-12 11:24
last_modified_at: 
categories: [Tests, Zigbee]
tags: []
image: 'test-adaptateur-dongle-zigbee-matter-thread-aeotec-mini-zi-stick-ZGA008.png'
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
rating: 5.0 
sourcelink:
  - https://aeotec.freshdesk.com/support/solutions/articles/6000261821
  - https://aeotec.com/products/aeotec-z-stick-zigbee/
---

Ah **Enfin Aeotec** sort son dongle compatible Zigbee 3.0, ce fabriquant de modules de qualités a décidé de commercialiser un adaptateur usb zigbee le **Zi-Stick** au protocole Silabs avec un Chipset quasi similaire au Skyconnect ou Zbdongle-e **mais il a la particularité d'être le plus petit dongle performant du marché**, t'as bien entendu encore plus petit que le Skyconnect fourni par Home Assistant.

{% picture posts/{{ page.guid }}/presentation-zi-stick-ZGA008-aeotec-dongle-zigbee.png --alt présentation du dongle aeotec zi-stick ZGA008 adaptateur mini zigbee 3.0 --img width="940" height="529" %}

## Déballage

Rien de plus simple une belle boite bleue aux couleurs de la marque Aeotec renferme ce micro dongle zigbee, il est soigneusement protégé dans une boite blanche. À l'intérieur tu y trouveras une notice et une fiche de sécurité.

> rien de plus, rien de moins.
 
{% picture posts/{{ page.guid }}/deballage-dongle-aeotect-zi-stick-zigbee-3-ZGA008.png --alt déballage du dongle aeotec zi-stick ZGA008 adaptateur mini zigbee 3.0 --img width="940" height="529" %}

Le zi-stick est actuellement le plus petit dongle zigbee du marché, même plus petit que le skyconnect, il se pare d'une enveloppe blanche à la face plate et un dos arrondi, très bonne qualité de fabrication.

{% picture posts/{{ page.guid }}/rendu-taille-adaptateur-aeotec-zi-stick-dongle-zigbee.png --alt rendu du dongle aeotec zi-stick ZGA008 adaptateur mini zigbee 3.0 tenu dans la main --img width="940" height="529" %}

Et une petite photo du dos de l'adaptateur {{ page.ref }}

{% picture posts/{{ page.guid }}/face-arriere-arrondie-dongle-aeotec-zi-stick-zga008.png --alt rendu du dos arrondi du dongle aeotec zi-stick ZGA008 adaptateur mini zigbee 3.0 tenu dans la main --img width="940" height="529" %}

## Intégration dans Zigbee2mqtt

l'intégration du dongle Aeotec {{ page.ref }} s'est fait sans aucun soucis dans zigbee2mqtt, mais il subsite une erreur, z2m crée 2 bridges du dongle dans l'appli, ce qui est bizarre mais pas redondant. 

{% picture posts/{{ page.guid }}/integration-vue-creation-2-bridge-aeotec-zi-stick-zigbee2mqtt-bridge.png --alt création de deux bridges du zi-stick dans zigbee2mqtt --img width="940" height="57" %}

je m'explique:
- le premier bridge remonte le capteur de connection avec un firmware v12
- le second fait apparaitre l'ensemble des fonctions de fonctionnement du dongle et un firmware différent du précédent bridge.

**Vue du bridge 1 créé**

{% picture posts/{{ page.guid }}/integration-aeotec-zi-stick-zigbee2mqtt-bridge1.png --alt vue du bridge 1 créé dans zigbee2mqtt du zi-stick dans zigbee2mqtt --img width="940" height="704" %}

> Bizarre.

**Vue du bridge 2 créé**

{% picture posts/{{ page.guid }}/integration-aeotec-zi-stick-zigbee2mqtt-bridge2.png --alt vue du bridge 2 créé dans zigbee2mqtt du zi-stick dans zigbee2mqtt --img width="940" height="487" %}

Cependant l'intégration des modules se fait sans soucis, du coup il est utilisable. 

> Cette erreur provient sois de zigbee2mqtt mais je pense que ça pourrait provenir directement du firmware injecté dans la clé, une erreur est possible.

## Intégration dans ZHA

L'intégration dans ZHA ne pose aucun soucis il suffit simplement de sélectionner la destination de la clé ```/dev/ttyUSB0``` et le reste se fait automatiquement.

{% picture posts/{{ page.guid }}/integration-aeotec-zi-stick-zha-home-assistant.png --alt intégration dans zha du zi-stick dans zigbee2mqtt --img width="940" height="658" %}

L'intégration d'un module se fait sans aucune difficulté la clé Aeotec {{ page.ref }} et ZHAfont le Job.

{% picture posts/{{ page.guid }}/resultat-appairage-module-zi-stick-zha-aeotec.png --alt appairage dans zha d'un module zigbee avec le zi-stick dans zigbee2mqtt --img width="422" height="494" %}

![Intégration du dongle aeotec zi-stick dans ZHA home assistant]({{ site.baseurl }}/assets/images/posts/104/integration-dongle-zi-stick-aeotec-zha-home-assistant.webp{{ cachebuster }}){: width="600" height="482"}{: target="_blank"}


## Caractéristiques techniques

|Name|Zi-Stick|
|Model Number|ZGA008|
|Chipset|EFR32MG21A020|
|Product Weight|3.5 g|
|Total Package Weight|21.5 g|
|Product Dimensions|**37 x 17 x 8.5 mm**|
|Package Dimensions|50 x 65 x 20 mm|
|Zigbee Chip|EFR32MG21|
|Zigbee Version|Zigbee 3.0|
|Zigbee Frequency|2.4 GHz|
|Other protocols|Can be updated to a Thread Stick through Firmware Update to control Thread Matter-based devices.|
|Power Supply|USB DC 4.75V to 5.25V|
|Sensitivity of the RF receiver TX Power|+20 dBm|
|RX sensitivity|-99 dBm|
|Recommended host current|50mA|
|Known compatibilities|Tested to be compatible with Raspberry Pi / Orange Pi / BeagleBone<br />Tested to be compatible with Windows 10/11 OS<br />Tested to be compatible with Linux OS<br />Tested to be compatible with OSX OS|
|Operating Temperature|0°C to 40°C / 40°F to 104°F|
|Storage Temperature|-20 C to 70 C / -4°F to 158°F|
|Operating Distance|200m max distance (open air)|

|Nom|Zi-Stick|
|Numéro de modèle|ZGA008|
|Chipset|EFR32MG21A020|
|Poids du produit|3,5 g|
|Poids total du colis|21,5 g|
|Dimensions du produit|**37 x 17 x 8,5 mm**|
|Dimensions du colis|50 x 65 x 20 mm|
|Puce Zigbee|EFR32MG21|
|Version Zigbee|Zigbee 3.0|
|Fréquence Zigbee|2,4 GHz|
|Autres protocoles|Peut être mis à jour vers un Thread Stick via la mise à jour du micrologiciel pour contrôler les appareils basés sur Thread Matter.|
|Alimentation|USB DC 4,75 V à 5,25 V|
|Sensibilité du récepteur RF TX Power|+20 dBm|
|Sensibilité RX|-99 dBm|
|Courant hôte recommandé|50mA|
|Compatibilités connues|Testé pour être compatible avec Raspberry Pi / Orange Pi / BeagleBone<br />Testé pour être compatible avec le système d'exploitation Windows 10/11<br />Testé pour être compatible avec le système d'exploitation Linux<br />Testé pour être compatible avec OSX OS|
|Température de fonctionnement|0°C à 40°C / 40°F à 104°F|
|Température de stockage|-20 C à 70 C / -4°F à 158°F|
|Distance de fonctionnement|Distance maximale de 200 m (air libre)|