---
guid: 92
title: "Test du controlleur de Vanne Zigbee PF-PM02D-TYZ par Moes"
description: "Aujourd'hui nous allons tester le controlleur de vanne intelligente iotperfect et revendu par Moes, nous allons voir que la qualité de fabrication ne fait pas tout"
ref: "PF-PM02D-TYZ"
layout: post
author: Nico
date: 2023-11-07 16:43
last_modified_at: 
categories: [Tests, Domotique, Zigbee]
tags: []
image: 'test-controlleur-vanne-intelligente-zigbee-moes-PF-PM02D-TYZ.png'
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
  - https://zigbee.blakadder.com/IOTPerfect_PF-PM02D-TYZ.html
  - https://www.zigbee2mqtt.io/devices/PF-PM02D-TYZ.html
  - https://www.domadoo.fr/fr/peripheriques/6671-moes-vanne-motorisee-zigbee-tuya.html
---

Aujourd'hui je vais tester un module bien particulié, souvent associé aux problèmes d'inondations il peut être utile pour contrôler l'arrosage de plantes et du gazon à condition de trouver les vannes 1/4 de tours protégées des intempéries. Je veux parler du controlleur de vannes intelligent zigbee {{ page.ref }} fabriqué par iotperfect et vendu en parque blanche par Moes entre autre. mais ce produit permet-il de controler de façon sûre des vannes 1/4 de tours ?

{% include product-embed.html guid="2176" %}

## Petit tour d'horizon du {{ page.ref }}

Le module est fournis assemblé avec un adapteateur secteur, un kit de fixation et les notices explicatives. **L'emballage et le contenu fait bonne impression.**



{% picture posts/{{ page.guid }}/capture-controlleur-vanne-intelligente-zigbee-moes-PF-PM02D-TYZ.png --alt presentation du controlleur de vanne 1/4 de tour moes PF-PM02D-TYZ zigbee 3.0 --img width="940" height="529" %}

{% picture posts/{{ page.guid }}/taille-alerte-inclusion-controlleur-vanne-intelligente-zigbee-moes-PF-PM02D-TYZ.png --alt particularité du controlleur de vanne 1/4 de tour moes PF-PM02D-TYZ zigbee 3.0 --img width="940" height="529" %}

## Compatibilité

- Zigbee2mqtt
- deconz
- zigbee Domoticz
- **zigbee Jeedom**
- Homey
- Homely
- Smartthings
- Eva
- futurhome
- Nimly
- Hubitat

## Inclusion dans ZHA

## Inclusion dans Zigbee2mqtt

## Caractéristiques {{ page.ref }}

{% picture posts/{{ page.guid }}/dimension-controlleur-vanne-zigbee-pf-pm02d-tyz.png --alt dimension du controlleur de vanne gaz ou eau zigbee moes PF-PM02D-TYZ tuya --img width="600" height="600" %}

## Documents {{ page.ref }}

{% include doclink.html pdf="ZV-QY-US-EN English Manual.pdf" title="guide d'installation du controlleur de vanne gaz ou eau zigbee moes PF-PM02D-TYZ" %}

## **les + du produit** {{ page.ref }}
{: .blue}

- la qualité de fabrication
- Une énorme compatibilité
- le nombre de fonctions disponibles
- Une pile Duracel
- Une taille réduite
- Un design réussi
- Durée de la pile de 3 ans


## **les - du produit** {{ page.ref }}
{: .red}

- Le prix (50€ environ)
- la puce zigbee cc2530
- Incompatible avec ZHA
- le choix d'une pile onéreuse CR123

{% include product-embed.html guid="2176" %}

## Conclusion