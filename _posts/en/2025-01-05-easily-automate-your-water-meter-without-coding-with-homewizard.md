---
guid: 149
title: "Easily automate your water meter with Homewizard"
description: "A highly requested topic, reading your water consumption at any time is one of the most requested instances, homewizard has created a wifi module capable of adapting to all European meters"
ref: "HWE-WTR-23"
layout: post
authors: [Nico]
date: 2025-01-05 14:00
last_modified_at: 
categories: [Tests, Home-Assistant]
tags: []
video: 
image: 'homewizard-watermeter-hwe-wtr-13-home-automation-compatible-home-assistant.png'
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
rating: 4.8 
sourcelink:
  - https://www.homewizard.com/
---

This is a topic that will interest more than one, **but be careful it will not be a miracle!** but I propose you a new module manufactured by a Dutch company **Homewizard**, the **watermeter {{ page.ref }}**. It is a product that works in wifi and that records the water consumption thanks to a magnetic receiver. It is not a big novelty especially since [Pieter Brinckman has already made a Diy module based on esp32](https://www.pieterbrinkman.com/2022/02/02/build-a-cheap-water-usage-sensor-using-esphome-home-assistant-and-a-proximity-sensor/){: target="_blank"} which will **cost you less**.

{% include product-embed.html image="homewizard-watermeter-hwe-wtr-13.png" title="Watermeter HWE-WTR-23" brand="Homewizard" description="Instantaneous water consumption measurement, Wi-Fi connection, adaptable to water meters on the European market and all compatible with Home Assistant" customlink="https://partner.homewizard.com/c/?si=18407&li=1795784&wi=405781&dl=fr-be%2Fboutique%2Fcompteur-deau-wi-fi%2F" price="49.95" currency="€" %}

{%- include alert.html type="info" text="Haade.fr is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means to earn fees by linking to Amazon.com and affiliated sites." %}

> Super strong Homewizard {{ page.ref }} packaging.

{% picture posts/{{ page.guid }}/emballage-homewizard-watermeter.png --alt Homewizard Watermeter Solid Packaging --img width="940" height="529" %}

## Unpacking

The packaging is very well done, the outer carton is resistant in short you will not encounter any problems during delivery. Inside we will find a set of:

- screws
- 3 adapters for different brands of meters
- an installation guide especially on meters
- a usb-c socket
- ​​a 3 meter usb cable
- and of course a reading module {{ page.ref }}

{% picture posts/{{ page.guid }}/contenu-homewizard-watermeter-adaptateur-notice.png --alt Contents Homewizard Watermeter HWE-WTR-23 --img width="940" height="529" %}

{% picture posts/{{ page.guid }}/contenu-emballage-watermeter.png --alt Contents of the Homewizard Watermeter HWE-WTR-23 box --img width="828" height="506" %}

### Good to know

- On **mains** the Homewizardd watermeter {{ page.ref }} reads **data instantly**.
- On **Battery** The Homewizard watermeter module {{ page.ref }} **reads data 4 times a day**.

Held in the hand, so you can see the dimensions of the module, and you will find an access hatch for the connection by 123A batteries

{% picture posts/{{ page.guid }}/homewizard-watermeter-size-battery-compartiment.png --alt Homewizard Watermeter HWE-WTR-23 size and battery compartment overview --img width="940" height="529" %}

{% include product-embed.html image="amazon-basics-cr123A.png" title="Amazon Basics CR123A" brand="Amazon" description="CR123A lithium batteries ideal for home automation devices and photos" amazlink="4fKszeD" %}

Below are some pictures of the {{ page.ref }} to give you an idea of ​​the product, it remains basic and does the essentials.

> I would like to **congratulate Homewizard** for providing a 4 meter long USB-C cable.

{% picture posts/{{ page.guid }}/captures-ecran-homewizard-watermeter-pro.png --alt overview of the Homewizard Watermeter HWE-WTR-23 --img width="940" height="529" %}

The Homewizard watermeter {{ page.ref }} costs a **little less than €50** but it is compatible with **all European meters** thanks to the adapters provided with it and that is a real plus.

{% picture posts/{{ page.guid }}/homewizard-watermeter-mounting.png --alt Example of mounting the Homewizard Watermeter on a water meter --img width="282" height="300" %}

## Installation of the Homewizard {{ page.ref }}

### Homewizard {{ page.ref }} and Remote Reading

{%- include alert.html type="warning" text="First of all I would like to point out that my water meter is equipped with a telemeter which prevents the installation of such a module. For the sake of the test I removed the itron Everblu Cyble transmitter." %}

Well I won't hide it from you, this type of product has a big drawback, it can only be installed on a meter **without a pulse transmitter**. Yes, pulse meters are installed and work with magnetic transmitters/receivers.

> If you wish, you can easily remove the pulse meter; for me it's an itron.

On the other hand, **this one reads continuously**, removing it and turning the water meter **will create a difference,** and the day the water company changes the pulse transmitter, they will take a manual reading of the meter and the **bill could be steep.**

{% picture posts/{{ page.guid }}/evertron-cyble-emetteur-compteur.jpg --alt itron everblu cyble pulse transmitter --img width="400" height="400" %}

Some time ago, I wrote a procedure to measure water consumption on an **Itron everblu cyble transmitter**, using a 433mHz receiver, *good reading*.

[Domotize the Itron water meter with esp and cc1101 in ha for 10€]({% post_url fr/2022-12-21-domotiser-compteur-eau-itron-everblu-cyble %}){: target="_blank"}

### Setting up the {{ page.ref }}

There again nothing more to say, the installation was carried out without any problems, just follow the instructions.

{% picture posts/{{ page.guid }}/installation-adaptateur-homewizard-watermeter-itron-compteur.png --alt Installing the Itron Meter Adapter for the Homewizard Watermeter HWE-WTR-23 --img width="940" height="529" %}

> Finally, you just have to **clip the module onto the adapter** and that's it.

{% picture posts/{{ page.guid }}/installation-homewizard-watermeter-itron-compteur.png --alt Installation for Itron meter of the Homewizard Watermeter HWE-WTR-23 --img width="940" height="529" %}

> From there, all you have to do is connect the {{ page.ref }} to your home's Wi-Fi network and calibrate the whole thing

#### Which meters are compatible

The list is long and that's great, find the maximum amount of information below.

- Zenner
- Sensus
- **Itron**
- Actaris,
- Hidroconta
- Schlumberger
- Elster
- Honeywell
- Maddalena MVM
- DH Metering and Diehl Metering in 2 minutes. Just insert the water meter into the adapter, connect it to Wi-Fi and that's it.

|![Installation of the homewizard watermeter wifi water consumption measurement compatible with home assistant and Zenner meter]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/zenner.webp{{ cachebuster }}){: width="300" height="220" class="lazyload pictaninpost"}|<b>Zenner</b><br>Zenner water meters are compatible. Simply attach bracket 2 and two screws (PS4/16).|
|![Installation of the homewizard watermeter wifi water consumption measurement compatible with home assistant and Sensus meter]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/sensus.webp{{ cachebuster }}){: width="300" height="220" class="lazyload pictaninpost"}|<b>Sensus (1)</b><br>There are two separate Sensus meters with different mountings. Check the Sensus meter you have carefully to ensure that the bracket is properly secured.<br>Sensus (1) water meters are compatible and are secured using bracket 2 and two screws (PS2.6/8).|
|![Installation of the homewizard watermeter wifi water consumption measurement compatible with home assistant and Sensus meter variant 2]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/sensus-2.webp{{ cachebuster }}){: width="300" height="220" class="lazyload pictaninpost"}|<b>Sensus (2)</b><br>Check the Sensus meter in your possession carefully, so that you can fix the bracket properly.<br>The Sensus (2) water meters are compatible and are fixed using bracket 1 and two screws (PS2.6/8). If the cover of this Sensus water meter is in the way when installing the bracket, you can turn the inside of the water meter (it is separate from the outer casing).|
|![Installation of the homewizard watermeter wifi water consumption measurement compatible with home assistant and Itron, Actaris, Hidroconta and Schlumberger meters]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/itron-actaris-hidroconta-schlumberger.webp{{ cachebuster }}){: width="300" height="219" class="lazyload pictaninpost"}|<b>Itron, Actaris, Hidroconta and Schlumberger</b><br>Most meters have a cap on the tip of the screw that can be broken off. Refer to the image for an example of the three different caps. This water meter can also be black or blue. Itron, Actaris, Hidroconta and Schlumberger water meters are compatible and are secured using bracket 1 and a screw (M4/12).|
|![Installation of the homewizard watermeter wifi water consumption measurement compatible with home assistant and Itron, Actaris, Hidroconta and Schlumberger meters variant 2]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/itron-actaris-hidroconta-schlumberger-2.webp{{ cachebuster }}){: width="300" height="231" class="lazyload pictaninpost"}|<b>Itron, Actaris, Hidroconta et Schlumberger</b>|                        
|![Installation of the homewizard watermeter wifi water consumption measurement compatible with home assistant and Elsther or Honeywell meter]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/elsther-honeywell.webp{{ cachebuster }}){: width="300" height="198" class="lazyload pictaninpost"}|<b>Elsther, Honeywell</b><br>Elster and Honeywell water meters are compatible and are fixed using bracket 1 and two screws (PS4/16).|
|![Installation of the homewizard watermeter wifi water consumption measurement compatible with home assistant and Diehl Metering meter]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/diehl-metering.webp{{ cachebuster }}){: width="300" height="210" class="lazyload pictaninpost"}|<b>Diehl Metering</b><br>Diehl Metering water meters do not have screw holes, instead you can snap the bracket 3 into the water meter.|
|![Installation of the homewizard watermeter wifi water consumption measurement compatible with home assistant and Dh Metering meter]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/dh-metering.webp{{ cachebuster }}){: width="300" height="200" class="lazyload pictaninpost"}|<b>Dh Metering</b><br>DH Metering water meters are compatible and are fixed using bracket 2 and two screws (M2.5/12).|       
|![Installation of the homewizard watermeter wifi water consumption measurement compatible with home assistant and Maddalena MVM meter]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/maddalena-mvm.webp{{ cachebuster }}){: width="300" height="210" class="lazyload pictaninpost"}|<b>Maddalena MVM</b><br>On Maddalena MVM water meters, the bracket must be placed upside down. You must hook the bracket on the left side of the water meter and screw it on the right side (with a screw, P2.6/8). Make sure that your analogue water meter has this option.| 

{% include product-embed.html image="homewizard-watermeter-hwe-wtr-13.png" title="Watermeter HWE-WTR-23" brand="Homewizard" description="Instantaneous water consumption measurement, Wi-Fi connection, adaptable to water meters on the European market and all compatible with Home Assistant" customlink="https://partner.homewizard.com/c/?si=18407&li=1795784&wi=405781&dl=fr-be%2Fboutique%2Fcompteur-deau-wi-fi%2F" price="49.95" currency="€" %}

### Installation video {{ page.ref }}

Official installation video

{% include videoPlayer.html youtubeId="MY7T5YkCSI4" %}

### First settings via the official application

If you want to download the Homewizard application for Apple or Android, no worries, you just have to scan the Qrcode below.

{% include qrlink.html qrlink="https://setup.homewizard.com" text="download the Homewizard app directly for Android or Apple" realtextlink="Homewizard Apps for Smartphone" %}

Below I made an animated gif of the first connection to the Official application, through the wifi settings, and finally the calibration of the module.

After creating the account, follow the steps, nothing complicated:
- connect the smartphone to the module via the **WatermeterSetup** connection with the **Setuppass** code
- then switch to home wifi
- press the button to pair the module
- updates are done immediately if necessary
- finally perform a calibration
- option 1: you can add a rate per m3
- option 2: Homewizard offers an energy+ subscription for 0.99€/month **which is useless if you go through Home Assistant**

![First steps with the Homewizard application for smartphone]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/application-mobile-homewizard-watermeter-parametrage.webp{{ cachebuster }}){: width="244" height="529" class="lazyload pictaninpost"}

> At this point the installation should be operational.

### Let's integrate the {{ page.ref }} into Home Assistant

More than a year ago **Homewizard officially announced its collaboration with Home Assistant** by providing a near-perfect integration of its modules, and this is good news.

Homewizard officially announces [support for its products in Home Assistant](https://www.homewizard.com/nl/blog/works-with-home-assistant/){: target="_blank"} what good news!

#### API activation and functions

**First step:** in order to integrate Homewizard products into home assistant, you will first need to **activate the API in the Homewizard Smartphone application**, to do this go to: **cogwheels > Meters > Click on the water meter > Meter settings and activate**.

{% picture posts/{{ page.guid }}/Découverte-homewizard-home-assistant.png --alt Discovery of Homewizard brand products in home assistant thanks to an alliance --img width="345" height="265" %}

Then in homeassistant you will just have to go to the **devices and services** tab and in the discoveries you will have **Homewizard**, Magical 🎉

![Homewizard watermeter integration in Home Assistant with unfailing simplicity]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/integration-homewizard-watermeter-hwe-wtr-23-home-assistant.webp{{ cachebuster }}){: width="940" height="540" class="lazyload pictaninpost"}

> As a reminder, don't forget to activate the API function in the Homewizard application, otherwise you will be unable to associate the products with Home Assistant.

{% picture posts/{{ page.guid }}/activation-api-et-fonction-homewizard-watermeter-home-assistant.png --alt Enable API in Homewizard app for Home Assistant and functions available in HA --img width="940" height="576" %}

**Available functions**

1. **total reading** of water consumption (by default in m3 I transformed into liters but the value in the official application remains in m3)
2. **instantaneous reading** of water consumption per minute
3. Allows you to **choose to send consumption information to the cloud or to operate the premises completely**, TOP.

#### Overview in operation

After a few hours of operation on mains power, I made an animated gif of the readings in home assistant, it's more meaningful

![Animation of the different functions supported in Home Assistant of the water meter water consumption reading module by Homewizard]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/information-controlable-dans-home-assistant-homewizard-watermeter.webp{{ cachebuster }}){: width="940" height="576" class="lazyload pictaninpost"}

Consumption monitoring, especially **integration into the home assistant energy dashboard is compatible** so you can monitor consumption on a graph, and you can set a rate.

{% picture posts/{{ page.guid }}/tableau-energie-releve-consommation-eau-home-assistant-Homewizard-watermeter.png --alt Integration of the homewizard watermeter HWE-WTR-23 module into the home assistant energy table --img width="940" height="492" %}

#### Very interesting pure local function

HomeWizard allows you to configure the operation of the watermeter {{ page.ref }} in **cloud mode or in pure local**, the image below shows you in parallel with the smartphone application when the cloud connection is activated.

{% picture posts/{{ page.guid }}/homewizard-watermeter-cloud-connection-active-homeassistant.png --alt Activation of the cloud function in home assistant of homewizard watermeter HWE-WTR-23 --img width="940" height="762" %}

Once deactivated you will be able to see that no more data is sent to the Homewizard application **so you will be able to use the Homewizard watermeter (measuring water consumption) {{ page.ref }} completely LOCALLY!!**

{% picture posts/{{ page.guid }}/homewizard-watermeter-cloud-connection-unactive-homeassistant.png --alt Disabling cloud function in home assistant of homewizard watermeter HWE-WTR-23 --img width="940" height="762" %}

### Official Online Notice

Finally, you can find below the link to the **complete online notice of the Homewizard watermeter {{ page.ref }}**

[Official Homewizard Watermeter Notice](https://helpdesk.homewizard.com/en/articles/6287701-does-the-watermeter-work-with-my-analogue-water-meter-and-how-do-i-install-it){: target="_blank"}


## Technical characteristics of the {{ page.ref }}

|Poids|310 g|
|SKU|HWE-WTR-13|
|**Connection**|802.11b/g/n (2.4 GHz) WiFi<br>WPA2 and WPA3 encrypted|
|Power supply|USB-C: Realtime data<br>2x CR123A Battery: **4x per day** measurement history|
|Maximum measurement speed|USB-C: 200 liters per minute<br>**2x CR123A** Battery: 30 liters per minute (1 year)|
|Minimum measurement unit|0.3 liters|
|History|Energy usage history of the past 12 months<br>Extend your energy usage history with an **Energy+** subscription|
|Security|Automatic security updates<br>128bits AES encryption with TLS/SSL|
|External connections|Open API (JSON)|

**Product advantages:**{: .blue}

- Design
- Versatility
- Ease of installation
- **Price (less than €50)**
- Long 3m USB-C cable
- Connectivity (mains or batteries)
- Well-made Smartphone application
- Calibration via the Smartphone application
- **LOCAL** operation option

**Product disadvantages:**{: .red}

- Cannot be used on meters with the remote reading function

{%- include alert.html type="info" text="Haade.fr is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means to earn fees by linking to Amazon.com and affiliated sites." %}

{% include product-embed.html image="homewizard-watermeter-hwe-wtr-13.png" title="Watermeter HWE-WTR-23" brand="Homewizard" description="Instantaneous water consumption measurement, Wi-Fi connection, adaptable to water meters on the European market and all compatible with Home Assistant" customlink="https://partner.homewizard.com/c/?si=18407&li=1795784&wi=405781&dl=fr-be%2Fboutique%2Fcompteur-deau-wi-fi%2F" price="49.95" currency="€" %}

## Conclusion

**Homewizard**, a Dutch company, has signed a versatile product that **will allow you to accurately measure your water consumption** the {{ page.ref }} **is very easy to install** the integration into **Home Assistant is perfect** and this thanks to an agreement between the two companies, the fact of being able to **plug into the mains or battery is a big plus**.
In short, if you want to **automate your water consumption with great precision** and all easily and if your meter is not equipped with a telemetric transmitter/receiver then this product is for you. **It is almost flawless.**

> I remove **0.2 points** for the fact that it cannot be used at the same time as a remote reading transmitter.