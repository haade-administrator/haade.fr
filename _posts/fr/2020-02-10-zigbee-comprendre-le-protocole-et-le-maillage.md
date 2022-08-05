---
guid: 3
title: 'Zigbee &#8211; comprendre le protocole et le maillage'
date: '2020-02-10T13:17:10+00:00'
author: Nico
categories: Domotique Protocoles
layout: post
image: maillage-zigbee
tags:
description: "Zigbee comprendre le protocole et le maillage de ce standard"
language: fr
published: true
toc: false
comments: true
---

J’ai essayé de trouver sur le web des articles concernant le protocole et le maillage zigbee et la gestion de son parc de modules mais aucun n’avait su répondre à mes attentes, c’est ainsi que m’est venu l’idée de rédiger un tel article.

Avant de commencer et afin de comprendre au mieux la rédaction de cet article, il faut savoir que notre environnement de test est basé sur [**zigbee2mqtt.**](https://www.zigbee2mqtt.io/){:target="_blank"} Il est installé dans un container docker et contrôlé par [**homeassistant core.**](https://www.home-assistant.io/){:target="_blank"} Qui lui même est aussi installé dans un container. Les deux système communiquent ensemble grâce à un serveur de communication [MQTT.](http://mqtt.org/){:target="_blank"} Qui fait tampon entre les systèmes et lui aussi installé dans un container.

## Pourquoi j’ai choisi zigbee2mgtt !

**il a l’avantage d’être:**

1. 100% open source.
2. La prise en charge des nouveaux modules est régulière et peut être intégré par n’importe qui !
3. Actuellement il prend en charge **584** modules de **112** marques différentes.
4. la gestion d’un protocole en dehors d’un module intégré à un gestionnaire domotique a pour effet de ne pas mettre les œufs dans le même panier.
5. Le redémarrage d’homeassistant ,ne relance pas le réseau zigbee
6. très léger et facilement installable sur docker, en cas de soucis c’est très rapidement réinstallé.

Zigbee2mqtt a une prise en charge native de homeassistant et hassio. On peut facilement créer une carte lovelace affichant le protocole et maillage zigbee en live. De plus tous les 15 jours des modules zigbee sont pris en charges. À l’heure où j’écris ce message on en comptabilise plus de 500 modules.

Zigbee2mqtt.io consacre un article entier, à l’inclusion de nouveau modules qui ne seraient pas encore pris en charge, c’est vraiment à la portée de tous.[ Les coordinateurs « gateway » cc2530 ou cc2531 ne coûtent pas plus de 6€ avec antennes](https://www.haade.fr/produit/cle-sniffer-zigbee-cc2531-avec-antenne/), ( si on est en possession des boîtiers de programmation ) sinon c’est 22€ la première commande ). Le cc2531 à l’inconvénient d’être compatible seulement avec le réseau zigbee-1.2, pourquoi: car il n’a pas assez de mémoire interne. Si on veut un réseau de base en zigbee 3.0, il faudra alors opter pour un coordinateur [CC26X2R coordinateur zigbee 3.0](https://www.ti.com/tool/LAUNCHXL-CC26X2R1){:target="_blank"} avec coût de 40$. Il est possible aussi de transformer un cc2530/31 en routeur afin de renforcer son maillage. en rappelant que pour la concurrence on est entre 35-45€.

### Pour rappel:

en zigbee le **coordinateur** est le relais principal. **Les routeurs (périphérique physique)** sont des modules alimentés par le **neutre** qui servent d’antennes relais.

**Exemple:**

- les interrupteurs zigbee Xiaomi.
- les ampoules tradfri IKEA, ( attention tout de même aux ampoules branché derrière un interrupteur, car elles ne seront visibles dans le réseau zigbee donc activable et désactivable seulement si l’interrupteur est sur ON ). ils sont essentiels pour le maillage et le renfort d’un réseau zigbee comme pour le z-wave sur ce point.

**Les modules de fin de maillage appelé périphérique logique,** sont tous les modules alimentés par piles ou sans le neutre. Ils n’envoient que des informations et ne permettent pas de réceptionner d’autres infos.

J’ai choisi de flasher le coordinateur cc2531 en zigbee 1.2,

> Il est possible de flasher le coordinateur cc2531 en zigbee 3.0 mais j’ai remarqué la perte de module initialement inclus.

De rester en 1.2 n’a aucune influence sur l’inclusion de modules de nouvelles générations 3.0 car ils sont rétrocompatibles.

## **Avantage du zigbee par rapport au z-wave:**

1. Deux routeurs peuvent communiquer entre eux sans coordinateur ( Touchlink, zigbee 3.0 ).
2. Ah les piles toujours aussi peut cher et durable ( et oui le zigbee a l’avantage de consommer très très peut soit 20 milli joule par heure c’est d’ailleurs la raison principale qui m’a fait changé de protocole ).
3. Le prix des modules est dérisoire comptez 6€ pour un capteur de porte.Ils se démarquent de z-wave car la zigbee alliance, a dès le départ ouvert au fabriquant le protocole pour la fabrication de la puce. À titre comparatif les puces z-wave sont toujours et seulement fabriqués par sigma designs. sous la pression des protocoles dont le futur protocole par ip, la z-wave alliance ouvre au fabriquant son protocole au second semestre 2020. La fabriquation des puces z-wave ce qui devrait faire baiser les coûts de vente des modules ).
4. Maillage auto-formant oui, **mais auto-cicatrisant** ( a ce jour je n’ai pas pu vérifier ).
5. Le coordinateur est capable de routage mais limité à **13** pour le **zigbee 3.0** contre **20** pour le **zigbee 1.2** avec un cc2531.
6. Suivant votre maillage le nombre de module n’est pas limité car chaque routeur dit périphérique physique peuvent prendre plusieurs périphériques logiques.
7. Le zigbee 3.0 apporte une couche de sécurité supplémentaire AES-128

## Créer son réseau zigbee

1er Cas: vous partez d’une installation toute fraîche avec le coordinateur seul:

- Installez et appairez en premier lieux un **module routeur**. ( interrupteur avec neutre par exemple).
- Ensuite on inclus tous les modules logiques autour du périphérique physique. A**ttention!** il faut bien sûre que votre module logique *soit plus proche* de l’interrupteur que le **coordinateur** qui lui va s’approprier à tout moment ( ce n’est pas pour rien qu’on l’appelle aussi un sniffeur ). *C’est pourquoi il est préférable d’inclure les modules de fin à proximité d’un routeur.*

2nd cas: vous avec une installation existante avec des modules routeur d’installés et des modules de fin greffés sur le coordinateur au lieu d’un routeur

- Passez en mode inclusion et appairez à nouveau le module routeur même s’il est déjà reconnu par zigbee2mqtt.
- Ensuite à proximité de ce routeur inclure/ré-inclure les modules de fin rafraîchissez votre Carte réseau ( perso j’utilise [zigbee2mqtt networkmap card](https://github.com/azuwis/zigbee2mqtt-networkmap){:target="_blank"} ).
- Normalement vous verrez le module logique décrocher du coordinateur pour se greffer sur le routeur. **ps:** si c’est une installation existante et que vous souhaitez appairer un module d’ouverture de porte, comme le xiaomi. Pas la peine de le décoller si un routeur ou le coordinateur est suffisamment proche alors une simple inclusion suffiras à injecter le module dans le réseau.

## Supprimer un module du réseau zigbee

c’est légèrement plus contraignant car c’est le module qui décide de sa propre exclusion et non le coordinateur zigbee lors d’une exclusion si elle a échouée, renouvelez l’exclusion et réveillez votre module a exclure.

**En conclusion:** le protocole et maillage Zigbee est légèrement plus contraignant à mettre en place *mise à part l’inclusion des modules dans le réseau* que le z-wave. Par contre l’inclusion des modules est plus facile que l’autre protocole. N’hésitez pas à apporter des commentaires si cela est nécessaire 🙂

***Nomenclature:***

**Coordinateur:** comme son nom l’indique c’est le chef d’orchestre du réseau zigbee, il ne peut y en avoir qu’un par réseau.

**Routeur:** ( périphérique physique ): ce sont les antennes relais pour renforcer le maillage, il agit comme un répéteur de signal.

**End module:** ( périphérique logique ): sont les l’ensemble des modules satellisés rendant les retours d’états, luminaires, etc… .
