---
guid: 108
title: "Test Home Assistant Green et Skyconnect"
description: "Test de la box Home assistant Green plus dongle Skyconnect zigbee, stabilité, performance et prix seront détaillés"
ref: "Home Assistant"
layout: post
author: Nico
date: 2024-02-06 13:16
last_modified_at: 
categories: [Tests, Zigbee]
tags: []
image: 'test-box-home-assistant-green-cle-zigbee-skyconnect.png'
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
  - https://www.home-assistant.io/green/
  - https://skyconnect.home-assistant.io/
---

Je suis loin d'être le premier à tester cette box, pour les besoins d'une installation chez Paulo, j'ai commandé une Box Home Assistant Green et une clé Skyconnect sur [seeedstudio](https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html?queryID=c7f3fcf4f7354a2c4d56fdee4eab971d&objectID=5792&indexName=bazaar_retailer_products){: target="_blank"}, maintenant il est l'heure de tester cette box et de voir si elle est stable !

## Présentation Box Home-assistant Green

Commençons par un déballage de la box home-assistant green, comme tu peux le voir l'emballage est super bien fait et apporte une petite touche d'écolo, elle n'est pas Green pour rien.

{% picture posts/{{ page.guid }}/presentation-box-home-assistant-green-99$.png --alt Présentation de la box home-assistant Green --img width="940" height="529" %}

{% picture posts/{{ page.guid }}/tour-horizon-carton-emballage-home-assistant-green.png --alt déballage de la box home-assistant Green --img width="940" height="529" %}

{% picture posts/{{ page.guid }}/contenu-deballage-box-home-assistant-green.png --alt contenu du déballage de la box home-assistant Green --img width="940" height="529" %}

{% picture posts/{{ page.guid }}/detail-box-home-assistant-green.png --alt détail de la box home-assistant Green --img width="940" height="529" %}

{% picture posts/{{ page.guid }}/detail-circuit-home-assistant-green.png --alt détail du circuit de la box home-assistant Green --img width="940" height="529" %}

### Caractéristique technique

|Processeur|CPU Cortex-A55 quadricœur jusqu'à 1,8 GHz|
|RAM|4 Go de RAM|
|Stockage|32 Go eMMC|
|Fente d'extension|Fente pour carte SD à des fins de récupération uniquement|
|Ethernet|Gigabit Ethernet|
|Ports USB|2 ports hôte USB 2.0 Type-A|
|Affichage|1x HDMI à des fins de débogage uniquement|
|Protocoles sans fil|Zigbee 3.0 et Matter (avec Home Assistant SkyConnect)|
|Micrologiciel préinstallé|OS Home Assistant|
|Alimentation|12 V / 1 A via une prise d'alimentation CC à barillet (connecteur à barillet)|
|LED|Blanc (alimentation), vert (indicateur d'activité), jaune (état du système Home Assistant)|
|Bouton de mise hors tension|Appuyez et maintenez pendant 6 secondes pour arrêter en toute sécurité<br>Appuyez et maintenez pendant 12 secondes pour forcer la mise hors tension|
|Boîtier|Grand dissipateur thermique en aluminium, excellente dissipation thermique|
|Taille|111x111x33,6mm|
|Température de fonctionnement|0 ~ 40℃|

|Processor|Quad-core Cortex-A55 CPU up to 1.8GHz|
|RAM|4 GB RAM|
|Storage|32 GB eMMC|
|Expansion Slot|SD card slot for recovery purposes only|
|Ethernet|Gigabit Ethernet|
|USB Ports|2 x USB 2.0 Type-A host port|
|Display|1x HDMI for debugging purposes only|
|Wireless Protocols|Zigbee 3.0 and Matter(with Home Assistant SkyConnect)|
|Pre-installed Firmware|Home Assistant OS|
|Power|12 V / 1 A through barrel DC power jack(barrel connector)|
|LEDs|White (Power), Green (Activity Indicator), Yellow (Home Assistant system state)|
|Power off Button|Press and hold for 6 seconds to shut down safely<br>Press and hold for 12 seconds to force the power off|
|Enclosure|Large aluminum heatsink, great heat dissipation|
|Size|111x111x33.6mm|
|Operating Temperature|0 ~ 40℃|

## Présentation dongle Zigbee Skyconnect

{% picture posts/{{ page.guid }}/dongle-zigbee-home-assistant-skyconnect.png --alt dongle zigbee skyconnect par home-assistant --img width="940" height="529" %}

{% picture posts/{{ page.guid }}/detail-dongle-zigbee-skyconnect-home-assistant-green.png --alt détail de la clé zigbee Skyconnect de home Assistant --img width="940" height="529" %}

### Mise à jour

[Mise à jour Skyconnect](https://skyconnect.home-assistant.io/firmware-update/){: target="_blank"}

## Intégration dans Home Assistant


{% picture posts/{{ page.guid }}/premier-demarrage-home-assistant-green.png --alt premier démarrage plug n play de la box home-assistant Green --img width="940" height="529" %}

{% picture posts/{{ page.guid }}/integration-totale-home-assistant-green-et-skyconnect-avec-full-controle.png --alt intégration dans home-assistant de la box green et skyconnect toutes options disponibles --img width="940" height="529" %}

{% picture posts/{{ page.guid }}/puissance-processeur-memoire-home-assistant-green.png --alt consommation puissance processeur et mémoire ram de la box green avec zigbee2mqtt et le dongle skyconnect --img width="940" height="529" %}

{% picture posts/{{ page.guid }}/fonctionnement-ensemble-home-assistant-green-et-dongle-skyconnect.png --alt fonctionnement final de la box green et de la clé skyconnect par Home-Assistant --img width="940" height="529" %}

## Conclusion