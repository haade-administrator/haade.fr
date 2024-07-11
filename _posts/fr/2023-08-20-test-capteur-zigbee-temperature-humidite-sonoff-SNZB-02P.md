---
guid: 81
title: "Test nouveau capteur de température et humidité Sonoff SNZB-02P"
description: "Test du nouveau dapteur de température et humidité à base de puce Silabs EFR32MG22 au design retravaillé et à une qualité irréprochable aux couleurs orange pétante de la marque Sonoff, rien à voir avec le grand frère SNZB-02, sonoff améliore son image de marque chinoise premium"
ref: "SNZB-02P"
layout: post
authors: Nico
date: 2023-09-04 14:59
last_modified_at: 
categories: [Tests, Zigbee]
tags: []
image: 'test-nouveau-capteur-temperature-humidite-sonoff-snzb-02p-zigbee-qualite-design-ameliore.png'
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
rating: 4.9
sourcelink:
  - https://itead.cc/product/sonoff-zigbee-temperature-and-humidity-sensor-snzb-02p/ref/122/
  - https://s.click.aliexpress.com/e/_DkB333v
  - https://sonoff.tech/product-document/gateway-and-sensors-doc/snzb-02p-doc/
---

Voilà plus de deux semaines que je n'ai pas publié d'articles, congés d'été oblige ... la coupure à fait du bien. Désormais nous sommes déjà début Septembre et pour cette rentrée je te propose en test un nouveau module Sonoff {{ page.ref }} capteur de température et d'humidité fonctionnant avec une puce Silabs EFR32MG22.

Si tu as lu les **derniers articles sur les produits de la marque Sonoff** tu as pu te rendre compte de **la montée en gamme** de la marque, pour ce produit c'est encore plus [flagrant si on le compare avec on grand frère le Sonoff SNZB-02]({% post_url /fr/2021-09-10-test-capteur-temperature-et-humidite-sonoff-snzb-02 %})

## Liste des articles Cognitifs

- [Test du module SNZB-02D]({% post_url /fr/2023-08-07-test-module-zigbee-sonoff-snzb-02d-temperature-humidite-digital %})
- [Test capteur température et humidité Sonoff SNZB-02]({% post_url /fr/2021-09-10-test-capteur-temperature-et-humidite-sonoff-snzb-02 %})
- [Test capteur porte Sonoff SNZB-04]({% post_url /fr/2021-09-20-test-capteur-porte-zigbee-3-0-sonoff-snzb-04 %})
- [Test interrupteur ZBMINI-L2 Extrême]({% post_url /fr/2023-03-06-test-sonoff-zbminil2-extreme-zigbee-end-device %})
- [Test Nspanel Pro]({% post_url /fr/2023-03-10-deballage-test-et-installation-sonoff-nspanel-pro %})
- [Zbdongle-P vs Zbdongle-E]({% post_url /fr/2022-11-20-zb-dongle-p-vs-zb-dongle-e-zigbee-sonoff %})

{% include product-embed.html guid="2172" %}

**tu le trouveras aussi au même prix directement** [chez Itead](https://itead.cc/product/sonoff-zigbee-temperature-and-humidity-sensor-snzb-02p/ref/122/){: target="_blank"}

Avec ce nouveau capteur de température et d'humidité Sonoff {{ page.ref }}, la qualité se rapproche énormément des produits chinois de la Marque Aqara, en **signant ses produits Zigbee du célèbre orange vif**.

Ce capteur s'accompagne d'une petite coquille métallique **orange vif grenaillé** que tu pourras fixer aisément au mur, et qui accueillera par magnétisme le {{ page.ref }}. **Je dois dire que c'est très réussi**.

## Contenu de la boîte

1. un module zigbee Sonoff {{ page.ref }}
2. un support métallique orange
3. une notice explicative
4. une visse
5. un double face 3M

{% picture posts/{{ page.guid }}/contenu-capteur-temperature-humidite-sonoff-snzb-02p-zigbee.png --alt contenu du colis du capteur de température et humidité Sonoff {{ page.ref }} --img width="940" height="428" %}

Sur les photos ci dessous tu pourras te rendre compte de la taille et de la qualité de fabrication du module. Avec un bouton d'appairage et une ouverture pour la sonde température/humidité.

{% picture posts/{{ page.guid }}/differente-face-et-taille-sonoff-snzb-02P-nouveautee.png --alt plan de coupe du nouveau capteur de température et humidité Sonoff {{ page.ref }} --img width="940" height="428" %}

Tu pourras aisément fixer au mur le module soit par double face ou par visse.

> Le support magnétique fonctionne correctement, toutefois le module ne se centre pas de lui même si tu le désaxe trop du support.

{% picture posts/{{ page.guid }}/image-fixation-murale-sonoff-snzb-02p.png --alt type de fixation murale du capteur de température et humidité Sonoff {{ page.ref }} --img width="940" height="980" %}

> Étonnant le module intègre une **pile CR2477** assez rare en utilisation mais qui permet à Sonoff de garantir la **durée de fonctionnement à 4 ans** rien que ça ?

{% picture posts/{{ page.guid }}/boitier-sonoff-snzb-02p-interieur-pile-magnet.png --alt ouverture du module Sonoff snzb-02p et pile peu commune cr2477 {{ page.ref }} --img width="940" height="529" %}


## Intégration dans Zigbee2mqtt ( ha et jeedom )

L'intégration dans Z2M se fait sans soucis et le module est bien reconnu et déjà inclus dans la base Z2M, c'est une bonne chose mais ça ne m'étonne pas Sonoff est tout de même réputé.

{% picture posts/{{ page.guid }}/integration-apropos-zigbee2mqtt-sonoff-snzb-02p.png --alt intégration du module sonoff zigbee efr322 {{ page.ref }} dans zigbee2mqtt à propos --img width="940" height="731" %}

> Toutes les infos remontent correctement. Ne t'inquiète pas pour la batterie **elle fonctionne** aussi seulement j'ai pris la capture trop rapidement après l'intégration.

{% picture posts/{{ page.guid }}/remonte-information-expose-zigbee2mqtt-sonoff-snzb-02p.png --alt exposition des commandes du module sonoff zigbee efr32mg22 {{ page.ref }} dans zigbee2mqtt --img width="940" height="475" %}

**Zigbee2Mqtt permet de faire remonter 6 données:**

1. le niveau de la batterie
2. le relevé de température
3. le relevé d'humidité
4. indication de batterie vide
5. la tension de la batterie
6. la qualité du lien du maillage

## Comparatifs des mesures du {{ page.ref }}

J'ai voulu tester et comparer les mesures du Sonoff SNZB-02P au [module SNZB-02D ]({% post_url /fr/2023-08-07-test-module-zigbee-sonoff-snzb-02d-temperature-humidite-digital %}) et [Xiaomi Aqara VOCKQJK11LM]({% post_url /fr/2023-07-06-test-aqara-moniteur-qualite-air-AAQS-S01-zigbee3 %})

En regardant le **gif animé** ci-dessous tu pourras te rendre compte que les données du SNZB-02D et {{ page.ref }} sont quasiment similaire. **Mais il y a une différence de relevé d'humidité** avec le xiaomi. Il faudra probablement étalloner les sonoff, la différence **d'humidité n'est que de 5%.**

{% picture posts/{{ page.guid }}/comparatifs-donnees-temperature-sonoff-snzb-02P.png --alt comparatif des mesures du sonoff snzb-02d, {{ page.ref }} et du xiaomi Aqara VOCKQJK11LM --img width="940" height="529" %}

|contrôle|SNZB-02D|SNZB-02P|Aqara AAQS-S01|
|--------|--------|--------|--------------|
|**température**|25.6|25.4|25.91|
|**humidité**|43.4|42.6|47.41|

![Comparatif relevé de température et d'humidité Sonoff SNZB-02D, SNZB-02P et Aqara VOCKQJK11LM]({{ site.baseurl}}/assets/images/posts/{{ page.guid }}/comparatif-mesure-temperature-humidite-sonoff-snzb-02P.webp{{ cachebuster }}){: width="940" height="884" class="lazyload pictaninpost"}

## Caractéristiques techniques

{% picture posts/{{ page.guid }}/caracteristique-technique-sonoff-snzb-02p.png --alt caracteristique technique sonoff {{ page.ref }} --img width="940" height="316" %}

## Notice d'utilisation {{ page.ref }}

{% include doclink.html pdf="manuel-utilisation-sonoff-SNZB-02P-V1.0.pdf" title="manuel utilisation sonoff snzb-02p" %}

## **les + du produit** {{ page.ref }}
{: .blue}
- la qualité de fabrication
- le prix **10€**
- certifié zigbee 3.0
- les nombreuses compatibilitées
- compatibilité ( ZHA et Zigbee2mqtt et Ewelink ) 


## **les - du produit** {{ page.ref }}
{: .red}

- reprise de l'étalonnage de l'humidité
- la pile peu commune

{% include product-embed.html image="sonoff-capteur-de-temperature-et-d-humidite-zigbee-30-avec-support-snzb-02p.jpg" title="Capteur Sonoff SNZB-02P" brand="Sonoff" description="Le capteur de température et d'humidité SONOFF SNZB-02P vous informe de la température et l'humidité." domlink="chauffage-clim/6732-sonoff-capteur-de-temperature-et-d-humidite-zigbee-30-avec-support-snzb-02p.html" iteadlink="sonoff-zigbee-temperature-and-humidity-sensor-snzb-02p" %}

## Conclusion

L'évolution des modules Sonoff **mérite le détour** et ce contrôleur de température et d'humidité ne déroge pas à la règle tu peux foncer et l'acheter actuellement dispo sur les plateformes [Domadoo](https://www.domadoo.fr/fr/chauffage-clim/6732-sonoff-capteur-de-temperature-et-d-humidite-zigbee-30-avec-support-snzb-02p.html){: target="_blank"} et [Itead](https://itead.cc/product/sonoff-zigbee-temperature-and-humidity-sensor-snzb-02p/ref/122/){: target="_blank"}.
