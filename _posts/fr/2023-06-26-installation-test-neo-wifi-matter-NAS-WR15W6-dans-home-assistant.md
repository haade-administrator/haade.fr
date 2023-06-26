---
guid: 73
title: "test et installation prise neo Matter dans Home-assistant"
description: "Une première dans cet article nous allons tester et integrer la prise Neo NAS-WR15W6 protocole Matter dans home assistant"
ref: "NAS-WR15W6"
layout: post
author: Nico
date: 2023-06-23 14:10
last_modified_at: 
categories: [News, Tests, Matter]
tags: []
image: 'test-installation-matter-home-assistant-neo-smart-power-plug-NAS-WR15W6.png'
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
  - https://www.szneo.com/en/products/show.php?id=275
  - https://www.home-assistant.io/integrations/matter/
  - https://csa-iot.org/all-solutions/matter/
  - https://www.frandroid.com/produits-android/maison-connectee/1597775_matter-fonctionnement-objets-connectes-compatibles-tout-savoir-sur-la-nouvelle-norme-universelle-des-objets-connectes
---

Voilà une première pour le site Haade, aujourd'hui je vais intégrer et tester la prise Neo smart power plug protocole Matter dans Home Assistant.

Jusqu'à présent j'ai peu parlé du nouveau protocole Matter. Actuellement en version 1.0 ce protocole est à ses débuts, si tu ne sais pas, il a été crée par des grosses sociétés sans citer certains GAFAM, pour faciliter l'intégration des modules compatibles dans nos systèmes téléphoniques, domotiques et même réseau. 

> Matter va ainsi permettre de lier les différents écosystèmes existants, et ainsi interconnecter les différents appareils que l’on possède sans distinction de marque. On pourrait par conséquent imaginer de contrôler un HomePod mini (compatible Thread) depuis l’application Google Home par exemple. Un usage difficile à envisager aujourd’hui avec le cloisonnement des différents écosystèmes. De plus, il ne nécessite pas forcément de passer par le cloud, ce qui permet en théorie d’accélérer le transfert d’informations.

{% picture posts/{{ page.guid }}/thread-home-network-scaled.png --alt schéma de fonctionnement du protocole Matter --img width="940" height="671" %}

## Prérequis
- 1 module prise smart plug Neo compatible Matter
- Home assistant version opérationg système ( HAOS )

## Parlons de la prise Neo {{ page.ref }}

### Installation Serveur Matter

{% include homeassistantlink.html supervisor_addon="core_matter_server" %}

### Intégration matériel Matter

{% include homeassistantlink.html integration="matter" %}

## Video étape d'installation

![Intégraiton prise neo matter dans home assistant]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/video-integration-switch-neo-dans-home-assistant-avec-matter.webp{{ cachebuster }}){: width="300" height="649"}{: target="_blank"}



