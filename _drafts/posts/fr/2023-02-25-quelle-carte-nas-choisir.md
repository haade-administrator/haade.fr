---
guid: 48
title: "2023 Quelle carte choisir pour monter son nas"
description: ""
layout: post
author: Nico
date: 2023-02-25 07:34
last_modified_at: 
categories: [Docker, Domotique, Zigbee]
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
  - https://www.axzez.com/axzez-circuit-boards
  - https://www.zimaboard.com/
  - https://www.hardkernel.com/
  - https://www.kickstarter.com/projects/argonforty/argon-eon-4-bay-network-storage-powered-by-raspberry-pi-4?lang=fr
  - https://wiki.radxa.com/Taco
  - https://github.com/wiretrustee/cm4-sata-board
  - https://www.jeffgeerling.com/
---

J'ai comme projet d'équiper une maison d'un serveur NAS qui servira essentiellement pour la domotique mais aussi de serveur d'enregistreur NVR. La priorité est au tarif avec le maximum de fonctionnalités et d'avoir la main sur le système complet.

La question est de savoir sur quel système je vais m'orienter, Installation d'home-Assistant sur le disque principal et ainsi utiliser la domotique et le NVR ou l'installation de Openmediavault comme système NAS et ainsi pouvoir utiliser d'autres aspects de ce serveur comme le stockage de documents, audio et Vidéo ?

Les critères d'évaluation:
- l'intégration
- la disponibilité du matériel
- le prix
- la connectique ( Nvme interne, )
- La connection aux disques supplémentaires

# 1 Carte Axzez
Axzez est un fabriquant américain Axzez récemment entré dans l'arène des technologies de surveillance intelligentes. La société prévoit d'offrir des solutions évolutives de la communauté des passionnés aux entreprises de toutes tailles. Fondé par un groupe d'amis avec des décennies d'expérience dans l'industrie, qui ont commencé par griffonner leurs idées sur un morceau de papier, Axzez prévoit de secouer le marché avec des produits beaux, efficaces et innovants.

La carte " Interceptor carrier board " est une carte embarquée accueillant le Rapberry compute ' (cm4), c'est une bonne chose attention aux dispos actuelles, cependant Axzez vend sa carte avec le CM4. Elle est conçu spécialement pour les NAS et NVR pil poil ce que je cherche.

{% picture posts/{{ page.guid }}/Axzez-carte-nas-nvr-raspberry-cm4.png --alt carte Nas CM4 Axzez --img width="940" height="719" %}

**caractéristiques:**
2 prises HDMI (4Kp60)
5 ports SATA (via JMicron JMB585)
4 ports gigabit RJ-45 (via un commutateur gigabit RTL8367RB géré)
4 ports USB 2.0 (2 via en-tête de broche)
RS-485
Connecteur d'alimentation ATX 24 broches
Horloge RTC avec batterie de secours
4 connecteurs de ventilateur à 3 broches
Embase à 8 broches pour le voyant d'alimentation du système, le bouton d'alimentation et le câble série UART
Deux connecteurs FFC (40 pos) pour une extension future


Les **+**{: .blue} du produit:
- choix du module CM4
- 4 ports rj45 switch extensible à **16 ports en POE+** (switch POE+)
- connecteurs ventilateurs
- achat d'accessoires supplémentaires
- connection de **5** disques dur
- Alimentation Atx
- les connecteurs FFC
- le prix

Les **-**{: .red} du produit
- absence de support NVME
- absence support NVME A+E key (idéal pour ajouter un google Coral en interne )
- les frais de livraison 105$ pour la france.

{% picture posts/{{ page.guid }}/axzez-boitier-raccable.png --alt carte Nas CM4 Axzez raccable --img width="940" height="529" %}

Si je devais choisir ce produit je le prendrais au complet à savoir:
- le boitier raccable 19'' à 149$
- la carte interceptor +CM4 à 174$
- l'alim 350w à 64$
- deux modules d'extensions poe+ 2x64$ soit 128$
- un convertisseur Voita 48vdc à 17$

Le cout total livré: 637$ soit env 610€
À ce prix il te faudra rajouter les disques dur, mais pour 600€ tu possèdes un système NAS, NVR et switch POE+ pas mal.

# 2 carte Zimaboard
# 3 rockpi taco
# 3 Odroid HC3
# 4 odroid HC4
# 5 Raspberry pi 4 + Argon Eon
# 6 Wiretrustee 
