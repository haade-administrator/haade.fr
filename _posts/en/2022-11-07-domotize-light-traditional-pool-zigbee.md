---
guid: 27
title: "Simply automate the switching on of the pool light"
description: "Ewelink offers to 11$ module with zigbee chip that allows us to automate the traditional light of a swimming pool"
layout: post
authors: Nico
date: 2022-11-07 22:00
last_modified_at: 
categories: [Automation, Haade-lab, Home-Assistant]
tags: []
image: 'automate-light-traditional-pool-zigbee-ewelink.jpg'
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
addViews: 3
comments: true
rating:  
---

## Intro

{% include product-embed.html image="1-600x600.jpg" title="1 zigbee 7-32v relay module" brand="Ewelink" description="1 zigbee eweling relay module for 7-32v motor or light automation" affiliate="_DEAPYLZ" %}

Presentation of a small module at 7€ which, without recalling it, is reminiscent of a small [tutorial for domotizing a garage door for 5€]({% post_url /en/2021-05-19-domotize-your-garage-door-for-5€ %}).
The great novelty of this article is the fact that Ewelink produces an equivalent module integrating the Zigbee 3.0 protocol and in addition they ship the RF 433 Mhz available for sale with a remote control for those who want it.

## Prerequisites
- A swimming pool with a traditional bulb (so an old swimming pool 🤪)
- A home automation box under home-assistant
- the Zigbee2mqtt module integrated into HA
- A single relay Ewelink module available here.
- touch a minimum in electricity.

## the advantage of the module

Thanks to its wide spectrum of 5v and 7-32v usb power supply
we can easily automate everything that is controlled by electric motor in the house
- gate motor
- garage door
- pool light
- etc...

It can be controlled without a home automation hub thanks to the radio frequency and the remote control (optional).

## Connector diagram

- AC-DC relay 30v-230v
- 5v micro usb power supply
- 7-32v wired power supply
- manual switch button
- pairing button
- operating and relay LEDs
- RF-433Mhz antenna

{% picture posts/{{ page.guid }}/detail-relais-ewelink-zigbee.jpg --alt ewelink zigbee relay detail --img width="820" height="820" %}

## Recognition in Zigbee2mqtt

The module is recognized as an ewelink zb-sw01 switch and fully functional, it is also compatible with ** Zha, domoticz, jeedom, Tasmota and Deconz **, as much to tell you that you can go for it, moreover you can also turn to this switch in case the relay module is not available.

{% picture posts/{{ page.guid }}/zb-sw01-domotiser-lumière-piscine.png --alt relay recognition in zigbee2mqtt ewelink --img width="939" height="686" %}

[Blkkader compatibility link](https://zigbee.blakadder.com/eWeLink_ZB-SW015.html){: target="_blank"}

## Photo set up

{% picture posts/{{ page.guid }}/integration-module-lumière-piscine-traditionnelle-zigbee-homeassistant-ewelink.png --alt integration of the module in an ip44 box --img width="940" height= "529" %}

By following the diagram above it will be easy to connect in parallel to the light circuit.

## Conclusion
Here is a zigbee module not to be missed to automate everything that works between 7 and 32v such as swimming pool lights, garage door motor, gate motor etc, and all in **ZIGBEE!**{: .red}

{% include product-embed.html image="1-600x600.jpg" title="1 zigbee 7-32v relay module" brand="Ewelink" description="1 zigbee eweling relay module for 7-32v motor or light automation" affiliate="_DEAPYLZ" %}



