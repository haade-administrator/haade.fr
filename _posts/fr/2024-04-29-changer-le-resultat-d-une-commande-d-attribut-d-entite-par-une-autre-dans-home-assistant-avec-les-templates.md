---
guid: 122
title: "Changer le résultat d'une commande d'attributs d'entités"
description: "Dans ce mini tutos je vais te montrer comment changer le résultat d'une commande d'attribut d'entité par une autre grâce aux templates dans Home Assistant"
ref: ""
layout: post
authors: [Nico]
date: 2024-04-29 23:45
last_modified_at: 
categories: [Haade-lab, Mini-tutos]
tags: []
video: 
image: 'home-assistant-template-changer-resultat-d-une-commande-attributs-entite-par-une-autre-mini-tutos-haade-lab.png'
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

Dans l'article précédent je t'avais montré comment

{% highlight yaml %}
{% raw %}
{%- set result = state_attr('climate.thermostat_salon', 'running_state') %}
{%- if result == 'heat' %}
{%- set result = 'on' %}
{{ result }}
{%- else %}
{%- set result = 'off' %}
{{ result }}
{%- endif %}
{% endraw %}
{% endhighlight %}
