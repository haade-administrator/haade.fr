---
guid: 131
title: "Testing the Z-Station Z-wave>me multi-protocol USB adapter"
description: "I am going to test this dongle referenced ZMEEZSTATION_ZW_ZB from the Z-Wave brand>me the Z-station USB adapter and see if it meets the opensource requirements Zigbee2mqtt and ZwaveJS UI among others"
ref: "Z-STATION - ZMEEZSTATION_ZW_ZB"
layout: post
authors: [Nico]
date: 2024-06-23 11:00
last_modified_at: 
categories: [Tests, Automation, Zigbee, Z-wave]
tags: []
video: 
image: 'test-du-adaptateur-dongle-usb-multi-protocoles-zwave-zigbee-thread-matter-ble-z-station-zwaveme.png'
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
rating: 4.0
sourcelink:
  - https://z-wave.me/products/z-station/
---

A **small exclusive on the web**, and yes I am one of the first to test the new superhero dongle from the ZWAVE>ME brand, the multiprotocol USB adapter on **{{ page.ref }}** compatible **Zigbee/Z-wave/Thread/matter** and even **Bluetooth**. So when I say the first I'm talking in France and in reference to an article on a Blog.
Lately I have tested quite a few zigbee dongles, this is a combo that can be interesting and Zwave>me is a specialist in this area.

{% include product-embed.html guid="2198" %}

## Unboxing

**Natural looking cardboard**, Zwave>playing the ecology card for me, they are not the first but I find the packaging nice and clear. Inside we find the USB adapter supplied with screws and plugs to install it on the front, as well as two antennas, one for the zigbee network and one for z-wave. **So don't hesitate to consult the instructions if in doubt.** And there are also two usb cables, one usb-c > usb-c and one usb > usb-c.
Yes, I forgot the instructions, it covers the essentials, for the rest, go directly to the site.

{% picture posts/{{ page.guid }}/deballage-adaptateur-usb-z-station-z-waveme.png --alt Contents of the z-station adapter box by zwave.me --img width="940" height="529" %}

The case is made from soft-touch ABS. Disassembly is simply done by unscrewing the 3 screws located under the case. You will also be able to see the reminder of the Z-wave and Zigbee antenna locations. The printed circuit comes out of its location by itself.

**Two things stand out to me:**
- the first the circuit could have been reduced given the gap between the components (**Z-wave response>me after distribution of the article:** Yes, the PCB could be more compact, but with the weight of the antennas it You have to have a fairly wide base. We decided to make the key in external format to have better radio quality and not break the USB ports with the weight of the external antennas.
- the **module is sold for around 126€** and given the number of **components there are none for more than 30-35€**.... I'll let you imagine what happens next... ( **Z-wave>me response after publication of the article:** Too bad that no one appreciates the quality of the components used, that the two antennas and the SMA port by **Linx Technologies** cost us 28 EUR - watch on DigiKey the price for 1000 pieces **So this sentence is far from fair** This key costs almost like two standard keys + two antennas.

{% picture posts/{{ page.guid }}/dongle-z-station-ouverture-du-produit-acces-circuit-imprime-z-wave-me.png --alt Rendering of the z-station box and access to the printed circuit --img width="940" height="529" %}

To complete a small rendering of the size of the z-wave>me Z-station USB adapter, you can still easily attach it to your electrical panel.

> the product is of quality.

{% picture posts/{{ page.guid }}/rendu-taille-z-station-zwave-me.png --alt Rendering of the size of the zwave.me dongle with its z-station antennas --img width="940" height="529" %}

## Technical characteristics

|Interface|USB 2.0|
|Supported protocols|Z-Wave, Zigbee, Thread, Matter, BLE|
|Z-Wave Features|Z-Wave Plus **700 Series**, Security S2, Smart Start, Long Range|
|Z-Wave Transceiver|Silicon Labs **ZGM130S**|
|Zigbee Thread Matter BLE Transceiver|Silicon Labs **EFR32MG21P**|
|Serial API|Silicon Labs EZSP Serial API with Z-Wave.Me Extensions|
|Size|60mm x 20mm x 10mm|
|Weight|25 g|
|Power supply|Via USB port|
|System Compatibility|**Windows, macOS, Linux**|

**Z-Station box includes the following:**

-Z-Station
- Z-Wave antenna (868 MHz)
- Zigbee/Thread/BLE antenna (2.4 GHz)
- USB-C cable
- A set of screws for wall mounting and a wall mounting template
- Quick Start Guide

{% include doclink.html docx="Z-Station Manual web.pdf" title="Zwave.me z-station usb adapter quick start guide" %}

### Connectivity

Z-Station provides **two serial interfaces** used by **Z-Wave** and **Zigbee/Thread/BLE** applications respectively. Linux and Mac OSX have a built-in device driver for the stick and will create a new device named like /dev/ttyUSB* (Linux) or /dev/cu.SLAB_USBtoUART (OSX). Windows lists a new **COM port device** but may require **CP2105 device driver** from Silicon Labs.

### Firmwares Zwave>me

Z-Station supports Z-Wave and Zigbee NCP, OpenThread RCP, Bluetooth Low Energy or CPC Zigbee NCP/OpenThread RCP combo **(optional, selected by firmware update)**. It is also possible to use the Z-Station as a Z-Wave/Zigbee/Thread repeater (special firmware required).

#### Z-Wave support

Compared to the standard firmware design used by almost all Z-Wave USB dongles and other Z-Wave host interface hardware, **this device's firmware offers several expansions and enhancements:**

- Built-in Z-Wave Zniffer tool
- Backup and restore function, including network topology
- Optimized transmission queue management to speed up the transmission process
- Firmware update from field OS level
- Extended wake-up notification to extend battery life of battery-operated devices in the network
- Advanced statistics on real network usage
- Allows you to change frequency from the software
- Compatible with third-party software such as Home Assistant, Z-WaveJS, OpenZWave, Domoticz, OpenHAB, Jeedom (thanks to static library mode)

#### Zigbee support

- Zigbee is available in NCP (network coprocessor) and RCP (radio coprocessor) variants. Zigbee HA 3.0 protocol is supported. **To work with Zigbee2MQTT 1.38.0 and higher, you will need to update your Z-Station.**{: .red}
- Built-in Thread 802.15.4 network tool
- Optimized configuration for stable operation in large networks
- Firmware update from field OS level
- Compatible with third-party software like **Home Assistant, Zigbee2MQTT, OpenHAB**

#### Thread support

- Both Zigbee and Thread use the 802.15.4 MAC/PHY layer. OpenThread is available in RCP version.
- Built-in Thread 802.15.4 network tool
- Firmware update from field OS level
- Compatible with third-party software like Home Assistant, OpenThread Border Router

#### Matter support

**Matter support requires Thread firmware** and a host application that supports the Matter protocol. The Z-Station adapter with OpenThread firmware is compatible with the CHIP project source code.


#### Bluetooth Low Energy (BLE) support

BLE RCP firmware provides an HCI serial interface. Supported by **Linux BlueZ Bluetooth infrastructure**.

{% include product-embed.html guid="2198" %}

## Firmware Update

### Z-wave

Nothing could be simpler to update the Z-wave firmware, the company z-wave>me has thought of everything and created a tool to make your task easier. Click on the link below, plug the {{ page.ref }} adapter into your PC and click on **start**. Select the correct chip under Linux ```dev/ttyUSB0``` and at the bottom of the analysis result you will find the **update info** tab which will allow you, if an update is available, to update the firmware and bootloader.

[Z-wave firmware update online (controller tools)](https://z-wave.me/support/controller-tools/){: target="_blank"}

Below is a screenshot **of the possibilities offered** by the {{ page.ref }} dongle firmware.

{% picture posts/{{ page.guid }}/update-firmware-zwave-z-station-outil-en-ligne.png --alt Online zwave firmware update for z-station adapter by zwave.me --img width="940" height="701" %}

### Zigbee/Matter/Thread/Ble

To update the zigbee firmware the procedure is a little more restrictive because zwave>me has not developed a tool but it will not take long because tools already exist to update with a simple click, I have some already used see my previous articles. **In the meantime you can go to the link below and follow the instructions which are quite simple to implement.**

[Zigbee/Matter update.. Z-station zwave.me](https://z-wave.me/support/tools-for-zigbee-openthread-ble/){: target="_blank"}

#### Handling under linux

the module information can be read by typing the command in linux: ```./zme_zigbee info -d /dev/ttyUSB1```

{% picture posts/{{ page.guid }}/info-app-upgrade-zigbee-z-station-zwave.me-outil.png --alt Zigbee/matter/thread firmware update help tool for z-station adapter by zwave.me --img width="821" height="631" %}

The update can be started with the following command (! save the firmware in the folder)
```./zme_zigbee update zigbee_EFR32MG21A020F1024IM32.gbl -d /dev/ttyUSB1 -p 12```

As I use Linux on a daily basis I downloaded the appropriate tool and followed this information:

#### For further

With these commands you will be able to obtain information about other firmwares

- For Zigbee firmware: ```zme_zigbee info -d /dev/ttyXX```
- For OpenThread firmware: ```zme_open_thread info -d /dev/ttyXX```
- For BLE firmware: ```zme_ble info -d /dev/ttyXX```

Attention ! On Linux and Raspberry Pi add **./** before the command, e.g. ```./zme_zigbee info -d /dev/ttyUSB1```

**Attention!** When working with Zigbee, you may see an error message regarding **protocol version 12**, which is installed by default upon purchase. does **not match the required one: 13**. In this case, add -p 12 to the command: ```zme_zigbee info -d /dev/ttyUSB1 -p 12```

Upgrade firmware
To upgrade the firmware, do: ```zme_zigbee update zigbee_EFR32MG21A020F1024IM32.gbl -d /dev/ttyXX```. Use only Z-Wave.Me firmware. Use zme_zigbee, zme_open_thread or zme_ble depending on the firmware you currently have on the device.

Usually just running the upgrade is enough. But in some cases, you may also need to update the OS firmware and Bootloader.

SE: ```zme_zigbee se s2c1_se_fw_upgrade_1v2p16.zigbee.pkzme -d /dev/ttyXX```

Bootloader: ```zme_zigbee booltloader_EFR32MG21.zigbee.pkzme -d /dev/ttyXX```

#### Available commands protocol changes:

- **Zigbee → OpenThread:** ```zme_zigbee update open_thread_EFR32MG21A020F1024IM32.gbl -d /dev/ttyXX```
- **Zigbee → BLE:** ```zme_zigbee update ble_EFR32MG21A020F1024IM32.gbl -d /dev/ttyXX```
- **Zigbee → CPC:** ```zme_zigbee update multiprotocol_EFR32MG21A020F1024IM32.gbl -d /dev/ttyXX```
- **OpenThread → Zigbee:** ```zme_open_thread update zigbee_EEFR32MG21A020F1024IM32.gbl -d /dev/ttyXX```
- **OpenThread → BLE:** ```zme_open_thread update ble_EFR32MG21A020F1024IM32.gbl -d /dev/ttyXX```
- **OpenThread → CPC:** ```zme_open_thread update multiprotocol_EFR32MG21A020F1024IM32.gbl -d /dev/ttyXX```
- **BLE → Zigbee:** ```zme_ble update zigbee_EFR32MG21A020F1024IM32.gbl -d /dev/ttyXX```
- **BLE → OpenThread:** ```zme_ble update open_thread_EFR32MG21A020F1024IM32.gbl -d /dev/ttyXX```
- **BLE → CPC:** ```zme_ble update multiprotocol_EFR32MG21A020F1024IM32.gbl -d /dev/ttyXX```
- **CPC → Zigbee:** ```zme_cpc update zigbee_EFR32MG21A020F1024IM32.gbl -d /dev/ttyXX```
- **CPC → OpenThread:** ```zme_cpc update open_thread_EFR32MG21A020F1024IM32.gbl -d /dev/ttyXX```
- **CPC → BLE:** ```zme_cpc update ble_EFR32MG21A020F1024IM32.gbl -d /dev/ttyXX```

{%- include alert.html type="warning" text="Please note, CPC in multiprotocol mode is no longer recommended because running multiprotocol with multiple active networks on a single radio adapter has proven to be unstable when using the Zigbee and Thread network protocols simultaneously on the same radio adapter, this increases also the complexity of the necessary software component dependencies, so if you are already using CPC, it is highly recommended that you plan to migrate to separate dedicated radio adapters (using Zigbee NCP and Thread RCP firmware respectively), **even if you are using CPC on a single radio adapter dongle has worked well for you so far.**" %}


## Using the Z-way server

Before tackling the various integrations with open source systems, **know that zwave>me has developed an independent platform** for managing its dongles (zigbee or zwave), it works a bit like zigbee2mqtt or zwavejs UI, for management modules, but it **also acts as an independent home automation center**, certainly not as developed as home assistant or Openhab, but in certain cases it could be sufficient. In addition, the **z-way server** can be integrated into **Home Assistant, Openhab, Mqtt, NodeRed, etc...**. In short, all this to tell you that if you want it you are not obliged to 'use other sources. You can very well install it as a Docker server alongside your home automation installation.

Find below **a list of links which could be of great interest to you** if you decide to install the z-way server, I did not go into further detail because the article aims to present this dongle and that I preferred to see compatibility with ZM, ZwaveJS UI and ZHA.

[Z-way server main presentation page](https://z-wave.me/z-way/){: target="_blank"}

[Installation of z-way server in various environments](https://z-wave.me/z-way/download-z-way/){: target="_blank"}

[Z-way server integration as add-ons in Home assistant HAOS](https://z-wave.me/z-way/integrations/#HomeAssistant){: target="_blank"}

[General help page on the zwave.me site (lots of tutorials and help)](https://help.z-wave.me/){: target="_blank"}

{% picture posts/{{ page.guid }}/installation-serveur-z-way-home-assistant-5.png --alt Configuring zwave.me z-station adapter as add-ons in HAOS home assistant --img width="940" height="742" %}

After configuring the addon you will be able to go directly to the z-way server at the address [http://homeassistant.local:8083](http://homeassistant.local:8083){: target="_blank"}I still regret the fact that this server could have been displayed directly in Home-Assistant with a link in the navigation bar like the ewelink, z2m, zwavejs UI integration, etc...

{% picture posts/{{ page.guid }}/installation-serveur-z-way-home-assistant-8.png --alt Presentation image of the z-way server page in home assistant --img width="940" height="424" %}

## Integration with Z2M

{% picture posts/{{ page.guid }}/configuration-z-station-dongle-zigbee2mqtt.png --alt Configuring zwave.me z-station adapter in zigbee2mqtt --img width="940" height="717" %}

[Help integrating z-station into Zigbee2mqtt](https://help.z-wave.me/en/knowledge_base/art/158/cat/97/connecting-the-z-station-interface-to-the-home-assistant-add-via-zigbee2mqtt){: target="_blank"}


{% picture posts/{{ page.guid }}/journal-integration-z-station-zigbee2mqtt.png --alt Z-station zwave.me integration log in zigbee2mqtt --img width="940" height="688" %}

**Before you can use the Zigbee controller with a version >= 1.38.0 of zigbee2mqtt you will need to update the firmware**{: .red}, depending on your platform.

{% picture posts/{{ page.guid }}/remontee-infos-et-fonctions-z-station-dongle-zigbe2mqtt.png --alt feedback information and controls from the z-station zwave.me adapter in zigbee2mqtt --img width="940" height="838" %}

## Integration into Zha (Home Assistant)

In Zha the installation goes well, you just have to choose the right device ```dev/ttyUSB1``` and click on next

{% picture posts/{{ page.guid }}/integration-z-station-zwave-me-zha-home-assistant.png --alt Select the correct serial port /dev/ttyUSB1 for zigbee integration of the z-station in zha --img width="659" height="409" %}

You can't see it in the photo but in the intermediate step I went with the choice of deleting and establishing a new zigbee network.

{% picture posts/{{ page.guid }}/integration-z-station-zwave-me-zha-home-assistant-succes.png --alt Successful zigbee integration of the zwave.me z-station into zha --img width="659" height="409" %}

The device goes back correctly and allows you to **control 45 entities**, I admit that I have not tested them.

{% picture posts/{{ page.guid }}/integration-z-station-zwave-me-zha-home-assistant-appareil.png --alt correct integration of z-station zwave.me adapter into zha --img width="940" height="325" %}

By going directly to the device you will be able to see the firmware version and access to the different functions.

{% picture posts/{{ page.guid }}/integration-z-station-zwave-me-zha-home-assistant-fonctions.png --alt integration Information of the z-station zwave.me adapter into zha and 45 additional functions --img width="940" height="807" %}

## Integration with Z-wave.js UI

Start by doing a [Z-wave firmware update if you haven't already done so using the online tool](test-z-station-z-wave-me-adapteteur-multi-protocole-zigbee-z-wave-thread-matter-bluetooth-suisse#z-wave), I talk about it a little above.

Go to the settings/zwave tab and select the relevant key ```/dev/ttyUSB0``` set the s2 key and save. The z-waveJs server launches.

{% picture posts/{{ page.guid }}/parametrage-adaptateur-zwave-z-station-zwaveme-dans-zwavejs-ui-home-assistant.png --alt integration and configuration of the z-station zwave.me adapter in the zwavejs.ui server and home assistant --img width="940" height="538" %}

Either patient waits 1-2 minutes for the initialization time and then checks the rise of the key in the central display panel. And here the z-station module is compatible with ZwaveJS UI.

{% picture posts/{{ page.guid }}/fonctionnement-dongle-z-station-zwave-dans-zwaveju-ui.png --alt retrieval and operation of the z-station zwave.me adapter in the zwavejs.ui server and home assistant --img width="940" height="271" %}

## Jeedom integration (Luna)

### Zigbee (mod. zigbee2mqtt)

Install the Zigbee2mqtt add-on for Jeedom, and install it. We saw that the t-station module was compatible with Z2M and that is no exception: it is functional under Jeedom after configuring the key. Don't forget to select the EZSP controller type.

{% picture posts/{{ page.guid }}/integration-z-station-jeedom-plugin-z2m.png --alt integration and operation of z-station zwave.me adapter in jeedom with the zigbe2mqtt plugin --img width="940" height="438" %}

### Z-wave (mod. zwavejs)

Good news there is also a ZwaveJS module for Jeedom, but there I encountered a problem because after configuration **I cannot launch the Daemon so I cannot use the z-wave key even after some research debugging.**{: .red}
But I think it is compatible with Jeedom, I must encounter a hardware problem with the Luna.

{% picture posts/{{ page.guid }}/erreur-integration-zwave-z-station-dongle-jeedom-zwavejs.png --alt Integration error and operation of z-station zwave.me adapter in jeedom with the zwavejs plugin --img width="940" height="462" %}

## Extension

**Additional Features and Expansion Pins**

{% picture posts/{{ page.guid }}/Extension-zigbee-zwave-du-circuit-pin-du-dongle-z-station-zwaveme.png --alt additional option of zwave or zigbee integration --img width="940" height="529" %}

Z-Station has **additional expansion pins** for advanced features such as:

- 3 Volt or 5 Volt alternative power connector (using 3V & GND or 5V & GND pins),
- Compatible with the radio packet tracing interface (PTI) with Z-Wave.Me Zniffer software,
- additional UART interface (requires custom firmware version),
- GPIO pins (requires custom firmware).

{% picture posts/{{ page.guid }}/circuit-pin-additionnel-z-station.png --alt Extra pin z-station --img width="400" height="382" %}

**ZB row** pins (except 3V and GND pins) are pins of the **Zigbee/Thread/BLE** EFR32MG21 chip.

**The ZW row** pins (except 5V and GND pins) are pins of the **Z-Wave ZGM130S** chip.

Z-Station can also work with [Z-Uno firmware](https://z-uno.z-wave.me){: target="_blank"}and drive GPIO pins.

**Product advantages:**{: .blue}
- Quality module
- European product (Switzerland)
- opensource compatible (Jeedom, Openhab, Z2M, ZwaveJS)
- integrated into Home Assistant in various ways.
- Multiprotocols (Zigbee, Thread, Matter, Z-wave, BLE)
- Environment **Z-way**
- zwave>me support

**The - of the product:**{: .red}
- the price [126€ approx from our partner Domadoo](https://www.domadoo.fr/fr/box-domotique/7154-z-waveme-adaptateur-usb-pour-z-wave-zigbeethreadble-z-station-4673724090181.html?domid=39){: target="_blank"}

{% include product-embed.html guid="2198" %}

## Conclusion

**Z-station is an interesting adapter** because it integrates the z-wave 700 chip and the zigbee EFR32MG21 chip. The set is supplied with two external antennas that are very distinct and marked with colors. **We will like the tools made available for subsequent firmware updates**, and the clarity of the documentation. I decide to remove 1 point

> Indeed, despite the additional costs generated for being part of the zwave alliance, and despite the quality of the components used **the z-station should not be sold for more than €90-100**.