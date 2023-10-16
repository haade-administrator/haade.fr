---
guid: 86
title: ""
description: ""
ref: ""
layout: post
author: Nico
date: 2023-10-15 20:16
last_modified_at: 
categories: [Docker, Domotique, Zigbee]
tags: []
image: 'picture.png'
toc: true
beforetoc: ''
published: false
noindex: false
sitemap:
  changefreq: 'monthly'
  exclude: 'no'
  priority: 0.5 #between 0.0 to 1.0, 1.0 high priority
  lastmod:  # date to end modification
locale: fr_FR
comments: true
rating:  
sourcelink:
  - https://community.home-assistant.io/t/itead-sonoff-zigbee-bridge-pro-zbbridge-p-new-cc2652p-and-esp32-based-zigbee-gateway-to-wifi-bridge/378924/22
  - https://jonasled.dev/jonasled/sonoff-zigbee-bridge-pro-esphome/-/blob/master/zigbee_bridge.yaml?ref_type=heads
  - https://github.com/Giancky79/ZB-Bridge-P
---

source:
[Intégration Zbbridge-pro Giancky79](https://github.com/Giancky79/ZB-Bridge-P){: target="_blank"}

{% highlight yaml %}
#GPIO
# 2 = blue led
# 4 = buzzer
# 13
# 14
# 15 = zRST
# 23 = rx zigbee
# 21 = green led
# 22 = boot
# 19 = tx zigbee
# 25 = scl
# 26 = sda
# 27 = button key
# 33

substitutions:
  devicename: sonoffzbbridgep
  friendly_name: zb-bridge-p

wifi:
  ssid: wifi_ssid
  password: wifi_password

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: ${devicename}
    password: ap_password
  
packages:
  remote-packages:
    url: https://github.com/Giancky79/ZB-Bridge-P
    ref: main
    refresh: 0s
    files: [
      esphome/esphome.yaml,
      esphome/binary_sensor.yaml,
      esphome/light.yaml,
      esphome/output.yaml,
      esphome/rtttl.yaml,
      esphome/sensor.yaml,
      esphome/output.yaml,
      esphome/switch.yaml,
      esphome/text_sensor.yaml,
      esphome/uart.yaml,
      esphome/stream_server.yaml,
   ]  

external_components:
  - source: github://oxan/esphome-stream-server
{% endhighlight %}

## Configuration ZHA

{% highlight yaml %}
socket://[your_address_ip]:6638
baudrate: 115200
target: sofware
{% endhighlight %}