---
guid: 123
title: "Test and integration of the Blebox Doorbox v2 module"
description: "In this article I will present to you the micro wifi doorbox v2 module from Blebox NO/NC for garage door, gate as well as the integration into the Tedee and Home Assistant application"
ref: "doorbox v2"
layout: post
authors: [Nico]
date: 2024-05-07 23:00
last_modified_at: 
categories: [Tests, Automations, Wifi]
tags: []
video: 
image: 'test-blebox-doorbox-v2-integration-tedee-home-assistant.png'
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
rating: 3 
sourcelink:
  - https://blebox.eu/en/product/doorbox/
  - https://blebox.eu/en/control-devices-blebox-system/
  - https://blebox.eu/en/manuals/
---

[Following the article on the Tedee GO connected lock]({% post_url /en/2024-04-22-test-of-the-tedee-go-connected-lock-and-accessories %}). The manufacturer Tedee **also provided me with a relay module {{ page.ref }}**, it is a **NO/NC module from the Blebox brand**. Polish manufacturer of micro wifi module, I must admit that they are qualitative and there is rather interest because it is sold **69€** when the competition does the same thing for half the price!.

{% picture posts/{{ page.guid }}/blebox-doorbox-tedee.png --alt contents of the Blebox relay box for Tedee Go --img width="940" height="529" %}

Why did you provide me with this module, well you must suspect it is compatible with **the Tedee environment** and at the same time **Home Assistant**. Finally compatible with the Tedee environment yes [but especially via the portal](https://portal.tedee.com/){: target="_blank"}, *because on the Tedee Smartphone application you can simply activate the NO/NC relay.*

{% include product-embed.html guid="2197" %}

This module is **sold for around €69** to make NO/NC contact and limited to an input voltage ranging from 12 to 24v. It's **frankly expensive** especially since competition like Tuya can sell it to you 2 to 3 times cheaper with wifi or Zigbee.

{% picture posts/{{ page.guid }}/blebox-doorbox-tedee-taille-dans-la-main.png --alt delivered to the hand of the Blebox relay for Tedee Go --img width="940" height="529" %}

> For this price I hope that this Blebox module {{ page.ref }} is of quality

## Prerequisites

To follow this tutorial you will need:
- the wBox application by Blebox for [Google playstore](https://play.google.com/store/apps/details?id=eu.blebox.wBox&hl=en_US){: target="_blank"} or [Apple AppStore](https://apps.apple.com/fr/app/wbox-by-blebox-eu/id1000135997){: target="_blank"}
- The Tedee app [Google playstore](https://play.google.com/store/apps/details?id=tedee.mobile&hl=fr&gl=US){: target="_blank"} or [Apple AppStore](https://apps.apple.com/fr/app/tedee/id1481874162){: target="_blank"}
- [Home Assistant](https://www.home-assistant.io/){: target="_blank"} d'installé et opérationnel.
- An [12-24v power supply](https://s.click.aliexpress.com/e/_DEmnuCJ){: target="_blank"}

Like you, I find that there are a lot of applications to install, but if you use the Tedee or Home Assistant connected locks, the Blebox application will only be installed temporarily while you configure the wifi.

## Blebox presentation {{ page.ref }}

This is the first time I have dealt with this brand and I would also like to thank Tedee for providing it to me. I must say that the **product is of excellent quality** given the price (sold around €70) it's the least we expected!

{% picture posts/{{ page.guid }}/face-arriere-blebox-doorbox-v2.png --alt rear side of the Blebox doorbox v2 module --img width="940" height="529" %}

## Blebox Technical Characteristics {{ page.ref }}

|Supply voltage|12-24V AC / DC|
|Power consumption|less than 1W|
|Outputs number|1|
|Outputs type|relay|
|Max load|6A 24V AC 6A 24V DC|
|Inputs voltage|12 - 24V AC / DC|
|Galvanic isolation|Yes, optical|
|Inputs polarization|detected automatically|
|Housing|made of polyurethane composition not containing halogens, self-extinguishing for thermal class B (130 °C)|
|Protection Rating|IP20|
|Mounting|in the flush-mounted box (deepen or double) in the receiver case.|
|Transmission|bi-directional, encrypted|
|Transmission frequency|2.4GHz|
|Communication standard|μWiFi, compatible with WiFi|
|Communication mode|direct connection (as access point), Wi-Fi connection via a standard router, connection with access from any location in the world (requires access to the Internet)|
|Control with|Apple iPhone, Apple iPad, iPad Mini, Android, computers and mobile devices operating a fully HTML5|
|Encryption|WPA2-PSK and authenticated encryption with associated data (AEAD)|
|Control output type|relay NC/NO|
|Maximum power|144VA @ 24V AC 144W @ 24V DC|

### Documents to download

{% include doclink.html pdf="BleBox_Installation_FR.pdf" title="Tedee blebox doorbox installation instructions and user manual" %}

{% include doclink.html pdf="Blebox-doorbox-v2-demarrage-rapide.pdf" title="Blebox doorbox v2 quick start guide" %}

{% include doclink.html pdf="schema-branchement-doorBox_v2.pdf" title="Blebox doorbox v2 connection diagram" %}

## Wifi settings

Go to the wBox application by Blebox.eu and register. And yes for this tutorial you will need to install wBox in addition to Tedee on your Smartphone *but this is temporary.*

{% picture posts/{{ page.guid }}/first-connection-app-blebox-doorbox-v2.png --alt first connection to the Blebox application to configure the doorbox v2 module --img width="940" height="509" %}

Start by logging into the app so you can use it.

{% picture posts/{{ page.guid }}/connection-accesspoint-app-blebox-doorbox-v2.png --alt connection to the Blebox application to configure the access point of the doorbox v2 module --img width="940" height="509" %}

Then connect to the module by selecting the wifi network named **doorBox_v.....** in the wifi settings of your smartphone.

{% picture posts/{{ page.guid }}/connection-wifi-reseau-domestique-app-blebox-doorbox-v2.png --alt connection to the Blebox application to configure the wifi connection of the doorbox v2 module --img width="940" height="509" %}

Once connected to the module, let's configure it on the wifi of your home network. Go to **Connection** then click on the wifi network in **Available WIFI Networks** and enter **the password** of your network.

{% picture posts/{{ page.guid }}/ajouter-nouveau-module-reseau-domestique-app-blebox-doorbox-v2.png --alt adds doorbox v2 module in wbox application by blebox.eu --img width="940" height="509" %}

Next step you will have to add this module in the application, return to the home page, select add new devices and Add device already connected to wifi Network. At this stage the Blebox module {{ page.ref }} is in the application.

{% picture posts/{{ page.guid }}/desactive-accesspoint-app-blebox-doorbox-v2.png --alt disables the access point of the doorbox v2 module --img width="940" height="509" %}

Last step, I will show you how to disable the initial wifi access point named **doorBox_v...**. Return to the **module settings**, then click on **service connection (AP)** and deactivate **Access point**.

> **From now on** you no longer need the wBox phone application by Blebox.eu

##WebUI

**Each Blebox module directly has a Web interface** in order to configure the module's settings, to access them you just need to retrieve **the IP address of the module** presented in the **wBox* Smartphone app *. You will have access *to all the data and more* and you will be able to modify any parameters of the module. Awesome !

![direct access to wifi settings without application of Blebox Doorbox v2 modules]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/acces-webui-blebox-doorbox-v2-online.webp{{ cachebuster }}){: width="940" height="517" class="lazyload"}

## Configuration in the Tedee Application

Now let's integrate the Blebox module {{ page.ref}} into the Tedee smartphone application. Nothing could be simpler, go to settings > integration > Blebox, authorize Tedee to have access to Blebox, *and that's it!*

{% picture posts/{{ page.guid }}/integration-blebox-doorbox-v2-tedee-application.png --alt integration of the Blebox doorbox v2 module into the Tedee universe --img width="940" height="509" %}

Now on the main page of the application you will have the Blebox module(s) installed.

{% picture posts/{{ page.guid }}/parametrage-blebox-doorbox-v2-tedee-application.png --alt configuration of the Blebox doorbox v2 module in the Tedee universe --img width="940" height="509" %}

> You can control the opening or closing of the doorbox v2 relay from the application, not bad!

## Integration of Blebox modules in Home Assistant

In HA it's just as simple, click on the link below and in the devices you should see the Blebox module appear.

{% include homeassistantlink.html integrations="" %}

{% picture posts/{{ page.guid }}/configure-blebox-home-assistant.png --alt automatic lift and configuration of the Blebox doorbox v2 module in the Home assistant universe --img width="327" height="206" %}

All that remains is to click on configure and the {{ page.ref }} can be ordered via Home Assistant ''Royal,,

{% picture posts/{{ page.guid }}/rendu-blebox-doorbox-home-assistant.png --alt rendering of the Blebox doorbox v2 module in the Home assistant universe --img width="940" height="458" %}

The interface is correctly recognized in Home Assistant if the commands do not match with Home Assistant does not hesitate to control the Blebox settings {{ page.ref }} by directly accessing the WebUI

{% picture posts/{{ page.guid }}/controle-du-blebox-doorbox-v2-dans-home-assitant.png --alt opening control of the Blebox doorbox v2 module in the Home assistant universe --img width="592" height="568" %}



**Product advantages:**{: .blue}
- Quality module
- control by **Webui**
- controllable in the **Tedee** universe
- integrated into Home Assistant
- configurable as desired (NO/NC)

**The - of the product:**{: .red}
- the **price (€69)**
- lack of power
- powered by **12-24v**

{% include product-embed.html guid="2197" %}

## Conclusion

The Blebox {{ page.ref }} is a complementary module to the world of connected locks and will allow you to not only control the front door, but also to control a garage door or gate. **Integratable as desired into the Tedee application and Home Assistant**, making this module complete. Negative point, **the price, it is sold for €69,** it is expensive for a micro module of this type, if you use Home Assistant you can easily move towards a [Multifunction Nodon at €49]({% link _products/{{ page.locale | slice: 0,2 }}/2023-02-14-nodon-micromodule-multifonctions-zigbee.md %}) or other.



