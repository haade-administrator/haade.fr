---
guid: 26
title: "Test interrupteur zigbee ZTS-eu à bouton poussoir Moes"
description: "Après le test de l'interrupteur tactile Moes, pour des raisons personnelles j'ai commandé le même à bouton poussoir"
layout: post
author: Nico
date: 2022-11-06 18:11
last_modified_at: 
categories: [Tests, Domotique, Zigbee]
tags: [Tests, Moes, Zigbee]
image: 'interrupteur-moes-zigbee-zts-eu-2-gang-test.png'
toc: true
beforetoc: ''
published: false
sitemap:
  changefreq: 'monthly'
  exclude: 'no'
  priority: 0.5 #between 0.0 to 1.0, 1.0 high priority
  lastmod:  # date to end modification
locale: fr_FR
comments: true
rating:  
---

Par continuité voilà un test qualité de l'interrupteur à bouton tactileMoes aussi nommé Zts-eu celui_ci est à bouton poussoir, d'ailleurs il porte le même nom que le test fait précédemment avec l'interrupteur tactile de la même marque vous pouvez consulter le test: [test zts-eu tactile par Moes]({% post_url /fr/2021-03-17-test-moes-interrupteur-zigbee-tactile-zts-eu-upgrade-2020 %}).

## Prérequis :

- Home assistant installé avec la version 2021.8.0 minimum
- Zigbee2mqtt en version 1.24.0 de Mars 2022

{% include product-embed.html image="zigbee-smart-wall-light-switch-with-neutral-wire-or-no-neutral-wire-wiring-no-capacitor-needed.jpg" title="Interrupteur bouton poussoir zigbee moes de 1 à 3 interrupteurs" brand="Waveshare" description="Interrupteur à bouton poussoir de la marque Moes zts-eu" affiliate="_DDzDn7v" %}

> Attention:

Depuis peut la version bouton 1 poussoir n'a plus la même référence elle se nomme généralement ZS-EUB, il se peut que des version ZTS soient toujours en circulation. Bref la version 1 gang ZS-EUB a été prise en charge il y a peut de temps **il faut mettre zigbee2mqtt en version 1.28.0** qui date d'Octobre 2022.

## Branchement du bouton poussoir

> avec ou sans neutre

{% picture posts/{{ page.guid }}/branchement-interrupteur-moes-zigbee-zts-eu-bouton-poussoir.jpg --alt interrupteur bouton poussoir --img width="820" height="820" %}



