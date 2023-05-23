---
guid: 65
title: "Test du Cube Aqara T1 Pro"
description: "test du cube t1 pro multifonction Aqara et intégration complète avec zigbee2mqtt et Zha, un indispensable de la domotique et une qalité irréprochable pour Aqara"
layout: post
author: Nico
date: 2023-05-14 18:41
last_modified_at: 
categories: [Tests, Zigbee, Domotique]
tags: []
image: 'test-et-foctionnement-cube-t1-pro-aqara-zigbee-CTP-R01.png'
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
rating: 5.0
sourcelink:
  - https://www.aqara.com/eu/product/cube-t1-pro
  - https://www.domadoo.fr/fr/peripheriques/6413-aqara-controleur-intelligent-zigbee-30-aqara-cube-t1-pro-6970504217614.html?domid=39
  - https://www.nxp.com/products/wireless/thread/jn5189-88-t-high-performance-and-ultra-low-power-mcus-for-zigbee-and-thread-with-built-in-nfc-option:JN5189_88_T
---

**test du cube t1 pro multifonction Aqara et intégration complète avec Zigbee2mqtt et Zha**, un indispensable de la domotique et une *qualité irréprochable* pour Aqara. **Ce controlleur Cube T1 Pro est tout simplement étonnant**, semblable à son prédécesseur, le Cube T1 Pro reconnaît différentes actions telles que **pousser, secouer, faire pivoter, retourner et taper**. Un nouveau mode scène est ajouté, et lorsque le mode est activé, le cube reconnaît également différents côtés. Ainsi les utilisateurs peuvent simplement utiliser chaque côté pour contrôler diverses scènes et appareils. Des indicateurs en forme de dés sont imprimés sur les côtés pour aider les utilisateurs à les distinguer les uns des autres. Merci à Domadoo pour m'avoir permis de réailiser ce test/tuto. 👍

{% include product-embed.html guid="2159" %}

## Déballage

{% picture posts/{{page.guid}}/deballage-aqara-cube-t1-pro-zigbee.png --alt déballage cube t1 pro Aqara --img width="940" height="529" %}

**Comme d'habitude Aqara soigne la qualité des emballages et produits**, le cube T1 pro n'échappe pas à ce standard. Carton et descriptif produit signé d'un bleu Aqara, tu y trouvera un cube soigneusement emballé et bien protégé accompagné d'une notice descriptive complète de d'une clé  te permettant d'ouvrir le cube et ainsi accéder à l'interrupteur d'initialisation et à la plis de marque Panasonic et de référence CR2450 avec **une garantie de fonctionnement de 2 ans**.

### Fonctions

- Alimenté par batterie
- Petite taille et léger, facile à utiliser
- Supporte HomeKit
- **10 actions** en mode scène
- Mode classique du cube d'origine
- Supporte IFTTT et Alexa
 
### Caractéristiques

|Alimentation|Pile CR2450|
|Protocole sans fil|Zigbee|
|Fréquence de fonctionnement Zigbee|2400-2483,5 MHz|
|Puissance de sortie maximale Zigbee ≤ 13 dBm|
|Température de fonctionnement|-10°C ~ 50°C (14°F ~ 122°F)|
|Humidité de fonctionnement|≤ 95 % HR, sans condensation|
|Dimensions|4,5 x 4,5 x 4,5 cm|
|Poids|76 grammes|

### Notice Technique

{% include doclink.html pdf="notice-technique-cube-t1-pro-aqara.pdf" title="notice technique Aqara Cube T1 Pro" %}

## Sous le capot du cube T1 Pro Aqara

{% picture posts/{{page.guid}}/ouverture-du-cube-t1-pro-fabrication-du-module.png --alt ouverture du cube t1 pro Aqara --img width="940" height="529" %}

L'assemblage des éléments est de qualité, le circuit imprimé est très bien réalisé, la puce zigbee est entièrement intégré au circuit

{% picture posts/{{page.guid}}/circuit-imprime-cube-t1-pro-aqara.png --alt circuit imprimé du cube t1 pro Aqara --img width="940" height="529" %}

> Xiaomi a décidé d'intégré dans ses circuits la puce zigbee NXP JN5189 à base de ARM Cortex-M4, c'est une bonne chose, le choix de ne pas choisir comme beaucoup d'autre fabriquant une puce Tuya est selon moi une bonne chose.

Il relativement facile de Flasher ce type de puces.

[Caractéristiques puce zigbee NXP JN5189](https://www.nxp.com/products/wireless/thread/jn5189-88-t-high-performance-and-ultra-low-power-mcus-for-zigbee-and-thread-with-built-in-nfc-option:JN5189_88_T){: target="_blank"}


## **les + du produit**
{: .blue}
- le prix
- la qualité de fabrication
- le nombre de commande pouvant être associé
- prise en charge mise à jour OTA

## **les - du produit**
{: .red}

- l'intégration peut être complexe pour les novices
- il n'est pas possible d'utiliser les modes scènes et actions en même temps


## Zigbee2mqtt

### Intégration du cube T1 Pro Aqara dans Z2M

{% picture posts/{{page.guid}}/integration-aqara-cube-t1pro-zigbee2mqtt.png --alt intégration dans Z2M du cube t1 pro Aqara --img width="940" height="38" %}

Le Cube T1 pro est parfaitement reconnu dans Zigbee2mqtt un bon point pour la reconnaissance dans les assistants tel que Homeassistant, Jeedom et Gladys, pour ne citer qu'eux !

{% picture posts/{{page.guid}}/integration-aqara-cube-t1pro-zigbee2mqtt-a-propos.png --alt zigbee2mqtt a propos du cube t1 pro Aqara --img width="940" height="701" %}

Le cube T1 pro est entièrement reconnu dans Zigbee2mqtt et 100% fonctionnel.

{% picture posts/{{page.guid}}/integration-aqara-cube-t1pro-zigbee2mqtt-expose.png --alt z2M exposition du cube t1 pro Aqara --img width="940" height="701" %}

### fonctionnement du Blueprint par Sir_Goodenough pour Zigbee2mqtt

En suivant le lien de discussion ci-dessous très bien documenté tu pourras utiliser facilement toute les fonctions du cube T Pro, merci à Sir_Goodenough.

[Lien de discussion du Blueprint par Sir_Goodenough](https://community.home-assistant.io/t/zigbee2mqtt-aqara-magic-cube-t1-pro-ctp-r01-xiaomi-lumi-cagl02/525111){: target="_blank"}

{% include homeassistantlink.html bluelink="https://github.com/SirGoodenough/HA_Blueprints/blob/master/Automations/Zigbee2MQTT-Aqara-Magic-Cube-T1-Pro-CTP-R01-Xiaomi-Lumi.yaml" %}

## ZHA

### Intégration du cube Aqara T1 Pro

Dans Zha l'intégration est aussi faite sans aucun soucis, il suffit là aussi de rester appuyer 5 secondes

{% picture posts/{{page.guid}}/integration-aqara-cube-t1pro-zha.png --alt intégration dans ZHA et Homeassistant du cube t1 pro Aqara --img width="940" height="29" %}

L'exposition des fonctions dans ZHA s'avère plus longue tu pourras par exemple voir que les infos ne sont pas remontés après l'intégration cependant la rotation s'est faite sans soucis regarde les logs infos ?

{% picture posts/{{page.guid}}/integration-aqara-cube-t1pro-zha-expose.png --alt reconnaissance dans ZHA du cube t1 pro Aqara --img width="940" height="685" %}

## fonctionnement du Blueprint 128 actions pour ZHA

Là aussi j'utilise le Blueprint fournis par Sir_Goodenough et très bien documenté sur la communauté, les fonctions sont largement automatisés et fonctionnels un bon point pour Blueprint et Homeassistant.

[Lien de discussion du Blueprint par Sir_Goodenough](https://community.home-assistant.io/t/zha-xiaomi-cube-controller/495975){: target="_blank"}

{% include homeassistantlink.html bluelink="https://github.com/SirGoodenough/HA_Blueprints/blob/master/Automations/ZHA-Xiaomi_Cube_Controller.yaml" %}

### Créer un nombre pour le blueprint

![Créer un nombre dans Homeassistant afin de créer les 6 faces du cube]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/creer-nombre-ha-cube-t1-pro.webp{{ cachebuster }}){: width="820" height="409"}{: target="_blank"}

## Conclusion intégration

> Pour cette intégration Zigbee2mqtt s'en sors haut la main face à ZHA

{% include product-embed.html guid="2159" %}

## Conclusion

Aqara Cube T1 Pro est une télécommande intelligente agréable à utiliser aux nombreuses fonctions, idéal pour commander de nombreuses actions dans le logement.
> tellement bien réalisée qu'elle te paraîtra rapidement indispensable