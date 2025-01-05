---
guid: 149
title: "Easily automate your water meter with Homewizard"
description: "A highly requested topic, reading your water consumption at any time is one of the most requested instances, homewizard has created a wifi module capable of adapting to all European meters"
ref: "HWE-WTR-23"
layout: post
authors: [Nico]
date: 2025-01-05 14:00
last_modified_at: 
categories: [Tests, Home-Assistant]
tags: []
video: 
image: 'homewizard-watermeter-hwe-wtr-13-home-automation-compatible-home-assistant.png'
toc: true
beforetoc: ''
published: false
noindex: false
sitemap:
  changefreq: 'monthly'
  exclude: 'no'
  priority: 0.5 #between 0.0 to 1.0, 1.0 high priority
  lastmod:  # date to end modification
locale: en_GB
comments: true
rating: 4.8 
sourcelink:
  - https://www.homewizard.com/fr-be/
---

Voilà un sujet qui en intéressera plus d'un, **mais attention il ne relèvera pas du miracle !** mais je te propose un nouveau module fabriqué par une société Néerlandaise **Homewizard**, le **watermeter {{ page.ref }}**. c'est un produit qui fonctionne en wifi et qui relève la consommation d'eau grâce à un récepteur magnétique. Ce n'est pas une grande nouveauté surtout que [Pieter Brinckman a déjà réalisé un module Diy à base de esp32](https://www.pieterbrinkman.com/2022/02/02/build-a-cheap-water-usage-sensor-using-esphome-home-assistant-and-a-proximity-sensor/){: target="_blank"} qui **te coutera moins cher**.

{%- include alert.html type="info" text="Haade.fr is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means to earn fees by linking to Amazon.com and affiliated sites." %}

> Emballage du Homewizard {{ page.ref }} super résistant .

{% picture posts/{{ page.guid }}/emballage-homewizard-watermeter.png --alt Emballage solide du Homewizard Watermeter --img width="940" height="529" %}

## Déballage

L'emballage est très bien réalisé, le carton extérieur est risistant bref tu ne risque pas de rencontrer de soucis lors de la livraison. À l'intérieur on trouvera un ensemble de:

- visses
- 3 adaptateurs pour différentes marque de compteur
- une notice d'installation surtout sur compteur
- une prise usb-c
- un cable usb de 3 mètres
- et biensûre un module de relève {{ page.ref }}

{% picture posts/{{ page.guid }}/contenu-homewizard-watermeter-adaptateur-notice.png --alt Contenu Homewizard Watermeter HWE-WTR-23 --img width="940" height="529" %}

{% picture posts/{{ page.guid }}/contenu-emballage-watermeter.png --alt Contenu de la boite du Homewizard Watermeter HWE-WTR-23 --img width="828" height="506" %}

### Bon à savoir

- Sur **secteur** le Homewizardd watermeter {{ page.ref }} relève les **données de instantanéments**.
- Sur **Batterie** Le module Homewizard watermeter {{ page.ref }} **relève les données 4 fois par jour**.

Tenu dans la main, ainsi tu pourras te rendre compte des dimensions du module, et tu trouveras une trappe d'accès pour la connection par piles 123A

{% picture posts/{{ page.guid }}/homewizard-watermeter-size-battery-compartiment.png --alt Mise en situation taille et compartiment batterie du Homewizard Watermeter HWE-WTR-23 --img width="940" height="529" %}

{% include product-embed.html image="amazon-basics-cr123A.png" title="Amazon Basics CR123A" brand="Amazon" description="Piles CR123A lithium idéal pour appareils domotiques et photos" amazlink="4fKszeD" %}

Ci-dessous quelques photos du {{ page.ref }} afin de te rendre compte du produit, ça reste basic et fait l'essentiel. 

> Je tiens **à féliciter Homewizard** pour y fournir un cable usb-c d'une longueur de 4 mètres.

{% picture posts/{{ page.guid }}/captures-ecran-homewizard-watermeter-pro.png --alt tour d'horizon du Homewizard Watermeter HWE-WTR-23 --img width="940" height="529" %}

Le Homewizard watermeter {{ page.ref }} coûte un **peu moins de 50€** mais il est compatible **tous compteurs européens** grâce aux adaptateurs fournis avec et ça c'est un réel plus.

{% picture posts/{{ page.guid }}/homewizard-watermeter-mounting.png --alt Exemple de montage du Homewizard Watermeter sur compteur d'eau --img width="282" height="300" %}

## Installation du Homewizard {{ page.ref }}

### Homewizard {{ page.ref }} et la Télérelève

{%- include alert.html type="warning" text="Avant tout je tiens à préciser que mon compteur d'eau est équipé d'un télémètre qui empêche l'installation d'un tel module. Pour le bien du test j'ai enlevé l'émetteur itron Everblu Cyble." %}

Bon je te le cache pas ce type de produit a un gros inconvénient, il ne peut se mettre en place que sur un compteur **sans émetteur d'impulsion**. Eh oui les compteurs d'impulsions s'installent et fonctionnent avec des émetteurs/récepteurs magnétiques.

> Tu pourras si tu le souhaite enlever facilement le compteur d'impulsion pour moi c'est un itron.

Par contre **celui-ci relève en continu**, le fait de l'enlever et de faire tourner le compteur d'eau **créera une différence,** et le jour ou la société des eaux changera l'émetteur d'impulsion ils feront un relevé manuel du compteur et la **facture risque d'être salée.**

{% picture posts/{{ page.guid }}/evertron-cyble-emetteur-compteur.jpg --alt émetteur à impulsion itron everblu cyble --img width="400" height="400" %}

Il y a quelques temps, j'avais rédigé une façon de procéder pour relever la consommation d'eau sur un **émetteur Itron everblu cyble**, à l'aide d'un récepteur 433mHz, *bonne lecture*.

[Domotise le compteur d'eau Itron avec esp et cc1101 dans ha pour 10€]({% post_url fr/2022-12-21-domotiser-compteur-eau-itron-everblu-cyble %}){: target="_blank"}

### Mise en place du {{ page.ref }}

Là aussi rien de plus à dire l'installation s'est effectuée sans aucuns soucis il suffit de suivre la notice.

{% picture posts/{{ page.guid }}/installation-adaptateur-homewizard-watermeter-itron-compteur.png --alt Installation de l'adaptateur pour compteur Itron pour le Homewizard Watermeter HWE-WTR-23 --img width="940" height="529" %}

> Pour finir tu a juste à **clipser le module sur l'adaptateur** et le tour est joué.

{% picture posts/{{ page.guid }}/installation-homewizard-watermeter-itron-compteur.png --alt Installation pour compteur Itron du Homewizard Watermeter HWE-WTR-23 --img width="940" height="529" %}

> À partir de là il ne te restera plus qu'à connecter le {{ page.ref }} au réseau wifi de ton domicile, et à calibrer l'ensemble

#### Quels compteurs sont compatibles

La liste est longue est c'est tant mieux retrouve ci-dessous le max d'infos.

- Zenner
- Sensus
- **Itron**
- Actaris, 
- Hidroconta
- Schlumberger
- Elster
- Honeywell
- Maddalena MVM
- DH Metering et Diehl Metering en 2 minutes. Il suffit d’insérer le compteur d’eau dans l’adaptateur, de le connecter au Wi-Fi et le tour est joué.

|![Installation du watermeter homewizard mesure de consommation d'eau wifi compatible home assistant et compteur Zenner]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/zenner.webp{{ cachebuster }}){: width="300" height="220" class="lazyload pictaninpost"}|<b>Zenner</b><br>Les compteurs d'eau Zenner sont compatibles. Il suffit de fixer le support 2 et deux vis (PS4/16).|
|![Installation du watermeter homewizard mesure de consommation d'eau wifi compatible home assistant et compteur Sensus]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/sensus.webp{{ cachebuster }}){: width="300" height="220" class="lazyload pictaninpost"}|<b>Sensus (1)</b><br>Il existe deux compteurs Sensus distincts disposant de fixations différentes. Vérifiez soigneusement le compteur Sensus en votre possession, afin de fixer le support comme il se doit<br>Les compteurs d'eau Sensus (1) sont compatibles et se fixent à l'aide du support 2 et de deux vis (PS2.6/8).|
|![Installation du watermeter homewizard mesure de consommation d'eau wifi compatible home assistant et compteur Sensus vairante 2]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/sensus-2.webp{{ cachebuster }}){: width="300" height="220" class="lazyload pictaninpost"}|<b>Sensus (2)</b><br>Vérifiez soigneusement le compteur Sensus en votre possession, afin de pouvoir fixer le support comme il se doit.<br>Les compteurs d'eau Sensus (2) sont compatibles et se fixent à l'aide du support 1 et de deux vis (PS2.6/8). Si le couvercle de ce compteur d'eau Sensus est gênant lors de l'installation du support, vous pouvez tourner l'intérieur du compteur d'eau (il est séparé du boîtier extérieur).|
|![Installation du watermeter homewizard mesure de consommation d'eau wifi compatible home assistant et compteur Itron, Actaris, Hidroconta et Schlumberger]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/itron-actaris-hidroconta-schlumberger.webp{{ cachebuster }}){: width="300" height="219" class="lazyload pictaninpost"}|<b>Itron, Actaris, Hidroconta et Schlumberger</b><br>La plupart des compteurs sont munis d'un capuchon sur la pointe de la vis qui peut être cassé. Référez-vous à l'image pour un exemple des trois différents capuchons. Ce compteur d'eau peut également être de couleur noire ou bleue. Les compteurs d'eau Itron, Actaris, Hidroconta et Schlumberger sont compatibles et se fixent à l'aide du support 1 et une vis (M4/12).|
|![Installation du watermeter homewizard mesure de consommation d'eau wifi compatible home assistant et compteur Itron, Actaris, Hidroconta et Schlumberger varainte 2]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/itron-actaris-hidroconta-schlumberger-2.webp{{ cachebuster }}){: width="300" height="231" class="lazyload pictaninpost"}|<b>Itron, Actaris, Hidroconta et Schlumberger</b>|                        
|![Installation du watermeter homewizard mesure de consommation d'eau wifi compatible home assistant et compteur Elsther ou Honeywell]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/elsther-honeywell.webp{{ cachebuster }}){: width="300" height="198" class="lazyload pictaninpost"}|<b>Elsther, Honeywell</b><br>Les compteurs d'eau Elster et Honeywell sont compatibles et se fixent à l'aide du support 1 et de deux vis (PS4/16).|
|![Installation du watermeter homewizard mesure de consommation d'eau wifi compatible home assistant et compteur Diehl Metering]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/diehl-metering.webp{{ cachebuster }}){: width="300" height="210" class="lazyload pictaninpost"}|<b>Diehl Metering</b><br>Les compteurs d'eau Diehl Metering ne sont pas munis de trous de vis, vous pouvez plutôt emboîter le support 3 dans le compteur d'eau.|
|![Installation du watermeter homewizard mesure de consommation d'eau wifi compatible home assistant et compteur Dh Metering]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/dh-metering.webp{{ cachebuster }}){: width="300" height="200" class="lazyload pictaninpost"}|<b>Dh Metering</b><br>Les compteurs d'eau DH Metering sont compatibles et se fixent à l'aide du support 2 et de deux vis (M2.5/12).|       
|![Installation du watermeter homewizard mesure de consommation d'eau wifi compatible home assistant et compteur Maddalena MVM]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/maddalena-mvm.webp{{ cachebuster }}){: width="300" height="210" class="lazyload pictaninpost"}|<b>Maddalena MVM</b><br>Sur les compteurs d'eau Maddalena MVM, le support doit être placé sens dessus dessous. Vous devez accrocher le support sur le côté gauche du compteur d'eau et le visser sur le côté droit (avec une vis, P2.6/8). Veillez à ce que votre compteur d'eau analogique dispose de cette option.|                

### Installation en vidéo {{ page.ref }}

Vidéo d'installation officielle

{% include videoPlayer.html youtubeId="MY7T5YkCSI4" %}

### Premiers paramétrages via l'application officielles

Si tu désires télécharger l'application Homewizard pour Apple ou Android pas de soucis il te suffira de scanner le Qrcode ci-dessous.

{% include qrlink.html qrlink="https://setup.homewizard.com" text="télécharger l'application Homewizard directement pour Android ou Apple" realtextlink="Applications Homewizard pour Smartphone" %}

Ci-dessous j'ai réalisé un gif animé de la première connection à l'application Officielle, en passant par le paramétrage du wifi, et pour finir le calibrage du module.

Après la création du compte suis les étapes rien de bien compliqué:
- connecte le smartphone au module via la connection **WatermeterSetup** avec le code **Setuppass**
- bascule ensuite sur le wifi domestique
- appuye sur le bouton pour appairer le module
- les mises à jours se font dans la foulée s'il y a lieu
- enfin effectue un calibrage
- option1: tu peux ajouter un tarif au m3
- option2: Homewizard offre un abonnement energy+ pour 0.99€/mois **qui est inutile si tu passes par Home Assistant**

![Premiers pas avec l'application Homewizard pour smartphone]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/application-mobile-homewizard-watermeter-parametrage.webp{{ cachebuster }}){: width="244" height="529" class="lazyload pictaninpost"}

> À ce stade l'installation devrait être opérationnel.

### Intégratons le {{ page.ref }} dans Home Assistant

Il y a plus d'un an **Homewizard annonça officiellement sa colaboration avec Home Assistant** en fournissant une intégration de ses modules quasi parfaite, et c'est une bonne nouvelle.

Homewizard annonce officiellement [la prise en charge de ses produits dans home Assistant](https://www.homewizard.com/nl/blog/works-with-home-assistant/){: target="_blank"} quelle bonne nouvelle !

#### Activation API et fonctions

**Première étape:** afin de pouvoir intégrer les produits Homewizard dans home assistant il faudra avant tout **activer l'api dans l'application pour Smartphone Homewizard**, pour se faire va dans: **roues crantées > Compteurs > Clic sur le compteur d'eau > Paramètres du compteur et active**.

{% picture posts/{{ page.guid }}/Découverte-homewizard-home-assistant.png --alt Découverte des produits de la marque Homewizard dans home assistant grâce à une alliance --img width="345" height="265" %}

Ensuite il te suffira dans homeassistant d'aller dans l'onglet **appareils et services** et dans les découvertes tu auras **Homewizard**, Magique 🎉

![Intégration Homewizard watermeter dans Home Assistant d'une simplicité à toute épreuve]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/integration-homewizard-watermeter-hwe-wtr-23-home-assistant.webp{{ cachebuster }}){: width="940" height="540" class="lazyload pictaninpost"}

> Pour rappel n'oublie pas d'activer la fonction API dans l'application Homewizard sinon il te sera impossible d'associer les produits à Home Assistant.

{% picture posts/{{ page.guid }}/activation-api-et-fonction-homewizard-watermeter-home-assistant.png --alt Activer API dans l'application Homewizard pour Home Assistant et fonctions disponibles dans HA --img width="940" height="576" %}

**Fonctions disponibles**

1. **relève totale** de la consommation d'eau ( par défaut en m3 j'ai transformé en litres mais la valeur dans l'application officielle reste en m3 )
2. **relève instantanée** de la consommation d'eau par minute
3. Permet de **choisir de faire remonter les infos de consommations dans le cloud ou de fonctionner totalement le local**, TOP.

#### Tour d'horizon en fonctionnement

Après quelques heures de fonctionnement sur secteur, j'ai réalisé un gif animé des relèves dans home assistant c'est plus parlant

![Animation des différentes fonctions prise en charge dans Home Assistant du module de relève de la consommation de l'eau watermeter par Homewizard]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/information-controlable-dans-home-assistant-homewizard-watermeter.webp{{ cachebuster }}){: width="940" height="576" class="lazyload pictaninpost"}

La relève de consommation, surtout **l'intégration dans le dashboard énergie de home assistant est compatible** ainsi tu pourras suivre la conso sur graphique, et tu pourras paramétere un tarif.

{% picture posts/{{ page.guid }}/tableau-energie-releve-consommation-eau-home-assistant-Homewizard-watermeter.png --alt Intégration dans le tableau énergie de home assistant du module homewizard watermeter HWE-WTR-23 --img width="940" height="492" %}

#### Fonction très intéressante pure local

HomeWizard te permet de paramétrer le fonctionnement du watermeter {{ page.ref }} en **mode cloud ou en pure local**, l'image ci-dessous te montre en parallèle à l'application pour smartphone lorsque la conction cloud est activée.

{% picture posts/{{ page.guid }}/homewizard-watermeter-cloud-connection-active-homeassistant.png --alt Activation de la fonction cloud dans home assistant de homewizard watermeter HWE-WTR-23 --img width="940" height="762" %}

Une fois désactivé tu pourras te rendre compte que plus aucunes données ne remontent dans l'application Homewizard **ainsi tu pourras utiliser le Homewizard watermeter (mesure de la consommation d'eau) {{ page.ref }} totalement en LOCAL !!**

{% picture posts/{{ page.guid }}/homewizard-watermeter-cloud-connection-unactive-homeassistant.png --alt Désactivation de la fonction cloud dans home assistant de homewizard watermeter HWE-WTR-23 --img width="940" height="762" %}

### Notice Officielle en Ligne

Pour terminer tu pourras retrouver ci-dessous le lien vers la **notice complète en ligne du Homewizard watermeter {{ page.ref }}**

[Notice Officielle Homewizard Watermeter](https://helpdesk.homewizard.com/fr/articles/6287701-mon-watermeter-analogique-est-il-compatible-et-comment-est-ce-que-je-l-installe){: target="_blank"}


## Caractéristiques techniques du {{ page.ref }}

|Poids|310 g|
|SKU|HWE-WTR-13|
|**Connection**|802.11b/g/n (2.4 GHz) WiFi<br>WPA2 and WPA3 encrypted|
|Power supply|USB-C: Realtime data<br>2x CR123A Batterij: **4x per day** measurement history|
|Maximum measurement speed|USB-C: 200 liters per minute<br>**2x CR123A** Battery: 30 liters per minute (1 year)|
|Minimum measurement unit|0.3 liters|
|History|Energy usage history of the past 12 months<br>Extend your energy usage history with an **Energy+** subscription|
|Security|Automatic security updates<br>128bits AES encryption with TLS/SSL|
|External connections|Open API (JSON)|

|Poids|310 g|
|SKU|HWE-WTR-13|
|**Connexion**|802.11b/g/n (2,4 GHz) WiFi<br>Cryptage WPA2 et WPA3|
|Alimentation électrique|USB-C: données en temps réel<br>2 piles CR123A: historique de mesure **4x par jour**|
|Vitesse de mesure maximale|USB-C: 200 litres par minute<br>**2 piles CR123A**: 30 litres par minute (1 an)|
|Unité de mesure minimale|0,3 litre|
|Historique|Historique de consommation d'énergie des 12 derniers mois<br>Étendez votre historique de consommation d'énergie avec un abonnement **Energy+**|
|Sécurité|Mises à jour de sécurité automatiques<br>Cryptage AES 128 bits avec TLS/SSL|
|Connexions externes|API ouverte (JSON)|

**Les + du produit:**{: .blue}

- Le design
- la polyvalence
- facilité d'installation
- **le Prix ( moins de 50€ )**
- Long cable USB-C 3m
- la connectique ( secteurs ou batteries )
- Application Smartphone bien faite
- Calibrage via l'application Smartphone
- Option fonctionnement en **LOCAL**

**Les - du produit:**{: .red}

- Ne peut pas être utilisé sur les compteurs avec la fonction télérelève

{%- include alert.html type="info" text="Haade.fr is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means to earn fees by linking to Amazon.com and affiliated sites." %}

## Conclusion

**Homewizard**, entreprise Néerlandaise signe un produit polyvalent qui te **permettra de relever avec précision ta consommation d'eau** le {{ page.ref }} **s'installe très facilement** l'intégration dans **Home Assistant est parfaite** et ceux grâce à un accord entre les deux sociétés, le fait de pouvoir **brancher sur secteur ou pile est un grand plus**.
Bref si tu veux **domotiser ta consommation d'eau avec une grande précision** et le tout facilement et si ton compteur n'est pas équipé d'un émetteur/récepteur télémétrique alors ce produit est fait pour toi. **C'est Quasimment un sans faute.**

> J'enlève **0.2 points** pour le fait que l'on ne puisse pas l'utiliser en même temps qu'un émétteur de télérelève.