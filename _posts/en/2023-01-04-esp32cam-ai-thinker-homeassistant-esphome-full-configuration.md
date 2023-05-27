---
guid: 36
title: "Esp32-cam Ai Thinker and homeassistant"
description: "Complete and easy installation of the Esp32-cam Ai-thinker camera in homeassistant via esphome"
layout: post
author: Nico
date: 2023-01-04 12:33
last_modified_at: 
categories: [Automation, Security]
tags: []
image: 'integration-esp32cam-esphome-homeassistant-en.png'
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
  - https://esphome.io/components/esp32_camera.html
  - https://www.studiopieters.nl/esp32-cam-troubleshooting/
---

Why start this article when there are already plenty of others. First, I realized that the other articles or forum topics are all incomplete or poorly explained when it comes to full integration into Homeassistant. Secondo as one of the next articles will have as integration an esp32-cam microcamera in a light, I had to explain this integration first.

# Prerequisites
- Homeassistant with Esphome
- An Esp32-cam Ai Thinker classic
- an [FTDI connector]({% post_url /en/product/2021-05-19-module-de-conversion-usb-uart-ft232 %})

{%- include alert.html type="help" text="If this is your first integration and you don't have FTDI connectors, you can buy the esp32-cam camera with usb connection, this is the ch340 version." link="https://s.click.aliexpress.com/e/_DmTiKkr" textlink="Esp32-cam ch340g" %}

{% include product-embed.html guid="2133" %}

# ESP32-cam connection diagram on FTDI

The one and only connection to follow to flash the chip the first time. **Don't forget to put the jumper on 5v**.
> Before connecting to the usb port, I usually **hold the reset button on the esp32 modules** and release once the module is plugged into the pc.

{% picture posts/{{ page.guid }}/connection-esp32-cam-ai-thinker-with-ftdi-cavalier3v3.jpg --alt esp32-cam connection with ftdi programmer via usb --img width="756" height="381" %}

|ESP32-CAM|FTDI Programmer|
|---------|---------------|
|**GND**{: .black}|**GND**{: .black}|
|**5V**{: .red}|**VCC (5V)**{: .red}|
|**U0R**{: .green}|**TX**{: .green}|
|**U0T**{: .yellow}|**RX**{: .yellow}|
|**GPIO 0**{: .blue} to **GND**{: .black}||

if you **have trouble** here is [a complete and fair article](https://www.studiopieters.nl/esp32-cam-troubleshooting/){: target="_blank"} on how to do it **(in English)**

# Before getting to the heart of the matter

The two links below allowed me to set up the camera on esphome
***The first*** for the settings in general, ***the second*** for the exposure of the video and images in order to be able to exploit them under HA or via an NVR.

1. [Esphome 32cam](https://esphome.io/components/esp32_camera.html){: target="_blank"}
2. [Esphome 32cam server](https://esphome.io/components/esp32_camera_web_server.html){: target="_blank"}

# First Flash

First step connect the FTDI to the homeassistant onboard computer

{%- include alert.html type="info" text="Before connecting to the usb port, I usually <b>hold the reset button on the esp32 modules</b> and release once the module is plugged into the pc." %}

Then go to the Esphome tab and click on the green New Device button
1. Name the camera
2. at the installation stage click on **SKIP THIS STEP**
3. choose the board, pick specific board > Ai Thinker ESP32-CAM
4. install > Plug into the computer run Dashboard
5. **Copy the API key** you will need it when configuring the camera in home assistant.

# Complete file to import into esphome

The gist below is complete, you will of course have to customize the names, API, OTA and WIFI keys

## Explanation of lines

- from line 37 to 49: Exposing the GPIO ports of the esp32-cam
- from 53 to 60: image/video settings
- from line 64 to 68 server settings
- line 70 to 72 setting on homeassistant time
- line 76 to 78 flash light support
- line 80 to 84 support for the red led (wifi status report)
- line 86 to 94 added switch to control the lights
- line 96 to 101 display quality signa wifi
- line 103 to 108 display esphome version
- line 110 to 112 added camera restart button

{% gist 3eb516ff987528c414b5bb273dc48fc3 %}

# Integration and configuration in Home-Assistant

Once integrated into Esphome, you still need to configure the camera in homeassistant, nothing could be simpler, just go to **Settings** > **Devices and services**, then at the top left will appear an esphome tab at configure like the picture below.

{% picture posts/{{ page.guid }}/home-assistant-configuration.png --alt esp32 camera setup in homeassistant --img width="281" height="320" %}

**when configuring two more steps to follow:**

1. there will be an **add node** request
2. after validation you will have to **enter the api key** that you will have copied previously finally if you have followed the steps of the tutorial correctly.

## Esp32-cam rendering in Home-assistant

Looking at the integration below we have:

- control and status of the two lights
- the camera sensor
- restarting the esp32-cam camera
- diagnostic information

{% picture posts/{{ page.guid }}/rendu-homeassistant.png --alt full camera render esp32-cam in homeassistant --img width="940" height="857" %}

# Conclusion

For 6€ to have a miniature camera integrated at this point in homeassistant thanks to esphome, I say hat, you can go for it, the Esp32 and Esp8266 modules are really modules to buy, test and integrate into everyday life, in a future article I will present an esp32-cam integrated into a parking light bollard, a spycam without a doubt 😜.


{% include product-embed.html guid="2133" %}

