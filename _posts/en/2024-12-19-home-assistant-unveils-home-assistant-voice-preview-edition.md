---
guid: 148
title: "Home Assistant unveils its new product, the voice preview edition"
description: "As a preview we are testing the home assistant voice Preview Edition, the first product in this range for Nabu Casa, control your home locally by voice okay Nabu a first! Magical!"
ref: "home assistant voice pe"
layout: post
authors: [Nico]
date: 2024-12-19 22:00
last_modified_at: 
categories: [Test, Home-Assistant, Haade-lab]
tags: []
video: 
image: 'test-preview-edition-home-assistant-voice-first-product-by-home-assistant.png'
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
  - https://github.com/esphome/home-assistant-voice-pe
  - https://go.nabucasa.com/ha-voice-pe/setup
  - https://www.home-assistant.io/blog/categories/assist/
---

This is **very interesting news for the opensource home automation community.** Nabu casa, which needs no introduction, has released its first **functional voice assistant**, practical and for **100% local** use.

> No more online voice assistants that record all our words on external servers.

So I wonder if this product is **functional and successful or if simply the year of the voice is not yet fully operational!**

Most of us who are interested in voice assistants in local operation have already successfully tested installations on PC and often they are very successful, but when it comes to installing this on a raspberry pi it is a different story.

## Prerequisites

- a box running under home assistant (all versions)
- Esphome installed
- Wyoming environment installed
- A usbc cable + power supply (because not provided)

{% include product-embed.html image="home-assistant-voice-preview-edition.png" title="Home Assistant Voice Preview Edition" brand="Nabu Casa" description="Home Assistant Voice Preview Edition controls your home automation system by voice" domlink="box-domotique/7558-nabu-casa-home-assistant-voice-preview-edition-0860011789727.html" %}


## Introducing the Home Assistant Voice

{% include qrlink.html qrlink="https://go.nabucasa.com/ha-voice-pe/setup" text="read the full Home Assistant Voice manual" realtextlink="Home Assistant Voice user manual" %}

**Home Assistant has accustomed us** in recent years to providing us with home automation boxes (Green and Yellow) in similar packaging with ecological appearances.
What to say about the {{ page.ref }} **well at first glance not much:**

1. A packaging
2. A sticker
3. A warranty document
4. A very important Qrcode to access the instructions
5. A **{{ page.ref }}**

{% picture posts/{{ page.guid }}/deballage-home-assistant-voice-control-par-la-voix-nabu-casa.png --alt Home Assistant Voice preview edition voice control made by Nabu Casa based on ESP32-S3 --img width="940" height="529" %}

The back of the box {{ page.ref }} confirms that there is **no USB-C cable or power supply provided**, which is a bit surprising, but I would ignore this exception because we all have the means to power our home via USB-C **except for Apple purists.**

{% picture posts/{{ page.guid }}/home-assistant-voice-control-par-la-voix-nabu-casa-emballage-face-arriere.png --alt Home Assistant Voice preview edition voice control packaging back side --img width="940" height="529" %}

Let's now **take a look** at the {{ page.ref }}

Let's start with the bottom side, we'll find the product label, but if you look closely next to it there's a notch that hides an i2C connector underneath, you can plug in all sorts of i2c micro-modules and enhance the {{ page.ref }}

**Let's continue on the sides, we'll find:**
- a USBC power input with a 3.5mm mini jack microphone output
- a physical switch to **mute the microphone/speaker** of the home assistant voice
- a face for the speaker
- On the top A central button with **4 functions** (1 press to place your order, 2 presses, 3 presses and long press you can assign orders)
- around the button there's **a rotating slide** you can (increase the volume, change the color of the LEDs)

{% picture posts/{{ page.guid }}/home-assistant-voice-control-par-la-voix-nabu-casa-faces-cotes.png --alt Home Assistant Voice preview edition voice control packaging 4 sides available connections and functions --img width="940" height="529" %}

A small screenshot to give you an idea of ​​the size of the {{ page.ref }}

{% picture posts/{{ page.guid }}/rendu-taille-home-assistant-voice-pe.png --alt Home Assistant Voice preview edition size and rendering in the hand --img width="940" height="529" %}

## Under the hood

**Let's take a look at what's hidden under the case**.
First thing to point out, we can see that everything is relatively well thought out, the screws are easily removed. The central button is included in the printed circuit, in short under the hood you will only find two independent parts, **the circuit and the speaker nothing more.**

{% picture posts/{{ page.guid }}/home-assistant-voice-control-pe-circuit-electronique.png --alt Home Assistant Voice preview edition control pe what is hidden under the hood the electronic circuit --img width="940" height="529" %}

Let's move on to the various connectors **found under the circuit:**

1. An i2c connector
2. the famous esp32-s3 chip (no wonder all the other tests carried out by mike were with this chip)
3. 1st GPIO port with tx and rx for the transfer
4. 2nd gpio port
5. Xmos chip for sound

{% picture posts/{{ page.guid }}/home-assistant-voice-control-pe-circuit-electronique-face-arriere.png --alt Home Assistant Voice preview edition control pe what is hidden under the hood the electronic circuit back face --img width="940" height="529" %}

> Finally, I'll give you some photos of the product as a whole.

{% picture posts/{{ page.guid }}/photo-demontage-home-assistant-voice-preview-edition.png --alt Home Assistant Voice preview edition disassembly of the mechanism --img width="940" height="529" %}

## Technical Specifications {{ page.ref }}

|SoC|ESP32-S3 with 16MB FLASH storage<br>8MB PSRAM|
|Audio processing|XMOS XU316|
|Power|USB-C, 5VDC, 2A|
|Radios|**2.4GHz Wi-Fi**<br>Bluetooth 5.0 Low Energy|
|Audio output|3.5mm stereo line-out jack|
|Microphone and speaker|internal speaker<br>Internal dual microphone array<br>Mute switch|
|Operating conditions|Indoor use only<br>0°C to 30°C<br>32°F to 86°F|
|Humidity|non-condensing, Store in a dry and not too dusty environment, as this may damage the device|
|Dimensions and weight|84 x 84 x 21 mm, 96g<br>with box: 94x94x30 mm, 120g|
|Material|Polycarbonate plastic<br>Colors: White and semi-transparent|

{% picture posts/{{ page.guid }}/nomenclature-home-assistant-voice.png --alt Home Assistant Voice nomenclature --img width="940" height="529" %}

1. **Central button:** Reset, stop, talk without wake word
2. **Rotary module:** Change volume or LED color
3. **Switch:** hardware mute
4. LED ring
5. **USB-C port:** For data and power
6. **Minijack** for external speaker
7. 3.5 mm mini-jack stereo output jack
8. Speaker
9. 2 microphones

## Let's get down to business

### Let's connect {{ page.ref }} to Home Assistant

**First of all, you will need to install the Esphome suite, nothing complicated!**

**Reminder:** to make {{ page.ref }} work, you will need to install the esphome library. Go to the addon-store by clicking on the link below:

[![Open your Home Assistant instance and display the add-on store.](https://my.home-assistant.io/badges/supervisor_store.svg)](https://my.home-assistant.io/redirect/supervisor_store/)

Select and install **ESPHome Device Compiler**

{{ page.ref }} is **easy to use** thanks to a great integration done by Mike Hanssen in esphome. I made a video retrospective of the features available in esphome.

The functions of {{ page.ref }} are as follows:
- possibility to update the firmware and the wake-up word
- increase the volume of the {{ page.ref }} recognized **as media**
- visualization on the sensor of the pressed button (available in 1, 2, 3 and long click) great for future automation

There are 2 ways to quickly install {{ page.ref }} and connect it to home assistant

> If your box integrates a Bluetooth chip then I recommend this installation

#### In wifi

This is a classic integration function that is often found on wifi module inclusions, but it is not the easiest, if your box is equipped with bluetooth **I recommend the Bluetooth inclusion** which is much simpler and faster.

To follow the configuration I will give you the details and home assistant **has made an integration video**

{% include videoPlayer.html localId="installation-et-premiere-mise-en-service-home-assistant-voice.mp4" %}

> I haven't encountered any real problems, it's a little more finicky than Bluetooth integration

#### Simpler in Bluetooth

In Bluetooth **it's ultra simple** you just have to go to **Settings > Devices and services** discovery tab and follow the animated gif below. Nothing could be simpler, you enter your wifi coordinates and that's it. **Warning** only compatible with 2.4Ghz network

![Home assistant voice integration in bluetooth]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/parametrage-home-assistant-voice-pe-avec-bluetooth-simple-comme-bonjour.webp{{ cachebuster }}){: width="940" height="442" class="lazyload pictaninpost"}

Last step add the **Esphome discovered module**, change the available wakeword **(Okay Nabu, hey Jarvis or Hey Mycroft)** and add a room if you want and that's it.

> For the **French language** Okay Nabu is in my opinion the most suitable and works very well.

### Once installed here is what comes up

{% include videoPlayer.html localId="controle-fonctions-homeassistant-voice-pe-grace-a-esphome.mp4" %}

**A whole lot of options:**

1. change the setup and do the OTA update is transparent
2. increase the audio volume recognized as media
3. assistant status (listening, off, etc.)
4. voice assistant selection
5. listening mode (for the chosen French **relaxed** it works well)
6. Activate the LEDs (change the color and intensity)
7. change the activation word (currently available Okay Nabu, Hey Jarvis or Hey Mycroft)
8. activate/deactivate the microphone
9. activate/deactivate the sound

{% include product-embed.html image="home-assistant-voice-preview-edition.png" title="Home Assistant Voice Preview Edition" brand="Nabu Casa" description="Home Assistant Voice Preview Edition controls your home automation system by voice" domlink="box-domotique/7558-nabu-casa-home-assistant-voice-preview-edition-0860011789727.html" %}

#### 2 ways to

**configure the LED lighting**

As said above you can configure the LED directly in esphome but also physically below the animated gif

![Directly change the color of the LEDs on home assistant voice]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/change-color-with-push-button.webp{{ cachebuster }}){: width="800" height="451" class="lazyload pictaninpost"}

**Mute the microphone**

Either with the physical button on the side or through the esphome interface

![Mutes the microphone directly]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}//muting-device.webp{{ cachebuster }}){: width="800" height="450" class="lazyload pictaninpost"}

### Prepare the Home Assistant OS voice assistant environment

I preferred to detail this process before integrating {{ page.ref }} because I find it more relevant.

you will have to install and configure your system, start by installing:

### 1 a wyoming stt service (from speech to text)

> **Vosk** or **Rhassy-speech** for the **French voice sentence!**

Home assistant advises you [faster-whisper](https://www.home-assistant.io/integrations/wyoming/){: target="_blank"}**very good in English** but for now **very bad in French**, it doesn't matter Mike had developed the utility **[vosk](https://github.com/rhasspy/hassio-addons/tree/master/vosk){: target="_blank"}** which works pretty well for our French language and is currently developing the wyoming module **Rhasspy-speech**.

Mike has recently been developing [rhasspy-speech](https://github.com/rhasspy/rhasspy-speech){: target="_blank"} which is another **stt** under development, it also offers you to modify the sentences and will allow you to refine your system but **it must be said that the French sentence is already very complete.**

> **Vosk** has not been updated for over 5 months

**Adds the repository [Github Rhasspy](https://github.com/rhasspy/hassio-addons){: target="_blank"} for HAOS and you will have access to Vosk or Rhasspy-speech**

[![Open your Home Assistant instance and display the Rhasspy Repository Add dialog](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Frhasspy%2Fhassio-addons)

Refresh the page F5, search **vosk or rhasspy-speech** and install it, then in the vosk configuration select the language fr and start the module.

> Personally I use **rhasspy-speech** which should be the future for home-assistant voice.

### 2 Let's move on to the installation of the TTS (text to speech)

for that you can use the [Piper module](https://www.home-assistant.io/integrations/wyoming/){: target="_blank"} that will do the trick. Go to the app store again:

[![Open your Home Assistant instance and display the add-ons store.](https://my.home-assistant.io/badges/supervisor_store.svg)](https://my.home-assistant.io/redirect/supervisor_store/)

and search for the **Piper module**, install it, in the Piper configuration select a custom voice I chose fr_FR-siwis-medium, it's a female voice

PS: [Rhasppy offers a utility](https://rhasspy.github.io/piper-samples/){: target="_blank"} to test the voice **(upmc jessica in medium is great) but for now unusable in home assistant because she speaks in accelerated.**

### Adding instances

**Here are the modules installed, now you have to add them to home assistant**

**For info:** *Faster-whisper* is installed in the same way as the other two. Go to the module store, search for **whispe**r, then install, then configure the language and start the whole thing.

**Go** to **Settings > Device and service** and **add the Wyoming protocols**

{% picture posts/{{ page.guid }}/ajout-environnement-whisper-assistant.png --alt Add Whisper to Home Assistant Devices --img width="940" height="529" %}

### Last step: Setting up the voice assistant

By default there is a voice assistant named Home Assistant and set up in English, I decide to reuse it and set it up in French.

Go to **Settings > Voice Assistants > Add an assistant**

1. Set the configuration and the conversation agent in French
2. select your stt and set it up in French
3. select the tts in French
4. choose the voice **(tom or siwis)** in medium format

{% picture posts/{{ page.guid }}/creation-et-parametrage-assistant-vocal.png --alt Creating and configuring a Home Assistant voice assistant--img width="940" height="529" %}

## Optimal settings for the French language of the {{ page.ref }}

Here are my settings for the French language

- **Wakeword:** Okay Nabu ( the most accomplished at the request of the developers )
- **stt:** rhasspy-speach
- **tts:** piper with his **siwis-medium**
- in **esphome**: end of speech detection on **détendu**

## Message from Nabu Casa

Home Assistant Voice Preview Edition is the **first voice assistant** designed from the ground up to work with Home Assistant. With its dual microphones and advanced audio processing, it can hear your commands and provide clear feedback through its speaker and LED ring. It was designed to blend in with your home decor, and its physical touch controls allow anyone to control the device intuitively. It was designed to be used with Home Assistant Assist, the privacy-focused voice assistant that lets you control Home Assistant using natural language. It is fully configurable, allowing you to do whatever you want with voice.

**Let’s make open, local, private voice assistants a reality**
Your voice, your choice - We all deserve voice control that doesn’t collect our data or limit functionality. We’re rapidly advancing open, private voice for the home. Our vision is to match and then surpass other voice assistants. Join us in building Assist (or just come along) and preview the future of voice control in the home.

**On-premises or Cloud**
If you have powerful hardware, run voice entirely on-premises or offload speech processing to our privacy-focused Home Assistant Cloud for fast performance.

**Fully open and community-driven**
Fully open software, firmware, and hardware let you tailor it to your needs. With a dedicated community of developers customizing and adding features.

**Built with room to grow**
Voice Preview Edition offers plenty of room to expand and tweak. Its specifications, especially its RAM and storage, have been chosen to give it room to add future features. It includes a Grove port for connecting sensors and a 3.5mm headphone jack for connecting external speakers. It is also easy to open.

[Calendar](https://www.home-assistant.io/blog/categories/assist/){: target="_blank"}


{% include qrlink.html qrlink="https://go.nabucasa.com/ha-voice-pe/setup" text="read the full Home Assistant Voice manual" realtextlink="Home Assistant Voice user manual" %}

{% include product-embed.html image="home-assistant-voice-preview-edition.png" title="Home Assistant Voice Preview Edition" brand="Nabu Casa" description="Home Assistant Voice Preview Edition controls your home automation system by voice" domlink="box-domotique/7558-nabu-casa-home-assistant-voice-preview-edition-0860011789727.html" %}

## {{ page.ref }} Factory reset

If you want to **reset** everything, don't hesitate to do a factory reboot, to do this, press and hold the central button for **20 seconds**

![Home assistant voice factory reset]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/factory-reset.webp{{ cachebuster }}){: width="456" height="256" class="lazyload pictaninpost"}

## System reactivity

If you want instant commands and speed of action your home automation box must be quite robust below are the reactivity times between the request and the final response:

- **Nuc 300:** 1 second
- **Home assistant yellow 8gb ram:** 1 second
- **Home assistant Green:** 5 seconds
- **Raspberry pi 4 GB:** 4 seconds
- **Raspberry pi 5 4GB:** 2 seconds

Depending on your system the latency delay is more or less long, I estimate that above 2 seconds the comfort is no longer the same. That doesn't mean not to buy one if you have a box lacking in pep for voice assistance, **because I think that in the future the stt and tts mechanisms will be lighter and lighter.**

## Conclusion

Here is a **super product** to control your home automation by voice and all locally (no external listening), it is a super well finished product with very well thought out functions. **The whole voice assistance is not yet optimal**, but I am convinced that the {{ page.ref }} will fully satisfy you. **In short, it is the voice assistant to have.**