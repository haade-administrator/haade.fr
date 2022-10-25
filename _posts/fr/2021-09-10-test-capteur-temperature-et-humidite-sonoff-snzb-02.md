---
guid: 18
title: "Test capteur température et humidité Sonoff SNZB-02"
description: "Test du capteur de tempérture SONOFF SNZB-02 et intégration dans homeassistant"
layout: post
author: Nico
date: "2021-09-10"
last_modified_at:
category: Tests
tags: Test Zigbee Homeassistant
image: "sonoff-snzb-02-zigbee-3.0-capteur-teperature-humidite.png"
published: true
sitemap:
  changefreq: #always hourly daily weekly monthly yearly never
  exclude: #'yes' or 'no'
  priority: #between 0.0 to 1.0, 1.0 high priority
  lastmod: # date to end modification
locale: fr_FR
toc: false
beforetoc:
comments: true
redirect_from:
  - /blog/tests/test-capteur-temperature-et-humidite-sonoff-snzb-02
---
J'ai décidé de mettre en avant en présentant un test du [capteur de température et humidité Sonoff SNZB-02]({% link _products/{{ page.locale | slice: 0,2 }}/2021-08-25-capteur-temperature-sonoff-snzb-02-zigbee.md %}), pour le sérieux et l'éventail de produits de la marque. Ça ne va pas être un gros article c'est pourquoi j'ai décidé de le comparer avec le capteur de température aqara WSDCGQ11LM par xiaomi.

**Concernant le déballage rien de fous:**

- Une boite orange de la taille du capteur
- une notice disponible en 8 langues
- un autocollant 3M

**Spécifications:**

- Pile: 3V (CR2450)
- Protocole sans fil: Zigbee (IEEE 802.15.4)
- Dimension: 43X43X14mm

Bon si tu suis l'actu de zigbee2mqtt avec plus de 1600 intégrations, [tu peux voir que le module snzb-02 est compatible](https://www.zigbee2mqtt.io/devices/SNZB-02.html){:target="_blank"}. Il suffit d'ouvrir le réseau et de cliquer 5 secondes sur le bouton du dessous, ensuite la led clignote 3 fois ainsi le module se réinitialise et s'intègre dans le réseau homeassistant.

## 5 données remontent du capteur SNZB-02 dans homeassistant:

- le niveau de la pile
- la température
- l'humidité
- le voltage de la pile
- la puissance d'émission en lqi de l'antenne

## Qu'est-ce qui m'a fait acheter le sonoff snzb-02:

Et bien tout simplement le prix et le protocole qui est le zigbee **3.0**.

À la base je souhaitais repartir sur du xiaomi aqara mais le tarif a explosé en passant du simple au double. **Le design est plus sympa**, c'est un 3 en 1 avec capteur de pression atmosphérique en plus. Il fonctionne avec des piles cr2032.

Gros **désavantage** le module Xiaomi est toujours **fourni en protocole zigbee 1.2** et c’est loin d’être bon pour le maillage surtout qu’il a tendance à se mettre en veille longuement. De se fait il a tendance à décrocher du réseau. Heureusement la version [rectangulaire Xiaomi MCCGQ12LM est compatible Zigbee 3.0]({%- link _products/{{ page.locale | slice: 0,2 }}/2021-03-25-capteur-de-porte-aqara-par-xiaomi-zigbee-3-0.md %})

## Comparatif Sonoff SNZB-02 VS Xiaomi Aqara WSDCGQ11LM

{% picture posts/{{ page.guid}}/capteur-temperature-humidite-sonoff-snzb-02-zigbee-vs-xiaomi.png --alt capteur température zigbee sonoff vs xiaomi --img width="820" height="461" %}
## Point Positif du capteur de température du sonoff SNZB-02

- le prix actuellement moins de 10€
- inclus le protocole zigbee 3.0
- **Compatible Zigbee2mqtt**

## Point négatif capteur de température du sonoff SNZB-02

- Package un peut light ( mais c'est pas ce qu'on lui demande )
- la taille, relativement massive
- les piles [CR2450](https://amzn.to/3mGXoJA){:target="_blank"} sont plus chères que les [CR2032](https://amzn.to/2WpZ1QB){:target="_blank"} ( comparatif sur la marque VARTA )

**Rappel:** Dimension sonoff SNZB-02: 42x42x14mm CR2450 3v

## Point Positif du capteur de température 3 en 1 Xiaomi aqara WSDCGQ11LM

- En plus de la température et de l'humidité il calcul la pression CO2
- Les Dimension xiaomi aqara: 35x35x09mm CR2032 3v
- Le Design
- **Compatible Zigbee2mqtt**
- L'emballage est très bien fait, Xiaomi fournit deux autocollants ( pratique )

## Point négatif du capteur de température 3 en 1 Xiaomi aqara WSDCGQ11LM

- Le prix avoisine les 14€
- Protocole Zigbee 1.2
- décrochage régulier du maillage suite à des difficultés de sorties de veilles.

## En Conclusion

Je ne vois qu'une seule raison de continuer à acheter un capteur de température Aqara. **Si t'as besoin de mesurer la pression atmosphérique.** Perso je trouve que le design du Sonoff importe peut pour ce type d'objet donc, rien que pour le **protocole zigbee 3.0 il vaut le détour.**
