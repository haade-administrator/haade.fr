---
guid: 100
title: "test of the Sonoff Ihost box"
description: "The Sonoff Ihost box is worth the detour, with impressive hardware compatibility and exceptional manufacturing quality, Sonoff has once again created an essential product."
ref: "iHost"
layout: post
authors: Nico
date: 2023-12-14 14:22
last_modified_at: 
categories: [Tests]
tags: []
image: 'test-passerelle-hub-gateway-sonoff-ihost-v1-12-0.png'
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
  - https://sonoff.tech/product/gateway-and-sensors/ihost/
  - https://sonoff.tech/ihost-user-guides/
---

First of all I wanted to **thank Itead** for the loan of this Sonoff box {{ page.ref }} version RV1126 of 4gb. First we will take an overview of the embedded application and see if **v1.12.0 bears fruit.** In a second article **I will show you how to Hack the box** and install Home Assistant OS on SDCARD without touching the original firmware but still carrying out a small manipulation on the hardware.

{% include product-embed.html guid="2178" %}

{% picture posts/{{ page.guid }}/test-box-sonoff-ihost.png --alt Content of the Sonoff ihost box --img width="940" height="529" %}

## Unboxing and presentation of the Sonoff {{ page.ref }}

The **package is neat**, the gateway {{ page.ref }} is supplied with an RJ45 cable, a USB-C cable, instructions and a key to activate the reset function.
> In short, no frills, just the essentials!

{% picture posts/{{ page.guid }}/effet-lumiere-sonoff-ihost.png --alt The Sonoff ihost gateway has an interesting visual rendering in blue, red and yellow --img width="940" height="529" %}

**The plastic has a Glossy effect, the assembly is of good quality, the visual rendering of the LEDs is very successful.**

{% picture posts/{{ page.guid }}/face-arriere-sonoff-gateway-ihost.png --alt the back of the Sonoff ihost has a reset button, SD card insert, USB port, USB and RJ45 power supply port --img width="940" height="529" %}

**On the back you will find:**
- the reset button
- an SD card insert ideal for external storage and essential for installing docker instance addons.
- a USB port also for external storage (too bad it is not UART compatible)
- a USB-C power port
- and finally an RJ 45 port

{% include product-embed.html guid="2179" %}


{% picture posts/{{ page.guid }}/bouton-dessus-sonoff-passerelle-ihost.png --alt above you find an on/off button, a zigbee pairing button, a button to mute the microphone and one to arm the presence and a microphone --img width="940" height="529" %}

You should know that the keys are backlit in blue
On top:
- an on/off button
- a Zigbee pairing button
- a mute button (to mute the **microphone**)
- a button to arm presence/absence.

{% picture posts/{{ page.guid }}/rendu-taille-sonoff-gateway-ihost.png --alt the sonoff ihost is relatively small --img width="940" height="529" %}

The size of the Sonoff {{ page.ref }} is correct, it integrates quite a few things so it certainly cannot be smaller.

{% picture posts/{{ page.guid }}/acces-processeur-sonoff-passerelle-ihost.png --alt real sonoff ihost processor --img width="940" height="529" %}

> Sonoff doesn't laugh and installs a rockchip RV1109 or RV1126 processor.....

{% picture posts/{{ page.guid }}/puce-zigbee-bluetooth-wifi-sonoff-passerelle-ihost.png --alt zigbee chip and wifi sonoff gateway ihost --img width="940" height="529" %}

**under the hood we find a module:**
- zigbee Silabs efr32mg21 (non-tuya)
- an RTL8723 chip which distributes wifi b/g/n

### Technical characteristics of the {{page.ref}}

|Model|**Albridge**|
|Product|RV1109 DDR4 2 GB, **RV1126 DDR4 4 GB**|
|Zigbee Module|Silicon Labs EFR32MG21 SoC|
|Wi-Fi Module|RTL8723 2.4G Wi-Fi and BLE Wireless Module|
|Storage methods|USB and TF card (Max. 256 GB for TF card)|
|Power supply|5V 2A|
|Power interface type|Type-C|
|Case|ABS|
|Network interface type|RJ45|
|Wireless connection|Wi-Fi IEEE 802.11 b/g/n 2.4 GHz, Zigbee 3.0|
|Color|White|
|Size|120mm X 41mm X135mm|

{% picture posts/{{ page.guid }}/dimension-sonoff-ihost-en-image.png --alt dimension in image of the sonoff gateway ihost --img width="940" height="529" %}

## Soft from {{ page.ref }}

Before starting this overview, Sonoff has developed very good documentation available at this address: [user guide](https://sonoff.tech/ihost-user-guides/){: target="_blank"}, do not hesitate to consult it because it is very well documented and accompanied by explanatory videos.

## First start and Update

To start, if you read the official documentation, Sonoff tells you to connect via USB and RJ45, wait for the blue display and then connect to the address [ihost.local](http://ihost.local) {: target="_blank"}, well for me it never worked I managed by going to the router and manually looking for the IP address, don't hesitate to set it to a fixed IP address otherwise you risk like me to see it change regularly. Then connect to the prompt:

{% picture posts/{{ page.guid }}/page-connection-passerelle-sonoff-ihost.png --alt sonoff gateway ihost connection page --img width="940" height="611" %}

To get started after the first start, you will need to connect to the ewelink application in order to benefit from the updates. My initial version was v1.5 while we are already at version 1.12.0.

**Ewelink announces local operation** but it turns out that the OTA firmware update only works through the official Ewelink application, which uses the cloud. In short, to keep it simple, Ewelink knows the operating state of the gateway {{ page.ref }} but not what is happening inside, hoping that this is the case.

**To do this, just watch the official video:**

{% include videoPlayer.html externalId="https://sonoff.tech/wp-content/uploads/2023/03/x.mp4" %}

After restarting, go to the settings page and you will see a button appear for the first update.

{% picture posts/{{ page.guid }}/page-parametrage-gateway-sonoff-ihost.png --alt setting up the first update of the sonoff gateway ihost --img width="940" height="603" %}

## Sonoff Zigbee Pairing {{ page.ref }}

On the homepage you can use the Zigbee network as well as pairing buttons, I'll let you watch how it works on video

{% include videoPlayer.html youtubeId="PeVD-pXDs18" %}

### Zigbee compatibility

I have read negative opinions here and there on the hardware compatibility of this box. But since the release of **zigbee2CUBE** for the box {{ page.ref }} it is completely different. You can find the [list of compatible modules](https://bit.ly/3pFFN8I){: target="_blank"} on their sites, and it continues to grow from week to week. It is a very good thing.

To have access to a multitude of recognized zigbee modules you will need to activate zigbee2CUBE to do this, go to **Pilot > Zigbee2CUBE**

{% picture posts/{{ page.guid }}/page-activation-zigbee2CUBE-sonoff-ihost.png --alt activation of the zigbee2CUBE driver of the sonoff gateway ihost --img width="940" height="411" %}

From now on I advise you to pair your modules and you will notice very good compatibility as well as exceptional fluidity during pairing. Honestly, nothing to complain about.**

> I've installed all kinds of modules and not one has been left behind.

I think that in the long term it will be the most important base after Zigbee2mqtt

{% include doclink.html docx="https://docs.google.com/spreadsheets/d/1VLuhpznuQzMkMwKJWO9L87Y7wX5Nw-DUdhUmIAhVgY4/edit#gid=0" title="Zigbee ihost hardware list supported google spreadsheet format" %}

If you wish to participate in the evolution of hardware compatibilities, a [dedicated discussion thread exists on the Ewelink forum](https://forum.ewelink.cc/t/discussion-about-zigbee2cube-and-non-zigbee-3-0-devices-compatibility/17848/87){: target="_blank"}

### Zigbee2cube

**Message from the manufacturer:**

As you may know, the compatibility issue with ZigBee devices is a complex and time-consuming project. We cannot guarantee compatibility with all ZigBee devices available on the market, but we will continually do our best to improve iHost's compatibility with ZigBee devices, especially NON-ZigBee 3.0 standard protocol devices, do not feel free to join the discussion here.

In short, ZigBee devices, especially NON-ZigBee 3.0 devices, to be compatible and correctly displayed in the iHost web portal, three conditions must be met simultaneously,

1. The model reported by the ZigBee device is part of the list of types supported by Zigbee2CUBE.
2. The capabilities (exposures) reported by the ZigBee device fall within the types and capacities supported by Zigbee2CUBE.
3. The eWeLink CUBE system has corresponding user interface capability, which means it can display the device correctly. Currently, switch classes, lighting classes, and some sensor classes are supported.

We've sorted out a list of devices (check below) that should theoretically be supported by iHost Zigbee2CUBE, but we can't test them all. If your ZigBee device does not appear as expected in iHost, be sure to first check if it is included in the supported list provided below.

If it is not listed, please wait for periodic updates as we continue to expand the list of supported devices.

## Automation (Smart Scene {{ page.ref }})

The {{ page.ref }} gateway offers a Smart scene tab, it is nothing more than an automation tab.

{% picture posts/{{ page.guid }}/page-parametrage-scene-automatisation-passerelle-sonoff-ihost.png --alt configuration of smart scenes automation of the sonoff gateway ihost --img width="940" height="578" %}

So at this stage version 1.12.0 does not add anything new in this area and it's a shame because we are far from what Home Assistant or Jeedom can offer and that's a shame. **It only offers trigger conditions and actions, it's too light for automation.**

{% include videoPlayer.html externalId="https://sonoff.tech/wp-content/uploads/2023/03/IHost-ss.mp4" %}

### Modes in {{ page.ref }} Smart security

By default the sonoff gateway {{ page.ref }} offers 3 operating modes, the Home, Away and Sleep function. Activating one of the modes has the most beautiful visual and sound effect, frankly it's very nice. **It allows you to trigger the box's audible and visual alarm by flashing.** *Weak point on this version you will not be able to create other modes.*

{% picture posts/{{ page.guid }}/page-mode-home-away-sonoff-ihost-gateway.png --alt the Home/Away/Sleep modes of the Sonoff Gateway ihost --img width="940" height="470" %}

## Using Casts

The casts are simply dashboards to personalize, and frankly it's very well done to the point that I think that home assistant should take inspiration from it, in three clicks you create an interface that you can share with a member of your family.

> Adding a cast has never been easier

{% picture posts/{{ page.guid }}/page-cast-sonoff-ihost.png --alt sonoff gateway ihost cast settings page --img width="864" height="939" %}

once on the created cast you just need to:
- select the relevant modules
- select scenes
- configure the graphical interface
- and choose the configuration parameters such as a password for example.

{% picture posts/{{ page.guid }}/page-parametrage-cast-sonoff-ihost.png --alt sonoff gateway ihost cast options configuration page --img width="940" height="535" %}

Here is a rendering created in 2 minutes available on the dashboard of a PC.

{% picture posts/{{ page.guid }}/rendu-cast-sonoff-ihost.png --alt rendering of the sonoff gateway ihost casts --img width="940" height="535" %}

**Cast presentation video.**

{% include videoPlayer.html externalId="https://sonoff.tech/wp-content/uploads/2023/03/cast.mp4" %}

## Docker in {{ page.ref }}

The integration of Docker is a very important point, because you will be able to configure containers officially run by Ewelink but also containers like Zigbee2mqtt. At this stage I have only tested the official containers which are already prepared to work with the {{ page.ref }} gateway.

{%- include alert.html type="info" text="Importantly, data is stored on an SD card, without an SD card you will not be able to access this function." link="https://sonoff.tech/ihost-user-guides/add-on/#Add-on" textlink="Official doc add-ons" %}

At Sonoff as for Home-Assistant this function is called Add-ons

{% picture posts/{{ page.guid }}/page-docker-sonoff-ihost.png --alt sonoff gateway ihost add-on options configuration page --img width="940" height="299" %}

We find among other things:

- [Homebridge](https://sonoff.tech/ihost-user-guides/add-on/#Homebridge-Add-on){: target="_blank"}
- Ewelink smarthome (allows Sonoff to operate in LAN)
- [NodeRed](https://sonoff.tech/ihost-user-guides/add-on/#Node-Red-Add-on){: target="_blank"}
- [Paral sync](https://sonoff.tech/ihost-user-guides/add-on/#eWeLink-Smart-Home-Add-on){: target="_blank"} (synchronization of zigbee modules of an Nspanel pro with {{ page.ref }}) **New in V.1.12.0**
- An weather Api
- mqtt2tasmota
- tts2cube pico (doing tts with the {{ page.ref }} microphone)

{% include videoPlayer.html externalId="https://sonoff.tech/wp-content/uploads/2023/03/IHost-Addon介绍视频.mp4" %}

## Matter Firmware V1.12.0

**Big news**, version 1.12.0 released in November 2023 supports Matter products and adds the Pilot > Bluetooth function. I tested the integration of Matter products for you and **I must tell you that for the moment it is far from perfect.**

Firstly, the Matter function only works with the Google Home, Apple Home, Alexa and Smartthings applications.

You will first need to link one of the applications mentioned above with Ihost and secondly you will need to integrate the Matter module, in my case as I use Android, **in Google Home**.

Currently **I have 2 Matter products** and unlike Home-Assistant where I managed to integrate them, for **Sonoff {{ page.ref }} it is something completely different**. First, every other time the link between {{ page.ref }} and **google home is held in check**. And the integration of the modules into Google Home works but are decommissioned once integrated.

So with the **release of V1.12.0 Matter is not functional** at least for me, maybe I'm not carrying out the manipulations correctly.

## Manuals {{ page.ref }}

{% include doclink.html pdf="sonoff-ihost-specification.pdf" title="Specifications of the Sonoff Ihost box" %}
{% include doclink.html pdf="sonoff-ihost-manuel-utilisateur.pdf" title="Complete manual for the Ihost box" %}
{% include doclink.html pdf="sonoff-ihost-guide-rapide.pdf" title="quick user guide for the Ihost box" %}

{% include product-embed.html guid="2178" %}

## **product advantages** {{ page.ref }}
{: .blue}

- manufacturing quality
- certified zigbee 3.0 chip **EFR32MG21**
- **the price (approximately €99 or €109) depending on the version**
- the many compatibilities
- the various supports
- integration of a microphone and speaker
- Addons integration via docker
- Zigbee hardware compatibility
- power of the Rockchip processor

## **the - of the product** {{ page.ref }}
{: .red}

- No 5Ghz wifi
- Matter unstable
- connection to the Ewelink application required

{% include product-embed.html guid="2179" %}

> Big advantage the box {{ page.ref }} is **equipped with a microphone and speakers** which will allow you in the near future to be able to control your box by voice, a real plus for years to come.

## Conclusion

I gave this box 5 stars, **because the manufacturing quality for a ridiculous price makes it an essential control box**, the prospect of regular evolution of Sonoff firmware will solve most of the problems you just need to be patient. In short, for 100€ you will have a box that will do the job.