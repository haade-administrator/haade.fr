---
guid: 90
title: "NSPanel controls your home easily"
description: "Thanks to Home Assistant, Esphome, and the Blackymas repository, you can easily configure and control the Sonoff NSPanel at a lower cost. Makes every room intuitive and eliminates remote controls."
ref: "NSPanel"
layout: post
author: Nico
date: 2023-11-03 12:06
last_modified_at: 
categories: [Haade-lab, Tests]
tags: []
image: 'control-nspanel-blueprint-home-assistant-blackymas.png'
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
rating: 4.8 
sourcelink:
  - https://www.domomat.com/61791-ecran-tactile-couleur-capacitif-41-knx-zennio-zviz40a-anthracite-zennio-zviz40a.html?gclid=Cj0KCQjwtJKqBhCaARIsAN_yS_mEVUwHizDLA_kXxlf58Zk8PHiNM5nSBS2ysSF5w1TpziFhP8NkSwEaAt5yEALw_wcB
  - https://itead.cc/product/sonoff-nspanel-smart-scene-wall-switch/ref/122/
  - https://github.com/Blackymas/NSPanel_HA_Blueprint
---

Not long ago I had the opportunity to visit a new school, this one, as you can imagine, is fully equipped with the **knx protocol**. At the entrance to each class a **digital screen the size of an NSPanel controls all the equipment** (lights, shutters, heating).

{% picture posts/{{ page.guid }}/nspanel-controle-gestion-home-assistant-blueprint-github-blackymas.png --alt nspanel control and configuration with homeassistant esphome and blueprint thanks to the blackymas github repository --img width="940" height="529" %}

With an intuitive display but not too elaborate. When I got home and out of curiosity I looked at the price of such equipment and there I was shocked, **€305 for the Zennio touch screen** at [domomat](https://www.domomat.com/61791-ecran-tactile-couleur-capacitif-41-knx-zennio-zviz40a-anthracite-zennio-zviz40a.html?gclid=Cj0KCQjwtJKqBhCaARIsAN_yS_mysoxT-9LObWx5DgIv0aWkKWDYBfmzagr4HXdLGoKIgpc10omSnYIaAot4EALw_wcB){: target="_blank"}. 

{% picture posts/{{ page.guid }}/ecran-tactile-zennio-z35-knx.png --alt knx Zennio touch screen --img width="940" height="361" %}

> It has one more thing than the NSPanel the motion sensor for switching on the interface.

But on the other hand, it does not have physical switches which can be very practical for controlling lights, especially for us, simple users.

> There you say to yourself why isn't he talking about the NSPanel Pro which is closer to the Zennio than the NSPanel.

I find the [**NSPanel Pro much too restricted**]({% post_url en/2023-03-10-unboxing-test-and-installation-sonoff-nspanel-pro %}) and it is currently difficult and time consuming to transform the NSPanel Pro even under HA in order to have a WAF interface. **Also, the fact of running Android leaves me more than perplexed.**

> Thanks to Domadoo for this loan without them I would not have been able to test the {{ page.ref }}

{% include product-embed.html image="https://ae01.alicdn.com/kf/S9242a718ab714f0496e47c63c258156e9/SONOFF-panneau-de-commande-pour-maison-connect-e-NSPanel-Pro-avec-cran-tactile-TFT-3-95.jpg_640x640.jpg_.webp" title="Sonoff NSPanel" brand="Sonoff" description="Nspanel wifi wall switch" iteadlink="sonoff-nspanel-smart-scene-wall-switch" domlink="objets-connectes/5985-sonoff-interrupteur-mural-nspanel-smart-scene-eu.html" affiliate="_DdoJuth" %}

The {{ page.ref }} is sold for **average €60** on the official website **Itead or Aliexpress**, for **Domadoo** you have to wait for promotional offers to find it at the same price otherwise it you will have to pay **73€**, so I advise you to wait if you want to order it from this reseller.

The idea, as you can imagine, is to reproduce the same thing with an **NSPanel and all that for €60-70**, all controllable under home assistant. Well on the one hand it is largely doable and in a simple and intuitive way. How, thanks to Blueprint and the [Blackymas repository](https://github.com/Blackymas/NSPanel_HA_Blueprint){: target="_blank"}.

There is another [repository created by joBr99](https://github.com/joBr99/nspanel-lovelace-ui){: target="_blank"} interesting for NSPAnel, I did not select it because I find the Less interesting integration because it is done by Lovelace using additional Cards.

In addition the [Blackymas repository](https://github.com/Blackymas/NSPanel_HA_Blueprint){: target="_blank"} compared to the [repository created by joBr99](https://github.com/joBr99/nspanel- lovelace-ui){: target="_blank"} has a better interface (in my opinion), and now exceeds the [number of followers](https://github.com/Blackymas/NSPanel_HA_Blueprint/stargazers){: target = "_blank"}, for a newer repository.
> We can say that he is on the rise.

## How it works

Normally, to modify the display of the NSPanel according to your wishes, you have to get your hands dirty and use [Nextion's HMI editor](https://nextion.tech/nextion-editor/#_section2){: target ="_blank"}. Blackymas to create a complete modifiable HMI Interface by configuring the Blueprint. No need to use editors anymore. except if you want to change the wallpaper for example.

### Set up

First you have to **import the Blueprint** into HA, then you have to import **the tft file** into the HA configuration and finally **configure** the NSPanel in Esphome.

You will find all the [documentation at this address](https://github.com/Blackymas/NSPanel_HA_Blueprint/wiki/(EN)-First-Steps---Installation-and-Setup){: target="_blank"}

## Video installation and configuration of {{ page.ref }}

{% include videoPlayer.html youtubeId="jpSTA_ILB8g?si=4qd8jjwo-LGACG6s" %}

## Advantage of Esphome firmware

I see two big advantages of integrating the Esphome firmware for the {{page.ref}}:
- the integration is 100% Home assistant compatible
- esphome is very intuitive
- Esphome allows you to make each integration a Wi-Fi connection sharing via hotspot

> The disadvantage of NSPanel is that it works with the Wifi protocol but Esphome is there to improve the connections.

## Advantage of the Blueprint

The blueprint provided can be confusing given the number of settings available, but once you've looked around, **it's so gratifying to make a change and see that after saving and almost instantly the interface update on the NSPanel.**

![Options blueprint Nspanel github blackymas]({{ site.baseurl }}/assets/images/posts/90/blueprint-option-nspanel-blackymas.webp{{ cachebuster }}){: width="620" height="320"}{: target="_blank"}

## What does the Blackymas repository allow you to control?

Recently, **almost everything**, thanks to [Edwardtfn](https://github.com/Blackymas/NSPanel_HA_Blueprint/commits?author=edwardtfn){: target="_blank"} who continues to develop this interface for the greater user pleasure.

{% picture posts/{{ page.guid }}/affichage-accueil-nspanel-blackymas-controle-lumiere.png --alt nspanel home display blackymas by blueprint and light control --img width="940" height="529" %}

1. the buttons (physically or virtually).
2. know the weather
3. control the scenes
4. air conditioning or **heating**
5. QRcode integration (ideal for guest wifi connection)
6. controls the **switches**
7. light
8. ambient temperature (NSPanel probe)
9. the **shutters**
10. the **media**
11. display and configuration of the NSPanel screen
12. displaying all the information available in HA
13. the alarm in a simple and intuitive way

Soon the [NSPanel will](https://github.com/Blackymas/NSPanel_HA_Blueprint/issues?q=is%3Aopen+is%3Aissue+label%3Aroadmap){: target="_blank"}:

1. Show consumption
2. Show an improved notification system
3. control multiple alarms
4.etc...

{% picture posts/{{ page.guid }}/affichage-parametrage-nspanel-climatisation-qrcodewifi-github-blackymas-blueprint.png --alt nspanel display configuration, qrcode and air conditioning in management --img width="940" height="529" %}

## {{ page.ref }} in picture

*And one with a little imagination...*

Thanks to **Home Assistant and the NSPanel** you could easily control the light, the heating, the shutters, the media in each room, more particularly in each bedroom, with a single NSPanel, **it's a dream but so simple to do. **

{% include product-embed.html image="https://ae01.alicdn.com/kf/S9242a718ab714f0496e47c63c258156e9/SONOFF-panneau-de-commande-pour-maison-connect-e-NSPanel-Pro-avec-cran-tactile-TFT-3-95.jpg_640x640.jpg_.webp" title="Sonoff NSPanel" brand="Sonoff" description="Nspanel wifi wall switch" iteadlink="sonoff-nspanel-smart-scene-wall-switch" domlink="objets-connectes/5985-sonoff-interrupteur-mural-nspanel-smart-scene-eu.html" affiliate="_DdoJuth" %}

## Conclusion

This is a **presentation that is worth a detour** and thus allows you to easily control all the home automation components in your home via a touch interface, like KNX but 6 times less expensive. Thanks to Home Assistant and Esphome for being able to make this kind of dream come true and **go and equip yourself with** [**NSPanel**](https://www.domadoo.fr/fr/objets-connectes/5985-sonoff-interrupteur-mural-nspanel-smart-scene-eu.html?domid=39){: target="_blank"}.