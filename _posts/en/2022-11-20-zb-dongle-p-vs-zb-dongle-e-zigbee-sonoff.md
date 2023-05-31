---
guid: 30
title: "ZBDongle-P VS ZBDongle-E"
description: "Comparison of zigbee sonoff dongle-p and dongle-e keys which SOC to choose for the future of protocol management"
layout: post
author: Nico
image: 'dongle-p-vs-dongle-e-zigbee-sonoff.png'
date: 2022-11-20 17:20
last_modified_at: 
categories: [Haade-lab, Zigbee]
tags: []
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
addViews: 4362
comments: true
rating:  
sourcelink:
  - https://www.reddit.com/r/homeassistant/comments/x9kkh1/zigbee_matter_hub_cc2652p_vs_efr32mg21_vs_cc2531/
  - https://sonoff.tech/
  - https://www.silabs.com/wireless/zigbee/efr32mg21-series-2-socs
  - https://www.ti.com/product/CC2652P#features
  - https://www.zigbee2mqtt.io/guide/adapters/
---

 Today we are going to compare two ZigBee keys from the sonoff brand, the ZBDongle-P and the ZBDongle-E. The ZBDongle-P has a CC2652P processor, which has been tested for a long time and works on all home automation platforms. when the ZBDongle-E key has an EFR32MG21 processor, this one is much more recent but seems to be the future of Zigbee 3.0 key processors, given its recent introduction it will be necessary to be careful that it is well compatible with current home automation platforms. For example with the zigbee2mqtt service, this should be used with caution because it is still experimental, see the link in the table below. **The main difference lies in the signal strength the ZBDongle-P has an initial signal of 5 dbm and can go up to 20 Dbm max, while the ZBDongle-E has a signal of around 20 decibels maximum.** The second difference is in the dimensions the ZBDongle-P measures 66mm while the ZBDongle-E measures 11 mm less. Firmware updates work identically on both keys.

## Presentation CC2652P ZBDongle-P key

{% include product-embed.html image="https://ae01.alicdn.com/kf/S90bbc8d67fea433b9049a0df5f455f48c/1-10PCS-SONOFF-ZB-Dongle-Plus-USB-Zigbee3-0-Passerelle-Analyseur-Zigbee-2MQTT-Interface-Capture-Avec.jpg_Q90.jpg_.webp" title="Sonoff zbdongle-p cc2652p" brand="Sonoff" description="The SONOFF Zigbee 3.0 USB dongle is a universal Zigbee USB dongle." affiliate="_DEQcEe7" %}

The SimpleLink™CC2652P device is a 2.4 GHz multi-protocol wireless microcontroller (MCU) supporting **Thread, Zigbee, Bluetooth 5.2 Low Energy**, IEEE 802.15.4, IPv6-enabled smart objects (6LoWPAN), proprietary systems including the TI 15.4-Stack (2.4 GHz) and concurrent multiprotocol via a Dynamic Multiprotocol Manager (DMM) driver. The device is optimized for low-power wireless communication and advanced sensing in the building security, HVAC, medical, wired networking, portable electronics, home theater and entertainment, and connected device markets.

### CC2652P Specification

#### Microcontroller
- Powerful 48 MHz Arm Cortex-M4F processor
- EEMBC CoreMark rating: 148
- 352 KB of programmable flash built into the system
- 256 KB of ROM for protocols and library functions
- 8 KB SRAM cache (also available as general purpose RAM)
- 80 KB of ultra-low leak SRAM. The SRAM is parity protected to ensure high operational reliability.
- 2-pin cJTAG and JTAG debugging
- Support over-the-air (OTA) update.

#### Ultra-low-power sensor controller with 4 KB of SRAM
- Sample, store and process sensor data
- Independent operation of the system CPU
- Fast wake-up for low power operation
- TI-RTOS, drivers, bootloader, low-power Bluetooth 5.2 and IEEE 802.15.4 MAC controller in ROM for optimized application size
  
#### Share Size
7mm×7mm RGZ VQFN48 (26 GPIOs)

## Presentation EFR32MG21 ZBDongle-E Key

{% include product-embed.html guid="2128" %}

EFR32MG21 devices bring high performance, low power and secure solutions to the IoT. Designed to increase processing capacity, improve RF performance and reduce active current, the EFR32MG21 devices are 2.4 GHz wireless SoCs optimized for line-powered **Zigbee, Thread and Bluetooth** mesh applications, including connected lighting, gateways, voice assistants and smart meters.

The EFR32MG21 family of SoCs includes an integrated security subsystem and devices that can take advantage of Secure Vault technologies. Secure Vault provides state-of-the-art software security features with Physical Unclonable Function (PUF) hardware technology to significantly reduce the risk of IoT security breaches and intellectual property compromise

With sensitivity better than -104 dBm for 802.15.4 and long-range Bluetooth and output power up to +20 dBm, the EFR32MG21 provides a robust RF link to ensure reliable communications. EFR32MG21 uses Simplicity Studio 5 development tools, providing easy migration and rapid time to market with SDKs, SDKs, mobile apps and our patented network analyzer.

### Specification EFR32MG21

#### Radio Zigbee and Thread
- 2.4GHz IEEE 802.15.4
- 250kbps O-QPSK DSSS
- Excellent reception sensitivity:
  - 104.5dBm at 250kbps O-QPSK DSSS
- Programmable output power: +20 dBm
- Receive in active mode: 9.4 mA
- Emission in active mode: 9.3 mA at 0 dBm
- Emission in active mode: 33.8 mA at 10 dBm
  
#### Bluetooth® Low Energy Radio
- Compatible with Bluetooth 5, Bluetooth 5.1 and Bluetooth Mesh specifications
- Excellent reception sensitivity:
  - 104.9dBm at 125kbps GFSK
  - 97.5 dBm at 1 Mbit/s GFSK
  - 94.4dBm at 2Mbps GFSK
- Programmable output power: up to +20 dBm
- Receive in active mode: 8.8 mA
- Emission in active mode: 9.3 mA at 0 dBm
- Emission in active mode: 33.8 mA at 10 dBm

#### Powerful MCU and memory options
- ARM® Cortex®-M33
  - DSP and floating point unit
- Clock speed up to 80 MHz
- Low active mode current: 50.9 μA/MHz
- Up to 1024 KB of programmable flash
- Up to 96 KB of RAM
  
#### Share Size
- QFN32 (4mm x 4mm)



## Comparison ZBDongle-P VS ZBDongle-E

||ZBDongle-P|ZBDongle-E|
||:--------:|:--------:|
|**Comp**|CC2652P|EFR32MG21|
|**Processor**|Cortex-M4F|Cortex-M33|
|**Flash Memory**|352Kb|**1000kb**{: .blue }|
|**Ram**|80kb|**96kb**{: .blue }|
|**Protocol Interface**|Z-Stack(ZNP)|EmberZNet (EZSP)|
|**Compatible**|Zigbee, Thread, Bluetooth|Zigbee, Thread, Bluetooth|
|**Usb Serial Soc**|CP2102(N)|CH9102F|
|**ID**|Dongle Plus|Dongle Plus V2|
|**Flow control**|Hardware|Software|
|**Dimensions**|63mm|**52mm**{: .blue }|
|**Signal strength**|From 5 to 20dbm max|**+/-20dbm max**{: .blue }|
|**ZHA Home Assistant**|[Supported](https://www.home-assistant.io/integrations/zha/){: target="_blank"}|[Supported](https://www.home -assistant.io/integrations/zha/){: target="_blank"}|
|**Zigbee2mqtt**|[Supported](https://www.zigbee2mqtt.io/guide/adapters/#recommended){: target="_blank"}|[**Experimental**{: .red}]( https://www.zigbee2mqtt.io/guide/adapters/#not-recommended){: target="_blank"}|
|**Openhab**|**Not Supported**{: .red }|Supported|
|**Jeedom**|Supported|Supported|
|**Iobroker**|Supported|Supported|
|**Domoticz**|Supported|Supported|

## Difference between Soc:

**EFR32MG21 is more powerful than CC2652P**{:.red} for Zigbee devices.
The CPU of the EFR is an ARM Cortex-M33 which operates at 80Mhz with 1Mb of flash and 96Kb of RAM, it is an evolution of the old M4F.
Inside the CC2652P which runs at 48MHz, has only 300Kb of flash and 8Kb of RAM+256Kb of ROM.

{% picture posts/{{ page.guid }}/cortex-M4-M33-EFR32MG21-Zigbee.png --alt processor EFR32MG21 --img width="768" height="622" %}

> You can see in this video test, that the power and the quality of the link are much better with the new Zigbee dongles including the Soc EFR32MG21.

{% include youtubePlayer.html id="iaP6Cu3XrLU" %}

## Compatibility with Matter

Note that Zigbee is not directly compatible with Matter. Instead, Matter uses a "Zigbee-like" radio standard called Thread, which adds IP addressing to the mesh. I'm pretty sure the cc2652 dongle can be configured as either a Zigbee coordinator or a thread edge router, depending on what firmware/software you install, **but it can't do both at the same time because the CC2652P and EFR32MG21 chips are not multi-threaded,** so you'll probably need two: one for your Zigbee devices and one for your Thread devices.
However Silicon Labs released a new Soc [EFR32MG24](https://www.silabs.com/wireless/zigbee/efr32mg24-series-2-socs){: target="_blank"} this one is compatible **Zigbee , Matter and Multithread**{: .red}, there are also novelties from Texas Instrument which released a chip [CC2652P7](https://www.ti.com/product/CC2652P7){: target= "_blank"} also compatible with **Zigbee, Matter and Miltithread**{: .red}.

## Firmware flashing

The USB Plus Zigbee 3.0 dongle comes pre-flashed with the coordinator firmware, but if you want to update, modify the router firmware and add to the dongle or generate the firmware that supports hardware flow control, please read the following document.

Flashing ZBDongle-P (CC2652P) and ZBDongle-E (EFR32MG21) firmware
Enable hardware flow control and generate corresponding firmware

### According to Sonoff

{% include doclink.html pdf="Dongle-P+E-flashing-sonoff.pdf" title="Flash firmware ZBDongle-P and E according to Sonoff" %}

### My cc-2538 solution by jelmerT for CC2652P

> I chose this solution because it is not mandatory to open the dongle!

{% highlight shell %}
sudo python3 cc2538-bsl.py --bootloader-sonoff-usb -e -w -v --ieee-address 00:00:00:00:00:00:00:00 -p /dev/ttyUSB0 ./CC1352P2_CC2652P_launchpad_coordinator_20220219. hex

--bootloader-sonoff-usb # allows to put in bsl mode automatically
-e # erase
-w # write
-v # verify
--ieee-address # secondary mac address ideal for rekeying your network
-p # the port, ps: port access requires sudo on linux

# to find all commands:
python3 cc2538-bsl.py -h
{% endhighlight %}

I wanted to write a tutorial but there is this simple tutorial on the Zigbee2mqtt site: [zigbee2mqtt.io flash cc2652P with a terminal](https://www.zigbee2mqtt.io/guide/adapters/flashing/flashing_via_cc2538-bsl.html# method-without-docker){: target="_blank"}


## ZBDongle-P Transmit Power Setup Tutorial

**Setting from 5 to 20db by default**
Below is a document written by Sonoff rather well done.

{%include doclink.html pdf="Configure-ZBDongle-P-power-transmission-signal.pdf" title="configure signal strength on ZBDongle-P" %}

> Note that the firmware provided by Zigbee2mqtt is already set to 20dbm [Zigbee2mqtt z-stack firmware](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_3.x. 0/bin){: target="_blank"}

## CONCLUSION

the ZBDongle-P equipped with the TI CC2652-P chip is up to date and works with all current software, however it seems to be falling into oblivion, just look at the number of products for sale on Aliexpress. there is only for the E version, indeed this one seems to be the new Zigbee standard indeed the processor is smaller and the performances are above at all levels, because of its youth it is still in the test phase but that seems to be coming to an end.
> ***If you have a CC2652P chip, I don't think you should hurry to change it to an EFR32MG21, especially if your mesh is solid. I think that manufacturers will soon release keys based on S-labs EFR32MG24 which is Multithread compatible, which simply means:*** **Zigbee and Matter at the same time.**



