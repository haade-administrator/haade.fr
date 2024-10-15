---
guid: 143
title: "Box Homey Pro - la force tranquille"
description: "Test de la box domotique Homey pro early 2023, d'une simplicité déconcertante, cette box offre des atouts indéniables pour les novices de la domotique, elle possède de nombreux points positifs comme tout ces protocoles disponibles, mais a-t-elle tous les atouts de son côté ?"
ref: "Homey Pro (Early 2023)"
layout: post
authors: [Nico]
date: 2024-10-14 17:00
last_modified_at: 
categories: [Haade-lab, Tests, Z-wave, Zigbee]
tags: []
video: 
image: 'athom-homey-pro-box-domotique-test.png'
toc: true
beforetoc: ''
published: true
sitemap:
  changefreq: 'monthly'
  exclude: 'no'
  priority: 0.5 #between 0.0 to 1.0, 1.0 high priority
  lastmod:  # date to end modification
locale: fr_FR
comments: true
rating: 4.4
sourcelink:
  - https://www.domadoo.fr/fr/accueil/7159-athom-box-domotique-homey-pro-3-z-wave-plus-zigbee-wi-fi-ble-433-mhz-infrarouge-matter-et-thread-8719327218198.html
  - https://homey.app/fr-fr/?gad_source=1&gclid=Cj0KCQjw3vO3BhCqARIsAEWblcBFdZ9y_NK05T0X_wV7w3iR0TnxdWDgDstnXvOJ3DDl6aWoT8ix3B8aAg66EALw_wcB
---

Voilà un test que **j'ai hâte de te présenter**, grâce à Athom le fabriquant de la box {{ page.ref }} et Domadoo, j'ai pu acquérir une box {{ page.ref }} dernière génération. Athom **vend cette box 399€** rien que ça ! J'espère que pour ce prix cette box domotique **tient toutes ses promesses**.

Tout au long de ce tuto je vais **détailler au mieux les fonctionnalités de cette box**. Et voir si elle est faite pour Mr tout le monde. 

> Dans un prochain article **nous ferons un comparatif** entre la {{ page.ref }} et la Home Assistant Yellow qui sont probablements les box les plus intéressantes du moment.

{%- include alert.html type="info" text="Haade.fr participe au programme d'associés d'Amazon Services LLC, un programme de publicité d'affiliation conçu pour fournir un moyen de gagner des frais lors de la création de liens vers Amazon.com et des sites affiliés." %}

## Déballage de la box {{ page.ref }}

Livré dans un **écrin noir magnifique c'est un sans faute** *ça me rappelle le packaging des produits Sonoff NSPanel pro 120*, la box ne subira pas les alléats des transports. À l'intérieur tu y trouveras une notice (téléchargeable plus bas ), une box et un adaptateur prise et cable usbc afin d'alimenter la box et de la connecter à ton réseau wifi.

{% picture posts/{{ page.guid }}/deballage-box-domotique-athom-homey-pro-full-protocole.png --alt Déballage de la box domotique dont tout le monde parle fabriqué par Athom la box Homey pro --img width="940" height="529" %}

{% include product-embed.html image="athom-box-domotique-homey-pro-3-z-wave-plus-zigbee-wi-fi-ble-433-mhz-infrarouge-matter-et-thread.png" title="Athom Homey Pro Box Domotique" brand="Athom" description="La box domotique Homey PRO intègre Z-Wave, Zigbee, Wi-Fi, BLE, 433 MHz, infrarouge, Matter/Thread pour une expérience avancée de la maison connectée." domlink="7159-athom-box-domotique-homey-pro-3-z-wave-plus-zigbee-wi-fi-ble-433-mhz-infrarouge-matter-et-thread-8719327218198.html" amazlink="47Qgdzg" %}

**Sur cette photo tu as l'ensemble des composants de la box**, il existe un adaptateur rj45 afin de pouvoir la brancher sur **réseau filaire mais pour cette option il va falloir que tu débourses 26€ supplémentaires**.

{% picture posts/{{ page.guid }}/contenu-box-domotique-athom-homey-pro-full-protocole.png --alt contenu de la box domotique dont tout le monde parle fabriqué par Athom la box Homey pro avec la notice et la prise usbc --img width="940" height="529" %}

Quelques photos supplémentaires sur la dernière image la box avec ce **magnifique jeu de lumière** lors d'un fonctionnement normal, tu pourras si tu le désire le désactiver **via l'interface Homey**.

{% picture posts/{{ page.guid }}/tour-horizon-box-domotique-athom-homey-pro-full-protocole.png --alt tour d'horizon de la box domotique dont tout le monde parle fabriqué par Athom la box Homey pro avec la notice et la prise usbc --img width="940" height="529" %}

Pour finir quelques photos du déballage de **l'adaptateur rj45**, celui-ci *n'est malheureusement pas fournis avec la fonction POE* il faudra brancher le cable et la prise usbc. **Mais ça a le mérite de proposer une fonction RJ45 à la box Athom {{ page.ref }}.**

{% picture posts/{{ page.guid }}/dongle-connecteur-rj45-pour-box-homey-pro-deballage.png --alt déballage de l'adaptateur rj45 pour connecter en filaire au réseau la box homey pro --img width="940" height="529" %}

### Vidéo d'installation du connecteur RJ45

Pour qu'il soit reconnu dans Homey, pro le connecteur rj45 doit être connecté d'une certaine manière, visionne la vidéo officielle créé par Athom

{% include videoPlayer.html youtubeId="kHsv5GH93Mw" %}

Niveau connectique la box {{ page.ref }} est plus que **minimaliste**, elle ne proposera q'un port de branchement en USB-C, je trouve ça dommage qu'elle ne propose pas de ports rj45 ce qui assure une stabilité au réseau, et aurait même pu intégrer l'option POE, mais ce n'est pas le cas pour cette version, **dommage car on doit toit de même débourser 399€.**

{% picture posts/{{ page.guid }}/connectique-box-athom-homey-pro.png --alt capture d'écran de la connectique disponible sur la box homey pro --img width="940" height="529" %}

{% include product-embed.html image="athom-homey-pro-ethernet-adapter-boite.png" title="Adaptateur RJ45 Athom Homey Pro Box Domotique" brand="Athom" description="L'adaptateur officiel pour connecter la box Homey pro en RJ45, l'adaptateur n'est pas poe il faudra l'alimenter avec la prise fourni avec la box." domlink="accessoires-electriques/7166-athom-homey-pro-ethernet-adapter--8719327704349.html" amazlink="3zQm7nu" %}


## Contrôle de la box {{ page.ref }}

Passons au vif du sujet, l'interface de cette box. Et là je dois dire que **j'ai été bluffé**. Ultra facile d'utilisation et encore plus de compréhension. **Un novice ne rencontrera aucun soucis pour la faire fonctionner**, je ne parle pas de la première mise en service mais de tout l'ensemble. Une interface très réussi qui n'est pas exempt de bug pour le moment qui je n'en doute pas va être vite corrigé par l'équipe Athom.

### Smartphone

Commençons par la première utilisation, pour celà il te faudra ton **smartphone ainsi que l'application dédiée Homey**, retrouve ci-dessous un **QRCode** qui te permettras de l'installer d'un simple clic.

{% include qrlink.html qrlink="https://setup.homey.app" text="télécharger l'application Ewelink sur le playstore ou l'appstore" realtextlink="Applications Homey pour Smartphone" %}

#### Première connection

Je n'ai rencontré aucun soucis, il suffit simplement de suivre les étapes indiquées sur l'application et au bout de 2-3 minutes tout sera fonctionnel, tu auras même **paramétré toutes les zones** disponibles dans ton domicile. Pour que ce soit plus explicite retrouve ci-dessous un gif animé qui te montreras étape par étape la première installation de la box {{ page.ref }} via l'application sur téléphone.

![Première connection de la box Honey pro sur smartphone]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/premiere-connection-homey-pro.webp{{ cachebuster }}){: width="325" height="640" class="lazyload pictaninpost"}

> l'application sur smartphone fonctionne à merveille

### Pc

Sur le PC rien à paramétrer, mais pour gérer l'interface de la {{ page.ref }} rien de mieux qu'un grand écran, je tiens à signaler que tout est **gérable via le smartphone ou la tablette**. Il faut bien-entendu avoir suivi au préalable l'étape d'installation sur Smartphone. Ensuite rends toi simplement sur la page dédiée [My Homey App](https://my.homey.app/){: target="_blank"}

**Retrouve dans cette vidéo** un paramétrage qui est loin d'être complet mais qui englobe tout de même **4 des 6 protocoles** intégrés à la box.

Je fais un tour d'horizon des fonctions, en passant par l'accueil, l'inclusion d'une prise **z-wave**, **zigbee** et **matter** ainsi qu'une utilisation succinte de la fonction infrarouge. Seul Thread et la radiofréquence 433Mhz n'a pas été paramétrée.

Je n'ai quasimment pas rencontré de soucis à l'incorporation de ces produits et tu pourras ainsi voir la capacitée d'adaptation de cette fameuse box {{ page.ref }}.
Bon visionnage.

{% include videoPlayer.html youtubeId="UV1Tq29qOHQ" %}

> l'application sur PC fonctionne à merveille

## Paramétrage du réseau en local de la Box {{ page.ref }}

**Par défaut la box Homey fonctionne que sur le cloud** hormis la sécurité des données cette box ne fonctionnera pas en l'absence de réseau internet. Pour l'installation en local c'est bien possible mais il faudra activer la redirection de port sur ton routeur et sur l'application Homey Pro.

> N'oublie pas de dédier une **ip statique** à ta box

[Accès en local sur la box Homey Pro](https://homey.app/en-us/news/port-forwarding-is-now-live/){: target="_blank"}

### Paramétrage du routeur

Une petite animation pour te montrer comment paramétrer une ouverture de port sur un routeur Freebox OS avec enregistrement d'une ip statique

![Paramétrage redirection de port freebox Os pour homey avec adresse ip statique]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/parametrage-port-forwarding-local-homey-pro-freebox.webp{{ cachebuster }}){: width="940" height="529" class="lazyload pictaninpost"}

### Paramétrage de l'application Port Forwarding ( ouverture de port )

Une petite animation pour t'aider à paramétrer une redirection de port sur l'application Homey pro, tu trouveras dans l'onglet général l'adresse ip allouée à la box.

![Paramétrage redirection de port freebox Os pour homey avec adresse ip statique]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/parametrage-redirection-port-app-my-homey-box-local.webp{{ cachebuster }}){: width="244" height="529" class="lazyload pictaninpost"}

## Les Scenarios (Flows) dans tout ça

Athom propose la **création de flows** en mode **simple ou en mode red node**, les fonctions sont nombreuses par défaut et créé automatiquement en fonction des modules et produits intégrés dans la box ce qui te permettra un large panel, il te **suffit de sélectionner** celles qui t'intéressent de les **relier** ensemble par un modèle de scénario classique (si,alors,sinon) et **ensuite de tester** d'un simple clic, le tout très très simplement. 

> Et tu rendras ainsi ton logement intelligent.

![Gif animé de présentation sommaire des deux types de créations de flows ou scénarios pour la box homey pro]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/gif-anime-flows-simple-et-avance-box-homey-pro-simplicite-deconcertante.webp{{ cachebuster }}){: width="495" height="757" class="lazyload pictaninpost"}

> Il te sera **extrêmement facile de créer des flows** avec la box {{ page.ref }} même si tu es novice ou mauvais en informatique. C'est sa principale force.

## Mon ressenti de la box {{ page.ref }}

J'ai tenu à t'énumérer les points positifs et négatifs en détail afin de t'aider à te décider les plus objectivement possible à l'achat de cette box.

**Tout n'est pas rose loin de là, mais c'est pas mal pour une box qui n'est pas open source.**

### Les points positifs

Je ne te la cache pas, cette box vaut le détour, parmi les points positifs, sont à garder en mémoire ses nombreux protocoles intégrés, cette simplicité d'utilisations et ses nombreux modules proposés par Homey et une communauté d'utilisateurs toujours plus nombreux.

> La page d'accueil manque aussi de souplesses elle ne propose que pour l'instant l'affichage des utilisateur et météo et de sélectionner tes **modules ou flows** (scénarios) favoris.

**Les + du produit:**{: .blue}

**Voici les points positifs selon Haade.**

- Le design
- La qualité de fabrication
- les **anneaux à LED** ( on aime ou pas )
- Tous les **protocoles intégrés ( RF433, infrarouge, Bluetooth, Thread, Zigbee, Matter, Z-wave )**
- Grande compatibilité
- Grande **simplicitée d'utilistation** surtout pour les Novices
- Facilité de création des scénarios (flows)
- **Grande communautée de développeur**
- réactivité de la société Athom

### Les points négatifs

Pour Commencer le premier soucis rencontré est matériel, la box {{ page.ref }} **est annoncée avec une capacité de stockage emmc de 8GB** ce qui est déjà peu à mon sens mais en réalité je me suis rendu compte **qu'elle n'était que de 2,66GB** ce qui peut vite poser des soucis à partir du moment ou on installent plusieurs applications. À mon sens une box ne devrait pas avoir une capacité de stockage en dessous de 32GB, même la box Home assistant Green propose 32GB.
La capacité de mémoire RAM n'est que de 2GB et là aussi une box ne devrait pas proposer une box en dessous de 4GB de RAM surtout à ce prix là ! 

{% picture posts/{{ page.guid }}/capacite-stockage-homey-pro-3gb-au-lieu-de-8gb-annonce.png --alt La capacité de stockage annoncé par le fabriquant Athom de la box Homey pro n'est pas de 8GB mais seulement de 2.66GB --img width="940" height="630" %}

Pour finir il n'est actuellement **pas possible de sauvegarder les données de la box {{ page.ref }}** via un module, toutefois il doit être possible de réaliser cette manipulation en local grâce à l'accès ssh proposé par la box ( actellement en phase de test ).

**Les - du produit:**{: .red}

- Le **Prix 399€** relativement cher
- tout **fonctionne sur le Cloud** rien en local pour le moment (le port forwardin ne fonctionne pas)
- Connection par défaut au wifi possible en **rj45 avec un connecteur supplémentaire**
- Protocole **Z-wave 700** ( récent mais pas de dernières générations )
- Seulement **2.6GB d'espace de stockage** au lieu de 8GB annoncé
- Mémoire RAM faible de **1.99GB**
- Sauvegarde **payante**

{%- include alert.html type="info" text="Haade.fr participe au programme d'associés d'Amazon Services LLC, un programme de publicité d'affiliation conçu pour fournir un moyen de gagner des frais lors de la création de liens vers Amazon.com et des sites affiliés." %}


## Caractéristiques technique {{ page.ref }}

**Technologies sans-fil :**

- ZigBee® 3.0 (2.4 GHz)
- Wi-Fi® 802.11b/g/n/ac (2,4GHz et 5GHz)
- Bluetooth Low Energy 5.0 (BLE)
- Z-Wave Plus V2™ (868,42MHz)
- Radio Fréquence (433 MHz : Somfy RTS, Chacon DIO etc)
- Infrarouge
- **Processeur:** ARMv8 Quatre Coeur à 1,8 GHz
- **Mémoire vive:** 2Go LPDDR4 RAM
- **Mémoire de stockage:** 8Go eMMC Flash annoncé ***mais seulement 2,66GB dont 1,33GB de libre***

**La Box Homey pro a un diamètre de 127MM**

{% picture posts/{{ page.guid }}/caracteristique-diametre-homey-pro-127mm.png --alt La box Homey pro a un diamètre de 127mm --img width="940" height="529" %}

Retrouve en détail la composition de la carte embarquée de la box {{ page.ref}} ( attention toutes les fonctions ne sont pas disponibles )

[Comparatif des différentes Box Homey du marché](https://support.homey.app/hc/en-us/articles/360015447093-Comparing-the-existing-Homey-Pro-models){: target="_blank"}

{% picture posts/{{ page.guid }}/carte-mere-homey-pro-detail.png --alt Détail du circuit imprimé de la carte box Homey pro --img width="940" height="588" %}

1. MicroSOM (CPU, RAM, Wi-Fi et BT)
2. Flash eMMC de 8 Go
3. Alimentation
4. LED RVB (24x)
5. Microphones (2x) ( non disponible )
6. Puce audio
7. 433 MHz
8. 868 MHz ( seulement disponible sur Homey bridge )
9. Z-Wave plus 700
10. ZigBee
11. NFC (connecteur IC et antenne)
12. LED infrarouge (6x)
13. Récepteur infrarouge

[Plus de détails concernant le circuit imprimé Homey pro](https://homey.app/en-us/blog/a-technical-introduction-homey/){: target="_blank"}


Retrouve ci-dessous une **animation gif du fonctionnement de la led** purement décorative de la box {{ page.ref }}

![Animation des leds de la box Homey pro]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/animation-anneau-led-homey-pro-la-box-du-moment.webp{{ cachebuster }}){: width="495" height="463" class="lazyload pictaninpost"}

## Notice d'utilisation de la {{ page.ref }}

{% include doclink.html pdf="Homey-Pro-Quick-Start-Guide.pdf" title="Guide d'utilisation rapide box Homey Pro" %}

## Liens utiles de la {{ page.ref }}

Voilà quelques liens qui me semble fort intéressant et qu'il faut connaître quand on possède cette box {{ page.ref }}.

[Communauté - Forum Homey Pro](https://community.homey.app/){: target="_blank"}

[Status des services Homey](https://status.homey.app/){: target="_blank"}

[Support Homey](https://homey.app/fr-fr/support/){: target="_blank"}

{% include product-embed.html image="athom-box-domotique-homey-pro-3-z-wave-plus-zigbee-wi-fi-ble-433-mhz-infrarouge-matter-et-thread.png" title="Athom Homey Pro Box Domotique" brand="Athom" description="La box domotique Homey PRO intègre Z-Wave, Zigbee, Wi-Fi, BLE, 433 MHz, infrarouge, Matter/Thread pour une expérience avancée de la maison connectée." domlink="7159-athom-box-domotique-homey-pro-3-z-wave-plus-zigbee-wi-fi-ble-433-mhz-infrarouge-matter-et-thread-8719327218198.html" amazlink="47Qgdzg" %}

## Conclusion

J'ai mis **une note de 4.4/5** pour la box Homey pro de Athom, selon certains elle mériterait 5/5, trois choses me chagrine, **la première** est son tarif de 399€ et son manque de connectique, **la seconde** est le fait qu'elle **n'est pas connectée en local par défaut** et tout fonctionne alors sur le cloud. **Pour terminer** Homey annonce un stockage de 8GB et il est seulement de 2,66GB va comprendre.

Cependant c'est une box que je conseil à tous les novices de la domotique car **l'interface est très simple d'utilisation**, l'intégration des protocoles est très complet ( actuellement la mieux dotée du marché ). La communauté peut développer facilement des applications qui rendront compatibles une grande partie des produits connectés du marché.

> La Homey Pro est probablement la meilleur box du marché Actuel !

{% include product-embed.html image="athom-homey-pro-ethernet-adapter-boite.png" title="Adaptateur RJ45 Athom Homey Pro Box Domotique" brand="Athom" description="L'adaptateur officiel pour connecter la box Homey pro en RJ45, l'adaptateur n'est pas poe il faudra l'alimenter avec la prise fourni avec la box." domlink="accessoires-electriques/7166-athom-homey-pro-ethernet-adapter--8719327704349.html" amazlink="3zQm7nu" %}