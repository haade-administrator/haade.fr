---
guid: 154
title: "Tado° X Smart Thermostatic Faucet Review"
description: "Close to perfection this Tado X faucet and I can't wait to present it to you, in this article I will just present the Tado X thermostatic faucet compatible with Thread"
ref: "Tado° X"
layout: post
authors: [Nico]
date: 2025-02-19 18:43
last_modified_at: 
categories: [Tests, Home-Assistant]
tags: []
video: 
image: 'thermostatic-tap-x-by-tado-one-of-the-best-on-the-market.png'
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
  - https://shop.tado.com/fr-row/products/smart-radiator-thermostat-x?_gl=1*1h80oi9*_gcl_au*MTE5NDk4MTU0MC4xNzM5MDI3OTY4*FPAU*MTE5NDk4MTU0MC4xNzM5MDI3OTY4*_ga*NzQyNDMwNTUuMTczODg1NjA3Nw..*_ga_4RDJNWE5FD*MTczOTgwODExNS42LjEuMTczOTgwOTQ5My4wLjAuMjM2OTQxOTQy*_fplc*T3VLaHRtSlJ1N2xrWUFLOSUyRnRFY1JwdG1FVXpJamM0b2lkdzJmeEQ1cmhQVnhXJTJCYmM1VEY0RjRlTzgyOWllMGRGektCbzVOJTJGV2N6Um85VThXeDglMkZHU1BoaTBXTGZHUmVaZ0VSV1A5WlZ2TU8wWWh2bXl0TWVhNmU4NzJhVEElM0QlM0Q.
  - https://amzn.to/4i2glzz
---
**The company Tado° kindly provided me** with the entire Tado° X range. But in this article **I will simply present** the Tado° X thermostatic tap. Talking about the entire Tado° range in one article **does not seem relevant** to me because there is a lot to say!. **In order not to lose anyone** I have decided to present to you first the Tado° X thermostatic tap.

{% picture posts/{{ page.guid }}/robinet-thermostatique-connecte-tado-x.png --alt Tado° X thermostatic faucet probably the best on the market --img width="940" height="529" %}

{%- include alert.html type="info" text="Haade.fr is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means to earn fees by linking to Amazon.com and affiliated sites." %}

{% include product-embed.html image="lot-de-3-robinets-tado-x-thermostatique-matter-thread.png" title="Set of 3 Tado° X thermostatic taps" brand="Tado°" description="Set of 3x Tado° X thermostatic taps, probably the most advanced tap on the market, matter over thread compatible" amazlink="3X45Fsn" %}

## Unboxing the {{ page.ref }}

{% picture posts/{{ page.guid }}/deballage-robinet-thermostatique-tado-x-thread.png --alt Unboxing and presentation of the Tado° X thermostatic faucet --img width="940" height="529" %}

A quick look at the box, the most interesting thing is the inscription **compatible Thread border router**. **Currently few products are compatible with the Thread protocol**, I think that in the future more products will be, **because it is a very interesting protocol.** Why, because it is similar to the Zigbee protocol but it is based on **IP transmission**, **basically Thread combines the best between Zigbee and Wifi.**

For more information on Thread **I recently wrote two articles on the subject**, one for [Thread integration into Home Assistant]({% post_url /en/2025-01-30-prepare-the-thread-matter-network-with-home-assistant-and-integrate-a-module %}) and the other to show the feasibility of [integrating Thread and Zigbee on the same key]({% post_url /en/2025-02-04-multi-protocol-multipan-zigbee-thread-implementation-with-homeassistant %}). 

> I didn't do it by chance at that time because it was to prepare for the discovery of Tado products.

{% picture posts/{{ page.guid }}/presentation-robinet-thermostatique-tado-x-compatible-thread-matter.png --alt Introducing the Tado° X Thermostatic Faucet --img width="940" height="529" %}

Inside the box is a beautiful little thermostatic tap {{ page.ref }} all in roundness, supplied with two documents containing the technical specifications as well as an adapter kit to facilitate the assembly on all European radiators.

As the official documentation is not provided, find it there on our site, no stress.

{% include doclink.html pdf="manuel-utilisation-robinet-thermostatique-tado-x-multi-langue.pdf" title="Installation manual for Tado° X thermostatic tap adapters" %}

> Normally you will **not need to use adapters in France**.

Below you will find the details of the adapters supplied with the Tado° X thermostatic tap

{% picture posts/{{ page.guid }}/adaptateurs-de-montage-du-robinet-thermostatique-connecte-tado-x.png --alt Tado° X Thermostatic Tap Mounting Adapters --img width="940" height="529" %}

So that you don't get lost, I'm attaching detailed instructions for installing the taps on existing radiators or water circuits.

{% include doclink.html pdf="selection-adaptateur-robinet-thermostatique-tado-x.pdf" title="Instructions for adapters for the Tado° X thermostatic tap" %}

**Ultra interesting thing** the {{ page.ref }} does not work with batteries **but with a removable battery** with USB-C charging, for me it's a first and it's a pleasant surprise, no need to change the batteries, a little disassembly, a recharge and it's ready for a long time. And yes, the cherry on the cake **this battery** does the job and **lasts a long time** once fully recharged.

{% picture posts/{{ page.guid }}/batterie-du-robinet-thermostatique-connecte-tado-x.png --alt Introducing the ultra-convenient USB-C charging battery of the Tado° X Thermostatic Tap --img width="940" height="529" %}

**To finish on the unpacking**, **keep the label provided with the faucet**{: .red} the one that includes the **Matter QRCode** or the authentication code that will allow you to integrate the {{ page.ref }} into the Tado application or into any other Matter compatible applications such as Google Home among others.

{% include product-embed.html image="robinet-tado-x-thermostatique-matter-thread.png" title="Tado°" brand="Tado°" description="Tado° X thermostatic faucet, probably the most advanced faucet on the market, matter over thread compatible" amazlink="4i2glzz" %}

## Thermostatic tap interface {{ page.ref }}

I must say that **the interface is great**, the rendering too, the digital display is not repeated on the entire dial but on a square in the center of the disk, I have schematized on the image below, **but the product is well finished at first glance you will not see the real surface of the LCD screen, because of the Matte screen.**

{% picture posts/{{ page.guid }}/dimension-du-cadran-numerique-du-robinet-thermostatique-connecte-tado-x.png --alt Dimensions of the digital dial of the Tado° X thermostatic faucet --img width="940" height="529" %}

You will be able to **see a key** that allows you to access the two settings of the tap {{ page.ref }}. **Hold it for 3 seconds** and you will be able to **change the language** and **the orientation of the display** using the **wheel**.

{% picture posts/{{ page.guid }}/parametrage-du-robinet-thermostatique-connecte-tado-x.png --alt Setting the language and orientation of the Tado° X thermostatic faucet --img width="940" height="529" %}


{% include product-embed.html image="lot-de-3-robinets-tado-x-thermostatique-matter-thread.png" title="Set of 3 Tado° X thermostatic taps" brand="Tado°" description="Set of 3x Tado° X thermostatic taps, probably the most advanced tap on the market, matter over thread compatible" amazlink="3X45Fsn" %}

**Below I show the failure** of an assembly in progress, I had to show you but **it rarely happens**, if ever it does it to you **go through a reset see below**, but honestly I only encountered this problem on one of the **taps that was delivered to me reconditioned** the others were new and everything was ok.

The tap will **naturally ask you to assemble it** and then to calibrate it, it is repeated on **image 2**, which asks you to press 3 seconds, then the calibration is done and the indication on the **assembly in progress dial will appear**. To finish you will have a message that will tell you that the manipulation **was successfully completed**.

**Super important point**, the **operation is ultra silent**{: .red} *moreover the quietest* of the thermostatic faucets that *I have been able to test.*

{% picture posts/{{ page.guid }}/erreur-montage-calibrage-robinet-thermostatique-tado-x.png --alt Error Mounting and calibrating the Tado° X thermostatic faucet --img width="940" height="529" %}

### Resetting the {{ page.ref }}

all Tado products are reset, the manipulation to reset the {{ page.ref }} is simple:

1. remove the battery
2. reconnect the battery
3. once the logo is displayed press on the screen while holding down
4. then it asks you to press 3 seconds to reset
5. and the reset in progress indications will be displayed.

{% picture posts/{{ page.guid }}/reinitialiation-usine-thermostat-connecte-tado-x.png --alt Resetting the Tado° X thermostatic faucet --img width="940" height="529" %}

> That's it, the thermostatic valve is reset to factory mode.

{% picture posts/{{ page.guid }}/comparatif-robinet-thermostatique-connecte-sonoff-trvzb-et-tado-x.png --alt Comparison of Sonoff TRVZB and Tado° X thermostatic faucets --img width="940" height="529" %}

## Comparison of the {{ page.ref }} and the Sonoff TRVZB

Here I wanted to compare the {{ page.ref }} with the **sonoff TRVZB**, because for me the **Sonoff is the best Zigbee faucet on the market (quality/price)**.

Well, there's no comparison, the {{ page.ref }} **is:**

- smaller
- the display is clearer
- better manufacturing quality
- it runs on battery power
- adapts better to the installation environment (close to a wall, access to the dial, etc.)
- quieter

> But I also want to say that it **costs 3 times more** than the Sonoff

## Price of the thermostatic faucet {{ page.ref }}

Normally the {{ page.ref }} costs €100 just that, which increases the investment bill, even if its advantages are undeniable it makes the product expensive!

But, there is a but, **Tado regularly offers discounted offers ranging from -40 to -50%** for example at the time I am writing this article you **find it at -42%** on Amazon. I also posted an ad where Veepee was offering it at -50%, at these prices it becomes really interesting.

## Integration of {{ page.ref }}

In the **next article** I will talk about the Tado application and the whole universe and **its settings and especially its many assets.** Which we do not find in other applications except in Home Assistant

**But I took a screenshot** of the integration in Matter which will be the same for all Matter compatible products, so the same integration in Home Assistant, Google Home, Tado, etc....

{% picture posts/{{ page.guid }}/integration-du-robinet-thermostatique-connecte-tado-x-avec-ou-sans-bridge.png --alt Integration of Tado° X thermostatic faucets with or without bridge into the application thanks to thread and Matter --img width="940" height="529" %}

The only peculiarity in the installation process is that at one point the installation reminds you that you have or do not have a Tado connected bridge installed and you will see that you can skip this step to integrate it in a different way than in the Tado universe.

**PS:** **The Tado bridge** uses the Thread/Matter protocol, it will be essential if you do not have other bridges at home (google, box etc... compatible with Matter), otherwise you are free to install it differently.

> **The Starter Kits** will be presented in another separate article.

## Official Documentations {{ page.ref }}

{% include doclink.html pdf="selection-adaptateur-robinet-thermostatique-tado-x.pdf" title="Instructions for adapters for the Tado° X thermostatic tap" %}

{% include doclink.html pdf="manuel-utilisation-robinet-thermostatique-tado-x-multi-langue.pdf" title="Installation manual for Tado° X thermostatic tap adapters" %}

## **product advantages** {{ page.ref }}
{: .blue}

- manufacturing quality
- **Thread** compatible with Matter
- works on removable and rechargeable battery via USB-C
- **Simple** installation and suitable for all situations
- small
- Can work alone **with an Open Source home automation assistant** such as Home Assistant thanks to **Thread**
- **Ultra Silent**
- intuitive

## **product disadvantages** {{ page.ref }}
{: .red}

- The price €99

{% include product-embed.html image="robinet-tado-x-thermostatique-matter-thread.png" title="Tado°" brand="Tado°" description="Tado° X thermostatic faucet, probably the most advanced faucet on the market, matter over thread compatible" amazlink="4i2glzz" %}

## Conclusion

**What more can I say**, it adapts to all situations, it is **small** and works on **battery**, it is compatible with **Thread** so it can work without the rest of the Tado° range, it is beautiful and efficient, ***it is ultra silent*** (the quietest tested so far), **well I understand it is expensive, but if the price does not matter to you then go for it!**

> **In my opinion it is currently the best on the market**

**Why, besides its many advantages:**
- you will see that you can do **temperature self-calibration** with a secondary thermostat
- the **thermostats** send information directly to the **starter kit** **to turn on or not the boiler**
- **the application is very simple** see the next article
- Unlike other brands you will be able to **make between 15 and 50% energy savings** **without going through a box like Home Assistant**
- one of the first products on the market to **be Thread compatible**