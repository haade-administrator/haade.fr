---
guid: 144
title: "Sonoff - Automate your conventional heating"
description: "Transform your NSPanel Pro into a boiler contactor by directly integrating the Sonoff RE5VC micro module and control everything using the Ewelink application"
ref: "RE5V1C"
layout: post
authors: [Nico]
date: 2024-10-24 13:04
last_modified_at: 
categories: [Automation, Haade-lab]
tags: []
video: 
image: 'controle-ton-chauffage-avec-sonoff-nspanel-pro-et-contact-sec-RE5VC-dans-Ewelink.png'
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
  - https://itead.cc/product/sonoff-re5v1c/ref/122/
  - https://ewelink.cc/
  - https://web.ewelink.cc/
  - https://cast.ewelink.cc/
  - https://server-status.ewelink.cc/
  - https://forum.ewelink.cc/
---

In order to best prepare for the [next Live](https://www.youtube.com/live/GP4hubPhlvI){: target="_blank"}, and always **with the aim of deepening our knowledge of the modules in the Sonoff range**, we will try in this article to automate a conventional heating system while remaining in the Sonoff universe and Ewelink.

{% include videoPlayer.html youtubeId="GP4hubPhlvI" %}

If we decided **to head into this universe** it is above all for **home automation novices**, who do not want to embark on an installation *too complex* and automate their heating quite simply in order to make some savings.

> We are going to transform the NSPanel Pro and add the Boiler control function by dry contact, all compatible with Sonoff.

**Warning!** by following this article **you will certainly not make as many energy savings as an installation** based on Home Assistant because the **Ewelink application does not offer such advanced scenario systems.**

{% include product-embed.html image="Sonoff-contact-sec-wifi-ewelink-RE5V1C.png" title="Sonoff Dry Contact Wifi RE5V1C" brand="Sonoff" description="Micro wifi dry contact Sonoff RE5V1C compatible with Ewelink" iteadlink="sonoff-re5v1c" amazlink="3NDSQ2O" %}

**But you can intelligently automate your heating** thanks to the connected thermostat, and the [wifi dry contact {{ page.ref }}](https://itead.cc/product/sonoff-re5v1c/ref/122){: target="_blank"} of the same brand, all visually controlled thanks to the Nspanel Pro.

So yes you will tell me: I mix two protocols (Zigbee and Wifi), but in my case the problem is to stay, I remind you, in the Sonoff universe, in order to simplify things.

The only system that offers this type of installation and which is certainly worth it (well yes I have not tested it yet) is **Tado**, I am not talking to you about **Netatmo because many people are unhappy.**

## Prerequisites

1. a Smartphone with the Ewelink application installed.
2. A Sonoff wifi dry contact module [{{ page.ref }}](https://itead.cc/product/sonoff-re5v1c/ref/122){: target="_blank"}
3. A Sonoff NSPanel Pro (to control everything)
4. Sonoff Zigbee thermostats
5. Optional Sonoff thermostatic faucets
6. a soldering station and patience.
7. Double-sided tape

## System preparation

In this step I will show you **how to integrate a dry contact {{ page.ref }} directly into a Sonoff NSPanel Pro controller** so you can directly control your heating:

- electric (floor or radiator if controlled by central thermostat), otherwise you will have to put a {{ page.ref }} directly behind your radiators
- Your gas or oil boiler, by installing thermostatic valves on each radiator

> And yes you read correctly we will make a **Sonoff NSPanel Pro compatible with dry contact**, without touching the firmware, the best.

{% include product-embed.html image="https://i0.wp.com/itead.cc/wp-content/uploads/2022/07/NSPanel-P_preorder_dim_gray.jpg?fit=1000%2C1000&ssl=1" title="Sonoff Nspanel Pro Controller" brand="Sonoff" description="Sonoff Nspanel Pro controller with zigbee 3.0 and built-in wifi" affiliate="_DCgKVON" domlink="objets-connectes/6625-sonoff-interrupteur-mural-noir-zigbee-30-nspanel-pro.html" iteadlink="sonoff-nspanel-pro-smart-home-control-panel" %}

### Presentation of the Sonoff {{ page.ref }}

The Sonoff {{ page.ref }} is a micromodule of **exceptionally small size** and which has the advantage of being **compatible Ewelink** therefore compatible with the Sonoff environment, it is a good thing it is a Sonoff module. To function it must be **powered in 5V** and it allows to operate a bulb, motor or garage door. Its dimensions are ultra small **less than 3.5cm long by 2.5cm wide and a depth of 1.9mm. This will allow us to integrate it directly into the back of the Sonoff NSPanel Pro**.

{% picture posts/{{ page.guid }}/presentation-sonoff-RE5V1C-contact-sec-wifi-compatible-ewelink.png --alt Presentation of the Sonoff RE5V1C wifi dry contact module compatible with Ewelink --img width="940" height="529" %}

I have taken the **connection diagrams available** from the Itead site, so you can see the adaptability in a home automation ecosystem.

{% picture posts/{{ page.guid }}/divers-branchements-sonoff-RE5V1C-contact-sec-wifi-compatible-ewelink.png --alt Miscellaneous Connections of the Sonoff RE5V1C dry contact wifi module compatible with Ewelink --img width="940" height="529" %}

First step we look at **how to integrate it into the NSPanel pro power supply box**, start by disassembling the module, and you will be able to see that the {{ page.ref }} module finds its place on the circuit.

{% picture posts/{{ page.guid }}/premiere-etape-integration-sonoff-RE5V1C-dans-NSPanel-Pro.png --alt first step of integrating the Sonoff RE5V1C dry contact wifi module compatible with Ewelink with the NSPanel Pro --img width="940" height="529" %}

As a reminder, we **must power the Sonoff {{ page.ref }} in 5V** and that's good because the NSPanel Pro86/120 offers this power supply on the circuit represented by the two arrows at the top. In order to pass the power wires of the {{ page.ref }} I drilled two holes in the printed circuit of the NSPanel pro at the same place where free slots are provided for additional terminals of the NSPanel pro.

{% picture posts/{{ page.guid }}/modification-circuit-energy-nspnelpro-branchement-RE5V1C.png --alt Modification of the electrical circuit of the NSPanel pro in order to integrate the RE5V1C dry contact --img width="940" height="529" %}

Next step **a little more delicate, move on to the soldering** of wires on the {{ page.ref }} 5V power supply side I soldered compatible wires in 0.5mm, on the other side I soldered 0.75mm wires for the phase and out, so if we want we can connect a 230v light or other motors. As a reminder in our case the two output wires are there to power a gas boiler in dry contact.
It will also be necessary to provide double-sided tape to stick the {{ page.ref }} module on the NSPanel Pro, and drill two holes on the back cover of the power supply in order to access the reset button and the operating LED of the {{ page.ref }}.

{% picture posts/{{ page.guid }}/soudure-et-installation-du-sonoff-RE5V1C-dans-NSPanel-Pro.png --alt Soldering and installation of the Sonoff RE5V1C dry contact wifi module compatible with Ewelink with the NSPanel Pro --img width="940" height="529" %}

The part that I think **is the trickiest** is the 5v/gnd solder of the {{ page.ref }} to the NSPanel Pro PCB. It's relatively small and located close to other components (a blower soldering iron will make soldering easier.), but it's not insurmountable.

{% picture posts/{{ page.guid }}/soudure-face-avant-connection-5v-gnd-re5v1c-sur-sonoff-nspanel-pro.png --alt GND and 5V soldering of the Sonoff RE5V1C dry contact wifi module compatible with Ewelink with the NSPanel Pro on the front panel --img width="940" height="529" %}

Final step, we reassemble the assembly which did not cause me any problems, the space of the assembly is just enough. I end up powering the NSPanel Pro, I launch the Ewelink application and I activate the pairing of the system by clicking 2-3 seconds on the reset of the {{ page.ref }}, the green LED starts to flash the wifi initialization process is started. The red light indicates the ON activation of the {{ page.ref }}.

{% picture posts/{{ page.guid }}/fonctionnement-wifi-on-off-fixe-vert-rouge-RE5V1C-dans-Sonoff-NSPanel-pro.png --alt On/off operation of the Sonoff RE5V1C dry contact wifi module compatible with Ewelink in the NSPanel Pro on the front panel --img width="940" height="529" %}

Below are **some process captures** of the integration step of the Sonoff module {{ page.ref }}, in the Ewelink environment.

{% picture posts/{{ page.guid }}/integration-Sonoff-RE5V1C-dans-ewelink.png --alt Integrating Sonoff RE5V1C dry contact wifi module with Ewelink into NSPanel Pro --img width="940" height="529" %}

That's it, the **NSPanel Pro 86/120 module is ready to be installed to replace your old centralized boiler thermostat** (where the dry contact wires are). For €5 I have just added the dry contact function to the Sonoff universe by making a perfect integration. The NSPanel Pro controller will serve as your heating control unit, as a Home Assistant box can do.

## Sonoff Technical Feature {{ page.ref }}

- Low Power Consumption – DC 5V low voltage input
- 2 Working Modes: Self-locking Mode and Stepless Mode
- LAN Control – **Turn on/off the device even when Wi-Fi has no internet access**
- APP Support – Free iOS and Android mobile app eWeLink
- **Remote ON/OFF** – Turn electrical appliances on/off from anywhere
- Sync Status – Real-time device status provided to the APP
- Timing – Set scheduled/countdown timers to turn on/off at a specified time
- Shared Control – Control your smart home with your family
- Scene – Turn a group of devices on/off with one tap
- Smart Scene – Triggered/off by temperature, buzzing or other environmental conditions from the sensor
- Compatibility – **Works perfectly with Amazon Alexa, Google Assistant, IFTTT, Google Nest**

|Brand|SONOFF|
|Product Type|5V Wi-Fi Inching/Selflock Relay Module|
|Power Supply|5V DC|
|Output Contact Type|Dry Contact|
|Max Current|10A|
|Humidity|5%-90%RH, Non-condensing|
|Operating Temperature|0ºC-40ºC(32°F-104°F)|
|Nano Size|34.5x25x19mm|
|Works with|Amazon Alexa, Google Assistant, Samsung Smarthings|

**Sonoff Technical Manual {{ page.ref }}**

{% include doclink.html pdf="RE5V1C-Application-Guide.pdf" title="Technical notice of the sonoff RE5V1C" %}

{% include product-embed.html image="sonoff-nspanel-pro-120-PW-en-vente.png" title="NSPanel Pro 120 PW" brand="Sonoff" description="Discover the brand new Sonoff NSPanel Pro 120 compatible with wifi and zigbee, a product to have!" iteadlink="sonoff-nspanel-pro-smart-home-control-panel-120-type" %}


## Ewelink a Complete environment

The Ewelink application has a [complete dedicated page of the environment](https://ewelink.cc/){: target="_blank"}, do not hesitate to visit it to realize the potential of this application.
The Ewelink environment offers a multitude of services but be careful to have access to them you will have to free yourself from an annual "Advanced Plan" subscription of €9.99.

> one of the major strengths of Ewelink is the Lan option which will allow you to control your entire installation locally in the event of internet outages. 👏

**Disadvantage of the application:** The scenario system remains basic, you will have to roll up your sleeves to make the whole thing work coherently.

### Ewelink web app

[Ewelink Wep app](https://web.ewelink.cc/){: target="_blank"} is ultra practical, you can view your installation but you will not be able to control it without the Advanced plan.

{% picture posts/{{ page.guid }}/ewelink-web-app-interface.png --alt GND and 5V soldering of the Sonoff RE5V1C module dry wifi contact compatible Ewelink with the NSPanel Pro on the front face --img width="940" height="469" %}

### Ewelink cast

[Ewelink Cast](https://cast.ewelink.cc/){: target="_blank"} is a display board where you can

### Ewelink Android auto / Apple Car play

Ewelink knows how to adapt and offers ever more varied services always on condition of subscribing to the *advanced plan*.

[Ewelink Android auto link](https://ewelink.cc/accessible/ewelink-on-android-auto/){: target="_blank"} 

[Ewelink Apple Car play link](https://ewelink.cc/ewelink-carplay/){: target="_blank"}

### Ewelink Forum

Even a [forum is available](https://forum.ewelink.cc/){: target="_blank"} at this address, don't hesitate to consult.

## Conclusion

Here is a simple way to transform the Sonoff NSPanel Pro 86/120 into a boiler driver without changing the firmware and this additional function will not cost more than €10.
With the scenarios you will be able to adapt this system in order to correctly control your heating, a real plus.



