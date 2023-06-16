---
guid: 71
title: "Test du module zigbee Nodon special volet roulant SIN-4-RS-20"
description: "Nodon produit plusieurs modules zigbee 3.0 de qualité, dans cet article je vais présenter le module de contrôle de volet roulant SIN-4-RS-20"
layout: post
author: Nico
date: 2023-06-16 10:00
last_modified_at: 
categories: [Tests, Zigbee]
tags: []
image: 'test-module-nodon-zigbee-volet-roulant-SIN-4-RS-20.png'
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
rating: 4.5
sourcelink:
  - https://nodon.fr/nodon/module-volet-roulant-zigbee/
  - https://nodon.fr/support/module-volet-roulant-zigbee/
---

{% include product-embed.html guid="2144" %}

## Vidéo calibrage Nodon

{% include youtubePlayer.html id="cujMkYiD-f8" %}

## Schémas de montage

Montage sur volet roulant avec ou sans interrupteurs

{% picture posts/{{ page.guid }}/Schema_montage_SIN_4-RS-20-VR-avec-ou-sans-inter.png --alt schéma du module nodon zigbee SIN-4-RS-20 pour volet roulant avec ou sans interrupteurs --img width="940" height="470" %}

Montage sur store bannes avec ou sans interrupteurs

{% picture posts/{{ page.guid }}/Schema_montage_SIN_4-RS-20-Store-Banne-avec-ou-sans-inter.png --alt schéma du module nodon zigbee SIN-4-RS-20 pour store bannes avec ou sans interrupteurs --img width="940" height="470" %}

## Intégration Zibee2mqtt

{% picture posts/{{ page.guid }}/appairage-nodon-sin-4-rs-20-zigbee2mqtt.png --alt intégration du module nodon zigbee SIN-4-RS-20 pour volet roulant dans zigbee2mqtt --img width="940" height="38" %}

{% picture posts/{{ page.guid }}/appairage-nodon-sin-4-rs-20-zigbee2mqtt-a-propos.png --alt intégration du module nodon zigbee SIN-4-RS-20 pour volet roulant dans zigbee2mqtt état --img width="940" height="689" %}

{% picture posts/{{ page.guid }}/appairage-nodon-sin-4-rs-20-zigbee2mqtt-expose.png --alt intégration du module nodon zigbee SIN-4-RS-20 pour volet roulant dans zigbee2mqtt exposition des commandes --img width="940" height="219" %}

## Intégration dans Jeedom avec Zigbee

{% picture posts/{{ page.guid }}/appairage-nodon-sin-4-rs-20-jeedom-zigbee.png --alt intégration du module nodon zigbee SIN-4-RS-20 pour volet roulant dans jeedom avec le module zigbee --img width="940" height="270" %}

{% picture posts/{{ page.guid }}/appairage-nodon-sin-4-rs-20-jeedom-zigbee-commande.png --alt intégration du module nodon zigbee SIN-4-RS-20 pour volet roulant dans jeedom avec le module zigbee exposition des commandes --img width="940" height="279" %}

## Intégration dans ZHA

{% picture posts/{{ page.guid }}/appairage-nodon-sin-4-rs-20-zha.png --alt intégration du module nodon zigbee SIN-4-RS-20 pour volet roulant dans zha --img width="940" height="33" %}

{% picture posts/{{ page.guid }}/appairage-nodon-sin-4-rs-20-zha-a-propos.png --alt intégration du module nodon zigbee SIN-4-RS-20 pour volet roulant dans zha état du module --img width="940" height="449" %}

{% picture posts/{{ page.guid }}/appairage-nodon-sin-4-rs-20-zha-expose.png --alt intégration du module nodon zigbee SIN-4-RS-20 pour volet roulant dans zha état de entité --img width="604" height="570" %}


## Caractéristiques Techniques

|Alimentation|230V AC ~ 50Hz|
|Capacités de commutation|230V AC – 3A|
|Puissance moteur maximum|280W Max – 60 Nm Max – Zero crossing intégré|
|Consommation|< 1W|
|Bande de fréquences radio utilisée|2,4 GHz|
|Puissance radio maximale|+10dBm|
|Portée|jusqu’à 30m en intérieur|
|Température de fonctionnement|-20°C à 60°C|
|Indice de protection|IP 20|
|Type d'identifiant de l'appareil|Dispositif de couverture de fenêtre (0x0202)|
|Dimensions|40 mm (l) x 44 mm (L) x 16.9 mm (h)|

![Capture d'image 3D Nodon SIN-4-RS-20]({{ site.baseurl }}/assets/images/posts/71/SIN-4-RS-20-360.webp{{ cachebuster }}){: width="400" height="319"}{: target="_blank"}

## Compatibilité

- ZHA ( home assistant )
- Zigbee2mqtt (home assistant, jeedom, Gladys, Majordomo, etc..)
- Zigbee par Domoticz
- Zigbee Jeedom
- Overkiz
- Smartthings
- Smart&Connective

## **les + du produit**
{: .blue}
- la qualité de fabrication
- prise en charge mise à jour OTA
- certifié zigbee 3.0
- les nombreuses compatibilitées
- l'auto calibration

## **les - du produit**
{: .red}

- le prix

{% include product-embed.html guid="2144" %}

{% include doclink.html pdf="NodOn_Zigbee_RollerShutterModule_SIN-4-RS-20-Datasheet_FR.pdf" title="Fiche technique Nodon zigbee volet roulant SIN-4-RS-20" %}

{% include doclink.html pdf="NodOn_Compatibilite-VR_V0-04_FR_160523-2.pdf" title="Compatibilité avec moteurs filaires du Nodon zigbee volet roulant SIN-4-RS-20" %}

{% include doclink.html pdf="SIN-4-RS-20-UG_FR_EN-V6_digital-1.pdf" title="Notice d'installation du Nodon zigbee volet roulant SIN-4-RS-20" %}

## Conclusion


