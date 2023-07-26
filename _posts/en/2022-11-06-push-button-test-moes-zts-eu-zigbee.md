---
guid: 26
title: "Moes Push Button Zigbee Switch Test ZTS-EU"
description: "After testing the Moes touch switch, for personal reasons I ordered the same push button"
layout: post
author: Nico
date: 2022-11-06 18:11
last_modified_at: 
categories: [Tests, Automation, Zigbee]
tags: [Tests, Moes, Zigbee]
image: 'interrupteur-moes-zigbee-zts-eu-2-gang-test.png'
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
addViews: 46
comments: true
rating: 3.8
---

For continuity here is a quality test of the Moes tactile button switch also named Zts-eu this is a push button, moreover it bears the same name as the test done previously with the tactile switch of the same brand you can consult the test: [test zts-eu tactile by Moes]({% post_url /en/2021-03-17-test-moes-switch-zigbee-tactile-zts-eu-upgrade-2020 %}).

## Prerequisites:

- Home assistant installed with version 2021.8.0 minimum
- Zigbee2mqtt in version 1.24.0 of March 2022

{% include product-embed.html image="zigbee-smart-wall-light-switch-with-neutral-wire-or-no-neutral-wire-wiring-no-capacitor-needed.jpg" title="zigbee push button switch moes from 1 to 3 switches" brand="Waveshare" description="Moes zts-eu brand push button switch" affiliate="_DDzDn7v" %}

{%- include alert.html type="info" text="Since the 1-push button version no longer has the same reference, it is generally called ZS-EUB, it is possible that ZTS versions are still in circulation. In short, the 1 gang ZS-EUB version was supported a while ago ** you have to put zigbee2mqtt in version 1.28.0 ** which dates from October 2022." link="" textlink="" %}

## Connecting the push button

The Moes range offers all of its switches with a neutral connection, but it is not mandatory without a neutral connection, the phase alone allows the LEDs to operate without the need to add an additional resistor.

{% picture posts/{{ page.guid }}/branchement-interrupteur-moes-zigbee-zts-eu-bouton-poussoir.jpg --alt switch push button --img width="820" height="820" %}

> Like any zigbee module connected to the mains, the router/repeater function is activated when this module is connected with the neutral, *however in zigbee2mqtt this is not the case, is this a bug!! for my part, the meshes are so dense that I have not encountered any problems.*

## Product Features

|Operating voltage:| AC100-250V, 50/60Hz|
|Type of current:| 10A total|
|Inductive load (LED/CFL):| 3-120W|
|Resistive load (incandescent):| 3-300W for 110V; 3-600W for 220V|
|Wireless Type:| 2.4GHz Wi-Fi/ZigBee|
|Power consumption:| ≤ 0.5W|
|Support system:| Android\iOS|

## Quick presentation video

In the video below, a quick presentation of the operation of the push button to get an idea of the quality of the materials.

{% include videoPlayer.html youtubeId="s00Nmu8DW5s" %}

> **For the price the quality is there** I would say it's a bit below Legrand switches, however for the same price you can buy 2 to 3 switches.

## Integration in Homeassistant with zigbee2mqtt

integration is done without worries, integration is done by pressing a push button for 5 seconds until it flashes.

{% picture posts/{{ page.guid }}/intégration-zts-eu-moes-zigbee2mqtt.png --alt integration Moes push button switch in homeassistant-zigbee2mqtt --img width="952" height="70" %}

### Zigbee2mqtt Link
[feature of integration in zigbee2mqtt](https://www.zigbee2mqtt.io/devices/ZTS-EU_2gang.html){: target="_blank"}

{% picture posts/{{ page.guid }}/intégration-zts-eu-moes-zigbee2mqtt-fonction-expose.png --alt moes push button switch setting in homeassistant --img width="952" height="601" %}

- **indicate_light**: allows to choose the position of the led lighting (important command especially if it is installed in a room)

## Important

Currently the moes zts-eu switches are not recognized as a **router in zigbee2mqtt but as enddevice** when they are connected with the neutral

{% picture posts/{{ page.guid }}/intégration-zts-eu-moes-zigbee2mqtt-4.png --alt bug switch not recognized as router when neutral is connected --img width="329" height="269" %}

## Bonuses

A simple automation in home-assistant in order to automate the operation of a classic remote control, then it works perfectly, *but be careful all the same in case of operation because the remote control could remain in the open position and burn.*

{% highlight yaml %}
alias: double clic télérupteur entrée
description: "automatisation sur télérupteur"
trigger:
  - platform: device
    type: turned_on
    device_id: e00698412e7acb9a7e80c908e862c08f
    entity_id: switch.inter_entree_l1
    domain: switch
condition: []
action:
  - type: toggle
    device_id: e00698412e7acb9a7e80c908e862c08f
    entity_id: switch.inter_entree_l1
    domain: switch
mode: single
{% endhighlight %}

## In conclusion

Sold between 20 and 25€ these switches do the job, they fit perfectly into round junction boxes of the European type, the plastic is of good quality, perhaps lacks a bit of thickness, the fact of being able to configure the leds, the simplicity of connection as well as the constancy of the mesh thanks to the zigbee 3.0 makes it a good product.







