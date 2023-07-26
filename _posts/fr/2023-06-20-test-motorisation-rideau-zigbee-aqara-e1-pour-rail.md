---
guid: 72
title: "test du module de motorisation pour rideau Aqara curtain driver E1"
description: "test complet du module pour ouverture et fermeture de rideau Aqara E1 version rail avec intégration dans zigbee2mqtt, zha et Jeedom, domotise les rideaux en Zigbee"
ref: "Aqara curtain driver E1 rail version"
layout: post
author: Nico
date: 2023-06-20 13:26
last_modified_at: 
categories: [Tests, Zigbee]
tags: []
image: 'test-aqara-e1-motorisation-rideau-version-rail-zigbee.png'
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
rating: 4.2
sourcelink:
  - https://www.aqara.com/eu/product/curtain-driver-e1-track-version
  - https://www.domadoo.fr/fr/peripheriques/6251-aqara-motorisation-pour-rideau-zigbee-30-aqara-curtain-driver-e1-version-rail-6970504215122.html
---

Conçu dans une matière en plastique blanc de qualité à la texture satinée, le module Aqara Curtain Driver E1 track version ( motorisation de rideau sur rail ) est un bloc de **14.05 cm x 9.6 cm x 4.4 cm** qui pèse presque de 500 grammes. C’est beaucoup et il faut tenir compte de ce poids qui sera suspendu à la tringle. Il n’est pas négligeable et s’ajoute à celui des rideaux. Toutefois, la capacité de son moteur supporte une charge **jusqu’à 12 kg de tissus**, ce qui est énorme.
> Qu'en est-il de l'intégration dans les systèmes domotiques ouvert du marché ?

{% include product-embed.html guid="2162" %}

{% picture posts/{{ page.guid }}/contenu-boite-aqara-pilote-rideeau-e1-rail-version.png --alt contenu de la boite du module de motorisation zigbee aqara curtain driver E1 version rail --img width="940" height="529" %}

## Dans la boite

1. 2 poulies réglables (pour les systèmes de rail type I ayant une dimension à la base ≥1 cm).
2. 1 câble d’alimentation USB / USB-C d’une longueur de 80 cm. Une fois chargée la batterie doit tenir environ 1 an
3. 1 manuel d’utilisation (dont le français). Il comporte notamment un QR Code renvoyant vers une vidéo, en cas  de besoin d’aide pour l’installation, mais celle-ci est sous-titrée en chinois.

{% include doclink.html pdf="Curtain-Driver-E1-(Track Version)_User Manual.pdf" title="Manuel utilisateur du module pilote de rideau aqara e1 version rail" %}

{% picture posts/{{ page.guid }}/aqara-e1-curtain-driver-size-and-specification-motorisation-rideau.png --alt taille et specification du module de motorisation zigbee aqara curtain driver E1 version rail --img width="940" height="529" %}

> L'emballage est très bien fait, comme on a l'habitude de voir pour les produits Aqara. Toutes les infos importantes sont affichés sur le carton c'est un très bon point.

## Installation de la motorisation {{ page.ref }}

{%- include alert.html type="warning" text="Attention! ce module ne s'adapte pas aux fixation de type chemin de fer à clipser avec cordon de guidage" %}

**Uniquement compatible avec le rail de type U**{: .blue} dont **l'ouverture est <= à 0.8mm**

{% picture posts/{{ page.guid }}/Aqara-motorisation-rideau-version-rail-u.png --alt compatibilité du module de motorisation zigbee aqara curtain driver E1 version rail modèle U --img width="940" height="529" %}

ou **compatible avec les rail en I**{: .blue} **dont la base et >= à 10mm**, tu pourras utiliser les guides fournis avec le pilote CM-M01

{% picture posts/{{ page.guid }}/Aqara-motorisation-rideau-version-rail-i.png --alt compatibilité du module de motorisation zigbee aqara curtain driver E1 version rail modèle I --img width="940" height="529" %}

{% include videoPlayer.html youtubeId="HNYChqU5A58" %}

## fonctionnement et caractéristique de L'{{ page.ref }}

**fonctionnement de la LED indicateur d’état:**

|*Bleu*{: .blue} clignotant rapidement|connexion au hub|
|*Orange*{: .orange} clignotant lentement|mise à jour du firmware|
|*Vert*{: .green} clignotant rapidement|maintien au rail en cours|
|*Vert*{: .green} clignotant|sortie du rail en cours|
|Blanc clignotant|en cours de charge|
|Blanc clignotant en continu|charge terminée|

**Le bouton physique de fonctionnement :**

|1 clic|ouvre/ferme/stoppe le rideau|
|2 clics successifs|libère/retire/arrête le crochet|
|3 clics successifs|réglage manuel des fins de course|
|appui de 5 secondes|allume/éteint/réinitialise|

**Le capteur de luminosité**, est situé en partie inférieure pour être placé au plus près de la vitre. *Il va être possible de l’utiliser pour ouvrir ou fermer les rideaux en fonction de la luminosité ambiante*, intérieure ou extérieure selon votre configuration.

**Les bips sonores indiquent :**

|1 Bip long|paramètre d’usine / recherche de l’appareil / distance d’ouverture supprimée / sens ouverture – fermeture inversé / définition de la limite|
|2 bips courts|définition du point limite en manuel / plage de course supprimée|
|3 bips courts|en place ou libéré / batterie faible|

### Fonction de l'{{ page.ref }} :

- Contrôlez votre rideau
- Télécommande d'application
- Automatisation intelligente
- Calendrier d'ouverture/fermeture
- Pourcentage d'ouverture et de fermeture personnalisé
- Capteur de lumière intégré
- Batterie au lithium rechargeable
- Jusqu'à 1 an d'autonomie (selon l'utilisation)
- Installation facile
- Compatible avec les rails en U et en I
- Charge maximale de **12 Kg**

### Caractéristiques de l'{{ page.ref }}

|Alimentation|5VDC 1,5A|
|Type de batterie|Li-Ion rechargeable (non remplaçable)|
|Consommation électrique totale|7,5 W|
|Vitesse de déplacement|12 cm/s|
|Couple nominal|0,2 N.m|
|Vitesse nominale du rotor|100 tr/min|
|Température de fonctionnement|-10℃~+50℃|
|Humidité de fonctionnement|0 % à 95 % HR, sans condensation|
|Dimensions|140,5 × 96 × 44 mm|
|Classement IP|IP20|
|Communication|ZigBee 3.0|

## Installation avec Zigbee2mqtt

> L'installation dans Zigbee2mqtt se fait sans aucun problème, comme c'est souvent le cas

{% picture posts/{{ page.guid }}/integration-aqara-curtain-driver-e1-track-version-zigbee2mqtt-apropos.png --alt compatibilité du module de motorisation zigbee aqara curtain driver E1 version track zigbee2mqtt remontée info --img width="940" height="856" %}

Là je suis bluffé, l'intégration de l'{{ page.ref }} dans Zigbee2mqtt est tout simplement bluffante elle te laisse l'accès à l'ensemble des **fonctions du module soit 17 fonctions** je n'ai jamais rien vu de pareil !

### État des fonctions:**

1. **state:** ouvrir/fermer/stop
2. **position:** position de l'ouverture de 0 à 100%
3. **hands_open:** tirer les rideaux à la main démarre le moteur ( vria/faux )
4. **limits_calibration:** paramètresle début et la fin de course
5. **battery:** tu l'auras compris
6. **voltage:** idem
7. **device_temperature:** Température de l'appareil
8. **illuminance_lux:** Éclairage lumineux mesuré en lux
9. **action:** Action déclenchée (par ex : un clic sur un bouton)
10. **motor_state:** état du moteur (ouvert/fermé/arrêté)
11. **running:** Le moteur est-il en mouvement ou pas
12. **hooks_lock:** verrouille/déverouille le module (verrouillage des crochets dans le support)
13. **hooks_state:** État des accroches
14. **target_position:** Position cible en %
15. **power_source:** batteries ou dc
16. **charging:** État de chargement
17. **link_quality:** état du lien dans le maillage

{% picture posts/{{ page.guid }}/integration-aqara-curtain-driver-e1-track-version-zigbee2mqtt-expose-1.png --alt compatibilité du module de motorisation zigbee aqara curtain driver E1 version track zigbee2mqtt rexposition des commandes --img width="940" height="702" %}

{% picture posts/{{ page.guid }}/integration-aqara-curtain-driver-e1-track-version-zigbee2mqtt-expose-2.png --alt compatibilité du module de motorisation zigbee aqara curtain driver E1 version track zigbee2mqtt exposition des commandes suite --img width="940" height="386" %}

**Le contrôle dans Home Assistant est nickel**, tu peux facilement tout contrôler d'un simple clic, parfait.


{% picture posts/{{ page.guid }}/integration-aqara-curtain-driver-e1-track-version-zigbee2mqtt-controle.png --alt compatibilité du module de motorisation zigbee aqara curtain driver E1 version track zigbee2mqtt entité présentation --img width="940" height="874" %}

{% picture posts/{{ page.guid }}/integration-aqara-curtain-driver-e1-track-version-zigbee2mqtt-controle-lovelace.png --alt compatibilité du module de motorisation zigbee aqara curtain driver E1 version track zigbee2mqtt lovelace controle --img width="506" height="359" %}


## Installation sur Jeedom Luna

Depuis peu une mise à jour du module Zigbee datant du 26/05/2023 et du module Luna du 08/06/2023 l'intégration et la stabilité des modules zigbee à été amélioré. Je n'ai rencontré aucun soucis pour l'intégration du l'{{ page.ref }}. Et c'est une très bonne chose.
Cependant les commandes sont plus limitées que dans Zigbee2mqtt.

1. Ouvert/Fermé/Stop
2. réglage de la position de 0 à 100%
3. état
4. état de la position 

{% picture posts/{{ page.guid }}/integration-aqara-curtain-driver-e1-track-version-jeedom.png --alt compatibilité du module de motorisation zigbee aqara curtain driver E1 version track jeedom luna module zigbee --img width="940" height="255" %}

{% picture posts/{{ page.guid }}/integration-aqara-curtain-driver-e1-track-version-jeedom-commande-dispo.png --alt compatibilité du module de motorisation zigbee aqara curtain driver E1 version track jeedom luna module zigbee commandes disponibles --img width="940" height="254" %}

> Dans le Dashboard tu es limité à l'ouverture/fermeture et stop ainsi que la position, rien de plus normal.

{% picture posts/{{ page.guid }}/integration-aqara-curtain-driver-e1-track-version-jeedom-dashboard.png --alt compatibilité du module de motorisation zigbee aqara curtain driver E1 version track jeedom luna module zigbee commandes disponibles sur dashboard --img width="241" height="172" %}

## Intégration dans ZHA Home Assistant

Là aussi je n'ai rencontré aucun soucis mais le nombre de commande est encore plus limité que dans Jeedom

1. ouvert/fermé/stp

> et c'est tout ...

{% picture posts/{{ page.guid }}/integration-aqara-curtain-driver-e1-track-version-zha-expose.png --alt compatibilité du module de motorisation zigbee aqara curtain driver E1 version track dans zha intégration --img width="940" height="486" %}

{% picture posts/{{ page.guid }}/integration-aqara-curtain-driver-e1-track-version-zha-lovelace.png --alt compatibilité du module de motorisation zigbee aqara curtain driver E1 version track dans zha entité dans lovelace --img width="508" height="142" %}

### Conclusion intégration

> Je te conseil vivement d'utiliser l'intégration par Z2M


## **les + du produit**
{: .blue}
- la qualité de fabrication
- prise en charge mise à jour OTA
- certifié zigbee 3.0
- les nombreuses options diponibles (z2m)
- la recharge batterie lithium

## **les - du produit**
{: .red}

- Compatibilité store ( à bien définir )
- le prix env 90€
- le poids
- le volume

{% include product-embed.html guid="2162" %}

## Conclusion

Voilà un **produit très bien pensé et riche en fonctionnalité**. Je regrette juste la **compatibilité** avec les rideaux du marché assez contraignante surtout qu'en europe nous utilisons beaucoup les rideaux à clips guidé, et malheureusement il n'est pas compatible. Mais si tu veux domotiser tes rideaux n'hésite pas à l'acheter il te rendra bien des services.

