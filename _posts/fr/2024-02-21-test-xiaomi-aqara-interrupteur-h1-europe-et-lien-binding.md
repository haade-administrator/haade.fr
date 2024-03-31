---
guid: 109
title: "Tests interrupteurs Aqara H1 et binding"
description: "test de l'interrupteur aqara h1 version europe avec télécommande h1 et initiation à la liaison zigbee bindings"
ref: "Aqara WS-EUK03 et WXKG15LM"
layout: post
authors: Nico
date: 2024-02-21 13:09
last_modified_at: 
categories: [Tests, Zigbee]
tags: []
image: 'test-bindings-aqara-h1-interrupteur-intelligent.png'
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
rating: 3.8
sourcelink:
  - https://www.zigbee2mqtt.io/devices/WXKG15LM.html#aqara-wxkg15lm
  - https://www.zigbee2mqtt.io/devices/WS-EUK03.html#aqara-ws-euk03
  - https://www.domadoo.fr/fr/peripheriques/5725-aqara-interrupteur-mural-double-sans-fil-h1-zigbee-30-wrs-r02-6970504215023.html?domid=39
  - https://blog.domadoo.fr/87774-nouveaux-interrupteurs-zigbee-aqara/
---
Aujourd'hui je vais te parler de deux produits Xiaomi Aqara destinés au marché Européen, Il s'agit de l'interrupteur intelligent Aqara **H1 double interrupteur WS-EUK03** et de l'interrupteur sur pile **Aqara H1 WXKG15LM (WRS-R02)**. D'après Xiaomi il s'agit d'interrupteurs haut de gamme et compatible à la liaison Binding, **alors sont-ils à la hauteur ?**

{% include product-embed.html guid="2189" %}

## Pourquoi ce combo test

Ces deux produits attirent mon attention pour une simple raison, selon le constructeur chinois ils sont compatibles à la **liaison Zigbee Bindings**. [Inovelli](https://inovelli.com/){: target="_blank"} intègre parfaitement cette fonction, ensuite vient **Legrand** mais quand *tu regardes leurs tarifs tu saignes du nez*. Alors quand tu vois que Xiaomi propose cette fonction ça vaut le coup de s'y intéresser.

## Présentation de l'{{page.ref}}

J'ai choisi de te présenter ce combo car je vais tester le fonctionnement du duo et voir s'il est à la hauteur de mes espérances.

### Aqara WS-EUK03 ( avec neutre )

[Présentation site officiel](https://www.aqara.com/en/product/smart-wall-switch-h1-eu-with-neutral/){: target="_blank"}

{% include product-embed.html guid="2186" %}

{% picture posts/{{ page.guid }}/presentation-aqara-interrupteur-h1-eu-WS-EUK03-avec-neutre.png --alt présentation de l'interrupteur zigbee Aqara WS-EUK03 --img width="940" height="529" %}

> Personnellement j'ai opté pour la version avec neutre qui a deux gros avantage comme quasi tout interrupteurs du marché, **il fonctionne en mode routeur** et *renforce ainsi le maillage du marché*, et **mesure l'intensité, remonte l'info en Kwh, utile pour l'onglet Energy de Home Assistant**. Quant aux autres versions elles sont similaires **au WS-EUK03 sans neutre**.

**Retrouve toutes les fonctions intéressantes de cet interrupteur dans le tableau ci-dessous:**

|Prise en charge des boîtiers muraux ronds|Outre les boîtiers muraux carrés de 86 mm, le H1 EU prend également en charge les boîtiers muraux ronds européens.|
|Construction haut de gamme et cadre en métal|Le H1 EU utilise notre conception primée et plus propre préférée par la majorité de nos utilisateurs. Le cadre en métal le rend plus rigide et durable.|
|**Convertir en fonction de commutateur sans fil**{: .blue}|Le bouton de l'interrupteur peut être remappé afin que vous obteniez un « interrupteur sans fil » supplémentaire tandis que la lumière sera contrôlée par des automatismes.|
|Protection avancée|Avec la protection contre la surchauffe, vous pouvez être sûr que votre maison est sûre et sécurisée.|
|**Surveillance de l'alimentation**{: .blue}|Vérifiez les rapports de consommation d'énergie et les statistiques d'utilisation pour suivre l'efficacité de vos appareils électriques. **(Uniquement pour la version avec neutre)**|
|Télécommande très pratique|Compatible avec les assistants vocaux et les écosystèmes les plus populaires : HomeKit, Alexa, Google, IFTTT* tels que G2H, M1S et M2, Zigbee2mqtt et ZHA|
|**Prise en charge de la configuration bidirectionnelle**{: .blue}|avec le commutateur sans fil H1 Mettez à niveau votre configuration bidirectionnelle existante à l'aide du commutateur mural H1 EU avec le commutateur sans fil H1, qui peut être placé au-dessus du boîtier mural existant utilisé pour le commutateur bidirectionnel secondaire.|

{% picture posts/{{ page.guid }}/mise-a-nu-aqara-interrupteur-h1-eu-WS-EUK03-avec-neutre.png --alt sous la hotte du module zigbee Aqara WS-EUK03 --img width="940" height="529" %}

Aqara a équipé ce module d'une puce NXP JN5189 qui a l'avantage d'être haute performance avec très faible consommation d'énergie qui intègre le protocole Zigbee et Thread et prend en charge le NFC

[Puce NXP JN5189](https://www.nxp.com/products/wireless-connectivity/thread/jn5189-88-t-high-performance-and-ultra-low-power-mcus-for-zigbee-and-thread-with-built-in-nfc-option:JN5189_88_T){: target="_blank"}

{% picture posts/{{ page.guid }}/puce-nxp-aqara-interrupteur-h1-eu-WS-EUK03-avec-neutre.png --alt zoom circuit puce nxp du module zigbee Aqara WS-EUK03 --img width="940" height="529" %}

**Parmis les fonctions importantes du module on retrouve:**
- la fonction commutation ou télécommande par automatisation
- la mesure de la consommation
- la fonction liaison binding 2 voies

{% include doclink.html pdf="Smart-Wall-Switch-H1-With-Neutral_Manual_EN.pdf" title="Manuel utiliseateur interrupteur Aqara H1" %}

### Aqara WXKG15LM (WRS-R02) 

[Présentation site officiel](https://www.aqara.com/en/product/wireless-remote-switch-h1/){: target="_blank"}

{% include product-embed.html guid="2189" %}

{% picture posts/{{ page.guid }}/presentation-aqara-interrupteur-h1-eu-sans-fil-WXKG15LM.png --alt présentation de l'interrupteur zigbee Aqara WXKG15LM (WRS-R02) sans fil --img width="940" height="529" %}

|**Durée de vie de la batterie de 5 ans**{: .blue}|Consomme très peu d'énergie et peut durer 5 ans sans changer les piles.|
|Mode clic haute vitesse|Pour un contrôle transparent, le temps de réponse diminue jusqu'à 50 ms.|
|**Actions configurables multiples**{: .blue}|Un simple clic, un double clic, un appui long, appuyez sur 2 boutons simultanément.|
|Installation flexible|Posez directement sur une surface horizontale, collez sur une surface plane à l'aide du tampon adhésif fourni ou vissez à la place du boîtier mural existant.|
|**Prise en charge de la configuration du commutateur bidirectionnel avec le commutateur mural H1 EU**{: .blue}|Mettez à niveau votre configuration bidirectionnelle existante à l'aide du commutateur mural H1 EU avec le commutateur sans fil H1, qui peut être placé au-dessus du boîtier mural existant utilisé pour le commutateur bidirectionnel secondaire|

{% picture posts/{{ page.guid }}/mise-a-nu-aqara-interrupteur-h1-eu-sans-fil-WXKG15LM.png --alt sous la hotte du module zigbee Aqara WXKG15LM (WRS-R02) --img width="940" height="529" %}

Là aussi Aqara a équipé ce module d'une puce NXP JN5189 qui a les mêmes avantages que l'interrupteur Aqara WS-EUK03.

**Les fonctions intéressantes de ce module:**
- la durée de vie de la pile ( annoncée à 5 ans )
- le nombre d'actions disponibles par interrupteur
- la fonction liaison bindings par Zigbee

{% picture posts/{{ page.guid }}/puce-nxp-aqara-interrupteur-h1-eu-WXKG15LM.png --alt zoom circuit puce nxp du module zigbee Aqara WXKG15LM (WRS-R02) --img width="940" height="529" %}

## Caractéristiques de l'{{page.ref}}

### Aqara WS-EUK03

{% include product-embed.html guid="2186" %}

|Nom du produit|Interrupteur mural intelligent Aqara H1 (avec neutre, simple bascule/double bascule)|
|Modèle|WS-EUK03 / WS-EUK04|
|Couleur|Blanc|
|Dimensions du produit|85,8×86×37,55 mm|
|Puissance d'entrée|100-250VAC, 50/60Hz, Max. 8A (charge résistive), μ|
|Protocoles sans fil|Zigbee 3.0|
|Température de fonctionnement|0°C~40°C (32°F~104°F)|
|Humidité de fonctionnement|0 % ~ 95 % RH, sans condensation|
|Contenu de la boîte|Interrupteur mural intelligent H1 EU × 1, guide de démarrage rapide × 1, vis × 2|

### Aqara WXKG15LM (WRS-R02)

{% include product-embed.html guid="2189" %}

|Modèle|WRS-R02|
|Dimensions du produit|85,8 × 86 × 12,5 mm|
|Protocoles sans fil|Zigbee 3.0 IEEE 802.15.4|
|Température de fonctionnement|-10℃～+50℃|
|Humidité de fonctionnement|0~95 % RH, sans condensation|
|Batterie|CR2450|
|Ce qu'il y a dans la boîte|Interrupteur à distance sans fil H1 (double bascule) x 1, autocollant x 1, languette d'isolation x 1, manuel d'utilisation x 1|

## Intégrations Zigbee2mqtt

L'intégration de l'{{page.ref}} **est complète**, toutes les fonctions remontent bien c'est une bonne chose pour les box domotiques open source du marché.

Capture d'image ci-dessous prise sous Jeedom 👌

{% picture posts/{{ page.guid }}/integration-aqara-WS-EUK03-et-WXKG15LM-zigbee2mqtt-jeedom.png --alt integration du module zigbee Aqara WXKG15LM (WRS-R02) et WS-EUK03 dans zigbee2mqtt sous jeedom --img width="940" height="529" %}

### Fonctionnalités disponibles WS-EUK03

pour le module Aqara WS-EUK03 tu pourras accéder aux fonctions:
- on/off
- valeur de l'action on/off
- puissance en watt
- **l'energie en Kwh**
- commuter l'indication lumineuse
- mémoire en cas de coupure courant
- la température de l'interrupteur
- activer ou désactiver la led la nuit
- nombre de panne de courant
- mode relais ou découplé
- la qualité du lien

{% picture posts/{{ page.guid }}/fonctionnalites-disponibles-zigbee2mqtt-ws-euk03.png --alt fonctionnalités disponibles dans z2m du module zigbee Aqara WS-EUK03 --img width="561" height="873" %}

### Fonctionnalités disponibles WXKG15LM (WRS-R02)

pour le module Aqara WXKG15LM (WRS-R02) tu pourras accéder aux fonctions:
- l'état de la batterie
- le voltage de la batterie
- l'action sur clic
- le mode du clic rapide ou multi ( 2 clicks etc..)
- le mode direct ou évènement
- la qualité du lien

{% picture posts/{{ page.guid }}/fonctionnalites-disponibles-zigbee2mqtt-aqara-wrs-r02.png --alt fonctionnalités disponibles dans z2m du module zigbee Aqara WXKG15LM (WRS-R02) --img width="511" height="557" %}

## Intégration ZHA

L'intégration de l'aqara **WS-EUK03 est complète** mais en ce qui concerne la télécommande sans fil **Aqara WXKG15LM (WRS-R02)  elle n'est pour l'instant pas reconnu**{: .red} et donc inutilisable pour la suite du test en liaison binding et c'est bien dommage.

### Intégration WS-EUK03

Fonctionne sans soucis

{% picture posts/{{ page.guid }}/integration-aqara-WS-EUK03-zha.png --alt integration du module zigbee Aqara WS-EUK03 dans ZHA sous Home Assistant --img width="940" height="529" %}

### Intégration WXKG15LM (WRS-R02)

Inopérant pour l'instant.

{% picture posts/{{ page.guid }}/integration-aqara-WXKG15LM-zha-non-reconnu.png --alt integration du module zigbee Aqara WXKG15LM (WRS-R02)  dans ZHA sous Home Assistant mais non reconnu --img width="940" height="499" %}

## Le Binding, pourqoi est-ce si intéressant !

La fonction Binding est très intéressante car elle permet un fonctionnement autonome entre deux appareils, même si ta box domotique tombe en rade. Ça rend le processus plus [WAF](#waf--women-acceptance-factor-) et je pense indispensable pour assurer un fonctionnement à toute épreuve. 
**Exemple:** Avec de telles produits il est possible de demander à l'électricien lors d'une construction de mettre un seul interrupteur par pièces ( sans va et vient et sans télérupteur ) et de rajouter des télécommandes sans fil supplémentaire et ainsi réduire le coût de la facture de pose.

### Quels interrupteurs proposent le Binding

**Sur les interrupteurs physiques**

- Xiaomi D1, E1 et H1
- [Legrand par netamo Celiane sans fil](https://www.legrand.fr/pro/catalogue/pack-extension-celiane-with-netatmo-interrupteur-prise-connectee-commande-sans-fils-titane-sans-plaque)
- [Aqara WXCJKG12LM](https://www.zigbee2mqtt.io/devices/WXCJKG12LM.html)

## Mise en liaison de l'{{page.ref}}

{%- include alert.html type="info" text="Il est important de garder éveillé l'Aqara WXKG15LM (WRS-R02)  télécommande sur pile le temps du process , paramétrage du mode commande et du paramétrage des liens binding en appuyant toutes les secondes sur l'interupteur sinon l'appareil va se mettre rapidement en veille par soucis d'économies d'énergies" %}

### Vidéos Liens Bindings de l'{{page.ref}}

Regarde la vidéo ci-dessous, j'ai inclus ces deux produits plus la liaison en Bindings, cette vidéo a été réalisée avec Zigbee2mqtt et Home Assisitant. **PS: je l'ai aussi testé avec Jeedom et c'est fonctionnel ( depuis peu Jeedom intègre le plugin officiel Zigbee2mqtt ). Petit coup de gueule ce plugin est payant il faudra alléger son porte monnaie de 6€ afin de pouvoir l'utiliser.**

{% include videoPlayer.html localId="bindings-aqara-h1-manipulation.mp4" %}

Après une mise en liaison direct **je me rend compte que l'Aqara WXKG15LM (WRS-R02)  n'arrive pas à traiter la différence entre l'interrupteur gauche ou droite**, les deux commandent l'Aqara WS-EUK03 et c'est dommage car ça rend inutilisable ce double interrupteur. Pas de mise à jour OTA Côté firmware.

**Pour réussir le Binding n'oublie pas de:**
- après intégration régler sur control_relay l'interrupteur filaire
- après intégration de l'interrupteur sans fil n'oublie pas de le garde éveillé ( clic toutes les secondes ) durant tout le processus
- règle la fonction de l'inter sans fil sur command
- supprime les points de terminaisons existants
- crée un point de terminaison entre les deux appareils

> Point intéressant la liaison entre les deux appareils est instantanée, il n'y a pas de délai important > 50ms entre le moment ou l'on clic sur la télécommande et la réception sur l'interrupteur.

[xiaomi.js todo bug aqara WXKG15LM (WRS-R02)](https://github.com/Koenkk/zigbee-herdsman-converters/blob/eed5fde987891f996c428339569dbff1893e62a1/devices/xiaomi.js#L2370){: target="_blank"}

{% picture posts/{{ page.guid }}/erreur-binding-aqara-interrupteur-sans-fil-WXKG15LM-zigbee2mqtt.png --alt Bug binding zigbee2mqtt et aqara WXKG15LM (WRS-R02) --img width="940" height="695" %}

## WAF ( Women acceptance factor )

> Wife Acceptance Factor, Wife Approval Factor ou Wife Appeal Factor (WAF), sont des éléments de conception qui augmentent la probabilité qu’une femme approuve l’achat de coûteux produits électroniques grand public tels que des haut-parleurs haute–fidélité, systèmes de Home cinéma et des ordinateurs personnels.
Elégant, compact, formes discrètes et couleurs attrayantes sont généralement considérées comme WAF. Le terme vient d’un jeu de mot du jargon électronique tels que « facteur de forme« et « facteur de puissance«  et découle du stéréotype que les hommes apprécient les critères de performance et de gadgets, et les femmes les facteurs visuels et esthétiques.<cite>— Jeedom</cite>

{% include product-embed.html guid="2186" %}

## Conclusion

**Aqara signe un produit intéressant sur le papier**, cependant le tarif **parait excessif** pour une qualité qui ne sort pas du lot. De plus la liaison en direct **Bindings** fonctionne mais la télécommande Aqara WXKG15LM (WRS-R02) ne permet pas pour l'instant de dissocier l'interrupteur droite/gauche et c'est bien dommage **car le déclenchement est instantané** ce qui rend la fonction forte intéressante mais **rend cet appareil à moitié fonctionnel**. J'attends un bridge Xiaomi afin de voir si une mise à jour est susceptible d'être disponible et ainsi l'intégrer dans le système Zigbee2mqtt. 
> Si pour **toi le mode Bindings est incontournable** et que tu dois installer des interrupteurs dans une construction neuve je te conseil soit d'attendre, soit de passer **sur du Legrand** mais ce seras **deux fois plus cher**. *Et pour ce tarif tu ne pourras pas mesure la mesure de consommation.* À toi de voir.
