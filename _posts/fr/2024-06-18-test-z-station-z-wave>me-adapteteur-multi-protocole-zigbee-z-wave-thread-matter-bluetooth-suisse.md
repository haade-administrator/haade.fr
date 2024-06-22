---
guid: 131
title: "test z-station"
description: "test dongle"
ref: "Z-STATION"
layout: post
authors: [Nico]
date: 2024-06-18 09:33
last_modified_at: 
categories: [Tests, Domotique, Zigbee]
tags: []
video: 
image: 'test-du-adaptateur-dongle-usb-multi-protocoles-zwave-zigbee-thread-matter-ble-z-station-zwaveme.png'
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
rating: 4.5
sourcelink:
  - https://z-wave.me/products/z-station/
---

Une **petite exclu sur le web**, et oui je suis l'un des premiers à tester le nouveau superhero dongle de la marque ZWAVE>ME, l'adaptateur USB multiprotocole le **{{ page.ref }}** compatible **Zigbee/Z-wave/Thread/matter** et même **Bluetooth**. Alors quand je dis le premier je parle en france et en référence d'un article sur un Blog. 
Ces derniers temps j'ai testé pas mal de dongles zigbee, là il s'agit d'un combo qui peut être intéressant de plus Zwave>me est un spécialiste dans ce domaine.

## Déballage

Carton d'aspect naturel, Zwave>me jouer la carte de l'écologie, ce ne sont pas les premiers mais je trouve le packaging sympa et clair. À l'intérieur on retrouve l'adaptateur USB fourni avec des visses et chevilles afin de l'installer en façade, ainsi que deux antennes une pour le réseau zigbee et une pour le z-wave. Alors n'hésite pas à consulter la notice en cas de doute. Et il y a aussi deux cables usb, un usb-c > usb-c et un usb > usb-c.
A oui j'oubliais la notice, elle reprend l'essentiel pour le reste rendez-vous diretement sur le site.

{% picture posts/{{ page.guid }}/deballage-adaptateur-usb-z-station-z-waveme.png --alt Contenu de la boite de l'adaptateur z-station par zwave.me --img width="940" height="529" %}

## Caractéristiques techniques

|Interface|USB 2.0|
|Protocoles supportés|Z-Wave, Zigbee, Thread, Matter, BLE|
|Fonctionnalités Z-Wave|Z-Wave Plus **série 700**, Security S2, Smart Start, Longue portée|
|Émetteur-récepteur Z-Wave|Silicon Labs **ZGM130S**|
|Émetteur-récepteur Zigbee/Thread/Matter/BLE|Silicon Labs **EFR32MG21P**|
|API série|API série EZSP de Silicon Labs avec extensions Z-Wave.Me|
|Taille|60 mm x 20 mm x 10 mm|
|Poids|25 g|
|Alimentation|Via port USB|
|Compatibilité système|**Windows, macOS, Linux**|

**La boîte Z-Station comprend les éléments suivants:**

- Z-Station 
- Antenne Z-Wave (868 MHz)
- Antenne Zigbee/Thread/BLE (2,4 GHz)
- Câble USB-C 
- Un jeu de vis pour fixation murale et un gabarit de fixation murale
- Guide de démarrage rapide

{% include doclink.html docx="Z-Station Manual web.pdf" title="Guide de démarrage rapide adaptateur usb z-station Zwave.me" %}

### Connectivité

Z-Station fournit **deux interfaces** série utilisées respectivement par les applications **Z-Wave** et **Zigbee/Thread/BLE**. Linux et Mac OSX ont un pilote de périphérique intégré pour la clé et créeront un nouveau périphérique nommé comme /dev/ttyUSB* (Linux) ou /dev/cu.SLAB_USBtoUART (OSX). Windows énumère un nouveau **périphérique de port COM** mais peut nécessiter **un pilote de périphérique CP2105** de Silicon Labs.

### Sous la hotte

{% picture posts/{{ page.guid }}/dongle-z-station-ouverture-du-produit-acces-circuit-imprime-z-wave-me.png --alt Rendu du boitier z-station et accès au circuit imprimé --img width="940" height="529" %}

{% picture posts/{{ page.guid }}/rendu-taille-z-station-zwave-me.png --alt Rendu de la taille du dongle zwave.me avec ses antennesz-station --img width="940" height="529" %}

{% picture posts/{{ page.guid }}/zoom-circuit-imprime-z-station-zwave-zgm130s-zigbee-mg21A020.png --alt Détail du circuit imprimé zwave.me z-station puce zwave et zigbee --img width="940" height="529" %}

### Firmwares Zwave>me

Z-Station prend en charge Z-Wave et Zigbee NCP, OpenThread RCP, Bluetooth Low Energy ou le combo CPC Zigbee NCP/OpenThread RCP **(au choix, sélectionné par mise à jour du firmware)**. Il est également possible d'utiliser la Z-Station comme répéteur Z-Wave/Zigbee/Thread (firmware spécial requis).

#### Prise en charge de Z-Wave

Comparé à la conception standard du firmware utilisée par presque toutes les clés USB Z-Wave et autres matériels d'interface hôte Z-Wave, **le firmware de cet appareil offre plusieurs extensions et améliorations:**

- Outil Z-Wave Zniffer intégré
- Fonction de sauvegarde et de restauration, y compris la topologie du réseau
- Gestion optimisée de la file d'attente de transmission pour accélérer le processus de transmission
- Mise à jour du firmware depuis le niveau du système d'exploitation sur le terrain
- Notification de réveil étendue pour prolonger la durée de vie de la batterie des appareils fonctionnant sur batterie dans le réseau
- Statistiques avancées sur l'utilisation réelle du réseau
- Permet de changer de fréquence à partir du logiciel
- Compatible avec les logiciels tiers comme Home Assistant, Z-WaveJS, OpenZWave, Domoticz, OpenHAB, Jeedom (grâce au mode bibliothèque statique)

#### Prise en charge de Zigbee

- Zigbee est disponible en variantes NCP (coprocesseur réseau) et RCP (coprocesseur radio). Le protocole Zigbee HA 3.0 est pris en charge. **Pour travailler avec Zigbee2MQTT 1.38.0 et supérieur, tu devras mettre à jour votre Z-Station.**{: .red}
- Outil de renifleur 802.15.4 intégré
- Configuration optimisée pour un fonctionnement stable dans les grands réseaux
- Mise à jour du firmware depuis le niveau du système d'exploitation sur le terrain
- Compatible avec les logiciels tiers comme **Home Assistant, Zigbee2MQTT, OpenHAB**

#### Prise en charge Thread

- Zigbee et Thread utilisent tous deux la couche MAC/PHY 802.15.4. OpenThread est disponible en version RCP.
- Outil de renifleur 802.15.4 intégré
- Mise à jour du firmware depuis le niveau du système d'exploitation sur le terrain
- Compatible avec les logiciels tiers comme Home Assistant, OpenThread Border Router

#### Prise en charge Matter

La prise en charge de **Matter nécessite le firmware Thread** et une application hôte prenant en charge le protocole Matter. L'adaptateur Z-Station avec le firmware OpenThread est compatible avec le code source du projet CHIP.


#### Prise en charge Bluetooth basse consommation (BLE)

Le firmware BLE RCP fournit une interface série HCI. Pris en charge par **l'infrastructure Bluetooth Linux BlueZ**.

## Mise à jour du Firmware

### Z-wave

Rien de plus simple pour faire la mise à jour du firmware Z-wave, la société z-wave>me a pensé à tout et a créé un outil afin de te faciliter la tâche. Clic sur le lien ci-dessous, branche l'adaptateur {{ page.ref }} à ton pc et clic sur **start**. Sélectionne bien la bonne puce sous linux ```dev/ttyUSB0``` et en bas du résultat d'analyse tu trouveras l'onglet **update info** qui te permettras si une mise à jour est dispo de mettre à jour le firmware et le bootloader.

[Mise à jour du firmware Z-wave en ligne (controller tools)](https://z-wave.me/support/controller-tools/){: target="_blank"}

Ci-dessous une capture d'écran des possibilitées offerte par le firmware du dongle {{ page.ref }}.

{% picture posts/{{ page.guid }}/update-firmware-zwave-z-station-outil-en-ligne.png --alt Update en ligne du firmware zwave pour l'adaptateur z-station par zwave.me --img width="940" height="701" %}

### Zigbee/Matter/Thread/Ble

Pour mettre à jour le firmware zigbee la manip est un peu plus contraignante car zwave>me n'a pas développé d'outil mais ça ne saurait tarder car des outils existent déjà pour mettre à jour d'un simple clic, j'en ai déjà utilisé voir mes précédents articles. En attendant tu peux te rendre sur le lien situé ci-dessous et suivre les instructions qui sont assez simple à mettre en oeuvre.

[Mise à jour Zigbee/Matter .. Z-station zwave.me](https://z-wave.me/support/tools-for-zigbee-openthread-ble/){: target="_blank"}

#### Manip sous linux

l'information du module est lisible en tapant la commande dans linux: ```./zme_zigbee info -d /dev/ttyUSB1```

{% picture posts/{{ page.guid }}/info-app-upgrade-zigbee-z-station-zwave.me-outil.png --alt Outil d'aide pour la mise à jour du firmware zigbee/matter/thread pour l'adaptateur z-station par zwave.me --img width="821" height="631" %}

La mise à jour peut être lancée avec la commande suivante (! bien enregister le firmware dans le dossier)
```./zme_zigbee update zigbee_EFR32MG21A020F1024IM32.gbl -d /dev/ttyUSB1 -p 12```

Comme J'utilise linux au quotidien j'ai téléchargé l'outil adéquat et suivi ces infos:

#### Pour aller plus loin

Avec ces commandes tu pourras obtenir des informations sur les autres firmwares

- Pour le firmware Zigbee : ```zme_zigbee info -d /dev/ttyXX```
- Pour le firmware OpenThread : ```zme_open_thread info -d /dev/ttyXX```
- Pour le firmware BLE : ```zme_ble info -d /dev/ttyXX```

Attention ! Sous Linux et Raspberry Pi, ajoutez **./** avant la commande, par ex. ```./zme_zigbee info -d /dev/ttyUSB1```

**Attention !** Lorsque vous travaillez avec Zigbee, vous pouvez voir un message d'erreur concernant La version du **protocole 12**, qui est installé par défaut lors de l'achat. ne correspond **pas à celle requise : 13**. Dans ce cas, ajoutez -p 12 à la commande : ```zme_zigbee info -d /dev/ttyUSB1 -p 12```

Mettre à niveau le firmware
Pour mettre à niveau le firmware, procédez : ```zme_zigbee update zigbee_EFR32MG21A020F1024IM32.gbl -d /dev/ttyXX```. Utilisez uniquement les firmwares Z-Wave.Me. Utilisez zme_zigbee, zme_open_thread ou zme_ble selon le firmware que vous avez actuellement sur l'appareil.

Habituellement, il suffit d'exécuter la mise à niveau. Mais dans certains cas, vous devrez peut-être également mettre à jour le firmware SE et Bootloader.

SE : ```zme_zigbee se s2c1_se_fw_upgrade_1v2p16.zigbee.pkzme -d /dev/ttyXX```

Chargeur de démarrage : ```zme_zigbee booltloader_EFR32MG21.zigbee.pkzme -d /dev/ttyXX```

#### Commandes disponibles changements de protocoles:

- **Zigbee → OpenThread:** ```zme_zigbee update open_thread_EFR32MG21A020F1024IM32.gbl -d /dev/ttyXX```
- **Zigbee → BLE:** ```zme_zigbee update ble_EFR32MG21A020F1024IM32.gbl -d /dev/ttyXX```
- **Zigbee → CPC:** ```zme_zigbee update multiprotocol_EFR32MG21A020F1024IM32.gbl -d /dev/ttyXX```
- **OpenThread → Zigbee:** ```zme_open_thread update zigbee_EEFR32MG21A020F1024IM32.gbl -d /dev/ttyXX```
- **OpenThread → BLE:** ```zme_open_thread update ble_EFR32MG21A020F1024IM32.gbl -d /dev/ttyXX```
- **OpenThread → CPC:** ```zme_open_thread update multiprotocol_EFR32MG21A020F1024IM32.gbl -d /dev/ttyXX```
- **BLE → Zigbee:** ```zme_ble update zigbee_EFR32MG21A020F1024IM32.gbl -d /dev/ttyXX```
- **BLE → OpenThread:** ```zme_ble update open_thread_EFR32MG21A020F1024IM32.gbl -d /dev/ttyXX```
- **BLE → CPC:** ```zme_ble update multiprotocol_EFR32MG21A020F1024IM32.gbl -d /dev/ttyXX```
- **CPC → Zigbee:** ```zme_cpc update zigbee_EFR32MG21A020F1024IM32.gbl -d /dev/ttyXX```
- **CPC → OpenThread:** ```zme_cpc update open_thread_EFR32MG21A020F1024IM32.gbl -d /dev/ttyXX```
- **CPC → BLE:** ```zme_cpc update ble_EFR32MG21A020F1024IM32.gbl -d /dev/ttyXX```

{%- include alert.html type="warning" text="Attention, le CPC en mode multiprotocole n'est plus recommandé car exécuter du multiprotocole avec plusieurs réseaux actifs sur un seul adaptateur radio s'est avéré instable lors de l'utilisation simultanée des protocoles réseau Zigbee et Thread sur le même adaptateur radio, cela augmente également la complexité des dépendances des composants logiciels nécessaires, donc si vous utilisez déjà CPC, il est fortement recommandé de prévoir de migrer vers des adaptateurs radio dédiés distincts (en utilisant respectivement le micrologiciel Zigbee NCP et Thread RCP), **même si vous utilisez CPC sur un seul dongle adaptateur radio a bien fonctionné pour vous jusqu'à présent.**" %}


## Utilisation du serveur Z-way

Avant d'attaquer les diverses intégrations avec les sytèmes opensources, **sache que zwave>me a développé une plateforme indépendante** de gestions de ses dongles ( zigbee ou zwave ), elle fonctionne un peu comme zigbee2mqtt ou zwavejs UI, pour la gestion des modules, mais elle agit **aussi comme une centrale domotique indépendante**, certe pas aussi développé que home assistant ou Openhab, mais dans certains cas elle pourrait être suffisante. De plus le **serveur z-way** est intégrable dans **Home Assistant, Openhab, Mqtt, NodeRed, etc...** .Bref tout ça pour te dire que si tu le désire tu n'es pas obligé d'utiliser d'autres sources. Tu peux très bien l'installer comme serveur docker à côté de ton installation domotique.

Retrouve ci-dessous une liste de liens qui pourrait fortement t'intéresser si tu décides d'installer le serveur z-way, je ne suis pa rentré plus dans ce détail car l'article à pour but de présenter ce dongle et que j'ai préféré voir la compatibilité avec ZM, ZwaveJS UI et ZHA.
[Page principale de présentation du serveur Z-way](https://z-wave.me/z-way/){: target="_blank"}

[Installation du serveur z-way dans divers envirronnements](https://z-wave.me/z-way/download-z-way/){: target="_blank"}

[Intégration du serveur z-way sous forme de modules complémentaires dans Home assistant HAOS](https://z-wave.me/z-way/integrations/#HomeAssistant){: target="_blank"}

[Page d'aide générale sur le site zwave.me (pas mal de tutos et d'aides)](https://help.z-wave.me/){: target="_blank"}

{% picture posts/{{ page.guid }}/installation-serveur-z-way-home-assistant-5.png --alt Configuration de l'adaptateur z-station zwave.me sous forme de modules complémentaires dans home assistant HAOS --img width="940" height="742" %}

{% picture posts/{{ page.guid }}/installation-serveur-z-way-home-assistant-8.png --alt Image de présentation de la page du serveur z-way dans home assistant --img width="940" height="424" %}

## Intégration avec Z2M

{% picture posts/{{ page.guid }}/configuration-z-station-dongle-zigbee2mqtt.png --alt Configuration de l'adaptateur z-station zwave.me dans zigbee2mqtt --img width="940" height="717" %}

[Aide à l'intégration de la z-station dans Zigbee2mqtt](https://help.z-wave.me/en/knowledge_base/art/158/cat/97/connecting-the-z-station-interface-to-the-home-assistant-add-via-zigbee2mqtt){: target="_blank"}


{% picture posts/{{ page.guid }}/journal-integration-z-station-zigbee2mqtt.png --alt Journal intégration z-station zwave.me dans zigbee2mqtt --img width="940" height="688" %}

Avant de pouvoir utiliser le controlleur Zigbee avec une version >= 1.38.0 de zigbee2mqtt il faudra faire la mise à jour du firmware, suivant ta plateforme

{% picture posts/{{ page.guid }}/remontee-infos-et-fonctions-z-station-dongle-zigbe2mqtt.png --alt remontées informations et controles de l'adaptateur z-station zwave.me dans zigbee2mqtt --img width="940" height="838" %}

## Intégration dans Zha (Home Assistant )

Dans Zha l'installation se passe pour le mieux, il te suffit de choisir le bon périphérique ```dev/ttyUSB1```et de cliquer sur suivant

{% picture posts/{{ page.guid }}/integration-z-station-zwave-me-zha-home-assistant.png --alt Sélectionner le bon port série /dev/ttyUSB1 pour l'intégration zigbee de la z-station dans zha --img width="659" height="409" %}

Tu ne le vos pas sur la photo mais dans l'étape intermédiaire je suis parti sur le choix d'effacer et d'établir un nouveau réseau zigbee.

{% picture posts/{{ page.guid }}/integration-z-station-zwave-me-zha-home-assistant-succes.png --alt Succès l'intégration zigbee de la z-station zwave.me dans zha --img width="659" height="409" %}

L'appareil remonte correctement et te permet de controler 45 entités, je t'avoue que je ne les aient pas testés.

{% picture posts/{{ page.guid }}/integration-z-station-zwave-me-zha-home-assistant-appareil.png --alt intégration correcte de l'adaptateur z-station zwave.me dans zha --img width="940" height="325" %}

{% picture posts/{{ page.guid }}/integration-z-station-zwave-me-zha-home-assistant-fonctions.png --alt intégration Information de l'adaptateur z-station zwave.me dans zha et 45 fonctions supplémentaires --img width="940" height="807" %}

## Intégration avec Z-wave.js UI

Commence par faire une mise à jour du firmware Z-wave grâce à l'outil en ligne

/home/nicolas/Dépotgit/haade/assets/images/posts/131/parametrage-adaptateur-zwave-z-station-zwaveme-dans-zwavejs-ui-home-assistant.png

{% picture posts/{{ page.guid }}/parametrage-adaptateur-zwave-z-station-zwaveme-dans-zwavejs-ui-home-assistant.png --alt intégration et paramétrage de l'adaptateur z-station zwave.me dans le serveur zwavejs.ui et home assistant --img width="940" height="538" %}

{% picture posts/{{ page.guid }}/fonctionnement-dongle-z-station-zwave-dans-zwaveju-ui.png --alt remontée et fonctionnement de l'adaptateur z-station zwave.me dans le serveur zwavejs.ui et home assistant --img width="940" height="271" %}

## Intégration Jeedom (Luna)

### Zigbee (mod. zigbee2mqtt)

{% picture posts/{{ page.guid }}/integration-z-station-jeedom-plugin-z2m.png --alt integration et fonctionnement adaptateur z-station zwave.me dans jeedom avec le plugin zigbe2mqtt --img width="940" height="438" %}

### Z-wave (mod. zwavejs)

{% picture posts/{{ page.guid }}/erreur-integration-zwave-z-station-dongle-jeedom-zwavejs.png --alt Erreur integration et fonctionnement adaptateur z-station zwave.me dans jeedom avec le plugin zwavejs --img width="940" height="462" %}

## Extension 

**Fonctionnalités supplémentaires et broches d'extensions**

{% picture posts/{{ page.guid }}/Extension-zigbee-zwave-du-circuit-pin-du-dongle-z-station-zwaveme.png --alt option supplémentaire d'intégration zwave ou zigbee --img width="940" height="529" %}

Z-Station dispose de **broches d'extension supplémentaires** pour des fonctionnalités avancées telles que :

- Connecteur d'alimentation alternatif 3 Volts ou 5 Volts (en utilisant des broches 3V & GND ou 5V & GND),
- Compatible avec l'interface de traçage de paquets radio (PTI) avec le logiciel Z-Wave.Me Zniffer,
- interface UART supplémentaire (nécessite une version personnalisée firmware),
- Broches GPIO (nécessite un firmware personnalisé).

{% picture posts/{{ page.guid }}/circuit-pin-additionnel-z-station.png --alt Pin supplémentaire z-station --img width="400" height="382" %}

**Les broches de la rangée ZB** (sauf les broches 3V et GND) sont des broches de la puce **Zigbee/Thread/BLE** EFR32MG21.

**Les broches de la rangée ZW** (à l'exception des broches 5V et GND) sont des broches de la puce **Z-Wave ZGM130S**.

Z-Station peut également fonctionner avec le [firmware Z-Uno](https://z-uno.z-wave.me){: target="_blank"} et piloter des broches GPIO.

**Les + du produit:**{: .blue}
- Module de qualité
- Produit Européen (Suisse)
- compatible opensource (Jeedom, Openhab, Z2M, ZwaveJS)
- intégrable à Home Assistant de diverses façons
- Multiprotocoles (Zigbee, Thread, Matter, Z-wave, BLE)
- 

**Les - du produit:**{: .red}
- contacteur contact sec particulié
- le prix ([126€ env chez notre partenaire Domadoo](https://www.domadoo.fr/fr/box-domotique/7154-z-waveme-adaptateur-usb-pour-z-wave-zigbeethreadble-z-station-4673724090181.html?domid=39){: target="_blank"})

## Conclusion