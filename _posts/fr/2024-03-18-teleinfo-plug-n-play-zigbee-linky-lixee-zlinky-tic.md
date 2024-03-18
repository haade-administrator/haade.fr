---
guid: 114
title: "Test Lixee Zlinky la téléinfo plug'n play"
description: "Test du module Zlinky pour la remontée de la téléinformation spécial linky fabriqué par Lixee et plug'n play, compatible toutes box opensource"
ref: "Zlinky"
layout: post
author: Nico
date: 2024-03-18 12:00
last_modified_at: 
categories: [Tests, Zigbee, Haade-lab]
tags: []
image: 'lixee-zlinky-tic-teleinformation-linky-france-zigbee-plug-n-play.png'
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
  - https://lixee.fr/produits/37-73-zigate-usb-ttl-3770014375148.html#/27-antenneexterne-non
  - https://www.domadoo.fr/fr/box-domotique/5914-lixee-module-tic-vers-zigbee-30-pour-compteur-linky-lixee-zlinky-3770014375148.html?domid=39
  - https://github.com/fairecasoimeme/Zlinky_TIC
---

Acutellement il y a de nombreuses façons de relever la téléinformation, j'en ai déjà testé quelques unes, aujourd'hui je vais te parler du Lixee, je sais ce que tu te dit, il vient en retard d'autres l'ont déjà fait. Pour ma défense je ne possède pas de Linky, mais depuis l'arrivée D'august la donne à changé. Alors ee Zlinky_tic est-il à la hauteur ?

ZLinky_TIC est un appareil permettant de transmettre toutes les informations du Linky en ZigBee 3.0.
ZLinky_TIC est alimenté par votre compteur Linky. Il suffit simplement d'enlever le cash (jaune fluo) et de "plugger" l'appareil en pressant sur le bouton orange.
Au départ, ZLinky_TIC est en attente d'appairage mais si vous souhaitez réinitialiser l'appareil, il suffit de rester appuyer sur le bouton "link" pendant 10 secondes. Ensuite, le bouton relâché, la Led s'éteint puis se met à clignoter.
Une fois appairé à votre box domotique par l'intermédiaire d'une ZiGate ou d'un autre coordinateur ZigBee, vous pourrez gérer votre consommation d'électricité.

{% picture posts/{{ page.guid }}/zlinky_tic-v1.6-sous-le-capot.png --alt ouverture du module téléinformation zlinky_tic par lixee --img width="940" height="529" %}

Actuellement, l'appareil fonctionne avec le mode Historique et standard du compteur Linky.
Il permet de gérer tous les abonnements en mono ou triphasé et le mode production (uniquement en mode standard)

⚠️ le mode historique ne fonctionne qu'avec les abonnements classique (BASE, heures pleines/creuses, bleu blanc rouge). Pour tous les abonnements particuliers (ex heures super creuses), il est obligatoire de passer le Linky en mode standard.

Fonctions du Module TIC Zigbee Linky Lixee :
Zlinky_TIC est alimenté par les bornes du compteur Linky.
Il est compatible et respecte le protocole ZigBee 3.0.
Il gère actuellement le mode historique et standard avec abonnement BASE / HCHP / Tempo en Mono ou Triphasé ou Production.
Caractéristiques techniques du Lixee Zlinky TIC :
Communication: ZigBee® 2.4Ghz
Poids: 15g
Dimensions: 63 x 24 x 16 mm
Dimensions Du Paquet: 110 x 110 x 20mm
Température De Fonctionnement: 0°C - 60°C


## **les + du produit** {{ page.ref }}
{: .blue}

- Grande compatibilité Linky
- auto alimenté
- intégrable facilement
- reconnu par de nombreux modules
- presque plug'n play


## **les - du produit** {{ page.ref }}
{: .red}

- Le tarif excessif
- quelques soucis d'incompatibilité