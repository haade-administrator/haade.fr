---
guid: 158
title: "Tado° which starter kit should I choose?"
description: "Comparison of the two starter kits from the Tado° brand, here is an article presenting the equipment and helping you in your choice when purchasing, the starter kits are essential to use the Tado° heating management in the Tado° application"
ref: ""
layout: post
authors: [Nico]
date: 2025-03-19 08:15
last_modified_at: 
categories: [Tests, Haade-lab]
tags: []
video: 
image: 'tado-which-starter-kit-to-choose-presentation-and-comparison.png'
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
rating: 4.8 
sourcelink:
  - https://tado-rwknz.involve.me/productcompatibility-update-fa01a73abe00-ab546a5c19ba-copy-88cf43650695
  - https://www.opentherm.eu/
---
After presenting the [sumptuous Tado° X thermostatic faucet]({% post_url /en/2025-02-12-tado-x-thermostatic-faucet-test-near-perfection-thread-compatible %}){: target="_blank"}, as well as [the most successful Tado app]({% post_url /en/2025-03-05-full-use-of-the-tado-interface-independent-heating-management %}){: target="_blank"}, Now let's get to the heart of the system. Today, I'm going to introduce you to the two Tado° controllers: the Wireless Smart Thermostat X and the Smart Thermostat X. These two controllers feature the Border Router Thread protocol.

> So, which starter kit should you choose for your installation ?
> 
{%- include alert.html type="info" text="Haade.fr is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means to earn fees by linking to Amazon.com and affiliated sites." %}

## Related Articles

{% include related-article.html guids="154,156" %}

## Introduction

Before getting into the nitty-gritty, if you want to check your boiler's compatibility, Tado has created a tool available.(https://tado-rwknz.involve.me/productcompatibility-update-fa01a73abe00-ab546a5c19ba-copy-88cf43650695){: target="_blank"} online.
Let's start with the Smart Thermostat X, the wired boiler controller using the **com/No/Nc** port.

{% include doclink.html pdf="manuel-bridge-filaire-smart-thermostat-x.pdf" title="Tado° Smart Thermostat X Kit Battery-Powered Boiler Controller Thermostat Manual" %}

### Smart thermostat X

{% include product-embed.html image="starter-kit-tado-smart-thermostat-x.png" title="Smart Thermostat X" brand="Tado°" description="starter kit to control your Tado heating wired version" amazlink="4bWSDTr" %}

The tado° smart starter X is a starter kit that comes with:

- a digital smart thermostat that integrates the wired boiler controller function with a digital room thermostat.
- a bridge that integrates the border router thread protocol to plug into a power outlet.

{% picture posts/{{ page.guid }}/tado-smart-thermostat-x-starter-kit.png --alt Unboxing tado smart starter X --img width="940" height="529" %}

Let's start by unpacking the thermostat. Inside the **box, you'll find clean and well-designed packaging**. Well, no one cares about that, *but I wanted to point it out*. **As with all tado° products, you'll find a piece of cardboard under the lid with the Matter QR code and the authentication code. Be sure to keep it safe**; it could be useful if the system crashes. But that shouldn't happen.

**Inside the box, you'll find:**

- the thermostat
- the **wall mount** with connectors
- wire marking stickers
- a set of **screws, wall plugs, and double-sided stickers** to attach the mount to the wall.

You will note that there are no **paper instructions**, just a short general instruction (not shown in the photo), but to get the full instructions: go to the Tado application: **Settings > Rooms and Devices** then **click on the product concerned** and go to **Installation Instructions**.

{% picture posts/{{ page.guid }}/starter-kit-smart-thermostat-x.png --alt Unboxing the smart thermostat (smart-starter-x) --img width="940" height="529" %}

The tado° controller **works with 3 AAA batteries** which are supplied, it also acts as a temperature and humidity sensor, you will find on the back side the **Matter integration QR code** as well as the electrical connection picos.

{% picture posts/{{ page.guid }}/connectionface-arriere-chaudiere-starter-kit-smart-thermostat-x.png --alt Back panel and connections of the smart thermostat (smart-starter-x) --img width="940" height="529" %}

#### Boiler Connection

The **stickers provided** are there to number the wires. By removing the small screw, you'll find the space to connect your boiler's communication cables.

First, there's **COM/NC/NO/P1/P2**. All of these connections are available, but most conventional boilers operate with two wires: one for the **COM port** and the other for **NO (normally open)**. P1 and P2 are provided for 3-wire boilers.

For maximum connection information, see [the full list of connections](https://help.tado.com/fr/articles/3387234-ou-puis-je-trouver-les-instructions-d-installation-pour-mes-appareils-de-chauffage-tado){: target="_blank"}, And especially since the instructions aren't included, go to the Tado app: **Settings > Rooms and Devices** then **click on the relevant product** and go to **Installation Instructions**.

Then there's a 2-wire connection for the [Opentherm protocol](https://www.opentherm.eu/){: target="_blank"}, If your boiler works with it, you will need to connect it. See your boiler's instructions, but you can also find this information in the **installation instructions**.

{% picture posts/{{ page.guid }}/connection-chaudiere-starter-kit-smart-thermostat-x.png --alt Smart thermostat boiler connection (smart-starter-x) --img width="940" height="529" %}

#### The tado X Bridge

This is the bridge that integrates the Thread connection protocol. It's not necessarily necessary if you already have another Matter/Thread bridge/dongle, as these are open protocols with multi-brand communication. But if you don't have a gateway, you absolutely must connect this bridge. It has one major drawback: it connects to a power outlet, so it will monopolize one of your sockets. Otherwise, the integration is perfect.

> It comes with two UK/EU adapters.

{% include doclink.html pdf="manuel-bridge-smart-thermostat-x.pdf" title="Tado° smart thermostat X kit bridge manual" %}

{% picture posts/{{ page.guid }}/presentation-bridge-tado-x-prise.png --alt Introducing the Tado X Thread Bridge --img width="940" height="529" %}

On the front panel, there's only one WPS button. This will make your life easier when connecting to your home Wi-Fi network. It also serves as a factory reset button.

When you plug it in, the light at the bottom, corresponding to the power connection, lights up. The light just above flashes, indicating that the bridge is ready to pair with the Matter environment. Once connected to the Tado° app, three lights will appear to let you know the bridge is in place.

{% picture posts/{{ page.guid }}/code-lumiere-bridge-tado.png --alt Light code for the Tado X mains connection bridge Thread connection --img width="940" height="529" %}

#### Factory Reset

**All tado products can be reset**, which is useful if you encounter integration issues with the app.

[Go to this page](https://help.tado.com/fr/articles/8943122-comment-puis-je-reinitialiser-mes-appareils-tado-x-aux-reglages-d-usine){: target="_blank"} to find all the information.

#### Technical Specifications

|Dimensions|Wired Smart Thermostat X: 104 x 104 x 18 mm<br>Bridge X: 60 x 60 x 31 mm|
|Power Supply|Smart Thermostat X batteries: 3 AAA (LR03) 4.5 V, DC 1200 mAh. Bridge X: 230 V operating voltage, power consumption 0.7 W.|
|Connection|The Smart Thermostat X connects to the internet with the Bridge X. You can plug the Bridge X into an outlet to connect to your Wi-Fi router. To install tado°, your mobile device must have at least iOS 16.4 or Android 9.0.|
|Finish|Wired Smart Thermostat X: PC, ABS. Bridge X: PC.|
|Interface|Wired Smart Thermostat X: 49 x 30mm LCD display, LED backlight; input: 3x push. Bridge X: 4 x LEDs.|
|Warranty|We offer a 10-year warranty on all tado° X products.|

#### **Advantages of the Smart Thermostat X** {{ page.ref }}
{: .blue}

- Product quality
- Batteries included
- Controls your boiler for savings
- Sensor and thermostat function (temperature and humidity)
- Matter/Thread protocol
- Central thermostat function
- **Tado° guarantees all its products for 10 years**

#### **Disadvantages of the Smart Thermostat X** {{ page.ref }}
{: .red}

- The Thread bridge uses up a single outlet
- The thermostat display only works on batteries, not mains power
- The display only controls boilers with wired controls (Com/No)
- Doesn't allow you to deactivate the thermostat function (only to turn it off)
- No printed instructions
- The price is €200

### Wireless Smart Thermostat X

{% include product-embed.html image="kit-wireless-smart-thermostat-x-tado.png" title="Wireless Smart Thermostat X" brand="Tado°" description="starter kit to control your boiler with original thermostat connected wirelessly Tado also works wired" amazlink="3DNUEoy" %}

The **wireless starter kit** has similar features to the Smart Thermostat X, but the approach is different.

**In this pack**, the Thread controller is bundled with the boiler controller *(for boiler systems that communicate wirelessly between the thermostat and the boiler)*, **but it also allows** wired communication with the boiler, like the Smart Thermostat X.
It differs from its counterpart thanks to the remote **thermostatic sensor**.

{% picture posts/{{ page.guid }}/kit-wireless-smart-thermostat-x.png --alt Contents of the Wireless smart thermostat x starter kit by Tado° --img width="940" height="529" %}

> Inside the pack we find the controller and a remote thermostatic probe.

{% picture posts/{{ page.guid }}/deballage-wireless-smart-thermostat-x.png --alt Unboxing the Wireless Smart Thermostat x Starter Kit by Tado° --img width="940" height="529" %}

#### Wireless Bridge Module

The **wireless bridge module pack** is relatively well made. Inside the pack, you'll find a controller with a detachable power cable, stickers, a set of screws and wall plugs, and a set of three cables to connect P1/P2 and P3.

{% include doclink.html pdf="manuel-bridge-wireless-smart-thermostat-x.pdf" title="Wireless Smart Thermostat X Bridge Connection Manual" %}

On the **top face two buttons are available**, one concerns the wps function and the other allows you to activate the boiler or the boost function manually.

{% picture posts/{{ page.guid }}/kit-wireless-smart-thermostat-x-module-connection-chaudiere.png --alt Unboxing the boiler management module with Thread protocol from the Wireless smart thermostat x by Tado° startup --img width="940" height="529" %}

To access the connectors, simply unclip the case.
Under the case, you'll find the Matter pairing QR code and numerous LED indicators.

{% picture posts/{{ page.guid }}/kit-wireless-smart-thermostat-x-module-connection-chaudiere-sous-le-capot.png --alt Presentation of the connection and light code of the boiler management module with Thread protocol of the Wireless smart thermostat x start by Tado° --img width="940" height="529" %}

**For the LEDs, starting from the left, you have:**

- the power LED
- the three connection LEDs to the home Wi-Fi network
- the reset/boost/heating LED
- a relay LED (it must be connected either to inputs P1/2/3 or to the OpenTherm)
- an LED for the OpenTherm function

{% picture posts/{{ page.guid }}/kit-wireless-smart-thermostat-x-module-connection-chaudiere-explication.png --alt Explanation of the connections and light code of the boiler management module with Thread protocol for the Wireless smart thermostat x start-up by Tado° --img width="940" height="529" %}

**For the connection section, starting from the left, you have:**

- the outlet connection (Neutral/Phase/Phase)
- a COM/NC/NO connection to connect to the boiler (same as the Smart Thermostat X)
- a P1/2/3 connection (I couldn't find any connection information on this)
- an OpenTherm Modbus connection

#### Remote battery-powered temperature sensor

The **temperature sensor** supplied with the wireless kit is similar to the tado digital thermostat. However, since it only acts as a temperature sensor, you won't find any boiler connections or OpenTherm connections.

{% picture posts/{{ page.guid }}/presentation-sonde-thermostatique-deporte-fournis-avec-wireless-smart-thermostat-x.png --alt presentation of the remote thermostatic probe supplied with the Wireless smart thermostat x starter kit by Tado° --img width="940" height="529" %}

{% include doclink.html pdf="sonde-de-temperature-tado-x-manuel.pdf" title="Tado° remote sensor connection manual" %}

**It comes with**:

- a wall mount
- screws and stickers
- 3 x AAA batteries
- Matter information card.

{% include product-embed.html image="sonde-temperature-deporte-tado.png" title="Sonde de temperature déporté tado" brand="Tado°" description="Tado Remote Temperature Sensor communicates directly with Tado thermostatic valves" amazlink="4hAdtt7" %}

**In the Tado° environment** (via the app), the **temperature sensor** or even the thermostat** are important.

When you integrate them **in the same room** as one or more tado X thermostatic valves, **it will no longer be the temperature** of the valve that will be measured (as it can be inaccurate due to the proximity of the radiators), **but the temperature measured by the sensor will be used**.

> And those without the need for automation.

{% picture posts/{{ page.guid }}/explication-association-sonde-temperature-et-robinet-thermostatique-tado-x.png --alt explanation of how the direct connection between a tado remote temperature sensor and a tado x thermostatic valve works --img width="940" height="529" %}


#### **Advantages of the Wireless Smart Thermostat X** {{ page.ref }}
{: .blue}

- Product quality
- Batteries included with the remote sensor
- **Tado° guarantees all its products for 10 years if stated on the website**
- The temperature sensor can be installed wherever you like
- The controller can be connected to 230V power
- The controller is compatible with **wired boilers and those that communicate wirelessly**

#### **Disadvantages of the Wireless Smart Thermostat X** {{ page.ref }}
{: .red}

- It cannot be operated on batteries
- The €200 price

## Integration with Home Assistant

There are **several ways to integrate Tado° thermostats, sensors, and valves into Home Assistant**, notably using a Thread key external to the Tado bridge. However, if you want to **keep the boost function**{: ​​.red} without having to create an automation in HA and **in particular the link between the temperature of the sensors or thermostats with the thermostatic valves** I suggest you carry out the entire installation in the Tado application and **then share the products with home assistant thanks to Matter.**

**To do this:**

**Go to the tado app then:**

- Settings and Devices
- Select a device except the bridge
- Scroll to the bottom of the page and click **Matter Device Pairing**
- 
{% picture posts/{{ page.guid }}/partage-les-appareils-tado-avec-home-assistant-grace-a-matter.png --alt I'll show you how to share tado devices between the official app and Home Assistant. --img width="940" height="529" %}

**Then the Matter interface appears on your smartphone:**

- Click on the **Home Assistant icon**. If that doesn't work, you can also select one of the other two integrations.

> Then simply **follow the steps**.

{% picture posts/{{ page.guid }}/partage-les-appareils-tado-avec-home-assistant-grace-a-matter-2nd-etape.png --alt 2nd step of tado devices between the official app and home assistant --img width="940" height="529" %}

**Devices are now shared with Home Assistant**

Below is an animated GIF of the thermostatic valve integration.

![Sharing the Tado X thermostatic valve with Home Assistant]({{ site.baseurl }}/assets/images/posts/158/integration-robinet-thermostatique-tado-x-dans-home-assistant.webp{{ cachebuster }}){: width="940" height="716" class="lazyload pictaninpost"}{: target="_blank"}

Below is an animated GIF showing the integration of the thermostat included in the Smart Thermostat X kit.

![Sharing the Tado Smart Thermostat X in Home Assistant]({{ site.baseurl }}/assets/images/posts/158/integration-starter-kit-smart-thermostat-x.webp{{ cachebuster }}){: width="940" height="719" class="lazyload pictaninpost"}{: target="_blank"}

> **That's it, in no time** we've shared the Tado° devices in Home Assistant, **thanks Matter.**

## Understanding the terms

When I ordered the products to test the environment, I'll admit I was confused **about which starter kit to choose**. This is because of the terms used by Tado.

1. The Smart Thermostat Kit is advertised by Tado° as a wired thermostat, but this one works wirelessly (AAA battery included).
2. The Smart Thermostat X Wireless is advertised by Tado° as a wireless thermostat, but the module works on 230V mains power.

**So what Tado° says isn't wrong, because they're talking about the connection between the original thermostat and the boiler.**
But you need to know that 😉

## Now, which one should you choose?

By **asking yourself the right questions**, you can easily choose between the **Smart Thermostat X** starter kit or the **Wireless Smart Thermostat X**.

1. If the **connection between the original thermostat and the boiler is wireless** and if it is compatible with Tado°, then there's no question about it: **you'll need to get the Wireless Smart Thermostat X**.
2. If your original thermostat runs on **batteries and you don't have 230V nearby**, you'll need the Smart Thermostat X.
3. If your thermostat is not **in a heated room** (hallway, etc.), I recommend the Wireless Smart Thermostat X.
4. If you want to move the temperature sensor away from your boiler controller, I recommend the **Wireless Smart Thermostat X.**
5. If you want to connect the **Thread controller to a 230V outlet**, I recommend the **Wireless Smart Thermostat X**.
6. If the connection to your boiler is more complex, requiring wiring (P1, P2, and P3), I recommend the Wireless Smart Thermostat X.
7. If your **original thermostat is in a heated room** and can only run on batteries, I recommend the Smart Thermostat X.

> As you can see, both kits can control your boiler using the ports. **Com/No** In most cases I recommend you get the **Wireless Smart Thermostat X Starter Kit**.

{%- include alert.html type="info" text="Haade.fr is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means to earn fees by linking to Amazon.com and affiliated sites." %}

## What's the price?

- A **Tado X Smart or Wireless starter kit costs €200**, but if you're patient, tado offers promotional offers ranging from 40% to 50% off, including on Amazon.
- A **tado X thermostatic valve costs €100**, and if you're patient, tado offers promotional offers ranging from 40% to 50% off, including on Amazon.
- A **thermostatic sensor costs €100**

**The prices are high**, but Tado° has the merit of **currently manufacturing the best products on the market, easy to install and use.**

{% include product-embed.html image="kit-wireless-smart-thermostat-x-tado.png" title="Wireless Smart Thermostat X" brand="Tado°" description="starter kit to control your boiler with original thermostat connected wirelessly Tado also works wired" amazlink="3DNUEoy" %}

## Conclusion

**Here's a comparison to help you see things more clearly** between the two starter kits offered by Tado°. It's important to remember that the **wireless kit offers the same functions as the Smart Thermostat Kit**, but it also allows wireless connection to compatible boilers. **If your controller is in an unheated room**, as is often the case, then **I recommend the wireless kit**, provided you can plug it into the mains. **In other cases, I recommend the Smart Thermostat X.**