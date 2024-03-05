---
guid: 110
title: Tests capteurs Sonoff zigbee SNZB-03P et SNZB-06P
description: test des capteurs de mouvements et présences humaines sonoff SNZB-03P et SNZB-06P zigbee quelles différences, sont-ils bien reconnus dans nos assistants.
ref: SNZB-03P et SNZB-06P
layout: post
author: Nico
date: 2024-02-27 18:43
last_modified_at: null
categories:
  - Tests
  - Zigbee
tags: []
image: detecteur-movement-et-presence-humaine-zigbee-sonoff-snzb-03p-snzb-06p.png
toc: true
beforetoc: ""
published: false
noindex: false
sitemap:
  changefreq: monthly
  exclude: no
  priority: 0.5
  lastmod: null
locale: fr_FR
comments: true
rating: null
sourcelink:
  - https://sonoff.tech/product/gateway-and-sensors/snzb-03p/
  - https://sonoff.tech/product/gateway-and-sensors/snzb-06p/
slug: tests-capteurs-sonoff-zigbee-snzb-03p-snzb-06p
---

Comme d'habitude je remercie Domadoo pour le prêt de ces deux modules Sonoff Zigbee que sont les {{ page.ref }}, ce sont deux modules de détections de présences que tout oppose, et pourtant assez similaire. Dans cet article je vais tester le fonctionnement et l'intégration dans Zigbee2mqtt et ZHA.

## Sonoff SNZB-03P

Le [Sonoff snzb-03P](https://www.domadoo.fr/fr/securite/6923-sonoff-detecteur-de-mouvement-zigbee-30.html?domid=39){: target="_blank"} est similaire à ce que sait faire la concurrence, un design tout en longueur, un bouton d'appairage et un support magnétique font de ce produit ce qu'il est.

Pour commencer, détaillons l'emballage du sonoff snzb-03p, livré dans un emballage orange comme le reste de la gamme zigbee, le module est livré avec un support magnétique, du double face et un lot de chevilles et visses. Pour terminer une notice sommaire mais suffisante.

{% picture posts/{{ page.guid }}/deballage-capteur-presence-sonoff-zigbee-snzb-03p.png --alt déballage du capteur de présence sur pile zigbee 3.0 de la marque Sonoff le snzb-03p --img width="940" height="529" %}

L'ouverture du module pour l'accès à la pile de format 2477 est relativement simple et de bonne fabrication. Dans l'ensemble le détecteur sonoff snzb-03p est bien conçu. La marque Sonoff à su s'adapter et se hisser au haut de gamme chinois qui est du même niveau que la gamme Xiaomi Aqara, selon moi bien sûre.

{% picture posts/{{ page.guid }}/demontage-capteur-presence-zigbee-sonoff-snzb-03p.png --alt démontage et présentation des entrailles du capteur de présence sur pile zigbee 3.0 de la marque Sonoff le snzb-03p --img width="940" height="529" %}

Afin de te rendre compte de la taille du module, voici rien que pour toi une petite capture pour te rendre compte du volume du produit. La taille est tout de même imposante, on aurait peut être préféré un capteur plus plat et de forme ronde pour une intégration plus discrète, dans nos logements.

{% picture posts/{{ page.guid }}/taille-sonoff-snzb-03p.png --alt rendu de la taille du capteur de présence sur pile zigbee 3.0 de la marque Sonoff le snzb-03p --img width="940" height="529" %}

### Caractéristiques du Sonoff snzb-03p

**Détection plus rapide en 5 secondes**
Allumez automatiquement les lumières immédiatement lorsque vous passez et éteignez la lumière après votre départ, le temps le plus court peut atteindre 5 secondes, vous aidant à économiser de l'énergie.
**Durée de vie de la batterie de 3 ans**
Alimenté par la batterie CR2477, la durée de vie de la batterie est prolongée jusqu'à plus de 3 ans, éliminant ainsi les soucis liés aux remplacements fréquents de la batterie.
**Compatible Zigbee 3.0**
Prend en charge les hubs Zigbee utilisant le protocole Zigbee 3.0 tels que SONOFF NSPanel Pro , SONOFF iHost , SONOFF ZB Bridge Pro , SONOFF ZBDongle-E et Echo Plus 2nd…


### Caractéristiques techniques du Sonoff snzb-03p

|Modèle|SNZB-03P|
|Température de fonctionnement|-10°C~60°C|
|Connexion sans fil|Zigbee 3.0|
|Humidité de fonctionnement|5-95 % HR, sans condensation|
|Portée de détection|6m(20f), 110°|
|Modèle de batterie|CR2477(3V)|
|Poids net|54g|
|Dimensions du produit|44x44x65mm|

## Présentation du Sonoff SNZB-06P

Voilà un nouveau venu de la gamme Sonoff, c'est un détecteur de mouvement nouvelle génération qui gère un plus d'un détecteur classique, la détection statique de personnes.

D'après ce que j'ai pu lire à droite et à gauche ce capteur nouvelle génération à micro-onde 5,8Ghz surpasse tout ce qui a été fait jusqu'à présent dans le domaine de la capture de la présence humaine. Point négatif en premier abord ce module ne fonctionne pas sur pile mais en 5v sur secteur grâce à une connection usb-c et adaptateur fournis avec le module.

D'après le fabriquant ce module est très précis et capable de mesurer la différence de lumière ainsi que les présences humaines statiques.

Ci-dessous une image qui te permet de mieux juger l'architecture similaire des deux produits, une différence remarquable au niveau du capteur, le reste est relativement similaire.

{% picture posts/{{ page.guid }}/comparatif-taille-et-design-detecteur-de-mouvement-presence-personne-sonoff-snzb-03p-et-snzb-06p.png --alt comparatif de la taille et du dessin des capteurs de présence sur pile zigbee 3.0 de la marque Sonoff le snzb-03p vs snzb-06p --img width="940" height="529" %}

### Caractéristiques du Sonoff snzb-06p
