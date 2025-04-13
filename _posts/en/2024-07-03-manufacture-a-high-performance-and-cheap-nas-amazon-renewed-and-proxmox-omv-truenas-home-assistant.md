---
guid: 132
title: "High-performance and inexpensive multi-service NAS and Proxmox"
description: "Short tutorials how to make a cheap used multi-disk NAS thanks to Amazon renewed and install a proxmox VM server for OMV or TrueNAS with HomeAssistant OS and Frigate NVR"
ref: ""
layout: post
authors: [Nico]
date: 2024-07-03 21:20
last_modified_at: 
categories: [Haade-lab, News, Home-Assistant, Security]
tags: []
video: 
image: 'monter-nas-pas-cher-et-performant-proxmox-sans-disque-dur.png'
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
  - https://www.proxmox.com/en/
  - https://www.domo-blog.fr/creer-serveur-virtualisation-proxmox-installer-home-assistant-simplement/
  - https://www.cachem.fr/home-assistant-installation-proxmox/
---

You will find on the internet **several ways of performing NAS based on mini-PCs** but for a performance **equivalent to the Intel i5 or i7** the prices can quickly skyrocket.
*This type of tutorial is not the first on the web* but I will offer you a simple way to make a NAS based on **reconditioned** and inexpensive Intel i5 hardware and show you how to install OMV or Truenas on proxmox for overall management. **Little icing on the cake** you can also easily install HomeAssistant OS (HAOS) and the Frigate NVR manager using Proxmox VMs and thus easily combine NAS and Home Automation on the system.

{%- include alert.html type="info" text="Haade.fr is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means to earn fees by linking to Amazon.com and affiliated sites." %}

## Prerequisites

- A refurbished Mini **Lenovo or HP** PC with Intel I5 minimum
- 8 GB DDram minimum
- 128-256GB hard drive
- A DD docking station with **USB 3.0**
- a USB key (to integrate Proxmox)

## The Heart of the system

**Many sites extol the merits of mini-PCs with surrealist power**, but often when you want to invest in purchasing such a device equipped with an i5 processor or equivalent **the prices skyrocket**. But you might as well equip yourself with a powerful **reconditioned** mini-pc. There are plenty of them on the market like the Lenovo thinkcentre M7X or HP EliteDesk 800 and if you do well you could acquire one for **barely more than €100**, they have the advantage of being complete and suitable for multi-service servers that can accommodate a high-performance NAS manager.

### Lenovo Thinkcentre

The Lenovo thinkcentre is small, you can upgrade the capacity of the RAM memory and even integrate a [Google Coral M2 A+E](https://buyzero.de/products/google-coral-m-2-accelerator-a-e-key?_pos=2&_sid=938384f21&_ss=r){: target="_blank"} instead of the M2 key A+E wifi card. In addition, the case is made of steel, and **the USB ports are all 3.2 which can reach a theoretical speed rate of 20Gbs**.

{% include product-embed.html image="lenovo-thincentre-M710Q.png" brand="Lenovo" description="<b>(155€)</b> Lenovo ThinkCentre M710q Tiny Intel Quad Core i5 256 GB SSD 8 GB Memory Windows 11 Pro with W-LAN Business Desktop Computer Mini PC (Refurbished)" amazlink="3RLQGRe" %}

### HP Elitedesk 800

As with the Lenovo, the HP Elitedesk is very small, you can also upgrade the memory **up to 32GB** easily. It also has an M2 A+E wifi card so here too you could integrate a Google [Coral M2 A+E](https://buyzero.de/products/google-coral-m-2-accelerator-a-e-key?_pos=2&_sid=938384f21&_ss=r){: target="_blank"}, the case is also made of steel and all **USB ports are 3.0 with a maximum theoretical speed of 5Gbs**.

[technical files HP Elitedesk 88 g2](https://support.hp.com/ch-fr/document/c04849385){: target="_blank"}

{% include product-embed.html image="hp-elitedesk-800-G2-i5.png" brand="HP" description="<b>(114€)</b> HP EliteDesk 800 G2 Desktop Computer Mini USDT Intel Quad Core i5 256 GB SSD 8 GB Win 10 Pro MAR Ultra Slim Mini PC (refurbished)" amazlink="4cFkff9" %}

### NAS disk storage

Neither of the two mentioned above can integrate 3.5" hard drives, however they can integrate in addition to the Nvme disk a **second hard disk in SSD format**. If you want to make a NAS you will need more backup storage then you can equip yourself with an **Orico docking station** for example which will allow you to connect several disks via USB 3.0.

> This has the advantage of not needing to tinker, you connect and off you go.

{% include product-embed.html image="orico-bay-5-disques-SATA-usb3.png" brand="Orico" description="<b>(87 - 119€)</b> ORICO <b>USB 3.0</b> Docking Station for 2.5 and 3.5 inch Hard Drives/SSDs, Tool-Free External HDD Dock, Supported Offline Cloning, Capacity Up to 5 x 18TB (6558US3-C)" affiliate="_DERFPQJ" amazlink="4bpk6LW" %}

{% include product-embed.html image="station-accueil-sabrent.png" brand="Sabrent" description="<b>(€89)</b> 2.5 and 3.5 inch SATA Hard Drive Docking Station, 4 Bays SSD/HDD to <b>USB 3.2</b> Adapter, External Drive Enclosure Hard, Offline Cloning, Supports UASP, USB Cable Included (DS-U3B4)" amazlink="4eXQp7I" %}

### Hard drives

A NAS needs special disks, which are **RED Hard disks**, and this is what is the most expensive in terms of equipment for a NAS. With the **Seagate 4TO** you can buy 4dd for around €400 and make your NAS.

{% include product-embed.html image="dd-red-nas-seagate-4GB.png" brand="Seagate" description="<b>(4 x 105€)</b> IronWolf Pro 4 TB, NAS HDD internal hard drive, CMR 3.5 inch SATA 6 Gbit/s 7,200 rpm, 128 MB cache, for NAS RAID, Rescue services valid for 3 years (ST4000NE001)" amazlink="4criGSc" %}

### The Final Price

Coming back to our point, if you follow this purchasing model, the installation **will cost you approximately €240** without the DD **and €640 with**. If you decide to modify the RAM you will have to **add 86€ for 32 GB** and if you want to add a **Google Coral costs 45€ Delivered**.

In short **for 771€** you will have a complete system with 16TB of storage and able to accommodate **OMV** or **TrueNAS** for the NAS server, **Frigate** for the NVR part and **Home Assistant OS** version for the home automation side. **Not that expensive for an all in one.**

## Installation

### Proxmox

{%- include alert.html type="info" text="If you use ZFS on Proxmox or through Proxmox (Truenas or Omv) I strongly advise you to increase the memory capacity to 32GB" link="https://amzn.to/3XIbUDe" textlink="Memories Crucial SODIMM DDR4" %}

For **the installation of Proxmox, nothing very complicated**, start by downloading the ISO file, copy it to a USB key using the [Rufus](https://rufus.ie/fr/){: target="_blank"}/[Ventoy](https://www.ventoy.net/en/index.html){: target="_blank"}/[Balenaetcher](https://etcher.balena.io/){: target="_blank"}, restart the PC and boot from the USB key (often F8 key), then answer the two three questions and that's it. To finish, connect to ```IP address: 8006```

[Proxmox VE 8.2.X download link in iso format](https://www.proxmox.com/en/downloads){: target="_blank"}

Find below the page of the site bringing together the VM or LXC installation scripts for the different software to be installed for the following steps.

[Automated shel installers script for Proxmox VE](https://community-scripts.github.io/ProxmoxVE/scripts){: target="_blank"}

#### Change deposits

By default, **Proxmox update repositories include business repositories** subject to a paid subscription. So in the animated gif below I show you how to deactivate corporate deposits and simply add a **No-Subscription** deposit. Finally, update the packages and make Proxmox updates.

Go to the **Proxmox > Updates > Deposits** tab to change the deposits, then go to update, click on refresh and update.

![Removal of Proxmox company deposits and addition of a No-Subscription deposit]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/mise-a-jour-des-depots-proxmox-et-desactiver-depots-entreprises.webp{{ cachebuster }}){: width="940" height="472" class="lazyload pictaninpost"}

{%- include alert.html type="info" text="Proxmox does not recommend using the no-subscription repository in a production environment, as it is less followed than the normal enterprise repository" %}

#### Disable display on server screen after 60 seconds

In order **to optimize energy saving** it is possible to deactivate the screen display after 60 seconds.

**To do this, edit the following file:**

{% highlight shell %}
nano /etc/default/grub
{% endhighlight %}

Then modify the line **GRUB_CMDLINE_LINUX=””** by:

{% highlight shell %}
GRUB_CMDLINE_LINUX="consoleblank=60"
{% endhighlight %}

Finally, apply the change:

{% highlight shell %}
update-grub
{% endhighlight %}

To finish **restart the system**

{% highlight shell %}
reboot
{% endhighlight %}

### Before continuing with the following steps

There are many ways to install images into a container:

- either directly with LXC Proxmox containers
- either install an LXC docker container with portainer and install OMV and/or Frigate through this container.
- if you install OMV you can decide to integrate Docker into OMV and install Frigate in the architecture.

**All options are acceptable**, it's up to you to see how you want to build your architecture.

### OMV

Installing omv is **ultra simplified** thanks to the **tteck** script. Go to the Proxmox tab and click on shell, to access the terminal then paste the script and launch everything, after a few minutes the installation is complete. You can go to OMV.

[Automated OMV shell install script for Proxmox VE](https://community-scripts.github.io/ProxmoxVE/scripts?id=omv){: target="_blank"}

**General rule 8GB of sodimm DDR4 memory at 2133Mhz** is enough to run these 1 virtual machine, and two LXC containers. The most demanding remains Frigate, however if you decide to have a system that does not confine itself within its limits or if you decide to set up a **RAID system in ZFS** you will need more memories, I therefore advise you to use some add/replace depending on the PC chosen.

![1-click installation of openmediavault in an LXC container under Proxmox]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/installation-openmediavault-proxmox-container.webp{{ cachebuster }}){: width="940" height="472" class="lazyload pictaninpost"}

**Look at the characteristics of your PC in my case they are DDR4 2666Mhz SODIMMs:**

{% include product-embed.html image="ram-crusial-sodimm-2666-2x16GO.png" brand="Crucial" description="<b>(86€)</b> Crucial RAM CT2K16G4SFRA32A 32GB Kit (2x16GB) DDR4 3200MHz CL22 (or 2933MHz or 2666MHz) Portable Memory" amazlink="3xENAHO" %}

### TrueNas Scale

Unlike OMV, the installation of **Truenas is not automated** in Proxmox you will need to create a Virtual Machine from the **.iso** image of Truenas Scale.

![3-click installation of Truenas on Proxmox VE using the official installation image]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/installation-truenas-proxmox-nas-pas-cher.webp{{ cachebuster }}){: width="940" height="470" class="lazyload pictaninpost"}

Also **Truenas Scale is installed in a VM** which is much more demanding than a container, plus the disk management system is only possible in ZFS RAID, so it will absolutely be necessary to increase the size of the memory and switch to **at least 16GB** but I advise you **32GB**.

> To choose I advise you OMV compared to TrueNAS which will be less greedy overall because it can be installed in a container.

Below is a video from **Zatoufly** which covers the installation of Truenas in passtrought in Proxmox.

{% include videoPlayer.html youtubeId="va99DvC2rdk" %}


### Home Assistant

As with OMV or Frigate, installing Homeassistant OS is just as simple thanks to the **tteck script**, you will even have several scripts to install Home Assistant but only one will allow you to install HAOS. 

{%- include alert.html type="info" text="Be careful to adjust the number of cores and RAM according to the other two for the stability of your system." %}

[Automated HAOS shell installer script for Proxmox VE](https://community-scripts.github.io/ProxmoxVE/scripts?id=haos-vm){: target="_blank"}

![1-click installation of Home Assistant OS as a virtual machine on Proxmox VE using the script]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/installation-homeassistant-os-proxmox-lxc.webp{{ cachebuster }}){: width="940" height="472" class="lazyload pictaninpost"}

### Frigate NVR

Here too there is a script to install Frigate in an LXC Proxmox container, follow the steps and you will have a positive result.

If after this you encounter difficulties with hardware acceleration you can install frigate through docker by installing [docker in Proxmox](https://community-scripts.github.io/ProxmoxVE/scripts?id=docker){: target="_blank"}. So you can configure the Frigate instance with all the necessary options.

[Automated Frigate shell install script for Proxmox VE](https://community-scripts.github.io/ProxmoxVE/scripts?id=frigate){: target="_blank"}

> But if you decide to use OMV as a NAS then I advise you to install it through the LXC docker container next to frigate and not via the script.
> 
{% picture posts/{{ page.guid }}/resultat-installation-frigate-proxmox.png --alt Frigate installation in proxmox VE --img width="940" height="472" %}

**Below some information links regarding Frigate**

[Frigate NVR](https://frigate.video/){: target="_blank"}

[Frigate NVR Documentation](https://docs.frigate.video/){: target="_blank"}

[Frigate google Coral](https://docs.frigate.video/){: target="_blank"}

#### Google Coral A+E M2 key

If you use Frigate **I strongly advise you to use a Google Coral** and if like me you use a Lenovo Thinkcentre M710Q PC you can connect the coral instead of the internal M2 WIFI card finally if you don't have need WIFI (some PCs do not have the integrated WiFi card but the socket is present.)

[Google coral purchase attractive price A+E M2 key on BuyZero €45 delivered](https://buyzero.de/products/google-coral-m-2-accelerator-a-e-key?_pos=2&_sid=938384f21&_ss=r){: target="_blank"}

{%- include alert.html type="info" text="Haade.fr is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means to earn fees by linking to Amazon.com and affiliated sites." %}

## Performance

In order to understand the server load and RAM management I will provide you with screenshots based on the installed services, they take into account the Lenovo Thinkcentre PC with 4 cores and 8GB of total RAM.

### OMV-Frigate-HomeAssistant

{% picture posts/{{ page.guid }}/stat-perf-omv-frigate-haos.png --alt Performance statistics omv, frigate, homeassistant OS installed in proxmox --img width="940" height="471" %}

### TrueNas-Frigate-HomeAssistant

{% picture posts/{{ page.guid }}/stat-perf-truenas-frigate-haos.png --alt Performance statistics truenas, frigate, homeassistant OS installed in proxmox --img width="940" height="471" %}

### OMV-HomeAssistant

{% picture posts/{{ page.guid }}/stat-perf-omv-haos.png --alt OMV performance statistics and homeassistant OS installed in proxmox --img width="940" height="471" %}

### Frigate-HomeAssistant

{% picture posts/{{ page.guid }}/stat-perf-frigate-haos.png --alt Frigate NVR performance statistics and homeassistant OS installed in proxmox --img width="940" height="454" %}

## Conclusion

This is a simple way to work with a refurbished mini PC and use it as a NAS, NVR and Home Automation server at the same time. And thus optimize the return cost of such a system.
In alphabetical order, the most demanding of RAM are:
1. TrueNAS (16GB mini)
2. Frigate (depends on the integration of a Google Coral)
3. OMV (depends on RAID or ZFS, from 4GB to 16GB minimum)
4. Home Assistant (2GB mini)

> I still advise you to increase the RAM memory, which is often 8GB, and increase it to 32GB so you can accumulate VMs.