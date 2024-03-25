---
guid: 116
title: "Économise du chauffage grâce à la domotique ça marche !"
description: "Dans le cadre d'un nouveau concept vidéo présenté par August sur youtube, je vais te détailler l'installation d'une chaudière au gaz domotisée avec Home Assistant et Sonoff"
ref: ""
layout: post
author: Nico
date: 2024-03-25 11:09
last_modified_at: 
categories: [Haade-lab, Domotique, Zigbee]
tags: []
image: 'fais-des-economies-d-energies-en-domotisant-ton-installation-de-chauffage.png'
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
  - https://community.home-assistant.io/t/trv-calibrator-calibrate-your-valve-with-an-external-sensor-probably-trv-agnostic/451424
---
Voilà un article dédié à la domotisation d'une chaudière traditionnelle au gaz avec des radiateurs branchés sur circuits d'eau. La domotisation t'apporteras confort, économie financières et adaptabilité à toute épreuve. Cet article est rédigé pour compléter la vidéo tournée par August et Lulu sur le sujet. Deux compères qui découvrent la domotique et qui te font partager leurs ressentis.
Pour terminer tu pourras te rendre compte que pour un coût minime tu arriveras à faire un retour sur investissement sur deux ans Maximum.

## Prérequis
- une **box domotique** Home Assistant Green ou Sonoff Ihost
- des modules thermostatiques TRV Sonoff de pref
- des thermostats ( marque Sonoff de préférence )
- des compétences si t'en as c'est mieux

Il faut savois qu'en domotique il y a plusieurs façons de faire comme on dit:

> Tous les chemins mènent à Rome

Je vais te détailler les produits utilisés, ainsi que la mise en place sur Home Assistant. À travers une installation des plus limpides, j'ai agrémenté ce mécanisme à l'aide d'automatisations, templates et Blueprint. Ne t'inquiètes pas ce n'est pas si compliqué surtout qu'au fil du temps Home Assistant à su s'adapter et rendre son interface utilisable même aux plus novices d'entres vous.

## Le matériel

Chez August comme il le dit si bien dans sa vidéo nous avons décidé de partir sur une box Home Assistant avec un dongle zigbee Skyconnect pour contrôler les modules zigbee. Mais tu pourrais aussi partir sur une box sonoff ihost si tu désires domotiser certains aspects de ton logement. En effet la box Home assistant green est compatible avec le gigantesque univers Home assistant et de plus tu participes au projet opensource en investissant dans leurs Box, et je trouve ça sympa.



## centraliser les thermostats

{% include homeassistantlink.html blueprint_import="https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https%3A%2F%2Fgithub.com%2Frotilho%2Fhome-assistant-blueprints%2Fblob%2Fmain%2Ftrv_calibrator.yaml" %}

## Mode Chauffage

## Créer des moyennes

{% highlight yaml %}
{% raw %}
{% set salon = state_attr('climate.th_salon', 'current_temperature') | float %}
{% set bureau = state_attr('climate.th_bureau', 'current_temperature') | float %}
{{ ((salon + bureau) / 2) | round(2, default=0) }}
{% endraw %}
{% endhighlight %}

## Uniformiser le fonctionnement

{% highlight yaml %}
{% raw %}
{%- set result = state_attr('climate.th_salon', 'running_state') %}
{%- if result == 'heat' %}
{%- set result = 'on' %}
{{ result }}
{%- else %}
{%- set result = 'off' %}
{{ result }}
{%- endif %}
{% endraw %}
{% endhighlight %}

## Automatisation
