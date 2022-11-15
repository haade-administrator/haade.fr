---
guid: 3
title: 'Zigbee, comprendre le protocole et le mailing'
date: '2020-02-10T13:17:10+00:00'
last_modified_at:
author: Nico
categories: [Automation, Protocoles]
layout: post
image: maillage-zigbee.png
tags:
description: "Zigbee comprend le protocole et le mailing de ce standard"
locale: en_GB
published: true
beforetoc:
toc: false
sitemap:
  changefreq: #always hourly daily weekly monthly yearly never
  exclude: #'yes' or 'no'
  priority: #between 0.0 to 1.0, 1.0 high priority
  lastmod: # date to end modification
toc: false
comments: true
redirect_from:
  - /en/blog/home-automation-smarthome-jeedom-homeassistant/protocoles/zigbee-comprendre-le-protocole-et-le-maillage/
---

I tried to find on the web articles concerning the protocol and the zigbee mesh and the management of its park of modules but none had been able to meet my expectations, this is how the idea of write such an article.

Before starting and in order to better understand the writing of this article, you should know that our test environment is based on [**zigbee2mqtt.**](https://www.zigbee2mqtt.io/){:target= "_blank"} It is installed in a docker container and controlled by [**homeassistant core.**](https://www.home-assistant.io/){:target="_blank"} Which itself is also installed in a container. The two systems communicate together thanks to a communication server [MQTT.](http://mqtt.org/){:target="_blank"} Which acts as a buffer between the systems and is also installed in a container.

## Why I chose zigbee2mgtt!

**it has the advantage of being:**

1. 100% open source.
2. Support for new modules is regular and can be integrated by anyone!
3. Currently it supports **584** modules from **112** different brands.
4. the management of a protocol outside of a module integrated into a home automation manager has the effect of not putting the eggs in the same basket.
5. Restarting homeassistant does not restart the zigbee network
6. very light and easily installable on docker, in case of problems it is very quickly reinstalled.

Zigbee2mqtt has native support for homeassistant and hassio. You can easily create a lovelace map displaying the zigbee protocol and mesh live. In addition every 15 days zigbee modules are supported. At the time of writing this message, there are more than 500 modules.

Zigbee2mqtt.io devotes an entire article to the inclusion of new modules that are not yet supported, it's really within everyone's reach. [We currently find zigbee keys around 20€]({% link _products/{{ page.locale | slice: 0,2 }}/2022-09-23-key-zigbee-3-sonoff-Z-Bridge-dongle-E.md %}), (if you have the programming boxes) otherwise it's 22 € the first order). The cc2531 has the disadvantage of being compatible only with the zigbee-1.2 network, why: because it does not have enough internal memory. If you want a basic network in zigbee 3.0, then you will have to opt for a coordinator [CC26X2R coordinator zigbee 3.0](https://www.ti.com/tool/LAUNCHXL-CC26X2R1){:target="_blank"} with $40 cost. It is also possible to transform a cc2530/31 into a router in order to strengthen its mesh. remembering that for the competition we are between 35-45€.

### As a reminder:

in zigbee the **coordinator** is the main relay. **Routers (physical device)** are modules powered by the **neutral** that serve as relay antennas.

**Example:**

- Xiaomi zigbee switches.
- IKEA tradfri bulbs, (pay attention to bulbs plugged behind a switch, because they will not be visible in the zigbee network so can be activated and deactivated only if the switch is ON). they are essential for the mesh and the reinforcement of a zigbee network as for the z-wave on this point.

**The mesh end modules called logical device,** are all modules powered by batteries or without the neutral. They only send information and do not allow other information to be received.

I chose to flash the cc2531 coordinator in zigbee 1.2,

> It is possible to flash the cc2531 coordinator in zigbee 3.0 but I noticed the loss of module initially included.

Staying in 1.2 has no influence on the inclusion of new generation 3.0 modules because they are backwards compatible.

## **Advantage of zigbee over z-wave:**

1. Two routers can communicate with each other without a coordinator (Touchlink, zigbee 3.0).
2. Ah, the batteries are still too expensive and durable (and yes the zigbee has the advantage of consuming very very little, i.e. 20 milli joules per hour, which is also the main reason that made me change the protocol).
3. The price of the modules is ridiculous, count 6€ for a door sensor. They stand out from z-wave because the zigbee alliance, from the start, opened the protocol for the manufacture of the chip to the manufacturer. For comparison, z-wave chips are always and only manufactured by sigma designs. under the pressure of protocols including the future protocol by ip, the z-wave alliance opens its protocol to the manufacturer in the second half of 2020. The manufacture of z-wave chips which should lower the selling costs of the modules).
4. Self-forming mesh yes, **but self-healing** (to date I have not been able to verify).
5. The coordinator is capable of routing but limited to **13** for **zigbee 3.0** against **20** for **zigbee 1.2** with a cc2531.
6. Depending on your mesh, the number of modules is not limited because each router said physical device can take several logical devices.
7. Zigbee 3.0 brings an extra layer of AES-128 security

## Create your zigbee network

1st Case: you are starting from a fresh installation with the coordinator alone:

- First install and pair a **router module**. (switch with neutral for example).
- Then we include all the logic modules around the physical device. Be careful!** Of course, your logic module must *be closer* to the switch than the **coordinator** which is going to appropriate it at any time (it's not for nothing that it is also called a sniffer). *That's why it's best to include end modules near a router.*

2nd case: you have an existing installation with router modules installed and end modules grafted onto the coordinator instead of a router

- Switch to inclusion mode and pair the router module again even if it is already recognized by zigbee2mqtt.
- Then near this router include/re-include the end modules refresh your Network Card (personally I use [zigbee2mqtt networkmap card](https://github.com/azuwis/zigbee2mqtt-networkmap){:target=" _blank"} ).
- Normally you will see the logic module unhook from the coordinator to be grafted onto the router. **ps:** if it is an existing installation and you want to pair a door opening module, like the xiaomi. No need to take it off if a router or the coordinator is close enough then a simple inclusion will be enough to inject the module into the network.

## Remove a module from the zigbee network

it is slightly more restrictive because it is the module which decides on its own exclusion and not the zigbee coordinator during an exclusion if it has failed, renew the exclusion and wake up your module to be excluded.

**In conclusion:** the Zigbee protocol and mesh is slightly more restrictive to set up *apart from the inclusion of the modules in the network* than z-wave. On the other hand, the inclusion of the modules is easier than the other protocol. Feel free to comment if needed 🙂

***Nomenclature:***

**Coordinator:** as its name suggests, it is the conductor of the zigbee network, there can only be one per network.

**Router:** (physical device): these are the relay antennas to strengthen the mesh, it acts as a signal repeater.

**End module:** (logical peripheral): are the set of satellite modules rendering status returns, lights, etc….
