---
guid: 52
title: "Test du module sonoff Nspanel Pro V1.5.4"
description: "déballage, test et installation sur homeassistant du module sonoff nspanel pro sans flasher le système"
layout: post
author: Nico
date: 2023-03-10 15:50
last_modified_at: 
categories: [Haade-lab, Zigbee, Tests]
tags: []
image: 'test-sonoff-nspanel-pro-v154-plus-support.png'
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
rating: 3.5
sourcelink:
  - https://itead.cc/product/sonoff-nspanel-pro-smart-home-control-panel/ref/122/
---

Aujourd'hui et grâce à Itead qui nous a fourni le module Nspanel pro ainsi que [son support](https://itead.cc/product/enclosure-stand/ref/122/){: target="_blank" }, je vais pouvoir tester cette fameuse centrale de contrôle domotique et vous donner mon avis sur ce module. Est-ce le module à posséder pour avoir un accès Waf, le module est-il au point ? telles sont les questions que je me pose actuellement.

{% include product-embed.html image="https://i0.wp.com/itead.cc/wp-content/uploads/2022/07/NSPanel-P_preorder_dim_gray.jpg?fit=1000%2C1000&ssl=1" title="Controleur Sonoff Nspanel Pro" brand="Sonoff" description="Controleur Sonoff Nspanel Pro avec zigbee 3.0 et wifi intégré"  iteadlink="sonoff-nspanel-pro-smart-home-control-panel" %}

Sonoff propose à la vente depuis quelques temps ce module qui vient parfaire la série Nspanel, cette version pro intègre désormais un contrôleur Zigbee en plus du wifi et de l'écran tactile. Les deux boutons de contrôle de lumière ne sont plus présents, cependant l'écran tactile est plus grand et est équipé de deux capteurs de luminosité.

{% include product-embed.html image="https://i0.wp.com/itead.cc/wp-content/uploads/2022/08/Stand_1000x1000px_01.jpg?fit=1000%2C1000&ssl=1" title="Boitier pour Controleur Nspanel" brand="Sonoff" description="Boitier pour Controleur Sonoff Nspanel Pro, Nspanel en version eu ou us"  iteadlink="enclosure-stand" %}

# Déballage

Je vous passe les étapes des consommables ( pochettes et mousses ), en bref le module sonoff Nspanel pro est très bien emballé similaire au Nspanel d'ailleurs, il est livré avec une notice sommaire et un jeu de visses. Le support est aussi livré avec deux visses.

{% picture posts/{{ page.guid }}/deballage-sonoff-nspanel-pro-avec-support.png --alt déballage nspanel pro avec son support --img width="940" height="529" %}


Pour le Nspanel pro ainsi que le boitier les plastiques utilisés sont de bonnes factures.

{% picture posts/{{ page.guid }}/deballage-sonoff-nspanel-pro-avec-support-capture-2.png --alt déballage nspanel pro avec son support et pose de ensemble --img width="940" height="529" %}

# 1er lancement

Pour effectuer un premier lancement avec mise à jour du firmware il faudra le téléphone portable avec [l'application Ewelink](https://play.google.com/store/apps/details?id=com.coolkit&hl=fr&gl=US&pli=1){: target="_blank"} d'installé, et une connection wifi 2,4Ghz de disponible.

# Rendu du produit
1. le boitier
2. l'écran
3. la réponse du tactile
4. 
## Caractéristiques

**les + du produit**
- La qualité de fabrication

**les - du produit**
- Incompatibilité wifi 5Ghz
- Ecran tactile capricieux sur le mouvements verticaux
- Module fermé aux systèmes Sonoff
- Obligation de passer par un Cloud Chinois

# Intégration dans Homeassistant

C'est une évidence le NSpanel pro est controlable dans Home-assistant

## 3 possibilitées

### #1 avec le module Ewelink 100% Cloud

Une vidéo distribuée par Sonoff illustre bien l'installation de l'addons, je ne m'y suis pas penché car c'est du 100% Cloud chinois et oui chaque action réalisée par le module Sonoff ou sur Homeassistant passe par le Web.

> tu l'auras compris c'est vraiment pas terrible.

Colle le [lien du répertoire Github](https://github.com/CoolKit-Technologies/ha-addon){: target="_blank"} pour accéder à l'addons

{% include youtubePlayer.html id="wAMIKhMkSFA" %}
2. en flashant le module avec android 100% locale
3. En utilisant le [dépôt Sonofflan](https://github.com/AlexxIT/SonoffLAN){: target="_blank"} ( local et/ou cloud )

{% include product-embed.html image="https://i0.wp.com/itead.cc/wp-content/uploads/2022/07/NSPanel-P_preorder_dim_gray.jpg?fit=1000%2C1000&ssl=1" title="Controleur Sonoff Nspanel Pro" brand="Sonoff" description="Controleur Sonoff Nspanel Pro avec zigbee 3.0 et wifi intégré"  iteadlink="sonoff-nspanel-pro-smart-home-control-panel" %}

# Conclusion