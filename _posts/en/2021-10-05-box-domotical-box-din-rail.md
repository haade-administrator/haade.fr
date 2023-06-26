---
guid: 23
title: "Domotical Box Rail Din Home-assistant and Raspberrypi"
date: "2021-10-05 14:40:45"
last_modified_at: "2022-11-07 14:13"
layout: post
author: Nico
categories: [Haade-lab, Home-Assistant] 
image: box-domotique-rail-din-home-assistant.png
published: true
noindex: false
sitemap:
  changefreq: #always hourly daily weekly monthly yearly never
  exclude: #'yes' or 'no'
  priority: #between 0.0 to 1.0, 1.0 high priority
  lastmod: # date to end modification
locale: en_GB
addViews: 46
beforetoc:
toc: true
redirect_from: 
  - /en/blog/home-automation-smarthome-jeedom-homeassistant/tutos-haade-lab/home-assistant/box-domotique-rail-din/
  - /en/blog/tests/box-domotique-rail-din/
---

For a long time I had the home automation system integrated into docker on the family NAS. But over time the installation has grown and as everyone knows the physical hardware is an integral part of a home, apart from a NAS is rather personal. The question of a move does not pose a problem for the NAS but with regard to home automation it must continue to function without its personal effects. This is why I decided to integrate the Home-Assistant home automation box on din rail into the electrical panel.

## Material Prerequise


For my part the installation of the system is mounted [on an sd card 128GB of sandisk brand in extreme pro version](https://s.click.aliexpress.com/e/_AsN9If) , _never skimp on the quality of the sd card!_ . As there is a din rail compatible box for Raspberrypi 4, I naturally turned to this card in 4Gb, **the 2Gb version under home-assistant can quickly become limited** , but the PI4 processor has **tendency to heat up.** As I have a POE + compatible switch above the board, I decided to buy a [Waveshare type C complementary card in POE +](https://s.click.aliexpress.com/e/_ALSRv5){: target="_blank"}

{% include product-embed.html image="SanDisk-Carte-Micro-SD-Extreme-Pro.webp" title="Carte sdcard mini sandisk extreme, etreme pro et highendurance" brand="Sandisk" description="SanDisk — Carte Micro SD Extreme, 32 Go/64 Go/128 Go, U3, V30, A2, A1, TF, mémoire flash" affiliate="_DdZe15z" %}

_never skimp on the quality of the sd card!_ . As there is a din rail compatible case for Raspberrypi 4, I naturally opted for this 4Gb card, **the 2Gb version under home-assistant can quickly become limited**, but the PI4 processor **tends to heat up .** As I have a POE+ compatible switch above the board, I went on the purchase of a [Waveshare type C add-on card in POE+](https://s.click.aliexpress.com/e/_DElHtRZ){: target="_blank"}

{% include product-embed.html image="Waveshare-Power-Over-Ethernet-Type-C-quipement-pour-Raspberry-Pi-3B-4B-802-3af-at.webp" title="addon for raspberry pi poe+ waveshare type C" brand="Waveshare" description="Additional board that powers the raspberry pi by poe+" affiliate="_DElHtRZ" %}

#### You can replace type C with B without any problem. Why this [Waveshare poe+ type B or C card](https://s.click.aliexpress.com/e/_DDwVMIL){: target="_blank"}, compared to official raspberry pi cards

{% picture posts/{{ page.guid }}/waveshare-poe-typec-raspberrypi-4.png --alt Waveshareshare plugin raspberrypi 4 poe type c --img width="820" height="461" %}

- It is compatible with the latest POE + standards
- GPIOs are always accessible ( [if you want to add a 2.2](https://s.click.aliexpress.com/e/_ANZpYP){: target="_blank"} inch tft-lcd screen, that's better).
    {% include product-embed.html guid="2124" %}
- It has an additional USB type A output in 3.0
- Finally you can connect a 12V fan for optimal cooling.
- It has a small fan to cool the Raspberry processor
- Possibility to control the onboard fan

To be sure not to experience overheating[I bought 5mm copper heatsinks](https://s.click.aliexpress.com/e/_AMjOYn){: target="_blank"}.
{% include product-embed.html image="Radiateur-en-cuivre-Raspberry-Pi-Mini-PC-Raspberry-Pi-4-3-2-1-mod-le-B.webp" title="Raspberry Pi Copper Heatsink" brand="Enfinity" description="Raspberry Pi Mini PC Copper Heatsink Raspberry Pi 4 3 2 1 Model B A Plus CPU RAM Memory Lan Chip Heatsink Cooling" affiliate="_DkJsUqT" %}
During assembly it works but you have to position according to the components of the waveshare, if you want a little more freedom go on 3mm heatsinks, but they will be less effective .

## The Temperature

- Open din rail box **28°C**
- Closed Box **38°C**
- Electrical panel closed and reassembled **42°C**

No additional opening on the din rail box was made when measuring the temperatures, and the end result I manage to hold 42°C with peaks at 48°C,**now it remains to be seen in full summer season if the peaks are not too high.**

{% picture posts/{{ page.guid }}/dissipateur-raspberry-pi-home-assistant.png --alt raspberrypi 4 copper heatsink --img width="820" height="461" %}

**Above:** The installation of the 5mm thick heatsinks is easy, but you still have to orient the positioning according to the additional waveshare poe + type C card.

{% picture posts/{{ page.guid }}/box-domotique-tableau.png --alt Integration final box raspberrypi electrical panel --img width="820" height="461" %}

**Above:** Integration into the din rail electrical panel is carefree, the power supply by poe + is a positive point in the integration.

{% include product-embed.html image="Bo-tier-en-ABS-pour-Raspberry-Pi-4-mod-le-B-montage-sur-Rail-DIN-grand.jpg.webp" title="Boitier rail din raspberry pi 3 ou 4" brand="Waveshare" description="Boîtier en ABS pour Raspberry Pi 4 modèle B, montage sur Rail DIN, grand boîtier de Protection pour RPI 4B Pi4 ou Pi 3B + 3B" affiliate="_DkXxvDl" %}

**Below:** thanks to Home-Assistant and the systemmonitor integration we can control the general state of the Raspberrypi, you can see that the 128GB of sdcard is more than enough, the memory used is 25% of 4Gb knowing that the integration of additional plugins is relatively complete (z-wave, esphome, zigbee, mosquitto, xiaomi, doorbird, etc ...), [the addition of a 2.2" tft/lcd screen fits perfectly into the box or we could do monitoring, see the presentation of the Jeedom integration](https://community.jeedom.com/t/presentation-box-diy-raspberry-4b-ecran-spi-tft-2-2-boitier-din-alim-5v-2-4a-din/35177){: target="_blank"} . But according to a feedback From experience adding such a screen increases the temperature by almost 10 ° C. Maybe I'll upgrade but for now I don't find it essential.

{% picture posts/{{ page.guid }}/systemmonitor-raspberry.png --alt Total lovelace home-assistant integration of a raspberrypi --img width="339" height="532" %}

## In conclusion

The home automation installation under home assistant is now an integral part of the home, it's more wafer and for me more logical, the fact of integrating it into the board is undeniably a place of choice by positioning the home automation controller in the center of the home electricity network for a total cost of around € 120.
