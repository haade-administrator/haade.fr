---
guid: 18
title: "Sonoff SNZB-02 temperature and humidity sensor test"
description: "SONOFF SNZB-02 temperature sensor test and integration in homeassistant"
layout: post
author: Nico
date: "2021-09-10"
last_modified_at:
category: Tests
tags: [Test, Zigbee, Home-assistant]
image: "sonoff-snzb-02-zigbee-3.0-capteur-teperature-humidite.png"
published: true
noindex: false
sitemap:
  changefreq: #always hourly daily weekly monthly yearly never
  exclude: #'yes' or 'no'
  priority: #between 0.0 to 1.0, 1.0 high priority
  lastmod: # date to end modification
locale: en_GB
addViews: 78
beforetoc:
toc: true
redirect_from:
  - /en/blog/tests/test-capteur-temperature-et-humidite-sonoff-snzb-02/
rating: 4.1
---

I decided to put forward by presenting a test of the [Sonoff SNZB-02 temperature and humidity sensor]({%- link _products/{{ page.locale | slice: 0,2 }}/2021-08-25-temperature-sensor-sonoff-snzb-02-zigbee.md %}), for the seriousness and the range of the brand's products. It's not going to be a big item that's why I decided to compare it with the aqara WSDCGQ11LM temperature sensor by xiaomi.

**Regarding the unboxing nothing crazy:**

- An orange box the size of the sensor
- a manual available in 8 languages
- a 3M sticker

**Specifications:**

- Battery: 3V (CR2450)
- Wireless protocol: Zigbee (IEEE 802.15.4)
- Dimension: 43X43X14mm

Well if you follow the news of zigbee2mqtt with more than 1600 integrations, [you can see that the snzb-02 module is compatible](https://www.zigbee2mqtt.io/devices/SNZB-02.html){: target="_blank"}. All you have to do is open the network and click on the button below for 5 seconds, then the led flashes 3 times so the module resets itself and becomes part of the homeassistant network.

## 5 data are sent from the SNZB-02 sensor in homeassistant:

- the battery level
- temperature
- humidity
- battery voltage
- the transmission power in lqi of the antenna

## What made me buy the sonoff snzb-02:

Well, quite simply the price and the protocol which is the Zigbee 3.0.

Basically I wanted to start again on xiaomi aqara but the price exploded from single to double. **The design is nicer**, it's a 3 in 1 with an additional atmospheric pressure sensor. It works with cr2032 batteries.

Big **disadvantage** the Xiaomi module is always **provided in zigbee 1.2 protocol** and it is far from being good for the mesh especially since it tends to be put long standby. In fact, he tends to drop out of the network. Fortunately the version [rectangular Xiaomi MCCGQ12LM is Zigbee 3.0 compatible]({% link _products/{{ page.locale | slice: 0,2 }}/2021-03-25-aqara-door-sensor-by-xiaomi-zigbee-3-0.md %})

## Compare Sonoff SNZB-02 VS Xiaomi Aqara WSDCGQ11LM

{% picture posts/{{ page.guid}}/capteur-temperature-humidite-sonoff-snzb-02-zigbee-vs-xiaomi.png --alt temperature sensor zigbee sonoff vs xiaomi --img width="820" height="461" %}

## Positive point of the sonoff SNZB-02 temperature sensor

- the price currently less than 10 €
- included zigbee 3.0 protocol
- Zigbee2mqtt compatible

## SNZB-02 sonoff temperature sensor negative point

- Package a little light (but that's not what we ask)
- the size, relatively massive
- [CR2450](https://amzn.to/3mGXoJA){: target="_blank"} batteries are more expensive than [CR2032](https://amzn.to/2WpZ1QB){: target="_blank"} (comparison on the VARTA brand)

**Reminder:** Dimension sonoff SNZB-02: 42x42x14mm CR2450 3v

## Positive point of the 3 in 1 temperature sensor Xiaomi aqara WSDCGQ11LM

- In addition to the temperature and humidity it calculates the CO2 pressure
- Dimensions xiaomi aqara: 35x35x09mm CR2032 3v
- Design
- **Zigbee2mqtt compatible**
- The packaging is very well done, Xiaomi provides two stickers (practical)

## Negative point of the 3 in 1 temperature sensor Xiaomi aqara WSDCGQ11LM

- The price is around 14 €
- **Zigbee 1.2 protocol**
- regular drop-out of the mesh following difficulties in coming out of watches.

## In Conclusion

I can see only one reason to keep buying an Aqara temperature sensor. **If you need to measure atmospheric pressure.** Personally I find that the design of the Sonoff may not matter for this type of object so, just for the **Zigbee 3.0 protocol** it is worth the detour.
