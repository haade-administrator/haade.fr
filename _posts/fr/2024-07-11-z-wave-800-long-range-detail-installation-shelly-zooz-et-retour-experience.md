---
guid: 133
title: "Z-wave 800 Long range les dessous du z-wave"
description: "Je vais détailler le dernier protocole z-wave 800 et faire le point sur ce protocole et les modes d'associations, avec pour test les derniers modules shelly sur un controlleur Zooz ZST39"
ref: "Z-wave 800 long range"
layout: post
authors: [Nico]
date: 2024-07-11 23:30
last_modified_at: 
categories: [Domotique, Protocoles, Z-wave]
tags: []
video: 
image: 'les-forces-du-z-wave-800-lr-et-exemples-associations-group.png'
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
  - https://zwave-js.github.io/zwave-js-ui/#/
---

Voilà encore un article qui me tiens à coeur, le protocole Z-wave reviens sur le devant de la scène. Silabs a décidé de changer les choses, les tarifs des modules sont enfin accessibles, les fabriquants se remettent à produire des modules intégrant le dernier protocole.

Enfin je peux rédiger un article complet sur le Z-wave 800 long range, Domadoo notre partenaire nous as envoyés divers modules shelly et zooz et je peux enfin tester le réseau Z-wave.

## Prérequis
1. Une box avec Home Assistant OS ou un **serveur zwave-js UI**
2. Une clé Z-wave 800 long range Zooz ZST39
3. Des modules compatible z-wave 800 (shelly ou autres)

{% include product-embed.html image="zooz-controleur-usb-z-wave-800-zst-39.png" title="Contrôleur Z-wave 800 Zst39" brand="Zooz" description="Controlleur dongle Zooz Z-wave 800 lr zst-39" domlink="box-domotique/7041-zooz-controleur-usb-z-wave-800-853478006391.html" amazlink="3S8eKh9" %}

{%- include alert.html type="info" text="Haade.fr participe au programme d'associés d'Amazon Services LLC, un programme de publicité d'affiliation conçu pour fournir un moyen de gagner des frais lors de la création de liens vers Amazon.com et des sites affiliés." %}

J'en ai [parlé dans un précédent article]({% post_url /fr/2024-03-13-z-wave-800-long-range-silabs-renouveau %}) le Z-wave a failli disparaitre de nos radars, mais Silicon Labs a su le ressusciter, Z-wave alliance a changé sa façon ce qui a permis de produire différemment ses modules. Selon moi deux points ont trahi ce protocoles.
1. le cout des modules prohibitifs par rapport aux modules Zigbee
2. la consommation et le type de piles utilisés pour les produits end devices

Mais voilà c'est du passé les modules z-wave 800 sont désormais au tarif des modules zigbee, et la consommation des piles est largement revu à la hausse avec pas loin de 10 ans d'autonomies même supérieur au zigbee.

## Petit retour sur le Z-wave

### les points positifs

- Sécurité Absolue S2, impossible à craquer
- le prix des **modules à la baisse**{: .blue}
- Rétrocompatible tous z-wave confondus
- Rétrocompatible avec les modules au réseau maillé
- durée de vie des modules sur pile **(supérieur à 10 ans)**{: .blue}
- Nombre de fonctions **intégrées dans les modules**{: .blue}
- tous les modules z-wave peuvent être associés entre eux et fonctionner sans box domotiques

### Les points négatifs

- Long rage **indisponible en europe**{: .red}
- Retour du maillage en étoile
- absence de **modules sur le marché européen**{: .red} mais en passe de changer
- firmware des modules constemment en évolution ( protocole 800 jeune ), de ce fait il faudra faire attention aux mises à jours

{%- include alert.html type="warning" text="Attention le Long Range n'est pas disponible pour l'Europe car impossible à mettre en place sur la fréquence 868Mhz" link="https://z-wavealliance.org/what-is-z-wave-long-range-how-does-it-differ-from-z-wave/#:~:text=At%20this%20time%2C%20Z%2DWave,APAC%20regions%20in%20the%20future." textlink="Z-wave Long Range indisponible en Europe" %}

## Sécurité S2 et z-wave 800 LR

L'appareil prend en charge la dernière fonctionnalité Security 2 (S2). S2 est géré par le protocole de cryptage Strong AES 128, ce qui signifie que S2 fait de Z-Wave® la plate-forme de sécurité IoT (Internet des objets) la plus sécurisée du marché. Pour utiliser pleinement le produit et sa fonctionnalité Security 2, une passerelle Z-Wave® compatible Security 2 doit être utilisée.

L'appareil prend également en charge les inclusions authentifiées, non authentifiées et non sécurisées de Security 2. 

**Clés de sécurité:** clés réseau Z-Wave pour une inclusion sécurisée S0/S2. Vous pouvez les saisir manuellement ou les générer automatiquement en utilisant le bouton du générateur aléatoire ou en collant vos clés OZW dans l'entrée, elles seront automatiquement converties au format correct. Exemple de clé valide : 5C14897467C42598518AF155DE6CCEA8 (la longueur est de 32).

- **S0_Legacy:** clé S0 héritée
- **S2 non authentifié:** comme S2 authentifié, mais sans vérification que le bon appareil est inclus (ignorer l'étape de vérification DSK).
- **Authentifié S2:** systèmes de sécurité, capteurs, éclairage, etc.
- **S2 AccessControl (le plus élevé):** utilisé pour les serrures de porte, les portes de garage, etc.

## Long Range valable ou non

Conçu pour offrir une portée sans fil considérablement étendue et prendre en charge des réseaux robustes, Z-Wave LR étend la connectivité Z-Wave au-delà des limites de la maison et accélère l'adoption de Z-Wave dans d'autres secteurs verticaux tels que le commerce léger, l'hôtellerie et les unités multi-résidentielles (MDU). Z-Wave Long Range est un ajout supplémentaire de modulation DSSS OQPSK 100 kbps au protocole Z-Wave. La modulation est traitée comme un quatrième canal, ce qui permet aux passerelles d'ajouter des nœuds LR à l'analyse des canaux Z-Wave existants. **À l'heure actuelle, Z-Wave LR n'est disponible que pour le marché américain.** Cependant, le groupe de travail technique **évalue et teste la conformité** pour **garantir la prise en charge des régions Europe** et APAC à l'avenir.

> Avec **un peu de chance** et une conformité en notre faveur permettra à la z-wave alliance de développer le long range dans nos contrées.


### Évolution de la z-wave Alliance

Développée et gérée par les nouveaux groupes de travail techniques et de certification de la Z-Wave Alliance, la spécification mise à jour a été conçue pour inaugurer une nouvelle ère de connectivité Z-Wave tout en adhérant aux valeurs fondamentales de la technologie Z-Wave telles que la rétrocompatibilité et l'interopérabilité. La spécification mise à jour promeut un certain nombre d'avantages techniques clés qui se résument le mieux à une portée et une couverture accrues, une évolutivité accrue, une durée de vie de la batterie optimisée et l'interopérabilité. <cite>Z-wave Alliance</cite>

## Le  réseau maillé disparait

{% picture posts/{{ page.guid }}/reseau-maile-etoile-z-wave-800-lr.png --alt option schéma réseau maillé ou étoilé constituant le z-wave LR 800 et autres --img width="940" height="816" %}

Ce qui a fait **la force du z-vave 400 à 700 ainsi que du protocole zigbee 3.0** disparait sur le protocole Z-wave 800, il s'agit du réseau maillé qui permet de relayer les ondes entre les modules routeurs et accroitre la distance d'émissions des ondes du réseau. 

> Dans le principe c'est top car ça permet de renforcer simplement son réseau mais l'inconvénient c'est que ça rallonge le temps de latence entre l'émission et la réception.

**Z-wave 800 LR est rétrocompatible** avec le maillage en réseau ( concerne les modules plus anciens ) mais il ne l'est pas avec les modules de la série 800, là il fonctionnera en étoile identique au maillage wifi, **en gros tous les modules 800 se connectent directement sur le coordinateur z-wave. Heureusement les puces ZG23 présentent une transmission TX de +20dbm ce qui permet d'acroitre la distance même si le Long Range n'est pas actif.**

> J'ai testé la transmission en milieu clos en espaçant au maximum les modules du dongle et je n'ai rencontré aucun soucis de connection et de latence de transmissions, un bon point.

### Test portée z-wave

{% include product-embed.html guid="2148" %}

Ci dessous tu trouveras un schéma ou j'ai testé la portée du réseau z-wave en étoile. Deux modules z-wave 800 lr shelly et un module fibaro wallplug z-wave 500 sont sur le réseau. Pour info le test est effectué en milieu clos, les modules shelly 1 PM et fibaro wallplug sont séparés de l'adaptateur Zooz par une dalle béton.

- Le module shelly shutter est à **1 mètre** du coordinateur et à une perte de **-61 dbm**
- le module fibaro est à **16m** et a une perte de **-88dbm**
- le module shelly 1 PM est le plus éloigné et isolé a **20m** et a une perte de **-84dbm**

**Malgré le maillage en étoile** je n'ai rencontré aucuns soucis de connections et de latence à la réaction, tu pourras te rendre compte que grâce à l'antenne externe du shelly 1PM la réception est de meilleur qualité que le Fibaro wall plug.

{% picture posts/{{ page.guid }}/test-portee-z-wave-800-et-500-milieu-clos.png --alt test portée z-wave 800 lr en milieu clos --img width="700" height="400" %}

{% include product-embed.html image="micromodule-commutateur-z-wave-800-shelly-wave-1pm-shelly-qubino.png" title="Shelly Z-wave 1PM" brand="Shelly" description="Commutateur Shelly Z-wave 1PM" domlink="actionneurs-variateurs/6747-micromodule-commutateur-z-wave-800-shelly-wave-1pm-shelly-qubino.html" amazlink="3XZJmFj" %}

## Groupe et associations

Déjà cité dans un précédent article ce qui fait la force du z-wave et qui était durant longtemps un frein économique **réside dans ce protocole propriétaire**. En effet toutes les puces z-wave sont compatibles entre elles *car seul silabs les produits*, ce qui n'est pas le cas du zigbee et permet au z-wave de produire des modules rétrocompatibles et de communiquer directement entre eux sans passer par une passerelle/controlleur z-wave.

### j'ai testé les associations de modules

{%- include alert.html type="warning" text="<b>À savoir:</b> tous les modules peuvent être associés entre eux <b>s'ils sont sur le même niveau de sécurisation</b>. Un module de sécurité S2 ne peut pas être lié avec un module sans sécurité ou de sécurité S0" %}

> Pour lier deux modules entre eux il faut vérifier qu'ils possèdent bien les mêmes commandes comme On/Off le groupe peut être différent. Sinon on ferait n'importe quoi.

[Notices en ligne des modules shelly z-wave 800](https://kb.shelly.cloud/knowledge-base/shelly-qubino-wave-devices){: target="_blank"}

Réussir à associer deux modules **entre eux n'est pas difficile, encore faut-il comprendre le principe.** N'oublie pas que seul une action physique sur un module permet de contrôler une fonction d'un autre module.

> Tu clic sur un interrupteur branché sur un module te permettras de commander une fonction d'un autre module en direct.

{%- include alert.html type="warning" text="Les actions d'associations de modules exemple: on/off, <b>ne fonctionnent pas par une commande radio mais par un bouton physique</b> situé sur l'appareil comme un interrupteur par exemple" link="https://blog.domadoo.fr/guides/groupes-dassociation-z-wave/" textlink="Explication des groupes et associations sur le site Domadoo" %}

#### Cas N°1:

je possède un module z-wave shelly qubino 1 PM z-wave 800 ( module qui peut se placer derrière un interrupteur physique ) qui a une action On/Off sur le group 2, en paramétrant correctement je peux le faire agir directement par le biais d'un interrupteur physique avec un module prise fibaro z-wave 500 qui possède lui aussi une commande On/Off sur le group. À condition que le module shelly soit inclus sans sécurité S2. Ci dessous le paramétrage dans Z-wave JS UI d'une association créé sur le shelly PM.

le gif animé ci dessous représente l'association entre le fibaro wall plug et le shelly wave 1PM sur les groupes on/off

- le groupe 2 et 3 du fibaro s'associera au groupe 2 du shelly
- tous deux sont paramétrés sans sécurité
- le groupe 2 shelly on/off peut s'associer au group 2 fibaro mais pas au group 3

**Explication**: le groupe 2 et 3 du fibaro sont des groupes on/off, le groupe 2 représente une action on/off sur le bouton physique du fibaro et le groupe 3 représente une action on/off quand l'intensité du module détecte un changement ( bref quand tu branches un chargeur par exemple et que le fibaro est allumé, normal ! )

> On a bien un cas ou 2 groupes différents peuvent s'associer entre eux le groupe 3 du fibaro sur le groupe 2 du shelly car ce sont tous des groupes **On/Off**.

![association de deux modules z-wave 800 et z-wave 500 sans sécurité  group On/Off fonctionnel]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/creation-association-meme-securite-z-wave-800-et-500-group-on-off.webp{{ cachebuster }}){: width="840" height="693" class="lazyload pictaninpost"}

**PS:** tu peux retrouver facilement tous les groupes, associations et points finaux [sur la notice en ligne du module Shelly](https://kb.shelly.cloud/knowledge-base/wave-1){: target="_blank"}.

#### Cas N°2:

{% include product-embed.html image="micromodule-volet-roulant-z-wave-800-shelly-wave-shutter-shelly-qubino.png" title="Module Volet z-wave Shelly" brand="Shelly" description="Commutateur volet Shelly Z-wave Shutter avec mesure consommation" domlink="micro-module-volet-roulant-connecte-store-portail/6803-micromodule-volet-roulant-z-wave-800-shelly-wave-shutter-shelly-qubino-3800235269008.html" amazlink="3WgzQMT" %}

Associer deux modules Shelly z-wave 800 un jeu d'enfant.

- les deux modules shelly sont sur la même norme de sécurité S2
- Shelly shutter possède deux actionneurs tu peux retrouver l'ensemble des commandes sur rootpoint, ou des commandes de l'actionneur sur endpoint 1et de l'actionneur 2 sur endpoint 2, c'est toi qui voit !
- Shelly 1PM ne possède qu'un actionneur du coup tu n'auras d'autres choix que de choisir Rootpoint

[ Shelly a rédigé un support sur les façons de créer des associations](https://support.shelly.cloud/en/support/solutions/articles/103000194120-setting-associations-of-the-wave-devices-in-home-assistant-z-wave-js-ui){: target="_blank"}

![Association module shelly z-wave 1 PM et wave Shutter group 2 on/off sur la même norme de sécurité S2 en rootendpoint ou endpoint 1, un jeu d'enfant]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/creation-association-shelly-1pm-et-shutter-meme-securite.webp{{ cachebuster }}){: width="840" height="693" class="lazyload pictaninpost"}

#### Cas 3:

L'association de deux modules avec une norme de sécurité différente est impossible.

{% picture posts/{{ page.guid }}/selection-securite-z-wave-inclusion.png --alt sélection du niveau de sécurité lors de l'inclusion d'un module --img width="710" height="375" %}

Dans la capture ci-dessous tu pourras te rendre compte que le fibaro ne possède pas de sécurité, si tu veux l'associer à un module z-wave 800 il faudra bien paramétrer lors de l'inclusion l'absence de sécurité.

![Impossibilité d'associer deux modules z-wave sur une norme de sécurité différente S2/rien S2/S0]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/impossibilite-association-z-wave-securite-differente.webp{{ cachebuster }}){: width="840" height="693" class="lazyload pictaninpost"}

{%- include alert.html type="info" text="Haade.fr participe au programme d'associés d'Amazon Services LLC, un programme de publicité d'affiliation conçu pour fournir un moyen de gagner des frais lors de la création de liens vers Amazon.com et des sites affiliés." %}

## Conclusion

Vu les prix pratiqués sur les modules Z-wave 800 lr et les énormes avantages de la compatibilité/rétrocompatibilité de ce protocole qui permettent d'associer deux modules entre eux, et un réseau maillé ou étoilé des plus performants, font de ce protocole un incontournable, je le trouve même plus pros que le protocole Zigbee 3.0.
**Reste plus qu'aux fabriquants de proposer à nouveau un panel élargi de modules.**

> Bravo à l'équipe [z-wave JS UI](https://zwave-js.github.io/zwave-js-ui/#/){: target="_blank"} pour cette interface de gestion très pro.


