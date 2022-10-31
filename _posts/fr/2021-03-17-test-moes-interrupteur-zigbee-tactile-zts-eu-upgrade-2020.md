---
guid: 6
title: '[TEST] Moes: Interrupteur Zigbee tactile {ZTS-EU} UPGRADE 2020'
description: "Test de l'interrupteur tactile Moes référence zts-eu"
date: '2021-03-17T20:40:48+00:00'
last_modified_at:
author: Nico
categories: Tests
layout: post
image: inter-moes.png
tags:
locale: fr_FR
published: true
sitemap:
  changefreq: #always hourly daily weekly monthly yearly never
  exclude: #'yes' or 'no'
  priority: #between 0.0 to 1.0, 1.0 high priority
  lastmod: # date to end modification
beforetoc:
toc: true
comments: true
redirect_from:
  - /blog/tests/test-moes-interrupteur-zigbee-tactile-zts-eu-upgrade-2020
---
Alors pourquoi avons nous choisi de vous présenter ce produit, et bien car il a qu’un seul inconvénient tout le reste c’est du positif.

> L’interrupteur tactile compatible zigbee de Moes ressemble énormément à l’inter de Livolo, cependant l’upgrade 2020 et l’interface tactile font de ce produit un très bon interrupteur et surtout qui sort du lot.

[**Lien Commercial Interrupteur Moes Upgrade 2020**]({% link _products/{{ page.locale | slice: 0,2 }}/2021-03-18-interrupteur-zigbee-tactile-moes-zts-eu-upgrade-2020.md %})

Comme le dit tonton dans la vidéo, l’interrupteur Moes fonctionne sous homeassistant avec le module zigbee2mqtt à partir de la version 1.18.x.

## Boîte d’encastrement carré Coswall idéal pour le nouveau et l’ancien:

1. [boite à encastrer 83mm matériaux creux]({% link _products/{{ page.locale | slice: 0,2 }}/2021-03-18-boitier-dencastrement-carre-coswall-placo.md %})
2. [boitier d’encastrement à sceller Coswall 85mm]({% link _products/{{ page.locale | slice: 0,2 }}/2021-03-19-boitier-dencastrement-a-sceller-coswall-85mm.md %})

## Alors quels sont ses avantages:

1. Il a une dimension de 86mm de côté ce qui le rend compatible avec les boîtes d’encastrements carrées d’ailleurs on en trouve de très bonnes sur Aliexpress lien ci-dessus:
2. Existe en version Européenne et US
3. Disponible en 3 coloris ( blanc/noir/doré )
4. Disponible en 1,2 et 3 touches (gang)
5. L’interface tactile est sensible et réactive nous n’avons rencontré aucun soucis lors des tests
6. L’interrupteur intègre **le neutre ( branchement non obligatoire )** <span class="has-inline-color has-vivid-red-color">*fait mieux que la concurrence*.</span>
7. agit comme relais réseau zigbee ( Si le neutre est branché ).
8. En branchant **la phase seule le voyant bleu s’allume** sans avoir besoin de **rajouter une capacité** <span class="has-inline-color has-vivid-red-color">*fait mieux que la concurrence*.</span>
9. la **lumière bleue est discrète**, il peut donc facilement être utilisé dans une chambre à couchée
10. **Absence de bruit de contacteur** lors de changement d’état.
11. Il fonctionne en **mode Toggle** ( donc pas besoin d’y brancher une ampoule )
12. De ce fait on peut simuler un va et viens (2way) via notre assistant préféré.
13. Le Prix plus qu’attractif 15-17€ pour l’inter blanc 1 touche

## Quel est l’inconvénient car j’en ai trouvé qu’un seul à part le fait qu’il n’agisse pas comme routeur quand le neutre n’est pas branché

1. **L’antenne interne manque de puissance** lors de nos test l’interrupteur est situé à 3 mètres de l’antenne zigbee et le **LQI indiquait 52**, tandis que le capteur de porte xiaomi situé à la même distance **affiche 113 LQI**. Ayant testé plusieurs inter tactiles de différentes marques les résultat restent sensiblement les mêmes.
2. La lumière de l’interrupteur ne fonctionne pas en mode Toggle ( sans ampoules de connectées via l’interupteur.

## En Conclusion

N’hésitez pas, vous pouvez foncer et l’acheter c’est vraiment un très bon produit.

## Vidéo Officielle Moes interrupteur de présentation par Tonton

{% include youtubePlayer.html id="cq0ZeT6K1uY" %}

Tonton Alias Yann a mis à disposition une vidéo concernant le test de l’interrupteur Moes tactile ZTS-EU.
