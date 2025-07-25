---
guid: 164
title: "ELC-SMT101 Android Wall Mounted Tablet Review"
description: "Testing and integration into home assistant with mqtt of the ELC SMT101 wall tablet with LED strip and switch"
ref: "ELC SMT101"
layout: post
authors: [Nico]
date: 2025-07-25 19:00
last_modified_at: 
categories: [Tests, Haade-lab, Home-Assistant]
tags: []
video: 
image: 'test-and-integration-elc-smt101-wall-tablet-led-band-mqtt-home-assistant-ultimate-dashboard.png'
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
  - https://www.elclcd.com/products/10-1-smart-home-panel-smt101
  - https://s.click.aliexpress.com/e/_oCHHQoO
---
**A powerful article**: today I'm going to review the 10.1-inch tablet from ELC, the SMT101, also available in 9.7" and 15.6". This tablet has the **advantage of being built-in**, having an LED strip, and other options. It runs Android 13 and features a Rockchip RK3566 processor. The version I tested has **4GB of RAM and 128GB of ROM**. I'm going to introduce you to this tablet and give you the pros and cons, because unfortunately there are some!

> **The cherry on the cake is that I developed an APK** that will allow you to control the tablet's functions in Home Assistant (LEDs, Switches, Temperature and Humidity) using the MQTT gateway and Home Assistant Discovery.

[Download the mqtt APK application to control the functions of the Elc SMT101 tablet]({{ site.baseurl }}/assets/images/posts/164/haade_panel_s504-v1.0.8.apk){: target="_blank"}

## Unboxing {{ page.ref }}

The packaging is all white, free of any branding (white label). Everything is well packaged, which is a plus, especially since this tablet comes from China. In short, the packaging is relatively well designed!

{% include product-embed.html image="elc-smt-101-tablette-murale-bandeau-led.png" title="ELC SMT101 Wall Shelf with LED strip" brand="ELC" description="ELC SMT101 Android 13 Wall Tablet Rooted" affiliate="_omyM8Ge" %}

Feel free to download **the installation instructions** by clicking on the link below.

{% include doclink.html pdf="notice-technique-elc-smt101.pdf" title="Technical instructions for the Elc SMT wall shelf" %}

{% picture posts/{{ page.guid }}/deballage-elc-smt-101.png --alt Unboxing the ELC-SMT101 Wall Shelf --img width="940" height="529" %}

**Inside, you'll find everything you need, well, almost everything**, to get started.

- The 10.1" tablet
- A **European power** supply (available upon request from the retailer)
- Quick connectors
- A screwdriver
- A brief guide
- A **USB-C data cable** (the quality is poor)
- Mounting screws to secure the mount to the mounting box

{% picture posts/{{ page.guid }}/contenu-boite-elc-smt101.png --alt ELC-SMT101 Wall Mounted Tablet Box Contents --img width="940" height="529" %}

**A quick overview of the tablet**

- On the top, a **power button**
- Right next to it, a **recovery button** (loader mode and maskrom)
- On the **front, a 5MP camera** and **a light sensor**
- On the bottom, four microphone outputs, as well as speakers on each end (which do their job very well)
- The ? corresponds to the **temperature and humidity sensor** located on the left side.

{% picture posts/{{ page.guid }}/tour-horizon-tablette-murale-elc-smt101.png --alt ELC-SMT101 Wall Mounted Tablet Overview --img width="940" height="529" %}

##Connections

**An interesting part of the product**: the back panel and connectors are interesting and relatively well-designed.

{% picture posts/{{ page.guid }}/face-arriere-tablette-elc-smt101.png --alt Back of ELC SMT101 wall shelf --img width="940" height="529" %}

Let's start with the black wall mount. It's made of rigid metal, ideal for preventing it from deforming during installation.
It holds the tablet with three clips. This mount is also magnetically attached to the tablet, as it features a built-in magnetic mount behind the case.
**The tablet is designed to adhere completely to the wall without any gaps, as the molding of the structure is very well done.**

> **The mount is solid and very functional.**

The connectivity is also impressive. **It includes:**

- A **double switch** to control 220V lights
- Two **I/O inputs** to connect physical switches
- An **infrared input** (useful if you want to connect an IR transmitter)
- RS485 ports
- A **12V input (unfortunately, this tablet doesn't support 220V power)**
- A USB-C input for debugging
- An **RJ45 port with POE function** if you want to power it through that port.

{% include product-embed.html image="elc-smt-101-tablette-murale-bandeau-led.png" title="ELC SMT101 Wall Shelf with LED strip" brand="ELC" description="ELC SMT101 Android 13 Wall Tablet Rooted" affiliate="_omyM8Ge" %}

The connectivity isn't bad. **I have two complaints:**

👎 **the lack of a 220V power supply**
👎 **the UK-format (square) flush-mounting box is not included with the tablet.**

## Under the Hood {{ page.ref }}

Like many products of this type, the electronics are **made up of two interlocking modules**: the connectivity section and the processor section.

The {{ page.ref }} tablet features a **Rockchips RK3566** processor. This version comes with **4GB of RAM and 32GB** of storage, and is also available in 2GB and 16GB. I chose this model to work on a buildroot directly integrating Home Assistant.

So, for the price, we could have a home automation box incorporating a Zigbee/Matter/Thread chip with a management interface

> which could more than justify the price. But it's not a done deal; the initial integration tests are inconclusive.

But there is one catch: following a buildroot bug, I negotiated with the company ELC, which will send me the complete SDK, and I hope to be able to integrate HAOS. If the results are conclusive, **Haade.fr will sell this tablet directly** with HAOS integration and probably with a 230V power supply. And depending on the dollar exchange rate, **the retail price ex-France should be around €235 including delivery.**

### About the Zigbee chip of the {{ page.ref }}

{% picture posts/{{ page.guid }}/carte-mere-face-dessous-elc-smt101-puce-zigbee-et-emmc.png --alt Underside of the motherboard zigbee chip and emmc samsung of the ELC SMT101 wall tablet --img width="940" height="529" %}

Unfortunately the integrated chip is a **Vensi lmiot-efr32 LMZ-E321VX-SN** more [info about this on the FCCreport](https://fcc.report/FCC-ID/2ar6ize321vx/4139687.pdf){: target="_blank"} It's a proprietary product featuring a **Silabs EFR32MG1 chip**, and the ELC SDK would only allow communication with it via an MQTT server, making it difficult to integrate directly into Zigbee2MQTT. However, this remains to be confirmed.

There's good news, though: the EFR32MG1 SoCs are ideal for designing energy-efficient wireless connected devices. Part of the Wireless Gecko family, the EFR32MG1 devices **support Zigbee and Thread wireless connectivity, as well as Bluetooth Low Energy and support for proprietary 2.4 GHz and sub-GHz protocols**. This single-chip solution offers industry-leading power efficiency, ultra-fast wake-up times, a scalable power amplifier, and uncompromising microcontroller (MCU) functionality. These devices are ideal for mains-powered mesh applications such as lighting, gateways and voice assistants, as well as other systems requiring high performance and low power consumption.

{% picture posts/{{ page.guid }}/sous-le-capot-en-deux-parties-de-la-tablette-elc-smt101.png --alt Two-part disassembly of the ELC SMT101 wall shelf --img width="940" height="529" %}

In the screenshot below, you can see the entire electronic circuit.

> **Interesting point: the relays are compatible with 110-220V**

{% picture posts/{{ page.guid }}/sous-le-capot-en-deux-parties-assemble-avec-switch-220v-de-la-tablette-elc-smt101.png --alt Assembly of the two modules without the shell of the ELC SMT101 wall shelf --img width="940" height="529" %}

Find below **a connection diagram for a relay on the classic 220v network** for traditional lighting.

{% picture posts/{{ page.guid }}/branchement-schema-lumière-220v-elc-smt101.png --alt Electrical connection diagram for 220v lights with the ELC SMT101 wall shelf --img width="940" height="529" %}

## Home Assistant and {{ page.ref }}

By default, the tablet comes with **rooted Android 13**, which gives us free access to the entire structure.

{% picture posts/{{ page.guid }}/integration-home-assistant-tablette-elc-smt101.png --alt Home Assistant companion integration on the ELC SMT101 wall tablet --img width="940" height="529" %}

**FYI:** Switching to maskrom is quite simple: restart the tablet. When it goes black, simply press the recovery button for 2 seconds.

{% include product-embed.html image="elc-smt-101-tablette-murale-bandeau-led.png" title="ELC SMT101 Wall Shelf with LED strip" brand="ELC" description="ELC SMT101 Android 13 Wall Tablet Rooted" affiliate="_omyM8Ge" %}

In Hardware mode, it's also possible to switch to maskrom. **Just create a bridge between the two connectors identified in the photo below, connect the USB-C cable to the PC and the motherboard, and then plug in the power supply.**

> And that's it.

{% picture posts/{{ page.guid }}/mode-maskrom-hard-elc-smt.png --alt Maskrom Hardware Mode on the ELC SMT101 Wall Shelf --img width="940" height="529" %}

### Ultimate Dashboard

I chose to modify the Home Assistant interface by only adding a few HACS modules. The rest of the integration is done with Lovelace. Below is a video of the integration of the dashboard, which is functional and almost perfect. It's quite easy to follow, and frankly, I'm not disappointed. It's all centered around an input area created for the occasion.

> The rendering on the 10.1" tablet is completely readable and pleasant.

{% include videoPlayer.html youtubeId="pC-VBly1Y00" %}

### MQTT Integration

To **transmit the tablet's functions** (LEDs, switches, temperature and humidity IOs), I created an Android app that communicates via MQTT using Home Assistant Discovery. The app isn't perfect, but it's close. [Download the MQTT APK app to control the functions of the ELC SMT101 tablet]({{ site.baseurl }}/assets/images/posts/164/haade_panel_s504-v1.0.8.apk){: target="_blank"}

The screenshot below **briefly shows you the interface** of mqtt control on the android tablet. **(mqtt setting, switch control and led control)**.

{% picture posts/{{ page.guid }}/parametrage-application-android-mqtt-pour-communiquer-avec-tablette-elc-smt101.png --alt Mqtt integration by Apk for Elc SMT101 tablet --img width="940" height="529" %}

Below is a screenshot of the **settings and information**, of course this information goes back to Home Assistant.

{% picture posts/{{ page.guid }}/controle-elc-smt101-led-switch-avec-home-assistant-par-mqtt-temperature-humidite.png --alt Visualization of temperature and humidity in Mqtt integration by Apk for Elc SMT101 tablet --img width="940" height="529" %}

Finally, a **capture in Home Assistant** of the tablet control.

{% picture posts/{{ page.guid }}/exemple-control-elc-smt101-led-switch-avec-home-assistant-par-mqtt.png --alt Controlling the functions of the Elc SMT101 tablet in Home Assistant using MQTT --img width="940" height="529" %}

**Okay, I apologize for the image quality, but currently the MQTT function allows you to:**

- configure the MQTT server (previously created in Home Assistant)
- control the LED colors and brightness on the tablet and in Home Assistant
- control the two switches
- control the physical I/O switches connected to the tablet (still in the testing phase)
- display the temperature and humidity as well as the software version on the tablet and in Home Assistant.
- visualize the ambient brightness
- update the APK with a single click
- minimize the app in Android

**Coming soon:**

- use the ZigBee chip as a coordinator on the tablet and have it interact with Home Assistant, still via MQTT.
- use the camera function, perhaps through identification.

## Technical Specifications {{ Page.ref }}

**Find all the tablet's technical specifications below**

|Diagonal Size|10.1-inch (LCD)|
|Panel Type|10.1" high-definition full view screen fully bonded|
|Resolution|1280 x 800 pixels|
|Aspect Ratio|16:10|
|Viewing Angle|R/L 85/85, U/D 85/85|
|Display Mode|Normally black|
|Contrast Ratio|800:1|
|Luminance|250 nits|
|Number of Points|10-point|
|Processor|CPU RK3566 Quad-core cortex A55|
|RAM|2GB (Optional 4GB)|
|ROM|32GB (Optional 64GB)|
|Operating System|Android 13|
|Size and Weight|Dimensions 243.07 x 159.67 x 13.6 mm (L × W × D)|
|Wireless|**WiFi IEEE 802.11a/b/g/n/ac/ax (WiFi 6E)<br>802.15.4/Thread/Matter/Zigbee**|
|Bluetooth|Bluetooth 5.3|
|I/O Ports|USB Type-C USB 2.0 supports OTG functionality|
|Relay Port|Control home devices that support Relay connections|
|IR Port|Used for infrared remote control, with an external plug-in receiver, which can control the device|
|RJ45|Ethernet interface (POE function standard IEEE802.3at, POE+, class 4, 25.5W)|
|Power Port|DC power input 12V, 1,5A 18W|
|Media Format|Video Format MPEG-1, MPEG-2, MPEG-4, H.265, H.264, VC-1, VP8, VP9, etc.|
|Audio Format|MP3/WMA/AAC, etc|
|Photo|JPEG|
|Color|Black, White|
|Speaker|2W BOX chamber horn*2|
|Microphone|Four microphones|
|Camera|5MP from a conventional perspective|
|Language|Multi-language|
|Certificates|CCC/CE/FCC/ROHS|
|Operating Temperature|0℃-40℃|

## **Pros of the Sonoff Slim Camera** {{ page.ref }}
{: .blue}

- Product quality (despite a slight lighting imperfection)
- Solid mounting system
- LED strip
- RJ45 POE power supply
- Rooted Android 13

## **Cons of the Sonoff Slim Camera** {{ page.ref }}
{: .red}

- No mains power supply (110-240V)
- DC switch relay (ideal for dry contact)
- Comes with Android 13 (HAOS cannot be integrated by default)
- Thread not supported in Android 13
- The Price

{% include product-embed.html image="elc-smt-101-tablette-murale-bandeau-led.png" title="ELC SMT101 Wall Shelf with LED strip" brand="ELC" description="ELC SMT101 Android 13 Wall Tablet Rooted" affiliate="_omyM8Ge" %}

## Conclusion

**This is a very good tablet**, a good starting point **for future integration of Home Assistant OS with a live display**, which would make it an all-in-one home automation box. But **there are improvements to be made to make it exceptional**. The price is around €235 on AliExpress and you **will be able to use all its functions thanks to the APK provided by me**. The LED lighting is great and will **allow you to create visual automations**, great 👍.