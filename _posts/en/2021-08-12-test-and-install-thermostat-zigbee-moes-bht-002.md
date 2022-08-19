---
guid: 14
title: "[TEST] and [INSTALL] Zigbee Thermostat Moes BHT-002"
layout: post
author: Nico
date: "2021-08-12"
last_modified_at:
categories: [Home Assistant, Tests, Haade-lab]
image: "thermostat-zigbee-moes-bht-002"
published: true
locale: en_GB
---
Today I will test and install the Zigbee BHT-002 thermostat from the Moes brand, more precisely the electric heating version BHT-002-GBLZBW, this one will be replace with the [Atlantic thermostat 109519](https://www.rexel.fr/frx/Cat%C3%A9gorie/Chauffage-%C3%A9lectrique-climatisation-ventilation/Chauffage-domestique/C%C3%A2ble-chauffant/Plancher-Chauffant-Domocable---Thermostat-digital/ATL109519/p/62427465){:target="_blank"} this thermostat from the years 2005 always costs more than 40 euros per unit with very limited settings.

![]({{ site.baseurl }}/assets/images/posts/{{ page.guid}}/remplacement-thermostat-atlantic109519-vs-moes-bht-002-820.webp{{ cachebuster }})

To talk about the Moes brand, this is the second material that I test, both ordered from the Moes Official Store of Aliexpress, and frankly the quality is very well finished. The packaging is professional and the instructions is perfectly detailed. So do not hesitate to order the products of this brand. Moreover, [in a future article Yann says (uncle) will test the brand's new 3 in 1 sensor (thermometer, brightness and humidity) zigbee](https://fr.aliexpress.com/item/1005002522611717.html?spm=a2g0o.productlist.0.0.47147798UjVhU9&algo_pvid=760ce515-952e-453c-bdc1-465c7c3542f7&algo_exp_id=760ce515-952e-453c-bdc1-465c7c3542f7-41){:target="_blank"}. It is already zigbee2mqtt compatible so multiplatform, I'm looking forward to that so it's up to you to play uncle.

![]({{ site.baseurl }}/assets/images/posts/{{ page.guid}}/moes-bht-002-gzb-contenu-paquet-haade-820.webp{{ cachebuster }})

Let's start with the unpacking, as I said above the packaging is top, the product is well protected. Inside the thermostat (a protective film protects the screen), an ntd probe, two screws and the instructions, nothing special. The connection to electric heating is done without worries because it is available with 2 neutral / 2 phases in input and output, moreover in option we can connect the thermostat in modbus, in our case not the trouble, for the same probe.

## Installation of module

Nothing very complicated, to begin with the black part is esay to remove with one hand in order to be able to screw the module on the flush-mounting box.

**From left to right:**

- White / red Modbus connection
- 1: flexible wire phase radiator outlet
- 2: neutral flexible wire radiator output
- 3: Circuit breaker neutral
- 4: Circuit breaker phase
- 5-6 wire from the 2.5m NTC probe connected to control the soil temperature.

![]({{ site.baseurl }}/assets/images/posts/{{ page.guid}}/moes-bht-002-gzb-connectique-haade-820.webp{{ cachebuster }})

Then follows the installation in place of the Atlantic room thermostat. As stated above nothing very complicated.

![logo risque électrique]({{ site.baseurl }}/assets/images/posts/{{ page.guid}}/pngegg-820.webp{{ cachebuster }})

**You will have to work in the vicinity of a voltage of 220V which is dangerous if you come into contact with an electrical conductor. Be careful with your handling, if in doubt cut off the power supply.**

What a pity that the connection work by dupont wires, a contact system is more pro

![]({{ site.baseurl }}/assets/images/posts/{{ page.guid}}/moes-bht-002-installation-murale-820.webp{{ cachebuster }})

**The 2.5m NTC probe is a practical external waterproof digital temperature probe** for deporting the temperature probe of the Moes zigbee thermostat at ground level for example.

## Technical Notice BHT-002

[](https://drive.google.com/file/d/13ArYq5bkG5xbnuoVv76iHq4Rb2fCYrG5/view?usp=sharing){:target="_blank"}

Notice officielle du thermostat zigbee Moes BHT-002

## Programming part

Well I will not go into everything in detail, the instructions are just above, the interesting part is the programming which differs from the Atlantic thermostat which simply does not have one.

4 time periods are available and programmable over 3 periods of the week (Monday to Friday, Saturday and Sunday).

For instance the integration with zigbee2mqtt and homeassistant is very easy. We open the network, 8 seconds on the down arrow and it's good.

Above all the homeassistant part is relatively complete unfortunately the programming of the hourly / day periods is not possible. You found in the attributes, it is already not bad. Everything else is configurable via the wizard.

![]({{ site.baseurl }}/assets/images/posts/{{ page.guid}}/integration-thermostat-moes-bht-002-home-assistant.gif)

To conclude if you want to replace your electric floor heating thermostats you can go there frankly. I'm not even talking about homeassistant control, just the price difference forces you to take a zigbee thermostat. Frankly Moes is worth a visit.
