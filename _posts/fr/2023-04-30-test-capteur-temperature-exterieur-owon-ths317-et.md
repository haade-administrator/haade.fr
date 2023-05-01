---
guid: 63
title: "Test du capteur de température déporté Owon THS317-ET"
description: "Le multi-capteur est utilisé pour mesurer la température et l'humidité ambiantes avec un capteur intégré et la température extérieure avec une sonde à distance. Il est disponible pour détecter les mouvements, les vibrations et vous permet de recevoir des notifications de l'application mobile. Les fonctions ci-dessus peuvent être personnalisées, veuillez utiliser ce guide en fonction de vos fonctions personnalisées."
layout: post
author: Nico
date: 2023-04-30 18:17
last_modified_at: 
categories: [Tests, Zigbee]
tags: []
image: 'capteur-temperature-air-fluide-interieur-exterieur-owon-ths317-ET-zigbee.png'
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
rating: 3,2
sourcelink:
  - https://www.owon-smart.com/zigbee-temperature-sensor-with-probe-ths-317-et-product/
---

Vu la météo pluvieuse du moment je souhaitai rester dans le même état d'esprit en te présentant aujourd'hui un **capteur de température et fluide à sonde déportée Owon THS317-ET**, il se démarque des autres produits de la même gamme, mais il coûte 20€ alors arrivera-t-il à t'intéresser en tous cas il fait partie [des top ventes sur domadoo](https://www.domadoo.fr/fr/peripheriques/5998-owon-sonde-de-temperature-deportee-sur-cable-zigbee.html?domid=39){: target="_blank"}, **dont je remercie au passage pour m'avoir gracieusement fourni ce module.**

{% include product-embed.html guid="2158" %}

Owon fabrique **une gamme de produit appelé PIR323** et le capteur THS317 en fait partie, cette gamme PIR323 **regroupe 6 modèles** et tous utilisent le même boîtier mais n'ont pas les mêmes fonctions. C'est pourquoi ce boitier comporte une lentille PIR et des trous de part et d'autres mais ne sont pas utilisés dans le THS317-ET, **celui-ci ne fait que capteur de température déporté**, mais dans la gamme tu retrouves des capteurs PIR, des capteurs de températures et humidité et même un capteur de vibration.

> Télécharge la notice des caractéristiques techniques un peut plus bas tu comprendras mieux ce que je voulais te dire.

{% picture posts/{{ page.guid }}/presentation-capteur-temperature-Owon-THS317-ET.png --alt presentation du capteur de température Owon THS317 --img width="940" height="529" %}

Le boitier est de bonne facture, je regrette tout de même que le fil de liaison de la sonde de température ne soit pas plus renforcé surtout que c'est un capteur de température à usage externe.

> Je l'ai testé dans l'eau et la remontée d'info semble correcte.

Sous le capot se trouve un circuit imprimé relativement simple et Owon a équipé son module d'une puce Zigbee Tuya ZS3L. **J'aurai préféré là aussi une puce CC253X** afin de pouvoir modifier plus facilement le Firmware, mais actuellement tous les fabriquants se tournent vers Tuya pour équiper les modules en Zigbee, certainement que c'est une question de prix. 
> Les dimensions du modules sont relativement imposante plus de 6cm de côté ce qui est énorme pour ce type de produit.

{% picture posts/{{ page.guid }}/sous-le-capot-du-capteur-temperature-Owon-THS317-ET.png --alt carte Zigbee Tuya et du circuit imprimé du capteur de température Owon THS317 --img width="940" height="529" %}

## Inclusion

L'inclusion se fait sans soucis dans **Zigbee2mqtt, ZHA et Jeedom** cependant je n'ai pas respecté la notice qui me **parle de LED rouge et verte** au bout de 10 secondes d'appuis sur le bouton reset. Je n'ai jamais pu apercevoir de Led Rouge.
> Certainement que celle-ci s'active en cas d'erreurs d'inclusions, bref ce n'est pas si grave à cette étape.

### Zigbee2mqtt

tout s'est bien passé la remontée température ne s'est pas effectué tout de suite après l'intégration, mis à part ça aucun soucis rencontré.

{% picture posts/{{ page.guid }}/owon-ths317-et-integration-zigbee2mqtt.png --alt intégration avec Z2M du capteur de température Owon THS317 --img width="940" height="43" %}

{% picture posts/{{ page.guid }}/owon-ths317-et-integration-zigbee2mqtt-a-propos.png --alt produit reconnu comme enddevice  --img width="940" height="709" %}

{% picture posts/{{ page.guid }}/owon-ths317-et-integration-zigbee2mqtt-expose.png --alt exposition du module dans Z2M --img width="940" height="264" %}

### Intégration ZHA

Du côté de ZHA aucun soucis non plus, la remonté température s'est faite correctement, tu peux voir que la précision compte un chiffre après la virgule, je regrette une précision qui aurait pu se faire deux chiffres après la virgule mais là je chipote.

{% picture posts/{{ page.guid }}/owon-ths317-et-integration-zha-homeassistant.png --alt intégration du module Owon THS317-ET dans ZHA et homeassistant --img width="940" height="26" %}

{% picture posts/{{ page.guid }}/owon-ths317-et-integration-zha-homeassistant-expose.png --alt exposition du module dans ZHA --img width="940" height="769" %}

### Intégration Jeedom

> Enfin sous jeedom, une intégration là aussi correcte, bref que du bonheur.

{% picture posts/{{ page.guid }}/owon-ths317-et-integration-zigbee-jeedom.png --alt Le ths317-et est bien reconnu dans jeedom --img width="940" height="254" %}

{% picture posts/{{ page.guid }}/owon-ths317-et-integration-zigbee-jeedom-commande.png --alt intégraiton totale du module dans Jeedom --img width="940" height="93" %}

Perso **je mettrai ZHA en tête pour cette intégration**, le fait que ce soit intégré directement dans Homeassistant est un plus, et oui si tu ne l'a pas encore compris c'est mon système domotique favoris.

{% include doclink.html pdf="guide-demarrage-rapide-owon-ths317-et.pdf" title="Guide de démarrage rapide Owon THS317-ET" %}

{% include doclink.html pdf="caracteristique-technique-pir323-Ths317-et.pdf" title="Caractéristiques techniques des capteur pir323 de la gamme Owon dont le THS317-ET" %}

## Caractéristiques techniques

|ZigBee|2,4 GHz IEEE 802.15.4|
|Profil ZigBee|ZigBee 3.0|
|Caractéristiques RF|**Fréquence de fonctionnement :** 2,4 GHz<br>**Portée en extérieur :** 100 m (zone dégagée)<br>Antenne PCB interne|
|Batterie|DC 3V (Deux piles AAA)|
|LED| bicolore (rouge, vert)|
|Température|Interne :<br>**Plage de détection :** −10~85 °C<br>**Précision de détection :** ±0,5 °C<br>Sonde à distance :<br>**Plage de détection :* * −20~100°C<br>**Précision de détection :** ±1°C|
|Cycle de rapport|Température/Humidité : 1 à 5 min<br>**PIR et vibration :**<br>**Lorsqu'il est déclenché :**<br>signaler immédiatement<br>**Non déclenché :**<br>signaler une fois par heure |
|Environnement de fonctionnement|Température : -10 ℃ ~ +55 ℃<br>Humidité : ≤ 85 % sans condensation|
|Dimensions|62(L) × 62 (L)× 15,5(H) mm|
|Longueur de ligne de la sonde déportée :|Température extérieure : 2,5 m|
|Type de montage|Support de table ou montage mural|

{% include product-embed.html guid="2158" %}

## Conclusion

Domadoo a décidé de commercialiser ce module en version température simple à moins de 20€, ce module sort du lot grâce à la sonde déportée pour le reste tout est pour le moins ordinaire, suivant tes besoins il pourrait parfaitement te convenir, de plus il est compatible entièrement avec HA et Jeedom.