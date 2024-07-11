---
guid: 39
title: "Linkplay and Up2stream the quality DIY multiroom"
description: "Discovery of the linkplay protocol, probably the most interesting quality-price alternative for multiroom with airplay and sonos, among others, all integrated into homeassistant."
layout: post
authors: Nico
date: 2023-01-18 18:46
last_modified_at: 
categories: [Automation, Haade-lab, Home-Assistant]
tags: []
image: 'multiroom-arylic-linkplay-diy.png'
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
addViews: 115
comments: true
rating:  
sourcelink:
  - https://www.arylic.com/
  - https://www.linkplay.com/
  - https://fr.aliexpress.com/store/5047150?spm=a2g0o.detail.1000007.1.1214233a9V1zdT
  - https://github.com/nagyrobi/home-assistant-custom-components-linkplay#installation
---

I've wanted to write this review for a while, as I didn't after purchasing the Up2stream Amp V3 board, **but two years later**, I can say that this product has been proven and will give you give feedback on the reliability of the linkplay Multi-room system.

**prerequisite:** 

- 1 [ Up2stream card amp V3 ou V4](https://amzn.to/3XQ1tdN){: target="_blank"}
- 1 [Meanwell 12-24v multiple power supply]aliexpress.com/e/_DC0ZHPD){: target="_blank"} module
- 1 or more [power cords **093**](https://s.click.aliexpress.com/e/_DnCLRVN){: target="_blank"}
- From [speaker cable](https://amzn.to/3Xn44vA){: target="_blank"}
- 1 stereo speaker or 2 mono speakers with a minimum choice of 50w (I chose a [c180 T-2 stereo audio monitor](https://www.monitoraudio.com/en/product-ranges/core/c180-t2/){: target="_blank"} )
- 1 box of [Debflex storage 315cm](https://amzn.to/3CMTNAR){: target="_blank"}

{% include product-embed.html image="arylic-up2stream-amp-v4-multiroom.png" title="Arylic Amp V4" brand="Arylic" description="Up2Stream - Wireless Audio Amplifier V4, 50W x 2, Sound Card, Multiroom, Wireless Streaming, Stereo, DAC Decoding, Audio Receive" affiliate="_DcuIO5Z" amazlink="3ZKq8SK" %}


# What seduced me, the "do it yourself"

I naturally turned to **linkplay technology** because it allows manufacturers to create all kinds of products (diy or finished) while reducing the risks associated with product design.

**Linkplay also provides:**

- reduced time to market
- Save time on certification and testing costs
- Security on all SoM
- Excellent product quality
- Optimal wireless performance for Wi-Fi and Bluetooth with careful RF optimization and production calibration
- Modules due to the large volume of annual shipments

**Linkplay manufactures mods:**

- Wireless
- voice control
- bluetooth
- iot

linkplay modules are compatible with many [protocols and music streaming services](https://www.linkplay.com/app){: target="_blank"} among other things:

Spotify, Tidal, Airplay, Airplay 2, Tunein, Deezer, Napster, Dlna, Qobuz, etc...

# Companion app (4stream)

Let's talk about the application that is needed for the firmware update, for the rest you can control your system directly in Homeassistant.

![animated image of 4stream app by linkplay]({{ site.baseurl}}/assets/images/posts/{{ page.guid }}/4stream.webp{{ cachebuster }}){: width="242" height="525" class="lazyload pictaninpost"}

[direct link companion app google play **rated 2.9**](https://play.google.com/store/apps/details?id=com.wifiaudio.Stream&hl=fr&gl=US&pli=1){: target="_blank"}

[direct link companion application App store **rated 3.1**](https://apps.apple.com/fr/app/4stream/id1446722739){: target="_blank"}

Despite a low rating it is reliable software, but to be honest I can use it because on the one hand I use the linkplay integration in homeassistant but also directly in Spotify.

# Use of products [Up2stream](https://fr.aliexpress.com/store/5047150?spm=a2g0o.detail.1000007.1.1214233a9V1zdT){: target="_blank"}

I bought in December 2020 the up2stream module manufactured by arylic Amp V3, now replaced by a V4 version, it is to my knowledge the only manufacturer who includes Linkplay technology on Diy cards.

{% include product-embed.html image="arylic-up2stream-amp-v4-multiroom.png" title="Arylic Amp V4" brand="Arylic" description="Up2Stream - Wireless Audio Amplifier V4, 50W x 2, Sound Card, Multiroom, Wireless Streaming, Stereo, DAC Decoding, Audio Receive" affiliate="_DcuIO5Z" amazlink="3ZKq8SK" %}

# Installing hardware

{% picture posts/{{ page.guid }}/installation-up2stream-amp-v3.png --alt installation of the linkplay up2stream multi-room system in the attic --img width="940" height="529" %}

Here I was able to do the installation in the attic in a junction box [debflex of dimension 310x245](https://amzn.to/3CMTNAR){: target="_blank"}.

**This set includes:**

1. One [Meanwell 24v multiple power supply](https://s.click.aliexpress.com/e/_DC0ZHPD){: target="_blank"}, it will allow me to power several up2stream modules in order to do multi-room.
2. One [Up2stream amp V3 board](https://amzn.to/3XQ1tdN){: target="_blank"}, currently replaced by a V4
3. [A switch Tp-link](https://amzn.to/3ZAThj4){: target="_blank"} in order to be able to connect several cards in rj45

The advantage of the up2stream card lies in the fact that you can connect to it via rj45, wifi or Bluetooth.
> personally I chose the stability of the rj45

# Integration in Homeassistant with [HACS](https://github.com/hacs/integration){: target="_blank"}.

Linkplay can be used in Homeassistant with the implementation of the HACS library, to install it follow the official tutorial [HACS](https://hacs.xyz/docs/setup/prerequisites){: target="_blank"}. 
Then just go to HACS > integration > explore and download repositories.
Search linkplay and install it.

The configuration is done in the configuration.yaml file of homeassistant.
[Follow the installation instructions](https://github.com/nagyrobi/home-assistant-custom-components-linkplay#installation){: target="_blank"}

Then the linkplay interface is compatible with [the mini media player card](https://github.com/kalkih/mini-media-player){: target="_blank"}, to install it nothing could be simpler go to HACS > interface > explore and install repositories.
Search mini media player and install it.

{% highlight yaml %}
media_player:
    - platform: linkplay
      host: 192.168.1.2
      name: Player 1
      sources: {}

    - platform: linkplay
      host: 192.168.1.3
      name: Player 2
      sources: {}
      {% endhighlight %}

### Render in HA

in the settings of homeassistant you can browse the media, control the multiroom, the different audio sources, the sound mode, the volume and many other things.

{% picture posts/{{ page.guid }}/home-assistant-integration-multiroom.png --alt linkplay integration in homeassistant --img width="263" height="570" %}

# Multi-room mode

Linkplay devices support multiroom in two modes:

- Direct WiFi mode, where the master turns into a hidden access point and the slaves connect to it directly. The advantage is that it's a dedicated direct connection between the speakers, with factory-optimized network settings for streaming.
- Router mode, where master and slaves connect via LAN **(from firmware v4.2.8020)**.

to know and update the linkplay firmware, go to the companion application (4stream) > toothed wheel > device info, if there is an update it will be notified to you.

{% picture posts/{{ page.guid }}/device-info-update-firmware.png --alt screenshot firmware companion 4stream --img width="263" height="516" %}


This integration will automatically detect the firmware version running on the player and choose multiroom mode accordingly. Units with firmware version** lower than v4.2.8020 can connect to multirooms only in Wi-Fi direct mode**.

**To create a multiroom group** nothing could be simpler, connect media_player.sound_player2(slave) to media_player.sound_player1(master):

{% highlight yaml %}
    - service: linkplay.join
      data:
        entity_id: media_player.sound_player2
        master: media_player.sound_player1
{% endhighlight %}

[**For all other options do not hesitate to consult the repository doc**](https://github.com/nagyrobi/home-assistant-custom-components-linkplay#installation){: target="_blank}

{% picture posts/{{ page.guid }}/interface-mini-media-player.png --alt lovelace mini media player card --img width="940" height="826" %}

# Up2stream technical notice ( English )

{% include doclink.html pdf="Notice-technique-Up2Stream_Amp2.0_v3_en.pdf" title="Technical notice Up2stream amp v3" %}

{% include doclink.html pdf="Up2Stream_AMP_V4_Mono_Manual-EN.pdf" title="Technical notice Up2stream amp v4" %}

# Use with Spotify

I only use it with spotify but given the compatibility you should have no problem connecting with one of the many other applications.

You can access spotify directly or through 4stream, then nothing could be simpler, click on the icon at the bottom left and you will see the connection to Linkplay appear.

{% picture posts/{{ page.guid }}/connection-spotify.png --alt connection linkplay spotify --img width="263" height="516" %}

# Price of an installation.

As a reminder, I installed it in a box and connected a built-in speaker in the bathroom.
**The price of the complete set came to me at 220€** for the operation of one piece, **the next ones will come back to the Up2stream prices, i.e. 100€**
Then comes the price of the speaker there it depends on your financial resources ** it goes from 50 to 300 € **, think of taking speakers higher than 50w in stereo.

# Conclusion

After two years of use I have experienced two breaks in the module, by relaunching it everything is back to normal. **Apart from that everything works for the best.** The price of a first installation is not always the least expensive, but the addition of other speakers and the multiroom comes down to the cost of a module and speakers recessed.
**Not to mention that the sound quality is good.**

> the arylic site sometimes does promotions and does not hesitate to take a look.




