---
guid: 46
title: "Jeedom Luna passé au crible"
description: "Je vais examiner Jeedom Luna dans le détail, en rechercher les origines, les causes ou encore les avantages, les inconvénients ou les problèmes, bref que se cache-t-il sous la coque de la jeedom Luna"
layout: post
authors: Nico
date: 2023-02-15 17:36
last_modified_at: 
categories: [Domotique, Tests, Jeedom, Zwave, Zigbee]
tags: []
image: 'jeedom-luna-passe-au-crible-box-francaise.png'
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
addViews: 324
comments: true
rating: 4.6
sourcelink:
  - https://www.dusuniot.com/product-specification/zigbee-matter-ble-cloud-module/
  - https://www.silabs.com/wireless/z-wave/700-series-modules
  - https://www.fn-link.com/6221A-SRC-Wi-Fi-Module-pd42546492.html
  - https://fr.transcend-info.com/product/internal-ssd/msa230s
  - https://www.arm.com/products/silicon-ip-cpu/cortex-a/cortex-a53
  - https://community.arm.com/arm-community-blogs/b/architectures-and-processors-blog/posts/the-top-5-things-to-know-about-cortex-a53
  - https://community.jeedom.com/t/presentation-akenad/2440/64
---

Voilà depuis toujours Jeedom lance des box de plus en plus puissantes, qu'en est-il de la Jeedom Luna, est-elle intéressante, est-elle puissante ? **est-elle une pure création Jeedom ou utilise-t-elle une carte produite par une autre société ?** Si vous avez suivi l'évolution des box Jeedom et jusqu'à présent ils ont toujours utilisés des cartes embarquées existantes:

- jeedom 1 tourne raspberry pi B
- jeedomboard sur une hummingboard de Solidrun
- Jeedom Smart sur Odroid C2
- Jeedom Atlas et Atlas pro sur rockpi 4B
- Jeedom luna sur [**Dusun DSGW-210-D-1**](https://www.dusuniot.com/landing-pages/jeedom-smart-gateway/){: target="_blank"}

{% include product-embed.html guid="2143" %}

# Déballage

{% picture posts/{{ page.guid }}/deballage-unboxing-jeedom-luna.png --alt deballage de la Jeedom Luna première impression --img width="940" height="529" %}

Après déballage la première impression qui me vient à l'esprit c'est la sobriété, toute vêtue de blanc avec un anneau lumineux au centre, on découvre une luna sans fioriture. 

Elle est fournie avec:
- un support murale
- un paquet de vis de fixation
- un cable d'aliementation USB-C et le transfo
- un cable Rj45

Et pour simple notice un flyer avec une adresse: Suivez notre guide de démarrage [Jeedom.com/start](https://jeedom.com/start){: target="_blank"}

> Étonnant mais ça à le mérite de fonctionner du moins pour moi.

# Caractéristiques techniques :

|Alimentation| 5V - 3A USB-C|
|Batterie de secours| Li 6000mAH|
|Processeur| Processeur 4 cœurs, 64 bits (**Quad Cortex-A53** (1,5Ghz))|
|Mémoire interne| 2 Go de RAM DDR3|
|Mémoire HDD| Emmc 16 Go|
|Connectiques|1 Port réseau Ethernet, 1 ports USB 2.0, Connecteur USB-C pour l'alimentation|
|Connectivité| Zigbee 3.0 interne, Z-Wave 700 interne, Wi-Fi 2,4 GHz et **5 GHz**|
|Horloge| RTC|
|Matériau| Boitier en plastique|
|Dimensions| 12 x 12 x 3 cm|
|Poids| 0,312 g|
|Protection IP| IP22|

# Connectique Externe

{% picture posts/{{ page.guid }}/facade-connectique-jeedom-luna.png --alt connectique façade arrière Jeedom Luna --img width="940" height="529" %}

Sur la face arrière un ensemble de connectique complet:
- un bouton reset
- Power
- un port Wan
- un port Usb 2.0
- une entrée alimentation USB-C 5V, 3A
- un emplacement microcard SD et nano Sim

# Connectique interne

{% picture posts/{{ page.guid }}/jeedom-luna-demonte-cote-connecteur.png --alt jeedom luna démonté coté connecteur --img width="940" height="529" %}

## Zigbee
**À droite** la box jeedom intègre un connecteur [**zigbee 3.0 Dusun DSM-04B**](https://www.dusuniot.com/product-specification/zigbee-cloud-module-specification/){: target="_blank"}.
C'est un module Zigbee/matière/BLE intégré à faible consommation d'énergie développé par Dusun. Il se compose de la puce de processeur radio sans fil hautement intégrée, série **EFR32MG21**, et de plusieurs périphériques, avec une pile de protocoles réseau 802.15.4 PHY/MAC Zigbee/matter/BLE intégrée et des fonctions de bibliothèque robustes. Prend en charge le protocole Zigbee、matter et BLE (**lorsque vous utilisez le protocole MATTER, le mod ne peut être utilisé que du côté hôte**)
Ce terminal de données est intégré avec un cœur ARM Cortex-M33 32 bits à faible consommation d'énergie, une mémoire flash de 1024/768 Ko, une mémoire de données RAM de 64 Ko et des ressources périphériques robustes. En outre, il fonctionne sur la plate-forme FreeRTOS qui intègre toutes les fonctions de la bibliothèque Zigbee/matter/BLE MAC. Vous pouvez développer des produits Zigbee/Matter intégrés selon vos besoins.

[**Lien technique Dusun DSM-04B**](https://www.dusuniot.com/product-specification/zigbee-matter-ble-cloud-module/){: target="_blank"}

## Z-wave
**Au centre** la box intègre un connecteur [**Z-wave 700 Silabs ZGM130S**](https://www.silabs.com/wireless/z-wave/700-series-modules){: target="_blank"}.
Ils sont conçus pour répondre aux exigences de la future maison intelligente, de l'hôtellerie et des MDU, où les besoins croissants en plus de capteurs et d'appareils fonctionnant sur batterie nécessitent une longue portée et une faible puissance. Ce module sans fil prend également en charge Z-Wave Long Range. L'utilisation du module ZGM130S nécessite la certification Z-Wave Plus V2 ou V2 Long Range.

[**Lien technique Silabs ZGM130S**](https://www.silabs.com/wireless/z-wave/700-series-modules){: target="_blank"}

## Support vierge x2

- **À gauche** de la puce z-wave il y a un emplacement à 28 broches à souder, il s'agit d'un module bluetooth 5.2 EFR32BG22 à souder.

- **Au dessus** de la puce zigbee à droite, un autre emplacement libre, pour l'instant je ne sais pas ce qu'il permet d'accueillir

{% picture posts/{{ page.guid }}/jeedom-luna-zigbee-DSM-04B-zwave-ZGM-130S.png --alt Jeedom Luna Zigbee Dusun DSM-04B et z-wave 700 silabs ZGM-130S --img width="940" height="529" %}

## Support Lorawan type 230S

De l'autre côté on peut voir un emplacement prévu pour un module Lorawan de type 230S. Pas mal l'intégration pourrait se faire facilement

{% picture posts/{{ page.guid }}/jeedom-luna-connecteur-ssd-msa-230s-processeur-cortex-a53.png --alt jeedom luna connecteur interne ssd et cortex a53 --img width="940" height="529" %}

{% include product-embed.html guid="2143" %}

# Sous le capot

En quelques photos, une Jeedom Luna dévoilé plus en détail, pour les intéressés. La Jeedom Luna possède un disque de Led au centre idéal pour connaître l'état de la box, petit plus il est possible de modifier les couleurs des led [**voir plus bas plugin Luna dédié**](#plugin-luna-d%C3%A9di%C3%A9)

{% picture posts/{{ page.guid }}/jeedom-luna-sous-le-capot.png --alt jeedom luna que se cache-t-il sous le capot --img width="940" height="529" %}

{% picture posts/{{ page.guid }}/capture-jeedom-luna-connecteur.png --alt jeedom luna capture des composants --img width="940" height="529" %}

# Étape Jeedom start

Pas de notices fournis avec la box cependant une notice complète de lancement se trouve sur le web, direction [Jeedom Start](https://start.jeedom.com/){: target="_blank"}

- Déballage
- Branchement
- Inscription au Market
- Recherche de la box sur le réseau
- connexion à la box

{% picture posts/{{ page.guid }}/archive-jeedom-1-vs-jeedom-luna.png --alt pour la petite histoire des Jeedom la première version contre la version luna --img width="940" height="529" %}

> Pour la petite histoire j'ai commencé la domotique sous Jeedom, j'avais même participé à l'achat de la toute première Jeedom Box, la version 1 qui était basé sur un **raspberrypi modèle B de 2011 autant dire que l'histoire de Jeedom date**.

Une fois ces étapes faites si tout c'est bien passé rendez-vous sur: [**http://jeedomluna.local/**](http://jeedomluna.local/){: target="_blank"}

{% picture posts/{{ page.guid }}/page-de-connection-jeedom-luna.png --alt première connection à la Jeedom Luna --img width="940" height="474" %}

# Étape d'installation

J'ai réalisé un gif animé des étapes d'installations de la jeedom Luna, je n'ai rencontré aucun soucis particulier j'espère qu'il en seras de même pour toi :)

![Étape d'installation de la Jeedom Luna]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/etape-installation-box-jeedom-luna.webp{{ cachebuster }}){: width="940" height="474"}

## Plugin Luna dédié

Avec la box Jeedom a réalisé un plugin Luna qui te permet de:

- Connaître le statut d'alimentation ( plein, chargé, déchargé )
- contrôler l'anneau lumineux
- connaître l'état de la Batterie
- connecter/déconnecter le wifi
- contrôler l'état du réseau wifi 
- connaître la puissance du signal

![Application Jeedom Luna]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/jeedom-luna-app.webp{{ cachebuster }}){: width="242" height="477"}

Après installation du plugin et paramétrage j'ai du redémarrer la Box et ensuite les modifications étaient prises en compte, je ne sais pas si c'est un soucis de la box ou si je suis allé trop vite.

# Les **-**{: .red} du produit

- absence de POE+ pour l'alimentation par le RJ45
- manque d'intégration tableau électrique
- absence d'un port en interne pour Google Coral
- bloqué au Cortex A53
- absence de communication pour le port emmc interne
- absence bluetooth 5.2


# Les **+**{: .blue} du produit

- Box de bonne facture
- équipé par deéfaut des puces wifi, Zigbee et Z-wave
- équipé d'une batterie de secours
- intègre une nano Sim ainsi qu'une sdcard
- possibilité d'une extension Lorawan interne
- supporte le wifi 5Ghz

# Info exclusive
{: .red}

Cette box n'est pas conçu pour être évolutive, cependant un très gros plus, si tu décides de changer de logiciel domotique et bien **grâce à cette box tu peux le faire !**
Et oui la **box Dusun DSGW-210** tourne sous **debian** ainsi elle est compatible avec **Home Assistant (HAOS), Openhab, Jeedom, Node-red** et Thingsbord. **Ci-dessous le lien des manips à réaliser**

> [**Comment installer les applications sur DSGW-210**](https://www.dusuniot.com/blog/how-to/how-to-install-application-on-dsgw-210/){: target="_blank"}

{% include product-embed.html guid="2143" %}

# Conclusion

Le Jeedom Luna est une box tout en un, il lui **manque à mon goût le Poe+** pour le reste tout est bien, donc je te conseil de l'acheter. Néanmoins je suis déçu que l'équipe Jeedom n'a pas créé sa propre carte, depuis le temps qu'ils sont sur le marché français ils pourraient se créer l'exclusivité.
