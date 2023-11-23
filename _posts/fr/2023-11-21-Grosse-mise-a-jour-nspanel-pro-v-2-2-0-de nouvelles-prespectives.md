---
guid: 96
title: "Mise à jour Nspanel Pro V2.2.0 Zigbee"
description: "Désormais avec la V2.2.0 Le Nspanel Pro est configurable en coordinateur ou routeur une fonction très très intéressante, pour une intégration universelle."
ref: "NSPanel Pro"
layout: post
author: Nico
date: 2023-11-21 01:00
last_modified_at: 
categories: [News, Zigbee, Matter]
tags: []
image: 'v2.2.0-nspanel-pro-zigbee-coordinateur-routeur.png'
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
  - https://sonoff.tech/product-review/product-insight/sonoff-nspanel-pro-version-update-information-and-faq/
  - https://sonoff.tech/nspanelpro-api/
  - https://itead.cc/product/sonoff-nspanel-pro-smart-home-control-panel/ref/122/
  - https://www.domo-blog.fr/sonoff-nspanel-pro-zigbee-et-pilotage-de-la-piscine-via-la-domotique-home-assistant/
---

Jusqu'à présent je ne trouvais pas de **réels intérêts** concernant le NSPanel Pro qui est, **il faut l'avouer difficilement malléable**, je ne parle pas là du firmware original, mais la **possibilité de hacker** afin de le rendre compatible avec son assistant domotique préféré. NspanelPro comme beaucoup d'autres écran de contrôle, tourne sous android et il faut l'admettre c'est loin d'être le système d'exploitation à choisir pour faire de l'opensource domotique. De plus la puce zigbee jusqu'à présent fonctionnait en mode **coordinateur**. Ce qui bridait encore plus le système. **Mais tout ceci est sur le point de changer.**

{% include product-embed.html image="https://i0.wp.com/itead.cc/wp-content/uploads/2022/07/NSPanel-P_preorder_dim_gray.jpg?fit=1000%2C1000&ssl=1" title="Controleur Sonoff Nspanel Pro" brand="Sonoff" description="Controleur Sonoff Nspanel Pro avec zigbee 3.0 et wifi intégré" affiliate="_DCgKVON" domlink="objets-connectes/6625-sonoff-interrupteur-mural-noir-zigbee-30-nspanel-pro.html" iteadlink="sonoff-nspanel-pro-smart-home-control-panel" %}

En effet depuis la version 2.2.0 il est possible de **configurer la puce zigbee EFR32MG21 comme coordinateur ou comme routeur**. Ce qui permettra à terme de la rendre compatible avec Zigbee2mqtt ou ZHA et donc de l'intégrer facilement dans son réseau opensource Home-assistant, Jeedom, Gladys, openhab, etc... Et ça c'est un grand plus. D'ailleurs une demande d'intégration sur le github zigbee2mqtt est en cours, voir le lien ci-dessous.

[Z2M issues github](https://github.com/Koenkk/zigbee2mqtt/issues/19721){: target="_blank"}

## Nouveautées Version 2.1.0 et 2.2.0

**Voici les nouvelles mises à jours depuis la présentation de la version 2.0.0:**

1. Supporte **la vanne de radiateur thermostatique SONOFF Zigbee**. Tu peux allumer et éteindre, basculer entre les modes manuel/automatique et régler la température cible sur NSPanel Pro.
2. **Optimise l'expérience de balayage de l'écran**. Il est plus précis lorsque tu fais glisser ton doigt vers le bas pour accéder aux paramètres et que tu fais glisser ton doigt vers la gauche ou la droite pour changer d'écran.
3. Prise en charge des équipements de commutation et de prise GSM.
4. **Prise en charge du passage de NSPanel Pro du mode passerelle Zigbee au mode routeur Zigbee**. Cliquez sur « Paramètres de l'appareil – Fonctionnalités pilotes – Mode Zigbee » dans l'application pour activer le mode routeur Zigbee. Après être passé à un routeur Zigbee, vous devez le lier à d'autres passerelles.
5. Les **commutateurs et prises Matter** multicanaux ajoutés à NSPanel Pro prennent en charge le contrôle **All ON et All OFF**.
6. Prise en charge du réglage du **SNZB-06P** comme dispositif de déclenchement pour une sécurité intelligente.

> Remarque : *L'application doit être mise à niveau vers la **version 5.1.0** (elle devrait être disponible à la fin de ce mois pour les utilisateurs iOS.)

## Mais ce n'est pas tout

Comme énuméré dans un précédent article [sur la présentation de la V1.7.0 du Nspanel Pro]({% post_url /fr/2023-04-16-mise-a-jour-nspanel-pro-v1.7.0 %}), [Sonoff.tech a développé une web api](https://sonoff.tech/nspanelpro-api/){: target="_blank"} complète pour ce produit. 

{% picture posts/{{ page.guid }}/control-nspanel-pro-api-home-assistant.png --alt presentation de l'architecture de la web api développé par sonoff.tech pour le NSPanel Pro --img width="940" height="803" %}

> Ce qui laisse présager une intégration parfaite dans home Assistant, il ne reste plus qu'à développer.

**En observant de plus près le schéma tu pourras te rendre compte qu'on peut presque tout intégrer et lier beaucoup d'éléments**. Ce qui aurait pour but ultime de ne pas hacker le {{ page.ref }}. Etça c'est un atout de taille.

Actuellement tu peux trouver sur le net des **tutos pour faire fonctionner le NSPanel pro avec Home-assistant** soit en hackant soit en utilisant la page web. [Domo-blog a réalisé un tuto efficace sur ce sujet.](https://www.domo-blog.fr/sonoff-nspanel-pro-zigbee-et-pilotage-de-la-piscine-via-la-domotique-home-assistant/){: target="_blank"} **Cependant l'interface n'est pas assez grande pour une utilisation confortable.** Avec ces intégrations le {{ page.ref }} permet de tout contrôler mais l'interface et les commandes sont beaucoup trop petites et rendent le fonctionnement des moins claires. 

> Selon moi il est important de garder le firmware d'origine dont les commandes sont plus travaillées et l'utilisation WAF.

{% include product-embed.html image="https://i0.wp.com/itead.cc/wp-content/uploads/2022/07/NSPanel-P_preorder_dim_gray.jpg?fit=1000%2C1000&ssl=1" title="Controleur Sonoff Nspanel Pro" brand="Sonoff" description="Controleur Sonoff Nspanel Pro avec zigbee 3.0 et wifi intégré" affiliate="_DCgKVON" domlink="objets-connectes/6625-sonoff-interrupteur-mural-noir-zigbee-30-nspanel-pro.html" iteadlink="sonoff-nspanel-pro-smart-home-control-panel" %}

## Black friday

Actuellement tu trouveras le module à des prix dérisoires [Itead le propose à 67,90$](https://itead.cc/product/sonoff-nspanel-pro-smart-home-control-panel/ref/122/){: target="_blank"} soit un peu **plus de 62€** pour l'achat d'une unité, **jusqu'au 10 décembre 2023**. 

## Conclusion

Depuis le début Sonoff.tech nous promet une évolution constante de son module {{ page.ref }}, **et ça a été le cas**, avec l'apparition de la version v2.2.0, le {{ page.ref }} **devient très intéressant**, la perspective d'évolution et le fait de rendre le composant Zigbee en mode routeur **en font un module de contrôle incontournable**. *De plus le balayage de l'écran a été revu* c'est la preuve que l'évolution du firmware respecte ses utilisateurs. En bref fonce acheter ce module, [actuellement à 62€ chez Itead.](https://itead.cc/product/sonoff-nspanel-pro-smart-home-control-panel/ref/122/){: target="_blank"}
