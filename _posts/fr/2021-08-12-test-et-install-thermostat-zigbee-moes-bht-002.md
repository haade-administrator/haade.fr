---
guid: 14
title: "[TEST] et [INSTALL] Thermostat Zigbee Moes BHT-002"
description: "test d'un thermostat zigbee par Moes le BHT-002"
layout: post
author: Nico
date: "2021-08-12T16:34:23+02:00"
last_modified_at:
categories: Tests
tags:
image: thermostat-zigbee-moes-bht-002.png
published: true
noindex: false
sitemap:
  changefreq: #always hourly daily weekly monthly yearly never
  exclude: #'yes' or 'no'
  priority: #between 0.0 to 1.0, 1.0 high priority
  lastmod: # date to end modification
locale: fr_FR
beforetoc:
toc: true
comments: true
redirect_from:
  - /fr/blog/home-automation-smarthome-jeedom-homeassistant/tutos-haade-lab/home-assistant/test-et-install-thermostat-zigbee-moes-bht-002/
  - /blog/home-automation-smarthome-jeedom-homeassistant/tutos-haade-lab/home-assistant/test-et-install-thermostat-zigbee-moes-bht-002/
  - /blog/tests/test-et-install-thermostat-zigbee-moes-bht-002/2/
  - /fr/blog/tests/test-et-install-thermostat-zigbee-moes-bht-002/
  - /blog/tests/test-et-install-thermostat-zigbee-moes-bht-002/
rating: 4.6
---

Aujourd'hui je vais tester et installer le thermostat zigbee BHT-002 de la marque Moes, plus précisément la version chauffage électrique BHT-002-GBLZBW, celui-ci va être remplacer par le [thermostat Atlantic 109519](https://www.rexel.fr/frx/Cat%C3%A9gorie/Chauffage-%C3%A9lectrique-climatisation-ventilation/Chauffage-domestique/C%C3%A2ble-chauffant/Plancher-Chauffant-Domocable---Thermostat-digital/ATL109519/p/62427465){:target="_blank"} ce thermostat des années 2000 coûte toujours _plus de 40 euro_s l'unité avec des paramétrages très restreints.

{% picture posts/{{ page.guid}}/remplacement-thermostat-atlantic109519-vs-moes-bht-002.png --alt remplacement thermostat atlantic chauffage électrique par moes bht-002 --img width="820" height="461" %}

Pour parler de la marque Moes, c'est le second matériel que je test, commandé tous deux chez le revendeur Moes Official Store d'aliexpress, franchement la qualité est très bien fini, l'emballage est pro et [la notice ( en Anglais ) est parfaitement détaillée.](https://drive.google.com/file/d/13ArYq5bkG5xbnuoVv76iHq4Rb2fCYrG5/view?usp=sharing){:target="_blank"} Alors n'hésitez pas à commander les produits de cette marque. D'ailleurs dans un prochain article Yann va tester [le nouveau capteur 3 en 1 ( thermomètre, luminosité et humidité ) zigbee de la marque](https://fr.aliexpress.com/item/1005002522611717.html?spm=a2g0o.productlist.0.0.47147798UjVhU9&algo_pvid=760ce515-952e-453c-bdc1-465c7c3542f7&algo_exp_id=760ce515-952e-453c-bdc1-465c7c3542f7-41){:target="_blank"}. Il est déjà compatible zigbee2mqtt donc multi-plateforme, j'attends ça avec impatience donc à toi de jouer tonton.

{% picture posts/{{ page.guid}}/moes-bht-002-gzb-contenu-paquet-haade.png --alt déballage moes bht-002 --img width="820" height="461" %}

Commençons par le déballage, comme je le disais plus haut l'emballage est top, le produit est bien protégé, à l'intérieur le thermostat ( un film de protection protège l'écran ). Une sonde NTC de 2,5m, deux visses sous blister et la notice, rien d'extraordinaire. Le branchement sur chauffage électrique se fera sans soucis, car disponible avec 2 neutres/2 phases en entrée et sortie. De plus en option on peut brancher le thermostat en modbus, dans notre cas pas la peine, pour la sonde idem.

## Installation du module

Rien de bien compliqué, pour commencer la partie noir se déboîte facilement d'une main afin de pouvoir visser le module sur le boitier d'encastrement ( compatible norme européenne ).

**De Gauche à droite:**

- Connectique Modbus blanc/rouge
- 1: phase fil souple sortie du radiateur
- 2: neutre fil souple sortie du radiateur
- 3: Neutre du disjoncteur
- 4 Phase du disjoncteur
- 5-6 fil de la sonde NTC de 2,5m branchée pour contrôler la température du sol.

{% picture posts/{{ page.guid}}/moes-bht-002-gzb-connectique-haade.png --alt Connectique thermostat zigbee moes BHT-002 --img width="820" height="461" %}

Suit l'installation en lieu et place au thermostat d'ambiance Atlantic. Comme énoncé plus haut rien de bien compliqué.

{%- include alert.html type="warning" text="Vous allez devoir travailler au voisinage d'une tension de 220V qui est dangereuse si vous entrez en contact avec un conducteur électrique. Prenez garde à vos manipulations, en cas de doute coupez l'alimentation électrique." link="" textlink="" %}

Ce qui est dommage, la connectique réalisée par des fils dupont, **et non par un système de connection par contact.**

{% picture posts/{{ page.guid}}/moes-bht-002-installation-murale.png --alt Installation murale thermostat moes bht-002 --img width="820" height="461" %}

Aussi **la sonde NTC de 2,5m est une sonde de température numérique étanche externe.** Pratique pour déporter la sonde de température au niveau des résistances du sol par exemple.

## Notice Technique BHT-002

[Notice technique BHT-002](https://drive.google.com/file/d/13ArYq5bkG5xbnuoVv76iHq4Rb2fCYrG5/view?usp=sharing){:target="_blank"}

Notice officielle du thermostat zigbee Moes BHT-002

## Partie Programmation

Bon je ne vais pas tout détailler, d'ailleurs la notice est au dessus, la partie intéressante est la programmation qui diffère du thermostat Atlantic, à savoir qu'il n'en possède pas.

4 périodes horaires sont disponibles et programmable sur 3 périodes de la semaine ( lundi à vendredi, samedi et dimanche ), ce qui nous fait en tout 12 possibilités.

quand à l'intégration avec zigbee2mqtt et homeassistant est très simple. On ouvre le réseau, 8 secondes sur la flèche du bas et c'est inclus.

la partie homeassistant est relativement complète malheureusement la programmation des périodes horaires/jour n'est pas possible. Elle s'affiche dans les attributs c'est déjà pas mal. Tout le reste est paramétrable via l'assistant.

![Intégration moes bht-002 thermostat zigbee dans home-assistant]({{ site.baseurl }}/assets/images/posts/{{ page.guid}}/integration-thermostat-moes-bht-002-home-assistant.webp{{ cachebuster }}){: width="504" height="545"} 

Pour conclure si tu souhaites remplacer tes thermostats de chauffages au sol électriques tu peux y aller franchement. Je ne parle même pas du contrôle par homeassistant, rien que la différence de prix force à prendre un thermostat zigbee. Franchement Moes vaut le détour.
