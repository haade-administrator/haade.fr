---
guid: 22
title: "Home-assistant Amber VS Jeedom Atlas"
description: "Comparatif des deux nouvelles box domotique du moment Homeassistant Amber et Jeedom Atlas"
date: "2021-10-01"
layout: post
author: Nico
categories: Domotique Haade-lab Home-Assistant Jeedom News
tags: Comparatif Homeassistant Jeedom
image: Jeedom-Atlas-vs-Homeassistant-Amber
language: fr
published: true
locale: fr
toc: false
beforetoc:
comments: true
---
Pour la rentrée Home-Assistant et Jeedom dévoilent deux nouvelles box, la Home-Assistant Amber/Yellow vs Jeedom Atlas. Étonnant quand on sait qu'elles sont sorties toutes deux à quelques jours d'intervalles. La différence réside dans le fait que la box Amber/Yellow est en prévente sur la plateforme [crowdsupply](https://www.crowdsupply.com/nabu-casa/home-assistant-amber) _qui se termine le 27 Octobre 2021_, avec une sortie **officielle pour Juin 2022** alors que Jeedom Atlas est déjà **disponible à la vente** sur le site [Domadoo](https://www.domadoo.fr/fr/194_jeedom).

|  | Home Assistant Amber/Yellow (**<span style="color:red">Raspberrypi</span>** CM4) | Jeedom Atlas (Rock Pi4) |
|---|---|---|
| Processeur | Broadcom BCM2711 **<span style="color:red">4 coeurs</span>** Cortex-A72 (ARM v8) 64-bit SoC @ 1.5 GHz | **<span style="color:red">6 cœurs</span>**, 64 bits – Dual Cortex-A72 (up to 2.0Ghz) et   quad Cortex-A53 (up to 1.5Ghz) Harvard Superscalar processor |
| Mémoire vive | 1 GB, 2 GB, 4 GB or 8 GB LPDDR4 (dépend de la variante ) | 4GB DDR4 |
| Mémoire de stockage | 8, 16 ou 32Go eMMC ( optionnel ) + **<span style="color:red">support ssd NVMe M.2 socket</span>** | 32Go eMMC + support ssd NVMe ajout d’une carte d’extension non compris lors de l’achat. |
| Alimentation | 12 V / 2 A prise jack cylindrique (5.5 mm x 2.1 mm) ou **<span style="color:red">POE+ (optionnel )</span>** | 9V – 2A |
| Horloge RTC | Oui CR2032 | Oui |
| Port Ethernet | Oui Gigabit | Oui Gigabit |
| Ports USB | 2x USB 2.0 et 1x USB-C 2.0 | 2x USB 2.0 et 2x USB 3.0 |
| Technologie(s) intégrée(s) | **<span style="color:red">Zigbee intégrée compatible Matter, </span>**bluetooth 5.0   et   wireless LAN, 2.4 GHz and 5.0 GHz IEEE 802.11b/g/n/ac (optionnel) | Z-Wave +, EnOcean ou Zigbee (Optionnel) et   WIFI 2.4Ghz et 5Ghz et Bluetooth 5.0 |
| DAC | **<span style="color:red">Haute qualité audio, </span>**2 V RMS line-out on 3.5 mm audio jack, SNR 106 dB | Non |
| Boutons Poussoir | Rouge: factory reset   Bleu: à définir | Non |
| GPIO | 10 broches | **<span style="color:red">40 Broches</span>** |
| Dimensions | 123 mm x 123 mm x 36 mm | **<span style="color:red">90mm x 68mm x 35 mm</span>** |
| Boitier | Translucide | Noir aluminium anodisé 4mm |


## Points Communs Home-Assistant Amber vs Jeedom Atlas

- Fonctionnent toutes deux en **réseau 100% local** ( pas besoin de Cloud )
- Il s'agit de deux box que les personnes normales peuvent utiliser pour démarrer sur la plate-forme Home Assistant sans avoir à se soucier d'acheter leur propre ordinateur
- Logiciels **100% Opensource**
- Nombreux plugins **GRATUIT**

# Commençons Par Home-Assistant Amber

![amber par home-assistant]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/home-assistant-amber-powered-raspberry-820.webp{{ cachebuster }})

La Box Amber **est plus que prometteuse** car il s'agit d'une carte d'intégration accueillant la carte raspberrypi component CM4 disponible en plusieurs variantes 1,2 et 4gb de mémoires wifi en option et embarquant ou non un emmc de 8, 16 ou 32gb. La box est compatible avec l'ensemble des cartes CM4.

## <span style="color:red">Avantages</span> de la box Amber:

- **Raspberry pi CM4** ( dispo full variantes )
- **Contrôleur M.2** NVMe Disque SSD jusqu'à 2To
- Démarrage direct sur SSD
- **Alimentation possible POE+** IEEE 802.3at-2009 Classe 3 ou 4 (sélectionnable via cavalier)
- Boutons Poussoir
- GPIO 10 pins
- Boitier translucide
- dissipateur de chaleur personnalisé
- Assemblage sans outil
- **Zigbee Embarquée Silicon Labs** compatible Openthread et **Matter**
- Plugin Zigbee inclus
- Prend en charge les modules 2230, 2242, 2260 et 2280
- 1x USB-C 2.0 en mode UART ou USB
- Dac audio de haute qualité
- Horloge RTC
- Led d'état ( peuvent être éteinte pendant le fonctionnement Normal )
- Consomation faible de 1,5 à 9w suivant condition
- Plugins 100% Gratuits ( plus de 100 Appareils et services disponibles )

## <span style="color:blue">Inconvénient</span> Amber par Home Assistant

_Eh bien pas grand chose !_

- Boitier en polycarbonate moulé par injection ( moins qualitatif que de l'aluminium )
- **Alimentation spécifique** cylindrique 12V / 2A
- **Absence d'antenne extérieur** pour le Zigbee et Wifi
- GPIO 10 broches et non 40 car déjà utilisé sur la carte.
- Réception de la box **prévu en Juin 2022**

# Continuons avec Jeedom Atlas

![Jeedom atlas caractéristique]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/Jeedom-Atlas-caracteristique-820.webp{{ cachebuster }})

## Avantage Jeedom Atlas

- **Box Française**
- Nombre de ports USB 2.0 et 3.0 ( 4 en tout ).
- Plugins Zigbee Inclus
- Boitier en **Aluminium**
- Antenne extérieur Zigbee Inclus
- Achat suivant Protocol ( Zigbee, Z-wave ou enocean )
- déjà disponible à la vente
- Box livrée prête à l'emploi quelque soit la variante
- Nombreux plugins disponibles

## Inconvénient Atlas par Jeedom

- Carte Rock PI4 ( carte moins développée et utilisée )
- **Intégration SSD non prévu** ( carte d'extension tout de même disponible à la vente )
- **POE+ non pris en charge** pour l'alimentation
- Stockage emmc max 32Go peut vite devenir limite suivant le nombre de plugins.
- Pas mal de **Plugins Payants**

## Comparatif des Box Home-Assistant Amber vs Jeedom Atlas

Pour être objectif sur le comparatif j'ai pris les tarifs de la plateforme crowdsupply, du CM4 avec 4gb de mémoire, le wifi et 32Go de disque emmc.

|  | **Home Assistant Amber (<span style="color:red">Raspberrypi </span>CM4)** | **Jeedom Atlas (Rock Pi4) Version Zigbee** |
|---|---|---|
| Matériel | **128€** + CM4 4gb 32go **70,20€** | **235€** |
| Mémoire | Incluse | Incluse |
| Wifi + Bluetooth | Inclus | Inclus |
| Service Pack | Néant (plugin gratuit) | Inclus |
| Plugin Zigbee | Gratuit |  |
| Antenne Zigbee | Inclus | Inclus |
| Temps d’installation et compétence | Clé en main | Clé en main |
| Frais de livraison | 32€ | Offert pour l’achat d’une box |
| Date de Sortie | Juin 2022 | **<span style="color:red">Septembre 2021</span>** |
| Total | **<span style="color:red">230,20€</span>** | **<span style="color:red">235€</span>** |

Les tarifs se valent mais si dans mon cas je décide de partir avec une box Amber embarquant:

- l'alimentation POE+ à 122€ livré chez Crowdsupply
- avec un SSD Kingspek de 128GO à 22,45€ livré sur aliexpress
- une CM4 chez Kubii de 4gb de mémoire avec wifi mais sans disque embarqué à 57,95€ livré

On arrive à avoir une Box HomeAssistant Amber à **204,4€**aux spécifications techniques supérieur à Jeedom Atlas.

## Conclusion

J'ai utilisé durant des années Jeedom de la version 1 à la version 4, c'est dire que je connais bien le système qui tourne sous language PHP, ensuite je suis passé à Home Assistant car je désirais changer d'ergonomie (language Python) et je voulais passer au **tout gratuit**. Ce sont deux bons logiciels, je trouve la ligne de conduite de Home Assistant plus pertinente et naturelle et ça se ressent aussi sur leurs conceptions de la box. **Alors si tu n'es pas pressé par le temps je te conseil fortement de choisir la Box Amber il n'y a qu'à regarder les avantages.** _Par contre si t'es pressé ou que tu comptes sur une communauté Francophone importante, choisi Jeedom Atlas,_**mais qui selon moi reste en dessous de Home Assistant tant au niveau logiciel que matériel.**
