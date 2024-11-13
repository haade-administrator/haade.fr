---
guid: 145
title: "test ha yellow"
description: ""
ref: ""
layout: post
authors: [Nico]
date: 2024-11-12 19:18
last_modified_at: 
categories: [Haade-lab, Home-Assistant]
tags: []
video: 
image: 'test-home-assistant-yellow-integration-backup-zigbee-zwave-ssd.png'
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
  - https://yellow.home-assistant.io/
  - https://github.com/home-assistant/addons/blob/master/silabs-multiprotocol/DOCS.md
  - https://github.com/NabuCasa/silabs-firmware-builder/releases
  - https://www.support.getzooz.com/kb/article/1158-zooz-ota-firmware-files/
---

## Prérequis

- Une Box Home Assistant Yellow ( filaire ou Poe )
- Une clé USB pour transférer HAOS sur le raspberry Pi
- Optionnel (un disque dur ssd NVME)
- Optionnel une clé z-wave gpio ZOOZ ZAC93 entièrement compatible Yellow

{%- include alert.html type="info" text="Haade.fr participe au programme d'associés d'Amazon Services LLC, un programme de publicité d'affiliation conçu pour fournir un moyen de gagner des frais lors de la création de liens vers Amazon.com et des sites affiliés." %}

{% include product-embed.html image="nabu-casa-kit-home-assistant-yellow-avec-alimentation.png" title="Box Home Assistant Yellow" brand="Nabu Casa" description="Home Assistant Yellow est votre hub domotique prêt pour Matter, évolutif et extensible." domlink="box-domotique/7113-nabu-casa-kit-home-assistant-yellow-avec-alimentation.html" %}

{% include product-embed.html image="dongle-gpio-zooz-zac93-compatible-home-assistant-yellow.png" title="Dongle GPIO Z-wave 800LR" brand="Zooz" description="Clé Z-wave Long Range 800 format GPIO compatible Home Assistant Yellow" amazlink="3YQdLEO" %}

## Ajout du cpu température

Dans le fichier **configuration.yaml** ajoute:

{% highlight yaml %}
{% raw %}
command_line:
  - sensor:
      name: CPU Temperature
      command: "cat /sys/class/thermal/thermal_zone0/temp"
      unit_of_measurement: "°C"
      value_template: "{{ value | multiply(0.001) | round(1) }}"
{% endraw %}
{% endhighlight %}

Après un redémarrage de Home Assistant etrouve dans les entités le capteur **CPU température**

## Home Assistant {{ page.ref }} 

### Monitoring

https://www.home-assistant.io/integrations/systemmonitor

### Réinstallation du système complet sur CM4

Une page dédiée des explications et disponibles par le [site Nabu Casa](https://yellow.home-assistant.io/guides/reinstall-os/){: target="_blank"}

**Option (recommandée)** réinstaller le système d'exploitation Home Assistant à l'aide du bouton rouge + bleu

1. Assurez-vous qu'aucun **périphérique USB n'est branché sur l'appareil**. 
2. Coupe l'alimentation de ton système.
3. Met le système sous tension.
4. Dans les 3 s (ou dès le démarrage), **appuye simultanément sur les boutons rouge et bleu** situés à l'arrière de l'appareil et maintenez-les enfoncés.
5. Maintenez les deux boutons enfoncés **pendant environ 10s**. La LED jaune ne doit pas commencer à clignoter !
6. Retire l’alimentation de ton système.
7. Suis les [instructions pour installer Home Assistant OS](https://yellow.home-assistant.io/power-supply/#installing-home-assistant-software-on-kit){: target="_blank"} à l'aide du programme d'installation de Home Assistant OS pour Yellow à **partir d'une clé USB**.

## Zigbee Flash Firmware

https://github.com/NabuCasa/silabs-firmware/wiki/Flash-Silicon-Labs-radio-firmware-manually

https://www.zigbee2mqtt.io/guide/adapters/emberznet.html

https://github.com/NabuCasa/silabs-firmware-builder/releases

installe le module **complémentaire Advanced SSH and terminal**

Installe universal-silabs-flasher

{% highlight yaml %}
pip install universal-silabs-flasher
{% endhighlight %}

{% highlight yaml %}
git clone https://github.com/NabuCasa/silabs-firmware.git
{% endhighlight %}

{% highlight shell %}
cd silabs-firmware
{% endhighlight %}

Et installe la dernière version du firmware

{% highlight yaml %}
universal-silabs-flasher \
    --device /dev/ttyAMA1 \
    --bootloader-reset yellow \
    flash \
    --allow-cross-flashing \
    --firmware ./EmberZNet/beta/NabuCasa_Yellow_EZSP_v7.4.0.0_PA32_ncp-uart-hw_115200.gbl \
{% endhighlight %}

Connecte-toi au terminal

Si tu veux installer la toute dernière version du bootloader et firmware dispo sur le nouveau répertoire de Nabu casa, rends-toi à cette adresse [https://github.com/NabuCasa/silabs-firmware-builder/releases](https://github.com/NabuCasa/silabs-firmware-builder/releases)

vas dans le répertoire Bootloader

{% highlight shell %}
cd Bootloader
wget https://github.com/NabuCasa/silabs-firmware-builder/releases/download/v2024.10.21/yellow_bootloader_2.4.2.gbl
{% endhighlight %}

{% highlight yaml %}
universal-silabs-flasher \
    --device /dev/ttyAMA1 \
    --probe-method bootloader \
    --bootloader-reset yellow \
    flash \
    --firmware ./Bootloader/yellow_bootloader_2.4.2.gbl
{% endhighlight %}

fais de même pour le firmware

{% highlight shell %}
cd EmberZNet/beta/
wget https://github.com/NabuCasa/silabs-firmware-builder/releases/download/v2024.10.21/yellow_zigbee_ncp_7.4.4.0.gbl
{% endhighlight %}

{% highlight yaml %}
universal-silabs-flasher \
    --device /dev/ttyAMA1 \
    --bootloader-reset yellow \
    --allow-cross-flashing \
    flash \
    --firmware ./EmberZNet/beta/yellow_zigbee_ncp_7.4.4.0.gbl \
{% endhighlight %}

## Z-wave zooz

Bonne Nouvelle Zooz

### Upgrade du firmware 

{%- include alert.html type="warning" text="Télécharge le firmware correspondant à la bonne Zone et du bon module faute de quoi tu risques de faire dysfonctionner la clé Z-Wade, dans mon cas j'ai téléchargé le Firmware ZAC93 GPIO de la zone Europe" link="[#](https://www.support.getzooz.com/kb/article/1158-zooz-ota-firmware-files/)" textlink="Page de téléchargement des firmwares disponibles pour les produits de la gamme Zooz." %}

1. Télécharge le dernier firmware disponible [sur la page Zooz dédiée](https://www.support.getzooz.com/kb/article/1158-zooz-ota-firmware-files/){: target="_blank"}


## Backup (Sauvegarde)

### Installation HACS nouvelle version

https://www.hacs.xyz/docs/use/download/download/#to-download-hacs

1. [![Open your Home Assistant instance and show the dashboard of an add-on.](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=cb646a50_get&repository_url=https%3A%2F%2Fgithub.com%2Fhacs%2Faddons)
2. Dans le module complémentaire Get HACS, sélectionnez Installer.
3. Démarrez le module complémentaire.
4. Accédez aux journaux du module complémentaire et suivez les instructions qui y sont fournies.
5. Redémarrer Home assistant
6. Dans Home Assistant, accédez à Paramètres > Appareils et services.
7. Videz le cache de votre navigateur.

HACS n'apparaîtra pas dans la liste à moins que vous ne vidiez le cache de votre navigateur ou n'effectuiez une actualisation complète.
Dans le coin inférieur droit, sélectionnez **+ Ajouter une intégration.**

### Ajout du répertoire

https://jcwillox.github.io/hass-auto-backup/

Télécharge le répertoire Hass-auto-backup

[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=jcwillox&repository=hass-auto-backup&category=integration)

Ensuite ajout de l'intégration

[![Open your Home Assistant instance and start setting up a new integration.](https://my.home-assistant.io/badges/config_flow_start.svg)](https://my.home-assistant.io/redirect/config_flow_start/?domain=auto_backup)

Blueprint Event et Service

https://jcwillox.github.io/hass-auto-backup/examples/
