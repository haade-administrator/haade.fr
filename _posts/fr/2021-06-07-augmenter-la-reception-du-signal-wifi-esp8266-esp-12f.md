---
guid: 10
title: 'Augmenter le signal wifi sur esp8266 esp-12f esp-12s'
description: "Amélioration du signal wifi d'un module esp8266/esp12 en soudant facilement une antenne externe"
date: '2021-06-07T08:06:15+00:00'
last_modified_at:
author: Nico
layout: post
tags: esp8266 esp12 amélioration
categories: Domotique Haade-lab Home-Assistant
locale: fr
published: true
beforetoc:
toc: true
image: soudure-antenne-exterieur-esp-12f-plus-20db
comments: true
---

Voilà un article qui n’est autre que la continuité d’un article que j’ai rédigé il y a peut de temps [Domotiser sa porte de garage pour 5€](https://www.haade.fr/blog/tutoriel-domotique-electronique/domotiser-sa-porte-de-garage-pour-5e/). Il faut maintenant augmenter la réception du signal wifi sur l’ESP8266. En effet les carte ESP8266 esp-12f/12s sont équipées d’une antenne interne peut performante. De plus les moteurs de portes de garages sont bien souvent éloignés de notre réseau wifi. Et pour rien arranger les box du marché ont très souvent des antennes internes, **qui sont faut l’avouer de mauvaises émissivités.**

### Antenne acheté sur aliexpress avec un gain de 6dbm et fil ipex

![antenne wifi connecteur ipex 20db]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/antenne-wifi-gain-6db-connectique-ipex-820.webp{{ cachebuster }}){: width="700" height="394"}

Préparation fil ipex avant soudure antenne wifi gain 6dbm sur esp8266 En installant le module chez tonton qui, *si vous nous suivez, se trouve être le second rédacteur du site et le responsable de la chaine youtube*. Nous nous sommes rendu compte que le module esp8266 7-30v équipé d’un esp-12f/12s n’arrivait pas rester sur le réseau wifi -90dbm environ. Alors j’ai un petit peut fouillé sur le net ça c’est pas bien difficile et [j’ai trouvé un article en anglais sur une telle soudure.](https://www.instructables.com/External-Antenna-for-ESP8266/){: target="_blank"}

De ce pas j’ai commandé un lot de deux antennes wifi sur aliexpress et dès réception je me suis attelé à la tâche.

Premièrement j’ai mesuré sur plusieurs heures à un point donné la puissance wifi avec l’antenne de base. Une mesure établi toutes les 20 secondes. Tu peux voir un débit moyen de -68dbm.

![Capture su plusieurs heures d'un débit wifi normal avec l'antenne intégrée nativement au circuit esp8266-12f]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/wifi-avant-820.webp{{ cachebuster }}){: width="431" height="371"}

Ensuite j’ai sectionné les deux broches de sorties de l’antenne grâce à un cutter. Pas bien difficile, la section du cuivre se fait facilement.

![section des broches wifi sur un esp8266 esp-12F/12s]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/sectionnement-antenne-presente-820.webp{{ cachebuster }}){: width="700" height="394"}

### Passons à la Soudure du fil Ipex afin d’augmenter la réception du signal wifi sur esp8266-12f/12s

Facile à réaliser avec un fer à souder traditionnel. Il ne reste plus qu’à augmenter la portée du signal wifi esp8266. Ci dessous la nomenclature.

1. Celle numérotée 1 est la sortie wifi principale point positif entouré d’un fil nylon
2. Celle de droite numéro 2 est le Ground ( filaments entourant le fil conducteur principal de l’antenne ).

![zoom soudure antenne wifi -6dm sur esp8266-12f type wemos d1 mini]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/antenne-soudee-esp-12f-wemos-d1-mini-820.webp{{ cachebuster }}){: width="700" height="394"}

Après vient les soudures. Attention à ce que 1 ne touche pas 2 car sinon il va y avoir des pertes. D’ailleurs facilement testable avec un multimètre.

Testons à présent avec l’antenne en place en gardant le module dans les mêmes conditions que précédemment. Et là on aperçoit bien sur la photo le changement de dbm. Je pensais gagner 10-15dbm mais je suis à 20dbm de mieux donc à ne pas hésiter à réaliser cette soudure. Une fois installé chez tonton nous sommes passé de -90dbm à -70dbm et le wifi reste fixé donc c’est **jackpot.**

![image gif présentation de gains -20db]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/avant-apres-gain-20db.webp){: width="430" height="369"}

Capture d’écran animé esphome gain wifi suite à soudure antenne sur esp8266 **Pour info une bonne distance se situe entre -60 et -50dbm**

N’hésite pas à tester le tuto, il fonctionne à coup sûre. Sur toutes les cartes utilisant la puce esp8266-12f/12s. Comme le yunshan 7-30v, la célèbre carte de développement wemos d1 mini et wemos d1 v3.0. La version pro est équipée d’une sortie IPEX pour antenne externe.
