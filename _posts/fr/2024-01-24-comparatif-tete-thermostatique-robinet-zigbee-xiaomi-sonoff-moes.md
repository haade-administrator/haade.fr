---
guid: 106
title: "Comparatif test thermostatique Zigbee"
description: "Présentation de 3 têtes thermostatiques Zigbee Xiaomi Aqara E1, Sonoff TRVZB et Moes ZTRV-BY-100, un comparatif pour savoir quel est le meilleur robinet du contest"
ref: ""
layout: post
author: Nico
date: 2024-01-25 00:05
last_modified_at: 
categories: [Tests, Zigbee, Domotique]
tags: []
image: 'comparatif-tete-thermostatique-xiaomi-sonoff-moes-zigbee-1.png'
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
---

Depuis l'année dernière le gouvernement nous conseille de chauffer **notre habitat à 19°C** par soucis d'économies d'énergies. Plus récent encore une subvention est proposée, et comme c'est souvent le cas pour en bénéficier il faut que ce soit posé par un professionnel. Malheureusement ce type de pose est souvent honéreuse, en attendant je te propose un tuto sur le fonctionnement de 3 robinets thermostatiques au protocole zigbee.

[Une aide financière pour installer un thermostat connecté et réduire vos dépenses en énergie](https://www.service-public.fr/particuliers/actualites/A16968){: target="_blank"}

Ce test a pour but de **comparer 3 robinets thermostatiques et de t'aider à choisir selon tes besoins**. Ce comparatif a été mené sur une instance home-assistant et intégré par le biais de Zigbee2mqtt. 
> Dans un second temps je vais te parler du coût d'une telle installation avec box domotique.

## Prérequis

1. Comprendre la domotique
2. une box domotique Home-Assistant avec clé zigbee
3. un [micromodule contact-sec]({% post_url /fr/2023-07-31-test-nodon-module-zigbee-1-relais-multifonction-veritable-couteau-suisse %}) ( pour contrôler la chaudière )
4. des robinets thermostatiques Zigbee

## Comparatif

Le comparatif porte sur 3 têtes thermostatiques de fabrcation chinoise, l'intégration présentée est sur homeassistant. Alors quels sont ces robinets:
1. [Xiaomi Aqara E1](https://www.domadoo.fr/fr/peripheriques/6286-tete-thermostatique-zigbee-30-aqara-radiator-thermostat-e1-aqara-6970504217058.html?domid=39){: target="_blank"}
2. [Sonoff TRVZB](https://www.domadoo.fr/fr/chauffage-clim/6776-sonoff-tete-thermostatique-connectee-zigbee-30.html?domid=39){: target="_blank"}
3. [Moes ZTRV-BY-100](https://www.domadoo.fr/fr/peripheriques/5783-moes-tete-thermostatique-intelligente-zigbee-30-blanc.html?domid=39){: target="_blank"}

> Commençons par détailler ces divers produits

### Xiaomi Aqara E1 SRTS-A01

[Information officielle Xiaomi Aqara E1](https://www.aqara.com/en/product/radiator-thermostat-e1/){: target="_blank"}

#### Côté Matériel

Le Xiaomi Aqara E1 est de bonne facture, l'accès au changement de pile, la fonction onclick de l'écran, les paramétrages tout est bien pensé, c'est le seul a livrer la tête thermostatique avec des piles mais c'est aussi le plus cher. Côté installation comme tu peux le voir sur la photo il est livré avec des adaptateurs, une notice bref tout ce qu'il te faut. Perso je l'ai installé sans aucun adaptateur sur un radiateur traditionnel.
La lecture de l'ecran reste **exceptionnelle** cependant **il ne conviendra pas à toutes situations,** à l'usage je me rend compte que beaucoup de radiateurs peuvent avoir le robinet camouflé par un angle de mur et dans ce cas on ne pourrait lire convenablement les données.

{% picture posts/{{ page.guid }}/detail-robinet-tete-thermostatique-xiaomi-aqara-e1-zigbee-SRTS-A01.png --alt détail du robinet ou tête thermostatique Xiaomi Aqara Zigbee E1 SRTS-A01 --img width="940" height="529" %}

Le thermostat de radiateur peut être utilisé avec la majorité des radiateurs à eau tels que les radiateurs, les sèche-serviettes ou même les sols chauds. Il prend les lectures des capteurs Aqara externes et ajuste la puissance de chauffage en fonction.

{% include product-embed.html image="tete-thermostatique-zigbee-30-aqara-radiator-thermostat-e1-aqara.jpg" title="Xiaomi Aqara E1" brand="Aqara" description="Le thermostat de radiateur peut être utilisé avec la majorité des radiateurs à eau tels que les radiateurs, les sèche-serviettes ou même les sols chauds. Il prend les lectures des capteurs Aqara externes et ajuste la puissance de chauffage en fonction." domlink="peripheriques/6286-tete-thermostatique-zigbee-30-aqara-radiator-thermostat-e1-aqara-6970504217058.html" %}

#### CARACTERISTIQUES TECHNIQUES :

|Alimentation|3V ⎓ (2 × 1.5V AA) **INCLUSES**|
|Autonomie de la batterie|1 an|
|Communication|Zigbee 3.0 IEEE 802.15.4|
|Puissance de sortie maximale Zigbee|<10 dBm|
|Fréquence de fonctionnement Zigbee|2405-2480 MHz|
|Température de fonctionnement|0°C ~ 40°C|
|Humidité de fonctionnement|0 ~ 95 % HR, sans condensation|
|Dimensions|Ø 57×89 mm|
|Connexion filetée|M30 × 1,5 mm|

#### Côté fonctions

- Prise en charge du protocole Zigbee 3.0 et Matter
- **Lectures du capteur de température externe** 
- Compatible avec les écosystèmes les plus populaires et peut être contrôlé par la voix. 
- **Détection d'ouverture de fenêtre:**
- **Horaires intelligents configurables**:Les horaires peuvent être définis pour les périodes de temps souhaitées, telles que la nuit, et la transition entre elles sera fluide mais aussi rapide que possible.
- **Prise en charge du regroupement d'appareils:** Si vous avez plusieurs radiateurs dans une pièce, tous seront synchronisés de la manière la plus efficace en fonction de la température réelle de la pièce.
- **Affichage rétroéclairé coloré**: Par rapport à des produits similaires, l'écran LCD du thermostat de radiateur Aqara a un rétroéclairage, des angles de vision accrus, un contraste très élevé ainsi que des icônes nettes et colorées.
- Autonomie de 1 an: **piles fournis**
- **Geofencing et support multi-domicile:** Si vous avez plus d'une maison, vous pourrez configurer les automatisations indépendantes pour chacune d'elles et commencer à chauffer avant votre arrivée, de sorte que lorsque vous entrerez dans la maison, il fera déjà chaud.

{% include doclink.html pdf="manuel-utilisateur-xiaomi-aqara-srts-a01-e1.pdf" title="Manuel utilisateur Xiaomi Aqara SRTS-A01 E1" %}

#### Aqara E1 ,Home-Assistant et Zigbee2mqtt

Une multitude de fonctions s'offrent à nous, il y a tellement qu'on ne sait plus ou donner de la tête parmis les fonctions importantes on retrouve:

- la consigne de température
- la température en locale
- paramétrage d'un thermostat externe
- fonction fenêtre ouverte
- verrouillage enfant

> Le reste n'a que moins d'importance.

{%- include alert.html type="warning" text="Actuellement la tête thermostatique Aqara ne relève pas l'état de fonctionnement actuelle du module lorqu'il chauffe ou ne chauffe pas et c'est très embêtant car c'est une fonction primordiale pour le paramétrage des automatisations." %}

{% picture posts/{{ page.guid }}/fonctions-disponible-xiaomi-aqara-e1-zigbee2mqtt.png --alt fonctions disponibles dans zigbee2mqtt du robinet ou tête thermostatique Xiaomi Aqara Zigbee E1 SRTS-A01 --img width="940" height="1354" %}

> D'autre part une fonction qui aurait pu être intégrée est un mode boost au lancement de la chauffe comme c'est le cas avec le Moes ZTRV-BY-100, mais c'est une fonction que l'on peut implémenter avec une automatisation.

{% picture posts/{{ page.guid }}/fonctions-disponibles-cvc-aqara-e1-home-assistant.png --alt rendu visuel dans Home Assistant du robinet ou tête thermostatique Xiaomi Aqara Zigbee E1 SRTS-A01 --img width="940" height="403" %}


### Sonoff TRVZB

[Information officielle Sonoff TRVZB](https://sonoff.tech/product/home-appliances/trvzb/){: target="_blank"}

#### Côté Matériel

{% picture posts/{{ page.guid }}/detail-robinet-tete-thermostatique-sonoff-trvzb-zigbee.png --alt détail du robinet ou tête thermostatique Sonoff Zigbee TRVZB --img width="940" height="529" %}

{% include product-embed.html image="sonoff-tete-thermostatique-connectee-zigbee-30.jpg" title="Sonoff TRVZB" brand="Sonoff" description="La tête thermostatique connectée SONOFF Zigbee vous permet de contrôler la température plus précisément avec moins d'énergie, vous offrant ainsi une maison plus confortable." domlink="chauffage-clim/6776-sonoff-tete-thermostatique-connectee-zigbee-30.html" iteadlink="sonoff-zigbee-thermostatic-radiator-valve" affiliate="_DFB4iQZ" %}

{% picture posts/{{ page.guid }}/detail-sonoff-trvzb.png --alt détail du robinet ou tête thermostatique Sonoff Zigbee TRVZB --img width="940" height="480" %}

#### CARACTÉRISTIQUES TECHNIQUE

|Modèle|TRVZB|
|Couleur|Blanc|
|Connexion sans fil|Zigbee 3.0|
|Entrée|4,5 V⎓ 3 piles AA de 1,5 V **(NON INCLUSES)**|
|Poids net|154 g|
|Modèle de batterie|pile alcaline AA LR6 de 1,5 V|
|Matériau du boîtier|PC|
|Connexion filetée|M30x1,5 mm|
|Plage de réglage de la température|4 °C à 35 °C|
|Dimensions du produit|59,4 × 59,4 x 95 mm|

#### Côté fonction

- **Contrôle intelligent:** la vanne de radiateur thermostatique SONOFF Zigbee possède toutes les fonctions intelligentes, y compris la télécommande APP, la commande vocale, la programmation programmée, le contrôle de groupe, etc.
- **Détection de fenêtre ouverte:** éteint automatiquement le radiateur lors de la ventilation, ce qui permet d'éviter un gaspillage d'énergie inutile.
- **Compatible avec la plupart des fabricants de chauffage:** s'adapte aux vannes de radiateur « M30 x 1,5 mm » existantes, et les adaptateurs de vanne fournis dans l'emballage sont compatibles avec la plupart des systèmes et des fabricants de chauffage.
- **Complètement fonctionnel:** la sécurité enfants empêche les enfants de mal manipuler le radiateur. La protection contre le gel garantit que les tuyaux ne gèlent pas et n’éclatent pas, assurant ainsi la sécurité de votre maison. Prend en charge 6 mois de requête de données historiques, vous pouvez utiliser les données pour fournir des idées pour démarrer le chauffage plus tôt ou plus tard la prochaine fois. 

{% include doclink.html pdf="manuel-utilisateur-sonoff-trvzb.pdf" title="Manuel utilisateur Sonoff TRVZB" %}

#### Sonoff TRVZB, Home-assistant et Zigbee2mqtt

{% picture posts/{{ page.guid }}/fonctions-disponible-sonoff-trvzb-zigbee2mqtt.png --alt fonctions disponibles dans zigbee2mqtt du robinet ou tête thermostatique Sonoff TRVZB Zigbee --img width="940" height="1058" %}

{% picture posts/{{ page.guid }}/fonctions-disponibles-sonoff-trvzb-mode-cvc-home-assistant.png --alt rendu visuel dans Home Assistant du robinet ou tête thermostatique Sonoff TRVZB Zigbee --img width="802" height="417" %}

### Moes ZTRV-BY-100

[Information officielle Moes ZTRV-BY-100](https://moeshouse.com/products/moes-zigbee-trv-by100?variant=39307026497617){: target="_blank"}

On a clairement affaire à une marque blanche de la gamme Aqara, contrairement à Xiaomi ou Sonoff Moes commercialise des produits sous sa propre marque mais distribué en marque blanche pour d'autres marques et intégrant le protocole Tuya, tu pourras te rendre compte que la qualité de fabrcation est en deça de Xiaomi et Sonoff.

> Ne propose pas les mises à jours OTA

#### Côté Matériel

Le Moes ZTRV-BY-100 a un éclairage complet mais un peu trop puissant, mais ce n'est pas si grave, comme le Xiaomi Aqara E1 l'affichage est sur le côté et dans pas mal de cas il ne sera pas visible ou lisible.
Contrairement aux deux autre le Moes propose une interface tactile et non un bouton avec fonction clic/molette. Je trouve cette interface moins facile à prendre en main.
Aussi l'accès aux piles est le plus délicat des trois quand il n'est pas en place, une fois en place si tu pivotes légèrement le thermostat tu te retrouveras avec celui-ci dans la main. Dernier poit le verrou des piles est plus que cheap, franchement l'acier est aussi épais qu'une feuille de papier à cigarette et le loquet qu'un cure dent, si tu ne veux rien péter il faudra y aller avec délicatesse et ce n'est pas donné à tout le monde je sais de quoi je parle.

{% picture posts/{{ page.guid }}/detail-robinet-tete-thermostatique-moes-ZTRV-BY-100-zigbee.png --alt détail du robinet ou tête thermostatique Moes ZTRV-BY-100 --img width="940" height="529" %}

{% include product-embed.html image="moes-tete-thermostatique-intelligente-zigbee-30-blanc.jpg" title="Moes ZTRV-BY-100" brand="Moes" description="Nouveau mini design, courbe élégante avec une forme d'arc extrêmement gracieuse et une peinture en caoutchouc, se sentant comme une peau de bébé qui s'adapte bien à tous les styles de décoration." domlink="peripheriques/5783-moes-tete-thermostatique-intelligente-zigbee-30-blanc.html" affiliate="_DdrGFfB" %}

#### CARACTERISTIQUES TECHNIQUES :

|Alimentation|3 V, 2 piles AA **(NON INCLUSES)**|
|Couleur|Blanc|
|Technologie|Zigbee|
|Course maximale|4,5 mm|
|Précision|± 0,5°C|
|Régler la temp. Plage|5~45 °C|
|Affichage temp. Plage|0~70 °C|
|Température ambiante|0 ~ 45 °C|
|Humidité ambiante|5 ~ 95 % HR (sans condensation)|
|Température de stockage|-5 ~ 45 °C|
|Erreur de synchronisation|< 1 %|
|Classe de protection|IP20|
|Boutons|boutons tactiles capacitifs|
|Inclus dans le packaging|1x Thermostat de radiateur<br>1x Guide de l'utilisateur<br>1x Adaptateur RA<br>1x Adaptateur RAV<br>1x Adaptateur RAVL<br>1x Adaptateur Comap<br>1x T + A Herz Adaptateur<br>1x Adaptateur Herz|

#### Côté fonctions

#### Moes ZTRV-BY-100, Home-assistant et Zigbee2mqtt

{% picture posts/{{ page.guid }}/fonctions-disponible-moes-ZTRV-BY-100-zigbee2mqtt.png --alt fonctions disponibles dans zigbee2mqtt du robinet ou tête thermostatique Moes ZTRV-BY-100 --img width="940" height="1530" %}

{% picture posts/{{ page.guid }}/fonctions-disponibles-moes-ZTRV-BY-100-mode-cvc-home-assistant.png --alt rendu visuel dans Home Assistant du robinet ou tête thermostatique Moes ZTRV-BY-100 --img width="940" height="439" %}

# Coût d'une installation complète

Le coût est calculé sur l'achat de 5 robinets thermostatiques et d'une box domotique fonctionnant sur home Assistant avec un software préinstallé.

1. la box + clé Zigbee (Home Assistant Green + clé Skyconnect) coût livré 145€ chez **Seeedstudio**
2. robinet thermostatique Sonoff TRVZB coût livré **31.29€** chez [domadoo](https://www.domadoo.fr/fr/chauffage-clim/6776-sonoff-tete-thermostatique-connectee-zigbee-30.html?domid=39){: target="_blank"} ou **29.87€** chez le fabriquant [Itead](https://itead.cc/product/sonoff-zigbee-thermostatic-radiator-valve/ref/122/){: target="_blank"} Dans les deux cas une livraison offerte est envisageable pour l'achat de plusieurs unités*
3. Un [module contact sec Girier zigbee](https://s.click.aliexpress.com/e/_DeZ2xxr){: target="_blank"} d'un coût inférieur à 10€ ou un module français [Nodon d'une qualité supérieur multifonction](https://www.domadoo.fr/fr/peripheriques/5688-nodon-module-multifonction-zigbee-3700313925188.html?domid=39){: target="_blank"} à 32€ chez domadoo, afin d'enclancher la chaudière sur demande (ce module remplacera le thermostat d'ambiance existant).
4. 
Partons sur un achat de **5 robinets** Sonoff TRVZB, d'un module Nodon contact sec et d'une box équipée Home Assistant Green, il t'en coûtera **309€** et pour ce prix là avec un bon paramétrage tu pourras faire des économies.

## Le choix de la rédaction

Il m'a fallut faire un choix, qui n'a pas été si facile à prendre mis à part pour le **Sonoff TRVZB** 

1. **Sonoff TRVZB**{: .blue} - Meilleur compromis Qualité/prix/fonctions
2. Xiaomi Aqara E1 - **Top qualité**
3. Moes ZTRV-BY-100 - Bien mais sans plus

## Conclusion

