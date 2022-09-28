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
image: controleur-intelligent-luminosite-moes
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
---

# TOP ou FLOP ?

J'ai décidé de tester ce capteur de luminosité intelligent pour apporter une lecture directe taux de luminosité, de la température et du taux d'humidité au sein de la maison sans passer par une application tierce.

La marque **Moes** offrant des produits de qualité/prix (~15euros) correcte mais fonctionnel en a fait un atout pour le choix de celui-ci.

{% include product-embed.html image="https://ae01.alicdn.com/kf/S4cd0f01cbf634844b8b946d91fd86ed7l/Thermom-tre-intelligent-Moes-ZigBee-Bluetooth-maille-luminosit-temp-rature-humidit-capteur-Tuya-Smart-App-contr.jpg_Q90.jpg_.webp" title="Thermomètre intelligent Moes ZigBee" brand="Moes" description="Le thermomètre intelligent de luminosité détecte les changements de la lumière ambiante, de la température et de l'humidité en temps réel; Signalez activement à l'utilisateur par l'application smart Life comme protocole Bluetooth intégré." affiliate="_DlVHhaB" %}

## **Contenu de la boîte :**

![déballage du capteur de luminosité et thermomètre moes zigbee]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/deballage-capteur-luminosite-moes-820.webp{{ cachebuster }})

![contenu de la boite du capteur intelligent de luminosité et thermostat moes zss-zk-thl zigbee]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/contenu-capteur-intelligent-moes-zss-zk-thl-820.webp{{ cachebuster }})


- Le Thermomètre
- Un livret d'installation (pas de traduction en français)
- 1 sticker auto collant recto/verso
- 1 sticker magnétique
- 1 Pile CR2032

## **Installation :**

Rien de plus simple en 2 étapes comme la plupart de ce genre de gadget

- 1: Lancer l’appairage de zigbee

![Activer appairage dans l'onglet zigbee d'homeassistant]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/zigbee-apa-820.webp{{ cachebuster }})

- 2: Appui de 3 sec sur le bouton rouge du thermomètre

![bouton appairage moes zss]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/bouton-appairage-820.webp{{ cachebuster }})

**Attention !** cependant lors de la mise en route de celui-ci j'ai rencontré un problème de contact au niveau de la pile. Au départ, je l'ai remplacé mais le problème venait tout simplement des 2 petits contacteurs qui étaient en position trop basse voir aplatit. J'ai tout simplement relevé ces pattes délicatement pour avoir un contact idéal avec la pile.

![attention contacteur pile du moes smart brightness zigbee]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/contact-pile-moes-smart-zss-zigbee-820.webp{{ cachebuster }})

## Conclusion

Une fois de plus Moes innove en proposant un affichage a faible consommation, la qualité des matériaux reste en dessous de ce que sait faire la marque Moes, le fait de ne pouvoir alterner les éléments affichés n'est pas ce qu'il a de plus WAF. Si tu cherches un produit qui t'affiches la luminosité en priorité et qui n'est pas gourmand en pile alors fonce ! car ce capteur Moes 3 en 1 s'intègre facilement dans home-assistant.

{% include product-embed.html image="https://ae01.alicdn.com/kf/S4cd0f01cbf634844b8b946d91fd86ed7l/Thermom-tre-intelligent-Moes-ZigBee-Bluetooth-maille-luminosit-temp-rature-humidit-capteur-Tuya-Smart-App-contr.jpg_Q90.jpg_.webp" title="Thermomètre intelligent Moes ZigBee" brand="Moes" description="Le thermomètre intelligent de luminosité détecte les changements de la lumière ambiante, de la température et de l'humidité en temps réel; Signalez activement à l'utilisateur par l'application smart Life comme protocole Bluetooth intégré." affiliate="_DlVHhaB" %}
