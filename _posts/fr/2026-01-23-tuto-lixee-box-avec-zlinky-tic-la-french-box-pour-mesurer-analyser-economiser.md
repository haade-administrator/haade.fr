---
guid: 169
title: "Lixee Box Économiseur d'énergie"
description: "test de la lixee-box, box 100% compatible avec le zlinky, rentre dans le monde de la domotique et contrôle l'énergie de ton habitat"
ref: "Lixee-Box"
layout: post
authors: [Nico]
date: 2026-01-23 18:00
last_modified_at: 
categories: [Haade-lab, Videos, Zigbee]
tags: []
video: Qw2jz4_rqTA
image: 'lixee-box-zlinky_tic-box-francaise-mesure-analyse-economise.png'
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
rating: 3.8
sourcelink:
  - https://lixee.fr/fr/
  - https://faire-ca-soi-meme.fr/
  - https://github.com/fairecasoimeme/LiXee-Box
---

[Lixee société française issue d'une communautée Diy](https://lixee.fr/fr/){: target="_blank"} commercialise notemment quelques produits destinés entre autres à la prise de mesure d'énergie ( éléctricité, eau ou gaz ). Basé sur une communautée toujours plus intéressée, il y a environ 2 ans elle a sorti un module qui fait à l'heure actuelle toujours l'unanimité, le [**Zlinky_Tic**](https://www.domadoo.fr/fr/eco-energie/7492-lixee-module-tic-vers-zigbee-30-pour-compteur-linky-v2-zlinky-v4000-0014-3770014375179.html?domid=39){: target="_blank"}, pour ceux qui ne connaissent pas c'est un ***module de téléinformation zigbee 100% compatible et intégrable*** au **Linky**. Fin Novembre La société m'a envoyé la lixee-box en version **Lite** pour effectuer des tests sur la ZIWIFI32S3.

{% picture posts/{{ page.guid }}/decouverte-lixee-box-et-zlinky-tic.png --alt Découverte Zlinky Box et Zlinky_tic v2 --img width="940" height="529" %}

La présentation et l'emballage restent sobre, sans fioriture, la lixee-box version lite contient le dongle-box ainsi que le zlinky_tic v2 de quoi,

> Mesurer, analyser,économiser comme l'annonce Lixee

{% include product-embed.html image="lixee-box-domotique-wifi-zigbee-compteur-lixee-zigbee.png" title="Box domotique WIFI Zigbee + Compteur Lixee Zigbee" brand="Lixee" description="La LiXee-Box domotique compacte centralise vos données énergétiques et optimise votre consommation. Suivi en temps réel, historique complet, automatisations intelligentes, gestion des seuils et routage énergétique. Compatible WiFi, Bluetooth, Zigbee et MQTT, intégration facile avec Home Assistant et données Linky." domlink="french-days/8424-lixee-box-domotique-wifi-zigbee-compteur-lixee-zigbee-3770014375193.html" %}

**En ce qui concerne le Zlinky** inclus dans ce kit, à l'époque [j'ai rédigé un article complet qui en parle]({% post_url /fr/2024-03-20-teleinfo-plug-n-play-zigbee-linky-lixee-zlinky-tic %}). N'hésite pas à le consulter !

## Tuto Installation {{ page.ref }}

La façon la plus simple d'installer et de trouver l'adresse de la lixee-box afin d'utiliser au mieux la web app est de suivre la vidéo de l'installation officielle. Simple et relativement efficace.

{% include videoPlayer.html youtubeId="1w0yDo08sk0" %}

## Détail de la {{ page.ref }}

> Pour plus de détalis de l'ensemble des informations de la Lixee-box n'hésite pas à [consulter le référentiel dédié sur github](https://github.com/fairecasoimeme/LiXee-Box){: target="_blank"}

Proche **d'une fabrication artisanale**, la {{ page.ref }} reste néanmoins une belle conception française, simple de montage mais efficace. Le boitier semi-translucide cache une carte embarquée à base de **esp32-S3 wifi/bluetooth** ainsi qu'une puce **zigbee version Zigate+ la NXP JN5189**. 

> D'ailleurs cette conception fait beaucoup penser aux produits Zigate, tant par le matériel mais aussi par l'interface utilisée! 

{% picture posts/{{ page.guid }}/box-lixee-ziwifi32.png --alt Présentation du dongle Lixee --img width="940" height="529" %}

Une fois branchée sur une prise usb classique la lixee-box se pare d'une belle lumière bleue, si tu as bien suivi le tuto d'installation de la lixee-box tu auras bien l'adresse web pour accéder directement à l'interface.

{% picture posts/{{ page.guid }}/présentation-box-lixee-demontee.png --alt Présentation du dongle Lixee box démonté --img width="940" height="529" %}

Un démontage de la {{ page.ref }} est très simple comme annoncé plus haut, il suffit de dévisser les deux visses présentes sous le dessous de la box et le tour est joué tu as accès au **Graal**.

{% picture posts/{{ page.guid }}/circuit-imprime-vue-pres-lixee-box.png --alt Tour d'horizon du circuit imprimé du dongle Lixee box --img width="940" height="529" %}

{% include product-embed.html image="lixee-module-tic-vers-zigbee-30-pour-compteur-linky-v2-v4000-0014.png" title="Zlinky" brand="Lixee" description="Transmettez toutes les informations de votre compteur Linky à votre box domotique grâce au module Tic Linky Zigbee 3.0 V2 de Lixee." domlink="eco-energie/7492-lixee-module-tic-vers-zigbee-30-pour-compteur-linky-v2-v4000-0014-3770014375179.html" amazlink="3Ya26B0" %}

**Un circuit imprimé relativement simple se cache dessous:**

- une puce esp32-s3 pour la gestion wifi/bluetooth
- une puce Nxp pour le Zigbee
- un bouton reset et flash
- un interrupteur ftdi/esp32
- des ports GPIO libre

Les ports GPIO pour un tel type de produits sont un réel plus si tu souhaites intégrer dess sondes ou tout autres types de produits.

## Pourquoi la {{ page.ref }} se lance sur ce créneau

D'après mon ressentie, la société a voulu simplifier la mise en place d'un **interface de gestion d'énergie pour les nuls en domotique**. Cependant l'interface de la **page d'accueil énergie apporte un réel plus** que l'on ne trouve pas encore par défaut sur home-assistant 

> Bref une interface bien **frenchie** et **100%** compatible avec le **linky**.

{% picture posts/{{ page.guid }}/Interface-page-accueil-lixee-box.png --alt Interface V2.14 Lixee-box avec info tarif en cours et étiquettes énergétiques la page d'accueil une très belle réussite --img width="940" height="529" %}

Cette box basée sur un mix de référentiels [lixee-zibridge](https://github.com/fairecasoimeme/LiXee-ZiBridge){: target="_blank"} et firmware déjà existant, là je parle du **zigate v2** ce qui permet à l'entrreprise de créer un pont entre l'esp32-s3 et la puce nxp Zigbee. 

> La puce Zigbee intègre le firmware Zigate v2.

Ce choix n'est je ne le pense pas stratégique **sur le plan matériel**, pourquoi j'avance ça ! Simplement que la société aurait pu directement utiliser une puce esp32 qui intègre la puce zigbee comme pourquoi pas la **esp32-H2 ou C5/C6**, la clé aurait été beaucoup plus petite et plus simple à réaliser, ***mais utiliser le référentiel esp-idf veut aussi dire, apprendre, créer et coder entièrement une nouvelle interface***. 

> Lixee se base sur le travail de Zigate+ pour la prise en charge et gestion du coordinateur Zigbee.

## L'interface {{ page.ref }}

Afin d'agrémenter cet article j'ai fait une vidéo qui reprend les fonctions de l'interface de la {{ page.ref }}

{% include videoPlayer.html youtubeId="Qw2jz4_rqTA" %}

Le temps d'effectuer les tests j'ai **pu réaliser deux mises à jours**, c'est bien, ça veut aussi dire que le développement est plutôt actif, bon faut le dire en ce moment je ne suis pas le plus rapide en rédaction.

La **page d'accueil est super intéressante** et relativement bien monté, tu branches ton Zlinky sur le linky, tu l'intègres dans l'écosystème et à partir de là plus rien à faire à part patienter le temps que les infos d'énergies remontent.

> **Voilà enfin une page énergie faite pour les français**.

**Ci dessous retrouve un gif animé mises à jours de la {{ page.ref }}**

![Mise à jour du système lixee Box]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/mise-a-jour-firmware-lixee-box.webp{{ cachebuster }}){: width="940" height="600" class="lazyload pictaninpost"}{: target="_blank"}

## Et le coordinateur Zigbee dans tout ça !

La Lixee box te permet d'intégrer d'autres modules zigbee dans l'interface cependant [la liste de modules est relativement restreinte](https://github.com/fairecasoimeme/LiXee-Box?tab=readme-ov-file#-appareils-lixee-compatibilit%C3%A9-compl%C3%A8te){: target="_blank"}. L'intégration fonctionne relativement bien, j'ai tout de même rencontré un défaut, quand un module est déconnecté un certain temps il a du mal ensuite à rejoindre le réseau.

> **Actuellement, la prise ne charge Zigbee est assez limitée**

![Inclusion d'un module Zigbee avec la Lixee-box]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/mode-jumellage-inclusion-zigbee-zlinky.webp{{ cachebuster }}){: width="940" height="497" class="lazyload pictaninpost"}{: target="_blank"}

**Ce qui serait intéressant** serait d'inclure la prise en charge de [Zigbee2mqtt](https://www.zigbee2mqtt.io/){: target="_blank"}

## Caractéristiques techniques de la {{ page.ref }}

|**Alimentation**|5 VCC via le port USB-A|
|**MCU**|ESP32-S3-WROOM-1-N16R8|
|**Fréquence**|240Mhz|
|**SRAM**|512Kb|
|**PSRAM**|8Mb|
|**ROM**|16Mb|
|**WiFi**|802.11b/g/n|
|**Zigbee**|3.0|
|**Bluetooth**|Low Energy 5.0|
|**Interfaces**|1x module ZiGate+<br>1x port USB (power + UART0)<br>1x bouton Reset<br>1x bouton Flash (pour l'ESP32S3 - GPIO0)<br>1x sélecteur ESP / FTDI (pour rediriger UART0 vers l'ESP32 ou vers la ZiGate)<br>12x GPIOs|

{% include product-embed.html image="lixee-carte-universelle-lixee-ziwifi32-lite-wifi-bluetooth-zigbee.png" title="Carte universelle LiXee-ZiWifi32 Lite WiFi, Bluetooth, Zigbee" brand="Lixee" description="La LiXee-ZiWifi32 Lite est une carte universelle compacte pour la domotique, intégrant Wi-Fi, Bluetooth et Zigbee. Compatible avec jeedom, domoticz et Home Assistant, elle permet un contrôle flexible de capteurs et actionneurs. Idéale pour ponts Zigbee, LiXee-Box ou prototypes multi-protocoles." domlink="dongle-zigbee/8423-lixee-carte-universelle-lixee-ziwifi32-lite-wifi-bluetooth-zigbee-3770014375162.html" %}

## Conclusion

**La Lixee-box permet de réaliser une entrée dans le monde de la domotique**, orientée novices qui veulent avoir un premier aperçu de la consommation du domicile, **l'intégration de la fonction mqtt** et l'option discovery la rend interopérable avec Home Assistant ou Jeedom. Cependant la version 2.14 **rend complexe la mise en place des scenarios**. En ce qui concerne l'intégration des modules Zigbee, elle fait le Job mais **ceux-ci sont relativement restreint**, on regrettera l'absence d'une interopérabilité avec **zigbee2mqtt**.

> Des **problèmes de latences de la page d'accueil** seront peut être corrigé dans les mise à jours futures.
