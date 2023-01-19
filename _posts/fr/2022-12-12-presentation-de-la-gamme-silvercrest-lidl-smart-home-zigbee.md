---
guid: 34
title: "Présentation de la gamme zigbee lidl smart home"
description: "voilà quelques temps que lidl a sorti la gamme smart home silvercrest mais que vaut-elle réellement?"
layout: post
author: Nico
date: 2022-12-11 18:42
last_modified_at: 2023-01-18 16:02
categories: [News, Zigbee]
tags: []
image: 'presentation-gamme-lidl-silvercrest-smart-home.png'
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
  - https://www.lidl.fr/la-variete-lidl/smart-home
---

Lidl commercialise depuis un moment des produits connectés fonctionnant en **Zigbee 3.0**, les gammes concernées sont **Silvercrest** mais aussi **Livarno**. [Cliquez ici pour accéder à l'ensemble de la Gamme Zigbee Lidl](https://www.lidl.be/h/fr-BE/maison-connectee/h10005939?pageId=%2F10005756%2F10005939&brand=silvercrest&brand=livarno+lux&brand=livarno+home&idsOnly=false&productsOnly=false){:target="_blank"}.
> Produits imposants, emballage de qualité, au premier abord qualitatif, mais qu'en est-il réellement ? pouvons-nous nous fier à ce matériel !

{%- include alert.html type="info" text="Prochaine vente dans vos magasins le <b>18/01/2023</b>" %}

# Modules Zigbee Smart home Lidl Silvercrest

Déjà présenté à de nombreuses reprises, je ne vais pas m'attarder sur ces produits, par contre on peut lire à gauche et à droite qu'ils ne s'utilisent qu'avec la box Smart Home, eh bien ce n'est pas le cas, chez moi ils sont intégrés à Home Assistant par le biais de la passerelle [Zigbee2mqtt](https://www.zigbee2mqtt.io/supported-devices/#v=Lidl){:target="_blank"}.

**Avantage:**{: .blue}
1. Le prix de 10 à 30€ pour la multiprise
2. Une fabrication de qualité
3. une intégration facile à d'autres systèmes zigbee
4. fonctionnent avec Zigbee2mqtt
5. un fonctionnement stable

**Inconvénient:**{: .red}
- Des dimensions déroutantes, il n'y a qu'à voir le capteur de mouvement qui est 2 à 3 fois plus grand que la conccurrence.

{% picture posts/{{ page.guid }}/module-zigbee-smart-home-lidl-silvercrest.jpg --alt ensemble de modules smart home zigbee 3.0 lidl silvercrest, module prise simple, multiprise et capteur de mouvement --img width="940" height="529" %} 

Ci-dessous une présentation sommaire avec photo, des 3 modules probaablement les plus utilisés du moment.

## Prise simple Modèle HG06337

{% picture posts/{{ page.guid }}/prise-simple-zigbee-lidl-silvercrest.jpg --alt prise lidl silvercrest simple zigbee 3.0 --img width="940" height="529" %}

**Infos Techniques**

|Tension de fonctionnement| 220–240 V∼, 50 Hz|
|Courant de sortie| HG06337-FR 16 A max. (3840 W)|
|Plage de fréquence| 2,400–2,483 GHz|
|Puissance d'émission| max. < 1 dBm|
|Protocole de communication| ZigBee 3.0|
|Portée de réception| env. 70 m (champ libre)|
|Température de fonctionnement| de +5 à +35 °C|
|Humidité durant le fonctionnement| de 10 à 80 %|
|Température de stockage| de 0 à +45 °C|
|Dimensions| 58 x 58 x 89 mm|
|Poids| 118gr|
|Classe de protection| IP21|

{% include doclink.html pdf="notice-prise-simple-lidl-silvercrest-367547-fr.pdf" title="Notice Prise Simple  SAPZ 1 A1" %}


## Silvercrest Multi-prise Usb Modèle HG06338

{% picture posts/{{ page.guid }}/multiprise-zigbee-lidl-silvercrest-usb.jpg --alt multiprise lidl silvercrest simple zigbee 3.0 avc port usb --img width="940" height="529" %}

**Infos Techniques**

|Tension de fonctionnement| 220–240 V∼, 50 Hz|
|Courant de sortie (total)|HG06338-FR 16 A max. (3840 W)|
|Courant de sortie USB-A|6 A max. au total, 2,4 A max. par port|
|Plage de fréquence| de 2,400 à 2,483 GHz|
|Puissance d'émission| max. < 3 dBm|
|Protocole de communication| ZigBee 3.0|
|Portée de réception| env. 70 m (champ libre)|
|Température de fonctionnement| de +5 à +35 °C|
|Humidité durant le fonctionnement| de 10 à 80 %|
|Température de stockage| de 0 à +45 °C|
|Longueur du câble| 140 cm|
|Dimensions|HG06338-FR 350 x 65 x 41 mm|
|Poids|680 g|
|Classe de protection| IP21|


{% include doclink.html pdf="notice-multiprise-lidl-silvercrest-367548-all.pdf" title="Notice Multiprise  SPSZ 3 A1" %}

**À Savoir**

- Un routeur est nécessaire pour utiliser ce produit (non inclus)
- Fonction « Smart Fast Charge » pour un temps de charge optimisé
- Notification du statut (ON/OFF) Protection contre les surintensités
- Guide d’utilisation rapide (notice complète disponible par application ou - téléchargement à partir du site web de service)
- Protocole de connexion sans fil : Zigbee 3.0

## Capteur Mouvement modèle SMSZ 1 B2

Détecte les mouvements grâce à un capteur infrarouge.
Pour une utilisation comme détecteur de mouvement ou pour commander des éclairages.

{% picture posts/{{ page.guid }}/capteur-mouvement-lidl-zigbee-silvercrest.jpg --alt capteur de mouvement lidl silvercrest zigbee 3.0 --img width="940" height="529" %}

**Infos Techniques**

- Alarme anti-détérioration
- Ce produit peut être intégré à d’autres systèmes compatibles avec ZigBee 3.0

|Tension de fonctionnement|3v|
|Type de piles|2x1,5v (AAA)|
|Plage de fréquence|de 2,4 à 2,485 Ghz|
|Puissance d'émission max|13dbm|
|Durée de fonctionnement|12 mois (60 sonneries/jour)|
|Hauteur de montage|2,1m|
|Protocole de communication|Zigbee 3.0|
|Portée de réception|env 70m (surface dégagée)|
|Champ optique/angle de saisie|< 10m à +25°C/120°|
|Température de fonctionnement|de +5°c à +35°C|
|Humidité durant le fonctionnement|de 10 à 80%|
|Dimensions|40x77x46mm (avec fixation murale)|
|Indice de protection IP|IP21|

{% include doclink.html pdf="notice-detecteur-mouvement-400869-lidl-silvercrest-fr.pdf" title="Notice détecteur de mouvement SMSZ 1 B2" %}


# Webshop Belgique

[Boutique en ligne Lidl Livraison Belgique](https://www.lidl.be/q/fr-BE/search?offset=24&q=smart%20home){:target="_blank"}

# Conclusion

> Le rapport qualité prix est indéniable, si les dimensions des produits ne sont pas un critère de choix, alors foncez !

Les produits Lidl Smart Home ne sont pas seulement moins chers que des produits de marques similaires, ils réduisent également votre facture d’énergie. Bon pour votre porte-monnaie et pour l’environnement. Les produits Smart Home sont en outre faciles à installer et à commander et grâce à la technologie Zigbee 3.0, ces produits sont de plus compatibles avec les produits intelligents d’autres fabricants. **Le label OBL vous indique que ces produits ont été testés de manière approfondie par un prestataire de services de test indépendant** pour détecter les défauts logiques, fonctionnels et techniques et que la sécurité des informations est garantie.
