---
guid: 5
title: 'Connected Protocol Home over IP/Matter'
date: '2020-02-11T14:45:38+00:00'
last_modified_at:
author: Nico
categories: [Automation, Protocoles]
layout: post
image: homeoverip.png
tags:
description: "News of the future HomeoverIP protocol named Matter"
locale: en_GB
published: true
sitemap:
  changefreq: #always hourly daily weekly monthly yearly never
  exclude: #'yes' or 'no'
  priority: #between 0.0 to 1.0, 1.0 high priority
  lastmod: # date to end modification
beforetoc:
toc: true
comments: true
redirect_from:
  - /en/blog/home-automation-smarthome-jeedom-homeassistant/protocoles/protocole-connecte-home-over-ip
---

This article is a translation of [the original article available at this address](https://www.connectedhomeip.com/){:target="_blank"} of the future home over ip protocol

## What is that?

First of all Project Connected Home over IP is a new working group. Who plans to develop and promote the adoption of a new connectivity standard. Royalty-free to increase compatibility between smart home products, with security as a fundamental design principle.

## How will it work?

Amazon, Apple, Google and the [Zigbee Alliance](https://www.haade.fr/blog/tutoriel-domotique-electronique/domotique-smarthome-jeedom-homeassistant/protocole/zigbee-comprendre-le-protocole-et- le-maillage/){:target="_blank"} have partnered to promote the formation of the working group. As well as Zigbee Alliance board member companies, IKEA, Legrand, NXP Semiconductors, Resideo, Samsung SmartThings, Schneider Electric, Signify (formerly Philips Lighting), Silicon Labs, Somfy and Wulian are also on board to join the working group and contribute to the project.

The goal of the Home over ip protocol is to simplify development for manufacturers. And increase compatibility for consumers. The project is built around a shared belief that smart home devices should be safe, reliable and seamless to use. Leveraging Internet Protocol (IP), the project aims to enable communication between smart home devices, mobile apps and cloud services. And thus define a specific set of IP networking technologies for device certification.

The industry working group will take an open source approach. For the development and implementation of a new unified connectivity protocol. The project intends to use inputs from smart home technologies. Market tested from Amazon, Apple, Google, Zigbee Alliance and others. The decision to take advantage of these technologies should accelerate the development of the protocol. To ultimately deliver faster benefits to manufacturers and consumers.

The project aims to make it easier for device makers to build smart home-enabled devices. As well as voice services such as Amazon Alexa, Apple Siri, Google Assistant and others. The planned protocol will complement existing technologies. In addition, the members of the working group encourage device manufacturers to continue to innovate. Using technologies available today.

## We're sure you have questions. Here are some answers.

### Why IP?

Today, there is no widely adopted open standard for the smart home that is IP-based. Yet IP is the Internet Protocol and is the most commonly used network layer in our homes and offices. With IP, messages can be routed over networks independent of the physical layers. And bonding that underpins them, plus there are many battle-tested algorithms and frameworks to perform routing, switching, and firewalling in a robust and resilient way. In addition to IP, you inherit well-known transport protocols like TCP and UDP. Therefore, IP is an ideal way to provide end-to-end security and privacy in the communication between a device and another device, application or service.

There are a large number of IP carrier networks today, designed for different use cases. as the protocol is based on IP. Its message traffic should be able to flow seamlessly across different types of networks.

Many smart home devices today use proprietary protocols. Which requires them to be attached to a home network using dedicated proxies and translators. By relying on IP, some of these devices may instead be able to connect directly to standardized network equipment.

### You mentioned IP networking technologies. What projects will the Home over IP Protocol focus on? Which could be activated later?

The project will define a specific set of IP networking technologies for device certification. We expect compliant devices to implement at least one supported technology and not necessarily all of them.

The focus of the first spec release will be Wi-Fi, up to and including 802.11ax (aka Wi-Fi 6). i.e. 802.11a/b/g/n/ac/ax; Thread on 802.15.4-2006 at 2.4GHz. And an IP implementations for Bluetooth Low Energy, versions 4.1, 4.2 and 5.0 for the physical wireless network and protocols.

The Project Connected Home over IP working group will also encompass other IP technologies such as Ethernet, Cellular, Broadband and others.

Some companies may focus their product offerings on the protocol over Wi-Fi/Ethernet. While others may target the protocol to Thread or BLE, and still others may support a combination. Please contact the individual companies for their intentions regarding future technical support.

## Consumers

### How will the project benefit consumers?

The home over ip protocol aims to improve the experience of consumers trying to use smart home products that are not compatible with each other. We believe the protocol has the potential to be widely adopted by home systems and assistants such as Amazon Alexa, Apple's Siri, Google Assistant and others. If the task force is successful with this goal, customers can be confident that their device of choice will work in their home and they can configure and control it with their preferred system.

> Will my current smart home products continue to work as they do today?

Yes. Amazon, Apple and Google have pledged to continue supporting consumers and their existing products.

## Developers

### What will be the advantages of the project for the developers?

The home over ip protocol aims to make it easier for developers to create a device compatible with smart home services such as Amazon Alexa, Apple Siri, Google Assistant and others. This may include a proposed standard for lifecycle events such as provisioning/integrating, deleting, error recovery, and software updating.

> I am developing new products today. How does the project affect my development path?

The planned protocol will complement existing technologies, and members of the working group encourage device manufacturers to continue to innovate using the technologies available today. Join the working group to learn more about the planned protocol and when it will be available.

**Will current smart home products continue to work?**

Yes. Amazon, Apple, and Google have pledged to continue supporting developers and their products.

**Will they also be compatible with the new protocol?**

The home over ip protocol will be focused on new products. For developers interested in joining the effort, please join the Project Connected Home over IP working group.

**When will the specifications be available?**

To accelerate development, the project plans to start with components from market-tested technologies, modified as needed. The working group aims to publish a draft specification and a preliminary reference open source implementation in late 2020.

**What open source approach does the Task Force intend to take?**

To accelerate protocol development and deliver faster benefits to manufacturers and consumers, the working group will begin with components of market-tested technologies from Amazon, Apple, Google, the Zigbee Alliance, and others. Any open source code that the working group chooses to incorporate will be copied into the Connected Home over IP open source project and will be modified as needed.

By developing an open source project in conjunction with creating the specification, the architecture can be prototyped and tested in real use cases. At the end of the process, adopters can use that same code to accelerate their product development.

### What market-tested smart home technologies are being brought?

The home over ip protocol intends to leverage the development work and protocols of existing systems such as:

1. Amazon Alexa Smart Home
2. Apple HomeKit
3. Google's Weave
4. Zigbee Alliance Dotdot Data Models

**Will the project attempt to standardize smart home user interfaces?**

No. At this time, the task force has no plans to standardize smart home user interfaces such as voice assistants, smart displays, or desktop and mobile apps.

### I am interested. How to join this effort?

The working group welcomes and invites device manufacturers, silicon vendors, and other smart home industry developers to participate and contribute to the development of this new standard. If you would like to get involved or receive updates, [fill out the form available here](https://www.connectedhomeip.com/){:target="_blank"}

## Open source home over ip

The reference implementation of the new standard and its supporting tools will be developed and maintained on the open source GitHub platform for all aspects of the specification. Please stay tuned for more information.