---
guid: 120
title: "Test de la serrure connectée Tedee Go + accessoires"
description: "Test complet et integration dans home-assistant de la serrure Tedee Go avec le bridge wifi le clavier à code et le module relais Blebox"
ref: "Tedee Go"
layout: post
authors: [Nico]
date: 2024-04-15 20:22
last_modified_at: 
categories: [Tests, Securite, Wifi]
tags: []
image: 'test-serrure-connectee-tedee-go-plus-bridge-clavier-code-relais-blebox.png'
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
  - https://www.youtube.com/@tedee5282/videos
  - https://tedee.com/fr/product-info/tedee-go/
  - https://www.home-assistant.io/integrations/tedee/
---

Une première pour Haade, je vais te présenter une serrure connectée fabriqué dans les pays de l'est, **la Tedee Go** avec le bridge qui va bien le clavier à code et le module relais blebox. Pour la petite histoire j'ai demandée à Tedee de me fournir la version Pro qui à l'air plus alléchante, **mais elle ne va plus être proposée à la vente pour le grand public d'ici peu**. 

> Je trouve ça dommage car elle dispose d'une batterie rechargeable qui possède une autonomie plus importante !

## Dimension

{% picture posts/{{ page.guid }}/comparatif-dimension-serrure-connecte-du-marche.png --alt comparatif dimension de la serrure tedee go face à la concurrence --img width="940" height="267" %}


## Déballage

## Caractéristique

## Compatibilité

### avec bridge
- home-assistant
- jeedom (plugin 4€)

## Installation

{% include videoPlayer.html externalId="https://tedee.com/app/uploads/2023/06/Tedee-GO-Installation-guide-with-and-without-adapter-1-3.mp4?_=1" %}

## Integration Home Assistant

Et oui le tedee est compatible avec home assistant mais pour se faire il te faudra idéalement le bridge mais pas obligatoire, tu pourrais utiliser directement la {{ page.ref }} avec HApar le biais de homekit en utilisant le bluetooth mais tu n'auras pas accès à toute les fonctions.

### avec le bridge

### avec Homekit