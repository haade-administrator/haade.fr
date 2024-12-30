---
guid: 149
title: "Domotise facilement ton compteur d'eau"
description: ""
ref: "HWE-WTR-23"
layout: post
authors: [Nico]
date: 2024-12-30 08:31
last_modified_at: 
categories: [Tests, Home-Assistant]
tags: []
video: 
image: 'homewizard-watermeter-hwe-wtr-13-domotise-compteur-eau-home-assistant.png'
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
  - https://www.homewizard.com/fr-be/
  - https://www.homewizard.com/nl/blog/works-with-home-assistant/
---

Vous pouvez connecter le compteur d’eau intelligent HomeWizard à votre Wi-Fi et à votre compteur d’eau. À partir de là, notre compteur d’eau intelligent lira votre compteur d’eau analogique. Les spécifications de notre compteur d’eau sont les suivantes.

Lit votre compteur d’eau analogique

Avec l’adaptateur, vous pouvez placer le compteur d’eau sur la plupart des compteurs d’eau analogiques 

- Zenner
- Sensus
- Itron
- Actaris, 
- Hidroconta
- Schlumberger
- Elster
- Honeywell
- Maddalena MVM
- DH Metering et Diehl Metering en 2 minutes. Il suffit d’insérer le compteur d’eau dans l’adaptateur, de le connecter au Wi-Fi et le tour est joué.

|![Installation du watermeter homewizard mesure de consommation d'eau wifi compatible home assistant et compteur Zenner]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/zenner.webp{{ cachebuster }}){: width="300" height="220" class="lazyload pictaninpost"}|<b>Zenner</b><br>Les compteurs d'eau Zenner sont compatibles. Il suffit de fixer le support 2 et deux vis (PS4/16).|
|![Installation du watermeter homewizard mesure de consommation d'eau wifi compatible home assistant et compteur Sensus]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/sensus.webp{{ cachebuster }}){: width="300" height="220" class="lazyload pictaninpost"}|<b>Sensus (1)</b><br>Il existe deux compteurs Sensus distincts disposant de fixations différentes. Vérifiez soigneusement le compteur Sensus en votre possession, afin de fixer le support comme il se doit<br>Les compteurs d'eau Sensus (1) sont compatibles et se fixent à l'aide du support 2 et de deux vis (PS2.6/8).|
|![Installation du watermeter homewizard mesure de consommation d'eau wifi compatible home assistant et compteur Sensus vairante 2]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/sensus-2.webp{{ cachebuster }}){: width="300" height="220" class="lazyload pictaninpost"}|<b>Sensus (2)</b><br>Vérifiez soigneusement le compteur Sensus en votre possession, afin de pouvoir fixer le support comme il se doit.<br>Les compteurs d'eau Sensus (2) sont compatibles et se fixent à l'aide du support 1 et de deux vis (PS2.6/8). Si le couvercle de ce compteur d'eau Sensus est gênant lors de l'installation du support, vous pouvez tourner l'intérieur du compteur d'eau (il est séparé du boîtier extérieur).|
|![Installation du watermeter homewizard mesure de consommation d'eau wifi compatible home assistant et compteur Itron, Actaris, Hidroconta et Schlumberger]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/itron-actaris-hidroconta-schlumberger.webp{{ cachebuster }}){: width="300" height="219" class="lazyload pictaninpost"}|<b>Itron, Actaris, Hidroconta et Schlumberger</b><br>La plupart des compteurs sont munis d'un capuchon sur la pointe de la vis qui peut être cassé. Référez-vous à l'image pour un exemple des trois différents capuchons. Ce compteur d'eau peut également être de couleur noire ou bleue. Les compteurs d'eau Itron, Actaris, Hidroconta et Schlumberger sont compatibles et se fixent à l'aide du support 1 et une vis (M4/12).|
|![Installation du watermeter homewizard mesure de consommation d'eau wifi compatible home assistant et compteur Itron, Actaris, Hidroconta et Schlumberger varainte 2]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/itron-actaris-hidroconta-schlumberger-2.webp{{ cachebuster }}){: width="300" height="231" class="lazyload pictaninpost"}|<b>Itron, Actaris, Hidroconta et Schlumberger</b>|                        
|![Installation du watermeter homewizard mesure de consommation d'eau wifi compatible home assistant et compteur Elsther ou Honeywell]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/elsther-honeywell.webp{{ cachebuster }}){: width="300" height="198" class="lazyload pictaninpost"}|<b>Elsther, Honeywell</b><br>Les compteurs d'eau Elster et Honeywell sont compatibles et se fixent à l'aide du support 1 et de deux vis (PS4/16).|
|![Installation du watermeter homewizard mesure de consommation d'eau wifi compatible home assistant et compteur Diehl Metering]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/diehl-metering.webp{{ cachebuster }}){: width="300" height="210" class="lazyload pictaninpost"}|<b>Diehl Metering</b><br>Les compteurs d'eau Diehl Metering ne sont pas munis de trous de vis, vous pouvez plutôt emboîter le support 3 dans le compteur d'eau.|
|![Installation du watermeter homewizard mesure de consommation d'eau wifi compatible home assistant et compteur Dh Metering]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/dh-metering.webp{{ cachebuster }}){: width="300" height="200" class="lazyload pictaninpost"}|<b>Dh Metering</b><br>Les compteurs d'eau DH Metering sont compatibles et se fixent à l'aide du support 2 et de deux vis (M2.5/12).|       
|![Installation du watermeter homewizard mesure de consommation d'eau wifi compatible home assistant et compteur Maddalena MVM]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/maddalena-mvm.webp{{ cachebuster }}){: width="300" height="210" class="lazyload pictaninpost"}|<b>Maddalena MVM</b><br>Sur les compteurs d'eau Maddalena MVM, le support doit être placé sens dessus dessous. Vous devez accrocher le support sur le côté gauche du compteur d'eau et le visser sur le côté droit (avec une vis, P2.6/8). Veillez à ce que votre compteur d'eau analogique dispose de cette option.|                


[Domotise le compteur d'eau Itron avec esp et cc1101 dans ha pour 10€]({% post_url fr/2022-12-21-domotiser-compteur-eau-itron-everblu-cyble %}){: target="_blank"}

{% include qrlink.html qrlink="https://setup.homewizard.com" text="télécharger l'application Homewizard directement pour Android ou Apple" realtextlink="Applications Homewizard pour Smartphone" %}

## Installation {{ page.ref }}

Vidéo d'installation officielle

{% include videoPlayer.html youtubeId="MY7T5YkCSI4" %}


## Caractéristique technique du {{ page.ref }}


|Poids|310 g|
|SKU|HWE-WTR-13|
|Connection|802.11b/g/n (2.4 GHz) WiFi<br>WPA2 and WPA3 encrypted|
|Power supply|USB-C: Realtime data<br>2x CR123A Batterij: 4x per day measurement history|
|Maximum measurement speed|USB-C: 200 liters per minute<br>2x CR123A Batterij: 30 liters per minute (1 year)|
|Minimum measurement unit|0.3 liters|
|History|Energy usage history of the past 12 months<br>Extend your energy usage history with an Energy+ subscription|
|Security|Automatic security updates<br>128bits AES encryption with TLS/SSL|
|External connections|Open API (JSON)|

|Poids|310 g|
|SKU|HWE-WTR-13|
|Connexion|802.11b/g/n (2,4 GHz) WiFi<br>Cryptage WPA2 et WPA3|
|Alimentation électrique|USB-C: données en temps réel<br>2 piles CR123A: historique de mesure 4x par jour|
|Vitesse de mesure maximale|USB-C: 200 litres par minute<br>2 piles CR123A: 30 litres par minute (1 an)|
|Unité de mesure minimale|0,3 litre|
|Historique|Historique de consommation d'énergie des 12 derniers mois<br>Étendez votre historique de consommation d'énergie avec un abonnement <b>Energy+</b>|
|Sécurité|Mises à jour de sécurité automatiques<br>Cryptage AES 128 bits avec TLS/SSL|
|Connexions externes|API ouverte (JSON)|

**Les + du produit:**{: .blue}

- Le design
- la polyvalence (surtout grace au raspberry pi)
- la qualité de fabrication
- la qualité des matériaux utilisés
- Led controlable dans l'application
- 5 protocoles intégrés ( zigbee, *Z-wave, Thread/Matter, wifi, bluetooth )

**Les - du produit:**{: .red}

- Grande polyvalence grâce à Home Assistant
- le prix **plus de 200€** pour un système fonctionnel
- Pour le moment incompatible Google Coral
- Gestion SSD externe incomplète
- Obligation de montage à l'achat ( pas fait pour un débutant )

## Conclusion