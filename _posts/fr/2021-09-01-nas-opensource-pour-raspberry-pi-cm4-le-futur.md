---
guid: 16
title: "NAS opensource pour Raspberry pi CM4 le futur!"
description: "Depuis la sortie du CM4 par Raspberry des projets sortent de terre à foison, ici découverte d'un NAS opensource"
layout: post
authors: Nico
date: "2021-09-01"
last_modified_at:
categories: News
tags: Raspberry CM4 Projets
image: "boitier-sata-nas-wiretrustee-raspberrypi-opensource-1.png"
published: true
noindex: false
sitemap:
  changefreq: #always hourly daily weekly monthly yearly never
  exclude: #'yes' or 'no'
  priority: #between 0.0 to 1.0, 1.0 high priority
  lastmod: # date to end modification
locale: fr_FR
addViews: 492
toc: true
beforetoc:
comments: true
redirect_from:
  - /fr/blog/news/nas-opensource-pour-raspberry-pi-cm4-le-futur/
  - /blog/news/nas-opensource-pour-raspberry-pi-cm4-le-futur/
---
Après [la fin annoncée par kobol,]({% post_url /fr/2021-08-26-kobol-helios-64-cest-termine %}) [Wiretrustee](https://wiretrustee.com/){: target="_blank"} annonce l'arrivée imminente d'une carte SATA compatible avec le Raspberrypi compute module 4 ( CM4 )

{% picture posts/{{ page.guid}}/carte-sata-wiretrustee-raspberrypi-4-1.png --alt carte sata wiretrustee pour raspberrypi --img width="820" height="461" %}

Ce n'est pas sans rappeler le projet du NAS opensource Helios 4 créé en 2017 que la société wiretrustee surf sur la vague des NAS opensource. Avec une vision légèrement différente en créant une carte SATA accueillant le module raspberry pi 4 ( CM4 ). Ainsi la compatibilité du Raspberry avec les options du component CM4 comme le wifi, la mémoire et le ssd embarqué en font un allié précieux et surtout fiable. Pour l'instant le projet est au stade de crowdfounding mais je suis confiant quand à la sortie de cette carte.

{% picture posts/{{ page.guid}}/boitier-sata-nas-wiretrustee-raspberrypi-opensource-1.png --alt boitier sata wiretrustee rapsberrypi 4 --img width="820" height="461" %}

Nas wiretrustee raspberry pi cm4 en 2,5" et 3,5"

Par rapport à kobol la carte wiretrustee possède qu'**une seule carte réseau ethernet** et on ne **peut pas brancher de batteries de secours** afin d'éviter les pannes après coupure de courant, bref de l'utiliser comme onduleur, ça viendra peut être lors d'une prochaine révision. Le reste est plutôt bien pensé.

{% picture posts/{{ page.guid}}/blueprint-wiretrustee-sata-raspberry-card-nas.png --alt blue print wiretrustee --img width="820" height="461" %}

## Caractéristiques et spécifications

{% picture posts/{{ page.guid}}/wiretrustee-raspberrypi-board-sata-nas-opensource.png --alt carte opensource wiretrustee sata pour raspberrypi --img width="820" height="461" %}

- 4 x SATA 3.0 ports
- dimensions hors tout 100 x 100 mm PCB
- Support pour dd de 2.5" et 3.5".
- Ethernet 1gbit
- 2 x USB 2.0 (1 x transfert de données, 1 x flash du firmware)
- carte micro sd
- sortie ventilateur
- Courant entrée 12 VDC ( Prise cylindrique 5,5 x 2,1 mm ou prise à quatre broches )
- HDMI
- RTC avec pile de secours
- Supporte toutes les version du raspberry pi CM4.
- UART

**Wiretrustee SATA** prend en charge **toutes les variantes du Compute Module 4.** Grâce à un emplacement pour carte microSD (pour CM4 light), et un mode de flashage du firmware via le port USB 2.0 supérieur (pour CM4 avec eMMC).

**Wiretrustee SATA** dispose de quatre ports SATA, d'un port Ethernet gigabit et d'un format de (100 x 100 mm). Permettant de construire un petit NAS domestique. Il prend en charge les disques 2,5" et 3,5", à la fois SDD et HDD. Alors que les disques 2,5" peuvent être branchés directement, les disques 3,5" nécessitent des rallonges supplémentaires.

> En plus d'une carte entièrement assemblée et testée. **Nous prévoyons de proposer des kits de bricolage pour construire votre propre NAS complet.**
>
> Wiretrustee

## NAS Open source raspberry pi CM4

La carte Wiretrustee SATA a été vérifiée pour fonctionner avec le système d'exploitation Raspberry Pi avec les pilotes SATA activés dans un noyau compilé de manière croisée. Au moment venu, toutes les instructions d'installation et les scripts nécessaires (y compris la configuration RAID), ainsi que les schémas de carte et la disposition des circuits imprimés, seront publiés sur notre site Web.

## Vidéo de présentation

{% include videoPlayer.html youtubeId="ahrdx3TYxZc" %}

**Tarif** de la carte wiretrustee SATA: **Inconnu ?**

**Pour connaître l'avancée** du projet et investir dès la sortie en précommande inscris-toi en cliquant directement sur le lien [Wiretrustee Crowdsupply](https://www.crowdsupply.com/wiretrustee/wiretrustee-sata){: target="_blank"}. En attendant je vais suivre personnellement l'avancée du projet car en domotique le NAS fait pour moi partie intégrante d'une installation.
