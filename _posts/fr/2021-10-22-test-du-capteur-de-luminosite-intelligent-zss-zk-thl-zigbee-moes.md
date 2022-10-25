---
guid: 24
title: "Test - ZSS-ZK-THL zigbee MOES"
description: "Test du capteur de luminosité intelligent ZSS-ZK-THL zigbee MOES dans Homeassistant"
date: "2021-10-22"
last_modified_at:
author: Yann
layout: post
categories: Tests
tags: Test Zigbee Homeassistant
image: controleur-intelligent-luminosite-moes.png
published: true
sitemap:
  changefreq: #always hourly daily weekly monthly yearly never
  exclude: #'yes' or 'no'
  priority: #between 0.0 to 1.0, 1.0 high priority
  lastmod: # date to end modification
locale: fr_FR
toc: true
beforetoc:
comments: true
redirect_from:
  - /blog/tests/test-du-capteur-de-luminosite-intelligent-zss-zk-thl-zigbee-moes
---

# TOP ou FLOP ?

J'ai décidé de tester ce capteur de luminosité intelligent pour apporter une lecture directe taux de luminosité, de la température et du taux d'humidité au sein de la maison sans passer par une application tierce.

La marque **Moes** offrant des produits de qualité/prix (~15euros) correcte mais fonctionnel en a fait un atout pour le choix de celui-ci.

{% include product-embed.html image="Thermom-tre-intelligent-Moes-ZigBee-Bluetooth-maille-luminosite-temp-rature-humidit-capteur-Tuya-Smart.webp" title="Thermomètre intelligent Moes ZigBee" brand="Moes" description="Le thermomètre intelligent de luminosité détecte les changements de la lumière ambiante, de la température et de l'humidité en temps réel; Signalez activement à l'utilisateur par l'application smart Life comme protocole Bluetooth intégré." affiliate="_DlVHhaB" %}

## **Contenu de la boîte :**

{% picture posts/{{ page.guid }}/contenu-capteur-intelligent-moes-zss-zk-thl.png --img width="820" height="615" --alt contenu de la boite du capteur intelligent de luminosité et thermostat moes zss-zk-thl zigbee %}


- Le Thermomètre
- Un livret d'installation (pas de traduction en français)
- 1 sticker auto collant recto/verso
- 1 sticker magnétique
- 1 Pile CR2032

## **Installation :**

Rien de plus simple en 2 étapes comme la plupart de ce genre de gadget

- 1: Lancer l’appairage de zigbee

{% picture posts/{{ page.guid }}/zigbee-apa.png --alt Activer appairage dans l'onglet zigbee d'homeassistant --img width="254" height="62" %}

- 2: Appui de 3 sec sur le bouton rouge du thermomètre

{% picture posts/{{ page.guid }}/bouton-appairage.png --alt bouton appairage moes zss --img width="820" height="615" %}

**Attention !** cependant lors de la mise en route de celui-ci j'ai rencontré un problème de contact au niveau de la pile. Au départ, je l'ai remplacé mais le problème venait tout simplement des 2 petits contacteurs qui étaient en position trop basse voir aplatit. J'ai tout simplement relevé ces pattes délicatement pour avoir un contact idéal avec la pile.

{% picture posts/{{ page.guid }}/contact-pile-moes-smart-zss-zigbee.png --img width="820" height="615" --alt attention contacteur pile du moes smart brightness zigbee %}

## Conclusion

Une fois de plus Moes innove en proposant un affichage a faible consommation, la qualité des matériaux reste en dessous de ce que sait faire la marque Moes, le fait de ne pouvoir alterner les éléments affichés n'est pas ce qu'il a de plus WAF. Si tu cherches un produit qui t'affiches la luminosité en priorité et qui n'est pas gourmand en pile alors fonce ! car ce capteur Moes 3 en 1 s'intègre facilement dans home-assistant.

{% include product-embed.html image="Thermom-tre-intelligent-Moes-ZigBee-Bluetooth-maille-luminosite-temp-rature-humidit-capteur-Tuya-Smart.webp" title="Thermomètre intelligent Moes ZigBee" brand="Moes" description="Le thermomètre intelligent de luminosité détecte les changements de la lumière ambiante, de la température et de l'humidité en temps réel; Signalez activement à l'utilisateur par l'application smart Life comme protocole Bluetooth intégré." affiliate="_DlVHhaB" %}
