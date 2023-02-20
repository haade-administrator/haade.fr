---
guid: 47
title: "Test de la prise intelligente Fibaro"
description: "Malgré un coût élevé que vaut vraiment cette prise intelligente z-wave 700 Fibaro FGPWE/P-102"
layout: post
author: Nico
date: 2023-02-19 18:06
last_modified_at: 
categories: [Domotique, Tests, Zigbee]
tags: []
image: 'prise-intelligente-fibaro-wall-plug-fgpwe-f-102-zwave-700.png'
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
rating: 4.5
sourcelink:
  - https://www.fibaro.com/fr/products/wall-plug/
---

{% include product-embed.html guid="2148" %}
{% include product-embed.html guid="2149" %}


{% picture posts/{{ page.guid }}/fibaro-FGPW-102-prise-zwave-intelligente.png --alt présentation fibaro FGPW-102 --img width="940" height="529" %}

# Documents

{% include doclink.html pdf="Manuel-Fibaro-FGWPEF-102-S-v2.7_web.pdf" title="Notice installation et utilisation prise intelligente z-wave 700 Fibaro FGPWE/P-102" %}

{% include doclink.html pdf="Manuel-instruction-fibaro-FGWPx-10x-EN-SG.pdf" title="Manuel instruction image prise intelligente z-wave 700 Fibaro FGPWE/P-102" %}

{% picture posts/{{ page.guid }}/dimensions-fibaro-wall-plug-E-et-F-102-zwave-700-utility.png --alt dimension fibaro FGPW-102 prise intelligente zwave --img width="320" height="175" %}

{% picture posts/{{ page.guid }}/prise-intelligente-fibaro-wall-plug-E-et-F-102-zwave-700.png --alt fibaro FGPW-102 version france et allemanggne schuko --img width="940" height="529" %}

{% picture posts/{{ page.guid }}/integration-home-assistant-zwavejs.png --alt integration prise intelligente fibaro fgpw-102 dans homeassistant avec zwavejs --img width="940" height="901" %}

![Paramètre Fibaro fgpw-102- homeassistant-zwavejs]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/parametre-homeassistant-zwavejs-fibaro-fgpw-102.webp{{ cachebuster }}){: width="940" height="870"}

# connaître l'état de la prise

## dans le réseau

Restes appuyé le temps que la prise clignote en violet, ensuite une indication colorée apparait.
- Si vert tu es connecté directement à la clé
- En jaune tu es connecté à un router
- En violet la communication est limitée
- En rouge il n'y a pas de signal

## de la consommation

si la conso est de

- 80w instantané la couleur sera bleu
- 210w instantané la couleur sera verte
- 550w instantané la couleur sera jaune
- 1250w instantané la couleur sera orange
- 2000w instantané la couleur sera rouge
- 2300w instantané la couleur sera violette

# Caractéristiques techniques

|Alimentation|230V AC, 50/60 Hz|
|Courant de charge nominal|11A|
|Consommation d'énergie|jusqu'à 1,6 W|
|Puissance de sortie (pour charge résistive)|2,5kW|
|Normes|RED 2014/53/EURoHS 2011/65/EU|
|Température de fonctionnement|0 – 40°C|
|Prises de type E ou F (Schuko)|CEE 7/16 – charge max 2,5 A, CEE 7/17 – charge max 11A|
|Protocole radio|Z-Wave, Z-Wave+ (firmware 3.2 ou supérieur)|
|Radiofréquence|868,4 ou 869,8 MHz EU, 869,0 MHz RU|
|Puissance d'émission radio|jusqu'à -10 dBm (EIRP)|
|Portée|jusqu'à 50 m à l'extérieur, jusqu'à 30 m à l'intérieur, jusqu'à 40 m à l'intérieur (firmware 3.2 ou supérieur)|
|Dimensions|(P x H) 43 x 65 mm|

|Power supply|230V AC, 50/60 Hz|
|Rated load current|11A|
|Power consumption|up to 1.6W|
|Power output (for resistive load)|2.5kW|
|In accordance with EU standards|RED 2014/53/EURoHS 2011/65/EU|
|Operational temperature|0 – 40°C|
|To be used with E or F type (Schuko) sockets|CEE 7/16 – max load 2.5 A, CEE 7/17 – max load 11A|
|Radio protocol|Z-Wave, Z-Wave+ (firmware 3.2 or higher)|
|Radio frequency|868.4 or 869.8 MHz EU, 869.0 MHz RU|
|Radio transmit power|up to -10 dBm (EIRP)|
|Range|up to 50 m outdoors, up to 30 m indoors, up to 40 m indoors (firmware 3.2 or higher)|
|Dimensions|(D x H) 43 x 65mm|

{% include product-embed.html guid="2148" %}
{% include product-embed.html guid="2149" %}