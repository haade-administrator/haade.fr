---
guid: 101
title: ""
description: ""
ref: ""
layout: post
author: Nico
date: 2023-12-15 14:08
last_modified_at: 
categories: [Docker, Domotique, Zigbee]
tags: []
image: 'picture.png'
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
rating:  
sourcelink:
  - 
---

## Home Assistant OS sur ihost

Tu lis bien, et oui tu peux utiliser Home Assistant ( HAOS ) dans Ihost et ce en réalisant une simple manipulation et tout ça grâce aux image de [Darkxst](https://github.com/darkxst){: target="_blank"}

[image HAOS pour ihost](https://github.com/darkxst/ha-operating-system/wiki/HAOS-on-Sonoff-iHost){: target="_blank"}

Rien de plus simple pour Hacker Home Assistant sur le Sonoff {{ page.ref }}, pour celà il te suffit de faire le choix, soit:

1. d'une installation de l'image sur une carte sd sans toucher au firmware et au maskrom
2. ou d'une installation permanente sur le disque emmc de l'{{ pagge.ref }}. 

### Installation sur carte SD
**Avantage:** 
- ne touche pas au firmware d'origine
- nul besoin de transférer l'image via un logiciel dédié maskrom comme le RKdeveloptool par exemple.

**Inconvénient:**
- ouvrir la box
- souder un pont entre les deux points du Maskrom afin de démarrer sur carte SD
- Indication Led non fonctionnelle lors de l'installation

### Installation permanente sur emmc

**Avantage:**
- tu utilises toute la puissance du Hardware
- pas besoin de souder de ponts sur le maskrom

**Inconvénient:**
- ouvrir la box
- perte totale du firmware du Sonoff {{ page.ref }}
- indication LED partielles lors de l'installation

### Installation

J'ai choisi la première méthode car je n'ai pas trouvé le moyen de faire une sauvegarde du firmware d'origine et je voudrais tester à l'avenir les futures versions proposées par la team Ewelink.

Copie l'image [haos_ihost-11.1.x.img.xz](https://github.com/darkxst/ha-operating-system/releases){: target="_blank"} sur SDCARD avec ton utilitaire favoris **Balena Etcher or Rufus**

Soude un pont sur le maskrom de la carte ( perso j'utilise un cavalier )
Insert la carte dans l'{{page.ref}} branche à l'aide du cable-usb la box et patiente
au bout de quelques minutes tu auras la page homeassistant sur ton navigateur.

**Installation des indicateurs lumineus dans HAOS**

Fourni aussi par Darkxst, cette intégration te permettra de faire fonctionner les LED de la box

[Ihost indicator](https://github.com/darkxst/ihost_indicator){: target="_blank"}
