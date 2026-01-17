---
guid: 169
title: "Lixee Box Économiseur d'énergie"
description: "test de la lixee box"
ref: "Lixee-Box"
layout: post
authors: [Nico]
date: 2026-01-10 11:03
last_modified_at: 
categories: [Domotique, Haade-lab, Home-Assistant, Zigbee]
tags: []
video: 
image: 'lixee-box-zlinky_tic-box-francaise-mesure-analyse-economise.png'
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
rating: 4.0
sourcelink:
  - https://lixee.fr/fr/
  - https://faire-ca-soi-meme.fr/
---

[Lixee société française issue d'une communautée Diy](https://lixee.fr/fr/){: target="_blank"} commercialise notemment quelques produits destinés entre autres à la prise de mesure d'énergie ( éléctricité, eau ou gaz ). Basé sur une communautée toujours plus intéressée, il y a environ 2 ans elle a sorti un module qui fait à l'heure actuelle toujours l'unanimité, le **Zlinky_Tic**, pour ceux qui ne connaissent pas c'est un *module de téléinformation zigbee 100% compatible et intégrable* au **Linky**. Fin Novembre La société m'a envoyé la lixee-box en version **Lite** pour effectuer des test sur la ZIWIFI32S3.

{% picture posts/{{ page.guid }}/box-lixee-ziwifi32.png --alt Présentation du dongle Lixee --img width="940" height="529" %}

## Tuto Installation

La façon la plus simple d'installer et de trouver l'adresse de la lixee-box afin d'utiliser au mieux la web app est de suivre la vidéo de l'installation officielle. Simple et relativement efficace.

{% include videoPlayer.html youtubeId="1w0yDo08sk0" %}

## Détail de la {{ page.ref }}

Proche de la fabrication artisanale, la {{ page.ref }} reste une belle conception française, simple de montage mais efficace. Le boitier semi translucide cache une carte embarquée à base de esp32-S3 wifi/bluetooth ainsi qu'une puce zigbee version Zigate+ la NXP JN5189. D'ailleurs cette conception fait beaucoup penser à la zigate v1, même le circuit imprimé y ressemble.

## Pourquoi la {{ page.ref }} se lance sur ce créneau

D'après mon ressentie, la société a voulu simplifier la mise en place d'un interface de gestion d'énergie pour les nuls en domotique. Cependant l'interface énergie apporte un réel plus que l'on ne trouve pas encore par défaut sur home-assistant, bref une interface bien frenchie et 100% compatible avec le linky.

Cette box 100% basée sur le référentiel [lixee-zibridge](https://github.com/fairecasoimeme/LiXee-ZiBridge){: target="_blank"} qui crée un pont entre l'esp32-s3 et la puce nxp Zigbee. La puce Zigbee intègre le firmware Zigate v2.

Ce choix n'est je ne le pense pas stratégique, pourquoi j'avance ça simplement que la société aurait pu directement utiliser une puce esp32 qui intègre la puce zigbee comme la esp32-c2 ou h6, la clé aurait été beaucoup plus petite et plus simple à réaliser, mais utiliser le référentiel esp-idf veut aussi dire, apprendre, créer et coder entièrement une nouvelle interface. 

> Lixee se base sur le travail de Zigate+ pour la prise en charge et gestion du coordinateur Zigbee.

## L'interface {{ page.ref }}

Le temps d'effectuer les tests j'ai pu réaliser deux mises à jours, bon faut le dire en ce moment je ne suis pas le plus rapide en rédaction.

La page d'accueil est super intéressante et relativement bien monté, tu branches ton Zlinky sur le linky,, tu l'intègres dans l'écosystème et à partir de là plus rien à faire à part patienter le temps que les infos d'énergies remontent.

> Voilà enfin une page énergie faite pour les français.

Cette page est très bien réalisée

## Et le coordinateur Zigbee dans tout ça !

La Lixee box te permet d'intégrer d'autres modules zigbee dans l'interfacec cependant la liste de modules est relativement restreinte


## Caractéristiques techniques de la {{ page.ref }}

Alimentation :
5 VCC via le port USB-A
MCU : ESP32-S3-WROOM-1-N16R8
Fréquence : 240Mhz
SRAM : 512Kb
PSRAM : 8Mb
ROM : 16Mb
Interfaces sans fils
WiFi 802.11b/g/n
Zigbee 3.0
Bluetooth Low Energy 5.0
Interfaces
1x module ZiGate+
1x port USB (power + UART0)
1x bouton Reset
1x bouton Flash (pour l'ESP32S3 - GPIO0)
1x sélecteur ESP / FTDI (pour rediriger UART0 vers l'ESP32 ou vers la ZiGate)
12x GPIOs

## Pourquoi créer une Box

{% include product-embed.html image="lixee-box-domotique-wifi-zigbee-compteur-lixee-zigbee.png" title="Box domotique WIFI Zigbee + Compteur Lixee Zigbee" brand="Lixee" description="La LiXee-Box domotique compacte centralise vos données énergétiques et optimise votre consommation. Suivi en temps réel, historique complet, automatisations intelligentes, gestion des seuils et routage énergétique. Compatible WiFi, Bluetooth, Zigbee et MQTT, intégration facile avec Home Assistant et données Linky." domlink="french-days/8424-lixee-box-domotique-wifi-zigbee-compteur-lixee-zigbee-3770014375193.html" %}

{% include product-embed.html image="lixee-module-tic-vers-zigbee-30-pour-compteur-linky-v2-v4000-0014.png" title="Zlinky" brand="Lixee" description="Transmettez toutes les informations de votre compteur Linky à votre box domotique grâce au module Tic Linky Zigbee 3.0 V2 de Lixee." domlink="eco-energie/7492-lixee-module-tic-vers-zigbee-30-pour-compteur-linky-v2-v4000-0014-3770014375179.html" amazlink="3Ya26B0" %}

{% include product-embed.html image="lixee-carte-universelle-lixee-ziwifi32-lite-wifi-bluetooth-zigbee.png" title="Carte universelle LiXee-ZiWifi32 Lite WiFi, Bluetooth, Zigbee" brand="Lixee" description="La LiXee-ZiWifi32 Lite est une carte universelle compacte pour la domotique, intégrant Wi-Fi, Bluetooth et Zigbee. Compatible avec jeedom, domoticz et Home Assistant, elle permet un contrôle flexible de capteurs et actionneurs. Idéale pour ponts Zigbee, LiXee-Box ou prototypes multi-protocoles." domlink="dongle-zigbee/8423-lixee-carte-universelle-lixee-ziwifi32-lite-wifi-bluetooth-zigbee-3770014375162.html" %}

{% picture posts/{{ page.guid }}/tableau-de-bord-energetique-lixee-ziwifi32.png --alt Découverte de l'interface graphique de la Box Lixee --img width="940" height="747" %}

![Mise à jour du système lixee Box]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/mise-a-jour-firmware-lixee-box.webp{{ cachebuster }}){: width="940" height="600" class="lazyload pictaninpost"}{: target="_blank"}

## Prise en charge Zigbee

Actuellement, la prise ne charge Zigbee est assez limitée

![Mode inclusion Zigbee lixee-box avec Zlinky]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/mode-jumellage-inclusion-zigbee-zlinky.webp{{ cachebuster }}){: width="940" height="497" class="lazyload pictaninpost"}{: target="_blank"}
