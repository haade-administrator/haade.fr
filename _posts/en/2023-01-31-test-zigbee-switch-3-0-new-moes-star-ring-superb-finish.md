---
guid: 43
title: "test of the new Moes Star Ring zigbee switch"
description: "Moes star ring ZS-SR-EU recently launched on the market does the new smart switch live up to our expectations?"
layout: post
author: Nico
date: 2023-01-31 11:01
last_modified_at: 
categories: [Tests, News, Haade-lab]
tags: []
image: 'interrupteur-zigbee-moes-star-ring-smart-switch.png'
toc: 
beforetoc: ''
published: true
noindex: false
sitemap:
  changefreq: 'monthly'
  exclude: 'no'
  priority: 0.5 #between 0.0 to 1.0, 1.0 high priority
  lastmod:  # date to end modification
locale: en_GB
addViews: 133
comments: true
rating: 4.4
sourcelink:
---

During my **years of experience in home automation** I bought all kinds of connected switches, Xiaomi zigbee 1.0, Z-wave MCOhome switches overpriced and functional 2 years, Moes switches with button zigbee touch screens and push buttons. *This is now the third series tested at Moes, so what are these Moes Star Ring ZS-SR-EU switches worth?*

{% include product-embed.html image="moes-star-ring-ZS-SR-EU-smart-switch-interrupteur-zigbee.png" title="New Moes Star ring series Zigbee switch" brand="Moes" description="MOES – Tuya Star Ring connected push button switch, zigbee 3.0, with remote control, works with Alexa and Google" affiliate="_DD0tVR9" %}

# General rendering

The fast delivery and the correct packaging, the first thing that struck me **was the aesthetic rendering* of the smart ring switch. It is very successful** and the plastic effect is very well gummed, the weight is quite substantial which again is rather **qualitative**, and the texture to the touch is silky some would say satiny **it's very pleasant.**

{% picture posts/{{ page.guid }}/moes-star-ring-switch-zigbee-new-top-qualite-finition-coque.png --alt General appearance of Moes star ring ZS-SR-EU zigbee switch --img width="940" height="529" %}

# Detailed rendering

The switch buttons are thin but strong, all placed on a plate of the same thickness.
The fixing plate is made of steel and is thick enough not to bend during integration into the junction box **that's really great**, as the big French brands know how to do.

> The module that fits into the junction box is slightly bulkier but don't worry, it fits in French junction boxes.

**Again it's a success.**

{% picture posts/{{ page.guid }}/moes-star-ring-switch-zigbee-new-top-quality-support-acier.png --alt moes smart ring switch undercover --img width="940" height="529" %}

# Functioning

The switches are well **recognized in Zigbee2mqtt**, with Tuya as constructor and in *EndDevice* mode, as far as functions are concerned they are identical to other Moes switches:

- memory mode in case of power outages
- backlight setting (off, normal or inverted)
- the quality of the link
- the on/off state

![integration of moes star ring switches in zigbee2mqtt]({{ site.baseurl}}/assets/images/posts/{{ page.guid }}/interrupteur-moes-smart-ring-zigbee2mqtt-integration.webp{{ cachebuster }}){: width="940" height="603"}

The ignition control works very well, the feel to the touch is extra, plus the switch with two up and down contactors for each push button. As far as the backlighting is concerned, it's a success, a white disc that's neither too strong nor too weak, and as Moes says it reflects a starry sky effect, what more can I say except give it 10/10.

{% picture posts/{{ page.guid }}/moes-star-ring-ZS-SR-EU-retroeclairage-effet-etoile.png --alt render of moes star ring zigbee switch backlight ZS-SR-EU star effect --img width="940" height="529" %}

# Official Video

{% include videoPlayer.html youtube="MCr4eaLHaZ4" %}

# Smart ring features:

- Product name: Moes Star ring ZS-SR-EU
- Colors available: Ivory or anthracite (Black Nickel)
- Protocol: ZigBee 3.0
- works without neutral **(end-device)**{: .red}
- Maximum current：10A
- Working voltage: AC100V-240V 50/60Hz
- Working temperature: -10~65℃
- Nominal power (resistive load): <2
- Max operating power: 2000w

# Picture in size

{% picture posts/{{ page.guid }}/moes-new-star-ring-ZS-SR-EU1-WH-MS-smart-zigbee30-push-button-switch-embedded-light-touch-switch.png --alt smart ring moes switch backlight starry effect --img width="940" height="529" %}

# Contents of the package

- Moes Star ring switch ZS-SR-EU
- {% include doclink.html pdf="Moes-star-ring-new-smart-switch-manual.pdf" title="<b>Instruction manual Moes Star ring ZS-SR-EU1</b>" %}
- Bag of 2 screws

# For or against

## The **+**{: .blue} of the product
- **Manufacturing quality**
- solid steel frame
- touch **satin**{: .blue}
- double operation: up and down
- modular
- slim design
- neutral is optional
- backlight rendering **(starry sky)**
- the **price**{: .blue}

## The **-**{: .red} of the product
- no commands [2 way]({% post_url /en/2023-01-29-automate-a-virtual-come-and-go-with-blueprint-and-homeassistant %}) integrate
- end-device switch **( does not repeat signal )**{: .red}
- available for sale only in China (at least for now)

# Conclusion

I've been interested in home automation for almost 10 years, I started on Jeedom 1.0 to tell you that it dates back, well I think **I finally found the switches I need!**
> The manufacturing quality is clearly superior to other Chinese switches.

The steel plate does not deform when tightened, the buttons are extremely well made and I give off light, I don't even mention it, it's great. **Is the aesthetic really there?**
Too bad they don't act as routers and they don't integrate [a 2 way]({% post_url /en/2023-01-29-automate-a-virtual-come-and-go-with-blueprint-and-homeassistant %})  as Sonoff knows how to do, fortunately[we can use automation]({% post_url /en/2023-01-29-automate-a-virtual-come-and-go-with-blueprint-and-homeassistant %}) . For these last two points I took 0.6 off the final score.

> it is one of the switches to have, a safe bet

{% include product-embed.html image="moes-star-ring-ZS-SR-EU-smart-switch-interrupteur-zigbee-anthracite.png" title="New Moes Star ring series Zigbee switch" brand="Moes" description="MOES – Tuya Star Ring connected push button switch, zigbee 3.0, with remote control, works with Alexa and Google" affiliate="_DD0tVR9" %}


