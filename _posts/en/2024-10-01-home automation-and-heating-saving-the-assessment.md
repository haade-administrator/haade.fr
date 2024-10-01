---
guid: 141
title: "Home Assistant home automation and heating saving"
description: "August returns to the video of March 28 concerning heating savings and home automation works and provides figures on its consumption and savings made since February 2024"
ref: ""
layout: post
authors: [Nico, August]
date: 2024-10-01 18:30
last_modified_at: 
categories: [Automation, Haade-lab, Videos, News, Home-Assistant]
tags: []
video: GSRyNPTgO04
image: 'bilan-economie-chauffage-gaz-august-de-reels-economies-investissement-minime.png'
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
rating:  
sourcelink:
  - https://community.home-assistant.io/t/trv-calibrator-calibrate-your-valve-with-an-external-sensor-probably-trv-agnostic/451424
  - https://www.domadoo.fr/fr/box-domotique/7046-nabu-casa-box-domotique-home-assistant-green-0794677011758.html?domid=39
---
**After 9 months of installation**, August returns to take stock of the [youtube channel](https://www.youtube.com/@haade-fr){: target="_blank"} to talk to you about energy savings achieved thanks to a Home Assistant home automation installation.

{%- include alert.html type="info" text="For Info At Itead official supplier Sonoff benefits from <b>10%</b> additional discounts with the code <b>HAADESONOFF</b>" link="https://itead.cc/product/sonoff-zigbee-temperature-and-humidity-sensor-snzb-02p/ref/122/" textlink="Sonoff SNZB-02P Temperature Module" %}

**As a reminder!** In February 2024 I went to August and was able to install a Home Assistant home automation box. **It cost around €400** for installations, I had announced a return on investment of two years. It turns out that his investment will pay off in just over a year. As you can see in the video. 

> August has already **made €217 in savings** over 9 months.

If you haven't seen the previous video don't hesitate **it's very informative.**

{% include videoPlayer.html youtubeId="Cl7h8QwLl5A" %}

I have of course produced a complete article on the installation there too it **is strongly recommended that you consult it.**

[Save heating thanks to home automation]({% post_url /fr/2024-03-28-economise-du-chauffage-grace-a-la-domotique-ca-marche %})

{%- include alert.html type="warning" text="We are going to <b>prepare a Live</b> which will be broadcast on <b>November</b> on the YouTube channel where I will present to you the automation of the same heating but all controlled <b>by a Sonoff NSPanel Pro </b>, so we will tour the Sonoff universe and be able to see the positive points but also the limits of such a system." link="" textlink="" %}

## How did we do it

It is not enough to install thermostatic faucets and control them via an application to make this kind of savings. **This is currently what the government is selling us.** Well no, it doesn't work that way. To achieve such results it is not only necessary to homeize your radiators but also the heating system in our case it is a gas boiler.

Indeed **thanks to the scenarios**, which are the strength of many home automation systems including Home Assistant, we will be able to turn on the boiler as we wish and above all make the request room by room. Plus everything else!

> *In short, all the information is available in our article published in March.*

[Save heating thanks to home automation]({% post_url /en/2024-03-28-saves-on-heating-thanks-to-home-automation-it-works %})


## Récapitulatif du matériel utilisé

- a **home automation box** [Home Assistant Green](https://www.domadoo.fr/en/smart-home-gateway/7046-nabu-casa-home-assistant-green-smart-home-hub-0794677011758.html?domid=39){: target="_blank"} or [Sonoff Ihost](https://www.domadoo.fr/en/smart-home-gateway/6715-zigbee-30-wifi-home-automation-gateway-ihost-local-4gb-sonoff.html?domid=39){: target="_blank"}
- If you use the Home Assistant Green you will need a [Zigbee Skyconnect key](https://www.domadoo.fr/en/smart-home-gateway/6938-zigbee-usb-dongle-home-assistant-skyconnect-nabu-casa-0794677011635.html?domid=39){: target="_blank"}
- thermostatic modules [TRV Sonoff](https://www.domadoo.fr/en/heating-air-conditioning/6776-sonoff-zigbee-30-smart-thermostatic-head.html?domid=39){: target="_blank"} preferably.
- modules [temperature and humidity thermostats](https://www.domadoo.fr/en/heating-air-conditioning/6732-sonoff-zigbee-temperature-humidity-sensor-with-support-snzb-02p.html?domid=39){: target="_blank"} (**Sonoff** brand preferably)
- a multifunction module [Nodon SIN-4-1-20](https://www.domadoo.fr/en/devices/5688-nodon-multifunction-relay-switch-16a-zigbee-30-3700313925188.html?domid=39){: target="_blank"} dry contact (to control the switching on and off of the boiler)
- skills if you have them it's better

{% include product-embed.html image="Home-Assistant-Green.png" title="Box HomeAssistant Green" brand="Nabu Casa" description="Box Home Assistant Green on sale at domadoo for less than €100" domlink="produits-compatibles-home-assistant/7046-nabu-casa-box-domotique-home-assistant-green-0794677011758.html" %}

At August we decided to go with a [Home Assistant Green box](https://www.domadoo.fr/fr/box-domotique/7046-nabu-casa-box-domotique-home-assistant-green-0794677011758.html?domid=39){: target="_blank"} with a [Skyconnect zigbee dongle](https://www.domadoo.fr/fr/box-domotique/6938-dongle-usb-zigbee-30-skyconnect-pour-home-assistant-nabu-casa-0794677011635.html?domid=39){: target="_blank"} to control zigbee modules.

{% include product-embed.html image="dongle-usb-zigbee-30-skyconnect-pour-home-assistant-nabu-casa.jpg" title="Zigbee Skyconnect Dongle" brand="Nabu Casa" description="Skyconnect zigbee dongle key" domlink="box-domotique/7188-nabu-casa-dongle-usb-zigbee-30-connect-zbt-1-pour-home-assistant-0860011789710.html" %}

But you could also go with a [Sonoff ihost box with integrated Zigbee key](https://www.domadoo.fr/fr/box-domotique/6715-box-domotique-ihost-local-zigbee-30-wifi-4gb-sonoff.html?domid=39){: target="_blank"} if you want to home automation certain aspects of your home, be careful with automation which will be more difficult to configure. **Indeed, the Home assistant green box** is compatible with the gigantic **Home assistant universe** and what's more, you participate in the opensource project by investing in their Boxes and keys, and I find that nice.

For thermostatic faucets, the choice is vast but having been able to compare some, **we selected the Sonoff TRVZB for its many advantages and its ease of use!**

{% include product-embed.html image="sonoff-tete-thermostatique-connectee-zigbee-30.jpg" title="Sonoff TRVZB" brand="Sonoff" description="The SONOFF Zigbee connected thermostatic head allows you to control the temperature more precisely with less energy, giving you a more comfortable home." domlink="chauffage-clim/6776-sonoff-tete-thermostatique-connectee-zigbee-30.html" iteadlink="sonoff-zigbee-thermostatic-radiator-valve" affiliate="_DFB4iQZ" %}

Then **you will need a dry contact module** which will control the open/closed function of your boiler (Gas, Oil and even heat pump), there are several on the market, I selected the module [Nodon multifunction SIN-4-1-20](https://www.domadoo.fr/fr/peripheriques/5688-nodon-module-multifonction-zigbee-nodon-sin-4-1-20-onoff-contact-sec-3700313925188.html?domid=39){: target="_blank"} because it is **very well made**, moreover [you can read a review on this subject]({% post_url /en/2023-07-31-test-nodon-module-zigbee-1-relais-multifonction-veritable-swiss-army-knife %}){: target="_blank"}.

{% include product-embed.html guid="2145" %}

Finally, I strongly advise you to equip each room with a micro-temperature module,** <ins>Why:</ins> The thermostatic faucet is equipped with an integrated thermostat however **the temperature is distorted during operation due to the proximity to the heating body**, moreover it is even more relevant when you have two radiators in the same room.

{% include product-embed.html image="sonoff-capteur-de-temperature-et-d-humidite-zigbee-30-avec-support-snzb-02p.jpg" title="ZSonoff SNZB-02P" brand="Sonoff" description="Sonoff SNZB-02P zigbee temperature and humidity micro-module" iteadlink="sonoff-zigbee-temperature-and-humidity-sensor-snzb-02p" domlink="chauffage-clim/6732-sonoff-capteur-de-temperature-et-d-humidite-zigbee-30-avec-support-snzb-02p.html" affiliate="_DkJNVHx" %}

**In the range of thermostatic micro-modules** the choice is vast, I recommend another module [**Sonoff the SNZB-02P**](https://www.domadoo.fr/fr/chauffage-clim/6776-sonoff-tete-thermostatique-connectee-zigbee-30.html?domid=39){: target="_blank"}, **it is reliable, aesthetic and inexpensive**. [here too I tested the Sonof SNZB-02P, don't hesitate to consult]({% post_url /en/2023-08-20-test-zigbee-sensor-temperature-humidity-sonoff-SNZB-02P %}){: target="_blank"}.

{%- include alert.html type="info" text="For Info At Itead official supplier Sonoff benefits from <b>10%</b> additional discounts with the code <b>HAADESONOFF</b>" link="https://itead.cc/product/sonoff-zigbee-temperature-and-humidity-sensor-snzb-02p/ref/122/" textlink="Sonoff SNZB-02P Temperature Module" %}

## Conclusion

This is a **conclusive assessment** if you still have doubts then we won't be able to do anything for you 😁. However, there are quite a few ways to get there and above all it works without changing your traditional heating system so the return on investment is almost immediate. It's up to you what you plan to do.

{%- include alert.html type="warning" text="We are going to <b>prepare a Live</b> which will be broadcast on <b>November</b> on the YouTube channel where I will present to you the automation of the same heating but all controlled <b>by a Sonoff NSPanel Pro </b>, so we will tour the Sonoff universe and be able to see the positive points but also the limits of such a system." link="" textlink="" %}

> For any help with installation, don't hesitate to write, I will respond to your messages.

