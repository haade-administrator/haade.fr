---
guid: 116
title: "Économise du chauffage grâce à la domotique ça marche !"
description: "Dans le cadre d'un nouveau concept vidéo présenté par August sur youtube, je vais te détailler l'installation d'une chaudière au gaz domotisée avec Home Assistant et Sonoff"
ref: ""
layout: post
author: Nico
date: 2024-03-24 11:09
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

## Prérequis
- une box domotique Home Assistant Green ou Sonoff Ihost
- des modules thermostatiques TRV Sonoff
- des thermostats ( marque Sonoff de préférence )

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
