---
guid: 26
title: "Test interrupteur zigbee ZTS-EU à bouton poussoir Moes"
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
published: true
noindex: false
sitemap:
  changefreq: 'monthly'
  exclude: 'no'
  priority: 0.5 #between 0.0 to 1.0, 1.0 high priority
  lastmod:  # date to end modification
locale: fr_FR
addViews: 379
comments: true
rating: 3.8
---

Par continuité voilà un test qualité de l'interrupteur à bouton tactileMoes aussi nommé Zts-eu celui_ci est à bouton poussoir, d'ailleurs il porte le même nom que le test fait précédemment avec l'interrupteur tactile de la même marque vous pouvez consulter le test: [test zts-eu tactile par Moes]({% post_url /fr/2021-03-17-test-moes-interrupteur-zigbee-tactile-zts-eu-upgrade-2020 %}).

## Prérequis :

- Home assistant installé avec la version 2021.8.0 minimum
- Zigbee2mqtt en version 1.24.0 de Mars 2022

{% include product-embed.html image="zigbee-smart-wall-light-switch-with-neutral-wire-or-no-neutral-wire-wiring-no-capacitor-needed.jpg" title="Interrupteur bouton poussoir zigbee moes de 1 à 3 interrupteurs" brand="Waveshare" description="Interrupteur à bouton poussoir de la marque Moes zts-eu" affiliate="_DDzDn7v" %}

{%- include alert.html type="info" text="Depuis peut la version bouton 1 poussoir n'a plus la même référence elle se nomme généralement ZS-EUB, il se peut que des version ZTS soient toujours en circulation. Bref la version 1 gang ZS-EUB a été prise en charge il y a peut de temps <strong>il faut mettre zigbee2mqtt en version 1.28.0</strong> qui date d'Octobre 2022." link="" textlink="" %}

## Branchement du bouton poussoir

La gamme Moes propose tous ses interrupteurs avec un branchement du neutre mais il n'est pas obligatoire de plus sans le branchement du neutre la phase seule permet de faire fonctionner les leds sans avoir besoin de rajouter une résistance supplémentaire.

{% picture posts/{{ page.guid }}/branchement-interrupteur-moes-zigbee-zts-eu-bouton-poussoir.jpg --alt interrupteur bouton poussoir --img width="820" height="820" %}

> Comme tout module zigbee branché sur secteur, la fonction routeur/répéteur est activée lorsque ce module est branché avec le neutre, *cependant dans zigbee2mqtt ça n'est pas le cas, est-ce un bug !! pour ma part le maillages est tellement dense que je n'ai rencontré aucun soucis.*

## Caractéristiques du produit

|Tension de fonctionnement :| AC100-250 V, 50/60 Hz|
|Type de courant :| 10 A au total|
|Charge inductive (LED/CFL) :| 3-120 W|
|Charge résistive (à incandescence) :| 3-300 W pour 110 V ; 3-600 W pour 220 V|
|Type sans fil :| Wi-Fi 2,4 GHz/ZigBee|
|Consommation d'énergie :| ≤ 0,5 W|
|Système de prise en charge :| Android\iOS|

## vidéo de présentation rapide

Dans la vidéo ci-dessous, une présentation rapide du fonctionnement du bouton poussoir afin de se faire une idée de la qualité des matériaux.

{% include youtubePlayer.html id="s00Nmu8DW5s" %}

> **Pour le prix la qualité est au rendez-vous** je dirais que c'est un poil au dessous des interrupteurs legrand cependant pour le même tarif on peut acheter 2 à 3 interupteurs.

## Intégration dans Homeassistant avec zigbee2mqtt

l'intégration se fait sans soucis, l'intégration se fait en appuyant 5 secondes sur un bouton poussoir jusqu'à ce que celui-ci clignote.

{% picture posts/{{ page.guid }}/intégration-zts-eu-moes-zigbee2mqtt.png --alt intégration interrupteur bouton poussoir Moes dans homeassistant-zigbee2mqtt --img width="952" height="70" %}

### Lien zigbee2mqtt
[caractéristique de l'intégration dans zigbee2mqtt](https://www.zigbee2mqtt.io/devices/ZTS-EU_2gang.html){: target="_blank"}

{% picture posts/{{ page.guid }}/intégration-zts-eu-moes-zigbee2mqtt-fonction-expose.png --alt réglage de interrupteur bouton poussoir moes dans homeassistant --img width="952" height="601" %}

- **indicate_light**: permet de choisir la position de l'éclairage à led (commande importante surtout s'il est installé dans une chambre)

## Important

À l’heure actuelle les interrupteurs moes zts-eu ne sont pas reconnus comme **routeur dans zigbee2mqtt mais comme enddevice** quand ils sont branchés avec le neutre

{% picture posts/{{ page.guid }}/intégration-zts-eu-moes-zigbee2mqtt-4.png --alt bug interrupteur non reconnu comme routeur quand le neutre est branché --img width="329" height="269" %}

## Bonus

Une automatisation simple dans home-assistant afin de domotiser le fonctionnement d'un télérupteur classique, alors ça fonctionne parfaitement, *mais attention tout de même en cas de fonctionnement car le télérupteur pourrait rester en position ouvert et cramer.*

{% highlight yaml %}
alias: double clic télérupteur entrée
description: "automatisation sur télérupteur"
trigger:
  - platform: device
    type: turned_on
    device_id: e00698412e7acb9a7e80c908e862c08f
    entity_id: switch.inter_entree_l1
    domain: switch
condition: []
action:
  - type: toggle
    device_id: e00698412e7acb9a7e80c908e862c08f
    entity_id: switch.inter_entree_l1
    domain: switch
mode: single
{% endhighlight %}

## En Conclusion

Vendu entre 20 et 25€ ces interrupteurs font le job, il s'intègre parfaitement dans les boîtes de dérivation ronde de type européenne, le plastique est de bonne qualité manque peut-être d'un peut d'épaisseur, le fait de pouvoir paramétrer les led, la simplicité de connection ainsi que la constance du maillage grâce au zigbee 3.0 en fait un bon produit.







