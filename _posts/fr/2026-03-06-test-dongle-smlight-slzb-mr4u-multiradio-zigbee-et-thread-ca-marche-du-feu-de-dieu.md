---
guid: 171
title: "Test dongle multiradio Smlight SLZB-MR4U"
description: "Test du dongle Multiradio Zigbee et Thread de la marque SMLIGHT SLZB-MR4U ça marche"
ref: ""
layout: post
authors: [Nico]
date: 2026-03-06 15:49
last_modified_at: 
categories: [Tests, Zigbee, Home-Assistant]
tags: []
video: 
image: 'smlight-multiradio-zigbee-et-thread-ca-marche-test-slzb-mr4u.png'
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
  - https://smlight.tech/global/slzbmr4
  - https://smlight.tech/support/manuals/books/slzb-os
---

Il y a peu de temps j'ai installé le [firmware multipan sur un dongle max Sonoff]({% post_url /fr/2025-12-20-decouverte-des-nouveaux-dongle-plus-et-mag-efr32mg24-zigbbe-par-sonoff %}), l'installation fonctionne j'ai réussi à installer des modules zigbee et thread avec succès mais j'ai été vit confronté à des problèmes d'instabilités au niveau de l'émission et réception de l'antenne, en effet tout est basé sur une seule antenne et je pense que le soucis vient au niveau des canaux identiques aux deux protocoles. Pour pallier à ce problème j'ai demandé à la société SMLight de me fournir une clé multiradio et ils m'ont gentiment procuré le SLZB-MR4U 

> Et je dois dire que **je suis pleinement satisfait de cette clé** !.

SMLight fourni depuis plusieurs années des dongles essentiellement déporté en rj45 mais pas que, avec de nombreuses variantes de puces autant dire que l'on a du choix. Rien qu'en multiprotocole ( plusieurs puces ) il existe 6 varoiantes dont cette clé SLZB-MR4U sa particularité pocéder à la fois une puce **zigbee silabs EFR32MG26** ainsi qu'une seconde **puce zigbee Texas Instrument CC2674P10**, je trouve ça top surtout qu'elles sont toutes deux compatibles Zigbee ou Thread, bref incroyable ! **Mais ça ne s'arrête pas là, la gestion de l'ensemble est super bien réalisée.**

## Déballage

Rien de bien particulier une boite aux couleurs de l'ukraine et oui SMLight est une société Ukrainienne, sur le carton est annoncé la compatibilité avec zigbee2mqtt et Home Assistant ! je trouve ça extra.

{% picture posts/{{ page.guid }}/deballage-dongle-smlight-slzb-mr4u.png --alt Déballage du dongle SMLight multiradio zigbee et thread SLZB-MR4U --img width="940" height="522" %}

à l'intérieur on retrouve une clé similaire à d'autres de la marque, avec deux antennes donc une pour chaque puces, un mètre pour la fixation des visses ou des doubles faces afin de fixer cette clé au mur, et une clé allène. Il ne manque que deux chevilles pour rendre ce contenu des plus complet.

{% picture posts/{{ page.guid }}/deballage-dongle-smlight-slzb-mr4u-2.png --alt Déballage du dongle SMLight multiradio zigbee et thread SLZB-MR4U règle et outils --img width="940" height="522" %}

## Découverte du firmware SLZB OS  V3.2.4

Passons au coeur du système et je dois dire qu'il a très bien évolué, en 2024 j'avais testé la version 0.9 et là nous sommes en v3.2.4 stable sachant qu'à l'heure ou j'écris ce sujet, l'équipe est déjà en train de travailler sur une version 3.2.6 en phase de développement.

{% picture posts/{{ page.guid }}/versioning-slzb-os-smlight.png --alt Visu des versions de slzb os par smlight --img width="940" height="453" %}

Bon comme il s'agit d'un dongle de production je suis resté volontairement sur la v3.2.4 et je n'ai rencontré aucun soucis. Je tien a signaler que l'interface s'affiche et réagit rapidement tu pourras directement te connecter à slzb-mr4u.local ou .lan si ton installation le permet sinon il faudra faire une recherche de l'adresse ip.

Pour faire simple et présenter au mieux l'interface je vais passer sur une vidéo de présentation

{% include product-embed.html image="smlight-slzb-mr4u-adaptateur-usb-ethernet-poe-zigbee-et-thread-cc2674p10-efr32mg26.png" title="Dongle SLZB-MR4U" brand="SMLight" description="Dongle multiprotocole double puces silabs EFR32MG26 et texas instrument CC2674P10 idéal pour zigbee et thread" domlink="produits-de-domotique/8369-smlight-slzb-mr4u-adaptateur-usb-ethernet-poe-zigbee-et-thread-cc2674p10-efr32mg26-.html" amazlink="4bhZgQq" %}

## Présentation vidéo SLZB-OS

{% include videoPlayer.html youtubeId="_cw5LgqeF0E" %}

## Intégration dans Home Assistant

## Caractéristiques Techniques {{ Page.ref }}

## **les + de la tablette {{ page.ref }}**
{: .blue}

- 

## **les - de la tablette {{ page.ref }}**
{: .red}

- 


## Article Connexes

{% include related-article.html guids="167,125" %}
