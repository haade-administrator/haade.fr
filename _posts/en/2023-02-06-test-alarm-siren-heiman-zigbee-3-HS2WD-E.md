---
guid: 45
title: "Siren test Heiman HS2WD-E compatible zigbee 3.0"
description: "Heiman HS2WD-E smart siren compatible with zigbee 3.0, what is it worth?"   
author: Nico
date: 2023-02-06 08:06
last_modified_at: 
categories: [Automation, Tests, Zigbee]
tags: []
image: 'heiman-sirene-alarme-zgbee-3-HS2WD-E.png'
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
rating: 4.6 
sourcelink:
  - https://www.heimantech.com/product/?type=detail&id=8
  - https://www.domadoo.fr/fr/peripheriques/5714-heiman-sirene-interieure-intelligente-zigbee-30.html?domid=39
---

Here is a smart siren that has been around for a long time, at the very beginning **Heiman** made a zwave version without backup batteries which was a big disadvantage, but since then there is a Zigbee version with backup batteries and the **everything to less than 30€**, so we are entitled to wonder if this siren is worth the detour.

{% picture posts/{{ page.guid }}/heiman-smart-siren-prise-en-main-HS2WD-E.png --alt Heiman HSWD-E grip --img width="940" height="530" %}

{% include product-embed.html guid="2138" %}

With its generous dimensions and vibrant colors this siren is very well made, I wanted to open it to see what was hidden underneath and I couldn't because the assembly is solid. The socket adapter fixing system is very well done.

{% picture posts/{{ page.guid }}/heiman-sirene-alarme-zgbee-3-HS2WD-E-face-arriere.png --alt Heiman HS2WD-E rear side --img width="940" height="530" %}

# Integration in Zigbee2mqtt

The siren works fine in **router**{:.blue} mode.

{% picture posts/{{ page.guid }}/heiman-smart-siren-about-z2m-HS2WD-E.png --alt screenshot integration zigbee2mqtt heiman siren --img width="940" height="682" %}

The siren is **immediately recognized in Z2M**, the parameters are numerous:

{% picture posts/{{ page.guid }}/heiman-smart-siren-expose-z2m-HS2WD-E.png --alt capture tab exposes Z2M integration of heiman HS2WD-E siren --img width="940" height="387" %}

- recognized as a router
- allows you to see the battery charge level
- choice among 8 sound modes (stop, burglar, fire, emergency, police panic, fire panic, emergency panic)
- 4 sound levels
- 4 light levels
- On/Off light
- flash cycle length (0 to 10)
- alarm duration in seconds
- quality of the link

{% picture posts/{{ page.guid }}/heiman-smart-siren-expose-mode-alarm-z2m-HS2WD-E.png --alt multi sound mode supported in Z2M --img width="940" height="278" %}


The alarm **does not have a virtual or physical ON/OFF button** it will be necessary in homeassistant to create an automation as below

{% highlight yaml %}
  - alias: 'Activate siren'
    trigger:
      platform: state
      entity_id: alarm_control_panel.your_alarm
      to: 'triggered'
    action:
    - service: mqtt.publish
      data:
        qos: 0
        retain: false
        topic: zigbee2mqtt/your_siren/set_message
        payload: '{"warning": {"duration": 10, "mode": "emergency", "strobe": false}}'
{% endhighlight %}

*Making sure to replace:*

- **your_alarm** by the **name of your alarm**
- **your_siren** by the name of your **Heiman siren**

> So you can choose the operating time, the "stop" or "emergency" mode and the activation or not of the light.

## Animation in user integration mode

![user integration of the Heiman Zigbee HS2WD-E alarm in an automation with Home-Assistant]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/heiman-sirene-hs2wd-e-integration-action-ha.webp{{ cachebuster }}){: width="940" height="885"}

# The **+**{: .blue} of the product

- many functions
- Built-in battery with up to 4 hours of running time
- Powerful sound of **95 dB**
- Easy to install

# The product **-**{: .red}

- Siren only intended for the interior of the accommodation
- Integration only on socket (difficult to adapt it with an external transformer)
- no alarms in case of break-ins (when unplugged)

# Functions:

- Zigbee 3.0 siren on socket
- Sound and light signaling
- Zigbee protocol to launch a scenario accordingly
- Built-in battery with up to 4 hours of running time
- Powerful 95 dB sound
- Easy to install
 
# Technical characteristics :

|Operating Voltage| AC110-240V|
|Backup battery| 3.8V/700mA|
|Alarm sound level| 95db (1m distance)|
|Wireless Network Range| <80m (range in free field indoors)|
|Operating temperature| -10°C to +50°C|
|Working humidity| <95% RH (indicating no condensation)|
|Protocol| Zigbee 3.0 (2.4Ghz)|
|Size| 80mm*80mm*32mm|

{% include doclink.html pdf="heiman-siren-manual-HS2WD-E.pdf" title="Heiman smart siren zigbee 3.0 HS2WD-E installation manual" %}


{% include product-embed.html guid="2138" %}

# Conclusion

**Here's an alarm to have** especially if the plug system doesn't bother you. It will largely do the job, the battery lasts 4 hours in constant operation (ringtone + LED activated). It's been 24 hours since I unplugged it and I'm still at 92% as much to tell you that it will continue to ring.
