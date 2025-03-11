---
guid: 157
title: "Automate Bubendorff roller shutters in Zigbee for cheap"
description: "Let's not be fooled by the title, I'm not really going to automate Bubendorff shutters but replace the system with Chamberlain wired motors. I'll give you my reasons"
ref: ""
layout: post
authors: [Nico]
date: 2025-03-11 10:30
last_modified_at: 
categories: [Haade-lab, Security, Zigbee]
tags: []
video: 
image: 'domotise-test-rolling-shutters-bubendorff-in-zigbee-for-cheap.png'
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
  - 
---

Today I'm not explaining to you how I automated Bubendorff shutters in Zigbee, **simply because it's not possible**, but **why I decided to remove the Bubendorff Tradi ID 1 system** which was 20 years old by **Chamberlain wired motors** with **mechanical limit switch** connected to a Zigbee Moes switch.

Here is **my house is 20 years old** and the shutters installed at the time were of the **Bubendorff brand** Tradi ID 1 in a **Titan** tunnel rolling box.

> These shutters and especially the motors **have aged badly**

**After 10 years** the motor capacitors were already starting to weaken, which resulted in a **malfunction on the automatic stop limit switches**. In addition to these increasingly approximate stops, this malfunction **broke the upper bearing** and **accentuated the noise** at the lower end of the stroke, which weighed on the entire mechanism.

> Even after having **changed these capacitors myself**, the problem reappeared after a few years.

{%- include alert.html type="info" text="Haade.fr is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means to earn fees by linking to Amazon.com and affiliated sites." %}

The **second negative point** is at the level of **noise**, over the years the **motors have become very noisy** so on the one hand it is due to wear but also to the level of the titan box which, it must be said, are not very well soundproofed.

> Now it is time to change them, two options are available to me.

**1st option** replace the tradi id 1 with tradi id 2 (radio or wired).

**2nd option** change brand and install new motors (radio or wired) with a Bubendorff Tradi ID adapter.

## Option 1 Bubendorff replacement

The motor currently in place is a 20 Nm, which seems a little limited to me given the size of the shutter (9m2 aluminum).

A motor [Bubendorff R ID2 radio with titan box adapter and remote control](https://www.laboutiqueduvolet.com/10114-moteur-r-octo60-25nm-12rpm-radio-gauche-+-emetteur-3-boutons-+-sachet-adaptateur-id2.html){: target="_blank"} in 25Nm currently costs **more than 270€**

**Advantage:**{: .blue}

- fully compatible with the titan box
- possibility of home automation with [netatmo iDiamant](https://www.bubendorff.com/faq/4-comment-sinstalle-le-module-de-connexion-idiamant-with-netatmo/){: target="_blank"} cost **119€ extra**.
- 5-year warranty

**Disadvantage**{: .red}

- **Radio protocol:** Bubendorff 868 MHz locked
- the very expensive price

A [Mi2 wired motor](https://www.laboutiqueduvolet.com/10416-moteur-mi2-octo60-20nm-12rpm-filaire-impulsionnelle.html){: target="_blank"} (without remote control and without adapter) currently costs **more than €220** and you will still have to add the Bubendorff adapter and home automation options.

**Advantage**{: .blue}

- no automatic limit switch so no capacitor worries
- 5-year warranty

**Disadvantage:**{: .red}

- the price
- apparently difficult to automate

This motor is delivered **without a wired inverter**. It is compatible with:
- HAGER roller shutter inverter (Ref. BB227015)
- Inis fixed position recessed inverter (Ref. SY1800513)
- LEGRAND fixed position inverter (Ref. BB227023)

This wired motor is a **4-wire** motor, therefore,
if you have an old **generation 3-wire** motor, you will need to run a 4th wire from the motor to the circuit breaker.

> I will not go for this option because the price puts me off, you will understand by reading this article, **Bubendorff disappointed me quite a bit**.

## Option 2 change brand

**Start with another brand and take an adapter so what to choose?**

First of all I will no longer take automatic limit switches **simply because the capacitors age badly**, and it creates malfunctions, **whatever the brand**.

> So I will go for **manual limit switches** in short the old way.

For the brand I decided to go for **Chamberlain shutter motors**, so why Chamberlain:

- firstly it is a German company that manufactures internationally and a lot in the United States,
- secondly the prices are extremely competitive.
- And thirdly **not long ago I changed the garage door motor** with a Chamberlain motor, the motor is very good, does the job and the adaptation was super simple.

- the motors warranty is **2 years** it's less than Bubendorff but the future will tell us.

> These are motors of **simple design and can be automated in Zigbee** you understand I will go for this option

## What material did I choose

{% picture posts/{{ page.guid }}/moteur-volet-chamberlain-adaptateur-bubendorff-interrupteur-zigbee-moes-star.png --alt I chose a chamberlain RPD25-10 motor with a bubendorff adapter and a Moes ZS-SR-EUC Zigbee switch --img width="940" height="529" %}

> So I'm going to give you a **summary of the chosen material** and the **overall cost** of this installation.

Let's start with the engine, I went with a [Chamberlain RPD25-05/10](https://amzn.to/3FrKE4D){: target="_blank"}, price 100€ on amazon, you will find the RPD25-10 on [manomano](https://www.manomano.fr/p/moteur-tubulaire-chamberlain-rpd25-05-force-de-traction-max-50-kg-191-5000083){: target="_blank"} at **81€ ttc**.

Then I need a universal mounting adapter [I went with the one from the shutter store](https://www.laboutiqueduvolet.com/volet-roulant/supports-bubendorff/4689-support-moteur-pour-joues-bb.html){: target="_blank"} **price 27€**

Finally, I need a Zigbee switch and as I already have Moes Star Ring switches on Zigbee Tuya chip, [so I naturally went for the same ones for roller shutters](https://s.click.aliexpress.com/e/_oCHrrYV){: target="_blank"} price **25€ max on Aliexpress**.

Total cost for an installation **of a wired Chamberlain shutter in Zigbee 143€** (I added 10€ for delivery for the shutter shop)

> we are **far from the 270€ for a single Bubendorff shutter**

Personally I ordered a set to change 4 shutters, 2 in 25Nm and 2 in 15Nm, with 4 adapters and 4 switches, I had in all delivery **included for 482€** at this price I would not have even been able to change 2 shutters of the Bubendorff brand, **because 2 motors would have cost me 554€** and **still not home automation** in Home Assistant.

### Presentation of the Chamberlain RPD25-10 motor

{% include product-embed.html image="moteur-volet-chamberlain-rpd-filaire-fin-de-course-mecanique.png" title="Chamberlain RPD shutter motor" brand="Chamberlain" description="Chamberlain mechanical and wired shutter motor available in 10, 15, 25 and 40NM top quality price" amazlink="3DE4kBO" %}

To begin with, the motors are German-made and of good quality, Chamberlain announces a 2-year warranty. You will find the instructions a little further down.

**Feature:**

- Tubular motor for octagonal shaft with a diameter of 60 mm.
- For roller shutters up to 11 m² of surface (PVC), 9 m² (aluminium) and 5 m² (wood). **25NM version**
- Easy adjustment of the end points thanks to the adjustment pen provided.
- Adapter for octagonal shaft included in the delivery
- Suitable for the installation of new buildings, but also for the modernization of old buildings.
- Quick and easy assembly thanks to the pre-assembled components (adapters, warehouses and warehouses).

{% picture posts/{{ page.guid }}/moteur-volet-chamberlain-rpd25-10.png --alt Unpacking the Chamberlain RPD25-10 Manual Limit Switch Motor --img width="940" height="529" %}

> The package is **well made** and the **product well protected**, in short I have not encountered any problems.

{% picture posts/{{ page.guid }}/emballage-moteur-volet-chamberlain-rpd.png --alt Unpacking the Chamberlain RPD25-10 Manual Limit Switch Motor --img width="940" height="529" %}

The chamberlain motor is **delivered pre-wired** length 2m50 with *(neutral, phase, phase up and down as well as earth.)*

**Inside we find:**

- the explanatory note
- a motor support (to be fixed on the bubendorff adapter)
- a center distance that is inserted into the support
- screws for the center distance.
- A safety pin

{% include doclink.html pdf="notice-volet-chamberlain-rpd.pdf" title="Chamberlain RPD Series Shutter Motor Notice" %}

### Bubendorff universal adapter

For the bubendorff adapter I chose the version sold by [laboutiqueduvolet](https://www.laboutiqueduvolet.com/volet-roulant/supports-bubendorff/4689-support-moteur-pour-joues-bb.html){: target="_blank"}, This is a sturdy pre-assembled steel version that is perfectly suited to the Bubendorff Tradi ID cheeks.
In order to fix the Chamberlain support **I enlarged the holes** because I used 8mm screws (not supplied with the kit), the original holes are 8mm

{% picture posts/{{ page.guid }}/adaptateur-joues-bubendorff-laboutiqueduvolet.png --alt Bubendorff Tradi ID universal motor adapter --img width="940" height="529" %}

> There is a mounting direction in the original Bubendorff cheek, the space for the cable passage must be located at the top left.

### Moes ZS-SR-EUC Shutter Switch

**Moes is a Chinese brand** including Zigbee chips from the **Tuya brand**, if you have read other articles on the site, you should know that it is not the brand of choice, however **the Star Ring range from Moes is exceptional**, the touch, the controls as well as the light of the LEDs are a success. I already have switches from the range, which is why I went for this product.
**[Integration in Zigbee2mqtt](https://www.zigbee2mqtt.io/devices/ZS-SR-EUC.html){: target="_blank"} is complete** and the switches do the job.

{% include product-embed.html image="moes-zigbee-rf-smart-star-ring-curtain-switch-for-roller-shutter-electric-curtains-blind-motor-support-timing-remote-control.png" title="Moes star ring zigbee and rf switch for bubendorff" brand="Moes" description="MOES ZigBee Smart Curtain Switch Star Ring for Roller Shutter Electric Curtains Blind Motor Alexa/Google Home Remote Control" affiliate="_ooJB5sV" %}

Below are some screenshots of the product as a whole, nothing to say about the packaging and the switch.

{% picture posts/{{ page.guid }}/presentation-interrupteur-moes-ZS-SR-EUC.png --alt Introducing the Moes Star ZS-SR-EUC Roller Shutter Switch --img width="940" height="529" %}

The connection with the Chamberlain motor is very simple:

- connect the **neutral (blue)**{: .blue}
- connect the **lower/close (black phase)**{: .black}
- connect the **raise/open (brown phase)**{: .brown}
- connect the **phase (red)**{: .red}

{% picture posts/{{ page.guid }}/branchement-interrupteur-moes-ZS-SR-EUC.png --alt Moes Star ZS-SR-EUC shutter switch connector --img width="940" height="529" %}

> If you reversed the up and down phases it doesn't matter **you can reverse in the Zigbee interface**

## Assembly of the whole

{%- include alert.html type="warning" text="Before disassembling the hull, remember to pair the modules in your favorite assistant. Be careful, you will be working under voltage, remember to cut the power first."  %}

**Let's start by fitting the center distance** supplied with the shutter and the flat head screws

{% picture posts/{{ page.guid }}/montage-axe-moteur-volet-chamberlain-rpd.png --alt Mounting the center distance on the chamberlain engine --img width="940" height="529" %}

Next we move on to **fixing the motor mount** to the Bubendorff universal adapter

{%- include alert.html type="warning" text="Be careful to orient the motor correctly in relation to the support in order to have <b>access to the limit switch adjustment</b>, do not forget <b>to insert the safety pin</b>" %}

{% picture posts/{{ page.guid }}/montage-support-moteur-sur-adaptateur-bubendorff.png --alt Mounting the engine mount on the bubendorff adapter --img width="940" height="529" %}

### Dismantling the shutter currently in place

Before dismantling **the bubendorf shutter do not forget to cut the power** and disconnect the cable in the junction box. Our motor is powered by two wires (neutral and phase) which is very good for the rest and very simple.

{% picture posts/{{ page.guid }}/debranchement-moteur-bubendorf-tradi-id.png --alt Disconnecting the original Tradi ID engine --img width="940" height="529" %}

**Disassembling a Bubendorff shutter in a Titan box is child's play**, you will find several tutorials on this subject. First of all, turn the pin opposite the motor in order to be able to remove the axle. Then, using a small flat screwdriver, separate the motor support from the cheek by pressing the green lever on each side.

{% picture posts/{{ page.guid }}/demontage-de-ensemble-dans-le-caisson-sur-la-joue-bubendorff-tradi-id.png --alt Disassembly of the assembly in the Bubendorff Titan box --img width="940" height="529" %}

**Once disassembled**, to remove the motor, you will first need to drill the rivet that holds the motor in the Octo 60 tube. Using a mallet, you will easily remove the motor from the tube.

### Preparation of the connections

To resume, the original Bubendorff tradi id 1 motor is connected by two wires (neutral/phase), it couldn't be simpler, the original flush-mounting boxes are all located at shutter height.

{% include product-embed.html image="boule-chauffante-edma-traverse-paroi-polystirène.png" title="Edma Heating Ball" brand="Edma" description="Heating ball that allows to pass through polystyrene walls for electrical connection" amazlink="3FmSNYo" %}

To make the **connection between this box and the switch**, I first drilled a 67mm hole for the switch at the same level as the upper box, then **I bought an edma heating ball** to pass through the wall between the two. This ball, once heated, burns the polystyrene and thanks to gravity it naturally follows a vertical path to the exit.

**I use the original cable from the shutter** to power the switch in addition to this cable you will need to connect a phase between the two flush-mounting boxes in 0.75mm or 1.5mm.

> This way you will have everything you need to connect the assembly.

{% picture posts/{{ page.guid }}/traverser-paroi-polystirène-grace-a-boule-chauffante-edma.png --alt Tip for connecting a sheath in a polystyrene partition with the Edma heating ball --img width="940" height="529" %}

### Mounting the RPD25 Chamberlain engine

**FYI** the Bubendorff tube is slightly larger than 60mm so when mounting the Chamberlain engine it will be necessary to hold it in place with a screw or two.

**I decided to use 2 domed head screws** to secure the Chamberlain engine in the tube. There is no indication of the fixing in the instructions, but in the official assembly videos you can clearly see the engine being forced until you hear a click to fit the engine, as said for me there is a slight play **which does not allow you to fit it firmly**. But it does not matter, the axle at the end of the engine has a solid plastic part that allows you to insert a screw without breaking the system.

> Personally I used two screws opposite each other.

When assembling the wheel on the motor side has a **hollow part you must match it with the tube assembly molding** see the photo below.

Finally, do not forget to orient the motor in the axis of the adapter **in order to have easy access to the end of travel adjustment**, as in the photo.

{% picture posts/{{ page.guid }}/montage-moteur-chamberlain-axe-octo-60.png --alt Installation of the assembly in the Bubendorff Titan box --img width="940" height="529" %}

After cleaning the whole thing and greasing the tubing of the center distance opposite the engine, we are ready to put everything back in the traditional titan trunk. **Don't forget to pass the cable through the wall**. **Find the final assembly below.**

{% picture posts/{{ page.guid }}/montage-final-de-ensemble-dans-le-caisson-sur-la-joue-bubendorff-tradi-id.png --alt Installation of the assembly in the Bubendorff Titan box --img width="940" height="529" %}

> **the final result is very clean and suits me perfectly**.

## Integration in Home Assistant and Zigbee2mqtt

Thanks to Zigbee2mqtt our shutter will be able to be controlled in most home automation assistants on the market. As you know I use Home Assistant.

{% picture posts/{{ page.guid }}/home-assistant-zigbee2mqtt-moest-interrupteur-volet-roulant-ZS-SR-EUC.png --alt home automation with zigbee2mqtt of shutters in home assistant with the Moes ZS-SR-EUC switch --img width="940" height="633" %}

The integration of the ZS-SR-EUC of Moes will allow you to:

- **open/close and stop** the shutters
- open the **shutters partially** thanks to the opening percentage
- Start and stop **the calibration**
- Change **the position relative** to the installation of the motor (if the shutter unrolls from the front it is forward, from the rear backward)
- reverse the operating order 0/100%

{% picture posts/{{ page.guid }}/onglet-expose-home-assistant-zigbee2mqtt-moest-interrupteur-volet-roulant-ZS-SR-EUC.png --alt display of the controls with zigbee2mqtt of the shutters in home assistant with the Moes ZS-SR-EUC switch --img width="940" height="368" %}

> Changing the **forward/backward position is useful if the **open/clause connection of the brown and black phases are reversed

{% picture posts/{{ page.guid }}/parametre-specifique-home-assistant-zigbee2mqtt-moest-interrupteur-volet-roulant-ZS-SR-EUC.png --alt specific parameter reverse order 0/100% of commands with zigbee2mqtt of shutters in home assistant with Moes ZS-SR-EUC switch --img width="940" height="189" %}

### Calibrating the shutters with the Moes ZS-SR-EUC

The **calibration of the shutters works well** here is the manipulation to perform:

1. **lowers** the shutter completely
2. **starts the calibration** on start in zigbee2mqtt
3. press the **up button** of the switch
4. once the desired stop **press stop** still on the button of the switch
5. **lowers** the shutter (physical button)
6. once at the bottom **press stop**
7. to finish **sets the calibration function to end**

I noticed that once calibrated the Moes switch takes 2 seconds longer before stopping for the upper and lower end of travel. **For motors with mechanical end of travel this does not bother**.

> You can finally have fun in Home Assistant and control the shutters remotely.

![Control the shutters in Zigbee thanks to the Moes ZS-SR-EUC in home Assistant with zigbee2mqtt]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/commande-des-volets-moes-dans-home-assistant.webp){: width="579" height="631"}

## Conclusion

As **you can imagine I am disappointed with the Bubendorff brand**, even if they have managed to reinvent themselves especially in the home automation part, it is a brand **far too expensive for a catastrophic result in the long term**, it is so much easier to go for other brands and thus save money. Fully automating an electric shutter motor **costs less than €150** for a power of 25Nm. At Bubendorff it will cost you €277 and at this price it is still not automated, **you would have to add €150 more for all the shutters to be able to control them remotely, it is simply disgusting**.
Good assembly!









