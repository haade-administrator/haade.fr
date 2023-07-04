---
guid: 74
title: "Sonofflan"
description: "sonofflan"
ref: ""
layout: post
author: Nico
date: 2023-07-02 17:53
last_modified_at: 
categories: [Haade-lab, Tests, Home-Assistant]
tags: []
image: 'Sonofflan-control-sonoff-home-assistant.png'
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
  - https://www.domadoo.fr/fr/peripheriques/6659-sonoff-commutateur-de-compteur-de-puissance-intelligent-16a-avec-ecran-pow-elite.html?domid=39
  - https://itead.cc/product/sonoff-pow-elite-smart-power-meter-switch/
---

J'ai décidé de rédiger un article 2 en 1, afin de te présenter l'intégration des modules sonoff via l'application SonoffLAN créé par [AlexxIT](https://github.com/AlexxIT/SonoffLAN){: target="_blank"} qui te permet simplement et facilement d'intégrer les modules sonoff dans Homeassistant et de choisir selon les modules si tu veux qu'ils fonctionnent avec ou sans cloud. J'ai choisi en exemple l'intégration du module Sonoff commutateur de puissance 16A {{ page.ref }}, que je vais te présenter ( déballage, test).

## Prérequis

- Home Assistant
- Le Gestionnaire de paquet HACS d'installé
- un module Sonoff wifi
- l'application Ewelink d'installé sur ton tél

## Pourquoi SonoffLAN ?

Car il est simple d'utilisation, l'intégration dans Home Assistant est nickel. Mais ce n'est pas ça le plus important, tu pourras choisir si tu veux oui ou non te passer du cloud chinois d'ewelink. 
> Parce que oui, si tu choisi d'acheter un module wifi Sonoff il fonctionnera par défaut sur le Cloud.

D'ailleurs Ewelink a développé un module fonctionnel sous home Assistant, il te faudra home assistant version OS et ajouter le dépot suivant:

{%- include homeassistantlink.html supervisor_addon_repository="https://github.com/CoolKit-Technologies/ha-addon" %}

Cependant je trouve ce module lourd et il n'est d'autre qu'un iframe de l'application ewelink App pour téléphone, bref je passe mon tour.

## 1.Préparation Home Assistant

Avant tout **installer les répertoires HACS**, alors ce n'est pas 100% nécessaire cependant il est fort probable qu'un jour ou l'autre tu décides d'installer un autre module inclus dans HACS par exemple le [module Linkplay voir l'article dédié]({% post_url /fr/2023-01-18-decouverte-linkplay-alternative-airplay-sonos %}).

Pour installer HACS suis le tutoriel officiel [HACS](https://hacs.xyz/docs/setup/prerequisites){: target="_blank"}. 
**Redémarre Home Assistant** et ensuite il te suffit d'aller dans HACS > intégration > explorer et télécharger des dépôts.
**Cherche SonoffLAN et installe-le.** Voilà c'est presque terminé.

ou clic sur le lien ci-dessous:

{%- include homeassistantlink.html repertory="sonofflan" creator="alexxit" %}

# 2.Préparation des modules Sonoff

Télécharge l'application ewelink pour ton smartphone
- [Pour Iphone](https://apps.apple.com/fr/app/ewelink-smart-home/id1035163158){: target="_blank"}
- [Pour Android](https://play.google.com/store/apps/details?id=com.coolkit&hl=fr&gl=US&pli=1){: target="_blank"}

Une fois installé il te suffira de créer un identifiant et un mot de passe sur l'app. Tu peux tout de suite les noter quelque part car ils te seront demandés dans SonoffLAN lors de l'intégration du premier ajout d'appareil.

## 3. Intégration de SonoffLAN dans HA

Soit tu te rends dans:
**Paramètres > Appareils et services > Ajouter une intégration.**

Ou alors tu clic directement sur le liens ci-dessous pour ajouter l'intégration

{%- include homeassistantlink.html integration="sonoff" %}

> Voilà il ne te reste plus qu'à rentrer le login et mot de passe ewelink et de valider.

{% picture posts/{{ page.guid }}/sonofflan-integration.png --alt integration sonofflan dans home assistant --img width="410" height="325" %}

## 4. Inclure un module dans Ewelink App

Commme je l'ai dit plus haut je vais utiliser le module sonoff {{ page.ref }} commutateur de puissance intelligent wifi

### Petit tour d'horizon du module

Franchement c'est un module de qualité, l'emballage aux couleurs turquoises signe de la marque sont propres. livré sans fioriture avec une notice et deux visses pour verrouiller le clapet de conncetions.

La connectique et épaisse et de qualité, le branchement simple à réaliser.

Passons à l'inclusion

Il faudra l'inclure en mode bluetooth pas en wifi








