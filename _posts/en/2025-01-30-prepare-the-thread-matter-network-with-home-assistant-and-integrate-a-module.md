---
guid: 151
title: "Prepare a Thread and Matter network on Home Assistant"
description: "Discover and prepare a Thread edge router with matter to integrate new products coming to the market with Home Assistant, Thread an exceptional protocol"
ref: ""
layout: post
authors: [Nico]
date: 2025-01-30 16:20
last_modified_at: 
categories: [News, Haade-lab, Home-Assistant]
tags: []
video: 
image: 'perpare-server-matter-with-thread-router-border-for-homeassistant.png'
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
rating:  
sourcelink:
  - https://www.threadgroup.org/
  - https://csa-iot.org/all-solutions/matter/
  - https://openthread.io/
  - https://www.home-assistant.io/integrations/thread/
---

Many articles **are available on the Matter connected product management protocol**, currently it works with the Wifi network or the Thread network. We **know all the advantages and disadvantages of wifi**, but have you ever heard **about Thread**?

This article comes after an integration of a **new product that I will present in a future article the Tado-X**, I wanted to **integrate it directly into Home Assistant** through Matter and Thread because it is compatible with these protocols, and I did not want to use the entire Tado environment, **I finally succeeded but it was not that easy!**

## Matter + Thread Explanations

### Let's get back to our sheep what is Matter

**Matter** is an **Object-oriented** protocol, it is capable of **managing the connection-operation and control of connected objects**. **Matter can't** handle **network protocols** directly, which is why manufacturers pair it with **wifi or thread**.

## What is Thread?

**Thread is a low-power, low-latency wireless mesh networking protocol** similar to **frequency and Zigbee.**
Like Zigbee, Thread solves the complexities of IoT by addressing challenges such as interoperability, range, security, energy, and reliability, they have **no single point of failure**, and include the ability to **self-heal**.

**How ​​does Threas differ from Zigbee** or Z-wave in operation?

Well, **Thread devices integrate seamlessly into the IP networks widely available in our larger homes** and do not require proprietary gateways or translators. This reduces infrastructure investment and complexity, eliminates potential points of failure, and reduces maintenance burdens. **Thread also securely connects devices to the cloud,** making it easier to control IoT products and systems from devices such as mobile phones and tablets.

**Thread Operation Diagram**

{% picture posts/{{ page.guid }}/thread-home-network-with-matter.png
 --alt Diagram of how a thread and matter network works on a private wifi network --img width="940" height="691" %}

> We understand better why manufacturers are increasingly moving towards this protocol.

### Conclusion

In a Matter+Thread environment, Matter takes care of the management and operation of the product, while Thread is there as a data transporter on the network.

{% include product-embed.html image="Home-Assistant-Green.png" title="Box HomeAssistant Green" brand="Nabu Casa" description="Box Home Assistant Green on sale at domadoo for less than €100" domlink ="produits-compatibles-home-assistant/7046-nabu-casa-home-assistant-green-smart-home-hub-0794677011758.html" %}

## Thread and Home Assistant

**Prerequisites:**

- a box with home assistant with HAOS
- an ezsp key type skyconnect configured with a thread firmware
- Install a Matter server on HA
- install a Thread server on HA
- **A smartphone with companion installed**

{% picture posts/{{ page.guid }}/produit-compatible-thread.png
 --alt Example of thread and openthread compatible product --img width="600" height="337" %}

**To arrive at integrating a Thread and openthread compatible product** do not hesitate to check the following logo on the product label, it works with thread via a border router, a control key that we will configure in home assistant.

{% picture posts/{{ page.guid }}/logo-thread-compatible-home-assistant.png
 --alt Example of thread and openthread compatible product official logo compatible border router --img width="150" height="45" %}

### Let's prepare a zigbee type ezsp key

All keys available on the market with the silicon labs EFR32MGXX chip are likely to integrate a thread firmware, [you will find on the Darkxst Github directory several firmwares compatible with different keys.](https://darkxst.github.io/silabs-firmware-builder/){: target="_blank"}
For a practical aspect I will use the Zigbee Home Assistant ZBT-1 key formerly called Skyconnect. To update or change the firmware, nothing complicated. Go to the [official manufacturer](https://connectzbt1.home-assistant.io/firmware-update/){: target="_blank"} website, at the bottom of this page you will find a **update firmware** icon. Plug the key/dongle into your PC via USB and **click on the button**.

![Thread firmware modification for Skyconnect home assistant, zbt-1]({{ site.baseurl }}/assets/images/posts/151/installation-firmware-thread-zbt1-skyconnect-home-assistant.webp{{ cachebuster }}){: width="600" height="416" class="lazyload pictaninpost"}{: target="_blank"}

{% include product-embed.html image="nabu-casa-dongle-usb-zigbee-30-connect-zbt-1-skyconnect-pour-home-assistant.png" title="Zigbee Key and Thread ZBT 1 Skyconnect" brand="Nabucasa" description="Nabu Casa Home Assistant key compatible with Zigbee or Thread" domlink="box-domotique/7188-nabu-casa-dongle-usb-zigbee-30-connect-zbt-1-pour-home-assistant-0860011789710.html" %}

**Another solution:** If you have a zbt-1 key, Home Assistant allows you to directly configure it in Thread via a simple link. In this case, leave the key connected to the HAOS Home Assistant bos, go to Settings > System > Hardware

{% picture posts/{{ page.guid }}/firmware-thread-cle-zigbee-skyconnect-zbt1-automatique.png
 --alt Firmware thread integration directly into the nabucas skyconnect zbt-1 key --img width="600" height="314" %}

> **PS:** There is a **Multi Pan function which means compatible with Zigbee and Thread** at the same time, however this function is still in development phase **I advise you not to use it for the moment.**

[Official article talking about the multiprotocl subject on the skyconnect zbt-1 key](https://connectzbt1.home-assistant.io/about-multiprotocol/){: target="_blank}

### Let's start by creating a Matter server

Nothing complicated, just click on the link below, it will allow you to download the Matter add-on, then you don't have to configure anything and you can install it directly.

[![Download, install and start the Matter server](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=core_matter_server){: target="_blank"}

**To finish**, you have to add **the created Matter device**, to do this go to **Settings > Devices and Services > Discoveries** and click on Add Matter.

**ANOTHER MATTER SOLUTION**, if you have already installed a Matter compatible product in your home automation network, then you just have to go to

**Settings > Devices and Services > Discoveries**, there you should have **Matter proposed**, by simply clicking on it, you leave the box checked: **Use the official Matter Server add-on in the Supervisor** and it will automatically install the Matter server.

{% picture posts/{{ page.guid }}/ajout-materiel-matter-decouverte-serveur-auto.png
 --alt Discovering and adding a Matter compatible product with automatic server installation --img width="700" height="223" %}

### Let's Install the Openthread Server Essential

**OpenThread released by Google** is an open source implementation of Thread®. Google released OpenThread to make the networking technology used in Google Nest products more widely available to developers, to accelerate the development of products for the smart home and commercial buildings.

[![Download, install and start the Openthread server](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=core_openthread_border_router){: target="_blank"}

**Start by downloading** and installing the Openthread server, (link above) and **before launching it for the first time** you **will have to select your zigbee key** in **the settings** and check the **baudrate at 460800**. As in the image below then you can start the server.

{% picture posts/{{ page.guid }}/openthread-parametres-serveur-clé-skyconnect-et-vitesse-de-transfert.png
 --alt Openthread server installation --img width="700" height="493" %}

> Here are the two servers **Matter and Openthread are installed and operational** but it's not over.

Let's continue, now we will have to configure a *border router* **it is equivalent to a coordinator for Zigbee/Z-wave**, *check that the two servers are started and operational*, go to **Settings > Devices and Services > Discoveries** and click on the **Thread discovery**, if there is no Thread discovery, go to **Add an integration** and choose **Thread**. To finish check that your coordinator is correctly back in Thread. Still in **Devices and Services** Click on **the previously configured Thread integration** then go to **configure**, you should have a border router ***ha-thread-XXX***

{% picture posts/{{ page.guid }}/border-router-operationnel-ha.png
 --alt Openthread server installation and operational border router in Thread --img width="600" height="249" %}

If you want [more information about Thread and HA go to the official link](https://www.home-assistant.io/integrations/thread/){: target="_blank"}, everything is indicated, especially if there are several border routers like Google Home or Apple Home kit that are already available at your place.

{% include product-embed.html image="Home-Assistant-Green.png" title="Box HomeAssistant Green" brand="Nabu Casa" description="Box Home Assistant Green on sale at domadoo for less than €100" domlink ="produits-compatibles-home-assistant/7046-nabu-casa-home-assistant-green-smart-home-hub-0794677011758.html" %}

### Smartphone and Companion Settings

If **you want to add a new product** whether it is under **Matter/wifi** or **Matter/thread** you will have no choice but to install the Companion application for android or Apple. Because everything happens on smartphone.

{% include qrlink.html qrlink="https://companion.home-assistant.io/" text="download the Companion app directly for Android or Apple" realtextlink="Smartphone Companion Apps" %}

But **before you can add Matter-based Thread** devices, your phone needs to **know the credentials of the newly created Thread** network.

To **share** the credentials with your **Android** phone, open the Home Assistant Companion app.
In the Companion app, go to **Settings > Companion app > Troubleshooting** , then select Sync Thread credentials .
Follow the on-screen instructions.
Result: You will see a confirmation that the Home Assistant Thread credentials have been added to this device.

To **share** credentials with your **iPhone**, open the Home Assistant Companion app.
Go to **Settings > Devices & Services** , select **Thread integration** ,Select **Configure under Services** .
At the **bottom of the preferred network area**, select **Send credentials to phone** .

You can find all the additional information on the official link below

[more information about Thread and HA go to the official link](https://www.home-assistant.io/integrations/thread/){: target="_blank"}

{% include product-embed.html image="nabu-casa-dongle-usb-zigbee-30-connect-zbt-1-skyconnect-pour-home-assistant.png" title="Zigbee Key and Thread ZBT 1 Skyconnect" brand="Nabucasa" description="Nabu Casa Home Assistant key compatible with Zigbee or Thread" domlink="box-domotique/7188-nabu-casa-dongle-usb-zigbee-30-connect-zbt-1-pour-home-assistant-0860011789710.html" %}

## Conclusion

Here is a **few steps** installation that will allow you to welcome all new products compatible with Matter/Thread router border, on your Home Assistant installation, I find this **interesting integration step** because the **Thread protocol remains a very good choice especially when faced with wifi!**. After this manipulation, the integration of a tado-x thermostatic faucet directly into ha is child's play

{% picture posts/{{ page.guid }}/inclusion-matter-thread-home-assistant-ok.png
 --alt Server installation Openthread integration matter home assistant tado ok --img width="940" height="529" %}




