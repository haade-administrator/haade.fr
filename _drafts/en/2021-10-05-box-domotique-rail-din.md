---
guid: 23
title: "Domotical Box Rail Din Home-assistant and Raspberrypi"
date: "2021-10-05"
layout: post
author: Nico
categories: [Home Assistant, Tests, Haade-lab]
image: "box-domotique-rail-din-home-assistant.png"
locale: en_GB
---
For a long time I had the home automation system integrated into docker on the family NAS. But over time the installation has grown and as everyone knows the physical hardware is an integral part of a home, apart from a NAS is rather personal. The question of a move does not pose a problem for the NAS but with regard to home automation it must continue to function without its personal effects. This is why I decided to integrate the Home-Assistant home automation box on din rail into the electrical panel.

## Material Prerequise


For my part the installation of the system is mounted [on an sd card 128GB of sandisk brand in extreme pro version](https://s.click.aliexpress.com/e/_AsN9If) , _never skimp on the quality of the sd card!_ . As there is a din rail compatible box for Raspberrypi 4, I naturally turned to this card in 4Gb, **the 2Gb version under home-assistant can quickly become limited** , but the PI4 processor has **tendency to heat up.** As I have a POE + compatible switch above the board, I decided to buy a [Waveshare type C complementary card in POE +](https://s.click.aliexpress.com/e/_ALSRv5){:target="_blank"}

## Why this [Waveshare poe + type C card](https://s.click.aliexpress.com/e/_ALSRv5){:target="_blank"}, compared to the official raspberry pi cards

![]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/waveshare-poe-typec-raspberrypi-4.png)

- It is compatible with the latest POE + standards
- GPIOs are always accessible ( [if you want to add a 2.2](https://s.click.aliexpress.com/e/_ANZpYP){:target="_blank"} inch tft-lcd screen, that's better)
- It has an additional USB type A output in 3.0
- Finally you can connect a 12V fan for optimal cooling.
- It has a small fan to cool the Raspberry processor
- Possibility to control the onboard fan

To be sure not to experience overheating[I bought 5mm copper heatsinks](https://s.click.aliexpress.com/e/_AMjOYn){:target="_blank"} , during assembly it works but you have to position according to the components of the waveshare, if you want a little more freedom go on 3mm heatsinks, but they will be less effective .

## The Temperature

- Open din rail box **28°C**
- Closed Box **38°C**
- Electrical panel closed and reassembled **42°C**

No additional opening on the din rail box was made when measuring the temperatures, and the end result I manage to hold 42°C with peaks at 48°C,**now it remains to be seen in full summer season if the peaks are not too high.**

![]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/dissipateur-raspberry-pi-home-assistant.png)

**Above:** The installation of the 5mm thick heatsinks is easy, but you still have to orient the positioning according to the additional waveshare poe + type C card.

![]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/box-domotique-tableau.png)

**Above:** Integration into the din rail electrical panel is carefree, the power supply by poe + is a positive point in the integration.

**Below:** thanks to Home-Assistant and the systemmonitor integration we can control the general state of the Raspberrypi, you can see that the 128GB of sdcard is more than enough, the memory used is 25% of 4Gb knowing that the integration of additional plugins is relatively complete (z-wave, esphome, zigbee, mosquitto, xiaomi, doorbird, etc ...), [the addition of a 2.2" tft/lcd screen fits perfectly into the box or we could do monitoring, see the presentation of the Jeedom integration](https://community.jeedom.com/t/presentation-box-diy-raspberry-4b-ecran-spi-tft-2-2-boitier-din-alim-5v-2-4a-din/35177){:target="_blank"} . But according to a feedback From experience adding such a screen increases the temperature by almost 10 ° C. Maybe I'll upgrade but for now I don't find it essential.

![]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/systemmonitor-raspberry.png)

## In conclusion

The home automation installation under home assistant is now an integral part of the home, it's more wafer and for me more logical, the fact of integrating it into the board is undeniably a place of choice by positioning the home automation controller in the center of the home electricity network for a total cost of around € 120.
