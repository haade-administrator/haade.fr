---
guid: 169
title: "Lixee Box Energy Saver"
description: "Testing the Lixee-Box, a box 100% compatible with Zlinky, enter the world of home automation and control your home's energy"
ref: "Lixee-Box"
layout: post
authors: [Nico]
date: 2026-01-23 18:00
last_modified_at: 
categories: [Haade-lab, Videos, Zigbee]
tags: []
video: Qw2jz4_rqTA
image: 'lixee-box-zlinky_tic-box-french-measure-analysis-economize.png'
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
rating: 3.8
sourcelink:
  - https://lixee.fr/fr/
  - https://faire-ca-soi-meme.fr/
  - https://github.com/fairecasoimeme/LiXee-Box
---

[Lixee, a French company born from a DIY community](https://lixee.fr/fr/){: target="_blank"}, markets several products designed, among other things, for energy measurement (electricity, water, or gas). Based on a growing and engaged community, about two years ago they released a module that remains highly popular today: the [**Zlinky_Tic**](https://www.domadoo.fr/fr/eco-energie/7492-lixee-module-tic-vers-zigbee-30-pour-compteur-linky-v2-zlinky-v4000-0014-3770014375179.html?domid=39){: target="_blank"}, For those who don't know, it's a ***100% compatible and integrable Zigbee teleinformation module*** for **Linky** meters. At the end of November, the company sent me the Lixee-box in **Lite** version to test on the ZIWIFI32S3.

{% picture posts/{{ page.guid }}/decouverte-lixee-box-et-zlinky-tic.png --alt Discover Zlinky Box and Zlinky_tic v2 --img width="940" height="529" %}

The presentation and packaging remain simple and straightforward. The Lixee-box Lite version contains the dongle-box and the Zlinky_tic v2, which allows you to:

> Measure, analyze, save, as Lixee advertises

{% include product-embed.html image="lixee-box-domotique-wifi-zigbee-compteur-lixee-zigbee.png" title="WIFI Zigbee home automation box + Lixee Zigbee meter" brand="Lixee" description="The compact LiXee-Box home automation system centralizes your energy data and optimizes your consumption. It offers real-time monitoring, a complete history, smart automations, threshold management, and energy routing. Compatible with WiFi, Bluetooth, Zigbee, and MQTT, it integrates easily with Home Assistant and Linky data." domlink="french-days/8424-lixee-box-domotique-wifi-zigbee-compteur-lixee-zigbee-3770014375193.html" %}

**Regarding the Zlinky** included in this kit, at the time [I wrote a full article about it]({% post_url /en/2024-03-20-teleinfo-plug-n-play-zigbee-linky-lixee-zlinky-tic %}). Don't hesitate to check it out!

## Installation Tutorial {{ page.ref }}

The easiest way to install and find the Lixee-Box address to get the most out of the web app is to follow the official installation video. Simple and relatively effective.

{% include videoPlayer.html youtubeId="1w0yDo08sk0" %}

## Details of the {{ page.ref }}

For more details on all the information about the Lixee-box, feel free to [consult the dedicated repository on GitHub](https://github.com/fairecasoimeme/LiXee-Box){: target="_blank"}

Close to **a handcrafted** product, the {{ page.ref }} is nonetheless a beautiful French design, simple to assemble yet effective. The semi-translucent case conceals an embedded board based on **esp32-S3 Wi-Fi/Bluetooth** as well as a **Zigbee chip, Zigate+ version, the NXP JN5189**.

> In fact, this design is very reminiscent of Zigate products, both in terms of hardware and the interface used!

{% picture posts/{{ page.guid }}/box-lixee-ziwifi32.png --alt Introducing the Lixee dongle --img width="940" height="529" %}

Once plugged into a standard USB port, the Lixee-box is adorned with a beautiful blue light; if you have followed the Lixee-box installation tutorial correctly, you will have the web address to access the interface directly.

{% picture posts/{{ page.guid }}/présentation-box-lixee-demontee.png --alt Introducing the disassembled Lixee box dongle --img width="940" height="529" %}

Disassembling the {{ page.ref }} is very simple as mentioned above, just unscrew the two screws located under the bottom of the box and that's it, you have access to the **Holy Grail**.

{% picture posts/{{ page.guid }}/circuit-imprime-vue-pres-lixee-box.png --alt Overview of the printed circuit board of the Lixee box dongle --img width="940" height="529" %}

{% include product-embed.html image="lixee-module-tic-vers-zigbee-30-pour-compteur-linky-v2-v4000-0014.png" title="Zlinky" brand="Lixee" description="Transmit all the information from your Linky meter to your home automation box using the Tic Linky Zigbee 3.0 V2 module from Lixee." domlink="eco-energie/7492-lixee-module-tic-vers-zigbee-30-pour-compteur-linky-v2-v4000-0014-3770014375179.html" amazlink="3Ya26B0" %}

A relatively simple printed circuit board lies beneath:

- an ESP32-S3 chip for Wi-Fi/Bluetooth management
- an NXP chip for Zigbee
- a reset and flash button
- an FTDI/ESP32 switch
- free GPIO ports

GPIO ports are a real plus for this type of product if you want to integrate sensors or other devices.

## Why is {{ page.ref }} entering this market?

From my experience, the company wanted to simplify the setup of an **energy management interface for those new to home automation**. However, the **energy homepage interface offers a real advantage** that isn't yet available by default in Home Assistant.

In short, a very **French** interface and **100%** compatible with **Linky**.

{% picture posts/{{ page.guid }}/Interface-page-accueil-lixee-box.png --alt Lixee-box interface V2.14 with current pricing information and energy labels; the homepage is a great success. --img width="940" height="529" %}

This box is based on a mix of [lixee-zibridge repositories](https://github.com/fairecasoimeme/LiXee-ZiBridge){: target="_blank"} And there's already existing firmware; I'm referring to **Zigate v2**, which allows the company to create a bridge between the ESP32-S3 and the NXP Zigbee chip.

> The Zigbee chip integrates the Zigate v2 firmware.

I don't think this choice is strategic **from a hardware perspective**, which is why I'm saying this! Simply that the company could have directly used an ESP32 chip that integrates the Zigbee chip, such as the **ESP32-H2 or C5/C6**. The dongle would have been much smaller and simpler to manufacture. ***But using the ESP-IDF repository also means learning, creating, and coding an entirely new interface***.

Lixee is based on the work of Zigate+ for the support and management of the Zigbee coordinator.

## The interface {{ page.ref }}

To complement this article, I've created a video that demonstrates the functions of the interface of {{ page.ref }}

{% include videoPlayer.html youtubeId="Qw2jz4_rqTA" %}

By the time I'd run the tests, I'd **been able to release two updates**, which is great. It also means development is quite active, although I have to admit I'm not the fastest writer at the moment.

The **homepage is really interesting** and relatively well-designed. You plug your Zlinky into the Linky meter, integrate it into the ecosystem, and from then on, there's nothing to do except wait for the energy data to be uploaded.

> **Finally, an energy page designed for French users**.

**Below, you'll find an animated GIF of the {{ page.ref }} updates**

![Lixee Box system update]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/mise-a-jour-firmware-lixee-box.webp{{ cachebuster }}){: width="940" height="600" class="lazyload pictaninpost"}{: target="_blank"}

## And what about the Zigbee coordinator?

The Lixee box allows you to integrate other Zigbee modules into the interface; however, [the list of modules is relatively limited].(https://github.com/fairecasoimeme/LiXee-Box?tab=readme-ov-file#-appareils-lixee-compatibilit%C3%A9-compl%C3%A8te){: target="_blank"}. The integration works relatively well, however I did encounter one flaw: when a module is disconnected for a certain time it then has difficulty rejoining the network.

> **Currently, Zigbee support is quite limited.**

![Inclusion of a Zigbee module with the Lixee-box]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/mode-jumellage-inclusion-zigbee-zlinky.webp{{ cachebuster }}){: width="940" height="497" class="lazyload pictaninpost"}{: target="_blank"}

**What would be interesting** would be to include support for [Zigbee2mqtt].(https://www.zigbee2mqtt.io/){: target="_blank"}

## Technical characteristics of the {{ page.ref }}

|**Power**|5 VDC via USB-A port|
|**MCU**|ESP32-S3-WROOM-1-N16R8|
|**Frequency**|240Mhz|
|**SRAM**|512Kb|
|**PSRAM**|8Mb|
|**ROM**|16Mb|
|**WiFi**|802.11b/g/n|
|**Zigbee**|3.0|
|**Bluetooth**|Low Energy 5.0|
|**Interfaces**|1x ZiGate+ module<br>1x USB port (power + UART0)<br>1x Reset button<br>1x Flash button (for ESP32S3 - GPIO0)<br>1x ESP / FTDI selector (to redirect UART0 to the ESP32 or to the ZiGate)<br>12x GPIOs|

{% include product-embed.html image="lixee-carte-universelle-lixee-ziwifi32-lite-wifi-bluetooth-zigbee.png" title="Universal LiXee-ZiWifi32 Lite WiFi, Bluetooth, Zigbee card" brand="Lixee" description="The LiXee-ZiWifi32 Lite is a compact, universal home automation board integrating Wi-Fi, Bluetooth, and Zigbee. Compatible with Jeedom, Domoticz, and Home Assistant, it enables flexible control of sensors and actuators. Ideal for Zigbee bridges, LiXee-Box systems, or multi-protocol prototypes." domlink="dongle-zigbee/8423-lixee-carte-universelle-lixee-ziwifi32-lite-wifi-bluetooth-zigbee-3770014375162.html" %}

## Conclusion

**The Lixee-box provides an entry point into the world of home automation**, geared towards novices who want a first glimpse into their home's energy consumption. **The integration of the MQTT function** and the discovery option make it interoperable with Home Assistant or Jeedom. However, version 2.14 **makes setting up scenarios complex**. Regarding the integration of Zigbee modules, it gets the job done, but **the options are relatively limited**. The lack of interoperability with **zigbee2mqtt** is regrettable.

> **Latency issues on the homepage** may be fixed in future updates.
