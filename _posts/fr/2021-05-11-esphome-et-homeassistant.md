---
guid: 7
title: 'Intégrations Esphome et Homeassistant'
date: '2021-05-11T14:28:47+00:00'
author: Nico
categories: Domotique Haade-lab Home-Assistant
layout: post
image: esphome-logo-haade-homeassistant
tags:
description: "Découverte d'esphome dans homeassistant"
language: fr
locale: fr
published: true
beforetoc:
toc: true
comments: true
---

ESPHome est un système d’injection de programme afin de contrôler vos modules wifi ESP8266 / ESP32 par des fichiers de configuration simples mais puissants et les contrôler à distance via des systèmes domotiques tel que Homeassistant.

D’ailleurs la société Nabu Casa qui détient le programme Homeassistant à acquis en Mars 2021 le programme esphome. lien de l’article concerné: [acquisition esphome par homeassistant](https://www.home-assistant.io/blog/2021/03/18/nabu-casa-has-acquired-esphome/){:target="_blank"}

Grâce à l’intégration dans Homeassistant de esphome il est désormais très facile d’injecter un fichier dans le module wifi esp8266/esp32 et de le contrôler, la première injection se fait par usb à l’aide d’un adaptateur UART/USB FT232 disponible ici, et permettant de connecter le module via les connecteurs 3,3/5v, Gnd, Rx/Tx et Tx/Rx.

### Installation:

> Vous pouvez retrouver l’installation en Anglais sur esphome.io:
[https://esphome.io/guides/getting\_started\_hassio.html](https://esphome.io/guides/getting_started_hassio.html){:target="_blank"}

Rien de plus simple dans homeassistant (hassio), **onglet** Supervisor &gt;&gt;&gt; Boutique des modules supplémentaires recherchez **esphome** et l’installer. Il n’y a rien à toucher dans l’onglet configuration du module, une fois installé, n’oubliez pas de sélectionner **Afficher dans la barre latérale.** Afin de pouvoir contrôler l’injection.

![installation esphome dans homeassistant]({{ site.baseurl}}/assets/images/posts/{{ page.guid }}/esphome-install.webp)

## Utilisation:

Désormais il ne reste plus qu’à appuyer sur le petit **+** en bas à droite et de suivre les étapes:

- 1 – donner un nom au fichier ( en miniature et sans espace )
- 2 – bien choisir la plateforme correspondant à la puce disponible sur votre circuit imprimé
- 3 – remplissez les coordonnées de votre wifi en réseau local **2,4Ghz** ( ota pas obligatoire )
- 4 – finish

![ajout module esphome dans homeassistant]({{ site.baseurl}}/assets/images/posts/{{ page.guid }}/esphome-ajout.webp)


gif animé lors d’un ajout d’un module dans esphome Maintenant il faut intégrer les entrées ( relais, contacteur, optocoupleur, led, etc …. ), vous en trouvez pas mal sur le site esphome.io

- dans les devices: [esphome.io/#devices](https://esphome.io/#devices){:target="_blank"}
- dans les diy [fait soi même:](https://esphome.io/guides/diy.html){:target="_blank"}

> Il y a de quoi s’éclater à bas prix, maintenant il ne reste plus qu’à affiner les injections en fonction des modules achetés.
