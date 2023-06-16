---
guid: 61
title: "Mise à jour Nspanel Pro V1.7.0"
description: "Les jours passent et les mises à jours du Nspanel pro s'enchainent"
layout: post
author: Nico
date: 2023-04-16 11:53
last_modified_at: 
categories: [Domotique, News]
tags: []
image: 'nspanel-pro-v1.7.0.png'
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
addViews: 209
comments: true
rating:  
sourcelink:
  - https://sonoff.tech/product-review/product-insight/sonoff-nspanel-pro-version-update-information-and-faq/
---
Les jours se suivent et les **mises à jours s'enchaînent chez Itead** en se concentrant sur le NSPanel pro. *1 mois à peine* après la précédente mise à jour Le Nspanel pro apporte déjà des nouveautées en respectant un tableau bien précis. **Bravo à l'équipe qui tient ses engagements auprès de ses utilisateurs !**

{% include product-embed.html image="https://i0.wp.com/itead.cc/wp-content/uploads/2022/07/NSPanel-P_preorder_dim_gray.jpg?fit=1000%2C1000&ssl=1" title="Controleur Sonoff Nspanel Pro" brand="Sonoff" description="Controleur Sonoff Nspanel Pro avec zigbee 3.0 et wifi intégré" affiliate="_DCgKVON" domlink="objets-connectes/6625-sonoff-interrupteur-mural-noir-zigbee-30-nspanel-pro.html" iteadlink="sonoff-nspanel-pro-smart-home-control-panel" %}

# Message du fabriquant Itead

Chers clients,
Nous sommes ravis d'annoncer la sortie de la version 1.7.0 pour NSPanel Pro et **la documentation de l'API HTTP NSPanel Pro** pour les intégrations personnalisées ou les développements de flux de travail d'automatisation. Depuis le lancement du NSPanel Pro, **nous avons été encouragés** par les commentaires positifs et les suggestions que nous avons reçus de nos clients. Dans notre description initiale du produit, **nous avons décrit nos plans futurs**, qui comprenaient des fonctionnalités telles que la consommation d'énergie, le graphique de température et d'humidité et l'interphone d'appel. **Nous sommes heureux d'annoncer que nous avons progressivement tenu nos promesses et mis en œuvre les principales fonctionnalités prévues.**

{% picture posts/{{ page.guid }}/nspanel-pro4.png --alt étape de plannification des mises à jours depuis la création du NSPanel Pro --img width="940" height="1193" %}

# Tableau des mises à jours 2023

D'après le tableau de mise à jour des versions Itead a désormais atteint le palier **Q2** des mises à jours 2023. D'après le tableau d'ici 1 mois nous devrions pouvoir mettre à jour vers une **version V1.8.0 palier Q3** intégrant une carte du réseau Zigbee. Et ensuite l'intégration de Matter dans le schéma de fonctionnement, à voir!

{% picture posts/{{ page.guid }}/NSPanel-feature-plan.png --alt Plan des mises à jours du Nspanel pro année 2023 --img width="940" height="528" %}

# Nouveautée de la V1.7.0

1. Prend en charge la **température d'affichage et d'humidité** données provenant d'autres sources de température sur l'écran principal.
2. Prise en charge de **l'affichage permanent** - Définissez le verrouillage automatique "Jamais" dans "Paramètres-Affichage".
3. Prend en charge **Homebridge**, vous permettant de synchroniser les sous-appareils Zigbee dans NSPanel Pro avec Homebridge et de les contrôler dans l'application Home.
4. Prend en charge **Node-RED**, vous permettant de gérer et de contrôler les appareils via des « nœuds » et des « flux ».
5. Prend en charge la commutation entre les formats **24 heures et 12 heures**.
6. **Ajout de 6 nouvelles langues:** afrikaans, tchèque, hongrois, slovène, vietnamien et thaï.

# Api NSpanel Pro

[https://sonoff.tech/nspanelpro-api/](https://sonoff.tech/nspanelpro-api/){: target="_blank"}

**Enfin une nouvelle intéressante**, Itead a publié une documentation **complète de l'API pour NSpanel Pro**, ça va nous permettre d'intégrer des modules Zigbee non pris en charge par Sonoff.
> Qui selon moi est le gros point noir de ce module pour l'instant

[https://sonoff.tech/nspanelpro-api/](https://sonoff.tech/nspanelpro-api/){: target="_blank"}


{% include product-embed.html image="https://i0.wp.com/itead.cc/wp-content/uploads/2022/07/NSPanel-P_preorder_dim_gray.jpg?fit=1000%2C1000&ssl=1" title="Controleur Sonoff Nspanel Pro" brand="Sonoff" description="Controleur Sonoff Nspanel Pro avec zigbee 3.0 et wifi intégré"  affiliate="_DCgKVON" domlink="objets-connectes/6625-sonoff-interrupteur-mural-noir-zigbee-30-nspanel-pro.html" iteadlink="sonoff-nspanel-pro-smart-home-control-panel" %}

# Conclusion

Les mises à jours du NSPanel pro sont régulières et c'est un point très positif qui fait sortir du lot ce module de contrôle par rapport à la concurrence je pense aux modules développés par Xiaomi et Moes. L'ouverture d'une documentation API pour le NSPanel Pro est plus que la bienvenue, car grâce à cet api nous pourrons participer à l'évolution des mises à jours en intégrant des modules Zigbee tiers. **Cependant je reste attentif à l'intégration de Matter qui selon moi est possible mais comme [énoncé dans un précédent post]({{ site.baseurl }}/{{ page.locale | slice: 0,2 }}/blog/zb-dongle-p-vs-zb-dongle-e-zigbee-sonoff#compatibilité-avec-matter){: target="_blank"} ne pourrait fonctionner en même temps que Zigbee !**

