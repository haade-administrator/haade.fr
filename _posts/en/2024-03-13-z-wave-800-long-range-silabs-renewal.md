---
guid: 113
title: "Z-wave 800LR Silabs relaunches z-wave"
description: "Since the acquisition of the manufacturing of Z-wave chips, and the significant progress on the market, Silabs is preparing to resuscitate Z-wave on the European market"
ref: ""
layout: post
authors: Nico
date: 2024-03-13 12:47
last_modified_at: 
categories: [News, Z-wave]
tags: []
image: 'z-wave-800-lr-silabs-relance-le-protocole.png'
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
  - https://www.heltun.com/post/comparing-z-wave-zigbee-and-wi-fi-what-should-you-choose-for-your-installation
  - https://blog.domadoo.fr/80136-la-z-wave-alliance-devoile-la-certification-z-wave-plus-v2-pour-la-serie-700/
---

Since the acquisition of the manufacturing of Z-wave chips, and the significant progress on the market, **Silabs is preparing to resuscitate Z-wave on the European market.** Last month I [wrote an article on the end of Z-wave]({% post_url /en/2024-02-24-zwave-dead-and-buried %}), where I explained that this protocol almost disappeared, especially in Europe because of the the arrival of Zigbee (among others).

> The main disadvantage of z-wave is the cost of returning the modules but **Zooz and Shelly** are demonstrating the opposite, how is this possible?

## Z-wave proprietary protocol proprietary pricing

The fact that z-wave is a proprietary protocol requires module manufacturers to **pass, among other things, certification** and it has a cost and a deadline, below you can download the certification process dated January 2025 .

{% include doclink.html pdf="ZWA_Certification.pdf" title="process certification z-wave" %}

Despite a **reviewed and optimized certification process** in order to limit production costs and lower the sales prices of modules.
If a manufacturer wants to resell an **end-devices** module such as a door contactor for example, he will have to go through a certification of **3600$ or 3.6$/1000 products sold** per module to be added compared to zigbee, for a controller or a gateway **it's $6600 or $6.6/1000 products**

> So on the certification stage we must already add between $3.6 and $6.6 compared to zigbee

## Prices for Silabs chips

[https://www.silabs.com/wireless/z-wave](https://www.silabs.com/wireless/z-wave){: target="_blank"}

**First new feature**, *Silabs reveals the prices* for the **z-wave 800LR** version and if we look more closely, the z-wave chips are **barely more expensive than Zigbee chips**, so I'm not comparing everything because there are still differences, but manufacturers will no longer have the excuse of excessive costs of using this protocol.

Silabs currently markets **3 Z-wavae 800 chips**, two in SOCs and one dedicated to modules.
You will find:
1. the EFR32ZG23 SoCs chip (Wi-Sun Amazon Sidewalk and mbus compatible) is sold **$4.37** in a 512kb Flash memory and 64kb RAM version
2. the ZGM230S Modules chip at **$5.85** in high security 512MB Flash and 64kb of RAM
3. the new EFR32ZG28 SOCs chip (compatible in addition to the ZG23 Bluetooth) at **$5.23** in high security with 1024MB of Flash and 256kb of RAM

[https://www.silabs.com/wireless/zigbee](https://www.silabs.com/wireless/zigbee){: target="_blank"}

At the same time the prices for zigbee chips (zigbee and thread) are:
1. EFR32MG21 Series 2 SOCs costs **$2.95** with 512MB Flash and 64kb RAM
2. EFR32MG21 Series 2 Modules (bluetooth, zigbee, thread) costs **$6.96** for 1024MB of Flash and 96kb of RAM
3. EFR32MG24 Series Socs costs **$4.34** with 1024 Flash and 128 RAM

> On chips you have to add a **cost of $1.5** On average

{% include product-embed.html image="capteur-d-ouverture-portefenetre-z-wave-800-zse41-zooz.png" title="Door opening sensor Zooz z-wave 800" brand="Zooz at €28" description="Monitor your door or window with the ZSE41 opening/closing sensor from Zooz!" domlink="peripheriques/6151-capteur-d-ouverture-portefenetre-z-wave-800-zse41-zooz-853478006414.html" %}

## Differences between prices

According to simple calculations, a z-wave module should **cost between $5 and $10** more than its zigbee counterpart. I did some research on domadoo.. and...

If you [buy this aqara Zigbee door opener controller](https://www.domadoo.fr/fr/detecteurs/6707-detecteur-d-ouverture-portefenetre-zigbee-30-door-and-window-sensor-t1-aqara.html?domid=39){: target="_blank"} it **will cost you €19.99**
The [Zooz door opening controller in z-wave 800](https://www.domadoo.fr/fr/peripheriques/6151-capteur-d-ouverture-portefenetre-z-wave-800-zse41-zooz-853478006414.html?domid=39){: target="_blank"} **is 27.95€**, a difference of **7.96€**

More recently [Zooz released its first z-wave 800 controller](https://www.domadoo.fr/fr/box-domotique/7041-zooz-controleur-usb-z-wave-800-853478006391.html?domid=39){: target="_blank"} at **€34.95** while [the aeotec zi-stick](https://www.domadoo.fr/fr/controleurs-adaptateurs/6777-controleur-usb-zigbee-zi-stick-aeotec-1220000017191.html?domid=39){: target="_blank"} is sold **29.99€**, less than 5€ difference between the two.

> This is proof that there is a desire on the part of the Z-wave alliance and certain manufacturers to reduce the costs of Z-wave modules.

{% include product-embed.html image="zooz-controleur-usb-z-wave-800.png" title="New Zooz z-wave 800 controller" brand="Zooz" description="Brand new Z-wave long range 800 series hub controller from Zooz! at a very affordable price." domlink="box-domotique/7041-zooz-controleur-usb-z-wave-800-853478006391.html" %}

## Who are the main players in the market

**who work on the z-wave 800LR**

I wanted to use the list of products certified by the z-wave alliance, but I have the impression that this list is incomplete or not yet up to date. Because by looking directly on the manufacturers' website I was able to find additional information.

**Fibaro**: launches a [roller shutter module](https://www.domadoo.fr/en/devices/7040-fibaro-roller-shutter-4-fgr-224-z-wave-800-5902701703899.html?domid=39){: target ="_blank"}, at 84€, way too expensive, they don't seem to want to lower the prices.

**MCO Home**: the release of new products is in progress we find the switch [f-series](https://www.mcohome.com/F-series-Switch-PG7454227){: target="_blank"} and [U-series mechanical switches](https://www.mcohome.com/U-series-smart-switch-PG7454301){: target="_blank"}

**Inovelli**: **nothing for Europe** [but it is in progress](https://community.inovelli.com/t/project-europa-240v-smart-switch-es-for-europe-eu-zigbee-thread-matter/16088){: target="_blank"} for the United States the switch is already in the 800 series.

**Philio**: seems to have been at a standstill for several years, no new products, stock shortages at resellers, it's a shame because they manufactured robust and well thought-out modules.

[**Shelly ( Qubino )**](https://www.domadoo.fr/en/111-products?q=Brand-Shelly+Qubino&domid=39){: target="_blank"}: Since the acquisition of Qubino by Shelly, the company has wasted no time and is **developing a series of modules using the latest chipset 800** found on the market.

[**Zooz**](https://www.domadoo.fr/en/111-products?q=Brand-Zooz&domid=39){: target="_blank"}: Like Shelly Zooz **is following in the footsteps of the z-wave 800** series modules and they are right.

**Popp**: the German manufacturer does not offer anything in the 800 series at the moment

**Aeotec**: nothing for the moment in 800 series

**Heatit Controls**: At Heatit you will find a [built-in thermostat](https://heatit.com/product/10294/smart-products/thermostats/heatit-z-trm6-white-ral-9003/1109){: target="_blank"}

**z-wave.me**: nothing for the moment in 800 series

## Main advantages of z-wave 800 vs Zigbee 3.0

- all modules **are compatible and backward compatible with each other** whatever the brand and could thus function directly even in the event of controller failure (famous binding)
- consumption of **batteries given at 10 years** compared to 3 to 5 years for Zigbee
- an **extended range** (several hundred meters or even thousands) just that?

## Manufacturers don't waste time

As announced in a previous article, there was a time when we found plenty of Z-wave products and this was not the case with Zigbee, but **now it's quite the opposite**, so if manufacturers fall on this article.

> If I were you I would quickly relaunch the Z-wave 800 LR series range in order to be present again on the European market.

## Conclusion

I decided to write this second article in order to measure the impact of the cost of z-wave 800 vs Zigbee 3.0 modules. **It turns out that this has been revised downwards and it is confirmed**, the manufacturers still need to pay attention to it, in any case thanks to **Zooz and Shelly Qubino** for showing the way of resurrection :).

PS: Heltun [wrote an excellent article](https://www.heltun.com/post/comparing-z-wave-zigbee-and-wi-fi-what-should-you-choose-for-your-installation){: target="_blank"} comparing z-wave and Zigbee **don't hesitate to read it.**