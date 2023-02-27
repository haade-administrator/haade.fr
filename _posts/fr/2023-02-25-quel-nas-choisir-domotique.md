---
guid: 48
title: "Quelle carte choisir pour monter son nas et sa domotique"
description: "Dans cet article je ne cherche pas automatiquement un Nas complet mais plutôt une carte mère adaptée aux besoins d'une maison, alors quelle carte conviendrait le mieux pour un Nas et la domotique en 2023"
layout: post
author: Nico
date: 2023-02-25 07:34
last_modified_at: 
categories: [Haade-lab, Domotique, Securite]
tags: []
image: 'choisir-carte-monter-nas-domotique-nvr.png'
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
  - https://www.axzez.com/axzez-circuit-boards
  - https://www.zimaboard.com/
  - https://www.hardkernel.com/
  - https://www.kickstarter.com/projects/argonforty/argon-eon-4-bay-network-storage-powered-by-raspberry-pi-4?lang=fr
  - https://wiki.radxa.com/Taco
  - https://github.com/wiretrustee/cm4-sata-board
  - https://wiki.banana-pi.org/Banana_Pi_BPI-W2
  - https://wiki.radxa.com/News/2019/12/introduce-rockpi-sata-hat
  - https://www.hardkernel.com/shop/odroid-h3-plus/
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

La carte " Interceptor carrier board " est une carte embarquée accueillant le Rapberry pi compute (cm4), c'est une bonne chose attention aux dispos actuelles, cependant Axzez vend sa carte avec le CM4. Elle est conçu spécialement pour les NAS et NVR pil poil ce que je cherche.

{% picture posts/{{ page.guid }}/Axzez-carte-nas-nvr-raspberry-cm4.png --alt carte Nas CM4 Axzez --img width="940" height="719" %}

**caractéristiques:**
- 2 prises HDMI (4Kp60)
- 5 ports SATA (via JMicron JMB585)
- 4 ports gigabit RJ-45 (via un commutateur gigabit RTL8367RB géré)
- 4 ports USB 2.0 (2 via en-tête de broche)
- RS-485
- Connecteur d'alimentation ATX 24 broches
- Horloge RTC avec batterie de secours
- 4 connecteurs de ventilateur à 3 broches
- Embase à 8 broches pour le voyant d'alimentation du système, le bouton d'alimentation et le câble série UART
- Deux connecteurs FFC (40 pos) pour une extension future


## Les **+**{: .blue} du produit:
- choix du module CM4
- 4 ports rj45 switch extensible à **16 ports en POE+** (switch POE+)
- connecteurs ventilateurs
- achat d'accessoires supplémentaires
- connection de **5** disques dur
- Alimentation Atx
- les connecteurs FFC
- le prix
- [Image Debian](https://www.axzez.com/software-downloads){: target="_blank"} fourni par le fabriquant

## Les **-**{: .red} du produit
- absence de support NVME SSD
- absence support NVME A+E key (idéal pour ajouter un google Coral en interne )
- les frais de livraison 105$ pour la france.

{% picture posts/{{ page.guid }}/axzez-boitier-raccable.png --alt carte Nas CM4 Axzez raccable --img width="940" height="529" %}

Si je devais choisir ce produit je le prendrai au complet à savoir:
- le boitier raccable 19'' à 149$
- la carte interceptor + CM4 à 174$
- l'alim 350w à 64$
- deux modules d'extensions poe+ 2x64$ soit 128$
- un convertisseur Voita 48vdc à 17$

Le coût total livré: **637$** soit env 610€
À ce prix il te faudra rajouter les disques dur, mais pour 600€ tu possèdes un système NAS, NVR et switch POE+ pas mal.

# 2 carte Zimaboard

**Qu'est-ce que ZimaBoard**
Serveur monocarte pour les créateurs
ZimaBoard est un serveur monocarte low-cost exclusivement conçu pour les makers et les geeks. Il possède à la fois l'évolutivité d'un ordinateur monocarte (SBC) x86 et la puissance appropriée d'un micro-serveur. Cette carte est idéal pour monter un Nas, routeu, serveur media, logiciel de domotique, VPN.

**Les particularités:**
- Processeur Intel Quad Core jusqu'à 2,2 GHz
- Réseau local double Gigabit Ethernet
- Linux / Windows / OpenWrt / pfSense / Android

{% picture posts/{{ page.guid }}/zimaboard-single-board-server-for-creators.png --alt carte Nas Zimaboard --img width="940" height="652" %}

**Caractéristiques**:
- Disque dur/SSD 2 ports SATA 6,0 Gb/s
- LAN 2 ports LAN GbE
- Realtek 8111H
- USB 2x USB 3.0
- PCle 1x PCle 2.0 x4
- Affichage 1x Mini-DisplayPort 1.2 4k@60Hz
- Alimentation CC 12V 5.5x2.5mm

## Les **+**{: .blue} du produit:
- Système [NAS Casaos](https://www.casaos.io/){: target="_blank} compatible
- disponible en trois variantes
- compatible home-assistant via casaos
- 2 ports rj45 Giga
- qualité
- système de refroidissement
- Le prix

## Les **-**{: .red} du produit
- absence support Nvme ssd
- absence Nvme ssd A+E M.key
- accepte deux disques dur max soit 72TB
- non prévu pour une intégration dans un boitier spécifique

Si je devais choisir cette carte je prendrai la version intermédiaire Zimaboard 432 équipé de 4 coeur et 4gb de memoire et 32gb emmc de capacité, actuellement le prix est de 159$

# 3 rockpi taco

Radxa Taco est une solution NAS/routeur complète conçue sur la base du module de calcul Raspberry Pi CM4. Il utilise les bus PCIe haut débit pour une connectivité réseau et des E/S de stockage ultra-rapides.

{% include product-embed.html image="https://ae01.alicdn.com/kf/S2edd4d00669f40fea8a80f3e404e8ad40/Radxa-TACO-a-d-velopp-le-fond-de-panier-pour-supporter-raspberry-pie-CM4-afin-de.jpg_Q90.jpg_.webp" title="Carte Nas Radxa Taco" brand="Radxa" description="Carte Nas, domotique Radxa Nas Taco" affiliate="_DDsHRKD" %}

{% picture posts/{{ page.guid }}/800px-Taco-back.png --alt carte Nas Rockpi Taco  --img width="800" height="526" %}

**Caractéristiques**:
- Jusqu'à 5x HDD/SSD, prend en charge les SSD 2,5 pouces ou 3,5 pouces
- Commutateur PCIe haute vitesse pour SATA et Ethernet
- 1x Ethernet 2.5G et 1x GbE natif
- Une clé M.2 M pour SSD NVMe
- Une clé M.2 A+E pour modules WiFi 6 ou module Google Coral AI
- Entrée d'alimentation 12 V CC pour disque dur 2,5 et 3,5 pouces
- Prise en charge de l'alimentation ATX standard externe pour disque dur 3,5 pouces
- Prise en charge du mode de suspension du disque dur
- Prise en charge du logiciel RAID 0/1/5/10
- Prise en charge du mode d'accès direct USB à partir du PC (USB 2.0 uniquement)
- Ventilateur de contrôle PWM en option pour la répartition de la chaleur du disque dur
- Écran OLED en option pour les informations système telles que l'adresse IP ou l'utilisation du stockage

## Les **+**{: .blue} du produit:
- ultra complet 
- Full support Nvme
- Support de 5DD
- Compatible CM4
- compatible Raspberrypi OS
- Horloge RTC

## Les **-**{: .red} du produit
- manque le Poe+
- absence de boitier d'intégration
- dépend des dispos Raspberry
- Le prix 145€ sans CM4

{% picture posts/{{ page.guid }}/620px-Taco-front.png --alt carte Nas Rockpi Taco  --img width="620" height="599" %}

# 4 Radxa sata Raspberrypi 4

ROCK Pi Dual/Quad SATA HAT est un addon HAT conçu pour Raspberry Pi 4. Il utilise les bus USB3 haut débit sur Raspberry Pi 4 et fournit une solution NAS complète basée sur Raspberry Pi 4. Il présente les caractéristiques suivantes :

**Caractéristiques**

- Jusqu'à 4x HDD/SSD, prend en charge les SSD 2,5 pouces ou 3,5 pouces
- Entrée d'alimentation de type C avec prise en charge USB PD pour SSD 2,5 pouces et Raspberry Pi 4 (matériel v1.1)
- Entrée d'alimentation 12 V CC pour disque dur 2,5 et 3,5 pouces et Raspberry Pi 4 (matériel v1.2)
- Prise en charge de l'alimentation ATX standard externe pour disque dur 3,5 pouces
- Prise en charge du mode de suspension du disque dur
- Prise en charge du logiciel RAID 0/1/5
- Prise en charge du mode d'accès direct USB à partir du PC
- Ventilateur de contrôle PWM en option pour la répartition de la chaleur du disque dur
- Écran OLED en option pour les informations IP/stockage

{% include product-embed.html image="https://ae01.alicdn.com/kf/S59303d95a12e44dcb3745e5a50961cf0t/RASPBERRY-PI-4-KIT-de-serveur-de-stockage-r-seau-SATA-QUAD.jpg_Q90.jpg_.webp" title="Nas Radxa rockpi4" brand="Radxa" description="Boitier Nas, domotique Radxa Nas Rockpi Raspberrypi4" affiliate="_DnBjP05" %}

[carte extension Radxa](https://wiki.radxa.com/SATA_HAT){: target="_blank"}

Si je devais acheter ce produit je le prendrai au complet soit un boitier livré avec le module Penta Sata compatible rockpi 4C

## Les **+**{: .blue} du produit:
- compatible rapsberry-pi 4
- support 4 dd
- compatible raspberrypi OS
- Écran Oled + divers voyant
- boitier vendu complet saus raspberry
- support horloge rtc

## Les **-**{: .red} du produit
- dépend des dispos raspberrypi 4
- absence NVME
- généralement vendu sans alim

Si je devais acheter ce produit je prendrais le kit complet pour rasberrypi 4gb il coute actuellement 177€ à ça il faut rajouter un raspberrypi 4b à 76€ et une [alimentation 12V cc de 40w mini à 10€](https://s.click.aliexpress.com/e/_Ddli1fT){: target="_blank"} soit 163€ l'ensemble hors disque dur.

# 5 odroid HC4

ODROID-HC4 est une nouvelle plate-forme Home-Cloud basée sur le même processeur ARM que l'ODROID-C4. Nous avons adopté un processeur quadricœur Cortex-A55 à 1,8 GHz fabriqué en 12 nm et économe en énergie avec une RAM DDR4 de 4 Go plus rapide. Une puce flash SPI de 16 Mo existe sur la carte pour la fonction utile Petitboot.

{% picture posts/{{ page.guid }}/odroid-hc4-nas-2sdcard.png --alt carte Nas odroid HC4  --img width="800" height="378" %}

|**A** processeur (Amlogic S905X3)|**H** 2x indicateurs LED du système|
|**B** Mémoire DDR4 (4 Go)|**I** 1x UART pour console système|
|**C** 2x ports SATA|**J** 1x récepteur IR|
|**D** 1x port Ethernet RJ45 (10/100/1000)|**K** 5x broches GPIO (pour écran OLED en option)|
|**E** 1x HDMI 2.0|**L** 1x emplacement Micro SD|
|**F** 1x port hôte USB 2.0|**M** 1x ventilateur de refroidissement|
|**G** 1x prise d'alimentation CC (diamètre extérieur : 5,5 mm, diamètre intérieur 2,1 mm)|**N** 1x interrupteur de démarrage|

{% picture posts/{{ page.guid }}/ODROID-HC4-disque-boitier-grille-pain.jpg --alt carte Nas odroid HC4 dd et boitier plus oled  --img width="400" height="400" %}

# 6 Odroid H3+

{% picture posts/{{ page.guid }}/odroid-h3+-carte-nas.png --alt carte Nas odroid H3+ --img width="940" height="361" %}

|**A** Processeur (Intel Pentium Silver N6005)|**J** 1 port HDMI 2.0 |
|**B** 2 emplacements SO-DIMM DDR4 (prise en charge de la mémoire double canal)|**K** 1 port DisplayPort 1.2 |
|**C** 1 prise de module PCI Express M.2 (NGFF-2280)|**L** 2 ports Ethernet RJ45 (10/100/1000/2500) |
|**D** 1 x prise eMMC (carte multimédia intégrée)|**M** 5 x indicateurs LED système |
|**E** 2 connecteurs d'alimentation SATA (pas de 2,5 mm, connecteur compatible JST-XH)|**N** 1 x connecteur d'extension périphérique (24 broches) |
|**F** 2 x connecteurs de données SATA3 6.0 Gb/s|**O** 1 x interrupteur d'alimentation |
|**G** 1 x prise d'alimentation CC|**P** 1 x interrupteur de réinitialisation |
|**H** 2 ports USB 3.0|**Q** 1 x connecteur de batterie de secours (2 broches) |
|**I** 2 ports USB 2.0|**R** 1 x connecteur de ventilateur de refroidissement actif (4 broches) |
|**S** 1 x sortie audio, 1 x entrée audio, 1 x sortie SPDIF ||

# 5 Raspberry pi 4 + Argon Eon
# 6 Wiretrustee


# 7 Bananapi-bpi-w2

{% include product-embed.html image="https://ae01.alicdn.com/kf/Hd02fb80eb00a40689f5ea759a41ad2764/Banana-Pi-BPI-W2-routeur-NAS-intelligent-RTD1296-conception-de-puce.jpg_Q90.jpg_.webp" title="carte Nas bananapi bpi w2" brand="Radxa" description="Cate pour montage Nas bananapi bpi w2" affiliate="_Dk2cvU9" %}

{% picture posts/{{ page.guid }}/bananapi-bpi-w2.jpg --alt carte Nas bananapi-bpi-w2 --img width="750" height="550" %}

