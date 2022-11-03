---
guid: 8
title: 'Domotiser sa porte de garage pour 5€'
date: '2021-05-19T22:26:35+00:00'
last_modified_at:
author: Nico
categories: Domotique Haade-lab Home-Assistant
layout: post
image: domotiser-porte-garage-5-euros.png
tags: esp8266
description: "une façon simple de domotiser sa porte de garage à moindre coût grâce à un module esp8266"
locale: fr_FR
published: true
sitemap:
  changefreq: #always hourly daily weekly monthly yearly never
  exclude: #'yes' or 'no'
  priority: #between 0.0 to 1.0, 1.0 high priority
  lastmod: # date to end modification
beforetoc:
toc: true
comments: true
redirect_from:
  - /fr/blog/home-automation-smarthome-jeedom-homeassistant/tutos-haade-lab/domotiser-sa-porte-de-garage-pour-5e/
---

Dans cet article je vais vous montrer tout simplement comment domotiser sa porte de garage pour 5€ avec homeassistant et un module esp8266 7-30V. Le moteur domotisé est un hormann supramatic e3, **mais nous aurions pu utiliser n’importe quelles marques de motorisations** comme Somfy car **elles sont toutes équipées de moteurs électriques fonctionnant entre 18 et 24v**. De plus elles sont quasiment toutes équipées d’entrées pour bouton poussoir externe. Le plus difficile dans ce tutoriel est de trouver une alimentation en continu pour alimenter notre module relais esp 8266 7-30V, qui fonctionne bien évidemment dans cette plage électrique.

## Prérequis pour domotiser sa porte de garage:

- Homeassistant installé avec esphome
- Un [module usb FT232]({% link _products/{{ page.locale | slice: 0,2 }}/2021-05-19-module-de-conversion-usb-uart-ft232.md %})
- un [module 7/30V Yunshan Lysignal esp8266 esp-12f]({%- link _products/{{ page.locale | slice: 0,2 }}/2021-05-17-relais-7-30v-yunshan-lysignal.md %})
- Esphome installé sur le système [( voir l’article dédié )]({%- post_url /fr/2021-05-11-esphome-et-homeassistant %})
- Savoir créer un nouveau Noeud et le paramétrer
- device type: Espressif ESP-12E module

## Nomenclature Yunshan-Lysignal esp8266

{% picture posts/{{ page.guid }}/yunshan.png --alt Relais Yunshan-Lysignal esp8266 porte de garage --img width="820" height="351" %}<br>

### ESP8266 relais 7-30v Yunshan lysignal ESP-12F

A: Alimentation 7-30V + CC
A1: Connectique ft232 (Tx, RX et GND)  
B: Cavalier boot ( en position programme sur la photo )  

C: Sortie contacteur
- Entrée relais normalement fermé (NC)
- Relais communication (COM) fil noir
- Contact de relais normalement ouvert (NO)

D: Optocoupleur ( interrupteur bouton poussoir )
- +5v (ligne + du bouton poussoir)
- GPIO5 (ligne – du bouton poussoir)
- GND (ground non raccordé à raccorder avec le ground A1 par exemple, **indispensable pour le fonctionnement du bouton poussoir** )

2: led D4 bleu de l’optocoupleur ( allumé quand interrupteur enclanché )  
3: led rouge D2 du contacteur relais ( allumé quand relais enclanché )  
4 : led bleu wifi ( clignote lors d’une recherche du reseau et ensuite fixe ).

## Branchement ft232 et esp8266 ESP-12F Yunshan-Lysignal

[ft232]({% link _products/{{ page.locale | slice: 0,2 }}/2021-05-19-module-de-conversion-usb-uart-ft232.md %})
et
[esp8266 ESP-12F Yunshan-Lysignal]({% link _products/{{ page.locale | slice: 0,2 }}/2021-05-17-relais-7-30v-yunshan-lysignal.md %})

- d’un côté une prise dc universelle paramétré sur 9v il faut 7v au minimum pour la programmation.
- de l’autre rx sur tx
- ensuite tx sur rx
- et pour finir ground sur ground (GND)
- Brancher le tout au raspberry pi.

{% picture posts/{{ page.guid }}/branchement-ft232-yunshan-lysignal-esp8266.jpg --alt Branchement ft 232 yunshan Lysignal --img width="820" height="461" %}

1. [ESP8266 relay 7-30v Yunshan lysignal ESP-12F]({%- link _products/{{ page.locale | slice: 0,2 }}/2021-05-17-relais-7-30v-yunshan-lysignal.md %})
2. [Module de conversion usb uart ft232]({% link _products/{{ page.locale | slice: 0,2 }}/2021-05-19-module-de-conversion-usb-uart-ft232.md %})

## Fichier paramétré pour ESPhome

{% gist ba9b6667ece8269cd37f64e34e908977 %}

### Étape à suivre minutieusement

**Le module peut être capricieux à programmer donc suivez bien ces étapes**

1. connecter ftd232 usb uart ( cavalier sur 3.3v ) au raspberry pi ( homeassistant ) et au module yunshan/lysignal (tx &gt; rx, rx &gt; tx et gnd)
2. ensuite brancher une alim minimum 7v et max 30v en dc,
3. vérifiez bien la présence du cavalier sur les connecteurs
4. pour pouvoir uploader le code il faut que la lumière soit bleu léger sur la led d4 après avoir branché l’alim (si c’est rouge sur la led d2 on ne pourra uploader même en usb. Dans ce cas déconnectez le cavalier boot et remettez-le puis débranchez l’alim quelques secondes. )
5. uploader le code
6. une fois terminé **enlever le cavalier du boot** tout en laissant le reste alimenté ( prise et ft232 )
7. débrancher ft232
8. débrancher l’alimentation attendez 20 sec et rebrancher l’alimentation une fois démarré la led bleu du module esp8266-12e clignote plusieurs fois le temps de se connecter au réseau wifi, une fois fixe votre module est ok
9. On peut enlever les broches rx/tx/gnd et le ftd.

## Rendu final dans Homeassistant

![Rendu final de esp8266 dans homeassistant]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/yunshan-homeassistant.webp{{ cachebuster }}){: width="499" height="369"}

image gif animé sur le fonctionnement du module yunshan 7-30v intégré avec esphome et homeassistant. Voilà un retour complet pour bien domotiser sa porte de garage pour 5€ grâce à l’aide [d’homeassistant et esphome]({% post_url /fr/2021-05-11-esphome-et-homeassistant %}) du module esp8266 7-30V Yunshan-Lysignal mais attention l’étape d’intégration n’est pas encore fini !

## Création de l’automatisation contact sec

Pour commencer les boutons poussoirs no/nc fonctionnent en contact sec. Afin de permettre le retour d’état à Off il faut créer une automatisation qui nous indique au changement d’état du relais switch garage sur on après 0,4 secondes le relais retourne à off **à personnaliser en fonction du nom donné à votre relais switch**.

{% gist ecbf82461009fd134a1cc7228946edc1 %}

## Carte de contrôle Hormann supramatic e3

{% picture posts/{{ page.guid }}/hormann-carte-controleur.jpg --alt nomenclature carte controleur moteur hormann supramatic e3 --img width="820" height="252" %}

Dans notre cas nous voulons domotiser un moteur hormann la nomenclature est assez simple:

1. la fiche de type molex trois broches qui délivre **24v** en continu donc c’est ce qu’il nous faut. À l’origine cette fiche – **+** – est prévu pour connecter une batterie de secours en cas de coupure de courant.
2. Entrée pour bouton poussoir externe, nous allons bien sure brancher le relais dessus NO ou NC sur la fiche + et le COM sur la fiche -. Voir les images de la mise en place du module ci-dessous.

## Mise en place du module et test

Maintenant que notre module est prêt et fonctionnel avec homeassistant il ne nous reste plus qu’à le mettre en place dans notre moteur. **Attention! Avant toute intervention n’oubliez pas de couper le courant 230V**. heureusement le branchement est simple et il y a de la place pour intégrer des modules supplémentaires. Comme il s’agit de test en 24V, pour l’occasion nous n’avons pas utilisé de connecteurs molex adéquats et de fil électrique 0,75mm.

{% include hormann.html %}

Il ne reste plus qu’à rassembler le tout et l’incorporer dans le boitier du moteur de porte de garage et vous pouvez pour 5€ livré commander votre porte de garage en wifi via esphome et homeassistant, tout simplement magic !.

Nous rencontrons actuellement un soucis de distance de l’antenne wifi, faisant partie d’une box orange sans antenne externe le décrochage est régulier, **pour pallier à ce soucis nous allons intégrer une antenne externe à la puce esp8266, un article va être dédié à cette manipulation avec des tests de gains très prochainement, n ‘hésitez pas à nous suivre.**
