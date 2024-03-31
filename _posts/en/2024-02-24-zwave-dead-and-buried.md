---
guid: 111
title: "Z-wave dead and buried"
description: "Since the arrival of the Zigbee protocol on the market, the Z-wave protocol seems to be at a standstill, let's take stock of this situation."
ref: "z-wave"
layout: post
authors: Nico
date: 2024-02-24 20:47
last_modified_at: 
categories: [News, Automation]
tags: []
image: 'why-z-wave-is-dead.png'
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
  - https://community.home-assistant.io/t/how-to-create-association-with-zwave-js-or-zwave-js-ui/621072/2
  - https://www.home-assistant.io/blog/2024/02/15/nabu-casa-joins-z-wave-alliance/
  - https://products.z-wavealliance.org/regions/1/categories/25/products
  - https://community.hubitat.com/t/is-zwave-a-dying-technology/112627
  - https://www.silabs.com/wireless/z-wave/introduction-to-z-wave-800-series
  - https://community.silabs.com/s/share/a5U8Y000000bwgaUAA/zwave-500-vs-700-vs-800-why-use-the-new-800-series-for-smart-home-devices?language=en_US
  - https://blog.domadoo.fr/91814-silicon-labs-annonce-puce-z-wave-serie-800/
  - https://www.domadoo.fr/fr/peripheriques/6151-capteur-d-ouverture-portefenetre-z-wave-800-zse41-zooz-853478006414.html
  - https://www.security.org/home-security-systems/z-wave-vs-zigbee/
  - https://z-wavealliance.org/news_p/z-wave-alliance-announces-z-wave-source-code-project-is-complete-now-open-and-widely-available-to-members/
---
I admit, **the title is a bit big**, it is still a question of making an objective retrospective of this protocol **which seems to disappear from the radars of European resellers.** Since the arrival of Zigbee with its free protocol, prohibitive prices for Z-wave modules, and high battery consumption **have given way to its abandonment**. However, everything **is not so dark**, *so is Z-wave close to extinction at least in Europe!*

## History of Z-wave

- In 2001 the [Zen-sys company](http://www.zen-sys.com/){: target="_blank"} launched the marketing of the Z-wave protocol
- In 2008 Sigma Designs bought the Z-wave protocol
- Between 2008 and 2011 only Sigma designs manufactured the chips but was unable to keep up the pace given the increasingly strong demand
- In 2011 Sigma Designs joined forces with Mitsumi to manufacture z-wave chips.
- [In 2018 Silicon labs bought the company Sigma-designs](https://news.silabs.com/2018-04-18-Silicon-Labs-Completes-Acquisition-of-Sigma-Designs-Z-Wave-Business){: target="_blank"}

## Evolution of Z-wave since 2001

Since its beginnings, the protocol has undergone 3 major developments. Imagine that I have another mesh on my private network with z-wave 400 modules controlled by an Aeotec zen-stick gen5 key allowing you to control modules incorporating the 500 series.

**The Z-Wave 500 Series, launched in 2013**, was developed as an upgrade to the Z-Wave 400 Series. Z-Wave 500 Series modules provided Z-Wave Plus compatible devices* extended wireless range, higher data rate, larger memory capacity and lower power consumption compared to its predecessor*.
**The Z-Wave 700 series was released in 2019**. Compared to the 500 series, the 700 series systems on chip (SoC) and modules have brought significant improvements such as faster wireless speed, **extended battery life** and Wireless range of up to 1 mile.
**The Z-Wave 800 series launched in 2021** is the most advanced version of Z-Wave to date. Z-Wave 800 SoCs and Modules Take a Significant Leap Forward with **Extremely Low Power Consumption**, More than *10 Years of Coin Cell Battery Life*, Wireless Range Greater than 1.5 Miles , robust security and much more.

## Why talk about it now

Like many of you, [I read the article published on the Home Assistant blog on February 15 announcing this alliance](https://www.home-assistant.io/blog/2024/02/15/nabu-casa-joins-z-wave-alliance/){: target="_blank"}, through this subject Home assistant wishes to strengthen its position with regard to the z-wave protocol in order to offer **to its users all possible choices on protocols and home automation**. The fact of certifying [z-wave JS](https://github.com/zwave-js){: target="_blank"} will perhaps restart the consortium and **the manufacturers to repropose and manufacture again a significant number of modules.** Because since the arrival of Zigbee, the number of modules offered has been in sharp decline for several years.

{% picture posts/{{ page.guid }}/nabucasa-consortium-zwave-alliance.png --alt nabucasa and home assistant join the z-wave alliance to launch the z-wave JS certification process --img width="940" height="529" %}

## Some numbers

There are more than **4,384 interoperable Z-Wave products** worldwide and more than 94 million Z-Wave products have been sold since 2001. They all work together regardless of brand because they are all based on the **proprietary** Z-Wave protocol.
Browse the product finder to see what Z-Wave can do for you [Europe Z-wave modules list](https://products.z-wavealliance.org/regions/1/categories/25/products){: target="_blank"}

## **the positive points** of {{ page.ref }}
{: .blue}

In my opinion, the **z-wave mesh is more secure and stable than the Zigbee mesh** and has been since the 400 series. The points that put me off the most with z-wave and in fact that's why I am switched to zigbee, have been greatly improved and strengthened with the 800 series of the protocol.
- reinforced network
- improved distance
- very low consumption of battery modules
- backwards compatible between different chip series

A very **big positive point** for the protocol is the fact that it is proprietary. All modules are interoperable. So **z-wave associations** which is the equivalent of **Zigbee Bindings** (For those who don't know what it is, it allows you to link two modules directly together and to work together without switching by its home automation box.) can be used between all modules, simply configure the functions of each module. **Example:** operating a battery-powered switch with a wired switch.

> It's honestly super interesting.

## **the negative point** of {{ page.ref }}
{: .red}

In my opinion there is only one negative point which leads z-wave to its downfall, **it is again the full ownership** of Silicon labs to manufacture the modules. Which makes module manufacturers dependent on production prices and manufacturing times **practiced by Silicon Labs which imposes a certain Monopoly.**

**But good news** this is changing **with the arrival of the 800 series**, Silicon Labs announces reduced production prices and manufacturing times, which lowers prices.

**As an example** I took the **Shelly brand** which also bought Qubino, in double relay micromodule up to the 700 series this type of module was sold for around €50 now **you find them at 34€** almost identical to the price charged for a zigbee module 

{% include product-embed.html image="shelly-qubino-micromodule-commutateur-double-z-wave-800-shelly-wav.png" title="Micromodule double relay z-wave 800" brand="Shelly à 34€" description="Remotely control two independent electrical devices (e.g. lights) and monitor their power consumption separately and in total." domlink="actionneurs-variateurs/6786-shelly-qubino-micromodule-commutateur-double-z-wave-800-shelly-wav-3800235269015.html" %}

**Second example** door opening sensors went from 40€ for the 700 series to **28€ for the 800 series** as an example we [find aqara zigbee 3.0 for 20€](https://www.domadoo.fr/fr/detecteurs/6707-detecteur-d-ouverture-portefenetre-zigbee-30-door-and-window-sensor-t1-aqara.html?domid=39){: target="_blank"}, only €8 less, it looks like the bet is won.

{% include product-embed.html image="capteur-d-ouverture-portefenetre-z-wave-800-zse41-zooz.png" title="Zooz z-wave 800 door opening sensor" brand="Zooz to 28€" description="Monitor your door or window with the ZSE41 opening/closing sensor from Zooz!" domlink="peripheriques/6151-capteur-d-ouverture-portefenetre-z-wave-800-zse41-zooz-853478006414.html" %}

## Silicon Labs relaunches Z-wave

With **two new chips ZG23 and ZGM230S** and the arrival of the **very latest ZG28 chip** Silicon Labs is launching the 800 series which according to them has many advantages and which could put z-wave back on the forefront of the scene:

|**Longer battery life**|The Z-Wave 800 series reduces transmit current up to 42% and reduces receiver current up to 600% compared to Z-Wave 700 hardware, delivering up to 10 years of battery life with a coin cell.|
|**Extended wireless range**|The Z-Wave 800 series can achieve range up to 1.5 miles, a 50% increase compared to the Z-Wave 700 series, therefore delivering wireless connectivity well beyond the yard.|
|**In-built S2 security**|Protects against security threats and reduces the investment for device makers by reducing security design and expertise.|
|**Secure Vault**|Silicon Lab's industry-leading security suit enable secure sub-GHz wireless connectivity, protecting the IoT connected products, customers, data, intellectual property, and backend services against evolving security threats.|
|**Continual security development**|Silicon Labs leads the market in IoT security development, reducing device makers' risks and investments while ensuring compliance with the latest IoT security regulations.|
|**Brand protection**|The best-in-class product specifications when combined with Silicon Labs hardware enable a better smart home product experience.|
|**Faster processing**|Through ARM Cortex-M33 mircroprocessor at 78 MHz.|
|**LESENSE (+ACMP)**|Allows for low power switch detection and associated battery life improvements.|
|**Reduced development cost and time to market**|Allows for easier market access owing to readily available solutions with the ZGM230S module.|

[800 Series Advantage](https://www.silabs.com/wireless/z-wave/introduction-to-z-wave-800-series){: target="_blank"}


## Conclusion

Z-wave was an interesting protocol that had developed greatly in the 2000s. With the arrival of Zigbee, Z-wave foundered, **but since the acquisition of Silicon Labs in 2018** and the creation of two New 800 series chips could give this protocol a boost again. The fact that Nabu Casa is strengthening ties with this protocol demonstrates the strength of Silicon Labs in bringing it back to the forefront.

> **So to answer the famous question:** Yes the z-wave protocol almost died and no it is not dead and buried.
