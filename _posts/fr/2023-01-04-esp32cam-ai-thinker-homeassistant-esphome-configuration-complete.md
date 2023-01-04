---
guid: 36
title: "Esp32-cam Ai Thinker et homeassistant"
description: "Installation complète et facile de la caméra Esp32-cam Ai-thinker dans homeassistant via esphome"
layout: post
author: Nico
date: 2023-01-04 12:33
last_modified_at: 
categories: [Domotique, Securite]
tags: []
image: 'integration-esp32cam-esphome-homeassistant.png'
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
  - https://esphome.io/components/esp32_camera.html
  - https://www.studiopieters.nl/esp32-cam-troubleshooting/
---

Pourquoi lancer cet article alors qu'il en existe déjà plein d'autres. Primo je me suis rendu compte que les autres articles ou sujet de forums sont tous incomplets ou mal expliqués quand à l'intégration complète dans Homeassistant. Secondo comme l'un des prochains articles aura comme intégration une microcaméra esp32-cam dans une lumière, il me fallait d'abord expliquer cette intégration.

# Prérequis
- Homeassistant avec Esphome
- Un Esp32-cam Ai Thinker classic
- un [connecteur FTDI]({% link _products/{{ page.locale | slice: 0,2 }}/2021-05-19-module-de-conversion-usb-uart-ft232.md%})

{%- include alert.html type="help" text="Si c'est ta première intégration et que tu n'as pas de connecteurs FTDI tu peux acheter depuis peut la caméra esp32-cam avecbranchement par usb il s'agit de la version ch340" link="https://s.click.aliexpress.com/e/_DmTiKkr" textlink="Esp32-cam ch340g" %}

{% include product-embed.html guid="2133" %}

# Schéma de branchement ESP32-cam sur FTDI

Le seul et l'unique branchement à suivre pour flasher la puce la première fois. **N'oublie pas de passer le cavalier sur 5v**.
> J'ai l'habitude avant branchement sur le port usb de **maintenir le bouton reset des modules esp32** et de relâcher une fois le module branché sur le pc.

{% picture posts/{{ page.guid }}/connection-esp32-cam-ai-thinker-with-ftdi-cavalier3v3.jpg --alt connection esp32-cam avec ftdi programmeur via usb --img width="756" height="381" %}

|ESP32-CAM|FTDI Programmer|
|---------|---------------|
|**GND**{: .black}|**GND**{: .black}|
|**5V**{: .red}|**VCC (5V)**{: .red}|
|**U0R**{: .green}|**TX**{: .green}|
|**U0T**{: .yellow}|**RX**{: .yellow}|
|**GPIO 0**{: .blue} to **GND**{: .black}||

si tu **rencontres des soucis** voici [un article complet et juste](https://www.studiopieters.nl/esp32-cam-troubleshooting/){: target="_blank"} sur la manip à réaliser **(en Anglais)**

# Avant de rentrer dans le vif du sujet

Les deux liens ci-dessous m'ont permis de paramétrer la caméra sur esphome
***Le premier*** pour les paramétrages en général, ***le second*** pour l'exposition de la vidéo et des images afin de pouvoir les exploiter sous HA ou via un NVR.

1. [Esphome 32cam](https://esphome.io/components/esp32_camera.html){: target="_blank"}
2. [Esphome 32cam server](https://esphome.io/components/esp32_camera_web_server.html){: target="_blank"}

# Premier Flash

Première étape connecte le FTDI à l'ordinateur embarquant homeassistant

{%- include alert.html type="info" text="J'ai l'habitude avant branchement sur le port usb de <b>maintenir le bouton reset des modules esp32</b> et de relâcher une fois le module branché sur le pc." %}

Ensuite rendez-vous dans l'onglet Esphome et on clic sur le bouton vert New Device
1. Nomme la caméra
2. à l'étape de l'installation clic sur **SKIP THIS STEP**
3. choisis la carte, pick specific board > Ai Thinker ESP32-CAM
4. install > Plug into the computer run Dashboard
5. **Copie la clé API** tu en auras besoin lors de la configuration de la caméra dans home assistant.

# Fichier complet à importer dans esphome

Le gist ci-dessous est complet il faudra biensûre personnaliser, les noms, les clés API, OTA et WIFI

## Explication des lignes

- de la ligne 37 à 49: Exposition des ports GPIO de l'esp32-cam
- de 53 à 60: paramétrage de l'image/vidéo
- de la ligne 64 à 68 paramétrage du serveur
- ligne 70 à 72 calage sur l'heure de homeassistant
- ligne 76 à 78 prise en charge de la lumière flash
- ligne 80 à 84 prise en charge de la led rouge ( signalement état du wifi)
- ligne 86 à 94 ajout interrupteur pour contrôler les lumières
- ligne 96 à 101 affichage qualité signa wifi
- ligne 103 à 108 affichage version esphome
- ligne 110 à 112 ajout d'un bouton de redémarrage de la caméra

{% gist 3eb516ff987528c414b5bb273dc48fc3 %}

# Intégration et configuration dans Home-Assistant

Une fois intégré dans Esphome, il faut encore paramétré la caméra dans homeassistant, rien de plus simple, il suffit d'aller dans **Paramètres** > **Appareils et services**, ensuite en haut à gauche apparaîtra un onglet esphome à configurer comme l'image ci-dessous.

{% picture posts/{{ page.guid }}/home-assistant-configuration.png --alt configuration de la caméra esp32 dans homeassistant --img width="281" height="320" %}

**lors de la configuration encore deux étapes à suivre:**

1. il y aura une demande **d'ajout de noeud**
2. après validation il faudra **renseigner la clé api** que tu auras copié précédemment enfin si tu as bien suivi les étapes du tuto.

## rendu de la caméra Esp32-cam dans Home-assistant

EN regardant l'intégration ci-dessous nous avons bien:

- le contrôle et l'état des deux lumières
- le capteur de la caméra
- le redémarrage de la caméra esp32-cam
- les infos diagnostics

{% picture posts/{{ page.guid }}/rendu-homeassistant.png --alt rendu complet de la caméra esp32-cam dans homeassistant --img width="940" height="857" %}

# Conclusion

Pour 6€ avoir une caméra miniature intégrée à ce point dans homeassistant grâce à esphome, je dis chapeau, tu peux foncer, les modules Esp32 et Esp8266 sont vraiment des modules à acheter, à tester et à intégrer dans la vie de tous les jours, dans un prochain article je présenterai un esp32-cam intégré dans une borne lumineuse de parking une spycam sans aucun doute 😜.


{% include product-embed.html guid="2133" %}

