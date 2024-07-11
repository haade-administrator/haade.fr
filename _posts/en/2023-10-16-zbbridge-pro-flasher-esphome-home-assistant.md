---
guid: 86
title: "Hack Sonoff Zbbridge-pro and Esphome"
description: "How to easily hack the Sonoff Zbbridge-pro easily on Esphome and Home-Assistant and make it a Zigbee, wifi and Bluetooth remote control"
ref: "ZBbridge-pro"
layout: post
authors: Nico
date: 2023-10-15 20:16
last_modified_at: 
categories: [Haade-lab, Zigbee]
tags: []
image: 'hack-sonoff-zbbridge-pro-esphome-home-assistant-remote-zigbee-key-wifi-bluetooth.png'
toc: true
beforetoc: ''
published: true
noindex: false
sitemap:
  changefreq: 'weekly'
  exclude: 'no'
  priority: 0.8 #between 0.0 to 1.0, 1.0 high priority
  lastmod:  # date to end modification
locale: en_GB
comments: true
rating: 4.0
sourcelink:
  - https://community.home-assistant.io/t/itead-sonoff-zigbee-bridge-pro-zbbridge-p-new-cc2652p-and-esp32-based-zigbee-gateway-to-wifi-bridge/378924/22
  - https://jonasled.dev/jonasled/sonoff-zigbee-bridge-pro-esphome/-/blob/master/zigbee_bridge.yaml?ref_type=heads
  - https://github.com/Giancky79/ZB-Bridge-P
  - https://itead.cc/product/sonoff-zigbee-bridge-pro/ref/122/
---

It no longer needs to be presented, already two years since the **Sonoff {{ page.ref }}** was released, it is an all-in-one control gateway (zigbee-wifi-bluetooth), exclusively dedicated to products from the Sonoff brand. But thanks to this tutorial you will be able to **use it with ZHA or Zigbee2mqtt**. You will find several discussions on the internet that will allow you to make **{{ page.ref }}** work in Home Assistant, **but by installing Tasmota firmware**. After some research I was able to hack the {{ page.ref }} directly with Esphome Firmware and thus make **the Zigbee cc2652 key work with ZHA or Zigbee2mqtt** all very easily.

{% include product-embed.html image="https://i0.wp.com/itead.cc/wp-content/uploads/2022/04/Zigbee-bridge-pro.jpg?fit=1000%2C1000&ssl=1" title="ZBBridge Pro" brand="Sonoff" description="Zigbee 3.0 cc2652p remote gateway, wifi and bluetooth" iteadlink="sonoff-zigbee-bridge-pro" domlink="peripheriques/6321-sonoff-box-domotique-zigbee-30-wifi-pro.html" %}

## Prerequisites
- Home-assistant installed
- Esphome installed
- [usb uart ft232 conversion]({% link _products/{{ page.locale | slice: 0,2 }}/2021-05-19-module-de-conversion-usb-uart-ft232.md %}){: target="_blank"} module

## Presentation of {{ page.ref }}

Thanks to Itead for providing me with this module, you will see that the {{ page.ref }} has completely ordinary packaging in the emblematic colors of the Sonoff brand. No frills, instructions, a USB cable and a micro-module {{page.ref}}.

{% picture posts/{{ page.guid }}/presentation-sonoff-passerelle-zbbridge-pro-esphome-home-assistant.png --alt presentation of the Sonoff {{ page.ref }} and presentation of the printed circuit --img width="940" height="529" %}

This Sonoff gateway {{ page.ref }} costs between 20 and 30 euros, **it has the advantage of being able to use wifi, bluetooth and Zigbee 3.0, which makes it an all-in-one mini gateway* *.

> Let's not waste time and move on to the Hack.

## Esphome code injection

As written above, this tutorial allows you to achieve perfect integration into Home-Assistant thanks to the esphome module.

Start by connecting the {{ page.ref }} via USB using a Uart/ftdi module. To access the printed circuit and in order to connect the Ftdi you will need to remove the 4 mini-pads which hide the screws. Then nothing could be simpler, connect the ftdi according to the table below:

{% picture posts/{{ page.guid }}/branchement-ftdi-uart-connection-esphome-sonoff-zbbridge-pro.png --alt ftdi connection on Sonoff {{ page.ref }} for esphome --img width="940" height="582" %}

|Sonoff ZB Bridge PRO|FTDI programmer|
|3V3|Vcc/3.3v|
|GND|GND|
|RX|TX|
|TX|RX|
|GPIO00|GND (on power on)|

Then create a new device in the esphome tab (note the name of the module **$devicename** must be attached without a hyphen) and paste the code below by adapting the passwords.

{% highlight yaml %}
substitutions:
  devicename: zbbridge
  friendly_name: zb-bridge-pro

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: ${devicename}_ap
    password: !secret zbbridge_ap_password

captive_portal:

ota:
  password: !secret zbbridge_ota_password
  
packages:
  remote-packages:
    url: https://github.com/haade-administrator/zbbridge-pro.git
    ref: main
    refresh: 0s
    files: [
      esphome/esphome.yaml,
      esphome/binary_sensor.yaml,
      esphome/bluetooth.yaml,
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

The Github repository did not happen on its own, I was strongly inspired by the source Github repository:
[Zbbridge-pro Giancky79 integration](https://github.com/Giancky79/ZB-Bridge-P){: target="_blank"}

All you have to do is validate the code and push everything onto the Sonoff {{ page.ref }}.

Once uploaded the last step of Esphome integration, go to the applications and **configure your esphome device, click on the link below**.

{% include homeassistantlink.html integrations="" %}

**Module rendering in esphome:**

At the time I write this post you will have access to all the necessary information, if you do not want to use the bluetooth tracker which is activated by default copy these lines of code into the esphome modules

{% highlight yaml %}
esp32_ble_tracker:
  scan_parameters:
    active: false
{% endhighlight %}

{% picture posts/{{ page.guid }}/integration-sonoff-zbbridge-pro-esphome-commande.png --alt rendering of Sonoff gateway {{page.ref}} in esphome --img width="940" height="948" %}

**What information is reported in esphome:**
- zb_bridge_pro_fw_update (switch reset and firmware upload)
- zb_bridge_pro_uptime_readable (reading time)
- internal temperature
- IP adress
- mac address
- the voltage of the internal battery

> and many more...

## ZHA configuration

If you want to use the zigbee key in zha, you still have to configure the key as in the screenshots below, click on the link below to go directly to the key config:

{% include homeassistantlink.html integration="zha" %}

Then open a second page and go to the esphome integration by clicking on the link below:

{% include homeassistantlink.html configure_integration="esphome" %}

click on the button at the very top zbbridge firmware update and when the LED turns green confirms the integration of the key in ZHA, if you encounter a problem click again on the firmware update of esphome *(the manipulation of the toggle firmware update is the same to update the firmware of the zigbee key)*. I hope this information is clear enough to you, otherwise contact me.

{% highlight yaml %}
socket://[your_address_ip]:6638 // for me 192.168.1.217
baudrate: 115200
target: sofware

ou 

socket://[devicename.local]:6638 // replace the device name with the alternate name in my case **zbbridge**
baudrate: 115200
target: software
{% endhighlight %}

I made a video integrating the zigbee key into zha with an integration fault. To do this, prepare the address of the key, then activate the fx switch in esphome and configure the key quickly, otherwise restart the operation and that will do it.

> If you upgrade with the [latest firmware](https://github.com/Koenkk/Z-Stack-firmware/raw/master/coordinator/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_launchpad_coordinator_20230507.zip){: target ="_blank"} discovery in ZHA will be done without needing to click on the fw switch.

![Connection and operation method of zbbridge-pro cc2652 zigbee key in ZHA]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/integration-zha-zigbee-esphome-zbbridge-pro.webp{{ cachebuster }}){: width="720" height="384" class="lazyload pictaninpost"}

Below is the light operation after activating the switch. **The green light lets you know when to integrate** or update the firmware:

![How the zigbee firmware switch works in esphome]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/zigbee-firmware-update-esphome-sonoff-zbbridge-pro.webp{{ cachebuster }}){: width="400" height="275" class="lazyload pictaninpost"}

## zigbee2mqtt configuration
The configuration in Z2M is slightly different because you will make a call by TCP and not by socket

Go to the **configuration.yaml** file in the zigbee2mqtt folder and modify the following lines:

Ps: if you don't know how to modify files in HA, install the **File Editor** module by clicking on the link below:

{% include homeassistantlink.html supervisor_ingress="core_configurator" %}


{% highlight yaml %}
serial:
  port: tcp://[your_address_ip]:6638
  adapter: auto
{% endhighlight %}

## Zigbee 3.0 firmware upgrade

By default the firmware dates from September 2022. You will find the firmware on the github Zigbee2mqtt takes the launchpad version

[Z-stack zigbee2mqtt firmware launchpad cc2652p](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_3.x.0/bin){: target="_blank"}

To update the firmware of the zigbee cc2652p key **follow the readme from the Haade repository dedicated to this tutorial**
[installing latest Zigbee firmware](https://github.com/haade-administrator/zbbridge-pro#upgrade-firmware-z-stack-zigbee-to-zbbridge-p)

If you can't do it, don't hesitate to write to me

## Sonoff documents {{ page.ref }}
{% include doclink.html pdf="ZB-Bridge-pro-specification-product.pdf" title="Sonoff Zbbridge-pro product specifications" %}
{% include doclink.html pdf="ZB-Bridge-Pro-quick-install.pdf" title="Sonoff Zbbridge-pro quick guide" %}
{% include doclink.html pdf="ZB-Bridge-Pro-user-manual.pdf" title="Sonoff Zbbridge-pro complete manual" %}

{% include product-embed.html image="https://i0.wp.com/itead.cc/wp-content/uploads/2022/04/Zigbee-bridge-pro.jpg?fit=1000%2C1000&ssl=1" title="ZBBridge Pro" brand="Sonoff" description="Zigbee 3.0 cc2652p remote gateway, wifi and bluetooth" iteadlink="sonoff-zigbee-bridge-pro" domlink="peripheriques/6321-sonoff-box-domotique-zigbee-30-wifi-pro.html" %}

{% picture posts/{{ page.guid }}/specification-sonoff-zbbridge-pro.png --alt specification of Sonoff {{ page.ref }} --img width="940" height="940" %}

## Conclusion

This is a simple way to integrate a {{ page.ref }} key into home-assistant with Esphome firmware. The advantage of this zigbee key is that it is easily portable because it is linked via wifi, you can use the BLE sniffer (bluetooth 4.2) and the famous cc2652 zigbee 3.0 key, **all in one**.