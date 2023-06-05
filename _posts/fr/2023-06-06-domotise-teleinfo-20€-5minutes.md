---
guid: 68
title: "Domotise ton compteur edf pour 20€ en 5 minutes"
description: "Relève en 5 minutes la téléinfo dans homeassistant de n'importe quelle compteur edf avec une clé à 20€ sans wifi par esphome"
layout: post
author: Nico
date: 2023-06-04 21:01
last_modified_at: 
categories: [Haade-lab]
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

Il y a de nombreuses façons de récupérer la téléinfo du compteur Edf, l'un des derniers modules en date est le Lixee mais il a le désavantage de n'être compatible qu'avec certains compteurs. Je vais te montrer comment faire remonter la téléinfo dans homeassistant pour 20€ sans modules wifi esp32/8266, avec un micro module usb fabriqué par Charles Hallard.

## Prérequis
- homeassistant, Haos de préférence
- un micromodule usb téléinfo v3
- du fil communication
- un compteur EDF

## Avantage de cette installation:

- facile à mettre en place
- le tarif

## Inconvénient:

- proximité entre le module homeassistant et le compteur
- monopolise un port usb
- absorbe un peut de puissance d'ampérage de ta box domotique

## Top Chrono (5 minutes)

### module MQTT

- Installe le module complémentaire MQTT, Mosquitto

{% include homeassistantlink.html supervisor_addon="core_mosquitto" %}

Paramètres > modules complémentaires > boutique des modules complémentaires

- Crée un **compte utilisateur** pour mosquitto, en général je met en nom d'utilisateurs mqtt plus facile à reconnaitre 😏

{% include homeassistantlink.html users="" %}

- Retourne dans la configuration mosquitto

{% include homeassistantlink.html supervisor_addon="core_mosquitto/config" %}

et rajoute ces lignes dans l'onglet logins comme sur la capture d'image ci-dessous.

{% highlight shell %}
- username: "le login utilisateur"
  password: "mot de passe utilisateur"
{% endhighlight %}

- Démarre Mosquitto

{% include homeassistantlink.html supervisor_addon="core_mosquitto/info" %}

### Module téléinfo2mqtt

- Installe le module complémentaire téléinfo2mqtt

commence par ajouter le dépôt externe de fmartinu https://github.com/fmartinou/hassio-addons
{% include homeassistantlink.html supervisor_addon_repository="https://github.com/fmartinou/hassio-addons" %}

- Branche la clé micro téléinvo v3.0 de Charles Hallard sur le raspberry et redémarre homeassistant en haut à droite

{% include homeassistantlink.html settings="" %}


- Paramètre **téléinfo2mqtt**

{% include homeassistantlink.html supervisor_addon="9afc8f77_teleinfo2mqtt/config" %}

Branche le module téléinfo sur ta box domotique
redémarre homeassistant
- va dans paramètres > système > **matériel et clic sur tout le matériel**
- récupère le lien exacte de la clé