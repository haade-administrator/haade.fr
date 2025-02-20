---
guid: 155
title: "Installer un bandeau Led connecté Diy avec WLED"
description: ""
ref: "GL-C-310WL"
layout: post
authors: [Math67]
date: 2025-02-20 11:52
last_modified_at: 
categories: [Haade-lab, Tests, Home-Assistant]
tags: []
video: 
image: 'install-bandeau-led-facilement-avec-wled-et-gledopto.png'
toc: true
beforetoc: ''
published: flase
noindex: false
sitemap:
  changefreq: 'monthly'
  exclude: 'no'
  priority: 0.5 #between 0.0 to 1.0, 1.0 high priority
  lastmod:  # date to end modification
locale: fr_FR
comments: true
rating: 5 
sourcelink:
  - https://kno.wled.ge
  - https://www.gledopto.com/h-col-443.html
  - https://s.click.aliexpress.com/e/_ookEADy
  - https://amzn.to/3CLncyE
---

Afin d’éclairer la niche à café dans ma cuisine, j’ai décidé de fabriquer moi-même mon bandeau LED en utilisant WLED. WLED se connecte sur votre Wifi et est reconnu nativement par Home Assistant, il permet d’utiliser un bandeau à LED adressable et offre beaucoup de possibilités de programmation, je vous explique dans cet article comment faire. 

{% include product-embed.html image="gledopto-gl-c-310wl-309-esp32-wled-encastrable-gestion-led.png" title="Gledopto GL-C-310WL" brand="Gledopto" description="GLEDOPTO ESP32 Mini WLED LED Contrôleur With Mic DIY Music Dynamic Modes Digital WS2811 WS2812 SK6812 TM1814 WS2813 WS2815 Strip" affiliate="_ookEADy" amazlink="3CLncyE" %}

## Prérequis
- Home assistant
- Un module WLED de la marque GLEDOPTO (ici GL-C-310WL)
- Un bandeau LED (WS2811, WS2812, SK6812, TM1814, WS2813 ou WS2815)
- Un profilé alu pour le bandeau LED
- Du fil électrique 1.5mm²
- Une alimentation 12V

{%- include alert.html type="warning" text="Attention! Vous allez devoir travailler au voisinage d'une tension de 220V qui est dangereuse si vous entrez en contact avec un conducteur électrique. Prenez garde à vos manipulations, en cas de doute coupez l'alimentation électrique." %}

## Découverte du Gledopto {{ page.ref }}

Le Gledopto {{ page.ref }} est discret, il peut s'encastrer dans une boite de dérivation, ôté connectique on retrouve une entrée compatible 5-24v ainsi que des 6 sorties RVB et deux connectiques libres GPIO12 et GPIO33 qui te permettrons de faire du DIY, comme rajouter un bouton poussoir aux multiples paramétrages.

- Peut contrôler deux bandeaux lumineux
- contrôle la segentation des couleurs
- interrupteur disponible directement sur le module
- possède un micro intégré de type 12S
- possibilité de paramétrer des scènes
- Accès à l'ensemble des fonctions WLED
- Entièrement compatible Home Assistant via l'intégration WLED

### Boutons physique du {{ page.ref }}

{% picture posts/{{ page.guid }}/fonctions-des-boutons-physiques du gledopto-gl-c-310wl.png --alt fonctions des boutons physique du Gledopto GL-C-310WL grâce à Wled intégré par défaut --img width="300" height="266" %}

**1# Bouton restart:**
En appuyant sur ce bouton tu éteins ou allume complètement le module rendant le controlleur WLED inutilisable.
Peut être utilse après une configuration du microphone

**2# Bouton function**
- appui court: fonction on/off ( allume ou éteint les LEDs )
- appui > 1 seconde: change la couleur des LED
- appui > 10 secondes: met le module en point d'accès et active le point d'accès WLED-AP

### Fonctions du bouton poussoir disponible sur le GPIO33

{% picture posts/{{ page.guid }}/fonctions-gpio-33-bouton-poussoir-gledopto-gl-c-310wl-led.png --alt fonctions des boutons poussoir connectable sur un port gGPIO33 DIY du Gledopto GL-C-310WL grâce à Wled intégré par défaut --img width="940" height="189" %}

Retrouve directement **la fiche produit** du {{ page.ref }} sur  le [site du Fabriquant Gledopto](https://www.gledopto.com/h-col-443.html){: target="_blank"}

### Caractéristiques Techniques

|Numéro de modèle|GL-C-310WL|
|Courant de sortie/canal|6 A max.|
|Types de puces|ESP32|
|Microphone|**Oui**|
|Poids net|20,1 g|
|Température de fonctionnement|-20 ~ 45 ℃|
|Tension d'entrée|DC 5-24 V|
|Courant de sortie total|10 A max.|
|Quantité de Leds dans le circuits intégrés|800 max.|
|Matériau|PC ignifuge|
|Poids brut|24,1 g|
|Taille|42 x 38 x 17 mm|

|Model No.|GL-C-310WL|
|Output Current/Channel|6A Max|
|Chip Types|ESP32|
|Microphone|Yes|
|N.W.|20.1g|
|Operating Temperature|-20~45℃|
|Input Voltage|DC 5-24V|
|Total Output Current|10A Max|
|IC Quantity|800 Max|
|Material|Fireproof PC|
|G.W.|24.1g|
|Size|42x38x17mm|

## Installation du bandeau LED

{% picture posts/{{ page.guid }}/Gledopto-gl-c-310wl-esp32-wled-encastrable-wifi.png --alt Installation d'un Bandeau led Diy avec esp32 et wled intégré dans le Gledopto GL-C-310WL --img width="940" height="529" %}

Pour faciliter l’installation et avoir quelque chose de propre à dissimuler derrière le meuble de ma cuisine, j’ai opté pour un module « plug & play » mais il est possible de monter soi-même son module à l’aide d’un ESP32 [la méthode trouvable sur le site de WLED :](https://kno.wled.ge/basics/compatible-controllers/){: target="_blank"}.

J’ai choisi le module de GLEDOPTO car il peut s’installer dans une boite d’encastrement, il prend en charge 2 bandeaux LED ainsi que 2 boutons poussoirs ou interrupteurs, il accepte une tension d’alimentation de 5 à 24V et est livré avec WLED préinstallé. 

{%- include alert.html type="info" text="<b>Attention:</b> Le module ne transforme pas la tension d’entrée, il faut impérativement que la tension d’entrée corresponde avec la tension d’alimentation du bandeau LED." %}

## Schéma de cablage du {{ page.ref }}

{% picture posts/{{ page.guid }}/schema-cablage-gledopto-gl-c-310wl-esp32-wled-encastrable-wifi.png --alt Schéma de cablage du Gledopto GL-C-310WL --img width="940" height="529" %}

En fonction de la longueur de votre bandeau LED et de la tension d’alimentation, il vous faudra impérativement calculer la puissance de votre alimentation en aval, pour ce faire vous pouvez passer par le calculateur sur le site WLED (https://wled-calculator.github.io) il est important de dimensionner correctement votre installation afin d’éviter un risque de surchauffe voir d’incendie, même avec du 12V, il faut également protéger l’alimentation 12V par un disjoncteur.
Après avoir choisi votre alimentation et votre bandeau, il ne vous reste plus qu’à glisser le bandeau dans un profilé alu (Ici de marque Paulmann trouvé en GSB), d’y raccorder le module WLED, de fixer votre profilé et de raccorder le tout à l’alimentation 12V.

{% picture posts/{{ page.guid }}/photo-cablage-gledopto-gl-c-310wl-esp32-wled-encastrable-wifi.png --alt Photo de cablage du Gledopto GL-C-310WL --img width="940" height="529" %}

## Connexion en Wifi 

Une fois votre module sous tension, connecté vous en Wifi sur le module, dans vos paramètre Wifi vous devriez voir apparaitre un nouveau réseau **WLED-AP**, le mot de passe est **wled1234**, une page s’ouvrira automatiquement pour te demander de rentrer les identifiants de votre réseau Wifi.

## Paramétrage WLed

Une fois votre module connecté à votre Wifi, rendez-vous sur la page de configuration en tapant l’adresse IP dans votre navigateur, il faudra vous rendre dans **Config > LED Preferences** pour y déclarer les caractéristiques de votre bandeau. 

- En première partie vous avez la possibilité de limiter au niveau logiciel la puissance max du bandeau
- 1. : Le type de bandeau
- Ma/LED : la consommation d’une LED
- Color Order : l’odre des couleurs
- Lenght : la longueur du bandeau (NB de LEDs physique)

{% picture posts/{{ page.guid }}/interface-gestion-wled-origine-Gledopto-gl-c-310wl.png --alt Interface parametrage wled du Gledopto GL-C-310WL par défaut --img width="600" height="740" %}

## Intégration sous HA
Home Assistant va découvrir automatiquement votre module WLED et vous proposer de l’ajouter. Libre à vous ensuite de créer des automatisations ou d’ajouter une carte à votre Dashboard.

{% picture posts/{{ page.guid }}/interface-gestion-administration-du-Gledopto-gl-c-310wl-dans-home-assistant-automatiquement-decouvert-grace-a-wled.png --alt Interface gestion et de découverte automatique du Gledopto GL-C-310WL grâce à Wled intégré par défaut --img width="600" height="768" %}

Pour plus d’infos sur WLed: [https://kno.wled.ge](https://kno.wled.ge){: target="_blank"}

## Le prix

Ça va du simple au double, sur Aliexpress le {{ page.ref }} est vendu un peu plus de 20€, sur Amazon compte le double rien que ça, plus de 40€ ça commence à faire cher.

{% include product-embed.html image="gledopto-gl-c-310wl-309-esp32-wled-encastrable-gestion-led.png" title="Gledopto GL-C-310WL" brand="Gledopto" description="GLEDOPTO ESP32 Mini WLED LED Contrôleur With Mic DIY Music Dynamic Modes Digital WS2811 WS2812 SK6812 TM1814 WS2813 WS2815 Strip" affiliate="_ookEADy" amazlink="3CLncyE" %}

## Conclusion

Voilà un produit intéressant Gledopta {{ page.ref }} intègre par défaut le célèbre logiciel de gestion LED qui n'est autre que WLED. En quelques minutes tu pourras contrôler les bandeaux LED de n'importe quelle façon et l'intégrer en un clic dans Home Assistant, Magnifique.


