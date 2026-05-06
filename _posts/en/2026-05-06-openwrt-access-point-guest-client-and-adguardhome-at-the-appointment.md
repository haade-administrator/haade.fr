---
guid: 175
title: "OpenWrt tutorials, AP bridge mode, guest access, and network protection"
description: "An OpenWrt tutorial that covers access point, guest mode, and AdGuardHome settings in a functional way using the LUCI interface."
ref: "openwrt"
layout: post
authors: [Nico]
date: 2026-05-06 13:30
last_modified_at: 
categories: [Security, Haade-lab, NAS, News]
tags: []
video: 
image: 'tutorial-openwrt-mode-bridge-ap-guest-et-protection-firewall-adguardhome.png'
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
  - https://openwrt.org/docs/guide-user/network/wifi/guestwifi/guest-wlan
  - https://openwrt.org/docs/guide-user/network/wifi/guestwifi/extras
  - https://openwrt.org/docs/guide-user/network/wifi/wifiextenders/bridgedap
  - https://openwrt.org/docs/guide-user/network/wifi/guestwifi/guestwifi_dumbap
---

I wanted to **write a summary tutorial** because I encountered several problems while setting up my secondary router, which runs **OpenWrt**. I finally **found all the information** in the official documentation, making a few modifications. And in this article, I'll walk you through the entire installation process with images, **which can be configured directly through the Luci interface**.

{% include product-embed.html image="openwrt-one-soutien-le-projet.png" title="Openwrt One" brand="Openwrt" description="Banana Pi OpenWrt One MediaTek MT7981B 1GB DDR4 2.5GbE RJ45 and Gigabit Ethernet RJ45 256 MiB SPI NAND Open Source Smart Router" amazlink="4dfavMl" affiliate="_c3c8vxkT" %}

# 1 - Switching the router to access point mode behind the Freebox

I **have a Freebox** with a fairly comprehensive administration interface. It also **distributes 10G fiber optic traffic over my internal network**, which is why I wanted to keep this Freebox in router mode and **switch the OpenWrt gateway, installed on a Xiaomi AX3200 router, to access point mode**.

To switch OpenWrt to access point mode (bridge mode), it's important to connect **the Freebox's router's LAN port to the LAN port** of the OpenWrt router. **Then, you can connect OpenWrt to the WAN port**.

First, go to **Network > Interfaces** and edit the LAN port.

{% picture posts/{{ page.guid }}/parametrage-interface-lan-mode-bridge-accesspoint.png --alt Configure the OpenWrt LAN interface in bridge access point mode --img width="940" height="199" %}

**Add:**

1. Protocol **Static Address**
2. IPv4 address selection *
3. IPv4 gateway (this is your main router)
4. IPv4 broadcast in **General** 255.255.255.0**
5. In Advanced settings > Use specific DNS servers, enter your router's DNS address; mine is 192.168.1.254
6. Finally, save and apply

{% picture posts/{{ page.guid }}/interface-lan-openwrt-parametre-general.png --alt general LAN settings for OpenWrt in bridge access point mode --img width="940" height="917" %}

* **You must stay within the same IPv4 address range as your router** (mine is 192.168.1.X). When choosing a static IPv4 address, it's best to select one **outside the range of addresses automatically assigned** by your router. **For example, the Freebox** opens IP addresses from 192.168.1.1 to 192.168.1.253, but it only automatically assigns IP addresses up to 192.168.1.230. That's why I chose **192.168.1.233** *this way I'm sure not to conflict with an address that might be assigned.*

{% picture posts/{{ page.guid }}/interface-lan-openwrt-parametre-avance.png --alt advanced LAN settings for OpenWrt in bridge access point mode --img width="940" height="917" %}

It is **recommended to disable the DHCPv4 and DHCPv6 servers** on the router's LAN interface to allow the home automation system to manage IP addresses.

**Go back to LAN interfaces > DHCP server:**

1. In the main settings, select "Ignore interface"
2. In IPv4 settings, disable DHCPv4 services
3. In IPv6 settings, disable RA service and DHCPv6 service
4. Finally, save and apply the changes.

**Ignore the DHCP interface**

{% picture posts/{{ page.guid }}/desactiver-dhcp-interface-lan-ipv4-et-ipv6-picture-1.png --alt Disable DHCPv4 for LAN interface in access point mode --img width="940" height="692" %}

**Disable IPv4 services**

{% picture posts/{{ page.guid }}/desactiver-dhcp-interface-lan-ipv4-et-ipv6-picture-2.png --alt Disable DHCPv4 services for LAN interface in access point mode --img width="940" height="692" %}

**Disable RA and dhcpv6 services**

{% picture posts/{{ page.guid }}/desactiver-dhcp-interface-lan-ipv4-et-ipv6-picture-3.png --alt Disable DHCPv6 services for LAN interface in access point mode --img width="940" height="692" %}

Finally, the router has a WAN port that's currently unusable, but with OpenWrt, nothing can compromise it, so we'll connect it to the LAN interface.

1. Go to **Network > Interfaces**, Devices tab, and **disable the 'WAN' device.**

{% picture posts/{{ page.guid }}/desactiver-port-wan-mode-access-point-openwrt.png --alt disable the WAN device in access point mode --img width="940" height="474" %}

2. **Link the WAN port to the active br-lan device** to create a natural VLAN

{% picture posts/{{ page.guid }}/transformer-port-wan-en-lan.png --alt connecting the WAN port to the OpenWrt LAN interface --img width="940" height="779" %}

> At this point, the OpenWrt router is correctly configured as an access point on your Freebox network. I'm sure you already know this, but a quick reminder never hurts.

## 2 - Creating a Guest Network with Wi-Fi

### Creating the Device

To begin, we'll **create a device named "br-guest"**. Go to Network > Interface > Device.

**Then create a new device**

1. Device type: **Hardware Bridge**
2. Device name: **br-guest**
3. Ports: **None**
4. Select **Configure an empty bridge**

{% picture posts/{{ page.guid }}/creation-appareil-br-guest.png --alt creation of the br-guest device --img width="940" height="779" %}

**Finally, backup**

The screenshot below shows you **both devices** suitable for proper use.

> **PS:** If the MAC address isn't created immediately for the guest br, don't worry, it will be once linked to the guest interface.

{% picture posts/{{ page.guid }}/appareil-brguest-et-brlan-actif-et-valide.png --alt only two devices remaining, br-guest and br-lan --img width="940" height="779" %}

### Let's move on to the interface

In the **interfaces** tab, start by adding a new interface:

1. Name: **guest**
2. Protocol: **static address**
3. Device: **br-guest**

{% picture posts/{{ page.guid }}/nouvelle-interface-guest.png --alt new guest interface in OpenWrt --img width="940" height="305" %}

Finally, click on "Create an interface" and then on **General settings**.

1. Add an **IPv4 address outside your main network**. Mine is 192.168.1.x, so I changed it to 192.168.2.1.
2. Enter a **network mask of 255.255.255.0**. If you don't, **you won't be able to assign IP addresses to your clients**.

{% picture posts/{{ page.guid }}/parametre-general-guest-interface.png --alt general guest interface settings --img width="940" height="917" %}

**In firewall settings**

1. Create a **firewall zone named guest**

{% picture posts/{{ page.guid }}/creation-pare-feux-zone-guest.png --alt creating a guest zone in the guest interface settings --img width="940" height="286" %}

**in dhp server**

{% picture posts/{{ page.guid }}/active-dhcp-interface-guest.png --alt Start by enabling the DHCP server for the guest interface --img width="940" height="186" %}

1. **Activate the server**
2. Add two entries to dhcp-options: **3,192.168.2.1 and 6,192.168.2.1** (the address depends on the one previously entered in ipv4). These options will allow you to connect to the internet.
3. In **ipv6 settings**, enable **server mode** for **RA service** and **dhcpv6 service**.
4. Save, apply, and apply.

{% picture posts/{{ page.guid }}/active-dhcp-interface-guest-avec-dhcp-options.png --alt Enables the DHCP server for guest use and configures DHCP options. --img width="940" height="768" %}

**Enable the DHCP server**

{% picture posts/{{ page.guid }}/active-serveur-dhcp-v6-guest.png --alt Enables the DHCP v6 server for guests --img width="940" height="799" %}

**finally save, save and apply**

{% include product-embed.html image="openwrt-one-soutien-le-projet.png" title="Openwrt One" brand="Openwrt" description="Banana Pi OpenWrt One MediaTek MT7981B 1GB DDR4 2.5GbE RJ45 and Gigabit Ethernet RJ45 256 MiB SPI NAND Open Source Smart Router" amazlink="4dfavMl" affiliate="_c3c8vxkT" %}

At this stage, your interfaces should look like the screenshot below.

{% picture posts/{{ page.guid }}/interfaces-guest-lan.png --alt guest and LAN interfaces --img width="940" height="527" %}

### Create the guest Wi-Fi interface:

1. Go to Wireless Networks and click Add to radio0 (2.4GHz)
2. In Main Settings, enter an **SSID name**
3. In Network, select **Guest**
4. In Wireless Network Security, select **WPA2-PSK** encryption
5. **Choose a password**
6. **Save, apply, and save**

{% picture posts/{{ page.guid }}/creation-reseau-wifi-guest.png --alt guest access wifi network setup --img width="940" height="851" %}

Important: Network protection **by password**

{% picture posts/{{ page.guid }}/protection-mot-de-passe-wifi-guest.png --alt WPA2-PSK Wi-Fi network password protection guest access --img width="940" height="450" %}

> At this stage, you have a guest network that has internet access but not access to your main local network and is protected by the firewall.

### Firewall Configuration (Security First)

Now that the router is configured as an access point (bridge mode), and your guest network is fully active, you need to allow and deny access in the firewall interface.

Go to **Network > Firewall**

In Zone (Zone Forwarding)
1. **Important!** Select "Hide" for the LAN > WAN zone.
2. In the guest line, click Edit and set Inbound/Outbound and Intra-Zone Forwarding to "Allow".
3. Allow forwarding to destination zones: **Select LAN.**
4. Save
5. 
{% picture posts/{{ page.guid }}/parametre-pare-feux-guest.png --alt editing firewall settings for the guest interface --img width="940" height="769" %}

Check the forwards carefully; they must match the screenshot below.

{% picture posts/{{ page.guid }}/interface-pare-feux-definitive.png --alt interface forwarding firewall final --img width="940" height="195" %}

**Let's move on to traffic rules**

In **traffic rules**, we'll create three rules: one to allow communication on DNS port 53, a second to allow communication on DHCP ports 67-68, and a third to deny access to the local area network (LAN).

**For port 53**, click Add

1. Name: Allow-DNS-Guest
2. Select **TCP and UDP**
3. Source zone: **Guest**
4. Destination zone: **Device**
5. Port: **53**
6. Action: **Allow** then Save

{% picture posts/{{ page.guid }}/regle-de-traffic-dns-53.png --alt DNS traffic rule 53 for the guest network --img width="940" height="647" %}

**For ports 67-68**, add a second rule

1. Name: Allow-DHCP-Guest
2. Select **udp**
3. Source zone: **guest**
4. Destination zone: **device**
5. Port: **67-68**
6. Action: **accept** then save

{% picture posts/{{ page.guid }}/regle-de-traffic-port-67-68.png --alt Traffic rule: open ports 67-68 for the guest network --img width="940" height="647" %}

**Block access to the local network** adds a third rule

1. Name: Block-Guest-to-LAN
2. Select any (any)
3. Source zone: guest
4. Destination zone: lan
5. Destination address: 192.168.1.0/24
6. Action: **Deny** then save

{% picture posts/{{ page.guid }}/block-guest-to-lan.png --alt isolates the guest network from the local LAN --img width="940" height="647" %}

> The firewall interface is now correctly configured.

{% picture posts/{{ page.guid }}/interface-definitive-traffic-rules-created-for-guest.png --alt redirection de trafic pour l'interface guest --img width="940" height="417" %}

{% include product-embed.html image="openwrt-one-soutien-le-projet.png" title="Openwrt One" brand="Openwrt" description="Banana Pi OpenWrt One MediaTek MT7981B 1GB DDR4 2.5GbE RJ45 and Gigabit Ethernet RJ45 256 MiB SPI NAND Open Source Smart Router" amazlink="4dfavMl" affiliate="_c3c8vxkT" %}

### Finally, let's install AdGuard Home

**AdGuard Home** is software that blocks ads and trackers across your entire internet network, directly at the connection level.

**Simply put:** Instead of installing an ad blocker on each device (phone, PC, tablet), you install it only once on your network (router, Raspberry Pi, server, etc.). Then, it automatically protects all connected devices.

{%- include alert.html type="warning" text="But be careful, your router needs a minimum amount of RAM; ideally 512MB. In my case, I only have 256MB. Below that, it's tricky because OpenWrt already uses 86MB and AdGuardHome will use about 128MB." link="#" textlink="" %}

To limit **memory breaks**, you can limit **request log delays** and/or **statistics delays** in AdGuard Home. However, to limit requests **if, like me, you only have 256MB**, I recommend selecting the **Hagezi's Pro** and **Hagezi's TFS Mini** DNS blocking lists. All these lists are available on the official GitHub repository: [official Hagezi's lists](https://github.com/hagezi/dns-blocklists){: target="_blank"}

> **ps:** AdGuard DNS filter, the one selected by default, works quite well.

### Installing and configuring AdGuardHome in OpenWrt

**Nothing too complicated**, go to **System > Software**, first click on "Update Lists", then in the **search engine type adguard and install adguardhome and luci-app-adguardhome** (the second will allow you to view the services; a "Services" tab will be created).

{% picture posts/{{ page.guid }}/installation-adguardhome-openwrt-methode-luci.png --alt install adguardhome using the LUCI method in OpenWrt --img width="940" height="410" %}

Since the AdGuard service uses DNS port 53, it will need to be released in OpenWrt. To do this, go to **Network > DNS > Devices and Ports** and in the Server DNS Port field, **enter port 54**. Finally, **save and apply**.

{% picture posts/{{ page.guid }}/changement-port-dns-par-defaut-systeme-openwrt-pour-laisser-place-aux-dns-adguardhome.png --alt Modifying the OpenWrt DNS port to allow AdGuardHome --img width="940" height="664" %}

**Now you can configure AdGuardHome** by going to your IP address: 300 for me **http://192.168.1.2:3000**

**In the AdGuardHome settings:**

1. In the listening settings, choose br-lan and **change the port to 8084, for example, if your default port 80 is already in use.**
2. In the DNS server settings, choose all listening interfaces and leave the **default port 53**.

If you've followed the previous steps correctly, you shouldn't see any messages written in red. After the final information steps, you can connect to AdGuardHome using the link http://ipaddress:8084, for example.

![Initial setup of Adguardhome with OpenWrt]({{ site.baseurl }}/assets/images/posts/175/parametre-adguardhome.webp{{ cachebuster }}){: width="940" height="720" class="lazyload pictaninpost"}{: target="_blank"}

If you followed **this tutorial**, your LAN interface should have both **IPv4 and IPv6 servers disabled**. However, if you decide to leave them enabled, you'll need to enter **some additional rules** in the interface.
To do this, edit the LAN interface again, first selecting the **dedicated IPv6 address**.

{% picture posts/{{ page.guid }}/adresse-ipv4-et-ipv6-lan.png --alt retrieval of IPv4 and IPv6 LAN interface --img width="940" height="129" %}

In **dhcp > main settings**, you will need to add 3 rules to dhcp-options, depending on your LAN IPv4 address:

1. 3,192.168.1.2
2. 6,192.168.1.2
3. 15,lan

{% picture posts/{{ page.guid }}/parametre-specifique-adguardhome-si-dhcp-serveur-reste-actif-pour-interface-lan.png
 --alt AdGuardHome-specific parameter if DHCP is active on the LAN interface, DHCPv4 part --img width="940" height="888" %}

**In IPv6 settings** > IPv6 DNS server advertisement ***paste your IPv6 server without /60*** **in my case: fda2:9907:aefa::1** Finally, save, apply, and save.

{% picture posts/{{ page.guid }}/parametre-specifique-adguardhome-si-dhcp-serveur-reste-actif-pour-interface-lan-ipv6.png
 --alt AdGuardHome-specific parameter if DHCP is active on the LAN interface, DHCPv6 part --img width="940" height="888" %}

{% include product-embed.html image="openwrt-one-soutien-le-projet.png" title="Openwrt One" brand="Openwrt" description="Banana Pi OpenWrt One MediaTek MT7981B 1GB DDR4 2.5GbE RJ45 and Gigabit Ethernet RJ45 256 MiB SPI NAND Open Source Smart Router" amazlink="4dfavMl" affiliate="_c3c8vxkT" %}

## My list of software installed on OpenWrt

- AdGuardHome
- luci-app-adguardhome
- nano
- curl
- luci-i18n-base-fr (for French)

## Conclusion

**There you have it, I didn't invent anything**. You'll find plenty of **information in the official OpenWrt documentation**, but a quick summary doesn't hurt.

10 minutes will be enough to turn your **OpenWrt router into an access point behind a main router**, **create a complete guest interface** to protect your local network, and finally **secure everything with the integrated firewall and the excellent ad and website blocker, AdGuardHome**.

> OpenWrt is an extraordinary piece of software that will allow you to unleash your imagination thanks to its virtually unlimited options.

**Don't forget to support the OpenWrt project** by purchasing the excellent **OpenWrt One** router; ***it's particularly effective with AdGuardHome and its 1GB of RAM.***