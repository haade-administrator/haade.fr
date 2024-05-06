---
guid: 125
title: "Découverte Gamme coordinateur SMLIGHT"
description: "SMLight nous fourni une gamme complète de coordinateurs Zigbee déporté et très complet, une installation facile et compatible Zigbee2mqtt"
ref: "SLZB-06"
layout: post
authors: [Nico]
date: 2024-05-04 18:29
last_modified_at: 
categories: [Tests, Zigbee]
tags: []
video: 
image: 'smlight-slzb-series-poe-and-other.png'
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
rating: 4.7
sourcelink:
  - https://smlight.tech/
---

J'ai la chance de pouvoir vous présenter une partie de la gamme SMlight fabriquant ukrainien de coordinateurs Zigbee/Matter. Tu en as certainement entendu parlé, actuellement l'entreprise met le paquet en terme de communication et il y a de quoi tendre l'oreille ?

SMlight commercialise pas moins de 10 coordinateur/routeur compatible zigbee/thread/matter. Deux gammes principales se distinguent. la gamme slzb-06 et slzb-07.
La série slzb-06 est étoffée de 6 coordinateurs compatible rj45/esp32-V3(wifi-bluetooth).
tu as le choix entre les puces zigbee silabs EFR32 ou texas instrument CC2652 franchement royal.

La série slzb-07 est à la fois totalement différente de la série slzb-06 mais avec un ADN en commun et oui 4 controlleurs de dispos avec toujours du silabs ou TI.

{% include product-embed.html image="SMLIGHT-SLZB-06-series.png" title="Coordinateur Zigbee slzb-06* poe rj45 séries" brand="Smlight" description="SMLIGHT SLZB-06-Un adaptateur Zigbee 3.0 vers Ethernet, USB et WiFi avec prise en charge PoE, fonctionne avec Zigbee2MQTT, ZHA,Home Assistant" domlink="box-domotique/7042-smlight-adaptateur-usb-ethernet-poe-zigbee-30-cc2652p-zigbee2mqtt-et-zha.html" affiliate="_DcZxVaj" %}

## SMLight SLZB-06 un tout en un

Alors oui tu vas me dire que c'est un sacré engin, tellement grand que ça m'a fait pensé à la baguette de sorcier d'harry Potter ? 🦸‍♂️ 
Oui l'assemblage est simpliste mais tout de même fonctionnel et entièrement fabriqué en Ukraine il faut le souligner ça reste un exploit.

Mais mis à part ça, ce coordinateur SMLight {{ page.ref }} est un vrai régal, en effet il est disponible avec une interface de gestion Webui

![interface configuration coordinateur smlight slzb06 series firmware 2.0.18]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/interface-configuration-smlight-slzb-06.webp{{ cachebuster }}){: width="940" height="467" class="lazyload"}

|SMLIGHT|Domadoo|Aliexpress|
|-------|-------|----------|
|SLZB-06|[Liens](https://www.domadoo.fr/fr/box-domotique/7042-smlight-adaptateur-usb-ethernet-poe-zigbee-30-cc2652p-zigbee2mqtt-et-zha.html?domid=39){: target="_blank"}|[Liens](#){: target="_blank"}|
|SLZB-06 sans POE| - |[Liens](#){: target="_blank"}|
|SLZB-06P7|[Liens](#){: target="_blank"}|[Liens](#){: target="_blank"}|
|SLZB-06M|[Liens](https://www.domadoo.fr/fr/box-domotique/7043-smlight-adaptateur-usb-ethernet-poe-zigbee-30-efr32mg21-zigbee2mqtt-et-zha.html?domid=39){: target="_blank"}|[Liens](#){: target="_blank"}|

{% picture posts/{{ page.guid }}/tableau-comparatif-gamme-coordinateurs-zigbee-poe-smlight.png --alt tableau comparatif des coordinateurs zigbee rj45 poe de la gamme smlight --img width="850" height="1051" %}

{% picture posts/{{ page.guid }}/tableau-comparatif-gamme-coordinateurs-zigbee-usb-smlight.png --alt tableau comparatif des coordinateurs zigbee usb de la gamme smlight --img width="650" height="835" %}

{% picture posts/{{ page.guid }}/presentation-gamme-coordinateurs-smlight-10-unites-differentes.png --alt présentation de la gamme des10 coordinateurs zigbee vendu par smlight --img width="940" height="490" %}

## Documentation

[SLZB-06*](https://smlight.tech/manual/slzb-06/guide/getting-started/){: target="_blank"}
[SLZB-07*](https://smlight.tech/manual-slzb-07/){: target="_blank"}

## Outil flash firmware online ( interface )

[Flasher en ligne slzb-06 toutes versions confondues](https://smlight.tech/flasher/#SLZB-06){: target="_blank"}

## Flash firmware forcé

Si pour x raison tu n'arrives plus à forcer le flash du firmware des dongles tu pourras toujours [forcer ce flash en suivant la description](https://smlight.tech/flasher/#flashingFAQ){: target="_blank"} ( fonctionne pour les clés à base de chipset texas et silabs )

## Interface Opensource V0.9.9

![interface opensource smlight firmware 0.9.9]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/interface-smlight-slzb-v-opensource-0.9.9.webp{{ cachebuster }}){: width="940" height="465" class="lazyload"}

|Fonctions|SLZB-06|SLZB-06P7|SLZB-06M|SLZB-07P7|
|---------|-------|---------|--------|---------|
|Zigbee   |**v**{: .green}|**v**{: .green}|**v**{: .green}|**v**{: .green}|
|Matter   |**v**{: .green}|**v**{: .green}|**v**{: .green}|**v**{: .green}|
|Home-Assistant|**v**{: .green}|**!**{: .yellow}|**v**{: .green}|**v**{: .green}|
|Zigbee2Mqtt|**v**{: .green}|[**!**](https://smlight.tech/product/slzb-06p7/){: .yellow}|**v**{: .green}|**v**{: .green}|
|ZHA|**v**{: .green}|**v**{: .green}|**v**{: .green}|**v**{: .green}|

## Attention Zgbee2mqtt 1.37.x