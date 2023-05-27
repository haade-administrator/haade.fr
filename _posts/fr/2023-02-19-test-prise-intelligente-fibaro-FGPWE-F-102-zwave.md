---
guid: 47
title: "Test de la prise intelligente Fibaro FGPWE-102"
description: "Malgré un coût très élevé pour un tel module, que vaut vraiment cette prise intelligente z-wave 700 Fibaro FGPWE/P-102"
layout: post
author: Nico
date: 2023-02-19 18:06
last_modified_at: 
categories: [Domotique, Tests, Zwave]
tags: [post]
image: 'prise-intelligente-fibaro-wall-plug-fgpwe-f-102-zwave-700.png'
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
rating: 4.4
sourcelink:
  - https://www.fibaro.com/fr/products/wall-plug/
---

Fibaro est depuis toujours un fabriquant de module Z-wave **de très haute qualité**, ils savent allier **esthétisme et fonctionnalité**, il n'y a qu'à regarder les interrupteurs qu'ils fournissent, *tout simplement magnifique*.

Ci-dessous 3 photos de la prise intelligente Z-wave 700 FGWPE/F-102 Fibaro. D'ailleurs pour ça **je tiens à remercier Domadoo** qui m'a permis de réaliser ce test. À première vue cette prise ne présente rien d'exceptionnel *alors qu'est-ce qui pourrait justifier ce prix.* 🤔

{% picture posts/{{ page.guid }}/qualite-fabrication-prise-intelligente-fibaro-fgpw-102.png --alt qualité de fabrication de la prise intelligente fibaro FGPW-102 --img width="940" height="529" %}

{% include product-embed.html guid="2148" %}

# Variantes

La prise est dispo en version Eu France et Eu Allemand dit Schuco, je te conseil de prendre la **version Schuco** si disponible car la rétrocompatibilité est plus grande, tu rencontreras moins de soucis avec tes accessoires annexes.

{% picture posts/{{ page.guid }}/prise-intelligente-fibaro-wall-plug-E-et-F-102-zwave-700.png --alt fibaro FGPW-102 version france et allemanggne schuko --img width="940" height="529" %}

# connaître l'état de la prise avec des couleurs

Voilà comment Fibaro se démarque de ses concurrents grâce à de la couleur, mais celà justifie-t-il la différence de prix ?
Après intégration quand tu débranches la prise et que tu la rebranche, si elle s'allume brièvement en vert c'est qu'elle est reconnue dans le réseau, si c'est rouge reprend ton inclusion. ( L'inclusion se fait simplement en connectant la prise sur secteur ).

{% picture posts/{{ page.guid }}/colors-fibaro-fgpwe-102.png --alt présentation fibaro FGPW-102 différents coloris --img width="940" height="1380" %}

## dans le réseau

Reste appuyé le temps que la prise clignote en violet, ensuite une indication colorée apparaît.

- Si **vert**{: .green} tu es connecté directement à la clé
- En **jaune**{: .yellow} tu es connecté à un router
- En **violet**{: .purple} la communication est limitée
- En **rouge**{: .red} il n'y a pas de signal

## de la consommation

si la conso est de:

- 80w instantané la couleur sera **bleu**{: .blue}
- 210w instantané la couleur sera **verte**{: .green}
- 550w instantané la couleur sera **jaune**{: .yellow}
- 1250w instantané la couleur sera **orange**{: .orange}
- 2000w instantané la couleur sera **rouge**{: .red}
- 2300w instantané la couleur sera **violette**{: .purple}

{% include product-embed.html guid="2149" %}

# Le module dans Homeassistant avec ZwaveJS

Tout est fonctionnel, cependant une coquille au niveau du Firmware est reconnu comme Inconnu, je ne me suis pas penché sur la question surtout que dans Jeedom c'est bien reconnu.

**Grâce à ZwaveJS la prise intelligente Fibaro fgpw-102** fait remonter les infos de:

- Puissance
- Consommation instantanée en W
- Consommation totale en Kwh

{% picture posts/{{ page.guid }}/integration-home-assistant-zwavejs.png --alt integration prise intelligente fibaro fgpw-102 dans homeassistant avec zwavejs --img width="940" height="901" %}

> Plus toute une batterie de Paramètres et Diagnostiques bref que du Bonheur.

![Paramètre Fibaro fgpw-102 homeassistant-zwavejs]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/parametre-homeassistant-zwavejs-fibaro-fgpw-102.webp{{ cachebuster }}){: width="940" height="870"}

# le module dans Jeedom + ZwaveJS

Pour le Bonheur de tous, Jeedom utilise aussi l'excellent ZwaveJS, il fait là aussi remonter toutes les infos de consommations, cependant un petit plus à Jeedom Luna **il fait bien remonter l'info du Firmware.**

{% picture posts/{{ page.guid }}/integration-jeedom.png --alt integration prise intelligente fibaro fgpw-102 dans Jeedomavec zwavejs --img width="526" height="354" %}

Nous avons aussi accès **aux différents paramètres** du module, le Z-wave c'est quand même top surtout au niveau du maillage

{% picture posts/{{ page.guid }}/integration-jeedom-paramètres.png --alt paramètres prise intelligente fibaro fgpw-102 dans Jeedom avec zwavejs --img width="940" height="668" %}

> **PS:** sous Jeedom j'ai rencontré une latence au niveau du rafraichissement des infos contrairement à Homeassistant ou le retour d'état est plus réactif.

# Les **+**{: .blue} du produit

- de très bonne qualité
- fait remonter les infos de consommations
- jeux de lumières pour les reconnaissances numériques
- existe en norme fr et [**De Schuco**]({% post_url /fr/produit/2023-02-20-prise-intelligente-fibaro-fgpwf-102-zwave %})
- qualité de fabrication
- intégration z-wave +

# Les **-**{: .red} du produit

- le prix ( pas loin de **74€** )

# Caractéristiques techniques

|Alimentation|230V AC, 50/60 Hz|
|Courant de charge nominal|11A|
|Consommation d'énergie|jusqu'à 1,6 W|
|Puissance de sortie (pour charge résistive)|2,5kW|
|Normes|RED 2014/53/EURoHS 2011/65/EU|
|Température de fonctionnement|0 – 40°C|
|Prises de type E ou F (Schuko)|CEE 7/16 – charge max 2,5 A, CEE 7/17 – charge max 11A|
|Protocole radio|Z-Wave, Z-Wave+ (firmware 3.2 ou supérieur)|
|Radiofréquence|868,4 ou 869,8 MHz EU, 869,0 MHz RU|
|Puissance d'émission radio|jusqu'à -10 dBm (EIRP)|
|Portée|jusqu'à 50 m à l'extérieur, jusqu'à 30 m à l'intérieur, jusqu'à 40 m à l'intérieur (firmware 3.2 ou supérieur)|
|Dimensions|(P x H) 43 x 65 mm|

{% picture posts/{{ page.guid }}/dimensions-fibaro-wall-plug-E-et-F-102-zwave-700-utility.png --alt dimension fibaro FGPW-102 prise intelligente zwave --img width="320" height="175" %}

# Documents

{% include doclink.html pdf="Manuel-Fibaro-FGWPEF-102-S-v2.7_web.pdf" title="Notice installation et utilisation prise intelligente z-wave 700 Fibaro FGPWE/P-102" %}

{% include doclink.html pdf="Manuel-instruction-fibaro-FGWPx-10x-EN-SG.pdf" title="Manuel instruction image prise intelligente z-wave 700 Fibaro FGPWE/P-102" %}

{% include product-embed.html guid="2148" %}

# Conclusion

Si chez toi tu utilises seulement le réseau Z-wave alors tu as l'habitude de dépenser une fortune pour un seul module, alors si c'est ton cas le Fibaro FGPWE/P-102 est fait pour toi sans nulle doute. Pour les autres il y a bien Neo-Coolcam qui fait un module similaire pour moitié prix mais la **qualité de fabrication et la quantité de paramètres** ne sont pas du tout les mêmes.