---
guid: 136
title: "Découverte des commutateurs Shelly Wave 1PM et mini"
description: "Je vais tester et les commutateurs z-wave 800 shelly Wave 1PM et Wave 1PM mini et mettre en place des règles d'associations pour une communication en direct"
ref: "Shelly"
layout: post
authors: [Nico]
date: 2024-07-20 09:30
last_modified_at: 
categories: [Tests, Haade-lab, Z-wave]
tags: []
video: 
image: 'decouverte-shelly-z-wave-1-PM-et-1-PM-Mini.png'
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
rating: 5.0
sourcelink:
  - https://support.shelly.cloud/en/support/solutions/articles/103000258471-shelly-qubino-wave-firmware-updates
  - https://github.com/QubinoHelp/Shelly_Wave_FW_OTA
  - https://www.support.getzooz.com/kb/article/1158-zooz-ota-firmware-files/
---

Découverte des modules Z-wave 800 Shelly wave 1 PM et 1 PM mini, quelles sont leurs particularités, et leurs différences. Sont-ils à la hauteur pour le tarif et surtout quelles options sont proposées pour ces modules z-wave ?

{%- include alert.html type="warning" text="Affaire à faire, du 24 au 29 Juillet 2024 Pour son Anniversaire, Shelly propose une offre imbattable pour <b>1 module Z-wave acheté sur leur site 1 module offert</b>" link="https://www.shelly.com/fr/products/shelly-birthday" textlink="1 module z-wave acheté = 1 module offert" %}

## Prérequis

- Une box Open source (jeedom, Home Assistant) avec serveur ZwaveJS UI
- Ou **simplement** un serveur ZwaveJS UI
- une clé [z-wave 800 du type Zooz ZST39](https://www.domadoo.fr/fr/box-domotique/7041-zooz-controleur-usb-z-wave-800-853478006391.html?domid=39){: target="_blank"}
- un commutateur Shelly Wave 1PM ou 1PM Mini

{%- include alert.html type="info" text="Haade.fr participe au programme d'associés d'Amazon Services LLC, un programme de publicité d'affiliation conçu pour fournir un moyen de gagner des frais lors de la création de liens vers Amazon.com et des sites affiliés." %}

## Mise à jour du firmware de la clé Zooz procédure

Après l'intégration du module dans ton système il sera important de faire la mise à jour des modules Z-wave y compris de la clé Z-wave. Rappellons que le z-wave 800 est récent, les micromodules aussi, il est donc important de faire ces mises à jours, surtout pour la clé Zooz car le SDK z-wave 7.19.3 rencontre des soucis.

{%- include alert.html type="info" text="Tous les modules Zooz et Shelly Wave sont compatibles avec les intégrations Z-waveJS et Z-waveJS UI donc compatible avec Home Assistant , Jeedom, etc..." %}

{% include product-embed.html guid="2201" %}

**Concerne la clé Zooz ZST39:** N'effectuez PAS de sauvegarde NVM à partir de clés Z-Wave série 500 ou série 700 pour cet appareil. Cette fonctionnalité est actuellement prise en charge pour les appareils dotés du **firmware 1.30** ou supérieur, sinon si vous utilisez la version 1.20 ou inférieure, NVM bloquera le produit. [Veuillez lire cet article](https://www.support.getzooz.com/kb/article/1276-how-to-perform-an-otw-firmware-update-on-your-zst39-800-long-range-z-wave-stick/){: target="_blank"} **avant de tenter une mise à jour du firmware sur votre clé Z-Wave**. Si vous avez acheté votre **clé Z-Wave en juin 2024 ou après**, elle dispose normalement de la dernière version, alors n'essayez pas de mise à jour.

[Page de l'ensemble des firmwares Zooz](https://www.support.getzooz.com/kb/article/1158-zooz-ota-firmware-files/){: target="_blank"}
[Firmware 1.3 Zooz ZST39 EU](https://www.getzooz.com/firmware/ZST39_SDK_7.21.3_EU_V01R30.zip){: target="_blank"}

### Dans ZwaveJS

La mise à jour vers le dernier firmware Zooz peut se faire dans l'intégration ZwaveJS mais pas dans la bibliothèque Z-waveJS UI. Dans ton assistant open source préféré pour

[Z-waveJS](https://zwave-js.github.io/node-zwave-js/#/){: target="_blank"}

Z-wave JS est une intégration du z-wave qui permet de contrôler totalement le protocole z-wave dans un assistant opensource
Le plugin z-waveJS est disponible sur la plupart des infrastructures opensource du marché:
Le module Jeedom intègre directement ZwaveJS et l bibliothèque Z-waveJS UI
[Jeedom](https://market.jeedom.com/index.php?v=d&p=market&type=plugin&&name=z-wave){: target="_blank"}

Dans Home assistant seul z-waveJS apparaîtra comme controlleur en tant qu'appareil, il faudra installer le module complémentaire z-waveJS UI si tu veux installer la bibliothèque complète ( fortement recommandé ).
[Home Assistant](https://www.home-assistant.io/integrations/zwave_js/){: target="_blank"}

### Dans ZwaveJS UI

[Z-waveJS UI](https://zwave-js.github.io/zwave-js-ui/#/){: target="_blank"}

**À savoir:** Z-wave JS UI est une bibliothèque complète z-wave qui fonctionne avec le module Z-waveJS, en aucun cas elle ne te permettra de controller le protocole pour celà il faudra installer en parallèle le module z-wave.

## Inclusion des modules Z-wave 800

### De façon traditionnelle

Les modules peuvent être inclus de deux façons différentes. La première la plus ancienne il suffit au moment venu de cliquer sur le bouton S.
**Pour shelly:**
- Appui 1 seconde sur le bouton
- Appui 2 secondes jusqu'à ce que le voyant bleu reste fixe
- Appui 2 secondes jusqu'à ce que le bouton bleu clignote

Et là tu passeras en mode inclusion/exclusion.

La seconde solution est d'inclure le shelly wave via l'interrupteur physique connecté au module après une installation murale.

Les modules z-wave 800 sont munis d'une sécurité optimum de type S2, ils  peuvent être inclus de façons traditionnelles ( par bouton d'inclusion spécifique au module ou via un interrupteur connecté aux modules ) mais en plus il faudra mettre une clé pin lors du processus d'inclusion.

> Alors quand tu as l'habitude d'intégrer des modules z-wave tu ne trouveras pas la manip très compliquée mais ce n'est pas le cas pour les novices.

### Avec Smartstart (New)

C'est dans ce but que la z-wave alliance a créé **Smartstart**. Smartstart a été créé pour simplifier grandement l'intégration d'un module z-wave 800 et ne pas faire fuire les futurs pocesseurs de modules z-wave.

![Inclusion d'un module z-wave 800 avec smartstart tellement plus simple.]({{ site.baseurl}}/assets/images/posts/{{ page.guid }}/z-wave-smartstart-smartphone-connect.webp{{ cachebuster }}){: width="460" height="905" class="lazyload pictaninpost"}

Tu pourras à l'aide de ton smartphone et de ton gestionnaire z-wave intégrer un module en scannant le qrcode fournis avec le module. Ensuite il te suffira simplement d'alimenter le module et il sera directement inclus en **sécurité S2** dans ton réseau.

> Plus simple tu meurs.

![Comparison of temperature and humidity reading Sonoff SNZB-02D, SNZB-02P and Aqara VOCKQJK11LM]({{ site.baseurl}}/assets/images/posts/{{ page.guid }}/inclusion-bouton-s-shelly-wave-1-pm-mini-avec-zwaveJSUI-et-home-assistant.webp{{ cachebuster }}){: width="940" height="506" class="lazyload pictaninpost"}

## Shelly Wave 1 PM

Le Shelly wave 1 PM est aux dimensions standard de la marque Shelly Plus, le tarif affiché est quant à lui inférieur à 30€, c'est une très bonne nouvelle pour un module compatible Z-wave 800

Au déballage pas de soucis Négatif, tout est bien fait tu trouveras à l'intérieur:
- Le module wave 1 PM
- la notice complète d'utilisation
- L'autocollant avec code Pin sécurité S2

{% picture posts/{{ page.guid }}/deballage-shelly-wave-1-PM-contacteur.png --alt Déballage unboxing du commutateur z-wave shelly wave 1 PM --img width="940" height="529" %}

{% include product-embed.html image="micromodule-commutateur-z-wave-800-shelly-wave-1pm-shelly-qubino.png" title="Wave 1 PM" brand="Shelly" description="Contrôlez et mesurez la consommation électrique d'une large gamme d'appareils électroménagers et d'équipements de bureau (lumières, lignes électriques, systèmes de sécurité, radiateurs, chauffe-eau, etc.) de n'importe où." domlink="actionneurs-variateurs/6747-micromodule-commutateur-z-wave-800-shelly-wave-1pm-shelly-qubino.html" amazlink="3SeYrzl" %}

Quelques photos supplémentaires du Shelly Wave 1 PM, tu pourras te rendre compte de la taille ainsi que de l'autocollant situé sur le côté reprenant toutes les infos de sécurité afin de pouvoir l'intégrer grâce au code PIN dans ton assistant préféré.

{% picture posts/{{ page.guid }}/presentation-shelly-wave-1-PM-contacteur.png --alt Présentation du commutateur z-wave shelly wave 1 PM --img width="940" height="529" %}

### Notices d'utilisations

[Notice en ligne Shelly Wave 1 PM](https://kb.shelly.cloud/knowledge-base/wave-1pm){: target="_blank"}

{% include doclink.html pdf="Wave_1PM_mini_user_guide_multilang_V3.pdf" title="Guide utilisateur V3 shelly wave 1 PM" %}

### Caractéristique technique

|Alimentation électriqu|110-240 V AC / 24–30 V DC|
|Consommation électrique|< 0,3 W|
|Compteur électrique (W)|Oui|
|Tension de commutation AC max|240 V|
|Courant de commutation AC max|16 A|
|Tension de commutation DC max|30 V|
|Courant de commutation DC max|10 A|
|Puissance de sortie Max|2400 W|
|Protection contre la surchauffe|Oui|
|Protection contre les surcharges|Oui|
|Portée|Jusqu'à 40 m à l'intérieur (131 ft) (en fonction des conditions locales)|
|Répéteur Z-Wave™|Oui|
|CPU|Z-Wave™ S800|
|Bandes de fréquences|Z-Wave™	868,4 MHz - 865,2 MHz - 869,0 MHz - 921,4 MHz - 908,4 MHz - 916 MHz - 919,8 MHz - 922,5 MHz - 919,7-921,7-923,7 MHz - 868,1 MHz - 920,9 MHz|
|Puissance radioélectrique max|transmise dans la (les) bande(s) de fréquences	< 25 mW|
|Dimensions|37 x 42 x 16 mm ±0,5 mm / 1.46 x 1.65 x 0.63 in ±0.02 in|
|Poids|27 g / 0.95 oz.|
|Montage|Tableau électrique, boîte d'encastrement|
|Serrage max|des dominos électriques	0,4 Nm / 3.5 lbin|
|Diamètre du câble|0,5 à 1,5 mm² / 20 à 16 AWG|
|Longueur dénudée du câble|5 à 6 mm / 0.20 à 0.24 in|
|Matériau du boîtier|Plastique|
|Couleur|Rouge|
|Température ambiante|-20 °C à 40 °C / -5 °F à 105 °F|
|Humidité|30 % à 70 %|
|Altitude max|2000 m / 6562 ft|

### Mise à jour du firmware

Contrairement à la clé la mise à jour d'un module z-wave peut se faire soit dans z-waveJS comme pour le controlleur z-wave ou dans Z-waveJU UI et comme une image vaut mieux que milles mots, j'ai pris ci-dessous une capture d'écran format Gif animé, suis le process et ton module sera mis à jour.

#### Firmware Shelly wave 1 PM

À l'heure ou j'écris cet article la dernière mise à jour du firmware est la version 11.10 en date du **[2024-03-28]** avec comme correctif:

- Appareil fixe ne fonctionnant pas avec l'alimentation CC
- Correction de la signalisation OTA
- Tableau de conversion de température optimisé
- Autres améliorations mineures

[récupération du firmware Shelly Wave 1 PM](https://support.shelly.cloud/en/support/solutions/articles/103000258471-shelly-qubino-wave-firmware-updates#Shelly-Qubino-Wave-1PM){: target="_blank"}

[Liens du téléchargement direct du Firmware .gbl 11.10 version EU](https://github.com/QubinoHelp/Shelly_Wave_FW_OTA/raw/f7119fcb03bce348d3f47871485a1441439d536f/Wave_1PM/EU/Wave_1PM_800_EU_20240328_1238_QNSW-001P16EU_%5Bv11.10%5D_EB201890.gbl){: target="_blank"}

### Bonus supplémentaire

Comme il s'agit d'une série PLUS, tu pourras l'intégrer avec le kit Shelly WS1 qui n'est autre qu'un interrupteur compatible avec divers modules de la marque mais pas pour les Mini.

{% picture posts/{{ page.guid }}/bonus-implantation-shelly-wave-1-PM-avec-interrupteur-shelly-wall-switch-ws1-option-plus-serie-contacteur-et-interrupteur.png --alt Bonus integration du commutateur z-wave shelly wave 1 PM avec l'interrupteur Shelly 1WS --img width="940" height="529" %}

Il faudra faire une petite découpe dans le module plus pour pouvoir y intégrer l'antenne du Z-wave.

> Rien de bien compliqué.

### Installation du Shelly Z-wave 1 PM

{% include videoPlayer.html youtubeId="r4owWoakqzQ" %}

## Shelly Wave 1 PM Mini

{% picture posts/{{ page.guid }}/deballage-shelly-wave-1-PM-mini-contacteur.png --alt Déballage unboxing du commutateur z-wave shelly wave 1 PM mini --img width="940" height="529" %}

{% include product-embed.html image="shelly-qubino-micromodule-commutateur-z-wave-800-shelly-wave-1pm-m.png" title="Wave 1 PM Mini" brand="Shelly" description="<b>Le plus petit commutateur intelligent Z-Wave au monde</b> pour un contrôle intelligent. Automatisez et contrôlez à distance vos luminaires ou une large gamme de petits appareils électriques et mesurez leur consommation électrique." domlink="actionneurs-variateurs/7172-shelly-qubino-micromodule-commutateur-z-wave-800-shelly-wave-1pm-m-3800235269145.html" amazlink="4bRr2Sd" %}

{% picture posts/{{ page.guid }}/presentation-shelly-wave-1-PM-mini-contacteur.png --alt Présentation du commutateur z-wave shelly wave 1 PM Mini --img width="940" height="529" %}

{% picture posts/{{ page.guid }}/shelly-wave-1-PM-mini-le-plus-petit-module-z-wave-du-marche.png --alt Comparatif du commutateur z-wave shelly wave 1 PM Mini et Sonoff Zbmini extrême --img width="940" height="529" %}

### Notices Techniques

[Notice en ligne Shelly Wave 1 PM Mini](https://kb.shelly.cloud/knowledge-base/wave-1pm-mini){: target="_blank"}

{% include doclink.html pdf="Wave_1PM_Mini_mini_user_guide_multilang_V3.pdf" title="Guide utilisateur V3 shelly wave 1 PM Mini" %}

### Caractéristique Technique

|Alimentation électrique|110-240 V AC, 50/60 Hz|
|Consommation électrique|< 0.3 W|
|Mesure de la puissance (W)|Oui|
|Tension de commutation maximale AC|240 V|
|Courant de commutation max AC|8 A|
|Puissance de commutation max AC|1940 W|
|Protection contre la surchauffe|Oui|
|Protection contre les surcharges|Oui|
|Distance|Jusqu'à 40 m à l'intérieur (131 ft.) (en fonction des conditions locales)|
|Répéteur Z-Wave®|Oui|
|CPU|Z-Wave® S800|
|Bandes de fréquences de Z-Wave®|868,4 MHz|
|Puissance max. de la radiofréquence transmise dans la (les) bande(s) de fréquences|< 25 mW|
|Dimensions (H x L x P)|29 x 35 x 16 ±0.5 mm / 1.11 x 1.35 x 0.63 ± 0.02 in|
|Poids|18 ±1 g / 0.63 ±0.04 oz|
|Montage|Console murale|
|Serrage max. des dominos électriques|0.4 Nm/3.54 lbin|
|Section transversale du conducteur|De 0,5 à 1,5 mm²/de 20 à 16 AWG|
|Longueur dénudée du conducteur|De 5 à 6 mm/de 0,20 à 0,24 po|
|Matériau du boîtier|Plastique|
|Couleur|Rouge|
|Température ambiante|de -20 °C à 40 °C/de -5 °F à 105 °F|
|Humidité|30% à 70% RH|
|Altitude maximale|2000 m / 6562 ft.|

### Mise à jour du firmware

Si tu as un doute reprend l'étape de la mise à jour du firmware pour le Shelly wave 1PM ci-dessus.

#### Firmware Shelly wave 1 PM Mini

À l'heure ou j'écris cet article la dernière mise à jour du firmware est la version 11.03 en date du [2024-03-29] avec comme correctif:

- table de conversion de température optimisée
- autres améliorations mineures

[récupération du firmware Shelly Wave 1 PM Mini](https://support.shelly.cloud/en/support/solutions/articles/103000258471-shelly-qubino-wave-firmware-updates#Shelly-Qubino-Wave-1PM-Mini){: target="_blank"}

[Liens du téléchargement direct du Firmware .gbl 11.03 version EU](https://github.com/QubinoHelp/Shelly_Wave_FW_OTA/raw/8927d1afb0409a1b741e472c7b513befbb2203a9/Wave_1PM_Mini/EU/Wave_Mini_1PM_800_EU_20240403_1310_QMSW-0A1P8EU_%5Bv11.03%5D_9DD2F96C.gbl){: target="_blank"}

### Installation du Shelly Z-wave 1 PM Mini

{% include videoPlayer.html youtubeId="0HsCaq6V3l8" %}

## Comparatif Shelly wave 1 PM et 1 PM mini

{% picture posts/{{ page.guid }}/comparatif-shelly-wave-1-PM-contacteur-et-wave-1-PM-mini.png --alt Comparatif des commutateurs z-wave shelly wave 1 PM et 1 PM Mini --img width="940" height="529" %}

{% picture posts/{{ page.guid }}/branchement-shelly-wave-1-PM.-et-wave-1-PM-Mini.png --alt Schéma de branchement des commutateurs z-wave shelly wave 1 PM et 1 PM Mini --img width="940" height="529" %}

{%- include alert.html type="info" text="Haade.fr participe au programme d'associés d'Amazon Services LLC, un programme de publicité d'affiliation conçu pour fournir un moyen de gagner des frais lors de la création de liens vers Amazon.com et des sites affiliés." %}

## Associations des modules Shelly

### Shelly wave 1 PM

**Groupe 1:** 
Groupe Lifeline réservé à l'association au coordinateur
- INDICATOR_REPORT : état des LED
- DEVICE_RESET_LOCALLY_NOTIFICATION : déclenché sur demande
- SWITCH_BINARY_REPORT : rapport de changement d'état de la sortie O (O1)
- NOTIFICATION_REPORT : déclenché sur surchauffe
- METER_REPORT : déclenché par la consommation électrique de la charge (selon le réglage des paramètres n° 36 à 43)

**Groupe 2:**
- Nœuds autorisés: 9
- Il est affecté au commutateur connecté au terminal SW (SW1) (utilise la classe de commande Basic).
Déclenché par SW (SW1). L'appareil envoie selon l'état du SW (SW1) (interrupteur ou bouton-poussoir) la commande BASIC_SET ON ou BASIC_SET OFF à l'appareil associé. Cette commande est reflétée dans la sortie du périphérique associé. Prend en charge les classes de commandes suivantes :
- BASIC_SET : définir l'état On / Off sur l'appareil associé

**Groupe 3:**
- Nœuds autorisés : 9
- Il est affecté au commutateur connecté au terminal SW (SW1) (utilise la classe de commande de démarrage/arrêt à plusieurs niveaux).
Déclenché par SW (SW1).
- L'appareil envoie selon l'état du SW (SW1) (interrupteur ou bouton-poussoir) la commande SWITCH_MULTILEVEL_START_LEVEL_CHANGE ou SWITCH_MULTILEVEL_STOP_LEVEL_CHANGE à l'appareil associé. 
  
**Prend en charge les classes de commandes suivantes:**
- SWITCH_MULTILEVEL_START_LEVEL_CHANGE : initier une transition vers un nouveau niveau
- SWITCH_MULTILEVEL_STOP_LEVEL_CHANGE : arrêter une transition en cours

## Conclusion
