---
guid: 42
title: "automatiser un va et vient virtuel avec 2 inter zigbee"
description: "nous allons automatiser simplement grâce à blueprint et homeassistant un va et vient virtuel entre 2 interrupteurs simple voie zigbee"
layout: post
author: Nico
date: 2023-01-29 15:46
last_modified_at: 
categories: [Domotique, Home-Assistant, Haade-lab]
tags: []
image: 'automatiser-un-va-et-vient-virtuel-avec-blueprint-et-homeassistant.png'
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
  - https://gist.github.com/haade-administrator/f48574f3341c1ec5715dd1726177b05e
---

Il est courant en france de vouloir remplacer ses interrupteurs classiques par des interrupteurs zigbee. Afin d'économiser le coût, c'est de ne pas s'intéresser à de grandes marques comme **Legrand, Siemens**, etc. Nous nous orientons naturellement vers les marques chinoises de type **Sonoff, ou Moes** par exemple. Dans cette article je vais te montrer simplement comment domotiser virtuellement un va et vient existant avec deux interrupteurs zigbee classique, de façon simple, rapide et fiable grâce à **homeassistant et blueprint**.

# Prérequis

- 2 interrupteurs compatibles zigbee 3.0 ( Sonoff, Moes libre de neutre )
- homeassistant d'installé
- quelques notions d'électricités.

{% include product-embed.html image="https://ae01.alicdn.com/kf/Sa5aee894221e44ef9d8c22ce8dac2fded/MOES-interrupteur-bouton-poussoir-connect-Tuya-Star-Ring-zigbee-3-0-avec-t-l-commande-fonctionne.jpg_640x640.jpg" title="Nouvel interrupteur Moes Star ring series Zigbee" brand="Moes" description="MOES – interrupteur à bouton-poussoir connecté Tuya Star Ring, zigbee 3.0, avec télécommande, fonctionne avec Alexa et Google" affiliate="_DFJMnfN" %}

# 1ère étape brancher les interrupteurs

{%- include alert.html type="warning" text="Vous allez devoir travailler au voisinage d'une tension de 220V qui est dangereuse si vous entrez en contact avec un conducteur électrique. Prenez garde à vos manipulations, en cas de doute coupez l'alimentation électrique." %}

Un va et vient traditionnel est compsé de 4 phases 
- l'une va du tableau électrique à un interrupteur (rouge)
- du second interrupteur à l'ampoule (violet)
- entre les deux interrupteurs deux navettes (orange).

{% picture posts/{{ page.guid }}/schema-va-et-vient-traditionnel.jpg --alt schema va et vient traditionnel --img width="940" height="438" %}

si tu possèdes deux interrupteurs simples avec seulement **l'un des deux équipés de la phase provenant du tableau ( rouge )
alors il faudra garder une des deux navettes branchées (orange)**

Si les deux interrupteurs possèdent un neutre du tableaux **( cas des interrupteurs doubles alimentant des lumières d'un autre circuit ) alors tu pourras supprimer les deux navettes.**

Perso je laisse toujours les navettes en places dans la boite de dérivation et je les équipent d'un connecteur de type wago afin de protéger les fils électriques. On ne sait jamais si un jour je décide de revenir en arrière 👍.

{% picture posts/{{ page.guid }}/schema-va-et-vient-traditionnel-suppression-fils.jpg --alt schema va et vient traditionnel avec une navette de supprimé --img width="940" height="438" %}

# 2ème étape importer le blueprint

Partons du principe que tu as correctement connecté tes interrupteurs et qu'ils ont été correctement appairés à ton réseau zigbee alors nous pouvons maintenant importer le blueprint et paramétrer les deux interrupteurs.

Ci-dessous **un gif reprenant les étapes d'importations** d'un blueprint dans homeassistant.

![étape d'importation d'un blueprint dans homeassistant]({{ site.baseurl}}/assets/images/posts/{{ page.guid }}/parametrage-blueprint-va-et-vient-virtuel-2-way.webp{{ cachebuster }}){: width="939" height="528"}

Copie ce lien pour l'importation du blueprint:

[**https://gist.github.com/haade-administrator/f48574f3341c1ec5715dd1726177b05e**](https://gist.github.com/haade-administrator/f48574f3341c1ec5715dd1726177b05e){: target="_blank"}

Si tout s'est bien passé passons à l'automatisation:

{% picture posts/{{ page.guid }}/blueprint-2-way-simulate.png --alt créer une automatisation à partir du blueprint importé --img width="940" height="35" %}

Il ne te reste plus qu'à paramétrer les deux interrupteurs dans switch 1 et 2 et d'activer l'automatisation.

{% picture posts/{{ page.guid }}/parametre-blueprint.png --alt paramètre simplement automatisation --img width="940" height="361" %}

# Bonus

**Si tu veux le blueprint pour 3 interrupteurs** ( ce qui est courant) voici le lien à coller:

[**https://gist.github.com/haade-administrator/f551382802c642d24687bfbcd303f0fe**](https://gist.github.com/haade-administrator/f551382802c642d24687bfbcd303f0fe){: target="_blank"}

Et ici le lien **pour connecter 4 interrupteurs** en va et vient:

[**https://gist.github.com/haade-administrator/8897d84e11d5e505b729d24a535a89e4**](https://gist.github.com/haade-administrator/8897d84e11d5e505b729d24a535a89e4){: target="_blank"}

# Conclusion

Voilà une façon très simple d'automatiser un va et vient de façon virtuel, simple, rapide et fiable **sans délai de réponse entre les deux interrupteurs** autant dire que c'est de **l'instantané** 😁, le plus dure pour toi si tu n'as pas de notions d'électricités sera de brancher correctement les interrupteurs.

{% include product-embed.html image="https://ae01.alicdn.com/kf/Sa5aee894221e44ef9d8c22ce8dac2fded/MOES-interrupteur-bouton-poussoir-connect-Tuya-Star-Ring-zigbee-3-0-avec-t-l-commande-fonctionne.jpg_640x640.jpg" title="Nouvel interrupteur Moes Star ring series Zigbee" brand="Moes" description="MOES – interrupteur à bouton-poussoir connecté Tuya Star Ring, zigbee 3.0, avec télécommande, fonctionne avec Alexa et Google" affiliate="_DFJMnfN" %}


