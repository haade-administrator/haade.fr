---
guid: 130
title: "Profite pleinement de ton abonnement fibre optique FREE"
description: "Les abonnements fibres sont de plus en plus puissants et pourtant la plupart d'entre nous n'utilisent pas cette bande passante car notre réseau domestique est équipé pour utiliser seulement 1Gbit/s, alors comment utiliser au mieux sa freebox ultra"
ref: ""
layout: post
authors: [Nico]
date: 2024-06-15 18:00
last_modified_at: 
categories: [Haade-lab, Domotique, News]
tags: []
video: 
image: 'equipe-toi-et-utilise-ton-abonnement-fibre-internet-a-la-limite-de-ses-capacites.png'
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
---

Ah, je suis **enfin passé à la fibre par Free** à mon domicile qui annonce une bande passante de **8Gbit/s** en téléchargement et envoi de données, rien que ça. **Mais voilà** mon réseau actuel **ne sort que 1Gbit/s** sur l'ensemble des switchs. En regardant de plus près les résultats nationaux [nperf](https://media.nperf.com/files/publications/FR/2024-01-10_Barometre-connexions-fixes-metropole-nPerf-2023.pdf){: target="_blank"} je me suis rendu compte vu la moyenne de bande passante que ***quasimment personne n'utilise le très haut débit fibre***. Alors je me suis mis en tête d'optimiser mon réseau afin de voir si les données de transferts fibre annoncées par Free sont réels. 

{%- include alert.html type="info" text="Haade.fr participe au programme d'associés d'Amazon Services LLC, un programme de publicité d'affiliation conçu pour fournir un moyen de gagner des frais lors de la création de liens vers Amazon.com et des sites affiliés." %}

> Je profite de ces tests pour t'en faire profiter et orienter le choix du matériel à acquérir chez toi pour profiter au maximum de cette bande passante.

## Mon installation fibre et Freebox Ultra

**La Freebox Ultra est probablement la box du marché embarquant le routeur le plus évolué**, de plus la qualité du réseau fibre 8Gbit/s est supérieur à celle de SFR du moins dans ma région. J'ai donc décidé de faire évoluer mon réseau en investissant **dans un switch compatible 10GBit/s.**

{% picture posts/{{ page.guid }}/upgrade-materiel-fibre-freebox-ultra-zyxel-elfcam.png --alt materiel fibre pour freebox ultra zyxel xgs1250, elfcam sfp+ et tp-link carte réseau 10GBit/s --img width="940" height="529" %}


> J'ai choisi le Zyxel XGS-1250-12

{% include product-embed.html image="switch-zyxel-xgs1250-12-10Gbps-2.png" title="Switch Zyxel XGS1250-12 RJ45 10GBPs" brand="Zyxel" description="Zyxel Le commutateur Multi-gigabit 12 Ports administrable Via Une Interface Web Comprend 3 Ports 10 G et 1 Port 10 G SFP+ XGS1250-12" amazlink="3Rj4a6M" %}

Il est admiistrable et embarque **1 port sfp+ 10Gbit/s** et **3 ports rj45 compatible 2,5 à 10Gbit/s**, et tu pourras l'acquérir pour 200€ environ.

Je **possède un NAS** donc j'avais un intéret particulier à l'équiper d'une carte réseau 10Gbit/s afin de bénéficier du max de puissance surtout pour la partie serveur. Donc j'ai acheté une [carte réseau pciexpress TP-Link en 10Gbit/s.](https://amzn.to/3XiFUFv){: target="_blank"} 

{% include product-embed.html image="tplink-carte-reseau-pciexpress-10gb.png" title="Carte réseau TP-Link 10Gbit/s" brand="TP-Link" description="TP-Link Carte Réseau PCIe 10 Gigabit TX401, Réseau 10Gbit/s, Câble Ethernet CAT 6A inclus, Latence ultra-faible, Compatible avec Windows 11/10/8.1/8/7, les serveurs Windows 2019/2016/2012 R2 et Linux" amazlink="3XiFUFv" %}

Le NAS est à côté du switch et est relié directement avec un cable [ethernet Ugreen catégorie 7](https://amzn.to/4cfy6sZ){: target="_blank"}

J'ai relié la freebox ultra au switch zyxel avec un combo fibre [Elfcam LC/UPC Á LC/UPC](https://amzn.to/3yWFLxo){: target="_blank"} et [2 modules Elfcam SFP+](https://amzn.to/4aXFPu1){: target="_blank"} car la freebox et le switch ne sont pas au même endroit et j'ai du tirer la fibre dans une **gaine 20MM et le cable elfcam est démontable afin de faciliter le tirage dans une gaine**. *Sinon si tu n'as pas besoin* de tirer la fibre dans une gaine [passe sur une gaine fibre AOC](https://amzn.to/3KH6eSf){: target="_blank"} qui sera probablement plus performante (optimisée).

**Pour finir** sur mon PC principal j'ai mis une carte [TP-link pci express en 2,5Gbit/s.](https://amzn.to/4efLTRv){: target="_blank"}

{% include product-embed.html image="tplink-carte-reseau-pciexpress-2-5gb.png" title="Carte réseau TP-Link 2.5Gbit/s" brand="TP-Link" description="TP-Link Carte Réseau PCIe 2,5 Gigabit TX201, Réseau 2,5 Gbit/s, Latence ultra-faible, Compatible avec Windows 11/10/8.1/8/7, les serveurs Windows 2022/2019/2016/2012 R2 et Linux" amazlink="4efLTRv" %}

> L'ensemble de mon réseau domestique est relié en **catégorie 6 classe E** et fait largement le Job pour un **débit oscillant entre 1 et 2.5Gbit/s.**

### Les résultats en image de l'abonnement fibre Free

Sur le **NAS équipé 10Gbit/s** j'ai installé un speedtest tracker basé sur la plateforme Ookla, les résultats sont sans appels, **j'arrive à des pics de presque 8Gbit/s en téléchargement et 7 Gbit/s en evoi de données**, donc l'abonnement Fibre Free avec le freebox Ultra fait le Job.

{% picture posts/{{ page.guid }}/test-freebox-ultra-ookla-speedtest-NAS-tplink-10GB.png --alt test speedtest ookla fibre 10gb pour freebox ultra zyxel xgs1250, elfcam sfp+ et tp-link carte réseau 10GBit/s --img width="940" height="675" %}

Ci-dessous un relevé nperf **sur le pc équipé d'une carte réseau 2.5Gbit/s**, là j'arrive à un téléchargement de 2,3Gbit/s et 1Gbit/s en envoi. Là l'envoi de données est un peu faible mais c'est du au choix du serveur par nperf. 

> Bref l'ensemble est plus qu'honorable.

{% picture posts/{{ page.guid }}/test-nperf-pc-2.5gb.png --alt test speedtest nperf fibre 2.5gb pour freebox ultra zyxel xgs1250, elfcam sfp+ et tp-link carte réseau 2.5GBit/s test effectué sur pc --img width="940" height="641" %}

## Les Abonnements fibre

D'un fournisseur d'accès à l'autre les abonnements fibres ne sont pas du tout pareil. Pour beaucoup d'entre eux **( ils ne sont pas répertoriés ci-dessous )** tu n'auras pas besoin de t'équiper pour utiliser toute la puissance du réseau car le fait d'avoir un réseau RJ45 1GBits sera largement suffisant. Mais pour certains abonnements ( peu nombreux sur le marché pour l'instant ), ***il serait avantageux d'équiper ton réseau en fibre afin d'utiliser pleinement ton abonnement fibre.***

### Livebox 7 Orange Fibre

Chez Orange plusieurs abonnements de dispos mais seul l'abonnement **Livebox MAX fibre** vaut le coup pour faire une mise à jour de ton réseau fibre.

**Abonnement Livebox MAX fibre:**  **5Gbit/s** en Download et **1 Gbit/s** en Upload

Cet abonnement est livré avec la livebox 7 les autres sont livrés avec des box moins puissantes comme la livebox 6. 
Mais je passe mon tour sur ces box et abonnements et je me concentre que sur la livebox 7.

Comme pour la Bbox la Livebox 7 ne possède pas de cages SFP+ pour accueillir le 10GBit mais un **port rj45 compatible 10Gbits**, les autres ports LAN sont des ports RJ45 1Gbit/s.

#### Mode Routeur Livebox 7

**Si tu décides d'utiliser la Livebox 7 comme routeur tu auras juste besoin de:**

- 1x switch [Zyxel XGS 1250-12](https://amzn.to/3Rj4a6M){: target="_blank"} à 216€ environs
- du cable [ethernet Ugreen catégorie 7](https://amzn.to/4cfy6sZ){: target="_blank"} Minimun (afin de relier pc ou nas) compte **11€** pour 5m de cables
- de cartes réseaux TP-Link [2.5](https://amzn.to/4efLTRv){: target="_blank"} ou [10Gbits](https://amzn.to/3XiFUFv){: target="_blank"} compatible au prix respectif **de 19€** ou **80€** selon la puissance

{% picture posts/{{ page.guid }}/livebox-7-caracteristiques-fibre-ethernet.png --alt Caractéristique Technique de la Livebox 7 fibre et ethernet --img width="600" height="397" %}

[fiche technique Livebox 7](https://assistance.orange.fr/equipement/livebox-et-modems/livebox-7-sagemcom){: target="_blank"}

Pour profiter pleinement du **5Gbit/s** orange tu devras débourser **environ 240-300€** suivant le matériel que tu choisis pour utiliser le max de puissance.

#### Mode switch Livebox 7 

**Si le routeur Livebox 7 ne te donne pas pleinement satisfaction** comme c'est souvent le cas avec ces box, tu peux décider de la basculer en bridge et d'utiliser un routeur haute performance fibre. Pour le coup, peu de routeurs proposent ce type de connections mais côté qualité/prix deux marques ressortent **Ubiquiti** et **Mikrotik**. Perso j'ai une très grande préférence pour **Ubiquiti** et son système embarqué **UNIFI**.
> Par contre question coût ce n'est pas la même chose par rapport à un équipement switch.

**Il te faudra donc au minimum:**
- 1 routeur Mikrotik RB5009GUG à **200€** env **ou** un routeur Ubiquiti Dream Machine pro à **429€**
- un module [elfcam sfp+ to rj45](https://amzn.to/4c8KZo6){: target="_blank"} à **50€** environ
- du cable [ethernet Ugreen catégorie 7](https://amzn.to/4cfy6sZ){: target="_blank"} Minimun (afin de relier pc ou nas) compte **11€** pour 5m de cables
- de cartes réseaux TP-Link [2.5](https://amzn.to/4efLTRv){: target="_blank"} ou [10Gbits](https://amzn.to/3XiFUFv){: target="_blank"} compatible au prix respectif **de 19€** ou **80€** selon la puissance.

L'équipement avec un routeur **fibre te reviendrais entre 280€ et 570€** minimum suivant le matériel choisi.

### Sfr Fibre

Avec Free, SFR est le seul à proposer un abonnement aussi puissant, elle possède une cage SFP(+) 10G afin de récupérer toute cette puissance, seul petit bémol les port LAN de la box **sont tous limités à 1Gbit/s** contrairement à la **Freebox Ultra qui propose sur tout ces Lan 2,5Gbit/s**

**Abonnement MAX:** SFR: **8Gbit/s** en Download et **8Gbit/s** en Upload

[Fiche technique sfr box 8](https://assistance.sfr.fr/internet-tel-fixe/box-8/caracteristiques-techniques-box-8-sfr.html){: target="_blank"}

{% picture posts/{{ page.guid }}/sfr-box-8-caracteristque-technique.png --alt Caractéristique Technique de la SFR Box 8 fibre et ethernet --img width="428" height="456" %}

#### Mode routeur SFR Box

**Dans ce mode il te faudra:**
- 1x switch [Zyxel XGS 1250-12](https://amzn.to/3Rj4a6M){: target="_blank"} à 216€ environs
- un cable [fibre optique Elfcam OM3 AOC](https://amzn.to/3KH6eSf){: target="_blank"} ( ou relier la box au switch en fibre ) à **29€** environ ou si si tu dois tirer la fibre dans une gaine [1 cable fibre Elfcam OM3](https://amzn.to/3yWFLxo){: target="_blank"} et [2 modules sfp+ elfcam 10m](https://amzn.to/4aXFPu1) à **32€** environ.
- du cable [ethernet Ugreen catégorie 7](https://amzn.to/4cfy6sZ){: target="_blank"} Minimun (afin de relier pc ou nas) compte **11€** pour 5m de cables
- de cartes réseaux TP-Link [2.5](https://amzn.to/4efLTRv){: target="_blank"} ou [10Gbits](https://amzn.to/3XiFUFv){: target="_blank"} compatible au prix respectif **de 19€** ou **80€** selon la puissance

#### Mode switch SFR Box

**Il te faudra donc au minimum:**

- 1 routeur Mikrotik RB5009GUG à **200€** env **ou** un routeur Ubiquiti Dream Machine pro à **429€**
- un cable [fibre optique Elfcam OM3 AOC](https://amzn.to/3KH6eSf){: target="_blank"} ( ou relier la box au switch en fibre ) à **29€** environ ou si si tu dois tirer la fibre dans une gaine [1 cable fibre Elfcam OM3](https://amzn.to/3yWFLxo){: target="_blank"} et [2 modules sfp+ elfcam 10m](https://amzn.to/4aXFPu1) à **32€** environ.
- du cable [ethernet Ugreen catégorie 7](https://amzn.to/4cfy6sZ){: target="_blank"} Minimun (afin de relier pc ou nas) compte **11€** pour 5m de cables
- de cartes réseaux TP-Link [2.5](https://amzn.to/4efLTRv){: target="_blank"} ou [10Gbits](https://amzn.to/3XiFUFv){: target="_blank"} compatible au prix respectif **de 19€** ou **80€** selon la puissance.

L'équipement avec un routeur **fibre te reviendrais entre 280€ et 570€** minimum suivant le matériel choisi.

### Freebox

#### Freebox Pop

**Abonnement MAX:** 5Gbit/s en Download et 700Mbit/s en Upload

[Fiche Technique Freebox Pop](https://www.free.fr/freebox/freebox-pop/){: target="_blank"}

{% picture posts/{{ page.guid }}/Freebox-Pop-connectique.png --alt Caractéristique Technique de la Freebox Pop fibre et ethernet --img width="940" height="239" %}

> Le branchements arrière de la freebox pop ne te permettront pas de dépasser 2,5Gbit/s par port rj45 du coup il ne te sert à rien d'investir dans une mise à jour fibre de ton réseau.

#### Freebox Ultra Le Plus puissant

**Abonnement MAX:** **8Gbit/s** en Download et **8Gbit/s** en Upload

[Fiche Technique Freebox Ultra](https://www.free.fr/freebox/freebox-ultra/){: target="_blank"}

**Gros avantage** de la freebox Ultra, en plus de posséder une cage sfp+ 10Gbit/s, cette box possède **4 ports Lan 2,5Gbit/s.**

{% picture posts/{{ page.guid }}/Freebox-Ultra-connectique.png --alt Caractéristique Technique de la Freebox Ultra fibre et ethernet --img width="940" height="253" %}

##### Mode routeur Freebox Ultra

**Dans ce mode il te faudra:**

- 1x switch [Zyxel XGS 1250-12](https://amzn.to/3Rj4a6M){: target="_blank"} à 216€ environs
- un cable [fibre optique Elfcam OM3 AOC](https://amzn.to/3KH6eSf){: target="_blank"} ( ou relier la box au switch en fibre ) à **29€** environ ou si si tu dois tirer la fibre dans une gaine [1 cable fibre Elfcam OM3](https://amzn.to/3yWFLxo){: target="_blank"} et [2 modules sfp+ elfcam 10m](https://amzn.to/4aXFPu1) à **32€** environ.
- du cable [ethernet Ugreen catégorie 7](https://amzn.to/4cfy6sZ){: target="_blank"} Minimun (afin de relier pc ou nas) compte **11€** pour 5m de cables
- de cartes réseaux TP-Link [2.5](https://amzn.to/4efLTRv){: target="_blank"} ou [10Gbits](https://amzn.to/3XiFUFv){: target="_blank"} compatible au prix respectif **de 19€** ou **80€** selon la puissance

##### Mode switch Freebox Ultra

**Il te faudra donc au minimum:**

- 1 routeur Mikrotik RB5009GUG à **200€** env **ou** un routeur Ubiquiti Dream Machine pro à **429€**
- un cable [fibre optique Elfcam OM3 AOC](https://amzn.to/3KH6eSf){: target="_blank"} ( ou relier la box au switch en fibre ) à **29€** environ ou si si tu dois tirer la fibre dans une gaine [1 cable fibre Elfcam OM3](https://amzn.to/3yWFLxo){: target="_blank"} et [2 modules sfp+ elfcam 10m](https://amzn.to/4aXFPu1) à **32€** environ.
- du cable [ethernet Ugreen catégorie 7](https://amzn.to/4cfy6sZ){: target="_blank"} Minimun (afin de relier pc ou nas) compte **11€** pour 5m de cables
- de cartes réseaux TP-Link [2.5](https://amzn.to/4efLTRv){: target="_blank"} ou [10Gbits](https://amzn.to/3XiFUFv){: target="_blank"} compatible au prix respectif **de 19€** ou **80€** selon la puissance.

## Le matériel plus en détail

### Les Routeurs

Par ordre de prix en restant tout de même raisonnable et comme annoncé plus haut je vais vite te présenter les aspects techniques des Routeurs Mikrotik RB5009 et Ubiquiti Dream Machine.

#### Mikrotik

##### Version RB5009 sans POE

La carte comprend 9 ports filaires et un USB 3.0 pleine taille. Sept des ports sont Gigabit Ethernet, un autre est 2,5 Gigabit Ethernet et le dernier est une cage SFP+ 10G. Tous les ports sont connectés à une puissante puce de commutation de la famille Marvell Amethyst avec une ligne duplex intégral de 10 Gbit/s menant au processeur Marvell Armada Quad-core ARMv8 1,4 GHz. Le processeur et la puce du commutateur sont situés au bas de la carte – le boîtier agit donc comme un énorme dissipateur thermique !

**Le RB5009UG+S+IN peut être alimenté de 3 manières différentes :**

1. Entrée PoE depuis le port Ethernet n°1
2. Prise CC
3. Borne à 2 broches sur le côté

Les cartes sont livrées avec 1 Go de RAM DDR4 et 1 Go de stockage NAND. Cette combinaison de ports et de composants, par rapport à nos autres produits de format similaire, offre presque le double de performances dans les configurations avec de lourdes charges CPU.

[https://mikrotik.com/product/rb5009ug_s_in#fndtn-specifications](https://mikrotik.com/product/rb5009ug_s_in#fndtn-specifications){: target="_blank"}

{% include product-embed.html image="mikrotik-rb5009-sans-poe.png" title="MikroTik Routeur rb5009gug + s +" brand="Mikrotik" description="Routeur cage SFP+ wan et port rj45 2.5GBit/s" amazlink="3RpZZGl" %}

##### Version RB5009 avec POE

Cette version du RB5009 possède toutes les fonctionnalités du modèle précédent : Gigabit Ethernet, 2,5 Gigabit Ethernet et une cage SFP+ 10 Gigabit pour la connectivité fibre. Il a la vitesse, la puissance et la durabilité. Mais cette fois, nous avons ajouté une entrée et une sortie PoE sur les huit ports Ethernet. Combiné avec le connecteur à 2 broches et la prise DC, vous obtenez 10 modes d'alimentation distincts. Les deux alimentations redondantes font généralement passer votre disponibilité ininterrompue au niveau supérieur. RB5009UPr+S+IN va encore plus loin !

Toutes les options d'alimentation prennent en charge une large plage de tension de 24 à 57 V. Cependant, vous ne pouvez pas mélanger les tensions. Si vous utilisez la sortie PoE pour alimenter d'autres appareils, la carte choisira la source avec la tension la plus élevée (prise CC ou connecteur à 2 broches) pour les alimenter.

Chaque port de sortie PoE peut fournir jusqu'à 25 W de puissance . Tous les ports combinés sont limités à 130 W, ce qui devrait suffire pour la plupart des configurations. Vous pouvez spécifier manuellement la puissance maximale disponible à partir de vos sources d'alimentation, si nécessaire. En ce qui concerne les fonctionnalités de sortie PoE, le nouveau RB5009 peut échanger des coups avec nos légendaires commutateurs PoE : CRS354 et CRS328. Dans le plus petit format possible et au meilleur prix du marché !

[https://mikrotik.com/product/rb5009upr_s_in#fndtn-specifications](https://mikrotik.com/product/rb5009upr_s_in#fndtn-specifications){: target="_blank"}

{% include product-embed.html image="mikrotik-rb5009-sans-poe.png" title="MikroTik RB5009UPr+S+in" brand="Mikrotik" description="Routeur cage SFP+ wan et port rj45 2.5GBit/s et POE+ in" amazlink="3KE0OHs" %}

#### Ubiquiti

##### Ubiquiti Dream Machine

[https://eu.store.ui.com/eu/en?category=all-unifi-cloud-gateways](https://eu.store.ui.com/eu/en?category=all-unifi-cloud-gateways){: target="_blank"}

##### Ubiquiti Dream Machine Pro

Passerelle cloud 10 Gbit/s avec plus de 100 appareils UniFi / prise en charge de plus de 1 000 clients et routage IPS 3,5 Gbit/s.

Comprend une suite **complète d'applications UniFi** pour la gestion des appareils

- Routage 3,5+ Gbit/s avec IDS/IPS
- 1 10G SFP+, et 8 ports LAN GbE RJ45
- 1 ports 10G SFP+*, 1 ports WAN GbE RJ45
- 1 Baie de disque dur NVR 3,5"
- Écran tactile 1,3"

[Ubiquiti Dream Machine Pro](https://eu.store.ui.com/eu/en/pro/category/all-unifi-cloud-gateways/products/udm-pro){: target="_blank"}

{% include product-embed.html image="ubiquiti-dream-machine.png" title="Ubiquiti Dream Machine Pro" brand="Ubiquiti" description="Routeur cage SFP+ 10G wan et port Lan 10G SFP+" amazlink="3KFuIex" %}

##### Ubiquiti Dream Machine Pro Max

[Ubiquiti Dream Machine Pro Max](https://eu.store.ui.com/eu/en/pro/category/all-unifi-cloud-gateways/products/udm-pro-max){: target="_blank"}

Passerelle cloud 10 Gbit/s avec plus de 200 appareils UniFi / prise en charge de plus de 2 000 clients, routage IPS 5 Gbit/s et stockage NVR redondant.

Puissance de calcul et mémoire améliorées pour 2x la capacité de l'appareil UniFi et du client de Dream Machine Pro/SE

Comprend une **suite complète d'applications UniFi** pour la gestion des appareils

- Routage 5 Gbit/s avec IDS/IPS
- 1 10G SFP+*, 8 ports LAN GbE RJ45
- 1 ports 10G SFP+*, 1 ports WAN RJ45 2,5 GbE
- 2 Baies de disque dur NVR 3,5" avec protection des données RAID
- SSD intégré de 128 Go pour les enregistrements de détection NVR
- Écran tactile 1,3"

##### Ubiquiti Dream Machine Pro SE

[Ubiquiti Dream Machine Pro Second Edition](https://eu.store.ui.com/eu/en/pro/category/all-unifi-cloud-gateways/products/udm-se){: target="_blank"}

Passerelle cloud 10 Gbit/s avec plus de 100 appareils UniFi/plus de 1 000 clients, routage IPS 3,5 Gbit/s et **commutation PoE intégrée.**

Comprend une **suite complète d'applications UniFi** pour la gestion des appareils

- Routage 3,5+ Gbit/s avec IDS/IPS
- 1 10G SFP+*, 8 ports LAN GbE RJ45 dont (2) PoE+ et (6) PoE
- 1 ports 10G SFP+*, 1 ports WAN RJ45 2,5 GbE
- 1 Baie de disque dur NVR 3,5"
- SSD intégré de 128 Go pour les enregistrements de détection NVR
- Écran tactile 1,3"

{% include product-embed.html image="ubiquiti-dream-machine.png" title="Ubiquiti Dream Machine Pro Second edition" brand="Ubiquiti" description="Routeur cage SFP+ 10G wan et port Lan 10G SFP+" amazlink="3KCnPuF" %}


### Les Switch

[Le Zyxel XGS1250-12 est celui que j'ai choisi](https://www.zyxel.com/fr/fr/products/switch/12-port-web-managed-multi-gigabit-switch-includes-3-port-10g-and-1-port-10g-sfp-xgs1250-12){: target="_blank"}, il me semble le plus pertinet car il est équipé de:

- 1 cage SFP+ 10Gbit/s
- 3 ports rj45 de 2,5 à 10Gbit/s
- 8 ports 1Gbit/s rj45

De plus ce switch est administrable, La LED unique à 5 couleurs sur le panneau avant est conçue pour te permettre de vérifier instantanément la vitesse du lien et ça c'est pas mal.

{% include product-embed.html image="switch-zyxel-xgs1250-12-10Gbps-2.png" title="Switch Zyxel XGS1250-12 RJ45 10GBPs" brand="Zyxel" description="Zyxel Le commutateur Multi-gigabit 12 Ports administrable Via Une Interface Web Comprend 3 Ports 10 G et 1 Port 10 G SFP+ XGS1250-12" amazlink="3Rj4a6M" %}

Mais il existe aussi le [Zyxel XGS1210-12](https://www.zyxel.com/fr/fr/products/switch/12-port-web-managed-multi-gigabit-switch-with-2-port-2-5g-and-2-port-10g-sfp-xgs1210-12){: target="_blank"} qui est moins cher, similaire en tout point au 1250 sauf sur la connectique le XGS1210-12 possède:

- 2 cages sfp+ 10Gbit/s
- 2 ports rj45 à 2,5Gbit/s
- 8 ports rj45 1Gbps

{% include product-embed.html image="switch-zyxel-xgs1210-12-10Gbps-SFP+.png" title="Switch Zyxel XGS1210 10GBPs SFP+" brand="Zyxel" description="Zyxel Switch multigigabit 12 Ports géré sur Web avec 2 Ports 2,5 G/2 Ports 10 G SFP+ Bureau/Mural, Garantie de 5 Ans XGS1210-12" amazlink="3KEDJEB" %}

À toi de choisir selon tes besoins.

### Carte réseau Pciexpress

J'ai choisi ces cartes TP-Link car ce sont les moins chers du marché et les plus éprouvées par les utilisateurs. Elles s'intègrent parfaitement sur les cartes mères et font le job.

{% include product-embed.html image="tplink-carte-reseau-pciexpress-10gb.png" title="Carte réseau TP-Link 10Gbit/s" brand="TP-Link" description="TP-Link Carte Réseau PCIe 10 Gigabit TX401, Réseau 10Gbit/s, Câble Ethernet CAT 6A inclus, Latence ultra-faible, Compatible avec Windows 11/10/8.1/8/7, les serveurs Windows 2019/2016/2012 R2 et Linux" amazlink="3XiFUFv" %}

{% include product-embed.html image="tplink-carte-reseau-pciexpress-2-5gb.png" title="Carte réseau TP-Link 2.5Gbit/s" brand="TP-Link" description="TP-Link Carte Réseau PCIe 2,5 Gigabit TX201, Réseau 2,5 Gbit/s, Latence ultra-faible, Compatible avec Windows 11/10/8.1/8/7, les serveurs Windows 2022/2019/2016/2012 R2 et Linux" amazlink="4efLTRv" %}


[**Cable RJ45 category 7:**](https://amzn.to/3KD4lFZ){: target="_blank"}

### Cable Fibre

Branchement Box Internet vers switch Zyxel XGS1250 plusieurs cas de figures:

- relié entre eux par [cable fibre AOC](https://amzn.to/3x4l8yS){: target="_blank"} ( idéal qualité lien et connectique / inconvénient ne peut être tiré dans une gaine électrique )

{% include product-embed.html image="cable-fibre-elfcam-aoc-best-choice.png" title="1m 10Gb Active Optical Cable (AOC) OM3" description="SFP+ à SFP+ AOC 10Gbit/s, Compatible avec Freebox Ultra (1 Mètres)" amazlink="3KH6eSf" %}

- relié entre eux par fibre optique 2 fil LC/UPC ( peu être tiré dans les gaines mais plus cher que la version précédente )
- Avec un [adaptateur SFP+/RJ45](https://amzn.to/4cbKwkW){: target="_blank"}
  
Branchement Box Internet vers switch Zyxel XGS1210 plusieurs cas de figures

{% include product-embed.html image="elfcam-module-transfer-sfp+-10gb.png" title="Lot de 2, 10Gb SFP+ Module de Transceiver à Fibre Optique" brand="Elfcam" description="Connecteur LC/UPC DM (OM3 / OM4), 10GBase-SR SFP+, 850nm DDM 300M, Compatible avec Freebox Ultra" amazlink="4aXFPu1" %}

{% include product-embed.html image="elfcam-cable-fibre-om3.png" title="Câble à fibre optique LC/UPC á LC/UPC" brand="Elfcam" description="OM3 Multimode Duplex Jarretière Fibre Optique 50/125um LSZH (0,5M)" amazlink="3yWFLxo" %}

Aussi tu pourrais transformer une cage sfp+ 10Gbps en rj45 10Gbps grâce à cet adaptateur Elfcam.

{% include product-embed.html image="elfcam-module-transfer-sfp+-to-rj45-adapter.png" title="10Gb SFP+ en RJ45" brand="Elfcam" description="10Go SFP+ Module de Transceiver (10Gbase-T), Jusqu'à 30 Mètres sur Un Câble Ethernet Cat7/ Cat8" amazlink="4c8KZo6" %}

**J'ai choisi Elfcam** car ce matériel a été testé avec certaines box du marché français et éprouvé avec succès, **je n'ai rencontré aucun soucis avec ce matériel et les cartes et switch 10Gbps.**

{%- include alert.html type="info" text="Haade.fr participe au programme d'associés d'Amazon Services LLC, un programme de publicité d'affiliation conçu pour fournir un moyen de gagner des frais lors de la création de liens vers Amazon.com et des sites affiliés." %}

## Conclusion

Déjà je pense sincèrement que l'abonnement free avec la freebox ultra est ce qui se fait de plus performant pour les particuliers actuellement sur le marché. Il n'y a qu'à regarder les résultats sur [nperf](https://media.nperf.com/files/publications/FR/2024-01-10_Barometre-connexions-fixes-metropole-nPerf-2023.pdf){: target="_blank"} ou [speedtest ookla](https://www.speedtest.net/fr){: target="_blank"}. Mis à part la box qui n'est pas le sujet premier de ce tuto, tu pourras facilement te doter de matériels afin d'utiliser pleinement de la puissance de ton abonnement.