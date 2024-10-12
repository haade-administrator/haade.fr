---
guid: 143
title: "Box Homey Pro - la force tranquille"
description: "Test de la box domotique Homey pro, d'une simplicité déconcertante, cette box offre des atouts indéniables aux novices de la domotique, elle possède de nombreux points positifs mais a-t-elle tous les atouts de son côté ?"
ref: "Homey Pro"
layout: post
authors: [Nico]
date: 2024-10-08 10:34
last_modified_at: 
categories: [Haade-lab, Tests, Z-wave, Zigbee]
tags: []
video: 
image: 'athom-homey-pro-box-domotique-test.png'
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
rating: 4.2
sourcelink:
  - https://www.domadoo.fr/fr/accueil/7159-athom-box-domotique-homey-pro-3-z-wave-plus-zigbee-wi-fi-ble-433-mhz-infrarouge-matter-et-thread-8719327218198.html
  - https://homey.app/fr-fr/?gad_source=1&gclid=Cj0KCQjw3vO3BhCqARIsAEWblcBFdZ9y_NK05T0X_wV7w3iR0TnxdWDgDstnXvOJ3DDl6aWoT8ix3B8aAg66EALw_wcB
---

Voilà un test que j'ai hête de vous présenter, grâce à Athom le fabriquant de la box {{ page.ref }} et Domadoo, j'ai pu acquérir une box {{ page.ref }} dernière génération. Athom vend cette box 399€ rien que ça ! J'espère que pour ce prix cette box domotique tient toute ses promesses.

Tout au long de ce tuto je vais te détailler au mieux les fonctionnalités de cette box. Et voir si elle est faite pour Mr tout le monde, je vais aussi te donner mon point de vue par rapport à la box Yellow de Home Assistant, ses forces mais aussi ses faiblesses. 

> Dans un prochain article nous ferons un comparatif de ces deux box domotiques qui sont probablements les box les plus intéressantes du moment.

## Déballage de la box {{ page.ref }}

{% picture posts/{{ page.guid }}/deballage-box-domotique-athom-homey-pro-full-protocole.png --alt Déballage de la box domotique dont tout le monde parle fabriqué par Athom la box Homey pro --img width="940" height="529" %}

{% picture posts/{{ page.guid }}/contenu-box-domotique-athom-homey-pro-full-protocole.png --alt contenu de la box domotique dont tout le monde parle fabriqué par Athom la box Homey pro avec la notice et la prise usbc --img width="940" height="529" %}

{% picture posts/{{ page.guid }}/tour-horizon-box-domotique-athom-homey-pro-full-protocole.png --alt tour d'horizon de la box domotique dont tout le monde parle fabriqué par Athom la box Homey pro avec la notice et la prise usbc --img width="940" height="529" %}

{% picture posts/{{ page.guid }}/dongle-connecteur-rj45-pour-box-homey-pro-deballage.png --alt déballage de l'adaptateur rj45 pour connecter en filaire au réseau la box homey pro --img width="940" height="529" %}

{% include doclink.html pdf="Homey-Pro-Quick-Start-Guide.pdf" title="Guide d'utilisation rapide box Homey Pro" %}

![Animation des leds de la box Homey pro]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/animation-anneau-led-homey-pro-la-box-du-moment.webp{{ cachebuster }}){: width="495" height="463" class="lazyload pictaninpost"}

![Animation des leds de la box Homey pro]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/animation-anneau-led-homey-pro-la-box-du-moment-2.webp{{ cachebuster }}){: width="444" height="210" class="lazyload pictaninpost"}



{% include product-embed.html image="athom-box-domotique-homey-pro-3-z-wave-plus-zigbee-wi-fi-ble-433-mhz-infrarouge-matter-et-thread.png" title="Athom Homey Pro Box Domotique" brand="Athom" description="La box domotique Homey PRO intègre Z-Wave, Zigbee, Wi-Fi, BLE, 433 MHz, infrarouge, Matter/Thread pour une expérience avancée de la maison connectée." domlink="7159-athom-box-domotique-homey-pro-3-z-wave-plus-zigbee-wi-fi-ble-433-mhz-infrarouge-matter-et-thread-8719327218198.html" amazlink="47Qgdzg" %}

{% include product-embed.html image="athom-homey-pro-ethernet-adapter-boite.png" title="Adaptateur RJ45 Athom Homey Pro Box Domotique" brand="Athom" description="L'adaptateur officiel pour connecter la box Homey pro en RJ45, l'adaptateur n'est pas poe il faudra l'alimenter avec la prise fourni avec la box." domlink="accessoires-electriques/7166-athom-homey-pro-ethernet-adapter--8719327704349.html" amazlink="3zQm7nu" %}


## Contrôle de la box {{ page.ref }}

### Smartphone

#### Première connection

![Première connection de la box Honey pro sur smartphone]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/premiere-connection-homey-pro.webp{{ cachebuster }}){: width="325" height="640" class="lazyload pictaninpost"}

{% include qrlink.html qrlink="https://setup.homey.app" text="télécharger l'application Ewelink sur le playstore ou l'appstore" %}

### Pc


{% include product-embed.html image="athom-box-domotique-homey-pro-3-z-wave-plus-zigbee-wi-fi-ble-433-mhz-infrarouge-matter-et-thread.png" title="Athom Homey Pro Box Domotique" brand="Athom" description="La box domotique Homey PRO intègre Z-Wave, Zigbee, Wi-Fi, BLE, 433 MHz, infrarouge, Matter/Thread pour une expérience avancée de la maison connectée." domlink="7159-athom-box-domotique-homey-pro-3-z-wave-plus-zigbee-wi-fi-ble-433-mhz-infrarouge-matter-et-thread-8719327218198.html" amazlink="47Qgdzg" %}

[Communauté - Forum Homey Pro](https://community.homey.app/){: target="_blank"}

[Status des services Homey](https://status.homey.app/){: target="_blank"}

[Support Homey](https://homey.app/fr-fr/support/){: target="_blank"}

{% include videoPlayer.html youtubeId="UV1Tq29qOHQ" %}

**Les + du produit:**{: .blue}

- Le design
- La qualité de fabrication
- les anneaux à LED ( on aime ou pas )
- Tous les protocoles intégrés ( RF433, infrarouge, Bluetooth, Thread, Zigbee, Matter, Z-wave )
- Grande compatibilité
- Grande simplicitée d'utilistation surtout pour les Novices
- Facilité de création des scénarios
- Grande communautée de développeur
- réactivité de la société Athom

**Les - du produit:**{: .red}

- Le Prix 399€ relativement cher
- tout fonctionne sur le Cloud rien en local
- Connection par défaut au wifi possible en rj45 avec un connecteur supplémentaire
- Protocole Z-wave 700 ( récent mais pas de dernières générations )
- Seulement 2.6GB d'espace de stockage
- Mémoire RAM faible de 1.99GB