---
guid: 78
title: "Test du capteur Sonoff SNZB-02D"
description: "test du capteur digitale de température et d'humidité zigbee 3.0 Sonoff SNZB-02D"
ref: "SNZB-02D"
layout: post
authors: Nico
date: 2023-08-07 12:27
last_modified_at: 
categories: [Tests, Zigbee]
tags: []
image: 'test-module-zigbee-temperature-humidite-sonoff-snzb-02d.png'
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
rating: 4.7
sourcelink:
  - https://www.domadoo.fr/fr/peripheriques/6614-sonoff-capteur-de-temperature-et-d-humidite-zigbee-30-avec-ecran.html?domid=39
  - https://sonoff.tech/product/gateway-and-sensors/snzb-2d/
---

Pour débuter cet article **je tenais à remercier Domadoo** de m'avoir fourni ce produit qui me permet de te faire un retour de plus sur les modules de la gamme Sonoff. Comme tu auras pu le lire sur ce blog, j'ai déjà testé divers produits de cette marque et **je dois dire que je n'ai jamais été déçu**, qu'il s'agisse de module incluant le protocole wifi ou Zigbee, alors qu'en est-il de ce module Sonoff {{ page.ref }}, est-il de bonne facture et dans quel but a-t-il été développé ?

## Liste des articles Cognitifs

- [Test capteur température et humidité Sonoff SNZB-02]({% post_url /fr/2021-09-10-test-capteur-temperature-et-humidite-sonoff-snzb-02 %})
- [Test capteur porte Sonoff SNZB-04]({% post_url /fr/2021-09-20-test-capteur-porte-zigbee-3-0-sonoff-snzb-04 %})
- [Test interrupteur ZBMINI-L2 Extrême]({% post_url /fr/2023-03-06-test-sonoff-zbminil2-extreme-zigbee-end-device %})
- [Test Nspanel Pro]({% post_url /fr/2023-03-10-deballage-test-et-installation-sonoff-nspanel-pro %})
- [Zbdongle-P vs Zbdongle-E]({% post_url /fr/2022-11-20-zb-dongle-p-vs-zb-dongle-e-zigbee-sonoff %})

{% include product-embed.html image="sonoff-capteur-de-temperature-et-d-humidite-zigbee-30-avec-ecran.jpg" title="Sonoff SNZB-02D" brand="Sonoff" description="Capteur de température et humidité avec écran Zigbee" iteadlink="sonoff-snzb-02d-zigbee-lcd-smart-temperature-humidity-sensor" domlink="peripheriques/6614-sonoff-capteur-de-temperature-et-d-humidite-zigbee-30-avec-ecran.html" affiliate="_DlxqGhv" %}

La sphère des modules Sonoff Zigbee s'agrandit de mois en mois, actuellement l'entreprise développe plusieurs controlleurs domotiques comme le ihost, zBbridge pro, [Nspanel pro]({% post_url /fr/2023-03-10-deballage-test-et-installation-sonoff-nspanel-pro %}). On sent que l'entreprise créé tout un univers autour des modules de la marque. Alors c'est bien ça prouve que la société se porte bien par contre **c'est très dommage que ces produits ne soit pas développés multi-marques et là je parle du NSpanel Pro qui selon moi perd de sons sens**.

## Présentation du Sonoff {{ page.ref }}

Ce module présente très bien, il est livré dans un carton de couleur orange vif célèbre à la marque Sonoff, sans fioriture. À l'intérieur tu y trouveras le module emballé dasn une pochette film accompagnée de la notice et ... rien de plus 😄.

{% include doclink.html pdf="données-techniques-SNZB-02D-V1.0.pdf" title="Données techniques du module Sonoff SNZB-02D" %}
{% include doclink.html pdf="notice-utilisateurs-Sonoff-SNZB-02D-V1.0.pdf" title="Notice utilisateurs du module Sonoff SNZB-02D" %}

{% picture posts/{{ page.guid }}/presentation-module-zigbee-temperature-humidite-sonoff-snzb-02d-suite.png --alt suite des photos de présentation du module zigbee Sonoff {{ page.ref }} --img width="940" height="529" %}

Une fois en main le **produit présente très bien** la dalle LCD est grande, le poids est conséquent 78gr, probablement dûe aux aimants intégrés, l'affichage est claire, tu peux aussi y apercevoir la sortie d'air pour la sonde température/humidité.

{% picture posts/{{ page.guid }}/presentation-module-zigbee-temperature-humidite-sonoff-snzb-02d.png --alt présentation du module zigbee Sonoff {{ page.ref }} --img width="940" height="529" %}

Le module est accompagné d'un support mural recouvert d'un double face **de la marque 3M**. Le module {{ page.ref }} et le support sont magnétiques, l'emboitement se fait par le haut et s'oriente automatiquement dans le support. **Vraiment très bien pensé.** Important les aimants se trouvent côté module, **du coup tu pourras aussi le poser contre une surface métallique de type réfrigérateur**.

![image animée du support mural aimanté du module zigbe sonoff {{page.ref}}]({{ site.baseurl}}/assets/images/posts/{{ page.guid }}/Sonoff SNZB-02D-237.webp{{ cachebuster }}){: width="237" height="240"}

**Pour finir** le module Sonoff {{page.ref}} dispose d'un support de table qui est orientable et intégré à l'ensemble.

{% picture posts/{{ page.guid }}/divers-support-module-zigbee-temperature-humidite-sonoff-snzb-02d.png --alt image présentant les différents supports du module zigbee Sonoff {{ page.ref }} --img width="940" height="428" %}

Passons à l'affichage, **il présente très très bien**, d'une diagonale supérieur à 7cm, rien que ça, avant même de l'avoir démonté j'ai senti que l'écran LCD du Sonoff {{page.ref}} était de qualité.

{% picture posts/{{ page.guid }}/qualité-ecran-lcd-module-zigbee-temperature-humidite-sonoff-snzb-02d.png --alt côté écran lcd du module zigbee Sonoff {{ page.ref }} --img width="940" height="529" %}

**L'affichage est très lisible, même quand la surface est réfléchi par la lumière ambiante.**

On y retrouve la température paramétrable en °C ou °F, ainsi que la teneur en humidité de l'air exprimée en %, mais pas que:

1. le voyant d'appairage au réseau ( une fois appairé il restera visible )
2. le niveau des batteries
3. les voyants humidité ou sécheresse ( en fonction du taux d'humidité )
4. les voyants fraicheurs ou chaleurs ( en fonction de la température )

**À SAVOIR:**

La température varie par pallier de +/- 0,2°
L'humidité varie par pallier de 2%

{% picture posts/{{ page.guid }}/affichage-info-lcd-module-zigbee-temperature-humidite-sonoff-snzb-02d-suite.png --alt affichage des infos du module zigbee Sonoff {{ page.ref }} --img width="940" height="529" %}

L'ensemble se démonte facilement tu y trouveras un circuit imprimé embarquant une sonde de **température et humidité modèle SH60 AD1AFU** fabriqué par Sensirion, une société Suisse, une puce Zigbee **Silabs EFR32MG22** (identique au zbmini extrême) et les aimants sur le contre couvercle.

> Le circuit est bien réalisé.

{% picture posts/{{ page.guid }}/module-zigbee-temperature-humidite-sonoff-snzb-02d-circuit-imprime-silabs-efr32mg22.png --alt circuit imprimé du module zigbee Sonoff {{ page.ref }} puce zigee Silabs EFR32MG22 --img width="940" height="529" %}

## Compatibilité

- **SONOFF:** ZBBridge, ZBBridge-P, iHost，ZBDongle-P，ZBDongle-E
- **Amazon:** Echo Plus 2nd, Echo 4th Gen, Echo Show 2nd

### Intégration dans ZHA (HomeAssistant)

L'intégration dans ZHA ne pose aucun Soucis et tant mieux.

> L'inclusion se fait en restant appuyé 5 secondes sur le bouton dédié

{% picture posts/{{ page.guid }}/integration-zha-homeassistant-module-zigbee-temperature-humidite-sonoff-snzb-02d.png --alt intégration dans ZHA et HomeAssistant avec le module Zigbee du module zigbee Sonoff {{ page.ref }} --img width="940" height="664" %}

### Intégration dans ZIGBEE2MQTT ( HA et Jeedom )

Dans Zigbee2mqtt même constat

{% picture posts/{{ page.guid }}/integration-zigbee2mqtt-module-zigbee-temperature-humidite-sonoff-snzb-02d.png --alt intégration dans Zigbee2mqtt avec le module Zigbee du module zigbee Sonoff {{ page.ref }} --img width="940" height="1050" %}

Tu noteras tout de même que dans Z2M il est facile de calibrer les sondes. La sonde de température n'a pas besoin d'être calibrée, **La mesure de l'humidité** doit être **compensée de 5 à 6% ce calibrage** est absolument nécessaire. Les utilisateurs de Zigbee2MQTT peuvent créer un décalage directement dans l'interface utilisateur, sous le menu Paramètres (spécifiques). Les utilisateurs de ZHA peuvent créer des modèles de capteurs avec le décalage.

{% picture posts/{{ page.guid }}/zigbee2mqtt-parametre-supplementaire-module-zigbee-temperature-humidite-sonoff-snzb-02d.png --alt paramètre supplémentaire des calibrations dans dans Zigbee2mqtt avec le module Zigbee du module zigbee Sonoff {{ page.ref }} --img width="940" height="252" %}

### Intégration dans JEEDOM (module zigbee)

Dans Jeedom avec le module zigbee l'intégration se fait aussi sans broncher, c'est top.

{% picture posts/{{ page.guid }}/integration-jeedom-module-zigbee-temperature-humidite-sonoff-snzb-02d.png --alt intégration dans Jeedom avec le module Zigbee du module zigbee Sonoff {{ page.ref }} --img width="940" height="437" %}

## Caractéristiques Techniques

{% include doclink.html pdf="données-techniques-SNZB-02D-V1.0.pdf" title="Données techniques du module Sonoff SNZB-02D" %}
{% include doclink.html pdf="notice-utilisateurs-Sonoff-SNZB-02D-V1.0.pdf" title="Notice utilisateurs du module Sonoff SNZB-02D" %}

{% picture posts/{{ page.guid }}/Sonoff-SNZB-2D-size-dimension.png --alt Dimension du module zigbee Sonoff {{ page.ref }} --img width="940" height="441" %}

|Marque|SONOFF|
|------|------|
|Modèle|SNZB-02D|
|Couleur|Blanc|
|Batterie|CR2450(3V)|
|Dimensions LCD|Diagonale 7,11cm|
|Dimensions hors tout|59.5x62.5x18.5mm|
|Autonomie de la batterie|2 ans|
|Connexions sans fil|Zigbee 3.0|
|Humidité de travail|5-95 % HR (sans condensation)|
|Température de travail|-5℃~40℃/14℉~140℉|
|Matériaux du boîtier|PC+LCD|

{% include product-embed.html guid="2171" %}

## **les + du produit** {{ page.ref }}
{: .blue}
- la qualité de fabrication
- certifié zigbee 3.0
- les nombreuses compatibilitées
- à peine plus cher q'un module sans écran
- les divers support

## **les - du produit** {{ page.ref }}
{: .red}

- reprise de l'étalonnage de l'humidité

{% include product-embed.html guid="2171" %}

## Conclusion

Encore une fois Sonoff signe fort, même très fort car ce module **coûte un peu plus de 1€ plus cher que son grand frêre sans écran !**, tu le trouveras à moins de 12€ chez ton marchand préféré, autant dire que c'est une pépite, si tu cherches un module avec écran LCD alors autant te dire que le Sonoff {{ page.ref }} est, ce que tu cherches.

