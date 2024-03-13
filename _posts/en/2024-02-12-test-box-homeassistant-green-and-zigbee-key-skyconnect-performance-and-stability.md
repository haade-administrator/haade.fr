---
guid: 108
title: "Box Home Assistant Green and Skyconnect test"
description: "Test of the Home assistant Green box at $99 and the Skyconnect zigbee dongle at $29.99, stability, performance there"
ref: "Home Assistant"
layout: post
author: Nico
date: 2024-02-12 07:26
last_modified_at: 
categories: [Tests, Zigbee]
tags: []
image: 'box-test-home-assistant-green-key-zigbee-skyconnect.png'
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
  - https://www.home-assistant.io/green/
  - https://skyconnect.home-assistant.io/
---

**I am far from being the first** to test this box, for the needs of an installation at Paulo's, I ordered a Home Assistant Green Box and a Skyconnect key on [seeedstudio](https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html?queryID=c7f3fcf4f7354a2c4d56fdee4eab971d&objectID=5792&indexName=bazaar_retailer_products){: target="_blank"}, now it's time to test this box and see if **she is stable**!

{% include product-embed.html image="dongle-usb-zigbee-30-skyconnect-pour-home-assistant-nabu-casa.jpg" title="Dongle Zigbee Skyconnect" brand="Nabu Casa" description="Skyconnect zigbee dongle key" domlink="smart-home-gateway/6938-zigbee-usb-dongle-home-assistant-skyconnect-nabu-casa-0794677011635.html" %}


## Presentation Box Home-assistant Green

{% picture posts/{{ page.guid }}/presentation-box-home-assistant-green-99$.png --alt Presentation of the Green home-assistant box --img width="940" height="529" %}

Let's start by unboxing the green home-assistant box, as you can see **the packaging is super well done** and brings a little eco-friendly touch, it's not Green for nothing. Very well presented, I really have nothing to complain about the packaging of the Green home assistant.

{% include product-embed.html image="Home-Assistant-Green.png" title="Box HomeAssistant Green" brand="Nabu Casa" description="Box Home Assistant Green on sale at domadoo for less than €100" domlink ="smart-home-gateway/7046-nabu-casa-home-assistant-green-smart-home-hub-0794677011758.html" %}

{% picture posts/{{ page.guid }}/tour-horizon-carton-emballage-home-assistant-green.png --alt unboxing the Green home-assistant box --img width="940" height="529" %}

Inside you will find a brief notice which will send you to a web page dedicated to [the installation of the Home Assistant Green](https://green.home-assistant.io/){: target="_blank" }. Also the box is supplied with a sticker in the colors of Home Assistant **with the most beautiful effect**, an RJ45 cable as well as a power supply with international adapters, perfect for connection all over the planet.

{% picture posts/{{ page.guid }}/contenu-deballage-box-home-assistant-green.png --alt contents of the unboxing of the Green home-assistant box --img width="940" height="529" %}

Let's talk about the box, the **quality of the materials is very high-end**, the transparent shell is not only remarkably thick, which is also found on the home assistant Yellow. In addition, the Green home assistant has **passive cooling in black anodized aluminum** on the entire underside of the box which will allow sufficient cooling. The Home Assistant Green box has a more than acceptable size, it **measures just over 11cm** on a side for a weight of 340Gr, enough to easily install it next to the electrical panel for example.

{% picture posts/{{ page.guid }}/detail-box-home-assistant-green.png --alt detail of the Green home-assistant box --img width="940" height="529" %}

You can easily access the printed circuit by unscrewing the 4 screws present on the periphery of the box. **For $99 this box includes what is strictly necessary for proper operation**. On one end we find the terminals for a UART connection perfect for debugging if necessary of course. Good news, internal clock memory is possible but you will need to equip the box **with a CR2032 battery not supplied.**

{% picture posts/{{ page.guid }}/detail-circuit-home-assistant-green.png --alt detail of the circuit of the Green home-assistant box --img width="940" height="529" %}

On the rear panel we can connect it via **rj45 to the network but not via wifi**. So you cannot connect it to RJ45, you will need to purchase a wifi dongle. The box is equipped with two USB ports which will allow you to easily connect the dongles necessary to create your zigbee or z-wave network. There is also an SDcard port to add external storage as well as an HDMI output.

As a reminder, the box comes with **4GB RAM** and **emmc 32GB** internal storage and it turns out that this is sufficient for the box to function properly, see below in [our integration test](#integration-into-home-assistant).

**Thanks to the switch also located on the rear panel** you can **either turn off the box** in complete safety by pressing for 6 seconds or **force it to stop** completely by pressing for 12 seconds.

{% include product-embed.html image="Home-Assistant-Green.png" title="Box HomeAssistant Green" brand="Nabu Casa" description="Box Home Assistant Green on sale at domadoo for less than €100" domlink ="smart-home-gateway/7046-nabu-casa-home-assistant-green-smart-home-hub-0794677011758.html" %}

### Technical characteristics

|**Processor**|Quad-core Cortex-A55 CPU up to 1.8GHz|
|**RAM**|4 GB RAM|
|**Storage**|32 GB eMMC|
|**Expansion Slot**|SD card slot for recovery purposes only|
|**Ethernet**|Gigabit Ethernet|
|**USB Ports**|2 x USB 2.0 Type-A host port|
|**Display**|1x HDMI for debugging purposes only|
|**Wireless Protocols**|Zigbee 3.0 and Matter(with Home Assistant SkyConnect)|
|**Pre-installed Firmware**|Home Assistant OS|
|**Power**|12 V / 1 A through barrel DC power jack(barrel connector)|
|**LEDs**|White (Power), Green (Activity Indicator), Yellow (Home Assistant system state)|
|**Power off Button**|Press and hold for 6 seconds to shut down safely<br>Press and hold for 12 seconds to force the power off|
|**Enclosure**|Large aluminum heatsink, great heat dissipation|
|**Size**|112x112x32mm|
|**Operating Temperature**|0 ~ 40℃|

## Zigbee Skyconnect dongle presentation

Thanks to the **smallest zigbee 3.0 dongle EFR32MG21** on the market, the skyconnect home assistant you will be able to equip your box with the zigbee function.

{% picture posts/{{ page.guid }}/dongle-zigbee-home-assistant-skyconnect.png --alt zigbee skyconnect dongle by home-assistant --img width="940" height="529" %}

Home Assistant has been marketing this dongle for a while now, I don't really have anything to say, it's a dongle except that it's certainly the smallest and thinnest dongle on the market and that it has a **pure sky blue in the colors of Home Assistant**, it has **internal memory of 768MB.**

{% picture posts/{{ page.guid }}/detail-dongle-zigbee-skyconnect-home-assistant-green.png --alt detail of the zigbee Skyconnect key from home Assistant --img width="940" height="529" %}

Thanks to support by Nabu Casa and Home Assistant, this dongle is fully **compatible with ZHA and Zigbee2mqtt**, and of course recommended for installation in Home Assistant with the Green box.

### Update

Don't forget to update before installation, it's always better and made easy to execute thanks to the Home Assistant community.

[Skyconnect Update](https://skyconnect.home-assistant.io/firmware-update/){: target="_blank"}

## Integration into Home Assistant

Big positive point, the Home Assistant Green **is a plug'n play box**, you just need to connect it to the network, plug it in and wait for it to start. Then after around 20 minutes go to the address [http://homeassistant.local:8123](http://homeassistant.local:8123){: target="_blank"} and that's it.

{% picture posts/{{ page.guid }}/premier-demarrage-home-assistant-green.png --alt first plug n play start of the Green home-assistant box --img width="940" height="529" %}

The Home assistant Green box is **100% compatible with HAOS**, *it would be a mistake if it wasn't*. No, by that I mean that the equipment reassembles correctly and you can even deactivate the operating LEDs placed on the front. Regarding the Zigbee/Matter multiprotocol of the skyconnect dongle, it is natively supported with ZHA. But for now I still advise you to use it only in Zigbee with the EmberZnet firmware.

{% picture posts/{{ page.guid }}/integration-totale-home-assistant-green-et-skyconnect-avec-full-controle.png --alt integration into home-assistant of the green box and skyconnect all options available --img width="940" height="529" %}

As you can see in the diagram below the processor based on quad-core Cortex-A55 CPU up to 1.8 GHz **only uses 2% of its capacities** as for the RAM memory we do not use **only 22% on average** of its capacities.

A **standard installation will take 10GB** of storage space, so you will have **22GB free** enough to install all the docker images you want for the proper functioning of your home automation.

{% picture posts/{{ page.guid }}/puissance-processeur-memoire-home-assistant-green.png --alt processor power and ram memory consumption of the green box with zigbee2mqtt and the skyconnect dongle --img width="940" height="529" %}

> All hardware information is available in the HAOS settings in the Hardware section.

{% picture posts/{{ page.guid }}/fonctionnement-ensemble-home-assistant-green-et-dongle-skyconnect.png --alt final operation of the green box and the skyconnect key by Home-Assistant --img width="940" height="529" %}

{% include product-embed.html image="Home-Assistant-Green.png" title="Box HomeAssistant Green" brand="Nabu Casa" description="Box Home Assistant Green on sale at domadoo for less than €100" domlink ="smart-home-gateway/7046-nabu-casa-home-assistant-green-smart-home-hub-0794677011758.html" %}

{% include product-embed.html image="dongle-usb-zigbee-30-skyconnect-pour-home-assistant-nabu-casa.jpg" title="Dongle Zigbee Skyconnect" brand="Nabu Casa" description="Skyconnect zigbee dongle key" domlink="smart-home-gateway/6938-zigbee-usb-dongle-home-assistant-skyconnect-nabu-casa-0794677011635.html" %}

## Conclusion

Home Assistant Green is a simple box entirely designed by nabu casa for Home Assistant OS. Is it enough **For $99 plus $30** for the Skyconnect dongle, **the answer is YES**, you will be able to introduce yourself to the joys of home automation using Home Assistant with remarkable stability, **I strongly advise you to equip yourself with one** if you don't want to create a DIY box, plus you will be supporting the Nabu Casa foundation which well deserves it.