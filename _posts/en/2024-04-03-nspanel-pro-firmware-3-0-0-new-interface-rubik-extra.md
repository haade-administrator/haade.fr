---
guid: 117
title: "Nspanel Pro 3.0 Rubik Design Update"
description: "Presentation of Rubik the new user interface of Nspanel Pro for a new experience takes areas of Rubik's cube."
ref: "NSPanel Pro"
layout: post
authors: [Nico]
date: 2024-04-03 18:00
last_modified_at: 
categories: [News, Zigbee]
tags: []
image: 'nspanel-pro-firmware-upgrade-v3-0-0-rubik-design.png'
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
  - https://sonoff.tech/nspanelpro-api/
  - https://sonoff.tech/product-review/product-insight/sonoff-nspanel-pro-version-update-information-and-faq/
  - https://itead.cc/product/sonoff-nspanel-pro-smart-home-control-panel/ref/122/
---

Sonoff evolves the user interface (UI) of {{ page.ref }}, version 3.0.0 integrates **Rubik** an interface module which **opens up the fields of possibility** for you. The company continues to upgrade the firmware of Zigbee modules, and this proves that **this company is serious**.

> Rubik was certainly inspired by the famous game Rubik's cube, the grid interface is a full reference to it.

{% picture posts/{{ page.guid }}/capture-ewelink-nspanel-pro-v-3-rubik-interface-choix-du-theme-affichage-multi-possibilites.png --alt Changing the main Rubik theme on the NSPanel Pro --img width="369" height="800" %}

> I must say that having tested it, this new interface is easy to set up.

{% include product-embed.html image="https://i0.wp.com/itead.cc/wp-content/uploads/2022/07/NSPanel-P_preorder_dim_gray.jpg?fit=1000%2C1000&ssl=1" title="Sonoff Nspanel Pro controller" brand="Sonoff" description="Sonoff Nspanel Pro controller with zigbee 3.0 and integrated wifi" affiliate="_DCgKVON" domlink="high-tech/6625-sonoff-nspanel-pro-black-zigbee-30-wall-switch.html" iteadlink="sonoff-nspanel-pro-smart-home-control-panel" %}


## Rubik interface on {{ page.ref }}

Below I took screenshots of the old interface with the default theme, with **on the 3rd** image a screenshot of the Sonoff startup {{ page.ref }}, * *when in the 4th** image it shows an extended page with a module installed but disabled in the upper left corner.

{% picture posts/{{ page.guid }}/capture-ecran-nspanel-pro-rubik-v-3-0-0-ancienne-interface.png --alt Screenshot of the old interface with the main Rubik theme installed on the NSPanel Pro --img width="940" height="529" %}

*Here we have to deal with the new interface,*

1. 1st image shows **default theme**
2. the second image a **Rubik theme** with modules installed around the edge
3. the 3rd shows the change of the **setting page on a transparent background**
4. The last one is a different theme with mainly the **reminder** tab which will allow you to display a message from the phone.

{% picture posts/{{ page.guid }}/capture-ecran-nspanel-pro-rubik-v-3-0-0.png --alt Screenshot with new interface of main Rubik theme on NSPanel Pro --img width="940" height="529" %}

## Ewelink settings {{ page.ref }}

On capturing [the Ewelink app](https://play.google.com/store/apps/details?id=com.coolkit&hl=fr&gl=US){: target="_blank"} below you will see **3 new tabs:**

1. Theme Setting
2. Management of additional pages (extension, settings)
3. Setting **written reminders** with options (reminder)

{% picture posts/{{ page.guid }}/capture-ewelink-nspanel-pro-v-3-rubik-interface.png --alt Ewelink capture update NSPanel Pro v3.0.0 --img width="940" height="1018" %}

Already **present on the previous version** of the firmware you will be able to change the **Zigbee mode**.

> so at first glance it could be really nice but it's not.

Already if you change mode you have to go through a **reset of all parameters**
**Hub mode** allows you to use the {{ page.ref }} as a zigbee coordinator.
**router mode** allows the NSPanel to be controlled by another coordinator like Zigbee2Mqtt.

> but at present no information comes from {{ page.ref }} **in Z2M so no use**.

{% picture posts/{{ page.guid }}/capture-ewelink-nspanel-pro-v-3-rubik-mode-zigbee-router-hub.png --alt Ewelink capture update NSPanel Pro v3.0.0 mode zigbee hub or router --img width="940" height="1018" %}

In the image below access to **additional screen settings and Reminder**.

The additional screen will allow you to create other pages with various modules to control. These pages can be configured to be accessible from **a password** which is super practical.

The reminder screen allows you to **write a text when you call** you can simply send it and add either:

- **high priority** which will display a popup on the entire NSPanel Pro screen
- or send **as a notification** to click which will send you to the popup.

{% picture posts/{{ page.guid }}/capture-ewelink-nspanel-pro-v-3-rubik-mode-extented-reminder.png --alt Ewelink capture update NSPanel Pro v3.0.0 extended screen settings and reminder --img width="940" height="1018" %}

Finally I created an animated navigation gif on the **Ewelink** application, like that, you will avoid any questions about the operation of Sonoff {{ page.ref }} v3.0.0.

![Navigation on Ewelink for Rubik nspanel pro v3.0.0 settings]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/nspanel-pro-v3-ewelink-rubik.webp{{ cachebuster }}){: width="388" height="690"}

## Updated from version 2.2.0

### V3.0.0（Mar. 15th, 2024）

1. **New UI design.** Support customizing the layouts and widgets of the home screen
2. **Devices and scenes** can be set on the same extended screen
3. Support two-way call with CAST App
4. Support **adding Matter Light Switch and Matter Color Temperature Light**
5. Boot animation updated

### V2.4.0（Jan. 16th, 2024）

1. Support **adding Matter bridges**, and you can sync switch devices under the bridge to NSPanel Pro.
2. New language added: **Latviešu**

### V2.3.0（Dec. 12th, 2023）

1. Support switching the temperature unit of thermostat, you can set it for **℃ or℉** in the App. 
2. Support **adding Matter light devices**.
3. When the Bluetooth function is turned on, the **Bluetooth icon will be displayed** in the upper right corner of the screen.

{% include product-embed.html image="https://i0.wp.com/itead.cc/wp-content/uploads/2022/07/NSPanel-P_preorder_dim_gray.jpg?fit=1000%2C1000&ssl=1" title="Sonoff Nspanel Pro controller" brand="Sonoff" description="Sonoff Nspanel Pro controller with zigbee 3.0 and integrated wifi" affiliate="_DCgKVON" domlink="high-tech/6625-sonoff-nspanel-pro-black-zigbee-30-wall-switch.html" iteadlink="sonoff-nspanel-pro-smart-home-control-panel" %}

## Conclusion

The **Rubik theme** of the new firmware v3.0.0 of {{ page.ref }} is sincerely **a success** which allows you to easily control the modules of the Sonoff environment. If you decide to equip yourself **exclusively with this brand** then the Sonoff {{ page.ref }} **is made for you**. Honestly, all that's missing is Sonoff's **Cube** environment.

> Which would make this screen compatible with other brands so you could have a centralized installation and WAF, but for the moment this is not the case, maybe it will become so!
