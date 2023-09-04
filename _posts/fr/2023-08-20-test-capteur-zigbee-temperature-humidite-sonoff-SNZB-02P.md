---
guid: 81
title: "Test nouveau capteur de température et humidité Sonoff SNZB-02P"
description: "Test du nouveau dapteur de température et humidité à base de puce Silabs EFR32MG22 au design retravaillé et à une qualité irréprochable aux couleurs orange pétante de la marque Sonoff, rien à voir avec le grand frère SNZB-02, sonoff améliore son image de marque chinoise premium"
ref: "SNZB-02P"
layout: post
author: Nico
date: 2023-08-19 14:59
last_modified_at: 
categories: [Tests, Zigbee]
tags: []
image: 'test-nouveau-capteur-temperature-humidite-sonoff-snzb-02p-zigbee-qualite-design-ameliore.png'
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
rating: 4.8
sourcelink:
  - https://itead.cc/product/sonoff-zigbee-temperature-and-humidity-sensor-snzb-02p/ref/122/
  - https://s.click.aliexpress.com/e/_DkB333v
---

Voilà plus de deux semaines que je n'ai pas publié d'articles, congés d'été oblige ... la coupure à fait du bien. Désormais nous sommes déjà début Septembre et pour cette rentrée je te propose en test un nouveau module Sonoff {{ page.ref }} capteur de température et d'humidité fonctionnant avec une puce Silabs EFR32MG21.

Si tu as lu mes derniers articles sur les produits de la marque Sonoff tu as pu te rendre compte de **la montée en gamme** de la marque, pour ce produit c'est encore plus [flagrant si on le compare avec on grand frère le Sonoff SNZB-02]({% post_url /fr/2021-09-10-test-capteur-temperature-et-humidite-sonoff-snzb-02 %})

Avec ce nouveau capteur de température et d'humidité Sonoff {{ page.ref }}, la qualité se rapproche énormément des produits chinois de la Marque Aqara, en **signant ses produits Zigbee du célèbre orange pétant de la marque**.

Ce capteur s'accompagne d'une petite coquille métallique orange grenaillé que tu pourras fixer aisément au mur, et qui accueillera par magnétisme le {{ page.ref }}. Je dois dire que c'est très réussi.

## Contenu de la boîte

1. un module zigbee Sonoff {{ page.ref }}
2. un support métallique orange
3. une notice explicative
4. une visse
5. un double face 3M

{% picture posts/{{ page.guid }}/contenu-capteur-temperature-humidite-sonoff-snzb-02p-zigbee.png --alt contenu du colis du capteur de température et humidité Sonoff {{ page.ref }} --img width="940" height="428" %}

Sur les photos ci dessous tu pourras  te rendre compte de la taille et de la qualité de fabrication du module. Avec un bouton d'appairage et une ouverture pour la sonde température/humidité.

{% picture posts/{{ page.guid }}/differente-face-et-taille-sonoff-snzb-02P-nouveautee.png --alt plan de coupe du nouveau capteur de température et humidité Sonoff {{ page.ref }} --img width="940" height="428" %}

{% picture posts/{{ page.guid }}/boitier-sonoff-snzb-02p-interieur-pile-magnet.png --alt ouverture du module Sonoff snzb-02p et pile peu commune cr2477 {{ page.ref }} --img width="940" height="529" %}


## Intégration dans Zigbee2mqtt ( ha et jeedom )

L'intégration dans Z2M se fait sans soucis et le module est bien reconnu et déjaà inclus dans la base Z2M, c'est une bonne chose mais ça ne m'étonne pas Sonoff est tout de même réputé.

{% picture posts/{{ page.guid }}/integration-apropos-zigbee2mqtt-sonoff-snzb-02p.png --alt intégration du module sonoff zigbee efr32mg21 {{ page.ref }} dans zigbee2mqtt à propos --img width="940" height="731" %}

> Toutes les infos remontent correctement. Ne t'inquiète pas pour la batterie **elle fonctionne** aussi seulement j'ai pris la capture trop rapidement après l'intégration.

{% picture posts/{{ page.guid }}/remonte-information-expose-zigbee2mqtt-sonoff-snzb-02p.png --alt exposition des commandes du module sonoff zigbee efr32mg21 {{ page.ref }} dans zigbee2mqtt --img width="940" height="475" %}

## Comparatifs des mesures du {{ page.ref }}

J'ai voulu tester et comparer les mesures du Sonoff SNZB-02P au [module SNZB-02D ]({% post_url /fr/2023-08-07-test-module-zigbee-sonoff-snzb-02d-temperature-humidite-digital %}) et [Xiaomi Aqara VOCKQJK11LM]({% post_url /fr/2023-07-06-test-aqara-moniteur-qualite-air-AAQS-S01-zigbee3 %})

25.6, 25.4, 25.91
43.4, 42.6, 47.41

{% picture posts/{{ page.guid }}/comparatifs-donnees-temperature-sonoff-snzb-02P.png --alt comparatif des mesures du sonoff snzb-02d, {{ page.ref }} et du xiaomi Aqara VOCKQJK11LM --img width="940" height="529" %}

![Comparatif relevé de température et d'humidité Sonoff SNZB-02D, SNZB-02P et Aqara VOCKQJK11LM]({{ site.baseurl}}/assets/images/posts/{{ page.guid }}/comparatif-mesure-temperature-humidite-sonoff-snzb-02P.webp{{ cachebuster }}){: width="940" height="884"}

## **les + du produit** {{ page.ref }}
{: .blue}
- la qualité de fabrication
- certifié zigbee 3.0
- les nombreuses compatibilitées


## **les - du produit** {{ page.ref }}
{: .red}

- reprise de l'étalonnage de l'humidité
- la pile peu commune
