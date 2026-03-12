---
guid: 171
title: "Test dongle multiradio Smlight SLZB-MR4U"
description: "Test du dongle Multiradio Zigbee et Thread de la marque SMLIGHT SLZB-MR4U ça marche"
ref: "SLZB-MR4U"
layout: post
authors: [Nico]
date: 2026-03-06 15:49
last_modified_at: 
categories: [Tests, Zigbee, Home-Assistant]
tags: []
video: 
image: 'smlight-multiradio-zigbee-et-thread-ca-marche-test-slzb-mr4u.png'
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
  - https://smlight.tech/global/slzbmr4
  - https://smlight.tech/support/manuals/books/slzb-os
---

Il y a peu de temps j'ai installé le [firmware multipan sur un dongle max Sonoff]({% post_url /fr/2025-12-20-decouverte-des-nouveaux-dongle-plus-et-mag-efr32mg24-zigbbe-par-sonoff %}), l'installation fonctionne j'ai réussi à installer des modules zigbee et thread avec succès **mais j'ai été vite confronté à des problèmes d'instabilités** au niveau de l'émission et réception de l'antenne, en effet tout est basé sur une seule antenne et je pense que le soucis vient au niveau des canaux identiques aux deux protocoles. **Pour pallier à ce problème j'ai demandé à la société SMLight de me fournir une clé multiradio et ils m'ont gentiment procuré le SLZB-MR4U.**

> Et je dois dire que **je suis pleinement satisfait de cette clé** !.

SMLight fourni depuis plusieurs années des dongles essentiellement déporté en rj45 mais pas que, avec de nombreuses variantes de puces autant dire que l'on a du choix. Rien qu'en multiprotocole ( plusieurs puces ) il existe 6 varoiantes dont cette clé SLZB-MR4U sa particularité pocéder à la fois une puce **zigbee silabs EFR32MG26** ainsi qu'une seconde **puce zigbee Texas Instrument CC2674P10**, je trouve ça top surtout qu'elles sont toutes deux compatibles Zigbee ou Thread, bref incroyable ! **Mais ça ne s'arrête pas là, la gestion de l'ensemble est super bien réalisée.**

{% include product-embed.html image="smlight-slzb-mr4u-adaptateur-usb-ethernet-poe-zigbee-et-thread-cc2674p10-efr32mg26.png" title="Dongle SLZB-MR4U" brand="SMLight" description="Dongle multiprotocole double puces silabs EFR32MG26 et texas instrument CC2674P10 idéal pour zigbee et thread" domlink="produits-de-domotique/8369-smlight-slzb-mr4u-adaptateur-usb-ethernet-poe-zigbee-et-thread-cc2674p10-efr32mg26-.html" amazlink="4bhZgQq" %}

## Déballage

Rien de bien particulier une boite aux couleurs de l'ukraine 😉 et oui **SMLight est une société Ukrainienne**, sur le carton est annoncé la compatibilité avec zigbee2mqtt et Home Assistant ! **je trouve ça extra.**

{% picture posts/{{ page.guid }}/deballage-dongle-smlight-slzb-mr4u.png --alt Déballage du dongle SMLight multiradio zigbee et thread SLZB-MR4U --img width="940" height="522" %}

à l'intérieur on retrouve une clé similaire à d'autre de la marque, avec deux antennes donc une pour chaque puces, un mètre pour la fixation des visses ou des doubles faces afin de fixer cette clé au mur, et une clé allène. **Il ne manque juste que deux chevilles pour rendre ce contenu des plus complet.**

{% picture posts/{{ page.guid }}/deballage-dongle-smlight-slzb-mr4u-2.png --alt Déballage du dongle SMLight multiradio zigbee et thread SLZB-MR4U règle et outils --img width="940" height="522" %}

**Le seul point négatif** du dongle {{ page.ref }} réside dans ses dimensions et sur le design de la clé pour le reste c'est top.

{% picture posts/{{ page.guid }}/dimensions-slzb-mr4u-smlight.png --alt Dimension de la double clé zigbee-thread SLZB-MR4U --img width="940" height="529" %}

## Découverte du firmware SLZB OS  V3.2.4

Passons au **coeur du système et je dois dire qu'il a très bien évolué**, en 2024 j'avais testé la version 0.9 et là nous sommes **en v3.2.4** stable sachant qu'à l'heure ou j'écris ce sujet, **l'équipe est déjà en train de travailler sur une version 3.2.6 en phase de développement.**

{% picture posts/{{ page.guid }}/versioning-slzb-os-smlight.png --alt Visu des versions de slzb os par smlight --img width="940" height="453" %}

Bon comme il s'agit d'un **dongle de production je suis resté volontairement sur la v3.2.4 et je n'ai rencontré aucun soucis**. Je tiens a signaler que l'interface s'affiche et réagit rapidement tu pourras directement te connecter à slzb-mr4u.local ou .lan si ton installation le permet sinon il faudra faire une recherche de l'adresse ip.

{% picture posts/{{ page.guid }}/page-accueil-slzb-os-base-esp32.png --alt Page accueil SLZB-OS basé sur esp32 --img width="940" height="453" %}

> Pour faire simple et présenter au mieux l'interface je vais passer sur une vidéo de présentation

{% include product-embed.html image="smlight-slzb-mr4u-adaptateur-usb-ethernet-poe-zigbee-et-thread-cc2674p10-efr32mg26.png" title="Dongle SLZB-MR4U" brand="SMLight" description="Dongle multiprotocole double puces silabs EFR32MG26 et texas instrument CC2674P10 idéal pour zigbee et thread" domlink="produits-de-domotique/8369-smlight-slzb-mr4u-adaptateur-usb-ethernet-poe-zigbee-et-thread-cc2674p10-efr32mg26-.html" amazlink="4bhZgQq" %}

Un point fort du système d'exploitation est la mise à jour de l'ensemble des firmwares via l'interface SLZB-OS. Il suffira de sélectionner la puce à mettre à jour, ensuite tu choisis le firmware et tu lances.

> Enfin des mises à jours matérielles hautement simplifiées

{% picture posts/{{ page.guid }}/mise-a-jour-slzb-os-directement-depuis-l'interface.png --alt Mise à jour de l'ensemble des firmwares via l'interface --img width="940" height="447" %}

### Présentation vidéo SLZB-OS

Voilà une vidéo de présentation qui présente sommairement l'ensemble des fonctions SLZB-OS qui je le rappelle est basé sur un esp32. Il y a deux choses qui m'ont marqué, premièrement la fluidité et la réactivité des pages, **surtout qu'il n'y a pas longtemps j'ai testé la lixee-box qui propose elle aussi une interface basé sur esp32**, chez SMLight la puissance est là et Lixee ferait bien de s'en inspirer. Deuxièmement la prise en main est simplifiée et plutôt ludique, tout tombe sous le sens, tu trouveras énormément d'infos en français sur l'interface **grâce aux icones ?**.

{% include videoPlayer.html youtubeId="_cw5LgqeF0E" %}

> SLZB-OS est une interface aboutie qui ne cesse d'évoluer je suis 100% satisfait.

**Un point qui n'est pas abordé dans l'article mais dans la vidéo**, et non testé, **SLZB-OS intègre en mode beta la fonction zigbee-hub** ainsi tu pourras utiliser la clé SLZB-MR4U de façon autonome sans ZHA, ZIGBEE2MQTT, ainsi SLZB-OS serait la seule interface nécessaire pour le maillage et tu pourrais faire remonter les modules dans HAOS par exemple via MQTT.

## Intégration dans Home Assistant

Là aussi tout est prévu, une fois la clé intégrée dans le réseau, elle est immédiatement reconnue dans Home Assistant, **bref parfait !**

{% picture posts/{{ page.guid }}/reconnaissance-automatique-dans-home-assistant.png --alt Reconnaissance automatique des clés SMLight dans home assistant --img width="333" height="219" %}

Dès lors que tu ajoutes la clé au système, tu auras accès à un maximum d'informations. Entre autres:

- Activer les Leds
- Redémarre le système
- Visualiser les mises à jours
- Redémarrer les puces Zigbee

**Dans les diagnostiques la liste est encore plus étendue:**

- Mode de connection
- températures des puces
- filesystème
- mémoire
- type de firmware installé sur les puces
- etc, etc...
  
{% picture posts/{{ page.guid }}/fonctions-disponibles-slzb-mr4u-dans-home-assistant.png --alt Informations SLZB-OS, SMLight SLZB-MR4U dans Home Assistant --img width="940" height="649" %}

L'intégration dans HA est propre je note néanmoins des dysfonctionnements au niveau de la remontée d'information des firmwares installés sur le dongle {{ page.ref }}, je pense que c'est due aux choix des divers firmwares installables, en effet par puces tu peux choisir un firmware stable ou de développement, ce qui rend la fonction d'information plus complexe à remonter dans HA.

{% picture posts/{{ page.guid }}/mise-a-jour-du-firmware-slzb-mr4u-directement-dans-home-assistant.png --alt Mise à jour du firmware du SLZB-MR4U directement dans l'interface de Home Assistant --img width="724" height="340" %}

## Et les Antennes dans tout ça

**Le principal problème du multipan** sur le dongle **Sonoff Max** qui rend la fonction inutilisable en production **vient de l'instabilité des fréquences et de la portée de l'onde**. Avec le {{ page.ref }} et les deux puces effacent ce soucis, pour l'avoir testé les ondes passent bien pour **les deux protocoles Zigbee sur une puce et Thread sur l'autre, la portée est stable et très correcte, le maillage est conforme pour la production**.

## Caractéristiques Techniques {{ Page.ref }}

**Matériel**

|Puce radio 1|CC2674P10 Texas Instruments|
|Puce radio 2|EFR32MG26 Silicon Labs|
|Puce centrale|ESP32-S3 Espressif|
|Ethernet|W5500 WIZnet|
|Transfert USB-Ethernet|Oui|
|Antenne Zigbee|Baishi en forme de L +5 dB|
|Filetage d'antenne|Baishi en forme de L +5 dB|
|Antenne Wi-Fi/Bluetooth|Sur circuit imprimé, +2 dB|
|Transformateur PoE|SMLIGHT 5 V|

**Alimentation / Données**

|Entrée USB-C|Oui|
|Entrée PoE|Oui|
|USB-C et/ou PoE simultanés|Oui|
|Protection contre les surtensions|Oui|
|Isolation électrochimique|Oui|
|Norme PoE prise en charge|IEEE 802.3af (48 V)|
|Alimentation PoE vers USB|Oui|
|Consommation d'énergie|1-1,5 W|

**Mode de fonctionnement**

|Coordinateur Zigbee Z2M/ZHA|Oui|
|Routeur Zigbee|Oui|
|Routeur Matter-over-Thread|Oui|
|Zigbee + Thread simultanés|Oui|
|Concentrateur Zigbee autonome|Oui|
|Concentrateur Zigbee autonome|Oui|
|Zigbee/Thread vers Ethernet|Disponible|
|Zigbee/Thread vers USB|Disponible|
|Zigbee/Thread vers Wi-Fi|Disponible|

**Compatibilité**

|Prise en charge native de Zigbee2MQTT|Oui|
|Prise en charge native de ZHA|Oui|
|Prise en charge OTBR|Oui|
|Préconfiguré Plug & Play|Oui|
|Compatible Ethernet|Oui, 10/100 Mb|
|Compatible Wi-Fi|Oui, 2,4 GHz|
|Compatible Bluetooth|Oui|
|Compatible SLZB-OS|Oui|
|Intégration Home Assistant|Oui|

**Fonctionnalités**

|Transfert USB vers Ethernet|Oui|
|Antenne externe 5 dB|Oui|
|Antenne Wi-Fi/Bluetooth interne|Oui|
|Gain de sortie du SoC radio|Jusqu'à +20 dB|
|Flasheur ESP32 intégré|Oui|
|Flasheur SoC radio intégré|Oui|
|LED d'état|Oui, 6|
|Bouton de commande|Oui|

**Dimensions et poids**

|Adaptateur|160 x 24 x 28 mm, 86 g|
|Antenne|192 × 12 × 12 mm, 15 g|
|Emballage (complet)|180 × 25 × 40 mm, 105 g|

**Conditions d’utilisation**

|Température|+5 °C à +35 °C|
|Humidité|< 60 %|

### **les + du dongle {{ page.ref }}**
{: .blue}

- le prix ( - de 50€ )
- le système d'exploitation
- les mise à jours
- le fonctions disponibles
- la compatibilité HA, Z2M, ZHA etc...

### **les - du dongle {{ page.ref }}**
{: .red}

- le format ( relativement volumineux )

{% include product-embed.html image="smlight-slzb-mr4u-adaptateur-usb-ethernet-poe-zigbee-et-thread-cc2674p10-efr32mg26.png" title="Dongle SLZB-MR4U" brand="SMLight" description="Dongle multiprotocole double puces silabs EFR32MG26 et texas instrument CC2674P10 idéal pour zigbee et thread" domlink="produits-de-domotique/8369-smlight-slzb-mr4u-adaptateur-usb-ethernet-poe-zigbee-et-thread-cc2674p10-efr32mg26-.html" amazlink="4bhZgQq" %}

## Conclusion

**Si tu cherches un dongle pour faire du multi protocole** en l'occurrence Zigbee et Thread alors **le {{ page.ref }} est fait pour toi**, si tu cherches une interface conviviale et complète alors là aussi **le {{ page.ref }} est fait pour toi**, si tu cherches à sécuriser l'ensemble par vpn et déporter la clé de ton système d'exploitation **là encore le {{ page.ref }} te conviendra**. **Mais si tu cherches une clé aux dimensions réduites** dans ce cas il faudra passer ton tour et choisir une autre clé zigbee. Mais si tu comptes utiliser le multipan je peux déjà te dire que le firmware n'est toujours pas utilisable en production.

> **Je recommande à 100% ce dongle** {{ page.ref }} et il vaut bien ses 5 étoiles !

## Article Connexes

{% include related-article.html guids="167,125" %}