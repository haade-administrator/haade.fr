---
guid: 77
title: "Comparison and Test of the Nodon Multifunction Module"
description: "test of the Nodon Sin-4-1-20 multifunction micromodule, a veritable Swiss army knife and comparison with the Legrand Netatmo 412170 module in remote control operation in an electrical panel"
ref: "Nodon SIN-4-1-20"
layout: post
author: Nico
date: 2023-07-31 17:43
last_modified_at: 
categories: [Tests, Zigbee]
tags: []
image: 'test-micromodule-multifonction-nodon-zigbee-sin-4-1-20-teleruptor-en.png'
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
  - https://nodon.fr/nodon/module-multifonction-zigbee/
  - https://nodon.fr/support/module-multifonction-zigbee/
  - https://www.domadoo.fr/fr/peripheriques/5688-nodon-module-multifonction-zigbee-3700313925188.html?domid=39
---

A real **Swiss Army knife**, the {{ page.ref }} multifunction micromodule is **capable of controlling almost any device**, gate, garage door, electrical outlet to which you have connected a screen, a boiler or water heater….This Multifunction Module is Zigbee 3.0 certified and works with Zigbee-compatible ecosystems and voice assistants (Amazon Echo, Jeedom, etc). **With a switching capacity of 3680W** and a potential-free output, it is not missing much.

{% include product-embed.html guid="2145" %}
{% include product-embed.html guid="2142" %}

## Presentation of the Terminal Block {{ page.ref }}

As you can see below, the range of labels supplied with the DIN rail modules is complete and above all well done. The documentation of the multifunction micromodule {{ page.ref }} is always well done, **thanks Nodon**. *Hold on how generous I am, you can download them directly via the links below:* 👌

{% include doclink.html pdf="NOTICE-NODON-SIN-4-1-20-UG_FR_EN.pdf" title="Instructions for use of the multifunction micromodule zigbee Nodon SIN-4-1-20" %}

{% include doclink.html pdf="NodOn_Zigbee_MultifunctionRelaySwitch_SIN-4-1-20-Datasheet_FR.pdf" title="Nodon SIN-4-1-20 zigbee multifunction micromodule datasheet" %}

{% picture posts/{{ page.guid }}/contenu-boite-micromodule-multifonction-nodon-zigbee-sin-4-1-20-telerupteur.png --alt contents of the {{ page.ref }} box and the DIN rail box --img width="940" height="529" %}

*I wanted to point out that this test tutorial is not as complete as others* on the site, I allowed myself this discrepancy because you can already find on the site a [test of the Nodon module of the roller shutter SIN- 4-RS-20]({% post_url /en/2023-06-19-test-of-module-zigbee-rolling-shutter-nodon-SIN-4-RS-20 %}), do not hesitate to consult it.


{% picture posts/{{ page.guid }}/Bornes-Micromodule-ZigBee-Nodon-1-sortie-Multifonction-SIN-4-1-20.png --alt {{ page.ref }} multifunction micromodule terminal block diagram --img width="940" height="493" %}

## Installation diagrams

> Here are different installation diagrams that circulate on the official Nodon site as well as on the excellent sales and documentation site [domotique-store.fr](https://www.domotique-store.fr/){: target ="_blank"}

### Gate and Garage door

{% picture posts/{{ page.guid }}/Cablage-Portail-Porte-Garage-Micromodule-ZigBee-Nodon-1-sortie-Multifonction-SIN-4-1-20.png --alt connection diagram of the {{ page.ref }} with a garage door or gate in dry contact --img width="940" height="740" %}

**We could also put** in connection an NO/NC switch on the central input in wired connection and put the motor in the garage door directly in impulse on dry contact.

{%- include alert.html type="warning" text="Attention, your gate or garage door must be equipped with an input for dry contact (normally intended to connect a simple push button).
The SIN-4-1-20 must be <b>set to pulse mode</b> (see extended documentation)." %}


### Outlet or heater

{% picture posts/{{ page.guid }}/Cablage-Prise-ou-radiateur-Micromodule-ZigBee-Nodon-1-sortie-Multifonction-SIN-4-1-20.png --alt {{ page.ref }} wiring diagram on socket or radiator --img width="940" height="635" %}

### Socket controlled by a switch

{% picture posts/{{ page.guid }}/Cablage-Prise-Interrupteur-Micromodule-ZigBee-Nodon-1-sortie-Multifonction-SIN-4-1-20.png --alt {{ page.ref }} wiring diagram on socket controlled by a switch --img width="940" height="718" %}

### VMC or Boiler

{% picture posts/{{ page.guid }}/Cablage-VMC-ou-Chaudiere-Micromodule-ZigBee-Nodon-1-sortie-Multifonction-SIN-4-1-20.png --alt {{ page.ref }} wiring diagram on single or double flow vmc or on boiler --img width="940" height="734" %}

{%- include alert.html type="info" text="
<b>VMC</b> will be supplied with a neutral and a permanent phase on PV (low speed). The dry contact input of the Nodon SIN-4-1-20 will be connected to the phase and the output to the GV input of your VMC.
<br>
<b>The boiler</b> must be fitted with a standard thermostat input. <b>Boilers connected to a control panel via a bus are not compatible.</b>
Depending on requirements, the input/output terminals of the Nodon SIN-4-1-20 module can be connected instead of your current thermostat (thermostatic management performed by your home automation system), in parallel with the existing thermostat (allows forcing the ignition of the boiler by home automation) or in series with the existing thermostat (forcing the boiler cut-off).
The module must be installed near your VMC or at any place where a neutral, a phase and the GV (high speed) wire of your VMC are accessible." %}

### Water heater

{% picture posts/{{ page.guid }}/cablage-contacteur-chauffe-eau-avec-sans-jour-nuit-ZigBee-Nodon-SIN-4-1-20.png --alt {{ page.ref }} wiring diagram on thermodynamic water heater with or without day-night management --img width="940" height="830" %}

## Toggle switch diagram

{% picture posts/{{ page.guid }}/Cablage-DIN-Tableau-Electrique-Telerupteur-ZigBee-2-ou-3-fils-boutons-au-neutre-Nodon-SIN-4-1-20.png --alt {{ page.ref }} wiring diagram as remote switch in the electrical panel with 2 or 3 wires --img width="940" height="830" %}

> I tested the operation of the {{ page.ref }} module with the three-wire operation diagram and the **remote switch mode works perfectly**.

The image below represents the connection of the {{ page.ref }} in three-wire remote control mode (button at the phase.)

{% picture posts/{{ page.guid }}/test-nodon-multifonctions-sin-4-1-20-telerupteur-tableau-ok.png --alt test of the multifunction module {{ page.ref }} as a 2-wire connection remote switch --img width="940" height="529" %}

You will be able to see the integration of the nodon module with din rail in the electrical panel.

{% picture posts/{{ page.guid }}/integration-nodon-multifonctions-sin-4-1-20-telerupteur.png --alt integration in a table of {{ page.ref }} as remote switch --img width="940" height="529" %}

## Comparison with the legrand 412170 Netatmo remote control module

{% picture posts/{{ page.guid }}/comparatif-telerupteur-nodon-multifonctionsin-4-1-20-avec-legrand-netatmo-412170-image-presentation.png --alt comparison of the {{ page.ref }} as remote switch with legrand netatmo 412170 --img width="940" height="529" %}

> Both modules are compatible among other zigbee2mqtt so you could easily **use them on Homeassistant or Jeedom.**

**Regarding Nodon it is also compatible:**
- ZHA (home assistant)
- Zigbee by Domoticz
- Zigbee Jeedom
- Overkiz
- Smartthings
- Smart&Connective

{% picture posts/{{ page.guid }}/comparatif-telerupteur-nodon-multifonctionsin-4-1-20-avec-legrand-netatmo-412170.png --alt comparison of the {{ page.ref }} as remote switch with legrand netatmo 412170 --img width="940" height="529" %}

Comparing these two modules there is no picture **Legrand passes the course** of ergonomics hands down**, but this victory has a cost, counts 77€ the module delivered, we can say that it is Dear. **You will get by at 55€ delivered to Domadoo** provided you take 5 Rail Din boxes of the brand.

The **Legrand module** has a button on the front for operation and another for inclusion accessible once integrated into the electrical panel, although it will only take the place of one location in the panel. A little more you will find the connection diagrams on the side. **In addition it is equipped with an energy meter.**

**At Nodon** it will be necessary to include the module before integrating it into the din rail box unless it is the first use. Otherwise apart from that the box is relatively well made but it will take up 1 and a half slots in the electrical panel. You will not have access to the inclusion button and the physical switching on of the lights

> Well the example is not very telling, let's assume that you want to buy 5.

- 5 x Legrand 412170 would cost **€346.92** delivered to[comptoirélectriquedunet](https://www.comptoirelectriquedunet.fr/telerupteur-connecte-with-netatmo/?gclid=CjwKCAjw_aemBhBLEiwAT98FMnKmWDZLe24qzEX38NdOJEO971d91Mh19jROy2lj6i086LhpU1y5dxoCsZQQAvD_BwE){: target="_blank"}
- 5 x multifunction modules + rail would cost **€249.4** at domadoo

> A difference of **almost €100** to see if that scares you.

## Technical characteristics

|Power supply|230V AC ~ 50Hz|
|Switching capacities|230V AC – 16A|
|Consumption|< 1W|
|Max. power|3680W – Zero crossing integrated|
|Radio frequency band used|2.4 GHz|
|Maximum radio power|+10dBm|
|Radio range|up to 30m indoors|
|Operating temperature|-20°C to 60°C|
|Ingress protection|IP 20|
|Device ID Type|On/Off Light (0x0100)|
|Dimensions|40mm (w) x 44mm (l) x 16.9mm (h)|

## **the + of the product** {{ page.ref }}
{: .blue}
- manufacturing quality
- OTA update support
- zigbee 3.0 certified
- the many compatibilities
- adaptation to market products

## **the - of the product** {{ page.ref }}
{: .red}

- the price
- inclusion
- missing the manual operation button
- absence of energy feedback

{% include product-embed.html guid="2145" %}
{% include product-embed.html guid="2142" %}

## Conclusion

As for the other modules of the brand, **Nodon signs a no fault on the quality of this product**, I wanted through this article to prove to you that the {{ page.ref }} **works well in remote switch mode** 👍. However, I opted for the Legrand Netatmo modules on a private basis because, firstly, I have a Legrand electrical panel and, secondly, the financial aspect was of little importance to me.
