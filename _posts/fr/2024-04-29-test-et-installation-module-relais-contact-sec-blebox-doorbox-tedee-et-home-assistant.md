---
guid: 123
title: "Test et integration du module Blebox Doorbox v2"
description: "Dans cet article je vais te présenter le micro module wifi doorbox v2 de Blebox NO/NC pour porte de garage, portail ainsi que l'intégration dans l'application Tedee et Home Assistant"
ref: "doorbox v2"
layout: post
authors: [Nico]
date: 2024-04-29 08:46
last_modified_at: 
categories: [Domotique, Tests, Haade-lab, Wifi]
tags: []
video: 
image: 'test-blebox-doorbox-v2-integration-tedee-home-assistant.png'
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
  - https://blebox.eu/en/product/doorbox/
  - https://blebox.eu/en/control-devices-blebox-system/
  - https://blebox.eu/en/manuals/
---

Tedee m'a aussi fourni un module relais {{ page.ref }}, il s'agit d'un module NO/NC de la marque Blebox. Fabriquant Polonais de micro module wifi, je dois avouer qu'ils sont qualitatifs et il y a plutôt intérêt car il est vendu 69€ quand la conccurence fait la mêmche chose pour moitié prix !.

{% picture posts/{{ page.guid }}/blebox-doorbox-tedee.png --alt contenu de la boite du relais Blebox pour Tedee Go --img width="940" height="529" %}

Pourquoi m'avoir fourni ce module, et bien tu dois t'en douter il est compatible avec l'envirronnement Tedee et par la même occasion Home Assistant. Enfin compatible avec l'envirronnement Tedee oui [mais via le portail](https://portal.tedee.com/){: target="_blank"}, car sur l'application Smartphone Tedee tu pourras simplement actionner le relais NO/NC.

{% include product-embed.html guid="2197" %}

Ce module est vendu environ 69€ pour faire du contact NO/NC et limité à une tension d'entrée allant de 12 à 24v. C'est franchement cher surtout que la concurrence comme Tuya peut te vendre ça 2 à 3 fois moins cher en wifi ou Zigbee.

> **Le module relais te sera d'aucun intérêt dans l'environnement Tedee**

{% picture posts/{{ page.guid }}/blebox-doorbox-tedee-taille-dans-la-main.png --alt rendu dans la main du relais Blebox pour Tedee Go --img width="940" height="529" %}

{% include doclink.html pdf="BleBox_Installation_FR.pdf" title="Notice d'installation et manuel d'utilisation du Tedee blebox doorbox" %}

## Prérequis

Pour suivre ce tutoriel tu auras besoin de:
- l'application wBox par Blebox pour [Google playstore](https://play.google.com/store/apps/details?id=eu.blebox.wBox&hl=en_US){: target="_blank"} ou [Apple AppStore](https://apps.apple.com/fr/app/wbox-by-blebox-eu/id1000135997){: target="_blank"}
- l'application Tedee [Google playstore](https://play.google.com/store/apps/details?id=tedee.mobile&hl=fr&gl=US){: target="_blank"} ou [Apple AppStore](https://apps.apple.com/fr/app/tedee/id1481874162){: target="_blank"}
- [Home Assistant](https://www.home-assistant.io/){: target="_blank"} d'installé et opérationnel.
- Une [alimentation 12-24v](https://s.click.aliexpress.com/e/_DEmnuCJ){: target="_blank"}

Je trouve comme toi que ça fait beaucoup d'applications à installer, mais si tu utilises les serrures connectées Tedee ou Home Assistant, l'application Blebox ne sera installé que temporairement le temps de configuration du wifi.

## Présentation Blebox {{ page.ref }}

C'est la première fois que j'ai affaire à cette marque et d'ailleurs je tiens à remercier Tedee de me l'avoir fourni. Je dois dire que le produit est d'excellente qualité vu le prix ( vendu aux alentours de 60€ ) c'est le moins que l'on en attendait !

{% picture posts/{{ page.guid }}/face-arriere-blebox-doorbox-v2.png --alt face arrière du module Blebox doorbox v2 --img width="940" height="529" %}

|Tension d'alimentation|12-24 V AC / DC|
|Consommation électrique|moins de 1W|
|Numéro de sorties|1|
|Type de sorties|relais|
|Charge maximale|6A 24V AC 6A 24V DC|
|Tension d'entrée|12 - 24 V AC / DC|
|Isolation galvanique|Oui, optique|
|Polarisation des entrées|détecté automatiquement|
|Boîtier|en composition de polyuréthane sans halogènes, auto-extinguible pour classe thermique B (130 °C)|
|Indice de protection|IP20|
|Montage|dans le boîtier d'encastrement (approfondi ou double) dans le boîtier du récepteur.|
|Transmission|bidirectionnelle, cryptée|
|Fréquence de transmission|2,4 GHz|
|Norme de communication|μWiFi, compatible WiFi|
|Mode de communication|connexion directe (comme point d'accès), connexion Wi-Fi via un routeur standard, connexion avec accès depuis n'importe quel endroit dans le monde (nécessite un accès à Internet)|
|Contrôlez avec|Apple iPhone, Apple iPad, iPad Mini, Android, ordinateurs et appareils mobiles fonctionnant entièrement en HTML5|
|Cryptage|WPA2-PSK et chiffrement authentifié avec données associées (AEAD)|
|Type de sortie de contrôle|relais NC/NO|
|Puissance maximale|144 VA à 24 V CA 144 W à 24 V CC |

|Supply voltage|12-24V AC / DC|
|Power consumption|less than 1W|
|Outputs number|1|
|Outputs type|relay|
|Max load|6A 24V AC 6A 24V DC|
|Inputs voltage|12 - 24V AC / DC|
|Galvanic isolation|Yes, optical|
|Inputs polarization|detected automatically|
|Housing|made of polyurethane composition not containing halogens, self-extinguishing for thermal class B (130 °C)|
|Protection Rating|IP20|
|Mounting|in the flush-mounted box (deepen or double) in the receiver case.|
|Transmission|bi-directional, encrypted|
|Transmission frequency|2.4GHz|
|Communication standard|μWiFi, compatible with WiFi|
|Communication mode|direct connection (as access point), Wi-Fi connection via a standard router, connection with access from any location in the world (requires access to the Internet)|
|Control with|Apple iPhone, Apple iPad, iPad Mini, Android, computers and mobile devices operating a fully HTML5|
|Encryption|WPA2-PSK and authenticated encryption with associated data (AEAD)|
|Control output type|relay NC/NO|
|Maximum power|144VA @ 24V AC 144W @ 24V DC|

### Documents à télécharger

{% include doclink.html pdf="BleBox_Installation_FR.pdf" title="Notice d'installation et manuel d'utilisation du Tedee blebox doorbox" %}

{% include doclink.html pdf="Blebox-doorbox-v2-demarrage-rapide.pdf" title="Notice démarrage rapide blebox doorbox v2 rédigé en anglais" %}

{% include doclink.html pdf="schema-branchement-doorBox_v2.pdf" title="Schéma de branchement blebox doorbox v2 rédigé en anglais" %}

## Paramétrage du Wifi

Rends toi dans l'application wBox par Blebox.eu et enregistre-toi 

{% picture posts/{{ page.guid }}/first-connection-app-blebox-doorbox-v2.png --alt première connection à l'application Blebox pour paramétrer le module doorbox v2 --img width="940" height="509" %}

{% picture posts/{{ page.guid }}/connection-accesspoint-app-blebox-doorbox-v2.png --alt connection à l'application Blebox pour paramétrer le point d'accès du module doorbox v2 --img width="940" height="509" %}

{% picture posts/{{ page.guid }}/connection-wifi-reseau-domestique-app-blebox-doorbox-v2.png --alt connection à l'application Blebox pour paramétrer la connection wifi du module doorbox v2 --img width="940" height="509" %}

{% picture posts/{{ page.guid }}/ajouter-nouveau-module-reseau-domestique-app-blebox-doorbox-v2.png --alt ajoute le module doorbox v2 dans l'application wbox par blebox.eu --img width="940" height="509" %}

{% picture posts/{{ page.guid }}/desactive-accesspoint-app-blebox-doorbox-v2.png --alt désactive le point d'accès du module doorbox v2 --img width="940" height="509" %}

> **Désormais** tu n'as plus besoin de l'application sur téléphone wBox par Blebox.eu

## WebUI

**Chaque modules Blebox disposent d'une interface Web** afin de paramétrer les réglages du module, pour y accéder il te suffit de récupérer l'adresse ip du module présentée dans l'appli Smartphone wBox. Tu auras accès *à l'ensemble des données et plus encore* et tu pourras ainsi modifier n'importe quel paramètres du module. Génial !

![accès direct au paramétrage wifi sans application des modules Blebox Doorbox v2]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/acces-webui-blebox-doorbox-v2-online.webp{{ cachebuster }}){: width="940" height="517" class="lazyload"}

## Paramétrage dans l'Application Tedee

{% picture posts/{{ page.guid }}/integration-blebox-doorbox-v2-tedee-application.png --alt intégration du module Blebox doorbox v2 dans l'univers Tedee --img width="940" height="509" %}

{% picture posts/{{ page.guid }}/parametrage-blebox-doorbox-v2-tedee-application.png --alt paramétrage du module Blebox doorbox v2 dans l'univers Tedee --img width="940" height="509" %}

## Intégration des modules Blebox dans Home Assistant

{% picture posts/{{ page.guid }}/configure-blebox-home-assistant.png --alt remontée automoatique et configuration du module Blebox doorbox v2 dans l'univers Home assistant --img width="327" height="206" %}

{% picture posts/{{ page.guid }}/rendu-blebox-doorbox-home-assistant.png --alt rendu du module Blebox doorbox v2 dans l'univers Home assistant --img width="940" height="458" %}

{% picture posts/{{ page.guid }}/controle-du-blebox-doorbox-v2-dans-home-assitant.png --alt controle d'ouverture du module Blebox doorbox v2 dans l'univers Home assistant --img width="592" height="568" %}



**Les + du produit:**{: .blue}
- Module de qualité
- contrôle par Webui
- contrôlable dans l'univers Tedee
- intégrable à Home Assistant
- paramétrable à souhait (NO/NC)

**Les - du produit:**{: .red}
- le prix ( 60€ )
- absence d'alimentation
- alimentable en 12-24v

{% include product-embed.html guid="2197" %}

## Conclusion



