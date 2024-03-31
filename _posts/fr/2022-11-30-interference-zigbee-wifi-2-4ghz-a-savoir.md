---
guid: 31
title: "interférence entre zigbee et wifi frequence 2.4ghz"
description: "a prendre en compte, le zigbee et le wifi sont étalonés sur la frequence 2.4ghz, quelques conseils à prendre en compte lors du paramétrage des canaux afin d'améliorer la qualité du maillage"
layout: post
authors: Nico
date: 2022-11-30 22:54
last_modified_at: 
categories: [Zigbee, Wifi, Haade-lab]
tags: []
image: 'interference-zigbee-wifi-freqeunce-2.4ghz.png'
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
addViews: 565
comments: true
rating:  
sourcelink:
  - https://www.metageek.com/training/resources/zigbee-wifi-coexistence/
  - https://openwrt.org/start
  - https://community.jeedom.com/t/informations-sur-cohabitation-zigbee-et-wifi/50821
---

Les canaux ZigBee et Wi-Fi fonctionnent tous deux dans la bande 2,4 GHz, les fréquences sont très proches de ce fait des interférences peuvent apparaîtres suivant le paramétrage des canaux. Une planification minutieuse doit être effectuée pour s'assurer qu'ils n'interfèrent pas les uns avec les autres.
L'utilisation d'un réseau ZigBee et d'un réseau Wi-Fi sur la même fréquence les feras interférer les uns avec les autres. **Le réseau zigbee sera impacté en premier lieux.**

## Prérequis

- Avoir accès aux paramètres du routeur ou de la box internet
- Avoir accès aux paramètres de la clé zigbee ( ex: zigbee2mqtt )

Premièrement si vous désirez acquérir un routeur paramétrable je vous conseil les **tp-link Archer ( C5, C6, C7 ou C50, C60)**, ils sont bon marchés et compatible avec **la dernière version du logiciel openwrt**.

{% include product-embed.html image="Routeur-Wifi-double-bande-AC1200-tp-link-Archer-C50.jpg" title="Routeur TP-link archer C50" brand="TP-Link" description="Routeur tp-link compatible wifi 2,4Ghz et 5Ghz double bande" affiliate="_DdQQgD5" %}

## Quel paramétrage choisir

Souvent les routeurs ont le réseau wifi paramétré sur le canal 1, 6 ou 11, et du côté du zigbee le canal favoris est le 11, *certains fabriquant comme Legrand pour ne pas le citer, distribue des modules zigbee **qui ne fonctionnent que sous le cananl 11.***
Si vous laissez ces deux paramètres cohabiter et si le routeur est à proximité de la clé zigbee vous allez rencontrer des interférences, si le réseau zigbee à l'air de fonctionner, le maillage sera tout de même affaibli.

## Ce que je préconise

Si tu as un réseau zigbee en place avec pas mal de modules, je pense qu'il est **relativement important de garder le canal zigbee "probablement paramétré" sur 11** et il est certainement plus facile de commencer à modifier le canal du routeur/box wifi.
En partant de ce principe le duo gagnant serait:

1. **Zigbee:** canal **11**{: .blue}
2. **Wifi:** canal **6 ou 11**{: .blue}

En paramétrant ainsi, **on peut voir sur le schéma ci-dessous**, que la fréquence zigbee sera en dehors des fréquences wifi, le paramétrage sera ainsi optimisé.

{% picture posts/{{ page.guid }}/canaux-moyennement-favorable-wifi-zigbee.png --alt exemple de canaux ultrafavorable aux interferences --img width="940" height="529" %}

#### Autre cas favorable

Par contre si tu fais bien les choses, et que tu n'as pas encore commencé ton maillage Zigbee, alors sélectionne bien ton canal et dans ce cas je te conseil plutôt le 15, 20, 25 **mais surtout le 26**. Celui-ci sera en dehors de quasimment toutes les interférences wifi standard paramétrées.

1. **Zigbee:** canal **26**{: .blue} ou 25
2. **Wifi:** canal **1 ou 6**{: .blue}

{% picture posts/{{ page.guid }}/canaux-hautement-favorable-zigbee-wifi.png --alt autre exemple de canaux favorable aux interferences --img width="940" height="529" %}

## Limite du wifi

En 2,4Ghz les canaux wifi s'étendent de 1 à 14 soit 13 canaux séparé par une largeur de 5Mhz. Seuls les canaux, 1, 6 et 11 ne se chevauchent pas, c'est pourquoi ils sont largement utilisés. De ce fait et pour pallier aux soucis d'interférences une nouvelle fréquence wifi est apparu sur le marché, la fréquence 5Ghz.

#### Parlons de notre logement

Quand le logement n'est pas très grand et que l'on possède un seul routeur en AP, il est facile de choisir son canal sur la fréquence 2,4Ghz. Mais de plus en plus de logements s'équipent de répéteur de signaux wifi en AP, il faut savoir que dans ce cas il est important de mettre sa box/routeur sur le canal 6 ou 11, et son répéteur sur le canal 11 ainsi la couverture wifi sera optimale.
Mais ce n'est pas si simple, car ça ne dépend pas que de notre réseau, en effet il faudra prendre en compte le réseau de nos voisins, surtout pour les logements de type appartement ou la proximité est de mise. Pour analyser les ondes wifi équipez vous d'un logiciel d'analyse, le choix est varié.

#### Cas concret

J'ai la chance d'habiter dans une maison, de posséder un routeur multi-canal ( 2,4 et 5ghz ), mes voisins sont à proximités soit 10-12 mètres environs. **Sur le schéma ci-dessous** tu pourras voir que j'ai paramétré le canal wifi 2,4ghz du routeur sur 11 ( trait rose -50db ), tu peux aussi voir que tous les autres réseaux wifi ne m'appartiennent pas et ils sont tous paramétrés sur le canal 1, ben ceux là appartiennent aux voisins 🤬. Heureusement la puissance du signal est située entre -100 et -80Db.

> Dans ce cas pour optimiser aux mieux les fréquences tu devrais mettre le **canal zigbee sur la fréquence 15 ou 26**{: .blue}
> En appartement les analyses de réseaux sont plus complexes il sera important de choisir le réseau zigbee sur les courbes descendantes du wifi.

{% picture posts/{{ page.guid }}/wifi-analyzer.png --alt cas concret analyse un réseau wifi --img width="940" height="509" %}

Dans le cas ou l'on garde ses différents points d'accès sur le même canal on rencontrera aussi des interférences intra-wifi et la couverture ne sera pas optimisée même dégradée suivant où l'on se trouve dans le logement. là oà ça peut poser problème, c'est quand on commence à paramétrer 3 points d'accès ou plus. On est obligé d'utiliser les trois canaux wifi ( 1, 6 et 11 ). 
Dans ce cas il faudrait revoir le canal Zigbee.

### Canaux Zigbee intéressants

Les canaux zigbee les plus intéressants sont:
**le 15, 20, 25 et 26**{: .blue}

{% picture posts/{{ page.guid }}/canaux-favorable-wifi-zigbee.png --alt canaux zigbee faborable en cas de chevauchement des réseaux wifi --img width="940" height="529" %}

### Canaux à éviter

Si tu regarde le schéma ci dessous tu te rends comptes que dans les mauvais cas tu te retrouves systématiquement **à moins de 10Mhz des fréquences wifi et c'est à éviter.**{: .red}

{% picture posts/{{ page.guid }}/canaux-defavorable-wifi-zigbee.png --alt canaux zigbee defaborable en cas de chevauchement des réseaux wifi --img width="940" height="529" %}

## Conclusion

De nombreux sujets parlent de ces phénomènes d'interférences, je pense que chaque cas est différent.
- Analyse d'abord l'environnement wifi, et trouve la zone qui serait le plus avantageux pour toi.
- Ensuite paramètre le canal zigbee si tu le peux, sinon paramètre le canal wifi
  
Fait en sorte d'harmoniser et d'espacer au mieux le fréquences sur ton réseau sans fil, et j'espère que tu tomberas sur ces articles avant de commencer ton réseau zigbee ça te permettras d'avoir plus d'amplitudes sur ton paramétrage final.

> N'hésite pas à exposer ton cas sur notre forum ou par un commentaire, nous tacherons de trouver une solution ensemble.
