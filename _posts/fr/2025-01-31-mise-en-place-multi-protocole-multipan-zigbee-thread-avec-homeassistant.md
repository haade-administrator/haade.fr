---
guid: 153
title: "Mise en Place du Multiprotocole Zigbee/Thread sur Home Assistant"
description: "Thread est un protocole qui monte en puissance, il est possible grâce à Silicon Labs de faire cohabiter Thread avec Zigbee sur la même clé EZSP."
ref: ""
layout: post
authors: [Nico]
date: 2025-01-31 15:14
last_modified_at: 
categories: [Haade-lab, Home-Assistant]
tags: []
video: 
image: 'installation-multiprotocole-zigbee-thread-cle-skyconnect-zbt1-home-assistant.png'
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

Après un tuto sur l'installation du protocole Thread/Matter sur Home Assistant, passons maintenant sur un sujet sensible, le multi protocole thread/zigbee sur la même clé. Pourquoi sensible, cette intégration est toujours en phase de développement et non conseillé par l'équipe Nabu Casa.

Ils préconisent toujours d'installer un seul protocole par clé, c'est bien dommage car pour rappel Zigbee et Thread utilisent tous deux la même fréquence soit le 802.15.4Mhz.

{%- include alert.html type="warning" text="Phase délicate du processus, il faudra impérativement que la fréquence radio soit la même sur les deux protocole, pour un choix judicieux opte pour le canal 15,20 ou 25 afin de ne pas rentrer en concurrence avec le canal du réseau wifi." link="https://haade.fr/fr/blog/interference-zigbee-wifi-2-4ghz-a-savoir" textlink="Interférence Zigbee et Wifi" %}

[Update firmware ZBT-1 skyconnect firmware par home assistant](https://connectzbt1.home-assistant.io/firmware-update/)

[Mode multiprotocole Home Assistant Silicon Labs Multipan](https://connectzbt1.home-assistant.io/about-multiprotocol/)

[Explication firmware ezsp home assistant](https://connectzbt1.home-assistant.io/about-firmware-options/)

[![Open your Home Assistant instance and open the ingress URL of an add-on.](https://my.home-assistant.io/badges/supervisor_ingress.svg)](https://my.home-assistant.io/redirect/supervisor_ingress/?addon=core_silabs_multiprotocol%2F)

Avec la bibliothèque universal-silabs-flasher
