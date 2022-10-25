---
guid: 7
title: 'Esphome and Homeassistant integrations'
date: '2021-05-11T14:28:47+00:00'
last_modified_at:
author: Nico
categories: [Automation, Haade-lab, Home-Assistant]
layout: post
image: esphome-logo-haade-homeassistant.png
tags:
description: "Discovery of esphome in homeassistant"
locale: en_GB
published: true
sitemap:
  changefreq: #always hourly daily weekly monthly yearly never
  exclude: #'yes' or 'no'
  priority: #between 0.0 to 1.0, 1.0 high priority
  lastmod: # date to end modification
beforetoc:
toc: true
comments: true
redirect_from:
  - /en/blog/home-automation-smarthome-jeedom-homeassistant/protocoles/esphome-et-homeassistant
---

ESPHome is a program injection system to control your ESP8266 / ESP32 wifi modules with simple but powerful configuration files and control them remotely via home automation systems such as Homeassistant.

Moreover, the company Nabu Casa, which owns the Homeassistant program, acquired the esphome program in March 2021. link of relevant article: [acquired esphome by homeassistant](https://www.home-assistant.io/blog/2021/03/18/nabu-casa-has-acquired-esphome/){:target=" _blank"}

Thanks to the integration in Esphome's Homeassistant it is now very easy to inject a file into the esp8266/esp32 wifi module and to control it, the first injection is done by usb using a UART/USB FT232 adapter available here, and allowing the module to be connected via the 3.3/5v, Gnd, Rx/Tx and Tx/Rx connectors.

### Facility:

> You can find the installation in English on esphome.io:
[https://esphome.io/guides/getting\_started\_hassio.html](https://esphome.io/guides/getting_started_hassio.html){:target="_blank"}

Nothing could be simpler in homeassistant (hassio), **tab** Supervisor &gt;&gt;&gt; Shop additional modules search for **esphome** and install it. There is nothing to touch in the configuration tab of the module, once installed, do not forget to select **Show in the sidebar.** In order to be able to control the injection.

![install esphome in homeassistant]({{ site.baseurl}}/assets/images/posts/{{ page.guid }}/esphome-install.webp{{ cachebuster }}){: width="820" height="421"}

## Use:

Now all you have to do is press the little ******** at the bottom right and follow the steps:

- 1 – give a name to the file (in miniature and without space)
- 2 – choose the platform corresponding to the chip available on your printed circuit
- 3 – fill in the coordinates of your wifi in the local network **2.4Ghz** (ota not mandatory)
- 4 – finish

![add esphome module in homeassistant]({{ site.baseurl}}/assets/images/posts/{{ page.guid }}/esphome-ajout.webp{{ cachebuster }}){: width="820" height="466"}


animated gif when adding a module in esphome Now you have to integrate the inputs (relay, contactor, optocoupler, led, etc.), you can find a lot of them on the esphome.io site

- in devices: [esphome.io/#devices](https://esphome.io/#devices){:target="_blank"}
- in diy [do it yourself:](https://esphome.io/guides/diy.html){:target="_blank"}

> There is plenty to have fun at low prices, now all that remains is to refine the injections according to the modules purchased.
