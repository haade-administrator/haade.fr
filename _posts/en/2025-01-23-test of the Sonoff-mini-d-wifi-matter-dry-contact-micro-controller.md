---
guid: 150
title: "Test of the Sonoff Contact-Dry Matter Wifi Micro Module"
description: "Sonoff unveils its first Matter/wifi compatible dry contact micro module, the Mini-D"
ref: "Mini-D"
layout: post
authors: [Nico]
date: 2025-01-23 08:29
last_modified_at: 
categories: [Tests, Haade-lab]
tags: []
video: 
image: 'test-sonoff-mini-d-module-contact-dry-ideal-garage-door.png'
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
rating: 4.6 
sourcelink:
  - https://itead.cc/product/sonoff-mini-dry-wi-fi-smart-switch-mini-d/ref/122
  - https://sonoff.tech/product/diy-smart-switches/mini-d/
---

**Few in number** on the market and often under-exploited, **home automation modules with dry contact function** are very little represented especially depending on the chosen communications protocol, in **Zigbee almost non-existent**, a little better in wifi and more often present in z-wave. Sonoff releases its first micro dry contact module the {{ page.ref }}, a micro wifi module and Matter compatible.

Let's take a look at the particularities of the **Micro module {{ page.ref }}**

{% picture posts/{{ page.guid }}/sonoff-mini-d-contact-sec-wifi-matter.png --alt Sonoff mini-d wifi dry contact module and matter test --img width="940" height="529" %}

So when I say first micro-module I'm talking about an encapsulated module, otherwise they have been providing a DIY module for some time, [the RE5V1C](https://itead.cc/product/sonoff-re5v1c/ref/122/){: target="_blank"}

- The **NO/NC/COM outputs are on the top**
- The **12-48V, 110-230V inputs** are below on either side of the module.
- S1 and S2 will allow you to connect a remote NO/NC switch
- A wifi indicator
- A small physical switch

> In short, a complete dry contact module.

{% include product-embed.html image="sonoff-contact-sec-mini-d.png" title="Mini-D" brand="Sonoff" description="First dry contact of the wifi compatible brand and matter the mini-d by Sonoff" iteadlink="sonoff-mini-dry-wi-fi-smart-switch-mini-d" domlink="produits-compatibles-matter/7615-sonoff-module-contact-sec-matter-wifi-mini-d.html" affiliate="_oFJvsYZ" amazlink="4jjUchP" %}

## Presentation of the {{ page.ref }}

A small turquoise blue box containing a notice **with the Matter qrcode** on the last page as well as a Mini-D micro-module

> Nothing more, nothing less, the essential is in ....

{% picture posts/{{ page.guid }}/presentation-deballage-sonoff-mini-d-contact-sec-wifi-matter.png --alt Presentation and unboxing of the Sonoff mini-d wifi dry contact module and matter --img width="940" height="529" %}

## The size of the {{ page.ref }}

**Negative point**, the size of the module, just look at the comparison photos between a Sonoff zbmini extreme and the Mini-D.
The Mini extreme fits perfectly into a junction box behind a switch, *it will be less easy to integrate the Mini-D behind a NO/NC switch*.

{% picture posts/{{ page.guid }}/comparatif-dimensions-sonoff-zbmini-extreme-et-mini-d.png --alt Sonoff mini-d and zbmini zigbee extreme dimensions comparison --img width="940" height="529" %}

{% picture posts/{{ page.guid }}/dimensions-sonoff-dry-contact-mini-d.png --alt Dimensions of the Sonoff Mini-D dry contact micro module --img width="458" height="498" %}

## the connections

Let's go back to the connection options, below you will find the diagrams necessary for the proper functioning of the {{ page.ref }}
The **NO/COM or NO/NC output** can power a **motor of maximum 8W**, I don't know in which case we could power this type of motor, but it must have some interest.

{% picture posts/{{ page.guid }}/schemas-et-connections-du-micro-module-sonoff-mini-d-contact-sec.png --alt Diagrams and connections of the Sonoff Mini-D dry contact micro-module --img width="940" height="1540" %}

Above are the connection diagrams for the garage door motor, whether you connect the {{ page.ref }} in AC or DC will not change anything to the NO/NC output and will allow you to confidently connect the garage door/barrier motor, in short anything that can be automated using dry contact **such as (gas/electric or oil boilers), etc..**

## Integration of the {{ page.ref }} in the Ewelink application

Well I know that this is not always the best way to view an animated gif, but this type of capture has the merit of being extremely light compared to a video, **all that to tell you** that if you want to be able to use the Sonoff {{ page.ref }} in the unique environment of Sonoff you will have to go through the **Ewelink** application. Start by downloading it from the playstore or the Appstore.

{% include qrlink.html qrlink="https://sonoff.tech/ewelink/" text="download Ewelink app directly for Android or Apple" realtextlink="Applications Ewelink for Smartphone" %}

Then nothing could be simpler, plug the {{ page.ref }} into **AC/DC**, launch the **Ewelink application** and it will immediately find the module, if this is not the case you may have to put the dry contact in inclusion mode, **just hold down for 5 seconds until the wifi LED (blue) starts flashing.**

![Integrating Sonoff mini-D module into Ewelink official app]({{ site.baseurl }}/assets/images/posts/150/integration-sonoff-mini-d-application-ewelink.webp{{ cachebuster }}){: width="434" height="940" class="lazyload pictaninpost"}{: target="_blank"}


## Integration in home assistant

There are two ways to integrate Sonoff wifi/Matter products into Home Assistant, one by integrating on a **Matter server** previously activated on Home Assistant, the other using the **SonoffLan module** available in the Hacs library, I also wrote an article on this subject in 2023 the link is available just below.

[SonoffLan the Sonoff product manager in Home Assistant]({% post_url /en/2023-07-03-sonofflan-the-manager-sonoff-for-home-assistant %})

### Installation with Matter

First of all, if this is your first Matter integration, don't hesitate to [read the official documentation.](https://www.home-assistant.io/integrations/matter/){: target="_blank"}

**First of all** to be able to integrate a Matter compatible product easily you will have to **install a Matter server** on your Home Assistant box and install **companion** for Ios or Android on your smartphone.

**Let's start by installing a Matteur Server** nothing could be simpler click on the button below

[![Installation of the official Matter server add-on](https://my.home-assistant.io/badges/supervisor_ingress.svg)](https://my.home-assistant.io/redirect/supervisor_ingress/?addon=core_matter_server)

Or go to **Settings > Add-ons > Add-ons store and select Matter server** in the official addons then start Matter server.

Go to device and services and in discovery you will see Matter version Beta you just have to add it

[![Device and services, integration](https://my.home-assistant.io/badges/integrations.svg)](https://my.home-assistant.io/redirect/integrations/)

{% picture posts/{{ page.guid }}/decouverte-serveur-matter.png --alt Discovering the Matter network in Home Assistant --img width="340" height="274" %}

If this is your first server on the network, leave the box checked: **Use the official Matter Server add-on in the Supervisor**

> Here is the server installed

Then you **will have to install companion on the Smartphone**, this is the official home assistant application.

You can [read the official companion documentation directly on the Home Assistant website](https://companion.home-assistant.io/){: target="_blank"}

Once installed you can connect the Sonoff Mini-D to the mains and your **Smartphone will automatically recognize** the module as a switch in Matter.

*Follow the steps* and choose to install the {{ page.ref }} module with Matter for Home Assistant, **for more help watch the animated Gif**.

![Integration of Sonoff mini-D module into Home Assistant and Matter server]({{ site.baseurl }}/assets/images/posts/150/integration-sonoff-mini-d-matter-home-assistant.webp{{ cachebuster }}){: width="434" height="940" class="lazyload pictaninpost"}{: target="_blank"}

> Then you will see in the devices that a module has been integrated into Home Assistant under the Matter tab.

{% picture posts/{{ page.guid }}/sonoff-contact-sec-mini-d-matter-home-assistant.png --alt Sonoff mini-D brought up in Matter with Home Assistant --img width="650" height="217" %}

Here is the information that the Sonoff dry contact micro module {{ page.ref }} sends to home assistant **thanks to the matter protocol**.

> The whole thing works perfectly.

{% picture posts/{{ page.guid }}/information-sonoff-mini-d-contact-sec-dans-home-assistant-avec-matter.png
 --alt Sonoff mini-D information upload in Matter with Home Assistant --img width="940" height="805" %}

### Installation avec Sonofflan

SonoffLan is an application available in the HACS library, as a reminder an article dedicated to Sonofflan: [SonoffLan the manager of Sonoff products in Home Assistant]({% post_url /en/2023-07-03-sonofflan-the-manager-sonoff-for-home-assistant %})

This application allows you to **integrate the entire Sonoff environment into Home Assistant**, first of all your modules will need to be previously integrated into the Ewelink application.

{% picture posts/{{ page.guid }}/integration-sonofflan-home-assistant-sonoff-mini-d.png --alt Integration into Home assistant hacs and Sonofflan of the dry contact micro-module Sonoff Mini-D --img width="940" height="746" %}

> Once SonoffLan is installed it will discover all the modules installed in the Ewelink application.

{% picture posts/{{ page.guid }}/installation-sonofflan-et-decouverte-des-modules-embarques-dans-ewelink.png --alt Integration into Home assistant hacs and Sonofflan of the dry contact micro-module Sonoff Mini-D --img width="940" height="539" %}

Here is the information from the Sonoff {{ page.ref }} sent to Home Assistant via **SonoffLan**.

{% picture posts/{{ page.guid }}/sonoff-mini-d-contact-sec-dans-sonofflan.png --alt Information in Home assistant hacs and Sonofflan of the dry contact micro-module the Sonoff Mini-D --img width="940" height="795" %}

## Technical Characteristics

|Model|MINI-D|
|Wireless Connection|Wi-Fi: IEEE 802.11 b/g/n 2.4GHz|
|Max.Load|24V⎓2A Max Resistive load OR 12/24V⎓8W Motor Load|
|Rating|100-240V~50/60Hz 0.1A Max OR 12-48V⎓1A Max μ|
|Color|White|
|Casing Material|PC|
|Net Weight|34.5g|

**Product + points:**{: .blue}

- The price less than 15€
- Wifi and Matter compatible
- Home Assistant, Ewelink integration
- AC or DC power supply
- special dry contact

**Product - points:**{: .red}

- The relatively large dimensions
- Zigbee protocol unavailable

{% include product-embed.html image="sonoff-contact-sec-mini-d.png" title="Mini-D" brand="Sonoff" description="First dry contact of the wifi compatible brand and matter the mini-d by Sonoff" iteadlink="sonoff-mini-dry-wi-fi-smart-switch-mini-d" domlink="produits-compatibles-matter/7615-sonoff-module-contact-sec-matter-wifi-mini-d.html" affiliate="_oFJvsYZ" amazlink="4jjUchP" %}

## Conclusion

The Sonoff {{ page.ref }} is a **niche product** on the home automation market, because rare are the **products with a dry contact**, it is well finished and functional, the NO/NC output can even power a maximum 8W motor, easy to install for a price less than €15, makes this module a product to buy if you want to control among other things **the opening of your garage door, gate or control your boiler.**