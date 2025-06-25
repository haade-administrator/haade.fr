---
guid: 163
title: "Sonoff SWV-BSP Programmer Review"
description: "Sonoff SWV-BSP Zigbee Watering Timer Review and Test"
ref: "SWV-BSP"
layout: post
authors: [Nico]
date: 2025-06-25 09:18
last_modified_at: 
categories: [Tests, Haade-lab, Zigbee]
tags: []
video: 
image: 'test-smart-water-zigbee-sonoffswv-bsp.png'
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
rating: 4.8
sourcelink:
  - https://sonoff.tech/product/home-appliances/swv/
---

It's been a while since I've written an article. *I apologize*, due to lack of time and the preparation of a hard-hitting article on integrating a wall-mounted tablet.

Today, I'm going to briefly but seriously introduce you to a **must-have product with the arrival of warmer weather**: the **Zigbee watering timer from Sonoff, the {{ page.ref }}**.

[Sold for less than $30 at our partner Itead](https://itead.cc/product/sonoff-zigbee-smart-water-valve/ref/122/){: target="_blank"}, the least we can say is that this price is unbeatable, especially given its quality and the number of commands available in Zigbee2mqtt, making it compatible with multiple open-source platforms.

[I've already tested a similar product from another brand; if you'd like, you can compare it directly by clicking here]({% post_url /en/2023-03-29-test-smart-watering-controller-zigbee-woox-r7060 %}), **but be aware that the features and price differ between the two products!** And the article on the Woox is from spring 2023...

{% include product-embed.html image="sonoff-programmateur-d-arrosage-zigbee-mesure-de-consommation-swv-bsp.png" title="SWV Watering Programmer" brand="Sonoff" description="Zigbee Watering Timer by Sonoff the SWV" iteadlink="sonoff-zigbee-smart-water-valve" domlink="compatibilite-des-hubs-domotiques/7187-sonoff-programmateur-d-arrosage-zigbee-mesure-de-consommation-swv-bsp.html"  affiliate="_okRXRXs" amazlink="45rhIVv" %}

## Unboxing {{ page.ref }}

The {{ page.ref }} packaging is, as usual, orange, indicating a product incorporating a Silabs EFR32MG22 Zigbee chip.

{% picture posts/{{ page.guid }}/unboxing-box-face-avant-sonoff-swv-bsp.png --alt Unpacking the Sonoff SWV-BSP watering programmer --img width="940" height="529" %}

Compatible with **ewelink** but also **zigbee2mqtt** so multi-platform it is not indicated on the packaging but look a little further down I made an integration.

{% picture posts/{{ page.guid }}/unboxing-box-face-arriere-sonoff-swv-bsp.png --alt Unpacking the Sonoff SWV-BSP watering programmer face arrière du carton --img width="940" height="529" %}

The Sonoff module {{ page.ref }} is supplied **without batteries; you'll need four AA batteries**. Inside the box, you'll find:
- a Smartwater case
- instructions
- Teflon tape
- a sealing gasket

{% picture posts/{{ page.guid }}/contenu-et-presentation-du-programmateur-arrosage-zigbee-sonoff-swv-bsp.png --alt Contents and presentation of the Sonoff SWV-BSP watering programmer --img width="940" height="529" %}

> The battery compartment is well made and sealed with a gasket

{% picture posts/{{ page.guid }}/box-pile-du-programmateur-arrosage-zigbee-sonoff-swv-bsp.png --alt Contents and presentation of the battery compartment of the Sonoff SWV-BSP watering programmer --img width="940" height="529" %}

Below **a top and bottom view of the Sonoff** {{ page.ref }} fully compatible with our European systems

{% picture posts/{{ page.guid }}/connecteur-superieur-et-inferieur-du-programmateur-arrosage-zigbee-sonoff-swv-bsp.png
--alt upper and lower part of the Sonoff SWV-BSP watering programmer --img width="940" height="529" %}

**To complete the ultra-simple front interface, consisting of a single illuminated button**
- when unpaired, it flashes green
- once paired, it turns solid green and then turns off
- when the switch status changes, the LED turns on and then turns off briefly.

{% picture posts/{{ page.guid }}/bouton-unique-face-avant-du-programmateur-arrosage-zigbee-sonoff-swv-bsp.png
 --alt single front-facing button start and stop operation as well as the inclusion of the Sonoff SWV-BSP watering programmer --img width="940" height="529" %}

### Under the hood

**Sonoff once again demonstrates its expertise**: the circuit board is very easy to access. You simply need to **remove the two rubber covers** to access two screws that will **allow you easy access to the circuit board**.

{% picture posts/{{ page.guid }}/acces-circuit-imprime-sonoff-smartwater-swv-bsp-zigbee.png
 --alt Simplified access to the Sonoff SWV-BSP watering programmer circuit board in Home Assistant --img width="940" height="559" %}

Easy to access and protected by an IP55 peripheral seal, the Sonoff {{ page.ref }} electronic board **offers entry points**, **you will notice that Sonoff uses the Silabs EFR32MG22 chip.**

{% picture posts/{{ page.guid }}/circuit-sonoff-swv.png
 --alt Sonoff SWV-BSP watering timer circuit board in Home Assistant --img width="940" height="559" %}

### Technical characteristics of the Sonoff {{ page.ref }}

|Thread Standard|BSP, NH|
|Rating|**6V(4*1.5V AA)**|
|Wireless connection|Zigbee 3.0|
|Working temperature|5°C~60°C|
|Watering temperature|5°C~40°C|
|Working humidity|5%-95%RH, non-condensing|
|Waterproof|**IP55**|
|Dimension|152x100x46mm|
|Color|Black|
|Casing materials|PC+ABS|
|Working pressure|0.06-0.8MPa|

{% include product-embed.html image="sonoff-programmateur-d-arrosage-zigbee-mesure-de-consommation-swv-bsp.png" title="SWV Watering Programmer" brand="Sonoff" description="Zigbee Watering Timer by Sonoff the SWV" iteadlink="sonoff-zigbee-smart-water-valve" domlink="compatibilite-des-hubs-domotiques/7187-sonoff-programmateur-d-arrosage-zigbee-mesure-de-consommation-swv-bsp.html"  affiliate="_okRXRXs" amazlink="45rhIVv" %}

## {{ page.ref }} in Zigbee2mqtt

Let's move on to integration with **Zigbee2mqtt** and yes, the Sonoff is Home Assistant compatible, great!
Nothing could be simpler: open the Zigbee discovery in Z2M and then press and hold the button on the module for 5 seconds. {{ page.ref }}

Once recognized, **I recommend updating the firmware** at the time of writing this article. **The latest version available is 1.0.4**
This version supports automatic shutdown in case of low water, automatic shutdown of the water valve after more than 30 minutes of water shortage.

{% picture posts/{{ page.guid }}/integration-sonoff-swv-bsp-smart-water-valve-with-update-firmware-ota.png
 --alt integration into zigbee2mqtt of the sonoff swv-bsp watering programmer with ota 1.0.4 update --img width="940" height="407" %}

### What are the functions of the {{ page.ref }}?

1. Current water flow rate in m3/h (untested) accuracy often problematic ***no liter management***.
2. Battery status
3. Open/closed switch
4. Current device status: Water valve in **normal state, water shortage, or water leak**
5. Automatic shutoff in case of water shortage, Automatic shutoff of the water valve after more than 30 minutes of water shortage. Requires firmware version 1.0.4 or later!
6. Scheduled Cyclic Watering, Smart Water Valve for Scheduled Watering
**Current Number**, Number of Times Run
**Total Number**, Total Number of Times Run (Settings from 0 to 100 **times**)
**Irrigation Duration**, Single Irrigation Duration (Settings from 0 to 86400 **seconds**)
**Irrigation Interval**, Time Interval Between Two Adjacent Irrigations (Settings from 0 to 86400 **seconds**)
7. Cyclic Quantitative Irrigation, Smart Water Valve for Circulating Quantitative Irrigation
**Current Number**, Number of Times Run
**Total Number**, Total Number of Times Run (Settings from 0 to 100 **times**)
**Irrigation Capacity**, Single Irrigation Capacity (Settings from 0 to 6500 **liters**) provided the rise is correct
**Irrigation interval**, Time interval between two adjacent irrigations (setting from 0 to 86400 **seconds**)
8. Network link quality

{% picture posts/{{ page.guid }}/capture-mesure-consommation-en-m3h-du-sonoff-swv-bsp-module-irrigation-zigbee.png
 --alt capture of consumption in m3 per hour in zigbee2mqtt of the sonoff swv-bsp watering programmer --img width="594" height="514" %}
  
> The functions present in Zigbee2mqtt are very complete, however I deplore the absence of a **measurement function by liter, knowing the instantaneous flow rate in m3/h is not a readable function** because it is possible to calculate the number of liters, fortunately in home assistant we can create this type of measurement by creating a Riemann integral

{% picture posts/{{ page.guid }}/exposition-commandes-zigbee2mqtt-sonoff-irrigation-flow-swv-bsp-zigbee.png
 --alt functions exposed in zigbee2mqtt of the sonoff swv-bsp watering programmer --img width="940" height="954" %}

### Home Assistant Template

#### Convert to liters per minute

If you simply want to convert the flow rate of the {{ page.ref }}, which is in m3/h, to liters per minute, then this function may be of interest to you.

Click on the link below to **add an input** and **model a sensor**

[![Create a template in Home Assistant](https://my.home-assistant.io/badges/integration.svg)](https://my.home-assistant.io/redirect/integration/?domain=template)

{% highlight yaml %}
{% raw %}
{{ (states('sensor.irrigation_flow') | float * 1000 / 60) | round(2) }}
{% endraw %}
{% endhighlight %}

{% picture posts/{{ page.guid }}/creer-template-liter-par-minutes-pour-sonoff-swv-smart-water-zigbee.png
 --alt create a template that converts the flow m3/h into liters/min of the sonoff swv-bsp watering programmer in home assistant --img width="629" height="858" %}

#### Convert to liters per hour

Click the link below to add an input and create a sensor.

[![Create a template in Home Assistant](https://my.home-assistant.io/badges/integration.svg)](https://my.home-assistant.io/redirect/integration/?domain=template)

{% highlight yaml %}
{% raw %}
{{ (states('sensor.irrigation_flow') | float * 1000) | round(2) }}
{% endraw %}
{% endhighlight %}

{% picture posts/{{ page.guid }}/creer-template-liter-par-heures-pour-sonoff-swv-smart-water-zigbee.png
 --alt create a template that converts the flow m3/h into liters/hours from the Sonoff SWV-BSP watering programmer in Home Assistant --img width="629" height="858" %}

#### Consumption in liters/day

First, you need to create a utility meter entry (water, gas, electricity).

Click on the link below to add an entry.

[![Create a utility meter in Home Assistant](https://my.home-assistant.io/badges/integration.svg)](https://my.home-assistant.io/redirect/integration/?domain=utility_meter)

Select **the Flow of your irrigation entity**, fill in the other parameters **use the image below** and that's it, you will have created a sensor that will report the water consumption in m3 **daily** with a reset to 0 every 24 hours, you can of course modify it as you wish.

{% picture posts/{{ page.guid }}/creation-compteur-utility-calcul-volume-m3-par-jour-home-assistant.png
 --alt Create a utility meter that converts the flow m3/h into daily volume of the Sonoff SWV-BSP watering programmer in Home Assistant. --img width="629" height="959" %}

In the second step, you simply need to create a template to convert this result to liters, and you will now have a display of consumption in liters/day. Make sure to select the utility meter sensor, in my case **sensor.volume_irrigation_day**.

[![Create a template in Home Assistant](https://my.home-assistant.io/badges/integration.svg)](https://my.home-assistant.io/redirect/integration/?domain=template)

Click on the link above **add an input** and **model a sensor**

{% highlight yaml %}
{% raw %}
{{ (states('sensor.volume_irrigation_jour') | float * 1000) | round(0) }}
{% endraw %}
{% endhighlight %}

{% picture posts/{{ page.guid }}/creer-template-liter-par-jour-avec-utility-metter-pour-sonoff-swv-smart-water-zigbee.png
 --alt create a template that converts the flow m3/h into liters/day on the utility meter entity of the Sonoff SWV-BSP watering programmer in Home Assistant --img width="629" height="849" %}

> This approach has the **advantage of allowing you to enter consumption rates and reset them daily**, but you'll need to **create two entities**.

**If you want to create a single entity that would allow you to convert m3/h to liters/day, you can also do so by creating a single template**. This function is simple to set up, but it will show the consumption for the last 24 hours!

[![Create a template in Home Assistant](https://my.home-assistant.io/badges/integration.svg)](https://my.home-assistant.io/redirect/integration/?domain=template)

Click on the link above **add an input** and **model a sensor** take inspiration from the links above, the method below helps you convert m3 to liters by multiplying it by 24 **it will give you the consumption of the last 24 hours.**

{% highlight yaml %}
{% raw %}
{{ (states('sensor.irrigation_flow') | float * 1000 x 24) | round(2) }}
{% endraw %}
{% endhighlight %}

#### Some sensor feedback

The feedback from the Sonoff {{ page.ref }} should be pretty close to reality, thanks, Sonoff.

{% picture posts/{{ page.guid }}/capture-consommation-eau-sonoff-swv-home-assistant.png
 --alt consumption readings from the Sonoff SWV-BSP watering programmer in Home Assistant --img width="629" height="546" %}

### Conclusion Sensors in HA

With HomeAssistant, you can easily optimize the consumption figures of the Sonoff irrigation module {{ page.ref }}.

{% include product-embed.html image="sonoff-programmateur-d-arrosage-zigbee-mesure-de-consommation-swv-bsp.png" title="SWV Watering Programmer" brand="Sonoff" description="Zigbee Watering Timer by Sonoff the SWV" iteadlink="sonoff-zigbee-smart-water-valve" domlink="compatibilite-des-hubs-domotiques/7187-sonoff-programmateur-d-arrosage-zigbee-mesure-de-consommation-swv-bsp.html"  affiliate="_okRXRXs" amazlink="45rhIVv" %}

## Conclusion

The Sonoff {{ page.ref }} Zigbee irrigation module is a **well-made product**. As is often the case with Sonoff, the price is aggressive, up to 50% cheaper than the competition; you can find it for less than €26 on the official Chinese website. Compatible with Zigbee2mqtt is a real plus. **I'll still deduct 0.2 points for the lack of flow measurement in liters**, which would make it very useful for default use, but this isn't the case. **Too bad!** 😡. If you use Home Assistant, you can work around this problem.