---
guid: 52
title: "Test du module sonoff Nspanel Pro V1.5.4"
description: "déballage, test et installation sur homeassistant du module sonoff nspanel pro sans flasher le système"
layout: post
author: Nico
date: 2023-03-10 15:50
last_modified_at: 
categories: [Haade-lab, Zigbee, Tests]
tags: []
image: 'test-sonoff-nspanel-pro-v154-plus-support.png'
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
rating: 3.5
sourcelink:
  - https://itead.cc/product/sonoff-nspanel-pro-smart-home-control-panel/ref/122/
  - https://blakadder.com/nspanel-pro/
---

Aujourd'hui et grâce à Itead qui nous a fourni le module Nspanel pro ainsi que [son support](https://itead.cc/product/enclosure-stand/ref/122/){: target="_blank" }, je vais pouvoir tester cette fameuse centrale de contrôle domotique et vous donner mon avis sur ce module. Est-ce le module à posséder pour avoir un accès Waf, le module est-il au point ? telles sont les questions que je me pose actuellement.

{% include product-embed.html image="https://i0.wp.com/itead.cc/wp-content/uploads/2022/07/NSPanel-P_preorder_dim_gray.jpg?fit=1000%2C1000&ssl=1" title="Controleur Sonoff Nspanel Pro" brand="Sonoff" description="Controleur Sonoff Nspanel Pro avec zigbee 3.0 et wifi intégré" affiliate="_Dd5b51x" iteadlink="sonoff-nspanel-pro-smart-home-control-panel" %}

Sonoff propose à la vente depuis quelques temps ce module qui vient parfaire la série Nspanel, cette version pro intègre désormais un contrôleur Zigbee en plus du wifi et de l'écran tactile. Les deux boutons de contrôle de lumière ne sont plus présents, cependant l'écran tactile est plus grand et est équipé de deux capteurs de luminosité.

{% include product-embed.html image="https://i0.wp.com/itead.cc/wp-content/uploads/2022/08/Stand_1000x1000px_01.jpg?fit=1000%2C1000&ssl=1" title="Boitier pour Controleur Nspanel" brand="Sonoff" description="Boitier pour Controleur Sonoff Nspanel Pro, Nspanel en version eu ou us"  iteadlink="enclosure-stand" %}

# Déballage

Je vous passe les étapes des consommables ( pochettes et mousses ), en bref le module sonoff Nspanel pro est très bien emballé similaire au Nspanel d'ailleurs, il est livré avec une notice sommaire et un jeu de visses. Le support est aussi livré avec deux visses.

{% picture posts/{{ page.guid }}/deballage-sonoff-nspanel-pro-avec-support.png --alt déballage nspanel pro avec son support --img width="940" height="529" %}


Pour le Nspanel pro ainsi que le boitier les plastiques utilisés sont de bonnes factures.

{% picture posts/{{ page.guid }}/deballage-sonoff-nspanel-pro-avec-support-capture-2.png --alt déballage nspanel pro avec son support et pose de ensemble --img width="940" height="529" %}

# 1er lancement

Pour effectuer un premier lancement avec mise à jour du firmware il faudra le téléphone portable avec [l'application Ewelink](https://play.google.com/store/apps/details?id=com.coolkit&hl=fr&gl=US&pli=1){: target="_blank"} d'installé, et une connection wifi 2,4Ghz de disponible.


## Caractéristiques

|Zigbee| IEEE 802.15.4 (Zigbee 3.0) |
|Wi-Fi|IEEE 802.11 b 2.4GHz|
|Entrée|100-240V CA 50/60Hz|
|Consommation d'énergie maximale|5W MAX ; 150 mA |
|Taille de l'écran TFT|3,95 pouces (écran capacitif)|
|Résolution d'écran|480 x 480|
|MCU|PX30|
|CPU|4 cœurs Cortex-A35|
|GPU|Mali-G31GPU|
|RAM|2 Go, DDR3|
|ROM|8 Go, eMMC 5.1|
|Certifications|CE/UKCA/ SRRC/RoHS|
|Matériaux façade|PC V0+CRS+Verre trempé|
|Dimension|86x86x39.5mm|

## Spécifications

{% picture posts/{{ page.guid }}/NSPanel-PRO-caracteristique-specification.png --alt caractéristiques et spécifications NSPanel pro --img width="470" height="470" %}

## **les + du produit**
{: .blue}
- La qualité de fabrication
- boitier solide
- très beau rendu de la dalle
- Intégration des caméras RTSP
- Support en option de très bonne qualité

## **les - du produit**
{: .red}
- Incompatibilité wifi 5Ghz
- Ecran tactile capricieux sur le mouvements verticaux
- Module fermé aux systèmes Sonoff
- Obligation de passer par un Cloud Chinois
- les options Lan sans Cloud trop restreint
- temps de réponse zigbee trop long ( quand on clique sur un interrupteurs la latence est d'environ 1 seconde )

# Les fonctions

### Dashboard

Après paramétrage d'une caméra tu pourras y avoir accès dès l'interface principale, tu auras aussi accès aux différents modes ( Mode Maison, absent ou Sommeil)

{% picture posts/{{ page.guid }}/mode-nspanel-pro.png --alt accès aux modes NSPanel pro --img width="470" height="470" %}

### Ajouter un appareil Zigbee
l'intégration d'un appareil Zigbee compatible NSPanel pro [voir la liste](https://appcms.coolkit.cn/home-assistant/push-home-assistant/14492.html){: target="_blank"} se fait sans soucis il suffit de cliquer sur l'icone ajouter un appareil et ensuite de démarrer l'appairage.

{% picture posts/{{ page.guid }}/appairage-nspanelpro.png --alt onglet appairage NSPanel pro --img width="470" height="470" %}

### Manuel
L'onglet manuel est pour l'instant vide

### Alarme
L'onglet alarme permet de paramétrer une ou plusieurs alarme, il y a aussi une fonction minuteur. Idéal pour une fonction réveil

### Thème
L'onglet thème permet de choisir un fond d'écran dynamique ou simple, rien de plus.

### Ajouter caméra
> L'intégration de deux caméras au **format RTSP** s'est fait sans soucis

![Intégration caméra RTSP dans NSPanel Pro]({{ site.baseurl }}/assets/images/posts/52/integration-camera-nspanelpro.webp{{ cachebuster }}){: width="470" height="471"}{: target="_blank"}

### Réglage
**L'onglet réglage permet de:**
1. choisir le réseau wifi ( uniquement 2,4Ghz )
2. paramétrer le compte ewelink
3. définir le fuseau horaire
4. définir le lieu pour la météo
5. régler la luminosité et le contraste de l'affichage
6. choix de la langue
7. régler le volume du son
8. à propos permet de voir ( info du module, firmware, ip, device ) mais aussi de redémarrer ou faire un reset

### Côté application Ewelink

**Celle-ci permet de:**
1. paramétrer un lien d'une pageweb que tu retrouveras sur l'interface NSpanelpro
2. *passer un appel vocal sur le NSPANEL Pro*
3. de placer un module zigbee sur un des 3 écrans du Nspanel Pro
4. Ajouter un scenario
5. d'associer un module zigbee via le bouton Passerelle
6. de paramétrer un thermostat via un module sonoff
7. de paramétrer une interface énergie via un module énergie Sonoff


{% picture posts/{{ page.guid }}/application-ewelink-nspanelpro.png --alt Applicationewelink NSPanel pro --img width="434" height="940" %}

**Fonction Appel Ewelink > Nspanel Pro**

{% picture posts/{{ page.guid }}/fonction-appel-nspanel-pro.png --alt fonction appel NSPanel pro via application ewelink --img width="470" height="470" %}


# Intégration dans Homeassistant

C'est une évidence le NSpanel pro est contrôlable dans l'application Home-assistant, 3 choix s'offrent à toi pour l'intégration.
Tu pourras facilement contrôler ce module via homeassistant mais à ce jour toutes ces options sont soumises à des contraintes contrôlées par l'entreprise Sonoff.

> personnellement j'ai choisi l'option SonoffLan qui semble très prometteuse.

## #1 avec le module Ewelink 100% Cloud

Une vidéo distribuée par Sonoff illustre bien l'installation de l'addons, je ne m'y suis pas penché car c'est du 100% Cloud chinois et oui chaque action réalisée par le module Sonoff ou sur Homeassistant passe par le Web.

> tu l'auras compris c'est vraiment pas terrible.

Colle le [lien du répertoire Github](https://github.com/CoolKit-Technologies/ha-addon){: target="_blank"} pour accéder à l'addons. Ensuite regarde la vidéo ci-dessous pour une installation complète.

![Installation Ewelink Nspanel Pro sur Homeassistant]({{ site.baseurl }}/assets/images/posts/52/nspanel-pro-ewelink-installation.webp{{ cachebuster }}){: width="940" height="521"}{: target="_blank"}

**Avantages:**{: .blue}
- Ewelink permet l'import des [modules compatibles](https://appcms.coolkit.cn/home-assistant/push-home-assistant/14492.html){: target="_blank"} inclus dans homeassistant
- import d'un simple clic dans Lovelace

**Inconvénient:**{: .red}
- **100% Cloud Chinois**
- très peut de modules reconnus
- synchronisation avec modules lumières/interrupteur homeassistant limités
- **temps de réponse du switch 1,5 secondes (énorme)**
- *Non compatible gestion NSPanel Pro*

{% include youtubePlayer.html id="wAMIKhMkSFA" %}

## #2 en flashant le module avec android 100% locale

Grâce à l'aide Blakkader il est possible de hacker le sonoff pro en installant et en utilisant [Android Debub Bridge ADB](https://developer.android.com/studio/command-line/adb?hl=fr){: target="_blank}. Je n'ai pas testé cette solution car selon moi elle n'a aucuns intérêts, l'installation d'android revient au même que de prendre une tablette android et de l'installer au mur au moins tu aurais un écran plus grand.

1. [Télécharger des applications sur Sonoff NSPanel Pro](https://blakadder.com/nspanel-pro-sideload/){: target="_blank}<br>
2. [Mettre à jour WebView sur les panneaux NSPanel Pro et Tuya Smart Home](https://blakadder.com/android-panel-webview/){: target="_blank}<br>
3. [Utilisez le capteur de proximité pour réveiller l'écran sur les panneaux NSPanel Pro et Tuya Smart Home](https://blakadder.com/android-panel-proximity/){:target ="_blank"}

**Avantages:**{: .blue}
- **Utilise toutes les possibilitées de Homeassistant**
- Permet d'installer des modules android supplémentaires
- possibilité d'utiliser les **capteurs de proximités**

**Inconvénients:**{: .red}
- cette solution revient à installer android sur le NSpanel pro
- écran trop petit pour ce genre de système
- **difficile à mettre en place**
- Hack le système sonoff

Retrouve une vidéo de mise en place ci-dessous

{% include youtubePlayer.html id="0kjGH9-XQk4" %}

## #3 En utilisant le [dépôt Sonofflan](https://github.com/AlexxIT/SonoffLAN){: target="_blank"} ( local et/ou cloud )
Entièrement développé par AlexxIT ce module permet de contrôler facilement les produits Sonoff il a l'avantage d'être très facile d'utilisation. Cependant il sera tout de même nécessaire de paramétrer le cloud Ewelink mais sans pour autant être obligé de l'utilisation, enfin ça dépend de la compatibilité Lan de Sonoff

![Installation Nspanel Pro Sonofflan sur Homeassistant]({{ site.baseurl }}/assets/images/posts/52/installation-nspanel-sonofflan-homeassistant.webp{{ cachebuster }}){: width="940" height="517"}{: target="_blank"}

**Avantages:**{: .blue}
- **Intégration parfaite dans Homeassistant**
- possibilité de choisir le système de fonctionnement (auto, lan ou cloud)

**Inconvénients:**{: .red}
- Actuellement NsPanel Pro ne remonte que les informations
- Savoir **installer HACS** sur Homeassistant
- Tient compte des **compatibilités développés par Sonoff**
- rechargement de l'interface obligatoire pour synchroniser avec le cloud
- le rechargement de l'interface n'est pas automatique par défaut il faudra créer une automation

{% include product-embed.html image="https://i0.wp.com/itead.cc/wp-content/uploads/2022/07/NSPanel-P_preorder_dim_gray.jpg?fit=1000%2C1000&ssl=1" title="Controleur Sonoff Nspanel Pro" brand="Sonoff" description="Controleur Sonoff Nspanel Pro avec zigbee 3.0 et wifi intégré" affiliate="_Dd5b51x" iteadlink="sonoff-nspanel-pro-smart-home-control-panel" %}

# Conclusion

La version actuelle du firmware testé est la dernière en date la **V1.5.4**, la qualité de **fabrication est bonne**, l'interface et la qualité de la dalle son supérieur au NSPANEL mais **à mon sens le module n'est pas au point**, le balayage horizontal fonctionne correctement cependant le *balayage vertical est aléatoire*, il faut s'y prendre à plusieurs fois pour accéder au menu, heureusement ce module prend en charge les autres modules zigbee de la **gamme Sonoff**. *Mais pour l'instant c'est beaucoup trop restreint*, j'aurai préféré une interopérabilité totale avec Homeassistant. Les fonctions incluses ainsi que le paramétrage sont biens pensés. Selon moi ce n'est pas un module indispensable pourt l'instant, mais peut-être le deviendra-t-il le jour ou Sonoff décidera de l'ouvrir aux systèmes Opensource.

> Sonoff annonce sur sa prochaine mise à jour du Firmware une compatibilité Matter