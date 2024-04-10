---
guid: 119
title: ""
description: ""
ref: ""
layout: post
authors: [Nico]
date: 2024-04-10 14:56
last_modified_at: 
categories: [Haade-lab, Mini-tutos]
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
  - https://www.home-assistant.io/integrations/template/
  - https://www.home-assistant.io/docs/configuration/templating/
---

# Prérequis

Home Assistant d'installé

# Mini-tutos

Pour créer un template rien de plus simple rends-tois dans home assistant 
```Paramètres/entrées/crééer une entrée/template/Modéliser un capteur```

## Explications

Le module de téléinfo que j'utilises ainsi que mon abonnement font remonter l'information heure-creuse/heure-pleine, pour raison personnelle je paie exactement la même chose quelque soit le tarif.


{% highlight yaml %}
{% raw %}
# on enregistre le premier état sous hc
{% set hc = states('sensor.teleinfo_700501411465_hchc') | float %}
# on enregistre le second état sous hp
{% set hp = states('sensor.teleinfo_700501411465_hchp') | float %}
# On affiche la valeur hc + hp le tout divisé par 2 et ensuite divisé par 1000 avec un arrondis de 2 après la virgule
{{ ((hc + hp) / 2 / 1000) | round(2, default=0) }}
{% endraw %}
{% endhighlight %}
