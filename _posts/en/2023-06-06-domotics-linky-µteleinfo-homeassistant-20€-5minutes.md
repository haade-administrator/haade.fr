---
guid: 68
title: "Automatizes any edf meter for 20€ in 5 minutes"
description: "Reads the teleinfo in 5 minutes in home assistant on any edf meter (old and linky) with a teleinfo v3.0 micro key by charles Hallard at 20€, via the mqtt and teleinfo2mqtt modules"
layout: post
author: Nico
date: 2023-06-04 21:01
last_modified_at: 2023-06-07 11:17
categories: [Haade-lab, Tests]
tags: []
image: 'micro-teleinfo-v3-homeassistant-teleinfo2mqtt-20€-5minutes.png'
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
  - https://www.tindie.com/stores/hallard/
  - https://github.com/hallard/uTeleinfo/tree/main
  - https://community.ch2i.eu/category/9/microt%C3%A9l%C3%A9info
---

There are **many ways** to retrieve the teleinfo from the Edf meter, one of the latest modules **is the Lixee** but it has the disadvantage of **only being compatible** with some counters. I'm going to show you how to bring up the teleinfo in home assistant for 20€ without wifi esp32/8266 modules, with a **micro usb module** manufactured by Charles Hallard the latest is the **micro teleinfo v3.0, named also µteleinfo**.

## Prerequisites
- homeassistant OS
- a [micro Teleinfo v3.0 by Charles Hallard](https://www.tindie.com/products/hallard/micro-teleinfo-v30/){: target="_blank"} usb
- communication wire
- an EDF meter

I was able to make this installation easily for a friend who is going to automate his home by mounting a raspberry pi 4 in a din rail box directly in the electrical panel near the EDF meter.

> this installation is compatible with all EDF meters on the market.

### Advantage of this facility:
{: .blue}
- Easy to put in place
- the price

### Inconvenience:
{: .red}
- proximity between the home assistant module and the meter
- monopolizes a usb port
- absorbs a little power from the home automation box about 3w

**Let's talk a bit about the installation:** this tutorial allows you to send information via the *mqtt* service. You will need to install the **official mosquitto** add-on module, then I will show you how to install the **teleinfo2mqtt add-on module** developed by *fmartinou* this one is functional with all usb TICs on the market, so with the microphone teleinfo V3 by Charles Hallard.

## Top Chrono installation in (5 minutes)

> To carry out this installation, don't hesitate to use the **my.homeassistant.io** links below.

### Mosquito MQTT module

**1** Installs MQTT add-on, Mosquitto

[settings > Add-ons > Add-ons stores] or click on the link below

{%include homeassistantlink.html supervisor_addon="core_mosquitto" %}

**2** Then create a **user account** in home assistant for mosquitto, in general I put in usernames **mqtt** easier to recognize 😏

{% include homeassistantlink.html users="" %}

**3** Go back to Mosquitto configuration

{%include homeassistantlink.html supervisor_addon="core_mosquitto/config" %}

and add these lines in the logins tab as in the image capture below.

{% picture posts/{{page.guid}}/parametrage-user-core-mosquitto-home-assistant.png --alt user settings in core mosquitto mqtt home assistant for micro teleinfo v3.0 --img width="940" height="279" %}

{% highlight shell %}
- username: "user login"
  password: "user password"
{% endhighlight %}

**4 Start Mosquitto**

take a look at the info log to see how well the module is working.

{%include homeassistantlink.html supervisor_addon="core_mosquitto/logs" %}

### Téléinfo2mqtt module

[teleinfo2mqtt module github link](https://github.com/fmartinou/teleinfo2mqtt){: target="_blank"}

The advantage of this module and its simplicity, [accompanied by careful documentation](https://fmartinou.github.io/teleinfo2mqtt/#/introduction/){: target="_blank"}. It also has the advantage of being **stable**.

**1** Installs the teleinfo2mqtt add-on

start by adding fmartinou's external repository **https://github.com/fmartinou/hassio-addons**, or click directly on the link below:

{% include homeassistantlink.html supervisor_addon_repository="https://github.com/fmartinou/hassio-addons" %}

{% picture posts/{{page.guid}}/fmartinou-repository-addons-haos.png --alt fmartinou home assistant add-ons directory --img width="851" height="140" %}

**2** Once the installation is done, the module will have created a **device named teleinfo2mqtt** which also allows you to control updates.

{% picture posts/{{page.guid}}/fmartinou-teleinfo-appareil-teleinfo2mqtt.png --alt fmartinou teleinfo2mqtt device in home assistant --img width="940" height="721" %}

**3** Connect Charles Hallard's **micro teleinfo v3.0** key to the raspberry and restart homeassistant at the top right

{% include homeassistantlink.html settings="" %}

**4** Parameter **teleinfo2mqtt**

{% include homeassistantlink.html supervisor_addon="9afc8f77_teleinfo2mqtt/config" %}

Connect the teleinfo module to your home automation box
**restart homeassistant**
- [go to settings > system > hardware] and click on **all hardware**
- retrieves the exact link of the key (see the capture below)

{% picture posts/{{page.guid}}/lien-serie-usb-micro-teleinfo-v3-charles-hallard.png --alt recovery of the serial link of Charles Hallard teleinfo v3 micro key in home assistant --img width="511" height="945" %}

Then go back to téléinfo2mqtt and parameter téléinfo2mqtt, **to finish start the module**.

{% picture posts/{{page.guid}}/parametrage-teleinfo2mqtt.png --alt configuration of the teleinfo2mqtt module in home assistant --img width="940" height="832" %}

Once started and the installation complete, by this I mean plugged into the EDF meter, the tic frames will go up in mosquitto. You can also **see the log info** in the info tab of the module and see how well everything is working.

{% include homeassistantlink.html supervisor_addon="9afc8f77_teleinfo2mqtt/logs" %}

{% picture posts/{{page.guid}}/remonte-teleinfo2mqtt-dans-mosquitto.png --alt feedback of tic info in home assistant via mqtt and teleinfo2mqtt --img width="940" height="698" %}

## Raise Power in the Dashboard Home assistant

It is easy to report the total power in the Lovelace dashboard in the form of gauges. Adds a gauge card or gauge in English and adds **the PAPP teleinfo entity**. I have a 12Kv subscription so I made according to my subscription to calibrate the power of the gauge.

{% picture posts/{{page.guid}}/home-assistant-lovelace-gauge-teleinfo-kwh.png --alt PAPP total power setting in Lovelace dashboard of Home assistant --img width="940" height= "674" %}

Do not hesitate to modify the levels according to your electricity subscription.

{% highlight yaml %}
type: gauge
name: Volt
min: 0
max: 12000
severity:
   green: 0
   yellow: 6000
   red: 9000
entity: sensor.teleinfo_XXXXXXXXXXXX_papp
needle: true
{% endhighlight %}

> Here is the final result, I find the visual neat and clear.

{% picture posts/{{page.guid}}/lovelace-teleinfo-papp.png --alt PAPP total power boost in Home assistant Lovelace dashboard --img width="482" height="195" %}

## Energy tab settings

Continue and **click on the link below** then on [Network consumption > add network consumption]

{% include homeassistantlink.html energy="" %}

You should see two lines appear, one for off-peak hour HCHC and one for peak hour HCHP, add both.

{% picture posts/{{page.guid}}/parametrage-energie-teleinfo2mqtt-micro-teleinfo-v3-charles-hallard-home-assistant.png --alt energy settings teleinfo2mqtt micro teleinfo v3 charles hallard home assistant --img width="797" height="756" %}

If you already use the energy tab **click instead** on this link to configure the energy in HA.

{% include homeassistantlink.html config_energy="" %}

> Finally, after about 1 to 2 hours, admire the bargraphs and check the consumption

{% picture posts/{{page.guid}}/capture-energie-micro-teleinfo-v3-charles-hallard.png --alt capture energy tab consumption in home assistant with µteleinfo v3.0 by charles Hallard --img width="940" height="621" %}


## Let's talk about the Micro Téléinfo v3.0 module (uteleinfo)

I [ordered it on the tindie platform](https://www.tindie.com/products/hallard/micro-teleinfo-v30/){: target="_blank"} and received it 3 days later by green letter la post, thank you for this speed, I ordered the final version 3 fully assembled, and delivered **I got it for 21€**.

{% picture posts/{{page.guid}}/presentation-µteleinfo-v3-charles-hallard-integration-home-assistant.png --alt size and presentation of the microphone module, µtéléinfo v3.0 by charles Hallard --img width="940" height="529" %}

**Sizes:**

L 55mm x l 14mm x P 1mm 

**What are the changes in v3**

- R3 replaced by trimer pot to allow adjustment of TIC sensitivity in rare cases
- Separate LEDs for RX / TX
- Gold plated PCB
- Reduced PCB size
- LED added so see TIC Teleinfo signal
- Added red/green TX/RX LEDs
- TIC resistor input set to 220 Ohms
- MOSFET resistor 3.3 KOhms
- Due to a shortage, change of the FT230XS chip to CH9106

Must say that v3.0 of µtéléinfo illuminates, you will not be able to miss the data transfer.
> maybe a bit too bright for my taste.

![Transmission of information led micro Teleinfo v3.0 on meter in home assistant]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/Micro-Teleinfo-v3-charles-hallard-blink.webp{{ cachebuster }}){: width="420" height="282"}{: target="_blank"}

## Conclusion

Here is an example of an installation that is easy to set up to **read the teleinfo on the linky** or any other edf meter on the market. **Charles Hallard** has created an *inexpensive, small and efficient module*. As far as integration is concerned, we tend to use the transfer of info by mqtt frequently, especially if you use Zigbee2mqtt so I find the **téléinfo2mqtt** alternative practical to set up and relatively well done. There are all kinds of teleinfo integrations here in one, **connected to the usb port**.
> So have fun.
