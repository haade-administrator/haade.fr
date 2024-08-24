---
guid: 137
title: "Test of the Saswell SAS980 Zigbee watering controller"
description: "I am testing a Zigbee watering module the Saswell SAS980 with intelligent timer and water flow measurement also manufactured under the RTX brand reference ZVG1 which has the particularity of measuring water consumption but not only that."
ref: "SAS980SWT-7-Z01"
layout: post
authors: [Nico]
date: 2024-08-24 19:33
last_modified_at: 
categories: [Automation, Tests, Zigbee]
tags: []
video: 
image: 'zigbee-watering-programer-saswell-sas980-zigbee-zigbee2mqtt.png'
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
rating: 3.2
sourcelink: 
  - https://fr.saswell.com/smart-irrigation-wifi-water-timer-sas980swt-7-z01_p147.html
  - https://blog.domadoo.fr/93249-electrovanne-saswell-zigbee/
---

After testing the irrigation module **[Zigbee Woox R7060]({% post_url /en/2023-03-29-test-smart-watering-controller-zigbee-woox-r7060 %})** last year , today I am tackling the test of the **Saswell SAS980SWT-7-Z01** sold under white label by RTX under the reference ZVG1. It is recognized under this reference in Zigbee2mqtt, but since then Saswell has resumed sales under this name. You will see that he has some interesting points. **But also some points of dysfunction.**

{% include product-embed.html image="saswell-electrovanne-et-programmateur-d-arrosage-connecte-zigbee-mesure-de-consommation.png" title="Zigbee watering solenoid valve" brand="Saswell" description="Control and program the watering of your garden or lawn and measure water consumption with the SASWELL Zigbee connected solenoid valve and programmer." domlink="garden-weather/7212-saswell-zigbee-connected-solenoid-valve-and-watering-programmer-consumption-measurement.html" amazlink="3AzXZFL" %}

As with the Woox, Saswell chose a **Tuya Zigbee chip**. It is definitely a Chinese product.

> I still deplore this choice because Tuya chips are still exempt from certain features such as the absence of binding.

However, it has the advantage of providing, in addition to the usual functions found on this type of product, **smaller shapes** which allows several irrigation modules to be fixed on a common rail. Unlike other models that cannot be put on the same line.

## Unboxing

Delivered in a cardboard box with no visible mark, you will discover inside:
- a summary user manual
- a plug'n play mechanism with pre-filter
- 2 white sealing gaskets
- a 3/4 to 1/2" adapter

{% picture posts/{{ page.guid }}/deballage-unboxing-programmeur-arrosage-zigbee-saswell-sas980.png --alt Saswell SAS980 watering programmer unboxing unboxing --img width="940" height="529" %}

> Some additional photos...

{% picture posts/{{ page.guid }}/contenu-et-dimension-du-programmeur-arrosage-zigbee-saswell-sas980.png --alt Contents and dimensions of the Saswell SAS980 watering programmer --img width="940" height="529" %}

The Saswell is powered by two AA batteries which is also good news, and it is also one of the reasons for this low volume. 
> This vertical design will allow you easy installation on a common rail.

{% picture posts/{{ page.guid }}/design-vertical-saswell-sas980-permet-assembler-plusieurs-unites-sur-rampe-arrosage.png --alt Architecture of the Saswell SAS980 irrigation programmer allows assembly on multi-connection assembly ramp --img width="940" height="529" %}

Finally, a very interesting option is the calculation of the volumetric flow (flow meter) measured between the opening and closing of the control, **however I really have the impression that the flow of water consumed does not reflect reality .**

## Mounting accessories

I took photos with the accessories mounted, including the plug'n play fixing system dear to the Gardena brand, it's a plus. The battery compartmentation is well done, you unclip the shell and remove the compartment protected by a white seal for flawless protection.

{% picture posts/{{ page.guid }}/dimension-assemblage-acces-piles-du-programmeur-arrosage-zigbee-saswell-sas980.png --alt Dimensions, assembly and access to batteries of the Saswell SAS980 watering programmer allows assembly on a multi-connection assembly ramp --img width="940" height="529" %}

## Video installation

Below is the official installation of the Saswell {{ page.ref }}

{% include videoPlayer.html youtubeId="evaCnrPJU-I" %}

## Home Automation Compatibility

### In Zigbee2mqtt

As usual the functions in Z2M are complete even too much for my taste, the integration is done without any problems in short only happiness. So thanks to that you can easily use it in Home Assistant, Jeedom, Gladys and so on.

{% picture posts/{{ page.guid }}/rendu-controlleur-irrigation-rtx-zvg1-zigbee-dans-zigbee2mqtt-a-propos.png --alt Zigbee irrigation module integration nail about Zigbee2mqtt rtx zvg1 or Saswell SAS980SWT-7-Z01 --img width="940" height="637" %}

Let's start with the main functions:
- state allows you to activate/deactivate the opening of the system
- the battery and its level
- weather delay: corresponds to weather activation over 24,48 or 72 hours monitoring **unfortunately we do not know the value of the weather status**. This function is there to not activate the system if rain is forecast within 24,48 or 72 hours.
- Timer state: state of the timer but I won't be able to tell you more
- timer: ON/Off opening operation delay
- timer time left: last recording of the operating time
- Last valve open duration: Time during which the valve was open
- Water consumed: Liters of water consumed incorrect values*

{% picture posts/{{ page.guid }}/rendu-controlleur-irrigation-rtx-zvg1-zigbee-dans-zigbee2mqtt-expose-1.png --alt Zigbee irrigation module integration tab exposes 1 Zigbee2mqtt first rtx options zvg1 or Saswell SAS980SWT-7-Z01 --img width="940" height="684" %}

To finish the groups of disappointing functionalities and this is due to the Tuya chip, genONOFF and non-existent in the outgoing or incoming functions so you will not be able to set up a Zigbee link (live operation without coordinators) and that's a shame .

{% picture posts/{{ page.guid }}/rendu-controlleur-irrigation-rtx-zvg1-zigbee-dans-zigbee2mqtt-endpoint-cluster.png --alt Functions available Endpoint and Cluster rtx zvg1 or Saswell SAS980SWT-7-Z01 --img width="940" height="516" %}

#### operating time and calendar functions

Below is the screenshot of the functions of the {{ page.ref }}
the cycle timer will allow you to set watering cycles with a start time and an end time. Example: between 8:00 a.m. and 12:00 p.m. you can set a 4-minute watering cycle with a 45-minute break set depending on the day and activate the function with 1 or deactivate with 0.
**08:00 / 12:00 / 4 / 45 / MoTuWeThFrSaSu / 1**

Regarding the calendar function, you can set a trigger at the desired time 8:00 a.m. with an operating time of 15 minutes depending on the day of the week and activate or not the function with 1.
**08:00 / 15 / MoTuWeThFrSaSu / 1**

> **PS:** I noticed activation malfunctions when using these functions.

{% picture posts/{{ page.guid }}/rendu-controlleur-irrigation-rtx-zvg1-zigbee-dans-zigbee2mqtt-expose-2.png --alt Zigbee irrigation module integration tab exposes 2 Zigbee2mqtt first options rtx zvg1 or Saswell SAS980SWT-7-Z01 --img width="940" height="684" %}

### In ZHA with Home Assistant

If you decide to use ZHA you can simply use the on/off switch, then of course in terms of function it is very limited, but you will be able to thanks to homeassistant this single function will not prevent you from using this programmer thanks to the power of automation. However, the flow meter function is missing but given the imprecise operation of it, you can also largely do without it.

{% picture posts/{{ page.guid }}/rendu-controlleur-irrigation-rtx-zvg1-zigbee-dans-zha.png --alt Integration of Zigbee irrigation module with ZHA and Zigpy le rtx zvg1 or Saswell SAS980SWT-7-Z01 --img width="940" height="815" %}

## Flow Meter Test 

### Sprinkler mounting 

In my case I use an irrigation system mounted on a booster calibrated to 3.5 bars, this watering network is made up of sprinklers for flower pots in order to water a multitude of plants in containers.

This type of water supply has many advantages but the pressure inside the system is variable, between emptying the booster and resupplying air. In this case the Saswell flow meter {{ page.ref }} is totally wrong, for 4 minutes of use it indicates 10L of consumption while I am at 50 liters.

### On drinking water network with jet

Following this error I simply decided to test the water flow on a direct drinking water connection at a flow rate of 3 bars with watering by direct water jet at the 3 bar pressures used. The results are clear, the flow meter shows me 50 liters when in reality I am at 52 liters.

## Technical characteristics

- Wireless protocol: ZigBee 3.0
- Power supply: 2 AA 1.5V LR6 alkaline batteries (NOT INCLUDED)
- Battery life: up to 12 months (depending on usage)
- Operating temperature: +1 to +50°C (Do not expose the device outdoors during winter)
- Storage temperature range: -10 to +60℃
- Faucet connection: 3/4″ with integrated filter and 1/2″ adapter supplied
- Protection index: **IP54**
- Maximum water pressure: 0.03 ~ 0.8 MPA
- Measurement of water consumption: **for flow rates from 5L/min minimum to 35L/min maximum**

**Product advantages:**{: .blue}

- The price
- Powered by AA battery guaranteed for 1 year
- Easily adaptable to traditional system
- Weather compatible (blocks if rain is forecast)
- Controls the volumes of water used
- Zigbee2mqtt compatible

**The - of the product:**{: .red}

- Wrong water volume measurement
- Weather controller does not report any data
- insufficient IP54 protection rating

{% include product-embed.html image="saswell-electrovanne-et-programmateur-d-arrosage-connecte-zigbee-mesure-de-consommation.png" title="Zigbee watering solenoid valve" brand="Saswell" description="Control and program the watering of your garden or lawn and measure water consumption with the SASWELL Zigbee connected solenoid valve and programmer." domlink="garden-weather/7212-saswell-zigbee-connected-solenoid-valve-and-watering-programmer-consumption-measurement.html" amazlink="3AzXZFL" %}

## Conclusion

Saswell has created an irrigation module with undeniable advantages due to its longitudinal design. I still regret that the calculation of water consumed is far from reality as well as numerous options with random operation. 
> The product is well made but far from complete.