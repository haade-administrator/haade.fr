---
guid: 106
title: "Comparatif têtes thermostatiques Zigbee"
description: "Présentation de 3 têtes thermostatiques Zigbee Xiaomi Aqara SRTS-A01, Sonoff TRVZB et Moes ZTRV-BY-100, un comparatif pour savoir quel est le meilleur robinet du contest"
ref: ""
layout: post
author: Nico
date: 2024-01-29 00:05
last_modified_at: 
categories: [Tests, Zigbee, Domotique]
tags: []
image: 'comparatif-tete-thermostatique-xiaomi-sonoff-moes-zigbee.png'
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
---

Depuis l'année dernière le gouvernement nous conseille de chauffer **notre habitat à 19°C** par soucis d'économies d'énergies. Plus récent encore une subvention est proposée, et comme c'est souvent le cas pour en bénéficier il faut que ce soit **posé par un professionnel**. Malheureusement ce type de pose est souvent honéreuse.
**En attendant je te propose un tuto sur le fonctionnement de 3 robinets thermostatiques** au protocole zigbee. À combien revient de domotiser son chauffage en Zigbee ?

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

Le Xiaomi Aqara E1 est de **très bonne facture, son prix avoisine les 45€** l'accès au changement de pile, la fonction onclick de l'écran, les paramétrages tout est bien pensé, c'est le seul a livrer la tête thermostatique **avec des piles** mais c'est aussi le plus cher. Côté installation comme tu peux le voir sur la photo il est livré avec des adaptateurs, une notice bref tout ce qu'il te faut. Perso je l'ai installé sans aucun adaptateur sur un radiateur traditionnel.
La lecture de l'ecran reste **exceptionnelle** cependant **il ne conviendra pas à toutes situations,** à l'usage je me rend compte que beaucoup de radiateurs peuvent avoir le robinet camouflé par un angle de mur et dans ce cas on ne pourrait lire convenablement les données.

{% picture posts/{{ page.guid }}/detail-robinet-tete-thermostatique-xiaomi-aqara-e1-zigbee-SRTS-A01.png --alt détail du robinet ou tête thermostatique Xiaomi Aqara Zigbee E1 SRTS-A01 --img width="940" height="529" %}

Le thermostat peut être utilisé avec la majorité des radiateurs à eau tels que les radiateurs, les sèche-serviettes ou même les sols chauds. Il prend les lectures des capteurs Aqara externes et ajuste la puissance de chauffage en fonction.

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

Une multitude de fonctions s'offrent à nous, il y en a tellement qu'on ne sait plus ou donner de la tête parmis les fonctions importantes on retrouve:

- la consigne de température
- la température en locale
- paramétrage d'un thermostat externe
- fonction fenêtre ouverte
- verrouillage enfant

> Le reste n'a que moins d'importance.

{%- include alert.html type="warning" text="Actuellement la tête thermostatique Aqara ne relève <b>pas l'état de fonctionnement</b> actuelle du module lorqu'il chauffe ou ne chauffe pas et c'est très embêtant car c'est une fonction primordiale pour le paramétrage des automatisations." %}

{% picture posts/{{ page.guid }}/fonctions-disponible-xiaomi-aqara-e1-zigbee2mqtt.png --alt fonctions disponibles dans zigbee2mqtt du robinet ou tête thermostatique Xiaomi Aqara Zigbee E1 SRTS-A01 --img width="940" height="1354" %}

> D'autre part une fonction qui aurait pu être intégrée est un **mode boost** au lancement de la chauffe comme c'est le cas avec le Moes ZTRV-BY-100, mais c'est une fonction que l'on peut implémenter avec une automatisation.

Pour terminer il manque aussi un **mode auto dans le mode du thermostat**, ce qui veut dire que tu ne pourras pas sélectionner le mode auto dans l'interface thermostat de home assistant, cependant ce module intègre tout de même un mode programme avec divers horaires à paramétrer.

{% picture posts/{{ page.guid }}/fonctions-disponibles-cvc-aqara-e1-home-assistant.png --alt rendu visuel dans Home Assistant du robinet ou tête thermostatique Xiaomi Aqara Zigbee E1 SRTS-A01 --img width="940" height="403" %}

En attendant que l'intégration soit parfaite dans Zigbee2mqtt ou Zha, **ce module ne permet pas d'exploiter pleinement les fonctions d'automatisations de Home Assistant** à moins peut-être de créer un template adapté, mais ça c'est une autre histoire.

### Sonoff TRVZB

[Information officielle Sonoff TRVZB](https://sonoff.tech/product/home-appliances/trvzb/){: target="_blank"}

#### Côté Matériel

Livré dans un étui haut de gamme, ce robinet thermostatique est livré avec toute une gamme d'adaptateur, l'ensemble est soigné d'une bonne qualité de fabbrication et le tout sans fioriture. 
L'accès au compartiment des piles se fait sans soucis et le système d'assemblage est bien pensé. Attention tout de même il faut compter 3 piles pour le faire fonctionner.
C'est le seul module à propose un affichage par le dessus, à première vue celui-ci ne semble pas adapté mais il en est rien tout s'affiche et est bien lisible.

{% picture posts/{{ page.guid }}/detail-robinet-tete-thermostatique-sonoff-trvzb-zigbee.png --alt détail du robinet ou tête thermostatique Sonoff Zigbee TRVZB --img width="940" height="529" %}

Cependant des 3 adaptateurs c'est celui qui est le plus pauvre en information, mais qu'importe les fonctions les plus importantes le seront. 

{% include product-embed.html image="sonoff-tete-thermostatique-connectee-zigbee-30.jpg" title="Sonoff TRVZB" brand="Sonoff" description="La tête thermostatique connectée SONOFF Zigbee vous permet de contrôler la température plus précisément avec moins d'énergie, vous offrant ainsi une maison plus confortable." domlink="chauffage-clim/6776-sonoff-tete-thermostatique-connectee-zigbee-30.html" iteadlink="sonoff-zigbee-thermostatic-radiator-valve" affiliate="_DFB4iQZ" %}

Le bouton onclick et mollette apporte une modularité similaire au xiaomi aqara E1.
Pour terminer il est proposé à 32€ et tu pourras voir un peu plus bas qu'il est riche en fonctionnalité.

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

{%- include alert.html type="info" text="Contrairement aux deux autres thermostat il te faudra l'installer sur un radiateur pour pouvoir l'inclure dans ton réseau Zigbee sans celà une erreur remontera" %}

{% picture posts/{{ page.guid }}/fonctions-disponible-sonoff-trvzb-zigbee2mqtt.png --alt fonctions disponibles dans zigbee2mqtt du robinet ou tête thermostatique Sonoff TRVZB Zigbee --img width="940" height="1058" %}

Un panel de fonctions moins important dans Z2M que le xiaomi Aqara SRTS-A01 ou le Moes ZTRV-BY-100, mais il n'oublie aucune fonctionnalité importante contrairement à l'Aqara, **comme le mode thermostat ( éteint,manuel,auto ) et l'état de fonctionnement actuel qui te permettras de contrôler pleinement ces fonctions dans HA.** il lui manque juste selon moi le **mode Boost ( facilement paramétrable en Automatisation )**.

{% picture posts/{{ page.guid }}/fonctions-disponibles-sonoff-trvzb-mode-cvc-home-assistant.png --alt rendu visuel dans Home Assistant du robinet ou tête thermostatique Sonoff TRVZB Zigbee --img width="802" height="417" %}

> Comme décrit au dessus le Sonoff TRVZB propose le contrôle de toutes les fontions intéressantes dans l'interface thermostat du CVC de Home Assistant.

### Moes ZTRV-BY-100

Terminons par le thermostat Moes

[Information officielle Moes ZTRV-BY-100](https://moeshouse.com/products/moes-zigbee-trv-by100?variant=39307026497617){: target="_blank"}

On a clairement affaire à une marque blanche de la **gamme Tuya**, contrairement à Xiaomi ou Sonoff Moes commercialise des produits sous sa propre marque mais distribué en marque blanche pour d'autres marques et intégrant le protocole Tuya. tu pourras te rendre compte que la qualité de fabrcation est en deça de Xiaomi et Sonoff. Pourtant ses courbe et son touché soyeux est réussi mais ça ne fait pas tout.

#### Côté Matériel

Le Moes ZTRV-BY-100 a un **éclairage complet** mais un peu trop puissant, mais ce n'est pas si grave, comme le Xiaomi Aqara E1 l'affichage est sur le côté et dans **pas mal de cas il ne sera pas visible ou lisible.**
Contrairement aux deux autres le **Moes propose une interface tactile** et non un bouton avec fonction clic/molette. 

> Je trouve cette interface moins facile à prendre en main.


Aussi l'accès aux piles est le plus délicat des trois quand il n'est pas fixé au radiateur. Une fois en place si tu pivotes légèrement le thermostat tu te retrouveras avec celui-ci dans la main.

{% picture posts/{{ page.guid }}/detail-robinet-tete-thermostatique-moes-ZTRV-BY-100-zigbee.png --alt détail du robinet ou tête thermostatique Moes ZTRV-BY-100 --img width="940" height="529" %}

**Dernier point le verrou des piles est plus que cheap**, franchement l'acier est aussi épais qu'une feuille de papier à cigarette et le loquet qu'un cure-dent.

> Si tu ne veux rien péter il faudra y aller avec délicatesse et ce n'est pas donné à tout le monde je sais de quoi je parle. 🥹

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

Le Moes ZTRV-BY-100 est celui qui affiche le plus d'informations sur son cadrant beaucoup de fonctions sont présentes comme:

- le verrouillage enfant
- la detection de fenêtre ouverte
- un mode programmation ( relativement complexe à mon goût )
- un mode **Boost**
- possibilité de lier à un capteur externe 
- un mode **eco**

#### Moes ZTRV-BY-100, Home-assistant et Zigbee2mqtt

Ce module à l'air complet et il l'est, tu peux te rendre compte vu le nombre de remontées de fonctions assez impressionnantes que Tuya a bien travaillé sur son firmware.

> Pour l'instant Ne propose pas les mises à jours OTA

{% picture posts/{{ page.guid }}/fonctions-disponible-moes-ZTRV-BY-100-zigbee2mqtt.png --alt fonctions disponibles dans zigbee2mqtt du robinet ou tête thermostatique Moes ZTRV-BY-100 --img width="940" height="1530" %}

Tuya a bien intégré **l'état de fonctionnement si important pour home assistant** mais dans le mode de l'appareil tu n'auras **que le mode chauffage** pas de mode éteint ou auto.

> Je te laisse donc méditer sur la façon d'éteindre ce module hors période de chauffe et oui ça risque de bouffer e la pile.

{% picture posts/{{ page.guid }}/fonctions-disponibles-moes-ZTRV-BY-100-mode-cvc-home-assistant.png --alt rendu visuel dans Home Assistant du robinet ou tête thermostatique Moes ZTRV-BY-100 --img width="940" height="439" %}

Cependant tu pourras sélectionner dans l'interface thermostat le choix du mode de programmation très complet mais aussi complexe.

## Coût d'une installation complète

Le coût est calculé sur l'achat de **5 robinets thermostatiques** et d'une box domotique fonctionnant sur home Assistant avec un software préinstallé. 
Pourquoi 5 robinets ? tout simplement car bientôt une vidéo de domotisation d'un appartement verra le jour.

**Voici le matériel sélectionné:**

1. la box + clé Zigbee (Home Assistant Green + clé Skyconnect) coût livré 145€ chez **Seeedstudio**
2. robinet thermostatique Sonoff TRVZB coût livré **31.29€** chez [domadoo](https://www.domadoo.fr/fr/chauffage-clim/6776-sonoff-tete-thermostatique-connectee-zigbee-30.html?domid=39){: target="_blank"} ou **29.87€** chez le fabriquant [Itead](https://itead.cc/product/sonoff-zigbee-thermostatic-radiator-valve/ref/122/){: target="_blank"} Dans les deux cas une livraison offerte est envisageable pour l'achat de plusieurs unités*
3. Un [module contact sec Girier zigbee](https://s.click.aliexpress.com/e/_DeZ2xxr){: target="_blank"} d'un coût inférieur à 10€ ou un module français [Nodon d'une qualité supérieur multifonction](https://www.domadoo.fr/fr/peripheriques/5688-nodon-module-multifonction-zigbee-3700313925188.html?domid=39){: target="_blank"} à 32€ chez domadoo, afin d'enclancher la chaudière sur demande (ce module remplacera le thermostat d'ambiance existant).

Partons sur un achat de **5 robinets** Sonoff TRVZB, d'un module **Nodon contact sec** et d'une box **équipée Home Assistant Green**, il t'en coûtera **309€** et pour ce prix là avec un bon paramétrage tu pourras faire des économies.

> L'équipe Haade va prochainement diffuser une vidéo sur la domotisation d'un appartement et calculer le coût de l'énergie. Suite à ce test grandeur nature je serais en mesure de te calculer un retour sur investisement.

## Le choix de la rédaction

Il m'a fallut faire un choix, qui n'a pas été si facile à prendre car malgré leurs différences ces modules font un travail relativement similaire.

1. **Sonoff TRVZB**{: .blue} - Meilleur compromis Qualité/prix/fonctions - **prix environ 34€**
2. Moes ZTRV-BY-100 - Bien mais sans plus - **prix environ 28€**
3. Xiaomi Aqara E1 - **Top qualité**  - **prix environ 44€**

## Conclusion

Voilà un test grandeur nature qui pourrait être plus complet, **garde à l'esprit** que le Xiaomi Aqara SRTS-A01 **est difficilement contrôlable** par automatisation donc le retour sur investissement certainement plus long. La qualité de fabrication du Moes laisse un peu à désirer l'absence du mode d'extinction rendra ce module plus énergivore.

Et pour terminer **notre grand gagnant du contest le Sonoff TRVZB** une bonne qualité de fabrication, un visuel vertical entièrement paramétrable et contrôlable dans Home Assistant pour **un max d'économies pour les années à venir.**
