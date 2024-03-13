---
guid: 108
title: "Test Box Home Assistant Green et Skyconnect"
description: "Test de la box Home assistant Green à 99$ et du dongle Skyconnect zigbee à 29,99$, stabilité, performance au rendez-vous"
ref: "Home Assistant"
layout: post
author: Nico
date: 2024-02-12 07:26
last_modified_at: 
categories: [Tests, Zigbee]
tags: []
image: 'test-box-home-assistant-green-cle-zigbee-skyconnect.png'
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
rating: 5.0
sourcelink:
  - https://www.home-assistant.io/green/
  - https://skyconnect.home-assistant.io/
---

**Je suis loin d'être le premier** à tester cette box, pour les besoins d'une installation chez Paulo, j'ai commandé une Box Home Assistant Green et une clé Skyconnect sur [seeedstudio](https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html?queryID=c7f3fcf4f7354a2c4d56fdee4eab971d&objectID=5792&indexName=bazaar_retailer_products){: target="_blank"}, maintenant il est l'heure de tester cette box et de voir si **elle est stable** !

{% include product-embed.html image="dongle-usb-zigbee-30-skyconnect-pour-home-assistant-nabu-casa.jpg" title="Dongle Zigbee Skyconnect" brand="Nabu Casa" description="Clé dongle zigbee Skyconnect" domlink="box-domotique/6938-dongle-usb-zigbee-30-skyconnect-pour-home-assistant-nabu-casa-0794677011635.html" %}

## Présentation Box Home-assistant Green

{% picture posts/{{ page.guid }}/presentation-box-home-assistant-green-99$.png --alt Présentation de la box home-assistant Green --img width="940" height="529" %}

Commençons par un déballage de la box home-assistant green, comme tu peux le voir **l'emballage est super bien fait** et apporte une petite touche d'écolo, elle n'est pas Green pour rien. Très bien présentée j'ai vraiment rien à redire sur le packaging de la home assistant Green.

{% include product-embed.html image="Home-Assistant-Green.png" title="Box HomeAssistant Green" brand="Nabu Casa" description="Box Home Assistant Green en vente chez domadoo à moins de 100€" domlink="box-domotique/7046-nabu-casa-box-domotique-home-assistant-green-0794677011758.html" %}

{% picture posts/{{ page.guid }}/tour-horizon-carton-emballage-home-assistant-green.png --alt déballage de la box home-assistant Green --img width="940" height="529" %}

À l'intérieur tu y trouveras une notice succinte qui te renverra vers une page web dédiée à [l'installation de la Home Assistant Green](https://green.home-assistant.io/){: target="_blank"}. Aussi la box est fournis avec un macaron autocollant aux couleurs de Home Assistant **du plus bel effet**, un cable rj45 ainsi qu'une alimentation avec adapteurs internationaux, parfait pour un branchement sur toute la planète.

{% picture posts/{{ page.guid }}/contenu-deballage-box-home-assistant-green.png --alt contenu du déballage de la box home-assistant Green --img width="940" height="529" %}

Parlons de la box, la **qualité des matériaux est très haut de gamme**, la coque transparente est non seulement d'une épaisseur remarquable, que l'on retrouve d'ailleurs sur la home assistant Yellow. De plus la home assistant Green dispose **d'un refroidissement passif en aluminium anodisé** noir sur toute la face inférieur de la box ce qui permettra un refroidissement suffisant. La box Home Assistant Green a une taille plus qu'acceptable elle **mesure à peine plus de 11cm** de côté pour un poid de 340Gr de quoi l'installer facilement à côté du tableau électrique par exemple.

{% picture posts/{{ page.guid }}/detail-box-home-assistant-green.png --alt détail de la box home-assistant Green --img width="940" height="529" %}

Tu peux accéder facilement au circuit imprimé en dévissant les 4 visses présentes sur la périphérie de la box. **Pour 99$ cette box intègre le strict nécessaire au bon fonctionnement**. Sur l'une des extrémités on trouvent les cosses pour un branchement UART parfait pour débugguer si nécessaire biensûre. Bonne nouvelle une mémoire de l'horologe interne est possible mais il te faudra équiper la box **d'une pile cr2032 non fournis.**

{% picture posts/{{ page.guid }}/detail-circuit-home-assistant-green.png --alt détail du circuit de la box home-assistant Green --img width="940" height="529" %}

En façade arrière on pourra la connecter par **rj45 au réseau mais pas en wifi**. Ainsi tu ne peux la brancher en rj45 il te faudra acquérir un dongle wifi. La box est muni de deux ports usb ce qui te permettra aisément d'y connecter les dongles nécessaires à la création de ton réseau zigbee ou z-wave. Il y a aussi un port sdcard afin d'y ajouter un stokage externe ainsi qu'une sortie HDMI.

Pour rappel la box est livrée avec une **ram 4GB** et un stockage interne **emmc 32GB** et il s'avère que c'est suffisant au bon fonctionnement de la box, voir plus bas dans [notre test intégration](#int%C3%A9gration-dans-home-assistant).

**Grâce à l'interrupteur situé lui aussi sur la face arrière** tu pourras **soit éteindre la box** en toute sécurité en appuyant 6 secondes ou **forcer l'arrêt** complet en appuyant 12 secondes.

{% include product-embed.html image="Home-Assistant-Green.png" title="Box HomeAssistant Green" brand="Nabu Casa" description="Box Home Assistant Green en vente chez domadoo à moins de 100€" domlink="box-domotique/7046-nabu-casa-box-domotique-home-assistant-green-0794677011758.html" %}

### Caractéristique technique

|**Processeur**|CPU Cortex-A55 quadricœur jusqu'à 1,8 GHz|
|**RAM**|4 Go de RAM|
|**Stockage**|32 Go eMMC|
|**Fente d'extension**|Fente pour carte SD à des fins de récupération uniquement|
|**Ethernet**|Gigabit Ethernet|
|**Ports USB**|2 ports hôte USB 2.0 Type-A|
|**Affichage**|1x HDMI à des fins de débogage uniquement|
|**Protocoles sans fil**|Zigbee 3.0 et Matter (avec Home Assistant SkyConnect)|
|**Micrologiciel préinstallé**|OS Home Assistant|
|**Alimentation**|12 V / 1 A via une prise d'alimentation CC à barillet (connecteur à barillet)|
|**LED**|Blanc (alimentation), vert (indicateur d'activité), jaune (état du système Home Assistant)|
|**Bouton de mise hors tension**|Appuyez et maintenez pendant 6 secondes pour arrêter en toute sécurité<br>Appuyez et maintenez pendant 12 secondes pour forcer la mise hors tension|
|**Boîtier**|Grand dissipateur thermique en aluminium, excellente dissipation thermique|
|**Taille**|112x112x32mm|
|**Température de fonctionnement**|0 ~ 40℃|

## Présentation dongle Zigbee Skyconnect

Grâce au **plus petit dongle zigbee 3.0 EFR32MG21** du marché le home assistant skyconnect tu pourras équiper ta box de la fonction zigbee.

{% picture posts/{{ page.guid }}/dongle-zigbee-home-assistant-skyconnect.png --alt dongle zigbee skyconnect par home-assistant --img width="940" height="529" %}

Celà fait déjà un moment que home assistant commercialise ce dongle, je n'ai trop rien à dire, c'est un dongle à part que c'est certainement le plus petit et plus fin dongle du marché et qu'il est d'un **bleu ciel épuré aux couleurs de Home Assistant**, il dispose d'une **mémoire interne de 768Mo.**

{% picture posts/{{ page.guid }}/detail-dongle-zigbee-skyconnect-home-assistant-green.png --alt détail de la clé zigbee Skyconnect de home Assistant --img width="940" height="529" %}

Grâce à la prise en charge par Nabu Casa et Home Assistant ce dongle est entièrement **compatible avec ZHA et Zigbee2mqtt**, et biensûre recommandé pour l'installation dans Home Assistant avec la box Green.

### Mise à jour

N'oublie pas de faire la mise à jour avant installation c'est toujours mieux et rendu facile à executer grâce à la communauté Home Assistant.

[Mise à jour Skyconnect](https://skyconnect.home-assistant.io/firmware-update/){: target="_blank"}

## Intégration dans Home Assistant

Gros point positif la Home Assistant Green **est une box plug'n play**, il te suffit de la connecter au réseau, de la brancher et d'attendre le démarrage de celle-ci. Ensuite après 20 minutes environs rends toi à l'adresse [http://homeassistant.local:8123](http://homeassistant.local:8123){: target="_blank"} et le tour est joué.

{% picture posts/{{ page.guid }}/premier-demarrage-home-assistant-green.png --alt premier démarrage plug n play de la box home-assistant Green --img width="940" height="529" %}

La box Home assistant Green est **100% compatible avec HAOS**, *il ne manquerait plus qu'elle ne le soit pas*. Non je veux dire par là que le matériel remonte correctement et tu pourra même désactiver les LED de fonctionnements disposées en façade. En ce qui concerne le multiprotocole Zigbee/Matter du dongle skyconnect il est pris nativement en charge avec ZHA. Mais pour l'instant je te conseil tout de même de l'utiliser uniquement en Zigbee avec le firmware EmberZnet.

{% picture posts/{{ page.guid }}/integration-totale-home-assistant-green-et-skyconnect-avec-full-controle.png --alt intégration dans home-assistant de la box green et skyconnect toutes options disponibles --img width="940" height="529" %}

Comme tu peux le voir sur le schéma ci-dessous le processeur sur la base de CPU Cortex-A55 quadricœur jusqu'à 1,8 GHz **n'utilise que 2% de ses capacités** quant à la mémoire RAM nous n'utilisons **que 22% en moyenne** de ses capacités.

Une **installation standard de prendra 10GB** d'espace de stockage, il te restera donc **22GB de libre** de quoi installer toutes les images docker souhaitées au bon fonctionnement de ta domotique.

{% picture posts/{{ page.guid }}/puissance-processeur-memoire-home-assistant-green.png --alt consommation puissance processeur et mémoire ram de la box green avec zigbee2mqtt et le dongle skyconnect --img width="940" height="529" %}

> Toutes les infos matériel sont dispos dans les paramètres de HAOS rubrique Matériel.

{% picture posts/{{ page.guid }}/fonctionnement-ensemble-home-assistant-green-et-dongle-skyconnect.png --alt fonctionnement final de la box green et de la clé skyconnect par Home-Assistant --img width="940" height="529" %}

{% include product-embed.html image="Home-Assistant-Green.png" title="Box HomeAssistant Green" brand="Nabu Casa" description="Box Home Assistant Green en vente chez domadoo à moins de 100€" domlink="box-domotique/7046-nabu-casa-box-domotique-home-assistant-green-0794677011758.html" %}

{% include product-embed.html image="dongle-usb-zigbee-30-skyconnect-pour-home-assistant-nabu-casa.jpg" title="Dongle Zigbee Skyconnect" brand="Nabu Casa" description="Clé dongle zigbee Skyconnect" domlink="box-domotique/6938-dongle-usb-zigbee-30-skyconnect-pour-home-assistant-nabu-casa-0794677011635.html" %}

## Conclusion

Home Assistant Green est une box simple et entièrement conçu par nabu casa pour Home Assistant OS. Est-ce suffisant **Pour 99$ plus 30$** pour le dongle Skyconnect, **la réponse est OUI**, tu pourras t'initier aux joies de la domotique par Home Assistant avec une stabilité remarquable, **je te conseil vivement de t'en équiper** si tu ne veux pas créer une box Diy, de plus tu soutiendras la fondation Nabu Casa qui le mérite bien.