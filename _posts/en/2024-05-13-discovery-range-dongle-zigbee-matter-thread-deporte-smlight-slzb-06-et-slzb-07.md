---
guid: 125
title: "Discovery of SMLIGHT remote dongles"
description: "SMLight provides us with a complete range of remote and very complete Zigbee coordinators/dongles, simplified installation, a web interface and all Zigbee2mqtt and ZHA compatible."
ref: "SLZB-06*"
layout: post
authors: [Nico]
date: 2024-05-13 01:00
last_modified_at: 
categories: [Tests, Zigbee]
tags: []
video: 
image: 'smlight-slzb-series-poe-and-other-en.png'
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
rating: 4.7
sourcelink:
  - https://smlight.tech/
---

I am lucky enough to be able to present to you part of the **SMlight** range from the **Ukrainian** manufacturer of Zigbee/Matter coordinators. You've certainly heard about it, the company is currently pulling out all the stops in terms of communication and is there anything to listen for?

SMlight markets no less than **10 zigbee/thread/matter compatible coordinators/routers**. Two main ranges stand out. the **slzb-06** and **slzb-07** range.
The **slzb-06** series is enhanced with 6 rj45/esp32-V3 (wifi-bluetooth) compatible coordinators.
you have the choice between the zigbee silabs EFR32 or texas instrument CC2652 chips, frankly royal.

The **slzb-07** series is completely different from the slzb-06 series but with a common DNA and yes 4 available controllers always with silabs or TI.

{% include product-embed.html image="SMLIGHT-SLZB-06-series.png" title="Zigbee coordinator slzb-06* poe rj45 séries" brand="Smlight" description="SMLIGHT SLZB-06 A Zigbee 3.0 to Ethernet, USB and WiFi Adapter with PoE Support, Works with Zigbee2MQTT, ZHA,Home Assistant" domlink="smart-home-gateway/7042-smlight-cc2652p-zigbee-30-poe-ethernet-usb-adapter-zigbee2mqtt-and-zha.html" affiliate="_DcZxVaj" %}

## Unboxing SMLight {{ page.ref }}

Whether you choose **any variant of the module** {{ page.ref }}, it is provided in a case with different colors but which proudly displays compatibility with the various opensource systems on the market. **SMLight demonstrates its desire to develop open source compatible products** and for that alone I add a point 👌.

{% picture posts/{{ page.guid }}/deballage-coordinateur-zigbee-rj45-smlight-slzb-06*.png  --alt unboxing the zigbee Matter smlight slzb-06* coordinator series --img width="940" height="529" %}

## SMLight disassembly {{ page.ref }}

The SMLight {{ page.ref }} coordinators have a **simple but robust** design, disassembly is done in no time, simply unclip the rear panel to access the printed circuit.

{% picture posts/{{ page.guid }}/demontage-smlight-slzb06*.png  --alt quick disassembly of the Matter smlight slzb-06* zigbee coordinator series --img width="940" height="529" %}

I got an **exploded circuit** from the official site, it is almost identical for the entire slzb-06 range* only the zigbee chip differs.

{% picture posts/{{ page.guid }}/circuit-imprime-slzb.png  --alt summary printed circuit board of the zigbee Matter smlight slzb-06* coordinator series --img width="940" height="490" %}

## SMLight SLZB-06 all in one

So yes, are you going to tell me that **it's a hell of a machine**, so big that it made me think of Harry Potter's wizard's wand? 🦸‍♂️
Yes, the assembly is simplistic but still functional and entirely made in Ukraine 🇺🇦 it must be emphasized at the moment **it remains an achievement.**

## Unboxing slzb-07p7 dongle

SMLight also **provided me with a dongle from the slzb-07 range**, the slzb-07p7 of good quality, the **transparent shell** brings style to this module and the additional 3db antenna. **Sonoff** already supplies this type of product so nothing new, however the size of the **SMLight is smaller** so it does not block access to the other ports of your raspberry as is the case with a Sonoff. [SMLight communicates on this on the product sheet on the official site](https://smlight.tech/product/slzb-07p7/){: target="_blank"}.

{% picture posts/{{ page.guid }}/deballage-et-comparatif-dongle-slzb-07p7-smlight-vs-dongle-e-sonoff.png  --alt unboxing the coordinator - smlight slzb-07p7 dongle --img width="940" height="529" %}

> The prices are very reasonable, you can afford it **by paying barely €23**

{% include product-embed.html image="SMLIGHT-SLZB-07-series-USB.png" title="Zigbee USB Dongle Coordinator slzb-07" brand="Smlight" description="The SMLIGHT SLZB-07P7 Zigbee USB dongle, with CC2652P7 SoC and 3dB antenna, ideal for Zigbee2mqtt and ZHA." domlink="home-automation-interfaces/7045-smlight-zigbee-cc2652p7-soc-usb-dongle-3db-antenna-zigbee2mqtt-and-zha.html" affiliate="_DFi3lLN" %}

## Affiliate links

|SMLIGHT|Domadoo|Aliexpress|
|-------|-------|----------|
|SLZB-06|[Link](https://www.domadoo.fr/fr/box-domotique/7042-smlight-adaptateur-usb-ethernet-poe-zigbee-30-cc2652p-zigbee2mqtt-et-zha.html?domid=39){: target="_blank"}|[Link](https://s.click.aliexpress.com/e/_DdgR27h){: target="_blank"}|
|SLZB-06 sans POE| - |[Link](https://s.click.aliexpress.com/e/_DdgR27h){: target="_blank"}|
|SLZB-06P7| - |[Link](https://s.click.aliexpress.com/e/_DdgR27h){: target="_blank"}|
|SLZB-06M|[Link](https://www.domadoo.fr/fr/box-domotique/7043-smlight-adaptateur-usb-ethernet-poe-zigbee-30-efr32mg21-zigbee2mqtt-et-zha.html?domid=39){: target="_blank"}|[Link](https://s.click.aliexpress.com/e/_DdgR27h){: target="_blank"}|
|SLZB-07|[Link](https://www.domadoo.fr/fr/interface-domotique/7044-smlight-dongle-usb-zigbee-efr32mg21-cp2102n-soc-antenne-3db-zigbee2mqtt-et-zha.html?domid=39){: target="_blank"}|[Link](https://s.click.aliexpress.com/e/_DdW00eJ){: target="_blank"}|
|SLZB-07P7|[Link](https://www.domadoo.fr/fr/interface-domotique/7045-smlight-dongle-usb-zigbee-cc2652p7-soc-antenne-3db-zigbee2mqtt-et-zha.html?domid=39){: target="_blank"}|[Link](https://s.click.aliexpress.com/e/_DdW00eJ){: target="_blank"}|

## Presentation of the range

### SLZB-06*

Only the **first 4** starting from the left are actually marketed, the P10 and MG24 versions are currently being marketed, they provide more flash memory and RAM storage.

{% picture posts/{{ page.guid }}/tableau-comparatif-gamme-coordinateurs-zigbee-poe-smlight.png --alt comparison table of zigbee rj45 poe coordinators from the smlight range --img width="850" height="1051" %}


### SLZB-07*

Here too only **the two versions on the left** are on sale, the P10 and MG24 versions are being marketed, they provide more flash memory and RAM storage.

{% picture posts/{{ page.guid }}/tableau-comparatif-gamme-coordinateurs-zigbee-usb-smlight.png --alt comparison table of zigbee usb coordinators from the smlight range --img width="650" height="835" %}


## Why choose SMLight {{ page.ref }}

Frankly, before receiving these coordinators **I was doubtful** and I thought to myself yet another coordinator to test which is Zigbee-Matter-Thread compatible, plus I could see that the **dimensions would be out of the norm**.
Then I received these products and I started to imagine all the prospects that this type of coordinator could engage and there I launched into tests under **Zigbee2mqtt and ZHA.**

> Why take this module, it’s all in one!

### Management Interface

But apart from that, this SMLight coordinator {{ page.ref }} is a real treat, in fact it is available with a **Webui management** interface. Just that **you can configure everything or access information with a simple click**. Wow SMLight makes managing the coordinator super simple for anyone new to it.
by default once connected to your network via rj45 connect to the interface:
- [SLZB-06](http://slzb-06.lan){: target="_blank"}
- [SLZB-06M](http://slzb-06m.lan){: target="_blank"}
- [SLZB-06p7](http://slzb-06p7.lan){: target="_blank"} (as I write these lines various bugs are listed on the [slzb-06P7 series](https://smlight.tech/product/slzb-06p7/){: target="_blank"})

![interface configuration coordinator smlight slzb06 series firmware 2.0.18]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/interface-configuration-smlight-slzb-06.webp{{ cachebuster }}){: width="940" height="467" class="lazyload pictaninpost"}

**You can access all the functions with a single click** and SMLight even allows you to send bug reports or contact requests via this interface, in short, pure joy.

- change Zigbee modes (rj45, usb, )

### Opensource Management Interface V0.9.9

![opensource interface smlight firmware 0.9.9]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/interface-smlight-slzb-v-opensource-0.9.9.webp{{ cachebuster }}){: width="940" height="465" class="lazyload pictaninpost"}

### Compatibility {{ page.ref }}

To put it simply, this module is ultra complete and opens up incredible perspectives.

- Zigbee (Texas Instrument or Silabs)
- Matter/Thread (by changing the firmware)
- **Esphome** (thanks to the esp32s3 chip)
- Wireless
- bluetooth
- rj45 (poe or not depending on version)
-usb

Regarding software compatibility, the announcement is clear **the entire range is home assistant compatible**.

- Home assistant
- **Zha**
- **Zigbee2mqtt**
-Mqtt
-Homeseer
- Openhab
-Jeedom
-Gladys

|Functions|SLZB-06|SLZB-06P7|SLZB-06M|SLZB-07P7|
|---------|-------|---------|--------|---------|
|Zigbee   |**v**{: .green}|**v**{: .green}|**v**{: .green}|**v**{: .green}|
|Matter   |**v**{: .green}|**v**{: .green}|**v**{: .green}|**v**{: .green}|
|Home-Assistant|**v**{: .green}|**!**{: .yellow}|**v**{: .green}|**v**{: .green}|
|Zigbee2Mqtt|**v**{: .green}|[**!**](https://smlight.tech/product/slzb-06p7/){: .yellow}|**v**{: .green}|**v**{: .green}|
|ZHA|**v**{: .green}|**v**{: .green}|**v**{: .green}|**v**{: .green}|

**The series is very complete** and I have no doubt that they will add more compatibility advantages, just look at the close collaboration with these opensource systems.

### And much more

Thanks to wifi or rj45 you will be able to **remove the key** of your home automation center in order to optimize the mesh of your network but that's not all.

Relocating a key can be interesting if there is proximity to your **wifi router** and **thus avoiding various interferences**, which will have the effect **of optimizing the range**, as already listed [in another article]({%- post_url /en/2022-11-30-interference-zigbee-wifi-2-4ghz-to-know %}) zigbee and wifi frequencies are slightly different and both operate on 2.4 GHz

Thanks to the integration of **Vpn Wireguard** you will be able to extend it well beyond the local sphere.

*Imagine that you have a second home and that you would like to home automation it but without necessarily adding a full-fledged system. So I'm not telling you that it's ideal, but you could, from the home automation of your main residence, control a mesh (zigbee/matter) on the other side of the world thanks to this VPN.*

Besides on this subject SMLight [offers you a tutorial](https://smlight.tech/manual/slzb-06/guide/multiple-adapters-setup/){: target="_blank"} to install several **Z2M entities** on the same installation with linking a coordinator for a Z2M entity.

> So yes it works but it's not ideal

**Why:** Well you are going to install several containers of the same image which confuses the system plus possible updates of the counter.

### Proxy Bluetooth mesh network

Thanks to the integrated chip **esp32-S3**, you can configure this key with esphome, the [bluetooth in proxy version](https://smlight.tech/manual/slzb-06/guide/bluetooth-proxy/){: target="_blank"} and thus use this key as a **bluetooth router** and thus extend the mesh in the same way as a zigbee network associated with several zigbee routers.

## Optimized to work well

The **SMLight** coordinators {{ page.ref }} are optimized in order to establish zigbee networks at the maximum of their ranges in fact each chip has a **20db amplifier** plus a **15cm** antenna which adds **5db** of amplifications (basically you can hardly do better).

Unlike other coordinators on the market, all SMLight {{ page.ref }} coordinators have a **S.O.C CP2102N** converter with high demand 921600 bps, enough to enable firmware updates without any problems**.

## Bug encountered during testing

I admit I have tested these various coordinators quite a bit and overall **you will not encounter any real problems** except for version 06p7 or even [after having followed the SMLight recommendations](https://smlight.tech/manual/slzb-06/guide/faq-and-lifehacks/slzb-06p7-pairing.html){: target="_blank"} I am still faced with **module inclusion errors** especially for TI Instrument (slzb-06 in router mode).

|Test|SLZB-06POE|SLZB-06M|SLZB-06P7|
|----|----------|--------|---------|
|Mode rj45|**ok**{: .green}|**ok**{: .green}|**ok**{: .green}|
|Mode Wifi|**ok**{: .green}|**ok**{: .green}|**ok**{: .green}|
|Mode USB|**ok**{: .green}|**ok**{: .green}|**ok**{: .green}|
|Network eth ou wifi|**ok**{: .green}|**ok**{: .green}|**ok**{: .green}|
|Installation Z2M ou ZHA|**ok**{: .green}|**ok**{: .green}|**!**{: .yellow}|
|Interface secure|**ok**{: .green}|**ok**{: .green}|**ok**{: .green}|
|VPN wireguard|**non testé**{: .yellow}|**non testé**{: .yellow}|**non testé**{: .yellow}|
|UPDATE Core|**ok**{: .green}|**ok**{: .green}|**ok**{: .green}|
|UPDATE Zigbee Coordinateur|**ok**{: .green}|**ok**{: .green}|**ok**{: .green}|
|UPDATE Zigbee Routeur|**ok**{: .green}|**ok**{: .green}|**Nok**{: .red}|
|LED Parameters|**ok**{: .green}|**ok**{: .green}|**ok**{: .green}|

## Online Documentations

**You will not find paper documentation** with the coordinator, but although I have written a more or less complete article, SMLight has written very nice online documentation for the SLZB-06 series, don't hesitate to ask. read and reread everything is very well explained.

[SLZB-06*](https://smlight.tech/manual/slzb-06/guide/getting-started/){: target="_blank"}

[SLZB-07*](https://smlight.tech/manual-slzb-07/){: target="_blank"}

## The rates

So as said above these modules are, at the time of writing, entirely **made in Ukraine** which means that the final sale would therefore be more expensive than if they were made in China and well no it is not is nothing. **SMLight is aligned with market prices** and even cheaper than other manufacturers.

For example, you will find the SLZB-07 USB series on Domadoo between 19 and 23€ in the same price range as the famous Sonoff zbdongle-e

As for the slzb-06 version with POE [Domadoo](https://www.domadoo.fr/en/smart-home-gateway/7042-smlight-cc2652p-zigbee-30-poe-ethernet-usb-adapter-zigbee2mqtt-and-zha.html?domid=39){: target="_blank"} or on [Aliexpress](https://s.click.aliexpress.com/e/_DcZxVaj){: target="_blank"} sell this for less than 40€

> With all the functions it makes this coordinator an Outsider.

## Online firmware flash tool (interface)

**SMLight has deployed a practical tool** like what home assistant or darkxst has already done and it's very good, a tool to upload the core firmware when you can no longer do it from the module's web interface. *Shortly after a crash.*

[Online flasher slzb-06 all versions](https://smlight.tech/flasher/#SLZB-06){: target="_blank"}

## Flash firmware forcé

Si pour x raison tu n'arrives plus à forcer le flash du firmware des dongles tu pourras toujours [forcer ce flash en suivant la description](https://smlight.tech/flasher/#flashingFAQ){: target="_blank"} (works for keys based on Texas and Silabs chipsets)

## Attention Zigbee2mqtt 1.36.x and +

Be careful with the transition to version 1.36.x of zigbee2mqtt and this concerns the SILABS EFR32 chips therefore the slzb-06M and slzb-07 coordinator with installation of the firmware **zigbee coordinator 20240408**, the system could be unstable or even not work it will be necessary install [zigbee 7.4.10 firmware and modify in zigbee2mqtt](https://github.com/Koenkk/zigbee2mqtt/discussions/21462){: target="_blank"} the adapter:
```adaptater: ezsp``` by ```adaptater: ember``` there are still other options like ```rtscts: false``` but in my case I deactivated it for proper functioning . In short, all this to tell you that this manipulation must be done locally and if you cannot do it, do not upgrade to a higher firmware for the moment (valid for the snzb-06*) because you can modify it by OTA.

**But it was explained well on the github**, also thanks to [darkxst](https://darkxst.github.io/silabs-firmware-builder/){: target="_blank"} you will be able to upload the firmware without any problems.

> Currently Zigbee2mqtt recognizes that the SLZB-06M in router mode does not recognize the other two.

{% include product-embed.html image="SMLIGHT-SLZB-07-series-USB.png" title="Zigbee USB Dongle Coordinator slzb-07" brand="Smlight" description="The SMLIGHT SLZB-07P7 Zigbee USB dongle, with CC2652P7 SoC and 3dB antenna, ideal for Zigbee2mqtt and ZHA." domlink="home-automation-interfaces/7045-smlight-zigbee-cc2652p7-soc-usb-dongle-3db-antenna-zigbee2mqtt-and-zha.html" affiliate="_DFi3lLN" %}

## Bug encountered on version SLZB-06P7

~~Despite the **update of the CORE with 0.2.13dev** I encountered slight integration problems, I put a **SLZB-06M in router mode** but the integration in the coordinator does not match, as I write I send the bugs to SMLight via the interface, it's simpler.~~

**Update** Since the core firmware update **V2.2.0dev**, SMLight brings stability to this module, which now allows you to work even with the slzb-06M as Coordinator/Router.

For the moment it is not possible to put the slzb-06p7 in **router mode** because there is no firmware available at the moment.

## Watch out for upcoming versions

SMLight is currently releasing chip versions **Texas Instrument or latest generation Silabs**, this is a very good thing but being alone on this market few or no optimized firmwares are available at the moment, if I were you **I will wait a bit** and **I will focus my purchase** on the slzb-06 or slzb-06M version with older chips (cc2652, efr32) but effective.

{% include product-embed.html image="SMLIGHT-SLZB-06-series.png" title="Zigbee coordinator slzb-06* poe rj45 séries" brand="Smlight" description="SMLIGHT SLZB-06 A Zigbee 3.0 to Ethernet, USB and WiFi Adapter with PoE Support, Works with Zigbee2MQTT, ZHA,Home Assistant" domlink="smart-home-gateway/7042-smlight-cc2652p-zigbee-30-poe-ethernet-usb-adapter-zigbee2mqtt-and-zha.html" affiliate="_DcZxVaj" %}

## Conclusion

**Go, Go, Go.** I have nothing more to say about the SMLight {{ page.ref }} other than to tell you to **buy it**, given its many functions you will have a broader vision of your home automation system, especially in the event of developments. *Almost everything works and even if there is an error or an oversight, corrections will be made quickly.* Even the price is interesting, less than €40 for all these options. **Personally I am going to replace my Sonoff ZBDongle-P key with the SMLIGHT SLZB06.**