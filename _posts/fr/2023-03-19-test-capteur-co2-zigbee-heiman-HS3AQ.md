---
guid: 55
title: "Test du Capteur Co2 Heiman HS3AQ"
description: "test du capteur de température, humidité, Co2 Heiman Zigbee et intégration dans homeassistant"
layout: post
author: Nico
date: 2023-03-19 16:42
last_modified_at: 2023-06-03 11:16
categories: [Tests, Zigbee, Home-Assistant, Jeedom]
tags: []
image: 'test-capteur-co2-zigbee-heiman-HS3AQ.png'
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
addViews: 87
comments: true
rating: 4.2
sourcelink:
  - https://www.heimantech.com/product/index.php?type=detail&id=106
redirect_from:
  - /fr/blog/test-capteur-co2-zigbee-heiman-HSAQ
---

Aujourd'hui je te présente le capteur de Co2, d'humidité et de température de la marque Heiman HS3AQ, un capteur moderne avec effet mirroir, l'ensemble fonctionnant sous le protocole zigbee 3.0.

{% include product-embed.html guid="2153" %}

Comme tu peux le voir sur les différentes photos le produit est très bien fini, l'effet mirroir est présent selon la lumière envirronnante celà peut même devenir gênant. Il faudra absolument le placer dans un endroit ou l'éclairage est faible sinon à part voir ton reflet des beaux jours, tu n'arriveras pas à lire les infos.

## Appairage

L'appairage se fait en maintenant enfoncé les touches + et - durant 5 secondes, suite à ça une indication online apparait il suffira de rappuyer sur la touche + pour activer le décompte d'une minutes pour intégrer le module dans l'assistant domotique.

{% picture posts/{{ page.guid }}/heiman-HS3AQ-rendu-miroir-et-appairage-zigbee.png --alt contenu du carton, effet miroir et appairage heiman HS3AQ --img width="940" height="529" %}

La qualité d'affichage est top, **la barre verte indique la qualité de l'air, orange c'est moyen et rouge médiocre**, je trouve cette indication bien pensé. Tu pourras même ajuster les valeurs dans la page de configuration du CO2, *point négatif la sonde de capture du CO2 ne fonctionnera que 10 ans au maximum*. Il est aussi possible de désactiver le son de l'alarme Co2. On appréciera grandement la mesure d'humidité et de la température. 
> Le module intègre une batterie de secours, celle-ci tient bien 12 heures.

{% picture posts/{{ page.guid }}/capture-ecran-heiman-HS3AQ-capteur-co2-humidite-temperature-zigbee.png --alt fonctions température humidité heure et co2 du heiman HS3AQ --img width="940" height="529" %}

{% include doclink.html pdf="manuel-utilisateur-sonde-qualite-air-heiman-hs3aq.pdf" title="manuel utilisateur sonde qualité de l'air zigbee heiman HS3AQ" %}

# Intégration dans Jeedom

J'ai intégré le module dans Jeedom Luna avec le plugin zigbee, le module Heiman HS3AQ est reconnu, les données Co2, humidité et température, sont remontés, **l'heure se cale sur ton système domotique**, cependant point négatif *il manque l'information niveau de batterie*

{% picture posts/{{ page.guid }}/integration-heiman-HS3AQ-jeedom-zigbee-3.0.png --alt intégration du capteur de CO2 Heiman HS3AQ sur jeedom avec le plugin zigbee --img width="940" height="276" %}

{% picture posts/{{ page.guid }}/integration-heiman-HS3AQ-jeedom-commande-zigbee-3.0.png --alt intégration du capteur de CO2 Heiman HS3AQ sur jeedom avec le plugin zigbee montre les commandes disponibles --img width="940" height="276" %}

# Intégration dans Homeassistant

J'ai aussi intégré le module Heiman HS3AQ dans Homeassistant avec le Plugin Zigbee2mqtt, il est aussi reconnu, les données Co2, humidité, température et **batterie**, remmontent correctement. *Mais pour l'instant l'heure ne se cale pas sur le système il faudra le paramétrer manuellement*. Je vais faire une remontée sur le référenciel github de Zigbee2mqtt

{% picture posts/{{ page.guid }}/integration-heiman-HS3AQ-homeassistant-zigbee-3.0.png --alt intégration du capteur de CO2 Heiman HS3AQ sur Homeassistant avec le plugin zigbee2mqtt --img width="940" height="692" %}

{% picture posts/{{ page.guid }}/integration-heiman-HS3AQ-homeassistant-expose-zigbee-3.0.png --alt intégration du capteur de CO2 Heiman HS3AQ sur Homeassistant avec le plugin zigbee2mqtt montre les commandes disponibles --img width="940" height="388" %}

**Le module affiche:**
- le niveau de CO2 ainsi qu'un voyant associé sous forme de barre horizontal qui change de couleur
- la température ambiante
- l'humidité ambiante
- l'heure
- le niveau de Batterie

# Caractéristiques techniques

|Alimentation|Adaptateur secteur Entrée : AC 100~240V Sortie DC 5V/1A Micro-USB|
|Batterie intégrée|batterie lithium-ion|
|Type de capteur de CO2|capteur infrarouge non dispersif (NDIR)|
|Durée de vie du capteur de CO2|max. 10 ans|
|Protocole sans fil|Zigbee 3.0|
|Distance de communication|100 mètres|
|Température de fonctionnement|-10°C à 40°C|
|Humidité|10 % à 95 % (sans condensation)|
|Lieu d'installation|mur ou support de bureau|
|Plage de mesure du CO2|400-5000 ppm|
|Précision CO2|100 ppm ou 10 % des valeurs mesurées, selon la valeur la plus élevée|
|Qualité de l'air - Concentration de CO2|Bon <600ppm<br>Normal 600~1200ppm<br>Médiocre >1200ppm<br>Les valeurs peuvent être ajustées sur la page de configuration du CO2|
|Déclenchement d'alarme|Faible >1200ppm<br>peut être ajusté sur la page de configuration du CO2|
|Dimensions|90 x 90 x 26 mm (sans support)|

# **les + du produit**
{: .blue}
- qualité du produit
- mise en avant de la mesure du Co2
- désactivation de l'alarme sonore du CO2
- Appairage clair
- Compatible Box Domotique varié
- le module agit comme routeur ( répète le signal zigbee )

# **les - du produit**
{: .red}
- absences de certaines remontées d'infos dans les plugins
- dalle mirroir un peut trop prononcé
- son prix ~60€
- Garantie de fonctionnement de la sonde CO2

{% include product-embed.html guid="2153" %}

# Conclusion
C'est un produit bien fini et qui sera indispensable pour contrôler la qualité de l'air dans ton logement, à mon sens je trouve dommage de devoir laisser brancher continuellement sur le secteur ce module, pour le prix Heiman aurait pu prévoir une batterie à grande capacité.