---
guid: 104
title: "Aeotec sort enfin son controlleur Zigbee"
description: "ça y est Aeotec se met au zigbee, la célèbre marque connue pour ses modules de qualités sort enfin un controlleur zigbee le zi-stick"
ref: "zi-stick ZGA008"
layout: post
author: Nico
date: 2024-01-12 11:24
last_modified_at: 
categories: [Tests, Zigbee]
tags: []
image: 'test-adaptateur-dongle-zigbee-matter-thread-aeotec-mini-zi-stick-ZGA008.png'
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
  - https://aeotec.com/products/aeotec-z-stick-zigbee/
  - https://aeotec.freshdesk.com/support/solutions/articles/6000261821
---

Ah **Enfin Aeotec** sort son dongle compatible Zigbee 3.0, ce fabriquant de modules de qualités a décidé de commercialiser un adaptateur usb zigbee le **{{ page.ref }}** au protocole Silabs avec un Chipset quasi similaire au Skyconnect ou Zbdongle-e. **Mais il a la particularité d'être le plus petit dongle performant du marché**.
T'as bien entendu encore plus petit que le [Skyconnect fourni par Home Assistant](https://www.home-assistant.io/skyconnect/){: target="_blank"}.

{% include product-embed.html guid="2181" %}

{% picture posts/{{ page.guid }}/presentation-zi-stick-ZGA008-aeotec-dongle-zigbee.png --alt présentation du dongle aeotec zi-stick ZGA008 adaptateur mini zigbee 3.0 --img width="940" height="529" %}

## Déballage

Rien de plus simple un**e belle boite bleue aux couleurs de la marque Aeotec** renferme ce micro dongle zigbee, il est soigneusement protégé dans une boite blanche. À l'intérieur tu y trouveras une notice et une fiche de sécurité.

> rien de plus, rien de moins.
 
{% picture posts/{{ page.guid }}/deballage-dongle-aeotect-zi-stick-zigbee-3-ZGA008.png --alt déballage du dongle aeotec zi-stick ZGA008 adaptateur mini zigbee 3.0 --img width="940" height="529" %}

**Le {{ page.ref }} est actuellement le plus petit dongle zigbee du marché**, même plus petit que le skyconnect, il se pare d'une enveloppe blanche à la face plate et un dos arrondi, très bonne qualité de fabrication.

{% picture posts/{{ page.guid }}/rendu-taille-adaptateur-aeotec-zi-stick-dongle-zigbee.png --alt rendu du dongle aeotec zi-stick ZGA008 adaptateur mini zigbee 3.0 tenu dans la main --img width="940" height="529" %}

**Et une petite photo du dos de l'adaptateur {{ page.ref }}**

{% picture posts/{{ page.guid }}/face-arriere-arrondie-dongle-aeotec-zi-stick-zga008.png --alt rendu du dos arrondi du dongle aeotec zi-stick ZGA008 adaptateur mini zigbee 3.0 tenu dans la main --img width="940" height="529" %}

## Intégration dans Zigbee2mqtt

l'intégration du dongle Aeotec {{ page.ref }} s'est fait sans aucun soucis dans zigbee2mqtt, **mais il subsite une erreur,** z2m crée 2 bridges du dongle dans l'appli, ce qui est bizarre mais pas redondant. 

{% picture posts/{{ page.guid }}/integration-vue-creation-2-bridge-aeotec-zi-stick-zigbee2mqtt-bridge.png --alt création de deux bridges du zi-stick dans zigbee2mqtt --img width="940" height="57" %}

**je m'explique:**
- le premier bridge remonte le capteur de connection avec un firmware v12
- le second fait apparaitre l'ensemble des fonctions de fonctionnement du dongle et un firmware différent du précédent bridge.

**Vue du bridge 1 créé**

{% picture posts/{{ page.guid }}/integration-aeotec-zi-stick-zigbee2mqtt-bridge1.png --alt vue du bridge 1 créé dans zigbee2mqtt du zi-stick dans zigbee2mqtt --img width="940" height="704" %}

> Bizarre.

**Vue du bridge 2 créé**

{% picture posts/{{ page.guid }}/integration-aeotec-zi-stick-zigbee2mqtt-bridge2.png --alt vue du bridge 2 créé dans zigbee2mqtt du zi-stick dans zigbee2mqtt --img width="940" height="487" %}

**Cependant l'intégration des modules se fait sans soucis**, du coup il est utilisable. 

![Inclusion d'un module avec le zi-stick aeotec et zigbee2mqtt]({{ site.baseurl }}/assets/images/posts/104/inclusion-module-zigbee-dans-zigbee2mqtt-zi-stic-aeotec.webp{{ cachebuster }}){: width="600" height="173"}{: target="_blank"}

> Cette erreur provient sois de zigbee2mqtt mais je pense que ça pourrait provenir directement du firmware injecté dans la clé, une erreur est possible.

{% include product-embed.html guid="2181" %}

## Intégration dans ZHA

L'intégration **dans ZHA ne pose aucun soucis** il suffit simplement de sélectionner la destination de la clé ```/dev/ttyUSB0``` et le reste se fait automatiquement.

{% picture posts/{{ page.guid }}/integration-aeotec-zi-stick-zha-home-assistant.png --alt intégration dans zha du zi-stick dans zigbee2mqtt --img width="940" height="658" %}

**L'intégration d'un module se fait sans aucune difficulté** la clé Aeotec {{ page.ref }} et ZHAfont le Job.

{% picture posts/{{ page.guid }}/resultat-appairage-module-zi-stick-zha-aeotec.png --alt appairage dans zha d'un module zigbee avec le zi-stick dans zigbee2mqtt --img width="422" height="494" %}

> Tu pourras te rendre compte en visonnant le gif animé, que **l'intégration de la clé dans ZHA n'oppose aucune résistance**.

![Intégration du dongle aeotec zi-stick dans ZHA home assistant]({{ site.baseurl }}/assets/images/posts/104/integration-dongle-zi-stick-aeotec-zha-home-assistant.webp{{ cachebuster }}){: width="600" height="482"}{: target="_blank"}

## Caractéristiques techniques {{ page.ref }}

|Nom|Zi-Stick|
|Numéro de modèle|ZGA008|
|Chipset|EFR32MG21A020|
|Poids du produit|3,5 g|
|Poids total du colis|21,5 g|
|Dimensions du produit|**37 x 17 x 8,5 mm**|
|Dimensions du colis|50 x 65 x 20 mm|
|Puce Zigbee|EFR32MG21|
|Version Zigbee|Zigbee 3.0|
|Fréquence Zigbee|2,4 GHz|
|Autres protocoles|Peut être mis à jour vers un Thread Stick via la mise à jour du micrologiciel pour contrôler les appareils basés sur Thread Matter.|
|Alimentation|USB DC 4,75 V à 5,25 V|
|Sensibilité du récepteur RF TX Power|+20 dBm|
|Sensibilité RX|-99 dBm|
|Courant hôte recommandé|50mA|
|Compatibilités connues|Testé pour être compatible avec Raspberry Pi / Orange Pi / BeagleBone<br />Testé pour être compatible avec le système d'exploitation Windows 10/11<br />Testé pour être compatible avec le système d'exploitation Linux<br />Testé pour être compatible avec OSX OS|
|Température de fonctionnement|0°C à 40°C / 40°F à 104°F|
|Température de stockage|-20 C à 70 C / -4°F à 158°F|
|Distance de fonctionnement|Distance maximale de 200 m (air libre)|

## **les + du produit** {{ page.ref }}
{: .blue}

- le **prix** moins de 30€
- compatible zigbee 3.0
- compatible Z2M
- compatible ZHA home assistant
- compatible openhab
- la taille


## **les - du produit** {{ page.ref }}
{: .red}

- Pas d'infos concernant la mise à jour du firmware
- intégration perfectible dans Zigbee2mqtt
- **compatibilité limitée**

{% include product-embed.html guid="2181" %}

## Conclusion

**Voilà un dongle qui a fier allure**, Aeotec se démarque par la qualité de ses produits et l'adaptateur {{ page.ref }}, en fait partie. *La mise à jour du firmware n'est pas encore d'actualité* mais aucun doute que ce sera le cas dans les semaines à venir et je t'en tiendrai informé. Si le critère de la taille est important à tes yeux alors ce dongle tiendra une place de premier choix. 
> Ou alors **tu préfères donner des sous à la fondation nabu casa en [investissant dans le skyconnect de Home assistant](https://www.home-assistant.io/skyconnect/){: target="_blank"}** qui a des caractéristiques similaires pour un tarif semblable. 