---
guid: 164
title: "Test de la tablette murale Android ELC-SMT101"
description: "Test et intégration dans home assistant avec mqtt de la tablette murale ELC SMT101 avec bandeau Led et switch"
ref: "ELC SMT101"
layout: post
authors: [Nico]
date: 2025-07-09 09:35
last_modified_at: 
categories: [Tests, Haade-lab, Home-Assistant]
tags: []
video: 
image: 'test-et-integration-tablette-murale-elc-smt101-bandeau-led-mqtt-home-assistant-ultimate-dashboard.png'
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
  - https://www.elclcd.com/products/10-1-smart-home-panel-smt101
  - https://s.click.aliexpress.com/e/_oCHHQoO
---
Article coup de poing, aujourd'hui je vais tester la tablette 10 pouces de la marque ELC, la SMT101 aussi disponible en 9,7" et 15,6", cette tablette a l'avantage d'être encastrable, de disposer d'un bandeau Led, et d'autres options. Elle tourne sous android 13 et embarque un processeur Rockchip RK3566, la version testée dispose de 4GB de Ram et 128Go de Rom. Je vais te présenter cette tablette, et te donner les points positifs et négatifs car malheureusement il y en a !.

> Cerise sur le Gâteau j'ai développé une Apk qui te permettra de contrôler les fonctions de cette tablette dans Home Assistant ( Led, Switch, Température et humidité ) grâce à la passerelle MQTT.

## Déballage {{ page.ref }}

{% picture posts/{{ page.guid }}/deballage-elc-smt-101.png --alt Déballage de la tablette murale ELC-SMT101 --img width="940" height="529" %}

{% picture posts/{{ page.guid }}/contenu-boite-elc-smt101.png --alt Contenu de la boite de la tablette murale ELC-SMT101 --img width="940" height="529" %}

{% picture posts/{{ page.guid }}/tour-horizon-tablette-murale-elc-smt101.png --alt Tour d'horizon de la tablette murale ELC-SMT101 --img width="940" height="529" %}

## Connectique

{% picture posts/{{ page.guid }}/face-arriere-tablette-elc-smt101.png --alt Face arrière tablette murale ELC SMT101 --img width="940" height="529" %}

{% include product-embed.html image="elc-smt-101-tablette-murale-bandeau-led.png" title="Tablette Murale ELC SMT101 avec bandeau Led" brand="ELC" description="Tablette Murale ELC SMT101 Android 13 rooté" affiliate="_omyM8Ge" %}

## Caractéristiques Techniques {{ Page.ref }}

|Taille diagonale|10,1 pouces (LCD)| 
|Type d'écran|Écran haute définition 10,1" plein écran, entièrement collé|
|Résolution|1280 x 800 pixels|
|Format d'image|16:10|
|Angle de vision|D/G 85/85, U/D 85/85|
|Mode d'affichage|Normalement noir|
|Rapport de contraste|800:1|
|Luminance|250 nits|
|Nombre de points|10 points|
|Processeur|CPU RK3566 Quad-core Cortex A55|
|RAM|2 Go (4 Go en option)|
|ROM|32 Go (64 Go en option)|
|Système d'exploitation|Android 13|
|Taille et poids|Dimensions : 243,07 x 159,67 x 13,6 mm (L × l × P)|
|Sans fil|Wi-Fi IEEE 802.11a/b/g/n/ac/ax (WiFi 6E)<br>802.15.4/Thread/Matter/Zigbee|
|Bluetooth|Bluetooth 5.3|
|Ports E/S|USB Type-C et USB 2.0 compatibles OTG|
|Port relais|Contrôle des appareils domestiques compatibles avec les connexions relais|
|Port IR|Utilisé pour la télécommande infrarouge, avec un récepteur externe enfichable permettant de contrôler l'appareil|
|RJ45|Interface Ethernet (norme de fonction POE IEEE802.3at, POE+, classe 4, 25,5 W)|
|Port d'alimentation|Entrée d'alimentation CC 12 V, 1,5 A, 18 W|
|Format multimédia|Format vidéo MPEG-1, MPEG-2, MPEG-4, H.265, H.264, VC-1, VP8, VP9, ​​etc.|
|Audio Format | MP3/WMA/AAC, etc. |
|Photo | JPEG |
|Couleur | Noir, Blanc |
|Haut-parleur | 2 W, pavillon BOX |
|Microphone | Quatre microphones |
|Appareil photo | 5 Mpx (vue conventionnelle) |
|Langue | Multilingue |
|Certificats | CCC/CE/FCC/ROHS |
|Température de fonctionnement | 0 °C - 40 °C |

|Diagonal Size|10.1-inch (LCD)|
|Panel Type|10.1" high-definition full view screen fully bonded|
|Resolution|1280 x 800 pixels|
|Aspect Ratio|16:10|
|Viewing Angle|R/L 85/85, U/D 85/85|
|Display Mode|Normally black|
|Contrast Ratio|800:1|
|Luminance|250 nits|
|Number of Points|10-point|
|Processor|CPU RK3566 Quad-core cortex A55|
|RAM|2GB (Optional 4GB)|
|ROM|32GB (Optional 64GB)|
|Operating System|Android 13|
|Size and Weight|Dimensions 243.07 x 159.67 x 13.6 mm (L × W × D)|
|Wireless|WiFi IEEE 802.11a/b/g/n/ac/ax (WiFi 6E)<br>802.15.4/Thread/Matter/Zigbee|
|Bluetooth|Bluetooth 5.3|
|I/O Ports|USB Type-C USB 2.0 supports OTG functionality|
|Relay Port|Control home devices that support Relay connections|
|IR Port|Used for infrared remote control, with an external plug-in receiver, which can control the device|
|RJ45|Ethernet interface (POE function standard IEEE802.3at, POE+, class 4, 25.5W)|
|Power Port|DC power input 12V, 1,5A 18W|
|Media Format|Video Format MPEG-1, MPEG-2, MPEG-4, H.265, H.264, VC-1, VP8, VP9, etc.|
|Audio Format|MP3/WMA/AAC, etc|
|Photo|JPEG|
|Color|Black, White|
|Speaker|2W BOX chamber horn*2|
|Microphone|Four microphones|
|Camera|5MP from a conventional perspective|
|Language|Multi-language|
|Certificates|CCC/CE/FCC/ROHS|
|Operating Temperature|0℃-40℃|

## Ultimate Dashboard

{% include videoPlayer.html youtubeId="pC-VBly1Y00" %}

## Intégration MQTT

#### **les + de la caméra Slim Sonoff** {{ page.ref }}
{: .blue}

- Qualité du produit ( malgré un légère imperfection lumineuse )
- Système de fixation solide
- Bandeau Led
- alimentation RJ45 POE
- Android 13 rooté

#### **les - de la caméra Slim Sonoff** {{ page.ref }}
{: .red}

- Absence d'alimentation secteur ( 110-240V )
- Relais switch DC ( idéal contact sec )
- Fourni avec Android 13 ( HAOS non intégrable d'origine )
- Thread non pris en charge dans Android 13
- Le Prix

## Conclusion