---
guid: 97
title: "Esp32-Korvo The microphone you need !"
description: "Esp32-korvo woover-e is the complete microphone to control home automation by voice in home-assistant thanks to esphome and wifi all for less than €30"
ref: "ESP32-korvo wroover-e"
layout: post
author: Nico
date: 2023-11-25 12:00
last_modified_at: 
categories: [Tests, Home-Assistant]
tags: []
image: 'esp32-korvo-microphone-array-assist-esphome-homeassistant-en.png'
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
  - https://www.home-assistant.io/voice_control/voice_remote_local_assistant/
  - https://www.home-assistant.io/docs/blueprint/
---

Home-assistant announced at the beginning of 2023, **the year of the voice**. By hiring Michael Hansen, nickname **synesthesiam** who is none other than the creator of the software [Rhasspy](https://github.com/rhasspy){: target="_blank"}, the company Nabu Casa is digging this breach in the world of voice control which is so lacking in current assistants.

I have for a long time **tested various microphone arrays** (respeaker 4-micarray and matrix voice), under Rhasspy, **but both have disadvantages**, they do not work without an additional raspberry which serves as host to the microphones. I added an **esp32** to the matrix voice to make it work alone, but the company closed its doors at the beginning of 2023 **leaving for dead** the evolution of the software. At the time of writing this article, no one has developed or taken over the current software.

{% include product-embed.html image="https://ae01.alicdn.com/kf/H986d1437c3244ad5aad6045e7bab4913b/ESP32-Korvo-ESP32-AI-Conseil-de-D-veloppement-Vocal-Tech-Multi-iler-ESP32-WROVER-E-WIFI.jpg_.webp" title="Micro array esp32-korvo" brand="Espressif" description="Array microphone esp32-korvo esp-wroover-e with esphome and home-assistant" affiliate="_DnPsmnt" %}

> it's a shame because the array matrix microphones (voice and creator) are well thought out modules.

Anyway, back to our topic, we are at the end of 2023 I wanted to take an overview of the evolution of [Home Assistant Assist](https://www.home-assistant.io/voice_control/){: target="_blank"} and for that I purchased on [Aliexpress a microphone working with an esp32, the esp32-korvo wroover-e version](https://fr.aliexpress.com/item/1005002803964499.html?aff_fcid=a4c8d236a74a4f56a12872b2dea1489c-1700590474538-09550-_DnPsmnt&tt=CPS_NORMAL&aff_fsk=_DnPsmnt&aff_platform=shareComponent-detail&sk=_DnPsmnt&aff_trace_key=a4c8d236a74a4f56a12872b2dea1489c-1700590474538-09550-_DnPsmnt&terminal_id=0a193726d98146d989b0c2b2ea1c0730&afSmartRedirect=y){: target="_blank"}

## {{ page.ref }} v1.1

To begin with there are **2 versions of the microphone** developed by Espressif, one works with an [ESP32-S3-Korvo-1 v5.0](https://github.com/espressif/esp-skainet/blob/master/docs/en/hw-reference/esp32s3/user-guide-korvo-1.md){: target="_blank"} currently costs **more than €50** and is at hardware version 5.0 , it seems that this version is only equipped with 3 array microphones as for the wroover version and not 6. **The evolution is mainly found in the management of an external battery.**
> This version is rarely resold, at least for the moment.

Then you will easily find the tested version, the {{ page.ref }}, it will only **cost you €22 delivered**.

## What does the {{ page.ref }} offer for this price.

Here I am going to announce a pleasant surprise to you, the [{{ page.ref }}](https://github.com/espressif/esp-skainet/blob/master/docs/en/hw-reference/esp32/user-guide-esp32-korvo-v1.1.md){: target="_blank"} is very complete, so complete that it only lacks a mounting box, but frankly for the price... ** There is only [Espressif](https://www.espressif.com/){: target="_blank"} to carry out this type of promotion.**

The {{ page.ref }}, is an assembly of two cards, the upper card is made up of 12 LEDs from the **ws2812 chipset**, as well as analog buttons (mode, set, rec, play, vol+/-) **and 3 array microphones. You could even add 5 more because the card has pre-soldered slots (see photo).**

**composition of the 6 microphones:**
*Mic_Bias34*
1. Default: NSM0418DT(NeoMEMS);
2. Alternative: MSM261D4030H1AP(MEMSensing Microsystems);

2 x Amic 55mm *Mic_Bias12*

{% picture posts/{{ page.guid }}/esp32-korvo-v1.1-wroover-e-mainboard-add-microphone-array.png --alt additional location esp32-korvo microphone array home assistant --img width ="940" height="529" %}

**PS:** Despite the photos provided on Github, the upper card is identical on the two versions available and manufactured by Espressif.

### What can we find on the bottom map:

{% picture posts/{{ page.guid }}/esp32-korvo-v1.1-wroover-e-mainboard.png --alt special feature of the esp32-korvo wroover-e main board --img width="750" height="635" %}

**There you realize that for the price the menu is very complete:**
- on/off button
- headphone connector
- external HP connector
- micro sd card
- **usb uart**
-usb 5v
- connector for 5v battery


{% include doclink.html pdf="https://dl.espressif.com/dl/schematics/ESP32-KORVO_V1.1_schematics.pdf" title="GPIO esp32-korvo connection diagram" %}

{% picture posts/{{ page.guid }}/esp32-korvo-v1.1-wroover-e-mainboard-add-microphone-array-en-detail.png --alt esp32-korvo-wroover-b in detail --img width="940" height="1057" %}

## Integrate {{ page.ref }} into esphome

### upload of the first firmware

Thanks to the code below you can easily integrate the {{ page.ref }} microphone into esphome and thus use it in home assistant.

{% highlight yaml %}
substitutions:

##### WIFI SETUP #####
###### CHANGE ME START ######
  device_name: "esp32korvo_mic" 
  wifi_ssid: !secret wifi_ssid
  wifi_password: !secret wifi_password
  apikey: !secret enc_key_esp32korvo_mic

##### CHANGE ME END #####

##### DO NOT CHANGE ANYTHING! #####

packages:
  ##### download esp32-korvo for esphome code from Github
  remote_package:
    url: https://github.com/haade-administrator/korvo-esphome
    ref: main
    files: [esp32korvo_esphome.yaml]
    refresh: 300s

##### DO NOT CHANGE ANYTHING! ##### 
{% endhighlight %}

in order to send the code above in UART mode **you will need**:
- connect **2 usb cables** to the two **usb ports**. (the USB power can be powered by a 5v transformer or connected to a powered port on your PC).
- the second usb-uart port must be connected to the pc
- locate the boot button

**Press the boot button without releasing it, then connect the two USB cables, and finally release the boot button**

![Sending esphome firmware to an esp32-korvo]({{ site.baseurl}}/assets/images/posts/{{ page.guid }}/esp32-korvo-esphome-flash-firmware.webp{{ cachebuster }}){: width="940" height="529"}

{%- include alert.html type="info" text="Important! Once the firmware has been sent by UART, it is important to disconnect the esp32-korvo from the mains, <b>once reconnected, press the reset button for 1 second to launch it</b>" %}

### Setting {{ page.ref }} and esphome

In order to configure your new microphone in home-assistant I invite you to click on this link below, and normally a new esphome instance is discovered, all you have to do is click on **configure and restart homeassistant**.

{% include homeassistantlink.html integration="esphome" %}

## Function states of {{ page.ref }}

Here are the available functions:
- Led controls of {{ page.ref }}
- wakeword states
- states of the physical buttons of the {{ page.ref }}
- end of speech detection setting
- firmware status
- choice of pipeline (default homeassistant)
- restart button
- wake word status
- IP adress
- connection status
- and signal status

{% picture posts/{{ page.guid }}/esp32-korvo-esphome-fonctions-disponibles.png --alt available functions of esp32-korvo-wroover-b microphone in esphome --img width="940" height="811" %}

> In the future update an additional light function will be available which will allow you to choose a light setting for the wakeword (off, day, night)

You can sleep and already test these functions, just integrate ```ref: dev``` into the esphome code

{% picture posts/{{ page.guid }}/esp32-korvo-esphome-prochaines-fonctions-disponibles.png --alt next available functions of esp32-korvo-wroover-b microphone in esphome --img width="332" height="491" %}

## Installation Voice assistant

To Install a Local Assistant follow the official home assistant tutorial.

[Install a local Home assistant](https://www.home-assistant.io/voice_control/voice_remote_local_assistant/){: target="_blank"}

In Home Assistant, the Assist pipelines are made up of various components that together form a voice assistant.

For each component you can choose from different options. There is a speech-to-text and text-to-speech option that **runs entirely local**.

The speech-to-text option is **Whisper**. It’s an open source AI model that supports various languages. We use a forked version called **faster-whisper**. On a **Raspberry Pi 4, it takes around 8 seconds to process incoming voice commands**. On an Intel NUC it is done in under a second.

> For text-to-speech we have developed Piper. Piper is a fast, local neural text-to-speech system that sounds great and is optimized for the Raspberry Pi 4. It supports many languages. On a Raspberry Pi, using medium quality models, it can generate 1.6s of voice in a second.

> The installation of whisper, piper and openwakeword on HA and raspberrypi 4 is **restrictive and heavy** for the moment this should evolve in the coming months.

## Characteristics of {{ page.ref }}

|**Key Componenet**|**Description**|
|ESP32-WROVER-E|This ESP32 module contains the latest ESP32-D0WD-V3, a 16 MB flash and a 8 MB PSRAM for flexible data storage, featuring Wi-Fi / BT connectivity and data processing capability.|
|Power Regulator|5V-to-3.3V regulator.|
|Power Switch|On: The board is powered on; Off: The board is powered off.|
|Battery Port|Connect a battery.|
|USB Power Port|Supply power to the board.|
|USB-UART Port|A communication interface between a computer and the ESP32-WROVER-E module.|
|USB-UART Bridge|Single USB-UART bridge chip provides transfer rates of up to 3 Mbps.|
|Reset Button|Pressing this button resets the system.|
|Boot Button|Download button. Holding down Boot and then pressing EN initiates Firmware Download mode for downloading firmware through the serial port.|
|Micro SD Card|Slot	Useful for developing applications that access MicroSD card for data storage and retrieval.|
|Audio ADC|High-performance four-channel audio ADC. Among the four channels, three are for microphones, and one for AEC function.|
|Audio PA|Amplify audio signals to external speaker at maximum 3 W.|
|Speaker Connector|Connect an external speaker.|
|Earphone Connector|Connect external earphones.|
|FPC Connector|Connect mainboard and subboard.|
|Audio Codec|Audio codec ES8311 communicates with ESP32 via the I2S bus, which converts digital signals to analog signals.
|Analog Microphone|Three analog microphone arrays (spacing = 65mm).|
|RGB LED|12 addressable RGB LEDs (WS2812).|
|Function Button|Six function buttons, i.e. PLAY, SET, VOL -, VOL +, MODE and REC. These function buttons are user-definable.|
|**Sizes**|90x90x20mm|

## **Product advantages** {{ page.ref }}
{: .blue}

- manufacturing quality
- the price (less than €22)
- A successful design
- the Espressif experience
- the number of functions
- the number of connections
- possibility of adding additional microphones


## **The - of the product** {{ page.ref }}
{: .red}

- No box upon purchase
- Only 3 microphones on the module

{% include product-embed.html image="https://ae01.alicdn.com/kf/H986d1437c3244ad5aad6045e7bab4913b/ESP32-Korvo-ESP32-AI-Conseil-de-D-veloppement-Vocal-Tech-Multi-iler-ESP32-WROVER-E-WIFI.jpg_.webp" title="Micro array esp32-korvo" brand="Espressif" description="Array microphone esp32-korvo esp-wroover-e with esphome and home-assistant" affiliate="_DnPsmnt" %}

## Conclusion

Thanks to this tutorial you will be able to **control a complete microphone** {{ page.ref }} in Home-assistant with esphome and test the voice commands. Everything works but is not optimal, you will have to wait a few weeks **to test future improvements**.