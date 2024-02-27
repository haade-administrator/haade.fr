---
guid: 55
title: "Heiman HS3AQ Co2 Sensor Test"
description: "Heiman Zigbee temperature, humidity, Co2 sensor test and integration in homeassistant"
layout: post
author: Nico
date: 2023-03-19 16:42
last_modified_at: 2023-06-03 11:16
categories: [Tests, Zigbee]
tags: []
image: 'test-capteur-co2-zigbee-heiman-HS3AQ.png'
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
addViews: 29
comments: true
rating: 4.2
sourcelink:
  - https://www.heimantech.com/product/index.php?type=detail&id=106
redirect_from:
  - /en/blog/test-co2-sensor-zigbee-heiman-HSAQ
---

Today I present to you the Heiman HS3AQ Co2, humidity and temperature sensor, a modern sensor with mirror effect, all operating under the zigbee 3.0 protocol.

{% include product-embed.html guid="2153" %}

As you can see on the different photos the product is very well finished, the mirror effect is present depending on the surrounding light, it can even become annoying. It will absolutely be necessary to place it in a place where the lighting is weak otherwise apart from seeing your reflection on sunny days, you will not be able to read the news.

## Pairing

The pairing is done by holding down the + and - buttons for 5 seconds, following this an online indication appears, it will suffice to press the + button again to activate the one-minute countdown to integrate the module into the home automation assistant.

{% picture posts/{{ page.guid }}/heiman-HS3AQ-rendu-miroir-et-appairage-zigbee.png --alt box contents, mirror effect and heiman HS3AQ pairing --img width="940" height="529" %}

The display quality is top, **the green bar indicates the air quality, orange is average and red is mediocre**, I find this indication well thought out. You can even adjust the values in the CO2 configuration page, *negative point the CO2 capture probe will only work for a maximum of 10 years*. It is also possible to disable the sound of the Co2 alarm. We will greatly appreciate the measurement of humidity and temperature.
> The module incorporates a backup battery, which lasts well for 12 hours.

{% picture posts/{{ page.guid }}/capture-ecran-heiman-HS3AQ-capteur-co2-humidite-temperature-zigbee.png --alt temperature humidity time and co2 functions of the heiman HS3AQ --img width="940" height="529" %}

{% include doclink.html pdf="manuel-utilisateur-sonde-qualite-air-heiman-hs3aq.pdf" title="user manual air quality sensor zigbee heiman HS3AQ" %}

# Integration in Jeedom

I integrated the module in Jeedom Luna with the zigbee plugin, the Heiman HS3AQ module is recognized, the Co2, humidity and temperature data are uploaded, **the time is set on your home automation system**, however negative point * the battery level information is missing*

{% picture posts/{{ page.guid }}/integration-heiman-HS3AQ-jeedom-zigbee-3.0.png --alt integration of the Heiman HS3AQ CO2 sensor on jeedom with the zigbee plugin --img width="940" height="276" %}

{% picture posts/{{ page.guid }}/integration-heiman-HS3AQ-jeedom-commande-zigbee-3.0.png --alt Heiman HS3AQ CO2 sensor integration on jeedom with zigbee plugin shows available commands --img width="940" height="276" %}

# Integration in Homeassistant

I also integrated the Heiman HS3AQ module in Homeassistant with the Zigbee2mqtt Plugin, it is also recognized, the Co2, humidity, temperature and **battery** data are uploaded correctly. *But for the moment the time is not set on the system, it will have to be set manually*. I will upload to Zigbee2mqtt's github repository

{% picture posts/{{ page.guid }}/integration-heiman-HS3AQ-homeassistant-zigbee-3.0.png --alt integration of the Heiman HS3AQ CO2 sensor on Homeassistant with the zigbee2mqtt plugin --img width="940" height="692" %}

{% picture posts/{{ page.guid }}/integration-heiman-HS3AQ-homeassistant-expose-zigbee-3.0.png --alt Heiman HS3AQ CO2 sensor integration on Homeassistant with zigbee2mqtt plugin shows available commands --img width="940" height="388" %}

# Functions:

Standard Zigbee protocol.
Visualize the air quality in real time.
Be alerted in case of abnormally high level of CO2.
Create automations based on temperature, humidity and CO2.
 
# Technical characteristics :

|Power supply|Mains adapter Input: AC 100~240V Output DC 5V/1A Micro-USB|
|Built-in battery|lithium-ion battery|
|CO2 sensor type|non-dispersive infrared sensor (NDIR)|
|CO2 sensor lifetime|max. 10 years|
|Wireless protocol|Zigbee 3.0|
|Communication distance|100 meters|
|Operating temperature|-10°C to 40°C|
|Humidity|10% to 95% (non-condensing)|
|Installation location|wall or desk stand|
|CO2 measurement range|400-5000ppm|
|CO2 accuracy|100 ppm or 10% of measured values, whichever is greater|
|Air quality CO2 concentration|Good <600ppm <br> Normal 600~1200ppm <br> Poor >1200ppm<br>Values can be adjusted on CO2 setup page|
|Alarm trigger|Low >1200ppm<br>can be adjusted on CO2 setup page|
|Dimensions|90 x 90 x 26 mm (without stand)|

# **the + of the product**
{: .blue}
- product quality
- highlighting the measurement of Co2
- deactivation of the CO2 audible alarm
- Clear pairing
- Varied Home Automation Box compatible
- the module acts as a router (repeats the zigbee signal)

# **the - of the product**
{: .red}
- lack of certain information feedback in the plugins
- mirror panel a little too pronounced
- its price ~60€
- Guaranteed operation of the CO2 probe

{% include product-embed.html guid="2153" %}

# Conclusion
It is a well-finished product and will be essential for controlling the air quality in your home, in my opinion I find it a shame to have to leave this module continuously connected to the mains, for the price Heiman could have provided a battery at big capacity.