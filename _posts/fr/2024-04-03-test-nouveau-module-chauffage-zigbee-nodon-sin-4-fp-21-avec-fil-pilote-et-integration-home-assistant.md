---
guid: 118
title: "Test du nouveau module de chauffage Nodon SIN-4-FP-21"
description: "Je vais tester ce module nodon fil pilote et surtout te montrer comment l'intégrer et le contrôler dans home assistant avec l'interface thermostat"
ref: ""
layout: post
authors: [Nico]
date: 2024-04-03 19:23
last_modified_at: 
categories: [Tests, Home-Assistant]
tags: []
image: 'picture.png'
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

correspondance dans le fichier de configuration

{% highlight yaml %}
automation: !include automations.yaml
script: !include scripts.yaml
scene: !include scenes.yaml
switch: !include switch.yaml
climate: !include thermostat.yaml
{% endhighlight %}

/homeassistant switch.yaml

{% highlight yaml %}
- platform: template
  switches:
    inter_radiateur_salon:
      friendly_name: "Inter Radiateur salon"
      unique_id: switch_radiateur_salon
      value_template: "{{ is_state('select.radiateur_salon_pilot_wire_mode', 'comfort') }}"
      turn_on:
          service: select.select_option
          data:
              option: comfort
          target:
              entity_id: 
                  - select.radiateur_salon_pilot_wire_mode
      turn_off:
          service: select.select_option
          data:
              option: "off"
          target:
              entity_id: 
                  - select.radiateur_salon_pilot_wire_mode
{% endhighlight %}

Création d'un thermostat générique thermostat.yaml

{% highlight yaml %}

# salon module nodon

- platform: generic_thermostat
  # Nom de notre thermostat
  name: Chauffage Salon
  # identité unique
  unique_id: thermostat_chauffage_salon
  # entité du chauffage
  heater: switch.inter_radiateur_salon
  # entité du capteur de température
  target_sensor: sensor.thermostat_salon_cuisine_temperature
  # la température réglable minimum du thermostat
  min_temp: 16
  # la température réglable maximum du thermostat
  max_temp: 23
  # mode de fonctionnement du système "heater"
  ac_mode: false
  # la température cible
  target_temp: 21
  # il s'agit de la tolérance de température basse pour l'activation de la chauffe
  cold_tolerance: 0.5
  # tolérance de la température avant que la chauffe ne soit activé
  hot_tolerance: 0.5
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