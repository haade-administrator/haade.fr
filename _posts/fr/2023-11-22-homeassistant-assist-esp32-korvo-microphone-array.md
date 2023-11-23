---
guid: 97
title: "Esp32-Korvo Le micro qu'il te faut"
description: "Esp32-korvo est le microphone complet pour contrôler la domotique"
ref: "ESP32-korvo wroover-e"
layout: post
author: Nico
date: 2023-11-22 12:00
last_modified_at: 
categories: [Tests, Home-Assistant]
tags: []
image: 'esp32-korvo-microphone-array-assist-esphome-homeassistant.png'
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
  - https://www.home-assistant.io/voice_control/voice_remote_local_assistant/
  - https://www.home-assistant.io/docs/blueprint/
---

Home-assistant a annoncé début 2023, l'année de la voix. En embauchant Michael Hansen, pseudo **synesthesiam** qui n'est autre que le créateur du software [Rhasspy](https://github.com/rhasspy){: target="_blank"}, l'entreprise Nabu Casa creuse cette brèche dans le monde du contrôle par la voix qui fait tant de défaut aux assistants actuels.

J'ai durant longtemps testé divers microphone array (respeaker 4-micarray et matrix voice), sous Rhasspy, mais tous deux ont des inconvénients, ils ne fonctionnent pas sans un raspberry supplémentaire qui sert d'hôte aux microphones. J'avais rajouté sur le matrix voice un **esp32** pour le faire fonctionner seul, mais l'entreprise a fermé ses portes début 2023 laissant pour mort l'évolution du software. À l'heure ou j'écris cet article personne n'a développé ou repris les softs en cours.

{% include product-embed.html image="https://ae01.alicdn.com/kf/H986d1437c3244ad5aad6045e7bab4913b/ESP32-Korvo-ESP32-AI-Conseil-de-D-veloppement-Vocal-Tech-Multi-iler-ESP32-WROVER-E-WIFI.jpg_.webp" title="Micro array esp32-korvo" brand="Espressif" description="Microphone array esp32-korvo esp-wroover-e avec esphome et home-assistant" affiliate="_DnPsmnt" %}

> c'est bien dommage car les microphones array matrix ( voice et creator ) sont des modules bien pensés.

Bref revenons à nos moutons, nous sommes fin 2023 j'ai voulu faire un tour d'horizon de l'évolution de [Home Assistant Assist](https://www.home-assistant.io/voice_control/){: target="_blank"} et pour celà j'ai fait l'acquisition sur [Aliexpress d'un microphone fonctionnant avec un esp32, le esp32-korvo version wroover-e](https://fr.aliexpress.com/item/1005002803964499.html?aff_fcid=a4c8d236a74a4f56a12872b2dea1489c-1700590474538-09550-_DnPsmnt&tt=CPS_NORMAL&aff_fsk=_DnPsmnt&aff_platform=shareComponent-detail&sk=_DnPsmnt&aff_trace_key=a4c8d236a74a4f56a12872b2dea1489c-1700590474538-09550-_DnPsmnt&terminal_id=0a193726d98146d989b0c2b2ea1c0730&afSmartRedirect=y){: target="_blank"}

## {{ page.ref }} v1.1

Pour commencer il existe 2 versions du microphone développé par Espressif, l'un fonctionne avec un [ESP32-S3-Korvo-1 v5.0](https://github.com/espressif/esp-skainet/blob/master/docs/en/hw-reference/esp32s3/user-guide-korvo-1.md){: target="_blank"} coûte actuellement **plus de 50€** et en est à la version 5.0 du hardware, il semblerait que cette version ne soit muni que de 3 microphones array comme pour la version wroover et non de 6. **L'évolution se trouve surtout dans la gestion d'une batterie externe.**
> Cette version est très peu revendu, du moins pour l'instant.

Ensuite tu trouveras facilement la version testé, le {{ page.ref }}, il ne **t'en coutera que 22€ livré**.

## Que propose le {{ page.ref }} pour ce prix.

Là je vais t'annoncer une agréable surprise, le [{{ page.ref }}](https://github.com/espressif/esp-skainet/blob/master/docs/en/hw-reference/esp32/user-guide-esp32-korvo-v1.1.md){: target="_blank"} est très complet, tellement complet qu'il ne lui manque qu'un boitier de montage, mais francement pour le prix... **Il n'y a que [Espressif](https://www.espressif.com/){: target="_blank"} pour réaliser ce type de promotions.**

Le {{ page.ref }}, est un assemblage de deux cartes, la carte supérieur est composée de 12 Leds du **chipset ws2812**, ainsi que de boutons analogiques (mode,set,rec,play,vol+/-) **et de 3 microphones array. Il te serais même possible d'en rajouter 5 de plus car la carte dispose des emplacements présoudés ( voir la photo ).**

**composition des 6 microphones:**
*Mic_Bias34*
1. Default: NSM0418DT(NeoMEMS);
2. Alternative: MSM261D4030H1AP(MEMSensing Microsystems);

2 x Amic 55mm *Mic_Bias12*

**PS:** Malgré les photos fournis sur le Github, La carte supérieur est identique sur les deux versions disponibles et fabriqués par Espressif.

### Que trouve-t-on sur la carte inférieur:

{% picture posts/{{ page.guid }}/esp32-korvo-v1.1-wroover-e-mainboard.png --alt particularité de la carte principale esp32-korvo wroover-e --img width="750" height="635" %}


{% include doclink.html pdf="https://dl.espressif.com/dl/schematics/ESP32-KORVO_V1.1_schematics.pdf" title="Schema connection gpio esp32-korvo" %}





{% include product-embed.html image="https://ae01.alicdn.com/kf/H986d1437c3244ad5aad6045e7bab4913b/ESP32-Korvo-ESP32-AI-Conseil-de-D-veloppement-Vocal-Tech-Multi-iler-ESP32-WROVER-E-WIFI.jpg_.webp" title="Micro array esp32-korvo" brand="Espressif" description="Microphone array esp32-korvo esp-wroover-e avec esphome et home-assistant" affiliate="_DnPsmnt" %}

## Conclusion