---
guid: 77
title: "Comparatif et Test du Module Multifonction Nodon"
description: "test du micromodule multifonction Nodon Sin-4-1-20 véritable couteau suisse et comparatif avec le module Legrand Netatmo 412170 en fonctionnement télérupteur dans un tableau électrique"
ref: "Nodon SIN-4-1-20"
layout: post
author: Nico
date: 2023-07-31 17:43
last_modified_at: 
categories: [Tests, Zigbee]
tags: []
image: 'test-micromodule-multifonction-nodon-zigbee-sin-4-1-20-telerupteur.png'
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
  - https://nodon.fr/nodon/module-multifonction-zigbee/
  - https://nodon.fr/support/module-multifonction-zigbee/
  - https://www.domadoo.fr/fr/peripheriques/5688-nodon-module-multifonction-zigbee-3700313925188.html?domid=39
---

Véritable **couteau suisse** le micromodule multifonction {{ page.ref }} est **capable de piloter quasimment n'importe quel appareil**, portail, porte de garage, prise électrique sur laquelle tu as branché un écran, une chaudière ou chauffe-eau… .Ce Module Multifonction est certifié Zigbee 3.0 et fonctionne avec les écosystèmes et les assistants vocaux compatibles Zigbee (Amazon Echo, Jeedom, etc). **Doté d’une capacité de commutation de 3680W** et d’une sortie libre de potentiel, il ne lui manque pas grand Chose.

{% include product-embed.html guid="2145" %}
{% include product-embed.html guid="2142" %}

## Présentation du Bornier {{ page.ref }}

Comme tu peux le voir ci-dessous la panoplie d'étiquettes fournies avec le modules rail din est complète et surtout bien faite. La documentation du micromodule multifonction {{ page.ref }} est toujours aussi bien faite, **merci Nodon**. *Tiens comme je suis généreux tu pourras les télécharger directement via les liens ci-dessous:* 👌

{% include doclink.html pdf="NOTICE-NODON-SIN-4-1-20-UG_FR_EN.pdf" title="Notice d'utilisation du micromodule multifonction zigbee Nodon SIN-4-1-20" %}

{% include doclink.html pdf="NodOn_Zigbee_MultifunctionRelaySwitch_SIN-4-1-20-Datasheet_FR.pdf" title="Fiche technique du micromodule multifonction zigbee Nodon SIN-4-1-20" %}

{% picture posts/{{ page.guid }}/contenu-boite-micromodule-multifonction-nodon-zigbee-sin-4-1-20-telerupteur.png --alt contenu de la boite du {{ page.ref }} et du boitier rail din --img width="940" height="529" %}

*Je tenais à préciser que ce tuto de test n'est pas aussi complet que d'autre* sur le site, je me suis permis cette écart car tu peux déjà trouver sur le site un [test du module Nodon du volet roulant SIN-4-RS-20]({% post_url /fr/2023-06-19-test-du-module-zigbee-volet-roulant-nodon-SIN-4-RS-20 %}), n'hésite pas à le consulter.


{% picture posts/{{ page.guid }}/Bornes-Micromodule-ZigBee-Nodon-1-sortie-Multifonction-SIN-4-1-20.png --alt schéma du bornier du micromodule multifonction du {{ page.ref }} --img width="940" height="493" %}

## Schémas d'installations

> Voilà différents schémas d'installations qui circulent sur le site officiel Nodon ainsi que sur l'excellent site de ventes et de documentations [domotique-store.fr](https://www.domotique-store.fr/){: target="_blank"}

### Portail et porte de Garage

{% picture posts/{{ page.guid }}/Cablage-Portail-Porte-Garage-Micromodule-ZigBee-Nodon-1-sortie-Multifonction-SIN-4-1-20.png --alt schéma de branchement du {{ page.ref }} avec une porte de garage ou portail en contact sec --img width="940" height="740" %}

**On pourrait aussi mettre** en connection un interrupteur NO/NC sur l'entrée centrale en connection filaire et mettre le moteur en de la porte de garage directement en impulsion sur contact sec.

{%- include alert.html type="warning" text="Attention, ton portail ou porte de de garage doit être équipé d'une entrée pour contact sec (normalement destinée à y relier un simple bouton poussoir).
Le SIN-4-1-20 doit être <b>réglé en mode impulsionnel</b> (voir la documentation étendue)." %}


### Prise ou radiateur

{% picture posts/{{ page.guid }}/Cablage-Prise-ou-radiateur-Micromodule-ZigBee-Nodon-1-sortie-Multifonction-SIN-4-1-20.png --alt schéma de cablage du {{ page.ref }} sur prise ou radiateur --img width="940" height="635" %}

### Prise contrôlé par un interrupteur

{% picture posts/{{ page.guid }}/Cablage-Prise-Interrupteur-Micromodule-ZigBee-Nodon-1-sortie-Multifonction-SIN-4-1-20.png --alt schéma de cablage du {{ page.ref }} sur prise contrôlé par un interrupteur --img width="940" height="718" %}

### VMC ou Chaudière

{% picture posts/{{ page.guid }}/Cablage-VMC-ou-Chaudiere-Micromodule-ZigBee-Nodon-1-sortie-Multifonction-SIN-4-1-20.png --alt schéma de cablage du {{ page.ref }} sur vmc simple ou double flux ou sur chaudière --img width="940" height="734" %}

{%- include alert.html type="info" text="
<b>La VMC</b> sera alimentée avec un neutre et une phase permanente sur PV (petite vitesse). L'entrée contact sec du Nodon SIN-4-1-20 sera reliée à la phase et la sortie sur l'entrée GV de votre VMC.
<br>
<b>La chaudière</b> doit être équipée d'une entrée pour thermostat standard. <b>Les chaudières reliées à un panneau de contrôle via un bus ne sont pas compatibles.</b>
Suivant les besoins, les bornes d'entrée/sortie du module Nodon SIN-4-1-20 pourront être reliées à la place de votre thermostat actuel (gestion thermostatique effectuée par votre système domotique), en parallèle du thermostat existant (permet forcer l'allumage de la chaudière par domotique) ou en série du thermostat existant (forçage de la coupure de la chaudière).
Le module doit être installé à proximité de votre VMC ou à tout endroit où un neutre, une phase et le fil GV (grande vitesse) de votre VMC sont accessibles." %}

### Chauffe-eau

{% picture posts/{{ page.guid }}/cablage-contacteur-chauffe-eau-avec-sans-jour-nuit-ZigBee-Nodon-SIN-4-1-20.png --alt schéma de cablage du {{ page.ref }} sur chauffe-eau thermodynamique avec ou sans gestion jour-nuit --img width="940" height="830" %}

## Schéma Télérupteur

{% picture posts/{{ page.guid }}/Cablage-DIN-Tableau-Electrique-Telerupteur-ZigBee-2-ou-3-fils-boutons-au-neutre-Nodon-SIN-4-1-20.png --alt schéma de cablage du {{ page.ref }} comme télérupteur dans le tableau éléctrique avec 2 ou 3 fils --img width="940" height="830" %}

> J'ai testé le fonctionnement du module {{ page.ref }} avec le schéma de fonctionnement à trois fils et le **mode télérupteur fonctionne parfaitement**.

L'image ci-dessous représente le branchement du {{ page.ref }} en mode télérupteur à trois fils (bouton à la phase.)

{% picture posts/{{ page.guid }}/test-nodon-multifonctions-sin-4-1-20-telerupteur-tableau-ok.png --alt test du module multifonction {{ page.ref }} comme télérupteur branchement 2 fils --img width="940" height="529" %}

Tu pourras te rendre compte de l'intégration du module nodon avec rail din dans le tableau électrique.

{% picture posts/{{ page.guid }}/integration-nodon-multifonctions-sin-4-1-20-telerupteur.png --alt intégration dans un tableau du {{ page.ref }} comme télérupteur --img width="940" height="529" %}

## Comparaison avec le module télérupteur legrand 412170 Netatmo

{% picture posts/{{ page.guid }}/comparatif-telerupteur-nodon-multifonctionsin-4-1-20-avec-legrand-netatmo-412170-image-presentation.png --alt comparatif du {{ page.ref }} comme télérupteur avec legrand netatmo 412170 --img width="940" height="529" %}

> Les deux modules sont compatibles entre autres zigbee2mqtt donc tu pourrais facilement les **utiliser sur Homeassistant ou Jeedom.** 

**Concernant Nodon il est aussi compatible:**
- ZHA ( home assistant )
- Zigbee par Domoticz
- Zigbee Jeedom
- Overkiz
- Smartthings
- Smart&Connective

{% picture posts/{{ page.guid }}/comparatif-telerupteur-nodon-multifonctionsin-4-1-20-avec-legrand-netatmo-412170.png --alt comparatif du {{ page.ref }} comme télérupteur avec legrand netatmo 412170 --img width="940" height="529" %}

En comparant ces deux modules il n'y a pas photo **Legrand passe le cap** de l'ergonomie haut la main**, mais cette victoire à un coût, compte 77€ le module livré, on peut dire que ça fait cher. **Tu t'en sortiras à 55€ livré chez Domadoo** à condition de prendre 5 boitiers Rail Din de la marque. 

Le **module Legrand** possède un bouton en façade pour le fonctionnement et un autre pour l'inclusion accessible une fois intégré dans le tableau éléctrique, sons compté qu'il ne prendra la place que d'un emplacement dans le tableau. Un petit plus tu trouveras les schémas de branchements sur le côté. **De plus il est équipé d'un compteur d'énergie.**

**Chez Nodon** il faudra réaliser l'inclusion du module avant de l'instégrer dans le boitier rail din à moins qu'il s'agisse de la première utilisation. Sinon mis à part ça le boîtier est relativement bien fait mais il prendra 1 emplacement et demi dans le tableau électrique. Tu n'auras pas accès au bouton d'inclusion et à l'allumage physique des lumières

Le nombre de fonctions est différente d'un module à l'autre, tu pourras te rendre compte sur la capture ci-dessous que Legrand propose en plus le relevé de consommation en W.

> Au final je ne sais ps si la différence de prix est si exagéré ?

{% picture posts/{{ page.guid }}/expose-fonction-zigbee2mqtt-telerupteur-nodon-multifonctionsin-4-1-20-avec-legrand-netatmo-412170.png --alt exposition dans z2m des fonctions du {{ page.ref }} et du legrand netatmo 412170 --img width="940" height="529" %}


> Bon l'exemple n'est pas très parlant, partons du principe que tu désires en acheter 5.

- 5 x Legrand 412170 reviendrais à **346,92€** livré à [comptoirélectriquedunet](https://www.comptoirelectriquedunet.fr/telerupteur-connecte-with-netatmo/?gclid=CjwKCAjw_aemBhBLEiwAT98FMnKmWDZLe24qzEX38NdOJEO971d91Mh19jROy2lj6i086LhpU1y5dxoCsZQQAvD_BwE){: target="_blank"}
- 5 x modules multifonctions + rail reviendrait à **249,4€** chez domadoo 

> Une différence de **quasimment 100€** à voir si ça te fait peur.

## Caractéristiques Techniques

|Alimentation|230V AC ~ 50Hz|
|Capacités de commutation|230V AC – 16A|
|Consommation|< 1W|
|Puissance Max.|3680W – Zero crossing intégré|
|Bande de fréquences radio utilisée|2,4 GHz|
|Puissance radio maximale|+10dBm|
|Portée radio|jusqu’à 30m en intérieur|
|Température de fonctionnement|-20°C à 60°C|
|Indice de protection|IP 20|
|Device ID Type|On/Off Light (0x0100)|
|Dimensions|40 mm (l) x 44 mm (L) x 16.9 mm (h)|

## **les + du produit** {{ page.ref }}
{: .blue}
- la qualité de fabrication
- prise en charge mise à jour OTA
- certifié zigbee 3.0
- les nombreuses compatibilitées
- l'adaptation aux produits du marché

## **les - du produit** {{ page.ref }}
{: .red}

- le prix
- l'inclusion
- manque le bouton de fonctionnement manuel
- absence de la remontée d'énergie

{% include product-embed.html guid="2145" %}
{% include product-embed.html guid="2142" %}

## Conclusion

Comme pour les autres modules de la marque, **Nodon signe un sans faute sur la qualité de ce produit**, j'ai voulu par le biais de cet article te prouver que le {{ page.ref }} **fonctionne bien en mode télérupteur** 👍. Cependant j'ai opté pour les modules Legrand Netatmo à titre privé car d'une je possède un tableau électrique Legrand et de deux, l'aspect financier m'importait peu.
