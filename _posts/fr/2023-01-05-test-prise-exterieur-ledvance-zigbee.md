---
guid: 38
title: "Test de la prise extérieur Zigbee Ledvance Smartplug+"
description: "Test et unboxing de la prise SMART+ Compact Outdoor Plug | Prise extérieure connectée compacte pour contrôler des appareils conventionnels avec la technologie Zigbee"
layout: post
author: Nico
date: 2023-01-05 15:20
last_modified_at: 
categories: [Tests]
tags: []
image: 'external-wire-ledvance-smartplug-plus-ziggbee-ip44-4058075729322-prise-externe.png'
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
rating: 3
sourcelink:
  - https://www.ledvance.com/en/tech/products/index?productId=4058075729322&category=141283&documentId=408
  - https://www.benelux.ledvance.com/fr/particuliers/produits/smart-home/smart-home-components/smart-zigbee/composants-exterieurs-smart-avec-technologie-zigbee/prises-smart-avec-technologie-zigbee/prise-exterieure-connectee-compacte-pour-controler-des-appareils-conventionnels-avec-la-technologie-zigbee-c141283?productId=203923
---
Aujourd'hui, je vais tester et détailler un produit compatible Zigbee 3.0 rare sur le marché, celui des prises connectées **compatible en extérieur**. En France à l'heure ou j'écris ces quelques lignes, il est à ma connaissance le [seul produit disponible en vente](https://www.amazon.fr/LEDVANCE-intelligente-lext%C3%A9rieur-technologie-4058075729322/dp/B0BFK1HPSB/ref=asc_df_B0BFK1HPSB/?tag=googshopfr-21&linkCode=df0&hvadid=603411883361&hvpos=&hvnetw=g&hvrand=8196400474170599897&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9055951&hvtargid=pla-1869637444266&psc=1){: target="_blank"} en france. Si t'es ressortissant Belge tu peux te procurer la [prise lidl](https://www.lidl.be/p/fr-BE/silvercrest-prise-connectee-smart-home-pour-l-exterieur/p100351932){: target="_blank"} pour extérieur avec mesure de consommation et au prix de 22€. *Quelle bande de veinard !*

# Pour ou Contre cette prise

{% picture posts/{{ page.guid }}/prise-eu-german-zigbee-plug-ledvance-femelle.png --alt Prise extérieur Smartplug+ Ledvance prise extérieur de qualité --img width="840" height="500" %}

#### Avantage du produit
{: .blue}
- Intègre l'équipement électrique conventionnel dans les systèmes domestiques intelligents compatibles.
- Permet la commutation de sources lumineuses conventionnelles et d'autres appareils électriques.
- Connexion simple d'appareils électriques via une prise standard.
- Convient pour une **utilisation en extérieur avec IP44**, la protection contre les projections d'eau.
- Qualité de fabrication.
- Interrupteur physique avec voyant vert.
- **Compatible Zigbee2mqtt**
- Reconnu comme **routeur** dans le maillage

#### Inconvénient
{: .red}
- Absence de relevé de la consommation
- Prise aux Normes Eu Allemande (incompatible avec les normes EU France il faudra un adaptateur) ou ce [type de prise Legrand 069570](https://www.amazon.fr/dp/B071J437G1/ref=emc_b_5_i?th=1){: target="_blank"}
- Son prix [environ 35€ sur amazon](https://www.amazon.fr/LEDVANCE-intelligente-lext%C3%A9rieur-technologie-4058075729322/dp/B0BFK1HPSB/ref=sr_1_14?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2G6RFBLVOZ4WZ&keywords=ledvance+zigbee&qid=1672948663&sprefix=ledvance+zigbee%2Caps%2C87&sr=8-14){: target="_blank"}

{% picture posts/{{ page.guid }}/prise-eu-german-zigbee-plug-ledvance.png --alt Dommage ne peut être utilisé simplement sans adaptateur --img width="775" height="525" %}


# Caractéristiques

|Tension nominale| 230 V|
|Puissance admissible| jusqu'à 3680w / 16A|
|Fréquence du réseau| 50 Hz|
|Protocole| Zigbee 3.0|
|Temps d'amorçage|< 0.5s|
|Poids du produit| 120,00g|
|Diamètre| 57,0mm|
|Largeur| 57,0mm|
|Hauteur| 98,0mm|
|Nombre de cycles de commutation| 100000|
|Couleur du produit| Anthracite|
|Matériau de corps| Plastique|
|Plage de température ambiante| -10°C à +35 °C|
|Type de protection| **IP44**|



# Dimensions

{% picture posts/{{ page.guid }}/dimensions-size-smartplug-ledvance-4058075729322-prise-externe-zigbee.png --alt Dimensions zigbee prise externe Ledvance --img width="300" height="207" %}

> Afin de t'en rendre mieux compte, une petite capture d'écran de la "prise en main", quel jeux de mots 😜.

{% picture posts/{{ page.guid }}/taille-prise-en-main-ledvance-smartplug+-externe-4058075729322.png --alt Prise en main de prise externe Ledvance smartplug+ --img width="775" height="525" %}

# Notices techniques

T'as besoin de la notice ou de la fiche produit, n'hésite pas télécharge c'est en français.

{% include doclink.html pdf="notice-technique-smartplug-ledvance-externe.pdf" title="notice technique smartplug + prise externe zigbee Ledvance" %}

{% include doclink.html pdf="4058075729322_SMART_ZB_COMPACT_OUTDOOR_PLUG_EU_fr.pdf" title="fiche produit smartplug + prise externe zigbee Ledvance 4058075729322" %}

# Integration [Zigbee2mqtt](https://www.zigbee2mqtt.io/){: target="_blank"}

Comme souvent, l'intégration dans Z2M se fait sans soucis et c'est tant mieux :).

{% picture posts/{{ page.guid }}/integration-into-ledvance-smartplug-exterieur-4058075729322-zigbee2mqtt.png --alt Dimensions zigbee prise externe Ledvance --img width="493" height="672" %}

# Conclusion

La prise est de bonne qualitée, l'intégration dans zigbee2mqtt ( donc compatible Homeassistant et Jeedom ) se fait sans problème, le bouton  translucide est bien fait, cependant j'ai mis 3 étoiles car la prise n'est pas aux normes EU France donc non utilisable sans plug supplémentaire et c'est bien dommage, perso je n'ai toujours pas compris pourquoi les prises françaises n'ont pas la même norme.


