---
guid: 80
title: "Mise à jour carte Axzez Interceptor"
description: "La carte embarquée Axzez Interceptor est une carte compatible Raspberry PI CM4 et maintenant Banana PI CM4, idéal pour créer un NAS, NVR et DOMOTIQUE en même temps. Quelques nouveautées concernant ce petit bijoux"
ref: ""
layout: post
author: Nico
date: 2023-08-14 10:00
last_modified_at: 
categories: [News]
tags: []
image: 'nouveautees-carte-axzez-interceptor-nas-nvr-automation-raspberry-banana-pi.png'
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
comments: true
rating:
sourcelink:
  - https://www.axzez.com/
  - https://www.axzez.com/software-downloads
---

Si tu as lu précedemment cet article, [Quelle carte choisir pour constituer un NAS + Domotique]({% post_url /fr/2023-03-03-quelle-carte-nas-choisir-domotique-nvr %}){: target="_blank"}, rédigé par mes soins au mois de Mars 2023 😉, tu as pu voir que parmi toutes les cartes passées aux cribles, la carte Interceptor fabriqué par Axzez était mon second choix pour monter un combo **NAS/NVR/DOMOTIQUE**, derrière la carte **Taco fabriqué par RADXA** (d'ailleurs, actuellement en **vente et en stock à 75$** sur AllnetChina). Si t'es intéressé [Clic ici](https://shop.allnetchina.cn/products/taco?variant=39519152210022&utm_source=swym-Watchlist&utm_medium=email&utm_term=backinstock&utm_campaign=backinstock&smid=712886a5-59b4-4655-9554-d7bab2c8fe77&variant=39519152210022&empi=6675179208806&epi=39519152210022){: target="_blank"}

{% include product-embed.html image="bananapi-cm4-16gb-emmc.png" title="Bananapi CM4" brand="Banana Pi" description="Banana Pi BPI-CM4 Amlogic A311D Quad Core ARM Cortex-A73 4G LPDDR4 16G eMMC Minipcie 26PIN prise en charge sortie HDMI exécuter Android Linux" affiliate="_DloIOw3" %}

> Il y a désormais quelques nouveautées concernant cette carte.

Tout d'abord Axzez met à dispo une **mise à jour majeure du système d'exploitation** pour la carte Interception, [qui peut être téléchargée ici](https://www.axzez.com/software-downloads){:target="_blank"}. Le nouveau système d'exploitation Interceptor est maintenant **basé sur Linux 6.4 et Debian 12 (bookworm)** récemment publiés. Voici quelques changements pour cette image d'Axzez.

- Utilisation du **pilote principal rtl8365mb** pour le commutateur realtek rtl8367rb à la place du pilote **openwrt** piraté que les images précédentes utilisaient.
- Utilisation de **l'architecture Linux DSA principale** pour configurer les commutateurs (le "swconfig" d'openwrt n'est plus utilisé).
L'avantage le plus visible de ceci est que les interfaces réseau virtuelles (par exemple "poe0-0") reflètent désormais l'état réel de la liaison Ethernet.
- Le **menu de démarrage est maintenant un véritable menu de démarrage** et est exécuté par **u-boot** avant le démarrage de Linux.
Le plus grand avantage de **u-boot** est le fait de pouvoir mettre à jour en même temps l'image du noyau et les modules.
 

Désormais Axzez Interceptor est compatible avec la **carte CM4 de Banana Pi**. [Une image est disponible dès maintenant](https://www.axzez.com/software-downloads){:target="_blank"}.
Le BPi CM4 offre une belle accélération par rapport au Raspberry Pi CM4, mais il y a quelques inconvénients lors de l'utilisation de cette carte:

- Seul HDMI 0 fonctionne car le BPi CM4 ne prend en charge qu'une seule connexion HDMI.
- Le bouton de mise sous tension ne fonctionne pas. BPi n'a tout simplement pas câblé cette broche. Nous ne savons pas pourquoi.
Le BPi CM4 ne peut pas démarrer directement de l'USB.
 
{% include product-embed.html image="bananapi-cm4-16gb-emmc.png" title="Bananapi CM4" brand="Banana Pi" description="Banana Pi BPI-CM4 Amlogic A311D Quad Core ARM Cortex-A73 4G LPDDR4 16G eMMC Minipcie 26PIN prise en charge sortie HDMI exécuter Android Linux" affiliate="_DloIOw3" %}

Étant donné que **le Banana Pi CM4 ne peut démarrer qu'à partir d'une carte eMMC ou SD** et que l'Interceptor Carrier Board v1.5 n'a pas d'emplacement pour carte SD, l'eMMC doit être imagé au préalable. Cela peut être fait avec la carte IO Raspberry Pi CM4 ou la carte IO Banana Pi CM4. Tu peux soit démarrer l'image ci-dessus à partir de la carte SD et l'installer sur eMMC, soit utiliser l'outil **aml-flash-tool** ci-dessous pour l'installer via USB.
 
[https://github.com/Dangku/aml-flash-tool](https://github.com/Dangku/aml-flash-tool){:target="_blank"}

 
Si le projet t'intéresse, [rendez-vous sur le forum](https://www.axzez.com/forum){:target="_blank"} de discussion et n'hésite pas à poster tous commentaires utiles. 👍

