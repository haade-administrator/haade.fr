---
guid: 60
title: "Test de l'ampoule Innr Vintage RF261"
description: "Dans un logement toujours plus moderne nous incluons des objets vintage ! va comprendre, aujourd'hui je test une ampoule Innr E27 zigbee RF261 alors vaut-elle le coût ?"
layout: post
authors: Nico
date: 2023-04-11 15:37
last_modified_at: 
categories: [Domotique, Zigbee, Tests]
tags: [post]
image: 'test-ampoule-vintage-innr-zigbee-rf261.png'
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
addViews: 74
comments: true
rating: 4.6
sourcelink:
  - https://www.innr.com/fr/produit/smart-filament-bulb-e27-vintage-globe/
  - https://eprel.ec.europa.eu/screen/product/lightsources/868086?navigatingfrom=qr
  - https://www.zigbee2mqtt.io/devices/RF_261.html
---

Dans le monde des luminaires **Innr** est bien présent, aujourd'hui et grâce à [Domadoo](https://www.domadoo.fr/fr/peripheriques/5448-innr-ampoule-connectee-type-e27-zigbee-30-pack-de-2-ampoules-vintage-filament-2200-k-type-globe-8718781552923.html?domid=39){: target="_blank"} je vais pouvoir vous présenter une ampoule vintage en forme de boule d'un **diamètre conséquent de 9,5cm** l'ampoule intelligente RF261, fonctionne sur le protocole Zigbee. Actuellement présentée à un **peu moins de 30€** par unité soit le double d'une ampoule classique, *on est en droit de se demander si cette dépense vaut le coût !*

{% include product-embed.html guid="2157" %}

Le module zigbee est très bien intégré et le moins que l'on puisse dire cette incorporation, *c'est qu'elle est minime et c'est un bon point.* Ce qui est étonnant c'est le **poids de l'ensemble 70 grammes** à peine plus qu'une ampoule classique. L'emballage est de qualité et assez bien pensé avec toutes les infos nécessaires.

{% picture posts/{{ page.guid }}/ampoule-connecte-innr-vitage-globe-zigbee-rf261.png --alt ampoule connectée innr globe vintage variable zigbee rf261 --img width="940" height="525" %}

Sur la photo ci-dessous tu pourras te rendre compte de la taille, des spécificités affichées sur l'emballage, ainsi que l'emballage des ampoules et la taille du culot E27 avec la micro-intégration du processeur Zigbee.

# Avantages de l'ampoule RF261
Cette ampoule n'est pas controlable par un variateur d'intensité, mais tu **pourras régler la variation de l'intensité** directement avec l'application dédié ou avec ton assistant domotique préféré et c'est un plus non négligeable. L'angle d'éclairage est de 320° normal tu me diras vu la taille du globe. Très réactive **moins de 0,5 secondes** à la commande **Innr garantie 15000 heures** de fonctionnement. Pour finir elle consomme 0,8w éteinte et **4,2w** à son fonctionnement maximal.

{% picture posts/{{ page.guid }}/emballage-innr-rf261-taille-specification.png --alt ampoule connectée innr globe vintage variable zigbee rf261 emballage et taille --img width="940" height="525" %}

# Compatibilité
L'ampoule Innr rf261 est compatible avec:
- Alexa
- Philips Hue
- Samsung Smartthings
- Google assistant
- Divers bridge Zigbee

* *Ne fonctionne pas avec le Apple HomeKit ou la fonctionnalité Hue Entertainment (Sync)*

# Qualité de l'éclairage

La qualité de fabrication est au rendez-vous et permet d'avoir un bon rendu de l'éclairage même à faible intensité, la source de lumière est de 2200k.
> idéal pour rendre cet éclairage vintage chaleureux.

{% picture posts/{{ page.guid }}/filaments-innr-rf261-ampoule-vintage-connecte.png --alt ampoule connectée innr globe vintage variable zigbee rf261 rendu du filament --img width="940" height="525" %}

# Intégration de l'ampoule Innr rf261

Je vais tenter d'intégrer cette ampoule dans les assistants domotiques disponible chez moi soit Homeassistant par le biais de ZHA et Zigbee2mqtt et sous Jeedom par le biais du module Zigbee. Et ainsi juger de la meilleur intégration.

# Intégration Avec Zigbee2mqtt (Z2M)

Avec Zigbee2mqtt l'intégration est instantanée et complète, le module est reconnu comme routeur, l'installation permet de contrôler:
- l'allumage de la lumière
- l'intensité
- de paramétrer un effet sur lumière
- de paramétrer la mémoire en cas de coupure de courant
- de contrôler la qualité du lien

{% picture posts/{{ page.guid }}/innr-rf261-zigbee-ha-integration.png --alt ampoule connectée innr globe vintage variable zigbee rf261 intégration avec Zigbee2mqtt --img width="940" height="725" %}

{% picture posts/{{ page.guid }}/innr-rf261-zigbee-ha-expose-integration.png --alt ampoule connectée innr globe vintage variable zigbee rf261 rendu du filament zigbee2mqtt expose --img width="940" height="275" %}

**À peine l'intégration réalisé Z2M me notifie d'une mise à jour du firmware**, c'est une première lors de mes intégrations. La mise à jour a pris un peu de temps mais elle s'est effectuée avec succès.

{% picture posts/{{ page.guid }}/innr-rf261-zigbee-ha-integration-firmware-update.png --alt ampoule connectée innr globe vintage variable zigbee rf261 rendu du filament zigbee2mqtt firmware update --img width="940" height="97" %}

## Intégration dans ZHA

Continuons par l'intégration avec le module ZHA, l'ampoule est reconnu et 100% fonctionnelle. Cependant j'ai rencontré des difficultés à l'appairage, j'ai du rapprocher l'ampoule au plus près de l'antenne, bref ça arrive. Alors quelles sont les fonctionnalités utilisables sous ZHA:
- allumage/extinction de l'ampoule
- paramétrage de l'intensité
- temps de réactivité ( transition ) à l'allumage
- mémoire en cas de coupure du courant
- mémoire de l'intensité en cas de coupure du courant
- contrôle de la qualité du lien

> Par contre pas de proposition de mise à jour du firmware


{% picture posts/{{ page.guid }}/innr-rf261-zigbee-ha-integration-zha.png --alt ampoule connectée innr globe vintage variable zigbee rf261 rendu du filament intégration dans home assistant avec ZHA --img width="940" height="817" %}

## Intégration Dans Jeedom avec le module Zigbee

Pour le module Zigbee sous Jeedom on repasseras il faudra utiliser le module Zigbee2mqtt qui, rappellons le est dispo dans le market.

{% picture posts/{{ page.guid }}/innr-rf261-zigbee-jeedom-integration.png --alt ampoule connectée innr globe vintage variable zigbee rf261 rendu du filament tentative intégration dans Jeedom --img width="940" height="279" %}

## Conclusion

> L'intégration à conseiller pour cette ampoule est une fois de plus Zigbee2mqtt, mais Zha fait presque aussi bien.

# Réinitialisation de l'ampoule

La réinitialisation de l'ampoule est capricieuse il allumer et éteindre l'ampoule en moins de 0,5 secondes et le faire 6 fois, ci-dessous la vidéo officielle Innr qui te montre la procédure.

{% include videoPlayer.html youtubeId="4zkpZSv84H4" %}

# Informations Générale

> Contrairement à ce que l'on peut trouver sur internet y compris sur le site du constructeur la fiche qualité énergétique présente sous la boîte présente ce produit en **A+**, il s'agit de l'ancienne étiquette.

La nouvelle étiquette présente une **étiquette énergétique F** dont l'efficacité énergétique est de 92

{% picture posts/{{ page.guid }}/consommation-ampoule-innr-rf261-zigbee.png --alt Consommation F ampoule connectée Innr rf261 --img width="940" height="525" %}

**TYPE DE SOURCE LUMINEUSE**

|Technologie d’éclairage utilisée|LED|
|Non-dirigée ou dirigée|Non dirigée|
|Type de culot de la source lumineuse (ou d’autre interface électrique)|E27|
|Secteur ou non secteur|Secteur|
|Source lumineuse connectée (SLC)|Oui|
|Source lumineuse réglable en couleur|Non|
|Source lumineuse à luminance élevée|Non|
|Protection anti-éblouissement|Non|
|Utilisation avec un variateur|Uniquement avec des variateurs spécifiques|

# Caractéristiques

**PARAMÈTRES GÉNÉRAUX DU PRODUIT**

|Consommation d’énergie en mode marche|5kWh/1 000 h|
|Flux lumineux (utile)|390lm|
|Correspondance pour l’angle de faisceau|Sphère (360°)|
|Température de couleur proximale|2 200K|
|Consommation d'électricité en mode «marche»|4,2W|
|Puissance en mode veille|0,38W|
|Puissance en mode veille avec maintien de la connexion au réseau pour les SLC|0,38W|
|Indice de rendu des couleurs|81|
|Dimensions extérieures|155(Hauteur) x 95(Largeur) x 95(Profondeur) mm|
|Déclaration de puissance équivalente|Oui|
|Puissance équivalente|35W|
|Coordonnée chromatique|x: 0,510 y: 0,419|
|Distribution de la puissance spectrale dans la plage de 250 nm à 800 nm, à pleine charge|Image|

**PARAMÈTRES POUR LES SOURCES LUMINEUSES LED ET OLED:**

|Indice de rendu des couleurs R9|9|
|Facteur de survie|1,00|
|Facteur de conservation du flux lumineux|0,96|

**PARAMÈTRES POUR LES SOURCES LUMINEUSES SECTEUR LED ET OLED:**

|Facteur de déphasage|0,85|
|Constance des couleurs dans les ellipses de MacAdam|5|
|Déclaration qu’une source lumineuse LED remplace une source lumineuse fluorescente sans ballast intégré d’une puissance en watts particulière|Non|
|Mesure du papillotement|0,0|
|Mesure de l’effet stroboscopique|0,0|

{% include doclink.html pdf="Fiche_868086_FR.pdf" title="Notice d'information Innr RF261 Zigbee" %}
{% include doclink.html pdf="Installation-Manual-Z30-versions-Bulbs-Candles-GU10.pdf" title="Notice d'installation Innr RF261 Zigbee" %}


# **les + du produit**
{: .blue}
- intégration du zigbee parfaite
- Consommation de 4,2W
- Classé A+ en énergie
- temps d'allumage inférieur à 0,5 secondes
- garantie 15000 heures soit 10 ans
- Dimmable

# **les - du produit**
{: .red}
- le prix

{% include product-embed.html guid="2157" %}

# Conclusion

J'ai acheté il y a peut de temps des **ampoules Osram aux caractéristiques similaires**, mais sans protocoles donc non controlables, et non dimmables au prix de **12€ par unité**, alors je peux te dire que pour moins de 30€ et vu toutes les particularités de cette ampoule Innr RF261 **le prix est justifié**, c'est un produit de grande qualité alors **tu peux foncer et investir dans cette ampoule Vintage les yeux fermés !**
