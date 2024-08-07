---
guid: 137
title: "Test du controlleur d'arrosage Saswell SAS980 Zigbee avec minuteur intelligent et mesure du débit d'eau"
description: "Je teste un module d'arrosage Zigbee aussi fabriqué sous la marqe RTX référence ZVG1 qui a la particularité de mesurer la consommation d'eau et pas que."
ref: "SAS980SWT-7-Z01"
layout: post
authors: [Nico]
date: 2024-08-01 08:33
last_modified_at: 
categories: [Domotique, Tests, Zigbee]
tags: []
video: 
image: 'picture.png'
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
rating: 4.2
sourcelink: 
  - https://fr.saswell.com/smart-irrigation-wifi-water-timer-sas980swt-7-z01_p147.html
---

Après avoir testé le module d'irrigatrion Zigbee Woox R7060 l'année dernière, je m'attaque aujourd'hui au test du Saswell SAS980SWT-7-Z01 vendu sous marque blanche par RTX sous la référence ZVG1. Il est reconnu sous cette référence dans Zigbee2mqtt, mais depuis Saswell a repris la vente sous ce nom. Tu verras qu'il a des points intéressants.

Comme pour le Woox, Saswell a choisi une puce Tuya Zigbee. C'est bien un produit chinois, je déplore tout de même ce choix car les puces Tuya sont toujours exempts de certaines fonctionnalitées comme l'absence de binding.

Néanmoins il a l'avantage d'apporter en plus des fonctions habituelles rencontrées sur ce type de produits des formes réduites à l'encombrement ce qui permet de fixer plusieurs modules d'irrigations sur une rampe commune. Contrairement à d'autres modèles que l'on ne peut pas mettre sur la même ligne.

Le Saswell s'alimente avec deux piles AAA ce qui est là aussi une bonne Nouvelle, et c'est aussi l'une des raisons de ces faibles volumes.

Pour finir une option très intéressante , est le calcul du débit volumétrique mesurée entre l'ouverture et la fermeture de la commande, cependant j'ai vraiment l'impression que le débit d'eau consommé ne reflète pas la réalité.

## Test du débit d'eau

Dans mon cas j'utilise un système d'irrigation monté sur un surpresseur calibré sur 3,5 bars, ce réseau d'arrosage est constitué de sprinkler pour pots de fleurs afin d'arroser une multitude de plantes en containers.

Ce type d'alimentatation en eau à beaucoup d'avantages mais la pression à l'intérieur du système est variable, entre la vidange du surpresseur et la réalimentation en air. J'ai l'impression que le volume calculé pourrait provenir de là.

Lors d'un enclanchement de 4 minutes la consommation annulée est de 12 Litres mais en réalité nous sommes à 30 litres.

## Tests sur réseau

Suite à cette erreur je décide simplement de tester le débit d'eau sur un branchement en direct d'eau potable au débit de 3 bars. Les résultats sont sans appels

{% include product-embed.html image="saswell-electrovanne-et-programmateur-d-arrosage-connecte-zigbee-mesure-de-consommation.png" title="Electrovanne Arrosage Zigbee" brand="Saswell" description="Contrôlez et programmez l'arrosage de votre jardin ou pelouse et mesurez la consommation d'eau avec l'électrovanne et programmateur connecté Zigbee SASWELL." iteadlink="sonoff-zbminil2-extreme-zigbee-smart-switch-no-neutral-required" domlink="jardin-connecte/5886-saswell-electrovanne-et-programmateur-d-arrosage-connecte-zigbee-mesure-de-consommation.html" affiliate="" amazlink="" %}

## Options Disponibles

### Dans Zigbee2mqtt

{% picture posts/{{ page.guid }}/rendu-controlleur-irrigation-rtx-zvg1-zigbee-dans-zigbee2mqtt-a-propos.png --alt Intégration du module d'irrigation Zigbee ongle à propos Zigbee2mqtt rtx zvg1 ou Saswell SAS980SWT-7-Z01 --img width="940" height="637" %}

{% picture posts/{{ page.guid }}/rendu-controlleur-irrigation-rtx-zvg1-zigbee-dans-zigbee2mqtt-expose-1.png --alt Intégration du module d'irrigation Zigbee onglet expose 1 Zigbee2mqtt premières options rtx zvg1 ou Saswell SAS980SWT-7-Z01 --img width="940" height="684" %}

{% picture posts/{{ page.guid }}/rendu-controlleur-irrigation-rtx-zvg1-zigbee-dans-zigbee2mqtt-endpoint-cluster.png --alt Fonctions disponibles Endpoint et Cluster rtx zvg1 ou Saswell SAS980SWT-7-Z01 --img width="940" height="516" %}

{% picture posts/{{ page.guid }}/rendu-controlleur-irrigation-rtx-zvg1-zigbee-dans-zigbee2mqtt-expose-2.png --alt Intégration du module d'irrigation Zigbee onglet expose 2 Zigbee2mqtt premières options rtx zvg1 ou Saswell SAS980SWT-7-Z01 --img width="940" height="684" %}

### Dans ZHA avec Home Assistant

{% picture posts/{{ page.guid }}/rendu-controlleur-irrigation-rtx-zvg1-zigbee-dans-zha.png --alt Intégration du module d'irrigation Zigbee avec ZHA et Zigpy le rtx zvg1 ou Saswell SAS980SWT-7-Z01 --img width="940" height="815" %}

## Conclusion
Saswell signe là un module d'irrigation avec des atouts indéniables, je regrette tout de même que le calcul d'eau consommé soit loin de la réalité.