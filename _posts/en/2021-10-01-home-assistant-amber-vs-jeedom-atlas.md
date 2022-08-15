---
guid: 22
title: "Home-Assistant Amber VS Jeedom Atlas"
description: ""
date: "2021-10-01"
last_modified_at:
layout: post
author: Nico
categories: [Home Assistant, Jeedom, News ]
tags: []
image: Jeedom-Atlas-vs-Homeassistant-Amber
published: true
locale: en
toc: false
---

For the start of the school year Home-Assistant and Jeedom unveil two new boxes, the Home-Assistant Amber vs Jeedom Atlas. Amazing when you know that they both went out a few days apart. The difference lies in the fact that the Amber box is in presale on the platform. [crowdsupply](https://www.crowdsupply.com/nabu-casa/home-assistant-amber) _who close the 27 October 2021_, with an **official release for June 2022** while Jeedom Atlas is already **available for sale** on the site [Domadoo](https://www.domadoo.fr/fr/194_jeedom).

|  | Home Assistant Amber (**<span style="color:red">Raspberrypi</span>** CM4) | Jeedom Atlas (Rock Pi4) |
|---|---|---|
| Processeur | Broadcom BCM2711 **<span style="color:red">4 coeurs</span>** Cortex-A72 (ARM v8) 64-bit SoC @ 1.5 GHz | **<span style="color:red">6 cœurs</span>**, 64 bits – Dual Cortex-A72 (up to 2.0Ghz) et   quad Cortex-A53 (up to 1.5Ghz) Harvard Superscalar processor |
| Mémoire vive | 1 GB, 2 GB, 4 GB or 8 GB LPDDR4 (dépend de la variante ) | 4GB DDR4 |
| Mémoire de stockage | 8, 16 ou 32Go eMMC ( optionnel ) + **<span style="color:red">support ssd NVMe M.2 socket</span>** | 32Go eMMC + support ssd NVMe ajout d’une carte d’extension non compris lors de l’achat. |
| Alimentation | 12 V / 2 A prise jack cylindrique (5.5 mm x 2.1 mm) ou **<span style="color:red">POE+ (optionnel )</span>** | 9V – 2A |
| Horloge RTC | Oui CR2032 | Oui |
| Port Ethernet | Oui Gigabit | Oui Gigabit |
| Ports USB | 2x USB 2.0 et 1x USB-C 2.0 | 2x USB 2.0 et 2x USB 3.0 |
| Technologie(s) intégrée(s) | **<span style="color:red">Zigbee intégrée compatible Matter, </span>**bluetooth 5.0   et   wireless LAN, 2.4 GHz and 5.0 GHz IEEE 802.11b/g/n/ac (optionnel) | Z-Wave +, EnOcean ou Zigbee (Optionnel) et   WIFI 2.4Ghz et 5Ghz et Bluetooth 5.0 |
| DAC | **<span style="color:red">Haute qualité audio, </span>**2 V RMS line-out on 3.5 mm audio jack, SNR 106 dB | Non |
| Boutons Poussoir | Rouge: factory reset   Bleu: à définir | Non |
| GPIO | 10 broches | **<span style="color:red">40 Broches</span>** |
| Dimensions | 123 mm x 123 mm x 36 mm | **<span style="color:red">90mm x 68mm x 35 mm</span>** |
| Boitier | Translucide | Noir aluminium anodisé 4mm |

## Common Points Home-Assistant Amber vs Jeedom Atlas

- Both operate in **100% local network** (no need for Cloud)
- These are two boxes that normal people can use to start on the Home Assistant platform without having to worry about buying their own computer
- Software **100% Opensource**
- Many plugins **FREE**

# Let's Start With Home-Assistant Amber

![amber by home-assistant]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/home-assistant-amber-powered-raspberry-820.webp{{ cachebuster }})

The Amber Box **is more than promising** because it is an integration card accommodating the raspberrypi component CM4 card available in several 1,2 and 4gb variants of optional wifi memories and with or without an 8, 16 or 32gb emmc. The box is compatible with all CM4 cards.

## Advantages of box Amber:

- **Raspberry pi CM4** (available full variants)
- **M.2 controller** NVMe SSD disk up to 2TB
- Direct boot on SSD
- **POE + power supply possible** IEEE 802.3at-2009 Class 3 or 4 (selectable via jumper)
- Pushbuttons
- 10 pins GPIO
- Translucent case
- custom heat sink
- Tool-free assembly
- **Zigbee Embedded Silicon Labs** Openthread and **Matter compatible**
- Zigbee plugin included
- Supports 2230, 2242, 2260 and 2280 modules
- 1x USB-C 2.0 in UART or USB mode
- High quality audio Dac
- RTC clock
- Status LEDs (can be turned off during Normal operation)
- Low power consumption 1.5 to 9w depending on condition
- Plugins 100% Free to (over 100 Devices and services available)

## Disadvantage Amber by Home Assistant

_Well not much!_

- Injection molded polycarbonate housing ( less qualitative than aluminum)
- **Specific power supply** cylindrical 12V / 2A
- **No external antenna** for the Zigbee and Wifi
- 10-pin GPIO and not 40 because it is already used on the card.
- Reception of the box **scheduled for June 2022**

# let's continue with Jeedom Atlas

![Jeedom atlas typical]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/Jeedom-Atlas-caracteristique-820.webp{{ cachebuster }})

## Advantage Jeedom Atlas

- **French Box**
- Number of USB 2.0 and 3.0 ports (4 in all).
- Zigbee plugins Included
- **Aluminum case**
- Zigbee outdoor antenna Included
- Next purchase Protocol (Zigbee, Z-wave or Enocean)
- already available for sale
- Box delivered ready to use whatever the variant
- Many plugins available

## Disadvantage Atlas par Jeedom

- Rock PI4 card (less developed card and used)
- **SSD integration not planned** (expansion card still available for sale)
- **POE + not supported** for the power supply
- Storage emmc max 32GB can quickly become limited depending on the number of plugins.
- Quite a lot of **Paid Plugins**

## Compare of Box Home-Assistant Amber vs Jeedom Atlas

To be objective on the comparison, I took the prices of the crowdsupply platform, of the CM4 with 4gb of memory, wifi and 32GB of emmc disk.

|  | **Home Assistant Amber (<span style="color:red">Raspberrypi </span>CM4)** | **Jeedom Atlas (Rock Pi4) Version Zigbee** |
|---|---|---|
| Matériel | **128€** + CM4 4gb 32go **70,20€** | **235€** |
| Mémoire | Incluse | Incluse |
| Wifi + Bluetooth | Inclus | Inclus |
| Service Pack | Néant (plugin gratuit) | Inclus |
| Plugin Zigbee | Gratuit |  |
| Antenne Zigbee | Inclus | Inclus |
| Temps d’installation et compétence | Clé en main | Clé en main |
| Frais de livraison | 32€ | Offert pour l’achat d’une box |
| Date de Sortie | Juin 2022 | **<span style="color:red">Septembre 2021</span>** |
| Total | **<span style="color:red">230,20€</span>** | **<span style="color:red">235€</span>** |

The prices are equal but if in my case I decide to go with an Amber box boarding:

- POE + power supply at 122 € delivered at Crowdsupply
- with a Kingspek SSD of 128GB at 22.45 € delivered on aliexpress
- a CM4 at Kubii of 4gb of memory with wifi but without on-board disk at € 57.95 delivered

We get a Box HomeAssistant Amber at **204,4 €** with technical specifications superior to Jeedom Atlas.

## Conclusion

I have used Jeedom for years from version 1 to version 4, which means that I know the system that runs under the PHP language well, then I switched to Home Assistant because I wanted to change the ergonomics (Python language) and wanted to switch to **all free** . These are two good softwares, I find Home Assistant's line of conduct more relevant and natural and it also shows on their designs of the box. **So if you are not pressed for time, I strongly advise you to choose the Box Amber, you just have to look at the advantages.** _On the other hand if you are in a hurry or you have a large Francophone community, choose Jeedom Atlas,_ **but which in my opinion remains below Home Assistant both in software and hardware.**
