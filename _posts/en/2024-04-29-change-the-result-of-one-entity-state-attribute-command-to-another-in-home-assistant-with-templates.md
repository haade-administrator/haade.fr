---
guid: 122
title: "Change the result of an entity's state attribute"
description: "In this mini tutorial I will show you how to change the entity state attribute result to another using templates in Home-Assistant"
ref: ""
layout: post
authors: [Nico]
date: 2024-04-29 23:45
last_modified_at: 
categories: [Haade-lab, Mini-tutos]
tags: []
video: 
image: 'home-assistant-mini-tutos-haade-lab-create-an-average-on-entities-with-template.png'
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
---

In the previous article I showed you how to [create an average of states on entities]({% post_url /en/2024-04-11-home-assistant-Template-make-averages-of-multiple-entities %}), by making a call on an entity state ```states()``` which directly reports the state of this entity.
Today is different, I'm going to show you **how to work with entity state attributes**.

## Prerequisites

**Home Assistant installed**

{% include product-embed.html image="Home-Assistant-Green.png" title="Box HomeAssistant Green" brand="Nabu Casa" description="Box Home Assistant Green on sale at domadoo for less than €100" domlink="smart-home-gateway/7046-nabu-casa-home-assistant-green-smart-home-hub-0794677011758.html" %}

## find all functions of an entity

Nothing could be simpler, go to:

**Development tools > states tab**, then you search using the filters

{% picture posts/{{ page.guid }}/recherche-etat-entite-et-attribut-entite-home-assistant.png --alt finding information about state and state attribute on entity --img width="940" height="757" %}

**Info:** you can also work on the state attributes of entities directly in the **scenarios (automations)** of Home Assistant and **yes** for a short time they have been listed according to the previously selected entity, *I find it rewarding.*

{% picture posts/{{ page.guid }}/gestion-attribut-etat-entite-scenario-automatisation-home-assistant.png --alt management of entity attributes directly in a home assistant automation --img width="940" height="650" %}

In short, during the installation at **August** of thermostatic valves from different brands, I needed to standardize the results of the commands in order to be able to work more easily in the automations.

## Template and entity

To create a template, nothing could be simpler, go to home assistant

> Parameters/inputs/create-an-input/template/Model-a-sensor


## Code explanation

below the code, you do not have to put the tag ```{% raw %}{{ result }}{% endraw %}``` which is there mainly to **read the result of the command .**

What I did, I retrieve the state attribute **running state** of the entity **climate.thermostat_salon** and I put a condition if the result is ```heat```, the transform into result ```on``` otherwise ```off```

the ```running_state``` function of a thermostatic module generally responds to ```Idle``` or ```Heat```, but in my case I had a thermostatic valve [Aqara SRTS -01]({% link _products/{{ page.locale | slice: 0,2 }}/2024-01-30-thermostatic-head-aqara-srts-a01-e1-zigbee.md %}) which did not have this function so I had to adapt a code *and in home-assistant it is largely doable.*

### Time for code explanations

**We save the result of the running_state state attribute**

```{% raw %}{%- set result = state_attr('climate.thermostat_salon', 'running_state') %}{% endraw %}```

**If the default result is *heat***

```{% raw %}{%- if result == 'heat' %}{% endraw %}```

**We transform it into *On***
```{% raw %}{%- set result = 'on' %}{% endraw %}```

**Otherwise *Off***
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

Thanks to this mini-tutorial you will be able to take your first steps in home-assistant templates and **transform the results of an entity's state attributes**.
