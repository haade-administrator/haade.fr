---
guid: 144
title: "Sonoff - Domotise ton chauffage conventionnel"
description: "Transforme ton NSPanel Pro en contacteur de chaudière en intégrant direct le micro module Sonoff RE5VC et pilote le tout grâce à l'application Ewelink"
ref: "RE5V1C"
layout: post
authors: [Nico]
date: 2024-10-24 13:04
last_modified_at: 
categories: [Domotique, Haade-lab]
tags: []
video: 
image: 'controle-ton-chauffage-avec-sonoff-nspanel-pro-et-contact-sec-RE5VC-dans-Ewelink.png'
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
rating:  
sourcelink:
  - https://itead.cc/product/sonoff-re5v1c/ref/122/
  - https://ewelink.cc/
  - https://web.ewelink.cc/
  - https://cast.ewelink.cc/
  - https://server-status.ewelink.cc/
  - https://forum.ewelink.cc/
---

Afin de préparer au mieux le [prochain Live](https://www.youtube.com/live/GP4hubPhlvI){: target="_blank"}, et toujours **dans le but d'approfondir nos connaissances sur les modules de la gamme Sonoff**, nous allons essayer dans cet article de domotiser un système de chauffage conventionnel mais en restant dans l'univers Sonoff et [Ewelink](../blog/domotise-ton-chauffage-grace-au-sonoff-nspanel-pro-live-youtube#appli-ewelink){: target="_blank"}.

{% include videoPlayer.html youtubeId="GP4hubPhlvI" %}

Si nous avons décidé **de nous diriger dans cet univers** c'est avant tout pour les **novices en domotique**, qui ne veulent pas se lancer dans une installation *trop complexes* et domotiser leur chauffage assez simplement afin de réaliser quelques économies.

> Nous allons transformer le NSPanel Pro et y ajouter la fonction de pilotage de la Chaudière par contact sec, le tout compatible Sonoff.

**Attention !** en suivant cet article **tu ne réaliseras certainement pas autant d'économies d'énergies qu'une installation** basée sur Home Assistant car l'application **Ewelink ne propose pas des systèmes de scénarios aussi poussés.**

{% include product-embed.html image="Sonoff-contact-sec-wifi-ewelink-RE5V1C.png" title="Sonoff Contact Sec Wifi RE5V1C" brand="Sonoff" description="Micro contact sec wifi Sonoff RE5V1C compatible Ewelink" iteadlink="sonoff-re5v1c" amazlink="3NDSQ2O" %}

**Mais tu pourras domotiser intelligemment ton chauffage** grâce au thermostat connecté, et au [contact sec wifi {{ page.ref }}](https://itead.cc/product/sonoff-re5v1c/ref/122){: target="_blank"} de la même marque, le tout controlé visuellement grâce au Nspanel Pro.

Alors oui tu vas me dire: je mélange deux protocoles ( Zigbee et Wifi ), mais dans mon cas la problématique est de rester je le rappelle dans l'univers Sonoff, afin de simplifier les choses. 

Le seul système qui propose ce type d'installations et qui vaut certainement le coup ( ben oui je ne l'ai pas encore testé) est **Tado**, je ne te parle pas de **Netatmo car beaucoup de personnes sont mécontentes.**

## Prérequis

1. un Smartphone avec l'application [Ewelink](../blog/domotise-ton-chauffage-grace-au-sonoff-nspanel-pro-live-youtube#appli-ewelink){: target="_blank"} d'installé.
2. Un module contact sec wifi Sonoff [{{ page.ref }}](https://itead.cc/product/sonoff-re5v1c/ref/122){: target="_blank"}
3. Un Sonoff NSPanel Pro ( afin de tout contrôler )
4. Des thermostats Zigbee Sonoff
5. En option des robinets thermostatques Sonoff
6. un poste à souder et de la patience.
7. Scotch double face

## Préparation du système

Dans cette  étape je vais te montrer **comment intégrer un contact sec {{ page.ref }} directement dans un controleur Sonoff NSPanel Pro** ainsi tu pourras directement contrôler ton chauffage:

- éléctrique ( au sol ou radiateur si contrôlé par thermostat central), sinon il faudra mettre un {{ page.ref }} directement derrière tes radiateurs
- Ta chaudière gaz ou fioul, en installant des robinets thermostatiques sur chaque radiateurs

> Et oui tu as bien lu on va rendre compatible un **Sonoff NSPanel Pro compatible contact sec**, sans toucher au firmware, le top.

{% include product-embed.html image="https://i0.wp.com/itead.cc/wp-content/uploads/2022/07/NSPanel-P_preorder_dim_gray.jpg?fit=1000%2C1000&ssl=1" title="Controleur Sonoff Nspanel Pro" brand="Sonoff" description="Controleur Sonoff Nspanel Pro avec zigbee 3.0 et wifi intégré" affiliate="_DCgKVON" domlink="objets-connectes/6625-sonoff-interrupteur-mural-noir-zigbee-30-nspanel-pro.html" iteadlink="sonoff-nspanel-pro-smart-home-control-panel" %}

### Présentation du Sonoff {{ page.ref }}

Le Sonoff {{ page.ref }} est un micromodule de **taille exceptionnellement petit** et qui a l'avantage d'être **compatible Ewelink** donc compatible avec l'environnement Sonoff, ça tombe bien c'est un module Sonoff. Pour fonctionner il doit être **alimenté en 5V** et il permet de faire fonctionner une ampoule, moteur ou porte de garage. Ses dimensions sont ultra petites **moins de 3,5cm de long pour 2,5cm de large et une profondeur de 1,9mm. Ce qui nous permettras de l'intégrér directement à l'arrière du Sonoff NSPanel Pro**.

{% picture posts/{{ page.guid }}/presentation-sonoff-RE5V1C-contact-sec-wifi-compatible-ewelink.png --alt Présentation du module Sonoff RE5V1C contact sec wifi compatible Ewelink --img width="940" height="529" %}

J'ai repris les **schémas de branchements disponibles** sur le site Itead, ainsi tu pourras te rendre compte de l'adaptabilité dans un écosystème domotique.

{% picture posts/{{ page.guid }}/divers-branchements-sonoff-RE5V1C-contact-sec-wifi-compatible-ewelink.png --alt Divers Branchements du module Sonoff RE5V1C contact sec wifi compatible Ewelink --img width="940" height="529" %}

Première étape nous regardons **comment l'intégrer dans le boitier d'alimentation du NSPanel pro**, commence par démonter le module, et tu pourras te rendre compte que le module {{ page.ref }} trouve sa place sur le circuit.

{% picture posts/{{ page.guid }}/premiere-etape-integration-sonoff-RE5V1C-dans-NSPanel-Pro.png --alt première étape d'intégration du module Sonoff RE5V1C contact sec wifi compatible Ewelink avec le NSPanel Pro --img width="940" height="529" %}

Pour rappel nous **devons alimenter le Sonoff {{ page.ref }} en 5V** et ça tombe bien le NSPanel Pro86/120 propose cette alimentation sur le circuit représenté par les deux flèches du haut. Afin de faire passer les fils d'alimentation du {{ page.ref }} j'ai percé deux trous dals le circuit imprimé du NSPanel pro à l'endroit même ou sont prévus des emplacements libres pour cosses supplémentaires du NSPanel pro.

{% picture posts/{{ page.guid }}/modification-circuit-energy-nspnelpro-branchement-RE5V1C.png --alt Modification du circuit électrique du NSPanel pro afin de vouvoir intégrer le contact sec RE5V1C --img width="940" height="529" %}

Étape suivante **un peu plus délicates, passer aux sudures** de fils sur le {{ page.ref }} côté alimentation 5V j'ai soudé des fils compatibles en 0.5mm, de l'autre côté j'ai soudé des fils 0.75mm pour la phase et out, ainsi si on le désire on pourra brancher une lumière 230v ou autres moteurs. Pour rappel dans notre cas les deux fils de sorties sont là pour alimenter une chaudière au gaz en contact sec.
Il faudra aussi prévoir du scotch double face pour coller le module {{ page.ref }} sur le NSPanel Pro, et percer deux trous sur la coque arrière de l'alimentation afin d'accéder au bouton reset et à la led de fonctionnement du {{ page.ref }}.

{% picture posts/{{ page.guid }}/soudure-et-installation-du-sonoff-RE5V1C-dans-NSPanel-Pro.png --alt Soudure et installation du module Sonoff RE5V1C contact sec wifi compatible Ewelink avec le NSPanel Pro --img width="940" height="529" %}

La partie selon moi **qui est la plus délicate** est la soudure 5v/gnd du {{ page.ref }} sur le circuit imprimé du NSPanel Pro. C'est relativement petit et situé à proximité d'autres composants ( un fer à souder soufflant simplifiera la soudure. ), mais ce n'est pas insurmontable.

{% picture posts/{{ page.guid }}/soudure-face-avant-connection-5v-gnd-re5v1c-sur-sonoff-nspanel-pro.png --alt Soudure GND et 5V du module Sonoff RE5V1C contact sec wifi compatible Ewelink avec le NSPanel Pro sur la face avant --img width="940" height="529" %}

Étape final, nous remontons l'ensemble qui ne m'a posé aucuns problèmes la place de l'ensemble y est tout juste suffisant. Je fini par alimenter le NSPanel Pro, je lance l'application Ewelink et j'active l'appairage du systèment en cliquant 2-3 secondes sur le reset du {{ page.ref }}, la led verte se met à clignoter le processus d'initialisation du wifi est enclanché.
Le voyant rouge indique l'activation ON du {{ page.ref }}.

{% picture posts/{{ page.guid }}/fonctionnement-wifi-on-off-fixe-vert-rouge-RE5V1C-dans-Sonoff-NSPanel-pro.png --alt Fonctionnement on/off du module Sonoff RE5V1C contact sec wifi compatible Ewelink dans le NSPanel Pro sur la face avant --img width="940" height="529" %}

Ci-dessous **quelques captures du processus** de l'étape d'intégration du module Sonoff {{ page.ref }}, dans l'environnement Ewelink.

{% picture posts/{{ page.guid }}/integration-Sonoff-RE5V1C-dans-ewelink.png --alt Intégration du module Sonoff RE5V1C contact sec wifi avec Ewelink dans le NSPanel Pro --img width="940" height="529" %}

Ça y est le module **NSPanel Pro 86/120 est prêt à être mis en place en remplacement de ton ancien thermostat centralisé de chaudière** ( là ou se trouve les fils du contact sec ). Pour 5€ je viens d'ajouter la fonction contact-sec à l'univers Sonoff en faisant une intégration parfaite. Le controleur NSPanel Pro te servira de centrale de fonctionnement du chauffage comme peut le faire une box Home Assistant.


## Caractéristique Technique Sonoff {{ page.ref }}

- Alimentation basse consommation – Entrée basse tension 5 V CC
- 2 modes de fonctionnement: ​​mode autobloquant et mode progressif
- Contrôle LAN – **Allumez/éteignez l'appareil même lorsque le Wi-Fi n'a pas d'accès Internet**
- Prise en charge de l'application – Application mobile gratuite iOS et Android eWeLink
- **Marche/arrêt à distance** – Allumez/éteignez les appareils électriques de n'importe où
- État de synchronisation – État de l'appareil en temps réel fourni à l'application
- Chronométrage – Définissez des minuteries programmées/compte à rebours pour allumer/éteindre à une heure spécifiée
- Contrôle partagé – Contrôlez votre maison intelligente avec votre famille
- Scène – Allumez/éteignez un groupe d'appareils d'un seul geste
- Scène intelligente – Déclenchement/arrêt par la température, le bourdonnement ou d'autres conditions environnementales à partir du capteur
- Compatibilité – **Fonctionne parfaitement avec Amazon Alexa, Google Assistant, IFTTT, Google Nest**

|Marque|SONOFF|
|Type de produit|Module relais 5V Wi-Fi Inching/Selflock|
|Alimentation|5V DC|
|Type de contact de sortie|Contact sec|
|Courant max|10A|
|Humidité|5%-90%RH, sans condensation|
|Température de fonctionnement|0ºC-40ºC(32°F-104°F)|
|Taille nano|34,5x25x19mm|
|Fonctionne avec|Amazon Alexa, Google Assistant, Samsung Smarthings|

**Notice technique du Sonoff {{ page.ref }}**

{% include doclink.html pdf="RE5V1C-Application-Guide.pdf" title="Notice technique du sonoff RE5V1C" %}

{% include product-embed.html image="sonoff-nspanel-pro-120-PW-en-vente.png" title="NSPanel Pro 120 PW" brand="Sonoff" description="Découvre le tout nouveau Sonoff NSPanel Pro 120 compatible wifi et zigbee un produit à avoir !" iteadlink="sonoff-nspanel-pro-smart-home-control-panel-120-type" %}


## Ewelink un environnement Complet

L'application Ewelink dispose d'une [page dédiée complète de l'environnement](https://ewelink.cc/){: target="_blank"}, n'hésite pas à la visiter afin de te rendre compte du potentiel de cette application.
L'environnement Ewelink propose une multitude de services mais attention pour y avoir accès il faudra t'affranchir d'un abonnement "Advanced Plan" annuel de 9.99€.

> une des forces majeures d'Ewelink est l'opton Lan qui te permettras de contrôler toute ton installation en locale en cas de coupures internet. 👏

**Inconvénient de l'application:** Le système de scénario reste basic il faudra retroucer les manches pour faire fonctionner l'ensemble avec cohérence.

### Ewelink web app

[Ewelink Wep app](https://web.ewelink.cc/){: target="_blank"} est ultra pratique, tu peux visionner ton installation mais tu ne pourras la contrôler sans l'Advanced plan.

{% picture posts/{{ page.guid }}/ewelink-web-app-interface.png --alt Soudure GND et 5V du module Sonoff RE5V1C contact sec wifi compatible Ewelink avec le NSPanel Pro sur la face avant --img width="940" height="469" %}

### Ewelink cast

[Ewelink Cast](https://cast.ewelink.cc/){: target="_blank"} est un tableau d'affichage ou tu pourras

### Ewelink Android auto / Apple Car play

Ewelink sait s'adapter et propose des services toujours plus variés toujours à condition de souscrire à *l'advanced plan*.

[Lien Ewelink Android auto](https://ewelink.cc/accessible/ewelink-on-android-auto/){: target="_blank"}
[Lien Ewelink Apple Car play](https://ewelink.cc/ewelink-carplay/){: target="_blank"}

### Forum Ewelink

Même un [forum est disponible](https://forum.ewelink.cc/){: target="_blank"} à cette adresse n'hésite pas à consulter.

## Conclusion

Voilà une façon simple de transformer le Sonoff NSPanel Pro 86/120 en piloteur de chaudière sans changer de firmware et cette fonction supplémentaire ne coûtera pas plus de 10€.
Avec les scénarios tu pourras adapter ce système afin de piloter correctement ton chauffage un réel plus.



