---
guid: 31
title: "interferencce entre zigbee et wifi frequence 2.4ghz"
description: "a prendre en compte, le zigbee et le wifi sont étalonés sur la frequence 2.4ghz, quelques conseils à prendre en compte lors du paramétrage des canaux afin d'améliorer la qualité du maillage"
layout: post
author: Nico
date: 2022-11-30 22:54
last_modified_at: 
categories: [Zigbee, Wifi, Haade-lab]
tags: []
image: 'interference-zigbee-wifi.png'
toc: true
beforetoc: ''
published: false
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
  - https://www.metageek.com/training/resources/zigbee-wifi-coexistence/
  - https://openwrt.org/start
---

Les canaux ZigBee et Wi-Fi fonctionnent tous deux dans la bande 2,4 GHz, les fréquences sont très proches de ce fait des interférences peuvent apparaîtres suivant le paramétrage des canaux. Une planification minutieuse doit être effectuée pour s'assurer qu'ils n'interfèrent pas les uns avec les autres.
L'utilisation d'un réseau ZigBee et d'un réseau Wi-Fi sur la même fréquence les fera interférer l'un avec l'autre. Le réseau zigbee sera impacté en premier lieux.

## Prérequis

- Avoir accès aux paramètres du routeur ou de la box internet
- Avoir accès aux paramètres de la clé zigbee ( ex: zigbee2mqtt )

Premièrement si vous désirez acquérir un routeur paramétrable je vous conseil les **tp-link Archer ( C6, C7 ou C60)**, ils sont bon marchés et compatible avec **la dernière version du logiciel openwrt**.

## Quel paramétrage choisir

Souvent les routeurs ont le réseau wifi paramétré le le canal 1, et du côté du zigbee le canal favoris est le 11, certains fabriquant comm Legrand par exemple ne fonctionne que sur ce canal.
Si vous laissez ces deux paramètres cohabiter et si le routeur est à proximité de la clé zigbee vous allez rencontrer des interférences, si le réseau zigbee à l'air de fonctionner, le maillage sera tout de même affaiblis.

## Ce que je préconise

Je pense qu'il est **relativement important de garder le canal zigbee sur 11** et il est certainement plus facile de commencer à modifier le canal du routeur/box wifi.
En partant de ce principe le duo gagnant serait:

1. **Zigbee:** canal **11**{: .blue}
2. **Wifi:** canal **6 ou 11**{: .blue}

En paramétrant ainsi on peut voir sur le schéma ci-dessous que la fréquence zigbee sera en dehors des fréquences wifi, le paramétrage sera ainsi optimisé.

## Limite du wifi

Quand le logement n'est pas très grand et que l'on possède qu'un routeur en AP il est facile de choisir son canal sur la fréquence 2,4Ghz. Mais de plus en plus de logements s'équipent de répéteur de signal wifi en AP, il faut savoir que dans ce cas il est important de mettre sa box/routeur sur le canal 6, et son répéteur sur le canal 11 ainsi la couverture wifi sera optimale.
Dans le cas ou l'on garde ses différents point s d'accès sur le même canal on rencontrera aussi des interférences intra wifi et la couverture ne sera pas optimisé même dégradé suivant ou l'on se trouve dans le logement. là ou ça peut poser problème, c'est quand on commence à paramétrer 3 points d'accès ou plus. On est obligé d'utiliser les trois canaux wifi ( 1, 6 et 11 ). 
Dans ce cas il faudrait revoir le canal Zigbee.

Les canaux zigbee les plus intéressants sont:
**le 15, 20, 25 et 26**{: .blue}

Effectivement si tu regardes le schéma ci-dessous tu peux voir que les canaux sont à 13 et 12Mhz d'écart avec les fréquences des canaux wifi.

Si tu regarde le schéma ci dessous tu te rends comptes que dans les mauvais cas tu te retrouves systématiquement **à moins de 10Mhz des fréquences wifi et c'est à éviter.**{: .red}
