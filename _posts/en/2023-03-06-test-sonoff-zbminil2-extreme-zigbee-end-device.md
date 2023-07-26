---
guid: 51
title: "Sonoff ZBMINI-L2 Extreme Switch Test"
description: "Test of the new zigbee switch from Sonoff the ZBMINI-L2 extreme without neutral, is it so small? What is it worth?"
layout: post
author: Nico
date: 2023-03-08 15:05
last_modified_at: 
categories: [Zigbee, Tests]
tags: []
image: 'test-sonoff-zbmini-l2-extreme-end-device.png'
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
addViews: 73
comments: true
rating: 4.6
sourcelink:
  - https://itead.cc/product/sonoff-zbminil2-extreme-zigbee-smart-switch-no-neutral-required/ref/122/
---

This is a new module that is worth looking into. **Sonoff** communicates a lot about the size of the **Zbmini L2 Extreme** which is, *we can say it very small*, ridiculous compared to the competition. But does this module fit easily into standard junction boxes? Is it compatible with the standard switches on the market, and finally can it be integrated into the home automation boxes on the market, just as many questions or I will try to answer them.

First of all I would like to thank [Itead](https://itead.cc/product/sonoff-zbminil2-extreme-zigbee-smart-switch-no-neutral-required/ref/122/){: target="_blank" } for providing me with this module quickly, as well as others that allow me to write this type of article.

{% include product-embed.html image="https://i0.wp.com/itead.cc/wp-content/uploads/2022/12/ZBMINIL2-1600px-5.jpg?fit=1600%2C1600&ssl=1" title="ZBMINIL2 Extrême" brand="Sonoff" description="Smallest sonoff zbmini l2 extreme switch module on the market" iteadlink="sonoff-zbminil2-extreme-zigbee-smart-switch-no-neutral-required" domlink="peripheriques/6619-sonoff-commutateur-intelligent-sans-neutre-zigbee-30-zbminil2.html" affiliate="_DFMzILF" %}

# Unboxing Sonoff ZBMINI L2 Extreme

Sonoff continues to produce these intense orange packaging, once the opening is done, the ZBmini extreme module is integrated into a relatively thick foam, which limits breakage during various transports 🤪. The module is provided with a summary notice that you can also download a little lower as well as the complete notice.

{% picture posts/{{ page.guid }}/zbmini-l2-extreme-deballage.png --alt unboxing the Sonoff Zbmini L2 Extreme module --img width="940" height="529" %}

# Zbmini L2 Extreme Sizes

Here is a module with extraordinary dimensions, probably the smallest on the market for this type of operation. The width of less than 40mm and a height of 32mm will outweigh the competition, **on the other hand the thickness** of the 18.4mm module could be reviewed and why not reduced.

{% picture posts/{{ page.guid }}/zbmini-l2-extreme-size-hand.png --alt size of the new Sonoff Zbmini L2 Extreme module --img width="940" height="529" %}

> This is why I ask myself the question of integration into a standard junction box at depths of 4cm?


# Competition dimensions

On hand I had a Z-wave qubino and a Chinese KR2303 module reputed to be one of the smallest on the market, we can see that the length/width dimension is largely favorable to the Sonoff module, for the thickness qubino makes better.

> On the other hand, I have more difficulty integrating the qubino module than the extreme Sonoff Zbmini L2 module.

{% picture posts/{{ page.guid }}/zbmini-l2-extreme-comparatif-taille.png --alt Sonoff Zbmini L2 Extreme size comparison --img width="940" height="529" %}


# Zbmini L2 Extreme junction box integration

{%- include alert.html type="warning" text="You will have to work in the vicinity of a voltage of 220V which is dangerous if you come into contact with an electrical conductor. Be careful of your manipulations, if in doubt cut off the power supply." %}

{% picture posts/{{ page.guid }}/zbmini-l2-extreme-end-device-encastrement.png --alt Sonoff Zbmini L2 Extreme junction box integration --img width="940" height="529" %}

As I announced above, for the good of the article, I am testing the integration in a junction box with a depth of 40mm. This is a simple two-position switch, the first step is to include the module in its zigbee mesh after connecting the phases I connect the current the green led flashes, my Zigbee2mqtt network activated in integration, the module is recognized with success.
Then I connect according to the diagram below phase in on the interrupter and L out on S2

{% picture posts/{{ page.guid }}/wiring-instruction-zbmini-L2-extreme.png --alt connection diagram of the ZBmini L2 extreme module  --img width="940" height="820" %}

As mentioned above, the thickness of 18.4mm does not pose any problem for setting up the switch, the fact that the size is minimal gives us the opportunity to position the electric cables above the module, so nothing happens. interposed between the module and the switch.

> I can say that this is the first time that I have managed to integrate such a module without forcing the socket to put it back in place 👌.

# ZBmini L2 Extreme in Zigbee2mqtt

The module is well and truly recognized in Z2M, as you can see, the quantity of option is quite poor, in short the module is controllable for the on/off function.

![Integration of ZBMINI L2 Extreme in zigbee2mqtt Z2m]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/zbmini-l2-extreme-zigbee2mqtt.webp{{ cachebuster }}){: width="940" height="798"}

# Features

|Model|ZBMINIL2|
|Connections|Zigbee 3.0 Without neutral End device|
|Dimensions|39.5 x 32 x 18.4mm|
|Box|PC V0|
|Input|100-240V~56/60Hz 6A Max|
|Output|100-240V~56/60Hz 6A Max|

{% include doclink.html pdf="NOTICE-ZBMINIL2-QUICK-START.pdf" title="Notice Zbmini l2 extreme quick start" %}

{% include doclink.html pdf="NOTICE-ZBMINIL2-MANUEL-COMPLET.pdf" title="ZBMINI L2 Extreme Complete Manual" %}

## The + of the product
{: .blue}
1. **Unquestionably the size** The smallest Zigbee smart switch can be easily installed in the smallest EU type/86 type/120 type mounting box.
2. **Support Switches on the Market** Compatible with all wired switches on the market, whether push button or otherwise, it will work accordingly.
3. **Simple and reliable** As a Zigbee 3.0 switch, ZBMINI Extreme can combine with Zigbee hubs to form a home LAN. No longer worry about no internet, you can freely control devices normally, even if the light is as low as 3W, no anti-flickering module is required.
4. **Integration** to Zigbee2mqtt is hassle-free
5. **The price** the ZBMINI l2 extreme is sold around 13€

## The - of the product
{: .red}
1. End Device module is not a router, can become harmful for the zigbee mesh
2. Plastic a can Cheap*
3. Does not report consumption information

# Video

Unfortunately I don't have the 3 Sonoff modules at hand but I found a video that compares the current sizes

{% include videoPlayer.html youtube="jYsCcGI1_DI" %}

I note the arrival on the market of more and more switch modules called "enddevice" probably linked to the integration of the new EFR32MG22 chips from silabs. It has the advantage of being very practical because in most homes in France the switch is not connected to the neutral and is often absent. However, the fact of finding more and more enddevice modules increases the workload of the coordinator and weakens the solidity of the mesh. Zigbee2mqqt [Offers Z-stack update](https://github.com/Koenkk/Z-Stack-firmware/blob/master/coordinator/Z-Stack_3.x.0/CHANGELOG.md){:target ="_blank" } cc2652 TI chips which **now accept more than 100 end devices modules**. What easily accept this type of product.

{% include product-embed.html image="https://i0.wp.com/itead.cc/wp-content/uploads/2022/12/ZBMINIL2-1600px-5.jpg?fit=1600%2C1600&ssl=1" title="ZBMINIL2 Extrême" brand="Sonoff" description="Smallest sonoff zbmini l2 extreme switch module on the market" iteadlink="sonoff-zbminil2-extreme-zigbee-smart-switch-no-neutral-required" domlink="peripheriques/6619-sonoff-commutateur-intelligent-sans-neutre-zigbee-30-zbminil2.html" affiliate="_DFMzILF" %}

# Conclusion

With the arrival of silabs EFR32MG22 zigbee microchips, manufacturers can now design smaller modules. This is ideal for integration into old buildings or behind an existing electrical installation. **Sonoff** follows suit and offers this very small micromodule. *It does what we ask of it so don't hesitate to buy it*, you really won't be bothered to integrate it into your 40cm deep junction boxes.