---
guid: 130
title: "Take full advantage of your FREE fiber optic subscription"
description: "Fiber subscriptions are becoming more and more powerful and yet most of us do not use this bandwidth because our home network is equipped to use only 1Gbit/s, so how to best use your freebox ultra"
ref: ""
layout: post
authors: [Nico]
date: 2024-06-15 18:00
last_modified_at: 
categories: [Haade-lab, Automation, News]
tags: []
video: 
image: 'equip-yourself-and-use-your-fiber-internet-subscription-to-the-limit-of-its-capacity.png'
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
---

Ah, I **finally switched to fiber by Free** at my home which announces a bandwidth of **8Gbit/s** for downloading and sending data, no less. **But there you go** my current network **only outputs 1Gbit/s** on all the switches. Taking a closer look at the national results [nperf](https://media.nperf.com/files/publications/FR/2024-01-10_Barometre-connexions-fixes-metropole-nPerf-2023.pdf){: target="_blank"} I realized given the average bandwidth that ***almost no one uses very high speed fiber***. So I decided to optimize my network to see if the fiber transfer data announced by Free is real.

{%- include alert.html type="info" text="Haade.fr is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means to earn fees by linking to Amazon.com and affiliated sites." %}

> I am taking advantage of these tests to help you benefit from them and guide the choice of equipment to purchase for you to make the most of this bandwidth.

## My fiber installation and Freebox Ultra

**The Freebox Ultra is probably the box on the market with the most advanced router**, plus the quality of the 8Gbit/s fiber network is higher than that of SFR at least in my region. So I decided to upgrade my network by investing **in a 10GBit/s compatible switch.**

{% picture posts/{{ page.guid }}/upgrade-materiel-fibre-freebox-ultra-zyxel-elfcam.png --alt fiber equipment for freebox ultra zyxel xgs1250, elfcam sfp+ and tp-link 10GBit/s network card --img width="940" height="529" %}


> I chose the Zyxel XGS-1250-12

{% include product-embed.html image="switch-zyxel-xgs1250-12-10Gbps-2.png" title="Switch Zyxel XGS1250-12 RJ45 10GBPs" brand="Zyxel" description="Zyxel 12-Port Multi-Gigabit Switch Managed Via Web Interface Includes 3 10G Ports and 1 10G SFP+ Port XGS1250-12" amazlink="3Rj4a6M" %}

It is manageable and has **1 sfp+ 10Gbit/s port** and **3 rj45 ports compatible 2.5 to 10Gbit/s**, and you can purchase it for around €200.

I **own a NAS** so I had a particular interest in equipping it with a 10Gbit/s network card in order to benefit from maximum power, especially for the server part. So I bought a [TP-Link 10Gbit/s pciexpress network card.](https://amzn.to/3XiFUFv){: target="_blank"} 

{% include product-embed.html image="tplink-carte-reseau-pciexpress-10gb.png" title="Network card TP-Link 10Gbit/s" brand="TP-Link" description="TP-Link 10 Gigabit PCIe Network Card TX401, 10Gbps Network, CAT 6A Ethernet Cable Included, Ultra-low Latency, Compatible with Windows 11/10/8.1/8/7, Windows 2019/2016/2012 R2 and Linux Servers" amazlink="3XiFUFv" %}

The NAS is next to the switch and is connected directly with a cable [Ethernet Ugreen category 7](https://amzn.to/4cfy6sZ){: target="_blank"}

I connected the freebox ultra to the zyxel switch with a fiber combo [Elfcam LC/UPC Á LC/UPC](https://amzn.to/3yWFLxo){: target="_blank"} and [2 Elfcam SFP+ modules] (https://amzn.to/4aXFPu1){: target="_blank"} because the freebox and the switch are not in the same place and I had to pull the fiber into a **20MM sheath and the elfcam cable is removable to facilitate pulling into a sheath**. *Otherwise if you don't need* to pull the fiber into a sheath [use an AOC fiber sheath](https://amzn.to/3KH6eSf){: target="_blank"} which will probably be more efficient ( optimized ).

**Finally** on my main PC I put a [TP-link pci express card in 2.5Gbit/s.](https://amzn.to/4efLTRv){: target="_blank"}

{% include product-embed.html image="tplink-carte-reseau-pciexpress-2-5gb.png" title="Network card TP-Link 2.5Gbit/s" brand="TP-Link" description="TP-Link 2.5 Gigabit PCIe Network Card TX201, 2.5 Gbps Network, Ultra-low Latency, Compatible with Windows 11/10/8.1/8/7, Windows 2022/2019/2016/2012 R2 and Servers Linux" amazlink="4efLTRv" %}

> My entire home network is connected in **category 6 class E** and largely does the job for a **speed oscillating between 1 and 2.5Gbit/s.**

### The results in pictures of the Free fiber subscription

On the **NAS equipped with 10Gbit/s** I installed a speedtest tracker based on the Ookla platform, the results are clear, **I reached peaks of almost 8Gbit/s in download and 7 Gbit/s in sending data**, so the Fiber Free subscription with the Freebox Ultra does the job.

{% picture posts/{{ page.guid }}/test-freebox-ultra-ookla-speedtest-NAS-tplink-10GB.png --alt speedtest ookla fiber 10gb test for freebox ultra zyxel xgs1250, elfcam sfp+ and tp-link 10GBit/s network card --img width="940" height="675" %}

Below is an nperf statement **on the PC equipped with a 2.5Gbit/s network card**, here I arrive at a download of 2.3Gbit/s and 1Gbit/s when sending. There the sending of data is a little weak but this is due to the choice of the server by nperf.

> In short, the whole thing is more than honorable.

{% picture posts/{{ page.guid }}/test-nperf-pc-2.5gb.png --alt speedtest nperf fiber test 2.5gb for freebox ultra zyxel xgs1250, elfcam sfp+ and tp-link 2.5GBit/s network card test carried out on pc --img width="940" height="641" %}

## Fiber Subscriptions

From one access provider to another, fiber subscriptions are not at all the same. For many of them **(they are not listed below)** you will not need to equip yourself to use the full power of the network because having a 1GBit RJ45 network will be more than sufficient . But for certain subscriptions (few on the market at the moment), ***it would be advantageous to equip your network with fiber in order to fully use your fiber subscription.***

### Livebox 7 Orange Fiber

At Orange, several subscriptions are available, but only the **Livebox MAX fiber** subscription is worth it to update your fiber network.

**Livebox MAX fiber subscription:** **5Gbit/s** for Download and **1 Gbit/s** for Upload

This subscription comes with livebox 7, the others come with less powerful boxes like livebox 6.
But I'm skipping my turn on these boxes and subscriptions and I'm only focusing on livebox 7.

As with the Bbox, the Livebox 7 does not have SFP+ cages to accommodate 10GBit but a **RJ45 port compatible with 10Gbits**, the other LAN ports are 1Gbit/s RJ45 ports.

#### Livebox 7 Router Mode

**If you decide to use the Livebox 7 as a router you will just need:**

- 1x switch [Zyxel XGS 1250-12](https://amzn.to/3Rj4a6M){: target="_blank"} at around €216
- cable [Ethernet Ugreen category 7](https://amzn.to/4cfy6sZ){: target="_blank"} Minimum (in order to connect PC or NAS) counts **11€** for 5m of cables
- TP-Link network cards [2.5](https://amzn.to/4efLTRv){: target="_blank"} or [10Gbits](https://amzn.to/3XiFUFv){: target="_blank "} compatible at the respective price **of 19€** or **80€** depending on the power

{% picture posts/{{ page.guid }}/livebox-7-caracteristiques-fibre-ethernet.png --alt Technical Characteristics of the Livebox 7 fiber and ethernet --img width="600" height="397" %}

[technical sheet Livebox 7](https://assistance.orange.fr/equipement/livebox-et-modems/livebox-7-sagemcom){: target="_blank"}

To take full advantage of orange **5Gbit/s** you will have to pay **around €240-300** depending on the hardware you choose to use maximum power.

#### Livebox 7 switch mode

**If the Livebox 7 router does not give you complete satisfaction** as is often the case with these boxes, you can decide to switch it to bridge and use a high-performance fiber router. As it happens, few routers offer this type of connection, but in terms of quality/price, two brands stand out: **Ubiquiti** and **Mikrotik**. Personally, I have a great preference for **Ubiquiti** and its **UNIFI** embedded system.
> On the other hand, in terms of cost, it is not the same thing compared to switch equipment.

**So you will need at least:**
- 1 Mikrotik RB5009GUG router at **200€** approx **or** a Ubiquiti Dream Machine pro router at **429€**
- an [elfcam sfp+ to rj45](https://amzn.to/4c8KZo6){: target="_blank"} module at around **€50**
- cable [Ethernet Ugreen category 7](https://amzn.to/4cfy6sZ){: target="_blank"} Minimum (in order to connect PC or NAS) counts **11€** for 5m of cables
- TP-Link network cards [2.5](https://amzn.to/4efLTRv){: target="_blank"} or [10Gbits](https://amzn.to/3XiFUFv){: target="_blank "} compatible at the respective price **of 19€** or **80€** depending on the power.

Equipping with a **fiber router would cost you between €280 and €570** minimum depending on the equipment chosen.

### Sfr Fiber

With Free, SFR is the only one to offer such a powerful subscription, it has a 10G SFP(+) cage in order to recover all this power, the only small downside is the LAN port of the box **are all limited to 1Gbit/s** unlike the **Freebox Ultra which offers 2.5Gbit/s on all these Lans**

**MAX subscription:** SFR: **8Gbit/s** for Download and **8Gbit/s** for Upload

[Technical sheet sfr box 8](https://assistance.sfr.fr/internet-tel-fixe/box-8/caracteristiques-techniques-box-8-sfr.html){: target="_blank"}

{% picture posts/{{ page.guid }}/sfr-box-8-caracteristque-technique.png --alt Technical Characteristics of the SFR Box 8 fiber and ethernet --img width="428" height="456" %}

#### SFR Box router mode

**In this mode you will need:**
- 1x switch [Zyxel XGS 1250-12](https://amzn.to/3Rj4a6M){: target="_blank"} at around €216
- a cable [Elfcam OM3 AOC optical fiber](https://amzn.to/3KH6eSf){: target="_blank"} (or connect the box to the fiber switch) at approximately **29€** or yes yes you have to pull the fiber into a sheath [1 Elfcam OM3 fiber cable](https://amzn.to/3yWFLxo){: target="_blank"} and [2 elfcam 10m sfp+ modules](https://amzn.to /4aXFPu1) at approximately **€32**.
- cable [Ethernet Ugreen category 7](https://amzn.to/4cfy6sZ){: target="_blank"} Minimum (in order to connect PC or NAS) counts **11€** for 5m of cables
- TP-Link network cards [2.5](https://amzn.to/4efLTRv){: target="_blank"} or [10Gbits](https://amzn.to/3XiFUFv){: target="_blank "} compatible at the respective price **of 19€** or **80€** depending on the power

#### SFR Box switch mode

**So you will need at least:**

- 1 Mikrotik RB5009GUG router at **200€** approx **or** a Ubiquiti Dream Machine pro router at **429€**
- a cable [Elfcam OM3 AOC optical fiber](https://amzn.to/3KH6eSf){: target="_blank"} (or connect the box to the fiber switch) at approximately **29€** or yes yes you have to pull the fiber into a sheath [1 Elfcam OM3 fiber cable](https://amzn.to/3yWFLxo){: target="_blank"} and [2 elfcam 10m sfp+ modules](https://amzn.to /4aXFPu1) at approximately **€32**.
- cable [Ethernet Ugreen category 7](https://amzn.to/4cfy6sZ){: target="_blank"} Minimum (in order to connect PC or NAS) counts **11€** for 5m of cables
- TP-Link network cards [2.5](https://amzn.to/4efLTRv){: target="_blank"} or [10Gbits](https://amzn.to/3XiFUFv){: target="_blank "} compatible at the respective price **of 19€** or **80€** depending on the power.

Equipping with a **fiber router would cost you between €280 and €570** minimum depending on the equipment chosen.

### Freebox

#### Freebox Pop

**MAX subscription:** 5Gbit/s in Download and 700Mbit/s in Upload

[Freebox Pop Data Sheet](https://www.free.fr/freebox/freebox-pop/){: target="_blank"}

{% picture posts/{{ page.guid }}/Freebox-Pop-connectique.png --alt Technical Characteristics of the Freebox Pop fiber and ethernet --img width="940" height="239" %}

> The rear connections of the freebox pop will not allow you to exceed 2.5Gbit/s per RJ45 port, so there is no point in investing in a fiber update of your network.

#### Freebox Ultra The Most Powerful

**MAX subscription:** **8Gbit/s** for Download and **8Gbit/s** for Upload

[Freebox Ultra Data Sheet](https://www.free.fr/freebox/freebox-ultra/){: target="_blank"}

**Big advantage** of the Freebox Ultra, in addition to having a 10Gbit/s sfp+ cage, this box has **4 2.5Gbit/s Lan ports.**

{% picture posts/{{ page.guid }}/Freebox-Ultra-connectique.png --alt Technical Characteristics of the Freebox Ultra fiber and ethernet --img width="940" height="253" %}

##### Freebox Ultra router mode

**In this mode you will need:**

- 1x switch [Zyxel XGS 1250-12](https://amzn.to/3Rj4a6M){: target="_blank"} at around €216
- a cable [Elfcam OM3 AOC optical fiber](https://amzn.to/3KH6eSf){: target="_blank"} (or connect the box to the fiber switch) at approximately **29€** or yes yes you have to pull the fiber into a sheath [1 Elfcam OM3 fiber cable](https://amzn.to/3yWFLxo){: target="_blank"} and [2 elfcam 10m sfp+ modules](https://amzn.to /4aXFPu1) at approximately **€32**.
- cable [Ethernet Ugreen category 7](https://amzn.to/4cfy6sZ){: target="_blank"} Minimum (in order to connect PC or NAS) counts **11€** for 5m of cables
- TP-Link network cards [2.5](https://amzn.to/4efLTRv){: target="_blank"} or [10Gbits](https://amzn.to/3XiFUFv){: target="_blank "} compatible at the respective price **of 19€** or **80€** depending on the power

##### Freebox Ultra switch mode

**So you will need at least:**

- 1 Mikrotik RB5009GUG router at **200€** approx **or** a Ubiquiti Dream Machine pro router at **429€**
- a cable [Elfcam OM3 AOC optical fiber](https://amzn.to/3KH6eSf){: target="_blank"} (or connect the box to the fiber switch) at approximately **29€** or yes yes you have to pull the fiber into a sheath [1 Elfcam OM3 fiber cable](https://amzn.to/3yWFLxo){: target="_blank"} and [2 elfcam 10m sfp+ modules](https://amzn.to /4aXFPu1) at approximately **€32**.
- cable [Ethernet Ugreen category 7](https://amzn.to/4cfy6sZ){: target="_blank"} Minimum (in order to connect PC or NAS) counts **11€** for 5m of cables
- TP-Link network cards [2.5](https://amzn.to/4efLTRv){: target="_blank"} or [10Gbits](https://amzn.to/3XiFUFv){: target="_blank "} compatible at the respective price **of 19€** or **80€** depending on the power.

## The material in more detail

### Routers

In order of price while remaining reasonable and as announced above, I will quickly present to you the technical aspects of the Mikrotik RB5009 and Ubiquiti Dream Machine Routers.

#### Mikrotik

##### RB5009 version without POE

The board includes 9 wired ports and one full-size USB 3.0. Seven of the ports are Gigabit Ethernet, another is 2.5 Gigabit Ethernet, and the last is a 10G SFP+ cage. All ports are connected to a powerful Marvell Amethyst family switching chip with a 10Gbps full-duplex line leading to the Marvell Armada Quad-core ARMv8 1.4GHz processor. The CPU and switch chip are located at the bottom of the board – so the case acts as a huge heatsink!

**The RB5009UG+S+IN can be powered in 3 different ways:**

1. PoE input from Ethernet port #1
2. DC jack
3. 2 pin terminal on the side

The cards come with 1GB of DDR4 RAM and 1GB of NAND storage. This combination of ports and components, compared to our other products of similar form factor, provides almost double the performance in configurations with heavy CPU loads.

[https://mikrotik.com/product/rb5009ug_s_in#fndtn-specifications](https://mikrotik.com/product/rb5009ug_s_in#fndtn-specifications){: target="_blank"}

{% include product-embed.html image="mikrotik-rb5009-sans-poe.png" title="MikroTik Router rb5009gug + s +" brand="Mikrotik" description="SFP+ wan cage router and 2.5GBit/s rj45 port" amazlink="3RpZZGl" %}

##### RB5009 version with POE

This version of the RB5009 has all the features of the previous model: Gigabit Ethernet, 2.5 Gigabit Ethernet and a 10 Gigabit SFP+ cage for fiber connectivity. He has speed, power and durability. But this time we added PoE input and output on all eight Ethernet ports. Combined with the 2-pin connector and DC jack, you get 10 distinct power modes. Dual redundant power supplies typically take your uninterrupted uptime to the next level. RB5009UPr+S+IN goes even further!

All power options support a wide voltage range of 24 to 57 V. However, you cannot mix voltages. If you use the PoE output to power other devices, the card will choose the source with the highest voltage (DC jack or 2-pin connector) to power them.

Each PoE output port can provide up to 25W of power. All combo ports are limited to 130W, which should be enough for most setups. You can manually specify the maximum power available from your power sources, if necessary. When it comes to PoE output features, the new RB5009 can trade blows with our legendary PoE switches: CRS354 and CRS328. In the smallest possible format and at the best price on the market!

[https://mikrotik.com/product/rb5009upr_s_in#fndtn-specifications](https://mikrotik.com/product/rb5009upr_s_in#fndtn-specifications){: target="_blank"}

{% include product-embed.html image="mikrotik-rb5009-sans-poe.png" title="MikroTik RB5009UPr+S+in" brand="Mikrotik" description="SFP+ wan cage router and 2.5GBit/s rj45 port and POE+ in" amazlink="3KE0OHs" %}

#### Ubiquiti

##### Ubiquiti Dream Machine

[https://eu.store.ui.com/eu/en?category=all-unifi-cloud-gateways](https://eu.store.ui.com/eu/en?category=all-unifi-cloud-gateways){: target="_blank"}

##### Ubiquiti Dream Machine Pro

10Gbps cloud gateway with 100+ UniFi devices / support for 1000+ clients and 3.5Gbps IPS routing.

Includes a **full suite of UniFi apps** for device management

- 3.5+ Gbps routing with IDS/IPS
- 1 10G SFP+, and 8 GbE RJ45 LAN ports
- 1 10G SFP+* ports, 1 GbE RJ45 WAN ports
- 1 3.5" NVR hard drive bay
- 1.3" touch screen

[Ubiquiti Dream Machine Pro](https://eu.store.ui.com/eu/en/pro/category/all-unifi-cloud-gateways/products/udm-pro){: target="_blank"}

{% include product-embed.html image="ubiquiti-dream-machine.png" title="Ubiquiti Dream Machine Pro" brand="Ubiquiti" description="SFP+ 10G wan cage router and 10G SFP+ Lan port" amazlink="3KFuIex" %}

##### Ubiquiti Dream Machine Pro Max

[Ubiquiti Dream Machine Pro Max](https://eu.store.ui.com/eu/en/pro/category/all-unifi-cloud-gateways/products/udm-pro-max){: target="_blank"}

10Gbps cloud gateway with 200+ UniFi devices / support for 2000+ clients, 5Gbps IPS routing and redundant NVR storage.

Improved computing power and memory for 2x the capacity of the UniFi device and Dream Machine Pro/SE client

Includes a **full suite of UniFi apps** for device management

- 5 Gbps routing with IDS/IPS
- 1 10G SFP+*, 8 GbE RJ45 LAN ports
- 1 10G SFP+* ports, 1 2.5 GbE RJ45 WAN ports
- 2 3.5" NVR hard drive bays with RAID data protection
- Built-in 128GB SSD for NVR detection recordings
- 1.3" touch screen

##### Ubiquiti Dream Machine Pro SE

[Ubiquiti Dream Machine Pro Second Edition](https://eu.store.ui.com/eu/en/pro/category/all-unifi-cloud-gateways/products/udm-se){: target="_blank"}

10Gbps cloud gateway with 100+ UniFi devices/1000+ clients, 3.5Gbps IPS routing and **built-in PoE switching.**

Includes a **full suite of UniFi apps** for device management

- 3.5+ Gbps routing with IDS/IPS
- 1 10G SFP+*, 8 GbE RJ45 LAN ports including (2) PoE+ and (6) PoE
- 1 10G SFP+* ports, 1 2.5 GbE RJ45 WAN ports
- 1 3.5" NVR hard drive bay
- Built-in 128GB SSD for NVR detection recordings
- 1.3" touch screen

{% include product-embed.html image="ubiquiti-dream-machine.png" title="Ubiquiti Dream Machine Pro Second edition" brand="Ubiquiti" description="SFP+ 10G wan cage router and 10G SFP+ Lan port" amazlink="3KCnPuF" %}


### The Switches

[The Zyxel XGS1250-12 is the one I chose](https://www.zyxel.com/fr/fr/products/switch/12-port-web-managed-multi-gigabit-switch-includes-3-port-10g-and-1-port-10g-sfp-xgs1250-12){: target="_blank"}, it seems to me the most relevant because it is equipped with:

- 1 SFP+ 10Gbit/s cage
- 3 RJ45 ports from 2.5 to 10Gbit/s
- 8 1Gbit/s rj45 ports

In addition, this switch is manageable. The unique 5-color LED on the front panel is designed to allow you to instantly check the speed of the link and that's not bad.

{% include product-embed.html image="switch-zyxel-xgs1250-12-10Gbps-2.png" title="Switch Zyxel XGS1250-12 RJ45 10GBPs" brand="Zyxel" description="Zyxel 12-Port Multi-Gigabit Switch Managed Via Web Interface Includes 3 10G Ports and 1 10G SFP+ Port XGS1250-12" amazlink="3Rj4a6M" %}

But there is also the [Zyxel XGS1210-12](https://www.zyxel.com/fr/fr/products/switch/12-port-web-managed-multi-gigabit-switch-with-2-port-2-5g-and-2-port-10g-sfp-xgs1210-12){: target="_blank"} which is cheaper, similar in every way to the 1250 except for the connections, the XGS1210-12 has:

- 2 sfp+ 10Gbit/s cages
- 2 RJ45 ports at 2.5Gbit/s
- 8 1Gbps RJ45 ports

{% include product-embed.html image="switch-zyxel-xgs1210-12-10Gbps-SFP+.png" title="Switch Zyxel XGS1210 10GBPs SFP+" brand="Zyxel" description="Zyxel 12-Port Web-Managed Multi-Gigabit Switch with 2 x 2.5G Ports/2 x 10G SFP+ Ports Desktop/Wall Mounted, 5 Year Warranty XGS1210-12" amazlink="3KEDJEB" %}

It's up to you to choose according to your needs.

### Pciexpress network card

I chose these TP-Link cards because they are the cheapest on the market and the most proven by users. They fit perfectly on motherboards and do the job.

{% include product-embed.html image="tplink-carte-reseau-pciexpress-10gb.png" title="Network Card TP-Link 10Gbit/s" brand="TP-Link" description="TP-Link 10 Gigabit PCIe Network Card TX401, 10Gbps Network, CAT 6A Ethernet Cable Included, Ultra-low Latency, Compatible with Windows 11/10/8.1/8/7, Windows 2019/2016/2012 R2 and Linux Servers" amazlink="3XiFUFv" %}

{% include product-embed.html image="tplink-carte-reseau-pciexpress-2-5gb.png" title="Carte réseau TP-Link 2.5Gbit/s" brand="TP-Link" description="TP-Link 2.5 Gigabit PCIe Network Card TX201, 2.5 Gbps Network, Ultra-low Latency, Compatible with Windows 11/10/8.1/8/7, Windows 2022/2019/2016/2012 R2 and Servers Linux" amazlink="4efLTRv" %}


[**Cable RJ45 category 7:**](https://amzn.to/3KD4lFZ){: target="_blank"}

### Fiber Cable

Internet Box connection to Zyxel XGS1250 switch several scenarios:

- linked together by [AOC fiber cable](https://amzn.to/3x4l8yS){: target="_blank"} (ideal quality link and connectors / disadvantage cannot be pulled into an electrical conduit)

{% include product-embed.html image="cable-fibre-elfcam-aoc-best-choice.png" title="1m 10Gb Active Optical Cable (AOC) OM3" description="SFP+ to SFP+ AOC 10Gbit/s, Compatible with Freebox Ultra (1 Meter)" amazlink="3KH6eSf" %}

- linked together by 2 wire LC/UPC optical fiber (can be pulled into the ducts but more expensive than the previous version)
- With an [SFP+/RJ45 adapter](https://amzn.to/4cbKwkW){: target="_blank"}
  
Internet Box connection to Zyxel XGS1210 switch several scenarios

{% include product-embed.html image="elfcam-module-transfer-sfp+-10gb.png" title="Pack of 2, 10Gb SFP+ Fiber Optic Transceiver Module" brand="Elfcam" description="LC/UPC DM connector (OM3 / OM4), 10GBase-SR SFP+, 850nm DDM 300M, Compatible with Freebox Ultra" amazlink="4aXFPu1" %}

{% include product-embed.html image="elfcam-cable-fibre-om3.png" title="LC/UPC to LC/UPC fiber optic cable" brand="Elfcam" description="OM3 Multimode Duplex Fiber Optic Patch Cord 50/125um LSZH (0.5M)" amazlink="3yWFLxo" %}

Also you could transform a 10Gbps sfp+ cage into a 10Gbps rj45 using this Elfcam adapter.

{% include product-embed.html image="elfcam-module-transfer-sfp+-to-rj45-adapter.png" title="10Gb SFP+ in RJ45" brand="Elfcam" description="10GB SFP+ Transceiver Module (10Gbase-T), Up to 30 Meters over Cat7/Cat8 Ethernet Cable" amazlink="4c8KZo6" %}

**I chose Elfcam** because this equipment was tested with certain boxes on the French market and successfully proven, **I encountered no problems with this equipment and the 10Gbps cards and switches.**

{%- include alert.html type="info" text="Haade.fr is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means to earn fees by linking to Amazon.com and affiliated sites." %}

## Conclusion

Already I sincerely think that the free subscription with the freebox ultra is the most effective for individuals currently on the market. Just look at the results on [nperf](https://media.nperf.com/files/publications/FR/2024-01-10_Barometre-connexions-fixes-metropole-nPerf-2023.pdf){: target="_blank"} or [speedtest ookla](https://www.speedtest.net/fr){: target="_blank"}. Aside from the box which is not the primary subject of this tutorial, you can easily equip yourself with equipment in order to fully use the power of your subscription.