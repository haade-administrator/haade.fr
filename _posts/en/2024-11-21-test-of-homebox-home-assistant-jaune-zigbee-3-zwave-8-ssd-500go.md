---
guid: 145
title: "Home assistant Yellow, for whom?"
description: "Testing and integration of modules of the Yellow box, the first box to be released by the Nabu Casa company, what are its strong points and who is it for?"
ref: "Home Assistant yellow"
layout: post
authors: [Nico]
date: 2024-11-21 20:45
last_modified_at: 
categories: [Haade-lab, Home-Assistant]
tags: []
video: 
image: 'test-home-assistant-yellow-integration-backup-zigbee-zwave-ssd.png'
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
rating: 4.2 
sourcelink:
  - https://yellow.home-assistant.io/
  - https://www.support.getzooz.com/kb/article/1158-zooz-ota-firmware-files/
---

Some time ago I introduced you to the [box home assistant Green]({% post_url /en/2024-02-12-test-box-homeassistant-green-and-zigbee-key-skyconnect-performance-and-stability %}), a plug'n play box at **less than 100€** which is causing a sensation in the world of home automation. Today it's the turn of the **{{ page.ref }}**, released well before the green box, this box is not ready to work upon purchase, however the different options available still make it **a home automation box of choice but for a more informed public!**

For a **versatile integration** I decided to add a **z-wave 800 GPIO key** from the **Zooz** brand, so the {{ page.ref }} box will be natively compatible with the protocols (wifi, bluetooth, thread, Matter, z-wave 800 and zigbee 3.0), to continue I added a **sandisk 500GB ssd hard drive** to compensate for the storage present on the **CM4 card**, namely if the {{ page.ref }} box *manages the SSD disk well!*

## Prerequisites

- A Home Assistant Yellow Box (wired or **Poe** )
- A USB key to transfer HAOS to the raspberry Pi
- **Optional** (an NVME ssd hard drive)
- **Optional** a ZOOZ ZAC93 z-wave gpio key fully compatible with Yellow

## Unboxing the {{ page.ref }}

The similarities between the **last two boxes produced by Nabu Casa** are aesthetic, oh I would say 99% 🤠, just that you will tell me, but if you don't believe me just look at the photos taken below.

{% picture posts/{{ page.guid }}/deballage-unboxing-box-domotique-home-assistant-yellow.png --alt Unboxing the Home Assistant Yellow box --img width="940" height="529" %}

The {{ page.ref }} box comes with an rj45 cable **(for the POE version)**, a heat sink for the raspberri CM4, thermal pastes and everything needed to fix the whole thing. Nice stickers and [an online installation guide accompanies the rest](https://yellow.home-assistant.io/){: target="_blank"}. The web page dedicated to the {{ page.ref }} box is very complete, **I advise you to visit it without further delay.**

{% picture posts/{{ page.guid }}/finition-box-domotique-home-assistant-yellow.png --alt External finish of the Home Assistant Yellow box --img width="940" height="529" %}

{%- include alert.html type="info" text="Haade.fr is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means to earn fees by linking to Amazon.com and affiliated sites." %}

{% include product-embed.html image="nabu-casa-kit-home-assistant-yellow-avec-alimentation.png" title="Box Home Assistant Yellow" brand="Nabu Casa" description="Home Assistant Yellow is your Matter-ready, scalable and expandable home automation hub." domlink="box-domotique/7113-nabu-casa-kit-home-assistant-yellow-avec-alimentation.html" %}


## Card features {{ page.ref }}

{% picture posts/{{ page.guid }}/tour-horizon-box-domotique-home-assistant-yellow-circuit-imprime.png --alt overview of the printed circuit of the Home Assistant Yellow box --img width="940" height="529" %}

1. Jumper to control the external usb-c connector in uart or usb mode (by default it is in uart mode)
2. boot recovery button (with the jumper on usb) see the [boot recovery function on the official documentation](https://yellow.home-assistant.io/guides/reinstall-os/){: target="_blank"} which allows you to reinstall HAOS
3. Connectors to directly connect a usb/uart connector in order to directly update the Zigbee firmware
4. **GPIO port** in my case will be used to install the Zooz ZAC 93 Z-wave dongle
5. Jumper (I didn't find what it was for)
6. nvme connector
7. raspberry pi cm4 slot
8. POE power supply

{% picture posts/{{ page.guid }}/connectique-box-domotique-home-assistant-yellow.png --alt external connectivity present in the Home Assistant Yellow box --img width="940" height="529" %}

## Installing the Raspberry pi CM4

{% picture posts/{{ page.guid }}/installation-raspberry-cm4-dissipateur-thermique-compatible-home-assistant-yellow.png --alt installing raspberry pi cm4 on Home Assistant Yellow box with heat sink --img width="940" height="529" %}

## Zooz ZAC93 Z-wave 800 key installation

Good News Zooz, produces a [Z-wave ZAC93 Europe/Us compatible 800 series key in GPIO format](https://www.getzooz.com/zac93-gpio-module/){: target="_blank"} and all compatible with the {{ page.ref }}, **what more could you ask for for this integration**.

{% include product-embed.html image="dongle-gpio-zooz-zac93-compatible-home-assistant-yellow.png" title="Dongle GPIO Z-wave 800LR" brand="Zooz" description="Z-wave Long Range 800 key GPIO format compatible Home Assistant Yellow" amazlink="3YQdLEO" %}

The Z-wave 800 key has recently become available on the [Amazon site](https://amzn.to/3YQdLEO){: target="_blank"} This is good news, you can also **order it directly from the official** American website of Zooz [The Smartest House Zac93](https://www.thesmartesthouse.com/products/zooz-800-series-z-wave-long-range-gpio-module-zac93-lr?variant=40083610075199){: target="_blank"}, the key will only cost you **$18** but don't forget the shipping costs.

{% picture posts/{{ page.guid }}/dongle-zwave-gpio-zooz-zac93-compatible-home-assistant-yellow.png --alt Presentation of the z-wave 800 ZAC93 zooz GPIO key and integration on the Home Assistant Yellow box --img width="940" height="529" %}

> Rendering of the ZAC93 GPIO key on the box {{ page.ref }}

{% picture posts/{{ page.guid }}/dongle-zwave-gpio-zooz-zac93-compatible-home-assistant-yellow-installation.png --alt Setting up the z-wave 800 ZAC93 zooz GPIO key on the Home Assistant Yellow box --img width="940" height="529" %}

### Upgrade du firmware 

{%- include alert.html type="warning" text="Download the firmware corresponding to the correct Zone and the correct module, otherwise you risk making the Z-Wade key malfunction. In my case, I downloaded the ZAC93 GPIO Firmware for the European zone." link="https://www.support.getzooz.com/kb/article/1158-zooz-ota-firmware-files" textlink="Download page for firmware available for Zooz range products." %}

**Upgrading the Z-wave firmware** is very simple, start by installing the famous **Z-wave JS** library. Z-wave JS is to the Z-wave protocol what Zigbee2mqtt is to the Zigbee protocol. The difference is that it works in addition by clicking on the link below

[![Installing zwavejs2mqtt](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=a0d7b954_zwavejs2mqtt&repository_url=https%3A%2F%2Fgithub.com%2Fhassio-addons%2Frepository){: target="_blank"}

Below **an animated gif of the Z-wave JS configuration** for the {{ page.ref }} box (in the video I previously installed ZWave-JS)

![Z-wavejs installation and zac93 gpio dongle configuration in home assistant yellow]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/installation-z-wave-js-parametrage-cle-zooz-zac-93-et-update-firmware.webp{{ cachebuster }}){: width="940" height="534" class="lazyload pictaninpost"}{: target="_blank"}

**Then it's not over** you have to link Z-wave JS to the Z-wave device nothing very complicated **follow the doc** available in the z-waveJS module **Documentation section**, retrieve or copy this address ```ws://a0d7b954-zwavejs2mqtt:3000``` go to Settings > Device and service then add an integration, select in the z-wave search engine and deselect use the add-on ...., **finish by pasting the address, and there you go**.

> **Watch the video which shows the manipulation**

![z-wavejs and z-wave link with zac93 gpio dongle configuration in home assistant yellow]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/integration-zwavejs-avec-z-wave-et-reconnaissance-de-la-cle-zooz-zac-93-avec-possibilite-upgrade-firmware.webp{{ cachebuster }}){: width="940" height="534" class="lazyload pictaninpost"}{: target="_blank"}


1. **Download the latest firmware** available [on the dedicated Zooz page](https://www.support.getzooz.com/kb/article/1158-zooz-ota-firmware-files/){: target="_blank"}

## SSD Installation

Nothing could be simpler, use the thread available on the card, insert the NVME disk and lock it all, I won't draw you a picture because it's relatively simple to set up.

{% include product-embed.html image="sandisk-ssd-plus-m2-nvme-500GO.png" title="Hard drive Nvme 500Go" brand="Sandisk" description="Quality hard drive 500GB ssd Nvme compatible Home Assistant Yellow" amazlink="3Za1tbT" %}

{%- include alert.html type="info" text="Currently Home Assistant does not manage the NVME disk separately, let me explain, this disk will only be used for the moment to replace the storage integrated in the raspberry CM4 card and not as an additional disk, so if you want to store your backups or other images/videos from an nvr you will have to transfer the HAOS software from the raspberry pi to this ssd." %}

> In the current state of things the nvme ssd hard drive will not be of full use so optional for the moment unless you have chosen a CM4 lite without storage space. The lite version costs 17€ less than the 32GB version. Choose wisely from the start.

## {{ page.ref }} the essentials

Find in this tab the essentials of the complementary installations for home assistant in order to best prepare your home automation such as automated backup, monitoring, simplified remote access, firmware updates, in short the essentials!

### HACS (complementary directory)

It is becoming almost essential to install hacs in addition to the Home Assistant modules, it is a breeding ground for large-scale integrations and themes, the installation of this module has been simplified and revised this year. **I will spare you the installation in image because the official instructions are very well done.**

[Official HACS Installation Instructions](https://www.hacs.xyz/docs/use/download/download/#to-download-hacs){: target="_blank"}

**Summary:**

1. [![Open your Home Assistant instance and show the dashboard of an add-on.](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=cb646a50_get&repository_url=https%3A%2F%2Fgithub.com%2Fhacs%2Faddons){: target="_blank"}
2. In the Get HACS add-on, select Install.
3. Start the add-on.
4. Access the add-on logs and follow the instructions provided there.
5. Restart Home Assistant
6. In Home Assistant, go to Settings > Devices and services.
7. Clear your browser cache.

HACS will not appear in the list unless you clear your browser cache or do a full refresh.
In the bottom right corner, select **+ Add Integration.**

### Backup

**Manual backup is available by default** in HAOS {{ page.ref }} **Systems/Backups**, you will find in this tab all the backups available before updates, and those requested manually, but if you want to automate backups on a daily/monthly basis, etc, you will need to install an add-on, I **chose Auto Backup**.

> The module manual is complete, if you have any questions do not hesitate to contact me.

[JCWillox Home assistant auto backup](https://jcwillox.github.io/hass-auto-backup/){: target="_blank"}

**Downloads the Hass-auto-backup directory**

[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=jcwillox&repository=hass-auto-backup&category=integration){: target="_blank"}

**Then add the integration**

[![Open your Home Assistant instance and view an integration.](https://my.home-assistant.io/badges/integration.svg)](https://my.home-assistant.io/redirect/integration/?domain=auto_backup){: target="_blank"}

**Blueprint Event and Service**

[JCWillox example Events and Service](https://jcwillox.github.io/hass-auto-backup/examples/){: target="_blank"}

### Monitoring

A lot of functions **like LED control** are done natively with the Yellow version of HAOS. Go to
**Settings > System > Hardware** or click on the link below:

[![Open your Home Assistant instance and display the hardware information.](https://my.home-assistant.io/badges/hardware.svg)](https://my.home-assistant.io/redirect/hardware/){: target="_blank"}

![Set LEDs in Home Assistant Yellow]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/parametrer-les-led-home-assistant-yellow.webp{{ cachebuster }}){: width="568" height="472" class="lazyload pictaninpost"}{: target="_blank"}

**However** if you want to monitor all the functions available with the Raspberry CM4 as well as other functions (70 at the time of writing this article) you will need to **install System monitor**, that's good because it's ultra simple, **click on the link below:**

[![Open your Home Assistant instance and display an integration.](https://my.home-assistant.io/badges/integration.svg)](https://my.home-assistant.io/redirect/integration/?domain=systemmonitor){: target="_blank"}

[System Monitor Home Assistant](https://www.home-assistant.io/integrations/systemmonitor){: target="_blank"}

### Reinstalling the complete system on CM4

A dedicated page of explanations and available by the [Nabu Casa site](https://yellow.home-assistant.io/guides/reinstall-os/){: target="_blank"}

**Option (recommended)** reinstall Home Assistant OS using the red + blue button

1. Make sure that no **USB device is plugged into the device**.
2. Power off your system.
3. Power on the system.
4. Within 3s (or immediately upon booting), **press and hold the red and blue buttons** on the back of the device at the same time.
5. Hold both buttons down **for about 10s**. The yellow LED should not start flashing!
6. Remove the power supply from your system.
7. Follow the [instructions to install Home Assistant OS](https://yellow.home-assistant.io/power-supply/#installing-home-assistant-software-on-kit){: target="_blank"} using the Home Assistant OS installer for Yellow from **a USB stick**.

### Zigbee Flash Firmware

[Wiki Home Assistant for manual firmware flash](https://github.com/NabuCasa/silabs-firmware/wiki/Flash-Silicon-Labs-radio-firmware-manually){: target="_blank"}

install the **Advanced SSH and terminal add-on** by clicking the button below directly

[![Open your Home Assistant instance and start setting up a new integration.](https://my.home-assistant.io/badges/config_flow_start.svg)](https://my.home-assistant.io/redirect/config_flow_start/?domain=a0d7b954_ssh){: target="_blank"}

> Don't forget to disable **Module Protected Mode**, otherwise you won't be able to access the hardware and therefore the key.

{% picture posts/{{ page.guid }}/desactiver-mode-protege-module-advanced-ssh.png --alt disable protected mode in advanced ssh module to access hardware devices --img width="940" height="616" %}

> Below are the steps to install other firmwares and bootloader on the zigbee key

{% highlight yaml %}
pip install universal-silabs-flasher
{% endhighlight %}

{% highlight yaml %}
git clone https://github.com/NabuCasa/silabs-firmware.git
{% endhighlight %}

{% highlight shell %}
cd silabs-firmware
{% endhighlight %}

And install the latest firmware version

{% highlight yaml %}
universal-silabs-flasher \
    --device /dev/ttyAMA1 \
    --bootloader-reset yellow \
    flash \
    --allow-cross-flashing \
    --firmware ./EmberZNet/beta/NabuCasa_Yellow_EZSP_v7.4.0.0_PA32_ncp-uart-hw_115200.gbl \
{% endhighlight %}

If you want to **install the latest version of the bootloader** and firmware available on the new Nabu casa repository, go to this address [https://github.com/NabuCasa/silabs-firmware-builder/releases](https://github.com/NabuCasa/silabs-firmware-builder/releases){: target="_blank"}

go to the Bootloader directory

{% highlight shell %}
cd Bootloader
wget https://github.com/NabuCasa/silabs-firmware-builder/releases/download/v2024.10.21/yellow_bootloader_2.4.2.gbl
{% endhighlight %}

{% highlight yaml %}
universal-silabs-flasher \
    --device /dev/ttyAMA1 \
    --probe-method bootloader \
    --bootloader-reset yellow \
    flash \
    --firmware ./Bootloader/yellow_bootloader_2.4.2.gbl
{% endhighlight %}

**do the same for the firmware**

{% highlight shell %}
cd EmberZNet/beta/
wget https://github.com/NabuCasa/silabs-firmware-builder/releases/download/v2024.10.21/yellow_zigbee_ncp_7.4.4.0.gbl
{% endhighlight %}

{% highlight yaml %}
universal-silabs-flasher \
    --device /dev/ttyAMA1 \
    --bootloader-reset yellow \
    --allow-cross-flashing \
    flash \
    --firmware ./EmberZNet/beta/yellow_zigbee_ncp_7.4.4.0.gbl \
{% endhighlight %}

### Access Externally with FRP

**Unlike other manufacturers** of home automation boxes, **Home Assistant resonates the opposite** by focusing its main strength on **security**. When you access the Home Assistant environment you have **completely local access** by default. If you want to access your box from **outside** you will have to either choose the Nabucasa cloud offer which is of course paid. But you can also set up a **free service** like the **wireguard vpn**, or use a **duckdns** module.
But if you don't know anything about it you can also set up a [**completely free system called FRP**]({% post_url /fr/2021-06-18-frp-configurer-acces-distance-homeassistant %}) and integrated by Haade. I wrote an article about it, in 2-3 clicks you can connect remotely using a *.eu.haade.fr address and I want to say it's all free for 2 years now.
To do this, nothing could be simpler [contact me](../contact/){: target="_blank"} and **I will give you a login and password**, our server is protected by a VPN, for the installation tutorial [I wrote a complete article available at this address]({% post_url /fr/2021-06-18-frp-configurer-acces-distance-homeassistant %}).

## Let's talk about price

To have such a configuration and let's start with the fact **that we want to transfer the storage space of the HAOS operating system** to an SSD, it cost me:

- Home assistant yellow POE version: **159€** (the power supply version costs 10€ less)
- raspberry pi CM4 8GB Lite version with wifi: **88€**
- Zooz Zac93 z-wave key: **36€**
- Sandisk 500GB Nvme SSD: **40€**

> To have an installation with different protocols **(Z-wave, Zigbee, Wifi)** the whole thing cost me: 323€ [WAF](https://en.wikipedia.org/wiki/Wife_acceptance_factor){: target="_blank"} but expensive ..

## Technical specifications {{ page.ref }}

- Carrier board for Raspberry Pi Compute Module 4 (CM4)
- CM4 board-to-board connector
- Supports direct booting from NVMe devices (e.g. for CM4 Lite)
- 12 cm x 12 cm
- Compatible with all 32 CM4 variants
- Quad-core Cortex-A72 (ARMv8) 64-bit / 1.5 GHz
- Up to 8 GB RAM
- Up to 32 GB eMMC storage
- Regulatory approval does not cover wireless variants
- Integrated wireless connectivity for the smart home (Silicon Labs MGM210P Mighty Gecko module)
- Supports Zigbee 3.0, OpenThread and Matter
- 2.4 GHz radio with up to +20 dBm transmit power
- 1024 KB program flash memory, 96 KB RAM data
- Pre-installed with Zigbee 3.0 firmware (EZSP), can be updated
- Expansion slot
- For NVMe SSDs (M-Key)
- M.2 M-Key socket
- ​​Supports 2230, 2242, 2260 and 2280 modules
- PCIe x1

**Note:** Google Coral AI Accelerator does not work in the expansion slot. For more details, see this issue

- Gigabit Ethernet
- 2 x USB 2.0 Type-A Host Port
- 1 x USB-C 2.0 Port (Silicon Labs CP2102N USBXpress USB Bridge)
- UART Mode (default): USB to Serial Debug Adapter
- USB Mode: USB 2.0 CM4 Interface for USB Recovery
- High-quality stereo DAC
- 2V RMS line out on 3.5mm audio jack
- 106dB SNR
- 2 x Push Button
- Red: Factory Reset
- Blue: TBD
- Real-time clock backed up by a CR2032 battery</li>
- Status LED (can be turned off during regular operation)
- Red: Power
- Green: Disk Usage
- Yellow: Home Assistant System Status

**Power:**

- 12V / 2A via barrel DC power connector (5.5mm x 2.1mm)
- Ethernet: PoE+ IEEE 802.3at-2009 Class 3 or 4 (jumper selectable)
- Typical power consumption
- Standby ~1.5W
- Standby with NVMe ~2.5W
- Charging ~5-9W

**Case:**

- 123mm x 123mm x 36mm
- Translucent injected polycarbonate plastic
- Tool-free assembly
- Accommodates a custom heat sink (included)

**Product + points:**{: .blue}

- Design
- Versatility (especially thanks to the raspberry pi)
- Build quality
- Quality of materials used
- LED controllable in the application
- 5 integrated protocols (zigbee, *Z-wave, Thread/Matter, wifi, bluetooth)

**The - of the product:**{: .red}

- Great versatility thanks to Home Assistant
- the price **more than 200€** for a functional system
- For the moment incompatible with Google Coral
- Incomplete external SSD management
- Mandatory assembly upon purchase (not made for a beginner)

{%- include alert.html type="info" text="Haade.fr is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means to earn fees by linking to Amazon.com and affiliated sites." %}

{% include product-embed.html image="nabu-casa-kit-home-assistant-yellow-avec-alimentation.png" title="Box Home Assistant Yellow" brand="Nabu Casa" description="Home Assistant Yellow is your Matter-ready, scalable and expandable home automation hub." domlink="box-domotique/7113-nabu-casa-kit-home-assistant-yellow-avec-alimentation.html" %}


## Conclusion

So I've pretty much covered everything by presenting the {{ page.ref }} box to you, it's **a box** certainly **of quality** but it's not recommended for novices because you'll have to get your hands dirty for the installation, **nothing very complicated** but not at all plug'n play. As a result, it's **more oriented towards experienced home automation engineers**. Which is also its strength because it's modular and you can use 5 protocols without having installed a single USB key.
