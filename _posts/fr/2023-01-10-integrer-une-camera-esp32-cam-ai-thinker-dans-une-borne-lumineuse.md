---
guid: 37
title: "Intégrer une caméra esp32-cam dans une applique lumineuse"
description: "Tuto pour intégrer une caméra ai-thinker esp32-cam dans une applique lumineuse de garage en mode spycam pour moins de 10€"
layout: post
author: Nico
date: 2023-01-04 15:38
last_modified_at: 
categories: [Haade-lab, Sécurité, Esp]
tags: []
image: 'esp32-cam-resistor-external-antenna.png'
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
  - https://frigate.video/
---

Tuto Haade-lab simple, pro et efficace pour un **coût de moins de 10€**, je vais intégrer une caméra Ai Thinker Esp32-cam dans une applique lumineuse Philips fixée sur le parking, non intrusive car très peut visible, *opération caméra espion.* Elle sera controlée par **le NVR Frigate** et intégrée dans homeassistant grâce au service esphome.

# Prérequis
1. Savoir intégré une caméra Esp32-cam dans Homeassistant
2. avoir une caméra Esp32-cam de Ai Thinker
3. du [fil dupont](https://s.click.aliexpress.com/e/_DEa3QnV){: target="_blank"}
4. un transfo 5v 1-2A de téléphone portable (plus il est petit mieux c'est)
5. du fil électrique multi-brin en 1mm d'épaisseur
6. Une ou deux [appliques Philips Arbour](https://amzn.to/3W8BWv6){: target="_blank"}
7. [un fer à souder ou station de soudage et de l'étaing](https://s.click.aliexpress.com/e/_DBNhnb1){: target="_blank"}
8. ( optionnel ) un NVR de préférence [Frigate](https://frigate.video/){: target="_blank"}


{% picture posts/{{ page.guid }}/materiel-necessaire-spycam-applique-lumineuse-garage.png --alt spycam dans applique lumineuse avecesp32-cam pour 6€ --img width="940" height="529" %}


# Flasher et Intégrer la caméra dans HomeAssistant

**J'ai rédigé un tuto complet** sur la manip à réaliser, [**tu as juste à lire cet article**]({% post_url /fr/2023-01-04-esp32cam-ai-thinker-homeassistant-esphome-configuration-complete %}){: target="_blank"}.

# Préparer le Transformateur

{% picture posts/{{ page.guid }}/modification-chargeur-usb-5v.png --alt modification chargeur Usb en adaptation alim --img width="940" height="529" %}

Pour ma part j'avais un tout petit transformateur chinois de **5v et 1a**, c'est ce qu'il me fallait car l'intégration dans l'applique est réduite. Après ouverture il suffit de déssouder le connecteur Usb, j'ai soudé à la place deux fils dupont mâle femelle ainsi je peux les connecter directement au 5v et Ground de la caméra, de l'autre côté j'ai déssoudé les cosses de la tête d'alimentation 230v et j'ai branché deux fils électriques récupéré sur une ancienne lampe.

{% picture posts/{{ page.guid }}/modification-chargeur-5v-pour-integration-spycam-esp32cam.png --alt adaptation chargeur usb 5v en alimentation esp32-cam --img width="940" height="529" %}

Si tu ne te sens pas prêt ou que tu n'as pas de transfo sous la main tu peux aussi acheter un mini module de puissance, perso je te conseil de prendre une unité de 1A mini, sur la page Aliexpress tu auras le choix et pourras monter jusqu'à 2A, pas mal

{% include product-embed.html image="Convertisseur-de-precision-AC-DC-V-5V-12V-AC-3-3v-5v-cc-module.jpg" title="Mini module de puissance 5V, 2A" brand="RQG" description="Mini module d'alimentation 230V AC vers 5V dc en à,7, 1 et 2 A" affiliate="_DdKafHl" %}

{% include product-embed.html image="Convertisseur-de-precision-AC-DC-V-5V-12V-AC-3-3v-5v-cc-module.jpg" title="Mini module de puissance 5V, 2A" brand="Ai thinker" description="Mini module d'alimentation 230V AC vers 5V dc en à,7, 1 et 2 A" amazlink="_DdKafHl" %}

# Préparer la réception du signal wifi

Là c'est un peut plus délicat mais réalisable et assez facilement avec une station de soudage et en utilisant le souffleur à air chaud paramétré sur 330°c. Ensuite il faut déplacer la résistance 0805 comme sur les images ci-dessous. L'image de gauche correspond à la position d'origine qui utilise par défaut l'antenne interne. En modifiant la position ( image de droite ) on peut ainsi utiliser le connecteur de l'antenne externe.

{% picture posts/{{ page.guid }}/esp32-cam-resistor-onboard-antenna.png --alt image vectorisée de la position de la résistance pour l'utilisation de l'antenne interne du wifi sur un esp32-cam --img width="300" height="300" %}

{% picture posts/{{ page.guid }}/esp32-cam-resistor-external-antenna.png --alt image vectorisée de la position de la résistance pour l'utilisation de l'antenne externe du wifi sur un esp32-cam --img width="300" height="300" %}

# Intégration dans l'applique lumineuse.

{%- include alert.html type="warning" text="Vous allez devoir travailler au voisinage d'une tension de 220V qui est dangereuse si vous entrez en contact avec un conducteur électrique. Prenez garde à vos manipulations, en cas de doute coupez l'alimentation électrique." %}

Passons désormais à l'étape d'intégration. Je vais essayer de faire au plus simple mais aussi au plus propre et ceux sans percer de trous à part pour la caméra. Ainsi j'éviterai naturellement les entrées d'eau qui pourraient se faire à l'intérieur de l'applique et faire disjoncter le compteur.
Pour fixer (transformateur, l'antenne et l'optique de la caméra), j'ai utilisé un pistolet à colle chaude, en cas d'erreur il est toujours possible de l'enlever. Attention à coller en priorité l'optique de la caméra et éviter de trop coller le module ESP32-cam, d'une à l'utilisation tu risques de faire surchauffer les composants, de l'autre en cas de manipulation tu risques de décoller des composants. Cependant si tu désires tout de même coller le module caméra fait le sur les bords bas à gauche et à droite.

Pour l'instant j'ai mis l'antenne à l'intérieur de l'applique à voir si à l'utilisation cette intégration est viable. Sinon je verrai pour la déporter.

# Intégration dans frigate

Pour ceux qui ne connaissent pas Frigate, c'est un NVR dédié pour Homeassistant, radicalement efficace performant et compatible Google Coral, si tu connais pas essaie-le. Ci-dessous la config à intégrer dans le fichier config.yaml de frigate.

{% gist 8275007ef9a895e69474c45a968d98aa %}

# Branchement et test

mise en place de la caméra et gestion 

# Conclusion

Voilà une intégration pertinente, sachant que les appliques lumineuses sont constemment alimentés en 230v, il est possible d'y intégrer une caméra. De plus comme ils sont équipés d'un detecteur de lumière on profite naturellement de cette lumière pour apporter de la luminosité pour filmer.

