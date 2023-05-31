---
guid: 4
title: 'Zigbee vs Z-wave'
description: "Let's compare the two most used home automation protocols z-wave against zigbee"
date: '2020-02-11T14:05:00+00:00'
last_modified_at: '2022-12-15'
author: Nico
categories: [Automation, Protocoles]
tags: [z-wave, zigbee, comparaison]
layout: post
locale: en_GB
addViews: 50
published: true
noindex: false
sitemap:
  changefreq: #always hourly daily weekly monthly yearly never
  exclude: #'yes' or 'no'
  priority: #between 0.0 to 1.0, 1.0 high priority
  lastmod: # date to end modification
beforetoc:
toc: false
image: zigbee-vs-z-wave.png
comments: true
redirect_from:
  - /blog/home-automation-smarthome-jeedom-homeassistant/protocoles/zigbee-vs-z-wave/
  - /en/blog/home-automation-smarthome-jeedom-homeassistant/protocoles/zigbee-vs-z-wave/
---

**To start**, there are some zigbee vs z-wave comparisons on the internet but I find that they do not go all the way. So I will detail in this article these two protocols which are currently essential in the home automation. So what is the best protocol! are they inseparable we will see that now.

To better understand the zigbee mesh [I recently created an article on this subject, it can be consulted by clicking here.]({% post_url /fr/2020-02-10-zigbee-comprendre-le-protocole-et-le-maillage %})

### Comparison table zigbee vs z-wave

| | **[ZIGBEE](https://zigbeealliance.org/en/){: target="_blank"}** | **[Z-WAVE](https://z-wavealliance.org/){: target="_blank"}** |
|---|---|---|
| **EVOLUTION** | 1.2 – 3.0 | 300 – 500 – 700 |
| Mesh | yes | yes |
| mesh reconstruction | no | **yes** |
| knot care | yes | yes |
| battery consumption | **very low** | moderate |
| cost of batteries | **derisory** | high |
| Security | AES-128 | AES-128 |
| Number of modules | &gt; 600 | **&gt; 1000** |
| Variety of modules | well | **very good** |
| cost of modules | **&lt; 20€** | &gt; 45€ |
| Module configurations | **easy** | complex because varied |
| inclusion | **easy** | random |
| touch link | **yes** ( zigbee 3.0 ) | no |
| bookstore | free or protected | free or protected |
| controller key | **cc2531** /Deconz/zigate | aeotec/Sigma/zway |
| controller cost | **6 – 60 €** | 50 – 70€ |
| Module batteries | CR2032 | Cr123A |
| Cost Varta Batteries | 1,30€ | 3,26€ |
| Theoretical lifetime | 2 years | 2 years |
| Real life | 1.5 – 2 years | 0.5 – 1.5 years |
| scope | 30 – 100m | 30 – 100m |
| responsiveness | instant | instant |
| free bookstore | zigbee2mqtt | openzwave / zwave2mqtt |
| Homeassistant support | **yes** | **yes** |
| Jeedom support | Partial | **yes** |
| **Rating out of 10 Haade** | **8** | 6 |

### So what is the right protocol!

Personally I had 5 years ago started to automate my habitat in z-wave with the home automation manager **[Jeedom](https://www.jeedom.com/en/)**{: target=" _blank"}.

> Throughout these years I have been able to form an objective opinion on the matter. From there was born the desire to publish a comparison zigbee vs z-wave.

  **The z-wave is good** for the choice of various modules such as all current modules, or dry contact placed behind switches, alarm modules etc…. But all the modules on the stack **are greedy** and the **stacks are expensive** moreover the re-inclusion after changing the stack is sometimes **delicate**.

Since May 2019 I have decided to change all the modules on z-wave batteries to xiaomi zigbee modules. This awareness for this change came at the same time as the desire to change the jeedom home automation system to homeassistant.

Admittedly, it was tricky, but I don't regret it. Jeedom started developing **openzigbee** which supports [zigbee2mtt](https://www.zigbee2mqtt.io/){: target="_blank"} but dropped it to deal with deconz. *This is one of the reasons that made me leave this system, but that's another debate.* So integration by mqtt is possible but you have to create virtual ones to control the actions and that's not very waf.

  Then there is the **cost of the modules** which is currently too expensive for my taste for z-wave, that should change in the second half of 2020 but for the moment I have sold the old modules second-hand on a market place and 5 modules on batteries allowed me to collect enough money to pay me 20 in zigbee it is simply surreal. So should we remove the z-wave I would say no because for now the z-wave modules are more varied than zigbee (but this is changing).

## CONCLUSION

### So should we favor Zigbee!

**To conclude, the Zigbee protocol is in my opinion essential** and the z-wave protocol remains complementary or even secondary, but all of this risks changing in 1 to two years with [the arrival of the Home over ip protocol with matter](https://buildwithmatter.com/){: target="_blank"} 😉

In my humble opinion yes it is much more reasonable in terms of cost and maintenance, once you have all the tips to strengthen the mesh it even becomes essential.
