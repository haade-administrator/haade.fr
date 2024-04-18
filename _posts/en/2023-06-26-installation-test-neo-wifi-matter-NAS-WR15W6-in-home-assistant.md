---
guid: 73
title: "Test and installation taken neo NAS-WR15W6 Matter in Home-assistant"
description: "A first in this article we will test and integrate the Neo NAS-WR15W6 Matter protocol socket in home assistant, google Home and Tuya"
ref: "NAS-WR15W6"
layout: post
authors: Nico
date: 2023-06-23 14:10
last_modified_at: 2023-06-26 11:00
categories: [News, Tests, Matter, Home-Assistant]
tags: []
image: 'test-installation-matter-home-assistant-neo-smart-power-plug-NAS-WR15W6.png'
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
rating: 4.2
sourcelink:
  - https://www.szneo.com/en/products/show.php?id=275
  - https://www.home-assistant.io/integrations/matter/
  - https://csa-iot.org/all-solutions/matter/
  - https://www.frandroid.com/produits-android/maison-connectee/1597775_matter-fonctionnement-objets-connectes-compatibles-tout-savoir-sur-la-nouvelle-norme-universelle-des-objets-connectes
---

**This is a first for the Haade site**, today I will integrate and test the Neo smart power plug {{ page.ref}} Matter controller in Home Assistant. *Thanks to the Domadoo team for this loan*.

{% include product-embed.html guid="2166" %}

So far **I haven't talked much** about the new Matter controller. Currently in version 1.0 this controller is in its infancy, if you don't know, it was created by large companies without mentioning some GAFAM, to facilitate the integration of compatible modules into our home automation and network systems.

> Matter will thus make it possible to link the different existing ecosystems, and thus interconnect the different devices that we have without distinction of brand. One could therefore imagine controlling a HomePod mini (Thread compatible) from the Google Home application for example. A use difficult to envisage today with the compartmentalization of the different ecosystems. In addition, it does not necessarily require going through the cloud, which in theory makes it possible to speed up the transfer of information.
<cite>Frandroid.com</cite>

Well you already know it but home assistant, Jeedom, Gladys, Openhab, domoticz, ** already link the various ecosystems ** between them, but not everyone uses a home automation assistant. Matter is there to link above all the modules operating on the ip/wifi/thread/ protocols and which would each use a different master controller. Thus there would be no need for various controllers. If you use only one technology like **Zigbee or Z-wave this controller will not bring you much more**. I still want to say that the thread protocol is very promising because each module can be used as a master/slave controller automatically.

On the other hand, Zigbee develops the **Zigbee Direct** protocol, a new feature of Zigbee that simplifies the integration and control of Zigbee devices directly via Bluetooth Low Energy devices.

{% picture posts/{{ page.guid }}/thread-home-network-scaled.png --alt matter protocol working diagram --img width="940" height="671" %}

Let's go to the step of installing the Neo {{ page.ref }} smart power plug in home assistant.

## Prerequisites
- 1 Neo smart plug module compatible with Matter
- Home assistant system operation version (HAOS)

## Let's talk about the Neo plug {{ page.ref }}

{% include product-embed.html guid="2166" %}

Relatively similar to the brand's other sockets, as a reminder Neo assigns a color per protocol, red for zigbee, blue for z-wave and finally gray for matter.

As you can see below, the technology evolves and at Neo the size of the modules evolves too. Apparently the new Matter standard does not allow small modules to be made, at least at Neo.

{% picture posts/{{ page.guid }}/evolution-prise-neo-zigbee-zwave-matter.png --alt evolution of neo zigbee, z-wave and finally Matter sockets --img width="940" height="529" %}

The module is delivered in a box containing a plug and instructions. you will find a button on the side to manually turn the plug on/off, this button also allows you to perform a **reset by pressing and holding it down for 5 seconds**. The light will start flashing to resume an integration.

{% picture posts/{{ page.guid }}/prise-neo-smart-power-plug-matter-nas-wr15w6-detail.png --alt plug matter neo {{ page.ref }} detail packaging and code --img width="940" height="529" %}

### QRcode or manual code

In order to be able to integrate a module in Matter **it must be provided with an integration qrcode and an 11-digit code** or at least one of the two otherwise it will be impossible to use the module.

{% picture posts/{{ page.guid }}/matter-module-neo-qrcode-code-manuel-integration-obligatoire.png --alt integration code taken matter neo {{ page.ref }} --img width="940" height="529" %}

### Technical feature

|Rated power|AC 85~250V 50/60Hz|
|Rated current|16 A|
|Maximum load capacity|3680W|
|Standby power consumption|0.5W|
|Protocol|IEEE 802.11b/g/n|
|Wi-Fi distance|45 m (ideal conditions)|
|Hardware|PC/ABS (V0)|
|Product Size (D*W*H)|50x 50x 85mm|

### Compatibility

- Amazon Echo
-Google Home
-Matter
-Tuya

### **the + of the product**
{: .blue}
- manufacturing quality
- Matter-certified
- the price less than 20€

### **the - of the product**
{: .red}
- Wi-Fi 802.11 bgn compatible
- the size
- a single on/off function
- no energy feedback

## Controlling the neo {{ page.ref }} in Home Assistant

**To control your first matter module in Home Assistant**, there are two steps to perform beforehand.
The 1st is to install and activate a Matter server in Home Assistant OS using add-ons.

### 1-Installation Server Matter

Clicking on the icon below installs and activates the module

{% include homeassistantlink.html supervisor_addon="core_matter_server" %}

Then you will have to install the Matter integration in order to be able to manage the various Matter modules

### 2-Integration Matter

Click on the icon below and then click on ok to configure Matter (beta) nothing could be simpler.

{% include homeassistantlink.html integration="matter" %}

Once these two integrations are done, all you have to do is click on **add a Matter device from your phone**
{% include homeassistantlink.html add_matter_device="" %}
**and now connect the module to the mains**{: .red}

### Video Neo module installation step {{ page.ref }}

**As a video is worth ten words**, see the image of the Neo {{ page.ref }} module integration below.

![Integration of neo matter socket in home assistant]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/video-integration-switch-neo-dans-home-assistant-avec-matter.webp{{ cachebuster }}){: width="300" height="649" class="lazy"}{: target="_blank"}

And now you can finally use the neo module {{ page.ref }} in home assistant, and you can see below that the control of this module is limited to the on/off switch, a bit light in my opinion .

{% picture posts/{{ page.guid }}/controle-prise-neo-matter-wr15w6-home-assistant.png --alt matter neo plug control {{ page.ref }} in home assistant --img width="940" height="495" %}

### Matter far from perfect

First of all, on the Matter server side of the add-on, the add-on reports a certain number of errors in the log despite the control of the socket in home assistant, subsequent updates should correct these errors.

{% picture posts/{{ page.guid }}/error-server-matter-home-assistant.png --alt socket matter neo {{ page.ref }} log error matter server home assistant --img width="940" height="639" %}

Then the integration **was not done the first time**, I encountered problems on the wifi network side, so it does not come directly from Matter but from the wifi protocol used **by the 802.11 b/g module /n**, which can be finicky.

Finally, despite integration into Home assistant, when you unplug the plug and plug it back in, the time it takes for information to be uploaded to ha can take time and the launch of the application on the phone to configure the module appears while that should no longer be the case!

## Controlling neo {{ page.ref }} in Google Home

The integration with the application in Google Home was done without any problems, however if you do not have a google home speaker, nest mini, nest audio or a nest Hub or nest wifi pro, you will not be able to control the neo module { { page.ref }}.

{% picture posts/{{ page.guid }}/integration-matter-application-google-home.png --alt matter neo plug control {{ page.ref }} in google home --img width="940" height="509" %}

## Controlling the neo {{ page.ref }} in Tuya App

In Tuya App the integration does not even take place until the end if you do not use a Tuya Hub, normal you will tell me.

{% picture posts/{{ page.guid }}/integration-matter-application-tuya-app.png --alt matter neo plug control {{ page.ref }} in tuya app --img width="940" height="509" %}

{% include product-embed.html guid="2166" %}

## Conclusion

The Neo {{ page.ref }} module **does the job and works under Matter**, however the functions are very limited and that's a shame. In addition, the size of the module is *larger than those under Zigbee / z-wave.* Finally, Matter technology is not yet developed and it will stand out especially with ordinary users who do not use home automation software to control all of its modules.

