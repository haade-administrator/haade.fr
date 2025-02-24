---
guid: 155
title: "Install a connected LED strip DIY with WLED"
description: "I will show you how to easily install a Gledopto GL-C-310WL LED strip in home assistant thanks to WLED installed by default in the module, child's play"
ref: "GL-C-310WL"
layout: post
authors: [Math67]
date: 2025-02-24 09:00
last_modified_at: 
categories: [Haade-lab, Tests, Home-Assistant]
tags: []
video: 
image: 'install-led-strip-easily-with-wled-and-gledopto.png'
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
rating: 5 
sourcelink:
  - https://kno.wled.ge
  - https://www.gledopto.com/h-col-443.html
  - https://s.click.aliexpress.com/e/_ookEADy
  - https://amzn.to/3CLncyE
---

In order to light up the coffee niche in my kitchen, **I decided to make my own LED strip** using [WLED](https://kno.wled.ge){: target="_blank"}. 
WLED connects to your Wifi and **is natively recognized by Home Assistant**, it allows you to use an addressable LED strip and offers many programming possibilities, I explain in this article how to do it.

{% include product-embed.html image="gledopto-gl-c-310wl-309-esp32-wled-encastrable-gestion-led.png" title="Gledopto GL-C-310WL" brand="Gledopto" description="GLEDOPTO ESP32 Mini WLED LED Controller With Mic DIY Music Dynamic Modes Digital WS2811 WS2812 SK6812 TM1814 WS2813 WS2815 Strip" affiliate="_ookEADy" amazlink="3CLncyE" %}

## Prerequisites

- Home assistant
- A **WLED module** from the GLEDOPTO brand (here GL-C-310WL)
- A LED strip **(WS2811, WS2812, SK6812, TM1814, WS2813 or WS2815**)
- An aluminum profile for the LED strip
- 1.5mm² electric wire
- A 12V power supply

{%- include alert.html type="warning" text="Warning! You will have to work near a voltage of 220V which is dangerous if you come into contact with an electrical conductor. Be careful when handling, if in doubt cut off the power supply." %}

## Discovery of the Gledopto {{ page.ref }}

The Gledopto {{ page.ref }} is discreet, it can be embedded in a junction box, on the connector side we find a 5-24v compatible input as well as 6 RGB outputs and two free GPIO12 and GPIO33 connectors that will allow you to do DIY, such as adding a push button with multiple settings.
The strength of Gledopto Products lies in the firmware that directly integrates WLED, making these modules plug'n play and compatible with open source home automation assistants on the market [compatible with WLED as Home assistant](https://www.home-assistant.io/integrations/wled/){: target="blank"}.

**The Gledpto {{ page.ref }}**

- Can control two light strips
- controls **color segmentation**
- switch available directly on the module
- **has a built-in microphone** type 12S
- possibility to configure scenes
- Access to all WLED functions
- Fully compatible with Home Assistant via [WLED integration](https://www.home-assistant.io/integrations/wled/){: target="_blank"}

### Physical buttons of the {{ page.ref }}

{% picture posts/{{ page.guid }}/fonctions-des-boutons-physiques-du-gledopto-gl-c-310wl.png --alt functions of the physical buttons of the Gledopto GL-C-310WL thanks to Wled integrated by default --img width="300" height="266" %}

**1# Restart button:**
By pressing **this button you turn off or turn on the module completely** making the WLED controller unusable.
Can be used after a microphone configuration

**2# Function button**
- short press: on/off function (turns the LEDs on or off)
- press > 1 second: changes the color of the LEDs
- press > 10 seconds: sets the module as an access point and activates the WLED-AP access point

### Push button functions available on GPIO33

{% picture posts/{{ page.guid }}/fonctions-gpio-33-bouton-poussoir-gledopto-gl-c-310wl-led.png --alt functions of the push buttons connectable to a DIY gGPIO33 port of the Gledopto GL-C-310WL thanks to Wled integrated by default --img width="940" height="189" %}

Find the **product sheet** for {{ page.ref }} directly on the [Gledopto Manufacturer website](https://www.gledopto.com/h-col-443.html){: target="_blank"}

### Technical Characteristics

|Model No.|GL-C-310WL|
|Output Current/Channel|6A Max|
|Chip Types|ESP32|
|Microphone|Yes|
|N.W.|20.1g|
|Operating Temperature|-20~45℃|
|Input Voltage|**DC 5-24V**|
|Total Output Current|**10A Max**|
|IC Quantity|800 Max|
|Material|Fireproof PC|
|G.W.|24.1g|
|Size|42x38x17mm|

## LED strip installation

{% picture posts/{{ page.guid }}/Gledopto-gl-c-310wl-esp32-wled-encastrable-wifi.png --alt Installation of a Diy led strip with esp32 and wled integrated in the Gledopto GL-C-310WL --img width="940" height="529" %}

**To make installation easier** and have something clean to hide behind my kitchen cabinet, I opted for a “plug & play” module, but it is possible to assemble your own module using an ESP32 [the method can be found on the WLED website:](https://kno.wled.ge/basics/compatible-controllers/){: target="_blank"}.

{% include product-embed.html image="bandeau-led-ws2811-etc-compatible-gledopto.png" title="WS2811 and + LED strip" brand="Led" description="Led strips compatible with Gledopto WS2811 WS2812 SK6812 TM1814 WS2813 WS2815 Strip" affiliate="_okO72HY" amazlink="4i6wggc" %}

> I chose the GLEDOPTO module because it can be installed **in a flush-mounting box**, it supports **2 LED strips** as well as 2 push buttons or switches, it accepts a supply voltage **from 5 to 24V** and comes with **pre-installed WLED**.

{%- include alert.html type="info" text="<b>AWarning:</b> The module does not transform the input voltage, it is imperative that the input voltage corresponds to the supply voltage of the LED strip." %}

## Wiring diagram of the {{ page.ref }}

{% picture posts/{{ page.guid }}/schema-cablage-gledopto-gl-c-310wl-esp32-wled-encastrable-wifi.png --alt Gledopto GL-C-310WL Wiring Diagram --img width="940" height="529" %}

{% include product-embed.html image="meanwell-alimentation-rail-din-5-12-24v.png" title="Alimentation Meanwell" brand="Meanwell" description="MeanWell HDR-15-12 DIN Rail Power Supply, Black" affiliate="_onTSYuQ" amazlink="3D7VgoB" %}

Depending on the length of your LED strip and the supply voltage, **you will absolutely have to calculate the power of your downstream power supply**, to do this you can use the [calculator on the WLED website](https://wled-calculator.github.io){: target="_blank"} it is important to correctly size your installation in order to avoid a risk of overheating or even fire, even with 12V, you must also protect the 12V power supply with a circuit breaker.
After having **carefully chosen your power supply and your strip**, all you have to do is slide the strip into an aluminum profile [**Here from the Paulmann brand found in DIY stores**](https://amzn.to/4bd7mJG){: target="_blank"}, connect the WLED module, fix your profile and connect everything to the **12V power supply**.

{% include product-embed.html image="profile-paulmann-special-bandeau-led-alu.png" title="Profilé Paulmann bande led" brand="Paulmann" description="INNOVATE 2m Aluminum profile - LED Rail channel - for LED strips - Aluminum profile for LED strips" amazlink="4bd7mJG" %}

{% picture posts/{{ page.guid }}/photo-cablage-gledopto-gl-c-310wl-esp32-wled-encastrable-wifi.png --alt Gledopto GL-C-310WL wiring photo --img width="940" height="529" %}

## Wifi connection

Once your module is powered on, connect to the module via Wifi, in your Wifi settings you should see a new network **WLED-AP** appear, the password is **wled1234**, a page will open automatically to **ask you to enter the identifiers of your Wifi network**.

## WLed settings

Once your module is connected to your Wifi, go to the configuration page **by typing the IP address in your browser**, you will have to go to **Config > LED Preferences** to declare the characteristics of your strip.

- In the first part you have the possibility to limit the maximum power of the strip at the software level
- **1.:** The type of strip
- **Ma/LED:** the consumption of an LED
- **Color Order:** the order of colors
- **Lenght:** the length of the strip (NB of physical LEDs)

{% picture posts/{{ page.guid }}/interface-gestion-wled-origine-Gledopto-gl-c-310wl.png --alt Gledopto GL-C-310WL default wled parameter interface --img width="600" height="740" %}

## Integration under HA

Home Assistant will **automatically discover your WLED module and offer to add it**. You are then free to create automations or add a card to your Dashboard.
Just look at the screenshot below to realize that **the integration is very complete** *a home automation dream!*

{% picture posts/{{ page.guid }}/interface-gestion-administration-du-Gledopto-gl-c-310wl-dans-home-assistant-automatiquement-decouvert-grace-a-wled.png --alt Gledopto GL-C-310WL management and automatic discovery interface thanks to Wled integrated by default --img width="600" height="768" %}

For more information about WLed: [https://kno.wled.ge](https://kno.wled.ge){: target="_blank"}

## The Price

Regarding the price of {{ page.ref }} it varies from simple to double, it goes [from around twenty euros on Aliexpress](https://s.click.aliexpress.com/e/_ookEADy){: target="_blank"} at [forty euros on Amazon](https://amzn.to/3CLncyE){: target="_blank"}. *It's up to you to make the choice*!

{% include product-embed.html image="gledopto-gl-c-310wl-309-esp32-wled-encastrable-gestion-led.png" title="Gledopto GL-C-310WL" brand="Gledopto" description="GLEDOPTO ESP32 Mini WLED LED Controller With Mic DIY Music Dynamic Modes Digital WS2811 WS2812 SK6812 TM1814 WS2813 WS2815 Strip" affiliate="_ookEADy" amazlink="3CLncyE" %}

## Conclusion

Here is an interesting product Gledopta {{ page.ref }} integrates by default the famous **LED management software which is none other than WLED**. **In a few minutes you will be able to control the LED strips** in any way and integrate it in one click in Home Assistant, **Magnificent**.


