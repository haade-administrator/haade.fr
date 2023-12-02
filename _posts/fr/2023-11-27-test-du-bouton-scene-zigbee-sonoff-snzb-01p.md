---
guid: 98
title: "Test du Sonoff SNZB-01P"
description: "Test du bouton de scène intelligent Zigbee 3.0 Sonoff SNZB-01P"
ref: "SNZB-01P"
layout: post
author: Nico
date: 2023-11-28 16:07
last_modified_at: 
categories: [Tests, Zigbee]
tags: []
image: 'test-bouton-scene-intelligent-sonoff-snzb-01p.png'
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
rating: 4.3
sourcelink:
  - https://sonoff.tech/product/gateway-and-sensors/snzb-01p/
---

Après avoir testé il y a peu de temps le capteur de temérature et d'humidité Sonoff SNZB-02P, il est maintenant l'heure de tester le bouton de scène intelligente {{ page.ref }}. **J'aurai pu présenter les deux en même temps** mais j'ai préféré le faire séparément. Dans la continuité de ce que propose **Sonoff ce bouton poussoir fait-il le job pour le prix !**

{% picture posts/{{ page.guid }}/sonoff-snzb-01p-en-photo.png --alt Photos du bouton scene intelligente Sonoff SNZB-01P zigbee 3.0 --img width="940" height="529" %}

**Franchement je n'ai pas grand chose à dire de négatif** sur ce module. Esthétiquement le {{ page.ref }} est réussi, l'intégration et la durée de vie de la pile est un plus. Équipé d'une puce zigbee silabs EFR32MG22, rend le produit plus petit, le maillage et l'inclusion n'est pas un problème pour lui.

{% include product-embed.html image="https://i0.wp.com/itead.cc/wp-content/uploads/2023/05/SNZB-01P.jpg?fit=1000%2C1000&ssl=1" title="Sonoff Bouton scene intelligent SNZB-01P" brand="Sonoff" description="Bouton de scene intelligent 3 fonctions zigbee Sonoff SNZB-01P" iteadlink="sonoff-zigbee-wireless-switch-snzb-01p" domlink="peripheriques/6733-sonoff-bouton-connecte-sans-fil-zigbee-30-compatible-alexa-snzb-01p.html" affiliate="_DBdcwQL" %}

## Tour d'horizon du {{ page.ref }}

Le **package est simple et claire**. tu trouveras à l'intérieur du paquet:
- un capteur {{ page.ref }} ( heureusement sinon tu t'es fait avoir )
- un support murale orange magnétique en acier
- un double face **3M** pour le support ou en direct
- une visse pour le support
- une **plaquette d'autocollants**
- une notice technique

{% picture posts/{{ page.guid }}/contenu-du-bouton-scene-intelligent-sonoff-snzb-01p.png --alt contenu du carton du bouton scene intelligente Sonoff SNZB-01P zigbee 3.0 --img width="940" height="529" %}

> J'ai repris une image du fonctionnement du support magnétique déjà présent sur le [SNZB-02P]({% post_url /fr/2023-08-20-test-capteur-zigbee-temperature-humidite-sonoff-SNZB-02P %})

{% picture posts/{{ page.guid }}/montage-support-sonoff-snzp-01-magnetisme-zigbee.png --alt montage sur support murale du bouton scene intelligente Sonoff SNZB-01P zigbee 3.0 --img width="940" height="303" %}

## Articles Cognitifs

- [Test capteur température et humidité Sonoff SNZB-02]({% post_url /fr/2021-09-10-test-capteur-temperature-et-humidite-sonoff-snzb-02 %})
- [Test du nouveau capteur température et humidité Sonoff SNZB-02P]({% post_url /fr/2023-08-20-test-capteur-zigbee-temperature-humidite-sonoff-SNZB-02P %})
- [Test capteur température et humidité Sonoff SNZB-02D]({% post_url /fr/2023-08-07-test-module-zigbee-sonoff-snzb-02d-temperature-humidite-digital %})
- [Test capteur porte Sonoff SNZB-04]({% post_url /fr/2021-09-20-test-capteur-porte-zigbee-3-0-sonoff-snzb-04 %})
- [Test interrupteur ZBMINI-L2 Extrême]({% post_url /fr/2023-03-06-test-sonoff-zbminil2-extreme-zigbee-end-device %})
- [Test Nspanel]({% post_url /fr/2023-11-03-nspanel-controle-ta-maison-facilement-home-assistant-esphome-blackymas %})
- [Test Nspanel Pro]({% post_url /fr/2023-03-10-deballage-test-et-installation-sonoff-nspanel-pro %})
- [Zbdongle-P vs Zbdongle-E]({% post_url /fr/2022-11-20-zb-dongle-p-vs-zb-dongle-e-zigbee-sonoff %})

## liste des compatibilités

La liste de compatibilité du Sonoff {{ page.ref }} est intéressante et large **grâce à la compatibilité Z2M**

- Home assistant
- Jeedom
- Openhab
- Gladys
- Ewelink
- IFTT
- Amazon Alexa

## Compatible avec Zigbee2mqtt

Le produit est efficacement compatible avec ZM je n'ai rencontré aucun soucis d'inclusion. Ce qui le rendra compatible avec les box et systèmes domotiques du moment ( Home assistant, Jeedom, Gladys, etc...)

{% picture posts/{{ page.guid }}/snzb-01p-integration-zigbee2mqtt.png --alt intégration dans Z2M du bouton scene intelligente Sonoff SNZB-01P zigbee 3.0 --img width="940" height="698" %}

### Actions possibles du {{ page.ref }}

**3 actions sont disponibles** avec ce bouton, comme c'est souvent le cas avec ce type de boutons:
- simple clic
- double clic
- long clic de 5 secondes

{% picture posts/{{ page.guid }}/snzb-01p-integration-expose-zigbee2mqtt.png --alt intégration dans Z2M du bouton scene intelligente Sonoff SNZB-01P zigbee 3.0 onglet expose --img width="940" height="348" %}

{% picture posts/{{ page.guid }}/snzb-01p-integration-home-assistant-zigbee2mqtt.png --alt rendu dans Home Assistant du bouton scene intelligente Sonoff SNZB-01P zigbee 3.0 --img width="940" height="739" %}

**Le temps de réaction** entre l'instant ou tu appuis et la réaction de sortie est **d'environ 1 secondes**, ce n'est pas instantané malheureusement, d'ailleurs une lumière rouge t'indiquera l'envoi de la commande.

**Gros point négatif** le Sonoff {{ page.ref }} n'est pas compatible en association directe, binding ( fonctionnement en direct sans Zigbe2mqtt et un coordinateur ) entre deux modules. C'est bien dommage surtout que la fonction onOff est disponible sur ce rupteur. Perso je n'ai pas réussi à le faire fonctionner mais peut être que quelqu'un à réussi. Si c'est le cas n'hésite pas à me le faire savoir.

## compatible avec ZHA

Dans ZHA rien à dire non plus le Sonoff {{ page.ref }} est purement compatible.

Le {{ page.ref }} est bien compatible avec ZHA et Home Assistant, l'intégratison se fait simplement en appuyant sur le bouton d'inclusion 5 secondes

{% picture posts/{{ page.guid }}/prise-en-charge-sonoff-snzb01-p-zha.png --alt prise en charge dans zha home assistant du bouton scene intelligente Sonoff SNZB-01P zigbee 3.0 --img width="473" height="542" %}

Dans ZHA sur l'interface du {{ page.ref }}, tu ne peux pas voir clairement les remontées des trois fonctions simple, double ou long. Cependant celles-ci sont bien reconnus, tu pourras tester via l'intégration Blueprint plus bas.

{% picture posts/{{ page.guid }}/integration-snzb-01p-dans-zha-home-assistant.png --alt rendu dans home assistant du bouton scene intelligente Sonoff SNZB-01P zigbee 3.0 --img width="940" height="665" %}

## Automatisation Blueprint du {{ page.ref }}

Pour créer une autolatisation et utiliser l'ensemble des 3 fonctions du Sonoff {{ page.ref }}, **il te suffit de choisir entre Z2M et ZHA** et de cliquer sur le lien ci-dessous et de paramétrer les entités en fonction d'un appui (simple, double ou long).

### Pour Zigbee2mqtt

{% include homeassistantlink.html blueprint_import="https://gist.github.com/haade-administrator/1a9c217a3f2cdf0ba149d4f2f186e6d4" %}

### Pour ZHA

{% include homeassistantlink.html blueprint_import="https://gist.github.com/haade-administrator/85e9ec76c36469806bf47ceb726d6632" %}

## Fonction binding du {{ page.ref }}

**Contrairement à son grand frère le SNZB-01**, le Sonoff {{ page.ref }} n'est **pas compatible** avec la fonction Binding, du moins je n'ai pas réussi à le faire fonctionner ni dans ZHA ni dans Zigbee2mqtt. Dommage cette fonction est très utile et permet d'accélerer les temps de réponses entre les modules.

## **les + du produit** {{ page.ref }}
{: .blue}
- la qualité de fabrication
- certifié zigbee 3.0 puce **EFR32MG22**
- durée de vie de la pile
- la durée de vie de la pile
- **le prix (13€ environ)**
- fournis avec divers stickers
- les nombreuses compatibilitées
- les divers support

## **les - du produit** {{ page.ref }}
{: .red}

- Mode de liaison ( binding non fonctionnel ).

{% picture posts/{{ page.guid }}/taille-bouton-scene-intelligent-sonoff-snzb-01p.png --alt rendu taille du bouton scene intelligente Sonoff SNZB-01P zigbee 3.0 --img width="940" height="529" %}

## Caractéristiques du {{ page.ref }}

|Action de bouton personnalisée|vous pouvez personnaliser les actions de bouton comme vous le souhaitez. Contrôlez plusieurs appareils par simple pression, double pression et pression longue.|
|Compatible avec Zigbee 3.0|prend en charge les concentrateurs Zigbee utilisant le protocole Zigbee 3.0 et prend en charge, en théorie, l'ajout à tout concentrateur Zigbee développé conformément aux protocoles Zigbee 3.0. Comme SONOFF NSPanel Pro, ZB Bridge Pro et ZBDongle-E.|
|Déclencher des routines Alexa|Déclenchez des routines Alexa en appuyant sur l'interrupteur sans fil.|
|Bouton d'urgence|le SNZB-01P peut être utilisé comme bouton d'urgence en cas d'urgence, votre famille peut appuyer sur le bouton pour envoyer une notification d'alerte à votre téléphone.|
|5 ans d'autonomie|alimenté par une pile CR2477. *Les données d'autonomie de la batterie sont obtenues auprès du laboratoire interne de SONOFF, veuillez vous référer à l'utilisation réelle.|

### Spécifications techniques:

|Modèle|SNZB-01P|
|Connexion sans fil|ZigBee (IEEE 802.15.4)|
|Modèle de batterie|CR2477|
|Température de travail|-10 °C-60 °C|
|Matériau du boîtier|PC|
|Poids net|27,8 g|
|Dimensions du produit|45 x 45 x 17,7 mm|

{% include product-embed.html image="https://i0.wp.com/itead.cc/wp-content/uploads/2023/05/SNZB-01P.jpg?fit=1000%2C1000&ssl=1" title="Sonoff Bouton scene intelligent SNZB-01P" brand="Sonoff" description="Bouton de scene intelligent 3 fonctions zigbee Sonoff SNZB-01P" iteadlink="sonoff-zigbee-wireless-switch-snzb-01p" domlink="peripheriques/6733-sonoff-bouton-connecte-sans-fil-zigbee-30-compatible-alexa-snzb-01p.html" affiliate="_DBdcwQL" %}

## Conclusion

**Le Sonoff {{page.ref}} est un produit très bien fini**, qui fait le Job. À comparer avec son prédecesseur le SNZB-01 il n'y a pas photo le {{ page.ref }} est largement en tête cependant j'ai enlevé des points car le {{ page.ref }} ne supporte pas la liaison en direct (binging), alors que son grand frère SNZB-01 le supporte, et c'est bien dommage. Si la fonction Binding n'est pas une obligation pour toi alors fonce acheter ce module. **Je profite de cet article pour remercier Itead de m'avoir fourni ce petit bijou.**