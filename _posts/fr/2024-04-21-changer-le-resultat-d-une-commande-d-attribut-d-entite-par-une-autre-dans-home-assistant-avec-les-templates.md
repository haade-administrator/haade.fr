---
guid: 122
title: "Changer le résultat d'un état d'attributs d'entités"
description: "Dans ce mini tutos je vais te montrer comment changer le résultat d'un état d'attribut d'entité par une autre grâce aux templates dans Home Assistant"
ref: ""
layout: post
authors: [Nico]
date: 2024-04-21 23:45
last_modified_at: 
categories: [Haade-lab, Mini-tutos]
tags: []
video: 
image: 'home-assistant-template-changer-resultat-d-une-commande-attributs-entite-par-une-autre-mini-tutos-haade-lab.png'
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
---

Dans l'article précédent je t'avais montré comment créer une moyenne d'entités en faisant un appel sur un état d'entité ```states()``` qui relève directement l'état de cette entité. Aujourd'hui c'est différent, je vais te montrer comment travailler avec les attributs des états des entités.

**Outils de développement > onglet états**, ensuite du cherche à l'aide des filtres 

{% picture posts/{{ page.guid }}/recherche-etat-entite-et-attribut-entite-home-assistant.png --alt recherche d'informations sur l'état et l'attribut d'état sur entité --img width="940" height="757" %}

**Info:** tu peux aussi travailler sur les attributs d'états des entités directement dans les scénarios ( automatisations ) de Home Assistant et oui depuis peu de temps elles sont répertoriées en fonction de l'entité sélectionnée précédemment, je trouve ça gratifiant.

{% picture posts/{{ page.guid }}/recherche-etat-entite-et-attribut-entite-home-assistant.png --alt recherche d'informations sur l'état et l'attribut d'état sur entité --img width="940" height="757" %}

Bref lors de l'installation chez August de robinets thermostatiques de différentes marques j'ai eu besoin d'uniformiser les résultats de commandes afin de pouvoir travailler plus facilement dans les automatisations.

Ce que j'ai fait, je récupère l'attribut d'état **running state** de l'entité **climate.thermostat_salon** et je met une condition si le resultat est ```heat``` le transformer en résultat ```on``` sinon ```off```

ci-dessous le dode tu n'es pas obligé de mettre la balise ```{{ result }}``` qui est là surtout pour **lire le résultat de la commande.**

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
