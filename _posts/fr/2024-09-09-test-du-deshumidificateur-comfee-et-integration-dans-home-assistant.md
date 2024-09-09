---
guid: 139
title: "Test deshumidificateur Comfee Easy Dry 20"
description: "Test du déshumidificateur Easy dry 20 deux en un avec fonction ioniseur et intégration dans l'assistant domotique Home Assistant."
ref: "Easy Dry 20"
layout: post
authors: [Nico]
date: 2024-09-09 18:00
last_modified_at: 
categories: [Domotique, Tests, Home-Assistant]
tags: []
video: 
image: 'test-deshumidifacteur-comfee-easy-dry-20-compatible-home-assistant.png'
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
rating: 5.0 
sourcelink:
  - https://amzn.to/3AOx2OR
  - https://www.feelcomfee.com/global
---

Suite à une saison **2024 très pluvieuse**, je me suis retrouvé avec un taux d'humidité et de la moisissure dans la cave. Alors je me suis mis en quête de l'achat d'un déshumidificateur. **Et je voulais qu'il soit compatible avec mon assistant préféré Home Assistant.**

Figures toi que pas mal de déshumidificateur du marché sont controlables via un assistant open source. **Dans Home Assistant c'est réalisable grâce à la bibliothèque communautaire HACS 2.0.**

> J'ai choisi le [déshumidificateur Comfee Easy dry 20](https://amzn.to/3XEEYeA){: target="_blank"}, 2 en 1 avec fonction Ioniseur.

## Prérequis

- Un déshumidificateur Comfee ( normal tu me diras )
- Home-Assistant
- l'application Smart Home Midea sur Smartphone
- La Bibliothèque [HACS 2.0](https://www.home-assistant.io/blog/2024/08/21/hacs-the-best-way-to-share-community-made-projects/){: target="_blank"} de préférence

{%- include alert.html type="info" text="Haade.fr participe au programme d'associés d'Amazon Services LLC, un programme de publicité d'affiliation conçu pour fournir un moyen de gagner des frais lors de la création de liens vers Amazon.com et des sites affiliés." %}

{% include product-embed.html image="deshumidifateur-easydry-20-comfee-2-en-1-ioniseur-integration-home-assistant.png" title="Déshumidificateur 2 en 1 Comfee ioniseur easy dry 20 compatible Home Assistant" brand="Comfee" description="Déshumidificateur 2-EN-1,Elimine l'humidité jusqu'à 20L/Jour, Purification d'air avec ioniseur, 4 Modes, Fonction Air Swing, Contrôle APP, Idéal pour pièces de 37-52㎡, Easy Dry 20"  amazlink="3AR2P1t" %}

## Présentation

Déjà je m'excuse pour la qualité des photos, *mais faudra faire avec*. :) Le déshumidificateur {{ page.ref }} est vendu avec un tuyau d'évacuation, une notice, le tout livré dans un carton renforcé et protégé avec du polystirène jusque là rien d'exceptionnel.

{% picture posts/{{ page.guid }}/presentation-deshumidificateur-2-en-1-ioniseur-comfee-easydry-20.png --alt Présentation du déshumidificateur Comfee 2 en 1 ioniseur easy dry 20 --img width="940" height="529" %}

**Le panneau de contrôle est simple et efficace**, certaines touches cachent deux fonctions comme par exemple **celle de la gestion du volet, active la fonction ioniseur en restant appuyé dessus.**

{% picture posts/{{ page.guid }}/fonctions-tableau-de-controle-disponibles-comfee-easydry-20.png --alt Fonctions et tableau de controle disponible du déshumidificateur Comfee 2 en 1 ioniseur easy dry 20 --img width="940" height="291" %}

Le déshumidificateur fonctionne sur le même pricipe qu'une climatisation, même gaz, et une fabrication des plus similaires. **Il n'a juste pas de fonction de refroidissement.**
Sur la face arrière une grille amovible fait office de filtre et s'il est obstrué le déshumidificateur Comfee {{ page.ref }} **émettra une alerte**.
Aussi sur la face arrière une **sortie d'évacuation** ou tu pourras brancher le tuyau fourni avec, pour choisir une évacuation sur siphon.

{%- include alert.html type="warning" text="Bien vérifier lors de la première utilisation la mise en place du bouchon." %}

Et sur la face avant si tu n'utilises pas la sortie externe tu pourras récupérer l'eau via un bac de **récupération de 3 litres**, alors c'est pas mal, mais dans une pièce humide le bac sera vite saturé, et le déshumidificateur **s'arrêtera de traiter l'air et émettra une alerte** afin de vider le bac.

{% picture posts/{{ page.guid }}/particularite-deshumidificateur-2-en-1-ioniseur-comfee-easydry-20.png --alt Particularité du déshumidificateur Comfee 2 en 1 ioniseur easy dry 20 --img width="940" height="529" %}

On ne le voit pas sur les photos, mais le **déshumidificateur se déplacera facilement grâce aux roulettes.** La capture reprend les principaux aspects du produit.

{% picture posts/{{ page.guid }}/fonction-comfee-easy-dry-20-2-en-1-ioniseur-deshumidificateur.png --alt Présentation de diverses fonctions du déshumidificateur Comfee 2 en 1 ioniseur easy dry 20 --img width="940" height="529" %}

{% picture posts/{{ page.guid }}/taille-comfee-easydry-20-deshumidificateur-2-en-1-ioniseur.png --alt Taille du déshumidificateur Comfee 2 en 1, ioniseur easydry 20 --img width="940" height="529" %}

## Intégration dans Home-Assistant

L'intégration dans Home assistant est possible. Pour celà il faudra d'abord paramétrer le déshumidificateur sur le wifi du réseau privé ( par le biais de l'application SmartHome Midea )

[Smart Home Midea pour playStore](https://play.google.com/store/apps/details?id=com.midea.ai.overseas&hl=fr){: target="_blank"}

[Smart Home Midea pour Appstore](https://apps.apple.com/fr/app/smarthome-msmarthome/id1254346490){: target="_blank"}

{% picture posts/{{ page.guid }}/application-smart-home-midea.png --alt Application Smart Home par Midea, l'application officielle pour les déshumidificateurs et climatiseurs Comfee --img width="940" height="248" %}

Télécharge l'application et suis les recommandations, le paramétrage du wifi se fait sans problèmes, une fois paramétré tu pourras piloter à distance ton déshumidificateur préféré et surtout l'intégrer dans home assistant.

{% picture posts/{{ page.guid }}/application-smarthome-midea-sur-smartphone.png --alt Application Smart Home par Midea gestion du smartphone --img width="940" height="509" %}

Maintenant dans Home assistant rend toi dans **l'onglet HACS 2.0** et tape dans le moteur de recherche **Midea** tu trouveras plusieurs applications, l'une s'appelle **Midea AC Lan est très utilisée par la communauté mais il se trouve qu'elle n'est pas compatible avec les dernières versions de Home Assistant**{: .red}, elle à l'avantage de pouvoir contrôler la fonction des volets mais pour le reste **l'autre choisi par mes soins fait le taf**.

{% picture posts/{{ page.guid }}/hacs-midea-ac-lan-integraton-comfee-deshumidificateur-2-en-1-homeassistant.png --alt Choix du programme Midea dans hacs pour contrôler le déshumidificateur Comfee 2 en 1 ioniseur easy dry 20 --img width="940" height="264" %}

Donc pour le test j'ai Choisi l'application **Midea Air Appliance (Lan)**, télécharge cette version. Pour plus d'infos tu peux te rendre directement sur le [Dépôt HACS Midea Air Appliances Lan dans Github](https://github.com/nbogojevic/homeassistant-midea-air-appliances-lan){: target="_blank"}.

{% picture posts/{{ page.guid }}/midea-air-lan-integration-comfee-home-assistant-hacs-2.png --alt Dépôt Midea AC Lan dans hacs pour contrôler le déshumidificateur Comfee 2 en 1 ioniseur easydry 20 --img width="940" height="499" %}

Une fois installée rend toi directement dans **Paramètres > Appareils et services** et **tape Midea** suis les étapes et rempli les paramètres rien de bien compliqué.

{% picture posts/{{ page.guid }}/midea-ac-lan-comfee-easydry-20-et-home-assistant.png --alt Ajout d'un appareil Midea Air Appliances Lan dans home assistant pour contrôler le déshumidificateur Comfee 2 en 1 ioniseur easydry 20 --img width="591" height="691" %}

Et voilà tu as intégré le deshumidificateur sur Home assistant. Toutes les fonctions y **sont sauf la gestion du volet**, pour le reste pas de soucis.

{% picture posts/{{ page.guid }}/fonctions-disponibles-comfee-easydry-20-home-assistant.png --alt fonctions disponibles du deshumidificateur comfee easy dry 20, 2 en 1 dans home assistant --img width="940" height="743" %}

Quelques photos de la gestion du déshumidificateur Comfee {{ page.ref }} dans home Assistant.

{% picture posts/{{ page.guid }}/controle-du-deshumidificateur-comfee-easydry-20-dans-home-assistant.png --alt Contrôle du deshumidificateur comfee easydry 20, 2 en 1 dans home assistant --img width="630" height="810" %}

> Un petit historique de fonctionnement En mode Set 

{% picture posts/{{ page.guid }}/fonction-comfee-continu.png --alt Relevé d'informations du deshumidificateur comfee easydry 20, 2 en 1 dans home assistant avec la fonction en continu --img width="352" height="395" %}

**Un petit historique de fonctionnement En mode Intelligent** 45-55%, tu peux te rendre compte du système de fonctionnement je suppose que l'oscillation s'adoucit quand la pièce a un taux d'humidité moins élevé, *à tester*.

{% picture posts/{{ page.guid }}/fonction-smart-45-55-comfee-easydry-20-dans-homeassistant.png --alt Relevé d'informations du deshumidificateur comfee easy dry 20, 2 en 1 dans home assistant avec la fonction smart --img width="630" height="543" %}

## Fonctions

Petit rappel des fonctions du déshumidificateur Comfee {{ page.ref }}, deux en un avec fonction d'assinissement de l'air par ioniseur.

**Mode consigne**
En mode consigne le déshumidificateur s'adapte à la consigne demandée

**Mode Intelligent**
En mode de déshumidification intelligente, le déshumidificateur a pour but de maintenir **le niveau d'humidité intérieure entre 45% et 55%**, ce qui est le niveau d'humidité recommandé pour un environnement sain

**Mode Continu**
Le déshumidificateur tourne en continu sans s'adapter à la consigne

**Mode de Séchage**
Le mode de séchage permet de sécher le linge même dans les jour pluvieux

**Mode Ioniseur**
En activant le mode Ioniseur le déshumidificateur assainit l'air grâce à un néon ultra-violet.

**APP contrôle**
Après avoir téléchargé l'application Smart Home par Midea, vous pouvez régler le déshumidificateur quand et où vous le souhaitez. Cet appareil est également **compatible avec Alexa et Google Home.**

**Facile à déplacer**
Les 4 roues pivotantes permettent de se déplacer facilement d'une pièce à l'autre sans avoir à soulever de lourdes charges.


## Caractéristiques

|Fabricant|Midea Europe|
|Dimensions du produit (L x l x h)|23,85 x 34,8 x 49,6 cm|
|Poids (kg)|14,3|
|Référence|Easy Dry|
|Taille|20L/jour-37-52㎡-APP-Ioniseur|
|Couleur|Blanc|
|Style|Connecté|
|Matière|Plastique, Métal|
|Tension|220 Volts|
|Watt|440 Watts|
|Capacité de débit d'air|160,8 mètres cubes par heure|
|Fonctions spéciales|Minuterie, Enregistré, continu, intelligente, sechage, ioniseur, vitesse, volet, connecté|
|Composants inclus|tuyau de drainage, manuel|
|Batterie(s) / Pile(s) requise(s)|Non|
|Poids|14,3 Kilogrammes|


{%- include alert.html type="info" text="Haade.fr participe au programme d'associés d'Amazon Services LLC, un programme de publicité d'affiliation conçu pour fournir un moyen de gagner des frais lors de la création de liens vers Amazon.com et des sites affiliés." %}

{% include product-embed.html image="deshumidifateur-easydry-20-comfee-2-en-1-ioniseur-integration-home-assistant.png" title="Déshumidificateur 2 en 1 Comfee ioniseur easy dry 20 compatible Home Assistant" brand="Comfee" description="Déshumidificateur 2-EN-1,Elimine l'humidité jusqu'à 20L/Jour, Purification d'air avec ioniseur, 4 Modes, Fonction Air Swing, Contrôle APP, Idéal pour pièces de 37-52㎡, Easy Dry 20"  amazlink="3AR2P1t" %}

## Conclusion

Comfee a une réputation, **ce modèle fonctionne très bien**, et de bonne facture, comme dit il existe d'autres déshumidificateurs de bonnes qualités mais voilà maintenant tu seras que **le déshumidificateur Comfee {{ page.ref }} est contrôlable via home assistant.** Il se démarque des autres grâce à sa fonction deux en uns d'assinissement de l'air par la technologie d'ionisation.

