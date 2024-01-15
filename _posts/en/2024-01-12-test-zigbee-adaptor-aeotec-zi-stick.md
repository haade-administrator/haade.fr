---
guid: 104
title: "Aeotec finally releases its Zigbee controller"
description: "that's it Aeotec is getting into zigbee, the famous brand known for its quality modules is finally releasing a zigbee controller, the zi-stick"
ref: "zi-stick ZGA008"
layout: post
author: Nico
date: 2024-01-12 11:24
last_modified_at: 
categories: [Tests, Zigbee]
tags: []
image: 'test-dongle-zigbee-matter-thread-aeotec-mini-zi-stick-adapter-ZGA008.png'
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
rating: 5.0 
sourcelink:
  - https://aeotec.com/products/aeotec-z-stick-zigbee/
  - https://aeotec.freshdesk.com/support/solutions/articles/6000261821
---

Ah **Finally Aeotec** releases its Zigbee 3.0 compatible dongle, this manufacturer of quality modules has decided to market a zigbee usb adapter **{{ page.ref }}** to the Silabs protocol with a Chipset almost similar to Skyconnect or Zbdongle-e. **But it has the distinction of being the smallest efficient dongle on the market**.
You are of course even smaller than the [Skyconnect provided by Home Assistant](https://www.home-assistant.io/skyconnect/){: target="_blank"}.

{% include product-embed.html guid="2181" %}

{% picture posts/{{ page.guid }}/presentation-zi-stick-ZGA008-aeotec-dongle-zigbee.png --alt presentation of the aeotec zi-stick dongle ZGA008 mini zigbee 3.0 adapter --img width="940" height="529" %}

## Unboxing

Nothing could be simpler: a beautiful blue box in the colors of the Aeotec brand** contains this micro zigbee dongle, it is carefully protected in a white box. Inside you will find instructions and a safety sheet.

> nothing more, nothing less.
 
{% picture posts/{{ page.guid }}/deballage-dongle-aeotect-zi-stick-zigbee-3-ZGA008.png --alt unboxing aeotec zi-stick dongle ZGA008 mini zigbee 3.0 adapter --img width="940" height="529" %}

**The {{ page.ref }} is currently the smallest zigbee dongle on the market**, even smaller than the skyconnect, it has a white envelope with a flat face and a rounded back, very good quality manufacturing.

{% picture posts/{{ page.guid }}/rendu-taille-adaptateur-aeotec-zi-stick-dongle-zigbee.png --alt rendering of aeotec dongle zi-stick ZGA008 handheld mini zigbee 3.0 adapter --img width="940" height="529" %}

**And a little photo of the back of the adapter {{ page.ref }}**

{% picture posts/{{ page.guid }}/face-arriere-arrondie-dongle-aeotec-zi-stick-zga008.png --alt rendering of the rounded back of the aeotec zi-stick dongle ZGA008 handheld mini zigbee 3.0 adapter --img width="940" height="529" %}

## Integration into Zigbee2mqtt

the integration of the Aeotec dongle {{ page.ref }} was done without any problems in zigbee2mqtt, **but there is still an error,** z2m creates 2 bridges of the dongle in the app, which is strange but not redundant.

{% picture posts/{{ page.guid }}/integration-vue-creation-2-bridge-aeotec-zi-stick-zigbee2mqtt-bridge.png --alt creation of two zi-stick bridges in zigbee2mqtt --img width="940" height="57" %}

**let me explain:**
- the first bridge raises the connection sensor with v12 firmware
- the second shows all the operating functions of the dongle and a firmware different from the previous bridge.

**View of bridge 1 created**

{% picture posts/{{ page.guid }}/integration-aeotec-zi-stick-zigbee2mqtt-bridge1.png --alt view of bridge 1 created in zigbee2mqtt of the zi-stick in zigbee2mqtt --img width="940" height="704" %}

> Weird.

**View of bridge 2 created**

{% picture posts/{{ page.guid }}/integration-aeotec-zi-stick-zigbee2mqtt-bridge2.png --alt view of bridge 2 created in zigbee2mqtt of the zi-stick in zigbee2mqtt --img width="940" height="487" %}

**However, the integration of the modules is done without problems**, so it is usable.

![Inclusion of a module with the zi-stick aeotec and zigbee2mqtt]({{ site.baseurl }}/assets/images/posts/104/inclusion-module-zigbee-dans-zigbee2mqtt-zi-stic-aeotec.webp{{ cachebuster }}){: width="600" height="173"}{: target="_blank"}

> This error comes from zigbee2mqtt but I think it could come directly from the firmware injected into the key, an error is possible.

{% include product-embed.html guid="2181" %}

## Integration into ZHA

Integration **in ZHA poses no problem** you simply need to select the destination of the ```/dev/ttyUSB0``` key and the rest is done automatically.

{% picture posts/{{ page.guid }}/integration-aeotec-zi-stick-zha-home-assistant.png --alt integration in zha of zi-stick in zigbee2mqtt --img width="940" height="658" %}

**Integrating a module is done without any difficulty** the Aeotec key {{ page.ref }} and ZHA do the job.

{% picture posts/{{ page.guid }}/resultat-appairage-module-zi-stick-zha-aeotec.png --alt pairing in zha of a zigbee module with the zi-stick in zigbee2mqtt --img width="422" height="494" %}

> You will be able to see by viewing the animated gif that **the integration of the key in ZHA does not pose any resistance**.

![Integration of the aeotec zi-stick dongle into ZHA home assistant]({{ site.baseurl }}/assets/images/posts/104/integration-dongle-zi-stick-aeotec-zha-home-assistant.webp{{ cachebuster }}){: width="600" height="482"}{: target="_blank"}

## Technical characteristics {{ page.ref }}

|Name|Zi-Stick|
|Model Number|ZGA008|
|Chipset|EFR32MG21A020|
|Product Weight|3.5 g|
|Total Package Weight|21.5 g|
|Product Dimensions|**37 x 17 x 8.5 mm**|
|Package Dimensions|50 x 65 x 20 mm|
|Zigbee Chip|EFR32MG21|
|Zigbee Version|Zigbee 3.0|
|Zigbee Frequency|2.4 GHz|
|Other protocols|Can be updated to a Thread Stick through Firmware Update to control Thread Matter-based devices.|
|Power Supply|USB DC 4.75V to 5.25V|
|Sensitivity of the RF receiver TX Power|+20 dBm|
|RX sensitivity|-99 dBm|
|Recommended host current|50mA|
|Known compatibilities|Tested to be compatible with Raspberry Pi / Orange Pi / BeagleBone<br />Tested to be compatible with Windows 10/11 OS<br />Tested to be compatible with Linux OS<br />Tested to be compatible with OSX OS|
|Operating Temperature|0°C to 40°C / 40°F to 104°F|
|Storage Temperature|-20 C to 70 C / -4°F to 158°F|
|Operating Distance|200m max distance (open air)|

## **product advantages** {{ page.ref }}
{: .blue}

- the **price** less than €30
- zigbee 3.0 compatible
- Z2M compatible
- ZHA home assistant compatible
- openhab compatible
- the size


## **the - of the product** {{ page.ref }}
{: .red}

- No information regarding firmware update
- perfectible integration in Zigbee2mqtt
- **limited compatibility**

{% include product-embed.html guid="2181" %}

## Conclusion

**Here is a dongle that looks great**, Aeotec stands out for the quality of its products and the {{ page.ref }} adapter is one of them. *The firmware update is not yet available* but there is no doubt that it will be the case in the coming weeks and I will keep you informed. If the size criterion is important to you then this dongle will hold a place of first choice.
> Or **you prefer to donate money to the nabu casa foundation by [investing in Home assistant's skyconnect](https://www.home-assistant.io/skyconnect/){: target="_blank"}** which has similar characteristics for a similar price. 