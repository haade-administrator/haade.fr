---
guid: 176
title: "SMLIGHT SMHUB NANO Review: The Fully Standalone Linux Smart Home Hub"
description: "Discover the SMLIGHT SMHUB NANO, a Linux-based micro-server capable of running Zigbee2MQTT, Node-RED, and Matterbridge locally without a central server."
ref: "SMHUB-NANO"
layout: post
authors: [Nico]
date: 2026-05-07 21:55
last_modified_at: 
categories: [Tests, Zigbee, Home-Assistant]
tags: [SMLIGHT, Matter, Thread, Zigbee]
video: 
image: 'smhub-nano-le-premier-hub-smlight-100%-linux-et-autonome.png'
toc: true
beforetoc: ''
published: false
noindex: false
sitemap:
  changefreq: 'monthly'
  exclude: 'no'
  priority: 0.8
locale: en_GB
comments: true
rating: 5.0 
sourcelink:
  - https://smlight.tech/product/smhub-nano/
---

After testing the [SLZB-MR4U multiradio dongle]({% post_url /en/2026-03-06-test-dongle-smlight-slzb-mr4u-multiradio-zigbee-and-thread-it-works-like-a-charms %}), I'm back with the SMLIGHT brand for a radically different but equally exciting product: the **SMHUB NANO**.

Unlike other products from the brand, which are primarily Zigbee/Thread coordinators, the SMHUB NANO is a true **standalone micro-server** based on Linux. The idea is simple: host your smart home software directly on the hub to eliminate dependency on a central Home Assistant server or the Cloud for your critical automations.

> This is a small revolution for decentralized installations or remote sites!

{% include product-embed.html image="smlight-smhub-nano-hub-domotique-standalone.png" title="SMHUB NANO MG24" brand="SMLight" description="Standalone Linux smart home hub with EFR32MG24 chip, supporting Zigbee2MQTT, Node-RED, and Matterbridge." domlink="" amazlink="" %}

## A Standalone and Evolvable Hub Concept

The SMHUB NANO isn't just a gateway. It's a machine running **SMHUB-OS**, an optimized Linux distribution. Since **hardware revision 0.98**, the hub now supports **USB Host mode** (via a powered hub), allowing you to connect Z-Wave dongles or 4G/LTE modems, extending its capabilities far beyond the natively supported Zigbee via the **EFR32MG24** chip.

### Latest Updates: A Leap Forward (February 2026)

The last major update of **SMHUB-OS** (v0.9.6.dev on February 28, 2026) brings critical improvements:
*   **Linux Kernel 6.18**: A major jump from version 5.4, offering increased stability and better hardware management.
*   **Peripheral Control via CLI**: It is now possible to directly control Infrared (IR), the Buzzer, and Ambilight (WS2812) using commands like `smhub-irctl` or `smhub-buzzerctl`.
*   **Backup & Restore Management**: A new dedicated "Backups" page has been added to the Web UI, making maintenance much easier.
*   **Factory Reset**: Support for the physical button for a simplified reset process.

## Technical Specifications and Connectivity {{ page.ref }}

Under the hood, we find a solid configuration designed for 24/7 operation.

| Component | Specification |
| :--- | :--- |
| **Radio Chip** | Silicon Labs EFR32MG24 (Zigbee, Thread, Matter) |
| **Processor** | Quad-core ARM (Linux Optimized) |
| **Kernel** | Linux 6.18 (Latest stable version) |
| **Network** | 100 Mb Ethernet + Dual-Band Wi-Fi (2.4/5 GHz) + BT |
| **USB Host** | Available (Rev 0.98+) for Z-Wave, LTE, etc. |
| **Power** | USB-C (5V) or PoE (802.3af) |

### Connection Modes: Choosing Reliability

The SMHUB NANO offers three main modes to integrate into your ecosystem:
1.  **MQTT Bridge (Recommended)**: Z2M runs on the SMHUB with its own Mosquitto broker, which is "bridged" with the Home Assistant broker. **Huge advantage**: Zigbee2MQTT starts and remains functional even if Home Assistant is offline or restarting.
2.  **Direct Z2M Connection**: Z2M runs on the SMHUB and connects directly to the Home Assistant broker. Simpler, but dependent on network availability when Z2M starts.
3.  **Passthrough Mode (Serial-over-TCP)**: The hub becomes a simple network bridge. This mode underutilizes the SMHUB's potential and is not recommended by the brand.

## Unboxing and Design

The format is identical to the SLZB-06 range. It's compact, robust, and exudes quality. Photos on the official site show an ultra-fluid web interface where each service (Zigbee2MQTT, Node-RED, Matterbridge) is managed as an independent application.

{% picture posts/{{ page.guid }}/smlight-smhub-nano-hub-domotique-standalone.png --alt SMLIGHT SMHUB NANO on a modern desk --img width="940" height="529" %}

## Thread Mesh and Matterbridge

A "killer feature" of the SMHUB NANO is its ability to form **Thread mesh networks** across multiple hubs. If you have several SMHUBs, they cooperate to expand Thread coverage seamlessly. Additionally, with **Matterbridge**, you expose your Zigbee modules directly in Matter to Google Home or Apple Home without any cloud dependency.

{%- include alert.html type="info" text="To enable USB Host mode, go to Settings → USB and restart the hub." %}


## Setup and Usage

The **SMHUB-OS** web interface is a model of its kind. Everything is pre-installed. You activate the services you need with a single click.

> For those who want to go further, root SSH access is available. It's an open machine!

One of the most interesting use cases is using **Matterbridge**. You connect your Zigbee sensors to the SMHUB NANO via Zigbee2MQTT, and Matterbridge instantly exposes them to your preferred ecosystem (Apple/Google/Amazon) without needing a full Home Assistant server. It's the ideal solution for "smartening up" a parent's house or a vacation home with ultra-reliability.

### **Advantages of the SMHUB NANO**
{: .blue}

- Total autonomy (no central server needed)
- PoE power support
- Pre-installed software (Zigbee2MQTT, Node-RED, etc.)
- Integrated remote access via WireGuard/Tailscale
- Ultra-modern EFR32MG24 chip

### **Disadvantages of the SMHUB NANO**
{: .red}

- Requires a high-quality MicroSD card for Linux reliability
- Slight heating under heavy Node-RED usage

## Conclusion

If you're looking to **decentralize your smart home** or create an ultra-powerful and universal Matter gateway, the **{{ page.ref }}** is undoubtedly the best choice today. It's stable, high-performing, and the openness of the system allows for all kinds of customizations. SMLIGHT once again confirms its position as a leader in "pro" coordinators and hubs.

> **I 100% recommend it** for its versatility and robustness!

## Related Articles

{% include related-article.html guids="171,125" %}
