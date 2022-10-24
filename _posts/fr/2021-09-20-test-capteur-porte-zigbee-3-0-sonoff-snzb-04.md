---
guid: 20
title: "Test Capteur porte zigbee 3.0 sonoff SNZB-04"
description: "Test d'un capteur de porte Sonoff SNZB-04 zigbee et intégration dans homeassistant"
layout: post
author: Nico
date: "2021-09-20"
last_modified_at:
categories: Tests
tags: Test Zigbee Homeassistant
image: "sonoff-snzb-04-detecteur-porte-zigbee-3.0.png"
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
  - /blog/tests/test-capteur-porte-zigbee-3-0-sonoff-snzb-04
---
Voilà après la [présentation du capteur de température SNZB-02]({% post_url /fr/2021-09-10-test-capteur-temperature-et-humidite-sonoff-snzb-02 %}), je vais détailler rapidement [le capteur d'ouverture sonoff SNZB-04]({% link _products/fr/2021-08-26-controlleur-ouverture-sonoff-snzb-04-zigbee.md %}), la qualité reste la même, le conditionnement et l'esthétisme du module est similaire. Plus bas il y aura aussi une comparaison avec le xiaomi mijia porte et fenêtre MCCGQ01LM

{% include product-embed.html guid="2123" description="Capteur porte zigbee 3.0 sonoff SNZB-04" %}

## Le déballage, toujours rien de fous

- Une boite orange de la taille du capteur
- une notice disponible en 8 langues
- un autocollant 3M

## Spécifications du [Sonoff SNZB-04]({% link _products/fr/2021-08-26-controlleur-ouverture-sonoff-snzb-04-zigbee.md %})

- Pile: 3V (CR2450)
- Protocole sans fil: Zigbee (IEEE 802.15.4)
- Dimensions: **aimant:** 32 x 15.6 x 13mm, **capteur:** 47 x 27 x 13.5mm

Bon si tu suis l’actu de zigbee2mqtt avec plus de 1600 intégrations, [tu peux voir que le module snzb-04 est compatible](https://www.zigbee2mqtt.io/devices/SNZB-04.html){:target="_blank"}. Il suffit d’ouvrir le réseau et de cliquer 5 secondes sur le bouton du dessous, ensuite la led clignote 3 fois ainsi le module se réinitialise et s’intègre dans le réseau home assistant.

## 5 données remontent du capteur SNZB-04 dans home assistant:

- contact
- batterie faible
- batterie
- voltage
- qualité du lien ( lqi )

## Qu’est-ce qui m’a fait acheter le capteur d'ouverture [sonoff snzb-04]({% link _products/fr/2021-08-26-controlleur-ouverture-sonoff-snzb-04-zigbee.md %}):

Encore une fois le prix et pour un gros point, **la prise en charge du zigbee 3.0**, je serai bien resté sur du **xiaomi aqara mijia MCCGQ01LM** mais le tarif a explosé en passant du simple à presque deux fois le prix. **Le design est nettement plus sympa et la taille est réduite**, mais seulement **4 données remontent** dans zigbee2mqtt ( batterie faible ne remonte pas ). Il fonctionne lui aussi avec des piles cr2032.

Gros **désavantage** le module Xiaomi est toujours **fourni en protocole zigbee 1.2** et c’est loin d’être bon pour le maillage surtout qu’il a tendance à se mettre en veille longuement. De se fait il a tendance à décrocher du réseau. Heureusement la version [rectangulaire Xiaomi MCCGQ12LM est compatible Zigbee 3.0]({% link _products/fr/2021-03-25-capteur-de-porte-aqara-par-xiaomi-zigbee-3-0.md %})

## Comparatif [Sonoff SNZB-04]({% link _products/fr/2021-08-26-controlleur-ouverture-sonoff-snzb-04-zigbee.md %}) VS Xiaomi Aqara Mijia MCCGQ01LM

{% picture posts/{{ page.guid}}/sonoff-detecteur-porte-zigbee-vs-xiaomi.png --alt sonoff SNZB-04 vs Xiaomi MCCGQ01LM %}

test et comparatif du capteur d'ouverture sonoff SNZB-04 vs Xiaomi MCCGQ01LM

## Point Positif du capteur de température du [sonoff SNZB-04]({% link _products/fr/2021-08-26-controlleur-ouverture-sonoff-snzb-04-zigbee.md %})

- le prix actuellement moins de 8€
- inclus le protocole zigbee 3.0
- **Compatible Zigbee2mqtt**

## Point négatif capteur d'ouverture du [sonoff SNZB-04]({% link _products/fr/2021-08-26-controlleur-ouverture-sonoff-snzb-04-zigbee.md %})

- Package un peut light ( mais c’est pas ce qu’on lui demande )
- **la taille, trop massive à mon goût**
- les piles [CR2450](https://amzn.to/3mGXoJA){:target="_blank"} sont plus chères que les [CR2032](https://amzn.to/2WpZ1QB){:target="_blank"} ( comparatif sur la marque VARTA )

**Rappel:** Dimension sonoff SNZB-04:

**Aimant:** 32 x 15.6 x 13mm  
**Capteur:** 47 x 27 x 13.5mm

## Point Positif du capteur d'ouverture Xiaomi aqara MijiaMCCGQ01LM

- Les Dimensions xiaomi aqara: 35x35x09mm CR2032 3v
- **Le Design**
- **Compatible Zigbee2mqtt**
- **L’emballage est très bien fait, Xiaomi fournit deux autocollants ( pratique )**

## Point négatif du capteurd'ouverture Xiaomi aqara MijiaMCCGQ01LM

- Le prix avoisine les 12€ a presque doublé !
- **Protocole Zigbee 1.2**
- décrochage régulier du maillage suite à des difficultés de sorties de veilles.

## En conclusion

Si tu t'en fous du design, si tu veux faire des économies ou alors si tu as beaucoup de modules à acheter, alors [le capteur d'ouverture sonoff SNZB-04]({% link _products/fr/2021-08-26-controlleur-ouverture-sonoff-snzb-04-zigbee.md %}) est fait pour toi, sinon si le maillage du réseau ne te fait pas peur **alors passe sur Xiaomi**, rappel: [le nouveau capteur d'ouverture rectangulaire Xiaomi MCCGQ12LM est compatible Zigbee 3.0](https://www.haade.fr/produit/capteur-de-porte-aqara-par-xiaomi-zigbee-3-0/)

{% include product-embed.html guid="2123" description="Capteur porte zigbee 3.0 sonoff SNZB-04" %}
