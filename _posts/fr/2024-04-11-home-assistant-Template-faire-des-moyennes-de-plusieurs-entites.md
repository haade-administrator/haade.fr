---
guid: 119
title: "Template - Créer une moyenne sur entités"
description: "mini tutos sur les templates dans home assistant, comment créer une moyenne de l'état de plusieurs entitées."
ref: ""
layout: post
authors: [Nico]
date: 2024-04-11 12:30
last_modified_at: 
categories: [Haade-lab, Mini-tutos]
tags: []
video:
image: 'creer-moyenne-etat-entite-template-home-assistant.png'
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
  - https://www.home-assistant.io/integrations/template/
  - https://www.home-assistant.io/docs/configuration/templating/
---
Pour notre premier tuto template, je te propose **de créer des moyennes à partir de l'état des valeurs des entités** ( sensor ). Dans mons cas j'ai besoin de faire une moyenne de deux valeurs concernant la téléinformation heure creuse/heure pleine afin de faire remonter une seule valeur commune. De plus elle est exprimée par défaut en Wh et j'aimerai la transformer en KWh. Tu va voir que ```Liquid/Jinja``` **ce n'est pas très compliqué !**

## Prérequis

**Home Assistant d'installé**

{% include product-embed.html image="Home-Assistant-Green.png" title="Box HomeAssistant Green" brand="Nabu Casa" description="Box Home Assistant Green en vente chez domadoo à moins de 100€" domlink="box-domotique/7046-nabu-casa-box-domotique-home-assistant-green-0794677011758.html" %}

## Template et entité

Pour créer un template rien de plus simple rends-tois dans home assistant 

> **Paramètres/entrées/créer une entrée/template/Modéliser un capteur**

### récupère les valeurs

{% picture posts/{{ page.guid }}/entites-releves-creation-moyenne-template.png --alt valeur à retrouver --img width="313" height="161" %}

### relève le nom de l'entité

{% picture posts/{{ page.guid }}/releve-sensor-teleinfo-creation-template-home-assistant.png --alt relevé le nom de l'entité --img width="588" height="873" %}

## Explications du code

Le module de téléinfo que j'utilises ainsi que mon abonnement font remonter l'information heure-creuse/heure-pleine, pour raison personnelle je paie exactement la même chose quelque soit le tarif.

**On enregistre le premier état sous hc**

```{% raw %}{% set hc = states('sensor.teleinfo_hchc') | float %}{% endraw %}```

**On enregistre le second état sous hp**

```{% raw %}{% set hp = states('sensor.teleinfo_hchp') | float %}{% endraw %}```

**On affiche la valeur hc + hp le tout divisé par 2 et ensuite divisé par 1000 avec un arrondis de 2 après la virgule**

```{% raw %}{{ ((hc + hp) / 2 / 1000) | round(2, default=0) }}{% endraw %}```

### Résultat du code

{% highlight liquid %}
{% raw %}
{% set hc = states('sensor.teleinfo_hchc') | float %}
{% set hp = states('sensor.teleinfo_hchp') | float %}
{{ ((hc + hp) / 2 / 1000) | round(2, default=0) }}
{% endraw %}
{% endhighlight %}

### Explication animée

> La classe de l'appareil et la classe d'état s'afficheront en rouge s'il y a une discordance avec l'entité choisi, c'est plutôt bien fait.

![Création d'un template sur les moyennes des entité dans home-assistant en gif animé]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/creation-template-moyenne-sur-entite.webp{{ cachebuster }}){: width="940" height="534" class="lazyload pictaninpost"}

> Tu pourras vérifier en direct les données remontées avant la validation du template.