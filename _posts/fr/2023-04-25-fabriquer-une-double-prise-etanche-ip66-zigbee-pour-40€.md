---
guid: 62
title: "fabriquer une double prise étanche zigbee pour 40€"
description: "grâce à un super boitier étanche et deux micromodules zigbee KR2303 je vais vous montrer comment fabriquer une double prise ip66 pour l'extérieur et commandable dans ton assistant préféré"
layout: post
author: Nico
date: 2023-04-25 19:45
last_modified_at: 
categories: [Haade-lab, Zigbee, Domotique]
tags: []
image: 'fabriquer-une-double-prise-zigbee-extérieur-pour-40€.png'
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
  - https://fr.aliexpress.com/item/1005004899030766.html?spm=a2g0o.order_list.order_list_main.10.6bbd5e5bq0b6uN&gatewayAdapt=glo2fra
  - https://fr.aliexpress.com/item/1005002104232877.html?spm=a2g0o.order_list.order_list_main.5.6bbd5e5bq0b6uN&gatewayAdapt=glo2fra
---

Le monde des objets compatibles zigbee s'agrandit rapidement mais il reste nombre de niches inexploitées, sur certaines créations de modules. Aujourd'hui un petit tuto création tout simple qui consiste à créer un module double prise contrôlable en zigbee pour l'extérieur IP66 afin de résister aux intempéries en toute sécurité tout celà au prix de 40€ !.

## Prérequis
- un boitier étanche avec 1 ou deux prises
- un ou deux micromodules compatible Zigbee
- du fil électrique 2,5mm
- 3 raccords électriques de 3 entrées de type Wago
- de la patience mais pas trop 😋

Dans ce tuto j'ai décidé de domotiser une double prise avec deux modules zigbee 16A KR2303, j'ai choisi ces modules pour leurs tailles et la compatibilité avec le branchement sur une prise N et L dispo en entrée et sortie, possibilité d'y connecter un interrupteur, mais dans ce tuto ce ne sera pas le cas.

Les boitiers de la marque AVOIR sont de qualités, les plastiques épais, les joints parfaitement étanche, la prise est solide mais le rendu des plastiques fait un peut cheap si l'on compare par rapport à ce que fait Legrand.

{% include product-embed.html image="https://ae01.alicdn.com/kf/H9ce046d022434887a9a6d4df15b50d7fy/Avoir-IP66-ext-rieur-tanche-prise-murale-tanche-avec-interrupteur-ue-royaume-uni-norme-g-n.jpg_Q90.jpg_.webp" title="Boitier étanche IP66" brand="Avoir" description="Avoir IP66 extérieur étanche prise murale étanche avec interrupteur ue royaume-uni norme générale matière plastique répéter trou ouvert prise exterieur etanche" affiliate="_DdQcPDb" %}

J'ai pris quelques photos du boitier avoir ci-dessous, pour le prix je trouve que ça vaut le cout. Seul bémol c'est une prise qui n'est pas encastrable comme peut le faire legrand, ça permet tout de même de pouvoir l'installer n'importe ou.

{% picture posts/{{ page.guid }}/prise-exterieur-ip66-avoir-detail-qualite-produit.png --alt détail qualité prise avoir ip66 --img width="940" height="529" %}

Concernant les micromodules, je suis parti sur ce type de fabrication chinoise pour leurs **tailles de 41 x 41 x 20mm**, et aussi et surtout **pour le prix moins de 6€** l'unité tu peux en trouver d'autres sur le marché et peut-être même de meilleur qualité mais plus gros et plus cher. Bref l'intégration **dans Z2M ne pose pas de soucis**, par contre pour les intégrer correctement dans le boitier j'ai du enlever la coque, ce qui en soit ne pose pas de soucis vu qu'ils seront de toute façon dans une boîte étanche.

{%- include alert.html type="warning" text="avant de démonter la coque pense à appairer les modules dans ton assistant préféré, attention tu vas travailler sous tensions pense à couper le courant avant"  %}

{% include product-embed.html image="https://ae01.alicdn.com/kf/Sfa0ee5ba746144d99182fc92b45edf28b/Tuya-Mini-interrupteur-connect-Zigbee-wi-fi-16a-2-voies-pour-maison-connect-e-avec-Tuya.jpg_Q90.jpg_.webp" title="Mini interrupteur intelligent" brand="QIASHIP" description="Tuya – Mini interrupteur connecté Zigbee, wi-fi, 16a, 2 voies, pour maison connectée avec Tuya, Alexa, Alice, Google Home" affiliate="_Dd1nNel" %}

{% picture posts/{{ page.guid }}/micro-module-smart-switch-zigbee-16a-prise-exterieur-etanche.png --alt micormodules special prise etanche zigbee --img width="940" height="529" %}

## Intégration dans Z2M et Homeassistant

{% picture posts/{{ page.guid }}/integration-module-ewelink-home-assistant.png --alt micormodules special prise etanche zigbee integration --img width="940" height="85" %}

Comme tu peux le voir sur les photos ci-dessous les micro modules sont bien reconnus et paramétrés comme routeur Ewelink ZR03. Seul bémol de ces modules, ils ne permettent pas de mesurer l'intensité du courant et de la faire remonter. Bien dommage mais je ferai sans pour cette intégration malheureusement.
> Aussi l'alimentation est mal reconnu dans Z2M mais ça n'a aucune importance sur le fonctionnement.

{% picture posts/{{ page.guid }}/integration-home-assistant-switch-ewelink-kr230-router.png --alt micromodules special prise etanche zigbee integration reconnaissance --img width="940" height="738" %}

### Expose dans Z2M

Le Module n'expose pas grand chose:

- l'interrupteur On/Off 
- le mode après coupure de courant
- la qualité du lien

{% picture posts/{{ page.guid }}/integration-home-assistant-switch-ewelink-kr230-expose.png --alt micromodules special prise etanche zigbee integration expose --img width="673" height="322" %}

## Passons à l'assemblage

J'ai fixé les micromodules à l'aide d'un pistolet à colle chaud et dans le sens de la photo en mettant bien la bobine de cuivre situé sur le circuit imprimé au fond du boitier car sinon elle serait comprimé lors de l'assemblage du boitier.

{% picture posts/{{ page.guid }}/integration-modules-zigbee-dans-boitier-ermethique.png --alt positionnement des micromodules dans le boitier étanche --img width="940" height="529" %}

Ensuite il ne te reste plus qu'à faire le raccord des modules sur les prises comme sur la photo ci-dessous et de raccorder aux prises.

{% picture posts/{{ page.guid }}/branchement-des-cables-electriques-plus-terre.png --alt branchement des micromodules dans le boitier étanche --img width="940" height="529" %}

Branche le tout sur le courant et referme le disjoncteur, il ne te reste plus qu'à tester.

{% picture posts/{{ page.guid }}/derniere-etape-assemblage.png --alt assemblage final et branchement sur le courant --img width="940" height="529" %}

## Conclusion

Voilà **pour moins de 40€** nous avons rendu une double prise extérieur IP66 intelligente et contrôlable grâce à homeassistant. Si tu pars sur une prise simple celle-ci ne **reviendra qu'à 25€ maximum**. Le prix est **très intéressant** surtout que ce type de produits zigbee reste rare voir inexistant sur le marché actuel.
