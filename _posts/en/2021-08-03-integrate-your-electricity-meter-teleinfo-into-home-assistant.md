---
guid: 13
title: "Integrate your electricity meter (teleinfo) in Home Assistant"
description:
author: Math67
layout: post
date: "2021-08-03"
last_modified_at:
categories: [Home-Assistant, Haade-lab]
tags: []
image: compteur-electrique-homeassistant.png
published: true
sitemap:
  changefreq: #always hourly daily weekly monthly yearly never
  exclude: #'yes' or 'no'
  priority: #between 0.0 to 1.0, 1.0 high priority
  lastmod: # date to end modification
locale: en_GB
toc: true
redirect_from:
  - /en/blog/home-automation-smarthome-jeedom-homeassistant/tutos-haade-lab/home-assistant/integrer-son-compteur-electrique-teleinfo-dans-home-assistant
---
For my first post on the blog, I suggest you see together how to integrate the information from your electricity meter (teleinfo) into Home Assistant for around € 14. This tutorial is valid for old electronic meters as well as for new "Linky" communicating meters. To retrieve the information we will use a feature used by energy suppliers: Tele-information.

### Prerequisites:

- Home assistant installed with up-to-date ESPHome
- An ESP8266 module of the [Wemos D1 mini](https://fr.aliexpress.com/item/32651747570.html?spm=a2g0o.productlist.0.0.77694726yRAR17&algo_pvid=cd2ec6ef-58ee-4733-89fd-25627174ac51&algo_exp_id=cd2ec6ef-58ee-4733-89fd-25627174ac51-0){:target="_blank"} type and its power supply
- A [PitInfo](https://www.tindie.com/products/Hallard/pitinfo/){:target="_blank"} module

### ESPHome programming

[An article is dedicated to the programming of an ESP8266 or 32.Do not hesitate to consult it by clicking on the link]({% post_url /en/2021-05-11-esphome-and-homeassistant %})

As the electricity meter is generally remote from your home automation system, I advise you to program and flash your ESP8266 first.

#### Summary of integration steps with ESPhome:

- To start, go to ESPHome you must create a new configuration by clicking on the green '+' button located at the bottom right of the screen.
- Then fill in the various fields with the name of the device, the name of your wifi network (2.4 Ghz imperatively) as well as the associated password.
- The **platform** is of course ESP8266, for a wemos d1 mini **the board** is d1\_mini
- Click on the 'Next' button and connect your Wemos D1 mini by USB to your PC, then click on 'Connect' and choose the COM port corresponding to your Wemos.

The flash may last a few minutes, leave the page open while waiting for the operation to complete.

After this operation, your new configuration will appear on the ESPHome Dashboard. Click on 'EDIT', we will complete the configuration file with the elements necessary for reporting information from the meter.

Below 'logger' add the following lines:

Finally, below the 'captive\_portal' line add the rest of the code:

- For Peak Hours / Off-Hours subscriptions:

- For subscriptions at the Basic rate:

 You can now upload the file by clicking on 'INSTALL'.

 So much for the programming part, now let's go to the connection of the assembly.

##  **Connection to the meter**

{% picture posts/{{ page.guid }}/pngegg-150x150.png --alt Electrical hazard logo %}

**You will have to work in the vicinity of a voltage of 220V which is dangerous if you come into contact with an electrical conductor. Be careful with your handling, if in doubt cut off the power supply.**

 We will in this part see how to connect our assembly, here is the wiring diagram:

{% picture posts/{{ page.guid }}/branchement.png --alt connection diagram pitinfo, wemos and electric meter %}

Schéma de branchement

- **Rx** of Wemos on **TXD** of PiTInfo
- **G** of Wemos on**GND** of PiTInfo
- **3v3** of Wemos on **VCC** ofPiTInfo
-  The two **input terminals** of the PiTInfo must be connected to **I1** and **I2** under the meter (These terminals are protected by a cover), there is no polarity on this side of the assembly

 **Linky counter:** For information to go back to Home Assistant. The counter must be in 'History' mode, you can check this information by pressing the '+' or '-' keys.

### Lovelace

 Back in Home Assistant go to 'Integrations'. Normally your new Wemos should be recognized by HA and offered to you for configuration. If this is not the case, you will have to add it manually by clicking on 'Add integration' at the bottom right. Then look for ESPHome in the list and finally enter the IP address of the module.

{% picture posts/{{ page.guid }}/entite-teleinfo-homeassistant.png --alt homeassistant teleinfo entity with pitinfo and wemos %}

Map of electric meter entities

So you get this card that you can add directly to Lovelace or create a custom card.

Here it is now over, you have all the information from your meter arriving on your HA. You are now free to manage this data, to create graphs, automations...!

EDIT: Due to a conflict in Home Assistant in the configuration for the "Base" tariff, it is necessary to modify the line id: index by id: "index\_base" in the ESPHome code:

```yaml
  - platform: teleinfo
    tag_name: "BASE"
    name: "Index"
    unit_of_measurement: "Wh"
    icon: mdi:gauge
    id: "index_base" # <- modify line
```
