---
guid: 106
title: "Comparison of Zigbee thermostatic heads"
description: "Showing of 3 Zigbee thermostatic heads Xiaomi Aqara SRTS-A01, Sonoff TRVZB and Moes ZTRV-BY-100, a comparison to find out which is the best faucet in the contest"
ref: ""
layout: post
author: Nico
date: 2024-01-29 00:05
last_modified_at: 
categories: [Tests, Zigbee, Automation]
tags: []
image: 'comparison-thermostat-head-xiaomi-sonoff-moes-zigbee.png'
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
---

Since last year the government has been advising us to heat **our homes to 19°C** to save energy. Even more recently, a subsidy is offered, and as is often the case to benefit from it, it must be **applied by a professional**. Unfortunately this type of installation is often expensive.
**In the meantime, I offer you a tutorial on the operation of 3 thermostatic faucets** using the Zigbee protocol. How much does it cost to homemate your heating using Zigbee?

This test aims to **compare 3 thermostatic faucets and help you choose according to your needs**. This comparison was carried out on a home-assistant instance and integrated using Zigbee2mqtt.

> Secondly, I will tell you about the cost of such an installation with a home automation box.

## Prerequisites

1. Understand home automation
2. a Home-Assistant home automation box with zigbee key
3. a [dry-contact micromodule]({% post_url /en/2023-07-31-test-nodon-module-zigbee-1-relais-multifonction-veritable-swiss-army-knife %}) (to control the boiler)
4. Zigbee thermostatic faucets

## Comparison

The comparison concerns 3 Chinese-made thermostatic heads, the integration presented is on homeassistant. So what are these faucets:
1. [Xiaomi Aqara E1](https://www.domadoo.fr/fr/peripheriques/6286-tete-thermostatique-zigbee-30-aqara-radiator-thermostat-e1-aqara-6970504217058.html?domid=39){: target="_blank"}
2. [Sonoff TRVZB](https://www.domadoo.fr/fr/chauffage-clim/6776-sonoff-tete-thermostatique-connectee-zigbee-30.html?domid=39){: target="_blank"}
3. [Moes ZTRV-BY-100](https://www.domadoo.fr/fr/peripheriques/5783-moes-tete-thermostatique-intelligente-zigbee-30-blanc.html?domid=39){: target="_blank"}

> Let's start by detailing these various products

### Xiaomi Aqara E1 SRTS-A01

[Xiaomi Aqara E1 official information](https://www.aqara.com/en/product/radiator-thermostat-e1/){: target="_blank"}

#### Hardware side

The Xiaomi Aqara E1 is **very well made, its price is around €45** access to battery change, the onclick function of the screen, the settings everything is well thought out, it is the only one to deliver the thermostatic head **with batteries** but it is also the most expensive. On the installation side, as you can see in the photo, it comes with adapters, instructions, in short, everything you need. Personally, I installed it without any adapter on a traditional radiator.
The reading of the screen remains **exceptional** however **it will not be suitable for all situations,** in use I realize that many radiators can have the tap camouflaged by a corner of the wall and in this In this case, the data could not be read properly.

{% picture posts/{{ page.guid }}/detail-robinet-tete-thermostatique-xiaomi-aqara-e1-zigbee-SRTS-A01.png --alt detail of the Xiaomi Aqara Zigbee E1 SRTS-A01 thermostatic faucet or head --img width="940" height="529" %}

The thermostat can be used with the majority of water radiators such as radiators, towel warmers or even underfloor heating. It takes readings from external Aqara sensors and adjusts the heating power accordingly.

{% include product-embed.html image="tete-thermostatique-zigbee-30-aqara-radiator-thermostat-e1-aqara.jpg" title="Xiaomi Aqara E1" brand="Aqara" description="The radiator thermostat can be used with the majority of water radiators such as radiators, towel warmers or even underfloor heating. It takes readings from external Aqara sensors and adjusts the heating power accordingly." domlink="peripheriques/6286-tete-thermostatique-zigbee-30-aqara-radiator-thermostat-e1-aqara-6970504217058.html" %}

#### TECHNICAL CHARACTERISTICS :

|Power supply|3V ⎓ (2 × 1.5V AA) **INCLUDED**|
|Battery life|1 year|
|Communication|Zigbee 3.0 IEEE 802.15.4|
|Maximum Zigbee output power|<10 dBm|
|Zigbee operating frequency|2405-2480 MHz|
|Operating temperature|0°C ~ 40°C|
|Operating humidity|0 ~ 95% RH, non-condensing|
|Dimensions|Ø 57×89 mm|
|Threaded connection|M30 × 1.5 mm|

#### Function side

- Support for Zigbee 3.0 and Matter protocol
- **External temperature sensor readings**
- Compatible with the most popular ecosystems and can be controlled by voice.
- **Window opening detection:**
- **Configurable smart schedules**: Schedules can be set for desired time periods, such as nighttime, and the transition between them will be smooth but as quick as possible.
- **Device grouping support:** If you have multiple heaters in a room, all of them will be synchronized in the most efficient way based on the actual room temperature.
- **Colorful backlit display**: Compared to similar products, the LCD screen of the Aqara radiator thermostat has a backlight, increased viewing angles, very high contrast as well as crisp and colorful icons.
- 1 year battery life: **batteries supplied**
- **Geofencing and multi-home support:** If you have more than one house, you will be able to configure independent automations for each of them and start heating before your arrival, so that when you enter the house, it will already be hot.

{% include doclink.html pdf="manuel-utilisateur-xiaomi-aqara-srts-a01-e1.pdf" title="User Manual Xiaomi Aqara SRTS-A01 E1" %}

#### Aqara E1, Home-Assistant and Zigbee2mqtt

A multitude of functions are available to us, there are so many that we no longer know where to put our heads among the important functions we find:

- the temperature setpoint
- local temperature
- setting an external thermostat
- open window function
- child lock

> The rest is of less importance.

{%- include alert.html type="warning" text="Currently the Aqara thermostatic head does not <b>record the current operating state</b> of the module when it is heating or not heating and this is very annoying because it is an essential function for configuring automations." %}

{% picture posts/{{ page.guid }}/fonctions-disponible-xiaomi-aqara-e1-zigbee2mqtt.png --alt functions available in zigbee2mqtt of the faucet or thermostatic head Xiaomi Aqara Zigbee E1 SRTS-A01 --img width="940" height="1354" %}

> On the other hand, a function that could have been integrated is a **boost mode** when starting heating as is the case with the Moes ZTRV-BY-100, but it is a function that we can implement with automation.

Finally, there is also a lack of an **auto mode in the thermostat mode**, which means that you will not be able to select auto mode in the home assistant thermostat interface, however this module still includes a program mode with various schedules to configure.

{% picture posts/{{ page.guid }}/fonctions-disponibles-cvc-aqara-e1-home-assistant.png --alt visual rendering in Home Assistant of the faucet or thermostatic head Xiaomi Aqara Zigbee E1 SRTS-A01 --img width="940" height="403" %}

While waiting for the integration to be perfect in Zigbee2mqtt or Zha, **this module does not allow you to fully exploit the automation functions of Home Assistant** unless perhaps you create a suitable template, but that's it. another story.

### Sonoff TRVZB

[Official information Sonoff TRVZB](https://sonoff.tech/product/home-appliances/trvzb/){: target="_blank"}

#### Hardware side

Delivered in a high-end case, this thermostatic faucet comes with a whole range of adapters, the whole thing is carefully crafted with good manufacturing quality and all without frills.
Access to the battery compartment is hassle-free and the assembly system is well thought out. Be careful though, you need 3 batteries to make it work.
This is the only module to offer a display from above, at first glance it does not seem suitable but this is not the case, everything is displayed and is clearly readable.

{% picture posts/{{ page.guid }}/detail-robinet-tete-thermostatique-sonoff-trvzb-zigbee.png --alt detail of the Sonoff Zigbee TRVZB faucet or thermostatic head --img width="940" height="529" %}

**However of the 3 adapters** it is the one which is the poorest in information, but regardless the most important functions will be.

{% include product-embed.html image="sonoff-tete-thermostatique-connectee-zigbee-30.jpg" title="Sonoff TRVZB" brand="Sonoff" description="The SONOFF Zigbee connected thermostatic head allows you to control the temperature more precisely with less energy, giving you a more comfortable home." domlink="chauffage-clim/6776-sonoff-tete-thermostatique-connectee-zigbee-30.html" iteadlink="sonoff-zigbee-thermostatic-radiator-valve" affiliate="_DFB4iQZ" %}

The onclick and wheel button provides modularity similar to the Xiaomi Aqara E1.
Finally, it is priced at €32 and you will be able to see a little further down that it is rich in functionality.

{% picture posts/{{ page.guid }}/detail-sonoff-trvzb.png --alt detail of the Sonoff Zigbee TRVZB faucet or thermostatic head --img width="940" height="480" %}

#### TECHNICAL CHARACTERISTICS

|Model|TRVZB|
|Color|White|
|Wireless connection|Zigbee 3.0|
|Input|4.5 V⎓ 3 x 1.5 V AA batteries **(NOT INCLUDED)**|
|Net weight|154 g|
|Battery model|1.5V AA LR6 alkaline battery|
|Case Material|PC|
|Threaded connection|M30x1.5mm|
|Temperature adjustment range|4°C to 35°C|
|Product dimensions|59.4 × 59.4 x 95 mm|

#### Function side

- **Smart Control:** SONOFF Zigbee thermostatic radiator valve has all smart functions, including APP remote control, voice control, scheduled programming, group control, etc.
- **Open window detection:** automatically turns off the radiator during ventilation, avoiding unnecessary energy waste.
- **Compatible with most heating manufacturers:** fits existing "M30 x 1.5mm" radiator valves, and the valve adapters supplied in the package are compatible with most systems and heating manufacturers.
- **Fully functional:** the child lock prevents children from mishandling the radiator. Freeze protection ensures that pipes do not freeze or burst, keeping your home safe. Supports 6 months of historical data query, you can use the data to provide ideas for starting heating earlier or later next time.

{% include doclink.html pdf="manuel-utilisateur-sonoff-trvzb.pdf" title="User manual Sonoff TRVZB" %}

#### Sonoff TRVZB, Home-assistant and Zigbee2mqtt

{%- include alert.html type="info" text="Unlike the other two thermostats, you will need to install it on a radiator to be able to include it in your Zigbee network, otherwise an error will appear." %}

{% picture posts/{{ page.guid }}/fonctions-disponible-sonoff-trvzb-zigbee2mqtt.png --alt functions available in zigbee2mqtt of the Sonoff TRVZB Zigbee faucet or thermostatic head --img width="940" height="1058" %}

A less important range of functions in Z2M than the Xiaomi Aqara SRTS-A01 or the Moes ZTRV-BY-100, but it does not forget any important functionality unlike the Aqara, **like the thermostat mode (off, manual, auto ) and the current operating state which will allow you to fully control these functions in HA.** In my opinion it just lacks the **Boost mode (easily configurable in Automation)**.

{% picture posts/{{ page.guid }}/fonctions-disponibles-sonoff-trvzb-mode-cvc-home-assistant.png --alt visual rendering in Home Assistant of the Sonoff TRVZB Zigbee faucet or thermostatic head --img width="802" height="417" %}

> As described above, the Sonoff TRVZB offers control of all the interesting functions in the Home Assistant HVAC thermostat interface.

### Moes ZTRV-BY-100

Let's finish with the Moes thermostat

[Official information Moes ZTRV-BY-100](https://moeshouse.com/products/moes-zigbee-trv-by100?variant=39307026497617){: target="_blank"}

We are clearly dealing with a white label of the **Tuya range**, unlike Xiaomi or Sonoff Moes markets products under its own brand but distributed as a white label for other brands and integrating the Tuya protocol. you will realize that the manufacturing quality is below Xiaomi and Sonoff. However its curve and its silky touch are successful but that's not everything.

#### Hardware side

The Moes ZTRV-BY-100 has **full lighting** but a little too powerful, but it's not that bad, like the Xiaomi Aqara E1 the display is on the side and in **quite a few cases it will not be visible or readable.**
Unlike the other two, the **Moes offers a touch interface** and not a button with click/wheel function.

> I find this interface less easy to use.


Also accessing the batteries is the trickiest of the three when it is not attached to the radiator. Once in place, if you rotate the thermostat slightly you will find yourself with it in your hand.

{% picture posts/{{ page.guid }}/detail-robinet-tete-thermostatique-moes-ZTRV-BY-100-zigbee.png --alt detail of the faucet or thermostatic head Moes ZTRV-BY-100 --img width="940" height="529" %}

**Last point, the battery lock is more than cheap**, frankly the steel is as thick as a sheet of cigarette paper and the latch as a toothpick.

> If you don't want to break anything you'll have to go about it delicately and that's not for everyone, I know what I'm talking about. 🥹

{% include product-embed.html image="moes-tete-thermostatique-intelligente-zigbee-30-blanc.jpg" title="Moes ZTRV-BY-100" brand="Moes" description="New mini design, elegant curve with extremely graceful arc shape and rubber paint, feeling like baby skin which fits well with all decoration styles." domlink="peripheriques/5783-moes-tete-thermostatique-intelligente-zigbee-30-blanc.html" affiliate="_DdrGFfB" %}

#### TECHNICAL CHARACTERISTICS :

|Power supply|3 V, 2 AA batteries **(NOT INCLUDED)**|
|Color|White|
|Technology|Zigbee|
|Maximum stroke|4.5 mm|
|Precision|± 0.5°C|
|Adjust the temp. Range|5~45°C|
|Temp. display Range|0~70°C|
|Ambient temperature|0 ~ 45°C|
|Ambient humidity|5 ~ 95% RH (non-condensing)|
|Storage temperature|-5 ~ 45°C|
|Sync Error|< 1%|
|Protection class|IP20|
|Buttons|capacitive touch buttons|
|Included in the packaging|1x Radiator thermostat<br>1x User guide<br>1x RA adapter<br>1x RAV adapter<br>1x RAVL adapter<br>1x Comap adapter<br>1x T + A Herz Adapter<br>1x Herz Adapter|

#### Function side

The Moes ZTRV-BY-100 is the one that displays the most information on its dial, many functions are present such as:

- child lock
- open window detection
- a programming mode (relatively complex for my taste)
- a **Boost** mode
- possibility of linking to an external sensor
- an **eco** mode

#### Moes ZTRV-BY-100, Home-assistant and Zigbee2mqtt

This module looks complete and it is, you can see from the number of fairly impressive function updates that Tuya has worked well on its firmware.

> For the moment Does not offer OTA updates

{% picture posts/{{ page.guid }}/fonctions-disponible-moes-ZTRV-BY-100-zigbee2mqtt.png --alt functions available in zigbee2mqtt of the faucet or thermostatic head Moes ZTRV-BY-100 --img width="940" height="1530" %}

Tuya has well integrated **the operating status so important for home assistant** but in the device mode you will only have **heating mode** no off or auto mode.

> So I'll let you think about how to turn off this module outside of the heating period and yes it risks eating up the battery.

{% picture posts/{{ page.guid }}/fonctions-disponibles-moes-ZTRV-BY-100-mode-cvc-home-assistant.png --alt visual rendering in Home Assistant of the faucet or thermostatic head Moes ZTRV-BY-100 --img width="940" height="439" %}

However, you can select the very complete but also complex programming mode in the thermostat interface.

## Cost of a complete installation

The cost is calculated on the purchase of **5 thermostatic faucets** and a home automation box running on Home Assistant with pre-installed software.
Why 5 taps? quite simply because soon a video of home automation of an apartment will see the light of day.

**Here is the selected material:**

1. the box + Zigbee key (Home Assistant Green + Skyconnect key) delivered cost €145 at **Seeedstudio**
2. Sonoff TRVZB thermostatic valve delivered cost **€31.29** at [domadoo](https://www.domadoo.fr/fr/chauffage-clim/6776-sonoff-tete-thermostatique-connectee-zigbee-30.html?domid=39){: target="_blank"} or **29.87€** at the manufacturer [Itead](https://itead.cc/product/sonoff-zigbee-thermostatic-radiator-valve/ref/122/){: target="_blank"} In both cases, free delivery is possible for the purchase of several units*
3. A [Gierier zigbee dry contact module](https://s.click.aliexpress.com/e/_DeZ2xxr){: target="_blank"}costing less than €10 or a French module [Nodon of superior multifunction quality](https://www.domadoo.fr/fr/peripheriques/5688-nodon-module-multifonction-zigbee-3700313925188.html?domid=39){: target="_blank"} at 32€ at domadoo, in order to switch on the boiler on request (this module will replace the existing room thermostat).

Let's start with a purchase of **5 taps** Sonoff TRVZB, a **Nodon dry contact module** and a box **equipped with Home Assistant Green**, it will cost you **€309** and for this price with good configuration you will be able to save money.

> The Haade team will soon broadcast a video on home automation of an apartment and calculating the cost of energy. Following this full-scale test I would be able to calculate a return on investment for you.

## Editor's choice

I had to make a choice, which was not so easy to make because despite their differences these modules do relatively similar work.

1. **Sonoff TRVZB**{: .blue} - Best compromise Quality/price/functions - **price around €34**
2. Moes ZTRV-BY-100 - Good but nothing more - **price around €28**
3. Xiaomi Aqara E1 - **Top quality** - **price around €44**

## Conclusion

Here is a full-scale test which could be more complete, **keep in mind** that the Xiaomi Aqara SRTS-A01 **is difficult to control** by automation therefore the return on investment is certainly longer. The manufacturing quality of the Moes leaves a little to be desired; the absence of the extinguishing mode will make this module more energy intensive.

And to finish **our big winner of the contest the Sonoff TRVZB** good manufacturing quality, a vertical visual that is fully configurable and controllable in Home Assistant for **maximum savings for years to come.**

{% include product-embed.html image="sonoff-tete-thermostatique-connectee-zigbee-30.jpg" title="Sonoff TRVZB" brand="Sonoff" description="The SONOFF Zigbee connected thermostatic head allows you to control the temperature more precisely with less energy, giving you a more comfortable home." domlink="chauffage-clim/6776-sonoff-tete-thermostatique-connectee-zigbee-30.html" iteadlink="sonoff-zigbee-thermostatic-radiator-valve" affiliate="_DFB4iQZ" %}
