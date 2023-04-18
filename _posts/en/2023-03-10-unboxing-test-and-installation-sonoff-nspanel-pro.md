---
guid: 52
title: "Testing the Nspanel Pro V1.5.4 sonoff module"
description: "unpacking, testing and installation on homeassistant of the sonoff nspanel pro module without flashing the system"
layout: post
author: Nico
date: 2023-03-10 15:50
last_modified_at: 
categories: [Haade-lab, Zigbee, Tests]
tags: []
image: 'test-sonoff-nspanel-pro-v154-plus-support.png'
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
rating: 3.5
sourcelink:
  - https://itead.cc/product/sonoff-nspanel-pro-smart-home-control-panel/ref/122/
  - https://blakadder.com/nspanel-pro/
---

Today and thanks to Itead who provided us with the Nspanel pro module as well as [its support](https://itead.cc/product/enclosure-stand/ref/122/){: target="_blank" }, I will be able to test this famous home automation control unit and give you my opinion on this module. Is this the module to have to have Waf access, is the module ready? These are the questions I am asking myself right now.

{% include product-embed.html image="https://i0.wp.com/itead.cc/wp-content/uploads/2022/07/NSPanel-P_preorder_dim_gray.jpg?fit=1000%2C1000&ssl=1" title="Sonoff Nspanel Pro Controller" brand="Sonoff" description="Sonoff Nspanel Pro controller with zigbee 3.0 and integrated wifi" affiliate="_Dd5b51x" iteadlink="sonoff-nspanel-pro-smart-home-control-panel" %}

Sonoff has been selling this module for some time, which completes the Nspanel series, this pro version now includes a Zigbee controller in addition to wifi and the touch screen. The two light control buttons are no longer present, however the touch screen is larger and is equipped with two light sensors.

{% include product-embed.html image="https://i0.wp.com/itead.cc/wp-content/uploads/2022/08/Stand_1000x1000px_01.jpg?fit=1000%2C1000&ssl=1" title="Box for Nspanel Controller" brand="Sonoff" description="Box for Controller Sonoff Nspanel Pro, Nspanel in eu or us version"  iteadlink="enclosure-stand" %}

# Unboxing

I will spare you the stages of the consumables (pouches and foams), in short, the sonoff Nspanel pro module is very well packaged, similar to the Nspanel by the way, it comes with a summary manual and a set of screws. The support also comes with two screws.

{% picture posts/{{ page.guid }}/deballage-sonoff-nspanel-pro-avec-support.png --alt unboxing nspanel pro with its support --img width="940" height="529" %}


For the Nspanel pro as well as the case, the plastics used are of good quality.

{% picture posts/{{ page.guid }}/deballage-sonoff-nspanel-pro-avec-support-capture-2.png --alt unpacking nspanel pro with its support and installation of together --img width="940" height="529" %}

# 1st launch

To carry out a first launch with firmware update it will be necessary the mobile phone with [Ewelink App](https://play.google.com/store/apps/details?id=com.coolkit&hl=fr&gl=US&pli=1){: target="_blank"} installed, and a 2.4Ghz wifi connection available.


## Features

|ZigBee| IEEE 802.15.4 (Zigbee 3.0) |
|Wi-Fi|IEEE 802.11b 2.4GHz|
|Input|100-240V AC 50/60Hz|
|Max Power Consumption|5W MAX; 150mA |
|TFT screen size|3.95 inch (capacitive screen)|
|Screen resolution|480 x 480|
|MCU|PX30|
|CPU|4 Core Cortex-A35|
|GPU|Mali-G31GPU|
|RAM|2 GB, DDR3|
|ROM|8 GB, eMMC 5.1|
|Certifications|CE/UKCA/ SRRC/RoHS|
|Facade materials|PC V0+CRS+Tempered glass|
|Size|86x86x39.5mm|

## Specifications

{% picture posts/{{ page.guid }}/NSPanel-PRO-caracteristique-specification.png --alt NSPanel pro features and specifications --img width="470" height="470" %}

## **the + of the product**
{: .blue}
- Manufacturing quality
- solid case
- very nice rendering of the slab
- Integration of RTSP cameras
- Very good quality optional support

## **the - of the product**
{: .red}
- 5Ghz wifi incompatibility
- Capricious touch screen on vertical movements
- Module closed to Sonoff systems
- Obligation to go through a Chinese Cloud
- Lan options without Cloud too restricted
- zigbee response time too long (when you click on a switch the latency is about 1 second)

# Functions

### Dashboard

After setting up a camera you will be able to access it from the main interface, you will also have access to the different modes (Home Mode, Away or Sleep)

{% picture posts/{{ page.guid }}/mode-nspanel-pro.png --alt access to NSPanel pro modes --img width="470" height="470" %}

### Add a Zigbee device
integration of an NSPanel pro compatible Zigbee device [see list](https://appcms.coolkit.cn/home-assistant/push-home-assistant/14492.html){: target="_blank"} it's hassle-free, just click on the add a device icon and then start pairing.

{% picture posts/{{ page.guid }}/appairage-nspanelpro.png --alt NSPanel pro pairing tab --img width="470" height="470" %}

### Manual
The manual tab is currently empty

### Alarm
The alarm tab allows you to set one or more alarms, there is also a timer function. Ideal for an alarm clock function

### Theme
The theme tab allows you to choose a dynamic or simple wallpaper, nothing more.

### Add Camera
> The integration of two cameras in **RTSP format** was done without worries

![RTSP camera integration in NSPanel Pro]({{ site.baseurl }}/assets/images/posts/52/integration-camera-nspanelpro.webp{{ cachebuster }}){: width="470" height="471"}{: target="_blank"}

### Setting
**The adjustment tab allows you to:**
1. choose the wifi network (only 2.4Ghz)
2. set up the ewelink account
3. set time zone
4. set location for weather
5. adjust display brightness and contrast
6. choice of language
7. adjust sound volume
8. about allows you to see (module info, firmware, ip, device) but also to restart or reset

### Ewelink application side

**This allows you to:**
1. set up a link to a web page that you will find on the NSpanelpro interface
2. *make a voice call on the NSPANEL Pro*
3. to place a zigbee module on one of the 3 screens of the Nspanel Pro
4. Add a scenario
5. to associate a zigbee module via the Gateway button
6. to configure a thermostat via a sonoff module
7. configure an energy interface via a Sonoff energy module


{% picture posts/{{ page.guid }}/application-ewelink-nspanelpro.png --alt App ewelink NSPanel pro --img width="434" height="940" %}

**Ewelink Call Function > Nspanel Pro**

{% picture posts/{{ page.guid }}/fonction-appel-nspanel-pro.png --alt NSPanel pro call function via ewelink application --img width="470" height="470" %}


# Integration in Homeassistant

It is obvious that the NSpanel pro is controllable in the Home-assistant application, 3 choices are available to you for integration.
You can easily control this module via homeassistant but to date all these options are subject to constraints controlled by the Sonoff company.

> personally I chose the SonoffLan option which seems very promising.

## #1 with the Ewelink 100% Cloud module

A video distributed by Sonoff illustrates the installation of the addons well, I did not look into it because it is 100% Chinese Cloud and yes each action carried out by the Sonoff module or on Homeassistant goes through the Web.

> you will have understood it is really not terrible.

Paste the [Github repository link](https://github.com/CoolKit-Technologies/ha-addon){:target="_blank"} to access the addons. Then watch the video below for a complete installation.

![Installing Ewelink Nspanel Pro on Homeassistant]({{ site.baseurl }}/assets/images/posts/52/nspanel-pro-ewelink-installation.webp{{ cachebuster }}){: width="940" height="521"}{: target="_blank"}

**Benefits:**{: .blue}
- Ewelink allows import of [compatible modules](https://appcms.coolkit.cn/home-assistant/push-home-assistant/14492.html){: target="_blank"} included in homeassistant
- one-click import into Lovelace

**Disadvantage:**{: .red}
- **100% Chinese Cloud**
- very few recognized modules
- synchronization with limited homeassistant light/switch modules
- **switch response time 1.5 seconds (huge)**
- *Not compatible NSPanel Pro management*

{% include youtubePlayer.html id="wAMIKhMkSFA" %}

## #2 by flashing the module with 100% local android

Thanks to Blakkader help it is possible to hack sonoff pro by installing and using [Android Debub Bridge ADB](https://developer.android.com/studio/command-line/adb?hl=fr){: target="_blank}. I have not tested this solution because in my opinion it has no interest, installing android is the same as taking an android tablet and installing it on the wall at least you would have a bigger screen.

1. [Download apps to Sonoff NSPanel Pro](https://blakadder.com/nspanel-pro-sideload/){: target="_blank}<br>
2. [Update WebView on NSPanel Pro and Tuya Smart Home panels](https://blakadder.com/android-panel-webview/){: target="_blank}<br>
3. [Use proximity sensor to wake up screen on NSPanel Pro and Tuya Smart Home panels](https://blakadder.com/android-panel-proximity/){:target="_blank"}

**Benefits:**{: .blue}
- **Use all the possibilities of Homeassistant**
- Allows to install additional android modules
- possibility of using **proximity sensors**

**Cons:**{: .red}
- this solution is equivalent to installing android on the NSpanel pro
- screen too small for this kind of system
- **difficult to set up**
- Hack the sonoff system

Watch an installation video below.

{% include youtubePlayer.html id="0kjGH9-XQk4" %}

## #3 Using the [Sonofflan repository](https://github.com/AlexxIT/SonoffLAN){:target="_blank"} (local and/or cloud)
Entirely developed by AlexxIT, this module makes it easy to control Sonoff products. It has the advantage of being very easy to use. However it will still be necessary to configure the Ewelink cloud but without being obliged to use it, finally it depends on Sonoff's Lan compatibility

![Nspanel Pro Sonofflan installation on Homeassistant]({{ site.baseurl }}/assets/images/posts/52/installation-nspanel-sonofflan-homeassistant.webp{{ cachebuster }}){: width="940" height= "517"}{:target="_blank"}

**Benefits:**{: .blue}
- **Perfect integration in Homeassistant**
- possibility to choose the operating system (auto, lan or cloud)

**Cons:**{: .red}
- Currently NsPanel Pro only reports information
- Know how to **install HACS** on Homeassistant
- Takes into account the **compatibilities developed by Sonoff**
- mandatory interface reload to synchronize with the cloud
- the reloading of the interface is not automatic by default it will be necessary to create an automation

{% include product-embed.html image="https://i0.wp.com/itead.cc/wp-content/uploads/2022/07/NSPanel-P_preorder_dim_gray.jpg?fit=1000%2C1000&ssl=1" title="Sonoff Nspanel Pro Controller" brand="Sonoff" description="Sonoff Nspanel Pro controller with zigbee 3.0 and integrated wifi" affiliate="_Dd5b51x" iteadlink="sonoff-nspanel-pro-smart-home-control-panel" %}

# Conclusion

The current version of the firmware tested is the latest one **V1.5.4**, the quality of **manufacturing is good**, the interface and the quality of the panel are superior to the NSPANEL but **in my opinion the module is not in focus**, the horizontal swipe works correctly however the *vertical swipe is random*, you have to do it several times to access the menu, fortunately this module supports the other zigbee modules of the **Sonoff range**. *But for now it's far too limited*, I would have preferred full interoperability with Homeassistant. The functions included as well as the settings are well thought out. In my opinion, it is not an essential module for the moment, but perhaps it will become one the day Sonoff decides to open it to Opensource systems.

> Sonoff announces Matter compatibility on its next Firmware update