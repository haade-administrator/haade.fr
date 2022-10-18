---
guid: 16
title: "Open source NAS for Raspberry pi CM4 the future!"
layout: post
author: Nico
date: "2021-09-01"
last_modified_at:
category: News
image: "boitier-sata-nas-wiretrustee-raspberrypi-opensource-1.png"
published: true
sitemap:
  changefreq: #always hourly daily weekly monthly yearly never
  exclude: #'yes' or 'no'
  priority: #between 0.0 to 1.0, 1.0 high priority
  lastmod: # date to end modification
locale: en_GB
redirect_from:
  - /en/blog/news/nas-opensource-pour-raspberry-pi-cm4-le-futur
---
After [the end announced by kobol ,](https://www.haade.fr/blog/news/kobol-helios-64-cest-termine/) [Wiretrustee](https://wiretrustee.com/){:target="_blank"} announces the imminent arrival of a SATA card compatible with the Raspberrypi compute module 4 (CM4)

{% picture posts/{{ page.guid}}/carte-sata-wiretrustee-raspberrypi-4-1.png --alt wiretrustee sata card for raspberrypi %}

It is reminiscent of the Helios 4 opensource NAS project created in 2017 that the wiretrustee company is riding the wave of opensource NAS. With a slightly different vision by creating a SATA card housing the raspberry pi 4 (CM4) module. Thus the compatibility of the Raspberry with the options of the CM4 component such as wifi, memory and onboard ssd make it a valuable and above all reliable ally. For the moment the project is at the crowdfounding stage but I am confident when this map will be released.

{% picture posts/{{ page.guid}}/boitier-sata-nas-wiretrustee-raspberrypi-opensource-1.png --alt box sata wiretrustee rapsberrypi 4 %}

Nas wiretrustee raspberry pi cm4 in 2.5 "and 3.5"

Compared to kobol, the wiretrustee card has only **one ethernet network card** and you cannot **connect backup batteries** in order to avoid breakdowns after power cuts of current, in short to use it as an inverter, it may come during a next service. The rest is pretty well thought out.

![ ]({:target="_blank"}blueprint-wiretrustee-sata-raspberry-card-nas-1024x576.png

## Features and specifications

{% picture posts/{{ page.guid}}/wiretrustee-raspberrypi-board-sata-nas-opensource.png --alt opensource wiretrustee sata card for raspberrypi %}

- 4 x SATA 3.0 ports
- overall dimensions 100 x 100 mm PCB
- Support for 2.5 "and 3.5" dd.
- 1gbit Ethernet
- 2 x USB 2.0 (1 x data transfer, 1 x firmware flash)
- micro sd card
- fan outlet
- 12 VDC input current (5.5 x 2.1 mm cylindrical socket or four-pin socket)
- HDMI
- RTC with backup battery
- Supports all versions of the raspberry pi CM4.
- UART

**Wiretrustee SATA** supports **all variants of Compute Module 4.** Thanks to a microSD card slot (for CM4 light), and a firmware flash mode via the top USB 2.0 port (for CM4 with eMMC).

**Wiretrustee SATA** has four SATA ports, one gigabit Ethernet port and a format of (100 x 100 mm). Allowing to build a small home NAS. It supports 2.5 "and 3.5" drives, both SDD and HDD. While 2.5 "drives can be plugged in directly, 3.5" drives require additional extension cords.

> In addition to a fully assembled and tested board. **We plan to offer DIY kits to build your own complete NAS.**
>
> Wiretrustee

## Open source raspberry pi CM4 NAS

The Wiretrustee SATA card has been verified to work with Raspberry Pi operating system with SATA drivers enabled in a cross-compiled kernel. When the time comes, all necessary installation instructions and scripts (including RAID configuration), along with board schematics and PCB layout, will be posted on our website.

## Presentation video

<div class="media">
<iframe width="662" height="372" src="https://www.youtube.com/embed/ahrdx3TYxZc" frameborder="0" allowfullscreen></iframe>
</div>

**Price** of the SATA wiretrustee card: **Unknown?**

**To know the progress** of the project and invest from the release in pre-order register by clicking directly on the link [Wiretrustee Crowdsupply](https://www.crowdsupply.com/wiretrustee/wiretrustee-sata ){:target="_blank"} . In the meantime, I will personally follow the progress of the project because in home automation the NAS is for me an integral part of an installation.
