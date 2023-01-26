---
guid: 41
title: "comparatif prise zigbee 3.0 laquelle choisir"
description: "comparatif complet de 4 prises zigbee 3.0, Nous Smart zigbee socket A1Z, Neo Plug-007SPB2, Aqara Smart plug SP-EUC01 et lidl SAPZ 1 A1, dans un monde ou les constructeurs ne manque pas d'innovations dans les prises intelligentes"
layout: post
author: Nico
date: 2023-01-26 13:26
last_modified_at: 
categories: [Domotique, Haade-lab, Tests]
tags: []
image: 'comparatif-prise-zigbee-laquelle-choisir-nous-A1Z-neo-007SPB2-aqara-AP007EUW01-lidl-SAPZ1A1.png'
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
rating:  
sourcelink:
  - https://zigbee.blakadder.com/
---

Dans un monde ou les prises intelligentes ne manque pas, je vais comparer 4 prises compatibles zigbee 3.0 de la marque Nous, Neo, Aqara et Lidl. En essayant d'oublier aucun points le tablea ci-dessous départagera les prise les mieux notées.

# Tableau comparatif

| |Nous A1Z|Neo PLUG-007SPB2|Aqara SP-EUC01|Lidl SAPZ 1 A1|
|-|--------|----------------|--------------|--------------|
|Zigbee 3.0: 2,4Ghz|OK|OK|OK|OK|
|Foncion routeur (répéteur)|Oui|Oui|Oui|Oui|
|Voltage|230v, 50-60Hz|85-250v, 50-60Hz|250v,  50-60Hz|220-240v, 50Hz|
|Ampérage|16A, Max 3680W|16A, Max 3680W|**10A, Max 2300W**{: .red}|16A, Max **3840W**{: .blue}|
|Température de fonctionnement|-20~45°C|0~40°C|0~35°C|+5~35°C|
|Humidité durant Fonctionnement|Non renseigné|20~85%|0~95%|10~80%|
|Portée réception|55 m|55m|non renseigné|70m|
|Portée mesurée distance équivalente|**25 lqi**{: .red}|58 lqi|54 lqi|58 lqi|
|Dimensions|46 x 46 x 72mm|46 x 46 x 72mm|⌀62 x 77,5mm|58 x 58 x 89mm|
|Poids|56gr|**57gr**{: .blue}|**93gr**{: .orange}|**118gr**{: .red}|
|Compatibilité box|HA, Jeedom|HA, Jeedom|HA, Jeedom|HA, Jeedom|
|Nombre de fonction|9|9|8|**2**{: .red}|
|Sonde de température|Non|Non|**Oui**{: .red}|Non|
|Notice papier|Sommaire|complet|complet|complet|
|Lumière de fonctionnement|rouge|orange|bleu|blanc|
|Tarif|[**16,99€**](https://www.domadoo.fr/fr/peripheriques/6165-nous-prise-intelligente-zigbee-30-mesure-de-consommation-5907772033517.html?domid=39){: target="_blank"}{: .orange}|[**10,61**](https://fr.aliexpress.com/item/1005003446740203.html){: target="_blank"}{: .blue}~[**16,99€**](https://www.domadoo.fr/fr/peripheriques/6473-neo-prise-intelligente-zigbee-tuya-16a-mesure-de-consommation.html?domid=39){: target="_blank"}{: .orange}|[**23,99€**](https://www.domadoo.fr/fr/peripheriques/5385-aqara-prise-connectee-zigbee-30-smart-plug-sp-euc01.html?domid=39){: target="_blank"}{: .red}|**11,99€**{: .blue}|

# Nous Smart Zigbee Socket A1Z

Des 4 prises c'est celle qui a le meilleur rendu esthétique, avec des plastiques translucides et un bouton de fonctionnement/intégration des plus réussis, c'est aussi la prise la plus petite et légère ex aequo avec la prise neo Plug-007SPB2, vous vous rendrez compte qu'elle intègre le protocole Tuya, en allant plus loin on se rend compte que la conception de fabrication et l'intégration des composants est totalement similaire à la neo Plug-007SPB2. Domadoo vend cette prise en version EU, Tuya doit en être le constructeur et seul l'aspect esthétique diverge de la Neo Coolcam. 

Sur le schéma ci dessous on peut voir qu'elle fait routeur ( répéteur de signal ) et **reconnu sous le modèle zigbee TS011F**

{% picture posts/{{ page.guid }}/prise-nous-1.png --alt intégration nous A1Z zigbee2mqtt onglet à propos  --img width="940" height="648" %}

la prise nous Smart Zigbee Socket A1Z dispose de **( 9 fonctions )**, elle permet de:

- contrôler l'état on/off ( heureusement sinon elle ne serait pas intelligente )
- de paramétrer l'état après une coupure de courant
- de paramétrer l'état de fonctionnement de la Led on/off-on/on-off/off
- de mesurer la puissance instantanée
- de mesurer l'intensité instantané du courant
- de connaître le voltage
- de mesurer la somme de l'énergie consommée
- de bloquer le fonctionnement du bouton physique
- de connaître la qualité du signal **( pour info celui ci est le plus faible lors du test à distance égale avec les autres modules testés. )**

{% picture posts/{{ page.guid }}/prise-nous-2.png --alt intégration nous A1Z zigbee2mqtt onglet expose  --img width="940" height="574" %}

{% include product-embed.html image="nous-prise-intelligente-zigbee-30-mesure-de-consommation.jpg" title="NOUS - PRISE INTELLIGENTE ZIGBEE 3.0 + MESURE DE CONSOMMATION" brand="Nous" description="La prise intelligente Zigbee 3.0 NOUS permet de contrôler tout dispositif électrique traditionnel à distance, via son smartphone ou par la voix." domlink="peripheriques/6165-nous-prise-intelligente-zigbee-30-mesure-de-consommation-5907772033517.html" %}

# Neo Coolcam Plug-007SPB2

Similaire à la prise intelligente Nous Smart Zigbee Socket A1Z, la prise Neo diverge en un seul point et ça se situe au niveau des plastiques, le rendu des couleurs et non de la qualité est en dessous de la prise Nous en effet l'orange est un peut plus tape à l'oeil on le retrouve aussi au niveau du bouton **certains aimeront** la prise est vendu chez domadoo en version EU(fr), sur Aliexpress vous trouverez la version EU, qui selon moi est un plus pour la polyvalence à condition qu'elle soit enficheable en version EU(fr).

Sur le schéma ci dessous on peut voir qu'elle fait routeur ( répéteur de signal ) et **reconnu sous le modèle zigbee TS011F**


{% picture posts/{{ page.guid }}/prise-neo-1.png --alt intégration Neo Coolcam Plug-007SPB2 zigbee2mqtt onglet à propos  --img width="940" height="648" %}

la prise Neo Coolcam Plug-007SPB2 dispose de **( 9 fonctions )** (là aussi identique à la Nous Smart Zigbee Socket A1Z), elle permet de

- contrôler l'état on/off ( heureusement sinon elle ne serait pas intelligente )
- de paramétrer l'état après une coupure de courant
- de paramétrer l'état de fonctionnement de la Led on/off-on/on-off/off
- de mesurer la puissance instantanée
- de mesurer l'intensité instantané du courant
- de connaître le voltage
- de mesurer la somme de l'énergie consommée
- de bloquer le fonctionnement du bouton physique
- de connaître la qualité du signal

{% picture posts/{{ page.guid }}/prise-neo-2.png --alt intégration Neo Coolcam Plug-007SPB2 zigbee2mqtt onglet expose  --img width="940" height="574" %}

{% include product-embed.html image="neo-prise-intelligente-zigbee-tuya-16a-mesure-de-consommation.jpg" title="NEO - PRISE INTELLIGENTE ZIGBEE TUYA 16A + MESURE DE CONSOMMATION (FORMAT FR)" brand="Neo coolcam" description="Contrôlez votre dispositif électrique à distance, n'importe où dans le monde depuis votre Smartphone et mesurez la consommation électrique en temps réel." affiliate="_DmKkeUb" domlink="peripheriques/6473-neo-prise-intelligente-zigbee-tuya-16a-mesure-de-consommation.html" %}

# Aqara Smart plug SP-EUC01

La prise Aqara est plus imposante par rapport aux deux précédentes, la qualité et le rendu des matériaux est présent, le plastique blanc est brillant, le bouton blanc est bien intégré. Le voyant présent en façade est très petit et discret, idéal pour les pièces de vies ( chambres etc ... ). Quand au package il est très bien fait, la notice complète.

Comme tu peux le voir sur le schéma ci-dessous, elle est aussi reconnu comme routeur ( répéteur de signal ), comme pour les autres l'intégration dans zigbee2mqtt se fait sans soucis.

{% picture posts/{{ page.guid }}/prise-aqara-1.png --alt intégration Aqara Smart plug SP-EUC01 zigbee2mqtt onglet à propos  --img width="940" height="648" %}

la prise Aqara Smart plug SP-EUC01 dispose de **( 8 fonctions )** permet de:

- contrôler l'état on/off ( heureusement sinon elle ne serait pas intelligente )
- de paramétrer l'état après une coupure de courant
- de mesurer la puissance instantanée
- de mesurer l'intensité instantané du courant
- de connaître le voltage
- de mesurer la somme de l'énergie consommée
- de **connaître la température de la pièce un plus**
- de connaître la qualité du signal

{% picture posts/{{ page.guid }}/prise-aqara-2.png --alt intégration Aqara Smart plug SP-EUC01 zigbee2mqtt onglet expose  --img width="940" height="574" %}

{% include product-embed.html image="aqara-prise-connectee-zigbee-30-smart-plug-sp-euc01.jpg" title="AQARA - PRISE CONNECTÉE ZIGBEE 3.0 SMART PLUG - SP-EUC01" brand="Aqara" description="Allumez ou éteignez les appareils connectés manuellement, à distance ou à l'aide d'un scénario horaire, et connaissez leur consommation avec la prise AQARA SP-EUC01." domlink="peripheriques/5385-aqara-prise-connectee-zigbee-30-smart-plug-sp-euc01.html" %}

# Lidl SAPZ 1 A1

{% picture posts/{{ page.guid }}/prise-lidl-1.png --alt intégration Lidl SAPZ 1 A1 zigbee2mqtt onglet à propos  --img width="940" height="648" %}

{% picture posts/{{ page.guid }}/prise-lidl-2.png --alt intégration Lidl SAPZ 1 A1 zigbee2mqtt onglet expose  --img width="940" height="192" %}

{% picture posts/{{ page.guid }}/face-arriere-comparatif-nous-A1Z-neo-007SPB2-aqara-AP007EUW01-lidl-SAPZ1A1.png --alt face arrière photo prise EU(fr) Nous, Neocoolcam, Aqara, Lidl --img width="940" height="529" %}

{% picture posts/{{ page.guid }}/face-avant-comparatif-nous-A1Z-neo-007SPB2-aqara-AP007EUW01-lidl-SAPZ1A1.png --alt face avant photo prise EU(fr) et EU, Nous, Neocoolcam, Aqara, Lidl --img width="940" height="529" %}

{% picture posts/{{ page.guid }}/lumiere-eclairage-fonctionnement-comparatif-nous-A1Z-neo-007SPB2-aqara-AP007EUW01-lidl-SAPZ1A1.png --alt Prise en fonction avec éclairage, Nous, Neocoolcam, Aqara, Lidl --img width="940" height="529" %}

{% picture posts/{{ page.guid }}/taille-prise-zigbee-reel-comparatif-nous-A1Z-neo-007SPB2-aqara-AP007EUW01-lidl-SAPZ1A1.png --alt Taille en main des prises, Nous A1Z, Neocoolcam PLUG-007SPB2, Aqara SP-EUC01, Lidl SAPZ 1 A1 --img width="940" height="529" %}

# Classement

# Conclusion


