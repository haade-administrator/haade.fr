---
guid: 129
title: "Sonoff Pow Ring POWCT energy meter review"
description: "New intelligent energy meter on the market, the Sonoff Pow Ring POWCT offers external energy measurement, a digital display, a remote wifi antenna which can make the most of its energy consumption"
ref: "POWCT"
layout: post
authors: [Nico]
date: 2024-06-10 14:00
last_modified_at: 
categories: [Automation, Tests, Wifi]
tags: []
video:
image: 'sonoff-pow-ring-powct-smart-energy-meter-wifi.png'
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
rating: 4.5
sourcelink:
  - https://sonoff.tech/product/diy-smart-switches/powct/
  - https://itead.cc/product/sonoff-pow-ring-smart-power-meter-switch/
---
Today I have the chance to test the 100A intelligent energy meter, **the Sonoff Pow ring {{ page.ref }}**, this is not the first Sonoff meter that I have tested, there is some time [I was able to test the pow elite 16A and integrate it with SonoffLAN]({% post_url /en/2023-07-03-sonofflan-the-manager-sonoff-for-home-assistant %}){: target="_blank"}, moreover I repeated the experience with the {{ page.ref }}.

> But officially it is not recognized in the SonoffLAN application **so will it work?**

{% picture posts/{{ page.guid }}/sonoff-pow-ring-powct-mesure-intelligent-energie-wifi.png --alt image presentation case sonoff pow ring powct energy manager --img width="940" height="529" %}

{% include product-embed.html image="produit-sonoff-mesure-consommation-energie-pow-ring-powct.png" title="Sonoff Pow Ring energy measurement POWCT" brand="Sonoff" description="Energy measurement up to 100A Sonoff Powct wifi, supplied with current clamp and wifi antenna" iteadlink="sonoff-pow-ring-smart-power-meter-switch" %}

## Prerequisites

- Homeassistant HAOS preferably
- HACS installed
- [SonoffLan](https://github.com/AlexxIT/SonoffLAN){: target="_blank"} installed
- or [Ewelink](https://ewelink.cc/ewelink-works-with-home-assistant/){: target="_blank"} for home assistant
- Ewelink on smartphone [Android](https://play.google.com/store/apps/details?id=com.coolkit&hl=fr&pli=1){: target="_blank"} or [Apple](https://apps.apple.com/us/app/ewelink/id1035163158){: target="_blank"}

## Unboxing the Sonoff {{ page.ref }}

Delivered in a beautiful, high-quality box, the Sonoff Pow Ring {{ page.ref }} is very well packaged, as you can see in the image, the protective foam is thick and the box is relatively large.

{% picture posts/{{ page.guid }}/deballage-sonoff-pow-ring-powct-mesure-energie-wifi.png --alt image unboxing sonoff pow ring powct energy manager --img width="940" height="529" %}

**In the box we find:**

- the energy meter
- the split core pliers
- the wifi antenna
- a wall crosspiece for the wifi antenna
- a set of 2 screws to **lock access to the connectors.**

{% picture posts/{{ page.guid }}/contenu-boite-sonoff-pow-ring-powct-mesure-energie-wifi.png --alt contents of the sonoff pow ring powct energy manager box --img width="940" height="529" %}

## Special feature of Sonoff {{ page.ref }}

The differences between the {{ page.ref }} meter and the POWElite are numerous.

**To begin with** the cases are similar sizes and **designs**, the A and W measurement reading are similar and that's about it.
The Sonoff {{ page.ref }} allows you to measure the power of one or more circuits **(up to 100A)** thanks to the split core sensor distributed with it.
The Sonoff {{ page.ref }} is supplied with an external wifi antenna to optimize network reception.

{% picture posts/{{ page.guid }}/prise-photo-presentation-sonoff-pow-ring-powct-mesure-intelligent-energie-wifi.png --alt Capture and presentation of the sonoff pow ring powct energy manager --img width="940" height="529" %}

According to the designer **the module was tested methodically and rigorously**, and you can imagine that it held up. In the photo below you can note that it was tested by the **German Tüv Rheinland Office**. European certification guarantee.

> I admit that it is still quite rare to see this logo on 100% Chinese products.

**As for the Pow Elite** you can lock access to the connectors using the two screws provided in a blister pack.

{% picture posts/{{ page.guid }}/particularite-sonoff-pow-ring-powct-mesure-intelligent-energie-wifi.png --alt Capture and presentation of the sonoff pow ring powct energy manager --img width="940" height="529" %}

**To finish some particularities:**

1. It comes with a **split core current transformer clamp** Transformer current detection up to 100A. No physical contact with live wires, eliminating the risk of electric shock. Simply release or close the latches on the side of the sensor to open and close the CT sensor.
2. **Energy Monitor** Install it in your home's electrical circuit panel to monitor the power consumption of household appliances or rooms.
3. **Historical data retention for 6 months:** Automatically records electricity consumption data when you remove appliances or have a power outage. Data can be saved for up to 6 months and exported to a file for viewing using the Ewelink app
4. **Supports contactor control** POWCT has a dry contact relay with a rated output current of 2A which is used with a contactor to realize load switching control.
5. **Safe and reliable** Pass various rigorous tests, including lightning and surge tests, short circuit tests, drop tests, salt spray tests, extremely harsh environment tests, etc. . Products you can trust 100%.

![Sonoff Pow Ring Powct meter display]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/sonoff-pow-ring-powct-smart-energy-meter-wifi.webp{{ cachebuster }}){: width="940" height="529" class="lazyload"}

## Let's talk about hookups

In direct connection, not complicated, you connect the Sonoff {{ powct }} to the desired line or group of power lines, then you put the split core clamp on the phase whose consumption you want to control and that's it.

{% picture posts/{{ page.guid }}/schema-branchement-avec-sans-contacteur-no-nc-sonoff-powct.png --alt Connection diagram Sonoff POWCT intelligent energy measurement --img width="940" height="481" %}

**Where I have the most difficulty** is connecting a switch (NO/NC) 👺, by connecting the COM with the neutral on the same network, as shown in diagram number 2 j I measured from 0 to 20V max when you close the circuit using the switch on the POWCT. Which allows you to control a switch/switch integrating the dry contact. And as indicated in the diagram **when Sonoff speaks of a switch I interpret a remote switch** and in France I have not found a dry contact remote switch but only on 230V switching. 👺

> So I find **that this function is difficult to use according to French standards** to control the opening/closing of a circuit unlike a **POW Elite**.

## Documentations {{ page.ref }}

{% include doclink.html pdf="User-Manual-POWCTEN.pdf" title="Sonoff POWCT wifi energy meter user manual" %}

{% include doclink.html pdf="Quick-Guide-POWCT-V1.1.pdf" title="Sonoff POWCT wifi energy meter quick guide" %}

## Home Assistant integration

To integrate the Sonoff {{ page.ref }} into home assistant and in a **non-invasive** way, you will still need to install the **Ewelink** application on your Smartphone. For the rest I do not use the Ewelink add-on module for HAOS but the very good **SonoffLan via HACS** module. [I wrote a complete article on this module]({% post_url /en/2023-07-03-sonofflan-the-manager-sonoff-for-home-assistant %}){: target="_blank"} and frankly it does the TAF and above all the **Sonoff POWCT is 99% compatible**.

### I use SonoffLan

For me **Sonofflan is a must have**, to manage your Sonoff Wifi modules, the simple fact of being able to configure the SonoffLan integration for local use is a **must have** (provided that your module is compatible) , and remember that the Powct is local.

That's not all SonoffLan is [W.A.F](https://en.wikipedia.org/wiki/Wife_acceptance_factor){: target="_blank"}, the integration of the modules is very simple, and for the control I don't even talk about it ☝️.

{% picture posts/{{ page.guid }}/Sonoff-compteur-énergie-powct-homeassistant-dans-sonofflan.png --alt Integration of sonoff pow ring powct energy manager --img width="940" height="506" %}

Small inconvenience, the feedback of **consumption from the previous day** does not seem to work, for the rest it is operational, you can even control the Wifi LED, we cannot say that it is not compatible.

{% picture posts/{{ page.guid }}/integration-sonoff-compteur-énergie-powct-homeassistant-sonofflan.png --alt Capture and presentation of the sonoff pow ring powct energy manager --img width="940" height="853" %}

**Product advantages:**{: .blue}
- Quality module
- the price **(33€ approx)**
- SonoffLan compatible
- integrated into Home Assistant in various ways
- measures up to 100A
- supplied with external wifi antenna
- supplied with split core pliers.
- precise measurement.
- ideal for measuring **Solar consumption**
- 6 months of history

**The - of the product:**{: .red}
- special dry contact contactor

{% include product-embed.html image="produit-sonoff-mesure-consommation-energie-pow-ring-powct.png" title="Sonoff Pow Ring energy measurement POWCT" brand="Sonoff" description="Energy measurement up to 100A Sonoff Powct wifi, supplied with current clamp and wifi antenna" iteadlink="sonoff-pow-ring-smart-power-meter-switch" %}


## Conclusion

As with other products in the range, **Sonoff reinforces the guarantee of quality**. In my opinion the energy meter {{ page.ref }} is only useful if you want to measure the **consumption of several circuits** at the same time thanks to the clamp and **the intensity of 100A Max* *. Or to measure a solar consumption network greater than 20A.

> If this is not the case for you but you still want a similar product **I recommend the POW Elite 20A instead.**

{% include product-embed.html guid="2168" %}

