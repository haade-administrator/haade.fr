---
guid: 36
title: "Esp32-cam Ai Thinker et homeassistant"
description: "Installation complète et facile de la caméra Esp32-cam Ai-thinker dans homeassistant via esphome"
layout: post
author: Nico
date: 2022-12-25 23:25
last_modified_at: 
categories: [Domotique, Securite]
tags: []
image: 'integration-esp32cam-esphome-homeassistant.png'
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
  - https://esphome.io/components/esp32_camera.html
  - https://www.studiopieters.nl/esp32-cam-troubleshooting/
---

Pourquoi lancer cet article alors qu'il en existe déjà plein d'autres. Primo je me suis rendu compte que les autres articles ou sujet de forums sont tous incomplets ou mal expliqués quand à l'intégration complète dans Homeassistant. Secondo comme l'un des prochains articles aura comme intégration une microcaméra esp32-cam dans une lumière, il me fallait d'abord expliquer cette intégration.

# Prérequis
- Homeassistant avec Esphome
- Un Esp32-cam Ai Thinker classic
- un [connecteur FTDI]({% link _products/{{ page.locale | slice: 0,2 }}/2021-05-19-module-de-conversion-usb-uart-ft232.md%})

{% include product-embed.html guid="2133" %}

# Schéma de branchement ESP32-cam sur FTDI

Le seul et l'unique branchement à suivre pour flasher la puce la première fois. **N'oublie pas de passer le cavalier sur 5v**.
> J'ai l'habitude avant branchement sur le port usb de maintenir le bouton reset et de relâcher une fois le module branché sur le pc.

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

{%- include alert.html type="info" text="J'ai l'habitude avant branchement sur le port usb de maintenir le bouton reset et de relâcher une fois le module branché sur le pc." %}

Ensuite rendez-vous dans l'onglet Esphome et on clic sur le bouton vert New Device
- Nomme le module
- à l'étape de l'installation clic sur **SKIP THIS STEP**
- choisis la carte, pick specific board > Ai Thinker ESP32-CAM
- install et Plug into the computer run Dashboard

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

# 

{% include product-embed.html guid="2133" %}

