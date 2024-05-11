---
guid: 125
title: "Découverte dongles déportés SMLIGHT"
description: "SMLight nous fourni une gamme complète de coordinateurs/dongle Zigbee déporté et très complet, une installation simplifiée, une interface web et le tout compatible Zigbee2mqtt et ZHA."
ref: "SLZB-06*"
layout: post
authors: [Nico]
date: 2024-05-13 01:00
last_modified_at: 
categories: [Tests, Zigbee]
tags: []
video: 
image: 'smlight-slzb-series-poe-and-other.png'
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
rating: 4.7
sourcelink:
  - https://smlight.tech/
---

J'ai la chance de pouvoir vous présenter une partie de la **gamme SMlight** fabriquant **Ukrainien** de coordinateurs Zigbee/Matter. Tu en as certainement entendu parlé, actuellement l'entreprise met le paquet en terme de communication et il y a de quoi tendre l'oreille ?

SMlight commercialise pas moins de **10 coordinateurs/routeurs compatible zigbee/thread/matter**. Deux gammes principales se distinguent. la gamme **slzb-06** et **slzb-07**.
La série **slzb-06** est étoffée de 6 coordinateurs compatible rj45/esp32-V3(wifi-bluetooth).
tu as le choix entre les puces zigbee silabs EFR32 ou texas instrument CC2652 franchement royal.

La série **slzb-07** est à la fois totalement différente de la série slzb-06 mais avec un ADN en commun et oui 4 controlleurs de dispos avec toujours du silabs ou TI.

{% include product-embed.html image="SMLIGHT-SLZB-06-series.png" title="Coordinateur Zigbee slzb-06* poe rj45 séries" brand="Smlight" description="SMLIGHT SLZB-06-Un adaptateur Zigbee 3.0 vers Ethernet, USB et WiFi avec prise en charge PoE, fonctionne avec Zigbee2MQTT, ZHA,Home Assistant" domlink="box-domotique/7042-smlight-adaptateur-usb-ethernet-poe-zigbee-30-cc2652p-zigbee2mqtt-et-zha.html" affiliate="_DcZxVaj" %}

## Déballage SMLight {{ page.ref }}

Que tu choisisses **n'importe quelle variante du module** {{ page.ref }}, celui-ci est fourni dans un écrin aux couleurs différentes mais qui affiche fièrement la compatibilité avec les divers systèmes opensources du marché. **SMLight démontre son envie de développer des produits compatibles open source** et rien que pour ça je rajoute un point 👌.

{% picture posts/{{ page.guid }}/deballage-coordinateur-zigbee-rj45-smlight-slzb-06*.png  --alt déballage de la série de coordinateurs zigbee Matter smlight slzb-06* --img width="940" height="529" %}

## Démontage SMLight {{ page.ref }}

Les coordinateurs SMLight {{ page.ref }} ont une conception **simple mais robuste**, le démontage s'effectue en un tour de main, il suffit de déclipser la face arrière pour accéder au circuit imprimé.

{% picture posts/{{ page.guid }}/demontage-smlight-slzb06*.png  --alt démontage en un tour de main de la série de coordinateurs zigbee Matter smlight slzb-06* --img width="940" height="529" %}

J'ai récupéré du site officiel un **éclaté du circuit**, il est quasi identique pour l'ensemble de la gamme slzb-06* seul la puce zigbee diffère.

{% picture posts/{{ page.guid }}/circuit-imprime-slzb.png  --alt récapitulatif circuit imprimé de la série de coordinateurs zigbee Matter smlight slzb-06* --img width="940" height="490" %}

## SMLight SLZB-06 un tout en un

Alors oui tu vas me dire que **c'est un sacré engin**, tellement grand que ça m'a fait pensé à la baguette de sorcier d'Harry Potter ? 🦸‍♂️ 
Oui l'assemblage est simpliste mais tout de même fonctionnel et entièrement fabriqué en Ukraine 🇺🇦 il faut le souligner actuellement **ça reste un exploit.**

## Déballage dongle slzb-07p7

SMLight m'a aussi **fourni un dongle de la gamme slzb-07**, le slzb-07p7 de bonne facture, la **coque transparente** apporte du style à ce module et l'antenn 3db supplémentaire. **Sonoff** fourni déjà ce type de produits donc rien de nouveau, par contre la taille du **SMLight est plus petite** du coup ne bloc pas l'accès aux autres ports de ton raspberry comme c'est le cas avec un Sonoff. [SMLight communique là dessus sur la fiche produit du site officiel](https://smlight.tech/product/slzb-07p7/){: target="_blank"}.

{% picture posts/{{ page.guid }}/deballage-et-comparatif-dongle-slzb-07p7-smlight-vs-dongle-e-sonoff.png  --alt déballage du coordinateur - dongle smlight slzb-07p7 --img width="940" height="529" %}

> Les prix sont très corrects tu pourras te l'offrir **en déboursant à peine 23€**

{% include product-embed.html image="SMLIGHT-SLZB-07-series-USB.png" title="Coordinateur Dongle zigbee USB slzb-07" brand="Smlight" description="Le dongle USB Zigbee de SMLIGHT SLZB-07P7, avec le SoC CC2652P7 et une antenne 3dB, idéal pour Zigbee2mqtt et ZHA." domlink="interface-domotique/7045-smlight-dongle-usb-zigbee-cc2652p7-soc-antenne-3db-zigbee2mqtt-et-zha.html" affiliate="_DFi3lLN" %}

## Liens d'affiliations

|SMLIGHT|Domadoo|Aliexpress|
|-------|-------|----------|
|SLZB-06|[Liens](https://www.domadoo.fr/fr/box-domotique/7042-smlight-adaptateur-usb-ethernet-poe-zigbee-30-cc2652p-zigbee2mqtt-et-zha.html?domid=39){: target="_blank"}|[Liens](https://s.click.aliexpress.com/e/_DdgR27h){: target="_blank"}|
|SLZB-06 sans POE| - |[Liens](https://s.click.aliexpress.com/e/_DdgR27h){: target="_blank"}|
|SLZB-06P7| - |[Liens](https://s.click.aliexpress.com/e/_DdgR27h){: target="_blank"}|
|SLZB-06M|[Liens](https://www.domadoo.fr/fr/box-domotique/7043-smlight-adaptateur-usb-ethernet-poe-zigbee-30-efr32mg21-zigbee2mqtt-et-zha.html?domid=39){: target="_blank"}|[Liens](https://s.click.aliexpress.com/e/_DdgR27h){: target="_blank"}|
|SLZB-07|[liens](https://www.domadoo.fr/fr/interface-domotique/7044-smlight-dongle-usb-zigbee-efr32mg21-cp2102n-soc-antenne-3db-zigbee2mqtt-et-zha.html?domid=39){: target="_blank"}|[liens](https://s.click.aliexpress.com/e/_DdW00eJ){: target="_blank"}|
|SLZB-07P7|[liens](https://www.domadoo.fr/fr/interface-domotique/7045-smlight-dongle-usb-zigbee-cc2652p7-soc-antenne-3db-zigbee2mqtt-et-zha.html?domid=39){: target="_blank"}|[liens](https://s.click.aliexpress.com/e/_DdW00eJ){: target="_blank"}|

## Présentation de la gamme

### SLZB-06*

Seul les **4 premiers** en partant de la gauche sont réellement commercialisé, les versions P10 et MG24 sont en cours de commercialisations, elles apportent plus de mémoires flash et de stockages ram.

{% picture posts/{{ page.guid }}/tableau-comparatif-gamme-coordinateurs-zigbee-poe-smlight.png --alt tableau comparatif des coordinateurs zigbee rj45 poe de la gamme smlight --img width="850" height="1051" %}


### SLZB-07*

Là aussi seul **les deux versions de gauches** sont en ventes, les versions P10 et MG24 sont en cours de commercialisations, elles apportent plus de mémoires flash et de stockages ram.

{% picture posts/{{ page.guid }}/tableau-comparatif-gamme-coordinateurs-zigbee-usb-smlight.png --alt tableau comparatif des coordinateurs zigbee usb de la gamme smlight --img width="650" height="835" %}


## Pourquoi choisir le SMLight {{ page.ref }}

Franchement avant de recevoir ces coordinateurs **j'étais dubitatif** et je me disais encore un coordinateur de plus à tester qui est compatible Zigbee-Matter-Thread, de plus je voyais bien que les **dimensions seraient hors normes**.
Ensuite j'ai reçu ces produits et j'ai commencé à imaginer toutes les perspectives que pouvait engager ce genre de coordinateurs et là je me suis lancé dans des tests sous **Zigbee2mqtt et ZHA.**

> Pourquoi prendre ce module et bien c'est un tout en un !

### Interface de Gestion

Mais mis à part ça, ce coordinateur SMLight {{ page.ref }} est un vrai régal, en effet il est disponible avec une interface de **gestion Webui**. Rien que ça **tu pourras tout paramétrer ou accéder aux infos d'un simple clic**. Ouaouh SMLight rend la gestion du coordinateur ultra simple pour quiconque étant novice.
par défaut une fois connecté à ton réseau en rj45 connecte toi à l'interface:
- [SLZB-06](http://slzb-06.lan){: target="_blank"}
- [SLZB-06M](http://slzb-06m.lan){: target="_blank"}
- [SLZB-06p7](http://slzb-06p7.lan){: target="_blank"} ( à l'heure ou j'écris ces lignes divers bugs sont énumérés sur la [série slzb-06P7](https://smlight.tech/product/slzb-06p7/){: target="_blank"})

![interface configuration coordinateur smlight slzb06 series firmware 2.0.18]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/interface-configuration-smlight-slzb-06.webp{{ cachebuster }}){: width="940" height="467" class="lazyload"}

**Tu pourras d'un simple clic accéder à l'ensemble des fonctions** et SMLight à même prévu l'envoi de rapports de bugs ou de demande de contacts via cette interface, bref que du bonheur.

- changer de modes Zigbee (rj45, usb, )

### Interface de Gestion Opensource V0.9.9

![interface opensource smlight firmware 0.9.9]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/interface-smlight-slzb-v-opensource-0.9.9.webp{{ cachebuster }}){: width="940" height="465" class="lazyload"}

### Compatibilité {{ page.ref }}

Pour faire simple ce module est ultra complet et ouvre des perspectives incroyables.

- Zigbee (Texas Instrument ou Silabs)
- Matter/Thread ( en changeant le firmware )
- **Esphome** ( grâce à la puce esp32s3 ) 
- wifi
- bluetooth
- rj45 ( poe ou non suivant version )
- usb

En ce qui concerne la compatibilité aux softwares, l'annonce est clair **toute la gamme est compatible home assistant**.

- Home-assistant
- **Zha**
- **Zigbee2mqtt**
- Mqtt
- Homeseer
- Openhab
- Jeedom
- Gladys

|Fonctions|SLZB-06|SLZB-06P7|SLZB-06M|SLZB-07P7|
|---------|-------|---------|--------|---------|
|Zigbee   |**v**{: .green}|**v**{: .green}|**v**{: .green}|**v**{: .green}|
|Matter   |**v**{: .green}|**v**{: .green}|**v**{: .green}|**v**{: .green}|
|Home-Assistant|**v**{: .green}|**!**{: .yellow}|**v**{: .green}|**v**{: .green}|
|Zigbee2Mqtt|**v**{: .green}|[**!**](https://smlight.tech/product/slzb-06p7/){: .yellow}|**v**{: .green}|**v**{: .green}|
|ZHA|**v**{: .green}|**v**{: .green}|**v**{: .green}|**v**{: .green}|

**La série est très complète** et je n'ai nulle doute qu'ils ajouteront d'avantages de compatibilités il n'y a qu'à voir la collaboration étroite avec ces systèmes opensources.

### Et Bien plus encore

Grâce au wifi ou rj45 tu pourras **déporter la clé** de ta centrale domotique afin d'optimiser le maillage de ton réseau mais ce n'est pas tout.

Déporter une clé peut être intéressant s'il y a une proximité avec ton **routeur wifi** et **ainsi d'éviter diverses interférences**, ce qui aura pour effet **d'optimiser la portée**, comme déjà énuméré [dans un autre article]({%- post_url /fr/2022-11-30-interference-zigbee-wifi-2-4ghz-a-savoir %}) les fréquences zigbee et wifi son légèrement différentes et fonctionnent toutes deux sur le 2.4 GHz

Grâce à l'intégration du **vpn wireguard** tu pourras la déporter bien au delà de la sphère locale.

*Imagine que tu as une résidence secondaire et que tu voudrais la domotiser mais sans obligatoirement rajouter un système à part entière. Alors je ne te dit pas que c'est l'idéal mais, tu pourrais depuis la domotique de la résidence principale contrôler un maillage (zigbee/matter) à l'autre bout du monde grâce à ce VPN.*

D'ailleurs à ce sujet SMLight [te propose un tutoriel](https://smlight.tech/manual/slzb-06/guide/multiple-adapters-setup/){: target="_blank"} pour installer plusieurs **entitées Z2M** sur une même installation avec d'y lier un coordinateur pour une entité Z2M.

> Alors oui ça fonctionne mais c'est pas l'idéal

**Pourquoi:** Ben tu vas installer plusieurs containers d'une même image ce qui porte à confusion le système plus d'éventuelles mises à jours du compteur.

### Réseau maillé Bluetooth proxy

Grâce à la puce intégrée **esp32-S3**, tu pourras paramétrer cette clé avec esphome, le [bluetooth en version proxy](https://smlight.tech/manual/slzb-06/guide/bluetooth-proxy/){: target="_blank"} et ainsi utiliser cette clé comme **routeur bluetooth** et ainsi étendre le maillage au même titre qu'un réseau zigbee associés à plusieurs routeurs zigbee.

## Optimisé pour bien fonctionner

Les **coordinateurs SMLight** {{ page.ref }} sont optimisés afin d'établir des réseaux zigbee au maximum de leurs portées en effet chaques puces possèdent un **amplificateur de 20db** plus une antenne de **15cm** qui rajoute **5db** d'amplifications ( en gros tu peux difficilement faire mieux ).

Contrairement à d'autres coordinateurs du marché tous les coordinateur SMLight {{ page.ref }} possèdent un convertisseur **S.O.C CP2102N** à haute demande 921600 bps de quoi **passer des mises à jours de firmwares sans encombres**.

## Bug rencontré lors des tests

J'avoue j'ai pas mal testé ces divers coordinateurs et dans l'ensemble **tu ne rencontreras pas de réels soucis** à part pour la version 06p7 ou même [après avoir suivi les recommandations SMLight](https://smlight.tech/manual/slzb-06/guide/faq-and-lifehacks/slzb-06p7-pairing.html){: target="_blank"} je suis toujours confronté à des **erreurs d'inclusions** de modules surtout pour TI Instrument ( slzb-06 en mode routeur ).

|Test|SLZB-06POE|SLZB-06M|SLZB-06P7|
|----|----------|--------|---------|
|Mode rj45|**ok**{: .green}|**ok**{: .green}|**ok**{: .green}|
|Mode Wifi|**ok**{: .green}|**ok**{: .green}|**ok**{: .green}|
|Mode USB|**ok**{: .green}|**ok**{: .green}|**ok**{: .green}|
|Réseau eth ou wifi|**ok**{: .green}|**ok**{: .green}|**ok**{: .green}|
|Installation Z2M ou ZHA|**ok**{: .green}|**ok**{: .green}|**!**{: .yellow}|
|Interface sécurisé|**ok**{: .green}|**ok**{: .green}|**ok**{: .green}|
|VPN wireguard|**non testé**{: .yellow}|**non testé**{: .yellow}|**non testé**{: .yellow}|
|MAJ Core|**ok**{: .green}|**ok**{: .green}|**ok**{: .green}|
|MAJ Zigbee Coordinateur|**ok**{: .green}|**ok**{: .green}|**ok**{: .green}|
|MAJ Zigbee Routeur|**ok**{: .green}|**ok**{: .green}|**Nok**{: .red}|
|Paramètres LED|**ok**{: .green}|**ok**{: .green}|**ok**{: .green}|

## Documentations En ligne

**Tu ne trouveras pas de documentations papiers** avec le coordinateur, mais j'ai beau faire un article plus ou moins complet, SMLight a rédigé une très belle documentation en ligne por la série SLZB-06, n'hésite pas à la lire et à la relire tout y est très bien expliqué.

[SLZB-06*](https://smlight.tech/manual/slzb-06/guide/getting-started/){: target="_blank"}

[SLZB-07*](https://smlight.tech/manual-slzb-07/){: target="_blank"}

## Les tarifs

Alors comme dit plus haut ces modules sont, à l'heure ou j'écris entièrement **fabriqué en Ukraine** qui veut dire que la vente finale serait donc plus chère que s'ils étaient fabriqués en Chine et bien non il n'en est rien. **SMLight s'est aligné aux prix du marché** et même moins chères que d'autres fabriquants.

Pour exemple tu trouveras sur Domadoo la série USB SLZB-07 entre 19 et 23€ dans les mêmes ordres de prix que le célèbre sonoff zbdongle-e

Quant aux version slzb-06 avec POE [Domadoo](https://www.domadoo.fr/fr/box-domotique/7042-smlight-adaptateur-usb-ethernet-poe-zigbee-30-cc2652p-zigbee2mqtt-et-zha.html?domid=39){: target="_blank"} ou sur [Aliexpress](https://s.click.aliexpress.com/e/_DcZxVaj){: target="_blank"} vendent ça moins de 40€ 

> Avec toutes les fonctions ça fait de ce coordinateur un Outsider.

## Outil flash firmware online ( interface )

**SMLight a déployé un outil pratique** à l'instar de ce qu'à déjà fait home assistant ou darkxst et c'est très bien, un outil pour uploader le firmware du core quand tu ne peux plus le faire à partir de l'interface web du module. *Bref après un plantage.*

[Flasher en ligne slzb-06 toutes versions confondues](https://smlight.tech/flasher/#SLZB-06){: target="_blank"}

## Flash firmware forcé

Si pour x raison tu n'arrives plus à forcer le flash du firmware des dongles tu pourras toujours [forcer ce flash en suivant la description](https://smlight.tech/flasher/#flashingFAQ){: target="_blank"} ( fonctionne pour les clés à base de chipset texas et silabs )

## Attention Zigbee2mqtt 1.36.x et +

Attention au passage en version 1.36.x de zigbee2mqtt et cela concerne les puces SILABS EFR32 donc les coordinateur slzb-06M et slzb-07 avec installation du firmware **coordinateur zigbee 20240408**, le système pourrait être instable voir ne pas fonctionner il faudra installer le [firmware zigbee 7.4.10 et modifier dans zigbee2mqtt](https://github.com/Koenkk/zigbee2mqtt/discussions/21462){: target="_blank"} l'adaptateur:
```adaptater: ezsp``` par ```adaptater: ember``` il existe encore d'autres options comme le ```rtscts: false``` mais dans mon cas je l'ai désactivé pour le bon fonctionnement. Bref tout ça pour vous dire que cette manip est à faire en local et si tu ne peux la faire ne passe pas a firmware supérieur pour le moment ( valable pour le snzb-06* ) car tu peux modifier celui-ci par OTA.

**Mais ça s'est bien expliqué sur le github**, de plus grâce à [darkxst](https://darkxst.github.io/silabs-firmware-builder/){: target="_blank"} tu pourras uploader le firmware sans aucun soucis.

> Actuellement Zigbee2mqtt reconnait que le SLZB-06M en mode routeur pas les deux autres.

{% include product-embed.html image="SMLIGHT-SLZB-07-series-USB.png" title="Coordinateur Dongle zigbee USB slzb-07" brand="Smlight" description="Le dongle USB Zigbee de SMLIGHT SLZB-07P7, avec le SoC CC2652P7 et une antenne 3dB, idéal pour Zigbee2mqtt et ZHA." domlink="interface-domotique/7045-smlight-dongle-usb-zigbee-cc2652p7-soc-antenne-3db-zigbee2mqtt-et-zha.html" affiliate="_DFi3lLN" %}

## Bug rencontré sur la version SLZB-06P7

~~Malgré la **mise à jour du CORE avec le 0.2.13dev** j'ai rencontré de légers problèmes d'intégrations, j'ai mis un **SLZB-06M en mode routeur** mais l'intégration dans le coordinateur ne match pas, à l'heure ou j'écris j'envoie les bugs à SMLight via l'interface c'est plus simple.~~

**Mise à jour** Depuis la mise à jour des firmwares de core **V2.2.0dev**, SMLight apporte de la stabilité à ce module, qui permet désormais de travailler même avec le slzb-06M comme Coordinateur/Routeur.

Pour l'instant il n'est pas possible de passer le slzb-06p7 en **mode routeur** car il n'y a pas de firmwares disponibles pour le moment.

## Attention aux versions à venir

SMLight sors actuellement des versions aux puces **Texas Instrument ou Silabs de dernières générations**, c'est une très bonne chose mais étant seul sur ce marché peu ou pas de firmwares optimsés ne sont disponibles pour le moment, si j'étais toi **j'attendrai un peu** et **j'orienterai mon achat** sur les version slzb-06 ou slzb-06M aux puces plus anciennes (cc2652, efr32 ) mais efficaces.

{% include product-embed.html image="SMLIGHT-SLZB-06-series.png" title="Coordinateur Zigbee slzb-06* poe rj45 séries" brand="Smlight" description="SMLIGHT SLZB-06-Un adaptateur Zigbee 3.0 vers Ethernet, USB et WiFi avec prise en charge PoE, fonctionne avec Zigbee2MQTT, ZHA,Home Assistant" domlink="box-domotique/7042-smlight-adaptateur-usb-ethernet-poe-zigbee-30-cc2652p-zigbee2mqtt-et-zha.html" affiliate="_DcZxVaj" %}

## Conclusion

**Fonce, Fonce, Fonce.** Je n'ai rien à dire de plus sur le SMLight {{ page.ref }} à part de te dire de **l'acheter**, vu ses nombreuses fonctions tu auras une vison plus élargie de ton système domotique surtout en cas d'évolutions. *Presque tout fonctionne et même s'il y a une erreur ou un oubli les rectificatifs se feront rapidement.* Même le prix est intéressant moins de 40€ pour toutes ces options. **Perso je vais remplacer ma clé sonoff ZBDongle-P par le SMLIGHT SLZB06.**