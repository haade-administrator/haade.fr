---
guid: 167
title: "Découverte des Dongles Plus et Max Sonoff"
description: "Examinons et testons ensemble les nouveaux dongle de la marque Sonoff le Plus et Max à base de puces efr32mg24 avec test du multipan"
ref: "Sonoff Dongle Max et Plus"
layout: post
authors: [Nico]
date: 2025-12-20 18:00
last_modified_at: 
categories: [Tests, Haade-lab, Zigbee]
tags: []
video: 
image: 'test-des-nouveaux-dongles-sonoff-plus-et-max-efr32mg24.png'
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
rating: 4.0 
sourcelink:
  - https://www.silabs.com/wireless/zigbee/efr32mg24-series-2-socs
  - https://dongle.sonoff.tech/
---

Dans l'univers des dongles Zigbee à base de puces Silabs EFR32 de plus en plus nombreux, Sonoff présente ses deux nouveaux dongles Plus et Max.

> Après le dongle P et E, la marque à revue entièrement les clés Zigbee.

À première vue les deux nouveaux dongles ont été entièrement redessiné et rejoigne la sphère des dongles hautes qualité. Les produits sont très biens packagés et très bien fini, ça respire la conception de fabrication 100% bien fini.

{% picture posts/{{ page.guid }}/capture-emballage-nouveaux-dongles-sonoff.png --alt Emballage des nouveaux dongles Sonoff Max et Plus à base de puces silabs MG24 --img width="940" height="529" %}

## Dongle Plus MG24

Commençons par ce [dongle PM24](https://dongle.sonoff.tech/guide/dongle-pmg24/introduction-dongle-pmg24/){: target="_blank"}, **la boite arbore la compatibilité avec home assistant et zigbee2mqtt**, l'emballage est optimisé et quand on sort la clé de la boite l'antenne frappe à l'oeil, **la longueur est impressionnante** par rapport au stick qui apporte un gain supplémentaire de 3dbi au 20 dbi de la puce. [Nous avons effectués quelques tests de distances en bas de cet article](#test-de-distances-des-dongles-plus-et-max)

{% picture posts/{{ page.guid }}/dongle-plus-mg24-contenu-par-sonoff.png --alt Contenu du dongle USB Sonoff Plus MG24 --img width="940" height="529" %}

Comme pour les anciens dongles de la marque, **le dongle plus mg24 à une coque en aluminium** d'un gris anthracite exaltant, mais contrairement aux anciens la coque est beaucoup plus petite, le produit est donc beaucoup plus léger, un avantage indéniable *pour ne pas forcer sur la sortie usb de la box domotique.*

{% include product-embed.html image="dongle-sonoff-plus.png" title="Sonoff Dongle Plus MG24" brand="Sonoff" description="Connectez vos appareils domotiques avec le dongle SONOFF Zigbee 3.0 EFR32MG24, compatible Zigbee2MQTT et Home Assistant, avec antenne renforcée et câble USB inclus." domlink="produits-de-domotique/8379-sonoff-dongle-zigbee-30-efr32mg24-compatible-zigbee2mqtt.html" affiliate="_c3z8aItJ" sonofftech="sonoff-zigbee-thread-usb-dongle-dongle-plus-mg24" amazlink="4s6cp6R" %}

**Deuxième caractéristique importante** réside sur la puce utilisée, une Silabs [**EFR32MG24**](https://www.silabs.com/wireless/zigbee/efr32mg24-series-2-socs){: target="_blank"} **qui est beaucoup plus performante que la série MG21**. Avec des caractéristiques clés telles que des performances RF 2,4 GHz élevées, une faible consommation de courant et uneIA/ML accélérateur matériel et Coffre-fort sécurisé™, un processeur ARM Cortex®-M33 cadencé jusqu'à 78 MHz, avec jusqu'à 1,5 Mo de mémoire Flash et 256 ko de RAM, **la puce mg24 est idéal pour les performances et les réseaux étendus.**

En ce qui concerne la qualité de fabrication rien à dire la qualité est là, les **firmwares zigbee et thread** fonctionnent bien **par contre impossible de faire fonctionner la fonction multipan** qui est pourtant annoncée comme stable en 4.6.0, je n'ai pas réussi à intégrer des modules trv tado et en même temps inclure des modules sonoff zigbee.

> Dans ce contexte **la vérification et la connection au réseau Thread est tout simplement impossible !**

Je ne sais pas si c'est une erreur de ma part en tous cas après de nombreux essais j'ai fini par abandonner.

De plus j'ai effectué des tests de distances en zigbee et là aussi je suis déçu le sonoff dongle plus MG24 capte moins bien malgré l'antenne que le dongle nabu casa zbt1 ( skyconnect ). **Ce qui laisse à désirer c'est bien dommage, je ne la recommande pas.**

### conclusion Dongle plus MG24

C'est un **dongle de fabrication irréprochable**, les dimensions et le poids sont réduites au minimum, la taille de **l'antenne est supérieur aux autres dongles fournis avec antennes mise à part le Dongle Max, mais similaire aux dongles de la marque SMLight.** Donc si tu cherches un dongle de qualité avec une puce dernière génération alors il est fait pour toi, **mais si tu cherches un dongle exceptionnel alors passes ton tour.**

## Sonoff Dongle Max

**Sonoff décide d'emboîter le pas au fabricant SMLIGHT** en créant un dongle déporté et je dois dire que le constat est sans ambiguitée.

{% picture posts/{{ page.guid }}/dongle-max-contenu-par-sonoff.png --alt Contenu du dongle USB Sonoff Max déporté --img width="940" height="529" %}

> **Le dongle Max n'a rien à voir avec le dongle Plus Sonoff.**

*Enfin si il utilise la même puce Zigbee Silabs **EFR32MG24***

{% include product-embed.html image="dongle-sonoff-max.png" title="Sonoff Dongle Max" brand="Sonoff" description="Exploitez toute la puissance du Dongle Max SONOFF avec puces EFR32MG24 + ESP32D0WDR2. Connectez vos appareils Zigbee et Thread via Ethernet PoE, Wi-Fi ou USB et gérez-les facilement depuis Home Assistant, Jeedom ou Zigbee2MQTT. Profitez d’un interface de gestion local intégré, de mises à jour simplifiées et d’une fiabilité maximale grâce à ses antennes 5dBi et son boîtier aluminium robuste." domlink="produits-de-domotique/8409-sonoff-dongle-max-zigbeethread-ethernet-poe-dongle-m.html" affiliate="_c3hFvb7n" sonofftech="sonoff-dongle-max-zigbee-thread-poe-dongle-dongle-m" amazlink="3N8Tw2W" %}

Là aussi l'emballage est soigné à l'intérieur on retrouve un **dongle fait d'aluminium** fourni avec deux énormes antennes, l'une pour le Zigbee et l'autre pour le wifi, et oui ce dongle gère le mode point d'accès wifi.

Le Sonoff dongle max est livré avec un support pour une fixation murale, avec des visses et chevilles. **Il est fournis avec un cable usb-c qui servira uniquement d'alimentations, n'essaie pas de transférer des données sur ta box home assistant, ça ne fonctionnera pas.** Pour terminer il est livré avec une notice sommaire ainsi q'un double face, pour une fixation sécurisée.

{% picture posts/{{ page.guid }}/dongle-max-assemblage-grande-antenne.png --alt Assemblage du Dongle Max --img width="940" height="529" %}

Sur la fabrication le Dongle Max est similaire au dongle plus, la taille est plus imposante, les antennes aussi. **Normal le Dongle Max est plus qu'une simple clé zigbee/wifi, il peut être un hub et un client multi protocole.**

{% picture posts/{{ page.guid }}/dimensions-dongle-max-sonoff-grande-antenne.png --alt Dimensions du Dongle Max par Sonoff --img width="940" height="529" %}

### Interface gestion Dongle Max

pour accéder à l'interface rien de plus simple, il suffit de connecter **le dongle en rj45 sur ton réseau** et de taper dans le moteur de recherche de ton navigateur préféré [http://dongle-m.local](http://dongle-m.local){: target="_blank"}

{% picture posts/{{ page.guid }}/sonoff-dongle-max-interface.png --alt Interface gestion dongle Max et les diverses options --img width="940" height="451" %}

**Tu pourras:**

- te connecter aux **outils ewelink**
- créer un **point d'accès wifi**
- faire **les mises à jours** des puces et même automatiser ce processus( note que pour tester le mode multipan il faut passer en beta 1.0.4 )
- trouver les infos nécessaires pour se connecter à Z2M ou ZHA directement sur l'interface
- te connecter à un **client mqtt** rendre compatible avec divers softs
- **créer des webhooks**
- créer un **client wireguard**
- de **créer des sauvegardes**
- enfin tu pourras **modifier divers paramètres**

**Il te permet de créer un client vpn wireguard !**

Pour faire un retour rapide **car je n'ai pas tout testé**, quel est l'intérêt j'en vois qu'un directement de créer un réseau local à distance :) . Relier une box homeassistant à un réseau zigbee distant est tout à fait possible ainsi tu pourrais controler ton réseau zigbee sans aucunes autres limites.
En réalité l client vpn est là pour relier en toutes sécuritées le dongle max Sonoff à la box en toute sécurité.

**Pourquoi se connecter à un client MQTT ?**

Je penses que cette option a été intégrée afain de faire communiquer ce dongle **avec n'importe quel système utilisant un serveur mqtt ce qui rend le dongle compatible avec presque tout !**

{% include videoPlayer.html localId="presentation-interface-sonoff-dongle-max.mp4" %}

Ci-dessus **j'ai mis une vidéo** qui balaye les différentes fonctions. La modification de certains paramètres comme la gestion de couleurs des Leds est très impressionnant.

> Je relève **tout de même divers bugs minimes** mais présent qui devraient être corrigés dans les semaines à venir.

### Test Multipan (beta*)

Contrairement au dongle Plus MG24, j'ai réeussi à intégrer des Trv Tado° ainsi que des thermomètres Sonoff Zigbee SNZB-02P et figure toi que ça fonctionne, dans une future vidéo je vais présenter l'installation chez Flo en Multipan, **il y a tout de même un mais, il n'est pas des moindres, j'ai l'impression qu'en multipan l'émission/réception du dongle max s'affaiblit.**

Plus qu'une impression c'est bien le cas, si je configure la clé en routeur Thread, tous les modules de la maison sont bien connus dans le réseau ! idem pour le zigbee.

### Conclusion dongle Max

**En définitif le dongle Max est un très très bon dongle**, qui de plus est très polyvalent, j'ai réalisé chez un amis une installation Tado° Thread avec du sonoff Zigbee en multipan, mise à part une portée des fréquences le réseau fonctionne, mais attention il est toujours annoncé en version Beta sur le site du constructeur.

## Les différences entre Max et Plus

**Le Dongle Plus MG24 (Dongle-PMG24) est la version améliorée du ZBDongle-E**. Il remplace la puce EFR32MG21 par l'EFR32MG24. La mémoire flash a été augmentée de 100 % et la RAM de 300 %, tandis que la consommation en veille a été réduite. Enfin, son format plus compact facilite son branchement à différents ports USB.

{% picture posts/{{ page.guid }}/differences-taille-et-antennes-dongle-max-et-plus-sonoff-grande-antenne.png --alt Dimensions du Dongle Max vs dongle plus par Sonoff antennes immenses --img width="940" height="529" %}

> **Ah oui effectivement, c'est le jour et la nuit** entre la taille du dongle, et des antennes, ainsi tu pourras te faire une idée des dimensions.

{% picture posts/{{ page.guid }}/differences-taille-et-antennes-dongle-max-et-plus-sonoff-grande-antenne-2.png --alt Seconde image Dimensions du Dongle Max vs dongle plus par Sonoff antennes immenses --img width="940" height="529" %}

## Test de distances des dongles Plus et Max

Passons à un test important celui de la distance de couverture zigbee, ce test va comparer la qualité du lien entre les dongles zigbee suivant:

- le dongle nabu casa skyconnect (ZHT-01)
- le dongle sonoff Plus MG24
- le dongle déporté Sonoff dongle Max

**Le firmware testé est le 8.2.0 pure Zigbee !**
Le module de liaison est un thermostat sur pile donc **enddevice Sonoff SNZB-02P**

> La distance est identique entre le dongle et le module thermostat

La distance entre le sonoff SNZB-02P et le dongle est de 13 mètres en milieu ouvert, pour rappel le dbi en zigbee va de 0 à 255, **et 255 est la puissance la plus forte du réseau**.

|                       | Skyconnect  | Dongle Plus | Dongle Max     |
|-----------------------|:-----------:|:-----------:|:--------------:|
| **13m ouvert**        |     **144**{: .yellow}     |      **120**{: .red}    |    **255**{: .blue}     |
| **20m ouvert/étage**  |      **76**{: .yellow}     |       **76**{: .yellow}    |    **223**{: .blue}      |

**Le constat est sans appel**, le dongle Max remporte largement la victoire, par contre **je suis déçu du Dongle plus MG24 qui fait moins bien** que la clé Nabu Casa qui est il faut le rappeler dépourvu d'une antenne Zigbee, **j'ai réalisé 2 fois les tests et les résultats sont presques similaires.**

## Flash du firmware Sonoff

Pour le dongle max MG24 deux solutions sont disponibles pour mettre à jour le firmware.
Via l'interface web en connectant la clé directement sur son PC, fonctionne nativement sur Linux, pour les autres systèmes il faudra au préalable installer les drivers CP210x.

Donc en ligne rendez-vous sur [la page Sonoff dongle flasher](https://dongle.sonoff.tech/sonoff-dongle-flasher/){: target="_blank"} connecte ta clé au PC et suis les étapes en ligne rien de bien compliqué

La seconde si ta clé est installée sur une box home assistant operating system tu peux [installe directement le module de flash en cliquant ici](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2FiHost-Open-Source-Project%2Fhassio-ihost-addon){: target="_blank"}

La page [github du module est disponible là.](https://github.com/iHost-Open-Source-Project/hassio-ihost-addon/tree/master/hassio-ihost-sonoff-dongle-flasher){: target="_blank"}, Sonoff à [rédiger une notice technique sur la page du support](https://dongle.sonoff.tech/guide/zbdongle-e/flash-firmware-via-home-assistant-add-on/){: target="_blank"} elle est très bien détaillée.

Dans les deux cas **Sonoff propose des firmwares** pour la clé **Dongle plus MG24** compatible Zigbee, Thread et/ou Multipan Thread+Zigbee. C'est une très bonne chose ainsi l'envirronnement et l'évolution reste contrôlée par Sonoff sans besoin d'accéder à des répertoires externes [comme celui proposé par Darkxst](https://github.com/darkxst/silabs-firmware-builder){: target="_blank"}

Personnellement pour les biens d'une future installation j'ai passé cette clé sur le firmware Multipan.

![Flash Firmware Dongle Plus Sonoff MG24]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/MultiPAN.webp{{ cachebuster }}){: width="739" height="537" class="lazyload pictaninpost"}

## Conclusion

**Ces deux dongles signés Sonoff sont très bien fabriqués**, je suis **satisfait des tests du Dongle Max**, **mais au contraire je suis assez déçu du Dongle Plus MG24** car l'antenne ne semble pas faire le travail. En ce qui concerne le changement de firmware ou la mise à jour, l'outil en ligne fournis par Sonoff fait bien le Job. **En ce qui concerne le firmware MULTIPAN je doute que celui-ci soit efficace un jour.**