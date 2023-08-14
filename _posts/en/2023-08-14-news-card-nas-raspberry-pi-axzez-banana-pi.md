---
guid: 80
title: "Axzez Interceptor board update"
description: "The Axzez Interceptor embedded board is a Raspberry PI CM4 and now Banana PI CM4 compatible board, ideal for creating a NAS, NVR and HOME AUTOMATION at the same time. Some news about this little gem"
ref: ""
layout: post
author: Nico
date: 2023-08-14 14:57
last_modified_at: 
categories: [News]
tags: []
image: 'nouveautees-carte-axzez-interceptor-nas-nvr-automation-raspberry-banana-pi.png'
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
  - https://www.axzez.com/
  - https://www.axzez.com/software-downloads
---

If you have read this article previously, [Which card to choose to build a NAS + Home Automation]({% post_url /en/2023-03-03-which-nas-card-to-choose-domotic-nvr %}){: target="_blank"}, written by me in March 2023 😉, you could see that among all the cards screened, the Interceptor card manufactured by Axzez was my second choice to mount a **NAS/NVR/HOMEAUTOMATION** combo, behind the **Taco card made by RADXA** (by the way, currently on **sale and in stock at $75** on AllnetChina). If you are interested [Click here](https://shop.allnetchina.cn/products/taco?variant=39519152210022&utm_source=swym-Watchlist&utm_medium=email&utm_term=backinstock&utm_campaign=backinstock&smid=712886a5-59b4-4655-9554-d7bab2c8fe77&variant=39519152210022&empi=6675179208806&epi=39519152210022){: target="_blank"}

{% include product-embed.html image="bananapi-cm4-16gb-emmc.png" title="Bananapi CM4" brand="Banana Pi" description="Banana Pi BPI-CM4 Amlogic A311D Quad Core ARM Cortex-A73 4G LPDDR4 16G eMMC Minipcie 26PIN Support HDMI Output Run Android Linux" affiliate="_DloIOw3" %}

> There are now some new features regarding this map.

First of all Axzez is releasing a **major operating system update** for the Interception board, [which can be downloaded here](https://www.axzez.com/software-downloads){: target="_blank"}. The new Interceptor OS is now **based on the recently released Linux 6.4 and Debian 12 (bookworm)**. Here are some changes for this image of Axzez.

- Used **rtl8365mb master driver** for realtek switch rtl8367rb instead of the hacked **openwrt** driver that previous images used.
- Use of **mainstream Linux DSA architecture** to configure switches (openwrt's "swconfig" is no longer used).
The most visible benefit of this is that virtual network interfaces (e.g. "poe0-0") now reflect the actual status of the Ethernet link.
- The **boot menu is now a real boot menu** and is executed by **u-boot** before Linux boots.
The biggest advantage of **u-boot** is being able to update kernel image and modules at the same time.
 

Axzez Interceptor is now compatible with the **Banana Pi CM4 board**. [An image is available now](https://www.axzez.com/software-downloads){: target="_blank"}.
The BPi CM4 offers a nice speedup over the Raspberry Pi CM4, but there are a few downsides when using this board:

- Only HDMI 0 works because the BPi CM4 only supports one HDMI connection.
- The power button does not work. BPi just didn't wire this pin. We don't know why.
The BPi CM4 cannot boot directly from USB.
 
{% include product-embed.html image="bananapi-cm4-16gb-emmc.png" title="Bananapi CM4" brand="Banana Pi" description="Banana Pi BPI-CM4 Amlogic A311D Quad Core ARM Cortex-A73 4G LPDDR4 16G eMMC Minipcie 26PIN Support HDMI Output Run Android Linux" affiliate="_DloIOw3" %}

Since **the Banana Pi CM4 can only boot from an eMMC or SD card** and the Interceptor Carrier Board v1.5 does not have an SD card slot, the eMMC must be imaged beforehand. This can be done with the Raspberry Pi CM4 IO board or the Banana Pi CM4 IO board. You can either boot the above image from SD card and install it on eMMC, or use the **aml-flash-tool** tool below to install via USB.
 
[https://github.com/Dangku/aml-flash-tool](https://github.com/Dangku/aml-flash-tool){: target="_blank"}

 
If you are interested in the project, [go to the forum](https://www.axzez.com/forum){: target="_blank"} for discussion and do not hesitate to post any useful comments. 👍

