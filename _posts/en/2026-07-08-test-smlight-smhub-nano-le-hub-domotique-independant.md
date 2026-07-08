---
guid: 176
title: "SMLIGHT SMHUB NANO Review: The fully independent Linux smart home hub"
description: "A look at SMLIGHT’s SMHUB NANO, a Linux-based micro-server capable of running Zigbee2MQTT, Node-RED, and Matterbridge locally, without a central server."
ref: "SMHUB NANO MG24"
layout: post
authors: [Nico]
date: 2026-07-08 15:00
last_modified_at: 
categories: [Tests, Zigbee, Home-Assistant, Videos]
tags: [SMLIGHT, Matter, Thread, Zigbee]
video: 
image: 'smhub-nano-the-first-smlight-hub-100%-linux-and-standalone.png'
toc: true
beforetoc: ''
published: true
noindex: false
sitemap:
  changefreq: 'monthly'
  exclude: 'no'
  priority: 0.8
locale: en_GB
comments: true
rating: 4.0 
sourcelink:
  - https://smlight.tech/global/smhub-nano-mg24
  - https://github.com/smlight-tech/smhub-flasher
---

After testing the [SLZB-MR4U multi-radio dongle]({% post_url /en/2026-03-06-test-dongle-smlight-slzb-mr4u-multiradio-zigbee-and-thread-it-works-like-a-charms %}), I’m turning back to the SMLIGHT brand for a radically different yet equally exciting product: the **{{ page.ref }}**.

**Unlike the brand's other products**, which are essentially Zigbee/Thread coordinators, the {{ page.ref }} is a genuine **standalone micro-server** based on Buildroot Linux and named SMHUB-OS. The concept is simple: host your home automation software directly on the hub to eliminate reliance on a central Home Assistant server or the cloud for critical automations.

> This represents a minor revolution for decentralized installations or remote sites!

{% include product-embed.html image="smhub-nano-mg24-shop-link.png" title="SMHUB NANO MG24" brand="SMLight" description="(SMLight) – Standalone Linux home automation hub featuring the EFR32MG24 chip, supporting Zigbee2MQTT, Node-RED, and Matterbridge." domlink="produits-de-domotique/8664-smlight-smhub-nano-mg24-hub-sous-linux-zigbee2mqtt-node-red-et-matterbridge.html" %}

## Unboxing the {{ page.ref }}

The form factor is identical to the SLZB-06 series. It’s compact, sturdy, and exudes quality. Photos on the official website show a super-smooth web interface where each service (Zigbee2MQTT, Node-RED, Matterbridge) is managed as an independent application.

Consistent with the brand's other products, **it’s simple and efficient:**

- a ruler
- screws
- a wrench with an antenna

**And that’s it:** you plug it in, run the update, and it works.

{% picture posts/{{ page.guid }}/presentation-deballage-unboxing-smhub-nano-mg24-a-la-sauce-linux.png --alt Unboxing the SMLIGHT SMHUB NANO MG24 --img width="940" height="529" %}

## Under the hood of the {{ page.ref }}

Once disassembled, we find a system similar to the brand's other products; here, it features a Silicon Labs EFR32MG24 Zigbee 3.0 chip.

> **As always,** everything is well assembled—all that's left is to use it!

{% picture posts/{{ page.guid }}/sous-le-capot-smhub-nano-mg24-a-la-sauce-linux.png --alt Under the hood: a complete SMLIGHT SMHUB NANO MG24 assembly. --img width="940" height="529" %}


## An Independent and Scalable Hub Concept

The SMHUB NANO is not just a gateway. It is a device running **SMHUB-OS**, an optimized Linux distribution. Since **hardware revision 0.98**, the hub supports **USB Host mode** (via a powered hub), allowing for the connection of Z-Wave dongles or 4G/LTE modems; this extends its capabilities far beyond the Zigbee support natively provided by the **EFR32MG24** chip.

### Latest Updates: A Leap Forward (v1.0.0 beta 5)

**v1.0.0 beta 5**

This is the latest version in the series; **it still has quite a few bugs**, but the system is functional overall. I ran into several issues during the update process, but fortunately, SMLIGHT [provides a custom flashing tool](https://github.com/smlight-tech/smhub-flasher){: target="_blank"} **compatible with Windows, Linux, and Mac**. Thanks to this utility, I was able to easily upload the latest firmware version.

**v0.9.9**
TL published on April 1, 2026

- Removed Node-RED from pre-installed packages
- Mosquitto log capture in the event of configuration validation errors
- Automatic SD card mounting if detected (`/mnt/sdcard`)
- Updated to **Buildroot v2026.02** and **Python 3.14**
- Added support for NanoMR devices

**Update v0.9.6.dev***
The latest major update to **SMHUB-OS** (v0.9.6.dev, dated February 28, 2026) brings critical improvements:
*   **Linux Kernel 6.18**: A major upgrade from version 5.4, offering increased stability and better hardware management. *   **Peripheral Control via CLI**: It is now possible to directly control the infrared (IR), buzzer, and Ambilight (WS2812) using commands such as `smhub-irctl` or `smhub-buzzerctl`.
*   **Backup Management**: A new page dedicated to backups and restoration has been added to the web interface, greatly simplifying maintenance.
*   **Factory Reset**: Support for the physical button for a simplified factory reset.

  
### Dashboard {{ page.ref }}

The dashboard is comprehensive, and the **additional and complementary applications are diverse**—so much so that it is difficult for me to showcase every page on this site.

{% picture posts/{{ page.guid }}/dashboard-smhub-nano-mg24.png --alt SMLIGHT SMHUB NANO MG24 Dashboard --img width="940" height="529" %}

To better showcase the UI of the {{ page.ref }}, I created this short video; as of firmware version 0.9.9, the system is impressively smooth and fast—and the whole thing fits into a single dongle.

{% include videoPlayer.html youtubeId="aOY_lkTMBBc" %}


## Technical Specifications and Connectivity {{ page.ref }}

Under the hood lies a robust configuration designed for 24/7 operation. As a reminder, the SMHBNano MG24 runs entirely on Linux—specifically a custom version called SMHub-OS—and SMLIGHT has pulled out all the stops to avoid excessive latency.

| Component | Specification |
| :--- | :--- |
| **Radio Chip** | Silicon Labs EFR32MG24 (Zigbee, Thread, Matter) |
|**Processor**|Dual-core, 1 GHz + 700 MHz|
|**RAM**|512 MB|
|**Storage**|8 GB eMMC|
|**microSD**|Available, supports up to 2 TB|
|**Operating System**|Linux kernel (Buildroot) with modular application support|
| **Kernel** | Linux 6.18 (Latest stable version) |
| **Network** | 100 Mb Ethernet + Dual-band Wi-Fi (2.4/5 GHz) + BT |
| **USB Host** | Available (Rev 0.98+) for Z-Wave, LTE, etc. |
| **Power Supply** | USB-C (5V) or PoE (802.3af) |



### Connection Modes: Choosing Reliability

**The SMHUB NANO offers three main, fully autonomous modes to integrate into your ecosystem:**
1.  **MQTT Bridge (Recommended)**: Z2M runs on the SMHUB with its own Mosquitto broker, which is bridged to the Home Assistant broker. **Huge advantage**: Zigbee2MQTT starts up and remains functional even if Home Assistant is offline or restarting.
2.  **Direct Z2M Connection**: Z2M runs on the SMHUB and connects directly to the Home Assistant broker. Simpler, but relies on network availability when Z2M starts up.
3.  **Passthrough Mode (Serial-over-TCP)**: The hub acts merely as a network bridge. This mode makes the least use of the SMHUB's potential and is not recommended by the manufacturer.

## Thread Mesh and Matterbridge

A standout feature of the SMHUB NANO is its ability to form **Thread mesh networks** across multiple hubs. If you have several SMHUB units, they work together to seamlessly extend Thread coverage. Additionally, with **Matterbridge**, you can expose your Zigbee devices directly via Matter to Google Home or Apple Home without any cloud dependency.

{%- include alert.html type="info" text="To enable USB Host mode, go to Settings → USB and restart the hub." %}

## Installing and Using the {{ page.ref }}

The **SMHUB-OS** web interface is a model of its kind. Everything comes pre-installed; you can activate the services you need with a single click.

> For those who want to go further, root SSH access is available. It is an open system!

One of the most interesting use cases involves **Matterbridge**. You connect your Zigbee sensors to the SMHUB NANO via Zigbee2MQTT, and Matterbridge instantly exposes them to your preferred ecosystem (Apple/Google/Amazon) without requiring a full Home Assistant server. It is the ideal solution for adding smart home capabilities to a parents' house or a vacation home with ultra-reliable performance.

### **SMHUB NANO Pros**
{: .blue}

- Fully autonomous (no central server required)
- PoE power supply
- Pre-installed software (Zigbee2MQTT, Node-RED, etc.)
- Remote access via built-in WireGuard/Tailscale
- Ultra-modern EFR32MG24 chip

### **SMHUB NANO Cons**
{: .red}

- Requires a high-quality MicroSD card for Linux reliability
- Slight heating during intensive Node-RED usage

## Conclusion

**Despite receiving relatively low ratings on Domadoo—likely due to early firmware versions—this dongle is well worth buying and trying out.** If you are looking to **decentralize your smart home setup** or create a universal, ultra-powerful Matter gateway, the **{{ page.ref }}** is arguably the best choice available today. It is stable and high-performing, and the system's openness allows for endless customization possibilities. SMLIGHT once again confirms its position as a leader in "pro-grade" coordinators and hubs.

> **I recommend it 100%** for its versatility and robustness!

## Articles Connexes

{% include related-article.html guids="171,125" %}
