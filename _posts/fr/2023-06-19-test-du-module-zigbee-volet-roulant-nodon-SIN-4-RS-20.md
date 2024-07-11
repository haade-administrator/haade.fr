---
guid: 71
title: "Test du module zigbee Nodon special volet roulant SIN-4-RS-20"
description: "Nodon produit plusieurs modules zigbee 3.0 de qualité, dans cet article je vais présenter le module de contrôle de volet roulant SIN-4-RS-20"
layout: post
authors: Nico
date: 2023-06-19 08:00
last_modified_at: 
categories: [Tests, Zigbee]
tags: []
image: 'test-module-nodon-zigbee-volet-roulant-SIN-4-RS-20.png'
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
rating: 4.5
sourcelink:
  - https://nodon.fr/nodon/module-volet-roulant-zigbee/
  - https://nodon.fr/support/module-volet-roulant-zigbee/
---

**Nodon French touch fabrique des modules de très bonne qualité**, aujourd'hui et grâce à notre partenaire Domadoo je vais vous présenter le micromodule volet roulant **SIN-4-RS-20** ainsi que le module rail din compatible avec tous les micromodules de la marque.

Ce module à tous les atouts de son côté mis à part l'épaisseur qui aurait peut être pu être révisé à la baisse ainsi que celle du support rail din. 

> Mais je ne peux leurs en vouloir quand tu l'as dans les mains tu sens clairement que c'est du lourd.

**Il n'est pas que compatible volet roulant, loin de là tu pourras aisément l'utiliser sur les BSO, stores bannes enfin tout ce qui s'ouvre et se ferme sur axe rotatif à condition d'avoir les entrées éléctriques nécessaires.**

Ce module ne laisse rien au hasard, nodon à même collé une étiquette personnalisable sur le flanc pour un archivage claire dans ton tableau électrique ou derrière l'interrupteur.

{% include product-embed.html guid="2144" %}
{% include product-embed.html guid="2142" %}

Sur l'image présentée ci-dessous tu pourras te rendre compte de la taille du module et du rail-din Nodon. **Le rail din prendra une place et demi dans le tableau électrique**

{% picture posts/{{ page.guid }}/nodon-zigbee-SIN-4-RS-20-module-volet-roulant-plus-rail-din.png --alt module nodon zigbee SIN-4-RS-20 pour volet roulant taille et rail din compatibilité --img width="940" height="529" %}

## Vidéo installation Nodon

La vidéo présente la mise en place du module et le branchement avec un interrupteur filaire volet, et pour finir l'intégration dans Jeedom qui est probablement le système domotique le plus utilisé en france.

{% include videoPlayer.html youtubeId="cujMkYiD-f8" %}

## Schémas de montage

Montage sur volet roulant avec ou sans interrupteurs

{% picture posts/{{ page.guid }}/Schema_montage_SIN_4-RS-20-VR-avec-ou-sans-inter.png --alt schéma du module nodon zigbee SIN-4-RS-20 pour volet roulant avec ou sans interrupteurs --img width="940" height="470" %}

Montage sur store bannes avec ou sans interrupteurs

{% picture posts/{{ page.guid }}/Schema_montage_SIN_4-RS-20-Store-Banne-avec-ou-sans-inter.png --alt schéma du module nodon zigbee SIN-4-RS-20 pour store bannes avec ou sans interrupteurs --img width="940" height="470" %}

## Intégration Zibee2mqtt

**L'intégration dans Z2M se fait aisément** tu y trouveras toutes les commandes ainsi que le contrôle de la position à l'ouverture.

{% picture posts/{{ page.guid }}/appairage-nodon-sin-4-rs-20-zigbee2mqtt.png --alt intégration du module nodon zigbee SIN-4-RS-20 pour volet roulant dans zigbee2mqtt --img width="940" height="38" %}

{% picture posts/{{ page.guid }}/appairage-nodon-sin-4-rs-20-zigbee2mqtt-a-propos.png --alt intégration du module nodon zigbee SIN-4-RS-20 pour volet roulant dans zigbee2mqtt état --img width="940" height="689" %}

Je trouve la **mise en situation des commandes des plus limpides**, tu n'as qu'à en juger par toi même, trois commandes ouverture, descente, stop et une barre de pourcentage pour la position à l'ouverture.

{% picture posts/{{ page.guid }}/appairage-nodon-sin-4-rs-20-zigbee2mqtt-expose.png --alt intégration du module nodon zigbee SIN-4-RS-20 pour volet roulant dans zigbee2mqtt exposition des commandes --img width="940" height="219" %}

## Intégration dans Jeedom avec Zigbee

Le module Zigbee de Jeedom **le reconnait facilement et toutes les commandes y sont**, le paramétrage est un peu moins claire que z2m mais reste opérationnel

{% picture posts/{{ page.guid }}/appairage-nodon-sin-4-rs-20-jeedom-zigbee.png --alt intégration du module nodon zigbee SIN-4-RS-20 pour volet roulant dans jeedom avec le module zigbee --img width="940" height="270" %}

{% picture posts/{{ page.guid }}/appairage-nodon-sin-4-rs-20-jeedom-zigbee-commande.png --alt intégration du module nodon zigbee SIN-4-RS-20 pour volet roulant dans jeedom avec le module zigbee exposition des commandes --img width="940" height="279" %}

## Intégration dans ZHA

Pour Zha là aussi pas de soucis d'intégration cependant **il manque le réglage de la position à l'ouverture** ... Alors soit je l'ai râté, soit c'est un oubli d'intégration, bien dommage.

{% picture posts/{{ page.guid }}/appairage-nodon-sin-4-rs-20-zha.png --alt intégration du module nodon zigbee SIN-4-RS-20 pour volet roulant dans zha --img width="940" height="33" %}

{% picture posts/{{ page.guid }}/appairage-nodon-sin-4-rs-20-zha-a-propos.png --alt intégration du module nodon zigbee SIN-4-RS-20 pour volet roulant dans zha état du module --img width="940" height="449" %}

La mise en page de l'entité dans Home assistant est top. Tu pourras retrouver la même avec Z2M

{% picture posts/{{ page.guid }}/appairage-nodon-sin-4-rs-20-zha-expose.png --alt intégration du module nodon zigbee SIN-4-RS-20 pour volet roulant dans zha état de entité --img width="604" height="570" %}


## Caractéristiques Techniques

|Alimentation|230V AC ~ 50Hz|
|Capacités de commutation|230V AC – 3A|
|Puissance moteur maximum|280W Max – 60 Nm Max – Zero crossing intégré|
|Consommation|< 1W|
|Bande de fréquences radio utilisée|2,4 GHz|
|Puissance radio maximale|+10dBm|
|Portée|jusqu’à 30m en intérieur|
|Température de fonctionnement|-20°C à 60°C|
|Indice de protection|IP 20|
|Type d'identifiant de l'appareil|Dispositif de couverture de fenêtre (0x0202)|
|Dimensions|40 mm (l) x 44 mm (L) x 16.9 mm (h)|

![Capture d'image 3D Nodon SIN-4-RS-20]({{ site.baseurl }}/assets/images/posts/71/SIN-4-RS-20-360.webp{{ cachebuster }}){: width="400" height="319" class="lazyload pictaninpost"}{: target="_blank"}

## Compatibilité

- ZHA ( home assistant )
- Zigbee2mqtt (home assistant, jeedom, Gladys, Majordomo, etc..)
- Zigbee par Domoticz
- Zigbee Jeedom
- Overkiz
- Smartthings
- Smart&Connective

## **les + du produit**
{: .blue}
- la qualité de fabrication
- prise en charge mise à jour OTA
- certifié zigbee 3.0
- les nombreuses compatibilitées
- l'auto calibration

## **les - du produit**
{: .red}

- le prix

{% include product-embed.html guid="2144" %}
{% include product-embed.html guid="2142" %}

## Notices téléchargeable

Tiens voilà les liens de  toutes les notices concernant le module SIN-4-RS-20 du module volet roulant Nodon

**N**otice de présentation du module Nodon

{% include doclink.html pdf="NodOn_Zigbee_RollerShutterModule_SIN-4-RS-20-Datasheet_FR.pdf" title="Fiche technique Nodon zigbee volet roulant SIN-4-RS-20" %}

**N**otice de compatibilité des moteurs de volets, je pense que ce n'est qu'exaustif, il doit être certaineement compatible avec tous les moteurs de volets filaires du marché.

{% include doclink.html pdf="NodOn_Compatibilite-VR_V0-04_FR_160523-2.pdf" title="Compatibilité avec moteurs filaires du Nodon zigbee volet roulant SIN-4-RS-20" %}

**N**otice technique que tu retrouve dans la boîte du module

{% include doclink.html pdf="SIN-4-RS-20-UG_FR_EN-V6_digital-1.pdf" title="Notice d'installation du Nodon zigbee volet roulant SIN-4-RS-20" %}

## Conclusion

Je me répète, mais je tiens à le dire **Nodon** est une société qui fabrique des modules de **qualité, bien pensé et réfléchi**. Je ne trouve qu'un seul point négatif à ce produit, **c'est le prix qui avoisinne les 45€**, après il y a plus cher comme la marque Legrand pour ne citer qu'eux. **J'ai été surpris par la compatibilité matériel et logiciel**, ainsi que la robustesse de ce produit. Si l'intégration en rail din t'intéresse n'hésite pas à acheter le module complémentaire qui te laisse **l'accès à toute les fonctions sauf, l'interrupteur reset du module**.
