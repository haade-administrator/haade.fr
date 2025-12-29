---
guid: 100
title: "test de la box Sonoff Ihost"
description: "La box Sonoff Ihost vaut le détour, avec une compatibilité matérielle impressionnante, une qualité de fabrication exceptionnelle, Sonoff signe une fois de plus un produit incontournable."
ref: "iHost"
layout: post
authors: Nico
date: 2023-12-14 14:22
last_modified_at: 
categories: [Tests]
tags: []
image: 'test-passerelle-hub-gateway-sonoff-ihost-v1-12-0.png'
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
  - https://sonoff.tech/product/gateway-and-sensors/ihost/
  - https://sonoff.tech/ihost-user-guides/
---

Tout d'abord je voulais **remercier Itead** pour le prêt de cette box Sonoff {{ page.ref }} version RV1126 de 4gb. Dans un premier temps nous allons faire un tour d'horizon de l'application embarquée eet ainsi voir si la **v1.12.0 porte ses fruits.** Dans un second article **je te montrerai comment Hacker la box** et installer Home Assistant OS sur SDCARD sans toucher au firmware d'origine mais en réalisant tout de même une petite manip sur le matériel.

{% include product-embed.html guid="2178" %}

{% picture posts/{{ page.guid }}/test-box-sonoff-ihost.png --alt Contenu de la box ihost de Sonoff --img width="940" height="529" %}

## Déballage et présentation du Sonoff {{ page.ref }}

Le **colis est soigné**, la passerelle {{ page.ref }} est fournie avec un cable rj45, un cable usb-c, une notice et une clé pour enclancher la fonction reset. 
> Bref pas de fioritures juste l'essentiel !

{% picture posts/{{ page.guid }}/effet-lumiere-sonoff-ihost.png --alt La passerelle sonoff ihost à un rendu visuel intéressant bleu, rouge et jaune --img width="940" height="529" %}

**Le plastique est d'effet Glossy, l'assemblage est de bonne qualité, le rendu visuel des LED est très réussi.**

{% picture posts/{{ page.guid }}/face-arriere-sonoff-gateway-ihost.png --alt la face arrière du sonoff ihost présente un bouton reset, insert carte sd, port usb, port alim usbc et rj45 --img width="940" height="529" %}

**Sur la face arrière tu trouveras:**
- le bouton reset
- un insert pour carte sd idéal pour stockage externe et indispensable pour installer des addons de l'instance docker.
- un port USB là aussi pour le stockage externe ( dommage il n'est pas compatible UART )
- un port d'alimentation USB-C
- et enfin un port rj 45

{% include product-embed.html guid="2179" %}


{% picture posts/{{ page.guid }}/bouton-dessus-sonoff-passerelle-ihost.png --alt au dessus tu trouve un bouton on/off, un bouton d'appairage zigbee, un bouton pour couper le micro et un pour armer la présence et un micro --img width="940" height="529" %}

Il faut savoir que les touches sont rétroéclairés en bleu
Sur le dessus:
- un bouton on/off
- un bouton d'appairage Zigbee
- un bouton mute ( afin de couper le **micro** )
- un bouton pour armer la présence/absence.

{% picture posts/{{ page.guid }}/rendu-taille-sonoff-gateway-ihost.png --alt le sonoff ihost est de taille relativement contenu --img width="940" height="529" %}

La taille du Sonoff {{ page.ref }} est correcte, elle intègre pas mal de choses du coup certain qu'elle ne peut être plus petite.

{% picture posts/{{ page.guid }}/acces-processeur-sonoff-passerelle-ihost.png --alt véritable processeur ihost sonoff --img width="940" height="529" %}

> Sonoff ne rigole pas et met en place un processeur rockchip RV1109 ou RV1126 .....

{% picture posts/{{ page.guid }}/puce-zigbee-bluetooth-wifi-sonoff-passerelle-ihost.png --alt puce zigbee et wifi sonoff gateway ihost --img width="940" height="529" %}

**sous le capot on trouve un module:**
- zigbee Silabs efr32mg21 ( non tuya )
- une puce RTL8723 qui distribue du wifi b/g/n

### Caractéristiques technique de l'{{page.ref}}

|Modèle|**Albridge**|
|Produit|RV1109 DDR4 2 Go, **RV1126 DDR4 4 Go**|
|Module Zigbee|SoC Silicon Labs EFR32MG21|
|Module Wi-Fi|Module sans fil Wi-Fi 2,4 G et BLE RTL8723|
|Méthodes de stockage|Carte USB et TF (Max. 256 Go pour la carte TF)|
|Alimentation|5V 2A|
|Type d'interface d'alimentation|Type-C|
|Boitier|ABS|
|Type d'interface réseau|RJ45|
|Connexion sans fil|Wi-Fi IEEE 802.11 b/g/n 2,4 GHz, Zigbee 3.0|
|Couleur|Blanc|
|Taille|120mm X 41mm X135mm|

{% picture posts/{{ page.guid }}/dimension-sonoff-ihost-en-image.png --alt dimension en image du sonoff gateway ihost --img width="940" height="529" %}

## Soft du {{ page.ref }}

Avant de commencer ce tour d'horizon, Sonoff à développé une très bonnne documentation disponible à cette adresse: [guide utilisateur](https://sonoff.tech/ihost-user-guides/){: target="_blank"}, n'hésite pas à la consulter car elle est très bien docuentée et accompagnée de vidéos explicatives.

## Premier démarrage et Mise à jour

Pour commencer si tu lis la documentation officielle, Sonoff t'indique de brancher en usb et rj45, d'attendre l'affichage bleu et ensuite de te connecter à l'adresse [ihost.local](http://ihost.local){: target="_blank"}, ben chez moi ça n'a jamais fonctionné je me suis démerdé en allant sur le routeur et cherché manuellement l'adresse ip, n'hésite pas à paramétrer en adresse ip fixe sinon tu risque comme moi de voir celle-ci changer régulièrement. Ensuite connecte toi à l'invite:

{% picture posts/{{ page.guid }}/page-connection-passerelle-sonoff-ihost.png --alt page de connection du sonoff gateway ihost --img width="940" height="611" %}

Pour commencer après le premier démarrage il faudra te connecter à l'application ewelink afin de pouvoir bénéficier des mises à jours. Ma version initiale était en v1.5 alors que nous sommes déjà à la version 1.12.0.

**Ewelink annonce un fonctionnement en local** mais il se trouve que la mise à jour du firmware en OTA ne fonctionne que par l'application Ewelink officielle, qui utilise le cloud. Bref pour faire simple Ewelink connait l'état de fonctionnement de la gateway {{ page.ref }} mais pas ce qui s'y passe à l'intérieur, en espérant que ce soit le cas.

**Pour celà il te suffit de regarder la vidéo oficielle:**

{% include videoPlayer.html externalId="https://sonoff.tech/wp-content/uploads/2023/03/x.mp4" %}

Après le redémarrage rendez-vous dans la page setting et tu verras un bouton apparaitre pour la première mise à jour.

{% picture posts/{{ page.guid }}/page-parametrage-gateway-sonoff-ihost.png --alt paramétrage de la première mise à jour du sonoff gateway ihost --img width="940" height="603" %}

## Appairage Zigbee Sonoff {{ page.ref }}

Sur la homepage tu pourras utiliser le réseau zigbee ainsi que des boutons d'appairages, je te laisse regarder le fonctionnement en vidéo

{% include videoPlayer.html externalId="https://sonoff.tech/wp-content/uploads/2023/03/IHost添加子设备教学视频.mp4" %}

### Compatibilité Zigbee

J'ai pu lire ici et là des avis négatifs sur la compatibilité matérielle de cette box. Mais depuis la sortie de **zigbee2CUBE** pour la box {{ page.ref }} il en est tout autre. Tu pourras trouver la [liste des modules compatibles](https://bit.ly/3pFFN8I){: target="_blank"} sur leurs sites, et elle ne cesse de s'agrandir de semaine en semaine. C'est une très bonne chose.

Pour avoir accès à une multitude de modules zigbee reconnus il te faudra activer zigbee2CUBE pour celà rendez-vous dans **Pilot > Zigbee2CUBE**

{% picture posts/{{ page.guid }}/page-activation-zigbee2CUBE-sonoff-ihost.png --alt activation du pilote zigbee2CUBE du sonoff gateway ihost --img width="940" height="411" %}

À partir de maintenant je te conseil d'appairer tes modules et tu te rendras **compte d'une très bonne compatibilité ainsi qu'une fluidité exceptionnelle à l'appairage. Franchement rien à redire.**

> J'ai installé toutes sortes de modules et aucun n'a été laissé pour compte.

Je pense qu'à terme ce sera la base la plus importante après Zigbee2mqtt

{% include doclink.html docx="https://docs.google.com/spreadsheets/d/1VLuhpznuQzMkMwKJWO9L87Y7wX5Nw-DUdhUmIAhVgY4/edit#gid=0" title="Liste matérielle zigbee ihost pris en charge format google spreedsheet" %}

Si tu souhaites participer à l'évolution des compatibilités matérielles, un [fil de discussion dédiée existe sur le forum Ewelink](https://forum.ewelink.cc/t/discussion-about-zigbee2cube-and-non-zigbee-3-0-devices-compatibility/17848/87){: target="_blank"}

### Zigbee2cube

**Message du contructeur:**

Comme vous le savez peut-être, le problème de compatibilité avec les appareils ZigBee est un projet complexe et chronophage. Nous ne pouvons pas garantir la compatibilité avec tous les appareils ZigBee disponibles sur le marché, mais nous ferons continuellement de notre mieux pour améliorer la compatibilité d'iHost avec les appareils ZigBee, en particulier les appareils au protocole standard NON-ZigBee 3.0, n'hésitez pas à rejoindre la discussion ici.

En bref, les appareils ZigBee, en particulier les appareils NON-ZigBee 3.0, pour être compatibles et correctement affichés dans le portail Web iHost, trois conditions doivent être remplies simultanément,

1. le modèle signalé par l'appareil ZigBee fait partie de la liste des types pris en charge par Zigbee2CUBE.
2. Les capacités (expositions) signalées par l'appareil ZigBee relèvent des types et des capacités pris en charge par Zigbee2CUBE.
3. Le système eWeLink CUBE possède la capacité d'interface utilisateur correspondante, ce qui signifie qu'il peut afficher l'appareil correctement. Pour l'instant, les classes de commutateurs, les classes d'éclairage et certaines classes de capteurs sont prises en charge.

Nous avons trié une liste d'appareils (vérifiez ci-dessous) qui devraient théoriquement être pris en charge par iHost Zigbee2CUBE, mais nous ne pouvons pas tous les tester. Si votre appareil ZigBee n'apparaît pas comme prévu dans iHost, assurez-vous de Vérifiez d'abord s'il est inclus dans la liste prise en charge fournie ci-dessous.

S'il n'est pas répertorié, veuillez attendre les mises à jour périodiques pendant que nous continuons à élargir la liste des appareils pris en charge.

## Automatisation (Smart Scene {{ page.ref }})

La passerelle {{ page.ref }} propose un onglet Smart scene, il s'agit rien de plus qu'un onglet automatisation.

{% picture posts/{{ page.guid }}/page-parametrage-scene-automatisation-passerelle-sonoff-ihost.png --alt paramétrage des smart scenes automatisations du sonoff gateway ihost --img width="940" height="578" %}

Alors à ce stade la version 1.12.0 n'ajoute pas de nouveautées dans ce domaine et c'est dommage car on est loin de ce que peut proposer Home Assistant ou Jeedom et c'est dommage. **Il ne propose que les conditions de déclenchements et les actions c'est trop léger pour faire de l'automatisation.**

{% include videoPlayer.html youtubeId="PeVD-pXDs18" %}

### Les Modes dans {{ page.ref }} Smart security

Par défaut la gateway sonoff {{ page.ref }} propose 3 modes de fonctionnement, la fonction Home, absence et Sommeil. L'activation d'un des modes est du plus bel effet visuel et sonore, franchement c'est très sympa. **Il te permet de déclencher l'alarme sonore de la box et visuel par clignotement.** *Point faible sur cette version tu ne pourras créer d'autre modes.*

{% picture posts/{{ page.guid }}/page-mode-home-away-sonoff-ihost-gateway.png --alt les modes Home/absence/sommeil du sonoff gateway ihost --img width="940" height="470" %}

## Utilisation des Casts

Les casts sont tout simplement des tableaux de bords à personnaliser, et franchement c'est très bien fait à tel point que je pense que home assistant devrait s'en inspirer, en trois coup de clics tu crée une interface que tu peux partager à un membre de ta famille.

> Ajouter un cast n'a jamais été aussi simple

{% picture posts/{{ page.guid }}/page-cast-sonoff-ihost.png --alt page paramétrage des casts du sonoff gateway ihost --img width="864" height="939" %}

une fois sur le cast créé il te suffit de:
- sélectionner les modules concernés
- sélectionner les scènes
- paramétrer l'interface graphique
- et choisir les paramètres de configurations comme un mot de passe par exemple.

{% picture posts/{{ page.guid }}/page-parametrage-cast-sonoff-ihost.png --alt page paramétrage des casts options du sonoff gateway ihost --img width="940" height="535" %}

Voilà un rendu créé en 2 minutes disponible sur le dashboard d'un pc.

{% picture posts/{{ page.guid }}/rendu-cast-sonoff-ihost.png --alt rendu des casts du sonoff gateway ihost --img width="940" height="535" %}

**Vidéo de présentation des casts.**

{% include videoPlayer.html externalId="https://sonoff.tech/wp-content/uploads/2023/03/cast.mp4" %}

## Docker dans {{ page.ref }}

L'intégration de Docker est un point très important, car tu pourras paramétrer des containers tenu officiellement par Ewelink mais aussi des container comme Zigbee2mqtt. À ce stade je n'ai testé que les containers officiels qui sont déjà préparamétré pour fonctionner avec la passerelle {{ page.ref }}. 

{%- include alert.html type="info" text="Chose importante le stockage des données se fait sur carte SD, sans carte SD tu ne pourras accéder à cette fonction." link="https://sonoff.tech/ihost-user-guides/add-on/#Add-on" textlink="Doc officielle add-ons" %}

Chez Sonoff comme pour Home-Assistant cette fonction est appelé Add-ons

{% picture posts/{{ page.guid }}/page-docker-sonoff-ihost.png --alt page paramétrage des add-ons options du sonoff gateway ihost --img width="940" height="299" %}

On retrouve entre autre:

- [Homebridge](https://sonoff.tech/ihost-user-guides/add-on/#Homebridge-Add-on){: target="_blank"}
- Ewelink smarthome ( permet de faire fonctionner les sonoff en LAN )
- [NodeRed](https://sonoff.tech/ihost-user-guides/add-on/#Node-Red-Add-on){: target="_blank"}
- [Paral sync](https://sonoff.tech/ihost-user-guides/add-on/#eWeLink-Smart-Home-Add-on){: target="_blank"} ( synchronisation des modules zigbee d'un Nspanel pro avec {{ page.ref }}) **Nouveautée V.1.12.0**
- Une Api meteo
- mqtt2tasmota
- tts2cube pico ( faire du tts avec le micro du {{ page.ref }})

{% include videoPlayer.html externalId="https://sonoff.tech/wp-content/uploads/2023/03/IHost-Addon介绍视频.mp4" %}

##  Matter Firmware V1.12.0

**Grande nouveautée**, la version 1.12.0 sortie en Novembre 2023 prend en charge les produits Matter et ajoute la fonction Pilot > Bluetooth. J'ai testé pour toi l'intégration des produits Matter et **je dois te dire que pour l'instant c'est loin d'être parfait.**

Premièrement la fonction Matter ne fonctionne que avec les applications Google Home, Apple Home, Alexa et Smartthings.

Il faudra en premier temps lier l'une des applications citées ci-dessus avec Ihost et en second temps il faudra intégrer le module Matter, dans mon cas comme j'utilise Android, **dans google home**. 

À l'heure actuelle **je possède 2 produits Matter** et contrairement à Home-Assistant où j'ai réussi à les intégrer, pour **le Sonoff {{ page.ref }} il en est tout autre chose**. D'abord une fois sur deux la liaison entre le {{ page.ref }} et **google home est tenu en échec**. Et l'intégration des modules dans google home fonctionne mais sont mis hors service une fois intégré.

Donc avec la **sortie de le V1.12.0 Matter n'est pas fonctionnel** du moins chez moi, peut-être que je néalise pas correctement les manips.

## Manuels {{ page.ref }}

{% include doclink.html pdf="sonoff-ihost-specification.pdf" title="Spécifications de la box Sonoff Ihost" %}
{% include doclink.html pdf="sonoff-ihost-manuel-utilisateur.pdf" title="Manuel complet de la box Ihost" %}
{% include doclink.html pdf="sonoff-ihost-guide-rapide.pdf" title="guide d'utilisation rapide de la box Ihost" %}

{% include product-embed.html guid="2178" %}

## **les + du produit** {{ page.ref }}
{: .blue}

- la qualité de fabrication
- certifié zigbee 3.0 puce **EFR32MG21**
- **le prix (99€ ou 109€ environ) selon la version**
- les nombreuses compatibilitées
- les divers support
- intégration d'un micro et haut parleur
- intégration Addons via docker
- compatibilité matérielle Zigbee
- puissance du proccesseur Rockchip

## **les - du produit** {{ page.ref }}
{: .red}

- Absence de wifi 5Ghz
- Matter instable
- connection à l'application Ewelink obligatoire

{% include product-embed.html guid="2179" %}

> Gros avantage la box {{ page.ref }} est **équipée d'un micro et de hauts parleurs** qui te permettront dans un futur proche de pouvoir commander ta box par la voix un réel plus pour les années à venir.

## Conclusion

J'ai mis 5 étoiles pour cette box, **car la qualité de fabrication pour un prix dérisoire en font une box de contrôle incontournable**, la perspective d'évolution régulière des firmwares Sonoff règleront la plupart des problèmes il suffit d'être patient. Bref pour 100€ tu auras une box qui fera le Job.