---
guid: 83
title: "Testing Sonoff's first Matter miniR4M module"
description: "As a preview I will test the first Matter module from Sonoff the miniR4M and an integration into Home Assistant"
ref: "miniR4M"
layout: post
authors: Nico
date: 2023-09-27 18:05
last_modified_at: 
categories: [Tests, Matter]
tags: []
image: 'sonoff-minir4m-matter-minicontrol-test-haade-en.png'
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
rating:  
sourcelink:
  - https://itead.cc/product/sonoff-mini-extreme-wi-fi-smart-switch-matter-enabled/ref/122/
---

That's it, Sonoff released its first mini Matter module on {{ page.ref }}, thanks to [itead](https://itead.cc/product/sonoff-mini-extreme-wi-fi-smart- switch-matter-enabled/ref/122/){: target="_blank"} who provided me with this module I will be able to **test the integration into Home-Assistant** and give feedback on this module sold to **less than €12**.

{% include product-embed.html image="https://i0.wp.com/itead.cc/wp-content/uploads/2023/04/MINIR4-matter-1000px_01.jpg?fit=1000%2C1257&ssl=1" title="Sonoff Matter miniR4M" brand="Sonoff" description="New Sonoff mini switch module the miniM" iteadlink="sonoff-mini-extreme-wi-fi-smart-switch-matter-enabled" %}

## Unboxing

{% picture posts/{{ page.guid }}/deballage-sonoff-minir4m-interrupteur-matter-mini-extreme.png --alt unboxing the new Sonoff matter mini switch module {{ page.ref }} --img width="940" height="529" %}

To begin with, the packaging is almost identical to that of the [zbminil2]({% post_url /en/2023-03-06-test-sonoff-zbminil2-extreme-zigbee-end-device %}) and this is not surprising because these two modules are very similar in shape. **The box is blue like the brand's wifi modules and yes if you don't know it yet Matter works on the home wifi mesh or by thread but this is not the case.**

**Just look at the screenshot below to see the volumes used at Sonoff for the mini range.** The advantage is of course the integration in the junction boxes located behind the switch, you will have no trouble finding a place without having to force it.

{% picture posts/{{ page.guid }}/comparatif-interrupteur-mini-extreme-sonoff-zbminil2-minir4m.png --alt comparative photo sonoff zbminil2 and {{ page.ref }} size an undeniable asset --img width="940" height="529" %}

## Sonoff image comparison {{ page.ref }} and ZBMiniL2

We feel that the manufacturing platform of the {{ page.ref }} and the ZBminiL2 and very similar, just look at the image capture below.

{% picture posts/{{ page.guid }}/comparatif-zbminil2-minir4m.png --alt comparison of the new sonoff mini matter switch {{ page.ref }} with the sonoff zbminil2 --img width="940" height="529" %}

## A module with undeniable options

{% picture posts/{{ page.guid }}/branchement-sonoff-matter-miniR4M.png --alt connection of the new sonoff mini matter switch {{ page.ref }} --img width="940" height="470" %}

the sonoff {{ page.ref }} has quite a few important options
- you can connect it to a panel of different switches (see the image below)
- ewelink, google, alexa and apple compatible
- **{{ page.ref }} has a detached relay** basically you can turn a connected bulb on and off while leaving it on so you can control it all the time
- possibility of connecting a simple switch or two-way switch.

{% picture posts/{{ page.guid }}/interrupteur-compatible-sonoff-minir4m-matter.png --alt switch compatible with the new sonoff mini matter switch {{ page.ref }} --img width="940" height="218" %}

## Integration into HA of {{ page.ref }} in image.

*As you can see in the animated gif below I had no difficulty integrating it into Home-Assistant.* Before you can add the device to Home-Assistant you will first have to install Matter in the supervisor . To do this you can follow the installation steps [by going directly here](installation-test-neo-wifi-matter-NAS-WR15W6-in-home-assistant#1-installation-server-matter), it will give you Just click on the links for installation and Matter integration. *I wrote the installation process in a previous article dedicated to the Neo NAS-WR15W6 module*.
**Then follow the steps of the process and when prompted scan the qrcode located on the back of the module.**

![Integration of the Sonoff miniR4M module into home-assistant]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/integration-sonoff-minir4m-matter-homeassistant.webp{{ cachebuster }}){: width="320" height="693" class="lazyload"}

Once integrated, you can go to the module panel and test the operation of the module. Only one command available to turn the module on and off, in my opinion it's a little thin **but hey we are at the premise of the protocol, the next modules should gradually be expanded with new functions.**

{% picture posts/{{ page.guid }}/commande-matter-home-assistant-minir4m-sonoff-matter.png --alt integration of the new sonoff mini matter switch {{ page.ref }} in home assistant --img width="940" height="821" %}

## Specifications of {{ page.ref }}

As said previously, the module is almost the same size as the[zbminil2]({% post_url /en/2023-03-06-test-sonoff-zbminil2-extreme-zigbee-end-device %})

**MINIR4M is SONOFF's first Matter device**, it can recognize and work with other brands of Matter end devices, and integrate with Matter compatible platforms, such as Apple Home, Google Home, Alexa, etc. Controlling all smart devices through a single app is no longer a dream.

**Matter certified devices** support local communication in the home network, even if the network is disconnected, MINIR4M still works normally, with faster responsiveness and better reliability. Adding MINIR4M to Matter-enabled apps is simple. Simply scan the Matter QR code that comes with your Matter-enabled app and MINIR4M is easily set up by following the steps in the app.

**MINIR4M is equipped with ESP32 chip**, its small size fits various mounting boxes, including **type 86/EU**, type 120 mounting box. MINIR4M supports controls external switches and easily connects to momentary switch, door exit switch, SPDT switch, interlock switch and even dry contact sensors.

**MINIR4M features a "detached relay" mode**, which means that the states of the external switches and the relay are separated, so actuation of the external switch button will not affect the state of the relay. For example, if you open the "detach relay" mode, when you turn off the light, the connected bulb will not be offline and you can still use the app to control the smart lights.

{% picture posts/{{ page.guid }}/Dimensions-spécifications-sonoff-miniR4M-matter.png --alt specifications and dimensions of the new sonoff mini matter switch {{ page.ref }} --img width="940" height="600" %}

## Particularities of {{ page.ref }}

{% picture posts/{{ page.guid }}/MINIR4-matter-sonoff-particularite-en.png --alt particularities of the new sonoff mini matter switch {{ page.ref }} --img width="940" height="548" %}


## Documents {{ page.ref }}

{% include doclink.html pdf="guide-rapide-sonoff-minir4m-matter.pdf" title="quick guide sonoff miniR4M matter" %}
{% include doclink.html pdf="manuel-utilisateur-mini-r4-matter-sonoff.pdf" title="sonoff miniR4M Matter user manual" %}
{% include doclink.html pdf="specification-produit-MINIR4M-V1.0.pdf" title="Sonoff matter miniR4M product specification document" %}

## **product advantages** {{ page.ref }}
{: .blue}
- manufacturing quality
- the price
- matter compatible (esp32)
- works with all types of switches
- A detached relay


## **the - of the product** {{ page.ref }}
{: .red}
- Requires neutral to operate
- Requires neutral to the switch and neutral from the switch to the light

{% include product-embed.html image="https://i0.wp.com/itead.cc/wp-content/uploads/2023/04/MINIR4-matter-1000px_01.jpg?fit=1000%2C1257&ssl=1" title="Sonoff Matter miniR4M" brand="Sonoff" description="New Sonoff mini switch module the miniM" iteadlink="sonoff-mini-extreme-wi-fi-smart-switch-matter-enabled" %}

## Conclusion

Sonoff **makes a successful entry** into the world of the new Matter protocol. The {{ page.ref }} has many undeniable advantages and the integration into Home Assistant was done without difficulty, a good point according to Haade. If you want to equip yourself with Matter modules then the **Sonoff {{ page.ref }} is made for you** 👌.

