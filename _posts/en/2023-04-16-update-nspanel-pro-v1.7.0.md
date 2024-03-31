---
guid: 61
title: "Nspanel Pro V1.7.0 Update"
description: "The days pass and the updates of the Nspanel pro follow one another"
layout: post
authors: Nico
date: 2023-04-16 11:53
last_modified_at: 
categories: [Automation, News]
tags: []
image: 'nspanel-pro-v1.7.0.png'
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
addViews: 35
comments: true
rating:  
sourcelink:
  - https://sonoff.tech/product-review/product-insight/sonoff-nspanel-pro-version-update-information-and-faq/
---

Days go by and **updates follow one another at Itead** focusing on the NSPanel pro. *Barely 1 month* after the previous update The Nspanel pro already brings new features respecting a very specific table. **Congratulations to the team who keeps its commitments to its users!**

{% include product-embed.html image="https://i0.wp.com/itead.cc/wp-content/uploads/2022/07/NSPanel-P_preorder_dim_gray.jpg?fit=1000%2C1000&ssl=1" title="Sonoff Nspanel Pro Controller" brand="Sonoff" description="Sonoff Nspanel Pro controller with zigbee 3.0 and integrated wifi" affiliate="_DCgKVON" domlink="objets-connectes/6625-sonoff-interrupteur-mural-noir-zigbee-30-nspanel-pro.html" iteadlink="sonoff-nspanel-pro-smart-home-control-panel" %}

# Message from the manufacturer Itead

Dear clients,
We are excited to announce the release of version 1.7.0 for NSPanel Pro and **NSPanel Pro HTTP API documentation** for custom integrations or automation workflow developments. Since launching the NSPanel Pro, **we have been encouraged** by the positive feedback and suggestions we have received from our customers. In our initial product description, **we outlined our future plans**, which included features such as power consumption, temperature and humidity graph, and call intercom. **We are pleased to report that we have progressively delivered on our promises and implemented key planned features.**

{% picture posts/{{ page.guid }}/nspanel-pro4.png --alt planning stage for updates since the creation of the NSPanel Pro --img width="940" height="1193" %}

# Table of updates 2023

According to the version update table Itead has now reached the **Q2** level of 2023 updates. According to the table within 1 month we should be able to update to a **V1 version .8.0 level Q3** integrating a Zigbee network card. And then the integration of Matter in the operating diagram, to see!

{% picture posts/{{ page.guid }}/NSPanel-feature-plan.png --alt Nspanel pro year 2023 update plan --img width="940" height="528" %}

# New in V1.7.0

1. Support **display temperature and humidity** data from other temperature sources on main screen.
2. Support for **always-on display** - Set auto-lock "Never" in "Settings-Display".
3. Supports **Homebridge**, allowing you to sync Zigbee sub-devices in NSPanel Pro with Homebridge and control them in the Home app.
4. Supports **Node-RED**, allowing you to manage and control devices via "nodes" and "streams".
5. Supports switching between **24 hour and 12 hour** formats.
6. **Added 6 new languages:** Afrikaans, Czech, Hungarian, Slovenian, Vietnamese and Thai.

# Api NSpanel Pro

[https://sonoff.tech/nspanelpro-api/](https://sonoff.tech/nspanelpro-api/){: target="_blank"}

**Finally an interesting news**, Itead has published a **complete API documentation for NSpanel Pro**, it will allow us to integrate Zigbee modules not supported by Sonoff.

> Which in my opinion is the big black point of this module for the moment

[https://sonoff.tech/nspanelpro-api/](https://sonoff.tech/nspanelpro-api/){: target="_blank"}


{% include product-embed.html image="https://i0.wp.com/itead.cc/wp-content/uploads/2022/07/NSPanel-P_preorder_dim_gray.jpg?fit=1000%2C1000&ssl=1" title="Sonoff Nspanel Pro Controller" brand="Sonoff" description="Sonoff Nspanel Pro controller with zigbee 3.0 and integrated wifi" affiliate="_DCgKVON" domlink="objets-connectes/6625-sonoff-interrupteur-mural-noir-zigbee-30-nspanel-pro.html" iteadlink="sonoff-nspanel-pro-smart-home-control-panel" %}

# Conclusion

The NSPanel pro updates are regular and this is a very positive point which makes this control module stand out from the competition, I am thinking of the modules developed by Xiaomi and Moes. The opening of an API documentation for the NSPanel Pro is more than welcome, because thanks to this API we will be able to participate in the evolution of updates by integrating third-party Zigbee modules. **However, I remain attentive to the integration of Matter which, in my opinion, is possible but as [stated in a previous post]({{ site.baseurl }}/{{ page.locale | slice: 0,2 }}/blog/zb-dongle-p-vs-zb-dongle-e-zigbee-sonoff#compatibility-with-matter){: target="_blank"} could not work at the same time as Zigbee!**

