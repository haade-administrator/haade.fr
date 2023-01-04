---
guid: 37
title: "Intégrer une caméra esp32-cam dans une applique lumineuse"
description: "Tuto pour intégrer une caméra ai-thinker esp32-cam dans une applique lumineuse de garage en mode spycam pour moins de 10€"
layout: post
author: Nico
date: 2023-01-04 15:38
last_modified_at: 
categories: [Haade-lab, Sécurité, Esp]
tags: []
image: 'picture.png'
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
  - 
---

Tuto Haade-lab simple, pro et efficace pour un coût de moins de 10€, je vais intégrer une caméra Ai Thinker Esp32-cam dans une applique lumineuse Philips fixée sur le parking, non intrusive car très peut visible, opération caméra espion. Elle sera controlée parr le NVR Frigate et intégrée dans homeassistant grâce au service esphome.

# Prérequis
1. Savoir intégré une caméra Esp32-cam dans Homeassistant
2. avoir une caméra Esp32-cam de Ai Thinker
3. du [fil dupont](https://s.click.aliexpress.com/e/_DEa3QnV){: target="_blank"}
4. un transfo 5v 1-2A de téléphone portable (plus il est petit mieux c'est)
5. du fil électrique multi-brin en 1mm d'épaisseur
6. un fer à souder et de l'étaing
7. ( optionnel ) un NVR de préférence Frigate

# Flasher et Intégrer la caméra dan HomeAssistant

J'ai rédigé un tuto complet sur la manip à réaliser, il y a juste à suivre

# Préparer le Transformateur

Pour ma part j'avais un tout petit transformateur chinois de 5v et 1a, après ouverture il suffit de déssouder le connecteur Usb, j'ai soudé à la place deux fils dupont mâle femelle ainsi je peux les connecter directement au 5v et Ground de la caméra, de l'autre côté j'ai déssoudé les cosses de la tête d'alimentation 230v et j'ai branché deux fils électriques récupéré sur une ancienne lampe.

# Préparer la réception du signal wifi

Là c'est un peut plus délicat mais réalisable, il faut déplacer le condensateur 0805 comme sur les images ci-dessous.

{% picture posts/{{ page.guid }}/esp32-cam-resistor-onboard-antenna.png --alt image vectorisée de la position de la résistance pour l'utilisation de l'antenne interne du wifi sur un esp32-cam --img width="300" height="300" %}

{% picture posts/{{ page.guid }}/esp32-cam-resistor-external-antenna.png --alt image vectorisée de la position de la résistance pour l'utilisation de l'antenne externe du wifi sur un esp32-cam --img width="300" height="300" %}

