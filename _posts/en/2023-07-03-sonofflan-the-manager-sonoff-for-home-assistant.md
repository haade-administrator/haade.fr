---
guid: 74
title: "SonoffLAN easily integrate Sonoff wifi modules"
description: "SonoffLAN is an add-on that allows you to easily and effectively integrate Sonoff brand wifi modules into Home Assistant. I take advantage of this article to introduce you to the Sonoff POW Elite POWR316D wifi smart switch and energy meter module compatible with din rail"
ref: "POW Elite POWR316D"
layout: post
author: Nico
date: 2023-07-05 17:53
last_modified_at: 
categories: [Haade-lab, Tests, Home-Assistant]
tags: []
image: 'Sonofflan-control-sonoff-home-assistant-en.png'
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
  - https://www.domadoo.fr/fr/peripheriques/6659-sonoff-commutateur-de-compteur-de-puissance-intelligent-16a-avec-ecran-pow-elite.html?domid=39
  - https://itead.cc/product/sonoff-pow-elite-smart-power-meter-switch/
---

This time, I decided to write a **2 in 1 article**, in order to introduce you to the integration of Sonoff modules via the **SonoffLAN** application created by [AlexxIT](https://github. com/AlexxIT/SonoffLAN){: target="_blank"} which allows you **simply and easily** to integrate sonoff modules in Home assistant and choose according to the modules if you want them to work **with or without cloud** [(see the list of compatible modules)](https://github.com/AlexxIT/SonoffLAN#tested-devices){: target="_blank"} I chose as an example the integration of the module Sonoff 16A power switch {{ page.ref }}, which I will present to you (unpacking, test).

{% include product-embed.html guid="2167" %}

## Prerequisites

-Home Assistant
- HACS Package Manager installed
- a module [Sonoff wifi 16/20A power switch](https://www.domadoo.fr/fr/peripheriques/6659-sonoff-commutateur-de-compteur-de-puissance-intelligent-16a-avec-ecran-pow-elite.html?domid=39){: target="_blank"}
- the Ewelink application installed on your phone

## Why SonoffLAN?

**Because it's easy to use**, the integration into Home Assistant is spot on. But that's not the most important thing, you can choose whether or not you want to do without the Chinese cloud of ewelink.
> Because yes, if you choose to buy a Sonoff wifi module it will work by default on the Cloud.

Moreover Ewelink has developed a functional module under home Assistant, you will need home assistant OS version and add the following repository:

{%- include homeassistantlink.html supervisor_addon_repository="https://github.com/CoolKit-Technologies/ha-addon" %}

However, I find this module cumbersome and it is nothing but an iframe of the ewelink App application for the phone, in short, I pass my turn.

## 1. Home Assistant Preparation

First of all **install the HACS directories**, then it is not 100% necessary however it is very likely that one day or another you decide to install another module included in HACS for example the [Linkplay module see dedicated article]({% post_url /en/2023-01-18-discovery-linkplay-airplay-alternative-sonos %}).

To install HACS follow the official tutorial [HACS](https://hacs.xyz/docs/setup/prerequisites){: target="_blank"}.
**Restart Home Assistant** and then just go to HACS > integration > explore and download repositories.
**Look for SonoffLAN and install it.** That's almost done.

or click on the link below:

{%- include homeassistantlink.html repertory="sonofflan" creator="alexxit" %}

## 2. Preparing the Phone

Download the ewelink application for your smartphone
- [For Iphone](https://apps.apple.com/fr/app/ewelink-smart-home/id1035163158){: target="_blank"}
- [For Android](https://play.google.com/store/apps/details?id=com.coolkit&hl=fr&gl=US&pli=1){: target="_blank"}

Once installed, all you have to do is create a username and password on the app. You can immediately write them down somewhere because you will be asked for them in SonoffLAN during the integration of the first device addition.

## 3. Integration of SonoffLAN in HA

Either you go to:
**Settings > Devices & Services > Add Integration.**

Or you click directly on the links below to add the integration

{%- include homeassistantlink.html integration="sonoff" %}

> That's all you have to do is enter the ewelink login and password and validate.

{% picture posts/{{ page.guid }}/sonofflan-integration.png --alt sonofflan integration in home assistant --img width="410" height="325" %}

Click on this [link to know all the compatible modules](https://github.com/AlexxIT/SonoffLAN#tested-devices){: target="_blank"} depending on the chosen mode.

## 4. Include a module in Ewelink App

As I said above I will use the module sonoff {{ page.ref }} wifi smart power switch

### 4.1 Presentation of the Sonoff module {{ page.ref }}

**16A version**
{% include product-embed.html guid="2167" %}

{% picture posts/{{ page.guid }}/sonoff-smart-power-meter-wifi-powr316d.png --alt integration sonoff powr316d smart meter with sonofflan in home assistant --img width="940" height="529" %}

*** Frankly it's a quality module ***, the packaging in turquoise colors sign of the brand are clean. delivered without frills with instructions and two screws to lock the connection valve.

The connectors and thick and quality, the connection simple to make.
You will quickly realize that the module is of good quality and yet currently it costs less than 17€ at Domadoo!

**On the front, you will find:**

- a switch button
- an on/off indicator light
- a blue wifi light.

{% picture posts/{{ page.guid }}/sonoff-commutateur-de-compteur-de-puissance-intelligent-16a-avec-ecran-pow-elite.png --alt presentation of the module pow elite 16A sonoff --img width="940" height="529" %}

The module comes with instructions, a wall bracket/din rail as well as two screws that will allow you to lock the access door to the electrical cables.

![updated information on sonoff smart meter powr316d digital screen]({{ site.baseurl}}/assets/images/posts/{{ page.guid }}/sonoff-smart-power-meter-powr316d-display.webp{{ cachebuster }}){: width="250" height="400"}

The LCD screen is relatively large, the information is clear, you will be able to directly see the consumption **(Volt, Ampere, Kwh and W), frankly not bad.**

### **the + of the product**
{: .blue}
- manufacturing quality
- easy and complete integration with sonofflan
- the price less than 20€ (16A version)
- din-rail compatible
- energy return
- ideal for water heaters (20A)
- works in lan mode
- number of status feedback ( 9 )

### **the - of the product**
{: .red}
- Wi-Fi 802.11 bgn compatible
- the size
- width equivalent to 3 circuit breakers

**PS: The module takes the equivalent of 3 circuit breakers, if you decide to equip your electrical panel choose the big one :).**

**20A version**
{% include product-embed.html guid="2168" %}

### 4.2 Inclusion in Ewelink App

This step is unfortunately necessary to be able to use the Sonoff {{ page.ref }} module, once included SonoffLAN retrieves the information and can thus process it locally without going through the Ewelink cloud.

![include ewelink app sonoff smart meter powr316d]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/integration-module-sonoff-app-ewelink.webp{{ cachebuster }}){: width="300" height="650"}

> Oddly, I couldn't include it by scanning the QRCode.

**It doesn't matter the inclusion in bluetooth is done without worries**. Follow the steps on your smartphone and everything should be fine.

> inclusion is done by pressing the module switch for 5 seconds.

## 5. Return to Home Assistant

**Important: at this point remember to restart the Home Assistant instance**

Once restarted, go to:
**Settings > Devices and Services** or click directly on the link *below*:

{% include homeassistantlink.html dashintegration="" %}

You should see **appear the Sonoff integration with the rise of a device the POWR316D**, if you already have the Ewelink application with several sonoff modules they will also appear in the SonoffLAN integration of Home Assistant. Be careful to choose the operating mode of the integration, see below.

{% picture posts/{{ page.guid }}/appareils-sonofflan-homeassistant.png --alt ascent of the device in itsofflan --img width="263" height="123" %}

By clicking on the toothed wheel you will have access to the dedicated page of Sonoff modules see *the image below*.

{% picture posts/{{ page.guid }}/entité-appareil-sonofflan.png --alt status of Sonoff devices in Sonofflan --img width="940" height="441" %}

If you click on:
- **configure:** you can set the auto / cloud / local mode. *See image below*.
- **add an entry**: you can add another Ewelink account and yes the module is multi-account compatible

{% picture posts/{{ page.guid }}/sonofflan-configurer-lan-cloud.png --alt configuration of Sonofflan in auto, cloud or local mode --img width="940" height="682" %}

> Custom if you are not sure or if you have several modules, select the **auto** mode

Finally if you click on the device you will have access to the page of the 9 entities of this device just that, the on/off control is instantaneous despite the distance from the wifi antenna. You will have access to all the commands.

![entity discovered in home assistant sonoff smart meter powr316d]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/entité-powr316d.webp{{ cachebuster }}){: width="940" height="789"}

## Conclusion

The integration [SonoffLAN by AlexxIT](https://github.com/AlexxIT/SonoffLAN){: target="_blank"} **is great, simple and effective**, being able to choose the *operating mode * is great, too bad that few sonoff modules are locally compatible. Regarding the Sonoff module {{ page.ref }}, I **put 5 stars** and it's quite rare so don't hesitate to equip yourself if it meets your needs!







