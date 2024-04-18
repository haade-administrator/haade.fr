---
guid: 119
title: "Template - Create an average on entities"
description: "mini tutorials on templates in home assistant, how to create an average of the state of several entities."
ref: ""
layout: post
authors: [Nico]
date: 2024-04-11 12:30
last_modified_at: 
categories: [Haade-lab, Mini-tutos]
tags: []
image: 'create-an-average-on-entities-template-home-assistant.png'
toc: true
beforetoc: ''
published: true
noindex: false
sitemap:
  changefreq: 'monthly'
  exclude: 'no'
  priority: 0.5 #between 0.0 to 1.0, 1.0 high priority
  lastmod:  # date to end modification
locale: en_GB
comments: true
rating:  
sourcelink:
  - https://www.home-assistant.io/integrations/template/
  - https://www.home-assistant.io/docs/configuration/templating/
---
For our first template tutorial, I suggest you **create averages from the state of the values of the entities** (sensor). In my cases I need to take an average of two values concerning the off-peak/peak time teleinformation in order to bring up a single common value. In addition it is expressed by default in Wh and I would like to transform it into KWh. You will see that ``Liquid/Jinja``` **it's not very complicated!**

## Prerequisites

**Home Assistant installed**

{% include product-embed.html image="Home-Assistant-Green.png" title="Box HomeAssistant Green" brand="Nabu Casa" description="Box Home Assistant Green on sale at domadoo for less than €100" domlink ="smart-home-gateway/7046-nabu-casa-home-assistant-green-smart-home-hub-0794677011758.html" %}

## Template and entity

To create a template, nothing could be simpler, go to home assistant

> **Parameters/inputs/create an entry/template/Model a sensor**

### get the values

{% picture posts/{{ page.guid }}/entites-releves-creation-moyenne-template.png --alt value to be noted --img width="313" height="161" %}

### notes the name of the entity

{% picture posts/{{ page.guid }}/releve-sensor-teleinfo-creation-template-home-assistant.png --alt find the name of the entities --img width="588" height="873" %}

## Code explanations

The teleinfo module that I use as well as my subscription provide off-peak/peak time information, for personal reasons I pay exactly the same thing whatever the price.

**We save the first state under hc**

```{% raw %}{% set hc = states('sensor.teleinfo_hchc') | float %}{% endraw %}```

**We save the second state under hp**

```{% raw %}{% set hp = states('sensor.teleinfo_hchp') | float %}{% endraw %}```

**We display the hc + hp value all divided by 2 and then divided by 1000 with rounding of 2 after the decimal point**

```{% raw %}{{ ((hc + hp) / 2 / 1000) | round(2, default=0) }}{% endraw %}```

### Code result

{% highlight liquid %}
{% raw %}
{% set hc = states('sensor.teleinfo_hchc') | float %}
{% set hp = states('sensor.teleinfo_hchp') | float %}
{{ ((hc + hp) / 2 / 1000) | round(2, default=0) }}
{% endraw %}
{% endhighlight %}

### Animated explanation

> The device class and the state class will be displayed in red if there is a mismatch with the chosen entity, it's pretty well done.

![Creation of a template on entity averages in home-assistant in animated gif]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/creation-template-moyenne-sur-entite.webp{{ cachebuster }}){: width="940" height="534" class="lazyload"}

> You will be able to check the data provided directly before validating the template.