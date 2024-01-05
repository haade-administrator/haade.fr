---
guid: 102
title: "Zigbee Neo NAS-AB06B2 Outdoor Siren Review"
description: "Test of the zigbee tuya Neo NAS-AB06B2 solar siren designed for outdoors, in home assistant for less than €40. For this price is it worth the cost?"
ref: "NAS-AB06B2"
layout: post
author: Nico
date: 2024-01-02 16:17
last_modified_at: 
categories: [Tests, Zigbee, Security]
tags: []
image: 'sirene-neo-nas-ab06b2-zigbee-outdoor.png'
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
  - https://www.domadoo.fr/fr/sirene/6532-neo-sirene-intelligente-exterieure-zigbee-tuya-alimentation-5v1a-ou-batterie-panneau-solaire.html?domid=39
---

This is an area where zigbee modules **are rare**, you can find zigbee sirens here and there for indoors but when it comes to outdoors there are no crowds. And this is where **Tuya stands out** thanks to the {{ page.ref }} white label for Europe by Neo. But let's not forget the fact that this is a Tuya product.

{% include product-embed.html guid="2180" %}

## Neo Presentation {{ page.ref }}

Nothing exceptional out of the box, but for the price it still remains an exceptional challenge, you will notice that it is sold **less than €35**. [Where a Bosch Zigbee module is sold for €200](https://www.bosch-smarthome.com/uk/en/products/devices/outdoor-siren/){: target="_blank "}.
In short, upon unpacking we find a siren which uses a **relatively silky plastic** and a well-integrated **solar panel**. 

{% picture posts/{{ page.guid }}/presentation-sirene-zigbee-exterieur-neo.png --alt Contents of the Zigbe Neo NAS-AB06B2 outdoor siren --img width="940" height="529" %}

Instructions, screws and screwdriver, usb-c cable are part of this packaging.

{% picture posts/{{ page.guid }}/face-arriere-neo-sirene-exterieur-support-pile-zigbee.png --alt rear side of the Zigbe Neo NAS-AB06B2 outdoor siren --img width="940" height="529" %}

On the rear part you will find a wall support and screw access to the battery, the valve is protected by a **fairly thick gasket**, the assembly screws are also protected by a rubber pad, a little extra . The battery used which is still the main charging support is **made up of an 18650 model**

> Which is rather good because you will easily find this type of batteries at a relatively low price, on Amazon or Aliexpress. On the top part....

{% picture posts/{{ page.guid }}/rendu-dimension-sirene-exterieur-neo-nas-ab06b2-zigbee.png --alt visual rendering of the dimensions of the Zigbe Neo NAS-AB06B2 outdoor siren --img width="940" height="529" %}

The Neo mermaid {{ page.ref }} is quite bulky. **It stands out from the crowd by the color of the siren lighting**. When the emergency persists in making modules in orange/red. Tuya for this model is based on blue.

{% picture posts/{{ page.guid }}/face-arriere-neo-sirene-exterieur-support-pile-zigbee-joint-peripherique.png --alt zoom thickness and seal of the Zigbe Neo NAS-AB06B2 outdoor siren --img width="940" height="529" %}

On the periphery of the box on the front side you will be able to see the presence of a seal, **it's good but I don't think it's enough** for an external product, certainly at the beginning it will be enough to slow down the climatic hazards but how long ...

{% picture posts/{{ page.guid }}/circuit-tuya-neo-nas-ab06b2-zigbee.png --alt printed circuit board in image of the Zigbe Neo NAS-AB06B2 outdoor siren --img width="940" height="529" %}

To finish, a quick overview of the printed circuit. Here everything is clear and precise, the *Tuya Zigbee chip is directly integrated* into the circuit, a few LEDs on the bottom, direct connections to the speakers on the top, as well as a connection for powering the battery via the solar panel , a real plus for this product. According to the description, the sound of the device develops 90db at 3m, **given the acute component of the speakers we must be there, there too it will do the job but we could have had a little more especially for the exterior.**

{%- include alert.html type="info" text="I suggest you use the <b>Alarmo plugin:</b>Create your own alarm system in Home Assistant, which guides you in creating a smart alarm system from your various sensors, door, movement and other existing devices that you already have in your home." link="https://github.com/nielsfaber/alarmo" textlink="Alarmo" %}

## Neo Features {{ page.ref }}

In terms of characteristics, you will be able to see in the image that this case is relatively bulky. Screws and even a screwdriver are provided for fixing the product, a USB-C cable is also part of this kit, it will be used, among other things, to charge the battery, however nothing has been done to be able to directly power the Neo { { page.ref }} once in place.

{% picture posts/{{ page.guid }}/dimension-sirene-exterieur-neo-nas-ab06b2-zigbee.png --alt technical characteristics of the Zigbe Neo NAS-AB06B2 outdoor siren --img width="940" height="642" %}

A quick overview of the NEO device locations {{ page.ref }}, opening the buzzers will allow the siren to develop 100db in the event of alarms being triggered.

{% picture posts/{{ page.guid }}/caracteristiques-sirene-exterieur-neo-nas-ab06b2-zigbee.png --alt location of information for the Zigbe Neo NAS-AB06B2 outdoor siren --img width="940" height="854" %}


## Technical specifications

|Power|USB-C (5V/1A) or battery **(rechargeable 18650 solar panel)**|
|Wireless standard|Zigbee 3.0|
|Wireless Range|45m|
|Operating current|700 mA|
|Standby current|2.5 mA|
|Maximum alarm sound|100 dB at 1 m; 90dB at 3m |
|Types of alarm tones|3|
|Waterproof degree|IPX5|
|Operating Temperature|-10°C ~ 60°C (14°F ~ 140°F)|
|Operating humidity|0% ~ 90% RH (non-condensing)|
|Product size|200mm x 150mm x 66mm|
|Solar panel size|132 mm x 62 mm|
|Minimum light value for charging|10,000 Lux|

## compatibility list

The Neo siren {{ page.ref }} compatibility list is limited but **thanks to Zigbee2mqtt** the siren is compatible with our favorite open-assistants.

- Home assistant (via Zigbee2mqtt)
- Jeedom (via Zigbee2mqtt)
- Openhab (via Zigbee2mqtt)
- Gladys (via Zigbee2mqtt)
- Tuya
- Smartlife

### Compatible with Zigbee2mqtt

Fortunately for me the Neo {{ page.ref }} is Zigbee2mqtt compatible but not in its entirety, at least for the moment.

{% picture posts/{{ page.guid }}/zigbee2mqtt-a-propos-sirene-exterieur-neo-nas-ab06b2-zigbee.png --alt integration tab about zigbee2mqtt of the Zigbee Neo NAS-AB06B2 outdoor siren --img width="940" height="677" %}

The **battery level does not go up**, we could even add a low battery tab, but for the moment it is impossible to bring up the battery information. So I won't be able to tell you the charge movements via solar operation, that saddens me, but hey you can use it in your favorite assistant 👍

{% picture posts/{{ page.guid }}/z2m-expose-sirene-exterieur-neo-nas-ab06b2-zigbee.png --alt show commands in zigbee2mqtt of Zigbee Neo NAS-AB06B2 outdoor siren --img width="940" height="615" %}

**about functions**

As very very often, the state of **reporting of functions in Zigbee2mqtt is impressive**, so what do we find there:

- alarm operating status
- manual activation of the alarm
- manual activation of anti-sabotage
- operation of the anti-sabotage
- melody alarm (well the Neo {{ page.ref}} offers the choice between three melodies)
- alarm mode (sound, light, sound and light)
- operating time
- charging state
- battery level (not functional at the moment)
- and finally quality of the link in the mesh.

### Compatible with ZHA

Well in ZHA the Neo {{ page.ref }} is recognized but does not **report any functions**, because it is simply incompatible at the moment.

{% picture posts/{{ page.guid }}/integration-zha-sirene-exterieur-neo-nas-ab06b2-zigbee.png --alt compatibility in ZHA of the Zigbe Neo NAS-AB06B2 outdoor siren --img width="940" height="839" %}

## **product advantages** {{ page.ref }}
{: .blue}

- the price**
- zigbee 3.0 compatible
- Z2M compatible
- autonomous thanks to solar charging
- uses a **18650 battery**


## **the - of the product** {{ page.ref }}
{: .red}

- Improved quality for outdoors
- Tuya zigbee chip
- blue mermaid color
- ZHA incompatible
- **limited compatibility**

{% include product-embed.html guid="2180" %}

## Conclusion

What *to think of this product*, then on the one hand **for the price it will more than do the job**, but if it is exposed to bad weather I don't know how long it will last before *having to face infiltrations*. Not that the Neo {{ page.ref }} is of bad quality, but I think that *it's a bit limited for the exterior*. However, you won't take much risk given the ridiculous price of the siren.
**Compatibilities are limited** currently you can use it with Zigbee2mqtt or Tuya compatible boxes, like the *Lidl box* for example.
In the Outdoor sector, the {{ page.ref }} siren is the only one to evolve with the Zigbee protocol and in this price range,

> It is a correct product which will seem essential to you, I have no doubt.
