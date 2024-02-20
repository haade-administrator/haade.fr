---
guid: 109
title: "Test interrupteur aqara h1 et binding"
description: "test de l'interrupteur aqara h1 version europe avec télécommande h1 et initiation à la liaison zigbee binding"
ref: "Aqara WS-EUK03 et WXKG15LM"
layout: post
author: Nico
date: 2024-02-17 17:09
last_modified_at: 
categories: [Tests, Zigbee]
tags: []
image: 'test-bindings-aqara-h1-interrupteur-intelligent.png'
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
rating: 3.8
sourcelink:
  - https://www.zigbee2mqtt.io/devices/WXKG15LM.html#aqara-wxkg15lm
  - https://www.zigbee2mqtt.io/devices/WS-EUK03.html#aqara-ws-euk03
  - https://www.domadoo.fr/fr/peripheriques/5725-aqara-interrupteur-mural-double-sans-fil-h1-zigbee-30-wrs-r02-6970504215023.html?domid=39
  - https://blog.domadoo.fr/87774-nouveaux-interrupteurs-zigbee-aqara/
---
Aujourd'hui je vais te parler de deux produits xiaomi destinée au marché Européen, Il s'agit de l'interrupteur intelligent Aqara H1 double interrupteur WS-EUK03 et de l'interrupteur sur pile Aqara H1 WXKG15LM. D'après Xiaomi il s'agit d'interrupteurs haut de gamme et compatible à la liaison Binding, **alors sont-ils à la hauteur ?**

## Pourquoi ce combo test

Ces deux produits attirent mon attention pour une simple raison, selon le constructeur chinois ils sont compatibles à la **liaison Zigbee Bindings**. novelli intègre parfaitement cette fonction ensuite vient Legrand mais quand tu regardes les tarifs tu saignes du nez. Alors quand tu vois que Xiaomi propose cette fonction ça vaut le coup de s'y intéresser.

## Présentation de l'{{page.ref}}

J'ai choisi de te présenter ce combo car je vais tester le fonctionnement du duo et voir s'il est à la hauteur de mes espérances.

### Aqara WS-EUK03 ( avec neutre )

[Présentation site officiel](https://www.aqara.com/en/product/smart-wall-switch-h1-eu-with-neutral/){: target="_blank"}

{% picture posts/{{ page.guid }}/presentation-aqara-interrupteur-h1-eu-WS-EUK03-avec-neutre.png --alt présentation de l'interrupteur zigbee Aqara WS-EUK03 --img width="940" height="529" %}

Personnellement j'ai opté pour la version avec neutre qui a un gros avantage comme quasi tout interrupteurs du marché, **il fonctionne en mode routeur** et *renforce ainsi le maillage du marché*, quant aux autres versions elles sont similaires **au WS-EUK03 sans neutre**.

**Retrouve toutes les fonctions intéressantes de cet interrupteur dans le tableau ci-dessous:**

|Prise en charge des boîtiers muraux ronds|Outre les boîtiers muraux carrés de 86 mm, le H1 EU prend également en charge les boîtiers muraux ronds européens.|
|Construction haut de gamme et cadre en métal|Le H1 EU utilise notre conception primée et plus propre préférée par la majorité de nos utilisateurs. Le cadre en métal le rend plus rigide et durable.|
|**Convertir en fonction de commutateur sans fil**{: .blue}|Le bouton de l'interrupteur peut être remappé afin que vous obteniez un « interrupteur sans fil » supplémentaire tandis que la lumière sera contrôlée par des automatismes.|
|Protection avancée|Avec la protection contre la surchauffe, vous pouvez être sûr que votre maison est sûre et sécurisée.|
|**Surveillance de l'alimentation**{: .blue}|Vérifiez les rapports de consommation d'énergie et les statistiques d'utilisation pour suivre l'efficacité de vos appareils électriques.|
|Télécommande très pratique|Compatible avec les assistants vocaux et les écosystèmes les plus populaires : HomeKit, Alexa, Google, IFTTT* tels que G2H, M1S et M2, Zigbee2mqtt et ZHA|
|**Prise en charge de la configuration bidirectionnelle**{: .blue}|avec le commutateur sans fil H1 Mettez à niveau votre configuration bidirectionnelle existante à l'aide du commutateur mural H1 EU avec le commutateur sans fil H1, qui peut être placé au-dessus du boîtier mural existant utilisé pour le commutateur bidirectionnel secondaire.|

{% picture posts/{{ page.guid }}/mise-a-nu-aqara-interrupteur-h1-eu-WS-EUK03-avec-neutre.png --alt sous la hotte du module zigbee Aqara WS-EUK03 --img width="940" height="529" %}

Aqara a équipé ce module d'une puce NXP JN5189 qui a l'avantage d'être haute performance avec très faible consommation d'énergie qui intègre le protocole Zigbee et Thread et prend en charge le NFC

[Puce NXP JN5189](https://www.nxp.com/products/wireless-connectivity/thread/jn5189-88-t-high-performance-and-ultra-low-power-mcus-for-zigbee-and-thread-with-built-in-nfc-option:JN5189_88_T){: target="_blank"}

{% picture posts/{{ page.guid }}/puce-nxp-aqara-interrupteur-h1-eu-WS-EUK03-avec-neutre.png --alt zoom circuit puce nxp du module zigbee Aqara WS-EUK03 --img width="940" height="529" %}

|Support of Round Wall Boxes|Apart from 86 mm square wall boxes, the H1 EU also supports round European wall boxes.|
|Premium Build and Metal Frame|The H1 EU uses our award-winning, cleaner design preferred by the majority of our users. The metal frame makes it more rigid and durable.|
|**Convert to Wireless Switch Function**{: .blue}|The button of the switch can be remapped so that you will get an extra "wireless switch" while the light will be controlled by automations.|
|Advanced Protection|With overheat protection, you can be sure your home is safe and secure.|
|**Power Monitoring**{: .blue}|Check power consumption reports and usage statistics to track the efficiency of your electrical appliances.|
|Extra Convenient Remote Control|Compatible with most popular voice assistants and ecosystems: HomeKit, Alexa, Google, IFTTT* such as G2H, M1S and M2, Zigbee2mqtt and ZHA|
|**2-Way Setup Support**{: .blue}|with Wireless Switch H1 Upgrade your existing 2-Way setup using the Wall Switch H1 EU with the Wireless Switch H1, which can be placed on top of the existing wall box used for secondary 2-Way switch.|

**Parmis les fonctions importantes du module on retrouve:**
- la fonction commutation ou télécommande par automatisation
- la mesure de la consommation
- la fonction liaison binding 2 voies

{% include doclink.html pdf="Smart-Wall-Switch-H1-With-Neutral_Manual_EN.pdf" title="Manuel utiliseateur interrupteur Aqara H1" %}

### Aqara WXKG15LM

[Présentation site officiel](https://www.aqara.com/en/product/wireless-remote-switch-h1/){: target="_blank"}

{% picture posts/{{ page.guid }}/presentation-aqara-interrupteur-h1-eu-sans-fil-WXKG15LM.png --alt présentation de l'interrupteur zigbee Aqara WXKG15LM sans fil --img width="940" height="529" %}

|**Durée de vie de la batterie de 5 ans**{: .blue}|Consomme très peu d'énergie et peut durer 5 ans sans changer les piles.|
|Mode clic haute vitesse|Pour un contrôle transparent, le temps de réponse diminue jusqu'à 50 ms.|
|**Actions configurables multiples**{: .blue}|Un simple clic, un double clic, un appui long, appuyez sur 2 boutons simultanément.|
|Installation flexible|Posez directement sur une surface horizontale, collez sur une surface plane à l'aide du tampon adhésif fourni ou vissez à la place du boîtier mural existant.|
|**Prise en charge de la configuration du commutateur bidirectionnel avec le commutateur mural H1 EU**{: .blue}|Mettez à niveau votre configuration bidirectionnelle existante à l'aide du commutateur mural H1 EU avec le commutateur sans fil H1, qui peut être placé au-dessus du boîtier mural existant utilisé pour le commutateur bidirectionnel secondaire|

Les fonctions intéressantes de ce module:
- la durée de vie de la pile
- le nombre d'actions disponible s par inter
- la fonction liaison bindings par Zigbee

|5 Year Battery Life|Consumes very little energy, and can last for 5 year without changing batteries.|
|High-Speed Click Mode|For seamless control, the response time decreases down to 50 ms.|
|Multiple Configurable Actions|Single click, double click, long press, press 2 buttons simultaneously.|
|Flexible Installation|Put on a horizontal surface directly, stick onto a flat surface using the included adhesive pad or screw in place of the existing wall box.|
|2-Way Switch Setup Support with Wall Switch H1 EU|Upgrade your existing 2-Way setup using the Wall Switch H1 EU with the Wireless Switch H1, which can be placed on top of the existing wall box used for secondary 2-Way switch.|

## Caractéristiques de l'{{page.ref}}

### Aqara WS-EUK03

|Nom du produit|Interrupteur mural intelligent Aqara H1 (avec neutre, simple bascule/double bascule)|
|Modèle|WS-EUK03 / WS-EUK04|
|Couleur|Blanc|
|Dimensions du produit|85,8×86×37,55 mm|
|Puissance d'entrée|100-250VAC, 50/60Hz, Max. 8A (charge résistive), μ|
|Protocoles sans fil|Zigbee 3.0|
|Température de fonctionnement|0°C~40°C (32°F~104°F)|
|Humidité de fonctionnement|0 % ~ 95 % RH, sans condensation|
|Contenu de la boîte|Interrupteur mural intelligent H1 EU × 1, guide de démarrage rapide × 1, vis × 2|

|Product Name|Aqara Smart Wall Switch H1 (With Neutral, Single Rocker/ Double Rocker)|
|Model|WS-EUK03 / WS-EUK04|
|Color|White|
|Product Dimensions|85.8×86×37.55 mm|
|Input Power|100-250VAC, 50/60Hz, Max. 8A (resistive load), μ|
|Wireless Protocols|Zigbee 3.0|
|Operating Temperature|0°C～40°C (32°F～104°F)|
|Operating Humidity|0%~95% RH, Non-condensing|
|What＇s in the box|Smart Wall Switch H1 EU × 1, Quick Start Guide × 1, Screw × 2|

### Aqara WXKG15LM

|Modèle|WRS-R02|
|Dimensions du produit|85,8 × 86 × 12,5 mm|
|Protocoles sans fil|Zigbee 3.0 IEEE 802.15.4|
|Température de fonctionnement|-10℃～+50℃|
|Humidité de fonctionnement|0~95 % RH, sans condensation|
|Batterie|CR2450|
|Ce qu'il y a dans la boîte|Interrupteur à distance sans fil H1 (double bascule) x 1, autocollant x 1, languette d'isolation x 1, manuel d'utilisation x 1|

|Model|WRS-R02|
|Product Dimensions|85.8 × 86 × 12.5 mm|
|Wireless Protocols|Zigbee 3.0 IEEE 802.15.4|
|Operating Temperature|-10℃～+50℃|
|Operating Humidity|0~95% RH, no condensation|
|Battery|CR2450|
|What＇s in the box|Wireless Remote Switch H1 (Double Rocker) x 1, Sticker x 1, Insulation Tab x 1, User Manual x 1|

## Intégrations Zigbee2mqtt

L'intégration de l'{{page.ref}} est complète, toutes les fonctions remontent bien c'est une bonne chose pour les box domotiques open source du marché.

## Intégration ZHA

L'intégration de l'aqara WS-EUK03 est complète mais en ce qui concerne la télécommande sans fil Aqara WXKG15LM elle n'est pour l'instant pas reconnu et donc inutilisable pour la suite du test en liaison binding et c'est bien dommage.

## Le Binding, pourqoi est-ce si intéressant

### Quels interrupteurs du marché

[Legrand par netamo Celiane sans fil](https://www.legrand.fr/pro/catalogue/pack-extension-celiane-with-netatmo-interrupteur-prise-connectee-commande-sans-fils-titane-sans-plaque)
[Aqara WXCJKG12LM](https://www.zigbee2mqtt.io/devices/WXCJKG12LM.html)

## Mise en liaison de l'{{page.ref}}

{%- include alert.html type="info" text="Il est important de garder éveiller l'Aqara WXKG15LM télécommande sur pile éveillé tout le temps de l'inclusion , paramétrage du mode commande et du paramétrage des liens binding en appuyant toutes les secondes sur l'interupteur sinon l'appareil va se mettre rapidement en veille par soucis d'économies d'énergies" %}

{% include videoPlayer.html localId="binding-h1-aqara.mp4" %}

Après une mise ne liaison direct je me rend compte que l'Aqara WXKG15LM n'arrive pas à traiter la différence entre l'interrupteur gauche ou droite, les deux commandent l'Aqara WS-EUK03 et c'est dommage car ça rend inutilisable ce double interrupteur. Pas de mise à jour OTA Côté firmware.

[xiaomi.js todo bug aqara WXKG15LM](https://github.com/Koenkk/zigbee-herdsman-converters/blob/eed5fde987891f996c428339569dbff1893e62a1/devices/xiaomi.js#L2370){: target="_blank"}

{% picture posts/{{ page.guid }}/erreur-binding-aqara-interrupteur-sans-fil-WXKG15LM-zigbee2mqtt.png --alt Bug binding zigbee2mqtt et aqara WXKG15LM --img width="940" height="695" %}

## Produits concurrent du marché

## Conclusion
