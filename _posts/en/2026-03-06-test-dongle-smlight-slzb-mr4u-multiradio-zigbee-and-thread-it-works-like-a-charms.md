---
guid: 171
title: "Smlight SLZB-MR4U multiradio dongle test"
description: "Testing the SMLIGHT SLZB-MR4U Zigbee and Thread Multiradio Dongle: It Works"
ref: "SLZB-MR4U"
layout: post
authors: [Nico]
date: 2026-03-06 15:49
last_modified_at: 
categories: [Tests, Zigbee, Home-Assistant]
tags: []
video: 
image: 'smlight-multiradio-zigbee-et-thread-ca-marche-test-slzb-mr4u.png'
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
rating: 5.0 
sourcelink:
  - https://smlight.tech/global/slzbmr4
  - https://smlight.tech/support/manuals/books/slzb-os
---

A short while ago, I installed the [multipan firmware on a Sonoff Max dongle]({% post_url /en/2025-12-20-discovery-of-the-new-dongle-plus-et-mag-efr32mg24-zigbbe-by-sonoff %}). The installation worked; I successfully installed Zigbee and Thread modules. **However, I quickly encountered instability issues** with the antenna's transmission and reception. Everything is based on a single antenna, and I think the problem stems from the fact that both protocols use the same channels. **To address this issue, I asked SMLight to provide me with a multi-radio dongle, and they kindly supplied me with the SLZB-MR4U.**

> And I must say that **I am completely satisfied with this dongle!**

SMLight has been supplying dongles for several years, primarily with RJ45 connections, but not exclusively. With numerous chip variants, there's plenty of choice. In the multi-protocol category alone (multiple chips), there are six variants, including this SLZB-MR4U dongle. Its unique feature is that it possesses both a **Silabs EFR32MG26 Zigbee chip** and a second **Texas Instruments CC2674P10 Zigbee chip**. I find this fantastic, especially since both are compatible with Zigbee or Thread—simply incredible! **But it doesn't stop there; the overall management is superbly implemented.**

{% include product-embed.html image="smlight-slzb-mr4u-adaptateur-usb-ethernet-poe-zigbee-et-thread-cc2674p10-efr32mg26.png" title="Dongle SLZB-MR4U" brand="SMLight" description="Dual-chip multiprotocol dongle with Silabs EFR32MG26 and Texas Instruments CC2674P10 chips, ideal for Zigbee and Thread" domlink="produits-de-domotique/8369-smlight-slzb-mr4u-adaptateur-usb-ethernet-poe-zigbee-et-thread-cc2674p10-efr32mg26-.html" amazlink="4bhZgQq" %}

## Unboxing

Nothing special, just a box in the colors of Ukraine 😉 and yes, **SMLight is a Ukrainian company**. The box also mentions compatibility with zigbee2mqtt and Home Assistant! **I think that's fantastic.**

{% picture posts/{{ page.guid }}/deballage-dongle-smlight-slzb-mr4u.png --alt Unboxing the SMLight SLZB-MR4U multi-radio zigbee and thread dongle --img width="940" height="522" %}

Inside, you'll find a key similar to others from the brand, with two antennas (one for each chip), a tape measure for attaching screws or double-sided tape to the wall, and an Allen key. **Only two wall plugs are missing to make this kit truly complete.**

{% picture posts/{{ page.guid }}/deballage-dongle-smlight-slzb-mr4u-2.png --alt Unboxing the SMLight SLZB-MR4U multi-radio zigbee and thread dongle règle et outils --img width="940" height="522" %}

**The only negative point** of the {{ page.ref }} dongle lies in its dimensions and the design of the key, otherwise it's great.

{% picture posts/{{ page.guid }}/dimensions-slzb-mr4u-smlight.png --alt Dimension of the double zigbee-thread key SLZB-MR4U --img width="940" height="529" %}

## SLZB OS Firmware Discovery V3.2.4

Let's move on to the **core of the system, and I must say it has evolved very well**. In 2024, I tested version 0.9, and now we are **on v3.2.4**, a stable version. As I write this, **the team is already working on version 3.2.6, which is currently in development.**

{% picture posts/{{ page.guid }}/versioning-slzb-os-smlight.png --alt View of slzb os versions by smlight --img width="940" height="453" %}

Since this is a **production dongle, I deliberately stayed on version 3.2.4 and haven't encountered any problems**. I should point out that the interface displays and responds quickly; you can connect directly to slzb-mr4u.local or .lan if your setup allows it, otherwise you'll need to search for the IP address.

{% picture posts/{{ page.guid }}/page-accueil-slzb-os-base-esp32.png --alt SLZB-OS homepage based on esp32 --img width="940" height="453" %}

To keep things simple and best showcase the interface, I'll use a presentation video.

{% include product-embed.html image="smlight-slzb-mr4u-adaptateur-usb-ethernet-poe-zigbee-et-thread-cc2674p10-efr32mg26.png" title="Dongle SLZB-MR4U" brand="SMLight" description="Dual-chip multiprotocol dongle with Silabs EFR32MG26 and Texas Instruments CC2674P10 chips, ideal for Zigbee and Thread" domlink="produits-de-domotique/8369-smlight-slzb-mr4u-adaptateur-usb-ethernet-poe-zigbee-et-thread-cc2674p10-efr32mg26-.html" amazlink="4bhZgQq" %}

A key strength of the operating system is the ability to update all firmware via the SLZB-OS interface. Simply select the chip to update, then choose the firmware, and start the process.

> Finally, highly simplified hardware updates

{% picture posts/{{ page.guid }}/mise-a-jour-slzb-os-directement-depuis-l'interface.png --alt Updating all firmware via the interface --img width="940" height="447" %}

### SLZB-OS Video Presentation

Here's a presentation video that briefly introduces all the features of SLZB-OS, which, as a reminder, is based on an ESP32. Two things struck me: firstly, the fluidity and responsiveness of the pages, **especially since I recently tested the Lixee-Box, which also offers an ESP32-based interface**. SMLight has real power, and Lixee would do well to take note. Secondly, it's easy to use and quite fun; everything is intuitive. You'll find a lot of information in French on the interface **thanks to the question mark icons**.

{% include videoPlayer.html youtubeId="_cw5LgqeF0E" %}

SLZB-OS is a polished interface that continues to evolve; I'm 100% satisfied.

**One point not addressed in the article but in the video**, and not tested, **SLZB-OS integrates the zigbee-hub function in beta**. This allows you to use the SLZB-MR4U dongle independently without ZHA or ZIGBEE2MQTT. SLZB-OS would then be the only interface needed for the mesh network, and you could connect the modules to HAOS, for example, via MQTT.

## Home Assistant Integration

Here too, everything is taken care of. Once the dongle is integrated into the network, it's immediately recognized by Home Assistant. **In short, perfect!**

{% picture posts/{{ page.guid }}/reconnaissance-automatique-dans-home-assistant.png --alt Automatic recognition of SMLight keys in Home Assistant --img width="333" height="219" %}

Once you add the key to the system, you'll have access to a wealth of information. Among other things:

- Activate the LEDs
- Restart the system
- View updates
- Restart the Zigbee chips

**The diagnostics list is even more extensive:**

- Connection mode
- Chip temperatures
- Filesystem
- Memory
- Firmware type installed on the chips
- etc., etc.
- 
{% picture posts/{{ page.guid }}/fonctions-disponibles-slzb-mr4u-dans-home-assistant.png --alt SLZB-OS, SMLight SLZB-MR4U information in Home Assistant --img width="940" height="649" %}

The integration into HA is clean, however I note some malfunctions in the reporting of information from the firmwares installed on the dongle {{ page.ref }}, I think this is due to the choice of various installable firmwares, indeed per chip you can choose a stable or development firmware, which makes the information function more complex to report in HA.

{% picture posts/{{ page.guid }}/mise-a-jour-du-firmware-slzb-mr4u-directement-dans-home-assistant.png --alt Updating the SLZB-MR4U firmware directly within the Home Assistant interface --img width="724" height="340" %}

## And What About the Antennas

**The main problem with the multipan** on the **Sonoff Max** dongle, which renders the function unusable in production, **stems from frequency and wave range instability**. With the {{ page.ref }} and the two chips, this issue is resolved. Having tested it, the waves transmit well for **both protocols: Zigbee on one chip and Thread on the other. The range is stable and very good, and the mesh network is suitable for production**.

## Technical Specifications {{ Page.ref }}

**Hardware**

|Radio chip 1|CC2674P10 Texas Instruments|
|Radio chip 2|EFR32MG26 Silicon Labs|
|Core chip|ESP32-S3 Espressif|
|Ethernet|W5500 WIZnet|
|USB-to-Ethernet Passthrough|Yes|
|Antenna Zigbee|L-I-shaped +5dB Baishi|
|Antenna Thread|L-I-shaped +5dB Baishi|
|Antenna Wi-Fi/Bluetooth|On PCB, +2dB|
|PoE Transformer|SMLIGHT 5V|

**Power / Data**

|Type-C in|Yes|
|Power-over-Ethernet (PoE) in|Yes|
|Type-C and/or PoE simultaneously|Yes|
|Overvoltage power protection|Yes|
|Otoelectronic isolation|Yes|
|PoE standard Supported|IEEE 802.3af (48V)|
|PoE to USB Passthorugh power|Yes|
|Energy consumption|1-1.5W|

**Device mode**

|Zigbee coordinator Z2M/ZHA|Yes|
|Zigbee router|Yes|
|Matter-over-Thread router|Yes|
|Simultenious Zibee+Thread|Yes|
|Standalone Zigbee Hub|Yes|
|Standalone Zigbee Hub|Yes|
|Zigbee/Thread to Ethernet|Available|
|Zigbee/Thread to USB|Available|
|Zigbee/Thread to Wi-Fi|Available|

**Compatibility**

|Zigbee2MQTT native support|Yes|
|ZHA native support|Yes|
|OTBR Support|Yes|
|Pre-flashed Plug&Play|Yes|
|Ethernet support|Yes, 10/100Mb|
|Wi-Fi support|Yes, 2.4GHz|
|Bluetooth ready|Yes|
|SLZB-OS compatible|Yes|
|Home Assistant integration|Yes|

**Features**

|USB to Ethernet Passthrough|Yes|
|External 5dB antenna|Yes|
|Internal Wi-Fi / Bluetooth antenna|Yes|
|Radio SoC output gain|up to +20dB|
|ESP32 Flasher integrated|Yes|
|Radio SoC flasher inegrated|Yes|
|Status LEDs|Yes, 6|
|Button for control|Yes|

**Dimensions and weight**

|Adapter|160x24x28mm, 86g|
|Antenna|192x12x12mm, 15g|
|Packing (full)|180x25x40mm, 105g|

**Operating environment**

|Temperature|+5 – +35°C|
|Humidity|< 60%|

### **Advantages of the {{ page.ref }} dongle**
{: .blue}

- Price (under €50)
- Operating system
- Updates
- Available features
- Compatibility with HA, Z2M, ZHA, etc.

### **Disadvantages of the {{ page.ref }} dongle**
{: .red}

- Size (relatively bulky)

{% include product-embed.html image="smlight-slzb-mr4u-adaptateur-usb-ethernet-poe-zigbee-et-thread-cc2674p10-efr32mg26.png" title="Dongle SLZB-MR4U" brand="SMLight" description="Dual-chip multiprotocol dongle with Silabs EFR32MG26 and Texas Instruments CC2674P10 chips, ideal for Zigbee and Thread" domlink="produits-de-domotique/8369-smlight-slzb-mr4u-adaptateur-usb-ethernet-poe-zigbee-et-thread-cc2674p10-efr32mg26-.html" amazlink="4bhZgQq" %}

## Conclusion

**If you're looking for a dongle for multi-protocol support**, specifically Zigbee and Thread, then **the {{ page.ref }} is for you**. If you're looking for a user-friendly and comprehensive interface, then again, **the {{ page.ref }} is for you**. If you want to secure everything with a VPN and keep the key separate from your operating system, **again, the {{ page.ref }} will suit you**. **However, if you're looking for a compact dongle**, then you'll have to look elsewhere and choose a different Zigbee dongle. But if you plan to use multi-pan, I can already tell you that the firmware is still not production-ready.

> **I 100% recommend this dongle** {{ page.ref }} and it's well worth its 5 stars!

## Related Articles

{% include related-article.html guids="167,125" %}