---
guid: 156
title: "Testing the Tado° heating interface"
description: "Second step of presentation of the Tado universe, I will show you the whole process of using the Tado interface and its particularities"
ref: ""
layout: post
authors: [Nico]
date: 2025-03-05 11:00
last_modified_at: 
categories: [Tests, Videos, Haade-lab]
tags: []
video:
image: 'control-your-tado-installation-by-official-app.png'
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
  - https://support.tado.com/en/articles/4190245-how-can-i-get-started-with-the-tado-app
---

**Here is a continuation of the presentation of the Tado° universe** following the presentation of the [Tado° X thermostatic faucet]({% post_url /en/2025-02-12-tado-x-thermostatic-faucet-test-near-perfection-thread-compatible %}){: target="_blank"}, Today I will introduce you to the Tado° application, its special features and **especially what differentiates the management of Tado° Heating and management from other brands**.

As **previously presented what differentiates Tado° products from other brands** starts with **the integration of the Thread protocol** associated with Matter object management. Coupled with **well-finished products** and complementary products that make **this brand a must** in heating management and totally autonomous. Basically you will not particularly need an Opensource Manager like Home Assistant to make **great savings on your gas or fuel bill**.

{% include product-embed.html image="tado-x-kit-demarrage-thermostat-filaire-bridge.png" title="Tado X Wired Starter Kit" brand="Tado°" description="Tado-X Starter Kit, wired thermostat and bridge, connects the thermostat via dry contact directly to the boiler" amazlink="3EsAZKE" %}

**As a reminder**, if you just buy thermostatic taps that you can turn on or off at your **convenience, you will only save a maximum of 15% on your bill**. **Where Tado° differentiates itself** is that it will allow you to **directly control your boiler** and thanks to that you will be able to make **up to 40% savings**, which is very interesting especially for a return on investment that will be much faster.

**In various articles and videos with August** we have talked many times about **a similar installation with Home Assistant** and thermostatic taps that control your boiler, **and it works so let's dissect the Tado° universe.**

> I must say that the application is very well done

## Video presentation

**Often requested, never done**, I am launching into a new explanatory format that will accompany the associated article, some readers have reported to me the difficulty in following the **articles accompanied by animated gifs**, which seems to me to be an obvious observation, so I will make the effort to feed the [Haade Youtube channel](https://www.youtube.com/channel/UCcXJ1ZsjEvQxuWJy7gH-A6w){: target="_blank"}.

{% include videoPlayer.html youtubeId="bJK9krRC90Q" %}

## Installing the Tado° app

Let's not waste any time, let's move on to installing the application on your smartphone.

### For Android

Simply scan the QRCode below to directly access the installation on your phone. At the time of writing, **the application is rated 4.5/5 with more than 5000 voters,** which is very well rated.

{% include qrlink.html qrlink="https://play.google.com/store/apps/details?id=com.tado&hl=en" text="download the Tado° app from the playstore" realtextlink="https://play.google.com/store/apps/details?id=com.tado&hl=en" %}

### For Iphone

Simply scan the QRCode below to directly access the installation on your phone. **And there too** at the time I write these few lines **the application is rated 4.5/5 with more than 5000 voters,** which is very well rated.

{% include qrlink.html qrlink="https://apps.apple.com/us/app/tado/id574418486" text="Download the Tado° app from the Appstore" realtextlink="https://apps.apple.com/us/app/tado/id574418486" %}

> Good news the app is already very well rated

## How to get started with the Tado° app

To [get started Tado° support has very well documented](https://support.tado.com/fr/){: target="_blank"} his entire universe, [including how to get started with the application](https://support.tado.com/fr/articles/4190245-comment-debuter-avec-l-application-tado){: target="_blank"} Apart from this article you will find everything you need to learn how to control your heating.

{%- include alert.html type="info" text="Haade.fr is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means to earn fees by linking to Amazon.com and affiliated sites." %}

{% include product-embed.html image="lot-de-3-robinets-tado-x-thermostatique-matter-thread.png" title="Set of 3 Tado° X thermostatic taps" brand="Tado°" description="Set of 3x Tado° X thermostatic taps, probably the most advanced tap on the market, matter over thread compatible" amazlink="3X45Fsn" %}

### First step

You will need to create an account if you haven't already done so, otherwise if you want to test the application before making the purchase. Tado° has made a **demo account** available.

The Demo account is an interface that is not complete because you will not have access to the module settings, only to the frontend management (you do not have access to room modifications, etc.), but it's already not bad for testing the Tado universe.

{% picture posts/{{ page.guid }}/premiere-connection-application-tado-inscription-mode-demo.png --alt First time use of the Tado app access a demo, existing user or create an account --img width="940" height="509" %}

**When you first connect**, you will not have a connected device as in the image below. But if like me you have already connected from a device then you will find the list of registered devices you will just have to select one or the other to resume the configuration, or **simply create one** if it is your first device.
Then Tado° will ask you to accept geolocation, like many applications Tado will take into account the presence or absence of people in the home.

{% picture posts/{{ page.guid }}/premiere-connection-application-tado-enregistrement-donnees-cloud.png --alt First login of the Tado app with existing user account, geolocation and cloud data recording --img width="940" height="509" %}

## Add your first device

**Adding a device in Tado** follows the Matter integration logic, **if you have already integrated a Matter device** before, adding a device in Tado° is identical. If on the contrary it is the first time that you integrate a Matter device.
**Then in step 1** you will have to **scan the qrcode** available with the box or behind the product. I strongly advise you to keep the Matter labels which are much easier to Scan. **But know that if you cannot scan the QRCode** you can also use the code available below with 11 digits: **XXXX-XXX-XXXX**.

{% picture posts/{{ page.guid }}/ajout-du-premier-appareil-matter-tado.png --alt Added first Thread Matter compatible Tado device to the Tado app --img width="940" height="522" %}

The screenshot **above only shows 4 steps**, out of the 8 actually defined by Matter, but these are as you can imagine the important steps for integration into Matter.
**I deliberately started with the bridge** because it is the one that **integrates the Thread protocol** without it you will hardly be able to integrate a Tado° thermostatic tap.
**Then I will install a thermostatic tap** and a boiler control thermostat.

## Overview of the Tado° app settings

Configuring an application is essential to understand and optimize its operation, the Tado° application is as announced earlier, **very well done**, so there are quite a few settings, **but not too complicated to understand**.

![Tado° App Settings Page]({{ site.baseurl }}/assets/images/posts/{{ page.guid}}/pages-des-parametres-appli-tado.webp{{ cachebuster }}){: width="340" height="746" class="lazyload pictaninpost"} 

**I have detailed the TADO° application in 3 key steps:**

1. the settings
2. the more function
3. the home page

> So yes, **there are a lot of screenshots**, almost indigestible, and I am still not even 100% sure **that I have not forgotten something**!

{% include product-embed.html image="robinet-tado-x-thermostatique-matter-thread.png" title="Tado°" brand="Tado°" description="Tado° X thermostatic faucet, probably the most advanced faucet on the market, matter over thread compatible" amazlink="4i2glzz" %}

### Rooms and Devices

This tab lists **the devices included in the application** such as (the Thermostatic head, the smart thermostat and the bridge).

> The rooms function in Tado° is a very important function

**When adding a device** Tado adds this device **in a room** with a systematically different random number, you will then have to **rename this room** or move the device to an existing room.

By clicking on the **3 small dots** at the top right you can **delete the device**{: .red} if you wish

Below in rooms and devices you can see that the **thermostatic valve** is in the room renamed **Living room** and the **smart thermostat** in the room named **hallway**.

{% picture posts/{{ page.guid }}/parametrage-piece-e-appareil-tado.png --alt Setting up Tado rooms and devices --img width="940" height="522" %}

**When you click on the room you can:**

1. **rename** the room
2. **control the heating function** by room with 3 sub-functions (until the next time block, by timer, or until the programming is reactivated)
3. Finally, the last function you can **associate the room with a smart thermostat** (in short, a boiler controller)

> At Tado° **it is the room that takes precedence over the device** and in greos the automations are done by room.

{% picture posts/{{ page.guid }}/parametrage-appareil-tado.png --alt Setting up registered Tado devices --img width="940" height="522" %}

Here in the settings of the end Devices (faucet and thermostat) you will be able to:

1. see the connectivity and the battery status
2. change the name of the room or move the device to a new room
3. Activate or not the child safety

{% picture posts/{{ page.guid }}/suite-parametrage-appareil-tado.png --alt Continued Setting up registered Tado devices --img width="940" height="522" %}

4. Show installation instructions (may be useful)
5. Change the temperature reading compensation factor
6. Link the device to a matter hub (useful if you change bridges or if you switch to home Assistant)

That's it **the settings are identical for smart thermostats**, as for the bridge you can only configure it if it disconnects from the wifi network.

{% include product-embed.html image="lot-de-3-robinets-tado-x-thermostatique-matter-thread.png" title="Set of 3 Tado° X thermostatic taps" brand="Tado°" description="Set of 3x Tado° X thermostatic taps, probably the most advanced tap on the market, matter over thread compatible" amazlink="3X45Fsn" %}

### House details

In the house details, there is nothing complicated either:

1. you **change the name "House"** to something else
2. enter the main address **determinant for geolocation**
3. **Modify the contact details** of the resident

{% picture posts/{{ page.guid }}/detail-parametres-maison-tado.png --alt Continuation of Setting Tado Home Setting Details --img width="940" height="522" %}

**For people management** it's different from a traditional home automation system, of course **you can modify your normal account** you created it during your first TADO° connection, **but you won't be able to create other accounts**, on the other hand you can **invite** people to download the application and **to create an account for your environment**.

> the Tado° application **is 100% Cloud**, a point that I don't like, **but hey that's how it is!**

{% picture posts/{{ page.guid }}/detail-parametres-les-personnes-tado.png --alt Continuation of People Settings in Tado --img width="940" height="522" %}

### Auto-Assist

**Auto-Assist is a skill**, an add-on, by clicking on it I realize that **it's paid**. **It's like charging for automations in Home Assistant, that would be heresy**. **But who says Cloud says storage and server use, so you pay for the transfer of information and the company has access to information about your heating**{: .red}.

{% picture posts/{{ page.guid }}/parametres-tado-auto-assist.png --alt Paid automation at Tado with Auto-Assist --img width="630" height="700" %}

[Auto-Assist explanation by Tado°](https://support.tado.com/en/articles/3387221-qu-est-ce-que-auto-assist){: target="_blank"}

### Geolocation

The Geolocation tab includes the settings for the location of your home (essential for heating automation when no one is home), **provided you have the Auto-Assist subscription!**{: .red}, in this tab you can also configure the smartphone that will be associated with the presence, **because you can configure several devices for a single account.**

{% picture posts/{{ page.guid }}/parametres-tado-geolocalisation.png --alt Geolocation settings in Tado --img width="630" height="700" %}

### Open window detection

In the settings you will also find **the open window function**, *as a reminder when the temperature drops quickly the application considers that a window is open and automatically cuts off the thermostatic valves*, the function is **configurable by room** and you can also set a cut-off duration. **But for an automatic shutdown you will also need the Auto-Assist subscription**{: ​​.red}, otherwise you will only have a **notification on your smartphone** and you will have to manually turn off the heating.

{% picture posts/{{ page.guid }}/parametres-detection-fenetres-ouvertes-tado.png --alt Settings for open window detection in Tado with room management --img width="630" height="700" %}

### Smart Programming

A big block of heating management, programming **is also done by room** and not by device, **by default** Tado° creates a daily program with predefined time blocks, in the management **you can also set the absence mode**.

{% picture posts/{{ page.guid }}/parametres-programmation-intelligente-tado.png --alt Smart schedule settings in Tado with room management --img width="630" height="700" %}

**In absent mode you can:**

- set a temperature
- if deactivated a frost protection function takes over.

**In presence mode**
- you can create or delete time blocks
- and copy the programming to duplicate it in another room.

{% picture posts/{{ page.guid }}/parametres-suite-programmation-intelligente-tado.png --alt Smart schedule settings in Tado with room-specific management --img width="940" height="522" %}

### Functions without feedback!

in the settings some skills do not present anything like:

- the weather application
- ambient well-being
- analysis and statistics

> Weird especially for existing and free functions, why put these tabs!

{% picture posts/{{ page.guid }}/parametres-les-fonctions-vides-tado.png --alt Next Settings for functions without feedback --img width="940" height="522" %}

### Notifications and Appearances

**Notifications are essential** especially **if you do not have the Auto-Assist subscription** you can **activate/deactivate**:

- the low battery indicator
- absent/present mode reminder
- open window reminder
- energy and cockpit reminder

As for **appearance** there is a **light and dark mode as well as the automatic mode.**

{% picture posts/{{ page.guid }}/parametres-notification-et-apparence-tado.png --alt Notifications and Appearance settings in Tado --img width="630" height="700" %}

## More tab

The more tab groups together:

- your **account information that can be modified**
- links to the tado and community help centers
- an option to install the beta version

Then the analysis functions are grouped together, **you can disable the usage behavior function**, but this function does not block all the information sent to Tado°, **they certainly record all the temperature and consumption information!**

{% picture posts/{{ page.guid }}/Onglets-plus-dans-tado.png --alt More tab in Tado --img width="940" height="522" %}

## Main Tab "Home"

Let's come to the tab that interests everyone, the home page is full of very useful functions

### off-programming-boost functions

1. The **off system** allows you to **turn off all heating modules** with a single click.

2. **The programming system** allows you to switch **all devices to programming mode** with a single click
3. **The Boost function** is a very interesting function because it allows you to **put all devices on forced heating for a period of 30 minutes** with a single click in order to allow the home to heat up quickly.

{% picture posts/{{ page.guid }}/fonction-off-programmation-boost-tado-application.png --alt 3 functions temperature control off, schedule and boost in the Tado app --img width="940" height="522" %}

{% include product-embed.html image="tado-x-kit-demarrage-thermostat-filaire-bridge.png" title="Tado X Wired Starter Kit" brand="Tado°" description="Tado-X Starter Kit, wired thermostat and bridge, connects the thermostat via dry contact directly to the boiler" amazlink="3EsAZKE" %}

#### Boost function

**I have captured the boost function** to show you how it works. **Tado° has natively implemented a highly requested function** on the forums, where you need to create an automation in Home-Assistant, **Tado has made it simple**.

{% picture posts/{{ page.guid }}/fonction-boost-mise-en-chauffe-express-30-min.png --alt Boost function for rapid heating for 30 minutes in Tado --img width="630" height="700" %}

### Temperature management options

When you enter the device management interface, **in addition to increasing the temperature manually**, switching to **programming mode** you have access to two other functions:

1. **directly** to the global programming page
2. **access to the heating history** which will allow you to see the heating and humidity curves at a glance.

{% picture posts/{{ page.guid }}/fonction-programme-statistique-dans-gestion-chauffage-par-pieces-app-tado.png
 --alt Programming management and statistical display in heating control with the Tado app --img width="940" height="522" %}

### Manual Mode Time Stop Change

The function up to the next time block can be changed, shortened or increased to infinity.

{% picture posts/{{ page.guid }}/mode-manuel-changement-taquet-horaire-programmation-predefini-appli-tado.png --alt Function available manual mode change end of mode tab compared to programming in Tado --img width="630" height="700" %}

The cool thing about the tado° app **is also the change in the color of the wallpapers** depending on the room temperature or the change in the target temperature.

{% picture posts/{{ page.guid }}/affichage-control-temperature-tado.png --alt Temperature control in the Tado app --img width="940" height="522" %}

### Reorganization of the Rooms

As you can see on the image below, the organization of the rooms is of course **modifiable, by simple drag and drop**, the organization will be seen directly on the home interface.

{% picture posts/{{ page.guid }}/reorganisation-des-pieces-dans-app-tado.png --alt Importance and reorganization of rooms in Tado --img width="630" height="700" %}

### Editing devices by room

As I have said several times, tado° manages **the priority of heating by room and not by device**. One of the strengths of Tado° also lies **in the combination of devices by room**.

- On the screenshot below you can **see on the left image** a single Living room device group (because I put the smart thermostat in the same room as the thermostatic valve).
- **On the right image** the two devices are located in a different room

When only one room is set **the "modify rooms" tab disappears.**

{% picture posts/{{ page.guid }}/reorganisation-des-pieces-dans-app-tado-fonctionnement.png --alt How room modifications work in Tado --img width="630" height="700" %}

In the following screenshot I show you step by step the modification of the corridor room of the "smart kit" device by transferring it to Living room.

{% picture posts/{{ page.guid }}/reorganisation-des-pieces-par-appareils-dans-app-tado.png --alt Reorganizing rooms by devices in the Tado app --img width="940" height="522" %}

Once modified you will find on the main interface **with only one living room icon**, and what is **magical** is the fact that **the application no longer uses the temperature reading of the thermostatic tap but that of the thermostat kit fixed to the wall**.
With a **simple change of parts** you can use the temperature function of the kit which is much *more accurate than that of the tap located near the heating body*.
**This is an ultra interesting function** and simple to set up.

> While under **home assistant it would be necessary to integrate an automation** which calibrates the temperature of the thermostatic tap with a remote probe.

{% picture posts/{{ page.guid }}/resultat-reorganisation-des-pieces-par-appareils-dans-app-tado.png --alt After reorganizing rooms by devices two devices in the same room only show one screen in Tado --img width="630" height="700" %}

{% include product-embed.html image="robinet-tado-x-thermostatique-matter-thread.png" title="Tado°" brand="Tado°" description="Tado° X thermostatic faucet, probably the most advanced faucet on the market, matter over thread compatible" amazlink="4i2glzz" %}

### Auto-Assist On the main tab

On the main tab we also find the famous paid auto-assist function. At a glance you can see the advantages of subscribing to such a subscription.

> Automations with Tado° are paid and that's a shame.

{% picture posts/{{ page.guid }}/auto-assist-app-tado-onglet-principal.png --alt Auto-assist-advantages-and-disadvantages in Tado --img width="630" height="700" %}

### Well-being tab

**While in the settings the well-being tab does not show any information**, on the main page it is quite different.
You will be able to view **all the information on the air quality and humidity** of your home and those by room.
**The color of the wallpaper** will change depending on the feeling of the room.

> you can also see at the top right the **outside temperature of your home**, the weather adaptation function works well and truly.

{% picture posts/{{ page.guid }}/affichage-bien-etre-onglet-tado-infos.png --alt Benefits of the Wellness tab in Tado --img width="630" height="700" %}

### Home Tab

The home tab allows you to switch from present to absent mode with a **single click** and thus turn off the heating *(as a reminder, you can change the heating setting in absence mode in the programming settings)*.

> I still regret that **this function is not available** directly at the top of the main page.

{% picture posts/{{ page.guid }}/affichage-onglet-maison-tado-infos.png --alt Showing Home Tab Present-Away in Tado --img width="630" height="700" %}

### Energy-Cockpit tab

The unfortunately paid energy-cockpit tab still lets you see the percentage of energy savings achieved.
For the **history functions** and **cost simulators**, you can either brush yourself off or **put your hand in your wallet**.

{% picture posts/{{ page.guid }}/onglet-energy-cockpit-affichage-propose-appli-tado.png --alt Energy Cockpit tab display in Tado --img width="630" height="700" %}

{% include product-embed.html image="robinet-tado-x-thermostatique-matter-thread.png" title="Tado°" brand="Tado°" description="Tado° X thermostatic faucet, probably the most advanced faucet on the market, matter over thread compatible" amazlink="4i2glzz" %}

## **the + of the application** {{ page.ref }}
{: .blue}

- **well rated** on the **Playstore and Appstore** platforms
- **Easy interface** to learn
- **color changes** according to temperatures
- **simple programming**
- A **Boost** function
- A **combination of temperatures** by automated rooms
- many help links
- Some automations available by default

## **the - of the application** {{ page.ref }}
{: .red}

- The **automations** for the most part **are paid** by Auto-Assist
- no management by devices
- impossible to manually add a user
- obliged to use **the application no Webapp**
- **100% Cloud application**

## Conclusion

Here is a **fun heating management** application that will allow you to easily make **great savings energy**, unique to Tado°, **I still deplore** *the mandatory monthly subscription* to access all the automations and feedback of energy saving information.
**Another negative point** Tado° **is 100% Cloud,** your heating will work perfectly locally, **the rest happens on the Tado° servers**