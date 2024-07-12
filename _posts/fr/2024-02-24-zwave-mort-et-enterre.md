---
guid: 111
title: "Z-wave mort et enterré"
description: "Depuis l'arrivée du protocole Zigbee sur le marché, le protocole Z-wave semble être au point mort, faisons le point sur cette situation."
ref: "z-wave"
layout: post
authors: Nico
date: 2024-02-24 20:47
last_modified_at: 
categories: [News, Domotique, Z-wave]
tags: []
image: 'z-wave-est-mort-pourquoi.png'
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
rating:  
sourcelink:
  - https://community.home-assistant.io/t/how-to-create-association-with-zwave-js-or-zwave-js-ui/621072/2
  - https://www.home-assistant.io/blog/2024/02/15/nabu-casa-joins-z-wave-alliance/
  - https://products.z-wavealliance.org/regions/1/categories/25/products
  - https://community.hubitat.com/t/is-zwave-a-dying-technology/112627
  - https://www.silabs.com/wireless/z-wave/introduction-to-z-wave-800-series
  - https://community.silabs.com/s/share/a5U8Y000000bwgaUAA/zwave-500-vs-700-vs-800-why-use-the-new-800-series-for-smart-home-devices?language=en_US
  - https://blog.domadoo.fr/91814-silicon-labs-annonce-puce-z-wave-serie-800/
  - https://www.domadoo.fr/fr/peripheriques/6151-capteur-d-ouverture-portefenetre-z-wave-800-zse41-zooz-853478006414.html
  - https://www.security.org/home-security-systems/z-wave-vs-zigbee/
  - https://z-wavealliance.org/news_p/z-wave-alliance-announces-z-wave-source-code-project-is-complete-now-open-and-widely-available-to-members/
---
J'avoue, **le titre est un peu gros**, il s'agit tout de même de faire une rétrospection objective de ce protocole **qui semble disparaître des radars des revendeurs Européens.** Depuis l'arrivée du Zigbee avec son protocole libre, des tarifs prohibitifs des modules Z-wave, et une consommation de piles élevées **ont laissé place à l'abandon de celui-ci**. Pourtant tout **n'est pas si noir**, *alors le Z-wave est-il proche de l'extinction du moins en Europe!*

## Historique du Z-wave

- En 2001 la [société Zen-sys](http://www.zen-sys.com/){: target="_blank"} lance la commercialisation du protocole Z-wave
- En 2008 Sigma Designs rachète le protocole Z-wave
- Entre 2008 et 2011 seul Sigma designs fabrique les puces mais n'arrive pas à tenir le cadencement vu la demande de plus en plus forte
- En 2011 Sigma Designs s'unie avec Mitsumi pour la fabriction des puces z-wave.
- [En 2018 Silicon labs rachète la société Sigma-designs](https://news.silabs.com/2018-04-18-Silicon-Labs-Completes-Acquisition-of-Sigma-Designs-Z-Wave-Business){: target="_blank"}

## Évolution du Z-wave depuis 2001

Depuis ses débuts le protocole a connu 3 évolutions majeures. Figure-toi que je possède sur mon réseau privé encore un maillage avec des modules en z-wave 400 contrôlés par une clé Aeotec zen-stick gen5 permettant de controller des modules incorporant la série 500.

**La série Z-Wave 500, lancée en 2013**, a été développée comme une mise à niveau de la série Z-Wave 400. Les modules de la série Z-Wave 500 ont fourni aux appareils compatibles Z-Wave Plus *une portée sans fil étendue, un débit de données plus élevé, une plus grande capacité de mémoire et une consommation d'énergie inférieure par rapport à son prédécesseur*. 
**La série Z-Wave 700 a été publiée en 2019**. Par rapport à la série 500, les systèmes sur puce (SoC) et les modules de la série 700 ont apporté des améliorations significatives telles qu'une vitesse sans fil plus rapide, **une durée de vie prolongée de la batterie** et une portée sans fil allant jusqu'à 1,6 km.
**La série Z-Wave 800 lancée en 2021** est la version la plus avancée de Z-Wave à ce jour. Les SoC et modules Z-Wave 800 font un bond en avant significatif avec une **consommation d'énergie extrêmement faible**, plus de *10 ans d'autonomie* de pile bouton, une portée sans fil supérieure à 2,4 km, une sécurité robuste et bien plus encore.

## Pourquoi en parler maintenant

Comme bon nombre d'entre vous, [j'ai lu l'article paru sur le blog Home Assistant du 15 février qui annonce cette alliance](https://www.home-assistant.io/blog/2024/02/15/nabu-casa-joins-z-wave-alliance/){: target="_blank"}, à travers ce sujet Home assistant souhaite renforcer sa position vis à vis du protocole z-wave afin de proposer **à ses utilisateurs tous les choix possibles sur les protocoles et la domotique**. Le fait de certifier [z-wave JS](https://github.com/zwave-js){: target="_blank"} relancerai peut être le consortium et **les fabriquants à reproposer et fabriquer à nouveau un nombre conséquent de modules.** Car depuis l'arrivée du Zigbee, le nombre de modules proposés et en nette recul depuis plusieurs années.

{% picture posts/{{ page.guid }}/nabucasa-consortium-zwave-alliance.png --alt nabucasa et home assistant rejoignent l'alliance z-wave afin de lancer le processus de certification de z-wave JS --img width="940" height="529" %}

## Quelques Chiffres

Il existe plus de **4 384 produits Z-Wave interopérables** dans le monde et plus de 94 millions de produits Z-Wave ont été vendus depuis 2001. Tous fonctionnent ensemble quelle que soit la marque, car ils sont tous basés sur le protocole **propriétaire** Z-Wave. 
Parcours l'outil de recherche de produits pour voir ce que Z-Wave peut faire pour toi [liste modules Europe Z-wave](https://products.z-wavealliance.org/regions/1/categories/25/products){: target="_blank"}

## **les points positifs** du {{ page.ref }}
{: .blue}

Selon moi le **maillage z-wave est plus sûre et stable que le maillage Zigbee** et ce depuis la série 400. Les points qui me rebutait le plus avec z-wave et d'ailleurs c'est pour celà que je suis passé au zigbee, ont été grandement améliorés et renforcés avec la série 800 du protocole.
- réseau renforcé
- distance améliorée
- très faible consommation des modules à piles
- rétrocompatible entre les différentes séries de puces

Très **gros point positif** pour le protocole est le faite q'il soit propriétaire. Tous les modules sont interopérables. Du coup **z-wave associations** qui est l'équivalent du **Zigbee Bindings** ( Pour ceux qui ne savent pas ce que c'est, ça permet de lier deux modules directement entre eux et de fonctionner ensemble sans passer par sa box domotique.) est utilisable entre tous les modules il suffit de paramétrer les fonctions de chaque module. **Exemple:** faire fonctionner un interrupteur sur pile avec un interrupteur filaire.

> C'est franchement super intéressant.

## **le point négatif** du {{ page.ref }}
{: .red}

Selon moi il y a un seul point négatif qui mène le z-wave à sa perte, **c'est à nouveau la pleine propriété** de Silicon labs à fabriquer les modules. Ce qui rend les fabriquants de modules dépendants des tarifs de productions et des délais de **fabrications pratiqués par Silicon Labs qui impose un certain Monopole.**

**Mais bonne nouvelle** c'est en train de changer **avec l'arrivée de la série 800**, Silicon Labs annonce des tarifs de productions et délais de fabrications réduits, ce qui fait baisser les prix. 

**Comme exemple** j'ai pris la **marque Shelly** qui a d'ailleurs racheté Qubino, en micromodule double relais jusqu'à la série 700 ce type de modules était vendu aux alentours de 50€ maintenant **tu les trouves à 34€** quasi identique au tarif pratiqué pour un module zigbee

{% include product-embed.html image="shelly-qubino-micromodule-commutateur-double-z-wave-800-shelly-wav.png" title="Micromodule double relais z-wave 800" brand="Shelly à 34€" description="Contrôlez à distance deux appareils électriques indépendants (par exemple des lumières) et surveillez leur consommation électrique séparément et au total." domlink="actionneurs-variateurs/6786-shelly-qubino-micromodule-commutateur-double-z-wave-800-shelly-wav-3800235269015.html" %}

**Second exemple** les capteurs d'ouverture de porte sont passés de 40€ en série 700 à **28€ pour la série 800** à titre d'exemple on [trouve des aqara zigbee 3.0 à 20€](https://www.domadoo.fr/fr/detecteurs/6707-detecteur-d-ouverture-portefenetre-zigbee-30-door-and-window-sensor-t1-aqara.html?domid=39){: target="_blank"}, seulement 8€ de moins, on dirait que le pari est gagné.

{% include product-embed.html image="capteur-d-ouverture-portefenetre-z-wave-800-zse41-zooz.png" title="Capteur ouverture porte Zooz z-wave 800" brand="Zooz à 28€" description="Surveillez votre porte ou fenêtre avec le capteur d'ouverture/fermeture ZSE41 de Zooz !" domlink="peripheriques/6151-capteur-d-ouverture-portefenetre-z-wave-800-zse41-zooz-853478006414.html" %}

## Silicon Labs relance le Z-wave

Avec **deux nouvelles puces ZG23 and ZGM230S** et l'arrivée de la **toute dernière puce ZG28** Silicon Labs lance la série 800 qui selon eux à de nombreux avantages et qui pourrait remettre le z-wave sur le devant de la scène:

|**Durée de vie de la batterie plus longue**|La série Z-Wave 800 réduit le courant de transmission jusqu'à 42 % et réduit le courant du récepteur jusqu'à 600 % par rapport au matériel Z-Wave 700, offrant jusqu'à 10 ans d'autonomie avec une pile bouton.|
|**Portée sans fil étendue**|La série Z-Wave 800 peut atteindre une portée allant jusqu'à 1,5 miles, soit une augmentation de 50 % par rapport à la série Z-Wave 700, offrant ainsi une connectivité sans fil bien au-delà de la cour.|
|**Sécurité S2 intégrée**|Protège contre les menaces de sécurité et réduit les investissements des fabricants d'appareils en réduisant la conception et l'expertise en matière de sécurité.|
|**Coffre-fort sécurisé**|La suite de sécurité de pointe de Silicon Lab permet une connectivité sans fil sécurisée inférieure au GHz, protégeant les produits connectés à l'IoT, les clients, les données, la propriété intellectuelle et les services backend contre l'évolution des menaces de sécurité.|
|**Développement continu de la sécurité**|Silicon Labs est leader sur le marché du développement de la sécurité IoT, réduisant les risques et les investissements des fabricants d'appareils tout en garantissant la conformité aux dernières réglementations de sécurité IoT.|
|**Protection de la marque**|Les meilleures spécifications de produit de leur catégorie, combinées au matériel Silicon Labs, permettent une meilleure expérience de produit pour la maison intelligente.|
|**Traitement plus rapide**|Grâce au microprocesseur ARM Cortex-M33 à 78 MHz.|
|**LESENSE (+ACMP)**|Permet la détection d'un interrupteur de faible consommation et l'amélioration de la durée de vie de la batterie associée.|
|**Coût de développement et délai de commercialisation réduits**|Permet un accès plus facile au marché grâce aux solutions facilement disponibles avec le module ZGM230S.|

[Avantage de la série 800](https://www.silabs.com/wireless/z-wave/introduction-to-z-wave-800-series){: target="_blank"}


## Conclusion

Z-wave était un protocole intéressant et qui s'était grandement développé dans les années 2000. Avec l'arrivée du Zigbee, Z-wave a sombré, **mais depuis le rachat de Silicon Labs en 2018** et la création de deux nouvelles puces série 800 pourrait à nouveau donner un coup de fouet à ce protocole. Le fait que Nabu Casa renforce les liens avec ce protocole démontre la force de Silicon Labs à le remettre sur le devant de la scène. 

> **Alors pour répondre à la fameuse question:** Oui le protocole z-wave a failli mourir et non il n'est pas mort et enterré.
