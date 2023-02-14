---
guid: 46
title: "Jeedom Luna passé au crible"
description: "Je vais examiner Jeedom Luna dans le détail, en rechercher les origines, les causes ou encore les avantages, les inconvénients ou les problèmes, bref que se cache-t-il sous la coque de la jeedom Luna"
layout: post
author: Nico
date: 2023-02-07 17:36
last_modified_at: 
categories: [Docker, Domotique, Zigbee]
tags: []
image: 'jeedom-luna-passe-au-crible-box-francaise.png'
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
  - https://www.dusuniot.com/product-specification/zigbee-matter-ble-cloud-module/
  - https://www.silabs.com/wireless/z-wave/700-series-modules
  - https://www.fn-link.com/6221A-SRC-Wi-Fi-Module-pd42546492.html
  - https://fr.transcend-info.com/product/internal-ssd/msa230s
  - https://www.arm.com/products/silicon-ip-cpu/cortex-a/cortex-a53
  - https://community.arm.com/arm-community-blogs/b/architectures-and-processors-blog/posts/the-top-5-things-to-know-about-cortex-a53
---

{% include product-embed.html guid="2143" %}

# Déballage

{% picture posts/{{ page.guid }}/deballage-unboxing-jeedom-luna.png --alt deballage de la Jeedom Luna première impression --img width="940" height="529" %}

Après déballage la première impression qui me vient à l'esprit c'est la sobriété, toute vêtue de blanc avec un anneau lumineux au centre, on découvre une luna sans fioriture. Elle est fournie avec:
- un support murale
- un paquet de vis de fixation
- un cable d'aliementation USB-C et le transfo
- un cable Rj45

Et pour simple notice un flyer avec une adresse: Suivez notre guide de démarrage [Jeedom.com/start](https://jeedom.com/start){: target="_blank"}

>Pour le moins étonnant mais ça à le mérite de fonctionner du moins pour moi.

# Connectique Externe

{% picture posts/{{ page.guid }}/facade-connectique-jeedom-luna.png --alt connectique façade arrière Jeedom Luna --img width="940" height="529" %}

Sur la face arrière un ensemble de connectique complet:
- un bouton reset
- Power
- un port Wan
- un port Usb 2.0
- une entrée alimentation USB-C 5V, 3A
- un emplacement microcard SD et nano Sim

# Connectique interne



# Étape Jeedom start

- Déballage
- Branchement
- Inscription au Market
- Recherche de la box sur le réseau
- connexion à la box


{% picture posts/{{ page.guid }}/archive-jeedom-1-vs-jeedom-luna.png --alt pour la petite histoire des Jeedom la première version contre la version luna --img width="940" height="529" %}

> Pour la petite histoire j'ai commencé la domotique sous Jeedom, j'avais même participé à l'achat de la toute première Jeedom Box, la version 1 qui était basé sur un **raspberrypi modèle B de 2011 autant dire que l'histoire de Jeedom date**.



Une fois ces étapes faites si tout c'est bien passé rendez-vous sur

[http://jeedomluna.local/](http://jeedomluna.local/){: target="_blank"}

{% picture posts/{{ page.guid }}/page-de-connection-jeedom-luna.png --alt première connection à la Jeedom Luna --img width="940" height="474" %}

# Étape d'installation

![Étape d'installation de la Jeedom Luna]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}//etape-installation-box-jeedom-luna.webp{{ cachebuster }}){: width="940" height="474"}

Les - du produit

- absence de POE+ pour l'alimentation par le RJ45
- manque d'intégration tableau électrique
- absence d'un port en interne pour Google Coral
- bloqué au Cortex A53
- absence de communication pour le port emmc interne

{% include product-embed.html guid="2143" %}

# Conclusion
