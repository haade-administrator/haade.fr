---
guid: 114
title: "Test Lixee Zlinky la téléinfo plug'n play"
description: "Test du module Zlinky pour la remontée de la téléinformation spécial linky fabriqué par Lixee et plug'n play, compatible toutes box opensource"
ref: "Zlinky_TIC"
layout: post
author: Nico
date: 2024-03-20 12:00
last_modified_at: 
categories: [Tests, Zigbee, Haade-lab]
tags: []
image: 'lixee-zlinky-tic-teleinformation-linky-france-zigbee-plug-n-play.png'
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
rating: 4.4
sourcelink:
  - https://lixee.fr/produits/37-73-zigate-usb-ttl-3770014375148.html#/27-antenneexterne-non
  - https://www.domadoo.fr/fr/box-domotique/5914-lixee-module-tic-vers-zigbee-30-pour-compteur-linky-lixee-zlinky-3770014375148.html?domid=39
  - https://faire-ca-soi-meme.fr/domotique/2023/09/06/edito-de-la-rentree-2023-2024-part-1/
  - https://github.com/fairecasoimeme/Zlinky_TIC
  - https://www.nxp.com/products/wireless-connectivity/thread/jn5189-88-t-high-performance-and-ultra-low-power-mcus-for-zigbee-and-thread-with-built-in-nfc-option:JN5189_88_T
---

Actuellement il y a de **nombreuses façons de relever la téléinformation**, j'en ai déjà testé quelques unes, aujourd'hui je vais te parler du Lixee, je sais ce que tu te dit, **il vient en retard !** d'autres l'ont déjà fait. Pour ma défense je ne possède pas de Linky, mais depuis **l'arrivée D'august** la donne a changé. Alors Ce fameux {{ page.ref }} est-il à la hauteur ?

{% picture posts/{{ page.guid }}/presentation-lixee-zlinky-tic-teleinformation-linky.png --alt présentation du module téléinformation zlinky_tic par lixee --img width="940" height="529" %}

**{{ page.ref }} est un appareil permettant de transmettre toutes les informations du Linky en ZigBee 3.0.**
De plus il est **alimenté directement par le compteur Linky**. Une fonction presque Plug'n play, il suffit simplement d'enlever le cash (jaune fluo) et de "plugger" l'appareil en pressant sur le bouton orange.
Au départ, {{ page.ref }} **est en attente d'appairage** mais si tu souhaites réinitialiser l'appareil, il suffit de rester appuyer sur le bouton "link" pendant 10 secondes. Ensuite, le bouton relâché, **la Led s'éteint puis se met à clignoter.**
Une fois appairé à ta box domotique par l'intermédiaire d'une ZiGate ou d'un autre coordinateur ZigBee, tu pourras gérer votre consommation d'électricité.

{% include product-embed.html image="lixee-module-tic-vers-zigbee-30-pour-compteur-linky-lixee-zlinky.jpg" title="Lixee Zlinky_TIC" brand="Lixee" description="Surveille la consommation de ton domicile par la téléinformation en connectant le zlinky à ton linky" domlink="box-domotique/5914-lixee-module-tic-vers-zigbee-30-pour-compteur-linky-lixee-zlinky-3770014375148.html" %}

{% picture posts/{{ page.guid }}/zlinky_tic-v1.6-sous-le-capot.png --alt ouverture du module téléinformation zlinky_tic par lixee --img width="940" height="529" %}

Un démontage rapide du boitier s'effectue à l'aide des deux visses, on sent le **côté made in france**, simpliste mais fonctionnel.

{% picture posts/{{ page.guid }}/lixee-zlinky_tic-circuit-imprime-face-avant-teleinformation-linky.png --alt face avant du circuit imprimé du module téléinformation zlinky_tic par lixee --img width="940" height="529" %}

La face avant du circuit imprimé affiche la version actuelle du {{ page.ref }}, il faut savoir que ce projet à vu le jour l'année dernière sur le blog [faire-ca-soi-même](https://faire-ca-soi-meme.fr/domotique/2023/09/06/edito-de-la-rentree-2023-2024-part-1/){: target="_blank"}. Presque de l'open source jusqu'à ce que le représentant du Blog ait décidé de le commercialiser.

{% picture posts/{{ page.guid }}/lixee-zlinky_tic-circuit-imprime-puce-zigbee-nxp-jn5189.png --alt face arrière du circuit imprimé du module téléinformation zlinky_tic par lixee avec puce NXP JN5189 --img width="940" height="529" %}

Ce qui nous intéresse principalment sur la face arrière est la nature du composant Zigbee, il s'agit d'un [NXP JN5189](https://www.nxp.com/products/wireless-connectivity/thread/jn5189-88-t-high-performance-and-ultra-low-power-mcus-for-zigbee-and-thread-with-built-in-nfc-option:JN5189_88_T){: target="_blank"}, j'en avais déjà parlé dans un article précédent, ce sont des puces de très haute qualité mais qui ont un cout supérieur aux silabs. Bref il faut poser la question au créateur.

## Limite du {{ page.ref }}
Actuellement, l'appareil **fonctionne avec le mode Historique et standard du compteur Linky**.
Il permet de gérer tous les abonnements en mono ou triphasé et le mode production (uniquement en mode standard)

{%- include alert.html type="info" text="le mode historique ne fonctionne qu'avec les abonnements classique (BASE, heures pleines/creuses, bleu blanc rouge). Pour tous les abonnements particuliers (ex heures super creuses), il est obligatoire de passer le Linky en mode standard." link="https://lixee.fr/produits/37-73-zigate-usb-ttl-3770014375148.html#/27-antenneexterne-non" textlink="Infos complémentaires Lixee" %}

## Fonctions du Module TIC Zigbee Linky Lixee:

- Zlinky_TIC est alimenté par les bornes du compteur Linky.
- Il est compatible et respecte le protocole ZigBee 3.0.
- Il gère actuellement le mode historique et standard avec abonnement BASE / HCHP / Tempo en Mono ou Triphasé ou Production.

{% picture posts/{{ page.guid }}/lixee-module-tic-vers-zigbee-30-pour-compteur-zlinky-tic.png --alt nomenclatures en images du Lixee zlinky_tic téléinformation pour systèmes domotiques zigbee --img width="777" height="502" %}

## Caractéristiques techniques du {{ page.ref }}

|-------------|--------------|
|Communication|ZigBee® 2.4Ghz|
|Poids|15g|
|Dimensions|63 x 24 x 16 mm|
|Dimensions Du Paquet|110 x 110 x 20mm|
|Température De Fonctionnement|0°C - 60°C|

## {{ page.ref }} compatibilité

**Jeedom**
- plugin JeeZigbee (officiel)
- plugin Zigbee
- plugin zigbeelinker
- plugin Abeille

**Home Assistant**
- Intégration ZHA
- Zigbee2MQTT
- Deconz

**Homey**

**Zigate**

{% include doclink.html pdf="LiXee_Zlinky_TIC.pdf" title="Manuel utilisation sommaire du Lixee Zlinky_TIC" %}

## Intégration Zigbee2mqtt

Rien de plus simple, tu **actives l'appairage et tu branches** le {{ page.ref }} au linky, s'il s'agit d'un premier branchement il sera automatiquement en mode appairage, sinon appui sur le petit bouton qui va bien.

{% picture posts/{{ page.guid }}/lixee-zlinky-zigbee2mqtt-a-propos-remonte-info-home-assistant-teleinfo.png --alt intégration dans zigbee2mqtt du module de téléinformation lixee Zlinky_TIC onglet à propos --img width="940" height="652" %}

Le Lixee {{ page.ref }} est tout de suite reconnu, fonctionne en mode routeur et toutes les fonction y sont. La mise à jour OTA fonctionne, tu pourras retrouver [les firmwares sur le github du faire-ça-soi-même](https://github.com/fairecasoimeme/Zlinky_TIC){: target="_blank"}

{% picture posts/{{ page.guid }}/lixee-zlinky-zigbee2mqtt-expose-home-assistant-teleinfo.png --alt intégration dans zigbee2mqtt du module de téléinformation lixee Zlinky_TIC onglet expose --img width="940" height="653" %}

En plus de toutes les fonctions exposées *( similaire en tous points aux modules TIC du marché )*, tu pourras trouvers des paramètres supplémentaires, dans l'onglet dédié à cette effet dispo dans Z2M.

{% picture posts/{{ page.guid }}/lixee-zlinky-zigbee2mqtt-parametres-specifiques-home-assistant-teleinfo.png --alt intégration dans zigbee2mqtt du module de téléinformation lixee Zlinky_TIC onglet paramètres spécifiques --img width="940" height="651" %}

- mode linky
- precision
- tarif
- productio
- phasage
- etc...

seront paramétrables là aussi rien d'exceptionnel **mais ça a le mérite d'être complet.**

## Energie Home Assistant

La remontée **Kwh en fonction de base** est bien présente tu pourras l'intégrer directement dans le **tableau énergie** de Home Assistant et rendre la conso plus intuitive.

{% picture posts/{{ page.guid }}/lixee-zlinky-tic-information-energie-home-assistant.png --alt intégration dans l'onglet énergie de home assistant du module de téléinformation lixee Zlinky_TIC onglet paramètres spécifiques --img width="894" height="481" %}

Voilà j'ai mis en page une carte de présentations des différentes remontées du {{ page.ref }} dans Home assistant et ainsi d'un simple regard **tu connaîtras la conso de ton foyer.**

{% picture posts/{{ page.guid }}/lixee-zlinky-carte-affichage-home-assistant-teleinfo.png --alt exemple d'affichages des remontées d'énergies dans home assistant du module de téléinformation lixee Zlinky_TIC onglet paramètres spécifiques --img width="498" height="355" %}

## **les + du produit** {{ page.ref }}
{: .blue}

- Grande compatibilité Linky
- auto alimenté
- projet français
- intégrable facilement
- reconnu par de nombreux modules
- presque plug'n play ( z2m, zha, etc.. )


## **les - du produit** {{ page.ref }}
{: .red}

- Le tarif excessif (50€)
- quelques soucis d'incompatibilité

{% include product-embed.html image="lixee-module-tic-vers-zigbee-30-pour-compteur-linky-lixee-zlinky.jpg" title="Lixee Zlinky_TIC" brand="Lixee" description="Surveille la consommation de ton domicile par la téléinformation en connectant le zlinky à ton linky" domlink="box-domotique/5914-lixee-module-tic-vers-zigbee-30-pour-compteur-linky-lixee-zlinky-3770014375148.html" %}

## Conclusion

Le {{ page.ref }} est un produit conforme **et waf en tous points**, c'est un produit de **conceptions et assemblages français**. L'intégration est **parfaite**, le Lixee {{ page.ref }} est compatible avec la plupart des modules opensource du marché, c'est un bon point, ce qui le **rend exceptionnel** est le fait qu'il soit **autoalimenté** par le Linky, mais ce qui le rend **moins séduisant** est son **tarif élevé** il faudra compter **50€** pour obtenir le Graal, à toi de voir si le coût de l'autoalimentation te feras sauter le pas, [car pour toutes les autres fonctions la conccurrence sait faire, et pour 2 fois moins cher.]({% post_url /fr/2023-06-06-domotise-linky-micro-teleinfo-homeassistant %})