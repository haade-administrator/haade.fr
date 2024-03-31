---
guid: 37
title: "Integrate an esp32-cam camera into a light fixture"
description: "Tutorial to integrate an ai-thinker esp32-cam camera into a garage light in spycam mode for less than 10€"
layout: post
authors: Nico
date: 2023-01-12 18:22
last_modified_at: 
categories: [Home-Assistant, Security, Esp]
tags: []
image: 'spycam-esp32cam-ai-thinker-light-applied.png'
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
addViews: 81
comments: true
rating:  
sourcelink:
  - https://frigate.video/
  - https://www.studiopieters.nl/esp32-cam-pinout/
---

Simply, professional and effective Haade-lab tutorial for a **cost of less than 10€**, I will integrate an Ai Thinker Esp32-cam camera into a Philips light fixture fixed in the parking lot, non-intrusive because very little visible, * spy camera operation.* It will be controlled by **the Frigate NVR** and integrated into homeassistant thanks to the esphome service.

# Prerequisites
1. Know how to integrate an Esp32-cam camera in Homeassistant.
2. have an Esp32-cam camera from Ai Thinker.
3. of [dupont wire, connectors and clamp](https://s.click.aliexpress.com/e/_DDtM9rZ){: target="_blank"}.
4. a 5v 1-2A cell phone transformer (the smaller the better).
5. Multi-strand electrical wire, 0.75mm minimum thickness.
6. One or two [Philips Arbor sconces](https://amzn.to/3W8BWv6){: target="_blank"}.
7. [a soldering iron or soldering station and tin](https://s.click.aliexpress.com/e/_DBNhnb1){: target="_blank"}.
8. (optional) an NVR preferably [Frigate](https://frigate.video/){: target="_blank"}.


{% picture posts/{{ page.guid }}/materiel-necessaire-spycam-applique-lumineuse-garage.png --alt spycam in wall lamp with esp32-cam for 6€ --img width="940" height="529" %}


# Flasher et Intégrer la caméra dans HomeAssistant

**I wrote a complete tutorial** on how to do it, [**you just have to read this article**]({% post_url /en/2023-01-04-esp32cam-ai-thinker-homeassistant-esphome-full-configuration %}){: target="_blank"}.

# Prepare the Transformer

{% picture posts/{{ page.guid }}/modification-chargeur-usb-5v.png --alt modification of USB charger in power supply adaptation --img width="940" height="529" %}

For my part, I had a very small Chinese transformer of **5v and 1a**, that's what I needed because the integration in the wall light is reduced. After opening it is enough to desolder the Usb connector, I instead welded two male female dupont wires so I can connect them directly to the 5v and Ground of the camera, on the other side I desoldered the terminals of the head 230v power supply and I connected two electrical wires recovered from an old lamp.

{% picture posts/{{ page.guid }}/modification-chargeur-5v-pour-integration-spycam-esp32cam.png --alt adaptation usb charger 5v in power supply esp32-cam --img width="940" height="529" %}

If you don't feel ready or you don't have a transformer on hand you can also buy a mini power module, personally I advise you to take a mini 1A unit, on the Aliexpress page you will have the choice and can go up to 2A, not bad

{% include product-embed.html image="Convertisseur-de-precision-AC-DC-V-5V-12V-AC-3-3v-5v-cc-module.jpg" title="Mini power module 5V, 2A" brand="RQG" description="Mini 230V AC to 5V dc power supply module at 7, 1 and 2 A" affiliate="_DdKafHl" %}

# Prepare wifi signal reception

There it is a little more delicate but feasible and quite easily with a soldering station and using the hot air blower set to 330°c. Then you have to move the resistor 0805 as in the images below. The image on the left is the home position which defaults to the internal antenna. By modifying the position (right image) it is thus possible to use the connector of the external antenna.

{% picture posts/{{ page.guid }}/esp32-cam-resistor-onboard-antenna.png --alt vector image of resistor position for using wifi internal antenna on an esp32-cam --img width="300" height="300" %}

{% picture posts/{{ page.guid }}/esp32-cam-resistor-external-antenna.png --alt vector image of resistor position for using wifi external antenna on an esp32-cam --img width="300" height="300" %}

# Integration in the light fitting.

{%- include alert.html type="warning" text="You will have to work in the vicinity of a voltage of 220V which is dangerous if you come into contact with an electrical conductor. Be careful of your manipulations, if in doubt cut off the power supply." %}

Now let's move on to the integration step. I will try to do the simplest but also the cleanest and those without drilling holes except for the camera. Thus I will naturally avoid water ingress which could occur inside the wall lamp and cause the meter to trip.

{% picture posts/{{ page.guid }}/assemblage-esp32-cam-applique-lumineuse-philips-arbour.png --alt assembly of the esp32-cam module in the philips arbor light fixture --img width="940" height="529" %}

[The Philips Arbor light wall lamp](https://amzn.to/3W8BWv6){: target="_blank"} breaks down into 3 parts, an aluminum decorative shell which covers a shell and a relatively thick pvc counter-shell. For the integration of the optics the hole to be drilled is **8mm** in the counter-hull and the aluminum hull.
**Unlike the assembly I made, remember to invert the lens and the Esphome module so it will be far from the lighting, the light wave of the lighting as well as the return of the hull will be more conducive to capturing images. 'pictures.**

{% include product-embed.html image="philips-arbour-capteur-mouvement.jpg" title="philips Arbor with motion sensor" brand="Philips" description="Philips arbor wall light with motion sensor" amazlink="3W8BWv6" %}

To fix (transformer, antenna and optics of the camera), I used a hot glue gun, in case of error it is always possible to remove it. Be careful to stick the optics of the camera first and avoid sticking the ESP32-cam module too much. On the one hand you risk overheating the components, on the other hand in case of manipulation you risk taking off the components. However, if you still want to stick the camera module, do so on the bottom left and right edges (see the arrows on the screenshot). If you follow my recommendations in the paragraph above in bold, the glue points will be at the top left and right.

1. fixing the esp32-cam and the antenna with hot glue
2. fixing of the transformer 5v, 1A by point of hot glue the Neutral and the phase are connected with cable of 0.75mm flexible wire
3. **plus**{:.red} and minus are made with [dupont wire, connectors and clamp](https://s.click.aliexpress.com/e/_DDtM9rZ){: target=" _blank"}

> For the moment I put the antenna inside the wall light to see if this integration is viable. Otherwise I will see to deport her.

# Integration in [frigate](https://frigate.video/){: target="_blank"}

For those who don't know Frigate, it's a **NVR dedicated to Homeassistant**, radically efficient, powerful and compatible with Google Coral, if you don't know, try it. Below is the config to integrate into frigate's config.yaml file.

{% gist 8275007ef9a895e69474c45a968d98aa %}

# Connect and test

Nothing could be easier to connect, just plug the **plus red on port 1**{: .red} and the **ground on port 2**{: .black} of the esp32-cam Ai module -Think.

{% picture posts/{{ page.guid }}/pin-cable-esp32-cam.png --alt schéma pin esp32-cam --img width="276" height="191" %}

{% include product-embed.html guid="2133" %}

> All you have to do is assemble the box and do a test before final assembly. 

{% picture posts/{{ page.guid }}/mise-en-place-applique-philips-arbour-avec-camera-esp32-cam-ai-thinker.png --alt installation of esp32-cam in philips arbor light fixture with motion detector --img width="940" height="529" %}

# Conclusion

Here is a relevant integration, which, if **you do well, will cost you less than 10€ excluding the wall lamp.** Knowing that the wall lamps are constantly supplied with 230v, it is possible to integrate a camera there. Moreover, as they are equipped with a light detector, we naturally take advantage of this light to provide brightness in order to film after motion detection at night.

