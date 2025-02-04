---
guid: 153
title: "Setting up Zigbee/Thread Multi-protocol on Home Assistant"
description: "Thread is a protocol that is gaining momentum, it is possible thanks to Silicon Labs to make Thread/Matter coexist with Zigbee on the same EZSP key. Despite the experimental operation, you will be able to realize that the installation of both protocols on the same key is possible!"
ref: ""
layout: post
authors: [Nico]
date: 2025-02-04 18:00
last_modified_at: 
categories: [Haade-lab, Home-Assistant]
tags: []
video: 
image: 'installation-multiprotocole-zigbee-thread-cle-skyconnect-zbt1-home-assistant.png'
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
  - https://www.home-assistant.io/integrations/thread/
---

After a tutorial on [installing the Thread/Matter protocol]({% post_url /en/2025-01-30-prepare-the-thread-matter-network-with-home-assistant-and-integrate-a-module %}){: target="_blank} on Home Assistant, let's continue now and tackle a **sensitive subject**, **the thread/zigbee multi-protocol on the same key**. Why sensitive, this integration is still in the **development phase** and not recommended by the **Nabu Casa team**.

> They still recommend **installing only one protocol per key**, which is a shame because as a reminder, Zigbee and Thread both use the same frequency, i.e. 802.15.4Mhz.

{% include product-embed.html image="nabu-casa-dongle-usb-zigbee-30-connect-zbt-1-skyconnect-pour-home-assistant.png" title="Zigbee Key and Thread ZBT 1 Skyconnect" brand="Nabucasa" description="Nabu Casa Home Assistant key compatible with Zigbee or Thread" domlink="box-domotique/7188-nabu-casa-dongle-usb-zigbee-30-connect-zbt-1-pour-home-assistant-0860011789710.html" %}

## Interesting links

To understand the multi-protocol mode here are **three Home Assistant links** that will provide you with a maximum of explanation

[Home Assistant and the Thread Protocol](https://www.home-assistant.io/integrations/thread/){: target="_blank}

[Multiprotocol mode Home Assistant Silicon Labs Multipan](https://connectzbt1.home-assistant.io/about-multiprotocol/){: target="_blank}

[Explanation firmware ezsp home assistant](https://connectzbt1.home-assistant.io/about-firmware-options/){: target="_blank}

## 1st step Backup and Deletion

First of all, especially **if you are starting from an existing installation**, remember to make **backups** as a reminder the Silabs multi-protocol module is in **Experimental phase** in short I warned you 😁.
Remember to **delete the integrated ZHA modules** as well as the associated coordinator.
Remember to **delete the Thread and Openthread border router** if you use it.

## 2nd preparation of the Zigbee key

It is imperative that the Zigbee key **has a Zigbee firmware installed**. If this is not the case and if you are using the Skyconnect/ZBT-1 Zigbee key it is quite simple. go to **settings > system > hardware > Home assistant skyconnect > configure**

You can also use [the online application provided by home assistant](https://connectzbt1.home-assistant.io/firmware-update/){: target="_blank}

If you have another Sonoff type key, go to the [darkxst page which also uses the online firmware modification application](https://darkxst.github.io/silabs-firmware-builder/){: target="_blank}

> In short, the key must be configured in Zigbee

## 3rd step installation

Nothing could be simpler **download and install the official Silabs multi-protocol module** by clicking on the link below

[![Download the Silabs multi-protocol application by home Assistant](https://my.home-assistant.io/badges/supervisor_ingress.svg)](https://my.home-assistant.io/redirect/supervisor_ingress/?addon=core_silabs_multiprotocol%2F){: target="_blank}

{% picture posts/{{ page.guid }}/silicon-labs-multi-protocol-thread-zigbee.png
 --alt Installation of the multi-protocol thread zigbee module by silabs --img width="600" height="320" %}

Then before starting the application you have to configure it, nothing too complicated:

- Select the key that will be configured
- set the baudrate to 460800
- and finish by saving
- start the application

{% picture posts/{{ page.guid }}/configuration-silabs-multi-protocol.png
 --alt Configuration of multi-protocol thread zigbee module by silabs --img width="600" height="544" %}

At this stage the module will **send the appropriate multi-protocol firmware**, it is not the latest available but the one that has been tested by the HA team, i.e. 4.3.1, to finish it will configure the Openthread server.

By consulting the log you will be able to verify the installation that went well, with a message in **red with encryption disabled**{: .red}, but which does not pose a problem for operation **however the encryption of the border router Thread will be non-functional.**

{% picture posts/{{ page.guid }}/journal-installation-multi-protocol.png
 --alt Multi-protocol installation log --img width="940" height="690" %}

> Here is the installation complete

If **you do not have a Matter server available** and yes as a reminder thread works with Matter, there is no need to mess around installing the server, it will be done automatically when discovering the first module.

## 4th step adding devices

### Adding the Thread device

Now go to **Settings > Devices and service** and add the Thread discovery

{% picture posts/{{ page.guid }}/decouverte-thread.png
 --alt discovery thread --img width="347" height="214" %}

> Once the device is added you will now go back **to it and click on configure**

{% picture posts/{{ page.guid }}/configurer-thread.png
 --alt verify configuration thread --img width="600" height="137" %}

We will display the configuration in order to know on which channel the thread network is configured, press the **i** in my case it is the **channel 20 configured by default**.

{%- include alert.html type="warning" text="A delicate phase of the process, it is imperative that the <b>radio channel is the same on both protocols</b>, for a judicious choice <b>if you can</b> opt for <b>channel 15, 20 or 25</b> so as not to compete with the channel of the wifi network." link="https://haade.fr/en/blog/interference-zigbee-wifi-2-4ghz-to-know" textlink="Zigbee and Wifi interference" %}

{% picture posts/{{ page.guid }}/information-routeur-thread-canal.png
 --alt information border router thread --img width="600" height="137" %}

> Tricky process of multi-protocol is the fact that **you can't manually change** the thread and zigbee channel, the choice is made **automatically**

{% picture posts/{{ page.guid }}/canal-choisi-automatiquement-en-mode-multi-protocol.png
 --alt automatic thread and zigbee channel selection. --img width="600" height="298" %}

{% include product-embed.html image="robinet-tado-x-thermostatique-matter-thread.png" title="Tado°" brand="Tado°" description="Tado° X thermostatic faucet, probably the most advanced faucet on the market, matter over thread compatible" amazlink="34aH0EeO" %}

### Adding the Zigbee device

Now we will have to add the Zigbee coordinator via the **Zigpy ZHA** library.
Nothing complicated, go to **Settings > Devices and services > Add an integration** and choose **Zigbee home automation**

{% picture posts/{{ page.guid }}/ajout-coordinateur-zigbee.png
 --alt add zigbee coordinator --img width="600" height="298" %}

Select the dongle, note that it is **socket://core-silabs-multiprotocol:9999**

{% picture posts/{{ page.guid }}/choix-du-dongle-multi-protocol-zigbee.png
 --alt choosing zigbee socket for silabs multi-protocol installation --img width="600" height="412" %}

To finish select **create a new network or delete an existing network**

{% picture posts/{{ page.guid }}/creer-un-nouvea-reseau-zigbee.png
 --alt create new network for silabs multi-protocol installation --img width="417" height="273" %}

As for Thread we will check the network information **to see if the automatic installation has chosen** the same **channel** as the Thread network. Go directly to the link below.

[![Zigbee ZHA network configuration](https://my.home-assistant.io/badges/config_zha.svg)](https://my.home-assistant.io/redirect/config_zha/){: target="_blank}

{% picture posts/{{ page.guid }}/parametre-zigbee-controle-du-canal.png
 --alt create new network for silabs multi-protocol installation --img width="607" height="853" %}

> In my case the **two channels are identical Jackpot**!

If this is not the case do not panic, **click on migrate radio**{: .red} and **select reconfigure current radio then it should be good**

{% picture posts/{{ page.guid }}/reconfigurer-radio-actuelle.png
 --alt reconfigure a new network for the silabs multi-protocol installation --img width="600" height="742" %}

{% include product-embed.html image="nabu-casa-dongle-usb-zigbee-30-connect-zbt-1-skyconnect-pour-home-assistant.png" title="Zigbee Key and Thread ZBT 1 Skyconnect" brand="Nabucasa" description="Nabu Casa Home Assistant key compatible with Zigbee or Thread" domlink="box-domotique/7188-nabu-casa-dongle-usb-zigbee-30-connect-zbt-1-pour-home-assistant-0860011789710.html" %}

## To finish Let's add Matter

When **discovering a Matter module on the network or when creating an Openthread network** the device will automatically come up in the device discovery

{% picture posts/{{ page.guid }}/decouverte-matter.png
 --alt discovery Matter device --img width="354" height="220" %}

**As a reminder** if you have not yet installed **Matter servers, no problem** when discovering the first Matter device, you just need to leave the box checked: **use the official Matter server add-on in the supervisor**

{% picture posts/{{ page.guid }}/installation-automatique-serveur-matter.png
 --alt create new network on first add matter --img width="600" height="295" %}

## Checking the whole

Here is a **screenshot of the whole installed system**, you will be able to see that I installed a product in **Zigbee ZHA, it is a Lidl bulb** as well as a module **in Matter it is the very good Tado-X thermostatic faucet compatible with Thread**.

{% picture posts/{{ page.guid }}/controle-installation-silabs-multi-protocol.png
 --alt full installation overview --img width="940" height="392" %}

{% include product-embed.html image="robinet-tado-x-thermostatique-matter-thread.png" title="Tado°" brand="Tado°" description="Tado° X thermostatic faucet, probably the most advanced faucet on the market, matter over thread compatible" amazlink="34aH0EeO" %}

> Below is the integration of the **Tado-X** thermostatic faucet in multi-protocol in Home Assistant

{% picture posts/{{ page.guid }}/integration-robinet-thermostatique-thread-tado-x-dans-home-assistant.png
 --alt integration of tado-x thermostatic faucet in home assistant in multi-protocol --img width="600" height="368" %}

> Below is the integration of the **Lidl Zigbee bulb** in multi-protocol in Home Assistant

{% picture posts/{{ page.guid }}/integration-ampoule-zigbee-dans-multi-protocole-home-assistant-avec-zha.png
 --alt integration of tado-x thermostatic faucet in home assistant in multi-protocol --img width="600" height="452" %}

## Key step summary

1. With a silabs chip Zigbee key with a [Zigbee firmware](https://github.com/darkxst/silabs-firmware-builder){: target="_blank} installed.
2. Be sure to have completely **removed ZHA, Thread and Openthread integration** from devices on Home Assistant.
3. Install the **Official Silabs Multi-protocol** module.
4. Select the zigbee key in the settings and save.
5. Start the module launch.
6. Go to **settings > Devices and services** and add Thread in discovery.
7. Always check **in Devices and services the Openthread** entry configured.
8. Go to the Thread entry and press configure.
9. Check **the existence of the ha-thread-xxxx border router** and press **i** to check the **info Channel** in my case 20.
10. Then Add the device **Zigbee Home Automation**
11. Select the entry: **socket://core-silabs-multiprotocol:9999**
12. Select **Clear network settings and create a new network**
13. Go to Zigbee devices and click on configure
14. Check the Channel it must be the same as Threasd for me, channel 20
15. If different click on **migrate radio** and **reconfigure current radio**

{%- include alert.html type="warning" text="A delicate phase of the process, it is imperative that the <b>radio channel is the same on both protocols</b>, for a judicious choice <b>if you can</b> opt for <b>channel 15, 20 or 25</b> so as not to compete with the channel of the wifi network." link="https://haade.fr/en/blog/interference-zigbee-wifi-2-4ghz-to-know" textlink="Zigbee and Wifi interference" %}

## Multi-protocle and Zigbee2mqtt library

The latest version of the **silabs multi-protocol module** and the **version 2 of Zigbee2mqtt do not allow to work together.**

**There is no point in trying to configure**

{% highlight yaml%}
port: socket://core-silabs-multiprotocol:9999 ou port: tcp://core-silabs-multiprotocol:9999
adapter: ember ou ezsp
{% endhighlight %}

> Unfortunately the **Zigbee2mqtt library is non-functional** in Multi-Protocol mode

{% picture posts/{{ page.guid }}/erreur-zigbee2mqtt-silabs-multi-protocole.png
 --alt Error installing multiprotocol zigbee and thread for zigbee2mqtt in home assistant --img width="940" height="446" %}

## Conclusion

If you follow the installation process well **you will have managed to make it work on a single key** in this case the Skyconnect in **multi-protocol Silabs Zigbee/Thread/Matter** mode, without too much difficulty and you will be able to run a panel of Thread and Zigbee modules. **However, this is an experimental mode, it should be used with caution**, and everything is not perfect yet.

{% include product-embed.html image="nabu-casa-dongle-usb-zigbee-30-connect-zbt-1-skyconnect-pour-home-assistant.png" title="Zigbee Key and Thread ZBT 1 Skyconnect" brand="Nabucasa" description="Nabu Casa Home Assistant key compatible with Zigbee or Thread" domlink="box-domotique/7188-nabu-casa-dongle-usb-zigbee-30-connect-zbt-1-pour-home-assistant-0860011789710.html" %}




