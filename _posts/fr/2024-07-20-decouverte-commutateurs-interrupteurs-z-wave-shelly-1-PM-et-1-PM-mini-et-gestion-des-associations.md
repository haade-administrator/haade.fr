---
guid: 135
title: "Découverte des commutateurs Shelly Wave 1PM et mini"
description: "Je vais tester et les commutateurs z-wave 800 shelly Wave 1PM et Wave 1PM mini et mettre en place des règles d'associations pour une communication en direct"
ref: "Shelly"
layout: post
authors: [Nico]
date: 2024-07-20 09:30
last_modified_at: 
categories: [Tests, Haade-lab, Z-wave]
tags: []
video: 
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
rating: 5.0
sourcelink:
  - https://support.shelly.cloud/en/support/solutions/articles/103000258471-shelly-qubino-wave-firmware-updates
  - https://github.com/QubinoHelp/Shelly_Wave_FW_OTA
  - https://www.support.getzooz.com/kb/article/1158-zooz-ota-firmware-files/
---
## Prérequis

- Une box Open source (jeedom, Home Assistant) avec serveur ZwaveJS UI
- Ou **simplement** un serveur ZwaveJS UI
- une clé [z-wave 800 du type Zooz ZST39](https://www.domadoo.fr/fr/box-domotique/7041-zooz-controleur-usb-z-wave-800-853478006391.html?domid=39){: target="_blank"}
- un commutateur Shelly Wave 1PM ou 1PM Mini

{%- include alert.html type="info" text="Haade.fr participe au programme d'associés d'Amazon Services LLC, un programme de publicité d'affiliation conçu pour fournir un moyen de gagner des frais lors de la création de liens vers Amazon.com et des sites affiliés." %}

## Mise à jour du firmware procédure

Après l'intégration du module dans ton système il sera important de faire la mise à jour des modules Z-wave y compris de la clé Z-wave. Rappellons que le z-wave 800 est récent, les micromodules aussi, il est donc important de faire ces mises à jours, surtout pour la clé Zooz car le SDK z-wave 7.19.3 rencontre des soucis.

{% include product-embed.html guid="2201" %}

Concerne la clé Zooz ZST39: N'effectuez PAS de sauvegarde NVM à partir de clés Z-Wave série 500 ou série 700 pour cet appareil. Cette fonctionnalité est actuellement prise en charge pour les appareils dotés du **firmware 1.30** ou supérieur, sinon si vous utilisez la version 1.20 ou inférieure, NVM bloquera le produit. [Veuillez lire cet article](https://www.support.getzooz.com/kb/article/1276-how-to-perform-an-otw-firmware-update-on-your-zst39-800-long-range-z-wave-stick/){: target="_blank"} **avant de tenter une mise à jour du firmware sur votre clé Z-Wave**. Si vous avez acheté votre **clé Z-Wave en juin 2024 ou après**, elle dispose normalement de la dernière version, alors n'essayez pas de mise à jour.

[Page de l'ensemble des firmwares Zooz](https://www.support.getzooz.com/kb/article/1158-zooz-ota-firmware-files/){: target="_blank"}
[Firmware 1.3 Zooz ZST39 EU](https://www.getzooz.com/firmware/ZST39_SDK_7.21.3_EU_V01R30.zip){: target="_blank"}

### Dans ZwaveJS
Z-wave JS est une intégration du z-wave qui permet de contrôler totalement le protocole z-wave dans un assistant opensource
Le plugin z-waveJS est disponible sur la plupart des infrastructures opensource du marché:
Le module Jeedom intègre directement ZwaveJS et l bibliothèque Z-waveJS UI
[Jeedom](https://market.jeedom.com/index.php?v=d&p=market&type=plugin&&name=z-wave){: target="_blank"}

Dans Home assistant seul z-waveJS apparaîtra comme controlleur en tant qu'appareil, il faudra installer le mudule complémentaire z-waveJS UI si tu veux installer la bibliothèque complète ( fortement recommandé ).
[Home Assistant](https://www.home-assistant.io/integrations/zwave_js/){: target="_blank"}

### Dans ZwaveJS UI

À savoir: Z-wave JS UI est une bibliothèque complète z-wave qui fonctionne avec le module Z-waveJS, en aucun cas elle ne te permettra de controller le protocole pour celà il faudra installer en parallèle le module z-wave.

## Shelly Wave 1 PM

{% include product-embed.html image="micromodule-commutateur-z-wave-800-shelly-wave-1pm-shelly-qubino.png" title="Wave 1 PM" brand="Shelly" description="Contrôlez et mesurez la consommation électrique d'une large gamme d'appareils électroménagers et d'équipements de bureau (lumières, lignes électriques, systèmes de sécurité, radiateurs, chauffe-eau, etc.) de n'importe où." domlink="actionneurs-variateurs/6747-micromodule-commutateur-z-wave-800-shelly-wave-1pm-shelly-qubino.html" amazlink="3SeYrzl" %}

### Mise à jour du firmware

À l'heure ou j'écris cet article la dernière mise à jour du firmware est la version 11.10 en date du [2024-03-28] avec comme correctif:

- Appareil fixe ne fonctionnant pas avec l'alimentation CC
- Correction de la signalisation OTA
- Tableau de conversion de température optimisé
- Autres améliorations mineures

[récupération du firmware Shelly Wave 1 PM](https://support.shelly.cloud/en/support/solutions/articles/103000258471-shelly-qubino-wave-firmware-updates#Shelly-Qubino-Wave-1PM){: target="_blank"}

[Liens du téléchargement direct du Firmware .gbl 11.10 version EU](https://github.com/QubinoHelp/Shelly_Wave_FW_OTA/raw/f7119fcb03bce348d3f47871485a1441439d536f/Wave_1PM/EU/Wave_1PM_800_EU_20240328_1238_QNSW-001P16EU_%5Bv11.10%5D_EB201890.gbl){: target="_blank"}

[Notice en ligne Shelly Wave 1 PM](https://kb.shelly.cloud/knowledge-base/wave-1pm){: target="_blank"}

{% include doclink.html pdf="Wave_1PM_mini_user_guide_multilang_V3.pdf" title="Guide utilisateur V3 shelly wave 1 PM" %}

{% include videoPlayer.html youtubeId="r4owWoakqzQ" %}

## Shelly Wave 1 PM Mini

{% include product-embed.html image="shelly-qubino-micromodule-commutateur-z-wave-800-shelly-wave-1pm-m.png" title="Wave 1 PM Mini" brand="Shelly" description="<b>Le plus petit commutateur intelligent Z-Wave au monde</b> pour un contrôle intelligent. Automatisez et contrôlez à distance vos luminaires ou une large gamme de petits appareils électriques et mesurez leur consommation électrique." domlink="actionneurs-variateurs/7172-shelly-qubino-micromodule-commutateur-z-wave-800-shelly-wave-1pm-m-3800235269145.html" amazlink="4bRr2Sd" %}

### Mise à jour du firmware

À l'heure ou j'écris cet article la dernière mise à jour du firmware est la version 11.03 en date du [2024-03-29] avec comme correctif:

- table de conversion de température optimisée
- autres améliorations mineures

[récupération du firmware Shelly Wave 1 PM Mini](https://support.shelly.cloud/en/support/solutions/articles/103000258471-shelly-qubino-wave-firmware-updates#Shelly-Qubino-Wave-1PM-Mini){: target="_blank"}

[Liens du téléchargement direct du Firmware .gbl 11.03 version EU](https://github.com/QubinoHelp/Shelly_Wave_FW_OTA/raw/8927d1afb0409a1b741e472c7b513befbb2203a9/Wave_1PM_Mini/EU/Wave_Mini_1PM_800_EU_20240403_1310_QMSW-0A1P8EU_%5Bv11.03%5D_9DD2F96C.gbl){: target="_blank"}

[Notice en ligne Shelly Wave 1 PM Mini](https://kb.shelly.cloud/knowledge-base/wave-1pm-mini){: target="_blank"}

{% include doclink.html pdf="Wave_1PM_Mini_mini_user_guide_multilang_V3.pdf" title="Guide utilisateur V3 shelly wave 1 PM Mini" %}

{% include videoPlayer.html youtubeId="0HsCaq6V3l8" %}

{%- include alert.html type="info" text="Haade.fr participe au programme d'associés d'Amazon Services LLC, un programme de publicité d'affiliation conçu pour fournir un moyen de gagner des frais lors de la création de liens vers Amazon.com et des sites affiliés." %}

## Conclusion
