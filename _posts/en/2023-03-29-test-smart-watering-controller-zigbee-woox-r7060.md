---
guid: 57
title: "Woox R7060 Irrigation Controller Test"
description: "Woox Zigbee 3.0 R7060 Smart Controller Review Automates Your Garden Irrigation"
layout: post
author: Nico
date: 2023-03-29 17:07
last_modified_at: 
categories: [Automation, Zigbee, Tests]
tags: []
image: 'woox-controleur-arrosage-zigbee-r7060-test.png'
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
addViews: 30
comments: true
rating: 4.0
sourcelink:
  - https://wooxhome.com/products-c10/other-c4/woox-r7060-smart-garden-irrigation-control-p61
  - https://blog.domadoo.fr/88669-test-controleur-d-arrosage-zigbee-woox-r7060/
---

Today I'm going to introduce you to a module that has little competition in the field of gardening and that will allow you to control your watering/irrigation system with your favorite home automation system. Woox has been marketing for a while a zigbee 3.0 controller that plugs directly into the outlet of your water network Named R7060. Before launching Haade, I worked in the world of tree nurseries and I believe I can say that I am familiar with this type of module and the constraints caused by bad weather. So does the Woox R7060 smart irrigation controller live up to my expectations!

{%- include alert.html type="info" text="The Woox R7060 module is currently on promotion until April 4, 2023 on the Domadoo site at the single price of €26.39." link="https://www.domadoo.fr/fr/peripheriques/5685-woox-controleur-d-arrosage-intelligent-onoff-zigbee-30-8435606701198.html?domid=39" textlink="Promotion on The Woox R7060 module -20%" %}

{% include product-embed.html guid="2154" %}

# About Woox

Since the beginning in 2018, **WOOX Spanish company**, only provides 2.4 GHz WiFi devices that you, as a user, connect directly to your WiFi router at home. With the growing demand for security devices like sensors or door locks, we have developed our **own portfolio of Zigbee devices** which can still work, communicate and connect in the WOOX Home app with the devices. WiFi already existing, it's cool! The only difference is that Zigbee devices require a WOOX Zigbee gateway to connect to. WOOX Zigbee devices guarantee to work in a personal Zigbee network that guarantees speed, stability and security.

> Fortunately you will be able to realize that the Woox R7060 controller is Jeedom and Homeassistant compatible

# Let's detail the Woox R7060

{% picture posts/{{ page.guid }}/presentation-contenu-controlleur-irrigation-woox-r7060.png --alt presentation of the woox R7060 smart irrigation controller --img width="940" height="529" %}

The least we can say is the fact that Woox provides **its modules in thick and sturdy cardboard packaging**. As you can see in the photos it comes with 4 AAA batteries, complete installation instructions and available below, a 3/4" adapter ideal in the world of irrigation and thanks to this module you will be able to screw on top of 3/4" faucet noses

Once the hood is open **I'm a little disappointed** to find only two large buttons surmounted by two large logos and a central blue light, if with that you can't understand how it works, ** it's that you don't have light on all floors or that your body has taken illegal substances** 🤪.

Back on topic, this module is sold between 30 and 35€, the price is not high but I regret the choice of Woox, they could have sold it a bit more expensive and **integrated LCD dials** in order to display various programs and **the clock**

> So yes, this module leaves me skeptical about the poverty of its functions.


## Content

1. Woox R7060 smart controller
2. AA battery x 4
3. 26.5mm G 3/4" adapter x 1
4. Multi-Language User Manual

{% include doclink.html pdf="Woox-R7060-Garden-Irrigation-Control-User-manual .pdf" title="Woox R7060 User Manual" %}

# Go further

An **open indication** allows by pressing on the ABS to open the body of the module and to integrate the batteries. You will be able to see that the assembly of the two shells is correct and complies with current standards. The **White seal** makes it possible to perfect the tightness of the assembly. **With experience I know that this is not enough.** Let me explain, this assembly will be hermetic to water but not to insects. In general the spiders manage to nest inside and lay their eggs. So when I see the printed circuit (poor in components) and the simplistic unprotected assembly of it, **I very much doubt that the Woox R7060 module will have a long lifespan which should not exceed 5 years in an unfavorable environment .**

{% picture posts/{{ page.guid }}/contenu-du-module-controlleur-irrigation-woox-r7060.png --alt under cover of woox R7060 smart sprinkler controller --img width="940" height="529" %}

In detail, the contactors work well, but I only tested it in a dry environment, the finish of the welds is correct, however I found white traces of welding residue, the buttons are positioned correctly on the contactors. The printed circuit is equipped with a **Tuya Zigbee TYZS3 chip**, I find it very regrettable not to use Texas Instrument CC265X type chips which have the same size but are easily [Hackable thanks to the PTVO software](https://ptvo.info/zigbee-configurable-firmware-features/comment-page-1/){: target="_blank"}, I'm thinking of the **addition of functions** of the type **liaison/binding**, as Zigbee supports the link, it allows devices to control each other directly without the intervention of Zigbee2MQTT or any home automation software.

> Too much can currently spread and it is a pity.

{% picture posts/{{ page.guid }}/detail-circuit-imprime-controlleur-intelligent-woox-r7060-zigbee.png --alt circuit board detail of the woox R7060 smart irrigation controller --img width="940" height="529" %}

> Woox still thought of integrating communication ports on the printed circuit so that it could flash the Zigbee 3.0 Tuya chip.

# Pairing

Pairing is done without any problems by pressing the red button (stop) for 5 seconds until the blue LED flashes. Then go to the test the engagement when the valve opens is audible **on the other hand when closing you hear almost nothing which is a little surprising.**

{% picture posts/{{ page.guid }}/appairage-module-woox-r7060.png --alt pairing the woox R7060 smart irrigation controller  --img width="940" height="529" %}

The module is compatible [ZHA, Zigbee2mqtt, Tasmota et Deconz ](https://zigbee.blakadder.com/Woox_R7060.html){: target="_blank"}

# Integration of Woox R7060 in Homeassistant

Integration into homeassistant using the Zigbee2mqtt module is hassle-free. It is of course an Enddevice module, you can control:
1. On/Off button
2. battery level
3. the status of the link in the network

{% picture posts/{{ page.guid }}/integration-woox-r7060-homeassistant.png --alt integration of woox R7060 smart irrigation controller in homeassistant with zigbee2mqtt --img width="940" height="648" %}

{% picture posts/{{ page.guid }}/integration-woox-r7060-homeassistant-onglet-expose.png --alt exposed tab of woox R7060 smart irrigation controller --img width="940" height="248" %}

## Automation of the Woox R7060

There is an [Irrigation Blueprint](https://gist.github.com/haade-administrator/61d839c20a79643c4ceefe52fd85336e){: target="_blank"} which allows you to control according to the weather thanks to wind and rain sensors. I took over the existing blueprint for the translation you will find the [official thread here.](https://community.home-assistant.io/t/toggle-irrigation-system-from-local-weather/418551){: target="_blank"}

{% include homeassistantlink.html bluelink="https://gist.github.com/haade-administrator/61d839c20a79643c4ceefe52fd85336e" %}

{% picture posts/{{ page.guid }}/blueprint-irrigation-automatisation-homeassistant.png --alt Automation scenario of the woox R7060 smart irrigation controller in home assistant --img width="940" height="638" %}

**You can find other automations and cards on the HACS repository:**

- [Complete irrigation module by rgc99](https://github.com/rgc99/irrigation_unlimited){: target="_blank"}
- [Lovelace card by rgc99](https://github.com/rgc99/irrigation-unlimited-card){: target="_blank"}
- [Complete Irrigation Module by petergridge](https://github.com/petergridge/Irrigation-V5){: target="_blank"}
- [Lovelace Map by petergridge](https://github.com/petergridge/Irrigation-Card){: target="_blank"}

> Suffice to say that on Homeassistant there is a choice of irrigation automation.

# Integration of Woox R7060 in Jeedom

In Jeedom the integration is also done without worries.
The default commands are:
1. the on/off button
2. function status

It still lacks the feedback from the battery by default

{% picture posts/{{ page.guid }}/integration-woox-r7060-jeedom.png --alt integration of the woox R7060 smart irrigation controller in jeedom --img width="940" height="273" %}

{% picture posts/{{ page.guid }}/integration-woox-r7060-jeedom-onglet-commande.png --alt woox R7060 smart irrigation controller command tab in jeedom --img width="940" height="182" %}

## Woox R7060 Specifications

|Wireless Protocol|ZigBee 3.0|
|Transmit power|8.8 dBm|
|Operating voltage|6V DC|
|Powered by|4 AA 1.5V batteries (included)|
|Waterproof level|IP44|
|Product Weight|355g|
|Water Pressure Range|0.2~0.7MPa|
|Standby current|20uA|
|Operating current|270mA (30mS)|
|Transmission range|10~30 meters indoors and 30~50 meters outdoors|
|Operating temperature|0℃～+45℃|
|Working Humidity|0~95% RH|
|Low pressure alarm|Yes|
|Zigbee module|TYSS3|
|Wireless Frequency|2.400~2.483GHz|
|Network standard|802.15.4/ZigBee|
|Transmission power|Transmission rate: 250kbps|
|Channels|16|
|Battery life|6 months|

# **the + of the product**
{: .blue}
- manufacturing quality
- packaging
- the price
- ease of operation
- the rarity of this type of product

# **the - of the product**
{: .red}
- poor functions
- the summary printed circuit
- weather protection of the circuit
- the longevity of the battery (max 6 months)
- the Zigbee tuya module

{%- include alert.html type="info" text="The Woox R7060 module is currently on promotion until April 4, 2023 on the Domadoo site at the single price of €26.39." link="https://www.domadoo.fr/fr/peripheriques/5685-woox-controleur-d-arrosage-intelligent-onoff-zigbee-30-8435606701198.html?domid=39" textlink="Promotion on The Woox R7060 module -20%" %}

{% include product-embed.html guid="2154" %}

# Conclusion

I gave a score of 4/5, the **module does the job** but the integration of the printed circuit in the case could have been reinforced and further protected from the weather. The only on/off functions for this type of module are insufficient, the world of the garden is outside the house **the integration of an external antenna on the circuit would have been a significant asset, and I wonder why the manufacturers do not not engage in Binding.** Once again, thanks to Domadoo for this loan.