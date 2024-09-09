---
guid: 139
title: "Comfee Easy Dry 20 dehumidifier test"
description: "Test of the Easy dry 20 two-in-one dehumidifier with ionizer function and integration into the Home Assistant home automation assistant."
ref: "Easy Dry 20"
layout: post
authors: [Nico]
date: 2024-09-09 18:00
last_modified_at: 
categories: [Automation, Tests, Home-Assistant]
tags: []
video: 
image: 'test-deshumidifacteur-comfee-easy-dry-20-compatible-home-assistant.png'
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
rating: 5.0 
sourcelink:
  - https://amzn.to/3AOx2OR
  - https://www.feelcomfee.com/global
---

After a very rainy **2024** season, I found myself with a humidity level and mold in the basement. So I started looking to buy a dehumidifier. **And I wanted it to be compatible with my favorite assistant Home Assistant.**

Imagine that quite a few dehumidifiers on the market can be controlled via an open source assistant. **In Home Assistant this is possible thanks to the HACS 2.0 community library.**

> I chose the [Comfee Easy dry 20 dehumidifier](https://amzn.to/3XEEYeA){: target="_blank"}, 2 in 1 with Ionizer function.

## Prerequisites

- A Comfee dehumidifier (normal you will tell me)
- Home-Assistant
- the Midea Smart Home application on Smartphone
- The Library [HACS 2.0](https://www.home-assistant.io/blog/2024/08/21/hacs-the-best-way-to-share-community-made-projects/){: target="_blank"} of preference.

{%- include alert.html type="info" text="Haade.fr is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means to earn fees by linking to Amazon.com and affiliated sites." %}

{% include product-embed.html image="deshumidifateur-easydry-20-comfee-2-en-1-ioniseur-integration-home-assistant.png" title="Comfee 2 in 1 dehumidifier ionizer easy dry 20 compatible with Home Assistant" brand="Comfee" description="2-IN-1 Dehumidifier, Removes Moisture Up to 20L/Day, Air Purification with Ionizer, 4 Modes, Air Swing Function, APP Control, Ideal for 37-52㎡ Rooms, Easy Dry 20"  amazlink="3AR2P1t" %}

## Presentation

First of all I apologize for the quality of the photos, *but we'll have to make do*. :) The {{ page.ref }} dehumidifier is sold with an exhaust pipe, instructions, all delivered in a reinforced cardboard box protected with polystyrene, nothing exceptional so far.

{% picture posts/{{ page.guid }}/presentation-deshumidificateur-2-en-1-ioniseur-comfee-easydry-20.png --alt Introducing the Comfee 2 in 1 Dehumidifier Ionizer Easy Dry 20 --img width="940" height="529" %}

**The control panel is simple and efficient**, some keys hide two functions such as for example **the shutter management key, activates the ionizer function by holding it down.**

{% picture posts/{{ page.guid }}/fonctions-tableau-de-controle-disponibles-comfee-easydry-20.png --alt Functions and control panel available of the Comfee 2 in 1 ionizer easy dry 20 dehumidifier --img width="940" height="291" %}

The dehumidifier works on the same principle as an air conditioner, same gas, and a very similar construction. **It just doesn't have a cooling function.**
On the back side a removable grid acts as a filter and if it is clogged the Comfee dehumidifier {{ page.ref }} **will issue an alert**.
Also on the back side a **drain outlet** where you can connect the hose supplied with it, to choose a siphon drain.

{%- include alert.html type="warning" text="Check carefully the position of the cap during the first use." %}

And on the front side if you don't use the external outlet you can collect the water via a **3 liter recovery tank**, so it's not bad, but in a humid room the tank will quickly become saturated, and the dehumidifier **will stop treating the air and issue an alert** in order to empty the tank.

{% picture posts/{{ page.guid }}/particularite-deshumidificateur-2-en-1-ioniseur-comfee-easydry-20.png --alt Special feature of the Comfee 2 in 1 dehumidifier ionizer easy dry 20 --img width="940" height="529" %}

You can't see it in the pictures, but the **dehumidifier will move easily thanks to the casters.** The screenshot shows the main aspects of the product.

{% picture posts/{{ page.guid }}/fonction-comfee-easy-dry-20-2-en-1-ioniseur-deshumidificateur.png --alt Introduction to various functions of Comfee 2 in 1 dehumidifier ionizer easy dry 20 --img width="940" height="529" %}

{% picture posts/{{ page.guid }}/taille-comfee-easydry-20-deshumidificateur-2-en-1-ioniseur.png --alt Comfee 2 in 1 Dehumidifier Size, Easydry 20 Ionizer --img width="940" height="529" %}

## Integration in Home-Assistant

Integration in Home assistant is possible. To do this, you will first need to configure the dehumidifier on the private network's wifi (via the Midea SmartHome application)

[Smart Home Midea for playStore](https://play.google.com/store/apps/details?id=com.midea.ai.overseas&hl=fr){: target="_blank"}

[Smart Home Midea for Appstore](https://apps.apple.com/fr/app/smarthome-msmarthome/id1254346490){: target="_blank"}

{% picture posts/{{ page.guid }}/application-smart-home-midea.png --alt Smart Home App by Midea, the official app for Comfee dehumidifiers and air conditioners --img width="940" height="248" %}

Download the application and follow the recommendations, the wifi configuration is done without problems, once configured you will be able to remotely control your favorite dehumidifier and above all integrate it into home assistant.

{% picture posts/{{ page.guid }}/application-smarthome-midea-sur-smartphone.png --alt Smart Home application by Midea smartphone management --img width="940" height="509" %}

Now in Home Assistant go to the **HACS 2.0 tab** and type in the search engine **Midea** you will find several applications, one is called **Midea AC Lan is widely used by the community but it turns out that it is not compatible with the latest versions of Home Assistant**{: .red}, it has the advantage of being able to control the function of the shutters but for the rest **the other one chosen by me does the job**.

{% picture posts/{{ page.guid }}/hacs-midea-ac-lan-integraton-comfee-deshumidificateur-2-en-1-homeassistant.png --alt Midea program selection in hacs to control Comfee 2 in 1 ionizer easy dry 20 dehumidifier --img width="940" height="264" %}

So for the test I chose the application **Midea Air Appliance (Lan)**, download this version. For more information you can go directly to the [HACS Midea Air Appliances Lan repository in Github](https://github.com/nbogojevic/homeassistant-midea-air-appliances-lan){: target="_blank"}.

{% picture posts/{{ page.guid }}/midea-air-lan-integration-comfee-home-assistant-hacs-2.png --alt Midea AC Lan Depot in hacs to control Comfee 2 in 1 dehumidifier ionizer easydry 20 --img width="940" height="499" %}

Once installed, go directly to **Settings > Devices and services** and **type Midea** follow the steps and fill in the settings, nothing too complicated.

{% picture posts/{{ page.guid }}/midea-ac-lan-comfee-easydry-20-et-home-assistant.png --alt Adding Midea Air Appliances Lan device in home assistant to control Comfee 2 in 1 dehumidifier ionizer easydry 20 --img width="591" height="691" %}

And there you have it, you have integrated the dehumidifier into Home Assistant. All the functions are there except the shutter management, for the rest no worries.

{% picture posts/{{ page.guid }}/fonctions-disponibles-comfee-easydry-20-home-assistant.png --alt available functions of the comfee easy dry 20, 2 in 1 dehumidifier in home assistant --img width="940" height="743" %}

Some pictures of the Comfee dehumidifier management {{ page.ref }} in home Assistant.

{% picture posts/{{ page.guid }}/controle-du-deshumidificateur-comfee-easydry-20-dans-home-assistant.png --alt Control of the comfee easydry 20 dehumidifier, 2 in 1 in home assistant --img width="630" height="810" %}

> A short operating history In Set mode 

{% picture posts/{{ page.guid }}/fonction-comfee-continu.png --alt Information statement of the dehumidifier comfee easydry 20, 2 in 1 in home assistant with continuous function --img width="352" height="395" %}

**A little operating history In Intelligent mode** 45-55%, you can see the operating system I suppose the oscillation softens when the room has a lower humidity level, *to be tested*.

{% picture posts/{{ page.guid }}/fonction-smart-45-55-comfee-easydry-20-dans-homeassistant.png --alt Information statement of the dehumidifier comfee easy dry 20, 2 in 1 in home assistant with smart function --img width="630" height="543" %}

## Functions

A quick reminder of the functions of the Comfee dehumidifier {{ page.ref }}, two in one with air purification function by ionizer.

**Setpoint mode**
In setpoint mode, the dehumidifier adapts to the requested setting

**Smart Mode**
In intelligent dehumidification mode, the dehumidifier aims to maintain **the indoor humidity level between 45% and 55%**, which is the recommended humidity level for a healthy environment

**Continuous Mode**
The dehumidifier runs continuously without adapting to the setting

**Drying Mode**
The drying mode allows you to dry your laundry even on rainy days

**Ionizer Mode**
By activating the Ionizer mode, the dehumidifier purifies the air using an ultraviolet neon.

**APP control**
After downloading the Smart Home application by Midea, you can set the dehumidifier whenever and wherever you want. This unit is also **compatible with Alexa and Google Home.**

**Easy to move**
The 4 swivel wheels make it easy to move from room to room without having to lift heavy loads.

## Features

|Manufacturer|Midea Europe|
|Product Dimensions (L x W x H)|23.85 x 34.8 x 49.6 cm|
|Weight (kg)|14.3|
|Part Number|Easy Dry|
|Size|20L/day-37-52㎡-APP-Ionizer|
|Color|White|
|Style|Connected|
|Material|Plastic, Metal|
|Voltage|220 ​​Volts|
|Wattage|440 Watts|
|Airflow Capacity|160.8 cubic meters per hour|
|Special Features|Timer, Recorded, Continuous, Smart, Dry, Ionizer, Speed, Flap, Connected|
|Included Components|Drain Hose, Manual|
|Battery(ies) / Battery(ies) Required|No|
|Weight|14.3 Kilograms|


{%- include alert.html type="info" text="Haade.fr is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means to earn fees by linking to Amazon.com and affiliated sites." %}

{% include product-embed.html image="deshumidifateur-easydry-20-comfee-2-en-1-ioniseur-integration-home-assistant.png" title="Comfee 2 in 1 dehumidifier ionizer easy dry 20 compatible with Home Assistant" brand="Comfee" description="2-IN-1 Dehumidifier, Removes Moisture Up to 20L/Day, Air Purification with Ionizer, 4 Modes, Air Swing Function, APP Control, Ideal for 37-52㎡ Rooms, Easy Dry 20"  amazlink="3AR2P1t" %}

## Conclusion

Comfee has a reputation, **this model works very well**, and of good quality, as said there are other dehumidifiers of good quality but now you will know that **the Comfee dehumidifier {{ page.ref }} is controllable via home assistant.** It stands out from the others thanks to its two-in-one function of air purification by ionization technology.

