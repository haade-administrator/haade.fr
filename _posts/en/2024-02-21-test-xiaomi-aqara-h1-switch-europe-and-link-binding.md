---
guid: 109
title: "Tests Aqara h1 switch and bindings"
description: "test the aqara h1 switch europe version with h1 remote control and initiation to the zigbee bindings connection"
ref: "Aqara WS-EUK03 and WXKG15LM"
layout: post
author: Nico
date: 2024-02-21 13:09
last_modified_at: 
categories: [Tests, Zigbee]
tags: []
image: 'bindings-test-aqara-h1-smart-switch.png'
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
rating: 3.8
sourcelink:
  - https://www.zigbee2mqtt.io/devices/WXKG15LM.html#aqara-wxkg15lm
  - https://www.zigbee2mqtt.io/devices/WS-EUK03.html#aqara-ws-euk03
  - https://www.domadoo.fr/fr/peripheriques/5725-aqara-interrupteur-mural-double-sans-fil-h1-zigbee-30-wrs-r02-6970504215023.html?domid=39
  - https://blog.domadoo.fr/87774-nouveaux-interrupteurs-zigbee-aqara/
---
Today I am going to tell you about two Xiaomi Aqara products intended for the European market, These are the Aqara smart switch **H1 double switch WS-EUK03** and the battery-powered switch **Aqara H1 WXKG15LM ( WRS-R02 ) **. According to Xiaomi, these are high-end switches and compatible with Binding, **so are they up to par?**

{% include product-embed.html guid="2189" %}

## Why this test combo

These two products attract my attention for a simple reason, according to the Chinese manufacturer they are compatible with the **Zigbee Bindings connection**. [Inovelli](https://inovelli.com/){: target="_blank"} integrates this function perfectly, then comes **Legrand** but when *you look at their prices you get a nosebleed*. So when you see that Xiaomi offers this function it's worth looking into it.

## Presentation of the {{page.ref}}

I chose to present this combo to you because I am going to test how the duo works and see if it lives up to my expectations.

### Aqara WS-EUK03 (with neutral)

[Official website presentation](https://www.aqara.com/en/product/smart-wall-switch-h1-eu-with-neutral/){: target="_blank"}

{% include product-embed.html guid="2186" %}

{% picture posts/{{ page.guid }}/presentation-aqara-interrupteur-h1-eu-WS-EUK03-avec-neutre.png --alt presentation of the Aqara WS-EUK03 zigbee switch --img width="940" height="529" %}

> Personally I opted for the version with neutral which has two big advantages like almost all switches on the market, **it works in router mode** and *thus strengthens the market network*, and **measures the intensity, displays the information in Kwh, useful for the Energy tab of Home Assistant**. As for the other versions, they are similar to **the WS-EUK03 without neutral**.

**Find all the interesting functions of this switch in the table below:**

|Support of Round Wall Boxes|Apart from 86 mm square wall boxes, the H1 EU also supports round European wall boxes.|
|Premium Build and Metal Frame|The H1 EU uses our award-winning, cleaner design preferred by the majority of our users. The metal frame makes it more rigid and durable.|
|**Convert to Wireless Switch Function**{: .blue}|The button of the switch can be remapped so that you will get an extra "wireless switch" while the light will be controlled by automations.|
|Advanced Protection|With overheat protection, you can be sure your home is safe and secure.|
|**Power Monitoring**{: .blue}|Check power consumption reports and usage statistics to track the efficiency of your electrical appliances.|
|Extra Convenient Remote Control|Compatible with most popular voice assistants and ecosystems: HomeKit, Alexa, Google, IFTTT* such as G2H, M1S and M2, Zigbee2mqtt and ZHA|
|**2-Way Setup Support**{: .blue}|with Wireless Switch H1 Upgrade your existing 2-Way setup using the Wall Switch H1 EU with the Wireless Switch H1, which can be placed on top of the existing wall box used for secondary 2-Way switch.|

{% picture posts/{{ page.guid }}/mise-a-nu-aqara-interrupteur-h1-eu-WS-EUK03-avec-neutre.png --alt under the hood of the Aqara WS-EUK03 zigbee module --img width="940" height="529" %}

Aqara has equipped this module with an NXP JN5189 chip which has the advantage of being high performance with very low energy consumption which integrates the Zigbee and Thread protocol and supports NFC

[NXP JN5189 chip](https://www.nxp.com/products/wireless-connectivity/thread/jn5189-88-t-high-performance-and-ultra-low-power-mcus-for-zigbee-and-thread-with-built-in-nfc-option:JN5189_88_T){: target="_blank"}

{% picture posts/{{ page.guid }}/puce-nxp-aqara-interrupteur-h1-eu-WS-EUK03-avec-neutre.png --alt zoom nxp chip circuit of the Aqara WS-EUK03 zigbee module --img width="940" height="529" %}

**Among the important functions of the module we find:**
- the switching or remote control function by automation
- measurement of consumption
- the 2-way binding function

{% include doclink.html pdf="Smart-Wall-Switch-H1-With-Neutral_Manual_EN.pdf" title="Aqara H1 switch user manual" %}

### Aqara WXKG15LM ( WRS-R02 ) 

[Official website presentation](https://www.aqara.com/en/product/wireless-remote-switch-h1/){: target="_blank"}

{% include product-embed.html guid="2189" %}

{% picture posts/{{ page.guid }}/presentation-aqara-interrupteur-h1-eu-sans-fil-WXKG15LM.png --alt presentation of the Aqara WXKG15LM (WRS-R02) wireless zigbee switch --img width="940" height="529" %}

|**5 Year Battery Life**|Consumes very little energy, and can last for 5 year without changing batteries.|
|High-Speed Click Mode|For seamless control, the response time decreases down to 50 ms.|
|**Multiple Configurable Actions**|Single click, double click, long press, press 2 buttons simultaneously.|
|Flexible Installation|Put on a horizontal surface directly, stick onto a flat surface using the included adhesive pad or screw in place of the existing wall box.|
|**2-Way Switch Setup Support with Wall Switch H1 EU**|Upgrade your existing 2-Way setup using the Wall Switch H1 EU with the Wireless Switch H1, which can be placed on top of the existing wall box used for secondary 2-Way switch.|

{% picture posts/{{ page.guid }}/mise-a-nu-aqara-interrupteur-h1-eu-sans-fil-WXKG15LM.png --alt under the hood of the Aqara WXKG15LM zigbee module (WRS-R02) --img width="940" height="529" %}

Here too Aqara has equipped this module with an NXP JN5189 chip which has the same advantages as the Aqara WS-EUK03 switch.

**The interesting functions of this module:**
- the lifespan of the battery (announced at 5 years)
- the number of actions available per switch
- the bindings function by Zigbee

{% picture posts/{{ page.guid }}/puce-nxp-aqara-interrupteur-h1-eu-WXKG15LM.png --alt zoom circuit chip nxp of zigbee module Aqara WXKG15LM (WRS-R02) --img width="940" height="529" %}

## Characteristics of the {{page.ref}}

### Aqara WS-EUK03

{% include product-embed.html guid="2186" %}

|Product Name|Aqara Smart Wall Switch H1 (With Neutral, Single Rocker/ Double Rocker)|
|Model|WS-EUK03 / WS-EUK04|
|Color|White|
|Product Dimensions|85.8×86×37.55 mm|
|Input Power|100-250VAC, 50/60Hz, Max. 8A (resistive load), μ|
|Wireless Protocols|Zigbee 3.0|
|Operating Temperature|0°C～40°C (32°F～104°F)|
|Operating Humidity|0%~95% RH, Non-condensing|
|What＇s in the box|Smart Wall Switch H1 EU × 1, Quick Start Guide × 1, Screw × 2|

### Aqara WXKG15LM ( WRS-R02 )

{% include product-embed.html guid="2189" %}

|Model|WRS-R02|
|Product Dimensions|85.8 × 86 × 12.5 mm|
|Wireless Protocols|Zigbee 3.0 IEEE 802.15.4|
|Operating Temperature|-10℃～+50℃|
|Operating Humidity|0~95% RH, no condensation|
|Battery|CR2450|
|What＇s in the box|Wireless Remote Switch H1 (Double Rocker) x 1, Sticker x 1, Insulation Tab x 1, User Manual x 1|

## Zigbee2mqtt Integration

The integration of the {{page.ref}} **is complete**, all the functions go back well, this is a good thing for the open source home automation boxes on the market.

Image capture below taken under Jeedom 👌

{% picture posts/{{ page.guid }}/integration-aqara-WS-EUK03-et-WXKG15LM-zigbee2mqtt-jeedom.png --alt integration of the Aqara WXKG15LM zigbee module (WRS-R02) and WS-EUK03 in zigbee2mqtt under jeedom --img width="940" height="529" %}

### Available Features WS-EUK03

for the Aqara WS-EUK03 module you will be able to access the functions:
- on/off
- value of the on/off action
- power in watts
- **energy in Kwh**
- switch the light indication
- memory in the event of a power outage
- the temperature of the switch
- activate or deactivate the LED at night
- number of power outages
- relay or decoupled mode
- the quality of the link

{% picture posts/{{ page.guid }}/fonctionnalites-disponibles-zigbee2mqtt-ws-euk03.png --alt features available in z2m of the Aqara WS-EUK03 zigbee module --img width="561" height="873" %}

### Available Features WXKG15LM (WRS-R02)

for the Aqara WXKG15LM module (WRS-R02) you will be able to access the functions:
- battery status
- battery voltage
- action on click
- fast or multi click mode (2 clicks etc.)
- direct or event mode
- the quality of the link

{% picture posts/{{ page.guid }}/fonctionnalites-disponibles-zigbee2mqtt-aqara-wrs-r02.png --alt features available in z2m of the Aqara WXKG15LM zigbee module (WRS-R02) --img width="511" height="557" %}

## ZHA integration

The integration of the Aqara **WS-EUK03 is complete** but regarding the wireless remote control **Aqara WXKG15LM (WRS-R02) it is not currently recognized**{: .red } and therefore unusable for the rest of the test in binding connection and that's a shame.

### WS-EUK03 integration

Works without problems

{% picture posts/{{ page.guid }}/integration-aqara-WS-EUK03-zha.png --alt integration of the Aqara WS-EUK03 zigbee module in ZHA under Home Assistant --img width="940" height="529" %}

### WXKG15LM integration (WRS-R02)

Inoperative at the moment.

{% picture posts/{{ page.guid }}/integration-aqara-WXKG15LM-zha-non-reconnu.png --alt integration of the Aqara WXKG15LM zigbee module (WRS-R02) in ZHA under Home Assistant but not recognized --img width="940" height="499" %}

## Binding, why is it so interesting!

The Binding function is very interesting because it allows autonomous operation between two devices, even if your home automation box fails. It makes the process more [WAF](#waf--women-acceptance-factor-) and I think essential to ensure foolproof operation.
**Example:** With such products it is possible to ask the electrician during construction to install a single switch per room (without two-way switch and without remote control switch) and to add additional wireless remote controls and thus reduce the cost of the installation bill.

### Which switches offer Binding

**On physical switches**

- Xiaomi D1, E1 and H1
- [Legrand by netamo Celiane wireless](https://www.legrand.fr/pro/catalogue/pack-extension-celiane-with-netatmo-interrupteur-prise-connectee-commande-sans-fils-titane-sans-plaque)
- [Aqara WXCJKG12LM](https://www.zigbee2mqtt.io/devices/WXCJKG12LM.html)

## Linking the {{page.ref}}

{%- include alert.html type="info" text="It is important to keep the Aqara WXKG15LM (WRS-R02) battery-powered remote control awake during the process, setting the command mode and setting the binding links by pressing the switch every second otherwise the device will turn on quickly on standby to save energy" %}

### Videos Links Bindings of {{page.ref}}

Watch the video below, I have included these two products plus the Bindings, this video was made with Zigbee2mqtt and Home Assisitant. **PS: I also tested it with Jeedom and it is functional (Jeedom recently integrated the official Zigbee2mqtt plugin). Little rant, this plugin is paid, you will have to lighten your wallet by €6 in order to be able to use it.**

{% include videoPlayer.html localId="bindings-aqara-h1-manipulation.mp4" %}

After a direct connection **I realize that the Aqara WXKG15LM (WRS-R02) cannot process the difference between the left or right switch**, both control the Aqara WS-EUK03 and It's a shame because it makes this double switch unusable. No OTA update Firmware side.

**To succeed in Binding, don't forget to:**
- after integration set the wired switch to control_relay
- after integrating the wireless switch, don't forget to keep it awake (click every second) during the entire process
- adjusts the function of the wireless intercom on command
- removes existing endpoints
- creates an endpoint between the two devices

> Interestingly, the connection between the two devices is instantaneous, there is no significant delay > 50ms between the moment you click on the remote control and reception on the switch.

[xiaomi.js todo bug aqara WXKG15LM ( WRS-R02 ) ](https://github.com/Koenkk/zigbee-herdsman-converters/blob/eed5fde987891f996c428339569dbff1893e62a1/devices/xiaomi.js#L2370){: target="_blank"}

{% picture posts/{{ page.guid }}/erreur-binding-aqara-interrupteur-sans-fil-WXKG15LM-zigbee2mqtt.png --alt Bug binding zigbee2mqtt and aqara WXKG15LM (WRS-R02) --img width="940" height="695" %}

## WAF ( Women acceptance factor )

> Wife Acceptance Factor, Wife Approval Factor or Wife Appeal Factor (WAF), are design elements that increase the likelihood that a woman will approve the purchase of expensive consumer electronics products such as high–fidelity speakers, Home theater and personal computers.
Sleek, compact, discreet shapes and attractive colors are generally considered WAF. The term comes from a play on electronics jargon such as "form factor" and "power factor" and stems from the stereotype that men value performance and gadgetry, and women value visual and aesthetic factors. <cite>—Jeedom</cite>

{% include product-embed.html guid="2186" %}

## Conclusion

**Aqara makes an interesting product on paper**, however the price **seems excessive** for a quality that does not stand out from the rest. In addition, the direct link **Bindings** works but the Aqara WXKG15LM remote control (WRS-R02) does not currently allow you to dissociate the right/left switch and that's a shame **because the triggering is instantaneous. **which makes the strong function interesting but **makes this device half functional**. I am waiting for a Xiaomi bridge to see if an update is likely to be available and thus integrate it into the Zigbee2mqtt system.
> If for **you the Bindings mode is essential** and you have to install switches in a new construction I advise you either to wait or to switch **to Legrand** but it will be **twice as much Dear**. *And for this price you will not be able to measure consumption.* It's up to you.
