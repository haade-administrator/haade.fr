---
guid: 100
title: "test Ihost"
description: "test"
ref: "Ihost"
layout: post
author: Nico
date: 2023-12-07 14:22
last_modified_at: 
categories: [Tests, Home-Assistant, Haade-lab]
tags: []
image: 'test-sonoff-ihost-v1-12-0-hack-home-assistant-os.png'
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
rating: 5.0 
sourcelink:
  - https://sonoff.tech/product/gateway-and-sensors/ihost/
---

Tout d'abord je voulais **remercier Itead** pour le prêt de cette box Sonoff {{ page.ref }} version RV1126 de 4gb. Dans un premier temps nous allons faire un tour d'horizon de l'application embarquée eet ainsi voir si la v1.12.0 porte ses fruits. Dans un second temps nous allons Hacker la box et installer Home Assistant OS tout en faisant une sauvegarde du système initial.

{% include product-embed.html guid="2178" %}

{% picture posts/{{ page.guid }}/test-box-sonoff-ihost.png --alt Contenu de la box ihost de Sonoff --img width="940" height="529" %}

## Déballage et présentation du Sonoff {{ page.ref }}

Le colis est soigné, la passerelle {{ page.ref }} est fournie avec un cable rj45, un cable usb-c, une notice et une clé pour enclancher la fonction reset. 
> Bref pas de fioritures juste l'essentiel !

{% picture posts/{{ page.guid }}/effet-lumiere-sonoff-ihost.png --alt La passerelle sonoff ihost à un rendu visuel intéressant bleu, rouge et jaune --img width="940" height="529" %}

Le plastique est d'effet Glossy, l'assemblage est de bonne qualité, le rendu visuel des LED est très réussi.

{% picture posts/{{ page.guid }}/face-arriere-sonoff-gateway-ihost.png --alt la face arrière du sonoff ihost présente un bouton reset, insert carte sd, port usb, port alim usbc et rj45 --img width="940" height="529" %}

**Sur la face arrière tu trouveras:**
- le bouton reset
- un insert pour carte sd idéal pour stockage externe et indispensable pour installer des addons de l'instance docker.
- un port USB là aussi pour le stockage externe ( dommage il n'est pas compatible UART )
- un port d'alimentation USB-C
- et enfin un port rj 45

{% include product-embed.html guid="2179" %}


{% picture posts/{{ page.guid }}/bouton-dessus-sonoff-passerelle-ihost.png --alt au dessus tu trouve un bouton on/off, un bouton d'appairage zigbee, un bouton pour couper le micro et un pour armer la présence et un micro --img width="940" height="529" %}

Il faut savoir que les touches sont rétroéclairés en bleu
Sur le dessus:
- un bouton on/off
- un bouton d'appairage Zigbee
- un bouton mute ( afin de couper le **micro** )
- un bouton pour armer la présence/absence.

{% picture posts/{{ page.guid }}/rendu-taille-sonoff-gateway-ihost.png --alt le sonoff ihost est de taille relativement contenu --img width="940" height="529" %}

La taille du Sonoff {{ page.ref }} est correcte, elle intègre pas mal de choses du coup certain qu'elle ne peut être plus petite.

{% picture posts/{{ page.guid }}/acces-processeur-sonoff-passerelle-ihost.png --alt véritable processeur ihost sonoff --img width="940" height="529" %}

Sonoff ne rigole pas et met en place un processeur rckchip .....

{% picture posts/{{ page.guid }}/puce-zigbee-bluetooth-wifi-sonoff-passerelle-ihost.png --alt puce zigbee et wifi sonoff gateway ihost --img width="940" height="529" %}

sous le capot on trouve un module:
- zigbee Silabs efr32mg21 ( non tuya )
- une puce RTL8723 qui distribue du wifi b/g/n

### Caractéristiques technique de l'{{page.ref}}

|Modèle|**Albridge**|
|Produit|RV1109 DDR4 2 Go, **RV1126 DDR4 4 Go**|
|Module Zigbee|SoC Silicon Labs EFR32MG21|
|Module Wi-Fi|Module sans fil Wi-Fi 2,4 G et BLE RTL8723|
|Méthodes de stockage|Carte USB et TF (Max. 256 Go pour la carte TF)|
|Alimentation|5V 2A|
|Type d'interface d'alimentation|Type-C|
|Boitier|ABS|
|Type d'interface réseau|RJ45|
|Connexion sans fil|Wi-Fi IEEE 802.11 b/g/n 2,4 GHz, Zigbee 3.0|
|Couleur|Blanc|
|Taille|120mm X 41mm X135mm|

{% picture posts/{{ page.guid }}/dimension-sonoff-ihost-en-image.png --alt dimension en image du sonoff gateway ihost --img width="940" height="529" %}

## Soft du {{ page.ref }}

Avant de commencer ce tour d'horizon, Sonoff à développé une très bonnne documentation disponible à cette adresse: [guide utilisateur](https://sonoff.tech/ihost-user-guides/){: target="_blank"}, n'hésite pas à la consulter car elle est très bien docuentée et accompagnée de vidéos explicatives.

## Compatibilité Zigbee

J'ai pu lire ici et là des avis négatifs sur la compatibilité matérielle de cette box. Mais depuis la sortie de zigbee2CUBE pour la box {{ page.ref }} il en est tout autre. Tu pourras trouver la [liste des modules compatibles](https://bit.ly/3pFFN8I){: target="_blank"} sur leurs sites, et elle ne cesse de s'agrandir de semaine en semaine. C'est une très bonne chose.

{% include doclink.html docx="https://docs.google.com/spreadsheets/d/1VLuhpznuQzMkMwKJWO9L87Y7wX5Nw-DUdhUmIAhVgY4/edit#gid=0" title="Liste matérielle zigbee ihost pris en charge format google spreedsheet" %}

Si tu souhaites participer à l'évolution des compatibilités matérielles, un [fil de discussion dédiée existe sur le forum Ewelink](https://forum.ewelink.cc/t/discussion-about-zigbee2cube-and-non-zigbee-3-0-devices-compatibility/17848/87){: target="_blank"}

## Compatibilité Matter

Grande nouveautée, la version 1.12.0 sortie en Novembre 2023 prend en charge les produits Matter et ajoute la fonction Pilot > Bluetooth. J'ai testé pour toi l'intégration des produits Matter et je dois te dire que pour l'instant c'est loin d'être parfait.

Premièrement la fonction Matter ne fonctionne que avec les applications Google Home, Apple Home, Alexa et Smartthings.

Il faudra en premier temps lier l'une des applications citées ci-dessus avec Ihost et en second temps il faudra intégrer le produit Matter dans mon cas dans google home.

## Automatisation (Smart Scene {{ page.ref }})

{% include videoPlayer.html externalId="https://sonoff.tech/wp-content/uploads/2023/03/IHost-ss.mp4" %}

## Premier démarrage et Mise à jour

{% include videoPlayer.html externalId="https://sonoff.tech/wp-content/uploads/2023/03/x.mp4" %}


## Appairage Zigbee Sonoff {{ page.ref }}

{% include videoPlayer.html externalId="https://sonoff.tech/wp-content/uploads/2023/03/IHost添加子设备教学视频.mp4" %}

## Installation Apli Addons {{ page.ref }}

{% include videoPlayer.html externalId="https://sonoff.tech/wp-content/uploads/2023/03/IHost-Addon介绍视频.mp4" %}

## Utilisation des Casts

{% include videoPlayer.html externalId="https://sonoff.tech/wp-content/uploads/2023/03/cast.mp4" %}




## HAOS sur ihost

[image HAOS pour ihost](https://github.com/darkxst/ha-operating-system/pkgs/container/haos-builder){: target="_blank"}

## Zigbee2cube

Comme vous le savez peut-être, le problème de compatibilité avec les appareils ZigBee est un projet complexe et chronophage. Nous ne pouvons pas garantir la compatibilité avec tous les appareils ZigBee disponibles sur le marché, mais nous ferons continuellement de notre mieux pour améliorer la compatibilité d'iHost avec les appareils ZigBee, en particulier les appareils au protocole standard NON-ZigBee 3.0, n'hésitez pas à rejoindre la discussion ici.

En bref, les appareils ZigBee, en particulier les appareils NON-ZigBee 3.0, pour être compatibles et correctement affichés dans le portail Web iHost, trois conditions doivent être remplies simultanément,

1. le modèle signalé par l'appareil ZigBee fait partie de la liste des types pris en charge par Zigbee2CUBE.
2. Les capacités (expositions) signalées par l'appareil ZigBee relèvent des types et des capacités pris en charge par Zigbee2CUBE.
3. Le système eWeLink CUBE possède la capacité d'interface utilisateur correspondante, ce qui signifie qu'il peut afficher l'appareil correctement. Pour l'instant, les classes de commutateurs, les classes d'éclairage et certaines classes de capteurs sont prises en charge.

Nous avons trié une liste d'appareils (vérifiez ci-dessous) qui devraient théoriquement être pris en charge par iHost Zigbee2CUBE, mais nous ne pouvons pas tous les tester. Si votre appareil ZigBee n'apparaît pas comme prévu dans iHost, assurez-vous de Vérifiez d'abord s'il est inclus dans la liste prise en charge fournie ci-dessous.

S'il n'est pas répertorié, veuillez attendre les mises à jour périodiques pendant que nous continuons à élargir la liste des appareils pris en charge.

## Manuels {{ page.ref }}

{% include doclink.html pdf="sonoff-ihost-specification.pdf" title="Spécifications de la box Sonoff Ihost" %}
{% include doclink.html pdf="sonoff-ihost-manuel-utilisateur.pdf" title="Manuel complet de la box Ihost" %}
{% include doclink.html pdf="sonoff-ihost-guide-rapide.pdf" title="guide d'utilisation rapide de la box Ihost" %}

{% include product-embed.html guid="2178" %}

## **les + du produit** {{ page.ref }}
{: .blue}

- la qualité de fabrication
- certifié zigbee 3.0 puce **EFR32MG21**
- **le prix (99€ ou 109€ environ) selon la version**
- les nombreuses compatibilitées
- les divers support

## **les - du produit** {{ page.ref }}
{: .red}

- Absence de wifi 5Ghz

{% include product-embed.html guid="2179" %}

## Conclusion