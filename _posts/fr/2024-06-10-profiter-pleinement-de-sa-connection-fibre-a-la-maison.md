---
guid: 130
title: "profiter pleinement"
description: "..."
ref: ""
layout: post
authors: [Nico]
date: 2024-06-10 14:58
last_modified_at: 
categories: [Haade-lab, Domotique, News]
tags: []
video: 
image: 'equipe-toi-et-utilise-ton-abonnement-fibre-internet-a-la-limite-de-ses-capacites.png'
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
  - 
---

## Les Abonnements fibre

D'un fournisseur d'accès à l'autre les abonnements fibres ne sont pas du tout pareil. Pour beaucoup d'entre eux ( ils ne sont pas répertoriés ci-dessous ) tu n'auras pas besoin de t'équiper pour utiliser toute la puissance du réseau car le fait d'avoir un réseau RJ45 1GBits sera largement suffisant.

### Livebox Orange Fibre

**Abonnement Livebox MAX fibre:**  5Gbit/s en Download et 1 Gbit/s en Upload


#### Livebox 7

Comme pour la Bbox la Livebox 7 ne possède pas de cages SFP+ pour accueillir le 10GBit mais un port rj45 compatible 10Gbits, les autres ports LAN sont des ports RJ45 1Gbit/s.

Si tu décides d'utiliser le routeur Livebox tu auras juste besoin de
- 1x switch Zyxel XGS 1250-12
- du cable ethernet 7 Minimun 
- de cartes réseaux 2.5 ou 10Gbits compatible

{% picture posts/{{ page.guid }}/livebox-7-caracteristiques-fibre-ethernet.png --alt Caractéristique Technique de la Livebox 7 fibre et ethernet --img width="600" height="397" %}

[fiche technique Livebox 7](https://assistance.orange.fr/equipement/livebox-et-modems/livebox-7-sagemcom){: target="_blank"}



### Sfr Fibre

Avec Free SFR est le seul à proposer un abonnement aussi puissant, elle possède une cage SFP 10G afin de récupérer toute cette puissance, seul petit bémol les port LAN sont tous limités à 1Gbit/s contrairement à la Freebox Ultra.

**Abonnement MAX:** SFR: 8Gbit/s en Download et 8Gbit/s en Upload

[Fiche technique sfr box 8](https://assistance.sfr.fr/internet-tel-fixe/box-8/caracteristiques-techniques-box-8-sfr.html){: target="_blank"}

{% picture posts/{{ page.guid }}/sfr-box-8-caracteristque-technique.png --alt Caractéristique Technique de la SFR Box 8 fibre et ethernet --img width="428" height="456" %}

### Freebox

#### Freebox Pop

**Abonnement MAX:** 5Gbit/s en Download et 700Mbit/s en Upload

[Fiche Technique Freebox Pop](https://www.free.fr/freebox/freebox-pop/){: target="_blank"}

{% picture posts/{{ page.guid }}/Freebox-Pop-connectique.png --alt Caractéristique Technique de la Freebox Pop fibre et ethernet --img width="940" height="239" %}

#### Freebox Ultra Le Plus puissant

**Abonnement MAX:** 8Gbit/s en Download et 8Gbit/s en Upload

[Fiche Technique Freebox Ultra](https://www.free.fr/freebox/freebox-ultra/){: target="_blank"}

{% picture posts/{{ page.guid }}/Freebox-Ultra-connectique.png --alt Caractéristique Technique de la Freebox Ultra fibre et ethernet --img width="940" height="253" %}



# Routeur

Par ordre de prix en restant tout de même raisonnable

## Mikrotik

[https://mikrotik.com/product/rb5009ug_s_in#fndtn-specifications](https://mikrotik.com/product/rb5009ug_s_in#fndtn-specifications)

{% include product-embed.html image="mikrotik-rb5009-sans-poe.png" title="MikroTik Routeur rb5009gug + s +" brand="Mikrotik" description="Routeur cage SFP+ wan et port rj45 2.5GBit/s" amazlink="3RpZZGl" %}

{% include product-embed.html image="mikrotik-rb5009-sans-poe.png" title="MikroTik RB5009UPr+S+in" brand="Mikrotik" description="Routeur cage SFP+ wan et port rj45 2.5GBit/s et POE+ in" amazlink="3KE0OHs" %}

### Ubiquiti Dream Machine

[https://eu.store.ui.com/eu/en?category=all-unifi-cloud-gateways](https://eu.store.ui.com/eu/en?category=all-unifi-cloud-gateways)

{% include product-embed.html image="ubiquiti-dream-machine.png" title="Ubiquiti Dream Machine Pro" brand="Ubiquiti" description="Routeur cage SFP+ 10G wan et port Lan 10G SFP+" amazlink="3KFuIex" %}

{% include product-embed.html image="ubiquiti-dream-machine.png" title="Ubiquiti Dream Machine Pro Second edition" brand="Ubiquiti" description="Routeur cage SFP+ 10G wan et port Lan 10G SFP+" amazlink="3KCnPuF" %}


# Switch

### Kit 1


{% include product-embed.html image="switch-zyxel-xgs1250-12-10Gbps-2.png" title="Switch Zyxel RJ45 10GBPs" brand="Zyxel" description="Zyxel Le commutateur Multi-gigabit 12 Ports administrable Via Une Interface Web Comprend 3 Ports 10 G et 1 Port 10 G SFP+ XGS1250-12" amazlink="3Rj4a6M" %}


{% include product-embed.html image="switch-zyxel-xgs1210-12-10Gbps-SFP+.png" title="Switch Zyxel XGS1210 10GBPs SFP+" brand="Zyxel" description="Zyxel Switch multigigabit 12 Ports géré sur Web avec 2 Ports 2,5 G/2 Ports 10 G SFP+ Bureau/Mural, Garantie de 5 Ans XGS1210-12" amazlink="3KEDJEB" %}

## Carte réseau Pciexpress

{% include product-embed.html image="tplink-carte-reseau-pciexpress-10gb.png" title="Carte réseau TP-Link 10Gbit/s" brand="TP-Link" description="TP-Link Carte Réseau PCIe 10 Gigabit TX401, Réseau 10Gbit/s, Câble Ethernet CAT 6A inclus, Latence ultra-faible, Compatible avec Windows 11/10/8.1/8/7, les serveurs Windows 2019/2016/2012 R2 et Linux" amazlink="3XiFUFv" %}

{% include product-embed.html image="tplink-carte-reseau-pciexpress-2-5gb.png" title="Carte réseau TP-Link 2.5Gbit/s" brand="TP-Link" description="TP-Link Carte Réseau PCIe 2,5 Gigabit TX201, Réseau 2,5 Gbit/s, Latence ultra-faible, Compatible avec Windows 11/10/8.1/8/7, les serveurs Windows 2022/2019/2016/2012 R2 et Linux" amazlink="4efLTRv" %}



[**Cable RJ45 category 7:**](https://amzn.to/3KD4lFZ){: target="_blank"}

Branchement Box Internet vers switch Zyxel XGS1250 plusieurs cas de figures
- relié entre eux par [cable fibre AOC](https://amzn.to/3x4l8yS){: target="_blank"} ( idéal qualité lien et connectique / inconvénient ne peut être tiré dans une gaine électrique )
- relié entre eux par fibre optique 2 fil LC/UPC ( peu être tiré dans les gaines mais plus cher que la version précédente )
- Avec un [adaptateur SFP+/RJ45](https://amzn.to/4cbKwkW){: target="_blank"}
  
Branchement Box Internet vers switch Zyxel XGS1210 plusieurs cas de figures

## Cable Fibre

{% include product-embed.html image="elfcam-module-transfer-sfp+-10gb.png" title="Lot de 2, 10Gb SFP+ Module de Transceiver à Fibre Optique" brand="Elfcam" description="Connecteur LC/UPC DM (OM3 / OM4), 10GBase-SR SFP+, 850nm DDM 300M, Compatible avec Freebox Ultra" amazlink="4aXFPu1" %}

{% include product-embed.html image="elfcam-cable-fibre-om3.png" title="Câble à fibre optique LC/UPC á LC/UPC" brand="Elfcam" description="OM3 Multimode Duplex Jarretière Fibre Optique 50/125um LSZH (0,5M)" amazlink="3yWFLxo" %}

{% include product-embed.html image="elfcam-module-transfer-sfp+-to-rj45-adapter.png" title="10Gb SFP+ en RJ45" brand="Elfcam" description="10Go SFP+ Module de Transceiver (10Gbase-T), Jusqu'à 30 Mètres sur Un Câble Ethernet Cat7/ Cat8" amazlink="4c8KZo6" %}

{% include product-embed.html image="cable-fibre-elfcam-aoc-best-choice.png" title="1m 10Gb Active Optical Cable (AOC) OM3" description="SFP+ à SFP+ AOC 10Gbit/s, Compatible avec Freebox Ultra (1 Mètres)" amazlink="3KH6eSf" %}


### Kit 2

https://www.zyxel.com/fr/fr/products/switch/12-port-web-managed-multi-gigabit-switch-includes-3-port-10g-and-1-port-10g-sfp-xgs1250-12

https://www.zyxel.com/fr/fr/products/switch/12-port-web-managed-multi-gigabit-switch-with-2-port-2-5g-and-2-port-10g-sfp-xgs1210-12

## Conclusion

## Brouillon

### Livebox 6

{% picture posts/{{ page.guid }}/livebox-6-caracteristiques-fibre-ethernet.png --alt Caractéristique Technique de la Livebox 6 fibre et ethernet --img width="600" height="397" %}

[fiche technique Livebox 6](https://assistance.orange.fr/equipement/livebox-et-modems/livebox-6-sagemcom#){: target="_blank"}

### Bouygues Offre fibre

Compte tenu de la puissance du meilleur abonnement Bouygues Telecom tu n'auras pas besoin d'optimiser ton réseau, avec 1Gbit/s en download max, le routeur de la box sera plus que suffisant pour dispatcher ton réseau.

**Abonnement MAX:** **1Gbits/s**{: .red} en Download et 700MB/s en Upload

[L'offre en détail](https://www.bouyguestelecom.fr/offres-internet){: target="_blank"}

{% picture posts/{{ page.guid }}/bbox-ultym-connectique.png --alt Caractéristique Technique de la BBox Ultym fibre et ethernet --img width="450" height="220" %}
