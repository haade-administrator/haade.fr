---
guid: 42
title: "automate a virtual 2 way with 2 switch zigbee"
description: "we will simply automate thanks to blueprint and homeassistant a virtual 2 way between 2 single-way zigbee switches"
layout: post
author: Nico
date: 2023-01-29 15:46
last_modified_at: 
categories: [Automation, Home-Assistant, Haade-lab]
tags: []
image: 'automate-a-virtual-back-and-forth-with-blueprint-and-homeassistant.png'
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
  - https://gist.github.com/haade-administrator/f48574f3341c1ec5715dd1726177b05e
---

It is common in France to want to replace its classic switches with zigbee switches. In order to save the cost, it is not to be interested in big brands like **Legrand, Siemens**, etc. We are naturally moving towards Chinese brands such as **Sonoff, or Moes** for example. In this article I will simply show you how to virtually automate an existing back and forth with two classic zigbee switches, in a simple, fast and reliable way thanks to **homeassistant and blueprint**.

# Prerequisites

- 2 zigbee 3.0 compatible switches (Sonoff, Moes free of neutral)
- homeassistant installed
- some notions of electricity.

{% include product-embed.html image="https://ae01.alicdn.com/kf/Sa5aee894221e44ef9d8c22ce8dac2fded/MOES-interrupteur-bouton-poussoir-connect-Tuya-Star-Ring-zigbee-3-0-avec-t-l-commande-fonctionne.jpg_640x640.jpg" title="New Moes Star ring series Zigbee switch" brand="Moes" description="MOES – Tuya Star Ring connected push button switch, zigbee 3.0, with remote control, works with Alexa and Google" affiliate="_DD0tVR9" %}

# 1st step connect the switches

{%- include alert.html type="warning" text="You will have to work in the vicinity of a voltage of 220V which is dangerous if you come into contact with an electrical conductor. Be careful with your handling, if in doubt cut off the power supply." %}

A traditional back and forth is made up of 4 phases
- one goes from the electrical panel to a switch (red)
- from the second switch to the bulb (purple)
- between the two switches two shuttles (orange).

{% picture posts/{{ page.guid }}/schema-va-et-vient-traditionnel.jpg --alt traditional 2 way switch diagram --img width="940" height="438" %}

if you have two single switches with only **one of the two fitted with the phase coming from the panel (red) then it will be necessary to keep one of the two shuttles connected (orange)** and make a bridge from the red neutral in order to bring the neutral to the second switch.

If the two switches have a neutral from the tables **(case of double switches supplying lights from another circuit) then you can remove the two shuttles.**

Personally, I always leave the shuttles in place in the junction box and I equip them with a wago-type connector in order to protect the electrical wires. You never know if one day I decide to go back 👍.

{% picture posts/{{ page.guid }}/schema-va-et-vient-traditionnel-suppression-fils.jpg --alt traditional 2 way diagram with a shuttle removed --img width="940" height="438" %}

# 2nd step import the blueprint

Let's assume that you have correctly connected your switches and that they have been correctly paired to your zigbee network so we can now import the blueprint and configure the two switches.

Below **a gif showing the import steps** of a blueprint in homeassistant.

![step of importing a blueprint in homeassistant]({{ site.baseurl}}/assets/images/posts/{{ page.guid }}/parametrage-blueprint-va-et-vient-virtuel-2-way.webp{{ cachebuster }}){: width="939" height="528"}

Copy this link for blueprint import:

[Blueprint 2 switch](https://gist.github.com/haade-administrator/f48574f3341c1ec5715dd1726177b05e){: target="_blank"}

{% gist f48574f3341c1ec5715dd1726177b05e %}

If everything went well, let's move on to automation:

{% picture posts/{{ page.guid }}/blueprint-2-way-simulate.png --alt create an automation from the imported blueprint--img width="940" height="35" %}

All you have to do is set the two switches in switch 1 and 2 and activate the automation.

{% picture posts/{{ page.guid }}/parametre-blueprint.png --alt simply automation setting --img width="940" height="361" %}

# Bonus

**If you want the blueprint for 3 switches** (which is common) here is the link to paste:

[Blueprint 3 switch](https://gist.github.com/haade-administrator/f551382802c642d24687bfbcd303f0fe){: target="_blank"}

{% gist f551382802c642d24687bfbcd303f0fe %}

And here the link **to connect 4 switches** back and forth:

[Blueprint 4 switch](https://gist.github.com/haade-administrator/8897d84e11d5e505b729d24a535a89e4){: target="_blank"}

{% gist 8897d84e11d5e505b729d24a535a89e4 %}

# Conclusion

Here's a very simple way to automate a back and forth in a virtual, simple, fast and reliable way **without response delay between the two switches** in other words that it's **instantaneous** 😁, the hardest for you if you have no notions of electricity will be to connect the switches correctly.

{% include product-embed.html image="https://ae01.alicdn.com/kf/Sa5aee894221e44ef9d8c22ce8dac2fded/MOES-interrupteur-bouton-poussoir-connect-Tuya-Star-Ring-zigbee-3-0-avec-t-l-commande-fonctionne.jpg_640x640.jpg" title="New Moes Star ring series Zigbee switch" brand="Moes" description="MOES – Tuya Star Ring connected push button switch, zigbee 3.0, with remote control, works with Alexa and Google" affiliate="_DD0tVR9" %}


