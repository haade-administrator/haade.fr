---
guid: 50
title: "Quelle carte choisir pour monter son nas et sa domotique avec nvr"
description: "Dans cet article je ne cherche pas automatiquement un Nas complet mais plutôt une carte mère adaptée aux besoins d'une maison, alors quelle carte conviendrait le mieux pour un Nas et la domotique en 2023"
layout: post
author: Nico
date: 2023-03-03 07:34
last_modified_at: 
categories: [Haade-lab, Domotique, Securite, News]
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

J'ai comme projet d'équiper une maison d'un serveur NAS qui servira **essentiellement pour la domotique** mais aussi de serveur **d'enregistreur NVR**. La priorité est au tarif avec le maximum de fonctionnalités et d'avoir la main sur le système complet.

La question est de savoir sur quel système je vais m'orienter, Installation de home-Assistant sur le disque principal et ainsi utiliser la domotique et le NVR ou l'installation de Openmediavault comme système NAS et ainsi pouvoir utiliser d'autres aspects de ce serveur comme le stockage de documents, audio et Vidéo ?

**Les critères d'évaluation:**

- l'intégration OMV
- la disponibilité du matériel
- le prix
- la connectique ( Nvme interne, )
- La connection aux disques supplémentaires

**Mes Besoins:**

- minimum deux Disques dur pour le montage Zfs
- 4 GO de ram Minimum
- stockage interne de 8GO minimum
- 1 emplacement A+E pour google coral ( de préférence )
- 2 ports RJ45
- 1 emplacement ATX

# Cartes Indépendantes

## #1 odroid HC4

[Lien wiki odroid hc4](https://wiki.odroid.com/odroid-hc4/odroid-hc4){: target="_blank"}


ODROID-HC4 est une nouvelle plate-forme Home-Cloud basée sur le même processeur ARM que l'ODROID-C4. Nous avons adopté un processeur quadricœur Cortex-A55 à 1,8 GHz fabriqué en 12 nm et économe en énergie avec une RAM DDR4 de 4 Go plus rapide. Une puce flash SPI de 16 Mo existe sur la carte pour la fonction utile Petitboot.

{% picture posts/{{ page.guid }}/odroid-hc4-nas-2sdcard.png --alt carte Nas odroid HC4  --img width="800" height="378" %}

**Caractéristiques**

|**A**| processeur (Amlogic S905X3)|**H**| 2x indicateurs LED du système|
|**B**| Mémoire DDR4 (4 Go)|**I**| 1x UART pour console système|
|**C**| 2x ports SATA|**J**| 1x récepteur IR|
|**D**| 1x port Ethernet RJ45 (10/100/1000)|**K**| 5x broches GPIO (pour écran OLED en option)|
|**E**| 1x HDMI 2.0|**L**| 1x emplacement Micro SD|
|**F**| 1x port hôte USB 2.0|**M**| 1x ventilateur de refroidissement|
|**G**| 1x prise d'alimentation CC (diamètre extérieur : 5,5 mm, diamètre intérieur 2,1 mm)|**N**| 1x interrupteur de démarrage|

{% picture posts/{{ page.guid }}/ODROID-HC4-disque-boitier-grille-pain.jpg --alt carte Nas odroid HC4 dd et boitier plus oled  --img width="400" height="400" %}

> Abrège propose un tutoriel pour effectuer un montage d'un Nas avec une carte odroid HC4, pour suivre ce tuto il faudra bienentendu une imprimante 3D

{% include youtubePlayer.html id="luQFv4qzQtU" %}

**Les + du produit:**{: .blue}
- support 2 SSD
- memoire DDR4 intégré
- le prix
- compatible debian/openmediavault
- indépendant des stocks de Raspberry 

**Les - du produit:**{: .red}
- absence Nvme
- absence stockage interne
- absence alimentation
  

## #2 Odroid H3+

[Lien wiki odroid h3+](https://wiki.odroid.com/odroid-h3/start){: target="_blank"}

ODROID-H3+ a le même facteur de forme et une efficacité énergétique similaire à son prédécesseur, l'ODROID-H2+. Mais, H3+ est plus puissant, offre des performances plus élevées.

Avec une grande compatibilité, un tout nouvel ordinateur monocarte x86 64 bits ainsi qu'une grande capacité de mémoire et des ports IO avancés.

{% picture posts/{{ page.guid }}/odroid-h3+-carte-nas.png --alt carte Nas odroid H3+ --img width="940" height="361" %}

**Caractéristiques**

|**A**| Processeur (Intel Pentium Silver N6005)|**J**| 1 port HDMI 2.0 |
|**B**| 2 emplacements SO-DIMM DDR4 (prise en charge de la mémoire double canal)|**K**| 1 port DisplayPort 1.2 |
|**C**| 1 prise de module PCI Express M.2 (NGFF-2280)|**L**| 2 ports Ethernet RJ45 (10/100/1000/2500) |
|**D**| 1 x prise eMMC (carte multimédia intégrée)|**M**| 5 x indicateurs LED système |
|**E**| 2 connecteurs d'alimentation SATA (pas de 2,5 mm, connecteur compatible JST-XH)|**N**| 1 x connecteur d'extension périphérique (24 broches) |
|**F**| 2 x connecteurs de données SATA3 6.0 Gb/s|**O**| 1 x interrupteur d'alimentation |
|**G**| 1 x prise d'alimentation CC|**P**| 1 x interrupteur de réinitialisation |
|**H**| 2 ports USB 3.0|**Q**| 1 x connecteur de batterie de secours (2 broches) |
|**I**| 2 ports USB 2.0|**R**| 1 x connecteur de ventilateur de refroidissement actif (4 broches) |
|**S**| 1 x sortie audio, 1 x entrée audio, 1 x sortie SPDIF ||

**Les + du produit:**{: .blue}
- Intel quad core processeur
- refroidissement passif
- 2 emplaccements DDR4
- 1 emplacement NVME DD
- horloge rtc incluse
- 2 emplacement disque dur montage amovible
- 1 support emmc ( stockage interne )
- 2 ports rj 45

**Les - du produit:**{: .red}
- le prix 160€
- ajout de memoire DDR non incluse
- absence d'un emplacement NVME secondaire
- ajout emmc non inclus

> Cette Carte est intéressante pour la création d'un NAS Multimédia c'est la plus puissante du comparatif mais aussi la plus chère si on compte les options.

## #3 Bananapi-bpi-w2

Le Banana Pi BPI-W2 est une carte de développement basée sur un routeur, qui peut fonctionner sur une variété de systèmes d'exploitation open source, notamment OpenWrt, Android et Linux. Il dispose de 1 ports LAN Gigabit, 1 WAN Gigabit. il est conçu avec Realtek RTD1296, Quad-core ARM Cortex-A53. avec mémoire flash 2G DDR4 et 8G eMMC intégrée.

{% picture posts/{{ page.guid }}/bananapi-bpi-w2.jpg --alt carte Nas bananapi-bpi-w2 --img width="750" height="550" %}

[lien wiki de la carte](https://wiki.banana-pi.org/Banana_Pi_BPI-W2){: target="_blank"}

**Caractéristiques**

- Realtek RTD1296, ARM Cortex-A53 à quatre cœurs
- Carte graphique Mali T820 MP3
- SDRAM DDR4 2G
- Flash eMMC 8G
- Interface Mini PCIE 2.0, 1.1, interface SDIO, M.2
- L'emplacement MicroSD prend en charge jusqu'à 256 Go d'extension
- 2 entrées MIC/sortie audio
- 2 interfaces SATA
- 1X Gigabit LAN 1x Gigabit WAN
- 1xUSB 3.0 2xUSB 2.0
- Entrée HDMI et sortie HDMI
- Mini DP
- TYPE C

**Les + du produit:**{: .blue}
- stockage interne 8G
- 2 x Nvme Key E
- 1 x key G
- branchement 2 x ssd
- le prix 108€
- branchement pour batteries RTC
- multi-systeme compatible ( ubuntu, debian, android )

**Les - du produit:**{: .red}
- 2G de DDR4
- absence horloge interne RTC
- aurait pu accueillir 4 ssd

{% include product-embed.html image="https://ae01.alicdn.com/kf/Hd02fb80eb00a40689f5ea759a41ad2764/Banana-Pi-BPI-W2-routeur-NAS-intelligent-RTD1296-conception-de-puce.jpg_Q90.jpg_.webp" title="carte Nas bananapi bpi w2" brand="Bananapi" description="Cate pour montage Nas bananapi bpi w2" affiliate="_Dk2cvU9" %}

## #4 carte Zimaboard

[Lien Zimaboard](https://www.zimaboard.com/){: target ="_blank"}

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

**Les + du produit:**{: .blue}
- Système [NAS Casaos](https://www.casaos.io/){: target="_blank} compatible
- disponible en trois variantes
- compatible home-assistant via casaos
- 2 ports rj45 Giga
- qualité
- système de refroidissement
- Le prix

**Les - du produit:**{: .red}
- absence support Nvme ssd
- absence Nvme ssd A+E M.key
- absence Poe+
- accepte deux disques dur max soit 72TB
- non prévu pour une intégration dans un boitier spécifique

Si je devais choisir cette carte je prendrai la version intermédiaire Zimaboard 432 équipé de 4 coeur et 4gb de memoire et 32gb emmc de capacité, actuellement le prix est de 159$

## #5 Radxa Penta Sata Hat

Rock Pi Penta Sata Hat est un accessoire conçu pour Rock Pi 4. Il utilise les bus PCIe à grande vitesse sur Rock Pi 4 et fournit une solution NAS complète basée sur Rock Pi 4.

**Caractéristiques**

- Jusqu'à 5x HDD / SSD, prise en charge de 2,5 pouces ou 3,5 pouces SSD, jusqu'à 100t de stockage
- 4X SATA + 1X ESATA avec puissance
- Utilisez deux voies de bus PCIe 2.1 sur Rock Pi 4
- Support d'alimentation ATX standard externe pour le disque dur et le rock pi 4
- Entrée d'alimentation DC 12V pour 2,5 / 3,5 HDD Power and Rock Pi 4
- Prise en charge du mode suspension du disque dur
- Raid du logiciel de support 0/1/5
- Ventilateur de commande PWM en option pour la répartition de la chaleur du disque dur
- Affichage OLED en option pour les informations IP / stockage

[carte extension Radxa](https://wiki.radxa.com/SATA_HAT){: target="_blank"}

**Caractéristiques Rockpi 4C+**

|**Processeur**|64Bits Hexa Core Processeur<br>Rockchip rk3399-t, Double cortex-72<br>fréquence 1,5 GHz avec Cortex-A53 Quad<br> fréquence 1,0 GHz, GPU Mali T860MP4<br>support OpenGL ES 1.1 / 2.0 / 3.0 / 3.1 / 3.2<br> Vulkan 1.0, ouvert CL 1.1 1.2, DX11.|
|**Mémoire**|lpddr4 64 bits LPDDR4 à double canal @ 3200 Mo / s, 1 Go / 2 Go / 4 Go Optionel|
|**Connecteur**|EMMC de stockage<br>Carte μSD (emplacement μsd prend en charge jusqu'à 256 Go de carte μsd)|
|**Afficher**|un micro HDMI 2K jusqu'à 1440p à 60<br>Un micro HDMI 4K 2.0 jusqu'à 4k @ 60<br>MIPI DSI 4 LANES via le connecteur FPC<br>Seuls deux des HDMI 2K, HDMI 4K et MIPI DSI peuvent fonctionner en même temps.|
|**Audio**|3,5 mm Jack HD Codec qui prend en charge l'audio jusqu'à l'audio 24 bits / 96 kHz.|
|**Caméra**|MIPI CSI 2 LANES via le connecteur FPC<br>prends en charge jusqu'à 800 MP de caméra (connecteur de tangage de 0,3 mm).|
|**Wireless**|802.11 AC WiFi<br>BT 5.0<br>avec une antenne externe|
|**USB**|USB 3.0 OTG X1, Upper, logiciel configurable pour être hôte ou OTG<br>USB 3.0 hôte x1<br>USB 3.0 dédié<br>USB 2.0 hôte x2|
|**Ethernet**|1 x Gbe Lan avec le soutien au pouvoir sur Ethernet (POE)<br>Un module supplémentaire est nécessaire pour l'alimentation de Poe|
|**IO**|En-tête d'extension à 40 broches<br>2 x uart<br>2 x bus SPI<br>Bus de 3 x i2c<br>1 x PCM / I2<br>1 x SPDIF<br>2 x PWM<br>1 x ADC<br>6 x gpio<br>2 x 5V CC Power en<br>2 x 3,3 V CC Power in|
|**Alim**|USB C 5V / 3A|
|**Taille**|85 mm x 54 mm|

[Rockpi 4](https://rockpi.org/rockpi4){: target="_blank"}


**Les + du produit:**{: .blue}
- adaptée à l'ensemble des cartes rockpi 4
- support pour carte stockage emmc
- support pour 1x NVME SSD
- support pour poe supplémentaire
- support 5 dd
- Software armbian/debian/ubuntu
- Écran Oled + divers voyant
- boitier vendu complet avec ou sans rockpi4
- support horloge rtc

**Les - du produit:**{: .red}
- beaucoup d'options à rajouter
- généralement vendu sans alim

> Si je devais acheter ce produit je le prendrai au complet soit un boitier livré avec le module Penta Sata compatible rockpi 4C+

Le **kit sans rockpi est vendu environ 205€** ou **330€ avec la carte**, si j'étais toi je prendrai la dernière en date la version 4C+, lien d'une alimentation compatible et une [alimentation 12V cc de 40w mini à 10€](https://s.click.aliexpress.com/e/_Ddli1fT){: target="_blank"} soit **340€** l'ensemble hors disque dur.



# Cartes basées Raspberry pi CM4

## #1 Axzez

[Lien de la carte Axzez](https://www.axzez.com/axzez-circuit-boards){: target="_blank"}

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


**Les + du produit:**{: .blue}
- choix du module CM4
- 4 ports rj45 switch extensible à **16 ports en POE+** (switch POE+)
- connecteurs ventilateurs
- achat d'accessoires supplémentaires
- connection de **5** disques dur
- Alimentation Atx
- les connecteurs FFC
- le prix
- [Image Debian](https://www.axzez.com/software-downloads){: target="_blank"} fourni par le fabriquant

**Les - du produit:**{: .red}
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

## #2 rockpi taco

[Lien wiki du rockpi taco](https://wiki.radxa.com/Taco){: target="_blank"}

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

**Les + du produit:**{: .blue}
- ultra complet 
- Full support Nvme, 2 emplacements
- Support de 5DD
- Compatible CM4 ou radxa CM3
- Stockage interne jusqu'à 32gb via le CM4
- Mémoire jusqu'à 8GB via le CM4
- compatible Raspberrypi OS
- Horloge RTC

**Les - du produit:**{: .red}
- manque le Poe+
- absence de boitier d'intégration
- absence alimentation
- dépend des dispos Raspberry
- Le prix 145€ sans CM4 ou CM3
- impossible de booter sur ssd NVME à confirmer
- Absence POE+
- Un problème connu est que le démarrage à partir du SSD M.2 NVMe n’est pas pris en charge car il n’y a pas de pilote pour le commutateur PCIe dans le chargeur de démarrage Raspberry Pi.

Si tu choisis cette carte, et que t'es equipé d'une imprimante 3D alors ce lien pourrait t'intéresser pour l'impression d'un [boitier compatible radxa taco](https://www.thingiverse.com/thing:5811612){: target="_blank"}

{% picture posts/{{ page.guid }}/620px-Taco-front.png --alt carte Nas Rockpi Taco  --img width="620" height="599" %}

## #3 Wiretrustee les mains dans le cambouis

j'ai fait un article à l'époque ou l'entreprise existait toujours, malheureusement cette société a du fermer ses portes mais amis geek si vous voulez fabriquer cette carte j'i une bonne nouvelle les créateurs du wiretrustee l'ont rendu opensource, vous trouverez dans [le lien github](https://github.com/wiretrustee/cm4-sata-board){: target="_blank"} tout les schémas pour fabriquer le circuit imprimé

[Nas opensource base CM4]({% post_url /fr/2021-09-01-nas-opensource-pour-raspberry-pi-cm4-le-futur %})

{% picture posts/16/carte-sata-wiretrustee-raspberrypi-4-1.png --alt carte sata wiretrustee pour raspberrypi --img width="820" height="461" %}

Wiretrustee SATA est une carte porteuse Raspberry Pi Compute Module 4 (CM4) pour le stockage en réseau (NAS) DIY. Il s'agit de la première carte de ce type à transférer directement des données via l'interface CM4 PCIe native, et évite ainsi les connexions USB-SATA instables.

Wiretrustee SATA comprend quatre ports SATA, un port Ethernet gigabit et un petit facteur de forme (100 x 100 mm), ce qui permet de construire un petit NAS domestique. Il prend en charge les disques 2,5" et 3,5", à la fois les SDD et les HDD. Alors que les disques 2,5" peuvent être branchés directement, les disques 3,5" nécessitent des câbles d'extension supplémentaires.

En plus d'une carte entièrement assemblée et testée, nous prévoyons de proposer des kits de bricolage pour construire votre propre NAS complet.

**Caractéristiques et spécifications**
- 4 ports SATA 3.0
- Circuit imprimé à quatre couches 100 x 100 mm
- Prise en charge des disques 2,5" et 3,5"
- Port LAN GbE
- 2 x USB 2.0 (1 x transfert de données, 1 x flashage du firmware)
- Fente pour carte microSD
- Connecteur de ventilateur PWM
- Entrée d'alimentation 12 V CC (prise cylindrique 5,5 x 2,1 mm ou prise à quatre broches)
HDMI
- RTC avec batterie de secours
- Prend en charge toutes les versions de Raspberry Pi CM4
- UART

**Les + du produit:**{: .blue}
- opensource
- prend en charge 4 ssd
- base raspberrypi CM4
- horloge rtc

**Les - du produit:**{: .red}
- tout doit être conçu
- absence stockage interne
- 1 seul port lan

# Boitier Nas Raspberrypi 4

## #1 Radxa Dual/Quad Sata HAT

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

**Les + du produit:**{: .blue}
- compatible rapsberry-pi 4
- support 4 dd
- compatible raspberrypi OS
- Écran Oled + divers voyant
- boitier vendu complet saus raspberry
- support horloge rtc

**Les - du produit:**{: .red}
- dépend des dispos raspberrypi 4
- absence NVME
- généralement vendu sans alim

{% include product-embed.html image="https://ae01.alicdn.com/kf/Sda19c1ef27114e518a1afa6a57e83bf5N/RASPBERRY-PI-4-KIT-de-serveur-de-stockage-r-seau-SATA-QUAD.jpg_Q90.jpg_.webp" title="Nas hat radxa raspberry pi 4" brand="Radxa" description="Kit montage raspberrypi en Nas 4 disques par radxa" affiliate="_DnnkRhR" %}

{% include youtubePlayer.html id="Eix0PCB0byQ" %}

Si je devais acheter ce produit je prendrais le kit complet pour rasberrypi 4gb il coute actuellement 177€ à ça il faut rajouter un raspberrypi 4b à 76€ et une [alimentation 12V cc de 40w mini à 10€](https://s.click.aliexpress.com/e/_Ddli1fT){: target="_blank"} soit 163€ l'ensemble hors disque dur.



## #2 Argon Eon

Comme plus haut argus Eon n'est pas une carte mais un boitier Nas complet accueillant un raspberrypi 4

{% picture posts/{{ page.guid }}/boitier-nas-argon-eon-raspberry-pi.png --alt boitier Nas Argon Eon pour raspberrypi 4 --img width="940" height="529" %}

**Caractéristiques**

- 1 x Port Ethernet Gigabit
- 2 × USB 3.0
- 2 x HDMI
- Lecteur de cartes MicroSDXC
- Accès aux ports GPIO du Raspberry Pi
- La puce Broadcom du Raspberry Pi sera mise en contact avec la coque grâce à un profilé de métal extrudé
- Ecran OLED programmable est situé sous le bouton d'alimentation multifonction
- Ventilation active avec un petit module de 6 cm sur 6 piloté par le système suivant les températures
- 4 baies pour disques durs SATA accueillant 2 disques durs SATA de 3,5 pouces et 2 disques durs/SSD SATA de 2,5 pouces. La capacité maximale de chaque baie de disque dur est de 10 To, soit une capacité totale de 40 To
- Horloge Temps Réel intégrée : idéal pour programmer des tâches (auparavant impossibles avec un Raspberry Pi nu)
- Alimentation : 12V et 5A (inclus)

**Les + du produit:**{: .blue}
- 4 x Sata
- horloge rtc interne
- Ecran Oled
- le design
- 
**Les - du produit:**{: .red}
- dépendant des raspberry
- absence de stockage interne
- le prix 190€

{% include youtubePlayer.html id="OI3XfWg9ftA" %}

# Projets qui pourrait t'intéresser
1. [Pinas un Nas à la sauce pi](https://www.instructables.com/PiNAS-the-Raspberry-Pi-NAS/){: target="_blank"}
2. [Radxa dual/quad/penta hat](https://www.hackster.io/news/radxa-targets-nas-builders-with-rock-pi-raspberry-pi-compatible-dual-quad-and-penta-sata-hats-2b535cdeddff){: target="_blank"}
3. [fabriquer un Nas Bananapi petit budget](https://www.hackster.io/news/build-your-own-nas-router-on-a-budget-with-the-banana-pi-df6c4cadb67){: target="_blank"}

# Conclusion

Vu que mes besoins sont orientés NVR et domotiques je vais probablement m'orienter vers la carte [**Taco fabriqué par Radxa**](https://s.click.aliexpress.com/e/_DElzckl){: target="_blank"} avec une carte CM3, cependant j'ai encore des doutes sur l'installation de debian qui n'est pas encore optimisé pour ce produit même si Radxa y travaille. La seconde carte qui m'intéresse est **l'interceptor carrier board d'axzez** à regarder si son prix va me freiner, le point négatif se situe à l'intégration du google coral, je serais obligé de le connecter à un des ports usb.

**Pourquoi je n'ai pas retenu les autres solutions:**

|Carte|Cause|
|-----|-----|
|Odroid hc4|Absence de stockage interne<br>Absence de support interne M.2|
|Odroid H3+|le tarif sans options|
|Bananapi-bpi-w2|2G memoire DDR|
|Zimaboard|Trop fermé à l'intégration NAS|
|Radxa Penta Sata Hat|Le tarif principalement<br>absence nvme|
|Axzez|Le tarif mais projet complet|
|wiretrustee|trop de travail|
|radxa dual|absence nvme|
|Argus Eon|idem|
