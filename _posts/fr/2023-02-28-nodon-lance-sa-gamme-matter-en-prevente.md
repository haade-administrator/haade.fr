---
guid: 49
title: "Nodon lance sa gamme matter en prévente"
description: "Aujourd’hui, NodOn finalise ses premiers produits compatibles et propose un démo kit Matter avec ses produits phares afin de permettre aux industriels de découvrir les produits, leurs capacités et de tester l’interopérabilité Matter avec leur propre écosystème."
layout: post
author: Nico
date: 2023-02-28 13:11
last_modified_at: 
categories: [Domotique, Protocoles, News, Matter]
tags: []
image: 'Nodon-lance-sa-gamme-matter-en-prevente.png'
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
  - https://nodon.fr/blog/
  - https://buildwithmatter.com/
---
Aujourd’hui, NodOn finalise ses premiers produits compatibles et propose un démo kit Matter avec ses produits phares afin de permettre aux industriels de découvrir les produits, leurs capacités et de tester l’interopérabilité Matter avec leur propre écosystème.

[demo-kit-matter par Nodon](https://nodon.fr/demo-kit-matter/){: target="_blank"}

Les produits présentés en démonstration sont basés sur du Hardware d’ores et déjà finalisé, commercialisé et certifié CE ; seul le Firmware Applicatif nécessite d’être finalisé afin d’être certifié Matter.

# Les modules présentés

|{% picture posts/{{ page.guid }}/module-multifonction-matter-400x300.png --alt schema module nodon matter 1 relay --img width="400" height="300" %}|Le **Module Multifonction** Matter permet de piloter une porte de garage, un portail, un radiateur, une prise, une chaudière… Il s’installe rapidement sur l’équipement existant pour le rendre connecté et contrôlable à distance|
|{% picture posts/{{ page.guid }}/module-eclairage-matter-400x300.png --alt schema module nodon matter eclairage 2 relay --img width="400" height="300" %}|Avec ses deux canaux, **le Module Éclairage** ON/OFF Matter permet de rendre connectés et pilotables à distance un ou deux éclairages. Il s’installe rapidement et sans travaux derrière un interrupteur filaire, au plafonnier ou au tableau électrique.|
|{% picture posts/{{ page.guid }}/module-volet-roulant-matter-400x300.png --alt schema module nodon matter volet roulant --img width="400" height="300" %}|Le **Module Volet Roulant** Matter rend le volet roulant, le store banne ou le brise-soleil orientable motorisé connecté grâce à une installation simple et sans travaux).|
|{% picture posts/{{ page.guid }}/capteur-temperature-matter-400x600.png --alt schema module nodon matter capteur température  --img width="400" height="300" %}|Le **Capteur de température** et d’humidité Matter relève la température et l’humidité ambiante de manière périodique et envoie les informations à la centrale domotique pour assurer une gestion efficace du chauffage.|
|{% picture posts/{{ page.guid }}/telecommande-octan-matter-400x550.png --alt schema module nodon matter telecommande octan --img width="400" height="300" %}|La **Télécommande Octan** Matter est une hybride entre un interrupteur et une télécommande, qui permet de piloter directement la lumière, les volets roulants, la porte de garage ou tout autre objet connecté compatible. Elle peut également être utilisée pour lancer un scénario. Magnétique, elle s’utilise en télécommande ou en interrupteur, fixée au mur avec son support mural.|
|{% picture posts/{{ page.guid }}/detecteur-ouverture-matter-400x600.png --alt schema module nodon matter detecteur ouverture --img width="400" height="300" %}|Le **Détecteur d’Ouverture** Portes et Fenêtres Matter permet de connaître en temps réel l’état ouvert/fermé d’un ouvrant. Il reporte l’information à une centrale domotique afin de réaliser des économies d’énergie.|

# Matter en quelques mots

[Matter](https://buildwithmatter.com/){: target="_blank"} pour répondre à la problématique de l’interopérabilité
Matter est un nouveau protocole dont le but initial est de répondre à une grande problématique du monde de la maison connectée : l’interopérabilité. En effet, la première volonté de Matter est d’être le protocole universel qui va interconnecter toute la maison. Matter est né de l’association des grands noms de la Silicon Valley dominant le marché des assistants vocaux : Amazon, Apple et Google qui se sont associés pour proposer un protocole commun sur lequel communiqueront leurs écosystèmes. Matter ne dépend pas uniquement des 3 géants Américains puisque c’est plus de 220 entreprises différentes qui participent au développement avec notamment les leaders du secteur en France tels que Somfy, Schneider Electric ou encore Legrand.

{% picture posts/{{ page.guid }}/visuel-nodon-matter.jpg --alt schema matter par nodon  --img width="940" height="380" %}

# Nodon et Matter

NodOn **privilégie le protocole Thread**. Il est basé sur l’IPv6, qui est un protocole IP qui le rend compatible avec Matter.
Thread est un protocole très intéressant car peu gourmand en énergie, à l’instar du Wifi. En plus d’être sécurisé, il fonctionne sur un réseau maillé, ce qui permet d’étendre sa couverture et la portée globale des objets présents dans le réseau. Le seul point faible est que ce protocole n’a pas de couche applicative (deux devices ne peuvent pas communiquer directement entre eux).
Matter va jouer le rôle de couche applicative au-dessus de Thread. Le protocole Thread convient parfaitement aux applications de NodOn qui consomment peu d’énergie et transmettent peu de données (contrôle de l’éclairage, des volets roulants etc.).

# Présentation en vidéo

{% include youtubePlayer.html id="ZdjCGJ933u0" %}