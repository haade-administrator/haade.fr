---
guid: 47
title: "Fibaro FGPWE-102 Smart Plug Test"
description: "Despite a very high cost for such a module, what is this z-wave 700 Fibaro FGPWE/P-102 smart socket really worth?"
layout: post
authors: Nico
date: 2023-02-19 18:06
last_modified_at: 
categories: [Automation, Tests, Zwave]
tags: []
image: 'prise-intelligente-fibaro-wall-plug-fgpwe-f-102-zwave-700.png'
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
addViews: 18
comments: true
rating: 4.4
sourcelink:
  - https://www.fibaro.com/fr/products/wall-plug/
---

Fibaro has always been a manufacturer of Z-wave modules **of very high quality**, they know how to combine **aesthetics and functionality**, just look at the switches they provide, *simply Magnificent*.

Below are 3 pictures of Z-wave 700 FGWPE/F-102 Fibaro smart socket. Besides, for that **I would like to thank Domadoo** who allowed me to carry out this test. At first glance this shot does not present anything exceptional *so what could justify this price.* 🤔

{% picture posts/{{ page.guid }}/qualite-fabrication-prise-intelligente-fibaro-fgpw-102.png --alt fibaro FGPW-102 smart plug build quality --img width="940" height="529" %}

{% include product-embed.html guid="2148" %}

# Variants

The socket is available in Eu France and Eu German version known as Schuco, I advise you to take the **Schuco version** if available because backward compatibility is greater, you will encounter fewer problems with your additional accessories.

{% picture posts/{{ page.guid }}/prise-intelligente-fibaro-wall-plug-E-et-F-102-zwave-700.png --alt fibaro FGPW-102 french and german version schuko --img width="940" height="529" %}

# know socket status with colors

This is how Fibaro stands out from its competitors thanks to color, but does it justify the price difference?
After integration, when you unplug the plug and plug it back in, if it briefly lights up green, it is recognized in the network, if it is red, resume your inclusion. (The inclusion is done simply by connecting the mains plug).

{% picture posts/{{ page.guid }}/colors-fibaro-fgpwe-102.png --alt presentation fibaro FGPW-102 different colors --img width="940" height="1380" %}

## in the network

Hold down for the time that the socket flashes purple, then a colored indication appears.

- If **vert**{: .green} you are connected directly to the key
- In **yellow**{: .yellow} you are connected to a router
- In **purple**{: .purple} communication is limited
- In **red**{: .red} there is no signal

## of consumption

if the consumption is:

- Instant 80w color will be **blue**{: .blue}
- Instant 210w color will be **green**{: .green}
- 550w instant the color will be **yellow**{: .yellow}
- 1250w instant the color will be **orange**{: .orange}
- 2000w instant the color will be **red**{: .red}
- 2300w instant the color will be **purple**{: .purple}

{% include product-embed.html guid="2149" %}

# The module in Homeassistant with ZwaveJS

Everything is functional, however a shell at the Firmware level is recognized as Unknown, I did not look into the question especially since in Jeedom it is well recognized.

**Thanks to ZwaveJS, the Fibaro fgpw-102** smart plug brings up information from:

- Power
- Instantaneous consumption in W
- Total consumption in Kwh

{% picture posts/{{ page.guid }}/integration-home-assistant-zwavejs.png --alt fibaro fgpw-102 smart plug integration in homeassistant with zwavejs --img width="940" height="901" %}

> More a whole battery of Parameters and Diagnostics in short than Happiness.

![Parameter Fibaro fgpw-102 homeassistant-zwavejs]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/parametre-homeassistant-zwavejs-fibaro-fgpw-102.webp{{ cachebuster }}){: width="940" height="870" class="lazyload"}

# the module in Jeedom + ZwaveJS

For everyone's happiness, Jeedom also uses the excellent ZwaveJS, it also brings up all the consumption info, however a little more to Jeedom Luna **it does bring up the Firmware info.**

{% picture posts/{{ page.guid }}/integration-jeedom.png --alt  --img widtfibaro fgpw-102 smart plug integration in Jeedom with zwavejs --img width="526" height="354" %}

We also have access **to the different parameters** of the module, the Z-wave is still great, especially at the level of the mesh

{% picture posts/{{ page.guid }}/integration-jeedom-paramètres.png --alt fibaro fgpw-102 smart plug settings in Jeedom with zwavejs --img width="940" height="668" %}

> **PS:** under Jeedom I encountered latency when refreshing information, unlike Homeassistant where the status feedback is more reactive.

# The **+**{: .blue} of the product

- very good quality
- brings up consumption information
- light effects for digital recognition
- exists in fr standard and [**De Schuco**]({% link _products/{{ page.locale | slice: 0,2 }}/2023-02-20-smart-plug-fibaro-fgpwf-102-zwave.md %})
- build quality
- z-wave+ integration

# The **-**{: .red} of the product

- the price (not far from **74€**)

# Technical characteristics

|Power supply|230V AC, 50/60 Hz|
|Rated load current|11A|
|Power consumption|up to 1.6W|
|Power output (for resistive load)|2.5kW|
|In accordance with EU standards|RED 2014/53/EURoHS 2011/65/EU|
|Operational temperature|0 – 40°C|
|To be used with E or F type (Schuko) sockets|CEE 7/16 – max load 2.5 A, CEE 7/17 – max load 11A|
|Radio protocol|Z-Wave, Z-Wave+ (firmware 3.2 or higher)|
|Radio frequency|868.4 or 869.8 MHz EU, 869.0 MHz RU|
|Radio transmit power|up to -10 dBm (EIRP)|
|Range|up to 50 m outdoors, up to 30 m indoors, up to 40 m indoors (firmware 3.2 or higher)|
|Dimensions|(D x H) 43 x 65mm|

{% picture posts/{{ page.guid }}/dimensions-fibaro-wall-plug-E-et-F-102-zwave-700-utility.png --alt dimension fibaro FGPW-102 smart socket zwave --img width="320" height="175" %}

# Files

{% include doclink.html pdf="Manuel-Fibaro-FGWPEF-102-S-v2.7_web.pdf" title="Installation and user guide smart socket z-wave 700 Fibaro FGPWE/P-102" %}

{% include doclink.html pdf="Manuel-instruction-fibaro-FGWPx-10x-EN-SG.pdf" title="Image instruction manual smart socket z-wave 700 Fibaro FGPWE/P-102" %}

{% include product-embed.html guid="2148" %}

# Conclusion

If at home you only use the Z-wave network then you are used to spending a fortune for a single module, then if this is your case the Fibaro FGPWE/P-102 is for you without a doubt. For the others, there is Neo-Coolcam, which makes a similar module for half the price, but the **manufacturing quality and the quantity of parameters** are not at all the same.