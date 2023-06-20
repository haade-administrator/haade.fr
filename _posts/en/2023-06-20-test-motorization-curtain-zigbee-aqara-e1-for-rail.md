---
guid: 72
title: "motorization module test for Aqara curtain driver E1 curtain"
description: "complete test of the module for opening and closing of curtain Aqara E1 rail version with integration in zigbee2mqtt, zha and Jeedom, automates curtains in Zigbee"
ref: "Aqara curtain driver E1 track version"
layout: post
author: Nico
date: 2023-06-20 13:26
last_modified_at: 
categories: [Tests, Zigbee, Home-Assistant]
tags: []
image: 'test-aqara-e1-curtain-driver-track-version-zigbee.png'
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
  - https://www.aqara.com/eu/product/curtain-driver-e1-track-version
  - https://www.domadoo.fr/fr/peripheriques/6251-aqara-motorisation-pour-rideau-zigbee-30-aqara-curtain-driver-e1-version-rail-6970504215122.html
---

Designed in a quality white plastic material with a satin texture, the Aqara Curtain Driver E1 track version module (motorization of curtain on track) is a block of **14.05 cm x 9.6 cm x 4.4 cm** which weighs almost 500 grams. It's a lot and you have to take into account the weight that will be hanging from the rod. It is not negligible and is added to that of the curtains. However, the capacity of its motor supports a load **up to 12 kg of fabric**, which is huge.
> What about integration into open home automation systems on the market?

{% include product-embed.html guid="2162" %}

{% picture posts/{{ page.guid }}/contenu-boite-aqara-pilote-rideeau-e1-rail-version.png --alt contents of the box of the motorization module zigbee aqara curtain driver E1 track version --img width="940" height="529" %}

## In the box

1. 2 adjustable pulleys (for type I rail systems with base dimension ≥1 cm).
2. 1 USB / USB-C power cable with a length of 80 cm. Once charged the battery should last about 1 year
3. 1 user manual (including French). It includes in particular a QR Code referring to a video, in case you need help with the installation, but it is subtitled in Chinese.

{% include doclink.html pdf="Curtain-Driver-E1-(Track Version)_User Manual.pdf" title="aqara E1 track version curtain driver module user manual" %}

{% picture posts/{{ page.guid }}/aqara-e1-curtain-driver-size-and-specification-motorisation-rideau.png --alt size and specification of the motorization module zigbee aqara curtain driver E1 rail version --img width="940" height="529" %}

> The packaging is very well done, as we are used to seeing for Aqara products. All the important information is displayed on the cardboard, which is a very good point.

## Installation of the engine {{ page.ref }}

{%- include alert.html type="warning" text="Warning! this module does not fit clip-on rail type fixings with guide cord" %}

**Only compatible with U-type rail**{: .blue} whose **opening is <= 0.8mm**

{% picture posts/{{ page.guid }}/Aqara-motorisation-rideau-version-rail-u.png --alt compatibility of the motorization module zigbee aqara curtain driver E1 rail version model U --img width="940" height="529" %}

or **compatible with I-rails**{: .blue} **whose base is >= 10mm**, you can use the guides supplied with the CM-M01 driver

{% picture posts/{{ page.guid }}/Aqara-motorisation-rideau-version-rail-i.png --alt compatibility of the motorization module zigbee aqara curtain driver E1 rail version model I --img width="940" height="529" %}

{% include youtubePlayer.html id="HNYChqU5A58" %}

## functioning and characteristics of the {{ page.ref }}

**operation of the status indicator LED:**

|*Blue*{: .blue} blinking fast|connecting to hub|
|*Orange*{: .orange} flashing slowly|updating firmware|
|*Green*{: .green} fast flashing|keep on track|
|*Green*{: .green} flashing|exiting rail|
|flashing white|charging|
|Solid white flashing|charge complete|

**The physical operating button:**

|1 click|opens/closes/stops the curtain|
|2 successive clicks|releases/removes/stops the hook|
|3 successive clicks|manual limit switch adjustment|
|press for 5 seconds|turn on/off/reset|

**The brightness sensor**, is located in the lower part to be placed as close as possible to the window. *It will be possible to use it to open or close the curtains depending on the ambient*, indoor or outdoor light depending on your configuration.

**Beeps indicate:**

|1 Long beep|factory setting / device search / opening distance removed / opening direction – closing reversed / limit setting |
|2 short beeps|manual limit point set / stroke range removed|
|3 short beeps|in place or released / low battery|

### Function of the {{ page.ref }}:

- Control your curtain
- App remote control
- Smart automation
- Opening/closing calendar
- Custom open and close percentage
- Integrated light sensor
- Rechargeable lithium battery
- Up to 1 year battery life (depending on usage)
- Easy installation
- Compatible with U- and I-tracks
- Maximum load of **12 Kg**

### Characteristics of the {{ page.ref }}

|Power supply|5VDC 1.5A|
|Battery type|Rechargeable Li-Ion (not replaceable)|
|Total Power Consumption|7.5W|
|Movement speed|12 cm/s|
|Rated torque|0.2 N.m|
|Rated rotor speed|100 rpm|
|Operating Temperature|-10℃~+50℃|
|Operating humidity|0% to 95% RH, non-condensing|
|Dimensions|140.5 × 96 × 44mm|
|IP Rating|IP20|
|Communication|ZigBee 3.0|

## Installation with Zigbee2mqtt

> Installation in Zigbee2mqtt is done without any problems, as is often the case

{% picture posts/{{ page.guid }}/integration-aqara-curtain-driver-e1-track-version-zigbee2mqtt-apropos.png --alt compatibility of the motorization module zigbee aqara curtain driver E1 version track zigbee2mqtt feedback info --img width="940" height="856" %}

There I am amazed, the integration of the {{ page.ref }} in Zigbee2mqtt is simply stunning it gives you access to all of the **module functions i.e. 17 functions** I have never seen nothing like it!

### Feature Status:**

1. **state:** open/close/stop
2. **position:** position of the opening from 0 to 100%
3. **hands_open:** pulling the curtains by hand starts the motor ( true/false )
4. **limits_calibration:** start and end of run settings
5. **battery:** you got it
6. **voltage:** same
7. **device_temperature:** Device temperature
8. **illuminance_lux:** Luminous illumination measured in lux
9. **action:** Action triggered (eg button click)
10. **motor_state:** motor state (open/closed/stopped)
11. **running:** Is the motor running or not
12. **hooks_lock:** locks/unlocks the module (locking hooks in the bracket)
13. **hooks_state:** Hooks state
14. **target_position:** Target position in %
15. **power_source:** batteries or dc
16. **charging:** Charging status
17. **link_quality:** link status in mesh

{% picture posts/{{ page.guid }}/integration-aqara-curtain-driver-e1-track-version-zigbee2mqtt-expose-1.png --alt compatibility of the motorization module zigbee aqara curtain driver E1 version track zigbee2mqtt explanation of the commands --img width="940" height="702" %}

{% picture posts/{{ page.guid }}/integration-aqara-curtain-driver-e1-track-version-zigbee2mqtt-expose-2.png --alt motorization module compatibility zigbee aqara curtain driver E1 track version zigbee2mqtt suite command exposure --img width="940" height="386" %}

**The control in Home Assistant is brilliant**, you can easily control everything with a single click, perfect.


{% picture posts/{{ page.guid }}/integration-aqara-curtain-driver-e1-track-version-zigbee2mqtt-controle.png --alt motorization module compatibility zigbee aqara curtain driver E1 version track zigbee2mqtt entity presentation --img width="940" height="874" %}

{% picture posts/{{ page.guid }}/integration-aqara-curtain-driver-e1-track-version-zigbee2mqtt-controle-lovelace.png --alt motorization module compatibility zigbee aqara curtain driver E1 version track zigbee2mqtt lovelace controle --img width="506" height="359" %}


## Installation on Jeedom Luna

Recently an update of the Zigbee module dated 05/26/2023 and the Luna module of 06/08/2023 the integration and stability of zigbee modules has been improved. I didn't encounter any problems for the integration of the {{ page.ref }}. And that's a very good thing.
However the commands are more limited than in Zigbee2mqtt.

1. Open/Close/Stop
2. Position adjustment from 0 to 100%
3. state
4. position status

{% picture posts/{{ page.guid }}/integration-aqara-curtain-driver-e1-track-version-jeedom.png --alt compatibility of the motorization module zigbee aqara curtain driver E1 track version jeedom luna zigbee module --img width="940" height="255" %}

{% picture posts/{{ page.guid }}/integration-aqara-curtain-driver-e1-track-version-jeedom-commande-dispo.png --alt zigbee motorization module compatibility aqara curtain driver E1 track version jeedom luna zigbee module commands available --img width="940" height="254" %}

> In the Dashboard you are limited to the opening/closing and stop as well as the position, nothing more normal.
> 
{% picture posts/{{ page.guid }}/integration-aqara-curtain-driver-e1-track-version-jeedom-dashboard.png --alt zigbee motorization module compatibility aqara curtain driver E1 version track jeedom luna zigbee module commands available on dashboard --img width="241" height="172" %}

## Integration in ZHA Home Assistant

Again I did not encounter any problems but the number of orders is even more limited than in Jeedom

1. open/closed/stp

> and that's it...

{% picture posts/{{ page.guid }}/integration-aqara-curtain-driver-e1-track-version-zha-expose.png --alt zigbee aqara curtain driver E1 motorization module compatibility track version in zha integration --img width="940" height="486" %}

{% picture posts/{{ page.guid }}/integration-aqara-curtain-driver-e1-track-version-zha-lovelace.png --alt compatibility of the motorization module zigbee aqara curtain driver E1 version track in zha entity in lovelace --img width="508" height="142" %}

### Conclusion integration

> I strongly advise you to use the integration by Z2M


## **the + of the product**
{: .blue}
- manufacturing quality
- OTA update support
- zigbee 3.0 certified
- the many options available (z2m)
- lithium battery charging

## **the - of the product**
{: .red}

- Store compatibility (to be defined)
- the price approx 90€
- the weight
- volume
- 
{% include product-embed.html guid="2162" %}

## Conclusion

This is a **very well thought out and feature-rich product**. I just regret the **compatibility** with the rather restrictive market curtains, especially since in Europe we use guided clip curtains a lot, and unfortunately it is not compatible. But if you want to automate your curtains don't hesitate to buy it, it will do you a lot of good.

