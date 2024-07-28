---
guid: 136
title: "Discovering the Shelly Wave 1PM and mini switches"
description: "I will be testing the z-wave 800 shelly Wave 1PM and Wave 1PM mini switches and setting up association rules for live communication"
ref: "Shelly"
layout: post
authors: [Nico]
date: 2024-07-28 09:30
last_modified_at: 
categories: [Tests, Haade-lab, Z-wave]
tags: []
video: 
image: 'decouverte-shelly-z-wave-1-PM-et-1-PM-Mini.png'
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
rating: 5.0
sourcelink:
  - https://support.shelly.cloud/en/support/solutions/articles/103000258471-shelly-qubino-wave-firmware-updates
  - https://github.com/QubinoHelp/Shelly_Wave_FW_OTA
  - https://www.support.getzooz.com/kb/article/1158-zooz-ota-firmware-files/
---

Discovery of the Z-wave 800 modules **Shelly wave 1 PM and 1 PM mini**, what are their particularities, and their differences. Are they up to par? for the price and especially what options are offered for these z-wave modules?

{%- include alert.html type="warning" text="Deal to do, from July 24 to 29, 2024 For her Birthday, Shelly is offering an unbeatable deal for <b>1 Z-wave module purchased on their site, 1 module free</b>" link="https://www.shelly.com/en-gb/products/shelly-birthday" textlink="1 z-wave module purchased = 1 module free" %}

## Prerequisites

- An Open source box (jeedom, Home Assistant) with ZwaveJS UI server
- Or **simply** a ZwaveJS UI server
- a key [z-wave 800 of the Zooz ZST39 type](https://www.domadoo.fr/en/smart-home-hub/7041-zooz-z-wave-plus-800-series-usb-stick-853478006391.html?domid=39){: target="_blank"}
- a Shelly Wave 1PM or 1PM Mini switch

{%- include alert.html type="info" text="Haade.fr is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means to earn fees by linking to Amazon.com and affiliated sites." %}

## Zooz key firmware update procedure

After integrating the module into your system **it will be important to update** the Z-wave modules including the Z-wave key. Remember that the z-wave 800 is recent, the micromodules too, so it is important to do these updates, especially for the Zooz key because the **SDK z-wave 7.19.3 is having issues**.

{%- include alert.html type="info" text="All Zooz and Shelly Wave modules are compatible with Z-waveJS and Z-waveJS UI integrations, therefore compatible with Home Assistant, Jeedom, etc." %}

{% include product-embed.html guid="2201" %}

**Regarding Zooz ZST39 Key:** Do NOT perform NVM backup from Z-Wave 500 Series or 700 Series keys for this device. This feature is currently supported for devices with **firmware 1.30** or higher, otherwise if you are using 1.20 or lower, NVM will block the product. [Please read this article](https://www.support.getzooz.com/kb/article/1276-how-to-perform-an-otw-firmware-update-on-your-zst39-800-long-range-z-wave-stick/){: target="_blank"} **before attempting a firmware update on your Z-Wave key**. If you purchased your **Z-Wave key in June 2024 or later**, it should have the latest version, so do not attempt an update.

[Zooz Firmware Set Page](https://www.support.getzooz.com/kb/article/1158-zooz-ota-firmware-files/){: target="_blank"}
[Firmware 1.3 Zooz ZST39 EU](https://www.getzooz.com/firmware/ZST39_SDK_7.21.3_EU_V01R30.zip){: target="_blank"}

### In ZwaveJS

Updating to the latest Zooz firmware **can be done in the ZwaveJS integration** but not in the Z-waveJS UI library. I made an animated gif showing this update in ZwaveJS.

![Updating the Zooz zst39 coordinator in ZwaveJS is surprisingly simple]({{ site.baseurl}}/assets/images/posts/{{ page.guid }}/mise-a-jour-firmware-coordinateur-zwave-zooz-zst39-avec-zwaveJS.webp{{ cachebuster }}){: width="940" height="536" class="lazyload pictaninpost"}

[Z-waveJS](https://zwave-js.github.io/node-zwave-js/#/){: target="_blank"}

Z-wave JS is a z-wave integration that allows you to fully control the z-wave protocol in an opensource wizard.
The z-waveJS plugin is available on most opensource infrastructures on the market:
**The Jeedom module directly integrates ZwaveJS and the Z-waveJS UI library**
[Jeedom](https://market.jeedom.com/index.php?v=d&p=market&type=plugin&&name=z-wave){: target="_blank"}

In Home Assistant only z-waveJS will appear as a controller as a device, you will need to **install the z-waveJS UI add-on if you want to install the full library** (highly recommended).
[Home Assistant](https://www.home-assistant.io/integrations/zwave_js/){: target="_blank"}

### In ZwaveJS UI

[Z-waveJS UI](https://zwave-js.github.io/zwave-js-ui/#/){: target="_blank"}

**Note:** Z-wave JS UI is a complete z-wave library that works with the Z-waveJS module, in **no case will it allow you to control the protocol** for this you will have to install in parallel the z-waveJS module (depending on your opensource system).

## Inclusion of Z-wave 800 modules

### Traditionally

Modules can be included in two different ways. The first is the oldest, when the time comes, you just have to click on the S inclusion button available on all modules.

**For shelly:**
- Press the button for 1 second
- Press for 2 seconds until the blue light remains fixed
- Press for 2 seconds until the blue button flashes

**And there you will switch to inclusion/exclusion mode.**

The second solution is to include the shelly wave via **the physical switch connected** to the module after a wall installation. Find the manipulation in the instructions provided with the module which is well done.

The z-wave 800 modules are **equipped with optimum security of type S2**, they can be included in traditional ways (by inclusion button specific to the module or via a switch connected to the modules) but in addition it will be necessary to put **a pin key** during the inclusion process available on the module with the qrcode and the additional label.

> So when you are used to integrating z-wave modules you will not find the manipulation very complicated but this is not the case for novices.

### With Smartstart (New)

It is for this purpose that the z-wave alliance has created **Smartstart**. Smartstart was created to **greatly simplify the integration of a z-wave 800 module** and not scare away future owners of z-wave modules.

![Including a z-wave 800 module with smartstart so much easier.]({{ site.baseurl}}/assets/images/posts/{{ page.guid }}/z-wave-smartstart-smartphone-connect-en.webp{{ cachebuster }}){: width="460" height="905" class="lazyload pictaninpost"}

Using your smartphone and your z-wave manager, you can integrate a module by **scanning the qrcode** provided with the module. Then you will simply have to power the module and it will be directly included in **S2 security** in your network.

> It couldn't be simpler.

![Z-wave network inclusion using S button in z-waveJS UI and Home Assistant]({{ site.baseurl}}/assets/images/posts/{{ page.guid }}/inclusion-bouton-s-shelly-wave-1-pm-mini-avec-zwaveJSUI-et-home-assistant.webp{{ cachebuster }}){: width="940" height="506" class="lazyload pictaninpost"}

## Shelly Wave 1 PM

The Shelly wave 1 PM is in the standard dimensions of the **Shelly Plus** series, the displayed price is **less than 30€**

> This is very good news for a Z-wave 800 compatible module

**No worries when unpacking Negative, everything is well done you will find inside:**
- The wave 1 PM module
- the complete user manual
- The sticker with S2 security Pin code

{% picture posts/{{ page.guid }}/deballage-shelly-wave-1-PM-contacteur.png --alt Unboxing the z-wave shelly wave 1 PM switch --img width="940" height="529" %}

{% include product-embed.html image="micromodule-commutateur-z-wave-800-shelly-wave-1pm-shelly-qubino.png" title="Wave 1 PM" brand="Shelly" description="Monitor and measure the power consumption of a wide range of home appliances and office equipment (lights, power lines, security systems, heaters, water heaters, etc.) from anywhere." domlink="actuators-dimmers/6747-z-wave-smart-relay-switch-shelly-wave-1pm-shelly-qubino.html" amazlink="3SeYrzl" %}

A few **additional photos of the Shelly Wave 1 PM**, you will be able to see the size as well as the sticker located on the side containing **all the security information** in order to be able to integrate it using the PIN code into your favorite assistant.

{% picture posts/{{ page.guid }}/presentation-shelly-wave-1-PM-contacteur.png --alt Introducing the Shelly Wave 1 PM Z-Wave Switch --img width="940" height="529" %}

### User manuals

[Online manual Shelly Wave 1 PM](https://kb.shelly.cloud/knowledge-base/wave-1pm){: target="_blank"}

{% include doclink.html pdf="Wave_1PM_mini_user_guide_multilang_V3.pdf" title="User guide V3 shelly wave 1 PM" %}

### Technical data

|Power supply|110-240 V AC / 24–30 V DC|
|Power consumption|< 0.3 W|
|Electricity meter (W)|Yes|
|AC switching voltage max|240 V|
|AC switching current max|16 A|
|DC switching voltage max|30 V|
|DC switching current max|10 A|
|Output power max|2400 W|
|Overheating protection|Yes|
|Overload protection|Yes|
|Range|Up to 40 m indoors (131 ft) (depending on local conditions)|
|Z-Wave™ repeater|Yes|
|CPU|Z-Wave™ S800|
|Frequency bands|Z-Wave™ 868.4 MHz - 865.2 MHz - 869.0 MHz - 921.4 MHz - 908.4 MHz - 916 MHz - 919.8 MHz - 922.5 MHz - 919.7-921.7-923.7 MHz - 868.1 MHz - 920.9 MHz|
|Maximum radio power|transmitted in frequency band(s) < 25 mW|
|Dimensions|37 x 42 x 16 mm ±0.5 mm / 1.46 x 1.65 x 0.63 in ±0.02 in|
|Weight|27 g / 0.95 oz.|
|Mounting|Electrical panel, flush-mounting box|
|Maximum tightening|of electrical terminals 0.4 Nm / 3.5 lbin|
|Cable diameter|0.5 to 1.5 mm² / 20 to 16 AWG|
|Cable stripped length|5 to 6 mm / 0.20 to 0.24 in|
|Housing material|Plastic|
|Color|Red|
|Ambient temperature|-20 °C to 40 °C / -5 °F to 105 °F|
|Humidity|30 % to 70 %|
|Maximum altitude|2000 m / 6562 ft|

### Firmware update

Unlike the key, updating a z-wave module can be done **either in z-waveJS** as for the z-wave controller **or in Z-waveJU UI** and as a picture is worth a thousand words, I took below a screenshot in animated Gif format, follow the process and your module will be updated.

![Updating Shelly wave 1 PM module in ZwaveJS is surprisingly simple]({{ site.baseurl}}/assets/images/posts/{{ page.guid }}/mise-a-jour-firmware-z-wave-shelly-1-PM-avec-zwaveJS-home-assistant.webp{{ cachebuster }}){: width="940" height="536" class="lazyload pictaninpost"}

#### Shelly wave 1 PM Firmware

At the time of writing this article the latest firmware update is version 11.10 dated **[2024-03-28]** with the following fixes:

- Fixed device not working with DC power
- Fixed OTA signaling
- Optimized temperature conversion table
- Other minor improvements

[Shelly Wave 1 PM firmware recovery](https://support.shelly.cloud/en/support/solutions/articles/103000258471-shelly-qubino-wave-firmware-updates#Shelly-Qubino-Wave-1PM){: target="_blank"}

[Direct download links of Firmware .gbl 11.10 EU version](https://github.com/QubinoHelp/Shelly_Wave_FW_OTA/raw/f7119fcb03bce348d3f47871485a1441439d536f/Wave_1PM/EU/Wave_1PM_800_EU_20240328_1238_QNSW-001P16EU_%5Bv11.10%5D_EB201890.gbl){: target="_blank"}

### Extra Bonus

As this is a PLUS series, **you can integrate it with the Shelly WS1 kit** which is nothing more than a switch compatible with various modules of the brand but is not compatible for the Mini versions.

{% picture posts/{{ page.guid }}/bonus-implantation-shelly-wave-1-PM-avec-interrupteur-shelly-wall-switch-ws1-option-plus-serie-contacteur-et-interrupteur.png --alt Bonus integration of the shelly wave 1 PM z-wave switch with the Shelly 1WS switch --img width="940" height="529" %}

You will need to make a small cut in the **plus module**, to be able to integrate the Z-wave antenna.

> Nothing too complicated.

### Installation of the Shelly Z-wave 1 PM

{% include videoPlayer.html youtubeId="r4owWoakqzQ" %}

## Shelly Wave 1 PM Mini

The packaging is identical to the Shelly wave 1 PM only the size of the micromodule differs, **it is extremely small**.

{% picture posts/{{ page.guid }}/deballage-shelly-wave-1-PM-mini-contacteur.png --alt Unboxing the shelly wave 1 PM mini z-wave switch --img width="940" height="529" %}

{% include product-embed.html image="shelly-qubino-micromodule-commutateur-z-wave-800-shelly-wave-1pm-m.png" title="Wave 1 PM Mini" brand="Shelly" description="<b>The world's smallest Z-Wave smart switch</b> for smart control. Automate and remotely control your lights or a wide range of small electrical appliances and measure their power consumption." domlink="actuators-dimmers/7172-shelly-qubino-micromodule-commutateur-z-wave-800-shelly-wave-1pm-m-3800235269145.html" amazlink="4bRr2Sd" %}

A quick overview of the module, unlike the wave 1 PM module, it is not only in size, the mini 1 PM is only compatible in AC 110/230V mode, the connection behind a switch is also different.

{% picture posts/{{ page.guid }}/presentation-shelly-wave-1-PM-mini-contacteur.png --alt Introducing the Shelly Wave 1 PM Mini Z-Wave Switch --img width="940" height="529" %}

**Shelly advertises the wave 1 PM Mini as the smallest module on the market**. And I have to say I have no doubt about it, just look at the pictures below, it is **way smaller than the famous Sonoff Zbmini extreme** which is already considered one of the smallest Zigbee micromodules on the market.

{% picture posts/{{ page.guid }}/shelly-wave-1-PM-mini-le-plus-petit-module-z-wave-du-marche.png --alt Comparison of the z-wave shelly wave 1 PM Mini switch and Sonoff Zbmini extreme --img width="940" height="529" %}

![Available functions of shelly z-wave 1 PM mini and zwaveJS UI, switch and power measurement]({{ site.baseurl}}/assets/images/posts/{{ page.guid }}/fonction-shelly-wave-1PM-mini-switch-et-meter.webp{{ cachebuster }}){: width="940" height="536" class="lazyload pictaninpost"}

### Technical Instructions 

[Shelly Wave 1 PM Mini online instructions](https://kb.shelly.cloud/knowledge-base/wave-1pm-mini){: target="_blank"}

{% include doclink.html pdf="Wave_1PM_Mini_mini_user_guide_multilang_V3.pdf" title="User guide V3 shelly wave 1 PM Mini" %}

### Technical Specifications

|Power supply|110-240 V AC, 50/60 Hz|
|Power consumption|< 0.3 W|
|Power measurement (W)|Yes|
|Maximum AC switching voltage|240 V|
|Maximum AC switching current|8 A|
|Maximum AC switching power|2000 W|
|Overheating protection|Yes|
|Overload protection|Yes|
|Distance|Up to 40 m indoors (131 ft.) (depending on local conditions)|
|Z-Wave® repeater|Yes|
|CPU|Z-Wave® S800|
|Z-Wave® frequency bands|868.4 MHz|
|Max. power of the transmitted radio frequency in the frequency band(s)|< 25 mW|
|Dimensions (H x W x D)|29 x 35 x 16 ±0.5 mm / 1.11 x 1.35 x 0.63 ± 0.02 in|
|Weight|18 ±1 g / 0.63 ±0.04 oz|
|Mounting|Wall console|
|Max. terminal block tightening|0.4 Nm/3.54 lbin|
|Conductor cross-section|0.5 to 1.5 mm²/20 to 16 AWG|
|Conductor stripped length|5 to 6 mm/0.20 to 0.24 in|
|Housing material|Plastic|
|Color|Red|
|Ambient temperature|-20 °C to 40 °C/-5 °F to 105 °F|
|Humidity|30% to 70% RH|
|Maximum altitude|2000 m / 6562 ft.|

### Firmware update

Above I have put together an animated gif to perform the update of the Shelly wave 1 PM in Z-waveJS and Home Assistant. **Below I am repeating an update** of the wave 1 PM mini but this time everything happens **in the Z-waveJS UI library**. It is different but not more complicated. So you will have all the solutions to update the firmwares in OTA of the Z-wave 800 modules.

![Updating Shelly wave 1 PM Mini module in ZwaveJS UI with amazing simplicity]({{ site.baseurl}}/assets/images/posts/{{ page.guid }}/mise-a-jour-firmware-module-shelly-wave-avec-zwavejs-ui.webp{{ cachebuster }}){: width="940" height="541" class="lazyload pictaninpost"}

#### Shelly wave 1 PM Mini Firmware

At the time of writing this article the latest firmware update is version 11.03 dated [2024-03-29] with the following fixes:

- optimized temperature conversion table
- other minor improvements

[Shelly Wave 1 PM Mini firmware recovery](https://support.shelly.cloud/en/support/solutions/articles/103000258471-shelly-qubino-wave-firmware-updates#Shelly-Qubino-Wave-1PM-Mini){: target="_blank"}

[Direct download links of Firmware .gbl 11.03 EU version](https://github.com/QubinoHelp/Shelly_Wave_FW_OTA/raw/8927d1afb0409a1b741e472c7b513befbb2203a9/Wave_1PM_Mini/EU/Wave_Mini_1PM_800_EU_20240403_1310_QMSW-0A1P8EU_%5Bv11.03%5D_9DD2F96C.gbl){: target="_blank"}

### Installing the Shelly Z-wave 1 PM Mini

{% include videoPlayer.html youtubeId="0HsCaq6V3l8" %}

## Comparison Shelly wave 1 PM and 1 PM mini

Below are some screenshots of the Shelly wave 1 PM and 1 PM mini modules, the color is identical, the functions are more numerous for the wave 1 PM, **but the internal functions are almost identical**.

{% picture posts/{{ page.guid }}/comparatif-shelly-wave-1-PM-contacteur-et-wave-1-PM-mini.png --alt Comparison of the shelly wave 1 PM and 1 PM Mini z-wave switches --img width="940" height="529" %}

### Main functions and differences

I have included some functions to compare, but if you want to have access to all the functions, you just have to compare the technical characteristics of the two modules included in this article.

|functions|wave 1 PM|wave 1 PM Mini|
|-------|---------|--------------|
|Power|2400 W|2000 W|
| AC 110/230V|x|x|
| DC 24/30V|x|-|
| Power measurement in W|x|x|
|Overheating protection|x|x|
|Overload protection|x|x|
|Dimensions|37 x 42 x 16 mm|29 x 35 x 16 mm|

### Wiring diagrams

Below I have taken the wiring diagrams of the two Shelly wave 1 PM and 1 PM Mini micromodules, **these are examples** made behind a switch but you can adapt them to also put them behind a socket.

> Be careful with the output power of the sockets.

{% picture posts/{{ page.guid }}/branchement-shelly-wave-1-PM-et-wave-1-PM-Mini.png --alt Shelly Wave 1 PM and 1 PM Mini Z-Wave Switch Wiring Diagram --img width="940" height="529" %}

{%- include alert.html type="info" text="Haade.fr is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means to earn fees by linking to Amazon.com and affiliated sites." %}

## Shelly module associations

As a reminder, **associations** in Z-wave **are the equivalent** of **Bindings** in Zigbee, they allow you to link commands between two modules as an automation could do in Home Assistant, but in case of system losses or disconnection of the adapter the modules will work autonomously between them.

**The big advantage of Z-wave** compared to Zigbee is the fact that the protocol is proprietary all the chips integrated in the modules are designed by the same manufacturer and suddenly all the z-wave modules from 400 to 800 are compatible with each other.

### Shelly wave 1 PM and 1 PM Mini

![Creation of a group 2 ON/OFF association between shelly wave 1 PM and 1 PM Mini in order to control the switch of the two modules without the coordinator]({{ site.baseurl}}/assets/images/posts/{{ page.guid }}/creation-group-association-zwave-on-off-shelly-1PM-et-1PM-mini.webp{{ cachebuster }}){: width="940" height="536" class="lazyload pictaninpost"}

**Group 1:**
**Lifeline group reserved for association with the coordinator**
- INDICATOR_REPORT: LED status
- DEVICE_RESET_LOCALLY_NOTIFICATION: triggered on request
- SWITCH_BINARY_REPORT: report of change of status of output O (O1)
- NOTIFICATION_REPORT: triggered on overheating
- METER_REPORT: triggered by the power consumption of the load (according to the setting of parameters no. 36 to 43)

**Group 2:**
- **Allowed nodes: 9**
- It is assigned to the **switch connected** to the SW (SW1) terminal (uses the Basic command class).
Triggered by SW (SW1). The device sends according to the state of the SW (SW1) (switch or pushbutton) the BASIC_SET ON or BASIC_SET OFF command to the associated device. This command is reflected in the output of the associated device. Supports the following command classes:
- BASIC_SET: Set the On/Off state on the associated device

**This is the association to use to group two simple ON/Off switches**

**Group 3:**
- Allowed nodes: 9
- It is assigned to the switch connected to the SW (SW1) terminal (uses the multi-level start/stop command class).
Triggered by SW (SW1).
- The device sends according to the state of the SW (SW1) (switch or pushbutton) the command SWITCH_MULTILEVEL_START_LEVEL_CHANGE or SWITCH_MULTILEVEL_STOP_LEVEL_CHANGE to the associated device.

**Functional for dimmable lights for example.**

**Supports the following command classes:**
- SWITCH_MULTILEVEL_START_LEVEL_CHANGE: initiate a transition to a new level
- SWITCH_MULTILEVEL_STOP_LEVEL_CHANGE: stop a transition in progress

## Conclusion

Here is a first article presenting the Shelly Z-wave modules and I must say that it is a success on all points **especially on the price side** which have dropped significantly. These Z-wave 800 modules are well thought out, the integration is perfect **be careful the z-wave needs neutral to work** but apart from that I find that this protocol is more stable compared to zigbee. And the functions are more numerous compared to a similar Zigbee module.

> Do not hesitate to invest in these Shelly wave 1 PM or 1 PM mini modules, no doubt, they will satisfy you.
