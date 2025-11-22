---
guid: 166
title: "Découverte des Dongles Plus et Max Sonoff"
description: "Examinons et testons ensemble les nouveaux dongle de la marque Sonoff le Plus et Max à base de puces efr32mg24"
ref: "Sonoff Dongle"
layout: post
authors: [Nico]
date: 2025-11-20 07:42
last_modified_at: 
categories: [Tests, Haade-lab, Zigbee]
tags: []
video: 
image: 'picture.png'
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
rating:  
sourcelink:
  - https://www.silabs.com/wireless/zigbee/efr32mg24-series-2-socs
  - https://dongle.sonoff.tech/
---

Dans l'univers des dongles Zigbee à base de puces Silabs EFR32 de plus en plus nombreux, Sonoff présente ses deux nouveaux dongles Plus et Max.

> Après le dongle P et E, la marque à revue entièrement les clés Zigbee.

À première vue les deux nouveaux dongles ont été entièrement redessiné et rejoigne la sphère des dongles hautes qualité. Les produits sont très biens packagés et très bien fini, ça respire la conception de fabrication 100% bien fini.

## Dongle Plus MG24

Commençons par ce [dongle PM24](https://dongle.sonoff.tech/guide/dongle-pmg24/introduction-dongle-pmg24/){: target="_blank"}, la boite arbore la compatibilité avec home assistant et zigbee2mqtt, l'emballage est optimisé et quand on sort la clé de la boite l'antenne frappe à l'oeil, la longueur est impressionnante par rapport au stick qui apporte un gain supplémentaire de 3dbi au 20 dbi de la puce.

Comme pour les anciens dongles de la marque le dongle plus mg24 à une coque en aluminium d'un gris anthracite exaltant, mais contrairement aux anciens la coque est beaucoup plus petite, le produit est donc beaucoup plus léger, un avantage indéniable pour ne pas forcer sur la sortie usb de la box domotique.

Deuxième caractéristique importante réside sur la puce utilisée, une Silabs EFR32MG24 qui est beaucoup plus performante que la série MG21. Avec des caractéristiques clés telles que des performances RF 2,4 GHz élevées, une faible consommation de courant et uneIA/ML accélérateur matériel et Coffre-fort sécurisé™, un processeur ARM Cortex®-M33 cadencé jusqu'à 78 MHz, avec jusqu'à 1,5 Mo de mémoire Flash et 256 ko de RAM, la puce mg24 est idéal pour les performances et les réseaux étendus.

### Flash du firmware

Pour le dongle max MG24 deux solutions sont disponibles pour mettre à jour le firmware.
Via l'interface web en connectant la clé directement sur son PC, fonctionne nativement sur Linux, pour les autres systèmes il faudra au préalable installer les drivers CP210x.

Donc en ligne rendez-vous sur [la page Sonoff dongle flasher](https://dongle.sonoff.tech/sonoff-dongle-flasher/){: target="_blank"} connecte ta clé au PC et suis les étapes en ligne rien de bien compliqué

La seconde si ta clé est installée sur une box home assistant operating system tu peux [installe directement le module de flash en cliquant ici](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2FiHost-Open-Source-Project%2Fhassio-ihost-addon){: target="_blank"}

La page [github du module est disponible là.](https://github.com/iHost-Open-Source-Project/hassio-ihost-addon/tree/master/hassio-ihost-sonoff-dongle-flasher){: target="_blank"}, Sonoff à [rédiger une notice technique sur la page du support](https://dongle.sonoff.tech/guide/zbdongle-e/flash-firmware-via-home-assistant-add-on/){: target="_blank"} elle est très bien détaillée.

Dans les deux cas **Sonoff propose des firmwares** pour la clé **Dongle plus MG24** compatible Zigbee, Thread et/ou Multipan Thread+Zigbee. C'est une très bonne chose ainsi l'envirronnement et l'évolution reste contrôlée par Sonoff sans besoin d'accéder à des répertoires externes [comme celui proposé par Darkxst](https://github.com/darkxst/silabs-firmware-builder){: target="_blank"}

Personnellement pour les biens d'une future installation j'ai passé cette clé sur le firmware Multipan.

![Flash Firmware Dongle Plus Sonoff MG24]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/MultiPAN.webp{{ cachebuster }}){: width="739" height="537" class="lazyload pictaninpost"}

### Les différences entre ZBDongle-E - Dongle-PMG24

Le Dongle Plus MG24 (Dongle-PMG24) est la version améliorée du ZBDongle-E. Il remplace la puce EFR32MG21 par l'EFR32MG24. La mémoire flash a été augmentée de 100 % et la RAM de 300 %, tandis que la consommation en veille a été réduite. Enfin, son format plus compact facilite son branchement à différents ports USB.


### Caratéristiques technique:

|**Nom****|**Description**|
|SoC Zigbee|EFR32MG24|
|Puce USB-série|CP2102(N)|
|Entrée|5 V⎓500 mA|
|Consommation en veille|40 mW|
|Portée du signal|200 m en champ libre|
|Puissance du signal|Max 20 dBi + gain d'antenne 3 dBi|
|Fréquence RF|2,4 GHz|
|Norme RF|IEEE 820.15.4 / Zigbee 3.0|
|Température de fonctionnement|-10 °C à 40 °C|
|Humidité de fonctionnement|5 % à 95 % HR|
|Systèmes d'exploitation compatibles|Windows, Ubuntu, Raspberry Pi OS / Raspbian, Docker|
|Dimensions|18 mm × 10,5 mm × 214 mm|

|Name|Description|
|Zigbee SoC|EFR32MG24|
|USB-Serial Chip|CP2102(N)|
|Input|5V⎓500mA|
|Stand-by power consumption|40 mW|
|Signal range|200m in free line of sight|
|Signal Strength|Max 20 dBi + antenna gain 3 dBi|
|RF Frequency|2.4 GHz|
|RF Standard|IEEE 820.15.4 / Zigbee 3.0|
|Working Temperature|-10 °C to 40 °C|
|Working Humidity|5%-95%RH|
|Supported OS|Windows, Ubuntu, Raspberry Pi OS / Raspbian, Docker|
|Dimensions|18 mm × 10.5 mm × 214 mm|
