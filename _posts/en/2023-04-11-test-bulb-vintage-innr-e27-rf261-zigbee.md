---
guid: 60
title: "Innr Vintage RF261 Bulb Test"
description: "In an ever more modern accommodation we include vintage objects! will understand, today I test an Innr E27 zigbee RF261 bulb so is it worth the cost?"
layout: post
authors: Nico
date: 2023-04-11 15:37
last_modified_at: 
categories: [Automation, Zigbee, Tests]
tags: [post]
image: 'test-bulb-vintage-innr-zigbee-rf261.png'
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
addViews: 9
comments: true
rating: 4.6
sourcelink:
  - https://www.innr.com/fr/produit/smart-filament-bulb-e27-vintage-globe/
  - https://eprel.ec.europa.eu/screen/product/lightsources/868086?navigatingfrom=qr
  - https://www.zigbee2mqtt.io/devices/RF_261.html
---

In the world of lighting **Innr** is present today and thanks to [Domadoo](https://www.domadoo.fr/fr/peripheriques/5448-innr-ampoule-connectee-type-e27-zigbee-30-pack-de-2-ampoules-vintage-filament-2200-k-type-globe-8718781552923.html?domid=39){: target="_blank"} I will be able to present you a vintage bulb in the shape of ball with a **substantial diameter of 9.5cm** the RF261 smart bulb, operates on the Zigbee protocol. Currently presented at a **just under 30€** per unit, which is double that of a classic bulb, *we are entitled to wonder if this expense is worth the cost!*

{% include product-embed.html guid="2157" %}

The zigbee module is very well integrated and the least we can say about this incorporation, *is that it is minimal and that's a good point.* What is surprising is the **weight of the together 70 grams** barely more than a conventional light bulb. The packaging is of high quality and quite well thought out with all the necessary information.

{% picture posts/{{ page.guid }}/ampoule-connecte-innr-vitage-globe-zigbee-rf261.png --alt smart bulb innr globe vintage variable zigbee rf261 --img width="940" height="525" %}

In the photo below you can see the size, the specifics displayed on the packaging, as well as the packaging of the bulbs and the size of the E27 base with the micro-integration of the Zigbee processor.

# Advantages of the RF261 bulb
This bulb is not controllable by a dimmer, but you **can adjust the intensity variation** directly with the dedicated application or with your favorite home automation assistant and that's a significant plus. The lighting angle is 320° normal you will tell me given the size of the globe. Very responsive **less than 0.5 seconds** on command **Innr guaranteed 15,000 hours** of operation. Finally, it consumes 0.8w off and **4.2w** at maximum operation.

{% picture posts/{{ page.guid }}/emballage-innr-rf261-taille-specification.png --alt smart bulb innr globe vintage dimmable zigbee rf261 packaging and size --img width="940" height="525" %}

# Compatibility
Innr rf261 bulb is compatible with:
-Alexa
-Philips Hue
- Samsung Smartthings
-Google assistant
- Various Zigbee bridges

* *Does not work with Apple HomeKit or Hue Entertainment (Sync) functionality*

# Lighting quality

The manufacturing quality is there and allows to have a good rendering of the lighting even at low intensity, the light source is 2200k.
> ideal for making this vintage lighting warm.

{% picture posts/{{ page.guid }}/filaments-innr-rf261-ampoule-vintage-connecte.png --alt smart bulb innr globe vintage dimmable zigbee rf261 filament rendering --img width="940" height="525" %}

# Integration of the Innr rf261 bulb

I will try to integrate this bulb into the home automation assistants available to me either Homeassistant through ZHA and Zigbee2mqtt and under Jeedom through the Zigbee module. And thus judge the best integration.

# Integration With Zigbee2mqtt (Z2M)

With Zigbee2mqtt the integration is instantaneous and complete, the module is recognized as a router, the installation allows to control:
- turning on the light
- intensity
- to configure a light effect
- to configure the memory in the event of a power cut
- check the quality of the link

{% picture posts/{{ page.guid }}/innr-rf261-zigbee-ha-integration.png --alt smart bulb innr globe vintage variable zigbee rf261 integration with Zigbee2mqtt --img width="940" height="725" %}

{% picture posts/{{ page.guid }}/innr-rf261-zigbee-ha-expose-integration.png --alt innr globe connected bulb vintage dimmable zigbee rf261 render of zigbee2mqtt filament expose --img width="940" height="275" %}

**As soon as the integration has been completed, Z2M notifies me of a firmware update**, this is a first during my integrations. The update took a while but was completed successfully.

{% picture posts/{{ page.guid }}/innr-rf261-zigbee-ha-integration-firmware-update.png --alt smart bulb innr globe vintage variable zigbee rf261 filament rendering zigbee2mqtt firmware update --img width="940" height="97" %}

## Integration in ZHA

Let's continue with the integration with the ZHA module, the bulb is recognized and 100% functional. However, I encountered difficulties in pairing, I had to bring the bulb closer to the antenna, in short, it happens. So what are the functionalities that can be used under ZHA:
- bulb on/off
- intensity setting
- reactivity time (transition) on ignition
- memory in case of power failure
- memory of the intensity in the event of a power failure
- link quality control

> On the other hand, no firmware update proposal


{% picture posts/{{ page.guid }}/innr-rf261-zigbee-ha-integration-zha.png --alt bulb connected innr vintage globe variable zigbee rf261 rendering of the filament integration in home assistant with ZHA --img width="940" height="817" %}

## Integration In Jeedom with the Zigbee module

For the Zigbee module under Jeedom, we will go back to use the Zigbee2mqtt module which, remember, is available in the market.

{% picture posts/{{ page.guid }}/innr-rf261-zigbee-jeedom-integration.png --alt bulb connected innr globe vintage variable zigbee rf261 rendering of the filament attempt integration in Jeedom --img width="940" height="279" %}

## Conclusion

> The recommended integration for this bulb is once again Zigbee2mqtt, but Zha does almost as well.

# Light bulb reset

Resetting the bulb is capricious, it turns the bulb on and off in less than 0.5 seconds and does it 6 times, below is the official Innr video that shows you the procedure.

{% include videoPlayer.html youtubeId="4zkpZSv84H4" %}

# General Information

> Contrary to what can be found on the internet, including on the manufacturer's website, the energy quality sheet present under the box presents this product in **A+**, this is the old label.

The new label features an **energy label F** with an energy efficiency of 92

{% picture posts/{{ page.guid }}/consommation-ampoule-innr-rf261-zigbee.png --alt Consumption F smart bulb Innr rf261 --img width="940" height="525" %}

**TYPE OF LIGHT SOURCE**

|Lighting technology used|LED|
|Undirected or Directed|Undirected|
|Base type of light source (or other electrical interface)|E27|
|Sector or non-sector|Sector|
|Connected light source (SLC)|Yes|
|Color adjustable light source|No|
|High luminance light source|No|
|Glare protection|No|
|Use with dimmer|Only with specific dimmers|

# Features

**GENERAL PRODUCT PARAMETERS**

|Power consumption in on mode|5kWh/1000h|
|Luminous flux (useful)|390lm|
|Correspondence for beam angle|Sphere (360°)|
|Corporal color temperature|2200K|
|Power consumption in “on” mode|4.2W|
|Power in standby mode|0.38W|
|Power in Standby Mode with Maintained Grid Connection for SLCs|0.38W|
|Color rendering index|81|
|External dimensions|155(Height) x 95(Width) x 95(Depth) mm|
|Declaration of equivalent power|Yes|
|Equivalent power|35W|
|Chromatic coordinate|x: 0.510 y: 0.419|
|Distribution of spectral power in the range from 250 nm to 800 nm, at full load|Image|

**PARAMETERS FOR LED AND OLED LIGHT SOURCES:**

|Colour rendering index R9|9|
|Survival factor|1.00|
|Lumen maintenance factor|0.96|

**PARAMETERS FOR MAINS LED AND OLED LIGHT SOURCES:**

|Phase factor|0.85|
|Color constancy in MacAdam ellipses|5|
|Declaration that an LED light source replaces a fluorescent light source without an integrated ballast of a particular wattage|No|
|Flicker measurement|0.0|
|Measurement of stroboscopic effect|0.0|

{% include doclink.html pdf="Fiche_868086_EN.pdf" title="Information notice Innr RF261 Zigbee" %}
{% include doclink.html pdf="Installation-Manual-Z30-versions-Bulbs-Candles-GU10.pdf" title="Innr RF261 Zigbee Installation Manual" %}


# **the + of the product**
{: .blue}
- perfect zigbee integration
- Consumption of 4.2W
- Classified A+ in energy
- ignition time less than 0.5 seconds
- 15,000 hour warranty i.e. 10 years
- dimmable

# **the - of the product**
{: .red}
- the price

{% include product-embed.html guid="2157" %}

# Conclusion

I bought some time ago **Osram bulbs with similar characteristics**, but without protocols therefore not controllable, and not dimmable at the price of **12€ per unit**, so I can tell you that for less than 30€ and considering all the particularities of this Innr RF261 bulb **the price is justified**, it's a high quality product so **you can go for it and invest in this Vintage bulb with your eyes closed!**
