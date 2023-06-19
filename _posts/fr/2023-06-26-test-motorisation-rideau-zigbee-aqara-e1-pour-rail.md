---
guid: 72
title: "test du module de motorisation pour rideau aqara version rail CM-M01"
description: "test complet du module pour ouverture et fermeture de rideau Aqara E1 version rail avec intégration dans zigbee2mqtt, zha et Jeedom"
layout: post
author: Nico
date: 2023-06-19 13:26
last_modified_at: 
categories: [Tests, Zigbee, Home-Assistant]
tags: []
image: 'test-aqara-e1-motorisation-rideau-version-rail-zigbee.png'
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
  - https://www.aqara.com/eu/product/curtain-driver-e1-track-version
  - https://www.domadoo.fr/fr/peripheriques/6251-aqara-motorisation-pour-rideau-zigbee-30-aqara-curtain-driver-e1-version-rail-6970504215122.html
---

{% picture posts/{{ page.guid }}/contenu-boite-aqara-pilote-rideeau-e1-rail-version.png --alt contenu de la boite du module de motorisation zigbee aqara curtain driver E1 version rail --img width="940" height="529" %}

{% include doclink.html pdf="Curtain-Driver-E1-(Track Version)_User Manual.pdf" title="Manuel utilisateur du module pilote de rideau aqara e1 version rail" %}

{% picture posts/{{ page.guid }}/aqara-e1-curtain-driver-size-and-specification-motorisation-rideau.png --alt taille et specification du module de motorisation zigbee aqara curtain driver E1 version rail --img width="940" height="529" %}

{%- include alert.html type="warning" text="Attention! ce module ne s'adapte pas aux fixation de type chemin de fer à clipser avec cordon de guidage" link="#" textlink="cliquez ici pour voir le site" %}

**Uniquement compatible avec le rail de type U**{: .blue} dont **l'ouverture est <= à 0.8mm**

{% picture posts/{{ page.guid }}/Aqara-motorisation-rideau-version-rail-u.png --alt compatibilité du module de motorisation zigbee aqara curtain driver E1 version rail modèle U --img width="940" height="529" %}

ou **compatible avec les rail en I**{: .blue} **dont la base et >= à 10mm**, tu pourras utiliser les guides fournis avec le pilote CM-M01

{% picture posts/{{ page.guid }}/Aqara-motorisation-rideau-version-rail-i.png --alt compatibilité du module de motorisation zigbee aqara curtain driver E1 version rail modèle I --img width="940" height="529" %}

## Installation de la motorisation Aqara E1

{% include youtubePlayer.html id="HNYChqU5A58" %}

## Installation avec Zigbee2mqtt

L'appairage se fait aisément, le nombres de fonctions et remontées d'état dans Z2M est complet tout simplement époustouflant tu as accès à 17 fonctions de quoi le contrôler totalement

état des fonctions
1. ouvrir/fermer/stop
2. position de l'ouverture de 0 à 100%
3. tirer les rideaux à la main démarre le moteur ( vria/faux )

