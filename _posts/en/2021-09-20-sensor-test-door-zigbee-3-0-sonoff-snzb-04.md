---
guid: 20
title: "Sonoff SNZB-04 Zigbee 3.0 Door Sensor Test"
layout: post
author: Nico
date: "2021-09-20"
last_modified_at:
category: Tests
image: "sonoff-snzb-04-detecteur-porte-zigbee-3.0.png"
published: true
sitemap:
  changefreq: #always hourly daily weekly monthly yearly never
  exclude: #'yes' or 'no'
  priority: #between 0.0 to 1.0, 1.0 high priority
  lastmod: # date to end modification
locale: en_GB
redirect_from:
  - /en/blog/tests/test-capteur-porte-zigbee-3-0-sonoff-snzb-04
---

That's after the [presentation of the temperature sensor SNZB-02]({% post_url /en/2021-09-10-test-sensor-temperature-and-humidity-sonoff-snzb-02 %}), I will detail quickly [the sonoff opening sensor SNZB-04]({% post_url /en/2021-09-20-sensor-test-door-zigbee-3-0-sonoff-snzb-04 %}), the quality remains the same, the packaging and the aesthetics of the module are similar. Further down there will also be a comparison with the xiaomi mijia door and window MCCGQ01LM

{% include product-embed.html guid="2123" description="Door sensor zigbee 3.0 sonoff SNZB-04" %}

## Unpacking, still nothing crazy

- An orange box the size of the sensor
- a manual available in 8 languages
- a 3M sticker

## Specifications of [Sonoff SNZB-04]({% link _products/{{ page.locale | slice: 0,2 }}/2021-08-26-opening-control-sonoff-snzb-04-zigbee.md %})

- Battery: 3V (CR2450)
- Wireless protocol: Zigbee (IEEE 802.15.4)
- Dimensions: **magnet:** 32 x 15.6 x 13mm, **sensor:** 47 x 27 x 13.5mm

So if you follow zigbee2mqtt news with more than 1600 integrations, [you can see that the snzb-04 module is compatible.](https://www.zigbee2mqtt.io/devices/SNZB-04.html){:target="_blank"} All you have to do is open the network and click the button below for 5 seconds, then the LED flashes 3 times so the module resets itself and becomes part of the home assistant network.

## 5 data are sent from the SNZB-04 sensor in the home assistant:

- contact
- low battery
- battery
- voltage
- linkquality ( lqi )

## What made me buy the opening sensor [Sonoff SNZB-04]({% link _products/{{ page.locale | slice: 0,2 }}/2021-08-26-opening-control-sonoff-snzb-04-zigbee.md %}):

Once again the price and still for a big point, the support for zigbee 3.0, I will have stayed on **xiaomi aqara mijia MCCGQ01LM** but the price has exploded from simple to almost twice the price. **The design is much nicer and the size is reduced** , but only **4 data goes back** in zigbee2mqtt (low battery does not go up). It also works with cr2032 batteries.

Big **disadvantage** the Xiaomi module is always **provided in zigbee 1.2 protocol** and it is far from being good for the mesh especially since it tends to be put long standby. In fact, he tends to drop out of the network. Fortunately the version [rectangular Xiaomi MCCGQ12LM is Zigbee 3.0 compatible]({% link _products/{{ page.locale | slice: 0,2 }}/2021-03-25-aqara-door-sensor-by-xiaomi-zigbee-3-0.md %})

## [Sonoff SNZB-04]({% link _products/{{ page.locale | slice: 0,2 }}/2021-08-26-opening-control-sonoff-snzb-04-zigbee.md %}) VS Xiaomi Aqara Mijia MCCGQ01LM

{% picture posts/{{ page.guid}}/sonoff-detecteur-porte-zigbee-vs-xiaomi.png --alt sonoff SNZB-04 vs Xiaomi MCCGQ01LM %}

test and compare of open sensor sonoff SNZB-04 vs Xiaomi MCCGQ01LM

## Positive point of the temperature sensor [Sonoff SNZB-04]({% link _products/{{ page.locale | slice: 0,2 }}/2021-08-26-opening-control-sonoff-snzb-04-zigbee.md %})

- the current price less than 8 €
- inclusive the protocol zigbee 3.0
- **Compatibility Zigbee2mqtt**

## Negative point of the opening sensor [Sonoff SNZB-04]({% link _products/{{ page.locale | slice: 0,2 }}/2021-08-26-opening-control-sonoff-snzb-04-zigbee.md %})

- Package a little light ( but that's not what we ask )
- **the size, too massive for my taste**
- the batteries [CR2450](https://amzn.to/3mGXoJA){:target="_blank"} are more expansives of [CR2032](https://amzn.to/2WpZ1QB){:target="_blank"} ( comparative brand VARTA )

**Reminder:** Dimension sonoff SNZB-04:

Magnet: 32 x 15.6 x 13mm  
Sensor: 47 x 27 x 13.5mm

## Positiv point of opening sensor Xiaomi aqara MijiaMCCGQ01LM

- Dimension xiaomi aqara: 35x35x09mm CR2032 3v
- **Design**
- **Compatibility Zigbee2mqtt**
- **The packaging is very well done, Xiaomi provides two stickers (practical)**

## Negative point of the opening sensor Xiaomi aqara Mijia MCCGQ01LM

- The price is around 12 €
- Zigbee protocol 1.2
- regular dropout of the mesh following difficulties in coming out of watches.

## In conclusion

If you don't care about design, if you want to save money or if you have a lot of modules to buy, then [the sonoff opening sensor SNZB-04]({% link _products/{{ page.locale | slice: 0,2 }}/2021-08-26-opening-control-sonoff-snzb-04-zigbee.md %}) otherwise if the mesh of the network does not scare you **then switch to Xiaomi**, otherwise [the new one Xiaomi MCCGQ12LM rectangular aperture sensor is Zigbee 3.0 compatibility]({% link _products/{{ page.locale | slice: 0,2 }}/2021-03-25-aqara-door-sensor-by-xiaomi-zigbee-3-0.md %})

{% include product-embed.html guid="2123" description="Door sensor zigbee 3.0 sonoff SNZB-04" %}
