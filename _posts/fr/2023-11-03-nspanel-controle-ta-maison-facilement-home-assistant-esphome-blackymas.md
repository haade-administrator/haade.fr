---
guid: 90
title: "NSPanel contrôle ta maison facilement"
description: "Grâce à Home Assistant, Esphome, et le référentiel Blackymas, paramètre et contrôle facilement le Sonoff NSPanel à moindre coût. Rend chaque pièce intuitive et supprime les télécommandes."
ref: "NSPanel"
layout: post
author: Nico
date: 2023-11-03 12:06
last_modified_at: 
categories: [Haade-Lab, Tests]
tags: []
image: 'controle-nspanel-blueprint-home-assistant-blackymas.png'
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
  - https://www.domomat.com/61791-ecran-tactile-couleur-capacitif-41-knx-zennio-zviz40a-anthracite-zennio-zviz40a.html?gclid=Cj0KCQjwtJKqBhCaARIsAN_yS_mEVUwHizDLA_kXxlf58Zk8PHiNM5nSBS2ysSF5w1TpziFhP8NkSwEaAt5yEALw_wcB
  - https://itead.cc/product/sonoff-nspanel-smart-scene-wall-switch/ref/122/
  - https://github.com/Blackymas/NSPanel_HA_Blueprint
---

Il y a peu de temps j'ai eu l'occasion de visiter une nouvelle école, celle-ci comme tu te doutes est entièrement équipée du **protocole knx**. À l'entrée de chaque classe un **écran digitale de la taille d'un NSPanel contrôle l'ensemble des équipements** (lumière, volet, chauffage). Avec un affichage intuitif mais pas trop travaillé. Quand je suis rentré à la maison et par curiosité j'ai regardé le prix d'un tel équipement et là je suis tombé à la renverse, **305€ l'ecran tactile Zennio** chez [domomat](https://www.domomat.com/61791-ecran-tactile-couleur-capacitif-41-knx-zennio-zviz40a-anthracite-zennio-zviz40a.html?gclid=Cj0KCQjwtJKqBhCaARIsAN_yS_mysoxT-9LObWx5DgIv0aWkKWDYBfmzagr4HXdLGoKIgpc10omSnYIaAot4EALw_wcB){: target="_blank"}. 

{% picture posts/{{ page.guid }}/ecran-tactile-zennio-z35-knx.png --alt ecran tactile knx Zennio --img width="940" height="361" %}

> Il a une chose de plus que le NSPanel le capteur de mouvement pour l'allumage de l'interface.

Mais en contrepartie il ne possède pas d'interrupteurs physiques qui peut être très pratique pour commander des lumières surtout pour nous, simple utilisateurs.

> Là tu te dit pourquoi ne parle-t-il pas du NSPanel Pro qui se rapproche plus du Zennio que le NSPanel.

Je trouve le [**NSPanel Pro beaucoup trop bridé**]({% post_url fr/2023-03-10-deballage-test-et-installation-sonoff-nspanel-pro %}) et il est actuellement difficile et long de transformer le NSPanel Pro même sous HA afin d'avoir une interface WAF. **De plus le fait de tourner sous Android me laisse plus que perplexe.**

> Merci à Domadoo pour ce prêt sans eux je n'aurai pu tester le {{ page.ref }}

{% include product-embed.html image="https://ae01.alicdn.com/kf/S9242a718ab714f0496e47c63c258156e9/SONOFF-panneau-de-commande-pour-maison-connect-e-NSPanel-Pro-avec-cran-tactile-TFT-3-95.jpg_640x640.jpg_.webp" title="Sonoff NSPanel" brand="Sonoff" description="Nspanel interrupteur mural wifi" iteadlink="sonoff-nspanel-smart-scene-wall-switch" domlink="objets-connectes/5985-sonoff-interrupteur-mural-nspanel-smart-scene-eu.html" affiliate="_DdoJuth" %}

Le {{ page.ref }} est vendu en **moyenne 60€** sur le site officiel **Itead ou Aliexpress**, pour **Domadoo** il faut attendre des offres promotionnelles pour le trouver au même tarif sinon il te faudra débourser **73€**, du coup je te conseil d'attendre si tu veux le commander chez ce revendeur.

L'idée tu t'en doutes et de reproduire la même chose avec un **NSPanel et tout ça pour 60-70€** le tout contrôlable sous home-assistant. Et bien d'une part c'est largement faisable et ce de façon simple et intuitive. Comment, grâce à Blueprint et au [référentiel Blackymas](https://github.com/Blackymas/NSPanel_HA_Blueprint){: target="_blank"}.

Il existe un autre [référentiel créé par joBr99](https://github.com/joBr99/nspanel-lovelace-ui){: target="_blank"} intéressant pour NSPAnel, je ne l'ai pas sélectionné car je trouve l'intégration moin intéressante car celle-ci se fait par Lovelace à l'aide de Cartes supplémentaires.

De plus le [référentiel Blackymas](https://github.com/Blackymas/NSPanel_HA_Blueprint){: target="_blank"} par rapport àau [référentiel créé par joBr99](https://github.com/joBr99/nspanel-lovelace-ui){: target="_blank"} à une interface mieux travaillée ( selon moi ), et dépasse désormais le [nombre d'adeptes](https://github.com/Blackymas/NSPanel_HA_Blueprint/stargazers){: target="_blank"}, pour un référentiel plus récent.
> On peut dire qu'il à le vent en poupe.

## Comment ça fonctionne

En temps normal pour modifier l'affichage du NSPanel selon tes envies il faut mettre la main dans le cambouis et utiliser [l'éditeur HMI de Nextion](https://nextion.tech/nextion-editor/#_section2){: target="_blank"}. Blackymas à créer une Interface complète HMI modifiable en paramétrant le Blueprint. Plus besoin d'utiliser d'éditeurs. à part si tu veux changer le fond d'écran par exemple.

### Mise en place

Premièrement il faut **importer le Blueprint** dans HA, ensuite il faut importer **le fichier tft** dans la configuration HA et pour terminer **paramétrer** le NSPanel dans Esphome.

Tu trouveras toute la [documentation à cette adresse](https://github.com/Blackymas/NSPanel_HA_Blueprint/wiki/(EN)-First-Steps---Installation-and-Setup){: target="_blank"}

## Installation et paramétrage en vidéo du {{ page.ref }}

{% include videoPlayer.html youtubeId="jpSTA_ILB8g?si=4qd8jjwo-LGACG6s" %}

## Avantage du firmware Esphome

Je vois deux gros avantages d'intégrer le firmware Esphome pour le {{ page.ref }}:
- l'intégration est 100% compatible Home assistant
- esphome est très intuitif
- Esphome permet de faire de chaque intégration un partage de connection wifi via hotspot

> L'inconvénient du NSPanel est qu'il fonction avec le protocole Wifi mais Esphome est là pour améliorer les liaisons.

{% picture posts/{{ page.guid }}/affichage-accueil-nspanel-blackymas-controle-lumiere.png --alt affichage accueil nspanel blackymasvpar blueprint et controle des lumières --img width="940" height="529" %}

## Avantage du Blueprint

Le blueprint fournis peut être déroutant vu le nombre de paramétrages disponible, mais une fois que tu as fait le tour, **c'est tellement gratifiant d'y apporter une modification et de voir que après enregistrement et de façon quasi instantanée l'interface mise à jour sur le NSPanel.**

## Que permet de contrôler le référentiel Blackymas

Depuis peu, **presque tout**, merci à [Edwardtfn](https://github.com/Blackymas/NSPanel_HA_Blueprint/commits?author=edwardtfn){: target="_blank"} qui continue à développer cette interface pour le plus grand plaisir des utilisateurs.

1. les boutons ( de façon physique ou virtuel ).
2. connaître la météo
3. piloter les scènes
4. la climatisation ou **chauffage**
5. intégration qrcode ( idéal pour connection wifi invité )
6. contrôle les **interrupteurs**
7. la lumière
8. la température ambiante (sond du NSPanel)
9. les **volets**
10. les **medias**
11. l'affichage et paramétrage de l'écran du NSPanel
12. l'affichage de toutes les infos dispos dans HA
13. l'alarme de façon simple et intuitif

Bientôt le [NSPanel pourra](https://github.com/Blackymas/NSPanel_HA_Blueprint/issues?q=is%3Aopen+is%3Aissue+label%3Aroadmap){: target="_blank"}:

1. Afficher la conso
2. Afficher un système de notification amélioré
3. contrôler plusieurs alarmes
4. etc...

## {{ page.ref }} en image

*Et un avec un peu d'imaginations ...*

Grâce à **Home Assistant et au NSPanel** tu pourrais contrôler facilement dans chaque pièces plus particulièrement dans chaque chambres la lumière, le chauffage, les volets, les medias avec un seul NSPanel, **ça laisse rêveur mais tellement simple à réaliser.**

{% include product-embed.html image="https://ae01.alicdn.com/kf/S9242a718ab714f0496e47c63c258156e9/SONOFF-panneau-de-commande-pour-maison-connect-e-NSPanel-Pro-avec-cran-tactile-TFT-3-95.jpg_640x640.jpg_.webp" title="Sonoff NSPanel" brand="Sonoff" description="Nspanel interrupteur mural wifi" iteadlink="sonoff-nspanel-smart-scene-wall-switch" domlink="objets-connectes/5985-sonoff-interrupteur-mural-nspanel-smart-scene-eu.html" affiliate="_DdoJuth" %}

## Conclusion

Voilà une **présentation qui mérite le détour** et ainsi mettre à contribution de manière simple le contrôle via une interface tactile l'ensemble des composants domotique de ta maison à l'image de KNX mais 6 fois moins cher. Merci à Home Assistant et Esphome de pouvoir réaliser ce genre de rêve et **fonce t'équiper de** [**NSPanel**](https://www.domadoo.fr/fr/objets-connectes/5985-sonoff-interrupteur-mural-nspanel-smart-scene-eu.html?domid=39){: target="_blank"}.