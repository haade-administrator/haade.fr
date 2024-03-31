---
guid: 41
title: "Zigbee 3.0 plug comparison, which one to choose ?"
description: "complete comparison of 4 zigbee 3.0 sockets, Nous Smart zigbee socket A1Z, Neo Plug-007SPB2, Aqara Smart plug SP-EUC01 and lidl SAPZ 1 A1, in a world where manufacturers have no shortage of innovations in smart sockets"
layout: post
authors: Nico
date: 2023-01-26 13:26
last_modified_at: 
categories: [Automation, Haade-lab, Tests]
tags: []
image: 'comparatif-prise-zigbee-laquelle-choisir-nous-A1Z-neo-007SPB2-aqara-AP007EUW01-lidl-SAPZ1A1.png'
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
addViews: 223
comments: true
rating:  
sourcelink:
  - https://zigbee.blakadder.com/
---

In a world where there is no shortage of smart plugs, I am going to compare 4 zigbee 3.0 compatible plugs from the brand Nous, Neo, Aqara and Lidl. Trying not to forget anything. Below you will find a comparison in the form of a table which allowed me to decide between these catches.

> Thanks to Domadoo for allowing me to carry out this test.

# Visual comparison

You will find at Domadoo for sure, the Us, neo and Aqara plugs in EU(fr) plug-in version, all are supplied in a box with more or less complete instructions.

{% picture posts/{{ page.guid }}/face-arriere-comparatif-nous-A1Z-neo-007SPB2-aqara-AP007EUW01-lidl-SAPZ1A1.png --alt rear side photo taken EU(fr) Us, Neocoolcam, Aqara, Lidl --img width="940" height="529" %}

Rendered from the front, you can see for yourself that the Us Smart Zigbee Socket A1Z and the Aqara Smart plug SP-EUC01 are delivered in EU version, which is a plus for versatility.

{% picture posts/{{ page.guid }}/face-avant-comparatif-nous-A1Z-neo-007SPB2-aqara-AP007EUW01-lidl-SAPZ1A1.png --alt front side photo taken EU(fr) and EU, Nous, Neocoolcam, Aqara, Lidl --img width="940" height="529" %}

## Nous Smart Zigbee Socket A1Z

**Of the 4 sockets, this is the one with the best aesthetic result**, with translucent plastics and one of the most successful operating/integration buttons, it is also the smallest and lightest socket tied with the neo socket Plug-007SPB2, you will realize that it integrates the Tuya protocol, going further we realize that the manufacturing design and the integration of the components is completely similar to the neo Plug-007SPB2. Domadoo sells this socket in an EU version, Tuya must be the manufacturer and only the aesthetic aspect differs from the Neo Coolcam.

Despite all these positive points, I encountered a signal strength problem, as a reminder, the 4 sockets were installed in the same place and it turns out that the **Nous sends out a signal half as strong as the others**.
> Is it a product problem or is it an error in my installation... .

On the diagram below we can see that it is a router (signal repeater) and **recognized under the zigbee model TS011F**

{% picture posts/{{ page.guid }}/prise-nous-1.png --alt integration us A1Z zigbee2mqtt about tab  --img width="940" height="648" %}

the Us Smart Zigbee Socket A1Z has **( 9 functions )**, it allows to:

- control the on/off state (fortunately otherwise it would not be intelligent)
- to set the state after a power outage
- to set the operating status of the LED on/off-on/on-off/off
- to measure the instantaneous power
- to measure the instantaneous intensity of the current
- to know the voltage
- to measure the sum of the energy consumed
- to block the operation of the physical button
- to know the quality of the signal

{% picture posts/{{ page.guid }}/prise-nous-2.png --alt integration us A1Z zigbee2mqtt tab exposes --img width="940" height="574" %}

{% include product-embed.html image="nous-prise-intelligente-zigbee-30-mesure-de-consommation.jpg" title="US - ZIGBEE 3.0 SMART SOCKET + CONSUMPTION MEASUREMENT" brand="Nous" description="The Zigbee 3.0 smart plug allows US to control any traditional electrical device remotely, via smartphone or by voice." domlink="peripheriques/6165-nous-prise-intelligente-zigbee-30-mesure-de-consommation-5907772033517.html" %}

## Neo Coolcam Plug-007SPB2

**Similar to the smart socket Us Smart Zigbee Socket A1Z**, the Neo socket diverges in a single point and that is at the level of the rendering of the color of the plastics. In my opinion it is below the Us plug, indeed the orange is a bit more flashy, it is also found at the level of the button, **some will like it**. The socket is sold at domadoo in EU version (fr), on Aliexpress you will find the EU version, which in my opinion is more versatile provided that it is pluggable in EU version (fr).

On the diagram below we can see that it is also a router (signal repeater) and **recognized under the zigbee model TS011F**


{% picture posts/{{ page.guid }}/prise-neo-1.png --alt Neo Coolcam Plug-007SPB2 integration zigbee2mqtt about tab  --img width="940" height="648" %}

the Neo Coolcam Plug-007SPB2 has **( 9 functions )** (again identical to the Nous Smart Zigbee Socket A1Z), it allows to

- control the on/off state (fortunately otherwise it would not be intelligent)
- to set the state after a power outage
- to set the operating status of the LED on/off-on/on-off/off
- to measure the instantaneous power
- to measure the instantaneous intensity of the current
- to know the voltage
- to measure the sum of the energy consumed
- to block the operation of the physical button
- to know the quality of the signal

{% picture posts/{{ page.guid }}/prise-neo-2.png --alt Neo Coolcam Plug-007SPB2 integration zigbee2mqtt tab exposes  --img width="940" height="574" %}

{% include product-embed.html image="neo-prise-intelligente-zigbee-tuya-16a-mesure-de-consommation.jpg" title="NEO - ZIGBEE TUYA 16A SMART SOCKET + CONSUMPTION MEASUREMENT (FR FORMAT)" brand="Neo coolcam" description="Control your electrical device remotely, anywhere in the world from your Smartphone and measure the electrical consumption in real time." affiliate="_DmKkeUb" domlink="peripheriques/6473-neo-prise-intelligente-zigbee-tuya-16a-mesure-de-consommation.html" %}

## Aqara Smart plug SP-EUC01

The Aqara socket is more imposing compared to the two previous ones, the quality and rendering of the materials is present, I would even say that it is of very good quality. The white plastic is shiny, the white button is well integrated. The warning light on the front **is very small and discreet**, ideal for living rooms (bedrooms, etc.). When the package is very well done, the complete instructions.

As you can see in the diagram below, it is also recognized as a router (signal repeater), as for the others, the integration into zigbee2mqtt is done without worries.

{% picture posts/{{ page.guid }}/prise-aqara-1.png --alt integration Aqara Smart plug SP-EUC01 zigbee2mqtt about tab  --img width="940" height="648" %}

the Aqara Smart plug SP-EUC01 has **( 8 functions )** allows to:

- control the on/off state (fortunately otherwise it would not be intelligent)
- to set the state after a power outage
- to measure the instantaneous power
- to measure the instantaneous intensity of the current
- to know the voltage
- to measure the sum of the energy consumed
- to **know the temperature of the room a plus**
- to know the quality of the signal

{% picture posts/{{ page.guid }}/prise-aqara-2.png --alt integration Aqara Smart plug SP-EUC01 zigbee2mqtt tab exposes  --img width="940" height="574" %}

{% include product-embed.html image="aqara-prise-connectee-zigbee-30-smart-plug-sp-euc01.jpg" title="AQARA - ZIGBEE 3.0 SMART PLUG CONNECTED SOCKET - SP-EUC01" brand="Aqara" description="Turn on or off the connected devices manually, remotely or using a time scenario, and know their consumption with the AQARA SP-EUC01 socket." domlink="peripheriques/5385-aqara-prise-connectee-zigbee-30-smart-plug-sp-euc01.html" %}

## Lidl SAPZ 1 A1

We come to the lidl socket, compared to the others, it's the biggest, integration into your home can be more difficult, the quality is there, it's also the cheapest on the market, on the other hand part it only offers 2 functions well below the competition, fortunately like the others it acts as routers.

{% picture posts/{{ page.guid }}/prise-lidl-1.png --alt integration Lidl SAPZ 1 A1 zigbee2mqtt about tab  --img width="940" height="648" %}

the Lidl SAPZ 1 A1 socket has **( 2 functions )** and allows:

- control the on/off state (fortunately otherwise it would not be intelligent)
- to know the quality of the signal

{% picture posts/{{ page.guid }}/prise-lidl-2.png --alt integration Lidl SAPZ 1 A1 zigbee2mqtt tab exposes  --img width="940" height="192" %}

# Comparative table

| |Nous A1Z|Neo PLUG-007SPB2|Aqara SP-EUC01|Lidl SAPZ 1 A1|
|-|--------|----------------|--------------|------ --------|
|Zigbee 3.0: 2.4Ghz|OK|OK|OK|OK|
|Router function (repeater)|Yes|Yes|Yes|Yes|
|Voltage|230v, 50-60Hz|85-250v, 50-60Hz|250v, 50-60Hz|220-240v, 50Hz|
|Amperage|16A, Max 3680W|16A, Max 3680W|**10A, Max 2300W**{: .red}|16A, Max **3840W**{: .blue}|
|Operating temperature|**-20~45°C**{: .blue}|0~40°C|0~35°C|**+5~35°C**{: .red}|
|Humidity during Operation|Not specified|20~85%|0~95%|10~80%|
|Reception range|55 m|55m|not specified|70m|
|Measured range equivalent distance|**25 lqi**{:.red}|58 lqi|54 lqi|58 lqi|
|Dimensions|46 x 46 x 72mm|46 x 46 x 72mm|⌀62 x 77.5mm|58 x 58 x 89mm|
|Weight|56gr|**57gr**{: .blue}|**93gr**{: .orange}|**118gr**{: .red}|
|Box compatibility|HA, Jeedom|HA, Jeedom|HA, Jeedom|HA, Jeedom|
|Number of functions|9|9|8|**2**{: .red}|
|Temperature sensor|No|No|**Yes**{: .blue}|No|
|Paper notice|Summary|complete|complete|complete|
|Operation light|red|orange|blue|white|
|Price|[**€16.99**](https://www.domadoo.fr/fr/peripheriques/6165-nous-prise-intelligente-zigbee-30-mesure-de-consommation-5907772033517.html? domid=39){: target="_blank"}{:.orange}|[**10.61**](https://uk.aliexpress.com/item/1005003446740203.html){: target="_blank "}{: .blue}~[**€16.99**](https://www.domadoo.fr/fr/peripheriques/6473-neo-prise-intelligente-zigbee-tuya-16a-mesure-de -consumption.html?domid=39){: target="_blank"}{: .orange}|[**€23.99**](https://www.domadoo.fr/fr/peripheriques/5385- aqara-plug-connected-zigbee-30-smart-plug-sp-euc01.html?domid=39){: target="_blank"}{: .red}|**€11.99**{: .blue }|

# Images for the end

The image below will show you the intensity of the brightness of the physical on/off button or the operating light for the Aqara socket.
**Note the Us and Neo Coolcam sockets have a function to disable the light.**

{% picture posts/{{ page.guid }}/lumiere-eclairage-fonctionnement-comparatif-nous-A1Z-neo-007SPB2-aqara-AP007EUW01-lidl-SAPZ1A1.png --alt Taken in function with lighting, Nous, Neocoolcam, Aqara, Lidl --img width="940" height="529" %}

Actual size of the sockets, I hope that with this shot you will be able to realize the size of the modules.

{% picture posts/{{ page.guid }}/taille-prise-zigbee-reel-comparatif-nous-A1Z-neo-007SPB2-aqara-AP007EUW01-lidl-SAPZ1A1.png --alt Size in hand of sockets, Us A1Z, Neocoolcam PLUG-007SPB2, Aqara SP-EUC01, Lidl SAPZ 1 A1 --img width="940" height="529" %}

# Ranking

After a long reflection and using the table I decided to establish this result:

1. [**Neo PLUG-007SPB2**](https://www.domadoo.fr/en/peripheriques/6473-neo-prise-intelligente-zigbee-tuya-16a-mesure-de-consommation.html?domid=39){: target="_blank"}{: .blue}
2. [Aqara SP-EUC01](https://www.domadoo.fr/en/peripheriques/5385-aqara-prise-connectee-zigbee-30-smart-plug-sp-euc01.html?domid=39){: target="_blank"}{: .orange}
3. [Nous A1Z](https://www.domadoo.fr/en/peripheriques/6165-nous-prise-intelligente-zigbee-30-mesure-de-consommation-5907772033517.html?domid=39){: target="_blank"}{: .red}
4. Lidl SAPZ 1 A1

Going back to this ranking, I decided to put the Aqara socket in second position before the Us because it did not encounter any signal strength problems and ** above all it incorporates a temperature sensor which makes it the only two-in-one plug, so we can discuss its price, which is the highest.**.
> If the We hadn't encountered any signal problems, I would have put it in first position tied with the Neo.

# Conclusion
Here's a complete comparison, and I know the **final ranking may be questionable**, but the signal problems encountered with the Us A1Z made this smart plug go from first to third position. I believe that the zigbee mesh is very important and in my opinion it is therefore part of the first choice criteria. **To conclude, I see only one interest in buying the Lidl SAPZ 1 A1 socket, its price, for the rest, go your way.**

