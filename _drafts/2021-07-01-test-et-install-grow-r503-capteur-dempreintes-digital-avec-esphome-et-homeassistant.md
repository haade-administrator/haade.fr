---
title: "[TEST] et [INSTALL] Grow R503 Capteur d'empreintes digital avec esphome et homeassistant"
date: "2021-07-01"
categories: 
  - "home-assistant"
  - "tests"
  - "tutos-haade-lab"
image: "grow-r503-capteur-empreinte-digital.webp"
---

\[adace\_shoppable\_image attachment="9234"\]

## TEST du capteur d'empreintes Grow R503

La livraison par aliexpress du capteur d'empreintes Grow R503 et des accessoires s'est effectuée sans soucis et livré bien emballé, je n'ai rencontré aucun soucis à la livraison et le délai d'envoi et livraison a été effectuée rapidement, le **manufacturier Grow** propose de bonnes prestations.

### En ce qui concerne le matériel

**+** **Le touché tactile est correcte**, la validation de l'empreinte se fait en appuyant moyennement sur le pad et durant 1,5 secondes ensuite la validation par norme de confiance se fait.

**+** La partie arrière est siliconée pour éviter la pénétration d'humidité.

![dessous capteur grow r503](images/silicone-grow-r503.webp)

dessous du capteur d'empreinte grow r503 rempli de silicone pour éviter les infiltrations

**+** le Grow R503 a une capacité mémoire de **200 empreintes**.

**+** Le contrôle par LED est fonctionnel en **( bleu, pourpre et rouge )**

**+** Le manufacturier Grow propose des options pour le capteur d'empreinte R503 comme une **plaque en inox** adapté aux boîtiers d'encastrements européens, ainsi qu'un **cache capteur en plastique ou zinc**.

**\-** les fils de connections sont de type jst 1,0mm, il aurait été préférable d'avoir du 1,5 voir 2,0 mm surtout pour ce qui est d'une adaptation diy.

**\-** **Seule trois couleurs lumineuses** sont disponibles ( bleu, rouge et violet )

**\-** le fait qu'il n'existe pas un **Grow R503 imperméable ip66-67** le rend incompatible seul en utilisation extérieur, mais pour pallier au problème il est possible **d'acheter un clapet en plastique ou zinc**, disponible en lien dans notre boutique.

\[content-egg-block template=offers\_list\]

## INSTALL du Grow R503 sur Home assistant

## Prérequis:

- home assistant installé et fonctionnel
- [esphome installé et fonctionnel](https://www.haade.fr/blog/domotique-smarthome-jeedom-homeassistant/protocoles/esphome-et-homeassistant/) version: **1.18.0 mini**
- Module ESP8266/32 type Wemos D1 mini ou équivalent
- [Module de conversion usb uart type ft232](https://www.haade.fr/produit/module-de-conversion-usb-uart-ft232/)
- Capteur [empreintes digitales GROW R503](https://www.haade.fr/produit/grow-r503-capteur-dempreinte-digitale/), R307 ou équivalent
- ( optionnel ): [plaque inox 86mm et support de protection R503](https://www.haade.fr/produit/grandir-r503-plaque-inox-plus-protection-r503/)

Grâce au travail effectué par l’équipe home assistant et esphome v1.18.0 et supérieur tu peux désormais [intégrer facilement un capteur d'empreintes digitales Grow R503](https://esphome.io/components/fingerprint_grow.html) et ainsi domotiser un accès grâce à ton petit doigt. dans mon cas ce sera pour utiliser l'accès à la porte de garage c'est pourquoi je me suis orienté vers un GROW R503 avec plaque inx compatible boîte d'encastrement, un projet similaire est déjà diffusé sur la communauté home assistant [_share your Projects!_ Garage fingerprint sensor](https://community.home-assistant.io/t/garage-fingerprint-sensor/312977).

Hormis le fait que ce soit un test, c'est aussi la suite d'un article que j'ai rédigé sur le site [domotiser sa porte de garage pour 5€](https://www.haade.fr/blog/domotique-smarthome-jeedom-homeassistant/tutos-haade-lab/home-assistant/domotiser-sa-porte-de-garage-pour-5e/), n'hésite pas à le lire.

## 1 - Connexion au wemos

![branchement grow r503 sur wemos D1 mini](images/branchement-grow-r503-wemos-d1-mini.webp)

branchement par fil dupont du capteur d'empreinte r503 sur wemos d1 mini esphome

Personnellement j'utilise des **fils dupont** ou je serti des connecteurs dupont idéal pour le diamètre des fils du capteur d'empreinte Grow R503, suivez le schéma de branchement:

1. Tx **jaune** du R503 sur le rx GPIO5 (D1) du wemos D1 mini
2. Rx **vert** du R503 sur le tx GPIO16 (D0) du wemos
3. Ensemble 3v3 **rouge et blanc** du R503 sur le 3v3 du wemos
4. Ground **noir** de R503 sur GND du wemos
5. WakeUp **bleu** du R503 sur GPIO2 (D2) ( ou autre ) du wemos

![](https://i2.wp.com/randomnerdtutorials.com/wp-content/uploads/2019/05/ESP8266-WeMos-D1-Mini-pinout-gpio-pin.png?w=715&quality=100&strip=all&ssl=1)

\[content-egg-block template=offers\_list\]

## 2 - Connexion et paramétrage sur esphome

là aussi j'ai rédigé un article à **consulter** [esphome et home assistant](https://www.haade.fr/blog/domotique-smarthome-jeedom-homeassistant/protocoles/esphome-et-homeassistant/).

## 3 - Intégration du capteur d'empreintes Grow R503 à Lovelace

l'intégration dans lovelace est complète, comme d'habitude toutes les infos ne sont pas nécessaires à toi de faire le tri.

![](images/grow-r503-lovelace.png)

\[content-egg-block template=offers\_list\]

## 4 - Enregistrement d'empreintes

les enregistrements d'empreintes se font dans Outils de développements >> Services, appelle **enroll** pour appairer puis colle ton doigt, la lumière bleue vas clignoter et passer au pourpre fixe, lâche et recolle ton doigt afin de renouveler l'empreinte ensuite le grow r503 clignotera 2 fois en bleu, le processus sera validé et tu pourras utiliser l'ouverture d'une porte du bout de tes doigts.

Ci-dessous la liste des 4 services disponibles.

![](images/service.gif)

Gif animé présentant les services disponibles avec esphome et le capteur d'empreinte Grow R503

1. **Cancel\_enroll:** stoppe le service enroll ( appairage )
2. **Delete:** permet d'effacer un ID d'empreinte ( pour rappel les empreintes commencent à l'ID 0 )
3. **Delete\_all:** permet de supprimer toutes les empreintes
4. **Enroll ( appairage ):** permet d'enregistrer une nouvelle empreinte, finger\_id représente l'identifiant de l'empreinte tandis que num\_scans indique le nombre de capture de l'empreinte pour enregistrement ( 2 par défaut ) perso je conseil 3.

## 5 - Entrée d'automatisation par Balise pour le capteur Grow R503

Grâce à la documentation complète Esphome, du capteur d'empreinte digitale Grow R503, nous pouvons facilement **créer des Balise (tags)** et ainsi personnaliser les **finger\_id** au nom d'une personne ce qui permet très facilement de réaliser une automatisation unique.

**Exemple:** Grâce aux balises, **Person\_a** pourra ouvrir la porte de garage tandis que **Person\_b** ouvrira cette même porte mais aura le pouvoir de désactiver en même temps l'alarme, magique !

Donc après avoir enregistrée ton empreinte digitale tu peux te rendre dans Configuration >> Balise et ainsi voir les balises créées.

Bon à savoir: Dans le script esphome tu pourrais très bien mettre Person\_a au lieu d'un prénom, ensuite pas de soucis la balise peut être modifiable dans homeassistant ou tu peux changer de Nom regarde le gif ci-dessous.

![gif animé balise capteur empreinte](images/balise-1.gif)

gif animé montée balise home assistant et esphome avec capteur d'empreinte grow r503

\[content-egg-block template=offers\_list\]

## 6 - Automatisation et déclencheur du Grow R503 et Homeassistant

Rien de plus simple il suffit de choisir en type de **déclencheur BALIS**E et la personne concernée ainsi au déclenchement tu pourras mener l'action qu'il te convient.

![](images/automatisation-balise-1024x768.png)

\[content-egg-block template=offers\_list\]
