---
guid: 69
title: "Domotiser entièrement un radiateur éléctrique dans Home assistant"
description: "Article complet pour domotiser un radiateur électrique sur fil pilote avec inversion de commande on/off et intégration dans lovelace d'un thermostat générique"
layout: post
author: Nico
date: 2023-06-10 15:50
last_modified_at: 
categories: [Haade-lab, Home-Assistant]
tags: []
image: 'inverser-commande-switch-on-off-home-assistant-radiateur-electrique-pilote.png'
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
  - https://programmation.surleweb-france.fr/home-assistant-utiliser-le-thermostat-generique/
---

Un petit tuto qui te permet d'inverser une commande switch d'une entité, ça m'est venu en domotisant chez un amis des radiateur électrique traditionnels branchés sur un micromodule ZBMini avec une diode sur le fil pilote. Par défaut quand tu allumes le zbmini le micromodule envoi par le biais du fil pilote la commande Arrêt du radiateur, et quand tu l'éteins il envoi la commande confort au raditeur.

Tu porras te rendre compte que lorsque tu veux créer une carte thermostat de type généric ça ne vas pas le faire.

{% include product-embed.html image="https://www.domadoo.fr/15794-large_default/sonoff-micromodule-commutateur-connecte-zigbee-zbmini.jpg" title="MICROMODULE COMMUTATEUR CONNECTÉ ZIGBEE - ZBMINI" brand="Sonoff" description="Le micromodule commutateur SONOFF ZBMINI ZIGBEE offre la possibilité de contrôler un appareil/éclairage de sa maison." domlink="peripheriques/5375-sonoff-micromodule-commutateur-connecte-zigbee-zbmini-6920075776133.html" %}

{% include product-embed.html image="https://www.domadoo.fr/36-large_default/diode-de-redressement-1n4007-1-a.jpg" title="DIODE DE REDRESSEMENT 1N4007 (1 A)" brand="" description="La diode de redressement convient pour obtenir un courant unidirectionnel à partir d’un courant alternatif. Cette diode pourra donc vous être utile dans la gestion de chauffage par fil pilote." domlink="accessoires-electriques/108-diode-de-redressement-1n4007-1-a.html" %}

|**Signal électrique**|**Ordre fil pilote tranmis au chauffage**|
|Aucun signal / Absence de courant|Confort<br>*La consigne de thermostat du radiateur est suivie*|
|Demi-alternance négative|Hors Gel (Blanc coté module)<br>*La température reste au-dessus d'un certain seuil pour éviter le gel de l'eau dans les tuyaux*|
|Demi-alternance positive|Arrêt (Rouge coté module)<br>*Le chauffage s'éteint complétement*|

{% highlight yaml %}
{% raw %}
- platform: template
  switches:
    salon_inverted:
      friendly_name: Radiateur salon inversé
      value_template: "{{ is_state('switch.radiateur_salon', 'off') }}"
      turn_on:
        service: switch.turn_off
        data:
          entity_id: switch.radiateur_salon
      turn_off:
        service: switch.turn_on
        data:
          entity_id: switch.radiateur_salon
{% endraw %}
{% endhighlight %}

{% highlight yaml %}
- platform: generic_thermostat
  # Nom de notre thermostat
  name: Chauffage Cuisine et Salon
  # entité du chauffage
  heater: switch.salon_inverted
  # entité du capteur de température
  target_sensor: sensor.thermostat_salon_cuisine_temperature
  # la température réglable minimum du thermostat
  min_temp: 16
  # la température réglable maximum du thermostat
  max_temp: 21
  # mode de fonctionnement du système "heater"
  ac_mode: false
  # la température cible
  target_temp: 18
  # il s'agit de la tolérance de température basse pour l'activation de la chauffe
  cold_tolerance: 10
  # tolérance de la température avant que la chauffe ne soit activer
  hot_tolerance: 0.3
  # il s'agit du mode dans lequel le thermostat démarre la première fois
  initial_hvac_mode: "off"
  # température en cas de mode absent
  away_temp: 12
  # Il s'agit de la précision pour le réglage de la température
  precision: 0.5
  # le temps minimum d'un cycle de fonctionnement
  min_cycle_duration:
    seconds: 5
  # maintient en chauffe au moins 3 minutes si le thermostat ne reçoit pas de commande
  keep_alive:
    minutes: 3
{% endhighlight %}
