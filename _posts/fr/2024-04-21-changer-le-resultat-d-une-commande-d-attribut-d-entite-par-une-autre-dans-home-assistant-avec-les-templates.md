---
guid: 122
title: "Changer le résultat d'un attribut d'état d'une entité"
description: "Dans ce mini tutos je vais te montrer comment changer le résultat attribut d'état d'entité par un autre grâce aux templates dans Home-Assistant"
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

Dans l'article précédent je t'avais montré comment créer une moyenne d'entités, en faisant un appel sur un état d'entité ```states()``` qui relève directement l'état de cette entité. 
Aujourd'hui c'est différent, je vais te montrer comment travailler avec les attributs des états des entités.

## Prérequis

**Home Assistant d'installé**

{% include product-embed.html image="Home-Assistant-Green.png" title="Box HomeAssistant Green" brand="Nabu Casa" description="Box Home Assistant Green en vente chez domadoo à moins de 100€" domlink="box-domotique/7046-nabu-casa-box-domotique-home-assistant-green-0794677011758.html" %}

## trouver l'ensemble des fonctions d'une entité

Rien de plus simple rends toi dans: 

**Outils de développement > onglet états**, ensuite du cherche à l'aide des filtres 

{% picture posts/{{ page.guid }}/recherche-etat-entite-et-attribut-entite-home-assistant.png --alt recherche d'informations sur l'état et l'attribut d'état sur entité --img width="940" height="757" %}

**Info:** tu peux aussi travailler sur les attributs d'états des entités directement dans les **scénarios ( automatisations )** de Home Assistant et oui depuis peu de temps elles sont répertoriées en fonction de l'entité sélectionnée précédemment, *je trouve ça gratifiant.*

{% picture posts/{{ page.guid }}/gestion-attribut-etat-entite-scenario-automatisation-home-assistant.png --alt gestion des attributs des entités directement dans une automatisation home assistant --img width="940" height="650" %}

Bref lors de l'installation chez **August**, de robinets thermostatiques de différentes marques j'ai eu besoin d'uniformiser les résultats de commandes afin de pouvoir travailler plus facilement dans les automatisations.

Ce que j'ai fait, je récupère l'attribut d'état **running state** de l'entité **climate.thermostat_salon** et je met une condition si le resultat est ```heat```, le transformer en résultat ```on``` sinon ```off```

## Template et entité

Pour créer un template rien de plus simple rends-tois dans home assistant

> Paramètres/entrées/créer-une-entrée/template/Modéliser-un-capteur


## Explication du code 

ci-dessous le code, tu n'es pas obligé de mettre la balise ```{% raw %}{{ result }}{% endraw %}``` qui est là surtout pour **lire le résultat de la commande.**

la fonction ```running_state``` d'un module thermostatique a comme réponse en général ```Idle``` ou ```Heat```, mais dans mon cas de figure j'avais un robinet thermostatique [Aqara SRTS-01]({% link _products/{{ page.locale | slice: 0,2 }}/2024-01-30-tete-thermostatique-aqara-srts-a01-e1-zigbee.md %}) qui ne possédait pas cette fonction alors j'ai du adapter un code *et dans home-assistant c'est largement faisable.*

Place aux explications du code

**On enregistre le resultat de l'attribut d'état running_state**

```{% raw %}{%- set result = state_attr('climate.thermostat_salon', 'running_state') %}{% endraw %}```

**Si le résultat par défaut est *heat***

```{% raw %}{%- if result == 'heat' %}{% endraw %}```

**On le transforme en *On***
```{% raw %}{%- set result = 'on' %}{% endraw %}```

**Sinon en *Off***
```{% raw %}{%- else %}{% endraw %}```
```{% raw %}{%- set result = 'off' %}{% endraw %}```

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

## Conclusion

Grâce à ce mini-tutos tu pourras faire tes premiers pas dans les templates de home-assistant et transformer des résultats d'attributs d'état d'une entité.
