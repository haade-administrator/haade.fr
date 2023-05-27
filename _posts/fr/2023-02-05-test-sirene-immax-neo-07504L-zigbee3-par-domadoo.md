---
guid: 44
title: "Test de la sirène Immax Neo 07504L zigbee 3.0"
description: "Test et déballage de la sirène Immax Neo zigbee 3.0 07504L quels sont ses atouts ?"
layout: post
author: Nico
date: 2023-02-05 11:09
last_modified_at: 
categories: [Tests, Haade-lab, Zigbee]
tags: [post]
image: 'immax-neo-07504L-smart-siren-exterieur-ip65-zigbee-3-fix-mural.png'
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
rating: 0  
sourcelink:
  - https://www.immax.eu/immax-neo-smart-siren-zigbee-3-0-p11154/?cid=301
  - https://www.domadoo.fr/fr/peripheriques/6352-immax-sirene-intelligente-exterieure-zigbee-30-tuya-ip65.html?domid=39
---

L'emballage est sommaire, l'alarme est accompagnée d'une prise secteur, de 4 vissers et chevilles ainsi que du manuel d'installation d'ailleurs téléchargeable ci-dessous.

{% include doclink.html pdf="Immax-Neo-Sirene-07504L-manual.pdf" title="Manuel alarme Immax Neo 07504L" %}

{% include product-embed.html guid="2137" %}

Une alarme de sécurité ou simplement une sirène protégera votre propriété à la maison, dans un chalet ou dans un garage. Son emplacement de base est de l'utiliser comme alarme de maison, mais vous pouvez choisir n'importe quel espace pour l'emplacement. En standard, la sirène est alimentée par un adaptateur secteur et est également équipée d'une batterie intégrée. La sirène fonctionnera donc même si elle est déconnectée de la source électrique par l'intrus. La sirène a un volume allant jusqu'à 95 dB, vous pouvez donc compter sur le son même dans une pièce très encombrée.

> Pour l'instant **cette alarme n'est compatible qu'avec Jeedom** et le plugin Zigbee, c'est je ne peux tester le fonctionnement du module, pour ceux qui me suivent je suis sur HA. Cependant Domadoo m'a fourni pour test une Jeedom Luna, je vais pouvoir faire le test prochainement.

En attendant je vais travailler sur ce produit pour le rendre compatible avec Zigbee2mqtt ainsi il sera utilisable aussi dans Homeassistant.

Ci-dessous un rendu des dimensions de l'Immax 07504L.

{% picture posts/{{ page.guid }}/rendu-dimension-immax-sirene-zigbee-07504L.png --alt rendu en main de alarme immax neo 07504L zigbee 3.0 --img width="940" height="529" %}

Cette alarme est intéressante pour ses caractéristiques de tenus en extérieur. **En effet elle est IP65**. Un joint caoutchouc est fourni avec ce qui permet d'isoler correctement les composants internes. Je conseil tout de même de mettre cette coméra sous un perron ou débord de toit.

En ce qui concerne l'adaptation de la prise on peut facilement la modifier sans soudures car elle est fixée grâce à un connecteur.

# Les **+**{: .blue} du produit

- Compatible extérieur
- Sur la face arrière un bouton de sécurité gris qui permet d'enclancher l'alarme en cas effraction sur le module.
- Un interrupteur interne permet d'allumer ou d'éteindre l'alarme
- Ce module est équipé d'une antenne zigbee Tuya TYZS3
- Il est équipé d'un bouton de liaison
- Équipé d'une batterie au lithium 3,7V / 300mAh en cas de coupure du courant

# Les **-**{: .red} du produit

- incompatible avec Zigbee2mqtt, Zha

{% picture posts/{{ page.guid }}/immax-neo-07504L-smart-siren-exterieur-ip65-zigbee-3-diverse-photo.png --alt diverses photos de alarme immax neo 07504L zigbee 3.0 pour exterieur ip65 --img width="940" height="529" %}

# Caractéristiques techniques

- Alimentation : DC 5V / 1A
- Batterie intégrée : batterie au lithium 3,7V / 300mAh
- Protocole : ZigBee 3.0
- Fréquence : 2400MHz~2483,5MHz
- Puissance de sortie RF maximale : ZigBee :10dBm - max 19dBm
- Portée sans fil : 30m en ligne directe , 10 m en espace bâti
- Sirène interne : 95 dB
- Courant statique : maxi 35 mA
- Courant d'alarme : maxi 150 mA
- Matériau du boîtier : plastique ABS
- Température de fonctionnement : -10°C à + 55°C
- Humidité de fonctionnement : maximum 80% (sans condensation)
- Degré de protection de la sirène : IP65
- Degré de protection de l'alimentation : IP20
- Dimensions : 145x74,5x38mm
- Contenu de l'emballage : Sirène intelligente, adaptateur secteur 230V, manuel d'utilisation
- Compatibilité système : iOS, Android, Amazon Alexa, raccourcis Apple Siri, Google Assistant, TUYA, Lidl.

{% include product-embed.html guid="2137" %}

# Conclusion

Très bon produit, qualitatif il allie tous les atouts pour devenir un incontournable dans la catégorie alarme, c'est une introduction relativement récente sur le marché, uniquement vendu chez Domadoo. Si tu es patient il sera prochainement compatible Zigbee2mqtt, je vais m'en occuper 👷.

