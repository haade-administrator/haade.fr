---
guid: 55
title: "Test du Capteur Co2 Heiman HS3AQ"
description: "test du capteur de température, humidité, Co2 Heiman Zigbee et intégration dans homeassistant"
layout: post
author: Nico
date: 2023-03-19 16:42
last_modified_at: 
categories: [Tests, Zigbee, Home-Assistant]
tags: []
image: 'test-capteur-co2-zigbee-heiman-HS3AQ.png'
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
rating: 3,6
sourcelink:
---

Aujourd'hui je te présente le capteur de Co2, d'humidité et de température de la marque Heiman HS3AQ, un capteur moderne avec effet mirroir, l'ensemble fonctionnant sous le protocole zigbee 3.0.

{% include product-embed.html guid="2153" %}

Comme tu peux le voir sur les différentes photos le produit est très bien fini, l'effet mirroir est présent selon la lumière envirronnante celà peut même devenir gênant. Il faudra absolument le placer dans un endroit ou l'éclairage est faible sinon à part voir ton reflet des beaux jours, tu n'arriveras pas à lire les infos.

**Le module affiche:**
- le niveau de CO2 ainsi qu'un voyant associé sous forme de barre horizontal qui change de couleur
- la température ambiante
- l'humidité ambiante
- l'heure
- le niveau de Batterie

# Caractéristiques techniques

|Alimentation|Adaptateur secteur Entrée : AC 100~240V Sortie DC 5V/1A Micro-USB|
|Batterie intégrée|batterie lithium-ion|
|Type de capteur de CO2|capteur infrarouge non dispersif (NDIR)|
|Durée de vie du capteur de CO2|max. 10 ans|
|Protocole sans fil|Zigbee 3.0|
|Distance de communication|100 mètres|
|Température de fonctionnement|-10°C à 40°C|
|Humidité|10 % à 95 % (sans condensation)|
|Lieu d'installation|mur ou support de bureau|
|Plage de mesure du CO2|400-5000 ppm|
|Précision CO2|100 ppm ou 10 % des valeurs mesurées, selon la valeur la plus élevée|
|Qualité de l'air / Concentration de CO2|
Bon <600ppm<br>Normal 600~1200ppm<br> Médiocre >1200ppm<br> Les valeurs peuvent être ajustées sur la page de configuration du CO2|
|Déclenchement d'alarme|Faible >1200ppm<br> peut être ajusté sur la page de configuration du CO2|
|Dimensions|90 x 90 x 26 mm (sans support)|



{% picture posts/{{ page.guid }}/integration-heiman-HSQ3AQ-jeedom-zigbee-3.0.png --alt intégration du capteur de CO2 Heiman HSQ3AQ sur jeedom avec le plugin zigbee --img width="940" height="276" %}

{% picture posts/{{ page.guid }}/integration-heiman-HSQ3AQ-jeedom-commande-zigbee-3.0.png --alt intégration du capteur de CO2 Heiman HSQ3AQ sur jeedom avec le plugin zigbee montre les commandes disponibles --img width="940" height="276" %}

{% picture posts/{{ page.guid }}/integration-heiman-HSQ3AQ-homeassistant-zigbee-3.0.png --alt intégration du capteur de CO2 Heiman HSQ3AQ sur Homeassistant avec le plugin zigbee2mqtt --img width="940" height="692" %}

{% picture posts/{{ page.guid }}/integration-heiman-HSQ3AQ-homeassistant-zigbee-3.0.png --alt intégration du capteur de CO2 Heiman HSQ3AQ sur Homeassistant avec le plugin zigbee2mqtt montre les commandes disponibles --img width="940" height="388" %}
