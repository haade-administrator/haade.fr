---
guid: 34
title: "Presentation of the zigbee lidl smart home range"
description: "lidl has been releasing the silvercrest smart home range for some time now, but what is it worth?"
layout: post
author: Nico
date: 2022-12-11 18:42
last_modified_at: 
categories: [News, Zigbee]
tags: []
image: 'presentation-gamme-lidl-silvercrest-smart-home-en.png'
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
  - https://www.lidl.fr/la-variete-lidl/smart-home
---
Lidl has been marketing connected products operating in **Zigbee 3.0** for some time, the ranges concerned are **Silvercrest** but also **Livarno**. [Click here to access the entire Zigbee Lidl range](https://www.lidl.be/h/fr-BE/maison-connectee/h10005939?pageId=%2F10005756%2F10005939&brand=silvercrest&brand=livarno+lux&brand =livarno+home&idsOnly=false&productsOnly=false){:target="_blank"}.
> Imposing products, quality packaging, at first glance qualitative, but what is it really? can we trust this material!

{%- include alert.html type="info" text="Next sale in your stores on <b>../../....</b>" %}

# Zigbee Smart home modules Lidl Silvercrest

Already presented on many occasions, I will not dwell on these products, on the other hand we can read on the left and on the right that they are only used with the Smart Home box, well it is not If so, for me they are integrated with Home Assistant through the gateway [Zigbe2mqtt](https://www.zigbee2mqtt.io/supported-devices/#v=Lidl){:target="_blank"}.

**Advantage:**{: .blue}
1. The price of 10 to 30€ for the power strip
2. Quality workmanship
3. easy integration with other zigbee systems
4. stable operation

**Disadvantage:**{: .red}
- Confusing dimensions, just look at the motion sensor which is 2 to 3 times larger than the competition.

{% picture posts/{{ page.guid }}/module-zigbee-smart-home-lidl-silvercrest.jpg --alt lidl silvercrest smart home zigbee 3.0 module set, single socket, power strip and motion sensor module --img width="940" height="529" %} 

Below is a summary presentation with photo

## Single Plug

{% picture posts/{{ page.guid }}/prise-simple-zigbee-lidl-silvercrest.jpg --alt lidl silvercrest single zigbee 3.0 socket --img width="940" height="529" %}

**Technical information**

|Operating voltage| 220–240V∼, 50Hz|
|Output current| HG06337-FR 16A max. (3840W)|
|Frequency range| 2.400–2.483GHz|
|Transmit Power| max. < 1dBm|
|Communication protocol| ZigBee 3.0 |
|Reception range| approx. 70 m (open field)|
|Operating temperature| from +5 to +35°C |
|Humidity during operation| from 10 to 80%|
|Storage temperature| from 0 to +45°C |
|Dimensions| 58 x 58 x 89mm|
|Weight| 118gr|
|Protection class| IP21|

{% include doclink.html pdf="notice-prise-simple-lidl-silvercrest-367547-en.pdf" title="Single Plug Notice  SAPZ 1 A1" %}


## Silvercrest Multi-Plug Usb

{% picture posts/{{ page.guid }}/multiprise-zigbee-lidl-silvercrest-usb.jpg --alt power strip lidl silvercrest simple zigbee 3.0 avc usb port --img width="940" height="529" %}

**Technical information**

|Operating voltage| 220–240V∼, 50Hz|
|Output current (total)|HG06338-FR 16 A max. (3840W)|
|USB-A output current|6 A max. in total, 2.4 A max. by port|
|Frequency range| from 2.400 to 2.483 GHz|
|Transmit Power| max. < 3dBm|
|Communication protocol| ZigBee 3.0 |
|Reception range| approx. 70 m (open field)|
|Operating temperature| from +5 to +35°C |
|Humidity during operation| from 10 to 80%|
|Storage temperature| from 0 to +45°C |
|Cable length| 140cm|
|Dimensions|HG06338-FR 350 x 65 x 41mm|
|Weight|680g|
|Protection class| IP21|


{% include doclink.html pdf="notice-multiprise-lidl-silvercrest-367548-all.pdf" title="Multiplug Notice  SPSZ 3 A1" %}

**To know**

- A router is required to use this product (not included)
- "Smart Fast Charge" function for optimized charging time
- Status notification (ON/OFF) Overcurrent protection
- Quick User Guide (full instructions available by app or - download from service website)
- Wireless connection protocol: Zigbee 3.0

## Motion Sensor

Detects movement with an infrared sensor
For use as a motion detector or to control lights.

{% picture posts/{{ page.guid }}/capteur-mouvement-lidl-zigbee-silvercrest.jpg --alt lidl silvercrest zigbee 3.0 motion sensor --img width="940" height="529" %}

**Technical information**

- Tamper alarm
- This product can be integrated with other systems compatible with ZigBee 3.0

|Operating voltage|3v|
|Battery type|2x1.5v (AAA)|
|Frequency range|from 2.4 to 2.485 Ghz|
|Max transmit power|13dbm|
|Operating time|12 months (60 rings/day)|
|Mounting height|2.1m|
|Communication protocol|Zigbee 3.0|
|Reception range|approx 70m (open area)|
|Optical field/grabbing angle|< 10m at +25°C/120°|
|Operating temperature|from +5°c to +35°C|
|Humidity during operation|10 to 80%|
|Dimensions|40x77x46mm (with wall bracket)|
|IP rating|IP21|

{% include doclink.html pdf="notice-detecteur-mouvement-400869-lidl-silvercrest-fr.pdf" title="Motion Detector lidl Notice SMSZ 1 B2" %}


# Webshop Belgium

[Lidl online store Delivery Belgium](https://www.lidl.be/q/fr-BE/search?offset=24&q=smart%20home){:target="_blank"}

# Conclusion

Lidl Smart Home products are not only cheaper than products from similar brands, they also reduce your energy bill. Good for your wallet and the environment. Smart Home products are also easy to install and control and thanks to Zigbee 3.0 technology, these products are also compatible with smart products from other manufacturers. **The OBL label tells you that these products have been thoroughly tested by an independent testing service provider** for logical, functional and technical defects and that information security is guaranteed.
