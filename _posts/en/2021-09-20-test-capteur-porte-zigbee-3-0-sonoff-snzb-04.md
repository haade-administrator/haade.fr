---
guid: 20
title: "Sonoff SNZB-04 Zigbee 3.0 Door Sensor Test"
layout: post
author: Nico
date: "2021-09-20"
categories: [Tests]
image: "sonoff-snzb-04-detecteur-porte-zigbee-3.0"
language: en
publish: true
locale: en_GB
---
That's after the [presentation of the temperature sensor SNZB-02](https://www.haade.fr/blog/tests/test-capteur-temperature-et-humidite-sonoff-snzb-02/), I will detail quickly [the sonoff opening sensor SNZB-04](https://www.haade.fr/produit/controleur-ouverture-porte-sonoff-snzb-04-zigbee/), the quality remains the same, the packaging and the aesthetics of the module are similar. Further down there will also be a comparison with the xiaomi mijia door and window MCCGQ01LM

## Unpacking, still nothing crazy

- An orange box the size of the sensor
- a manual available in 8 languages
- a 3M sticker

## Specifications of [Sonoff SNZB-04](https://www.haade.fr/produit/controleur-ouverture-porte-sonoff-snzb-04-zigbee/)

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

## What made me buy the opening sensor [sonoff snzb-04](https://www.haade.fr/produit/controleur-ouverture-porte-sonoff-snzb-04-zigbee/):

Once again the price and still for a big point, the support for zigbee 3.0, I will have stayed on **xiaomi aqara mijia MCCGQ01LM** but the price has exploded from simple to almost twice the price. **The design is much nicer and the size is reduced** , but only **4 data goes back** in zigbee2mqtt (low battery does not go up). It also works with cr2032 batteries.

Big **disadvantage** the Xiaomi module is always **provided in zigbee 1.2 protocol** and it is far from being good for the mesh especially since it tends to be put long standby. In fact, he tends to drop out of the network. Fortunately the version [rectangular Xiaomi MCCGQ12LM is Zigbee 3.0 compatible](https://www.haade.fr/produit/capteur-de-porte-aqara-par-xiaomi-zigbee-3-0/)

## [Sonoff SNZB-04](https://www.haade.fr/produit/controleur-ouverture-porte-sonoff-snzb-04-zigbee/) VS Xiaomi Aqara Mijia MCCGQ01LM

![sonoff SNZB-04 vs Xiaomi MCCGQ01LM ]({{ site.baseurl }}/assets/images/posts/{{ page.guid}}/sonoff-detecteur-porte-zigbee-vs-xiaomi-820.webp)

test and compare of open sensor sonoff SNZB-04 vs Xiaomi MCCGQ01LM

## Positive point of the temperature sensor [sonoff SNZB-04](https://www.haade.fr/produit/controleur-ouverture-porte-sonoff-snzb-04-zigbee/)

- the current price less than 8 €
- inclusive the protocol zigbee 3.0
- **Compatibility Zigbee2mqtt**

## Negative point of the opening sensor [sonoff SNZB-04](https://www.haade.fr/produit/controleur-ouverture-porte-sonoff-snzb-04-zigbee/)

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

If you don't care about design, if you want to save money or if you have a lot of modules to buy, then [the sonoff opening sensor SNZB-04](https://www.haade.fr/produit/controleur-ouverture-porte-sonoff-snzb-04-zigbee/) otherwise if the mesh of the network does not scare you **then switch to Xiaomi**, otherwise [the new one Xiaomi MCCGQ12LM rectangular aperture sensor is Zigbee 3.0 compatibility](https://www.haade.fr/produit/capteur-de-porte-aqara-par-xiaomi-zigbee-3-0/)
