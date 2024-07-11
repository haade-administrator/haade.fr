---
guid: 133
title: "Z-wave 800 Long stores the bottom of the z-wave"
description: "I will detail the latest z-wave 800 protocol and take stock of this protocol and the association modes, with the latest shelly modules for testing on a Zooz ZST39 controller."
ref: "Z-wave 800 long range"
layout: post
authors: [Nico]
date: 2024-07-11 23:30
last_modified_at: 
categories: [Automation, Protocoles, Z-wave]
tags: []
video: 
image: 'les-forces-du-z-wave-800-lr-et-exemples-associations-group.png'
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
  - https://zwave-js.github.io/zwave-js-ui/#/
---

This is another article that is close to my heart, the Z-wave protocol is coming back to the forefront. Silabs has decided to change things, module prices are finally accessible, manufacturers are starting to produce modules integrating the latest protocol again.

Finally I can write a complete article on the Z-wave 800 long range, Domadoo our partner sent us various shelly and zooz modules and I can finally test the Z-wave network.

## Prerequisites
1. A box with Home Assistant OS or a **zwave-js UI server**
2. A Z-wave 800 long range Zooz ZST39 key
3. Z-wave 800 compatible modules (shelly or others)

{% include product-embed.html image="zooz-controleur-usb-z-wave-800-zst-39.png" title="Dongle Zooz Z-wave 800" brand="Zooz" description="Controller dongle Zooz Z-wave 800 east-39" domlink="smart-home-hub/7041-zooz-z-wave-plus-800-series-usb-stick-853478006391.html" amazlink="3S8eKh9" %}

{%- include alert.html type="info" text="Haade.fr is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means to earn fees when creating links to Amazon.com and affiliated sites." %}

I [talked about it in a previous article]({% post_url /en/2024-03-13-z-wave-800-long-range-silabs-renewal %}), Z-wave almost disappeared from our radars, but Silicon Labs was able to resurrect it, Z-wave alliance changed its way which made it possible to produce its modules differently. In my opinion, two points betrayed this protocol.
1. the cost of prohibitive modules compared to Zigbee modules
2. consumption and type of batteries used for end devices products

But that's a thing of the past, the z-wave 800 modules are now at the price of zigbee modules, and battery consumption has been significantly increased with almost 10 years of autonomy, even higher than zigbee.

## A little look back at Z-wave

### the positive points

- Absolute Security S2, impossible to crack
- the price of **modules falling**{: .blue}
- Backwards compatible with all z-wave
- Backwards compatible with mesh network modules
- lifespan of modules on battery **(greater than 10 years)**{: .blue}
- Number of functions **integrated in the modules**{: .blue}
- all z-wave modules can be associated with each other and operate without a home automation box

### The negative points

- Long rage **unavailable in europe**{: .red}
- Return of the star mesh
- absence of **modules on the European market**{: .red} but about to change
- firmware of the modules constantly evolving (young 800 protocol), so you will have to pay attention to updates

{%- include alert.html type="warning" text="Please note the Long Range is not available for Europe because it is impossible to set up on the 868Mhz frequency." link="https://z-wavealliance.org/what-is-z-wave-long-range-how-does-it-differ-from-z-wave/#:~:text=At%20this%20time%2C%20Z%2DWave,APAC%20regions%20in%20the%20future." textlink="Z-wave Long Range unavailable in Europe" %}

## Security S2 and z-wave 800 LR

The device supports the latest Security 2 (S2) feature. S2 is powered by the Strong AES 128 encryption protocol, which means S2 makes Z-Wave® the most secure IoT (Internet of Things) security platform on the market. To fully utilize the product and its Security 2 functionality, a Security 2 compatible Z-Wave® gateway must be used.

The device also supports Security 2 authenticated, unauthenticated, and unsecured inclusions.

**Security Keys:** Z-Wave network keys for secure S0/S2 inclusion. You can enter them manually or generate them automatically using the random generator button or by pasting your OZW keys into the input, they will be automatically converted to the correct format. Example of a valid key: 5C14897467C42598518AF155DE6CCEA8 (length is 32).

- **S0_Legacy:** inherited S0 key
- **Unauthenticated S2:** like authenticated S2, but without verification that the correct device is included (skip the DSK verification step).
- **S2 Authenticated:** security systems, sensors, lighting, etc.
- **S2 AccessControl (highest):** used for door locks, garage doors, etc.

## Long Range valid or not

Designed to deliver dramatically extended wireless range and support robust networks, Z-Wave LR extends Z-Wave connectivity beyond the confines of the home and accelerates adoption of Z-Wave in other verticals such as light commercial, hospitality and multi-residential units (MDU). Z-Wave Long Range is a further addition of 100 kbps DSSS OQPSK modulation to the Z-Wave protocol. Modulation is treated as a fourth channel, allowing gateways to add LR nodes to the analysis of existing Z-Wave channels. **At this time, Z-Wave LR is only available for the US market.** However, the technical working group **evaluates and tests compliance** to **ensure support for regions Europe** and APAC in the future.

> With **a little luck** and compliance in our favor will allow the z-wave alliance to develop the long range in our regions.


### Evolution of the z-wave Alliance

Developed and managed by the new Z-Wave Alliance Technical and Certification Working Groups, the updated specification was designed to usher in a new era of Z-Wave connectivity while adhering to the core values ​​of Z-Wave technology such as backward compatibility and interoperability. The updated specification promotes a number of key technical benefits that are best summarized as increased range and coverage, increased scalability, optimized battery life, and interoperability. <cite>Z-wave Alliance</cite>

## The mesh network disappears

{% picture posts/{{ page.guid }}/network-mesh-star-z-wave-800-lr.png --alt mesh or star network diagram option constituting the z-wave LR 800 and others --img width="940" height="816" %}

What made **the strength of the z-vave 400 to 700 as well as the zigbee 3.0 protocol** disappear on the Z-wave 800 protocol is the mesh network which makes it possible to relay the waves between the router modules and increase the transmission distance of network waves.

> In principle this is great because it allows you to simply strengthen your network but the disadvantage is that it increases the latency time between transmission and reception.

**Z-wave 800 LR is backwards compatible** with network mesh (concerns older modules) but it is not backward compatible with 800 series modules, there it will work as a star identical to wifi mesh, ** basically all 800 modules connect directly to the z-wave coordinator. Fortunately the ZG23 chips have a TX transmission of +20dbm which allows the distance to be increased even if Long Range is not active.**

> I tested the transmission in a closed environment by spacing the dongle modules as much as possible and I encountered no connection problems or transmission latency, a good point.

### Z-wave range test

{% include product-embed.html guid="2148" %}

Below you will find a diagram where I tested the range of the z-wave star network. Two z-wave 800 lr shelly modules and one fibaro wallplug z-wave 500 module are on the network. For your information, the test is carried out in a closed environment, the shelly 1 PM and fibaro wallplug modules are separated from the Zooz adapter by a concrete slab.

- The shelly shutter module is **1 meter** from the coordinator and at a loss of **-61 dbm**
- the fibaro module is **16m** away and has a loss of **-88dbm**
- the shelly 1 PM module is the furthest away and isolated at **20m** and has a loss of **-84dbm**

**Despite the star mesh** I did not encounter any problems with connections and latency when reacting, you will see that thanks to the external antenna of the shelly 1PM the reception is of better quality than the Fibaro wall plug.

{% picture posts/{{ page.guid }}/test-portee-z-wave-800-et-500-milieu-clos.png --alt z-wave 800 lr scope test in a closed environment --img width="700" height="400" %}

{% include product-embed.html image="micromodule-commutateur-z-wave-800-shelly-wave-1pm-shelly-qubino.png" title="Shelly Z-wave 1PM" brand="Shelly" description="Shelly Z-wave 1PM Switch" domlink="actuators-dimmers/6747-z-wave-smart-relay-switch-shelly-wave-1pm-shelly-qubino.html" amazlink="3XZJmFj" %}

## Group and associations

Already cited in a previous article, what makes z-wave strong and which was for a long time an economic obstacle **lies in this proprietary protocol**. In fact all Z-Wave chips are compatible with each other *because only Silabs products*, which is not the case for ZigBee and allows Z-Wave to produce backward compatible modules and communicate directly with each other without going through a z-wave gateway/controller.

### I tested the module associations

{%- include alert.html type="warning" text="<b>Please note:</b> all modules can be associated with each other <b>if they are on the same security level</b>. An S2 safety module cannot be linked with a non-safety or S0 safety module" %}

> To link two modules together, you must check that they have the same commands such as On/Off, the group may be different. Otherwise we would do anything.

[Online instructions for shelly z-wave 800 modules](https://kb.shelly.cloud/knowledge-base/shelly-qubino-wave-devices){: target="_blank"}

Succeeding in associating two modules **together is not difficult, you still need to understand the principle.** Don't forget that only a physical action on a module makes it possible to control a function of another module.

> Clicking on a switch connected to a module will allow you to control a function of another module directly.

{%- include alert.html type="warning" text="Module association actions, for example: on/off, <b>do not operate by a radio command but by a physical button</b> located on the device such as a switch for example" link="https://blog.domadoo.fr/guides/groupes-dassociation-z-wave/" textlink="Explanation of groups and associations on the Domadoo website" %}

#### Case No. 1:

I have a z-wave shelly qubino 1 PM z-wave 800 module (module which can be placed behind a physical switch) which has an On/Off action on group 2, by configuring correctly I can make it act directly through a physical switch with a Fibaro Z-Wave 500 socket module which also has an On/Off control on the group. Provided that the shelly module is included without S2 security. Below is the configuration in Z-wave JS UI of an association created on the shelly PM.

the animated gif below represents the association between the fibaro wall plug and the shelly wave 1PM on the on/off groups

- groups 2 and 3 of fibaro will join forces with group 2 of shelly
- both are configured without security
- group 2 shelly on/off can associate with group 2 fibaro but not with group 3

**Explanation**: group 2 and 3 of the fibaro are on/off groups, group 2 represents an on/off action on the physical button of the fibaro and group 3 represents an on/off action when the intensity of the module detects a change (in short when you plug in a charger for example and the fibaro is on, normal!)

> We do have a case where 2 different groups can associate with each other: group 3 of the fibaro on group 2 of the shelly because they are all **On/Off** groups.

![association of two z-wave 800 and z-wave 500 modules without functional On/Off group security]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/creation-association-meme-securite-z-wave-800-et-500-group-on-off.webp{{ cachebuster }}){: width="840" height="693" class="lazyload pictaninpost"}

**PS:** you can easily find all the groups, associations and endpoints [on the online instructions for the Shelly module](https://kb.shelly.cloud/knowledge-base/wave-1){: target="_blank"}.

#### Case No. 2:

{% include product-embed.html image="micromodule-volet-roulant-z-wave-800-shelly-wave-shutter-shelly-qubino.png" title="Shelly z-wave Shutter" brand="Shelly" description="Shelly Z-wave Shutter shutter switch with consumption measurement" domlink="roller-shutters-blinds-gates/6803-z-wave-smart-shutter-relay-switch-shelly-wave-shutter-shelly-qubino-3800235269008.html" amazlink="3WgzQMT" %}

Combining two Shelly z-wave 800 modules is child's play.

- the two shelly modules are on the same S2 security standard
- Shelly shutter has two actuators you can find all the commands on rootpoint, or the commands of the actuator on endpoint 1 and of the actuator 2 on endpoint 2, it's up to you!
- Shelly 1PM only has one actuator so you will have no other choice but to choose Rootpoint

[Shelly wrote a resource on ways to create associations](https://support.shelly.cloud/en/support/solutions/articles/103000194120-setting-associations-of-the-wave-devices-in-home-assistant-z-wave-js-ui){: target="_blank"}

![Combination of shelly z-wave 1 PM module and wave Shutter group 2 on/off on the same S2 security standard in rootendpoint or endpoint 1, child's play]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/creation-association-shelly-1pm-et-shutter-meme-securite.webp{{ cachebuster }}){: width="840" height="693" class="lazyload pictaninpost"}

#### Case 3:

The association of two modules with a different safety standard is impossible.

{% picture posts/{{ page.guid }}/selection-securite-z-wave-inclusion.png --alt selecting the security level when including a module --img width="710" height="375" %}

In the screenshot below you will see that the fibaro does not have security, if you want to associate it with a z-wave 800 module you will have to configure the absence of security when including it.

![Impossible to associate two z-wave modules on a different security standard S2/nothing S2/S0]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/impossibilite-association-z-wave-securite-differente.webp{{ cachebuster }}){: width="840" height="693" class="lazyload pictaninpost"}

{%- include alert.html type="info" text="Haade.fr is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means to earn fees by linking to Amazon.com and affiliated sites." %}

## Conclusion

Given the prices charged on Z-wave 800 lr modules and the enormous advantages of the compatibility/backward compatibility of this protocol which allow two modules to be associated with each other, and a highly efficient mesh or star network, make this protocol an essential , I find it even more professional than the Zigbee 3.0 protocol.
**All that remains is for manufacturers to once again offer an expanded range of modules.**

> Congratulations to the [z-wave JS UI team](https://zwave-js.github.io/zwave-js-ui/#/){: target="_blank"} for this very professional management interface.


