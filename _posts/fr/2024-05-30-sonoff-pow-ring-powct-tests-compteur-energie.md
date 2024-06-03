---
guid: 129
title: "Test du compteur d'énergies Sonoff Pow Ring"
description: "Nouveau compteur d'énergie intelligent du marché, le Sonoff Pow Ring propose une mesure de l'énergie externe, un affichage digital, une antenne wifi déporté de qui exploiter au mieux sa consommation d'énergie"
ref: "POWCT"
layout: post
authors: [Nico]
date: 2024-05-30 12:27
last_modified_at: 
categories: [Domotique, Tests, Wifi]
tags: []
video:
image: 'sonoff-pow-ring-powct-mesure-energie-intelligent-wifi.png'
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
  - https://sonoff.tech/product/diy-smart-switches/powct/
  - https://itead.cc/product/sonoff-pow-ring-smart-power-meter-switch/
---
Aujourd'hui j'ai la chance de tester le compteur d'énergie intelligent, le Sonoff Pow ring {{ page.ref }}, ce n'est pas le premier compteur Sonoff que je teste, il y a quelques temps [j'ai pu tester le pow elite 16A et l'intégrer à SonoffLAN]({% post_url /fr/2023-07-03-sonofflan-le-gestionnaire-sonoff-pour-home-assistant %}){% target="_blank"}, d'ailleurs j'ai renouvellé l'expérient avec le {{ page.ref }}. Mais il n'est pas reconnu dans l'application SonoffLAN alors va-t-il fonctionner ?

{% picture posts/{{ page.guid }}/sonoff-pow-ring-powct-mesure-intelligent-energie-wifi.png --alt image présentation écrin sonoff pow ring powct gestionnaire energie --img width="940" height="529" %}

Prérequis

- Homeassistant HAOS de préférence
- HACS d'installé
- [SonoffLan](https://github.com/AlexxIT/SonoffLAN) d'installé
- ou [Ewelink](https://ewelink.cc/ewelink-works-with-home-assistant/) pour home assistant
- Ewelink sur smartphone [Android](https://play.google.com/store/apps/details?id=com.coolkit&hl=fr&pli=1) ou [Apple](https://apps.apple.com/us/app/ewelink/id1035163158)

## Déballage

{% picture posts/{{ page.guid }}/deballage-sonoff-pow-ring-powct-mesure-energie-wifi.png --alt image déballage sonoff pow ring powct gestionnaire energie --img width="940" height="529" %}

{% picture posts/{{ page.guid }}/contenu-boite-sonoff-pow-ring-powct-mesure-energie-wifi.png --alt contenu de la boite du sonoff pow ring powct gestionnaire energie --img width="940" height="529" %}

{% picture posts/{{ page.guid }}/prise-photo-presentation-sonoff-pow-ring-powct-mesure-intelligent-energie-wifi.png --alt Capture et présentation du sonoff pow ring powct gestionnaire energie --img width="940" height="529" %}

**Pince de transformateur de courant à noyau divisé** Détection de courant de transformateur jusqu'à 100 A. Aucun contact physique avec les fils sous tension, éliminant le risque de choc électrique. Relâchez ou fermez simplement les loquets sur le côté du capteur pour ouvrir et fermer le capteur CT.
**Moniteur d'énergie** Installez-le dans le panneau de circuit électrique de votre maison pour surveiller la consommation électrique des appareils électroménagers ou des pièces.
**Conservation des données historiques pendant 6 mois :** enregistrez automatiquement vos données de consommation d'électricité lorsque vous retirez des appareils ou avez une panne de courant. Les données peuvent être enregistrées jusqu'à 6 mois et exportées dans un fichier pour visualisation.
**Prend en charge le contrôle du contacteur** POWCT dispose d'un relais à contact sec avec un courant de sortie nominal de 2 A qui est utilisé avec un contacteur pour réaliser le contrôle de commutation de la charge.
**Sûr et fiable** Passez divers tests rigoureux, notamment des tests de foudre et de surtension, des tests de court-circuit, des tests de chute, des tests au brouillard salin, des tests dans des environnements extrêmement difficiles, etc. Des produits auxquels vous pouvez faire confiance à 100 %.