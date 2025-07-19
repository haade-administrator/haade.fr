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
**Article coup de poing**, aujourd'hui je vais tester la tablette 10,1 pouces de la marque ELC, la SMT101 aussi disponible en 9,7" et 15,6", cette tablette a **l'avantage d'être encastrable**, de disposer d'un bandeau Led, et d'autres options. Elle tourne sous android 13 et embarque un processeur Rockchip RK3566, la version testée dispose de **4GB de Ram et 128Go de Rom**. Je vais te présenter cette tablette, et te donner les points positifs et négatifs car malheureusement il y en a !.

> **Cerise sur le Gâteau j'ai développé une Apk** qui te permettra de contrôler les fonctions de cette tablette dans Home Assistant ( Led, Switch, Température et humidité ) grâce à la passerelle MQTT et Home Assistant Discovery.

## Déballage {{ page.ref }}

L'emballage est tout blanc exempt de tout indices de marque (marque blanche). Le tout étant bien emballé c'est un plus surtout que cette tablette est en provenance de chine, bref l'emballage est relativement bien conçu !

{% include product-embed.html image="elc-smt-101-tablette-murale-bandeau-led.png" title="Tablette Murale ELC SMT101 avec bandeau Led" brand="ELC" description="Tablette Murale ELC SMT101 Android 13 rooté" affiliate="_omyM8Ge" %}

{% picture posts/{{ page.guid }}/deballage-elc-smt-101.png --alt Déballage de la tablette murale ELC-SMT101 --img width="940" height="529" %}

À l'intérieur on y trouve tout le nécessaire enfin presque, pour bien débuter.
- la tablette 10,1"
- une alimentation européenne
- des connecteurs rapides
- un tournevis
- une notice sommaire
- un cable data usb-c **( la qualité laisse à désirer )**
- des visses de fixations pour fixer le support dans la boite d'encastrement

{% picture posts/{{ page.guid }}/contenu-boite-elc-smt101.png --alt Contenu de la boite de la tablette murale ELC-SMT101 --img width="940" height="529" %}

**Petit tour d'horizon de la tablette**
- sur le dessus un bouton power
- juste à côté un bouton recovery ( mode loader et maskrom )
- sur la face avant une caméra de 5mp ainsi q'un capteur de luminosité
- sur le dessous 4 sorties micros ainsi que sur chaque extrémité des hauts parleurs ( qui font très bien le job )
- le ? correspont au capteur de température et d'humidité situé sur le flanc gauche.

{% picture posts/{{ page.guid }}/tour-horizon-tablette-murale-elc-smt101.png --alt Tour d'horizon de la tablette murale ELC-SMT101 --img width="940" height="529" %}

## Connectique

Partie intéressante du produit, la face arrière et la connectique sont intéressantes et relativement bien travaillé.

{% picture posts/{{ page.guid }}/face-arriere-tablette-elc-smt101.png --alt Face arrière tablette murale ELC SMT101 --img width="940" height="529" %}

Commençons par le support murale noir, il est en métal et rigide, idéal pour ne pas le déformer lors de l'installation.
Il tient à la tablette par 3 clips de plus ce support est collé à la tablette de façon magnétique car celle -ci intègre des aimants derrière la coque.

> **Le support est solide est très fonctionnel.**

La partie connectique n'est pas en reste. On y trouve:
- un double switch afin de contrôler des lumières 220v
- Deux entrées I/O afin d'y connecter des interrupteurs physiques
- Une entrée infrarouge ( intéressante si tu veux y connecter un émetteur IR )
- Des ports RS485
- une entrée 12v (malheureusement cette tablette n'est pas alimentable en 220V)
- Une entrée USB-C afin de débugger
- **Un port RJ45 avec fonction POE** si tu veux l'alimenter par ce biais.

{% include product-embed.html image="elc-smt-101-tablette-murale-bandeau-led.png" title="Tablette Murale ELC SMT101 avec bandeau Led" brand="ELC" description="Tablette Murale ELC SMT101 Android 13 rooté" affiliate="_omyM8Ge" %}

La connectique est pas mal, **je déplore deux choses:**

👎 **l'absence d'alimentation 220V**
👎 **la boîte d'encastrement au format UK ( carré ) et non fourni avec la tablette.**

## Sous le capot {{ page.ref }}

Comme beaucoup de produits de ce type, la partie électronique est façonnée de deux modules emboitables, la partie connectique et la partie processeur.

La tablette {{ page.ref }} embarque un processeur Rockchips RK3566, cette version embarque 4Gb de Ram et 32GO de stockage, **aussi disponible à la vente en 2Gb et 16GO**. Je suis parti sur ce modèle afin de travailler sur un buildroot embarquant directement Home Assistant. Ainsi pour le prix on pourrait avoir une box domotique avec une interface de gestion ce qui pourrait largement justifier le prix. Mais ce n'est pas gagné les premier tests d'intégrations ne sont pas concluants.

> De plus cette tablette embarque une puce Zigbee/Thread/Matter

### Au sujet de la puce Zigbee du {{ page.ref }}

Malheureusement la puce intégrée est une **Vensi lmiot-efr32 LMZ-E321VX-SN** plus [d'infos à ce sujet sur le FCCreport](https://fcc.report/FCC-ID/2ar6ize321vx/4139687.pdf){: target="_blank"} c'est une fabrication propriétaire embarquant une puce silabs EFR32MG1 et le sdk ELC ne permettrait de communiquer avec elle que par l'interposition d'un serveur mqtt donc difficilement intégrable directement dans zigbee2mqtt.

{% picture posts/{{ page.guid }}/sous-le-capot-en-deux-parties-de-la-tablette-elc-smt101.png --alt Démontage en deux parties de la tablette murale ELC SMT101 --img width="940" height="529" %}

Sur la capture ci-dessous tu pourras te rendre dompte de l'ensemble du circuit électronique.

> **Point intéressant les relais sont compatible 110-220v**

{% picture posts/{{ page.guid }}/sous-le-capot-en-deux-parties-assemble-avec-switch-220v-de-la-tablette-elc-smt101.png --alt Assemblage des deux modules sans les coque de la tablette murale ELC SMT101 --img width="940" height="529" %}

Retrouve ci-dessous un schéma de branchement sur le réseau classique 220v d'un éclairage traditionnel.

{% picture posts/{{ page.guid }}/branchement-schema-lumière-220v-elc-smt101.png --alt Schéma de branchement électrique des lumières en 220v avec la tablette murale ELC SMT101 --img width="940" height="529" %}

## Home-Assistant et {{ page.ref }}

Par défaut la tablette est fourni avec **android 13 en version rooté** ce qui nous laisse libre accès à l'ensemble de la structure.

{% picture posts/{{ page.guid }}/integration-home-assistant-tablette-elc-smt101.png --alt Intégration Home Assistant companion sur la tablette murale ELC SMT101 --img width="940" height="529" %}

### Ultimate Dashboard

J'ai choisi de modifier l'interface home assistant en ne faisant qu'ajouter quelques modules hacs sinon le reste de l'intégration se passe avec lovelace. Ci-dessous retrouve une vidéo d'intégration du dashboard créé fonctionnel et quasi parfait, assez facile à suivre et franchement je ne suis pas déçu.

{% include videoPlayer.html youtubeId="pC-VBly1Y00" %}

### Intégration MQTT

Pour faire remonter les fonctions de la tablette ( led, switch, io température et humidité ) j'ai crée une application android qui communique par mqtt grâce à home assistant discovery. L'application n'est pas parfaite mais presque. Retrouve [l'application APK à cette adresse Github](https://github.com/haade-administrator/haade_panel_s504/releases){: target="_blank"}

## Caractéristiques Techniques {{ Page.ref }}

Retrouve toutes les caractéristiques techniques de la tablette ci-dessous

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
|Sans fil|**Wi-Fi IEEE 802.11a/b/g/n/ac/ax (WiFi 6E)<br>802.15.4/Thread/Matter/Zigbee**|
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