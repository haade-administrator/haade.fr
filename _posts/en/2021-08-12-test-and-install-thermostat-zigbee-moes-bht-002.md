---
guid: 14
title: "[TEST] and [INSTALL] Zigbee Thermostat Moes BHT-002"
layout: post
author: Nico
date: "2021-08-12"
last_modified_at: "2023-01-15 17:03"
categories: [Home-Assistant, Tests, Haade-lab]
image: "thermostat-zigbee-moes-bht-002.png"
published: true
noindex: false
sitemap:
  changefreq: #always hourly daily weekly monthly yearly never
  exclude: #'yes' or 'no'
  priority: #between 0.0 to 1.0, 1.0 high priority
  lastmod: # date to end modification
locale: en_GB
toc: true
redirect_from:
  - /en/blog/home-automation-smarthome-jeedom-homeassistant/tutos-haade-lab/home-assistant/test-et-install-thermostat-zigbee-moes-bht-002/
  - /en/blog/tests/test-et-install-thermostat-zigbee-moes-bht-002/2/
  - /en/blog/tests/test-et-install-thermostat-zigbee-moes-bht-002/
rating: 4.6
---

Today I will test and install the Zigbee BHT-002 thermostat from the Moes brand, more precisely the electric heating version BHT-002-GBLZBW, this one will be replace with the [Atlantic thermostat 109519](https://www.rexel.fr/frx/Cat%C3%A9gorie/Chauffage-%C3%A9lectrique-climatisation-ventilation/Chauffage-domestique/C%C3%A2ble-chauffant/Plancher-Chauffant-Domocable---Thermostat-digital/ATL109519/p/62427465){: target="_blank"} this thermostat from the years 2005 always costs more than 40 euros per unit with very limited settings.

{% include product-embed.html image="moes-thermostat-intelligent-zigbee-blanc-pour-chaudiere-eaugaz-3a.jpg" title="MOES - INTELLIGENT THERMOSTAT ZIGBEE WHITE FOR WATER/GAS BOILER 3A" brand=" Moes" description="Control the temperature of your home intelligently with the Zigbee MOES thermostat for water or gas boilers." affiliate="_DlTTNnv" domlink="thermostats/5781-moes-black-zigbee-smart-thermostat-for-3a-watergas-boiler.html" %}

{% picture posts/{{ page.guid}}/remplacement-thermostat-atlantic109519-vs-moes-bht-002.png --alt replacement thermostat atlantic electric heating by moes bht-002 --img width="820" height="461" %}

To talk about the Moes brand, this is the second material that I test, both ordered from the Moes Official Store of Aliexpress, and frankly the quality is very well finished. The packaging is professional and the instructions is perfectly detailed. So do not hesitate to order the products of this brand. Moreover, [in a future article Yann says (uncle) will test the brand's new 3 in 1 sensor (thermometer, brightness and humidity) zigbee](https://fr.aliexpress.com/item/1005002522611717.html?spm=a2g0o.productlist.0.0.47147798UjVhU9&algo_pvid=760ce515-952e-453c-bdc1-465c7c3542f7&algo_exp_id=760ce515-952e-453c-bdc1-465c7c3542f7-41){: target="_blank"}. It is already zigbee2mqtt compatible so multiplatform, I'm looking forward to that so it's up to you to play uncle.

{% picture posts/{{ page.guid}}/moes-bht-002-gzb-contenu-paquet-haade.png --alt unboxing moes bht-002 --img width="820" height="461" %}

Let's start with the unpacking, as I said above the packaging is top, the product is well protected. Inside the thermostat (a protective film protects the screen), an ntd probe, two screws and the instructions, nothing special. The connection to electric heating is done without worries because it is available with 2 neutral / 2 phases in input and output, moreover in option we can connect the thermostat in modbus, in our case not the trouble, for the same probe.

# Installation of module

Nothing very complicated, to begin with the black part is esay to remove with one hand in order to be able to screw the module on the flush-mounting box.

**From left to right:**

- White / red Modbus connection
- 1: flexible wire phase radiator outlet
- 2: neutral flexible wire radiator output
- 3: Circuit breaker neutral
- 4: Circuit breaker phase
- 5-6 wire from the 2.5m NTC probe connected to control the soil temperature.

{% picture posts/{{ page.guid}}/moes-bht-002-gzb-connectique-haade.png --alt Connector thermostat zigbee moes BHT-002 --img width="820" height="461" %}

Then follows the installation in place of the Atlantic room thermostat. As stated above nothing very complicated.

{%- include alert.html type="warning" text="You will have to work in the vicinity of a voltage of 220V which is dangerous if you come into contact with an electrical conductor. Be careful with your handling, if in doubt cut off the power supply." %}

What a pity that the connection work by dupont wires, a contact system is more pro

{% picture posts/{{ page.guid}}/moes-bht-002-installation-murale.png --alt Moes thermostat wall installation bht-002 --img width="820" height="461" %}

**The 2.5m NTC probe is a practical external waterproof digital temperature probe** for deporting the temperature probe of the Moes zigbee thermostat at ground level for example.

# Technical Notice BHT-002

[](https://drive.google.com/file/d/13ArYq5bkG5xbnuoVv76iHq4Rb2fCYrG5/view?usp=sharing){: target="_blank"}

Notice officielle du thermostat zigbee Moes BHT-002

# Programming part

Well I will not go into everything in detail, the instructions are just above, the interesting part is the programming which differs from the Atlantic thermostat which simply does not have one.

4 time periods are available and programmable over 3 periods of the week (Monday to Friday, Saturday and Sunday).

For instance the integration with zigbee2mqtt and homeassistant is very easy. We open the network, 8 seconds on the down arrow and it's good.

Above all the homeassistant part is relatively complete unfortunately the programming of the hourly / day periods is not possible. You found in the attributes, it is already not bad. Everything else is configurable via the wizard.

![test lovelace thermostat bht-002 by Moes]({{ site.baseurl }}/assets/images/posts/{{ page.guid}}/integration-thermostat-moes-bht-002-home-assistant.webp{{ cachebuster }}){: width="504" height="545"} 

# Concluse

To conclude if you want to replace your electric floor heating thermostats you can go there frankly. I'm not even talking about homeassistant control, just the price difference forces you to take a zigbee thermostat. Frankly Moes is worth a visit.

{% include product-embed.html image="moes-thermostat-intelligent-zigbee-blanc-pour-chaudiere-eaugaz-3a.jpg" title="MOES - INTELLIGENT THERMOSTAT ZIGBEE WHITE FOR WATER/GAS BOILER 3A" brand=" Moes" description="Control the temperature of your home intelligently with the Zigbee MOES thermostat for water or gas boilers." affiliate="_DlTTNnv" domlink="thermostats/5781-moes-black-zigbee-smart-thermostat-for-3a-watergas-boiler.html" %}
