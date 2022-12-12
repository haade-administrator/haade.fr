---
guid: 34
title: "Présentation de la gamme zigbee lidl smart home"
description: "voilà quelques temps que lidl a sorti sla gamme smart home silvercrest mais que vaut-elle ?"
layout: post
author: Nico
date: 2022-12-11 18:42
last_modified_at: 
categories: [Protocoles, News, Tests, Zigbee]
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

{%- include alert.html type="info" text="Prochaine vente dans vos magasins le <b>../../....</b>" %}

# Modules Zigbee Smart home Lidl Silvercrest

Déjà présenté à de nombreuses reprises, je ne vais pas m'attarder sur ces produits, par contre on peut lire à gauche et à droite qu'ils ne s'utilisent qu'avec la box Smart Home, eh bien ce n'est pas le cas, chez moi ils sont intégrés à Home Assistant par le biais de la passerelle [Zigbe2mqtt](https://www.zigbee2mqtt.io/supported-devices/#v=Lidl){:target="_blank"}.

**Avantage:**{: .blue}
1. Le prix de 10 à 30€ pour la multiprise
2. Une fabrication de qualité
3. une intégration facile à d'autres systèmes zigbee
4. un fonctionnement stable

**Inconvénient:**{: .red}
- Des dimensions déroutantes, il n'y a qu'à voir le capteur de mouvement qui est 2 à 3 fois plus grand que la conccurrence.

{% picture posts/{{ page.guid }}/module-zigbee-smart-home-lidl-silvercrest.jpg --alt ensemble de modules smart home zigbee 3.0 lidl silvercrest, module prise simple, multiprise et capteur de mouvement --img width="940" height="529" %} 

Ci-dessous une présentation sommaire avec photo

## Prise simple

{% picture posts/{{ page.guid }}/prise-simple-zigbee-lidl-silvercrest.jpg --alt prise lidl silvercrest simple zigbee 3.0 --img width="940" height="529" %}

**Infos Techniques**
- Système de connexion sans fil: Zigbee 3.0
- Puissance: max. 3 840 W (220-240 V / 16 A)
- Dimensions: env. 5,8 x 5,8 x 8,9 cm
- Poids: 118gr

## Silvercrest Multi-prise Usb

{% picture posts/{{ page.guid }}/multiprise-zigbee-lidl-silvercrest-usb.jpg --alt multiprise lidl silvercrest simple zigbee 3.0 avc port usb --img width="940" height="529" %}

**Infos Techniques**
- USB-A : 5 V 2,4 A /port
- Total 6 A (30 W) max.
- Bloc multiprise à 3 prises : (16 A/220-240 V~ 50 Hz)
- Charge totale maximale 3 840 W

**À Savoir**

- Un routeur est nécessaire pour utiliser ce produit (non inclus)
- Fonction « Smart Fast Charge » pour un temps de charge optimisé
- Notification du statut (ON/OFF) Protection contre les surintensités
- Guide d’utilisation rapide (notice complète disponible par application ou - téléchargement à partir du site web de service)
- Protocole de connexion sans fil : Zigbee 3.0

## Capteur Mouvement

Détecte les mouvements grâce à un capteur infrarouge
Pour une utilisation comme détecteur de mouvement ou pour commander des éclairages.

{% picture posts/{{ page.guid }}/capteur-mouvement-lidl-zigbee-silvercrest.jpg --alt capteur de mouvement lidl silvercrest zigbee 3.0 --img width="940" height="529" %}

**Infos Techniques**

- Alarme anti-détérioration
- Ce produit peut être intégré à d’autres systèmes compatibles avec ZigBee 3.0
- Portée de detection: Max 10m
- Angle de détection : 120°
- Dimensions: 
- Poids:


# Webshop Belgique

[Boutique en ligne Lidl Livraison Belgique](https://www.lidl.be/q/fr-BE/search?offset=24&q=smart%20home){:target="_blank"}

# L'application Lidl SmartHome

# Conclusion

Les produits Lidl Smart Home ne sont pas seulement moins chers que des produits de marques similaires, ils réduisent également votre facture d’énergie. Bon pour votre porte-monnaie et pour l’environnement. Les produits Smart Home sont en outre faciles à installer et à commander et grâce à la technologie Zigbee 3.0, ces produits sont de plus compatibles avec les produits intelligents d’autres fabricants. **Le label OBL vous indique que ces produits ont été testés de manière approfondie par un prestataire de services de test indépendant** pour détecter les défauts logiques, fonctionnels et techniques et que la sécurité des informations est garantie.
