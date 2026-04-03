---
guid: 172
title: "Easily unlock your Xiaomi router in 5 minutes"
description: "In this article I'm going to show you how to unlock your Xiaomi router and install OpenWrt in a single command line"
ref: "Xiaomi AX3000T"
layout: post
authors: [Nico]
date: 2026-03-26 08:15
last_modified_at: 
categories: [NAS, Haade-lab, Mini-tutos]
tags: []
video: 
image: 'unlock-your-router-xiaomi-easily.png'
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
  - https://github.com/openwrt-xiaomi/xmir-patcher
  - https://openwrt.org/start
---

Here's an article that might interest many of you. For many years, Xiaomi has been developing a whole range of routers, each more powerful than the last, at increasingly competitive prices!

**The only downside to these routers** is the **MiWiFi management system, which is quite well-designed but sorely lacking in features!**

For many years, it was quite difficult to unlock this router to install the popular OpenWrt system, even with the **xmir-patcher** directory that I use in this tutorial. But it has evolved, and it's now child's play.

This tutorial works for a good number of Xiaomi routers, so feel free to test it. [First, check the issues in the directory to see if any problems persist.](https://github.com/openwrt-xiaomi/xmir-patcher/issues){: target="_blank"}

> **I created this tutorial using a Xiaomi AX3200/AX6S router**, which is still sold on [mi.com](https://www.mi.com/fr/product/xiaomi-router-ax3200/){: target="_blank"}

## Prerequisites

- A Xiaomi router compatible with OpenWrt (in my case, an AX3200/)
- A PC running **Linux** (preferably)
- **Python 3** installed on the PC

## List of OpenWrt-compatible routers

[List of OpenWrt-compatible routers](https://toh.openwrt.org/){: target="_blank"}

{% picture posts/{{ page.guid }}/liste-routeur-xiaomi-compatible-openwrt-03-2026.png --alt List of Xiaomi routers compatible with OpenWrt --img width="687" height="845" %}

{%- include alert.html type="info" text="Depending on router version updates, <b>you may encounter problems</b> or even total incompatibility with OpenWrt. <b>check the version column</b>, if it's empty, then the router is compatible. However, if it is empty, only the specified versions will work." link="https://toh.openwrt.org/" textlink="List of OpenWrt compatible routers" %}

### Example of an easily unlockable router

**Xiaomi AX3000T (version RD23, RD03)**

The Xiaomi AX3000T is a high-performance router, but pay attention to the version notes.

{% include product-embed.html image="ax3000t.png" title="Router AX3000T" brand="Xiaomi" description="Used Xiaomi AX3600 AIoT router, Chinese version, dual-band Wi-Fi 6, 2976 Mbps, Gigabit speed, WPA3 security encryption, A53 signal" affiliate="_c4tzHCqb" %}

{%- include alert.html type="error" text="Note that for the Xiaomi AX3000T router, the manufacturer has launched the new <b>RD03v2</b> model, which features a completely different Qualcomm hardware configuration. It can be identified by its packaging: <b>the barcode ends in 706330 and the model number is DVB4510CN.</b>
<b>→ OpenWRT is not compatible with the new RD03v2!</b>" link="https://openwrt.org/inbox/toh/xiaomi/ax3000t" textlink="Xiaomi AX3000T openwrt information page" %}

**Xiaomi AX3600**

Like the AX3200/AX6S router, the Xiaomi AX3600 is fully supported by xmir-patcher and OpenWrt.

{% include product-embed.html image="ax3600.png" title="Router AX3600" brand="Xiaomi" description="Xiaomi AX3600 AIoT Router, Chinese version, dual-band Wi-Fi 6, 2976 Mbps, Gigabit speed, WPA3 security encryption, A53 signal" amazlink="4sqeZEt" affiliate="_c3a8iTob" %}

## First step: MiWiFi update

**Before unbricking the Xiaomi router**, it's important to **update the firmware**. It's very simple:

- Connect the WAN RJ45 cable to the internet.

- Connect your PC to the LAN RJ45 port.

{% picture posts/{{ page.guid }}/connection-miwifi.png --alt Connecting to the Xiaomi router for the first time --img width="940" height="472" %}

**Next, in your preferred browser**, enter the IP address: [http://192.168.31.1](http://192.168.31.1){: target="_blank"}, and when prompted for the password, enter the default credentials:

login: **admin**
password: **admin**

The first thing Miwifi will ask you to do is change the password. Write it down because you will need it in [step 3 of the unlocking process in the xmir-patcher prompt](step-3-the-xmir-patcher-directory)

Once you're on MiWiFi, go to Settings > Upgrade, check if an update is available, and click Update. Do not touch your router during the update process. **Once the update is successful, the first step is complete.**

Below is an animated GIF illustrating the steps.

![Xiaomi Miwifi router update]({{ site.baseurl }}/assets/images/posts/172/1-ere-etape-mise-a-jour-miwifi.webp{{ cachebuster }}){: width="940" height="472" class="lazyload pictaninpost"}{: target="_blank"}

## Step 2: Retrieve the OpenWrt firmware

At the time of writing, OpenWrt is [distributed in stable version **25.12.1**](https://downloads.openwrt.org/releases/25.12.1/){: target="_blank"}, However, for the Xiaomi AX3200, the OpenWrt website indicates compatibility with version 24, but when searching for stable versions, **I can download version 25.12.1 for the AX3200/AX6S router**. The website pages are clearly outdated. There are two methods to retrieve the latest firmware.

**Method 1: Automatic search**

Use the [firmware selector](https://firmware-selector.openwrt.org/){: target="_blank"}, Enter the model and the desired OpenWrt version.

{% picture posts/{{ page.guid }}/firmware-selector-openwrt.png --alt Download the OpenWRT firmware for your Xiaomi router using Firmware Selector. --img width="940" height="477" %}

Finally, click on the **factory.bin** link.

**Method 2: Manual search**

**To find the correct version**, you need to know the CPU. For me, it will be a Mediatek MT7622. I go to the page [https://downloads.openwrt.org/](https://downloads.openwrt.org/){: target="_blank"} Then, go to **releases > 25.12.1 > targets > mediatek > mt7622** and for the initial installation (unlocking), I download the factory version: **xiaomi_redmi-router-ax6s-factory.bin**

## Step 3: The xmir-patcher directory

[xmir-patcher](https://github.com/openwrt-xiaomi/xmir-patcher){: target="_blank"} It provides a directory that **makes it very easy to unlock a good number of Xiaomi routers** and install the OpenWrt firmware.

To launch this patcher, I open a terminal under Linux, and my PC already has the **Python 3.10 library installed**. If you're running a similar environment, the patch will launch quickly. On Windows, look into installing Python 3.x.

{% highlight shell %}
git clone https://github.com/openwrt-xiaomi/xmir-patcher.git
cd xmir-patcher
{% endhighlight %}

Next, place the previously downloaded OpenWrt firmware (in my case, *xiaomi_redmi-router-ax6s-factory.bin*) into the xmir-patcher/**firmware** folder.

In the terminal, **navigate to the xmir-patcher folder** and, on Linux, run the command `./run.sh` or, on Windows, `run.bat`. First, all Python dependencies will be installed, and then the patcher will display the following prompts.

**Xiaomi XMiR Patcher**

1. - Set IP-address (current value: 192.168.31.1)
2. - Connect to device (install exploit)
3. - Read full device info
4. - Create full backup
5. - Install EN/RU languages
6. - Install permanent SSH
7. - Install firmware (from directory "firmware")
8. - Other functions 
9. - [[ Reboot device ]]
0. - Exit

Now you just need to follow at least steps 1 through 4 and finish with step 7, the firmware installation.

**Step 1:** Select the router's IP address. **If you haven't changed anything, it will remain 192.168.31.1.**

**Step 2:** Connect the router. It will display some information and ask you to enter the router password. Enter the password you changed in MiWiFi or the default **admin**. Then it will prepare the router for unlocking and enable the SSH server.

{% picture posts/{{ page.guid }}/etape-2-xmir-patcher-debricker-xiaomi-router.png --alt Connect the Xiaomi router with xmir-patcher step 2 --img width="700" height="349" %}

**Step 3:** Read the information and pay attention to the router version, depending on the router you want to unbrick, for example, the AX3000T.

**Step 4:** Create a backup of the original firmware.

**Step 7:** Select the firmware included in the /firmware folder, and the firmware will install.

**Final step:** Reboot the device and exit the installer.

> **Now your Xiaomi router is working with OpenWrt.**

It **only took 5 minutes** to unbrick your Xiaomi router without entering a single command line. **Thanks, xmir-patcher!** 😘

## Support the OpenWrt project

You **don't own a router** and you don't know which one to choose, but you know one thing: **you want to use OpenWrt firmware**, so support the project and choose [OpenWrt One](https://s.click.aliexpress.com/e/_c3V0RBGj){: target="_blank"}

**OpenWrt is a Linux operating system** designed for embedded systems. Instead of offering a single, static firmware, OpenWrt provides a fully writable filesystem with package management. This frees you from the manufacturer's imposed application selection and configuration, allowing you to customize the system with packages tailored to any application. For developers, OpenWrt is the ideal framework for creating applications without having to develop a complete firmware; for users, this translates into total customization and the ability to use the system in entirely new ways.

[OpenWrt One, the first 100% OpenWrt router](https://openwrt.org/toh/openwrt/one){: target="_blank"}

November 29, 2024, marked the release of the OpenWrt One router, the first router designed to offer repairability and complete software freedom. Equipped with a **MediaTek MT7981B** SoC, it offers features such as dual-band Wi-Fi 6 (3x3/2x2), PoE, two Ethernet ports, and a mikroBUS expansion connector. **Priced at just over €110**, this router, ideal for advanced users, is tamper-proof and FCC compliant.

{% include product-embed.html image="openwrt-one-soutien-le-projet.png" title="Openwrt One" brand="Openwrt" description="Banana Pi OpenWrt One MediaTek MT7981B 1GB DDR4 2.5GbE RJ45 and Gigabit Ethernet RJ45 256 MiB SPI NAND Open Source Smart Router" amazlink="4dfavMl" affiliate="_c3c8vxkT" %}

## Conclusion

**Thanks to Xmir-patcher, unbricking your Xiaomi router takes only 5 minutes**, it couldn't be simpler, and thank you for this essential directory. Don't forget to support the OpenWrt opensource project by purchasing the One router 🫰.