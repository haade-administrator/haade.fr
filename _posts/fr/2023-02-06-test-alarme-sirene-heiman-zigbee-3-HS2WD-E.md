---
guid: 45
title: "Test Sirène Heiman HS2WD-E compatible zigbee 3.0"
description: "Sirène intelligente de la marque Heiman HS2WD-E compatible zigbee 3.0, que vaut-elle ?"   
author: Nico
date: 2023-02-06 08:06
last_modified_at: 
categories: [Domotique, Tests, Zigbee]
tags: []
image: 'heiman-sirene-alarme-zgbee-3-HS2WD-E.png'
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
rating: 4.6 
sourcelink:
  - https://www.heimantech.com/product/?type=detail&id=8
  - https://www.domadoo.fr/fr/peripheriques/5714-heiman-sirene-interieure-intelligente-zigbee-30.html?domid=39
---

Voilà une sirène intelligente qui existe depuis longtemps, au tout début Heiman a fabriqué une version zwave sans batteries de secours ce qui était un gros désavantage, mais depuis il existe une version Zigbee avec batteries de secours et le tout à moins de 30€, alors on est en droit de se demander si cette sirène vaut le détour.

Avec ses dimensions généreuses et des couleurs éclatantes cette sirène est de très bonne fabrication, j'ai voulu l'ouvrir pour voir ce qui se cachait dessous et je n'ai pas réussi car l'assemblage est solide. Le système de fixation de l'adaptateur de prises est très bien fait.
{% picture posts/{{ page.guid }}/heiman-smart-siren-prise-en-main-HS2WD-E.png --alt prise en main Heiman HSWD-E --img width="940" height="530" %}

{% include product-embed.html guid="2138" %}

# Intégration dans Zigbee2mqtt

La sirène est immédiatement reconu dans Z2M, les paramétrages sont nombreux:
- reconnu comme routeur
- permet de voir le niveau de charge de la batterie
- choix parmis 8 modes sonores ( stop, cambrioleur, incendie, urgence, panique policière, panique incendie, panique d'urgence)
- 4 niveaux sonores
- 4 niveaux lumineux
- On/Off lumière
- longueur du cycle de flash ( 0 à 10 )
- durée de l'alarme en secondes
- qualité du lien

# Les + du produit

- nombreuses fonctions
- Batterie intégrée avec jusqu’à 4 heures d’autonomie en marche
- Puissant son de 95 dB
- Facilité d’installation

# Les - de produit

- Sirène uniquement prévu pour l'intérieur du logement
- Intégration uniquement sur prise ( difficile de l'adapter avec un transfo exterme)
- pas d'alarmes en cas d'effractions ( lorsqu'on la débranche )

{% picture posts/{{ page.guid }}/heiman-smart-siren-about-z2m-HS2WD-E.png --alt  --img width="940" height="682" %}

{% picture posts/{{ page.guid }}/heiman-smart-siren-expose-z2m-HS2WD-E.png --alt  --img width="940" height="387" %}

{% picture posts/{{ page.guid }}/heiman-smart-siren-expose-mode-alarm-z2m-HS2WD-E.png --alt  --img width="940" height="278" %}

{% picture posts/{{ page.guid }}/heiman-smart-siren-prise-en-main-HS2WD-E.png --alt  --img width="940" height="530" %}

{% picture posts/{{ page.guid }}/heiman-sirene-alarme-zgbee-3-HS2WD-E-face-arriere.png --alt  --img width="940" height="530" %}

# FONCTIONS :

- Sirène Zigbee 3.0 sur prise
- Signalisation sonore et lumineuse
- Protocole Zigbee pour lancer un scénario en conséquence
- Batterie intégrée avec jusqu'à 4 heures d'autonomie en marche
- Puissant son de 95 dB
- Facilité d'installation 
 
# CARACTERISTIQUES TECHNIQUES :

|Tension De fonctionnement| AC110-240V|
|Batterie de secours| 3.8V/700mA|
|Niveau sonore d'alarme| 95db (1m de distance)|
|Portée du réseau sans fil| <80m (portée en champ libre en intérieur)|
|Température de fonctionnement| -10°C à +50°C|
|Humidité de travail| <95% RH (indiquant aucune condensation)|
|Protocole| Zigbee 3.0 (2.4Ghz)|
|Dimension| 80mm*80mm*32mm|

{% include product-embed.html guid="2138" %}

{% include doclink.html pdf="heiman-siren-manual-HS2WD-E.pdf" title="Manuel d'nstallation Heiman smart siren zigbee 3.0 HS2WD-E" %}

