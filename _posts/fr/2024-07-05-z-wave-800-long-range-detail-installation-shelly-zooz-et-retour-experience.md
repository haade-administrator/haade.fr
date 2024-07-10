---
guid: 133
title: "Z-wave 800 Long range les dessous du z-wave"
description: "Je vais détailler le dernier protocole z-wave 800 et faire le point sur ce protocole avec pour test les derniers modules shelly sur un controlleur Zooz ZST39"
ref: "Z-wave 800 long range"
layout: post
authors: [Nico]
date: 2024-07-05 11:15
last_modified_at: 
categories: [Domotique, Protocoles, Z-wave]
tags: []
video: 
image: 'les-forces-du-z-wave-800-lr-et-exemples-assiciations-group.png'
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
  - 
---

Voilà encore un article qui me tiens à coeur, le protocole Z-wave reviens sur le devant de la scène. Silabs a décidé de changer les choses, les tarifs des modules sont enfin accessibles, les fabriquants se remettent à produire des modules intégrant le dernier protocole.

Enfin je peux rédiger un article complet sur le Z-wave 800 long range, Domadoo notre partenaire nous as envoyés divers modules shelly et zooz et je peux enfin tester le réseau Z-wave.

## Prérequis
1. Une box avec Home Assistant OS
2. Une clé Z-wave 800 long range Zooz ZST39
3. Des modules compatible z-wave 800 (shelly ou autres)

J'en ai parlé dans un précédent article le Z-wave a failli disparaitre de nos radars, mais Silicon Labs a su le ressusciter, Z-wave alliance a changé sa façon ce qui a permis de produire différemment ses modules. Selon moi deux points ont trahi ce protocoles.
1. le cout des modules prohibitifs par rapport aux modules Zigbee
2. la consommation et le type de piles utilisés pour les produits end devices

Mais voilà c'est du passé les modules z-wave 800 sont désormais au tarif des modules zigbee, et la consommation des piles est largement revu à la hausse avec pas loin de 10 ans d'autonomies même supérieur au zigbee.

## Petit tour d'horizon

### les points positifs

- Sécurité Absolue S2, impossible à craquer
- le prix des modules à la baisse
- Rétrocompatible tous z-wave confondus
- Rétrocompatible avec les modules au réseau maillé
- durée de vie des modules sur pile (supérieur à 10 ans)
- Nombre de fonctions intégrées dans les modules
- tous les modules z-wave peuvent être associés entre eux et fonctionner sans box domotiques

### Les points négatifs

- Long rage indisponible en europe
- Retour du maillage en étoile
- absence de modules sur le marché européen mais en passe de changer
- firmware des modules constemment en évolution ( protocole 800 jeune ), de ce fait il faudra faire attention aux mises à jours

{%- include alert.html type="warning" text="Attention le Long Range n'est pas disponible pour l'Europe car impossible à mettre en place sur la fréquence 868Mhz" link="https://z-wavealliance.org/what-is-z-wave-long-range-how-does-it-differ-from-z-wave/#:~:text=At%20this%20time%2C%20Z%2DWave,APAC%20regions%20in%20the%20future." textlink="Z-wave Long Range indisponible en france" %}

## Sécurité S2 et z-wave 800 LR

L'appareil prend en charge la dernière fonctionnalité Security 2 (S2). S2 est géré par le protocole de cryptage Strong AES 128, ce qui signifie que S2 fait de Z-Wave® la plate-forme de sécurité IoT (Internet des objets) la plus sécurisée du marché. Pour utiliser pleinement le produit et sa fonctionnalité Security 2, une passerelle Z-Wave® compatible Security 2 doit être utilisée.

Contrôle authentifié

DSK hors bande pour inclusion

Peut être utilisé par la plupart des implémentations

L'appareil prend également en charge les inclusions authentifiées, non authentifiées et non sécurisées de Security 2. 

Clés de sécurité : clés réseau Z-Wave pour une inclusion sécurisée S0/S2. Vous pouvez les saisir manuellement ou les générer automatiquement en utilisant le bouton du générateur aléatoire ou en collant vos clés OZW dans l'entrée, elles seront automatiquement converties au format correct. Exemple de clé valide : 5C14897467C42598518AF155DE6CCEA8 (la longueur est de 32).

S0_Legacy : clé S0 héritée
S2 non authentifié : comme S2 authentifié, mais sans vérification que le bon appareil est inclus (ignorer l'étape de vérification DSK)
Authentifié S2 : systèmes de sécurité, capteurs, éclairage, etc.
S2 AccessControl (le plus élevé) : utilisé pour les serrures de porte, les portes de garage, etc.

## Long Range valable ou non

Conçu pour offrir une portée sans fil considérablement étendue et prendre en charge des réseaux robustes, Z-Wave LR étend la connectivité Z-Wave au-delà des limites de la maison et accélère l'adoption de Z-Wave dans d'autres secteurs verticaux tels que le commerce léger, l'hôtellerie et les unités multi-résidentielles (MDU). Z-Wave Long Range est un ajout supplémentaire de modulation DSSS OQPSK 100 kbps au protocole Z-Wave. La modulation est traitée comme un quatrième canal, ce qui permet aux passerelles d'ajouter des nœuds LR à l'analyse des canaux Z-Wave existants. **À l'heure actuelle, Z-Wave LR n'est disponible que pour le marché américain.** Cependant, le groupe de travail technique **évalue et teste la conformité** pour **garantir la prise en charge des régions Europe** et APAC à l'avenir.

> Avec un peu de chance et une conformité en notre faveur permettra à la z-wave alliance de développer le long range dans nos contrées.

Développée et gérée par les nouveaux groupes de travail techniques et de certification de la Z-Wave Alliance, la spécification mise à jour a été conçue pour inaugurer une nouvelle ère de connectivité Z-Wave tout en adhérant aux valeurs fondamentales de la technologie Z-Wave telles que la rétrocompatibilité et l'interopérabilité. La spécification mise à jour promeut un certain nombre d'avantages techniques clés qui se résument le mieux à une portée et une couverture accrues, une évolutivité accrue, une durée de vie de la batterie optimisée et l'interopérabilité. <cite>Z-wave Alliance</cite>

## Le maillage en toile d'araignée disparait

reseau-maile-etoile-z-wave-800-lr.png
{% picture posts/{{ page.guid }}/reseau-maile-etoile-z-wave-800-lr.png --alt option schéma réseau maillé ou étoilé constituant le z-wave LR 800 et autres --img width="940" height="816" %}

Ce qui a fait la force du z-vave 400 à 700 ainsi que du protocole zigbee 3.0 disparait sur le protocole Z-wave 800, il s'agit du maillage du réseau qui permet de relayer les ondes entre les modules routeurs et accroitre la distance d'émissions des ondes du réseau. Dans le principe c'est top car ça permet de renforcer simplement son réseau mais l'inconvénient c'est que ça rallonge le temps de latence entre l'émission et la réception.

Z-wave 800 LR est rétrocompatible avec le maillage en réseau ( concerne les modules plus anciens ) mais il ne l'est pas avec les modules de la série 800, là il fonctionnera en étoile identique au maillage wifi, en gros tous les modules 800 se connectent directement sur le coordinateur z-wave. Heureusement les puces ZG23 présentent une transmission TX de +20dbm ce qui permet d'acroitre la distance même si le Long Range n'est pas actif.

> J'ai testé la transmission en milieu clos en espaçant au maximum les modules du dongle et je n'ai rencontré aucun soucis de connection et de latence de transmissions, un bon point.



## Group et associations

Déjà cité dans un précédent article ce qui fait la force du z-wave et qui était durant longtemps un frein économique réside dans ce protocole propriétaire. En effet toutes les puces z-wave sont compatibles entre elles, ce qui n'est pas le cas du zigbee et permet au z-wave de produire des modules rétrocompatibles et de communiquer directement entre eux sans passer par une passerelle/controlleur z-wave.

### j'ai testé les associations de modules

{%- include alert.html type="warning" text="<b>À savoir:</b> tous les modules peuvent être associés entre eux <b>s'ils sont sur le même niveau de sécurisation</b>. Un module de sécurité S2 ne peut pas être lié avec un module sans sécurité ou de sécurité S0" %}

{%- include alert.html type="warning" text="Les actions d'associations de modules exemple: on/off, <b>ne fonctionnent pas par une commande radio mais par un bouton physique</b> situé sur l'appareil comme un interrupteur par exemple" link="https://blog.domadoo.fr/guides/groupes-dassociation-z-wave/" textlink="Explication des groupes et associations sur le site Domadoo" %}

> Pour lier deux modules entre eux il faut vérifier qu'ils possèdent bien les mêmes commandes dans un groupe similaire. Sinon on ferait n'importe quoi.

[Notices en ligne des modules shelly z-wave 800](https://kb.shelly.cloud/knowledge-base/shelly-qubino-wave-devices){: target="_blank"}

Réussir à associer deux modules entre eux n'est pas difficile, encore faut-il comprendre le principe. N'oublie pas que seul une action physique sur un module permet de contrôler une fonction d'un autre module.

Tu clic sur un interrupteur branché sur un module te permettras de commander une fonction d'un autre module en direct.

Cas N°1: je possède un module z-wave shelly qubino 1 PM z-wave 800 ( module qui peut se placer derrière un interrupteur physique ) qui a une action On/Off sur le group 2, en paramétrant correctement je peux le faire agir directement par le biais d'un interrupteur physique avec un module prise fibaro z-wave 500 qui possède lui aussi une commande On/Off sur le group. À condition que le module shelly soit inclus sans sécurité S2. Ci dessous le paramétrage dans Z-wave JS UI d'une association créé sur le shelly PM.

**PS:** tu peux retrouver facilement tous les groupes, associations et points finaux [sur la notice en ligne du module Shelly](https://kb.shelly.cloud/knowledge-base/wave-1){: target="_blank"}.

Si je veux associé l'interrupteur physique situé sur le module fibaro vers la fonction On/Off du shelly il va falloir que je créé une association sur le module fibaro, voir la capture ci-dessous

Cas N°2: Associer deux modules Shelly z-wave 800 un jeu d'enfant.
