---
guid: 19
title: 'home assistant icon tip'
description: 'Change the icon of a binary sensor in home assistant'
categories: [Home-Assistant, Haade-lab]
tags: []
date: '2021-09-15T07:00:00+00:00'
last_modified_at:
authors: Nico
layout: post
published: true
noindex: false
sitemap:
  changefreq: #always hourly daily weekly monthly yearly never
  exclude: #'yes' or 'no'
  priority: #between 0.0 to 1.0, 1.0 high priority
  lastmod: # date to end modification
locale: en_GB
addViews: 254
toc: false
image: changer-icone-element-binaire-home-assistant.png
redirect_from:
  - /en/blog/home-automation-smarthome-jeedom-homeassistant/tutos-haade-lab/home-assistant/changer-licone-dun-capteur-binaire-dans-home-assistant/
---

Here is in the series **of the very small tutorials** . I will quickly describe how to change an icon of a **binary sensor** thanks to the device\_class, by customization in home assistant.

So in normal times to change an icon of an entity of a device, nothing could be simpler:

Configuration &gt;&gt; Entities &gt;&gt; you change the class icon to **hass:** or **mdi:** as desired. And it’s over.

But when you want to change the icon of a binary, *example:* a door opening detector. **There it gets complicated** because there is an icon for an open position and an icon for a closed position. Don’t worry, Home assistant is in the place.

In this case, the customization must be used in the **customize.yaml.**

First of all, you have to add the integration line in the configuration.yaml [click there and you will find all the information about the configuration of the file.](https://www.home-assistant.io/docs/configuration/customizing-devices/){: target="_blank"}

To keep things simple, you have to add this line:

{% highlight yaml %}
homeassistant:
  customize: !include customize.yaml
{% endhighlight %}

Once done go to:

Configuration &gt;&gt; Personalization &gt;&gt; Choose an entity

**Modify or create by adding a device\_class** In general it exists, and there you have a panel of choices (garage door, window, movement …), select in 1 and don’t forget no save.

View this beautiful animated GIF that takes it all right.

![modification of a default icon of a device in home assistant]({{site.url}}{{ site.baseurl }}/assets/images/posts/{{ page.guid}}/modification-icone-device_class-element-binaire-personnalisation.webp{{ cachebuster }}){: width="820" height="404"} 

Modification of an icon of a binary sensor in home assistant thanks to the customization of device_class entities Finally, we can say *that home assistant has once again thought of everything.*
