---
guid: 86
title: "Hack Sonoff Zbbridge-pro et Esphome"
description: "Comment hacker facilement le Sonoff Zbbridge-pro facilement sur Esphome et Home-Assistant et en faire une télécommande Zigbee, wifi et Bluetooth"
ref: "ZBbridge-pro"
layout: post
author: Nico
date: 2023-10-15 20:16
last_modified_at: 
categories: [Haade-lab, Zigbee]
tags: []
image: 'hack-sonoff-zbbridge-pro-esphome-home-assistant-cle-deporte-zigbee-wifi-bluetooth.png'
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
rating: 4.0
sourcelink:
  - https://community.home-assistant.io/t/itead-sonoff-zigbee-bridge-pro-zbbridge-p-new-cc2652p-and-esp32-based-zigbee-gateway-to-wifi-bridge/378924/22
  - https://jonasled.dev/jonasled/sonoff-zigbee-bridge-pro-esphome/-/blob/master/zigbee_bridge.yaml?ref_type=heads
  - https://github.com/Giancky79/ZB-Bridge-P
  - https://itead.cc/product/sonoff-zigbee-bridge-pro/ref/122/
---

Il n'est plus à présenter, déjà deux ans que le **Sonoff {{ page.ref }}** est sortie, c'est une passerelle de contrôle tout en un (zigbee-wifi-bluetooth), exclusivement dédiés aux produits de la marque Sonoff. Mais grâce à ce tuto tu pourras **l'utiliser avec ZHA ou Zigbee2mqtt**. Tu trouveras sur internet plusieurs discussions qui te permettront de faire fonctionner le **{{ page.ref }}** dans Home Assistant, **mais en installant un firmware Tasmota**. Après quelques recherches j'ai pu hacker le {{ page.ref }} directement avec un Firmware Esphome et ainsi faire fonctionner **la clé Zigbee cc2652 avec ZHA ou Zigbee2mqtt** le tout très facilement.

{% include product-embed.html guid="2174" %}

## Prérequis
- Home-assistant installé
- Esphome installé
- Module de [conversion usb uart ft232]({% link _products/{{ page.locale | slice: 0,2 }}/2021-05-19-module-de-conversion-usb-uart-ft232.md %})

## Présentation du {{ page.ref }}

Merci à Itead de m'avoir fourni ce module, tu pourras te rendre compte que le {{ page.ref }} dispose d'un emballage tout à fait ordinaire et aux couleurs emblématiques de la marque Sonoff. Pas de fioritures, une notice, un cable usb et un micro-module {{page.ref}}.

{% picture posts/{{ page.guid }}/presentation-sonoff-passerelle-zbbridge-pro-esphome-home-assistant.png --alt présentation du Sonoff {{ page.ref }} et présentation du circuit imprimé --img width="940" height="529" %}

Cette passerelle Sonoff {{ page.ref }} coûte entre 20 et 30 euros, **elle a l'avantage d'être déporté d'utiliser le wifi, bluetooth et Zigbee 3.0, ce qui en fait une mini passerelle tout en un**.

> Ne perdons pas de temps et passons au Hack.

## Injection du code Esphome

Comme écris plus haut ce tuto te permet de faire une intégration parfaite dans Home-Assistant grâce au module esphome.

Commence par connecter le {{ page.ref }} en usb à l'aide d'un module Uart/ftdi. Pour accéder au circuit imprimé et afin de pouvoir connecter le Ftdi il faudra enlever les 4 mini-pads qui cachent les visses. Ensuite rien de plus simple connecte le ftdi suivant le tableau ci-dessous:

{% picture posts/{{ page.guid }}/branchement-ftdi-uart-connection-esphome-sonoff-zbbridge-pro.png --alt branchement ftdi sur Sonoff {{ page.ref }} pour esphome --img width="940" height="582" %}

|Sonoff ZB Bridge PRO|FTDI programmer|
|3V3|Vcc/3.3v|
|GND|GND|
|RX|TX|
|TX|RX|
|GPIO00|GND (on power on)|

Ensuite crée un nouveau device dans l'onglet esphome ( attention le nom du module **$devicename** doit être tout attaché sans trait d'union ) et colle le code ci-dessous en adaptant les mots de passe. 

{% highlight yaml %}
substitutions:
  devicename: zbbridge
  friendly_name: zb-bridge-pro

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: ${devicename}_ap
    password: !secret zbbridge_ap_password

captive_portal:

ota:
  password: !secret zbbridge_ota_password
  
packages:
  remote-packages:
    url: https://github.com/haade-administrator/zbbridge-pro.git
    ref: main
    refresh: 0s
    files: [
      esphome/esphome.yaml,
      esphome/binary_sensor.yaml,
      esphome/bluetooth.yaml,
      esphome/light.yaml,
      esphome/output.yaml,
      esphome/rtttl.yaml,
      esphome/sensor.yaml,
      esphome/output.yaml,
      esphome/switch.yaml,
      esphome/text_sensor.yaml,
      esphome/uart.yaml,
      esphome/stream_server.yaml,
   ]  

external_components:
  - source: github://oxan/esphome-stream-server
{% endhighlight %}

Le dépôt github ne s'est pas fait tout seul je me suis fortement inspiré du dépôt Github source:
[Intégration Zbbridge-pro Giancky79](https://github.com/Giancky79/ZB-Bridge-P){: target="_blank"}

Il ne te reste plus qu'à valider le code et à pousser le tout sur le Sonoff {{ page.ref }}.

Une fois uploadé dernière étape d'intégration Esphome, rendez-vous dans les applications et **configure ton device esphome, clic sur le lien ci-dessous**.

{% include homeassistantlink.html integrations="" %}

**Rendu du module dans esphome:**

À l'heure ou j'écris ce post tu auras accès à toutes les infos nécessaires, si tu ne désires pas utiliser le tracker du bluetooth qui est activé par défaut copie ces lignes de codes dans le modules esphome

{% highlight yaml %}
esp32_ble_tracker:
  active: false
{% endhighlight %}

{% picture posts/{{ page.guid }}/integration-sonoff-zbbridge-pro-esphome-commande.png --alt rendu de la passerelle Sonoff {{ page.ref }} dans esphome --img width="940" height="948" %}

**Quelles sont les infos qui remontent dans esphome:**
- zb_bridge_pro_fw_update ( switch reset et upload du firmware )
- zb_bridge_pro_uptime_readable (temps de lecture)
- température interne
- adresse ip
- adress mac
- le voltage de la batterie interne

> et bien d'autres encore ...

## Configuration ZHA

Si tu souhaites utiliser la clé zigbee dans zha, ilte reste à configurer la clé comme sur les captures ci-dessous, clic sur le lien ci-dessous pour te rendre directement dans la config de la clé:

{% include homeassistantlink.html integration="zha" %}

Ensuite ouvre une seconde page et va dans l'intégration esphome en cliquant sur le lien ci-dessous:

{% include homeassistantlink.html configure_integration="esphome" %}

clic sur le bouton tout en haut zbbridge firmware update et lorsque la led passe au vert confirme l'intégration de la clé dans ZHA, si tu rencontres un soucis clic à nouveau sur le firmware update de esphome *(la manip du toggle firmware update est la même pour mettre à jour le firmware de la clé zigbee)*. J'espère que ces infos sont assez claires à ton sens sinon contacte moi.

{% highlight yaml %}
socket://[your_address_ip]:6638 // dans mon cas 192.168.1.217
baudrate: 115200
target: sofware

ou 

socket://[devicename.local]:6638 // remplace le device name par le nom de substitution dans mon cas **zbbridge**
baudrate: 115200
target: software
{% endhighlight %}

J'ai fait une vidéo d'intégration de la clé zigbee dans zha avec un défaut d'intégration. Pour ce faire prépare l'adresse de la clé, ensuite enclanche le switch fx dans esphome et configure la clé rapidement, sinon relance l'opération et ça le feras.

![Méthode de connection et de fonctionnement de la clé cc2652 zigbee du zbbridge-pro dans ZHA]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/integration-zha-zigbee-esphome-zbbridge-pro.webp{{ cachebuster }}){: width="720" height="384"}

Ci-dessous le fonctionnement lumineux après activation du switch. **Le voyant vert te permet de savoir quand intégrer** ou faire la mise à jour du firmware:

![Fonctionnement du switch firmware zigbee dans esphome]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/zigbee-firmware-update-esphome-sonoff-zbbridge-pro.webp{{ cachebuster }}){: width="400" height="275"}

## Configuration zigbee2mqtt
La configuration dans Z2M est légèrement différente cor tu feras un appel par tcp et non par socket

Va dans le fichier **configuration.yaml** du dossier zigbee2mqtt et modifie les lignes suivante:

Ps: si tu ne sais pas comment modifier les fichiers dans HA installe le module **File Editor** en cliquant sur le lien ci-dessous:

{% include homeassistantlink.html supervisor_ingress="core_configurator" %}


{% highlight yaml %}
serial:
  port: tcp://[your_address_ip]:6638
  adapter: auto
{% endhighlight %}

## Update du firmware zigbee 3.0

Par défaut le firmware date de septembre 2022. Tu trouveras le firmware sur le github Zigbee2mqtt prend bien la version launchpad

[Z-stack zigbee2mqtt firmware launchpad cc2652p](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_3.x.0/bin){: target="_blank"}

Pour mettre à jour le firmware de la clé zigbee cc2652p **suis le readme du dépot Haade dédié à ce tuto**
[installation du dernier firmware Zigbee](https://github.com/haade-administrator/zbbridge-pro)

Si tu n'y arrives pas n'hésite pas à m'écrire

## Documents Sonoff {{ page.ref }}
{% include doclink.html pdf="ZB-Bridge-pro-specification-product.pdf" title="Spécifications produits Sonoff Zbbridge-pro" %}
{% include doclink.html pdf="ZB-Bridge-Pro-quick-install.pdf" title="Guide rapide Sonoff Zbbridge-pro" %}
{% include doclink.html pdf="ZB-Bridge-Pro-user-manual.pdf" title="Manuel complet Sonoff Zbbridge-pro" %}

{% include product-embed.html guid="2174" %}

## Conclusion

Voilà un moyen simple de faire une intégration d'une clé {{ page.ref }} dans home-assistant avec un firmware Esphome. L'avantage de cette clé zigbee est facilement déportable car liée en wifi, tu pourras utiliser le sniffer BLE ( bluetooth 4.2) et la fameuse clé cc2652 zigbee 3.0, un tout en un.