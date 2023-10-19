---
guid: 76
title: "EFR32MG21 compatible Zigbee et Matter"
description: "Flasher le Sonoff zbdongle-e ou nabu casa skyconnect pour activer Matter openthread et zigbee en mode multi-protocole (multi pan) en même temps basé sur la puce Silabs EFR32MG21 est désormais possible. En parcourant cet article tu découvriras la manip ultra simple à réaliser en cliquant simplement sur un bouton pour activer le multi-protocole et l'utiliser dans home assistant."
ref: ""
layout: post
author: Nico
date: 2023-07-20 09:16
last_modified_at: 2023-10-19 10:20
categories: [Haade-lab, Domotique, Zigbee]
tags: []
image: 'efr32mg21-compatible-zigbee-et-thread-matter-silabs-confirme.png'
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
  - https://github.com/NabuCasa/silabs-firmware
  - https://sonoff.tech/wp-content/uploads/2023/02/SONOFF-Zigbee-3.0-USB-dongle-plus-firmware-flashing.pdf
  - https://github.com/itead/Sonoff_Zigbee_Dongle_Firmware/tree/master/Dongle-E/NCP
  - https://skyconnect.home-assistant.io/documentation/
  - https://github.com/darkxst/silabs-firmware-builder
  - https://dialedin.com.au/blog/sonoff-zbdongle-e-rcp-firmware
---

**Ça y est ! Silabs confirme la prise en charge de la passerelle Matter vers zigbee et openthread en simultané** pour les puces EFR32MG21, qui équipent diverses clés du marché comme la clé de [Sonoff ZBDongle-E](https://www.domadoo.fr/fr/interface-domotique/6315-sonoff-cle-usb-zigbee-30-antenne-externe-20dbm-v2-zbdongle-e.html?domid=39){: target="_blank"}, pour ne citer qu'elle. Mais il y a un mais cette prise en charge est conseillé pour les proc avec un minimum de **1024k de RAM**, et ce n'est pas le cas pour la **Skyconnect de Nabu Casa qui possède 512Kb et zbdongle-e 768kb**. Pourtant des firmwares multi-protocoles existe, nous allons pouvoir commencer à les tester. Pour aller plus loin **Silabs conseil d'utiliser la puce EFR32MG24 pour faire du multiprotocole.**

> Bonne nouvelle les clés EFR32MG21 Sonoff ZBDongle-E et NabuCasa Skyconnect pour ne citer qu'elles sont désormais compatibles multi-protocoles ( MultiPan ), zigbee et Matter/Openthread.

{% include product-embed.html guid="2128" %}

## Tableau de prise en charge

|Cas d'utilisation|Protocoles|EFR32 MG21<br>1024 ko Flash<br>96 ko RAM|EFR32 MG24<br>1536 ko Flash<br>256 ko RAM|
|-----------------|----------|---------------------------------------|----------------------------------------|
|Matter -> thread|Mode RCP à protocole unique|✔|✔|
|Matter -> Zigbee / Thread|**Zigbee simultané / thread**<br>dynamique 802.15.4 / Bluetooth LE¹|✔|✔|
|Matter thread end device|Dynamique 802.15.4 / Bluetooth LE SoC<br>Mode²||✔|
|Matter thread end device|Dynamique 802.15.4 / Bluetooth LE SoC<br>Mode²||✔|

## Puces Silabs EFR32 infos

### SoC sans fil multiprotocole EFR32MG21 série 2
Les appareils EFR32MG21 apportent des solutions hautes performances, basse consommation et sécurisées à l'IoT. Conçus pour augmenter la capacité de traitement, améliorer les performances RF et réduire le courant actif, les dispositifs EFR32MG21 sont des SoC sans fil 2,4 GHz optimisés pour les applications de maillage Zigbee, Thread et Bluetooth alimentées par la ligne, y compris l'éclairage connecté, les passerelles, les assistants vocaux et les compteurs intelligents.

### SoC sans fil multiprotocole EFR32MG24 série 2
Les SoC sans fil **EFR32MG24 sont idéaux pour la connectivité sans fil IoT maillé à l'aide des protocoles Matter, OpenThread et Zigbee pour la domotique**. Avec des fonctionnalités clés telles que la haute performance RF 2,4 GHz, une faible consommation de courant, unIA/MLaccélérateur matériel etCoffre-fort sécurisé™. Un ARM Cortex®-M33 fonctionnant jusqu'à 78 MHz et jusqu'à 1,5 Mo de mémoire Flash et 256 Ko de RAM fournit des ressources pour les applications exigeantes tout en laissant de la place pour une croissance future.
<cite>Silabs.com/wireless/matter</cite>

[Silabs compatibilité Matter](https://www.silabs.com/wireless/matter?tab=start#thread){: target="_blank"}<br>
[Silabs firmware nabu casa](https://github.com/NabuCasa/silabs-firmware/tree/main){: target="_blank"}<br>

## Installation des nouveaux firmwares

**Mieux encore grâce au travail de Nabu Casa et darkxst** il est désormais possible de flasher dans ton navigateur la liste des clés ci-dessous par simple clic sur un bouton et de choisir le firmware à installer. Le tout sans avoir à accéder au circuit imprimé de la clé.
Nabu Casa tien à jour [SL Web Tools](https://github.com/NabuCasa/sl-web-tools){: target="_blank"}, un logiciel permettant de faire l'ensemble de la manipulation directement du navigateur, qui nécessite tout de même l'utilisation des navigateurs Chrome ou Edge et devrait fonctionner sous Linux, Mac et Windows.

### Types de micrologiciels NCP/RCP

Traditionnellement, les dongles Zigbee Coordinator utilisent un micrologiciel basé sur un **coprocesseur réseau (NCP)**. Dans ce cas, **l'application Zigbee s'exécute sur le dongle**, qui gère la majorité de la gestion du réseau Zigbee. Votre intégration Zigbee communique avec le dongle pour simplement envoyer/recevoir des données aux appareils finaux Zigbee.

Plus récemment, des micrologiciels basés sur **Remote Co-Processor (RCP)** sont devenus disponibles. Dans ce cas, l'application Zigbee est **déchargée sur votre serveur (Home Assistant dans ce cas via le module Silabs Multiprotocole), et le dongle ne fournit que la prise en charge radio au niveau matériel**. Lors de l'utilisation d'un micrologiciel RCP, l'option de configuration **MultiPAN** permet la prise en charge de plusieurs réseaux, ce qui offre un avantage unique dans la mesure où vous pouvez désormais faire fonctionner simultanément les réseaux Zigbee et Thread sur le même dongle.

> Le ZBDongle-E est livré de l'usine avec un firmware NCP v6.10.3, si vous souhaitez simplement utiliser Zigbee, nous vous recommandons de vous en tenir à ce firmware.

### liste des clés upgradeables

1. [Skyconnect](https://www.seeedstudio.com/Home-Assistant-SkyConnect-p-5479.html?gad=1&gclid=Cj0KCQjw5f2lBhCkARIsAHeTvlgGnbZzINesrbPTZj5SiCLenfzJfYvwXqyTlbqMNr4a_IjCzTFpLhAaAmnjEALw_wcB){: target="_blank"} de Home Assistant (nabu casa)
2. ITead Sonoff Zigbee 3.0 USB [Dongle Plus V2 model "ZBDongle-E"](https://www.domadoo.fr/fr/interface-domotique/6315-sonoff-cle-usb-zigbee-30-antenne-externe-20dbm-v2-zbdongle-e.html?domid=39){: target="_blank"}
3. CoolKit [ZB-GW04 USB dongle](https://zigbee.blakadder.com/easyiot_ZB-GW04.html){: target="_blank"} (a.k.a. easyiot stick)

### Liste des firmwares dispo

- Zigbee ezsp NCP **( v7.3.2.0 )**{: .red}
- Multi-protocole RCP **(MULTI-PAN v4.3.2)**{: .red}
- Openthread **( v2.3.2.0 )**{: .red}
- choisir un firmware **personnalisé**

### Vidéo d'un flash de clé ZBDongle-E

**Rien de mieux qu'une vidéo** pour voir le principe de fonctionnement d'un flash de firmware d'une clé ZBDongle-E ou skyconnect qui montre **l'installation du firmware multiprotocole Zigbee/Matter/Openthread**.

{% include videoPlayer.html youtubeId="6un46ohP0WU" %}

### Flash firmware Nabu Casa Skyconnect

Le dongle Skyconnect est basé sur la puce Silabs [EFR32MG21A020F512IM32](https://www.silabs.com/wireless/zigbee/efr32mg21-series-2-socs/device.efr32mg21a020f512im32?tab=specs){: target="_blank"} contenant une mémoire **flash de 512 Kb** et une Ram de 64 Kb

{% include flashfirmware/ezsp.html hub="skyconnect" %}

### Flash firmware Sonoff [ZBDongle-E](https://www.domadoo.fr/fr/interface-domotique/6315-sonoff-cle-usb-zigbee-30-antenne-externe-20dbm-v2-zbdongle-e.html?domid=39){: target="_blank"}

{% include product-embed.html guid="2128" %}

Le dongle Sonoff est basé sur la puce Silabs [EFR32MG21A020F768IM32](https://www.silabs.com/wireless/zigbee/efr32mg21-series-2-socs/device.efr32mg21a020f768im32?tab=specs){: target="_blank"} contenant une mémoire **flash de 768 Kb** et une Ram de 64 Kb

{% include flashfirmware/ezsp.html hub="zbdongle-e" %}

[Lien du firmware original Sonoff ZBDongle-e](https://github.com/itead/Sonoff_Zigbee_Dongle_Firmware/raw/master/Dongle-E/NCP/ncp-uart-sw_EZNet6.10.3_V1.0.1.gbl)
[Instruction flash officielle Sonoff](https://sonoff.tech/wp-content/uploads/2022/08/SONOFF-Zigbee-3.0-USB-dongle-plus-firmware-flashing-.pdf){: target="_blank"}

**MISE À JOUR:** Si tu veux flasher facilement la clé zbdongle-e avec n'importe quel firmware et revenir en arrière facilement utilise le [répertoire github Elelabs officiel](https://github.com/Elelabs/elelabs-zigbee-ezsp-utility/){: target="_blank"}

### flash firmware ZB-GW04 (v1.1)

**Easyiot ZB-GW04 Revision v1.1 - No flow control** est basé sur la puce Silabs [EFR32MG21A020F768IM32](https://www.silabs.com/wireless/zigbee/efr32mg21-series-2-socs/device.efr32mg21a020f768im32?tab=specs){: target="_blank"} contenant une mémoire **flash de 768 Kb **et une Ram de 64 Kb au même titre que le [ZBDongle-E de Sonoff](https://www.domadoo.fr/fr/interface-domotique/6315-sonoff-cle-usb-zigbee-30-antenne-externe-20dbm-v2-zbdongle-e.html?domid=39){: target="_blank"}

{% include flashfirmware/ezsp.html hub="zb-gw04-11" %}

### flash firmware ZB-GW04 (v1.2)

**Easyiot ZB-GW04 Revision v1.2 - Hardware flow control** est basé sur la puce Silabs [EFR32MG21A020F768IM32](https://www.silabs.com/wireless/zigbee/efr32mg21-series-2-socs/device.efr32mg21a020f768im32?tab=specs){: target="_blank"} contenant une mémoire **flash de 768 Kb **et une Ram de 64 Kb au même titre que le [ZBDongle-E de Sonoff](https://www.domadoo.fr/fr/interface-domotique/6315-sonoff-cle-usb-zigbee-30-antenne-externe-20dbm-v2-zbdongle-e.html?domid=39){: target="_blank"}

{% include flashfirmware/ezsp.html hub="zb-gw04-12" %}

### flash firmware [Zvidar Z-DG-Z01](https://www.domadoo.fr/fr/interface-domotique/6500-zvidar-controleur-usb-zigbee-30-chipset-efr32mg21.html?domid=39){: target="_blank"}

{% include product-embed.html guid="2170" %}

À venir ...

## Activation du multi-protocole dans Home Assistant

Comme écris plus haut les protocoles RCP déchargent l'application zigbee sur un serveur et non plus sur la clé. C'est pourquoi il te faudra installer le module compémentaire multiprotocole Silabs, qui agit comme la passerelle entre ton dongle et Home Assistant. Il exécute également les serveurs spécifiques au protocole, pour coordonner vos réseaux Zigbee et/ou Thread. Les intégrations **ZHA ou Zigbee2MQTT** *communiqueront avec cet addon plutôt que directement avec le dongle*. Il te permet également d'exécuter Thread simultanément.



Clic sur le bouton ci-dessous
{% include homeassistantlink.html supervisor_addon="core_silabs_multiprotocol" %}
et installe le module complémentaire **Silicon Labs Multiprotocol**. Sur la page de **configuration**, sélectionne l'appareil, puis définis les paramètres suivants pour le micrologiciel lié ci-dessus. Si tu utilises un firmware différent, ajuste les valeurs en conséquence.

**Skyconnect, débit en bauds 115 200**, désactive le contrôle de flux matériel et désactive les mises à jour automatiques du micrologiciel.
**ZBDongle-E, débit en bauds 460 800**, désactive le contrôle de flux matériel et désactive les mises à jour automatiques du micrologiciel.
**ZB-GW04 v1.2, débit en bauds 230 400**, activation du contrôle de flux matériel et désactivation des mises à jour automatiques du micrologiciel.

{% picture posts/{{ page.guid }}/Silabs-multiprotocole-configuration-flash-zbdongle.png --alt configuration silabs multiprotocole zigbee matter dans home assistant --img width="940" height="881" %}

### Zigbee et Matter dans ZHA

Si tu as configuration ZHA existante, tu devras la supprimer entièrement. **Assures-toi avant de faire une sauvegarde du réseau Zigbee**.

Allez à Paramètres -> Appareils et services et clique sur Ajout Integration ou clic sur le bouton ci-dessous:
{% include homeassistantlink.html integration="zha" %}
ZHA te demandera maintenant à quel appareil tusouhaitez veux te connecter, assures-toi de sélectionner l'appareil complémentaire multiprotocole comme indiqué sur l'image ci-dessous.

{% picture posts/{{ page.guid }}/Silabs-multiprotocole-zha-configuration-flash-zbdongle.png --alt configuration silabs multiprotocole zigbee matter dans home assistant par inteface ZHA --img width="600" height="395" %}

Sur l'écran suivant, il est recommandé de commencer avec un réseau vide, puis de coupler tous tes appareils Zigbee. Si tu avais une configuration précédente, tu peux essayer d'importer la sauvegarde réseau précédente, **ZHA essaiera alors de migrer les appareils vers le nouveau réseau**, ce qui peut ou non fonctionner, **certains appareils peuvent encore nécessiter un réappairement s'ils ne fonctionnent pas correctement**.

### Zigbee et Matter dans Zigbee2mqtt

Si tu utilises Zigbee2mqtt là aussi il est possible d'utiliser le multi protocole Zigbee/Matter/Openthread. **N'oublie pas de faire une sauvegarde du maillage au préalable.**

Pour modifier le lien de la clé clic sur le bouton ci-dessous
{% include homeassistantlink.html supervisor_addon="45df7312_zigbee2mqtt" %}

vas dans la configuration du module et modifie l'onglet serial comme ceci:

{% highlight yaml %}
port: tcp://core-silabs-multiprotocol:9999
adapter: ezsp
{% endhighlight %}

{% picture posts/{{ page.guid }}/modifie-serial-zigbee2mqtt-pour-multiprotocole-zigbee-matter.png --alt modification du port série dans zigbee2mqtt pour intégrer le multi protocole Zigbee et Matter --img width="940" height="134" %}

Une fois réalisé tu peux redémarrer le module et vérifier les journaux afin de contrôler l'absence d'erreurs ensuite il te sera possible de réinjecter ta sauvegarde zigbee, mais pour l'instant je ne l'ai pas testé. Il est préférable de partir d'un nouvea réseau.

{% include product-embed.html guid="2128" %}
{% include product-embed.html guid="2170" %}

## Conclusion

**Voilà une bonne nouvelle**, les puces **EFR32MG21 permettent de faire du Multiprotocole** Zigbee/Matter/Openthread. Le flash du firmware multi pan est des plus pratiques et super simple d'utilisations. Attention tout de même le multiprotocole est en phase de test sur Home Assistant, l'installation d'une sauvegarde de réseau Zigbee n'a pas encore été testée. **Pour terminer Silabs met en garde sur la capacité des puces EFR32MG21 à gérer convenablement plusieurs réseaux** car la RAM des clés actuelles disponibles sur le marché sont inférieur à 1024KB qui serait le minimum à avoir pour la gestion du Multi Pan, toujours selon Silabs, qui d'ailleurs oriente les fabriquants à utiliser une puce EFR32MG24.
