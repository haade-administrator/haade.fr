---
guid: 57
title: "Test Controlleur arrosage Woox R7060"
description: "Test du contrôleur intelligent Woox Zigbee 3.0 R7060 domostise ton irrigation de jardin"
layout: post
author: Nico
date: 2023-03-29 17:07
last_modified_at: 
categories: [Domotique, Zigbee, Tests]
tags: [post]
image: 'woox-controleur-arrosage-zigbee-r7060-test.png'
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
rating: 4.0
sourcelink:
  - https://wooxhome.com/products-c10/other-c4/woox-r7060-smart-garden-irrigation-control-p61
  - https://blog.domadoo.fr/88669-test-controleur-d-arrosage-zigbee-woox-r7060/
---

Aujourd'hui je vais te présenter un module qui a peut de conccurrence dans le domaine du jardinage et qui te permettra de contrôler ton système d'arrosage/irrigation avec ton système domotique préféré. Woox commercialise depuis peut de temps un controlleur zigbee 3.0 qui se branche directement à la sortie de ton réseau d'eau Nommé R7060. Avant de lancer Haade j'ai travaillé dans le monde des pépinières et je crois pouvoir dire que je connais bien ce type de modules et les contraintes engendrées par les intempéries. Alors le Woox R7060 controlleur d'irrigation intelligent est-il à la hauteur de mes attentes !

{%- include alert.html type="info" text="Le module Woox R7060 est actuellement en promotion jusqu'au 4 Avril 2023 sur le site Domadoo au tarif unique de 26,39€ n'hésite pas" link="https://www.domadoo.fr/fr/peripheriques/5685-woox-controleur-d-arrosage-intelligent-onoff-zigbee-30-8435606701198.html?domid=39" textlink="Promotion sur Le module Woox R7060 -20%" %}

{% include product-embed.html guid="2154" %}

# À propos de Woox

Depuis le début en 2018, **WOOX société Espagnole**, fournit uniquement des appareils WiFi 2,4 GHz que vous, en tant qu'utilisateur, connectez directement sur votre routeur WiFi à la maison. Avec la demande croissante d'appareils de sécurité comme les capteurs ou les serrures de porte, nous avons développé notre **propre portefeuille d'appareils Zigbee** qui peuvent toujours fonctionner, communiquer et se connecter dans l'application WOOX Home avec les appareils WiFi déjà existants, c'est cool ! La seule différence est que les appareils Zigbee nécessitent une passerelle WOOX Zigbee à laquelle ils se connectent. Les appareils WOOX Zigbee garantissent de travailler dans un réseau Zigbee personnel qui garantit vitesse, stabilité et sécurité.

> Heureusement tu vas pouvoir te rendre compte que le controlleur Woox R7060 est compatible Jeedom et Homeassistant

# Détaillons le Woox R7060

{% picture posts/{{ page.guid }}/presentation-contenu-controlleur-irrigation-woox-r7060.png --alt présentation du controlleur arrosage intelligent woox R7060  --img width="940" height="529" %}

Le moins que l'on puisse dire c'est le fait que Woox fournit **ses modules dans un emballage en carton épais et solide**. Comme tu peux le voir sur les photos il est livré avec 4 piles AAA, une notice d'installation complète et dispo ci-dessous, un adaptateur 3/4" idéal dans le monde de l'irrigation ainsi et grâce à ce module tu pourras visser dessus des nez de robinets 3/4"

Une fois le capot ouvert **je suis un peut déçu** d'y trouver seulement deux gros boutons surmontés de deux gros logos et d'un voyant bleu centrale, si avec ça tu n'arrives pas à comprendre le fonctionnement, **c'est que tu n'as pas la lumière à tous les étages ou alors que ton corps à pris des substances illicites** 🤪.

Revenons à nos moutons ce module est vendu entre 30 et 35€, le prix n'est pas élevé mais je regrette le choix de Woox, il auraient pu le vendre un peut plus cher et y **intégrer cadrans LCD** afin d'afficher divers programmes et **l'horloge**

> Alors oui ce module me laisse dubitatif face à la pauvreté de ses fonctions.


## Contenu

1. Contrôleur intelligent Woox R7060
2. Pile AA x 4
3. Adaptateur 26,5 mm G 3/4" x 1
4. Manuel d'utilisation multilingue

{% include doclink.html pdf="Woox-R7060-Garden-Irrigation-Control-User-manual .pdf" title="Manuel d'utilisation Woox R7060" %}

# Allons plus loin

Une **indication open** permet en pressant sur l'ABS d'ouvrir le corps du module et d'y intégrer les piles. Tu pourras voir que l'assemblage des deux coques est correct et conforme aux standards actuels. Le **joint Blanc** permet de parfaire l'étanchéité de l'ensemble. **Avec l'expérience je sais que ce n'est pas suffisant.** Je m'explique, cet assemblage sera hermétique à l'eau mais pas aux insectes. En général les araignées arrivent à se nicher à l'intérieur et à pondre leurs Oeufs. Alors quand je vois le circuit imprimé (pauvre en composant) et l'assemblage simpliste non protégé de celui-ci, **je doute fort que le module Woox R7060 aura une durée de vie longue qui ne devrait pas dépasser 5 ans en milieu défavorable.**

{% picture posts/{{ page.guid }}/contenu-du-module-controlleur-irrigation-woox-r7060.png --alt sous le couvercle du controlleur arrosage intelligent woox R7060  --img width="940" height="529" %}

En détail les contacteurs fonctionnent bien, mais je ne l'ai testé qu'en milieu sec, la finition des soudures est correctes cependant j'ai trouvé des traces blanches de résidus de soudures, les boutons se positionnent correctement sur les contacteurs. Le circuit imprimé est équipé d'une **puce Tuya Zigbee TYZS3**, je trouve fort regrettable de ne pas utiliser des puces de type Texas Instrument CC265X qui ont la même taille mais sont facilement [Hackable grâce au logiciel PTVO](https://ptvo.info/zigbee-configurable-firmware-features/comment-page-1/){: target="_blank"}, je pense au **rajout de fonctions** de type **liaison/binding**, comme Zigbee prend en charge la liaison, ça permet aux appareils de se contrôler directement sans l'intervention de Zigbee2MQTT ou de tout logiciel domotique. 

> Trop peut répandu actuellement et c'est bien dommage.

{% picture posts/{{ page.guid }}/detail-circuit-imprime-controlleur-intelligent-woox-r7060-zigbee.png --alt détail circuit imprimé du controlleur arrosage intelligent woox R7060  --img width="940" height="529" %}

> Woox a tout de même pensé à intégrer sur le circuit imprimé des ports de communications afin de pouvoir pourquoi pas flasher la puce Zigbee 3.0 Tuya

# Appairage

L'appairage se fait sans aucun soucis en appuyant 5 secondes sur le bouton rouge (stop) jusqu'au clignotement de la LED bleu. Ensuite passe au test l'enclanchement à l'ouverture de la vanne est audible **par contre à la fermeture tu n'entends quasimment rien ce qui est un peut étonnant.**

{% picture posts/{{ page.guid }}/appairage-module-woox-r7060.png --alt appairage du controlleur arrosage intelligent woox R7060  --img width="940" height="529" %}

Le module est compatible [ZHA, Zigbee2mqtt, Tasmota et Deconz ](https://zigbee.blakadder.com/Woox_R7060.html){: target="_blank"}

# Intégration du Woox R7060 dans Homeassistant

L'intégration dans homeassistant à l'aide du module Zigbee2mqtt se fait sans soucis. C'est bienentendu un module Enddevice, tu pourras contrôler:
1. le bouton On/Off
2. le niveau de la batterie
3. l'état du lien dans le réseau

{% picture posts/{{ page.guid }}/integration-woox-r7060-homeassistant.png --alt integration du controlleur arrosage intelligent woox R7060 dans homeassistant avec zigbee2mqtt  --img width="940" height="648" %}

{% picture posts/{{ page.guid }}/integration-woox-r7060-homeassistant-onglet-expose.png --alt onglet expose du controlleur arrosage intelligent woox R7060  --img width="940" height="248" %}

## Automatisation du Woox R7060

Il existe un [Blueprint irrigation](https://gist.github.com/haade-administrator/61d839c20a79643c4ceefe52fd85336e){: target="_blank"} qui te permet de contrôler en fonction de la météo grâce à des capteurs de vents, pluies. J'ai repris le blueprint existant pour la traduction tu trouveras le [fil officiel ici.](https://community.home-assistant.io/t/toggle-irrigation-system-from-local-weather/418551){: target="_blank"}

{% include homeassistantlink.html bluelink="https://gist.github.com/haade-administrator/61d839c20a79643c4ceefe52fd85336e" %}

{% picture posts/{{ page.guid }}/blueprint-irrigation-automatisation-homeassistant.png --alt Scenario domotisation du controlleur arrosage intelligent woox R7060 dans homeassistant --img width="940" height="638" %}

**Tu pourras trouver d'autres automatisations et card sur le dépôt HACS:**

- [Module d'irrigation complet par rgc99](https://github.com/rgc99/irrigation_unlimited){: target="_blank"}
- [carte Lovelace par rgc99](https://github.com/rgc99/irrigation-unlimited-card){: target="_blank"}
- [Module d'irrigation complet par petergridge](https://github.com/petergridge/Irrigation-V5){: target="_blank"}
- [Carte Lovelace par petergridge](https://github.com/petergridge/Irrigation-Card){: target="_blank"}

> Autant te dire que sur Homeassistant il y a du choix à la domotisation d'irrigation.

# Intégration du Woox R7060 dans Jeedom

Dans Jeedom l'intégration se fait aussi sans soucis, les commandes remontées par défaut sont:
1. le bouton on/off
2. l'état de la fonction

Il manque toujours la remontée d'information de la batterie par défaut

{% picture posts/{{ page.guid }}/integration-woox-r7060-jeedom.png --alt integration du controlleur arrosage intelligent woox R7060 dans jeedom --img width="940" height="273" %}

{% picture posts/{{ page.guid }}/integration-woox-r7060-jeedom-onglet-commande.png --alt onglet commande du controlleur arrosage intelligent woox R7060 dans jeedom --img width="940" height="182" %}

## Spécifications du Woox R7060

|Protocole sans fil|ZigBee 3.0|
|Puissance d'émission|8,8 dBm|
|Tension de fonctionnement|6 V CC|
|Alimenté par|4 piles AA 1,5 V (incluses)|
|Niveau d'étanchéité|IP44|
|Poids du produit|355 g|
|Plage de pression d'eau|0,2 ~ 0,7 MPa|
|Courant de veille|20uA|
|Courant de fonctionnement|270 mA (30 mS)|
|Portée de transmission|10 ~ 30 mètres à l'intérieur et 30 ~ 50 mètres à l'air libre|
|Température de fonctionnement|0℃ ～+45℃|
|Humidité de travail|0 ~ 95 % HR|
|Alarme basse pression|Oui|
|Module Zigbee|TYSS3|
|Fréquence sans fil|2.400~2.483GHz|
|Norme réseau|802.15.4/ZigBee|
|Puissance de transmission|Taux de transmission : 250kbps|
|Canaux|16|
|Autonomie de la batterie|6 mois|

# **les + du produit**
{: .blue}
- la qualité de fabrication
- l'emballage
- le prix
- la facilité du fonctionnement
- la rareté de ce type de produit

# **les - du produit**
{: .red}
- la pauvreté des fonctions
- le circuit imprimé sommaire
- la protection contre les intempéries du circuit
- la longévité de la batterie ( max 6 mois )
- le module Zigbee tuya

{%- include alert.html type="info" text="Le module Woox R7060 est actuellement en promotion jusqu'au 4 Avril 2023 sur le site Domadoo au tarif unique de 26,39€ n'hésite pas" link="https://www.domadoo.fr/fr/peripheriques/5685-woox-controleur-d-arrosage-intelligent-onoff-zigbee-30-8435606701198.html?domid=39" textlink="Promotion sur Le module Woox R7060 -20%" %}

{% include product-embed.html guid="2154" %}

# Conclusion

J'ai mis une note de 4/5, le **module fait le Job** mais, l'intégration du circuit imprimé dans le boitier aurait pu être renforcé et protégé davantage des intempéries. Les seules fonctions on/off pour ce type de module sont insuffisantes, le monde du jardin est extérieur à la maison **l'intégration d'une antenne externe sur circuit aurait été un atout non négligeable, et je me demande pourquoi les constructeurs ne se mettent pas au Binding.** Encore une fois, Merci à Domadoo pour ce prêt.