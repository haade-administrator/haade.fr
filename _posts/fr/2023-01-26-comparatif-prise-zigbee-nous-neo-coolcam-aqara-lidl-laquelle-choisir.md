---
guid: 41
title: "Comparatif prise zigbee 3.0 laquelle choisir ?"
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
  - https://zigbee.blakadder.com/
---

Dans un monde ou les prises intelligentes ne manquent pas, je vais comparer 4 prises compatibles zigbee 3.0 de la marque Nous, Neo, Aqara et Lidl. En essayant de ne rien oublier. Plus bas tu trouveras un comparatif sous forme de tableau qui m'a permis de départager ces prises.

> Merci à Domadoo de m'avoir permis de réaliser ce test.

# Comparatif visuel

Tu trouveras chez Domadoo à coup sûr, les prises Nous, neo et Aqara en version enficheable EU(fr), toutes sont fournis dans une boîte avec une notice plus ou moins complètes.

{% picture posts/{{ page.guid }}/face-arriere-comparatif-nous-A1Z-neo-007SPB2-aqara-AP007EUW01-lidl-SAPZ1A1.png --alt face arrière photo prise EU(fr) Nous, Neocoolcam, Aqara, Lidl --img width="940" height="529" %}

Rendu de la face avant, tu pourras constater par toi même que la prise Nous Smart Zigbee Socket A1Z et la prise Aqara Smart plug SP-EUC01 sont livrées en version EU, ce qui est un plus pour la polyvalence.

{% picture posts/{{ page.guid }}/face-avant-comparatif-nous-A1Z-neo-007SPB2-aqara-AP007EUW01-lidl-SAPZ1A1.png --alt face avant photo prise EU(fr) et EU, Nous, Neocoolcam, Aqara, Lidl --img width="940" height="529" %}

## Nous Smart Zigbee Socket A1Z

**Des 4 prises c'est celle qui a le meilleur rendu esthétique**, avec des plastiques translucides et un bouton de fonctionnement/intégration des plus réussis, c'est aussi la prise la plus petite et légère ex aequo avec la prise neo Plug-007SPB2, vous vous rendrez compte qu'elle intègre le protocole Tuya, en allant plus loin on se rend compte que la conception de fabrication et l'intégration des composants est totalement similaire à la neo Plug-007SPB2. Domadoo vend cette prise en version EU, Tuya doit en être le constructeur et seul l'aspect esthétique diverge de la Neo Coolcam. 

Malgré tout ces point positifs, j'ai rencontré un soucis de puissance du signal, pour rappel les 4 prises ont été installé au même endroit et il se trouve que la **Nous émet un signal deux fois moins fort que les autres**.
> Est-ce un problème du produit ou s'agit-il d'une erreur de mon installation ... .

Sur le schéma ci dessous on peut voir qu'elle fait routeur ( répéteur de signal ) et **reconnu sous le modèle zigbee TS011F**

{% picture posts/{{ page.guid }}/prise-nous-1.png --alt intégration nous A1Z zigbee2mqtt onglet à propos  --img width="940" height="648" %}

la prise Nous Smart Zigbee Socket A1Z dispose de **( 9 fonctions )**, elle permet de:

- contrôler l'état on/off ( heureusement sinon elle ne serait pas intelligente )
- de paramétrer l'état après une coupure de courant
- de paramétrer l'état de fonctionnement de la Led on/off-on/on-off/off
- de mesurer la puissance instantanée
- de mesurer l'intensité instantané du courant
- de connaître le voltage
- de mesurer la somme de l'énergie consommée
- de bloquer le fonctionnement du bouton physique
- de connaître la qualité du signal

{% picture posts/{{ page.guid }}/prise-nous-2.png --alt intégration nous A1Z zigbee2mqtt onglet expose  --img width="940" height="574" %}

{% include product-embed.html image="nous-prise-intelligente-zigbee-30-mesure-de-consommation.jpg" title="NOUS - PRISE INTELLIGENTE ZIGBEE 3.0 + MESURE DE CONSOMMATION" brand="Nous" description="La prise intelligente Zigbee 3.0 NOUS permet de contrôler tout dispositif électrique traditionnel à distance, via son smartphone ou par la voix." domlink="peripheriques/6165-nous-prise-intelligente-zigbee-30-mesure-de-consommation-5907772033517.html" %}

## Neo Coolcam Plug-007SPB2

**Similaire à la prise intelligente Nous Smart Zigbee Socket A1Z**, la prise Neo diverge en un seul point et ça se situe au niveau du rendu de la couleur des plastiques. Selon moi il est en dessous de la prise Nous, en effet l'orange est un peut plus tape à l'oeil, on le retrouve aussi au niveau du bouton ,**certains aimeront**. La prise est vendu chez domadoo en version EU(fr), sur Aliexpress vous trouverez la version EU, qui selon moi est un plus polyvalente à condition qu'elle soit enficheable en version EU(fr).

Sur le schéma ci-dessous on peut contater qu'elle fait aussi routeur ( répéteur de signal ) et **reconnu sous le modèle zigbee TS011F**


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

## Aqara Smart plug SP-EUC01

La prise Aqara est plus imposante par rapport aux deux précédentes, la qualité et le rendu des matériaux est présent, je dirais mêm qu'il est de très bonne qualité. Le plastique blanc est brillant, le bouton blanc est bien intégré. Le voyant présent en façade **est très petit et discret**, idéal pour les pièces de vies ( chambres etc ... ). Quand au package il est très bien fait, la notice complète.

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

## Lidl SAPZ 1 A1

Nous en venons à la prise lidl, comparé aux autres, c'est la plus grosse, l'intégration dans ton habitat peut être plus délicat, la qualité est au rendez-vous, c'est aussi la moins cher du marché, en contre partie elle ne propose que 2 fonctions bien en dessous de la concurrence, heureusement comme les autres elle fait office de routeurs.

{% picture posts/{{ page.guid }}/prise-lidl-1.png --alt intégration Lidl SAPZ 1 A1 zigbee2mqtt onglet à propos  --img width="940" height="648" %}

la prise Lidl SAPZ 1 A1 dispose de **( 2 fonctions )** et permet de:

- contrôler l'état on/off ( heureusement sinon elle ne serait pas intelligente )
- de connaître la qualité du signal

{% picture posts/{{ page.guid }}/prise-lidl-2.png --alt intégration Lidl SAPZ 1 A1 zigbee2mqtt onglet expose  --img width="940" height="192" %}

# Tableau comparatif

| |Nous A1Z|Neo PLUG-007SPB2|Aqara SP-EUC01|Lidl SAPZ 1 A1|
|-|--------|----------------|--------------|--------------|
|Zigbee 3.0: 2,4Ghz|OK|OK|OK|OK|
|Foncion routeur (répéteur)|Oui|Oui|Oui|Oui|
|Voltage|230v, 50-60Hz|85-250v, 50-60Hz|250v,  50-60Hz|220-240v, 50Hz|
|Ampérage|16A, Max 3680W|16A, Max 3680W|**10A, Max 2300W**{: .red}|16A, Max **3840W**{: .blue}|
|Température de fonctionnement|**-20~45°C**{: .blue}|0~40°C|0~35°C|**+5~35°C**{: .red}|
|Humidité durant Fonctionnement|Non renseigné|20~85%|0~95%|10~80%|
|Portée réception|55 m|55m|non renseigné|70m|
|Portée mesurée distance équivalente|**25 lqi**{: .red}|58 lqi|54 lqi|58 lqi|
|Dimensions|46 x 46 x 72mm|46 x 46 x 72mm|⌀62 x 77,5mm|58 x 58 x 89mm|
|Poids|56gr|**57gr**{: .blue}|**93gr**{: .orange}|**118gr**{: .red}|
|Compatibilité box|HA, Jeedom|HA, Jeedom|HA, Jeedom|HA, Jeedom|
|Nombre de fonction|9|9|8|**2**{: .red}|
|Sonde de température|Non|Non|**Oui**{: .blue}|Non|
|Notice papier|Sommaire|complet|complet|complet|
|Lumière de fonctionnement|rouge|orange|bleu|blanc|
|Tarif|[**16,99€**](https://www.domadoo.fr/fr/peripheriques/6165-nous-prise-intelligente-zigbee-30-mesure-de-consommation-5907772033517.html?domid=39){: target="_blank"}{: .orange}|[**10,61**](https://fr.aliexpress.com/item/1005003446740203.html){: target="_blank"}{: .blue}~[**16,99€**](https://www.domadoo.fr/fr/peripheriques/6473-neo-prise-intelligente-zigbee-tuya-16a-mesure-de-consommation.html?domid=39){: target="_blank"}{: .orange}|[**23,99€**](https://www.domadoo.fr/fr/peripheriques/5385-aqara-prise-connectee-zigbee-30-smart-plug-sp-euc01.html?domid=39){: target="_blank"}{: .red}|**11,99€**{: .blue}|

# Des images pour la fin

L'image ci-dessous te montrera l'intensité de la luminosité du bouton physique on/off ou du voyant de fonctionnement pour la prise Aqara. 
**À noter les prises Nous et Neo Coolcam possèdent une fonction permettant de désactiver la lumière.**

{% picture posts/{{ page.guid }}/lumiere-eclairage-fonctionnement-comparatif-nous-A1Z-neo-007SPB2-aqara-AP007EUW01-lidl-SAPZ1A1.png --alt Prise en fonction avec éclairage, Nous, Neocoolcam, Aqara, Lidl --img width="940" height="529" %}

Taille réel des prises, j'espère qu'avec cette prise de vue tu pourras te rendre compte de la dimension des modules.

{% picture posts/{{ page.guid }}/taille-prise-zigbee-reel-comparatif-nous-A1Z-neo-007SPB2-aqara-AP007EUW01-lidl-SAPZ1A1.png --alt Taille en main des prises, Nous A1Z, Neocoolcam PLUG-007SPB2, Aqara SP-EUC01, Lidl SAPZ 1 A1 --img width="940" height="529" %}

# Classement

Après une longue réflexion et à l'aide du tableau j'ai décidé d'établir ce résultat:

1. [**Neo PLUG-007SPB2**](https://www.domadoo.fr/en/peripheriques/6473-neo-prise-intelligente-zigbee-tuya-16a-mesure-de-consommation.html?domid=39){: target="_blank"}{: .blue}
2. [Aqara SP-EUC01](https://www.domadoo.fr/en/peripheriques/5385-aqara-prise-connectee-zigbee-30-smart-plug-sp-euc01.html?domid=39){: target="_blank"}{: .orange}
3. [Nous A1Z](https://www.domadoo.fr/en/peripheriques/6165-nous-prise-intelligente-zigbee-30-mesure-de-consommation-5907772033517.html?domid=39){: target="_blank"}{: .red}
4. Lidl SAPZ 1 A1

Pour en revenir à ce classement j'ai décidé de mettre en seconde position la prise Aqara avant la Nous car elle n'a pas rencontré de soucis de puissance de signal et **surtout elle intègre une sonde de température ce qui fait d'elle la seule prise deux en un, on pourra donc discuter son prix qui est le plus élevé.**.
> Si la Nous n'avait pas rencontré de soucis de signal je l'aurais mise en première position ex aequo avec la Neo.

# Conclusion
Voilà un comparatif complet, et je le sais le **classement final peut-être discutable**, mais le soucis de signal rencontré de la Nous A1Z a fait passé cette prise intelligente de la première à la troisième position. J'estime que le maillage zigbee est très important et selon moi il fait ainsi parti des critères de premier choix. **Pour terminer je ne vois qu'un seul intérêt à acheter la prise Lidl SAPZ 1 A1, son prix, pour le reste passe ton chemin.**

