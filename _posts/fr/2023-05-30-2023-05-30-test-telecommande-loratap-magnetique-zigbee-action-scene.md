---
guid: 67
title: "Télécommande Loratap 4 boutons Zigbee"
description: "Test de la télécommande Loratap SS9400ZB-YA magnétique compatible zigbee 3.0 sans fil pour scène, action, interrupteur"
layout: post
author: Nico
date: 2023-05-30 20:29
last_modified_at: 
categories: [Tests, Zigbee, Haade-lab]
tags: []
image: 'telecommande-zigbee-loratap-magnetique-4-touches.png'
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
rating: 4.7
sourcelink:
  - https://www.loratap.com/collections/zigbee-remote
  - https://www.domadoo.fr/peripheriques/6040-loratap-interrupteur-mural-de-scene-sans-fil-zigbee-30-4-boutons.html?domid=39
  - https://www.zigbee2mqtt.io/devices/TS0044.html
  - https://zigbee.blakadder.com/LoraTap_SS9400ZB-YA.html
---

Tout d'abord **je tenais à remercier** [Domadoo](https://www.domadoo.fr/peripheriques/6040-loratap-interrupteur-mural-de-scene-sans-fil-zigbee-30-4-boutons.html?domid=39){: target="_blank" } pour m'avoir fourni le module télécommande LoraTap SS9400ZB-YA sans fil et magnétique à 4 touches. Il fait partie de ces modules qui rendent la domotique [WAF](https://fr.wikipedia.org/wiki/Facteur_d%27acceptation_f%C3%A9minine){: target="_blank" }, en facilitant l'accès aux action et scènes.

J'ai testé la télécommande avec zigbee2mqtt et Zha dans l'assistant homeassistant et avec Zigbee dans Jeedom, tu trouveras un retour d'intégration un peu plus bas.

## Le matos

**Franchement rien à redire**, la télécommande est fournie **avec visses et chevilles** pour installer le support murale, un tournevis est même fournis ( il ne sert pas à fixer le support, mais à ouvrir la partie arrière pour accéder à la pile ). 
Une brève notice technique l'accompagne, le tout dans une boite rigide et de petite taille.

{% picture posts/{{page.guid}}/loratap-telecommande-ts044-SS9400ZB-YA-demontage-complet.png --alt telecommande SS9400ZB-YA zigbee 3.0 loratap 4 boutons sans fil démontage complet --img width="940" height="529" %}

Là ou cette télécommande se démarque c'est son ergonomie, **tu peux l'utiliser en même temps comme télécommande murale et nomade grâce à ce support magnétique**, qui est très bien fait.

{% picture posts/{{page.guid}}/telecommande-zigbee-loratap-test-magnetique-4-touches.png --alt telecommande SS9400ZB-YA zigbee 3.0 loratap 4 boutons test de aimant --img width="940" height="529" %}

Sur **l'image** ci-dessous tu pourras te rendre compte **de la taille** une dimension de 80x80, qui est assez imposante, *mais pas trop pour tout gâcher*, j'ai fini par démonter entièrement le module pour voir ce qui se cachait là dessous. 

> En faite pas grand chose, un circuit imprimé relativement sommaire bon pas besoin de plus

LoraTap a décidé d'y intégré une **puce Tuya ZS3L**, il faut dire mais je me répète, c'est une puce qui est de plus en plus courante, car peu cher.

{% picture posts/{{page.guid}}/telecommande-zigbee-loratap-4-boutons-actions-scenes-taille-tuya.png --alt telecommande SS9400ZB-YA zigbee 3.0 loratap 4 boutons sans fil cr2032 scenes et actions --img width="940" height="529" %}

## Partie Technique

**le mode inclusion** se fait **en appuyant 7 secondes** sur une des touches, la lumière orange reste fixe 4 secondes, puis s'éteint et se met à clignoter à la 7ème seconde

**En plus des 4 touches cette télécommande permet d'appeler une action par:**
- appui court: la lumière orange clignote 1 fois
- double appui: la lumière orange clignote 2 fois
- appui long: la lumière reste fixe 4 secondes après elle s'éteint.

Donc si tu choisi cette télécommande **tu pourras commander 12 actions ou scenes** différente et *ça c'est un super point*.

**Autre point positif c'est le prix, moins de 15€ chez Domadoo**

{% include product-embed.html guid="2160" %}

## Compatibilité

Actuellement elle est officiellement ( selon Loratap ) compatible:
- Homeassistant par Zigbee2mqtt
- Tuya 
- Smartlife

Mais elle est aussi car testé par mes soins voir ci-dessous, compatible avec

- Jeedom par le module Zigbee ou Zigbee2mqtt
- Zha avec Homeassistant

## **les + du produit**
{: .blue}
- le prix
- la qualité de fabrication
- le nombre de commande pouvant être associé **soit 12**
- il est possible d'utiliser les modes scènes et actions en même temps
- murale et nomade

## **les - du produit**
{: .red}

- intégration laborieuse Jeedom
- pile cr2032 de marque chinoise
- Puce Zigbee ZS3L du fabriquant TUYA

## Intégration dans Zigbee2mqtt

L'intégration dans Zigbee2mqtt est des plus simples

{% picture posts/{{page.guid}}/integration-loratap-telecommande-ts044-zigbee-zigbee2mqtt.png --alt telecommande SS9400ZB-YA zigbee 3.0 loratap 4 boutons dans zigbee2mqtt --img width="940" height="39" %}

Elle est reconnu comme la télécommande Loratap SS6400 qui a des caractéristiques similaires car toutes deux répertoriées en modèle **Tuya TS0044**.

{% picture posts/{{page.guid}}/integration-loratap-telecommande-ts044-zigbee-zigbee2mqtt-a-propos.png --alt telecommande SS9400ZB-YA zigbee 3.0 loratap 4 boutons dans zigbee2mqtt à propos reconnus comme module SS6400 --img width="940" height="745" %}

L'exposition dans Z2M est très sommaire avec 3 entrées: 
- la batterie
- les actions sur les boutons
- la qualité du lien.

{% picture posts/{{page.guid}}/integration-loratap-telecommande-ts044-zigbee-zigbee2mqtt-expose.png --alt telecommande SS9400ZB-YA zigbee 3.0 loratap 4 boutons dans zigbee2mqtt exposition des commandes --img width="940" height="273" %}

**Voilà la partie la plus intéressante** comment fonctionne-t-elle en tant qu'appareil avec Z2M et homeassistant:

On retrouve un capteur d'actions, qui montrera succintement l'action réalisée. Tu peux voir dans le journal que les actions sont bien reconnues:
- simple appui
- double appui
- appui long ( pas présent sur la capture mais fonctionnel )

{% picture posts/{{page.guid}}/integration-loratap-telecommande-ts044-homeassistant.png --alt telecommande SS9400ZB-YA zigbee 3.0 loratap 4 boutons dans homeassistant appareil intégré avec z2m --img width="940" height="677" %}

## Intégration dans ZHA

Dans ZHA aucun soucis d'intégration, la télécommande est comme pour Zigbee2mqtt reconnu en tant que Tuya TS044

{% picture posts/{{page.guid}}/integration-loratap-telecommande-ts044-zha-homeassistant.png --alt telecommande SS9400ZB-YA zigbee 3.0 loratap 4 boutons dans zha sous homeassistant --img width="940" height="28" %}

Par contre pas de capteurs d'actions à la place 4 entités diagnostic battery.

> Donc point négatif pour l'intégration ZHA à la place on devrait voir des capteurs d'actions nommés de 1 à 4 par exemple.

**Par contre le journal remonte bien les actions:**
- simple appui
- double appui
- appui long ( pas présent sur la capture mais fonctionnel )

{% picture posts/{{page.guid}}/integration-loratap-telecommande-ts044-zha-homeassistant-avec-actions.png
--alt telecommande SS9400ZB-YA zigbee 3.0 loratap 4 boutons dans zha sous homeassistant vue appareil --img width="940" height="492" %}

## Intégration dans Jeedom

Dans Jeedom l'intégration s'est faite sans soucis avec le module Zigbee, ici aussi la télécommande est reconnu comme Tuya TS044

{% picture posts/{{page.guid}}/integration-loratap-telecommande-ts044-SS9400ZB-YA-jeedom-zigbee.png
--alt telecommande SS9400ZB-YA zigbee 3.0 loratap 4 boutons dans jeedom avec le module zigbee --img width="940" height="263" %}

Par contre **je n'ai pas réussi à voir si les 3 types d'actions sont fonctionnels** à savoir:
- simple appui
- double appui
- appui long ( pas présent sur la capture mais fonctionnel )

> Il faut dire que l'interface Jeedom n'est pas des plus limpides sur ce point là.

{% picture posts/{{page.guid}}/integration-loratap-telecommande-ts044-SS9400ZB-YA-jeedom-zigbee-commande.png
--alt telecommande SS9400ZB-YA zigbee 3.0 loratap 4 boutons dans jeedom avec le module zigbee vue des commandes --img width="940" height="170" %}

**Domadoo déconseille d'utiliser ce produit dans Jeedom ( surconsommation de piles etc... )**{: .red}
**il semblerait sous Luna du moins que ce soit résolu**. il suffit de mettre à jour le derniers firmware de la puce intégrée.

 
## Caractéristiques

|Couleur|Blanc|
|Protocole sans fil|Tuya Zigbee 3.0|
|Distance de contrôle|10 mètres autour du Hub Tuya ZigBee|
|Dimensions|80mm * 80mm * 12mm|
|Type de batterie|pile CR2032 (incluse dans la boîte)|
|Conception De brevet|Oui|

{% include product-embed.html guid="2160" %}

## Conclusion

Les variantes de cette télécommande sont nombreuses,**disponible de 1 à 6 touches** pour les nouveaux modèles. **C'est un module que tu peux acheter les yeux fermés**, le produit se démarque par son support magnétique. Et gros point important tu bénéficie de 12 commandes au total pour la version 4 touches. Pour l'intégration **je te conseil de passer par le module Zigbee2mqtt**.
