---
guid: 102
title: "Test de la sirène d'extérieur Zigbee Neo NAS-AB06B2"
description: "Test de la sirène solaire zigbee tuya Neo NAS-AB06B2 conçue pour l'extérieur, dans home assistant à moins de 40€. Pour ce prix vaut-elle le coût ?"
ref: "NAS-AB06B2"
layout: post
author: Nico
date: 2024-01-02 16:17
last_modified_at: 
categories: [Tests, Zigbee, Sécurité]
tags: []
image: 'sirene-neo-nas-ab06b2-zigbee-exterieur.png'
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
  - https://www.domadoo.fr/fr/sirene/6532-neo-sirene-intelligente-exterieure-zigbee-tuya-alimentation-5v1a-ou-batterie-panneau-solaire.html?domid=39
---

Voilà un domaine ou les modules zigbee **se font rares**, tu peux trouver ici et là des sirènes zigbee pour intérieur mais en ce qui concerne l'extérieur il n'y a pas foule. Et c'est là que **Tuya se démarque** grâce au {{ page.ref }} repris en marque blanche pour l'Europe par Neo. Mais n'oublions pas le fait que ce soit un produit Tuya.

{% include product-embed.html guid="2180" %}

## Présentation Neo {{ page.ref }}

Au déballage rien d'exceptionnel, mais pour le prix ça reste tout de même un défi exceptionnel, tu remarqueras qu'il est vendu **moins de 35€**. [Là ou un module Zigbee Bosch est vendu 200€](https://www.bosch-smarthome.com/fr/fr/service/assistance/aide-produit/aide-sirene-exterieure/){: target="_blank"}.
Bref au déballage on trouve une sirène qui utilise un **plastique relativement soyeux** et un **panneau solaire** bien intégré. 

{% picture posts/{{ page.guid }}/presentation-sirene-zigbee-exterieur-neo.png --alt Contenu de la sirène d'extérieur Zigbe Neo NAS-AB06B2 --img width="940" height="529" %}

Notice, visse et tournevis, cable usb-c font parties de cet emballage.

{% picture posts/{{ page.guid }}/face-arriere-neo-sirene-exterieur-support-pile-zigbee.png --alt face arrière de la sirène d'extérieur Zigbe Neo NAS-AB06B2 --img width="940" height="529" %}

Sur la partie arrière tu trouveras un support mural et un accès par visse à la pile, le clapet est protégé par un **joint assez épais**, les visses d'assemblages sont elles aussi protégées par un pad en caoutchouc, un petit plus. La pile utilisée qui est tout de même le support de charge principal est **constituée d'un modèle 18650**

> Ce qui est plutôt bien car tu trouveras facilement ce type de piles à un prix relativement dérisoire, sur Amazon ou Aliexpress. Sur la partie du haut ....

{% picture posts/{{ page.guid }}/rendu-dimension-sirene-exterieur-neo-nas-ab06b2-zigbee.png --alt visuel du rendu des dimensions de la sirène d'extérieur Zigbe Neo NAS-AB06B2 --img width="940" height="529" %}

La sirène Neo {{ page.ref }} est quand à elle assez volumineuse. **Elle sort du lot par la couleur de l'éclairage de la sirène**. Quand la urrence s'acharne à faire des modules en orange/rouge. Tuya pour ce modèle table sur du bleu.

{% picture posts/{{ page.guid }}/face-arriere-neo-sirene-exterieur-support-pile-zigbee-joint-peripherique.png --alt zoom épaisseur et joint de la sirène d'extérieur Zigbe Neo NAS-AB06B2 --img width="940" height="529" %}

Sur la périphérie du boitier côté façade tu pourras voir la présence d'un joint, **c'est bien mais je ne pense pas que ce soit suffisant** pour un produit externe, certe au début ça suffira à freiner les alléats climatiques mais combien de temps ...

{% picture posts/{{ page.guid }}/circuit-tuya-neo-nas-ab06b2-zigbee.png --alt circuit imprimé en image de la sirène d'extérieur Zigbe Neo NAS-AB06B2 --img width="940" height="529" %}

Pour terminer, petit tour d'horizon sur le circuit imprimé. Là tout est net et précis la *puce Tuya Zigbee est directement intégré* au circuit, quelques LED sur le bas, des branchements directs aux aux parleurs sur le haut, ainsi qu'un branchement pour l'alimentation de la pile via le panneau solaire, un réel plus pour ce produit. Selon le descriptif le son de l'appareil développe 90db à 3m, **vu la composante aigue des hauts parleurs on doit y être, là aussi ça fera le job mais on aurait pu avoir un peu plus surtout pour l'extérieur.**

{%- include alert.html type="info" text="Je te suggère d'utiliser le <b>plugin Alarmo:</b>crée ton propre système d'alarme dans Home Assistant, qui te guide dans la création d'un système d'alarme intelligent à partir de tes divers capteurs, de porte, de mouvement et autres appareils existants que tu as déjà dans ta maison." link="https://github.com/nielsfaber/alarmo" textlink="Alarmo" %}

## Caractéristiques Neo {{ page.ref }}

Niveau des caractéritiques, tu pourras te rendre compte en image que ce boitier est relativement volumineux. Des visses et même un tournevis sont fournis pour la fixation du produit, un câble usb-c aussi fait partie de ce kit, il te servira entre autre à la charge de la pile, cependant rien a été fait pour pouvoir alimenter directement le Neo {{ page.ref }} une fois en place.

{% picture posts/{{ page.guid }}/dimension-sirene-exterieur-neo-nas-ab06b2-zigbee.png --alt caractéristiques techniques de la sirène d'extérieur Zigbe Neo NAS-AB06B2 --img width="940" height="642" %}

Petit tour d'horizon sur les emplacements d'appareils du NEO {{ page.ref }}, l'ouverture des buzzers permettras à la sirène de développer 100db en cas de déclenchements d'alarmes.

{% picture posts/{{ page.guid }}/caracteristiques-sirene-exterieur-neo-nas-ab06b2-zigbee.png --alt emplacement des infos de la sirène d'extérieur Zigbe Neo NAS-AB06B2 --img width="940" height="854" %}


## Specifications techniques

|Alimentation|USB-C (5 V/1 A) ou batterie **(panneau solaire 18650 rechargeable)**|
|Norme sans fil|Zigbee 3.0|
|Portée sans fil|45 m|
|Courant de fonctionnement|700 mA|
|Courant de veille|2,5 mA|
|Son d'alarme maximum|100 dB à 1 m ; 90dB à 3m|
|Types de tonalités d'alarme|3|
|Degré d'étanchéité|IPX5|
|Température de fonctionnement|-10 °C ~ 60 °C (14 °F ~ 140 °F)|
|Humidité de fonctionnement|0 % ~ 90 % HR (sans condensation)|
|Taille du produit|200 mm x 150 mm x 66 mm|
|Taille du panneau solaire|132 mm x 62 mm|
|Valeur lumineuse minimale pour le chargement|10 000 Lux|

## liste des compatibilités

La liste de compatibilité de la sirène Neo {{ page.ref }} est limitée mais **grâce à Zigbee2mqtt** la sirène est compatible avec nos open-assistants préférés.

- Home assistant ( via Zigbee2mqtt )
- Jeedom ( via Zigbee2mqtt )
- Openhab ( via Zigbee2mqtt )
- Gladys ( via Zigbee2mqtt )
- Tuya
- Smartlife

### Compatible avec Zigbee2mqtt

Heureusement pour moi le Neo {{ page.ref }} est compatible Zigbee2mqtt mais pas dans sa totalité, du moins pour l'instant.

{% picture posts/{{ page.guid }}/zigbee2mqtt-a-propos-sirene-exterieur-neo-nas-ab06b2-zigbee.png --alt intégration onglet à propos zigbee2mqtt de la sirène d'extérieur Zigbee Neo NAS-AB06B2 --img width="940" height="677" %}

Le **niveau de batterie ne remonte pas**, on pourrait même rajouter un onglet batterie faible, mais pour l'instant impossible de faire remonter l'info batterie. Donc je ne serai pas en mesre de t'indiquer les mouvements de charges via le fonctionnement solaire, ça m'atttriste, mais bon tu pourras l'utiliser dans ton assistant préféré 👍

{% picture posts/{{ page.guid }}/z2m-expose-sirene-exterieur-neo-nas-ab06b2-zigbee.png --alt exposition des commandes dans zigbee2mqtt de la sirène d'extérieur Zigbee Neo NAS-AB06B2 --img width="940" height="615" %}

**à propos des fonctions**

Comme très très souvent, l'état de **remontées des fonctions dans Zigbee2mqtt est impressionante**, alors qu'est-ce qu'on y trouve:

- état de fonctionnement de l'alarme
- activation manuelle de l'alarme
- activation manuelle de l'anti sabotage
- fonctionnement de l'anti sabotage
- alarme mélodie ( bien le Neo {{ page.ref}} propose le choix entre trois mélodies)
- mode de l'alarme ( son, lumière, son et lumière )
- délai de fonctionnement
- état en charge
- niveau de la batterie ( non fonctionnel pour le moment )
- et pour finir qualité du lien dans le maillage.

### Compatible avec ZHA

Ben dans ZHA le Neo {{ page.ref }} est reconnu mais ne **remonte aucune fonctions**, parce qu'il est tout simplement incompatible à l'heure actuelle.

{% picture posts/{{ page.guid }}/integration-zha-sirene-exterieur-neo-nas-ab06b2-zigbee.png --alt compatibilité dans ZHA de la sirène d'extérieur Zigbe Neo NAS-AB06B2 --img width="940" height="839" %}

## **les + du produit** {{ page.ref }}
{: .blue}

- le **prix**
- compatible zigbee 3.0
- compatible Z2M
- autonome grâce à la recharge solaire
- utilise une **pile 18650**


## **les - du produit** {{ page.ref }}
{: .red}

- Une qualité perfectible pour l'extérieur
- puce zigbee Tuya
- coloris sirène bleu
- incompatible ZHA
- **compatibilité limitée**

{% include product-embed.html guid="2180" %}

## Conclusion

Que *penser de ce produit*, alors d'une part **pour le prix il fera largement le Job**, mais s'il est exposé aux intempéries je ne sais pas combien de temps il tiendra avant de *devoir faire face à des infiltrations*. Pas que le Neo {{ page.ref }} soit de mauvaises qualités, mais je pense que *c'est un tantinet limite pour l'extérieur*. Tu ne prendras toutefois que peu de risque vu le prix dérisoire de la sirène. 
Les **compatibilités sont limitées** actuellement tu pourras l'utiliser avec les box compatibles Zigbee2mqtt ou Tuya, comme la *box Lidl* par exemple.
Dans le domaine du Outdoor la sirène {{ page.ref }} est seule à évoluer avec le protocole zigbee et dans cette gamme de prix, 

> C'est un produit correcte qui te semblera indispensable, je n'en doute pas.
