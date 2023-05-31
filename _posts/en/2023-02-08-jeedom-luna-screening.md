---
guid: 46
title: "Jeedom Luna scrutinized"
description: "I will examine Jeedom Luna in detail, look for the origins, the causes or even the advantages, disadvantages or problems, in short what is hidden under the shell of the jeedom Luna"
layout: post
author: Nico
date: 2023-02-15 17:36
last_modified_at: 
categories: [Automation, Tests, Jeedom, Zwave, Zigbee]
tags: []
image: 'jeedom-luna-passe-au-crible-box-francaise.png'
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
addViews: 58
comments: true
rating: 4.6
sourcelink:
  - https://www.dusuniot.com/product-specification/zigbee-matter-ble-cloud-module/
  - https://www.silabs.com/wireless/z-wave/700-series-modules
  - https://www.fn-link.com/6221A-SRC-Wi-Fi-Module-pd42546492.html
  - https://fr.transcend-info.com/product/internal-ssd/msa230s
  - https://www.arm.com/products/silicon-ip-cpu/cortex-a/cortex-a53
  - https://community.arm.com/arm-community-blogs/b/architectures-and-processors-blog/posts/the-top-5-things-to-know-about-cortex-a53
  - https://community.jeedom.com/t/presentation-akenad/2440/64
---

Jeedom has always been launching more and more powerful boxes, what about the Jeedom Luna, is it interesting, is it powerful? **Is it a pure Jeedom creation or does it use a map produced by another company?** If you have followed the evolution of Jeedom boxes and until now they have always used existing on-board maps:

- jeedom 1 runs raspberry pi B
- jeedomboard on a Solidrun hummingboard
- Jeedom Smart on Odroid C2
- Jeedom Atlas and Atlas pro on rockpi 4B
- Jeedom luna on [**Dusun DSGW-210-D-1**](https://www.dusuniot.com/landing-pages/jeedom-smart-gateway/){: target="_blank"}

{% include product-embed.html guid="2143" %}

# Unboxing

{% picture posts/{{ page.guid }}/deballage-unboxing-jeedom-luna.png --alt unboxing the Jeedom Luna first impression --img width="940" height="529" %}

After unpacking the first impression that comes to mind is sobriety, all dressed in white with a luminous ring in the center, we discover a luna without frills.

It is supplied with:
- a wall bracket
- a pack of fixing screws
- a USB-C power cable and the transformer
- an Rj45 cable

And for simple notice a flyer with an address: Follow our getting started guide [Jeedom.com/start](https://jeedom.com/start){: target="_blank"}

> Surprising but it has the merit of working at least for me.

# Technical characteristics :

|Food| 5V - 3A USB-C|
|Backup battery| Li 6000mAH|
|Processor| 4-core, 64-bit processor (**Quad Cortex-A53** (1.5Ghz))|
|Internal memory| 2GB DDR3 RAM|
|HDD Memory| Emmc 16 GB|
|Connections|1 Ethernet network port, 1 USB 2.0 port, USB-C connector for power supply|
|Connectivity| Internal Zigbee 3.0, Internal Z-Wave 700, Wi-Fi 2.4 GHz and **5 GHz**|
|Clock| PSTN|
|Material| Plastic case|
|Dimensions| 12 x 12 x 3cm|
|Weight| 0.312g|
|IP protection| IP22|

# External connectors

{% picture posts/{{ page.guid }}/facade-connectique-jeedom-luna.png --alt Jeedom Luna rear panel connectors --img width="940" height="529" %}

On the rear side a complete set of connectors:
- a reset button
-Power
- a Wan port
- a USB 2.0 port
- a USB-C 5V, 3A power input
- a microcard SD and nano Sim slot

# Internal connectors

{% picture posts/{{ page.guid }}/jeedom-luna-demonte-cote-connecteur.png --alt jeedom luna disassembled on the connector side --img width="940" height="529" %}

## Zigbee
**On the right** the jeedom box includes a connector [**zigbee 3.0 Dusun DSM-04B**](https://www.dusuniot.com/product-specification/zigbee-cloud-module-specification/){: target="_blank"}.
It is a low power consumption integrated Zigbee/Material/BLE module developed by Dusun. It consists of the highly integrated wireless radio processor chip, **EFR32MG21** series, and multiple peripherals, with an integrated 802.15.4 PHY/MAC Zigbee/matter/BLE network protocol stack and robust library functions . Support Zigbee、matter and BLE protocol (**when using MATTER protocol, mod can only be used on host side**)
This data terminal is integrated with low power consumption 32-bit ARM Cortex-M33 core, 1024/768 KB flash memory, 64 KB RAM data memory and robust peripheral resources. Also, it runs on the FreeRTOS platform which integrates all the functions of the Zigbee/matter/BLE MAC library. You can develop integrated Zigbee/Matter products according to your needs.

[**Dusun DSM-04B Technical Link**](https://www.dusuniot.com/product-specification/zigbee-matter-ble-cloud-module/){: target="_blank"}

## Z-wave
**In the center** the box integrates a connector [**Z-wave 700 Silabs ZGM130S**](https://www.silabs.com/wireless/z-wave/700-series-modules){: target= "_blank"}.
They are designed to meet the demands of the future smart home, hospitality and MDUs, where the growing need for more sensors and battery operated devices require long range and low power. This wireless module also supports Z-Wave Long Range. The use of the ZGM130S module requires Z-Wave Plus V2 or V2 Long Range certification.

[**Silabs ZGM130S technical link**](https://www.silabs.com/wireless/z-wave/700-series-modules){: target="_blank"}

## Blank media x2

- **On the left** of the z-wave chip there is a 28-pin slot to be soldered, it is a bluetooth 5.2 EFR32BG22 module to be soldered.

- **Above** the zigbee chip on the right, another free slot.

{% picture posts/{{ page.guid }}/jeedom-luna-zigbee-DSM-04B-zwave-ZGM-130S.png --alt Jeedom Luna Zigbee Dusun DSM-04B and z-wave 700 silabs ZGM-130S --img width="940" height="529" %}

## 230S Lorawan Bracket

On the other side you can see a slot for a big plus 230S type Lorawan if you want to add additional storage.

{% picture posts/{{ page.guid }}/jeedom-luna-connecteur-ssd-msa-230s-processeur-cortex-a53.png --alt jeedom luna internal ssd and cortex a53 connector --img width="940 " height="529" %}

{% include product-embed.html guid="2143" %}

# Under the hood

In a few photos, a Jeedom Luna unveiled in more detail, for those interested. The Jeedom Luna has a LED disk in the center ideal for knowing the state of the box, little more it is possible to modify the colors of the LEDs [**see dedicated Luna plugin below**](#dedicated-luna-plugin)

{% picture posts/{{ page.guid }}/jeedom-luna-sous-le-capot.png --alt jeedom luna what is hiding under the hood --img width="940" height="529" %}

{% picture posts/{{ page.guid }}/capture-jeedom-luna-connecteur.png --alt jeedom luna capture components --img width="940" height="529" %}

# Jeedom start step

No notices provided with the box, however a complete launch notice can be found on the web, direction [Jeedom Start](https://start.jeedom.com/){: target="_blank"}

- Unpacking
- Connection
- Registration to the Market
- Search for the box on the network
- connection to the box

{% picture posts/{{ page.guid }}/archive-jeedom-1-vs-jeedom-luna.png --alt for the little story of Jeedom the first version against the luna version --img width="940" height="529" %}

> For the record, I started home automation under Jeedom, I even participated in the purchase of the very first Jeedom Box, version 1 which was based on a **raspberrypi model B from 2011. Jeedom history date**.

Once these steps are done if everything went well, go to: [**http://jeedomluna.local/**](http://jeedomluna.local/){: target="_blank"}

{% picture posts/{{ page.guid }}/page-de-connection-jeedom-luna.png --alt first connection to the Jeedom Luna --img width="940" height="474" %}

# Installation step

I made an animated gif of the installation steps of the jeedom Luna, I did not encounter any particular problems I hope it will be the same for you :)

![Jeedom Luna installation step]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/etape-installation-box-jeedom-luna.webp{{ cachebuster }}){: width="940" height="474"}

## Dedicated Luna plugin

With the box Jeedom has made a Luna plugin that allows you to:

- Know the power status (full, charging, discharging)
- control the light ring
- know the state of the Battery
- connect/disconnect wifi
- check wifi network status
- know the strength of the signal

![App Jeedom Luna]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/jeedom-luna-app.webp{{ cachebuster }}){: width="242" height="477"}

After installing the plugin and setting I had to restart the Box and then the changes were taken into account, I don't know if it's a problem with the box or if I went too fast.

# The **-**{: .red} of the product

- no POE+ for power supply via RJ45
- lack of electrical panel integration
- absence of an internal port for Google Coral
- blocked at Cortex A53
- lack of communication for the internal Lorawan port
- lack of bluetooth 5.2


# The **+**{: .blue} of the product

- Box of good quality
- equipped by default with wifi, Zigbee and Z-wave chips
- equipped with a backup battery
- integrates a nano Sim as well as an sdcard
- possibility of an internal nvme ssd extension
- support 5Ghz wifi

# Exclusive information
{: .red}

This box is not designed to be scalable, **however a very big plus**, if you decide to change home automation software and thanks to this box you can do it!
And yes the **Dusun DSGW-210** box runs **under debian** so it is compatible with **Home Assistant (HAOS), Openhab, Jeedom, Node-red** and Thingsbord. ** Below is the link of the manipulations to be carried out **

> [**How to install apps on DSGW-210**](https://www.dusuniot.com/blog/how-to/how-to-install-application-on-dsgw-210/){: target="_blank"}

{% include product-embed.html guid="2143" %}

# Conclusion

The Jeedom Luna is an all-in-one box, it **lacks the Poe+** for my taste, for the rest everything is fine, so I advise you to buy it. Nevertheless I am disappointed that the Jeedom team has not created its own card, since the time they have been on the French market they could create exclusivity.
