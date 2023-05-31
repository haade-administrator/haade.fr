---
guid: 50
title: "Which card to choose to mount your nas and home automation with nvr"
description: "In this article I am not automatically looking for a complete Nas but rather a motherboard adapted to the needs of a house, so which card would be best for a Nas and home automation in 2023"
layout: post
author: Nico
date: 2023-03-03 07:34
last_modified_at: 
categories: [Haade-lab, Automation, Security, News]
tags: []
image: 'choose-map-mount-nas-domotic-nvr.png'
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
addViews: 70
comments: true
rating:  
sourcelink:
  - https://www.axzez.com/axzez-circuit-boards
  - https://www.zimaboard.com/
  - https://www.hardkernel.com/
  - https://www.kickstarter.com/projects/argonforty/argon-eon-4-bay-network-storage-powered-by-raspberry-pi-4?lang=fr
  - https://wiki.radxa.com/Taco
  - https://github.com/wiretrustee/cm4-sata-board
  - https://wiki.banana-pi.org/Banana_Pi_BPI-W2
  - https://wiki.radxa.com/News/2019/12/introduce-rockpi-sata-hat
  - https://www.hardkernel.com/shop/odroid-h3-plus/
  - https://www.jeffgeerling.com/
---

I plan to equip a house with a NAS server which will be used **mainly for home automation** but also as a **NVR recorder** server. The priority is the price with the maximum functionality and having control of the complete system.

The question is to know which system I will focus on, Installing home-Assistant on the main disk and thus using home automation and the NVR or installing Openmediavault as a NAS system and thus being able to use other aspects of this server such as document, audio and video storage?

**Evaluation criteria:**

- OMV integration
- availability of equipment
- the price
- the connectors (internal Nvme, )
- Connection to additional disks

**My needs:**

- minimum two hard disks for Zfs mounting
- Minimum 4 GB of ram
- internal storage of 8GB minimum
- 1 A+E slot for google coral (preferably)
- 2 RJ45 ports
- 1 ATX slot

# Independent Maps

## #1 odroid HC4

[Odroid hc4 link wiki](https://wiki.odroid.com/odroid-hc4/odroid-hc4){: target="_blank"}


ODROID-HC4 is a new Home-Cloud platform based on the same ARM processor as ODROID-C4. We adopted 1.8GHz quad-core Cortex-A55 processor made in 12nm and energy efficient with faster 4GB DDR4 RAM. A 16 MB SPI flash chip exists on the board for the useful Petitboot function.

{% picture posts/{{ page.guid }}/odroid-hc4-nas-2sdcard.png --alt Nas card odroid HC4  --img width="800" height="378" %}

**Features**

|**A**| processor (Amlogic S905X3)|**H**| 2x system LED indicators |
|**B**| DDR4 memory (4 GB)|**I**| 1x UART for system console|
|**C**| 2x SATA ports|**J**| 1x IR receiver|
|**D**| 1x RJ45 Ethernet port (10/100/1000)|**K**| 5x GPIO pins (for optional OLED display)|
|**E**| 1x HDMI 2.0|**L**| 1x Micro SD slot|
|**F**| 1x USB 2.0 host port|**M**| 1x cooling fan |
|**G**| 1x DC Power Jack (outer diameter: 5.5mm, inner diameter 2.1mm)|**N**| 1x start switch|

{% picture posts/{{ page.guid }}/ODROID-HC4-disque-boitier-grille-pain.jpg --alt Nas odroid HC4 dd card and more oled box --img width="400" height="400" %}

> Abrège offers a tutorial to mount a Nas with an odroid HC4 card, to follow this tutorial you will of course need a 3D printer

{% include youtubePlayer.html id="luQFv4qzQtU" %}

**Product advantages:**{: .blue}
- supports 2 SSDs
- integrated DDR4 memory
- the price
- debian/openmediavault compatible
- independent of Raspberry stocks

**The - of the product:**{: .red}
- absence Nvme
- no internal storage
- no power supply
  

## #2 Odroid H3+

[odroid h3+ wiki link](https://wiki.odroid.com/odroid-h3/start){: target="_blank"}

ODROID-H3+ has the same form factor and similar power efficiency as its predecessor, the ODROID-H2+. But, H3+ is more powerful, offers higher performance.

With wide compatibility, brand new 64-bit x86 single board computer as well as large memory capacity and advanced IO ports.

{% picture posts/{{ page.guid }}/odroid-h3+-carte-nas.png --alt Nas card odroid H3+ --img width="940" height="361" %}

**Features**

|**A**| Processor (Intel Pentium Silver N6005)|**J**| 1 HDMI 2.0 port |
|**B**| 2 DDR4 SO-DIMM slots (dual channel memory support)|**K**| 1 x DisplayPort 1.2 |
|**C**| 1 PCI Express M.2 module socket (NGFF-2280)|**L**| 2 RJ45 Ethernet ports (10/100/1000/2500) |
|**D**| 1 x eMMC (Embedded Multimedia Card) socket |**M**| 5 x System LED Indicators |
|**E**| 2 SATA power connectors (2.5mm pitch, JST-XH compatible connector)|**N**| 1 x peripheral expansion connector (24 pin) |
|**F**| 2 x SATA3 6.0 Gb/s data connectors|**O**| 1 x power switch |
|**G**| 1 x DC Power Jack|**P**| 1 x reset switch |
|**H**| 2 x USB 3.0|**Q**| 1 x backup battery connector (2 pin) |
|**I**| 2 USB 2.0|**R**| 1 x Active Cooling Fan Connector (4 Pin) |
|**S**| 1 x audio out, 1 x audio in, 1 x SPDIF out ||

**Product advantages:**{: .blue}
- Intel quad core processor
- passive cooling
- 2 DDR4 slots
- 1 NVME HDD slot
- rtc clock included
- 2 removable hard drive slots
- 1 emmc support (internal storage)
- 2 RJ45 ports

**The - of the product:**{: .red}
- the price 160€
- addition of DDR memory not included
- lack of a secondary NVME slot
- emmc addon not included

> This Card is interesting for the creation of a Multimedia NAS, it is the most powerful of the comparison but also the most expensive if you count the options.

## #3 bananapi-bpi-w2

The Banana Pi BPI-W2 is a router-based development board, which can run on a variety of open source operating systems including OpenWrt, Android, and Linux. It has 1 Gigabit LAN ports, 1 Gigabit WAN. it is designed with Realtek RTD1296, Quad-core ARM Cortex-A53. with built-in 2G DDR4 and 8G eMMC flash memory.
{% picture posts/{{ page.guid }}/bananapi-bpi-w2.jpg --alt Nas card bananapi-bpi-w2 --img width="750" height="550" %}

[bananapi-bpi-w2 wiki link](https://wiki.banana-pi.org/Banana_Pi_BPI-W2){: target="_blank"}

**Features**

- Realtek RTD1296, quad-core ARM Cortex-A53
- Mali T820 MP3 graphics card
- 2G DDR4 SDRAM
- 8G eMMC Flash
- Mini PCIE 2.0, 1.1 interface, SDIO interface, M.2
- MicroSD slot supports up to 256GB expansion
- 2 MIC inputs/audio output
- 2 SATA interfaces
- 1x Gigabit LAN 1x Gigabit WAN
- 1xUSB 3.0 2xUSB 2.0
- HDMI input and HDMI output
- Mini PD
- C-TYPE

**Product advantages:**{: .blue}
- 8G internal storage
- 2 x Nvme Key E
- 1 x G-key
- 2 x SSD connection
- the price 108€
- connection for RTC batteries
- multi-system compatible (ubuntu, debian, android)

**The - of the product:**{: .red}
- 2G DDR4
- absence of internal RTC clock
- could have accommodated 4 SSD

{% include product-embed.html image="https://ae01.alicdn.com/kf/Hd02fb80eb00a40689f5ea759a41ad2764/Banana-Pi-BPI-W2-routeur-NAS-intelligent-RTD1296-conception-de-puce.jpg_Q90.jpg_.webp" title="Nas card bananapi bpi w2" brand="Bananapi" description="mount card Nas bananapi bpi w2" affiliate="_Dk2cvU9" %}

## #4  Zimaboard card

[Link Zimaboard](https://www.zimaboard.com/){: target ="_blank"}

**What is ZimaBoard**
Single board server for creators
ZimaBoard is a low-cost single board server exclusively designed for makers and geeks. It has both the scalability of an x86 single board computer (SBC) and the appropriate power of a microserver. This card is ideal for mounting a Nas, router, media server, home automation software, VPN.

**Particularities:**
- Intel Quad Core processor up to 2.2 GHz
- Dual Gigabit Ethernet LAN
- Linux / Windows / OpenWrt / pfSense / Android

{% picture posts/{{ page.guid }}/zimaboard-single-board-server-for-creators.png --alt card Nas Zimaboard --img width="940" height="652" %}

**Features**:
- 2-port SATA 6.0 Gb/s HDD/SSD
- LAN 2 GbE LAN ports
- Realtek 8111H
- USB 2x USB 3.0
- PCle 1x PCle 2.0 x4
- Display 1x Mini-DisplayPort 1.2 4k@60Hz
- DC 12V 5.5x2.5mm power supply

**Product advantages:**{: .blue}
- System [NAS Casaos](https://www.casaos.io/){: target="_blank} compatible
- available in three variants
- home-assistant compatible via casaos
- 2 RJ45 Giga ports
- quality
- Cooling system
- The price

**The - of the product:**{: .red}
- no Nvme ssd support
- absence Nvme ssd A+E M.key
- no Poe+
- accepts two hard disks max, i.e. 72TB
- not intended for integration into a specific box

If I had to choose this card I would take the intermediate version Zimaboard 432 equipped with 4 cores and 4gb of memory and 32gb emmc of capacity, currently the price is $159

## #5 Radxa Penta Sata Hat

Rock Pi Penta Sata Hat is an accessory designed for Rock Pi 4. It uses the high-speed PCIe buses on Rock Pi 4 and provides a complete NAS solution based on Rock Pi 4.

**Features**

- Up to 5x HDD/SSD, support 2.5 inch or 3.5 inch SSD, up to 100t storage
- 4X SATA + 1X ESATA with power
- Use two PCIe 2.1 bus lanes on Rock Pi 4
- Support external standard ATX power supply for HDD and rock pi 4
- DC 12V power input for 2.5/3.5 HDD Power and Rock Pi 4
- Support HDD suspend mode
- Support Software Raid 0/1/5
- Optional PWM control fan for HDD heat distribution
- Optional OLED display for IP/storage information

[extension card Radxa](https://wiki.radxa.com/SATA_HAT){: target="_blank"}

**Rockpi 4C+ Features**

|**Processor**|64Bits Hexa Core Processor<br>Rockchip rk3399-t, Dual cortex-72<br>1.5 GHz frequency with Cortex-A53 Quad<br> 1.0 GHz frequency, Mali T860MP4 GPU<br >support OpenGL ES 1.1 / 2.0 / 3.0 / 3.1 / 3.2<br> Vulkan 1.0, open CL 1.1 1.2, DX11.|
|**Memory**|lpddr4 64-bit LPDDR4 Dual Channel @ 3200MB/s, 1GB/2GB/4GB Optional|
|**Connector**|Storage EMMC<br>μSD card (μsd slot supports up to 256GB μsd card)|
|**Show**|a 2K micro HDMI up to 1440p@60<br>A 4K 2.0 micro HDMI up to 4k@60<br>MIPI DSI 4 LANES via FPC connector<br>Only two of 2K HDMI , HDMI 4K and MIPI DSI can work at the same time.|
|**Audio**|3.5mm Jack HD Codec that supports audio up to 24bit/96kHz audio.|
|**Camera**|MIPI CSI 2 LANES via FPC connector<br>supports up to 800 MP camera (0.3mm pitch connector).|
|**Wireless**|802.11 AC WiFi<br>BT 5.0<br>with external antenna|
|**USB**|USB 3.0 OTG X1, Upper, software configurable to be host or OTG<br>USB 3.0 host x1<br>USB 3.0 dedicated<br>USB 2.0 host x2|
|**Ethernet**|1 x Gbe Lan with Power over Ethernet (POE) support<br>An additional module is required for Poe power supply|
|**IO**|40 pin expansion header<br>2 x uart<br>2 x SPI bus<br>3 x i2c bus<br>1 x PCM / I2<br>1 x SPDIF<br>2 x PWM<br>1 x ADC<br>6 x gpio<br>2 x 5V DC Power in<br>2 x 3.3V DC Power in|
|**Power**|USB C 5V / 3A|
|**Size**|85mm x 54mm|

[Rockpi 4](https://rockpi.org/rockpi4){: target="_blank"}

**Product advantages:**{: .blue}

- suitable for all rockpi 4 boards
- support for emmc storage card
- support for 1x NVME SSD
- support for additional poe
- 5 dd support
- Software armbian/debian/ubuntu
- Oled screen + various lights
- box sold complete with or without rockpi4
- PSTN clock support

**The - of the product:**{: .red}
- many options to add
- generally sold without power supply

> If I had to buy this product I would take it in its entirety, i.e. a box delivered with the Penta Sata module compatible rockpi 4C+

The **kit without rockpi is sold for around €205** or **€330 with the card**, if I were you I would take the latest 4C+ version, link to a compatible power supply and a [12V power supply DC from 40w mini at 10€](https://s.click.aliexpress.com/e/_Ddli1fT){: target="_blank"} i.e. **340€** the set excluding hard drive.

# Raspberry pi CM4 based boards

## #1 Axez

[card link Axzez](https://www.axzez.com/axzez-circuit-boards){: target="_blank"}

Axzez is an American manufacturer Axzez that has recently entered the arena of smart surveillance technologies. The company plans to offer scalable solutions from the enthusiast community to businesses of all sizes. Founded by a group of friends with decades of industry experience, who started by jotting down their ideas on a piece of paper, Axzez plans to shake up the market with beautiful, efficient and innovative products.

The "Interceptor carrier board" is an embedded card hosting the Rapberry pi compute (cm4), it's a good thing to be aware of the current devices, however Axzez sells its card with the CM4. It is designed specifically for NAS and NVR pil hair what I'm looking for.

{% picture posts/{{ page.guid }}/Axzez-carte-nas-nvr-raspberry-cm4.png --alt card Nas CM4 Axzez --img width="940" height="719" %}

**features:**
- 2 HDMI sockets (4Kp60)
- 5 SATA ports (via JMicron JMB585)
- 4 gigabit RJ-45 ports (via a managed RTL8367RB gigabit switch)
- 4 USB 2.0 ports (2 via pin header)
- RS-485
- 24-pin ATX power connector
- RTC clock with battery backup
- 4 x 3-pin fan connectors
- 8-pin header for system power LED, power button and UART serial cable
- Two FFC connectors (40 pos) for future expansion


**Product advantages:**{: .blue}
- choice of CM4 module
- 4 RJ45 switch ports expandable to **16 POE+ ports** (POE+ switch)
- fan connectors
- purchase of additional accessories
- connection of **5** hard disks
- Atx power supply
- FFC connectors
- the price
- [Debian Image](https://www.axzez.com/software-downloads){: target="_blank"} provided by the manufacturer

**The - of the product:**{: .red}
- no NVME SSD support
- no NVME A+E key support (ideal for adding a google Coral internally)
- delivery costs $105 for France.

{% picture posts/{{ page.guid }}/axzez-boitier-raccable.png --alt Nas card CM4 Axzez raccable --img width="940" height="529" %}

If I had to choose this product I would take it all, namely:
- the 19'' plug-in box at $149
- the interceptor card + CM4 at $174
- the 350w power supply at $64
- two poe+ extension modules 2x64$ or 128$
- a Voita 48vdc converter at $17

The total cost delivered: **637$** i.e. approx 610€
At this price you will have to add the hard drives, but for 600€ you have a NAS system, NVR and POE+ switch not bad.

## #2 rockpi taco

[Wiki link of rockpi taco](https://wiki.radxa.com/Taco){: target="_blank"}

Radxa Taco is a complete NAS/router solution designed based on the Raspberry Pi CM4 compute module. It uses high-speed PCIe buses for ultra-fast network connectivity and storage I/O.

{% include product-embed.html image="https://ae01.alicdn.com/kf/S2edd4d00669f40fea8a80f3e404e8ad40/Radxa-TACO-a-d-velopp-le-fond-de-panier-pour-supporter-raspberry-pie-CM4-afin-de.jpg_Q90.jpg_.webp" title="Nas card Radxa Taco" brand="Radxa" description="Nas card, Radxa Nas Taco home automation" affiliate="_DDsHRKD" %}

{% picture posts/{{ page.guid }}/800px-Taco-back.png --alt Nas card Rockpi Taco --img width="800" height="526" %}

**Features**:
- Up to 5x HDD/SSD, supports 2.5 inch or 3.5 inch SSD
- High-speed PCIe switch for SATA and Ethernet
- 1x 2.5G Ethernet and 1x native GbE
- One M.2 M key for NVMe SSD
- An M.2 A+E key for WiFi 6 modules or Google Coral AI module
- 12V DC power input for 2.5 and 3.5 inch HDD
- Support external standard ATX power supply for 3.5 inch HDD
- Support HDD suspend mode
- Software RAID 0/1/5/10 support
- Support USB direct access mode from PC (USB 2.0 only)
- Optional PWM control fan for HDD heat distribution
- Optional OLED display for system information such as IP address or storage usage

**Product advantages:**{: .blue}
- very complete
- Full Nvme support, 2 slots
- 5DD support
- CM4 or radxa CM3 compatible
- Internal storage up to 32gb via CM4
- Memory up to 8GB via CM4
- Raspberrypi OS compatible
- RTC clock

**The - of the product:**{: .red}
- lack Poe+
- no integration box
- no power supply
- depends on Raspberry devices
- The price 145€ without CM4 or CM3
- impossible to boot on NVME ssd to be confirmed
- No POE+
- A known issue is that booting from M.2 NVMe SSD is not supported because there is no driver for the PCIe switch in the Raspberry Pi bootloader.

If you choose this card, and you are equipped with a 3D printer then this link might interest you for printing a [radxa taco compatible box](https://www.thingiverse.com/thing:5811612){: target="_blank"}

{% picture posts/{{ page.guid }}/620px-Taco-front.png --alt Nas card Rockpi Taco --img width="620" height="599" %}

## #3 Wiretrustee hands dirty

I did an article when the company still existed, unfortunately this company had to close its doors but geek friends if you want to make this card I have good news the creators of wiretrustee have made it opensource, you will find in [the github link](https://github.com/wiretrustee/cm4-sata-board){: target="_blank"} all the diagrams to manufacture the printed circuit

[Nas opensource base CM4]({% post_url /en/2021-09-01-nas-opensource-for-raspberry-pi-cm4-the-future %})

{% picture posts/16/carte-sata-wiretrustee-raspberrypi-4-1.png --alt wiretrustee sata card for raspberrypi --img width="820" height="461" %}

Wiretrustee SATA is a Raspberry Pi Compute Module 4 (CM4) Carrier Board for DIY Network Attached Storage (NAS). It is the first card of its kind to directly transfer data via the native CM4 PCIe interface, and thus avoids unstable USB-SATA connections.

Wiretrustee SATA features four SATA ports, one gigabit Ethernet port and a small form factor (100 x 100mm), which makes it possible to build a small home NAS. It supports 2.5" and 3.5" drives, both SDDs and HDDs. While 2.5" drives can be plugged in directly, 3.5" drives require additional extension cables.

In addition to a fully assembled and tested board, we plan to offer DIY kits to build your own complete NAS.

**Features and Specifications**
- 4 SATA 3.0 ports
- 100 x 100 mm four-layer circuit board
- Support for 2.5" and 3.5" drives
- GbE LAN port
- 2 x USB 2.0 (1 x data transfer, 1 x firmware flash)
- MicroSD card slot
- PWM fan connector
- 12 V DC power input (5.5 x 2.1 mm barrel jack or four-pin plug)
hdmi
- RTC with backup battery
- Supports all versions of Raspberry Pi CM4
- UARTs

**Product advantages:**{: .blue}
- open source
- supports 4 ssds
- raspberrypi CM4 base
- PSTN clock

**The - of the product:**{: .red}
- everything must be designed
- no internal storage
- 1 single lan port

# Nas Raspberrypi 4 box

## #1 Radxa Dual/Quad Sata HAT

ROCK Pi Dual/Quad SATA HAT is an addon HAT designed for Raspberry Pi 4. It uses high-speed USB3 buses on Raspberry Pi 4 and provides a complete NAS solution based on Raspberry Pi 4. It has the following features:

**Features**

- Up to 4x HDD/SSD, supports 2.5 inch or 3.5 inch SSD
- Type-C power input with USB PD support for 2.5 inch SSD and Raspberry Pi 4 (hardware v1.1)
- 12V DC power input for 2.5 and 3.5 inch hard drive and Raspberry Pi 4 (hardware v1.2)
- Support external standard ATX power supply for 3.5 inch HDD
- Support HDD suspend mode
- Software RAID 0/1/5 support
- Support USB direct access mode from PC
- Optional PWM control fan for HDD heat distribution
- Optional OLED display for IP/storage information

{% include product-embed.html image="https://ae01.alicdn.com/kf/S59303d95a12e44dcb3745e5a50961cf0t/RASPBERRY-PI-4-KIT-de-serveur-de-stockage-r-seau-SATA-QUAD.jpg_Q90.jpg_.webp" title="Nas Radxa rockpi4" brand="Radxa" description="Nas box, home automation Radxa Nas Rockpi Raspberrypi4" affiliate="_DnBjP05" %}

[Extension card Radxa](https://wiki.radxa.com/SATA_HAT){: target="_blank"}

If I had to buy this product I would take it in full, i.e. a box delivered with the Penta Sata module compatible rockpi 4C

**Product advantages:**{: .blue}
- rasberry pi 4 compatible
- 4 dd support
- raspberrypi OS compatible
- Oled screen + various lights
- box sold complete without raspberry
- PSTN clock support

**The - of the product:**{: .red}
- depends on raspberrypi 4 devices
- no NVME
- generally sold without power supply

{% include product-embed.html image="https://ae01.alicdn.com/kf/Sda19c1ef27114e518a1afa6a57e83bf5N/RASPBERRY-PI-4-KIT-de-serveur-de-stockage-r-seau-SATA-QUAD.jpg_Q90.jpg_.webp" title="Nas hat radxa raspberry pi 4" brand="Radxa" description="Raspberrypi mounting kit in Nas 4 discs by radxa" affiliate="_DnnkRhR" %}

{% include youtubePlayer.html id="Eix0PCB0byQ" %}

If I had to buy this product I would take the complete kit for rasberrypi 4gb it currently costs €177 to that you have to add a raspberrypi 4b at €76 and a [mini 40w 12V DC power supply at €10](https://s.click.aliexpress.com/e/_Ddli1fT){: target="_blank"} i.e. €163 for the set excluding hard drive.



## #2 Argon Eon

As above argus Eon is not a card but a complete Nas box hosting a raspberrypi 4

{% picture posts/{{ page.guid }}/boitier-nas-argon-eon-raspberry-pi.png --alt Nas Argon Eon box for raspberrypi 4 --img width="940" height="529" %}

**Features**

- 1 x Gigabit Ethernet Port
- 2 × USB 3.0
- 2x HDMI
- MicroSDXC card reader
- Access to the GPIO ports of the Raspberry Pi
- The Broadcom chip of the Raspberry Pi will be put in contact with the shell thanks to an extruded metal profile
- Programmable OLED display is located under the multi-function power button
- Active ventilation with a small module of 6 cm by 6 controlled by the system according to the temperatures
- 4 bays for SATA hard disks accommodating 2 SATA hard disks of 3.5 inches and 2 hard disks/SSD SATA of 2.5 inches. The maximum capacity of each HDD bay is 10TB, making a total capacity of 40TB
- Integrated Real Time Clock: ideal for programming tasks (previously impossible with a bare Raspberry Pi)
- Power supply: 12V and 5A (included)

**Product advantages:**{: .blue}
- 4x Sata
- internal rtc clock
- OLED screen
- design

**The - of the product:**{: .red}
- dependent on raspberries
- lack of internal storage
- the price 190€

{% include youtubePlayer.html id="OI3XfWg9ftA" %}

# Projets qui pourrait t'intéresser
1. [Pinas a Nas with pi sauce](https://www.instructables.com/PiNAS-the-Raspberry-Pi-NAS/){: target="_blank"}
2. [Radxa dual/quad/penta hat](https://www.hackster.io/news/radxa-targets-nas-builders-with-rock-pi-raspberry-pi-compatible-dual-quad-and-penta-sata-hats-2b535cdeddff){: target="_blank"}
3. [make a low-budget Nas Bananapi](https://www.hackster.io/news/build-your-own-nas-router-on-a-budget-with-the-banana-pi-df6c4cadb67){: target="_blank"}

# Conclusion

Since my needs are NVR and home automation oriented I will probably go for the [**Taco made by Radxa**](https://s.click.aliexpress.com/e/_DElzckl){: target=" _blank"} with a CM3 card, however I still have doubts about installing debian which is not yet optimized for this product even if Radxa is working on it. The second card that interests me is **the interceptor carrier board from axzez** to see if its price will slow me down, the negative point is the integration of google coral, I would have to connect it to a usb ports.

**Why I did not choose the other solutions:**

|Card|Cause|
|-----|-----|
|Odroid hc4|Lack of internal storage<br>Lack of internal M.2 support|
|Odroid H3+|price without options|
|Bananapi-bpi-w2|2G DDR memory|
|Zimaboard|Too closed to NAS integration|
|Radxa Penta Sata Hat|The fare mainly<br>absence nvme|
|Axzez|The price but complete project|
|wiretrustee|too much work|
|radxa dual|no nvme|
|Argus Eon|idem|
