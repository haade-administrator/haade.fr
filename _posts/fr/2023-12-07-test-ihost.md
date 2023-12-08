---
guid: 100
title: "test Ihost"
description: "test"
ref: "Ihost"
layout: post
author: Nico
date: 2023-12-07 14:22
last_modified_at: 
categories: [Tests, Home-Assistant, Haade-lab]
tags: []
image: 'test-sonoff-ihost-v1-12-0-hack-home-assistant-os.png'
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
  - https://sonoff.tech/product/gateway-and-sensors/ihost/
---

{% picture posts/{{ page.guid }}/test-box-sonoff-ihost.png --alt Contenu de la box ihost de Sonoff --img width="940" height="529" %}


{% include videoPlayer.html externalId="https://sonoff.tech/wp-content/uploads/2023/03/IHost-ss.mp4" %}

[guide utilisateur](https://sonoff.tech/ihost-user-guides/){: target="_blank"}

[liste zigbee compatible](https://bit.ly/3pFFN8I)

## ## Premier démarrage et Mise à jour

{% include videoPlayer.html externalId="https://sonoff.tech/wp-content/uploads/2023/03/x.mp4" %}

### Connection au compte ewelink
redémarrage

## Ajout de Zigbee
{% include videoPlayer.html externalId="https://sonoff.tech/wp-content/uploads/2023/03/IHost添加子设备教学视频.mp4" %}


## HAOS sur ihost

[image HAOS pour ihost](https://github.com/darkxst/ha-operating-system/pkgs/container/haos-builder)

## Zigbee2cube

Comme vous le savez peut-être, le problème de compatibilité avec les appareils ZigBee est un projet complexe et chronophage. Nous ne pouvons pas garantir la compatibilité avec tous les appareils ZigBee disponibles sur le marché, mais nous ferons continuellement de notre mieux pour améliorer la compatibilité d'iHost avec les appareils ZigBee, en particulier les appareils au protocole standard NON-ZigBee 3.0, n'hésitez pas à rejoindre la discussion ici.

En bref, les appareils ZigBee, en particulier les appareils NON-ZigBee 3.0, pour être compatibles et correctement affichés dans le portail Web iHost, trois conditions doivent être remplies simultanément,

1. le modèle signalé par l'appareil ZigBee fait partie de la liste des types pris en charge par Zigbee2CUBE.
2. Les capacités (expositions) signalées par l'appareil ZigBee relèvent des types et des capacités pris en charge par Zigbee2CUBE.
3. Le système eWeLink CUBE possède la capacité d'interface utilisateur correspondante, ce qui signifie qu'il peut afficher l'appareil correctement. Pour l'instant, les classes de commutateurs, les classes d'éclairage et certaines classes de capteurs sont prises en charge.

Nous avons trié une liste d'appareils (vérifiez ci-dessous) qui devraient théoriquement être pris en charge par iHost Zigbee2CUBE, mais nous ne pouvons pas tous les tester. Si votre appareil ZigBee n'apparaît pas comme prévu dans iHost, assurez-vous de Vérifiez d'abord s'il est inclus dans la liste prise en charge fournie ci-dessous.

S'il n'est pas répertorié, veuillez attendre les mises à jour périodiques pendant que nous continuons à élargir la liste des appareils pris en charge.

## Manuels {{ page.ref }}

{% include doclink.html pdf="sonoff-ihost-specification.pdf" title="Spécifications de la box Sonoff Ihost" %}
{% include doclink.html pdf="sonoff-ihost-manuel-utilisateur.pdf" title="Manuel complet de la box Ihost" %}
{% include doclink.html pdf="sonoff-ihost-guide-rapide.pdf" title="guide d'utilisation rapide de la box Ihost" %}