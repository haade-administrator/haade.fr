---
guid: 58
title: "Mise à jour NSpanel Pro"
description: "Mise à jour du programme NSpanel Pro V.1.6.0 quels sont les nouveautés"
layout: post
author: Nico
date: 2023-03-30 15:23
last_modified_at: 
categories: [News, Zigbee]
tags: []
image: 'update-mise-a-jour-NSPanel-pro-1.6.0.png'
toc: true
beforetoc: ''
published: true
noindex: false
sitemap:
  changefreq: 'monthly'
  exclude: 'no'
  priority: 0.5 #between 0.0 to 1.0, 1.0 high priority
  lastmod:  # date to end modification
locale: fr_FR
addViews: 166
comments: true
rating:  
sourcelink:
  - https://itead.cc/product/sonoff-nspanel-pro-smart-home-control-panel/ref/122/
---

Itead nous a promis des mises à jours régulières et c'est le cas, faisons le point sur les nouveautées de la **version 1.6.0** du module de commande NSPanel pro.

{% include product-embed.html image="https://i0.wp.com/itead.cc/wp-content/uploads/2022/07/NSPanel-P_preorder_dim_gray.jpg?fit=1000%2C1000&ssl=1" title="Controleur Sonoff Nspanel Pro" brand="Sonoff" description="Controleur Sonoff Nspanel Pro avec zigbee 3.0 et wifi intégré" affiliate="_Dd5b51x" domlink="objets-connectes/6625-sonoff-interrupteur-mural-noir-zigbee-30-nspanel-pro.html" iteadlink="sonoff-nspanel-pro-smart-home-control-panel" %}

Pour commencer, si tu n'as pas lu mon précédent article sur le NSPanel pro je te [remet le lien ici]({% post_url /fr/2023-03-10-deballage-test-et-installation-sonoff-nspanel-pro %}), **il pourra peut-être répondre à certaines de tes attentes !**

*Vu un précédent article* la prochaine version devait intégrer la **prise en charger du protocole Matter**, tu te rendras compte que ce n'est pas encore le cas, et ça ne m'étonne pas car pour l'instant je sais que la puce **EFR32MG21 prend en charge soit le protocole Zigbee, soit le protocole Matter**. Mais pas les deux en même temps comme annoncé par beaucoup de programmes. Je suis curieux de savoir et à la fois **sceptique sur la prise en charge des deux protocoles côte à côte**, en effet comme écris dans un précédent article, actuellement seule la puce **EFR32MG24** de silicon labs est capable de faire fonctionner ces protocoles conjointements.

**Pour rappel:** Le panneau de contrôle domestique intelligent NSPanel Pro intègre tous vos appareils et scènes pour un contrôle central. Sur ce panneau, vous pouvez visualiser la surveillance de la caméra, régler la température de couleur de la lumière, la température ambiante, les couleurs de la lumière, allumer/éteindre les lumières, etc. Son journal de mise à jour de version et sa FAQ sont les suivants.

# Quels sont les nouveautés de la version 1.6.0

1. Les sous-appareils Zigbee prennent en charge la fonction de minuterie et certains appareils Zigbee prennent en charge OTA
2. Prend en charge S31, POWR3, POW Elite, POW Origin, TH Elite, TH Origin comme dispositif d'exécution dans le thermostat
3. Le thermostat peut être défini comme action exécutive dans une scène intelligente, y compris allumer/éteindre le thermostat, basculer en mode manuel/automatique

**Optimisation:**

1. Optimisez les étapes de connexion, vous pouvez accéder aux paramètres Wi-Fi sur la page du code de numérisation
2. Modifier l'animation de démarrage

{% include product-embed.html image="https://i0.wp.com/itead.cc/wp-content/uploads/2022/07/NSPanel-P_preorder_dim_gray.jpg?fit=1000%2C1000&ssl=1" title="Controleur Sonoff Nspanel Pro" brand="Sonoff" description="Controleur Sonoff Nspanel Pro avec zigbee 3.0 et wifi intégré" affiliate="_Dd5b51x" domlink="objets-connectes/6625-sonoff-interrupteur-mural-noir-zigbee-30-nspanel-pro.html" iteadlink="sonoff-nspanel-pro-smart-home-control-panel" %}

# Conclusion

Pour l'instant il s'agit d'une version mineure dont les améliorations sont minimes et malheureusement concentré sur les seuls produits Sonoff.