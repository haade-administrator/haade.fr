---
guid: 134
title: "Welock SECBNEBL51 fingerprint lock review"
description: "Welock provided me with this fingerprint lock which allows anyone to give you keys, no need to be afraid in case of loss, Welock the key killer."
ref: "SECBNEBL51"
layout: post
authors: [Nico]
date: 2024-07-17 10:15
last_modified_at: 
categories: [Tests, Haade-lab]
tags: []
video: 
image: 'welock-test-SECBNEBL51-fingerprint-lock-the-key-killer.png'
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
rating: 3.8
sourcelink:
  - https://www.welock.com/collections/smart-lock-eu/products/welock-fingerprint-electronic-smart-door-lock-cylinder-SECBNEBL51
---

Today I am going to present to you a **but not too** connected fingerprint lock, the Welock {{ page.ref }}. **Why but not too much**, I find that the connected function is not there, **let me explain:** The Welock connected locks can be unlocked via the Welock smartphone application and that's it, it There is indeed a wifi bridge but **I did not find integrations for the opensource systems Home Assistance, Jeedom, Openhab... .**

{%- include alert.html type="info" text="Haade.fr is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means to earn fees when creating links to Amazon.com and affiliated sites." %}

> The **wifi bridge** just allows you to control the lock via the welock app remotely.

Currently the welock {{page.ref}} only **connects to the application via bluetooth** so close to the lock, it's good it's secure but that's not what we request to a current smart lock.

{% include product-embed.html image="welock-SECBNEBL51-serrure-empreinte-digitale.png" title="Welock fingerprint lock SECBNEBL51" brand="Welock" description="Electronic fingerprint lock with Bluetooth WiFi RFID card for adjustable cylinder from 30 to 70 mm, electronic locking cylinder, Discount coupons: <b>SECB51001</b>" amazlink="3Whtm0f" %}

In case of shortages on the Amazon website [you can also order the lock directly on the Welock website](https://www.welock.com/haadbl55901){: target="_blank"}, it is priced at **€189 Free delivery**. But don't worry with the following code: **SINDRO50** it will only cost you €139**, of course it's a little more expensive than on the Amazon site but it's still reasonable.

## Unboxing

Concerning the **packaging nothing to say**, it is very well done, the cardboard is of an interesting volume which will leave no room for doubts. **Attention!**{: .red} do not throw away the cardboard once the installation is complete because you will find **the unique identifier** of the lock which will allow you to connect it to the application.

{% picture posts/{{ page.guid }}/emballage-déballage-welock-SECBNEBL51-serrure-empreinte-digitale.png --alt Unboxing Unboxing of Welock SECBNEBL51 Fingerprint Lock --img width="940" height="529" %}

In the package you will find:
- **well-written instructions in different languages**
- the connected lock
- an allen key
- a key to perform a reset
- plus a screwdriver, additional screws
- green screw locking tips
- an extension and a screw for the Barrel
- as well as 3 RFID badges which will be used to unlock the mechanism in addition to unlocking by fingerprint.

{% include doclink.html docx="Manuel-SECBNEBL51_EN.pdf" title="Welock SECBNEBL51 fingerprint lock user manual" %}

{% picture posts/{{ page.guid }}/déballage-welock-SECBNEBL51-serrure-empreinte-digitale-fourniture.png --alt All the equipment supplied in the fingerprint lock package Welock SECBNEBL51 --img width="940" height="529" %}

To finish this overview of the packaging you will be able to realize that **the lock is very well protected** against the hazards of transport. But also the size of it.

{% picture posts/{{ page.guid }}/emballage-rendu-taille-welock-SECBNEBL51-serrure-empreinte-digitale.png --alt All the equipment, package protections and size provided in the package of the Welock SECBNEBL51 fingerprint lock --img width="940" height="529" %}

## Welock organization chart {{ page.ref }}

Below you will find all the flowcharts, representing the functions available on the lock's digital screen.

### Digital print

Below is the flowchart to add/remove admin and user fingerprint

{% picture posts/{{ page.guid }}/WeLock-Codes.jpg --alt Flowchart of fingerprint changes of Welock SECBNEBL51 fingerprint lock --img width="600" height="642" %}

### add/remove RFID card

As its name suggests, adds/modifies/controls the RFID cards provided with the device.

{% picture posts/{{ page.guid }}/WeLock-Ajout-RFID.png --alt Flowchart of modifications and additions of rfid cards to the Welock SECBNEBL51 fingerprint lock --img width="345" height="600" %}

### other settings

In the other parameters **you can modify:**

- the language (English or German) **the French is missing, too bad**.
- Activates/deactivates the sound (beep).
- Enables/disables bluetooth (the application needs bluetooth to work).
- changes the date and time.

{% picture posts/{{ page.guid }}/WeLock-Autres-parametres.png --alt Flowchart of other functions of the Welock SECBNEBL51 fingerprint lock --img width="600" height="632" %}

## The fingerprint

I must say that the operation and configuration by **fingerprint is ultra responsive**, very precise, in short, nothing to complain about.

## Adding batteries

Adding the batteries involves handling the shell, **starts with:**

- unscrew the zinc protection using the allen key
- pulls on the end rubber sleeve without the screw
- adds batteries not supplied, type **3xAAA**
- closes the sleeve and locks it using a screw provided in the package.

{% picture posts/{{ page.guid }}/insertion-des-piles-dans-le-welock-SECBNEBL51-serrure-empreinte-digitale.png --alt Inserting Batteries into the Welock SECBNEBL51 Fingerprint Lock --img width="940" height="529" %}

## Installing the barrel extension

The Welock {{ page.ref }} lock is compatible with European type locks. If you have any doubts, do not hesitate to contact the team, they will quickly answer your questions [service@welockglobal.com](mailto:service@welockglobal.com){: target="_blank"}

**to do:**

- unscrew the Zinc handle using the allen key
- remove the handle
- installs the extension and matches it to the corresponding punches and notches
- insert the long screw and tighten it thoroughly
- now you can put the zinc handle back in place and tighten the allen screw.

> By extending the barrel, the **adjustment range will increase from 50 to 100mm**.

{% picture posts/{{ page.guid }}/insertion-de-la-rallonge-dans-le-welock-SECBNEBL51-serrure-empreinte-digitale.png --alt Inserting the extension into the Welock SECBNEBL51 fingerprint lock --img width="940" height="529" %}

> Personally, I did not need to place this extension during my tests.

## Installing the Welock {{ page.ref }}

To install the lock there too **it's not very complicated**, however it will be necessary to dismantle the old barrel in order to replace the entire system. Depending on the situation, the installation can be more or less complex and long, in my case for example I had to go through the dismantling of the plastic fittings which was not so easy.

> Welock could probably have found a simpler system, by installing this lock on the door without needing to dismantle the existing mechanism as did [Tedee with his connected lock]({% post_url /en/2024-04-22-test-of-the-tedee-go-connected-lock-and-accessories %}){: target="_blank"}.

### Barrel control

When replacing the lock, and after dismantling the original barrel, **compare the length of the barrel as well as the positioning of the thread** for the screw holding it.

**If this location is not identical** you will certainly have to reverse the direction of the barrel; you will just need to attach the two circlips located on the Welock barrel and reverse the mechanism.

**Regarding the size** if the original barrel is longer, do not forget to [fix the extension](#installing-the-barrel-extension) provided with the Welock lock {{ page.ref }}.

{% picture posts/{{ page.guid }}/remplacement-pose-welock-SECBNEBL51-barillet-origine.png --alt Replacement and control of the original cylinder and the Welock SECBNEBL51 fingerprint lock in the application --img width="940" height="529" %}

### Installing the welock {{ page.ref }}

Depending on the case, the installation can be easy, the installation as well as the fixing of the screw holding the barrel did not cause me any problems. This is a scenario because in this specific case **I could not leave the lock outside as it does not have the quality required to withstand the climatic conditions. It is rather intended for internal access doors to the building.**

**Starts with:**

- unscrew the barrel locking screw
- once dismantled prepare the welock lock by dismantling the zinc handle
- if necessary mount the extension
- pay attention to the direction of the barrel and compare with the original one
- if necessary you can swap the cylinder on the welock lock {{ page.ref }}
- once in place locks using the original screw

> And there it is.

{% picture posts/{{ page.guid }}/mise-en-place-welock-SECBNEBL51-serrure-empreinte-digitale.png --alt Setting up the Welock SECBNEBL51 fingerprint lock in the app --img width="940" height="529" %}

## Welock Application

[Welock Android](https://play.google.com/store/search?q=welock&c=apps&gl=FR){: target="_blank"}
[Welock Apple store](https://apps.apple.com/fr/app/welock/id1133801008){: target="_blank"}

**The application will essentially serve you** to unlock the lock using the smartphone or to unlock the lock in the event of an anomaly or insufficient lock battery.

As for the other functions, they will be rather secondary and therefore dispensable from the primary function of the lock.

{% picture posts/{{ page.guid }}/ajout-serrure-application-welock-SECBNEBL51.png --alt Added Welock SECBNEBL51 Fingerprint Lock in the app --img width="940" height="509" %}

### Application functions

**You will be able to manage:**

- member authorizations by assigning the registration numbers of fingerprints, cards etc... **(I don't see the primary use of this function)**
- Add or delete RFID cards **with or without validity period** (not bad for distributing cards to third parties)
- view history
- download recording details
- remove fingerprints without going through the lock
- synchronize the time *(function available directly on the lock screen)*
- access general settings

{% picture posts/{{ page.guid }}/fonction-serrure-application-welock-SECBNEBL51.png --alt Welock SECBNEBL51 Fingerprint Lock Function in App --img width="940" height="509" %}

## battery backup function

{% include product-embed.html image="powerbank-avec-cable-inclus.png" title="10000mAh External Battery with 4 Integrated Cables" brand="Charmast" description="Functional power bank for Welock fingerprint lock emergency operation." amazlink="3xMHqWd" %}

To begin with, you should know that the battery life is between 10 and 12 months.

{%- include alert.html type="info" text="Unlocking the lock in the event of battery malfunctions <b>can only be done via the application</b>, the power bank is there as a power source, the keys and fingerprints of the lock will not be not active" %}

{% picture posts/{{ page.guid }}/mode-secours-welock-SECBNEBL51.png --alt Battery backup mode with powerbank and app the Welock SECBNEBL51 fingerprint lock --img width="940" height="529" %}

To use the emergency battery you will need a powerbank with an electrical output between 3.6 and 4.5v as well as a powerbank compatible cable and a *USB-A output which could have been USB-C* type. **In fact I used the 5v output of the power bank which caused no problems with the lock.**

Additional reduction coupons valid on the [Amazon site](https://amzn.to/3Whtm0f){: target="_blank"} exclusively for the Haade.fr site: **SECB51001**. For a **Final price of €132.**

**Product advantages:**{: .blue}

- Quick and easy installation
- Opening by smartphone, fingerprint and RFID badge
- Backup battery

**The - of the product:**{: .red}

- Lack of compatibility with third-party applications on the market (Home Assistant, Openhab, Jeedom, Homey, etc.).
- Good finish but little work (once installation is done)
- French translation non-existent
- lock intended for interior door (no IP65-66 protection)
- display of functions on the lock a little cheap
- USB-A connection

Additional reduction coupons valid on the [Amazon site](https://amzn.to/3Whtm0f){: target="_blank"} exclusively for the Haade.fr site: **SECB51001**. For a **Final price of €132.**

{% include product-embed.html image="welock-SECBNEBL51-serrure-empreinte-digitale.png" title="Welock fingerprint lock SECBNEBL51" brand="Welock" description="Electronic fingerprint lock with Bluetooth WiFi RFID card for adjustable cylinder from 30 to 70 mm, electronic locking cylinder, Discount coupons: <b>SECB51001</b>" amazlink="3Whtm0f" %}

In case of shortages on the Amazon website [you can also order the lock directly on the Welock website](https://www.welock.com/haadbl55901){: target="_blank"}, it is priced at **€189 Free delivery**. But don't worry with the following code: **SINDRO50** it will only cost you €139**, of course it's a little more expensive than on the Amazon site but it's still reasonable.

{%- include alert.html type="info" text="Haade.fr is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means to earn fees when creating links to Amazon.com and affiliated sites." %}

## Conclusion

**This lock is good because it will allow you to do without keys** and thus avoid any problems related to them, **the entire mechanism and assembly is of good quality**, the fingerprint system reacts like clockwork.
**Attention:** this lock is mainly dedicated to doors protected by bad weather, **I doubt that it is resistant to climatic conditions**. *In addition I did not find any information on the protection index.*
Personally, the application needs to be reviewed, I find it quite poorly made, compared to other applications dedicated to connected locks. But you can easily do without it.
As for the emergency connection in the event of battery failure, it is well thought out, **but I doubt that the day that happens you will have a power bank with a cable to help you out.**

> Paulo will test it on his front door and will give you a little video feedback.
