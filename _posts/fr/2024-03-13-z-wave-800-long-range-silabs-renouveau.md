---
guid: 113
title: "Z-wave 800LR Silabs relance z-wave"
description: "Depuis le rachat de la fabrication des puces Z-wave, et l'avancée significative sur le marché, Silabs s'apprête à rescussiter le Z-wave sur le marché Européen"
ref: ""
layout: post
authors: Nico
date: 2024-03-13 12:47
last_modified_at: 
categories: [News, Z-wave]
tags: []
image: 'z-wave-800-lr-silabs-relance-le-protocole.png'
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
  - https://www.heltun.com/post/comparing-z-wave-zigbee-and-wi-fi-what-should-you-choose-for-your-installation
  - https://blog.domadoo.fr/80136-la-z-wave-alliance-devoile-la-certification-z-wave-plus-v2-pour-la-serie-700/
---

Depuis le rachat de la fabrication des puces Z-wave, et l'avancée significative sur le marché, **Silabs s'apprête à rescussiter le Z-wave sur le marché Européen.** Le mois dernier j'ai [rédigé un article sur la fin du Z-wave]({% post_url /fr/2024-02-24-zwave-mort-et-enterre %}), ou j'expliquais que ce protocole a bien failli disparaître surtout en Europe à cause de l'arrivée du Zigbee ( entre autres ).

> Le principal inconvénient du z-wave est le coût de reviens des modules mais **Zooz et Shelly** sont en train de démontrer le contraire comment celà est-ce possible ?

## Z-wave protocole propriétaire tarif propriétaire

Le fait que le z-wave est un protocole propriétaire oblige les fabriquants de modules de **passer entre autre une certification** et elle a un coût et un délai, ci-dessous tu peux télécharger le processus de certification en date de Janvier 2025.

{% include doclink.html pdf="ZWA_Certification.pdf" title="process certification z-wave" %}

Malgré un **processus de certification revu et optimisé** afin de limiter les coûts de productions et baisser les prix de ventes des modules.
Si un fabriquant veut revendre un module **end-devices** comme un contacteur de porte par exemple il devra s'affranchir d'une certification de **3600$ soit 3,6$/1000 produits vendus** par modules à rajouter par rapport au zigbee, pour un controlleur ou une gateway **c'est 6600$ soit 6,6$/1000 produits**

> Donc sur l'étape de certification il faut déjà rajouter entre 3,6 et 6,6$ par rapport au zigbee

## Tarifs des puces Silabs

[https://www.silabs.com/wireless/z-wave](https://www.silabs.com/wireless/z-wave){: target="_blank"}

**Première nouveautée**, *Silabs dévoile les tarifs* pour la version **z-wave 800LR** et si on regarde de plus près les puces z-wave sont **à peine plus cher que les puces Zigbee**, alors je ne compare pas tout car il y a tout de même des différences, mais les constructeurs n'auront plus l'excuses des couts excessifs de l'utilisation de ce protocole.

Actuellement Silabs commercialise **3 puces Z-wavae 800**, deux en SOCs et une dédiée aux modules.
Tu trouveras:
1. la puce EFR32ZG23 SoCs ( compatible Wi-Sun Amazon Sidewalk et mbus ) elle est vendue **4,37$** en version 512kb de mémoire Flash et 64kb ram
2. la puce ZGM230S Modules à **5,85$** en haute securité 512Mo Flash et 64kb de ram
3. la nouvelle puce EFR32ZG28 SOCs ( compatible en plus de la ZG23 du Bluetooth ) à **5,23$** en haute sécurité avec 1024Mo de Flash et 256kb de RAM

[https://www.silabs.com/wireless/zigbee](https://www.silabs.com/wireless/zigbee){: target="_blank"}

Au même moment les tarifs des puces zigbee ( zigbee et thread ) sont de:
1. EFR32MG21 Series 2 SOCs coûte **2,95$** avec 512Mo Flash et 64kb RAM
2. EFR32MG21 Series 2 Modules (bluetooth, zigbee, thread ) coûte **6,96$** pour 1024Mo de Flash et 96kb sde RAM
3. EFR32MG24 Series  Socs coûte **4,34$** avec 1024 de Flash et 128 de RAM

> Sur les puces il faut rajouter un **coût de 1,5$** En moyenne

{% include product-embed.html image="capteur-d-ouverture-portefenetre-z-wave-800-zse41-zooz.png" title="Capteur ouverture porte Zooz z-wave 800" brand="Zooz à 28€" description="Surveillez votre porte ou fenêtre avec le capteur d'ouverture/fermeture ZSE41 de Zooz !" domlink="peripheriques/6151-capteur-d-ouverture-portefenetre-z-wave-800-zse41-zooz-853478006414.html" %}

## Différences entre les tarifs

D'après de simple calcul un module z-wave devrait **coûter entre 5 et 10$** plus cher que son homologue zigbee. J'ai fait quelques recherches sur domadoo.. et ...

Si tu [achètes ce contrôleur d'ouverture de porte aqara Zigbee](https://www.domadoo.fr/fr/detecteurs/6707-detecteur-d-ouverture-portefenetre-zigbee-30-door-and-window-sensor-t1-aqara.html?domid=39){: target="_blank"} il t'en **coûtera 19,99€**
Le [contrôleur d'ouverture de porte Zooz en z-wave 800](https://www.domadoo.fr/fr/peripheriques/6151-capteur-d-ouverture-portefenetre-z-wave-800-zse41-zooz-853478006414.html?domid=39){: target="_blank"} **est à 27,95€** soit une différence de **7,96€**

Plus récemment [Zooz à sorti son premier contrôleur z-wave 800](https://www.domadoo.fr/fr/box-domotique/7041-zooz-controleur-usb-z-wave-800-853478006391.html?domid=39){: target="_blank"} à **34,95€** alors que [le zi-stick d'aeotec](https://www.domadoo.fr/fr/controleurs-adaptateurs/6777-controleur-usb-zigbee-zi-stick-aeotec-1220000017191.html?domid=39){: target="_blank"} est vendu **29,99€** soit moins de 5€ d'écarts entre les deux

> C'est bien la preuve qu'il existe une volonté de la z-wave alliance et de certains fabriquants de réduires les coûts des modules Z-wave.

{% include product-embed.html image="zooz-controleur-usb-z-wave-800.png" title="Nouveau controlleur Zooz z-wave 800" brand="Zooz" description="Tout nouveau controlleur hub z-wave long range serie 800 de Zooz ! à un prix très abordable." domlink="box-domotique/7041-zooz-controleur-usb-z-wave-800-853478006391.html" %}

## Quelles sont les principaux acteurs du marché 

**qui travaillent sur le z-wave 800LR**

J'ai voulu reprendre la liste des produits certifiés par la z-wave alliance, mais j'ai l'impression que cette liste est incomplète ou pas encore à jour. Car en faisant le tour directement sur le site des fabriquants j'ai pu trouver des infos complémentaires:

 **Fibaro**: lance un [module volet roulant](https://www.domadoo.fr/fr/peripheriques/7040-fibaro-micromodule-pour-volet-roulant-z-wave-800-fibaro-roller-shutter-4-fgr-224-5902701703899.html?domid=39){: target ="_blank"}, à 84€, beaucoup trop cher, ils n'ont pas l'air de vouloir baisser les prix.

**MCO Home**: la sortie de nouveaux produits est en cours on trouve l'interrupteur [f-series](https://www.mcohome.com/F-series-Switch-PG7454227){: target="_blank"} et les [interrupteurs mechaniques U-series](https://www.mcohome.com/U-series-smart-switch-PG7454301){: target="_blank"}

**Inovelli**: **rien pour l'Europe** [mais c'est en cours](https://community.inovelli.com/t/project-europa-240v-smart-switch-es-for-europe-eu-zigbee-thread-matter/16088){: target="_blank"} pour les états unis l'interrupteur est déjà en série 800.

**Philio**: semble être au point mort depuis quelques années pas de nouveaux produits, ruptures de stocks chez les revendeurs, c'est bien dommage car il fabriquaient des modules robustes et bien pensé.

[**Shelly ( Qubino )**](https://www.domadoo.fr/fr/111-produits?q=Marque-Shelly+Qubino&domid=39){: target="_blank"}: depuis le rachat de qubino par Shelly la société ne perd pas de temps et **développe une série de modules au dernier chipset 800 LR** que l'on retrouve sur le marché.

[**Zooz**](https://www.domadoo.fr/fr/111-produits?q=Marque-Zooz&domid=39){: target="_blank"}: Comme Shelly Zooz **emboîte le pas des modules z-wave serie 800** et ils ont bien raison.

**Popp**: le fabriquant Allemand ne propose rien en série 800 pour le moment

**Aeotec**: rien pour l'instant en série 800

**Heatit Controls**: Chez Heatit tu trouveras un [thermostat encastrable](https://heatit.com/product/10294/smart-products/thermostats/heatit-z-trm6-white-ral-9003/1109){: target="_blank"}

**z-wave.me**: rien pour le moment en série 800

## Pricipaux avantages du z-wave 800 vs Zigbee 3.0

- tous les modules **sont compatibles et retro-compatible entre eux** quelque soit la marque et pourraient ainsi fonctionner directement même en cas de panne du controlleur ( fameux binding )
- une consommation de **piles données à 10 ans** contre 3 à 5 ans pour le Zigbee
- une **portée rallongée** ( plusieurs centines de mètres voir milliers ) rien que ça ?

## Fabriquants ne perdez pas de temps

Comme annoncé dans un précédent article, il fut un temps on on trouvait foisons de produits Z-wave et ce n'était pas le cas chez Zigbee, mais **maintenant c'est tout l'inverse**, alors si des manufacturiers tombent sur cet article.

> Si j'étais vous je relancerai rapidement la gamme Z-wave série 800 LR afin d'être à nouveau présent sur le marché Européen.

## Conclusion

J'ai décidé de rédiger ce second article afin de mesurer l'impact du coût des modules z-wave 800 vs Zigbee 3.0. **Il se trouve que celui-ci a été revu à la baisse et c'est confirmé**, encore faut-il que les fabriquants y prêtent attention, en tous cas merci à **Zooz et Shelly Qubino** de montrer la voie de la résurrection :).

PS: Heltun a [rédigé un excellent article](https://www.heltun.com/post/comparing-z-wave-zigbee-and-wi-fi-what-should-you-choose-for-your-installation){: target="_blank"} comparant le z-wave et le Zigbee **n'hésite pas à le lire.**