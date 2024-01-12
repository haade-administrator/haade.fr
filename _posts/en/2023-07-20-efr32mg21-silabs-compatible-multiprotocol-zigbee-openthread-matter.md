---
guid: 76
title: "EFR32MG21 compatible Zigbee and Matter"
description: "Flashing the Sonoff zbdongle-e or nabu casa skyconnect to activate Matter openthread and zigbee in multi-protocol mode (multi pan) at the same time based on the Silabs EFR32MG21 chip is now possible. By browsing this article you will discover the ultra simple manipulation to perform by simply clicking on a button to activate the multi-protocol and use it in home assistant."
ref: ""
layout: post
author: Nico
date: 2023-08-07 10:20
last_modified_at: 2024-01-12 10:52
categories: [Haade-lab, Automation, Zigbee]
tags: []
image: 'efr32mg21-compatible-zigbee-et-thread-matter-silabs-confirme-en.png'
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
  - https://github.com/NabuCasa/silabs-firmware
  - https://sonoff.tech/wp-content/uploads/2023/02/SONOFF-Zigbee-3.0-USB-dongle-plus-firmware-flashing.pdf
  - https://github.com/itead/Sonoff_Zigbee_Dongle_Firmware/tree/master/Dongle-E/NCP
  - https://skyconnect.home-assistant.io/documentation/
  - https://github.com/darkxst/silabs-firmware-builder
  - https://dialedin.com.au/blog/sonoff-zbdongle-e-rcp-firmware
---

**That's it ! Silabs confirms support for Matter gateway to zigbee and concurrent thread** for EFR32MG21 chips, which equip various keys on the market like the key of [Sonoff ZBDongle-E](https://www.domadoo.fr/fr/interface-domotique/6315-sonoff-cle-usb-zigbee-30-antenne-externe-20dbm-v2-zbdongle-e.html?domid=39){: target="_blank"}, to name but one. But there is a but this support is recommended for procs with a minimum of **1024k of RAM**, and this is not the case for Nabu Casa's **Skyconnect which has 512Kb and zbdongle-e 768kb**. However, multi-protocol firmware exists, we will be able to start testing them. To go further **Silabs recommends using the EFR32MG24 chip for multiprotocol.**

> Good news, the EFR32MG21 Sonoff ZBDongle-E and NabuCasa Skyconnect keys, to name a few, are now multi-protocol (MultiPan), zigbee and Matter/Openthread compatible.

{% include product-embed.html guid="2128" %}

## Support table

|Use Cases|Protocols|EFR32 MG21<br>1024 KB Flash<br>96 KB RAM|EFR32 MG24<br>1536 KB Flash<br>256 KB RAM|
|---------|---------|----------------------------------------------------------------------------------|
|Matter gateway -> thread|RCP single protocol mode|✔|✔|
|Matter Gateway -> Zigbee / Thread|**Concurrent Zigbee / Thread**<br>Dynamic 802.15.4 / Bluetooth LE¹|✔|✔|
|Matter Thread End Device|Dynamic 802.15.4 / Bluetooth LE SoC<br>Mode²||✔|
|Matter Thread End Device|Dynamic 802.15.4 / Bluetooth LE SoC<br>Mode²||✔|

## Silabs EFR32 chips info

### EFR32MG21 Series 2 Multiprotocol Wireless SoC
EFR32MG21 devices bring high performance, low power and secure solutions to the IoT. Designed to increase throughput, improve RF performance, and reduce active current, the EFR32MG21 devices are 2.4 GHz wireless SoCs optimized for line-powered Zigbee, Thread, and Bluetooth mesh applications, including connected lighting, gateways, voice assistants, and smart meters.

### EFR32MG24 Series 2 Multiprotocol Wireless SoC
**EFR32MG24 wireless SoCs are ideal for mesh IoT wireless connectivity using Matter, OpenThread and Zigbee protocols for home automation**. With key features such as high 2.4GHz RF performance, low current consumption, AI/ML hardware accelerator and Secure Vault™. An ARM Cortex®-M33 running at up to 78 MHz and up to 1.5 MB of Flash memory and 256 KB of RAM provides resources for demanding applications while leaving room for future growth.
<cite>Silabs.com/wireless/matter</cite>

[Silabs compatibility Matter](https://www.silabs.com/wireless/matter?tab=start#thread){: target="_blank"}<br>
[Silabs firmware nabu casa](https://github.com/NabuCasa/silabs-firmware/tree/main){: target="_blank"}<br>

## Installing new firmware

**Better still thanks to the work of Nabu Casa and darkxst** it is now possible to flash the list of keys below in your browser by simply clicking on a button and choosing the firmware to install. All without having to access the key's printed circuit.
Nabu Casa maintains [SL Web Tools](https://github.com/NabuCasa/sl-web-tools){: target="_blank"}, software that allows you to do all the manipulation directly from the browser, which still requires the use of Chrome or Edge browsers and should work on Linux, Mac and Windows.

### Firmware Types NCP/RCP

Traditionally, Zigbee Coordinator dongles use firmware based on a **network coprocessor (NCP)**. In this case, **the Zigbee application runs on the dongle**, which handles the majority of Zigbee network management. Your Zigbee integration communicates with the dongle to simply send/receive data to Zigbee end devices.

More recently firmware based on **Remote Co-Processor (RCP)** has become available. In this case, the Zigbee application is **offloaded to your server (Home Assistant in this case via the Silabs Multiprotocol module), and the dongle only provides radio support at the hardware level**. When using RCP firmware, the **MultiPAN** configuration option enables support for multiple networks, which provides a unique advantage in that you can now run Zigbee and Thread networks simultaneously on the same dongle.

> The ZBDongle-E comes from the factory with NCP firmware v6.10.3, if you just want to use Zigbee, we recommend you to stick with this firmware.

### liste des clés upgradeables

1. [Skyconnect](https://www.seeedstudio.com/Home-Assistant-SkyConnect-p-5479.html?gad=1&gclid=Cj0KCQjw5f2lBhCkARIsAHeTvlgGnbZzINesrbPTZj5SiCLenfzJfYvwXqyTlbqMNr4a_IjCzTFpLhAaAmnjEALw_wcB){: target="_blank"} of Home Assistant (nabu casa)
2. ITead Sonoff Zigbee 3.0 USB [Dongle Plus V2 model "ZBDongle-E"](https://www.domadoo.fr/fr/interface-domotique/6315-sonoff-cle-usb-zigbee-30-antenne-externe-20dbm-v2-zbdongle-e.html?domid=39){: target="_blank"}
3. CoolKit [ZB-GW04 USB dongle](https://zigbee.blakadder.com/easyiot_ZB-GW04.html){: target="_blank"} (a.k.a. easyiot stick)

### List of firmwares dispo

- Zigbee ezsp NCP **( v7.4.0.0 )**{: .red}
- Multi-protocole RCP **(MULTI-PAN v4.4.0)**{: .red}
- Openthread **( v2.4.0.0 )**{: .red}
- choose a firmware **personnalisé**

### Video of a ZBDongle-E key flash

**Nothing better than a video** to see the operating principle of a firmware flash of a ZBDongle-E or skyconnect key which shows **the installation of Zigbee/Matter/Openthread multiprotocol firmware**.

{% include videoPlayer.html youtubeId="6un46ohP0WU" %}

### Flash firmware Nabu Casa Skyconnect

The Skyconnect dongle is based on the Silabs chip [EFR32MG21A020F512IM32](https://www.silabs.com/wireless/zigbee/efr32mg21-series-2-socs/device.efr32mg21a020f512im32?tab=specs){: target="_blank"} containing a **flash memory of 512 Kb** and a Ram of 64 Kb

{% include flashfirmware/ezsp.html hub="skyconnect" %}

### Flash firmware Sonoff [ZBDongle-E](https://www.domadoo.fr/fr/interface-domotique/6315-sonoff-cle-usb-zigbee-30-antenne-externe-20dbm-v2-zbdongle-e.html?domid=39){: target="_blank"}

{% include product-embed.html guid="2128" %}

The dongle zbdongle-e Sonoff is based on Silabs chips [EFR32MG21A020F768IM32](https://www.silabs.com/wireless/zigbee/efr32mg21-series-2-socs/device.efr32mg21a020f768im32?tab=specs){: target="_blank"} containing a **flash memory of 768 Kb** and a Ram of 64 Kb

{% include flashfirmware/ezsp.html hub="zbdongle-e" %}

[Sonoff ZBDongle-e original firmware link](https://github.com/itead/Sonoff_Zigbee_Dongle_Firmware/raw/master/Dongle-E/NCP/ncp-uart-sw_EZNet6.10.3_V1.0.1.gbl)
[Official Sonoff flash instruction](https://sonoff.tech/wp-content/uploads/2022/08/SONOFF-Zigbee-3.0-USB-dongle-plus-firmware-flashing-.pdf){: target="_blank"}

### firmware flash ZB-GW04 (v1.1)

**Easyiot ZB-GW04 Revision v1.1 - No flow control** is based on Silabs chip [EFR32MG21A020F768IM32](https://www.silabs.com/wireless/zigbee/efr32mg21-series-2-socs/device.efr32mg21a020f768im32?tab=specs){: target="_blank"} containing a flash memory of 768 Kb ** and a Ram of 64 Kb in the same way as the [ZBDongle-E of Sonoff](https://www.domadoo.fr/fr/interface-domotique/6315-sonoff-cle-usb-zigbee-30-antenne-externe-20dbm-v2-zbdongle-e.html?domid=39){: target="_blank"}

{% include flashfirmware/ezsp.html hub="zb-gw04-11" %}

### firmware flash ZB-GW04 (v1.2)

**Easyiot ZB-GW04 Revision v1.2 - Hardware flow control** is based on Silabs chip [EFR32MG21A020F768IM32](https://www.silabs.com/wireless/zigbee/efr32mg21-series-2-socs/device.efr32mg21a020f768im32?tab=specs){: target="_blank"} containing a flash memory of 768 Kb ** and a Ram of 64 Kb in the same way as the [ZBDongle-E of Sonoff](https://www.domadoo.fr/fr/interface-domotique/6315-sonoff-cle-usb-zigbee-30-antenne-externe-20dbm-v2-zbdongle-e.html?domid=39){: target="_blank"}

{% include flashfirmware/ezsp.html hub="zb-gw04-12" %}

### flash firmware [Zvidar Z-DG-Z01](https://www.domadoo.fr/fr/interface-domotique/6500-zvidar-controleur-usb-zigbee-30-chipset-efr32mg21.html?domid=39){: target="_blank"}

{% include product-embed.html guid="2170" %}

Coming ...

## Enabling multi-protocol in Home Assistant

As written above, the RCP protocols unload the zigbee application on a server and no longer on the key. That's why you'll need to install the Silabs multiprotocol add-on, which acts as the gateway between your dongle and Home Assistant. It also runs protocol-specific servers, to coordinate your Zigbee and/or Thread networks. **ZHA or Zigbee2MQTT** integrations *will communicate with this addon rather than directly with the dongle*. It also lets you run Thread simultaneously.



Click on the button below
{% include homeassistantlink.html supervisor_addon="core_silabs_multiprotocol" %}
and installs the **Silicon Labs Multiprotocol** add-on. On the **configuration** page, select the device, then set the following parameters for the firmware linked above. If you are using different firmware, adjust the values accordingly.

**Skyconnect, baud rate 115200**, disables hardware flow control and disables automatic firmware updates.
**ZBDongle-E, baud rate 460800**, disables hardware flow control and disables automatic firmware updates.
**ZB-GW04 v1.2, baud rate 230,400**, enable hardware flow control and disable automatic firmware updates.

{% picture posts/{{ page.guid }}/Silabs-multiprotocole-configuration-flash-zbdongle.png --alt configuration silabs multiprotocol zigbee matter in home assistant --img width="940" height="881" %}

### Zigbee and Matter in ZHA

If you have an existing ZHA configuration, you will need to remove it entirely. **Make sure before making a backup of the Zigbee network**.

Go to **Settings -> Devices and services and click on Add Integration**, or click on the button below:
{% include homeassistantlink.html integration="zha" %}
ZHA will now ask you which device you would like to connect to, make sure to select the Multiprotocol add-on device as shown in the image below.

{% picture posts/{{ page.guid }}/Silabs-multiprotocole-zha-configuration-flash-zbdongle.png --alt configuration silabs multiprotocol zigbee matter in home assistant by ZHA interface --img width="600" height="395" %}

On the next screen, it is recommended to start with an empty network and then pair all your Zigbee devices. If you had a previous setup, you can try importing the previous network backup, **ZHA will then try to migrate devices to the new network**, which may or may not work, **some devices may still require re-pairing if not working properly**.

### Zigbee and Matter in Zigbee2mqtt

If you use Zigbee2mqtt there too it is possible to use the multi protocol Zigbee/Matter/Openthread. **Don't forget to save the mesh beforehand.**

To modify the link of the key click on the button below
{% include homeassistantlink.html supervisor_addon="45df7312_zigbee2mqtt" %}

go to the module configuration and modify the serial tab like this:

{% highlight yaml %}
port: tcp://core-silabs-multiprotocol:9999
adapter: ezsp
{% endhighlight %}

{% picture posts/{{ page.guid }}/modifie-serial-zigbee2mqtt-pour-multiprotocole-zigbee-matter.png --alt modification of the serial port in zigbee2mqtt to integrate the multi protocol Zigbee and Matter --img width="940" height="134" %}

Once done you can restart the module and check the logs to check the absence of errors then you will be able to reinject your zigbee backup, but for now I have not tested it. It is preferable to start from a new network.

{% include product-embed.html guid="2128" %}
{% include product-embed.html guid="2170" %}

## Conclusion

**This is good news**, the **EFR32MG21 chips allow Multiprotocol** Zigbee/Matter/Openthread. The multi pan firmware flash is very practical and super easy to use. Please note that the multiprotocol is in the test phase on Home Assistant, the installation of a Zigbee network backup has not yet been tested. **To finish Silabs warns about the ability of EFR32MG21 chips to properly manage several networks** because the RAM of the current keys available on the market are less than 1024KB which would be the minimum to have for the management of the Multi Pan, still according to Silabs, which also directs manufacturers to use an EFR32MG24 chip.
