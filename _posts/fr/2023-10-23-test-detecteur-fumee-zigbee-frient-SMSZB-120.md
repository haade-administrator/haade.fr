---
guid: 87
title: "Test du détecteur de fumée zigbee 3.0 Frient SMSZB-120"
description: "test est intégration dans zha et zigbee2mqtt du module détecteur de fumée Frient smszb-120 zigbee 3.0"
ref: "SMSZB-120"
layout: post
authors: Nico
date: 2023-10-23 09:22
last_modified_at: 
categories: [Tests, Zigbee]
tags: []
image: 'test-detecteur-fumee-frient-zigbee-3-smszb-120.png'
toc: true
beforetoc: ''
published: true
noindex: false
sitemap:
  changefreq: 'monthly'
  exclude: 'no'
  priority: 0.5 #between 0.0 to 1.0, 1.0 high priority
  lastmod:  # date to end modification
locale: fr_FR
comments: true
rating: 4.1
sourcelink:
  - https://frient.com/products/intelligent-smoke-alarm/
  - https://www.develcoproducts.com/products/sensors-and-alarms/intelligent-smoke-alarm/
  - https://zigbee.blakadder.com/Develco_SMSZB-120.html
  - https://www.domadoo.fr/fr/peripheriques/5409-frient-detecteur-de-fumee-intelligent-zigbee-30-5713594002330.html?domid=39
---

Aujourd'hui je vais tester un article très important pour la sécurité incendie de la maison. Domadoo m'a gracieusement prêté ce produit, le premier test de la marque Frient pour moi.
**Nous attendons de ce genre d'article d'être simple et fiable** afin de nous sortir d'une mauvaise passe. Alors le Frient {{ page.ref }} tiens-t-il ses promesses, je chercherai aussi à savoir s'il est bien compatible avec les box opensources du commerce.

{% picture posts/{{ page.guid }}/test-detecteur-fumee-frien-smszb-120-zigbee.png --alt test du detecteur de fumée frient smszb-120 zigbee 3.0 --img width="940" height="529" %}

{% include product-embed.html guid="2175" %}

{% picture posts/{{ page.guid }}/presentation-du-detecteur-de-fumee-frient-smszb-120-zigbee.png --alt presentation du detecteur de fumée frient smszb-120 zigbee 3.0 --img width="940" height="529" %}

En image une petite présentation du **Frient {{ page.ref }}**, sur la face avant le module est équipé d'un gros bouton de test de fonctionnement de l'alarme, si tu clic dessus une lumière rouge scintillera ainsi q'un son retentissant. Sur la partie inférieur un bouton d'appairage lumineux de couleur rouge. Le {{ page.ref }} est de très bonne qualité de fabrication, nulle doute sur une longévité accrue.
> L'emballage est bien fait, le conditionnement aussi rien à redire.

## Ce qui se cache sous la hotte du {{ page.ref }}

Ce produit est sortie en 2020 ce qui explique l'intégration d'une puce Zigbee CC2530, elle a l'inconvénient d'être immense mais elle à l'avantage d'être hackable, bon tu me diras ça reste un produit difficilement détournable. Concernant l'assemblage et les soudures rien à redire.

{% picture posts/{{ page.guid }}/caracteristique-circuit-puce-zigbee-frient-smszb120.png --alt presentation du circuit cc2530 du detecteur de fumée frient smszb-120 zigbee 3.0 --img width="940" height="529" %}

## Inclusion Zigbee mode opératoire

lors de la **première inclusion** il suffit d'enclancher la pile, le module va se mettre à clignoter
Si tu dois faire une **réinitialisation du module** il faut rester appuyer environ 15 secondes jusqu'à ce que celui-ci se mette à clignoter en permanence:
- au bout de 5 secondes cligonte toutes les secondes
- 5 secondes après clignote 2 fois par secondes
- 5 secondes après clignote plusieurs fois
- relache le point rouge reste fixe 1 seconde
- le Frient {{ page.ref }} est réinitialisé.

## Compatibilité

- Zigbee2mqtt
- deconz
- zigbee Domoticz
- **zigbee Jeedom**
- Homey
- Homely
- Smartthings
- Eva
- futurhome
- Nimly
- Hubitat

## Inclusion dans ZHA

L'inclusion se fait sans mal dans ZHA sous Home Assistant, mais aucune commandes ne remontent malgré plusieurs tentatives, le Frient {{ page.ref }} reste inutilisable dans cette configuration.

{% picture posts/{{ page.guid }}/integration-frient-smszb-120-zha-home-assistant-integration.png --alt intégration dans ZHA du detecteur de fumée frient smszb-120 zigbee 3.0 --img width="940" height="717" %}

Après une tentative de **reconfiguration les commandes ne remontent toujours pas**, contrairement à ce qu'annonce Blackadder le module ne fonctionne pas dans ZHA

{% picture posts/{{ page.guid }}/reconfiguration-frient-smszb-120-zha-home-assistant-integration.png --alt reconfiguration dans zha du detecteur de fumée frient smszb-120 zigbee 3.0 --img width="610" height="949" %}

## Inclusion dans Zigbee2mqtt

> Comme c'est souvent le cas et tant mieux l'intégration du Frient {{ page.ref }} dans Z2M a été très facile.

{% picture posts/{{ page.guid }}/integration-frient-smszb-120-zigbee2mqtt-home-assistant.png --alt integration dans z2m du detecteur de fumée frient smszb-120 zigbee 3.0 --img width="940" height="41" %}

Toutes les infos remontent parfaitement, il faudra laisser quelques secondes pour la synchronisation des commandes. De plus entre l'appui sur une commande et l'action il peut se passer une à deux secondes.

{% picture posts/{{ page.guid }}/integration-frient-smszb-120-zigbee2mqtt-home-assistant-a-propos.png --alt page à propos dans z2m du detecteur de fumée frient smszb-120 zigbee 3.0 --img width="922" height="754" %}

Comme tu peux te rendre compte sur les deux prochaines images le module detecteur de fumée Frient {{ page.ref }} permet de:

- mesurer la température d'ambiance
- voir le niveau de batterie
- detection de fumée binaire
- détection de batterie vide
- indication de test de l'appareil ( en appuyant sur le gros bouton de face )
- paramétrage de la durée de la sirène
- démarrage manuel de l'alarme
- indication de la raison d'un défaut
- mesure d'un défaut de fonctionnement
- mesure la qualité du signal zigbee

> Voilà 10 fonctions pour ce module dans z2m plutôt pas mal !

{% picture posts/{{ page.guid }}/integration-frient-smszb-120-zigbee2mqtt-home-assistant-expose.png --alt page expose dans z2m du detecteur de fumée frient smszb-120 zigbee 3.0 --img width="940" height="533" %}

**Une intégration parfaite du Frient {{ page.ref }} dans zigbee2mqtt.**

{% picture posts/{{ page.guid }}/integration-frient-smszb-120-zigbee2mqtt-home-assistant-integration.png --alt integration finale dans z2m du detecteur de fumée frient smszb-120 zigbee 3.0 --img width="940" height="837" %}

## Caractéristiques {{ page.ref }}

{% picture posts/{{ page.guid }}/smoke-sensor-size-ffrient-smszb-120.png --alt dimension du detecteur de fumée frient smszb-120 zigbee 3.0 --img width="622" height="350" %}

**Général**
- Dimensions : Ø65 x 40 mm
- Poids : 80,3 g (avec emballage : 111,7 g)
- Couleur blanche
**Source de courant**
- Batterie : 1 x CR123, échangeable
- Autonomie de la batterie : **3 ans, rapport toutes les 5 minutes**
- Le niveau de la batterie et l'avertissement de batterie faible peuvent être signalés
**Fonctionnalités radio**
- Sensibilité : -92 dBm
- Puissance de sortie : Typ. +4 dBm
**Environnement**
- Classe IP : IP20
- Température de fonctionnement : 0 à +50°C
- Humidité relative 10-95 % sans condensation
**Spécifications du capteur de fumée**
- Optique
- Sortie sirène 85 dB/3m
**Spécifications capteur de température**
- Plage : 0 à +50°C
- Résolution : 0,1°C (précision Typ ±0,5°C et Max ±2°C)
- Temps d'échantillonnage : config. : 2 s -65 000 s
- Rapports : configurable
**Communication**
- Protocole sans fil
- Domotique Zigbee
- Appareil final Zigbee
**Certifications**
- Conforme aux directives CE, RED et RoHS
- **Certifié DIN EN 14604 et DIN 14676**
- Certifié Zigbee 3.0

## Documents {{ page.ref }}

{% include doclink.html pdf="h6500160-intelligent-smoke-alarm-installation-manual-v16.pdf" title="guide d'installation du capteur de fumée Frient smszb-120" %}
{% include doclink.html pdf="h6500185-intelligent-smoke-alarm-multilingual-installation-manual-v16.pdf" title="Notice Multilingue du module Frient smszb-120" %}


## **les + du produit** {{ page.ref }}
{: .blue}

- la qualité de fabrication
- Une énorme compatibilité
- le nombre de fonctions disponibles
- Une pile Duracel
- Une taille réduite
- Un design réussi
- Durée de la pile de 3 ans


## **les - du produit** {{ page.ref }}
{: .red}

- Le prix (50€ environ)
- la puce zigbee cc2530
- Incompatible avec ZHA
- le choix d'une pile onéreuse CR123

{% include product-embed.html guid="2175" %}

## Conclusion

Le module de capteur de Fumée Frient {{ page.ref }} **est de très bonne qualité**, les fonctionnalités sont là cependant il reste cher comparé à un module Xiaomi Honeywell ou un détecteur Heiman. **Et ce pour les mêmes caractéristiques de fonctionnement**.Toutefois si l'estéthique t'importe alors ce module est fait pour toi !