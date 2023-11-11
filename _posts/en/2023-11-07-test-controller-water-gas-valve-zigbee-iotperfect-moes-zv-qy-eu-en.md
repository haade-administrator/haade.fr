---
guid: 92
title: "Test of the PF-PM02D-TYZ Zigbee Valve Controller by Moes"
description: "Today we are going to test the iot perfect intelligent valve controller and resold by Moes, we are going to see that manufacturing quality is not everything"
ref: "PF-PM02D-TYZ"
layout: post
author: Nico
date: 2023-11-07 16:43
last_modified_at: 
categories: [Tests, Zigbee]
tags: []
image: 'test-smart-valve-controller-zigbee-moes-PF-PM02D-TYZ.png'
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
rating: 3.2
sourcelink:
  - https://zigbee.blakadder.com/IOTPerfect_PF-PM02D-TYZ.html
  - https://www.zigbee2mqtt.io/devices/PF-PM02D-TYZ.html
  - https://www.domadoo.fr/fr/peripheriques/6671-moes-vanne-motorisee-zigbee-tuya.html
  - http://www.iotperfect.com/?m=home&c=View&a=index&aid=84&lang=en
---

Today I am going to test **a very specific module**, often associated with flooding problems, it can be useful for controlling the watering of plants and grass provided you find 1/4 turn valves protected from bad weather . I want to talk about the **zigbee smart valve controller {{ page.ref }}** made by [iotperfect](http://www.iotperfect.com/?m=home&c=View&a=index&aid=84&lang=en){ : target="_blank"} and among other things sold in **white label by Moes**.

> so does this product allow you to safely control 1/4 turn valves?

{% include product-embed.html guid="2176" %}

## A brief overview of {{ page.ref }}

The module is supplied assembled with a mains adapter, a fixing kit and explanatory notes. **The packaging and contents make a good impression.**

{% picture posts/{{ page.guid }}/capture-controlleur-vanne-intelligente-zigbee-moes-PF-PM02D-TYZ.png --alt presentation of the moes PF-PM02D-TYZ zigbee 3.0 1/4 turn valve controller --img width="940" height="529" %}

The whole thing looks solid and well made, the ignition/switch/pairing button is small and airtight, in the center there is a **physical button called "push"**, by pressing it it allows the device to be disconnected. motor and valve and thus pivot the lever manually, ideal for installing the product. The lever is made of 1.5mm thick steel and everything is assembled with a nilstop screw.
The fixing elements are of good quality but **the mounting principle of the fixing will not be sufficient for maneuvering on levers that are hard to handle. See below.**

{% picture posts/{{ page.guid }}/taille-alerte-inclusion-controlleur-vanne-intelligente-zigbee-moes-PF-PM02D-TYZ.png --alt special feature of moes PF-PM02D-TYZ zigbee 3.0 1/4 turn valve controller --img width="940" height="529" %}

## Compatibility

- **Zigbee2mqtt**
-Tasmota
-Tuya
-Rexense
-Broadlink
- Harmonyos

## Pairing

Short press the “key” button 3 times. The LED starts flashing quickly once the device is in pairing mode.

## Inclusion in ZHA

at the time of writing this article, **the zigbee intelligent valve {{ page.ref}} is not recognized in zha**, at least after inclusion you will not have access to the switch function. But while waiting for a future update you can adapt the code using a quirks and make this module work.

#### step 1 Inclusion

Start by including the module in zha

#### step 2 Recovery

Then get the IEEE address of the module, nothing could be simpler, go to ZHA and configure the module

{% picture posts/{{ page.guid }}/recuperation-ieee-zha-iotperfect-vanne.png --alt ieee recovery of moes PF-PM02D-TYZ zigbee 3.0 1/4 turn valve controller --img width="940" height="493" %}

#### step 3 Creation File

Go to the **config/** folder and create a **custom_zha_quirks/** folder

#### step 4 Creation of custom file

Creates a **ts601_switch.py** file in the **custom_zha_quirks/** folder

#### step 5 Python code

**paste this code inside:**

{% highlight py %}
"""Tuya DP based switches."""
from zigpy.profiles import zha
from zigpy.zcl.clusters.general import Basic, GreenPowerProxy, Groups, Ota, Scenes, Time

from zhaquirks.const import (
    DEVICE_TYPE,
    ENDPOINTS,
    INPUT_CLUSTERS,
    MODELS_INFO,
    OUTPUT_CLUSTERS,
    PROFILE_ID,
)
from zhaquirks.tuya import TuyaSwitch
from zhaquirks.tuya.mcu import (
    MoesSwitchManufCluster,
    TuyaOnOff,
    TuyaOnOffManufCluster,
    TuyaOnOffNM,
)

class TuyaSingleSwitch_GP(TuyaSwitch):
    """Tuya single channel switch with GreenPowerProxy cluster device."""

    signature = {
        MODELS_INFO: [
            ("_TZE200_d0ypnbvn", "TS0601"),  # reported in #1335
            ("_TZE200_gbagoilo", "TS0601"),  # reported in #1634
        ],
        ENDPOINTS: {
            # <SimpleDescriptor endpoint=1 profile=260 device_type=51 device_version=1
            # input_clusters=[0, 4, 5, 61184]
            # output_clusters=[10, 25]>
            1: {
                PROFILE_ID: zha.PROFILE_ID,
                DEVICE_TYPE: zha.DeviceType.SMART_PLUG,
                INPUT_CLUSTERS: [
                    Basic.cluster_id,
                    Groups.cluster_id,
                    Scenes.cluster_id,
                    TuyaOnOffManufCluster.cluster_id,
                ],
                OUTPUT_CLUSTERS: [Time.cluster_id, Ota.cluster_id],
            },
            # <SimpleDescriptor endpoint=242 profile=41440 device_type=97
            # input_clusters=[]
            # output_clusters=[33]
            242: {
                PROFILE_ID: 41440,
                DEVICE_TYPE: 97,
                INPUT_CLUSTERS: [],
                OUTPUT_CLUSTERS: [GreenPowerProxy.cluster_id],
            },
        },
    }

    replacement = {
        ENDPOINTS: {
            1: {
                DEVICE_TYPE: zha.DeviceType.ON_OFF_LIGHT,
                INPUT_CLUSTERS: [
                    Basic.cluster_id,
                    Groups.cluster_id,
                    Scenes.cluster_id,
                    MoesSwitchManufCluster,
                    TuyaOnOffNM,
                ],
                OUTPUT_CLUSTERS: [Time.cluster_id, Ota.cluster_id],
            },
            242: {
                PROFILE_ID: 41440,
                DEVICE_TYPE: 97,
                INPUT_CLUSTERS: [],
                OUTPUT_CLUSTERS: [GreenPowerProxy.cluster_id],
            },
        }
    }
{% endhighlight %}

#### step 6 Adaptation configuration.yaml

then go to the **configuration.yaml** of Home Assistant and paste the code below, replacing **ieee-address** with the ieee address retrieved previously.

{% highlight yaml %}
zha:
  custom_quirks_path: /config/custom_zha_quirks/
  device_config:
    ieee-adress-1: # example: a4:c1:38:f1:d1:3b:d2:74-1 format: {ieee}-{endpoint_id} 
      type: "switch"
{% endhighlight %}

This piece of code allows you to take into account a customization file for modules under zha. **The configuration in switch mode is implemented but is not obligatory**, it is there to correct the integration which will put an on/off function in light mode and not switch by default.

#### Last step

**restarts Home assistant**

And here is the result once the manipulation is carried out, the {{ page.ref }} will be recognized with the Switch command. However, you will not have access to the quality of the link in the Zigbee mesh.

> It's not perfect but it will do the job.

{% picture posts/{{ page.guid }}/vanne-iotperfect-pf-pm02D-tyz-fonctionnel-zha.png --alt operation result of moes PF-PM02D-TYZ zigbee 3.0 1/4 turn valve controller in zha --img width="940" height="493" %}

## Inclusion in Zigbee2mqtt

As always the valve is recognized under **Zigbee2mqtt** and this is a very good thing because Z2M **works under Home Assistant, Jeedom, Openhab, Majordomo and even Gladys.**

{% picture posts/{{ page.guid }}/integration-vanne-zigbee-intelligente-PF-PM02D-TYZ-zigbee2mqtt.png --alt integration of moes PF-PM02D-TYZ zigbee 3.0 1/4 turn valve controller into zigbee2mqtt --img width="940" height="39" %}

{% picture posts/{{ page.guid }}/integration-vanne-zigbee-intelligente-PF-PM02D-TYZ-zigbee2mqtt-a-propos.png --alt moes PF-PM02D-TYZ zigbee 3.0 1/4 turn valve controller information in zigbee2mqtt about --img width="940" height="644" %}

Unfortunately this module (for the price) only reports the On/Off control and the quality of the link, being connected to the **sector it will act as a router**.

{% picture posts/{{ page.guid }}/integration-vanne-zigbee-intelligente-PF-PM02D-TYZ-zigbee2mqtt-a-expose.png --alt moes PF-PM02D-TYZ zigbee 3.0 1/4 turn valve controller information in zigbee2mqtt exposes --img width="940" height="193" %}

{% picture posts/{{ page.guid }}/integration-vanne-zigbee-intelligente-PF-PM02D-TYZ-home-assistant-z2m.png --alt rendering of moes PF-PM02D-TYZ zigbee 3.0 1/4 turn valve controller in Home assistant with zigbee2mqtt --img width="940" height="514" %}

## Situation of {{ page.ref }}

I wanted to test on a water inlet valve located in the basement. This valve is a 1/4 turn, perfect, **but it opens with difficulty.** The installation was carried out without problem. I was surprised that this module managed to open it, this is indeed the case, as a reminder the **opening force is 30-60kg/cm.** On the other hand the **fixing support is insufficient **, you will notice in the photo that the module has rotated and has not remained in place.
**In this case it will not take long to shoot the valve {{ page.ref }}**

{% picture posts/{{ page.guid }}/mouvement-tete-vanne-robinet-hard-intelligent-valve-PF-PM02D-TYZ.png --alt rendering of moes PF-PM02D-TYZ zigbee 3.0 1/4 turn valve controller on hard to open faucet --img width="940" height="529" %}

## Characteristics {{ page.ref }}

{% picture posts/{{ page.guid }}/dimension-controlleur-vanne-zigbee-pf-pm02d-tyz.png --alt dimension of zigbee gas or water valve controller moes PF-PM02D-TYZ tuya --img width="600" height="600" %}

|Temperature|-10-65|
|Humidity|<95%|
|Supply voltage|12 V/1A|
|Valve pressure|0.6 MPa|
|Torque|**30-60kg.cm**|
|Opening/closing time|5-10s|
|Valve Specifications|1", 1.25".|
|Application|1/4 turn valve - butterfly valve|

**Box contents:**

- 1pcs Water/Gas Valve Controller
- 2 piece mounting bracket
- Allen screw M6*30 2 pieces
- 1 inch rubber ring 1pcs
- 1pcs DC adapter

## Documents {{ page.ref }}

{% include doclink.html pdf="ZV-QY-US-EN English Manual.pdf" title="installation guide for moes zigbee gas or water valve controller PF-PM02D-TYZ" %}

## **The + of the product** {{ page.ref }}
{: .blue}

- manufacturing quality
- opening force
- A successful design
- router mode


## **The - of the product** {{ page.ref }}
{: .red}

- The price (around €37)
- mains power required
- no batteries
- Incompatible with ZHA*
- Limited compatibility
- the number of functions available

{% include product-embed.html guid="2176" %}

## Conclusion

The Product is well finished, simple and effective, the opening is powerful but the **insufficient mounting support for the opening power**, the head has difficulty staying in place on taps with difficult openings. So if you have a **power supply nearby** and your tap **opens without forcing too much** then this module is for you, otherwise pass on.