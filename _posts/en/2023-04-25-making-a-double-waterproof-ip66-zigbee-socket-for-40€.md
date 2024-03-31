---
guid: 62
title: "make a double waterproof zigbee socket for 40€"
description: "thanks to a super waterproof box and two zigbee KR2303 micromodules, I'm going to show you how to make a double ip66 socket for outdoors and controllable in your favorite assistant"
layout: post
authors: Nico
date: 2023-04-25 19:45
last_modified_at: 
categories: [Haade-lab, Zigbee, Automation]
tags: []
image: 'make-a-double-outdoor-zigbee-outlet-for-40€.png'
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
addViews: 14
comments: true
rating:  
sourcelink:
  - https://fr.aliexpress.com/item/1005004899030766.html?spm=a2g0o.order_list.order_list_main.10.6bbd5e5bq0b6uN&gatewayAdapt=glo2fra
  - https://fr.aliexpress.com/item/1005002104232877.html?spm=a2g0o.order_list.order_list_main.5.6bbd5e5bq0b6uN&gatewayAdapt=glo2fra
---

The world of zigbee-compatible objects is growing rapidly, but there are still many untapped niches on certain module creations. Today a little simple creation tutorial which consists of creating a controllable double socket module in zigbee for the exterior IP66 in order to withstand the weather safely all this at the price of 40 €!.

## Prerequisites

- a waterproof box with 1 or two sockets
- one or two Zigbee compatible micromodules
- 2.5mm electric wire
- 3 electrical connectors with 3 Wago-type inputs
- patience but not too much 😋

In this tutorial I decided to domotize a double socket with two 16A KR2303 zigbee modules, I chose these modules for their sizes and the compatibility with the connection to an N and L socket available in input and output, possibility of connect a switch, but in this tutorial it will not be the case.

The boxes of the AVOIR brand are of high quality, the thick plastics, the seals perfectly waterproof, the grip is solid but the rendering of the plastics is a little cheap if we compare with what Legrand does.

{% include product-embed.html image="https://ae01.alicdn.com/kf/H9ce046d022434887a9a6d4df15b50d7fy/Avoir-IP66-ext-rieur-tanche-prise-murale-tanche-avec-interrupteur-ue-royaume-uni-norme-g-n.jpg_Q90.jpg_.webp" title="IP66 waterproof case" brand="Avoir" description="Have IP66 Outdoor Waterproof Waterproof Wall Socket With Switch EU UK General Standard Plastic Material Repeat Open Hole Waterproof Outdoor Socket" affiliate="_DdQcPDb" %}

I took some pictures of the box have below, for the price I think it's worth the cost. Only downside is a socket that is not built-in like Legrand can do, it still allows you to install it anywhere.

{% picture posts/{{ page.guid }}/prise-exterieur-ip66-avoir-detail-qualite-produit.png --alt detail quality socket have ip66 --img width="940" height="529" %}

Regarding the micromodules, I went with this type of Chinese manufacturing for their **sizes of 41 x 41 x 20mm**, and also and above all **for the price less than 6€** per unit you can find some others on the market and maybe even better quality but bigger and more expensive. In short the integration **into Z2M does not pose any problem**, on the other hand to integrate them correctly in the case I had to remove the shell, which in itself does not pose any problem since they will be anyway in a waterproof box.

{%- include alert.html type="warning" text="before dismantling the shell remember to pair the modules in your favorite assistant, be careful you will be working under voltage remember to cut the power before"  %}

{% include product-embed.html image="https://ae01.alicdn.com/kf/Sfa0ee5ba746144d99182fc92b45edf28b/Tuya-Mini-interrupteur-connect-Zigbee-wi-fi-16a-2-voies-pour-maison-connect-e-avec-Tuya.jpg_Q90.jpg_.webp" title="Mini smart switch Ewelink" brand="QIASHIP" description="Tuya - Mini Zigbee Smart Switch, Wi-Fi, 16A, 2 Way, for Smart Home with Tuya, Alexa, Alice, Google Home" affiliate="_Dd1nNel" %}

{% picture posts/{{ page.guid }}/micro-module-smart-switch-zigbee-16a-prise-exterieur-etanche.png --alt micromodules special zigbee waterproof socket --img width="940" height="529" %}

## Integration in Z2M and Homeassistant

{% picture posts/{{ page.guid }}/integration-module-ewelink-home-assistant.png --alt micromodules special waterproof socket zigbee integration --img width="940" height="85" %}

As you can see in the photos below, the micro modules are well recognized and configured as an Ewelink ZR03 router. Only downside of these modules, they do not allow to measure the intensity of the current and to make it go up. Too bad but I will do without for this integration unfortunately.
> Also the power supply is poorly recognized in Z2M but it has no importance on the operation.

{% picture posts/{{ page.guid }}/integration-home-assistant-switch-ewelink-kr230-router.png --alt micromodules special waterproof plug zigbee integration recognition --img width="940" height="738" %}

### Expose in Z2M

The Module doesn't expose much:

- the On/Off switch
- mode after power failure
- the quality of the link

{% picture posts/{{ page.guid }}/integration-home-assistant-switch-ewelink-kr230-expose.png --alt special micromodules waterproof zigbee integration exposed --img width="673" height="322" %}

## Let's move on to assembly

I fixed the micromodules using a hot glue gun and in the direction of the photo by putting the copper coil located on the printed circuit at the bottom of the case because otherwise it would be compressed during assembly of the box.

{% picture posts/{{ page.guid }}/integration-modules-zigbee-dans-boitier-ermethique.png --alt positioning of the micromodules in the waterproof box --img width="940" height="529" %}

Then all you have to do is connect the modules to the sockets as in the photo below and connect to the sockets.

{% picture posts/{{ page.guid }}/branchement-des-cables-electriques-plus-terre.png --alt connection of the micromodules in the waterproof box --img width="940" height="529" %}

Connect everything to the current and close the circuit breaker, all you have to do is test.

{% picture posts/{{ page.guid }}/derniere-etape-assemblage.png --alt final assembly and power connection --img width="940" height="529" %}

## Conclusion

So **much for less than 40€** we have made a double IP66 outdoor socket smart and controllable thanks to homeassistant. If you go on a single take it **will only cost 25€ maximum**. The price is **very interesting**, especially since this type of zigbee product remains rare or even non-existent on the current market.
