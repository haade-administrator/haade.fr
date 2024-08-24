---
guid: 137
title: "Test du controlleur d'arrosage Saswell SAS980 Zigbee"
description: "Je teste un module d'arrosage Zigbee le Saswell SAS980 avec minuteur intelligent et mesure du débit d'eau aussi fabriqué sous la marqe RTX référence ZVG1 qui a la particularité de mesurer la consommation d'eau mais pas que."
ref: "SAS980SWT-7-Z01"
layout: post
authors: [Nico]
date: 2024-08-24 19:33
last_modified_at: 
categories: [Domotique, Tests, Zigbee]
tags: []
video: 
image: 'programmateur-arrosage-intelligent-saswell-sas980-zigbee-zigbee2mqtt.png'
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
rating: 3.8
sourcelink: 
  - https://fr.saswell.com/smart-irrigation-wifi-water-timer-sas980swt-7-z01_p147.html
  - https://blog.domadoo.fr/93249-electrovanne-saswell-zigbee/
---

Après avoir testé le module d'irrigatrion **[Zigbee Woox R7060]({% post_url /fr/2023-03-29-test-controleur-arrosage-intelligent-zigbee-woox-r7060 %})** l'année dernière, je m'attaque aujourd'hui au test du **Saswell SAS980SWT-7-Z01** vendu sous marque blanche par RTX sous la référence ZVG1. Il est reconnu sous cette référence dans Zigbee2mqtt, mais depuis Saswell a repris la vente sous ce nom. Tu verras qu'il a des points intéressants. **Mais aussi quelques points de dysfonctionnements.**

{% include product-embed.html image="saswell-electrovanne-et-programmateur-d-arrosage-connecte-zigbee-mesure-de-consommation.png" title="Electrovanne Arrosage Zigbee" brand="Saswell" description="Contrôlez et programmez l'arrosage de votre jardin ou pelouse et mesurez la consommation d'eau avec l'électrovanne et programmateur connecté Zigbee SASWELL." domlink="jardin-connecte/7212-saswell-electrovanne-et-programmateur-d-arrosage-connecte-zigbee-mesure-de-consommation.html" amazlink="3AzXZFL" %}

Comme pour le Woox, Saswell a choisi une **puce Tuya Zigbee**. C'est bien un produit chinois.

> Je déplore tout de même ce choix car les puces Tuya sont toujours exempts de certaines fonctionnalitées comme l'absence de binding.

Néanmoins il a l'avantage d'apporter en plus des fonctions habituelles rencontrées sur ce type de produits des **formes réduites à l'encombrement** ce qui permet de fixer plusieurs modules d'irrigations sur une rampe commune. Contrairement à d'autres modèles que l'on ne peut pas mettre sur la même ligne.

## Déballage

Livré dans un carton sans marque apparente tu y découvriras à l'intérieur:
- une notice d'utilisation sommaire
- un mecanisme plug'n play avec préfiltre
- 2 joint blancs d'étanchéités
- un adaptateur 3/4 à 1/2"

{% picture posts/{{ page.guid }}/deballage-unboxing-programmeur-arrosage-zigbee-saswell-sas980.png --alt Déballage unboxing du programmeur d'arrosage Saswell SAS980 --img width="940" height="529" %}

> Quelques photos supplémentaires ...

{% picture posts/{{ page.guid }}/contenu-et-dimension-du-programmeur-arrosage-zigbee-saswell-sas980.png --alt Contenu et dimension du programmeur d'arrosage Saswell SAS980 --img width="940" height="529" %}

Le Saswell s'alimente avec deux piles AA ce qui est là aussi une bonne Nouvelle, et c'est aussi l'une des raisons de ce faible volume. 
> Ce design vertical te permettra une installation aisée sur rampe commune.

{% picture posts/{{ page.guid }}/design-vertical-saswell-sas980-permet-assembler-plusieurs-unites-sur-rampe-arrosage.png --alt Architecture du programmeur d'arrosage Saswell SAS980 permet l'assemblage sur rampe multi branchement d'assemblage --img width="940" height="529" %}

Pour finir une option très intéressante , est le calcul du débit volumétrique (débimètre) mesurée entre l'ouverture et la fermeture de la commande, **cependant j'ai vraiment l'impression que le débit d'eau consommé ne reflète pas la réalité.**

## Montage des accessoires

J'ai repris des photos avec les accessoires montés dont le système de fixation plug'n play chère à la marque Gardena, c'est un plus. Le compartimentage des piles est bien fait tu déclipse la coque et enlève le compartiment protégé par un joint d'étenchéité blanc pour une protection sans faille.

{% picture posts/{{ page.guid }}/dimension-assemblage-acces-piles-du-programmeur-arrosage-zigbee-saswell-sas980.png --alt Dimension, assemblage et accès aux piles du programmeur d'arrosage Saswell SAS980 permet l'assemblage sur rampe multi branchement d'assemblage --img width="940" height="529" %}

## Installation en vidéo

Ci-dessous l'installation officielle du Saswell {{ page.ref }}

{% include videoPlayer.html youtubeId="evaCnrPJU-I" %}

## Compatibilité Home Automation

### Dans Zigbee2mqtt

Comme d'habitude les fonctions dans Z2M sont complètes même trop à mon gout, l'intégration se fait sans aucun soucis bref que du bonheur. Donc grâce à ça tu pourra aisément l'utiliser dans Home Assistant, Jeedom, Gladys et j'en passe.

{% picture posts/{{ page.guid }}/rendu-controlleur-irrigation-rtx-zvg1-zigbee-dans-zigbee2mqtt-a-propos.png --alt Intégration du module d'irrigation Zigbee ongle à propos Zigbee2mqtt rtx zvg1 ou Saswell SAS980SWT-7-Z01 --img width="940" height="637" %}

Commençons par les fonctions principales:
- state te permet d'activer/désactiver l'ouverture du système
- la batterie et son niveau
- weather delay: correspond à l'activation météo sur un suivi de 24,48 ou 72h **malheureusement nous ne connaissons pas la valeur de l'état météo**. Cette fonction est là pour ne pas enclancher le système si de la pluie est prévu sous 24,48 ou 72h.
- Timer state: état du minuteur mais je ne saurai t'en dire plus
- timer: délai du fonctionnement de l'ouverture ON/Off
- timer time left: dernier enregistrement du délai de fonctionnement
- Last valve open duration: Temps pendant lequel la valve était ouverte
- Water consumed: Litres d'eau consommés valeurs erronnées*

{% picture posts/{{ page.guid }}/rendu-controlleur-irrigation-rtx-zvg1-zigbee-dans-zigbee2mqtt-expose-1.png --alt Intégration du module d'irrigation Zigbee onglet expose 1 Zigbee2mqtt premières options rtx zvg1 ou Saswell SAS980SWT-7-Z01 --img width="940" height="684" %}

Pour finir les groupes de fonctionnalités décevantes et ça c'est du à la puce Tuya, genONOFF et inexistant dans les fonctions sortantes ou entrantes donc tu ne pourras mettre en place un binding Zigbee ( fonctionnement en direct sans coordinateurs ) et c'est bien dommage.

{% picture posts/{{ page.guid }}/rendu-controlleur-irrigation-rtx-zvg1-zigbee-dans-zigbee2mqtt-endpoint-cluster.png --alt Fonctions disponibles Endpoint et Cluster rtx zvg1 ou Saswell SAS980SWT-7-Z01 --img width="940" height="516" %}

#### fonctions temps de fonctionnements et calendrier

Ci-dessous la capture d'écran des fonctions du {{ page.ref }}
le cycle timer te permettra de paramétrer des cycles d'arrosages encadrée d'une heure de début et une heure de fin. Exemple: entre 8h00 et 12h00 tu peux mettre un cycle d'arrosage de 4 minutes avec une pause de 45 minutes paramétré en fonction des jours et d'activer la fonction avec 1 ou désactivé avec 0.
**08:00 / 12:00 / 4 / 45 / MoTuWeThFrSaSu / 1**

En ce qui concerne la fonction calendrier tu pourras paramétrer un déclenchement à l'heure désirée 08h00 avec un temps de fonctionnement de 15 minutes selon les jours de la semaine et d'activer ou non la fonction avec 1.
**08:00 / 15 / MoTuWeThFrSaSu / 1**

> **PS:** j'ai remarqué en utilisant ces fonctions de dysfonctionnements d'activations.

{% picture posts/{{ page.guid }}/rendu-controlleur-irrigation-rtx-zvg1-zigbee-dans-zigbee2mqtt-expose-2.png --alt Intégration du module d'irrigation Zigbee onglet expose 2 Zigbee2mqtt premières options rtx zvg1 ou Saswell SAS980SWT-7-Z01 --img width="940" height="684" %}

### Dans ZHA avec Home Assistant

Si tu décides d'utiliser ZHA tu pourras simplement utiliser le commutateur on/off, alors c'est sur que niveau fonction c'est très limite, mais tu pourras grâce à homeassistant cette seule fonction ne t'empêchera pas d'utiliser ce programmateur grâce à la puissance des automatisations. Toutefois il manque la fonction de débimètre mais vu le fonctionnement imprécis de celui-ci tu pourras là aussi largement t'en passer.

{% picture posts/{{ page.guid }}/rendu-controlleur-irrigation-rtx-zvg1-zigbee-dans-zha.png --alt Intégration du module d'irrigation Zigbee avec ZHA et Zigpy le rtx zvg1 ou Saswell SAS980SWT-7-Z01 --img width="940" height="815" %}

## Test du Débimètre 

### Montage sur sprinkler 

Dans mon cas j'utilise un système d'irrigation monté sur un surpresseur calibré sur 3,5 bars, ce réseau d'arrosage est constitué de sprinkler pour pots de fleurs afin d'arroser une multitude de plantes en containers.

Ce type d'alimentatation en eau à beaucoup d'avantages mais la pression à l'intérieur du système est variable, entre la vidange du surpresseur et la réalimentation en air. Dans ce cas le débimètre du Saswell {{ page.ref }} est totalement erroné, pour 4 minutes d'utilisations il m'indique 10L de consommation alors que je suis à 50 litres.

### Sur réseau d'eau potable avec jet

Suite à cette erreur je décide simplement de tester le débit d'eau sur un branchement en direct d'eau potable au débit de 3 bars avec un arrosage par jet d'eau en direct sois les 3 bars de pressions utilisés. Les résultats sont sans appels le débimètre m'indique 50 litres alors que je suis en réalité à 52 litres.

## Caractéristiques techniques

- Protocole sans fil: ZigBee 3.0
- Alimentation: 2 piles alcalines AA 1.5V LR6 (NON INCLUS)
- Durée de vie de la batterie: jusqu’à 12 mois (selon usage)
- Température de fonctionnement: +1 à +50°C (Ne pas exposer le dispositif en extérieur durant l’hiver)
- Plage de température de stockage: -10 à +60℃
- Connexion robinet: 3/4″ avec filtre intégré et adaptateur 1/2″ fourni
- Indice de protection: **IP54**
- Pression d’eau maximale: 0,03 ~ 0,8 MPA
- Mesure de la consommation d’eau: **pour débits de 5L/min minimum à 35L/min maximum**

**Les + du produit:**{: .blue}

- Le prix
- Alimentation par pile AA garantie 1an
- Adaptable facilement sur système traditionnel
- Meteo compatible (se bloque en cas de pluie annoncée)
- Controle les volumes d'eau utilisé
- compatible Zigbee2mqtt

**Les - du produit:**{: .red}

- Mesure du volume d'eau erroné
- Contrôleur météo ne remonte aucune donnée
- indice de protection IP54 insuffisant

{% include product-embed.html image="saswell-electrovanne-et-programmateur-d-arrosage-connecte-zigbee-mesure-de-consommation.png" title="Electrovanne Arrosage Zigbee" brand="Saswell" description="Contrôlez et programmez l'arrosage de votre jardin ou pelouse et mesurez la consommation d'eau avec l'électrovanne et programmateur connecté Zigbee SASWELL." domlink="jardin-connecte/7212-saswell-electrovanne-et-programmateur-d-arrosage-connecte-zigbee-mesure-de-consommation.html" amazlink="3AzXZFL" %}

## Conclusion

Saswell signe là un module d'irrigation avec des atouts indéniables par son design longitudinal, je regrette tout de même que le calcul d'eau consommé soit loin de la réalité ainsi que de nombreuse options au fonctionnement aléatoire. 
> Le produit est de bonne facture mais loin d'être abouti.