---
guid: 103
title: "Be careful when charging electric vehicles at home"
description: "Feedback on the fire risks of charging electric vehicles at home and monitoring the problem using home automation."
ref: "TO-Q-SY2-JZT"
layout: post
authors: Nico
date: 2024-01-06 10:13
last_modified_at: 
categories: [Security, Tests, News]
tags: []
image: 'attention-risk-fire-charge-ve-domicile.png'
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
rating: 4.4 
sourcelink:
  - https://fr.elcb.net/Les-produits/disjoncteur-intelligent-zigbee-protection-contre-les-surintensit%C3%A9s-sous-tension-%C3%A0-q-sy2-jzt/
  - https://forum.hacf.fr/t/disjoncteur-en-zigbee-vos-retours/28150/11
  - https://hackaday.com/2021/04/18/diy-wireless-serial-adapter-speaks-true-rs-232/
---
**Attention ! risk of fire from Wallbox when recharging electric vehicles at home!**
Like more and more people on this planet, I own an electric vehicle that I have been charging exclusively for over 5 years at home using a brand EV charger [VE-tronic](http://ve-tronic.fr/store/wallbox){: target="_blank"}.

{% include product-embed.html image="https://ae01.alicdn.com/kf/S8baef31dc3a5412982ec410791e4e5f2J/Disjoncteur-intelligent-Tuya-MCB-mesure-de-la-puissance-interrupteur-de-t-l-commande-protection-contre-les.jpg_.webp" title="Tongou smart circuit breaker" brand="Tongou" description="Tuya MCB Smart Circuit Breaker, Power Metering, Smart Switch, Overcurrent and Undervoltage Protection, WiFi, Zigbee, 1-63A, Overheat Protection" affiliate="_DddSzXJ" %}

## Mishap

I of course respected the installation instructions knowing that the assembly passes 7200w, so the connection to the electrical panel is made with **3G10** protected by a 40A differential switch **type A**{: .blue } and connected to a 40A Legrand circuit breaker in curve C.

> For 5 years I have not encountered any problems, the wallbox being equipped with teleinformation, the intensity overload of the home is avoided.

{% picture posts/{{ page.guid }}/disjoncteur-differentiel-legrand-brule-wallbox-garage.png --alt attention wallbox connection 40A legrand circuit breaker burned following overheating --img width="940" height="529" %}

**And yet this month of October 2023** the Legrand brand 40A circuit breaker burned taking away the differential and fortunately a trip at the main meter took place, the fire did not spread into the electrical panel.

> So what happened and how to fix it.

To begin with I replaced what burned **(type A differential/C curve circuit breaker)**, I lowered the maximum load amperage on the wallbox.
If I lowered the charging amperage it is to avoid heat at the circuit breaker because I think that overheating is the cause of this anomaly.

before domotizing the charging system I measured the temperature during prolonged charging. **When charging at maximum 32A the temperature rises to 55°C** throughout the charging circuit (40A Legrand circuit breaker/differential/cable/charging connector).

**At 26A the temperature recorded is 39°C**

But now I no longer have confidence in this **Legrand** connection method, at least for vehicle charging. So what can I do to monitor this type of risk and avoid a fire in the home, especially when the home is all electric and I charge the vehicle most of the time at night.

Firstly I installed a Zigbee fire siren near the electrical panel.

{% include product-embed.html guid="2175" %}

In addition to the 40A differential/circuit breaker, I added a zigbee smart switch with many functions, the Tongou {{ page.ref }}.

> At this point you say to yourself, he doesn't have confidence in Legrand and he is adding a Chinese brand to the circuit!

Indeed you are not wrong, to respect I first looked at the big brands but **I did not find a 40A circuit breaker that measures heat.** So I turned to Aliexpress and I saw this switch {{page.ref}} which works under Zigbee and Tuya protocol. To reassure myself I did some research on the Internet and the Tongou {{ page.ref }} is [manufactured by the company ELCB](https://elcb.net/faqs/){: target="_blank "}, it has been manufacturing electrical equipment for 30 years and works among others with brands (Thyssenkrupp, Haski, STD, HL, Vistar...).

## Reminder

{%- include alert.html type="warning" text="You will have to work near a voltage of 220V which is dangerous if you come into contact with an electrical conductor. Take care in your handling, if in doubt cut off the power supply." %}

A **differential** is there to protect people **in the event of current leaks** greater than 30ma
A **circuit breaker** protects the equipment against **overcurrent or short circuit**

## Presentation of Tongou {{ page.ref }}

To start as I have read here and there and in certain product titles:
> this module is not a **circuit breaker but a switch**, it must be connected in addition to it, because it does not act as a circuit breaker.

The {{page.ref}} has some exceptional features. **To begin with, the quality is very good at least on the visual aspect**, *I did not open it.* The characteristics of the module are numerous, the most interesting concerns the adjustment of the configurable amperage between 1 and 63A.
The instructions provided with the module are very well written **you can download it a little further down.**

{% picture posts/{{ page.guid }}/presentation-switch-rail-din-tongou-TO-Q-SY2-JZT.png --alt presentation of the tongou TO-Q-SY2-JZT rail-din switch --img width="940" height="529" %}

**The black front of the module displays the module information:**
1. maximum amperage from 1 to 63A adjustable via the official app or your assistant
2. The Zigbee network connection indicator (solid blue) when connected
3. The physical switch the central indicator turns red


{% picture posts/{{ page.guid }}/descriptif-facade-switch-tongou-TO-Q-SY2-JZT.png --alt front description of the tongou TO-Q-SY2-JZT din rail switch --img width="940" height="529" %}

### Comparison with a Legrand NF circuit breaker

From the front the modules look similar in size and that's a good thing, the most shocking appearance and the black color of the switch, but that has little importance in my eyes.

{% picture posts/{{ page.guid }}/comparatif-tongou-TO-Q-SY2-JZT-disjoncteur-legrand-c40.png --alt front comparison of the tongou TO-Q-SY2-JZT din-rail switch and Legrand NF circuit breaker --img width="940" height="529" %}

You will see that the Tongou {{ page.ref }} displays all the CE standards on the module and the company complies with ISO9001 standards

{% picture posts/{{ page.guid }}/comparatif-tongou-TO-Q-SY2-JZT-disjoncteur-legrand-c40-coté.png --alt comparison front of the tongou TO-Q-SY2-JZT din rail switch and Legrand NF circuit breaker on the side --img width="940" height="529" %}

It is at the level of the terminal blocks that we will notice a difference between the difference between the neutral and the phase compared to the NF standards, which could pose a problem in theory if you use combs in connection. But for the Tongou {{ page.ref }} it doesn't matter, since it is connected in addition to a circuit breaker at its outlet. Below is a capture of the connection at the electrical panel **(I used 3G10 for EV charging)**

{% picture posts/{{ page.guid }}/comparatif-bornier-tongou-TO-Q-SY2-JZT-legrand-disjoncteur.png --alt comparison of the front of the tongou TO-Q-SY2-JZT din rail switch and the Legrand NF circuit breaker on the terminal block side --img width="940" height="529" %}

### What is the interest of Tongou {{ page.ref }}

For me the interest is to measure the temperature inside the components and to automate a cut-off depending on possible overheating. And the Tongou {{ page.ref }} measures the temperature 👍.

> And maybe lower the system charging temperature who knows...

### Characteristic of {{ page.ref }}

**The Tongou {{ page.ref }} smart switch protects:**

- the circuit against overloads
- the circuit against overvoltages
- the circuit against voltages
- the circuit against overcurrents
- the circuit against high temperatures

### Control by home automation

**And this is where the module is very interesting**, it concerns the number of functionalities that can be configured and controlled remotely using your favorite assistant.

**You will be able to use ZHA, Zigbee2mqtt, Tuya and smartlife:**

1. control the ignition
2. memory in case of power failure
3. Set the operation switch lighting mode
4. measure instantaneous power
5. Measure Instantaneous Amperage
6. display the cumulative energy in the dashboard (home assistant)
7. internal temperature
8. cut-off in the event of high temperature as well as the threshold for this temperature
9. cut-off in the event of overloads as well as the overload threshold
10. cut-off in the event of overcurrent as well as the amperage threshold
11. cutoff in the event of an overvoltage as well as the threshold
12. cutoff in the event of undervoltage as well as the threshold
13. the quality of the zigbee link (Z2M and Tuya)

> So this is very impressive, especially since I bought this switch for €15 and it has a 2-year warranty.

{% include videoPlayer.html youtubeId="XdC2B13nKRg?si=U1b3yoDo5KX1b4sd" %}

## Integration into Zigbee2mqtt

In this article I only covered the integration in Zigbee2mqtt to avoid overloading the writing. In short, at least you will be able to see how much information can be used thanks to Z2M.

To begin with, the inclusion is simple, fast and stable. The switch is well recognized **as a router**.

{% picture posts/{{ page.guid }}/tongou-TO-Q-SY2-JZT-onglet-infos-fonction-zigbee2mqtt.png --alt zigbee2mqtt integration info tab front of the tongou rail-din switch TO-Q-SY2-JZT --img width="940" height="647" %}

In terms of order exhibitions, I know the list is long, nothing better than an image to list them.

- I reversed the physical button indicator

**turns off the module in the event of:**

- temperature above 60°C
- if the power is greater than 8kw
- if the amperage is greater than 33A
- if the voltage is lower than 215 or higher than 245V

{% picture posts/{{ page.guid }}/tongou-TO-Q-SY2-JZT-onglet-expose-fonction-zigbee2mqtt.png --alt zigbee2mqtt integration functions tab available for the tongou rail-din switch TO-Q-SY2-JZT --img width="940" height="1022" %}

## What could have been improved

Aside from the part of the hardware visual which could have been more compliant with the **Legrand/Hager standards**, what bothers me the most is the lighting of the Zigbee connectivity display LED.

**After inclusion in your favorite system, the LED remains blue and quite intense. Management could have been less conspicuous, for example at Legrand Netatmo.**
The light is:
- red when the module is off-grid
- green when the module is integrated
- turns off after full integration of the module
- turns green again when you put your system in inclusion mode

**But hey, such a module costs between 55 and 80€**

Second thing that could have been improved is the addition of inputs to configure **your remote control type lighting system**

> Finally the Tongou {{ page.ref }} could have been a circuit breaker and not a switch in order to avoid module overload in the electrical panel

## Temperature measurement

{% include product-embed.html image="https://ae01.alicdn.com/kf/S8baef31dc3a5412982ec410791e4e5f2J/Disjoncteur-intelligent-Tuya-MCB-mesure-de-la-puissance-interrupteur-de-t-l-commande-protection-contre-les.jpg_.webp" title="Tongou smart circuit breaker" brand="Tongou" description="Tuya MCB Smart Circuit Breaker, Power Metering, Smart Switch, Overcurrent and Undervoltage Protection, WiFi, Zigbee, 1-63A, Overheat Protection" affiliate="_DddSzXJ" %}

### Connection without circuit breaker

To carry out this test while taking the temperature, I connected the differential and directly the {{ page.ref }} switch, leaving a space between the two.
During a vehicle charging phase at 32A, the Tongou {{ page.ref }} goes from 20°C to 37°C maximum as shown in the graph below.

{% picture posts/{{ page.guid }}/mesure-charge-temperature-tongou-seul-sans-disjoncteur.png --alt measuring temperatures during charging of the tongou TO-Q-SY2-JZT --img width="940" height="250" %}

### Connection with circuit breaker

Then I connected the **circuit breaker** in addition to the differential and the switch all attached in the electrical panel (as a reminder the temperature measured on the Legrand circuit breaker connected without the Tongou was **55°C** {: .red} in full charge)
During a vehicle charging phase at 32A the temperature goes from 22 to **46°C**{: .orange} as shown in the graph below.

{% picture posts/{{ page.guid }}//mesure-charge-temperature-tongou-avec-disjoncteur.png --alt measurement of temperatures during charging of the tongou TO-Q-SY2-JZT attached circuit breaker --img width="940" height="230" %}

### Recap

1. differential + circuit breaker **55°C**{: .red}
2. differential + tongou switch **37°C**{: .blue}
3. differential + circuit breaker + switch **46°C**{: .orange}

## Tongou Documents {{ page.ref }}

{% include doclink.html pdf="SY2-wi-fi-zigbee-Tongou-manuel-utilisation.pdf" title="Tongou TO-Q-SY2-JZT Circuit Breaker User Manual" %}

{% include doclink.html pdf="SY1-SY2-Smart-Switch-EMC-CE-certificate.pdf" title="CE EMC certification Tongou circuit breaker TO-Q-SY2-JZT" %}

{% include doclink.html pdf="SY1-SY2-wi-fi-Smart-Switch-CE-RED-LVD-EMC-certificate.pdf" title="CE certification RED LVD Tongou circuit breaker TO-Q-SY2-JZT" %}

## Technical characteristics {{ page.ref }}

|Product or component type|TO-Q-SY2-JZT|
|Application|Smart Life, Smart Electric, Tuya|
|Third party support|Home Assistant, Zigbee2MQTT|
|Poles description|1P+N (Direct N Pole)|
|Function|Timing, Countdown, Loop timing, Metering, Over Current, Under Voltage, Over Voltage, Over Power, High Temperature Protection.|
|Rated Current (In)|1 – 63A|
|Operating voltage Range|AC 90V – 280V|
|Rated Frequency|50Hz/60Hz|
|Control Type|Remote, Manual|
|Communication Protocol|Zigbee 3.0|
|Operating system support|Android, iOS, HarmonyOS|
|Gateway	Zigbee|(Wireless / Wired)|
|Operating Language|With system language|
|App Language|Follow the operating system language|
|Voice Support|Amazon Alexa, Yandex Alice, Google Assistant..|

## **product advantages** {{ page.ref }}
{: .blue}

- the **price** around 16€
- zigbee 3.0 compatible
- Zigbee2mqtt compatible (Home Assistant, Gladys, Jeedom)
- ZHA compatible
- Tuya/Smartlife compatible
- does not overheat
- Google Assistant
- Amazon Alexa
- **Very Many functions**
- IEC 60947-1 standards
- 2 years warranty


## **the - of the product** {{ page.ref }}
{: .red}

- does not perform the role of short circuit
- is not considered a circuit breaker but a switch
- management of the Zigbee connectivity LED cannot be configured
- does not act as a remote control switch
- upstream must be connected a differential and a dedicated circuit breaker per circuit.

## Next step: home automation of the ve-tronic Wallbox

**The Wallbox is 5 years old and it is not by default automated**, but I have the possibility of doing it in RS232 and I am going to work on it so I could control the switching on or off, but also modify the amperage, so in the event of overheating instead of cutting the power to the Wallbox I will only have to ask to lower the amperage and it will be great.

Recently **C4Software** released a directory to be able to homemate the ce-tronic Wallbox with RS232 and esp8266, [it can be consulted here](https://github.com/c4software/vetronic-esphome){: target="_blank"}

## Big rant

**We are constantly told that Legrand is quality**, according to some it is the top NF, but here I can only explode, nothing but the totally insane price plus these circuit breakers are not even capable of maintaining a decent temperature **while a Chinese module does better**.

{% include product-embed.html image="https://ae01.alicdn.com/kf/S8baef31dc3a5412982ec410791e4e5f2J/Disjoncteur-intelligent-Tuya-MCB-mesure-de-la-puissance-interrupteur-de-t-l-commande-protection-contre-les.jpg_.webp" title="Tongou smart circuit breaker" brand="Tongou" description="Tuya MCB Smart Circuit Breaker, Power Metering, Smart Switch, Overcurrent and Undervoltage Protection, WiFi, Zigbee, 1-63A, Overheat Protection" affiliate="_DddSzXJ" %}

## Conclusion

If, like me, you charge at a terminal dedicated to your electric vehicle, I strongly advise you to monitor the heat of the panel components. Given the price of Legrand modules, the heating is considerable and in my opinion this is an unacceptable part. Connecting an additional switch to the circuit will allow you to control the switching off of the load in the event of overheating but also to measure consumption on a separate circuit.
Concerning **the Tongou switch {{ page.ref }} I can only recommend it to you**, you can add more to control the sockets, lighting, water heater etc... and that for a price more than correct. *Currently it is the Tuya module which provides the most information in Zigbee2mqtt.*

