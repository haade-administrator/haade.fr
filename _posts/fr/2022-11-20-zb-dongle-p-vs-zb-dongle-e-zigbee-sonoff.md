---
guid: 30
title: "ZBDongle-P VS ZBDongle-E"
description: "Comparatif des clés zigbee sonoff dongle-p et dongle-e quel SOC choisir pour l'avenir de la gestion du protocole"
layout: post
author: Nico
image: 'dongle-p-vs-dongle-e-zigbee-sonoff.png'
date: 2022-11-20 17:20
last_modified_at: 
categories: [Haade-lab]
tags: []
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
  - https://www.reddit.com/r/homeassistant/comments/x9kkh1/zigbee_matter_hub_cc2652p_vs_efr32mg21_vs_cc2531/
  - https://sonoff.tech/
---

## Intro

 aujourd'hui nous allons  comparer deux clés  ZigBee de la marque sonoff la ZBDongle-P et la ZBDongle-E. La ZBDongle-P dispose d'un processeur CC2652P, qui a été longuement éprouvé et fonctionne sur l'ensemble des plateformes domotique. quand a la clé ZBDongle-E dispose d'un processeur EFR32MG21, celle-ci est beaucoup plus récente mais semble être l'avenir des processeurs des clés Zigbee 3.0, vu sa récente introduction il faudra faire attention à ce qu'elle soit bien compatible avec les plateformes domotiques actuelles. Par exemple avec le service zigbee2mqtt celle-ci est à utiliser avec précaution car encore expérimental, voir le lien dans le tableau ci-dessous. **La principale différence réside dans la puissance du signal la clé ZBDongle-P a un signal initiales de 5 dbm et peut aller jusqu'à 20 Dbm max, alors que la ZBDongle-E a un signal avoisinant les 20 décibels maximum.** La Seconde différence se trouve au niveau des dimensions la ZBDongle-P mesure 66mm tandis que la ZBDongle-E mesure 11 mm de moins. Les mises à jours du firmware fonctionnent de façon identique sur les deux clés.

## Comparatif ZBDongle-P VS ZBDongle-E

||ZBDongle-P|ZBDongle-E|
||:--------:|:--------:|
|**Soc**|CC2652P|EFR32MG21|
|**Processeur**|Cortex-M4|Cortex-M33|
|**Memoire Flash**|352Kb|**1000kb**{: .blue }|
|**Ram**|80kb|**96kb**{: .blue }|
|**Interface Protocole**|Z-Stack(ZNP)|EmberZNet(EZSP)|
|**Usb serie Soc**|CP2102(N)|CH9102F|
|**ID**|Dongle Plus|Dongle Plus V2|
|**Contrôle de flux**|Hardware|Software|
|**Dimensions**|63mm|**52mm**{: .blue }|
|**Puissance du signal**|De 5 à 20dbm max|**+/-20dbm max**{: .blue }|
|**ZHA Home Assistant**|[Supporté](https://www.home-assistant.io/integrations/zha/){:target="_blank"}|[Supporté](https://www.home-assistant.io/integrations/zha/){:target="_blank"}|
|**Zigbee2mqtt**|[Supporté](https://www.zigbee2mqtt.io/guide/adapters/#recommended){:target="_blank"}|[**Expérimental**{: .red}](https://www.zigbee2mqtt.io/guide/adapters/#not-recommended){:target="_blank"}|
|**Openhab**|**Non Supporté**{: .red }|Supporté|
|**Jeedom**|Supporté|Supporté|
|**Iobroker**|Supporté|Supporté|
|**Domoticz**|Supporté|Supporté|

## Différence entre les Soc:

**EFR32MG21 est plus puissant que CC2652P**{: .red} pour les appareils Zigbee.
Le CPU de l'EFR est un ARM Cortex-M33 qui fonctionne à 80Mhz avec 1Mb de flash et 96Kb de RAM, c'est une évolution de l'ancien M4F.
À l'intérieur du CC2652P qui fonctionne à 48MHz, n'a que 300Kb de flash et 8Kb de RAM+256Kb de ROM.

{% picture posts/{{ page.guid }}/cortex-M4-M33-EFR32MG21-Zigbee.png --alt processeur EFR32MG21 --img width="768" height="622" %}

> Vous pouvez voir dans ce test video, que la puissance et la qualité du lien sont bien meilleures avec les nouveaux dongles Zigbee incluant le Soc EFR32MG21.

{% include youtubePlayer.html id="iaP6Cu3XrLU" %}

## Compatibilité avec Matter

Notez que Zigbee n'est pas directement compatible avec Matter. Au lieu de cela, Matter utilise une norme radio "de type Zigbee" appelée Thread, qui ajoute un adressage IP au maillage. Je suis à peu près sûr que le dongle cc2652 peut être configuré en tant que coordinateur Zigbee ou en tant que routeur de bordure de thread, selon le micrologiciel/logiciel que vous installez, mais je doute qu'il puisse faire les deux en même temps (mais peut-être que quelqu'un a essayé et peut partager ?), vous en aurez donc probablement besoin de deux : un pour vos appareils Zigbee et un pour vos appareils Thread.

## firmware flashing

Le dongle USB Plus Zigbee 3.0 est livré pré-flashé avec le micrologiciel du coordinateur, mais si vous souhaitez mettre à jour, modifier le micrologiciel du routeur et ajouter au dongle ou générer le micrologiciel qui prend en charge le contrôle de flux matériel, veuillez lire le document suivant.

Flashage du micrologiciel ZBDongle-P (CC2652P) et ZBDongle-E (EFR32MG21)
Activer le contrôle de flux matériel et générer le micrologiciel correspondant


## Tutoriel de configuration de la puissance de transmission ZBDongle-P



