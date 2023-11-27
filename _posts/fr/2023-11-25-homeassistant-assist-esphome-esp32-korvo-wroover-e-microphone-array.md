---
guid: 97
title: "Esp32-Korvo Le micro qu'il te faut !"
description: "Esp32-korvo woover-e est le microphone complet pour contrôler la domotique par la voix dans home-assistant grâce à esphome et le wifi le tout pour moins de 30€"
ref: "ESP32-korvo wroover-e"
layout: post
author: Nico
date: 2023-11-25 12:00
last_modified_at: 
categories: [Tests, Home-Assistant]
tags: []
image: 'esp32-korvo-microphone-array-assist-esphome-homeassistant.png'
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
rating: 4.8
sourcelink:
  - https://www.home-assistant.io/voice_control/voice_remote_local_assistant/
  - https://www.home-assistant.io/docs/blueprint/
---

Home-assistant a annoncé début 2023, **l'année de la voix**. En embauchant Michael Hansen, pseudo **synesthesiam** qui n'est autre que le créateur du software [Rhasspy](https://github.com/rhasspy){: target="_blank"}, l'entreprise Nabu Casa creuse cette brèche dans le monde du contrôle par la voix qui fait tant de défaut aux assistants actuels.

J'ai durant longtemps **testé divers microphone array** (respeaker 4-micarray et matrix voice), sous Rhasspy, **mais tous deux ont des inconvénients**, ils ne fonctionnent pas sans un raspberry supplémentaire qui sert d'hôte aux microphones. J'avais rajouté sur le matrix voice un **esp32** pour le faire fonctionner seul, mais l'entreprise a fermé ses portes début 2023 **laissant pour mort** l'évolution du software. À l'heure ou j'écris cet article personne n'a développé ou repris les softs en cours.

{% include product-embed.html image="https://ae01.alicdn.com/kf/H986d1437c3244ad5aad6045e7bab4913b/ESP32-Korvo-ESP32-AI-Conseil-de-D-veloppement-Vocal-Tech-Multi-iler-ESP32-WROVER-E-WIFI.jpg_.webp" title="Micro array esp32-korvo" brand="Espressif" description="Microphone array esp32-korvo esp-wroover-e avec esphome et home-assistant" affiliate="_DnPsmnt" %}

> c'est bien dommage car les microphones array matrix ( voice et creator ) sont des modules bien pensés.

Bref revenons à nos moutons, nous sommes fin 2023 j'ai voulu faire un tour d'horizon de l'évolution de [Home Assistant Assist](https://www.home-assistant.io/voice_control/){: target="_blank"} et pour celà j'ai fait l'acquisition sur [Aliexpress d'un microphone fonctionnant avec un esp32, le esp32-korvo version wroover-e](https://fr.aliexpress.com/item/1005002803964499.html?aff_fcid=a4c8d236a74a4f56a12872b2dea1489c-1700590474538-09550-_DnPsmnt&tt=CPS_NORMAL&aff_fsk=_DnPsmnt&aff_platform=shareComponent-detail&sk=_DnPsmnt&aff_trace_key=a4c8d236a74a4f56a12872b2dea1489c-1700590474538-09550-_DnPsmnt&terminal_id=0a193726d98146d989b0c2b2ea1c0730&afSmartRedirect=y){: target="_blank"}

## {{ page.ref }} v1.1

Pour commencer il existe **2 versions du microphone** développé par Espressif, l'un fonctionne avec un [ESP32-S3-Korvo-1 v5.0](https://github.com/espressif/esp-skainet/blob/master/docs/en/hw-reference/esp32s3/user-guide-korvo-1.md){: target="_blank"} coûte actuellement **plus de 50€** et en est à la version 5.0 du hardware, il semblerait que cette version ne soit muni que de 3 microphones array comme pour la version wroover et non de 6. **L'évolution se trouve surtout dans la gestion d'une batterie externe.**
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

{% picture posts/{{ page.guid }}/esp32-korvo-v1.1-wroover-e-mainboard-add-microphone-array.png --alt emplacement supplémentaire esp32-korvo microphone array home assistant --img width="940" height="529" %}

**PS:** Malgré les photos fournis sur le Github, La carte supérieur est identique sur les deux versions disponibles et fabriqués par Espressif.

### Que trouve-t-on sur la carte inférieur:

{% picture posts/{{ page.guid }}/esp32-korvo-v1.1-wroover-e-mainboard.png --alt particularité de la carte principale esp32-korvo wroover-e --img width="750" height="635" %}

**Là tu te rends compte que pour le prix la carte est très complète:**
- bouton on/off
- connecteur casque audio
- connecteur hp externe
- micro sdcard
- **usb uart**
- usb 5v
- connecteur pour batterie 5v


{% include doclink.html pdf="https://dl.espressif.com/dl/schematics/ESP32-KORVO_V1.1_schematics.pdf" title="Schema connection gpio esp32-korvo" %}

{% picture posts/{{ page.guid }}/esp32-korvo-v1.1-wroover-e-mainboard-add-microphone-array-en-detail.png --alt esp32-korvo-wroover-b en détail --img width="940" height="1057" %}

## Intégrer {{ page.ref }} dans esphome

### upload du premier firmware

Grâce au code ci-dessous tu pourras intégrer facilement le microphone {{ page.ref }} dans esphome et ainsi l'utiliser dans home assistant.

{% highlight yaml %}
substitutions:

##### WIFI SETUP #####
###### CHANGE ME START ######
  device_name: "esp32korvo_mic" 
  wifi_ssid: !secret wifi_ssid
  wifi_password: !secret wifi_password
  apikey: !secret enc_key_esp32korvo_mic

##### CHANGE ME END #####

##### DO NOT CHANGE ANYTHING! #####

packages:
  ##### download esp32-korvo for esphome code from Github
  remote_package:
    url: https://github.com/haade-administrator/korvo-esphome
    ref: main
    files: [esp32korvo_esphome.yaml]
    refresh: 300s

##### DO NOT CHANGE ANYTHING! ##### 
{% endhighlight %}

afin d'envoyer le code ci-dessus en mode UART **il te faudra**:
- connecter **2 cables usb** sur les deux **ports usb**. (l'usb power peut être alimenter par un transfo 5v ou connecté sur un port alimenté de ton pc).
- le second port usb-uart doit être connecté au pc 
- localiser le bouton boot

**Appui sur le bouton boot sans le relacher, ensuite connecte les deux cables usb, et pour terminer relâche le bouton boot**

![Envoi du firmware esphome sur un esp32-korvo]({{ site.baseurl}}/assets/images/posts/{{ page.guid }}/esp32-korvo-esphome-flash-firmware.webp{{ cachebuster }}){: width="940" height="529"}

{%- include alert.html type="info" text="Important! Une fois le firmware envoyé par UART, il est important de débrancher le esp32-korvo du secteur, <b>une fois rebranché appui 1 seconde sur le bouton reset pour le lancer</b>" %}

### Paramétrage {{ page.ref }} et esphome

Afin de paramétrer ton nouveau microphone dans home-assistant je t'invite à cliquer sur ce lien ci-dessous, et normalement une nouvelle instance esphome est découverte, il te suffit de cliquer sur **configurer et de redémarrer homeassistant**.

{% include homeassistantlink.html integration="esphome" %}

## États des fonctions du {{ page.ref }}

Voici les fonctions disponibles:
- contrôles des Led du {{ page.ref }}
- états du wakeword
- états des boutons physiques du {{ page.ref }}
- réglage de la détection de fin de parole
- état du firmware
- choix du pipeline ( par défaut homeassistant )
- bouton de redémarrage
- état du mot de réveil
- adresse ip
- status de connection
- et l'état du signal

{% picture posts/{{ page.guid }}/esp32-korvo-esphome-fonctions-disponibles.png --alt fonctions disponibles du microphone esp32-korvo-wroover-b dans esphome --img width="940" height="811" %}

> Dans la future mise à jour sera disponible une fonction lumineuse supplémentaire qui te permettra de choisir un réglage lumineux pour le wakeword ( éteins,jour,nuit)

Tu peux dors et déjà tester ces fonctions il te suffit d'intégrer dans le code esphome ```ref: dev```

{% picture posts/{{ page.guid }}/esp32-korvo-esphome-prochaines-fonctions-disponibles.png --alt prochaines fonctions disponibles du microphone esp32-korvo-wroover-b dans esphome --img width="332" height="491" %}

## Installation Voice assistant

Pour Installer un assistant Local suis le tuto officiel de home assistant.

[Installer un assistant local Home assistant](https://www.home-assistant.io/voice_control/voice_remote_local_assistant/){: target="_blank"}

Dans Home Assistant, les pipelines Assist sont constitués de divers composants qui forment ensemble un assistant vocal.

Pour chaque composant, vous pouvez choisir parmi différentes options. Il existe une option de synthèse vocale et de synthèse vocale qui **s'exécute entièrement en local**.

L'option de synthèse vocale est **Whisper** . Il s'agit d'un modèle d'IA open source qui prend en charge plusieurs langues . Nous utilisons une version forkée appelée plus **faster-whisper** . **Sur un Raspberry Pi 4, il faut environ 8 secondes** pour traiter les commandes vocales entrantes. Sur un Intel NUC, cela se fait en moins d'une seconde.

> Pour la synthèse vocale, nous avons développé Piper . **Piper** est un système de synthèse vocale neuronale rapide et local qui sonne bien et est optimisé pour le Raspberry Pi 4. Il prend en charge de nombreuses langues . Sur un Raspberry Pi, en utilisant des modèles de qualité moyenne, il peut générer 1,6 seconde de voix en une seconde.

> L'installation de whisper, piper et openwakeword sur HA et raspberrypi 4 est **contraignante et lourde** pour l'instant cela devrait évoluer dans les prochains mois.

## Caractéristiques du {{ page.ref }}

|**Composant clé**|**Description**|
|ESP32-WROVER-E|Ce module ESP32 contient le dernier ESP32-D0WD-V3, une mémoire flash de 16 Mo et une PSRAM de 8 Mo pour un stockage de données flexible, avec une connectivité Wi-Fi/BT et une capacité de traitement des données.|
|Régulateur de puissance|Régulateur 5V à 3,3V.|
|Interrupteur d'alimentation|On : La carte est sous tension ; Éteint : La carte est hors tension.|
|Port de batterie|Connectez une batterie.|
|Port d'alimentation USB|Alimentez la carte.|
|Port USB-UART|Une interface de communication entre un ordinateur et le module ESP32-WROVER-E.|
|Pont USB-UART|Une seule puce de pont USB-UART offre des taux de transfert allant jusqu'à 3 Mbps.|
|Bouton de réinitialisation|Appuyer sur ce bouton réinitialise le système.|
|Bouton de démarrage|Bouton de téléchargement. Maintenir Boot enfoncé puis appuyer sur EN lance le mode de téléchargement du micrologiciel pour télécharger le micrologiciel via le port série.|
|Carte Micro SD|Slot Utile pour développer des applications qui accèdent à la carte MicroSD pour le stockage et la récupération de données.|
|ADC audio|ADC audio à quatre canaux hautes performances. Parmi les quatre canaux, trois sont destinés aux microphones et un à la fonction AEC.|
|Audio PA|Amplifiez les signaux audio vers un haut-parleur externe à un maximum de 3 W.|
|Connecteur de haut-parleur|Connectez un haut-parleur externe.|
|Connecteur pour écouteurs|Connectez des écouteurs externes.|
|Connecteur FPC|Connectez la carte mère et la sous-carte.|
|Codec audio|Le codec audio ES8311 communique avec ESP32 via le bus I2S, qui convertit les signaux numériques en signaux analogiques.
|Microphone analogique|Trois réseaux de microphones analogiques (espacement = 65 mm).|
|LED RVB|12 LED RVB adressables (WS2812).|
|Bouton de fonction|Six boutons de fonction, à savoir PLAY, SET, VOL -, VOL +, MODE et REC. Ces boutons de fonction sont définissables par l'utilisateur.|
|**Dimensions**|90x90x20mm|

## **Les + du produit** {{ page.ref }}
{: .blue}

- la qualité de fabrication
- le prix ( moins de 22€ )
- Un design réussi
- l'expérience Espressif
- le nombre de fonctions
- le nombre de connections
- possibilité de rajouter des microphones supplémentaires


## **Les - du produit** {{ page.ref }}
{: .red}

- Absence de boitier à l'achat
- Seul 3 microphones sur le module

{% include product-embed.html image="https://ae01.alicdn.com/kf/H986d1437c3244ad5aad6045e7bab4913b/ESP32-Korvo-ESP32-AI-Conseil-de-D-veloppement-Vocal-Tech-Multi-iler-ESP32-WROVER-E-WIFI.jpg_.webp" title="Micro array esp32-korvo" brand="Espressif" description="Microphone array esp32-korvo esp-wroover-e avec esphome et home-assistant" affiliate="_DnPsmnt" %}

## Conclusion

Grâce à ce tuto tu pourras **contrôler un micro complet** {{ page.ref }} dans Home-assistant avec esphome et tester les commandes à la voix. L'ensemble fonctionne mais n'est pas optimum il faudra attendre quelques semaines **pour tester de futurs améliorations**.