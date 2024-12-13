---
guid: 143
title: "Box Homey Pro - the quiet force"
description: "Test of the Homey pro early 2023 home automation box, disconcertingly simple, this box offers undeniable advantages for home automation novices, it has many positive points like all these available protocols, but does it have all the advantages on its side?"
ref: "Homey Pro (Early 2023)"
layout: post
authors: [Nico]
date: 2024-10-14 17:00
last_modified_at: 
categories: [Haade-lab, Tests, Z-wave, Zigbee]
tags: []
video: 
image: 'athom-homey-pro-box-domotique-test.png'
toc: true
beforetoc: ''
published: true
sitemap:
  changefreq: 'monthly'
  exclude: 'no'
  priority: 0.5 #between 0.0 to 1.0, 1.0 high priority
  lastmod:  # date to end modification
locale: en_GB
comments: true
rating: 4.4
sourcelink:
  - https://www.domadoo.fr/fr/accueil/7159-athom-box-domotique-homey-pro-3-z-wave-plus-zigbee-wi-fi-ble-433-mhz-infrarouge-matter-et-thread-8719327218198.html
  - https://homey.app/fr-fr/?gad_source=1&gclid=Cj0KCQjw3vO3BhCqARIsAEWblcBFdZ9y_NK05T0X_wV7w3iR0TnxdWDgDstnXvOJ3DDl6aWoT8ix3B8aAg66EALw_wcB
---

Here is a test that **I can't wait to present to you**, thanks to Athom the manufacturer of the {{ page.ref }} box and Domadoo, I was able to acquire a latest generation {{ page.ref }} box. Athom **sells this box for €399** no less! I hope that for this price this home automation box **keeps all its promises**.

Throughout this tutorial I will **detail as best I can the features of this box**. And see if it is made for Mr. Everybody.

> In a future article **we will make a comparison** between the {{ page.ref }} and the Home Assistant Yellow which are probably the most interesting boxes of the moment.

{%- include alert.html type="info" text="Haade.fr is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means to earn fees by linking to Amazon.com and affiliated sites." %}

## Unpacking the box {{ page.ref }}

Delivered in a **magnificent black case, it's flawless** *it reminds me of the packaging of Sonoff NSPanel pro 120 products*, the box will not suffer the ravages of transport. Inside you will find instructions (downloadable below), a box and a plug adapter and USBc cable to power the box and connect it to your wifi network.

{% picture posts/{{ page.guid }}/deballage-box-domotique-athom-homey-pro-full-protocole.png --alt Unboxing the home automation box that everyone is talking about, made by Athom, the Homey pro box --img width="940" height="529" %}

{% include product-embed.html image="athom-box-domotique-homey-pro-3-z-wave-plus-zigbee-wi-fi-ble-433-mhz-infrarouge-matter-et-thread.png" title="Athom Homey Pro Automation box" brand="Athom" description="The Homey PRO home automation box integrates Z-Wave, Zigbee, Wi-Fi, BLE, 433 MHz, infrared, Matter/Thread for an advanced connected home experience." domlink="7159-athom-box-domotique-homey-pro-3-z-wave-plus-zigbee-wi-fi-ble-433-mhz-infrarouge-matter-et-thread-8719327218198.html" amazlink="47Qgdzg" %}

**In this photo you have all the components of the box**, there is an rj45 adapter to be able to connect it to **wired network but for this option you will have to pay an additional €26**.

{% picture posts/{{ page.guid }}/contenu-box-domotique-athom-homey-pro-full-protocole.png --alt content of the home automation box that everyone is talking about manufactured by Athom the Homey pro box with the instructions and the USBC socket --img width="940" height="529" %}

A few more photos on the last image the box with this **magnificent play of light** during normal operation, you can if you wish deactivate it **via the Homey interface**.

{% picture posts/{{ page.guid }}/tour-horizon-box-domotique-athom-homey-pro-full-protocole.png --alt overview of the home automation box that everyone is talking about manufactured by Athom the Homey pro box with the instructions and the usbc socket --img width="940" height="529" %}

To finish some pictures of the unpacking of the **rj45 adapter**, this one *is unfortunately not provided with the POE function* it will be necessary to connect the cable and the usbc socket. **But it has the merit of offering an RJ45 function to the Athom box {{ page.ref }}.**

{% picture posts/{{ page.guid }}/dongle-connecteur-rj45-pour-box-homey-pro-deballage.png --alt unpacking the rj45 adapter to connect the homey pro box to the network by wire --img width="940" height="529" %}

### RJ45 connector installation video

For it to be recognized in Homey, pro the rj45 connector must be connected in a certain way, watch the official video created by Athom

{% include videoPlayer.html youtubeId="kHsv5GH93Mw" %}

In terms of connectivity, the {{ page.ref }} box is more than **minimalist**, it will only offer a USB-C connection port, I find it a shame that it does not offer RJ45 ports which ensures network stability, and could even have integrated the POE option, but this is not the case for this version, **a shame because we still have to pay €399.**

{% picture posts/{{ page.guid }}/connectique-box-athom-homey-pro.png --alt screenshot of the connectivity available on the homey pro box --img width="940" height="529" %}

{% include product-embed.html image="athom-homey-pro-ethernet-adapter-boite.png" title="RJ45 Adapter Athom Homey Pro Box Home Automation" brand="Athom" description="The official adapter to connect the Homey pro box in RJ45, the adapter is not poe it will be necessary to power it with the socket supplied with the box." domlink="accessoires-electriques/7166-athom-homey-pro-ethernet-adapter--8719327704349.html" amazlink="3zQm7nu" %}


## Control of the box {{ page.ref }}

Let's get to the heart of the matter, the interface of this box. And there I must say that **I was amazed**. Ultra easy to use and even more understandable. **A novice will have no problem getting it to work**, I'm not talking about the first start-up but about the whole thing. A very successful interface that is not free of bugs for the moment which I have no doubt will be quickly corrected by the Athom team.

### Smartphone

Let's start with the first use, for this you will need your **smartphone as well as the dedicated Homey application**, find below a **QRCode** that will allow you to install it with a simple click.

{% include qrlink.html qrlink="https://setup.homey.app" text="download the Homey app from the play store or app store" realtextlink="Homey applications for Smartphone" %}

#### First connection

I didn't encounter any problems, you just have to follow the steps indicated on the application and after 2-3 minutes everything will be functional, you will even have **configured all the zones** available in your home. To make it more explicit, find below an animated gif that will show you step by step the first installation of the box {{ page.ref }} via the application on the phone.

![First connection of the Honey pro box on smartphone]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/premiere-connection-homey-pro.webp{{ cachebuster }}){: width="325" height="640" class="lazyload pictaninpost"}

> the smartphone application works wonderfully

### Pc

On the PC, nothing to configure, but to manage the interface of the {{ page.ref }}, nothing better than a large screen, I would like to point out that everything is **manageable via the smartphone or tablet**. You must of course have followed the installation step on Smartphone beforehand. Then simply go to the dedicated page [My Homey App](https://my.homey.app/){: target="_blank"}

**Find in this video** a configuration that is far from complete but which still includes **4 of the 6 protocols** integrated into the box.

I take a look at the functions, going through the reception, the inclusion of a **z-wave**, **zigbee** and **matter** socket as well as a brief use of the infrared function. Only Thread and the 433Mhz radio frequency have not been configured.

I have had almost no problems incorporating these products and you will be able to see the adaptability of this famous box {{ page.ref }}.
Enjoy watching.

{% include videoPlayer.html youtubeId="UV1Tq29qOHQ" %}

> the PC application works wonderfully

## Local network settings for the Box {{ page.ref }}

**By default, the Homey box only works on the cloud** except for data security, this box will not work in the absence of an internet network. For local installation, it is possible but you will need to activate port forwarding on your router and on the Homey Pro application.

> Don't forget to dedicate a **static IP** to your box

[Local access on the Homey Pro box](https://homey.app/en-us/news/port-forwarding-is-now-live/){: target="_blank"}

### Router settings

A small animation to show you how to configure a port opening on a Freebox OS router with recording a static IP

![Freebox Os port redirection settings for homey with static IP address]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/parametrage-port-forwarding-local-homey-pro-freebox.webp{{ cachebuster }}){: width="940" height="529" class="lazyload pictaninpost"}

### Setting up the Port Forwarding application (port opening)

A small animation to help you set up a port redirection on the Homey pro application, you will find in the general tab the IP address allocated to the box.

![Setting up freebox Os port redirection for homey with static IP address]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/parametrage-redirection-port-app-my-homey-box-local.webp{{ cachebuster }}){: width="244" height="529" class="lazyload pictaninpost"}

## Scenarios (Flows) in all this

Athom offers the **creation of flows** in **simple mode or in red node mode**, the functions are numerous by default and created automatically according to the modules and products integrated in the box which will allow you a wide range, you **just have to select** those which interest you to **link** them together by a classic scenario model (if, then, if not) and **then to test** with a simple click, all very very simply.

> And you will thus make your home intelligent.

![Animated gif of summary presentation of the two types of creation of flows or scenarios for the homey pro box]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/gif-anime-flows-simple-et-avance-box-homey-pro-simplicite-deconcertante.webp{{ cachebuster }}){: width="495" height="757" class="lazyload pictaninpost"}

> It will be **extremely easy for you to create flows** with the {{ page.ref }} box even if you are a novice or bad at computers. This is its main strength.

## My feelings about the {{ page.ref }} box

I wanted to list the positive and negative points in detail in order to help you decide as objectively as possible when purchasing this box.

**It's not all rosy, far from it, but it's not bad for a box that is not open source.**

### The positive points

I won't hide it from you, this box is worth a look, among the positive points, are to keep in mind its many integrated protocols, this simplicity of use and its many modules offered by Homey and an ever-growing community of users.

> The home page also lacks flexibility; for the moment, it only offers the display of users and weather and the selection of your favorite **modules or flows** (scenarios).

**Product advantages:**{: .blue}

**Here are the positive points according to Haade.**

- The design
- The manufacturing quality
- the **LED rings** (we like it or not)
- All the **integrated protocols (RF433, infrared, Bluetooth, Thread, Zigbee, Matter, Z-wave)**
- Great compatibility
- Great **simplicity of use** especially for Novices
- Easy to create scenarios (flows)
- **Large developer community**
- responsiveness of the Athom company

### The negative points

To begin with, the first problem encountered is hardware, the box {{ page.ref }} **is announced with an emmc storage capacity of 8GB** which is already low in my opinion but in reality I realized **that it was only 2.66GB** which can quickly cause problems from the moment we install several applications. In my opinion a box should not have a storage capacity below 32GB, even the Home Assistant Green box offers 32GB.
The RAM memory capacity is only 2GB and here too a box should not offer a box below 4GB of RAM especially at this price!

{% picture posts/{{ page.guid }}/capacite-stockage-homey-pro-3gb-au-lieu-de-8gb-annonce.png --alt The storage capacity announced by the manufacturer Athom of the Homey pro box is not 8GB but only 2.66GB --img width="940" height="630" %}

Finally it is currently **not possible to save the data of the box {{ page.ref }}** via a module, however it must be possible to perform this manipulation locally thanks to the ssh access offered by the box (currently in the test phase).

**The - of the product:**{: .red}

- The **Price 399€** relatively expensive
- everything **works on the Cloud** nothing locally by default
- Default connection to wifi possible in **rj45 with an additional connector**
- Protocol **Z-wave 700** (recent but not latest generations)
- Only **2.6GB of storage space** instead of 8GB announced
- Low RAM memory of **1.99GB**
- **Paid** backup

{%- include alert.html type="info" text="Haade.fr is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means to earn fees by linking to Amazon.com and affiliated sites." %}


## Technical characteristics {{ page.ref }}

**Wireless technologies:**

- ZigBee® 3.0 (2.4 GHz)
- Wi-Fi® 802.11b/g/n/ac (2.4GHz and 5GHz)
- Bluetooth Low Energy 5.0 (BLE)
- Z-Wave Plus V2™ (868.42MHz)
- Radio Frequency (433 MHz: Somfy RTS, Chacon DIO etc.)
- Infrared
- **Processor:** ARMv8 Quad Core at 1.8 GHz
- **RAM:** 2GB LPDDR4 RAM
- **Storage memory:** 8GB eMMC Flash announced ***but only 2.66GB including 1.33GB free***

Find below a **gif animation of the operation of the LED** purely decorative of the box {{ page.ref }}

![Animation of the LEDs of the Homey pro box]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/animation-anneau-led-homey-pro-la-box-du-moment.webp{{ cachebuster }}){: width="495" height="463" class="lazyload pictaninpost"}

**The Homey pro Box has a diameter of 127MM**

{% picture posts/{{ page.guid }}/caracteristique-diametre-homey-pro-127mm.png --alt La box Homey pro a un diamètre de 127mm --img width="940" height="529" %}

Find in detail the composition of the on-board card of the box {{ page.ref}} (note that not all functions are available)

[Comparison of the different Homey Boxes on the market](https://support.homey.app/hc/en-us/articles/360015447093-Comparing-the-existing-Homey-Pro-models){: target="_blank"}

{% picture posts/{{ page.guid }}/carte-mere-homey-pro-detail.png --alt Détail du circuit imprimé de la carte box Homey pro --img width="940" height="588" %}

1. MicroSOM (CPU, RAM, Wi-Fi & BT)
2. 8 GB eMMC Flash
3. Power Supply
4. RGB LED (24x)
5. Microphones (2x) ( No available )
6. Audio Chip
7. 433 MHz
8. 868 MHz (only available on Homey bridge)
9. Z-Wave
10. ZigBee
11. NFC (IC & antenna connector)
12. Infrared LED (6x)
13. Infrared receiver

[More details about the Homey pro circuit board](https://homey.app/en-us/blog/a-technical-introduction-homey/){: target="_blank"}

## Instructions for use of the {{ page.ref }}

{% include doclink.html pdf="Homey-Pro-Quick-Start-Guide.pdf" title="Homey Pro box quick user guide" %}

## Useful links of the {{ page.ref }}

Here are some links that seem very interesting to me and that you should know when you have this {{ page.ref }} box.

[Community - Homey Pro Forum](https://community.homey.app/){: target="_blank"}

[Services States Homey](https://status.homey.app/){: target="_blank"}

[Homey official support](https://homey.app/fr-fr/support/){: target="_blank"}

{% include product-embed.html image="athom-box-domotique-homey-pro-3-z-wave-plus-zigbee-wi-fi-ble-433-mhz-infrarouge-matter-et-thread.png" title="Athom Homey Pro Automation box" brand="Athom" description="The Homey PRO home automation box integrates Z-Wave, Zigbee, Wi-Fi, BLE, 433 MHz, infrared, Matter/Thread for an advanced connected home experience." domlink="7159-athom-box-domotique-homey-pro-3-z-wave-plus-zigbee-wi-fi-ble-433-mhz-infrarouge-matter-et-thread-8719327218198.html" amazlink="47Qgdzg" %}

## Conclusion

I gave **a score of 4.4/5** for the Athom Homey pro box, according to some it deserves 5/5, three things bother me, **the first** is its price of €399 and its lack of connectivity, **the second** is the fact that it only offers access via the cloud, no local web service by default **to finish** Homey announces a storage of 8GB and it is only 2.66GB, you understand.

However, it is a box that I recommend to all novices in home automation because **the interface is very easy to use**, the integration of protocols is very complete (currently the best equipped on the market). The community can easily develop applications that will make a large part of the connected products on the market compatible.

> The Homey Pro is probably the best box on the current market!

{% include product-embed.html image="athom-homey-pro-ethernet-adapter-boite.png" title="RJ45 Adapter Athom Homey Pro Box Home Automation" brand="Athom" description="The official adapter to connect the Homey pro box in RJ45, the adapter is not poe it will be necessary to power it with the socket supplied with the box." domlink="accessoires-electriques/7166-athom-homey-pro-ethernet-adapter--8719327704349.html" amazlink="3zQm7nu" %}