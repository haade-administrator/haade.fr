---
guid: 155
title: "Installer un bandeau Led connecté Diy avec WLED"
description: "Je vais te montrer comment installer facilement un bandeau led Gledopto GL-C-310WL dans home assistant grâce à WLED d'installé par défaut dans le module, un jeu d'enfant"
ref: "GL-C-310WL"
layout: post
authors: [Math]
date: 2025-02-24 09:00
last_modified_at: 
categories: [Haade-lab, Tests, Home-Assistant]
tags: []
video: 
image: 'install-bandeau-led-facilement-avec-wled-et-gledopto.png'
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
rating: 5 
sourcelink:
  - https://kno.wled.ge
  - https://www.gledopto.com/h-col-443.html
  - https://s.click.aliexpress.com/e/_ookEADy
  - https://amzn.to/3CLncyE
---

Afin d’éclairer la niche à café dans ma cuisine, **j’ai décidé de fabriquer moi-même mon bandeau LED** en utilisant [WLED](https://kno.wled.ge){: target="_blank"}. 
WLED se connecte sur ton Wifi et **est reconnu nativement par Home Assistant**, il permet d’utiliser un bandeau à LED adressable et offre beaucoup de possibilités de programmation, je vous explique dans cet article comment faire. 

{% include product-embed.html image="gledopto-gl-c-310wl-309-esp32-wled-encastrable-gestion-led.png" title="Gledopto GL-C-310WL" brand="Gledopto" description="GLEDOPTO ESP32 Mini WLED LED Contrôleur With Mic DIY Music Dynamic Modes Digital WS2811 WS2812 SK6812 TM1814 WS2813 WS2815 Strip" affiliate="_ookEADy" amazlink="3CLncyE" %}

## Prérequis

- Home assistant
- Un **module WLED** de la marque GLEDOPTO (ici GL-C-310WL)
- Un bandeau LED **(WS2811, WS2812, SK6812, TM1814, WS2813 ou WS2815**)
- Un profilé alu pour le bandeau LED
- Du fil électrique 1.5mm²
- Une alimentation 12V

{%- include alert.html type="warning" text="Attention! Vous allez devoir travailler au voisinage d'une tension de 220V qui est dangereuse si vous entrez en contact avec un conducteur électrique. Prenez garde à vos manipulations, en cas de doute coupez l'alimentation électrique." %}

## Découverte du Gledopto {{ page.ref }}

Le Gledopto {{ page.ref }} est discret, il peut s'encastrer dans une boite de dérivation, côté connectique on retrouve une entrée compatible 5-24v ainsi que des 6 sorties RVB et deux connectiques libres GPIO12 et GPIO33 qui te permettrons de faire du DIY, comme rajouter un bouton poussoir aux multiples paramétrages.
La force des Produits Gledopto réside dans le firmware qui intègre directement WLED, rendant ces modules plug'n play et compatible avec les assistants domotiques open source du marché [compatible WLED comme Home assistant](https://www.home-assistant.io/integrations/wled/){: target="blank"}.

**Le Gledpto {{ page.ref }}**

- Peut contrôler deux bandeaux lumineux
- contrôle **la segmentation des couleurs**
- interrupteur disponible directement sur le module
- **possède un micro intégré** de type 12S
- possibilité de paramétrer des scènes
- Accès à l'ensemble des fonctions WLED
- Entièrement compatible Home Assistant via [l'intégration WLED](https://www.home-assistant.io/integrations/wled/){: target="_blank"}

### Boutons physique du {{ page.ref }}

{% picture posts/{{ page.guid }}/fonctions-des-boutons-physiques-du-gledopto-gl-c-310wl.png --alt fonctions des boutons physique du Gledopto GL-C-310WL grâce à Wled intégré par défaut --img width="300" height="266" %}

**1# Bouton restart:**
En appuyant **sur ce bouton tu éteins ou allume complètement le module** rendant le controlleur WLED inutilisable.
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
|Courant de sortie/canal|6A max.|
|Types de puces|ESP32|
|Microphone|**Oui**|
|Poids net|20,1g|
|Température de fonctionnement|-20~45℃|
|Tension d'entrée|**DC 5-24V**|
|Courant de sortie total|**10A max.**|
|Quantité de Leds dans le circuits intégrés|800 max.|
|Matériau|PC ignifuge|
|Poids brut|24,1g|
|Taille|42x38x17mm|

## Installation du bandeau LED

{% picture posts/{{ page.guid }}/Gledopto-gl-c-310wl-esp32-wled-encastrable-wifi.png --alt Installation d'un Bandeau led Diy avec esp32 et wled intégré dans le Gledopto GL-C-310WL --img width="940" height="529" %}

**Pour faciliter l’installation** et avoir quelque chose de propre à dissimuler derrière le meuble de ma cuisine, j’ai opté pour un module « plug & play» mais il est possible de monter soi-même son module à l’aide d’un ESP32 [la méthode trouvable sur le site de WLED:](https://kno.wled.ge/basics/compatible-controllers/){: target="_blank"}.

{% include product-embed.html image="bandeau-led-ws2811-etc-compatible-gledopto.png" title="Bandeau Led WS2811 et +" brand="Led" description="Bandeaux Leds compatible Gledopto WS2811 WS2812 SK6812 TM1814 WS2813 WS2815 Strip" affiliate="_okO72HY" amazlink="4i6wggc" %}

> J’ai choisi le module de GLEDOPTO car il peut s’installer **dans une boite d’encastrement**, il prend en charge **2 bandeaux LED** ainsi que 2 boutons poussoirs ou interrupteurs, il accepte une tension d’alimentation **de 5 à 24V** et est livré avec **WLED préinstallé**. 

{%- include alert.html type="info" text="<b>Attention:</b> Le module ne transforme pas la tension d’entrée, il faut impérativement que la tension d’entrée corresponde avec la tension d’alimentation du bandeau LED." %}

## Schéma de cablage du {{ page.ref }}

{% picture posts/{{ page.guid }}/schema-cablage-gledopto-gl-c-310wl-esp32-wled-encastrable-wifi.png --alt Schéma de cablage du Gledopto GL-C-310WL --img width="940" height="529" %}

{% include product-embed.html image="meanwell-alimentation-rail-din-5-12-24v.png" title="Alimentation Meanwell" brand="Meanwell" description="MeanWell HDR-15-12 Bloc d'alimentation pour rail DIN, Noir" affiliate="_onTSYuQ" amazlink="3D7VgoB" %}

En fonction de la longueur de ton bandeau LED et de la tension d’alimentation, **il vous faudra impérativement calculer la puissance de ton alimentation en aval**, pour ce faire vous pouvez passer par le [calculateur sur le site WLED](https://wled-calculator.github.io){: target="_blank"} il est important de dimensionner correctement ton installation afin d’éviter un risque de surchauffe voir d’incendie, même avec du 12V, il faut également protéger l’alimentation 12V par un disjoncteur.
Après avoir **soigneusement choisi ton alimentation et ton bandeau**, il ne te reste plus qu’à glisser le bandeau dans un profilé alu [**Ici de marque Paulmann trouvé en GSB**](https://amzn.to/4bd7mJG){: target="_blank"}, d’y raccorder le module WLED, de fixer ton profilé et de raccorder le tout à **l’alimentation 12V**.

{% include product-embed.html image="profile-paulmann-special-bandeau-led-alu.png" title="Profilé Paulmann bandeau led" brand="Paulmann" description="INNOVATE 2m Profilé en aluminium - Canal LED Rail - pour rubans à led - Profilé en aluminium pour bandes LED" amazlink="4bd7mJG" %}

{% picture posts/{{ page.guid }}/photo-cablage-gledopto-gl-c-310wl-esp32-wled-encastrable-wifi.png --alt Photo de cablage du Gledopto GL-C-310WL --img width="940" height="529" %}

## Connexion en Wifi 

Une fois ton module sous tension, connecte toi en Wifi sur le module, dans tes paramètre Wifi tu devrais voir apparaitre un nouveau réseau **WLED-AP**, le mot de passe est **wled1234**, une page s’ouvrira automatiquement pour te **demander de rentrer les identifiants de ton réseau Wifi**.

## Paramétrage WLed

Une fois ton module connecté à ton Wifi, rendez-vous sur la page de configuration **en tapant l’adresse IP dans ton navigateur**, il faudra te rendre dans **Config > LED Preferences** pour y déclarer les caractéristiques de ton bandeau. 

- En première partie tu as la possibilité de limiter au niveau logiciel la puissance max du bandeau
- **1.:** Le type de bandeau
- **Ma/LED:** la consommation d’une LED
- **Color Order:** l’odre des couleurs
- **Lenght:** la longueur du bandeau (NB de LEDs physique)

{% picture posts/{{ page.guid }}/interface-gestion-wled-origine-Gledopto-gl-c-310wl.png --alt Interface parametrage wled du Gledopto GL-C-310WL par défaut --img width="600" height="740" %}

## Intégration sous HA

Home Assistant va découvrir **automatiquement ton module WLED et te propose de l’ajouter**. Libre à vous ensuite de créer des automatisations ou d’ajouter une carte à ton Dashboard.
Il y a juste à regarder la capture ci-dessous pour te rendre compte que **l'intégration est très complète** *un rêve de domotique !*

{% picture posts/{{ page.guid }}/interface-gestion-administration-du-Gledopto-gl-c-310wl-dans-home-assistant-automatiquement-decouvert-grace-a-wled.png --alt Interface gestion et de découverte automatique du Gledopto GL-C-310WL grâce à Wled intégré par défaut --img width="600" height="768" %}

Pour plus d’infos sur WLed: [https://kno.wled.ge](https://kno.wled.ge){: target="_blank"}

## Le prix

Concernant le prix du {{ page.ref }} celà varie du simple au double, ça va [d'une vingtaine d'euros sur Aliexpress](https://s.click.aliexpress.com/e/_ookEADy){: target="_blank"} à une [quarantaine d'euros dur Amazon](https://amzn.to/3CLncyE){: target="_blank"}. *À toi de faire le choix* !

{% include product-embed.html image="gledopto-gl-c-310wl-309-esp32-wled-encastrable-gestion-led.png" title="Gledopto GL-C-310WL" brand="Gledopto" description="GLEDOPTO ESP32 Mini WLED LED Contrôleur With Mic DIY Music Dynamic Modes Digital WS2811 WS2812 SK6812 TM1814 WS2813 WS2815 Strip" affiliate="_ookEADy" amazlink="3CLncyE" %}

## Conclusion

Voilà un produit intéressant Gledopta {{ page.ref }} intègre par défaut le célèbre logiciel de **gestion LED qui n'est autre que WLED**. **En quelques minutes tu pourras contrôler les bandeaux LED** de n'importe quelle façon et l'intégrer en un clic dans Home Assistant, **Magnifique**.


