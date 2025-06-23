---
guid: 163
title: "Test du programmateur Sonoff SWV-BSP"
description: "Test et essai du programmateur d'arrosage zigbee Sonoff SWV-BSP"
ref: "SWV-BSP"
layout: post
authors: [Nico]
date: 2025-06-17 09:18
last_modified_at: 
categories: [Tests, Haade-lab, Zigbee]
tags: []
video: 
image: 'test-programmateur-arrosage-sonoff-zigbee-swv-bsp.png'
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
  - https://sonoff.tech/product/home-appliances/swv/
---

Voilà un petit moment que je n'ai pas écris d'article, je m'en excuse, faute de temps et préparation d'un article coup de poing sur l'intégration d'une tablette murale en perspective.

Aujourd'hui je vais te présenter brièvement mais sérieusement un article incontournable avec l'arrivée des beaux jours, il s'agit ni plu ni moins du programmateur d'arrosage zigbee de la marque Sonoff le {{ page.ref }}.

[Vendu moins de 30$ chez notre partemanire Itead](https://itead.cc/product/sonoff-zigbee-smart-water-valve/ref/122/){: target="_blank"}, le moins que l'on puisse dire c'est que ce tarif est imbattable  surtout aux vues de sa qualité et le nombre de commandes disponibles dans Zigbee2mqtt donc compatible multi plateforme opensource.


{% include product-embed.html image="sonoff-programmateur-d-arrosage-zigbee-mesure-de-consommation-swv-bsp.png" title="Programmateur Arrosage SWV" brand="Sonoff" description="Programmateur d'arrosage Zigbee par Sonoff le SWV" iteadlink="sonoff-zigbee-smart-water-valve" domlink="compatibilite-des-hubs-domotiques/7187-sonoff-programmateur-d-arrosage-zigbee-mesure-de-consommation-swv-bsp.html"  affiliate="_okRXRXs" amazlink="45rhIVv" %}

{% picture posts/{{ page.guid }}/unboxing-box-face-avant-sonoff-swv-bsp.png --alt Déballage programmateur arrosage sonoff swv-bsp --img width="940" height="529" %}

{% picture posts/{{ page.guid }}/unboxing-box-face-arriere-sonoff-swv-bsp.png --alt Déballage programmateur arrosage sonoff swv-bsp face arrière du carton --img width="940" height="529" %}

{% picture posts/{{ page.guid }}/contenu-et-presentation-du-programmateur-arrosage-zigbee-sonoff-swv-bsp.png --alt Contenu et présentation du programmateur arrosage sonoff swv-bsp --img width="940" height="529" %}

{% picture posts/{{ page.guid }}/box-pile-du-programmateur-arrosage-zigbee-sonoff-swv-bsp.png --alt Contenu et présentation du compartiment à pile du programmateur arrosage sonoff swv-bsp --img width="940" height="529" %}

{% picture posts/{{ page.guid }}/connecteur-superieur-et-inferieur-du-programmateur-arrosage-zigbee-sonoff-swv-bsp.png
--alt partie supérieur et inférieur du programmateur arrosage sonoff swv-bsp --img width="940" height="529" %}

{% picture posts/{{ page.guid }}/bouton-unique-face-avant-du-programmateur-arrosage-zigbee-sonoff-swv-bsp.png
 --alt bouton unique face avant fonctionnement départ et arret ainsi que l'inclusion du programmateur arrosage sonoff swv-bsp --img width="940" height="529" %}

## {{ page.ref }} dans Zigbee2mqtt

{% picture posts/{{ page.guid }}/exposition-commandes-zigbee2mqtt-sonoff-irrigation-flow-swv-bsp-zigbee.png
 --alt fonctions exposées dans zigbes2mqtt du programmateur arrosage sonoff swv-bsp --img width="940" height="954" %}

{% picture posts/{{ page.guid }}/integration-sonoff-swv-bsp-smart-water-valve-with-update-firmware-ota.png
 --alt intégration dans zigbes2mqtt du programmateur arrosage sonoff swv-bsp avec mise à jour ota 1.0.4 --img width="940" height="407" %}

{% include product-embed.html image="sonoff-programmateur-d-arrosage-zigbee-mesure-de-consommation-swv-bsp.png" title="Programmateur Arrosage SWV" brand="Sonoff" description="Programmateur d'arrosage Zigbee par Sonoff le SWV" iteadlink="sonoff-zigbee-smart-water-valve" domlink="compatibilite-des-hubs-domotiques/7187-sonoff-programmateur-d-arrosage-zigbee-mesure-de-consommation-swv-bsp.html"  affiliate="_okRXRXs" amazlink="45rhIVv" %}
## Conclusion