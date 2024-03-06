---
guid: 110
title: Tests capteurs Sonoff zigbee SNZB-03P et SNZB-06P
description: test des capteurs de mouvements et présences humaines sonoff SNZB-03P et SNZB-06P zigbee quelles différences, sont-ils bien reconnus dans nos assistants.
ref: SNZB-03P et SNZB-06P
layout: post
author: Nico
date: 2024-02-27 18:43
last_modified_at: null
categories:
  - Tests
  - Zigbee
tags: []
image: detecteur-mouvement-et-presence-humaine-zigbee-sonoff-snzb-03p-snzb-06p.png
toc: true
beforetoc: ""
published: true
noindex: false
sitemap:
  changefreq: monthly
  exclude: no
  priority: 0.5
  lastmod: null
locale: fr_FR
comments: true
rating: 4
sourcelink:
  - https://sonoff.tech/product/gateway-and-sensors/snzb-03p/
  - https://sonoff.tech/product/gateway-and-sensors/snzb-06p/
slug: tests-capteurs-sonoff-zigbee-snzb-03p-snzb-06p
---

Comme d'habitude **je remercie Domadoo et itead** pour le prêt de ces deux modules **Sonoff** Zigbee que sont les {{ page.ref }}, ce sont deux modules de détections de présences que tout oppose, et pourtant assez similaire. Dans cet article je vais tester le fonctionnement et l'intégration dans Zigbee2mqtt et ZHA.

## Sonoff SNZB-03P

{% include product-embed.html guid="2191" %}

Le [Sonoff snzb-03P](https://www.domadoo.fr/fr/securite/6923-sonoff-detecteur-de-mouvement-zigbee-30.html?domid=39){: target="_blank"} est similaire à ce que sait faire la concurrence, un design tout en longueur, un bouton d'appairage et un support magnétique **font de ce produit ce qu'il est.**

Pour commencer, détaillons l'emballage du sonoff snzb-03p, livré dans un emballage orange comme le reste de la gamme zigbee, le module est livré avec:
- un support magnétique, 
- du double face 
- un lot de chevilles et visses. 
- Pour terminer une notice sommaire mais suffisante.

{% picture posts/{{ page.guid }}/deballage-capteur-presence-sonoff-zigbee-snzb-03p.png --alt déballage du capteur de présence sur pile zigbee 3.0 de la marque Sonoff le snzb-03p --img width="940" height="529" %}

L'ouverture du module pour l'accès **à la pile de format 2477** est relativement simple et de bonne fabrication. Dans l'ensemble le détecteur sonoff snzb-03p est bien conçu. 

> La marque Sonoff à su s'adapter et se hisser au haut de gamme chinois qui est du même niveau que la gamme Xiaomi Aqara, selon moi bien sûre.

{% picture posts/{{ page.guid }}/demontage-capteur-presence-zigbee-sonoff-snzb-03p.png --alt démontage et présentation des entrailles du capteur de présence sur pile zigbee 3.0 de la marque Sonoff le snzb-03p --img width="940" height="529" %}

Afin de te rendre compte de la taille du module, voici rien que pour toi une petite capture pour te rendre compte du volume du produit. La taille est tout de même imposante, on aurait peut être préféré un capteur plus plat et de forme ronde pour une intégration plus discrète, dans nos logements.

{% picture posts/{{ page.guid }}/taille-sonoff-snzb-03p.png --alt rendu de la taille du capteur de présence sur pile zigbee 3.0 de la marque Sonoff le snzb-03p --img width="940" height="529" %}

### Caractéristiques du Sonoff snzb-03p

**Détection plus rapide en 5 secondes**
Allumez automatiquement les lumières immédiatement lorsque vous passez et éteignez la lumière après votre départ, le temps le plus court peut atteindre 5 secondes, vous aidant à économiser de l'énergie.
**Durée de vie de la batterie de 3 ans**
Alimenté par la batterie CR2477, la durée de vie de la batterie est prolongée jusqu'à plus de 3 ans, éliminant ainsi les soucis liés aux remplacements fréquents de la batterie.
**Compatible Zigbee 3.0**
Prend en charge les hubs Zigbee utilisant le protocole Zigbee 3.0 tels que SONOFF NSPanel Pro , SONOFF iHost , SONOFF ZB Bridge Pro , SONOFF ZBDongle-E et Echo Plus 2nd…


### Caractéristiques techniques du Sonoff snzb-03p

|Modèle|SNZB-03P|
|Température de fonctionnement|-10°C~60°C|
|Connexion sans fil|Zigbee 3.0|
|Humidité de fonctionnement|5-95 % HR, sans condensation|
|Portée de détection|6m(20f), 110°|
|Modèle de batterie|CR2477(3V)|
|Poids net|54g|
|Dimensions du produit|44x44x65mm|

## Présentation du Sonoff SNZB-06P

{% include product-embed.html guid="2190" %}

Voilà un nouveau venu de la gamme Sonoff, c'est un détecteur de mouvement nouvelle génération qui gère en un plus d'une capture de présence classique, la détection statique de personnes **grâce à la nouvelle détection par micro-ondes.**

{% picture posts/{{ page.guid }}/presentation-capteur-presence-humaine-sonoff-zigbee-snzb-06p.png --alt présentation du capteur de présence humaine sur secteur zigbee 3.0 de la marque Sonoff snzb-06p --img width="940" height="529" %}

D'après ce que j'ai pu lire à droite et à gauche ce capteur nouvelle génération à micro-onde 5,8Ghz surpasse tout ce qui a été fait jusqu'à présent dans le domaine de la capture de la présence humaine. Point négatif en premier abord **ce module ne fonctionne pas sur pile mais en 5v** sur secteur grâce à une connection usb-c et adaptateur fournis avec le module. 

> Eh oui la détection par micro-ondes est énergivores

Comme tu peux le voir ci-dessous le capteur de présence humaine nouvelle génération sonoff SNZB-06P est livré avec une notice d'utilisation et une notice sur les faux négatifs pouvant être détecté, et oui ce module est ultra sensible. **tu y trouveras aussi un cable usb-c**, des chevilles et visses ainsi qu'un **double face 3M** et bien sure le fameux *support magnétique.*

{% include doclink.html pdf="SNZB-06P-Pre-Use-Instructions.pdf" title="Notice faux-positifs Sonoff SNZB-06P" %}

{% picture posts/{{ page.guid }}/deballage-capteur-presence-humaine-sonoff-zigbee-snzb-06p.png --alt déballage du capteur de présence humaine sur secteur zigbee 3.0 de la marque Sonoff snzb-06p --img width="940" height="529" %}

> D'après le fabriquant ce module est très précis et capable de mesurer la différence de lumière ainsi que les présences humaines statiques.

Une petite capture d'écran pour te rendre compte de la taille du Sonoff SNZB-06P

{% picture posts/{{ page.guid }}/taille-sonoff-snzb-06p.png --alt rendu de la taille du capteur de présence humaine sur secteur zigbee 3.0 de la marque Sonoff snzb-06p --img width="940" height="529" %}

Ci-dessous une image qui te permet de mieux juger l'architecture similaire des deux produits, une différence remarquable au niveau du capteur, le reste est relativement similaire.

{% picture posts/{{ page.guid }}/comparatif-taille-et-design-detecteur-de-mouvement-presence-personne-sonoff-snzb-03p-et-snzb-06p.png --alt comparatif de la taille et du dessin des capteurs de présence sur pile zigbee 3.0 de la marque Sonoff le snzb-03p vs snzb-06p --img width="940" height="529" %}

### Caractéristiques du Sonoff snzb-06p

En outre, le SNZB-06P dispose de **trois niveaux de sensibilité**, jusqu'à une distance de détection de 4 m (13 pieds). Et il dispose de plusieurs options d'installations, comme l'attraction magnétique, le collage avec un adhésif 3M ou une vis, vous pouvez le placer partout où vous en avez besoin.

**Détection de présence SNZB-06P basé sur un radar à micro-ondes de 5,8 GHz**, il peut détecter un mouvement ou une personne immobile. Il allume automatiquement les lumières lorsque vous approchez et les maintient allumées jusqu'à votre départ.
**Détection de la lumière** Le détecteur de lumière intégré garantit que les lumières ne s'allument que lorsqu'une présence est détectée dans l'obscurité, vous aidant ainsi à économiser de l'énergie.

{% include doclink.html pdf="User-Manual_SNZB-06PEN-V1.0.pdf" title="Manuel d'utilisation Sonoff SNZB-06P" %}

### Caractéristiques techniques du sonoff snzb-06p

|Modèle|SNZB-06P|
|Alimentation|5V⎓1A|
|Connexion sans fil|Zigbee 3.0|
|Température de fonctionnement|-10 ℃ ~ 60 ℃|
|Type d'appareil Zigbee|Routeur|
|Humidité de travail|0 ~ 90 % HR, sans condensation|
|Dimensions du produit|44,2 × 44,2x59 mm|

## Intégration opensource Z2M et ZHA {{ page.ref }}

### le SNZB-03P

{% include product-embed.html guid="2191" %}

Le module de détection SNZB-03P est bien reconnu dans Zigbee2mqtt et **ZHA**, donc compatible avec Jeedom et Home Assistant.

{% picture posts/{{ page.guid }}/sonoff-snzb-03p-mouvement-illumination-z2m.png --alt compatibilité sonoff snzb-03p et zigbee2mqtt --img width="940" height="529" %}

**Les points positifs de zigbee2mqtt sont indéniables tu pourras:**
- paramétrer le temps du retour d'état de la détection de présence
- contrôler le niveau de batterie

{% picture posts/{{ page.guid }}//detection-mouvement-sonoff-snzb-03p-z2m.png --alt détection de mouvement sonoff snzb-03p et zigbee2mqtt --img width="940" height="529" %}

Regarde bien la **détection de présence qui est très hachurée** un peu plus bas avec le sonoff SNZB-06P la détection est totalement différente à toi de voir ce qui pourrait te corresondre le mieux.

**La détection de luminosité se fait sans soucis que ce soit dans zigbee2mqtt ou ZHA.**

{% picture posts/{{ page.guid }}/detection-luminosite-sonoff-snzb-03p-z2m.png --alt détection de luminosité sonoff snzb-03p et zigbee2mqtt --img width="940" height="529" %}

La détection de présence Sonoff SNZB-03P n'apporte pas de nouveautées sur ce type de module mais il a le mérite de fonctionner correctement et d'être précis.

### SNZB-06P

{% include product-embed.html guid="2190" %}

**Annoncé comme compatible dans ZHA par Sonoff**, je me rend compte que ce n'est **pas** réellement **le cas**, dans zigbee2mqtt toutes les fonctions sont compatibles.

{% picture posts/{{ page.guid }}/compatibilite-zha-errone-snzb-06p-selon-sonoff.png --alt compatibilité snzb-06p annoncé par Sonoff --img width="940" height="529" %}

> Dans zigbee2mqtt la compatibilité est de 100%

{% picture posts/{{ page.guid }}/detection-presence-luminosite-sonoff-snzb-06p-zigbee2mqtt.png --alt intégration du sonoff snzb-06p et zigbee2mqtt --img width="940" height="529" %}

La détection de la luminosité est aussi fonctionnelle dans zigbee2mqtt ce qui n'est pas le cas dans ZHA malheureusement.

{% picture posts/{{ page.guid }}/detection-luminosite-sonoff-snzb-06p-dans-zigbee2mqtt.png --alt détection de luminosité sonoff snzb-06p et zigbee2mqtt --img width="940" height="529" %}

En ce qui concerne la détection de présence dans zigbee2mqtt **tu peux te rendre compte que les plages de détections sont larges et constantes** j'ai bien peur que celà crée des **faux-positifs**, la détection est ultra sensible, tu pourras régler soit sur le module soit dans zigbee2mqtt la sensibilité ce qui rend peut-être ce module plus complexe à paramétrer. Surtout si tu l'utilises dans ta gestion d'une alarme.

{% picture posts/{{ page.guid }}/detection-presence-sonoff-snzb-06p-zigbee2mqtt.png --alt détection de la présence dans zigbee2mqtt du sonoff snzb-06p et zigbee2mqtt --img width="940" height="529" %}

**Dans Zigbee2mqtt tu peux régler:**
- la sensibilité selon 3 niveaux
- ainsi que le délai de retour d'état détecté/non détecté très pratique

{% picture posts/{{ page.guid }}/sensibilite-distance-snzb-06p-sonoff.png --alt schéma de réglage de la sensibilité à la détection du sonoff snzb-06p --img width="940" height="529" %}

**En ce qui concerne la compatibilité avec ZHA** je suis assez sceptique, déjà tu ne peux pas paramétrer les différentes sensibilités par l'interface, de plus deux commandes remontent l'une pour la détection qui ne fonctionne pas et l'autre pour l'occupation celle là fonctionne, il y a **bien une erreur car la détection devrait être la capture de luminosité** et ce n'est pas le cas.

{% picture posts/{{ page.guid }}/sonoff-snzb-06p-occupation-mouvement-zha-homeassistant.png --alt intégration dans ZHA du sonoff snzb-03p et zigbee2mqtt --img width="940" height="529" %}

> Tu peux te rendre compte que la détection de la luminosité est mal renseigné dans ZHA

{% picture posts/{{ page.guid }}/detection-mouvement-erreur-zha-sonoff-snzb-06P.png --alt detection mouvement erronné dans ZHA du sonoff snzb-03p et zigbee2mqtt --img width="940" height="529" %}

La détection de **mouvement (occupation) dans ZHA fonctionne** de la même façon que sous Zigbee2mqtt

{% picture posts/{{ page.guid }}/detection-occupation-zha-sonoff-snzb-06p.png --alt détection présence occupation dans ZHA du sonoff snzb-03p et zigbee2mqtt --img width="940" height="529" %}

{% include product-embed.html image="SNZB-03P.png" title="Détecteur présence SNZB-03P" brand="Sonoff" description="détecteur de présence zigbee dernière génération" iteadlink="sonoff-zigbee-motion-sensor-snzb-03p" domlink="securite/6923-sonoff-detecteur-de-mouvement-zigbee-30.html" %}

## Conclusion

Personnellement du moins pour le moment **je serai** plutôt **tenté d'acheter le Sonoff SNZB-03P** au lieu du Sonoff SNZB-06P, je ne te parle pas du fait que ce dernier doit être branché constemment sur une source d'alimentation, mais par le fait que la détection par micro onde est **très très sensible**, même en paramétrant cette sensibilité et pourrait ainsi déclencher l'alarme trop facilement. Je ne met pas en doute son efficacité qui est certainement supérieur au Sonoff SNZB-03P mais **j'ai bien peur qu'il ne déclenche plus de faux-positifs que son grand frère.**

> Dans l'ensemble ces deux modules sont de bonnes factures et la qualité de fabrication est indéniable. Maintenant à toi de voir.

{% include product-embed.html image="SNZB-06P.png" title="Détecteur présence humaine micro onde SNZB-06P" brand="Sonoff" description="détecteur de présence zigbee nouvelle génération à micro ondes" iteadlink="sonoff-zigbee-human-presence-sensor" domlink="securite/6827-capteur-de-presence-humaine-zigbee-30-technologie-radar-sonoff.html" %}
