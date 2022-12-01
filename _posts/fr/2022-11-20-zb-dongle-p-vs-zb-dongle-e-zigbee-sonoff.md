---
guid: 30
title: "ZBDongle-P VS ZBDongle-E"
description: "Comparatif des clés zigbee sonoff dongle-p et dongle-e quel SOC choisir pour l'avenir de la gestion du protocole"
layout: post
author: Nico
image: 'dongle-p-vs-dongle-e-zigbee-sonoff.png'
date: 2022-11-20 17:20
last_modified_at: 
categories: [Haade-lab, Zigbee]
tags: []
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
  - https://www.reddit.com/r/homeassistant/comments/x9kkh1/zigbee_matter_hub_cc2652p_vs_efr32mg21_vs_cc2531/
  - https://sonoff.tech/
  - https://www.silabs.com/wireless/zigbee/efr32mg21-series-2-socs
  - https://www.ti.com/product/CC2652P#features
  - https://www.zigbee2mqtt.io/guide/adapters/
---

 Aujourd'hui nous allons  comparer deux clés  ZigBee de la marque sonoff la ZBDongle-P et la ZBDongle-E. La ZBDongle-P dispose d'un processeur CC2652P, qui a été longuement éprouvé et fonctionne sur l'ensemble des plateformes domotique. quand a la clé ZBDongle-E dispose d'un processeur EFR32MG21, celle-ci est beaucoup plus récente mais semble être l'avenir des processeurs des clés Zigbee 3.0, vu sa récente introduction il faudra faire attention à ce qu'elle soit bien compatible avec les plateformes domotiques actuelles. Par exemple avec le service zigbee2mqtt celle-ci est à utiliser avec précaution car encore expérimental, voir le lien dans le tableau ci-dessous. **La principale différence réside dans la puissance du signal la clé ZBDongle-P a un signal initiales de 5 dbm et peut aller jusqu'à 20 Dbm max, alors que la ZBDongle-E a un signal avoisinant les 20 décibels maximum.** La Seconde différence se trouve au niveau des dimensions la ZBDongle-P mesure 66mm tandis que la ZBDongle-E mesure 11 mm de moins. Les mises à jours du firmware fonctionnent de façon identique sur les deux clés.

## Présentation CC2652P clé ZBDongle-P

{% include product-embed.html image="https://ae01.alicdn.com/kf/S90bbc8d67fea433b9049a0df5f455f48c/1-10PCS-SONOFF-ZB-Dongle-Plus-USB-Zigbee3-0-Passerelle-Analyseur-Zigbee-2MQTT-Interface-Capture-Avec.jpg_Q90.jpg_.webp" title="Sonoff zbdongle-p cc2652p" brand="Sonoff" description="Le dongle USB SONOFF Zigbee 3.0 est une clé USB Zigbee universelle." affiliate="_DEQcEe7" %}

L'appareil SimpleLink™CC2652P est un microcontrôleur sans fil (MCU) multiprotocole de 2,4 GHz prenant en charge **Thread , Zigbee , Bluetooth 5.2 Low Energy** , IEEE 802.15.4, les objets intelligents compatibles IPv6 (6LoWPAN), les systèmes propriétaires, y compris le TI 15.4-Stack (2.4 GHz) et multiprotocole simultané via un pilote Dynamic Multiprotocol Manager (DMM). L'appareil est optimisé pour la communication sans fil à faible puissance et la détection avancée dans les systèmes de sécurité des bâtiments, CVC, médical, réseau câblé, électronique portable, home cinéma et divertissement, et marchés des périphériques connectés. 

### Spécification CC2652P

#### Microcontrôleur
- Puissant processeur Arm Cortex-M4F de 48 MHz
- Note EEMBC CoreMark : 148
- 352 Ko de flash programmable intégré au système
- 256 Ko de ROM pour les protocoles et les fonctions de bibliothèque
- 8 Ko de mémoire cache SRAM (également disponible en tant que RAM à usage général)
- 80 Ko de SRAM à très faible fuite. La SRAM est protégée par parité pour assurer une grande fiabilité de fonctionnement.
- Débogage cJTAG et JTAG à 2 broches
- Prend en charge la mise à jour en direct (OTA).

#### Contrôleur de capteur ultra-basse consommation avec 4 Ko de SRAM
- Échantillonner, stocker et traiter les données des capteurs
- Fonctionnement indépendant du CPU du système
- Réveil rapide pour un fonctionnement à faible consommation
- TI-RTOS, pilotes, bootloader, contrôleur basse consommation Bluetooth 5.2 et IEEE 802.15.4 MAC en ROM pour une taille d'application optimisée
  
#### Taille Soc
7 mm × 7 mm RGZ VQFN48 (26 GPIO)

## Présentation EFR32MG21 Clé ZBDongle-E

{% include product-embed.html guid="2128" %}

Les appareils EFR32MG21 apportent des solutions hautes performances, basse consommation et sécurisées à l'IoT. Conçus pour augmenter la capacité de traitement, améliorer les performances RF et réduire le courant actif, les dispositifs EFR32MG21 sont des SoC sans fil 2,4 GHz optimisés pour les applications de maillage **Zigbee, Thread et Bluetooth** alimentées par la ligne, y compris l'éclairage connecté, les passerelles, les assistants vocaux et les compteurs intelligents.

La famille de SoC EFR32MG21 comprend un sous-système de sécurité intégré et des dispositifs qui peuvent tirer parti des technologies Secure Vault. Secure Vault fournit des fonctionnalités logicielles de sécurité de pointe avec une technologie matérielle à fonction physique non clonable (PUF) pour réduire considérablement le risque de failles de sécurité IoT et de compromission de la propriété intellectuelle

Avec une sensibilité supérieure à -104 dBm pour 802.15.4 et Bluetooth longue portée et une puissance de sortie jusqu'à +20 dBm, l'EFR32MG21 fournit une liaison RF robuste pour assurer des communications fiables. EFR32MG21 utilise les outils de développement Simplicity Studio 5, offrant une migration facile et une mise sur le marché rapide avec des kits de développement, des SDK, des applications mobiles et notre analyseur de réseau breveté.

### Spécification EFR32MG21

#### Radio Zigbee et Thread
- 2,4 GHz IEEE 802.15.4
- 250 kbps O-QPSK DSSS
- Excellente sensibilité de réception :
  - 104,5 dBm à 250 kbps O-QPSK DSSS
- Puissance de sortie programmable : +20 dBm
- Réception en mode actif : 9,4 mA
- Émission en mode actif : 9,3 mA à 0 dBm
- Émission en mode actif : 33,8 mA à 10 dBm
  
#### Radio basse consommation Bluetooth®
- Compatible avec les spécifications Bluetooth 5, Bluetooth 5.1 et Bluetooth Mesh
- Excellente sensibilité de réception :
  - 104,9 dBm à 125 kbps GFSK
  - 97,5 dBm à 1 Mbit/s GFSK
  - 94,4 dBm à 2 Mbit/s GFSK
- Puissance de sortie programmable : jusqu'à +20 dBm
- Réception en mode actif : 8,8 mA
- Émission en mode actif : 9,3 mA à 0 dBm
- Émission en mode actif : 33,8 mA à 10 dBm

#### Options de MCU et de mémoire puissantes
- ARM® Cortex®-M33
  - DSP et unité à virgule flottante
- Vitesse d'horloge jusqu'à 80 MHz
- Courant de mode actif faible : 50,9 μA/MHz
- Jusqu'à 1024 ko de flash programmable
- Jusqu'à 96 Ko de RAM
  
#### Taille Soc
- QFN32 (4 mm x 4 mm)



## Comparatif ZBDongle-P VS ZBDongle-E

||ZBDongle-P|ZBDongle-E|
||:--------:|:--------:|
|**Soc**|CC2652P|EFR32MG21|
|**Processeur**|Cortex-M4F|Cortex-M33|
|**Memoire Flash**|352Kb|**1000kb**{: .blue }|
|**Ram**|80kb|**96kb**{: .blue }|
|**Interface Protocole**|Z-Stack(ZNP)|EmberZNet(EZSP)|
|**Compatible**|Zigbee, Thread, Bluetooth|Zigbee, Thread, Bluetooth|
|**Usb serie Soc**|CP2102(N)|CH9102F|
|**ID**|Dongle Plus|Dongle Plus V2|
|**Contrôle de flux**|Hardware|Software|
|**Dimensions**|63mm|**52mm**{: .blue }|
|**Puissance du signal**|De 5 à 20dbm max|**+/-20dbm max**{: .blue }|
|**ZHA Home Assistant**|[Supporté](https://www.home-assistant.io/integrations/zha/){:target="_blank"}|[Supporté](https://www.home-assistant.io/integrations/zha/){:target="_blank"}|
|**Zigbee2mqtt**|[Supporté](https://www.zigbee2mqtt.io/guide/adapters/#recommended){:target="_blank"}|[**Expérimental**{: .red}](https://www.zigbee2mqtt.io/guide/adapters/#not-recommended){:target="_blank"}|
|**Openhab**|**Non Supporté**{: .red }|Supporté|
|**Jeedom**|Supporté|Supporté|
|**Iobroker**|Supporté|Supporté|
|**Domoticz**|Supporté|Supporté|

## Différence entre les Soc:

**EFR32MG21 est plus puissant que CC2652P**{: .red} pour les appareils Zigbee.
Le CPU de l'EFR est un ARM Cortex-M33 qui fonctionne à 80Mhz avec 1Mb de flash et 96Kb de RAM, c'est une évolution de l'ancien M4F.
À l'intérieur du CC2652P qui fonctionne à 48MHz, n'a que 300Kb de flash et 8Kb de RAM+256Kb de ROM.

{% picture posts/{{ page.guid }}/cortex-M4-M33-EFR32MG21-Zigbee.png --alt processeur EFR32MG21 --img width="768" height="622" %}

> Vous pouvez voir dans ce test video, que la puissance et la qualité du lien sont bien meilleures avec les nouveaux dongles Zigbee incluant le Soc EFR32MG21.

{% include youtubePlayer.html id="iaP6Cu3XrLU" %}

## Compatibilité avec Matter

Notez que Zigbee n'est pas directement compatible avec Matter. Au lieu de cela, Matter utilise une norme radio "de type Zigbee" appelée Thread, qui ajoute un adressage IP au maillage. Je suis à peu près sûr que le dongle cc2652 peut être configuré en tant que coordinateur Zigbee ou en tant que routeur de bordure de thread, selon le micrologiciel/logiciel que vous installez, **mais il ne peut faire les deux en même temps car les puces CC2652P et EFR32MG21, ne sont pas multi-thread,** vous en aurez donc probablement besoin de deux : un pour vos appareils Zigbee et un pour vos appareils Thread.
Cependant Silicon Labs a sorti un nouveau Soc [EFR32MG24](https://www.silabs.com/wireless/zigbee/efr32mg24-series-2-socs){:target="_blank"} celui-ci est compatible **Zigbee, Matter et Multithread**{: .red}, il y a aussi des nouveautées du côté de Texas instrument qui a sorti une puce [CC2652P7](https://www.ti.com/product/CC2652P7){:target="_blank"} elle aussi compatible avec **Zigbee, Matter et Miltithread**{: .red}.

## Firmware flashing

Le dongle USB Plus Zigbee 3.0 est livré pré-flashé avec le micrologiciel du coordinateur, mais si vous souhaitez mettre à jour, modifier le micrologiciel du routeur et ajouter au dongle ou générer le micrologiciel qui prend en charge le contrôle de flux matériel, veuillez lire le document suivant.

Flashage du micrologiciel ZBDongle-P (CC2652P) et ZBDongle-E (EFR32MG21)
Activer le contrôle de flux matériel et générer le micrologiciel correspondant

### Selon Sonoff

{% include doclink.html pdf="Dongle-P+E-flashing-sonoff.pdf" title="Flash firmware ZBDongle-P et E selon Sonoff" %}

### Ma solution cc-2538 par jelmerT pour CC2652P
> j'ai retenu cette solution car il n'est pas obligatoire d'ouvrir le dongle !

{% highlight shell %}
sudo python3 cc2538-bsl.py --bootloader-sonoff-usb -e -w -v --ieee-address 00:00:00:00:00:00:00:00 -p /dev/ttyUSB0 ./CC1352P2_CC2652P_launchpad_coordinator_20220219.hex

--bootloader-sonoff-usb # permet de mettre en mode bsl automatiquement
-e # efface
-w # écris
-v # verifie
--ieee-address # adresse mac secondaire idéal pour le changement de clé dans son réseau
-p # le port, ps: l'accès au port nécessite sudo sous linux

# pour trouver toutes les commandes:
python3 cc2538-bsl.py -h
{% endhighlight %}

Je voulais rédiger un tuto mais il existe ce tuto simple sur le site de Zigbee2mqtt: [zigbee2mqtt.io flash cc2652P avec un terminal](https://www.zigbee2mqtt.io/guide/adapters/flashing/flashing_via_cc2538-bsl.html#method-without-docker){:target="_blank"} 


## Tutoriel de configuration de la puissance de transmission ZBDongle-P

**Réglage de 5 à 20db par défaut**
Ci-dessous un document rédigé par Sonoff plutôt bien fait.

{% include doclink.html pdf="Configure-ZBDongle-P-puissance-transmission-signal.pdf" title="configurer la puissance du signal sur ZBDongle-P" %}

> À savoir que le firmware fourni par Zigbee2mqtt est déjà paramétré sur 20dbm [Zigbee2mqtt z-stack firmware](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_3.x.0/bin){:target="_blank"}

## CONCLUSION

le ZBDongle-P équipé de la puce TI CC2652-P est au point et fonctionne avec tous les softs du moment cependant il semble tomber aux oubliettes, il n'y a qu'à voir le nombre de produits en vente sur Aliexpress il n'y en a que pour la version E, en effet celle-ci semble être la nouvelle norme Zigbee en effet le processeur est plus petit et les performance sont au dessus à tous les niveaux, du fait de sa jeunesse elle est encore en phase de test mais celà semble toucher à sa fin. 
> ***Si tu as une puce CC2652P je ne pense pas qu'il faille se dépêcher d'en changer pour une EFR32MG21 surtout si ton maillage est solide. Je pense que les constructeurs vont bientôt sortir des clés à base de S-labs EFR32MG24 qui elle est compatible Multithread ce qui veut tout simplement dire:*** **Zigbee et Matter en même temps.**



