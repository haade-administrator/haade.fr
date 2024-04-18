---
guid: 117
title: "Mise à jour Nspanel Pro 3.0 Rubik Design"
description: "Présentation de Rubik la nouvelle interface utilisateur du Nspanel Pro pour une nouvelle expérience prend des aires de Rubik's cube."
ref: "NSPanel Pro"
layout: post
authors: [Nico]
date: 2024-04-03 18:00
last_modified_at: 
categories: [News, Zigbee]
tags: []
video:
image: 'nspanel-pro-firmware-upgrade-v3-0-0-rubik-design.png'
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
  - https://sonoff.tech/nspanelpro-api/
  - https://sonoff.tech/product-review/product-insight/sonoff-nspanel-pro-version-update-information-and-faq/
  - https://itead.cc/product/sonoff-nspanel-pro-smart-home-control-panel/ref/122/
---

Sonoff fait évoluer l'interface utilisateur (UI) du {{ page.ref }}, la version 3.0.0 intègre **Rubik** un module d'interface qui **t'ouvres les champs du possible**. L'entreprise ne cesse de faire évoluer les firmwares des modules Zigbee, et ça prouve que **cette société est sérieuse**. 

> Rubik a certainement été empreinté au célèbre jeu le Rubik's cube, l'interface en quadrillage y fait pleinement référence.

{% picture posts/{{ page.guid }}/capture-ewelink-nspanel-pro-v-3-rubik-interface-choix-du-theme-affichage-multi-possibilites.png --alt Changement du thème principal Rubik sur le NSPanel Pro --img width="369" height="800" %}

> Je dois dire que pour l'avoir testé cette nouvelle interface est facile à mettre en place.

{% include product-embed.html image="https://i0.wp.com/itead.cc/wp-content/uploads/2022/07/NSPanel-P_preorder_dim_gray.jpg?fit=1000%2C1000&ssl=1" title="Controleur Sonoff Nspanel Pro" brand="Sonoff" description="Controleur Sonoff Nspanel Pro avec zigbee 3.0 et wifi intégré" affiliate="_DCgKVON" domlink="objets-connectes/6625-sonoff-interrupteur-mural-noir-zigbee-30-nspanel-pro.html" iteadlink="sonoff-nspanel-pro-smart-home-control-panel" %}


## Interface Rubik sur {{ page.ref }}

Ci-dessous j'ai pris des captures d'écran de l'ancienne interface avec le thème par défaut, avec **sur la 3ème** image une capture d'écran du démarrage du Sonoff {{ page.ref }}, **quand à la 4ème** image elle montre une page étendue avec un module d'installé mais désactivé dans le coin supérieur gauche.

{% picture posts/{{ page.guid }}/capture-ecran-nspanel-pro-rubik-v-3-0-0-ancienne-interface.png --alt Capture d'ecran de l'ancienne interface avec le thème principal Rubik installé sur le NSPanel Pro --img width="940" height="529" %}

*Là nous avons à faire à la nouvelle interface,*

1. la 1ère image montre le **thème par défaut**
2. la seconde image un **thème Rubik** avec des modules installés sur le pourtour
3. la 3ème montre le changement de la **page de réglage sur fond transparent**
4. La dernière est un thème différent avec en principal, l'onglet **reminder** qui te permettras d'afficher un message à partir du téléphone.

{% picture posts/{{ page.guid }}/capture-ecran-nspanel-pro-rubik-v-3-0-0.png --alt Capture d'écran avec une nouvelle interface du thème principal Rubik sur le NSPanel Pro --img width="940" height="529" %}

## Paramétrage Ewelink {{ page.ref }}

Sur la capture de [l'application Ewelink](https://play.google.com/store/apps/details?id=com.coolkit&hl=fr&gl=US){: target="_blank"} ci-dessous tu pourras te rendre compte de **3 nouveaux onglets:**

1. Paramètre du thème
2. Gestion des pages supplémentaires (extension, settings)
3. Paramétrage des **rappels écris** avec options (reminder)

{% picture posts/{{ page.guid }}/capture-ewelink-nspanel-pro-v-3-rubik-interface.png --alt Ewelink capture mise à jour NSPanel Pro v3.0.0 --img width="940" height="1018" %}

Déjà **présent sur la précédente version** du firmware tu pourras changer le **mode Zigbee**.

> alors à première vue ça pourrait être super sympa mais il n'en est rien.

Déjà si tu changes de mode tu dois passer par un **reset de l'ensemble des paramètres**
le **mode Hub** permet d'utiliser le {{ page.ref }} comme un coordinateur zigbee.
le **mode router** permet au NSPanel d'être contrôlé par un autre coordinateur comme Zigbee2Mqtt.

> mais à l'heure actuelle aucune infos ne remontent du {{ page.ref }} **dans Z2M donc aucune utilité**.

{% picture posts/{{ page.guid }}/capture-ewelink-nspanel-pro-v-3-rubik-mode-zigbee-router-hub.png --alt Ewelink capture mise à jour NSPanel Pro v3.0.0 mode zigbee hub ou routeur --img width="940" height="1018" %}

Sur l'image ci-dessous accès aux **paramètres d'écrans supplémentaires et Reminder**.

L'écran supplémentaire te permettras de créer d'autres pages avec divers modules à contrôler. Ces pages peuvent êtres paramétrées pour êtres accessibles à partir **d'un mot de passe** ce qui est super pratique.

L'écran reminder te permet de **rédiger un texte tu téléphone** tu pourras l'envoyer simplement et rajouter soit une:

- **haute priorité** qui affichera une popup sur tout l'écran du NSPanel Pro
- ou envoyer **sous forme de notification** à cliquer qui te renverras vers le popup.

{% picture posts/{{ page.guid }}/capture-ewelink-nspanel-pro-v-3-rubik-mode-extented-reminder.png --alt Ewelink capture mise à jour NSPanel Pro v3.0.0 parametrage extended ecran et reminder --img width="940" height="1018" %}

Enfin j'ai créé un gif animé de navigation sur l'application **Ewelink**, comme ça, ça t'éviteras toutes questions sur le fonctionnement du Sonoff {{ page.ref }} v3.0.0.

![Navigation sur Ewelink pour le paramétrage Rubik nspanel pro v3.0.0]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/nspanel-pro-v3-ewelink-rubik.webp{{ cachebuster }}){: width="388" height="690" class="lazyload"}

## Mise à jour depuis la version 2.2.0

### V3.0.0 (15 Mars 2024）

1. Nouvelle conception de l'interface utilisateur **RUBIK**. Prise en charge de la personnalisation des mises en page et des widgets de l'écran d'accueil
2. Les **appareils et les scènes** peuvent être définis sur le même **écran étendu** (extender screen )
3. Prise en charge des appels bidirectionnels avec l'application CAST
4. Prise en charge de l'ajout de la fonction des interrupteurs de lumière **Matter** et de la fonction couleur et chaleur des ampoules **Matter**
5. Animation de démarrage mise à jour

### V2.4.0 (janvier. 16 2024)

1. Prend en charge **l'ajout de ponts Matter** et vous pouvez synchroniser les appareils de commutation sous le pont avec NSPanel Pro.
2. Nouvelle langue ajoutée : **Lettonien**

### V2.3.0 (déc. 12, 2023）

1. Prend en charge la commutation de l'unité de température du thermostat, **vous pouvez la régler sur ℃ ou ℉** dans l'application.
2. Prise en charge de l'ajout de **dispositifs d'éclairage Matter**.
3. Lorsque la fonction Bluetooth est activée, **l'icône Bluetooth s'affiche** dans le coin supérieur droit de l'écran.

{% include product-embed.html image="https://i0.wp.com/itead.cc/wp-content/uploads/2022/07/NSPanel-P_preorder_dim_gray.jpg?fit=1000%2C1000&ssl=1" title="Controleur Sonoff Nspanel Pro" brand="Sonoff" description="Controleur Sonoff Nspanel Pro avec zigbee 3.0 et wifi intégré" affiliate="_DCgKVON" domlink="objets-connectes/6625-sonoff-interrupteur-mural-noir-zigbee-30-nspanel-pro.html" iteadlink="sonoff-nspanel-pro-smart-home-control-panel" %}

## Conclusion

Le **thème Rubik** du nouveau firmware v3.0.0 du {{ page.ref }} est sincèrement **une réussite** qui permet de contrôler facilement les modules de l'environnement Sonoff. Si tu décides de t'équiper **exclusivement de cette marque** alors le Sonoff {{ page.ref }} **est fait pour toi**. Sincèrement il ne manque plus que **l'environnement Cube** de Sonoff.

> Qui rendrait compatible cet écran avec d'autres marques ainsi tu pourrais te faire une installation centralisée et WAF, mais pour l'instant ce n'est pas le cas, peut-être que ça le deviendra !
