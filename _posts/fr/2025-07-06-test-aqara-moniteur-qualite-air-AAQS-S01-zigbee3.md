---
guid: 75
title: "test aqara"
description: ""
ref: "AAQS-S01"
layout: post
author: Nico
date: 2023-07-06 10:06
last_modified_at: 
categories: [Tests, Domotique, Zigbee]
tags: []
image: 'aqara-controle-qualite-air-temperature-humidite-aaqs-s01.png'
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
  - https://www.aqara.com/eu/product/tvoc-air-quality-monitor
  - https://www.domadoo.fr/fr/peripheriques/5751-aqara-moniteur-de-qualite-d-air-zigbee-30-temperature-humidite-covt-aaqs-s01-6970504214644.html?domid=39
  - https://zigbee.blakadder.com/Aqara_AAQS-S01.html
---

Voilà un module niche qui n'a pas vraiment de concurrence signé Aqara et prêté par Domadoo, le module {{ page.ref }} permet de relever en temps réel la qualité de l'air mais pas que !

Le moniteur de qualité d'air Aqara AAQS-S01 peut détecter la concentration et le niveau de COVT dans l'air, ainsi que la température et l'humidité.

{% picture posts/{{ page.guid }}/aqara-AS029GL-AAQS-S01-TVOC-moniteur-qualité-air-zigbee-boite.png --alt qualité emballage aqara qualité air {{ page.ref }} --img width="940" height="529" %}

Aqara signe là un module de granqe qualité comme pour l'ensemble de la gamme l'emballage est digne des plus grand, il ne manque rien.

{% picture posts/{{ page.guid }}/aqara-AS029GL-AAQS-S01-TVOC-moniteur-qualité-air-zigbee-deballage.png --alt contenu du module aqara qualité air {{ page.ref }} --img width="940" height="529" %}

Le module est fabriqué dans un plastique solide et l'ecran lcd est de **type epaper** autant dire que la visibilité des données est au rendez-vous.

**Il est livré avec:**
- la notice
- un magnet
- un double face

> Pour éviter que les piles s'usent les contacts sont protégés par un ruban en plastique ( à retirer lors de la première utilisation ).

**L'ecran epaper:** je trouve que pour ce type de module l'affichage lcd epaper est parfait, la lisibilité est extra quelque soit l'angle de vision, un gros plus merci Aqara.

{% picture posts/{{ page.guid }}/aqara-AS029GL-AAQS-S01-TVOC-moniteur-qualité-air-zigbee-visibilite-ecran-epaper.png --alt ecran epaper du module aqara qualité air {{ page.ref }} --img width="940" height="529" %}

{% picture posts/{{ page.guid }}/aqara-AS029GL-AAQS-S01-TVOC-moniteur-qualité-air-pile-et-divers-ecran.png --alt differents affichage decran du module aqara qualité air {{ page.ref }} --img width="940" height="529" %}

Tu remarqueras que le module Aqara {{ page.ref }} fonctionne avec 2 piles CR2450 de marque Panasonic. C'est un bon point pour la qualité des piles mais ça presage un module à forte consommation de pile. Par défaut Aqara garantie la durée de vie des piles de 1 an max. L'ecran plus les diverses sondes sont probablemant énergivore.

Un double clic sur le bouton du dessus te permet de passer d'un affichage à l'autre. Aqara {{ page.ref }} peut se paramétrer en 3 affichages différents.

> ps: en haut à droite un rectangle apparait lors de l'appairage dans un réseau zigbee.

**Affichage 1:** température et humidité
**Affichage 2:** Cov en ppg, température et humidité
**Affichage 3:** Cov en bargraph, température et humidité

> Perso je préfère l'affichage 3, le fait d'afficher une qualité de l'air en noté sur 5 est plus lisible et beaucoup plus parlant.

{% include product-embed.html guid="2169" %}

## Que sont les COV et d'où viennent-ils?

La famille des composés organiques volatils regroupe plusieurs milliers de composés **(hydrocarbures, solvants, ...)** aux caractéristiques très variables. Ils ont un impact direct sur la santé **(certains sont toxiques ou cancérigènes)**. Ce sont des gaz et des vapeurs qui contiennent du carbone, comme les vapeurs d'essence et des solvants. Ils interviennent dans le processus de formation d'ozone dans la basse atmosphère et participent donc au réchauffement de la planète. Les Composés Organiques Volatils (COV) entrent dans la composition des carburants mais aussi de nombreux produits courants: **peintures, encres, colles, détachants, cosmétiques, solvants...** pour des usages ménagers, professionnels ou industriels (pour ces raisons, leur présence dans l'air intérieur peut aussi être importante). Ils sont émis lors de la combustion de combustibles **(notamment dans les gaz d'échappement)**, ou par évaporation lors de leur fabrication, de leur stockage ou de leur utilisation. Des COV sont émis également par le milieu naturel **(végétation méditerranéenne par exemple)** et certaines aires cultivées.
Les effets de COV sont très variables selon la nature du polluant envisagé. Ils vont d'une **certaine gène olfactive à des effets mutagènes et cancérigènes (benzène, certains HAP)**, en passant par des irritations diverses et une diminution de la capacité respiratoire.

## Intégration dans ZHA

{% picture posts/{{ page.guid }}/aqara-AS029GL-AAQS-S01-zha.png --alt intégration aqara qualité air {{ page.ref }} dans zha --img width="940" height="28" %}

{% picture posts/{{ page.guid }}/aqara-AS029GL-AAQS-S01-zha-entite.png --alt intégration aqara qualité air entité dispo {{ page.ref }} dans zha --img width="940" height="615" %}

### Conclusion ZHA

Des trois intégrations c'est la seule ou les données entre le module et home assistant sont cohérentes. Cependant les remontées d'infos se cantonent à l'humidité, température et qualité de l'air.

## Intégration dans Zigbee2mqtt (Home Assistant - Jeedom)

{% picture posts/{{ page.guid }}/aqara-AS029GL-AAQS-S01-zigbee2mqtt-inclusion.png --alt intégration aqara qualité air {{ page.ref }} dans zigbee2mqtt --img width="940" height="38" %}

{% picture posts/{{ page.guid }}/aqara-AS029GL-AAQS-S01-zigbee2mqtt-a-propos.png --alt intégration aqara qualité air {{ page.ref }} dans zigbee2mqtt à propos --img width="940" height="824" %}

{% picture posts/{{ page.guid }}/aqara-AS029GL-AAQS-S01-zigbee2mqtt-a-expose.png --alt intégration aqara qualité air {{ page.ref }} dans zigbee2mqtt expose --img width="940" height="654" %}

{% picture posts/{{ page.guid }}/aqara-AS029GL-AAQS-S01-zigbee2mqtt-entite.png --alt intégration aqara qualité air {{ page.ref }} dans zigbee2mqtt entité dispo --img width="940" height="868" %}

{% picture posts/{{ page.guid }}/aqara-AS029GL-AAQS-S01-zigbee2mqtt-erreur-difference-info.png --alt intégration aqara qualité air {{ page.ref }} dans zigbee2mqtt erreur info --img width="940" height="529" %}

## Intégration Zigbee Jeedom

{% picture posts/{{ page.guid }}/aqara-AS029GL-AAQS-S01-jeedom-zigbee.png --alt intégration aqara qualité air {{ page.ref }} dans jeedom avec le module zigbee --img width="940" height="253" %}

{% picture posts/{{ page.guid }}/aqara-AS029GL-AAQS-S01-jeedom-zigbee-commande.png --alt intégration aqara qualité air {{ page.ref }} dans jeedom avec le module zigbee commande disponible --img width="940" height="157" %}

{% picture posts/{{ page.guid }}/aqara-AS029GL-AAQS-S01-jeedom-zigbee-erreur-difference-info.png --alt intégration aqara qualité air {{ page.ref }} dans jeedom erreur info --img width="940" height="529" %}


### **les + du produit**
{: .blue}
- la qualité de fabrication
- mesure du COV
- Mesure de l'humidité
- Mesure de la température ambiante
- Mesure interne de la température du module
- nombre de retour d'état ( jusqu'à 5 )

### **les - du produit**
{: .red}
- le prix plus de 40€
- le nombre de piles
- la consommation

{% include doclink.html pdf="TVOC-Air-Quality-Monitor_Manual_EN.pdf" title="manuel utilisateur Aqara AAQS-S01" %}

{% include product-embed.html guid="2169" %}

## Conclusion
