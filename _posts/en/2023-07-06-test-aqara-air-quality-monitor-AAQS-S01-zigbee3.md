---
guid: 75
title: "Aqara AAQS-S01 Air Quality Sensor Test"
description: "Here is a sensor that deserves to be interested in it Aqara has just released the AAQS-S01 VOC, temperature and humidity sensor module with epaper screen, all running on the Zigbee 3.0 protocol"
ref: "AAQS-S01"
layout: post
authors: Nico
date: 2023-07-12 10:06
last_modified_at: 
categories: [Tests, Automation, Zigbee]
tags: []
image: 'aqara-controle-qualite-air-temperature-humidite-aaqs-s01-en.png'
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
rating: 4.2 
sourcelink:
  - https://www.aqara.com/eu/product/tvoc-air-quality-monitor
  - https://www.domadoo.fr/fr/peripheriques/5751-aqara-moniteur-de-qualite-d-air-zigbee-30-temperature-humidite-covt-aaqs-s01-6970504214644.html?domid=39
  - https://zigbee.blakadder.com/Aqara_AAQS-S01.html
---

Here is a **niche module** which has no real competition signed **Aqara** and lent by [Domadoo](https://www.domadoo.fr/fr/peripheriques/5751-aqara-moniteur-de-qualite-d-air-zigbee-30-temperature-humidite-covt-aaqs-s01-6970504214644.html?domid=39){: target="_blank"}, the {{ page.ref }} module allows you to measure the air quality in real time, but not only!

## Aqara {{ page.ref }} in detail

The Aqara AAQS-S01 Air Quality Monitor **can detect the concentration and level of VOCs in the air**, as well as *temperature and humidity*.

{% picture posts/{{ page.guid }}/aqara-AS029GL-AAQS-S01-TVOC-moniteur-qualité-air-zigbee-boite.png --alt air quality aqara packaging quality {{ page.ref }} --img width="940" height="529" %}

> Aqara signs here a module of high quality as for the whole of the range the packaging is worthy of the greatest, nothing is missing.

{% picture posts/{{ page.guid }}/aqara-AS029GL-AAQS-S01-TVOC-moniteur-qualité-air-zigbee-deballage.png --alt content of the aqara air quality module {{ page.ref }} --img width="940" height="529" %}

At the time of writing this text I realize that I did not take photos of each side of the module. **This one has two openings on each side that must not be obstructed**. So do not glue this module in an angle otherwise it will not read the data correctly.

The module is made of solid plastic and the lcd screen is of **epaper type** in other words that the visibility of the data is there.

**It comes with:**
- the notice
- a magnet
- a double-sided

> To prevent the batteries from wearing out, the contacts are protected by a plastic strip (to be removed on first use).

**The epaper screen:** I find that for this type of module the lcd epaper display is perfect, the readability is extra whatever the viewing angle, a big plus thank you Aqara.

{% picture posts/{{ page.guid }}/aqara-AS029GL-AAQS-S01-TVOC-moniteur-qualité-air-zigbee-visibilite-ecran-epaper.png --alt epaper screen of the aqara air quality module {{ page.ref }} --img width="940" height="529" %}

You will notice that the Aqara {{ page.ref }} module works with **2 Panasonic brand CR2450 batteries**. This is a good point for the quality of the batteries but **it predicts a module with high battery consumption**. By default Aqara guarantees the lifetime **of the batteries at 1 year max**. The screen plus the various probes are probably energy-intensive.

{% picture posts/{{ page.guid }}/aqara-AS029GL-AAQS-S01-TVOC-moniteur-qualité-air-pile-et-divers-ecran.png --alt different screen displays of the aqara air quality module {{ page.ref }} --img width="940" height="529" %}

A double click on the button above allows you to switch from one view to another. Aqara {{ page.ref }} can be configured in 3 different views.

> ps: at the top right a rectangle appears when pairing in a zigbee network.

**Display 1:** temperature and humidity
**Display 2:** Voc in ppg, temperature and humidity
**Display 3:** Voc in bargraph, temperature and humidity

> Personally, I prefer **the 3 display**, the fact of displaying an air quality rated out of 5 is more readable and much more telling.

{% include product-embed.html guid="2169" %}


### Technical characteristics:

|Power supply|2 CR2450 batteries|
|Battery life|1 year|
|Communication|Zigbee 3.0 IEEE 802.15.4|
|Temperature detection range|-20 - 60°C|
|Temperature resolution|0.1°C|
|Humidity detection range|0-100% RH|
|Humidity resolution|1%|
|TVOC detection range|0~25mg/m³|
|TVOC resolution|1ppb or 0.01mg/m³|
|Operating temperature|0-50°C|
|Dimensions|41.6 × 76.0 × 14mm|
|Weight|56g|

### **the + of the product**
{: .blue}
- manufacturing quality
- TVOC measurement
- Humidity measurement
- Ambient temperature measurement
- Internal module temperature measurement
- number of status feedback (up to 5)

### **the - of the product**
{: .red}
- the price more than 40€
- the number of batteries
- discrepancy in the data recorded
- the consumption

{% include product-embed.html guid="2169" %}

## What are TVOC and where do they come from?

The family of volatile organic compounds includes several thousand compounds **(hydrocarbons, solvents, etc.)** with highly variable characteristics. They have a direct impact on health **(some are toxic or carcinogenic)**. These are gases and vapors that contain carbon, such as gasoline vapors and solvents. They are involved in the process of ozone formation in the lower atmosphere and therefore contribute to global warming. Volatile Organic Compounds (TVOC) are used in the composition of fuels but also many common products: **paints, inks, glues, stain removers, cosmetics, solvents...** for household, professional or industrial uses (for these reasons , their presence in indoor air can also be significant). They are emitted during the combustion of fuels **(in particular in the exhaust gases)**, or by evaporation during their manufacture, their storage or their use. TVOC are also emitted by the natural environment **(Mediterranean vegetation for example)** and certain cultivated areas.
The effects of TVOC vary greatly depending on the nature of the pollutant considered. They range from a **certain olfactory gene to mutagenic and carcinogenic effects (benzene, certain PAHs)**, through various irritations and a reduction in respiratory capacity.


## Integration in Zigbee networks

For the past few weeks, the latest product test articles have been accompanied by various integrations with Zigbee2mqtt, Zha in Home Assistant and with zigbee in Jeedom. I didn't encounter any difficulties to include this module, **just keep pressing the button for 5 seconds and the rest is done automatically.**

### Integration in ZHA

{% picture posts/{{ page.guid }}/aqara-AS029GL-AAQS-S01-zha.png --alt aqara air quality integration {{ page.ref }} in zha --img width="940" height="28" %}

The TVOC, Temperature and humidity information goes up and is consistent with the module screen, you will see that this is not the case in Zigbee2mqtt and with Jeedom.

{% picture posts/{{ page.guid }}/aqara-AS029GL-AAQS-S01-zha-entite.png --alt integration aqara air quality entity dispo {{ page.ref }} in zha --img width="940" height="615" %}

### Conclusion ZHA

**Of the three integrations**, this is the only one where the data between the module and home assistant is consistent. However, the feedback is limited to humidity, temperature and air quality. I strongly advise you to integrate the Aqara {{ page.ref }} in ZHA so with Home assistant

## Integration in Zigbee2mqtt (Home Assistant - Jeedom)

{% picture posts/{{ page.guid }}/aqara-AS029GL-AAQS-S01-zigbee2mqtt-inclusion.png --alt aqara air quality integration {{ page.ref }} in zigbee2mqtt --img width="940" height="38" %}

As usual, Z2M does better and goes further in reporting information. You will be able to realize that in addition to the TVOC, temperature and humidity you will also have:

- the internal temperature of the module
- battery voltage
- the choice of the unit to display for the COV

{% picture posts/{{ page.guid }}/aqara-AS029GL-AAQS-S01-zigbee2mqtt-a-propos.png --alt aqara air quality integration {{ page.ref }} in zigbee2mqtt about --img width="940" height="824" %}

The view of the integration as an entity in Home Assistant, adding to the dashboard is identical in ZHA.

{% picture posts/{{ page.guid }}/aqara-AS029GL-AAQS-S01-zigbee2mqtt-a-expose.png --alt aqara air quality integration {{ page.ref }} in zigbee2mqtt exposes --img width="940" height="654" %}

But, yes there is a but... the information displayed between the module screen and the reports in Z2M are not the same, probably a calculation problem that should be corrected after a little **pull requests in github**.

{% picture posts/{{ page.guid }}/aqara-AS029GL-AAQS-S01-zigbee2mqtt-entite.png --alt integration aqara air quality {{ page.ref }} in zigbee2mqtt available entity --img width="940" height="868" %}

On the image below there is a difference in terms of humidity but also TVOC which is not normal.

{% picture posts/{{ page.guid }}/aqara-AS029GL-AAQS-S01-zigbee2mqtt-erreur-difference-info.png --alt aqara air quality integration {{ page.ref }} in zigbee2mqtt error info --img width="940" height="529" %}

## Zigbee Jeedom integration

{% picture posts/{{ page.guid }}/aqara-AS029GL-AAQS-S01-jeedom-zigbee.png --alt aqara air quality integration {{ page.ref }} in jeedom with the zigbee module --img width="940" height="253" %}

Nickel the module is recognized the first time and looks functional.

{% picture posts/{{ page.guid }}/aqara-AS029GL-AAQS-S01-jeedom-zigbee-commande.png --alt integration aqara air quality {{ page.ref }} in jeedom with the zigbee module command available --img width="940" height="157" %}

However there also discrepancies in all the data, TVOC temperature and humidity. Yet the firmware update is below Jeedom recommendations. So there is either a calculation problem or an internal latency problem in the module. To dig.

{% picture posts/{{ page.guid }}/aqara-AS029GL-AAQS-S01-jeedom-zigbee-erreur-difference-info.png --alt integration aqara air quality {{ page.ref }} in jeedom error info --img width="940" height="529" %}

{% include doclink.html pdf="TVOC-Air-Quality-Monitor_Manual_EN.pdf" title="Aqara AAQS-S01 user manual" %}

{% include product-embed.html guid="2169" %}

## Conclusion

Another quality module, Aqara does not produce anything mediocre from its factories. **But it is not perfect**, battery consumption, feedback is not perfect, I also tried to update the firmware by OTA in Zigbbe2mqtt, but the launch fails. All these bugs make it a module ahead of its time that will need some time to bring it up to date 😄.
