---
guid: 51
title: "Test Interrupteur Sonoff ZBMINI-L2 extrême"
description: "Test du nouvel interrupteur zigbee de chez Sonoff le ZBMINI-L2 extrême sans neutre, est-il si petit ? Que vaut-il ?"
layout: post
author: Nico
date: 2023-03-08 15:05
last_modified_at: 
categories: [Zigbee, Tests]
tags: []
image: 'test-sonoff-zbmini-l2-extreme-end-device.png'
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
addViews: 936
comments: true
rating: 4.6
sourcelink:
  - https://itead.cc/product/sonoff-zbminil2-extreme-zigbee-smart-switch-no-neutral-required/ref/122/
---

Voilà un nouveau module qui vaut le coup de s'y attarder. **Sonoff** communique beaucoup sur la taille du **Zbmini L2 Extrême** qui est, *on peut le dire tout petit*, riquiqui face à la concurence. Mais ce module s'intègre-t-il facilement dans des boites de dérivations standard ? Est-il compatible avec les interrupteurs standard du marché, et enfin est-il intégrable dans les box domotiques du marché, tout autant de questions ou je vais tâcher d'y répondre.

Tout d'abord je voudrais remercier [Itead](https://itead.cc/product/sonoff-zbminil2-extreme-zigbee-smart-switch-no-neutral-required/ref/122/){: target="_blank" } de m'avoir fourni ce module rapidement, ainsi que d'autres qui me permettent de rédiger ce type d'article.

{% include product-embed.html image="https://i0.wp.com/itead.cc/wp-content/uploads/2022/12/ZBMINIL2-1600px-5.jpg?fit=1600%2C1600&ssl=1" title="ZBMINIL2 Extrême" brand="Sonoff" description="Module sonoff interrupteur zbmini l2 extreme le plus petit du marché" iteadlink="sonoff-zbminil2-extreme-zigbee-smart-switch-no-neutral-required" domlink="peripheriques/6619-sonoff-commutateur-intelligent-sans-neutre-zigbee-30-zbminil2.html" affiliate="_DFMzILF" %}

# Déballage du Sonoff ZBMINI L2 Extrême

Sonoff continue de produire ces emballages orange intense, une fois l'ouverture faite le module ZBmini extrême est intégré dans une mousse relativement épaisse, ce qui permet de limiter la casse lors de divers transports 🤪. Le module est fournis avec une notice sommaire que vous pouvez d'ailleurs télécharger un peut plus bas ainsi que la notice complète.

{% picture posts/{{ page.guid }}/zbmini-l2-extreme-deballage.png --alt déballage du module Sonoff Zbmini L2 Extreme --img width="940" height="529" %}

# Zbmini L2 Extreme Dimensions

Voilà un module aux dimensions hors normes, probablement le plus petit du marché pour ce type de fonctionnements. La largeur de moins de 40 mm et une hauteur de 32mm feront pallir la concurrence, **par contre l'épaisseur** du module de 18,4 mm pourrait être revu et pourquoi pas réduit.

{% picture posts/{{ page.guid }}/zbmini-l2-extreme-size-hand.png --alt taille du nouveau module Sonoff Zbmini L2 Extreme --img width="940" height="529" %}

> C'est pourquoi je me pose la question d'une intégration dans une boîte standard de dérivation aux profondeurs de 4cm ?


# Dimensions concurrence

Sous la main j'avais un qubino Z-wave et un module chinois KR2303 réputé pour être l'un des plus petits du marché, on voit bien que la dimension longueur/largeur est largement favorable au module Sonoff, pour l'épaisseur qubino fait mieux. 

> En revanche j'ai plus de mal à intégrer le module qubino que le module Sonoff Zbmini L2 extrême.

{% picture posts/{{ page.guid }}/zbmini-l2-extreme-comparatif-taille.png --alt Sonoff Zbmini L2 Extreme comparatif taille --img width="940" height="529" %}


# Intégration boite de dérivation du Zbmini L2 Extreme

{%- include alert.html type="warning" text="Vous allez devoir travailler au voisinage d'une tension de 220V qui est dangereuse si vous entrez en contact avec un conducteur électrique. Prenez garde à vos manipulations, en cas de doute coupez l'alimentation électrique." %}

{% picture posts/{{ page.guid }}/zbmini-l2-extreme-end-device-encastrement.png --alt Intégration boite dérivation Sonoff Zbmini L2 Extreme  --img width="940" height="529" %}

Comme je l'ai annoncé plus haut, pour le bien de l'article, je teste l'intégration dans une boite de dérivation d'une profondeur de 40mm. Il s'agit d'un interrupteur simple à deux positions, la première étape consiste à inclure le module dans son maillage zigbee après avoir branché les phases je branche le courant la led verte clignote, mon réseau Zigbee2mqtt activé en intégration, le module est reconnu avec succès. 
Ensuite je branche suivant le schéma ci-dessous phase in sur l'interrupter et L out sur S2

{% picture posts/{{ page.guid }}/branchement-instruction-zbmini-L2-extreme.png --alt schéma de branchement du module ZBmini L2 extreme  --img width="940" height="820" %}

Comme mentionné plus haut l'épaisseur de 18,4mm ne pose pas de soucis pour mettre en place l'interrupteur, le faite que la taille soit minime ça nou laisse le loisir de positionner les cables éléctriquesau dessus du module, du coup rien ne s'interpose entre le module et l'interrupteur.

> Je peux dire que c'est la première fois que j'arrive à intégrer un tel module sans forcer sur la prise pour la remettre en place 👌.

# ZBmini L2 Extrême dans Zigbee2mqtt

Le module est bel et bien reconnu dans Z2M, comme tu peux le voir, la quantité d'option est assez pauvre, en bref le module est contrôlable pour la fonction on/off.

![Intégration de ZBMINI L2 Extrême dans zigbee2mqtt Z2m]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/zbmini-l2-extreme-zigbee2mqtt.webp{{ cachebuster }}){: width="940" height="798"}

# Caractéristiques

|Modèle|ZBMINIL2|
|Connections|Zigbee 3.0 Sans neutre End device|
|Dimensions|39.5 x 32 x 18.4mm|
|Boitier|PC V0|
|Entrée|100-240V ~ 56/60Hz 6A Max|
|Sortie|100-240V ~ 56/60Hz 6A Max|

{% include doclink.html pdf="NOTICE-ZBMINIL2-QUICK-START.pdf" title="Notice Démarrage rapide Zbmini l2 extrême" %}

{% include doclink.html pdf="NOTICE-ZBMINIL2-MANUEL-COMPLET.pdf" title="Manuel complet ZBMINI L2 extrême" %}

## Les + du produit
{: .blue}
1. **Incontestablement la taille** Le plus petit interrupteur intelligent Zigbee peut être facilement installé dans le plus petit boîtier de montage de type EU/type 86/type 120.
2. **Prise en charge des interrupteurs du marché** Compatible avec tous les interrupteurs filaires du marché, qu'ils soient à bouton poussoir ou autres, il sera fonctionner en conséquence.
3. **Simple et fiable** En tant que commutateur Zigbee 3.0, ZBMINI Extreme peut se combiner avec des concentrateurs Zigbee pour former un réseau local domestique. Ne vous inquiétez plus de l'absence d'Internet, vous pouvez contrôler librement les appareils normalement, même si la lumière est aussi faible que 3W, non un module anti-scintillement est requis.
4. **L'intégration** à Zigbee2mqtt se fait sans soucis
5. **Le prix** le ZBMINI l2 extrêmen est vendu aux alentours de 13€

## Les - du produit
{: .red}
1. Module End Device ne fait pas routeur, peut devenir néfaste pour le maillage zigbee
2. Le plastique un peut Cheap*
3. Ne fait pas remonter les infos de consommations

# Vidéo

Malheureusement je n'ai pas sous la main les 3 modules Sonoff du moment mais j'ai trouvé une vidéo qui fait un comparatif sur les tailles actuelles

{% include videoPlayer.html youtube="jYsCcGI1_DI" %}

Je constate l'arrivée sur le marché, de plus en plus de modules interrupteurs dit "enddevice" probablement lié à l'intégration des nouvelles puces EFR32MG22 de silabs. Ça a l'avantage d'être très pratique car dans la plupart des logements en france l'interrupteur n'est pas raccordé au neutre et souvent absent. Cependant le fait de trouver de plus en plus de modules enddevice allourdi la charge du coordinateur et affaibli la solidité du maillage. Zigbee2mqqt [Propose la mise à jour du Z-stack](https://github.com/Koenkk/Z-Stack-firmware/blob/master/coordinator/Z-Stack_3.x.0/CHANGELOG.md){: target="_blank" } des puces cc2652 TI qui acceptent **désormais plus de 100 modules end devices**. De quoi accepter facilement ce type de produits.

{% include product-embed.html image="https://i0.wp.com/itead.cc/wp-content/uploads/2022/12/ZBMINIL2-1600px-5.jpg?fit=1600%2C1600&ssl=1" title="ZBMINIL2 Extrême" brand="Sonoff" description="Module sonoff interrupteur zbmini l2 extreme le plus petit du marché" iteadlink="sonoff-zbminil2-extreme-zigbee-smart-switch-no-neutral-required" domlink="peripheriques/6619-sonoff-commutateur-intelligent-sans-neutre-zigbee-30-zbminil2.html" affiliate="_DFMzILF" %}

# Conclusion

Avec l'arrivée des micropuces zigbee silabs EFR32MG22 les fabriquants peuvent désormais concevoir des modules de plus petites tailles. Ce qui est idéal pour une intégration dans les batiments anciens ou derrière une installation eléctrique déjà existante. **Sonoff** emboîte le pas et propose ce micromodule de très petite taille. *Il fait ce qu'on lui demande donc n'hésite pas à l'acheter*, tu ne seras vraiment pas embêté pour l'intégrer dans tes boites de dérivations de 40cm de profondeur.