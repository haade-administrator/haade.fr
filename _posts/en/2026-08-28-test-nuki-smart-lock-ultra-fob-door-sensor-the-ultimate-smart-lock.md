---
guid: 179
title: "Nuki Smart Lock Ultra, Fob and Door Sensor test the ultimate smart lock"
description: "Full test of the Nuki Smart Lock Ultra smart lock with the Fob and Door Sensor, Home Assistant integration via Matter and MQTT, Airbnb and rental services, comparison with the Tedee Go"
ref: "Nuki Smart Lock Ultra"
layout: post
authors: [Nico]
date: 2026-08-28 09:45
last_modified_at: 
categories: [Tests, Security, Home-Assistant]
tags: []
video: 
image: 'is-the-nuki-smart-lock-ultra-worth-the-cost.png'
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
  - https://nuki.io/en/smart-lock-ultra/
  - https://nuki.io/en/fob/
  - https://nuki.io/en/opener/
  - https://developer.nuki.io/
  - https://www.home-assistant.io/integrations/nuki/
---

Some time ago I tested the [Tedee Go smart lock and its accessories]({% post_url /en/2024-04-22-test-of-the-tedee-go-connected-lock-and-accessories %}). The product left me with an **unfinished feeling**: noisy (70dB!), power-hungry and limited in connectivity. Today I'm tackling what's best on the European market: the **{{ page.ref }}**. And I'm not coming alone, I also have the **Nuki Fob** (Bluetooth remote control) and the **Nuki Door Sensor** (door opening sensor).

After several weeks of daily use, I can tell you that **Nuki has set the bar very high**. Ultra-fast brushless motor, compact stainless steel design, built-in WiFi + Thread/Matter + MQTT, no bridge needed... **it's probably the most complete smart lock on the market.** But does it justify the €349 price tag? That's what we're going to find out together.

{% include product-embed.html image="nuki-smart-lock-ultra-serrure-connectee.png" title="Nuki Smart Lock Ultra" brand="Nuki" description="Nuki Smart Lock Ultra smart lock, brushless motor, WiFi, Thread/Matter, MQTT, SKG*** universal cylinder, stainless steel" newamazlink="B06T45HCe" domlink="controle-d-acces-sans-fil/7882-nuki-smart-lock-ultra-serrure-intelligente-matter-alexa-google-home-homekit-smartthings-homey-9120072083969.html" %}

## The Nuki Brand

**Nuki** was founded in **2014 in Graz, Austria** by brothers **Martin and Jürgen Pansy**. The adventure started in 2015 with a successful **Kickstarter** campaign, and the first product was launched in 2016. Since then, Nuki has established itself as **the leading European brand** for smart locks.

What makes Nuki strong is their **"Made in Europe"** philosophy: development and manufacturing are deliberately kept in Europe to guarantee quality, shorten development cycles and ensure a sustainable supply chain. In a market dominated by Asian and American manufacturers, **it's a real mark of trust**.

{%- include alert.html type="info" text="Nuki is compatible with <b>Apple Home (HomeKit), Google Home, Amazon Alexa, Samsung SmartThings</b> and of course <b>Home Assistant</b>. The ecosystem is one of the most complete on the market." %}

The evolution of the Smart Lock range is impressive. In 10 years, Nuki has gone from a bulky plastic housing to a compact stainless steel cylinder with a brushless motor. The {{ page.ref }} clearly represents **a technological leap compared to all previous generations**.

## Unboxing {{ page.ref }}

The Nuki packaging is neat and premium. On opening, you'll find:

- the {{ page.ref }} lock
- the **Nuki universal cylinder** (adjustable to your door's dimensions)
- 2 interchangeable base rings (white and black)
- the proprietary magnetic USB-C charging cable
- 3 emergency keys
- mounting tools (screwdriver, fixing screws)
- the quick installation guide

{% picture posts/{{ page.guid }}/deballage-nuki-smart-lock-ultra-contenu-boite.png --alt unboxing and contents of the Nuki Smart Lock Ultra box --img width="940" height="529" %}

The Nuki Smart Lock Ultra comes in two parts: one box with the smart lock, the other with the Swiss-made 🇨🇭 cylinder.

{% picture posts/{{ page.guid }}/deballage-nuki-smart-lock-ultra-contenu-boite-nuki.png --alt unboxing and contents of the Nuki Smart Lock Ultra smart lock box --img width="940" height="529" %}

The cylinder kit comes with a range of adapters. Personally, I only needed to install a few pieces from this Lego-like kit 👷, **which by the way is of very, very good quality!**

{% picture posts/{{ page.guid }}/deballage-nuki-smart-lock-ultra-contenu-boite-verrou.png --alt unboxing and contents of the Nuki Smart Lock Ultra cylinder kit box --img width="940" height="529" %}

The first impression is that of a **premium product**. The brushed stainless steel body immediately inspires confidence. We're a far cry from the Tedee Go's ABS plastic. The cylinder is compact, the finish is flawless and the 250g weight gives a feeling of solidity.

{% picture posts/{{ page.guid }}/nuki-smart-lock-ultra-design-acier-inoxydable.png --alt brushed stainless steel design of the Nuki Smart Lock Ultra with interchangeable rings --img width="940" height="529" %}

> The two included base rings (white and black) allow you to match the lock's style to your door. A nice aesthetic touch.

## The {{ page.ref }} Lock

### Design and Dimensions

The {{ page.ref }} takes the form of a **compact cylinder measuring 57mm in diameter** and only **58mm deep**. Weighing **250 grams**, it's a concentrated piece of technology that remains discreet on your door. The brushed stainless steel gives it a premium look and definite robustness.

{% picture posts/{{ page.guid }}/dimensions-nuki-smart-lock-ultra-compact.png --alt compact dimensions of the Nuki Smart Lock Ultra 57mm diameter --img width="940" height="529" %}

A circular LED ring around the edge indicates the lock's status:
- **Green**: unlocked
- **Red**: locked / charging
- **Blue**: connecting
- **Orange**: low battery

### The Brushless Motor: The Real Revolution

{% include product-embed.html image="nuki-smart-lock-ultra-serrure-connectee.png" title="Nuki Smart Lock Ultra" brand="Nuki" description="Nuki Smart Lock Ultra smart lock, brushless motor, WiFi, Thread/Matter, MQTT, SKG*** universal cylinder, stainless steel" newamazlink="B06T45HCe" domlink="controle-d-acces-sans-fil/7882-nuki-smart-lock-ultra-serrure-intelligente-matter-alexa-google-home-homekit-smartthings-homey-9120072083969.html" %}

This is **THE** major innovation of this generation. Nuki has integrated a **brushless motor**, a technology found in electric vehicles and drones. It's a **world first in a smart lock**.

The advantages are immediate:

1. **Ultra-fast**: 3 speed modes
2. **Quieter** than traditional brushed motors
3. **More durable**: no mechanical brush wear
4. **More efficient**: better battery life

{% picture posts/{{ page.guid }}/moteur-brushless-nuki-smart-lock-ultra-3-modes.png --alt brushless motor of the Nuki Smart Lock Ultra with 3 speed modes --img width="940" height="529" %}

The **3 speed modes** are a real plus:

|Mode|Time (double turn)|Usage|
|----|-------------------|-----|
|**Insane**|under 1.5 seconds|Daily use, when you're in a hurry|
|**Standard**|2 seconds|Normal use, good compromise|
|**Gentle**|3.3 seconds|Night-time, optimised for silence|

> The **Gentle** mode is a game changer. If you have sleeping children or close neighbours, you'll appreciate being able to lock your door at 11pm without waking everyone up.

### The Noise Factor 🔊

Since I was particularly critical about the **Tedee Go's noise** (measured at ~70dB at 60cm), I might as well address the subject head-on with the Nuki Ultra.

{% include videoPlayer.html localId="bruit-nuki-smart-lock-ultra-en-action-cadre.mp4" %}

**Verdict: significantly better.** The brushless motor produces a **softer, less piercing** sound than traditional brushed motors. In **Gentle** mode, the lock is remarkably discreet. In **Insane** mode, you can hear the mechanism but it remains at very acceptable levels.

Some important nuances:
- The noise level **depends greatly on your door and cylinder**. A stiff mechanism or a tight cylinder will increase perceived noise
- Some users report occasional clicking, usually resolved by **recalibration** via the app
- Compared to the Tedee Go, it's **night and day**

> To be honest, no motorised lock will be completely silent. But the Nuki Ultra with its Gentle mode is the most discreet I've heard to date. If the Tedee Go's noise made me jump, here I have nothing to complain about.

### Battery and Battery Life

Unlike the Tedee Go and its expensive CR123 batteries, the {{ page.ref }} features a **built-in rechargeable Lithium Polymer battery**. The stated battery life is **~6 months with standard usage**.

Recharging is done via a **proprietary magnetic USB-C cable** that clips onto the lock. Allow **approximately 2 hours** for a full charge. During charging, the LED ring turns red.

{% picture posts/{{ page.guid }}/cable-charge-magnetique-nuki-smart-lock-ultra.png --alt proprietary magnetic USB-C charging cable for the Nuki Smart Lock Ultra --img width="940" height="529" %}

{%- include alert.html type="warning" text="The charging cable is <b>proprietary</b>. It's not a standard USB-C cable. If you lose it, you'll need to buy another from Nuki. This is the most commonly reported negative by reviewers." %}

> Long-term feedback is excellent. LoKan (tech blogger) reports remarkable battery life even with 20+ lock/unlock cycles per day after 4 months of use.

### Technical Specifications {{ page.ref }}

**Design**

|Dimensions|⌀ 57 mm × 58 mm|
|Weight|250 g|
|Material|Brushed stainless steel|
|Colours|Interchangeable rings (black / white)|
|Operating temperature|10°C to 40°C|

**Motor**

|Type|Brushless|
|Insane Mode|< 1.5 seconds (double turn)|
|Standard Mode|2 seconds|
|Gentle Mode|3.3 seconds (noise-optimised)|

**Connectivity**

|Bluetooth|BLE (Bluetooth Low Energy)|
|WiFi|2.4 GHz built-in (no Bridge needed)|
|Thread|Yes (Matter over Thread)|
|Matter|Yes|
|MQTT|Yes (built-in, auto-discovery)|
|Zigbee|❌ No|

**Battery**

|Type|Built-in rechargeable Lithium Polymer|
|Battery life|~6 months (standard usage)|
|Charging|Proprietary magnetic USB-C cable (~2h)|

**Cylinder**

|Cylinder|Nuki Universal Cylinder (included)|
|Certification|SKG*** (high security)|
|Keys|3 emergency keys included|
|Emergency|Physical key still works even with lock installed|

**Features**

|Auto Unlock|Automatic unlocking via geolocation|
|Auto Lock|Automatic locking after configurable delay|
|Activity log|Complete history of lock/unlock events|
|Authorisations|Up to 200 users|

#### **Pros** {{ page.ref }}
{: .blue}

- Compact premium stainless steel design
- Ultra-fast brushless motor (< 1.5s in Insane mode)
- 3 speed modes (Insane, Standard, Gentle)
- Built-in WiFi (no Bridge needed = ~€100 saving)
- Native Thread/Matter
- Built-in MQTT with auto-discovery
- SKG*** universal cylinder included
- Rechargeable battery (~6 months life)
- Reliable Auto Unlock via geolocation
- Compatible with Apple Home, Google Home, Alexa, SmartThings, Home Assistant
- Made in Europe (Austria)

#### **Cons** {{ page.ref }}
{: .red}

- High price (~€349)
- Mandatory cylinder replacement (vs retrofit Tedee/Nuki Pro 5)
- Non-removable battery (charges in place)
- Proprietary magnetic charging cable (not standard USB-C)
- Limited operating temperature (10-40°C)
- No Zigbee

## Installation

{% include product-embed.html image="nuki-smart-lock-ultra-serrure-connectee.png" title="Nuki Smart Lock Ultra" brand="Nuki" description="Nuki Smart Lock Ultra smart lock, brushless motor, WiFi, Thread/Matter, MQTT, SKG*** universal cylinder, stainless steel" newamazlink="B06T45HCe" domlink="controle-d-acces-sans-fil/7882-nuki-smart-lock-ultra-serrure-intelligente-matter-alexa-google-home-homekit-smartthings-homey-9120072083969.html" %}

### Cylinder Replacement

This is **the major difference** from the Tedee Go or Nuki Smart Lock Pro 5 which attach to the existing cylinder. Here, you must **replace your current cylinder** with the **Nuki universal cylinder**.

{%- include alert.html type="warning" text="Replacing the cylinder involves <b>removing your old cylinder</b> and precisely measuring the interior and exterior dimensions of your door. The Nuki app guides you step by step to assemble the modular cylinder to the correct dimensions." %}

**Steps in summary:**

1. **Measure** your old cylinder (interior and exterior sides)
2. **Assemble** the Nuki universal cylinder to the measured dimensions (ingenious modular system)
3. **Insert** the new cylinder into your door
4. **Fix** the base plate with the clamping screw
5. **Clip** the Smart Lock Ultra onto the plate
6. **Calibrate** via the Nuki app

{% picture posts/{{ page.guid }}/installation-nuki-smart-lock-ultra-cylindre-universel.png --alt installing the Nuki Smart Lock Ultra with the modular universal cylinder --img width="940" height="529" %}

Installation takes **less than 15 minutes** for someone who's a bit handy. No drilling needed, a simple screwdriver is enough. The app guides you with videos at each step.

> The Nuki universal cylinder is certified **SKG*** (3 stars)**, the highest security level of the Dutch certification. It's a real argument against criticism about changing the cylinder: you're potentially replacing a basic cylinder with a high-security one.

### Important Point: The Physical Key

Contrary to what you might fear, **the physical key still works** from the outside, even with the lock installed. Nuki provides **3 emergency keys** with the universal cylinder. If the battery dies, you can still get into your home with your key. That's reassuring.

## The Nuki App

The Nuki app (iOS and Android) is **the control tower** of your ecosystem. It's **intuitive, well-designed and comprehensive**.

I won't reveal all the details as there are many — I encountered no integration issues.

{% picture posts/{{ page.guid }}/application-nuki-smart-lock-ultra-interface-integration-serrure.png --alt Nuki app interface for the Smart Lock Ultra lock integration --img width="940" height="529" %}

Despite a manually high-locking cylinder, the calibration is precise and fast — impeccable!

{% picture posts/{{ page.guid }}/application-nuki-smart-lock-ultra-interface-calibration-update-firmware.png --alt Nuki app interface for the Smart Lock Ultra calibration and firmware update --img width="940" height="529" %}

WiFi activation is also well done. On the right of the image, a screenshot of some settings, such as the button function and LED lighting.

{% picture posts/{{ page.guid }}/application-nuki-smart-lock-ultra-interface-wifi-et-options.png --alt Nuki app interface for the Smart Lock Ultra WiFi and various options --img width="940" height="529" %}

### Main Features

- **Lock / Unlock** with a single tap
- **Auto Unlock**: the lock automatically unlocks when you approach your home (GPS geolocation + Bluetooth). You leave a 100m zone, when you return Bluetooth starts scanning for 20 minutes. As soon as you're in range (~10m), the door unlocks
- **Auto Lock**: automatic locking after a configurable delay (30s, 1min, 5min...)
- **Activity log**: who opened, when, how (app, key, Fob, Keypad, auto...)
- **Access management**: up to 200 authorisations, temporary or permanent
- **3 motor speed modes**
- **Calibration** and mechanism diagnostics
- **OTA firmware updates**

{%- include alert.html type="help" text="<b>Auto Unlock</b> is probably the most appreciated feature in daily use. You come home with your hands full of shopping, the door unlocks by itself. After a few days, you can't live without it." %}

## The Nuki Fob

The **Nuki Fob** is a **pocket Bluetooth remote control** in keychain form. Its main use: allowing people **without a smartphone** to unlock the door.

{% picture posts/{{ page.guid }}/nuki-fob-telecommande-bluetooth-detail.png --alt Nuki Fob Bluetooth keychain remote control --img width="940" height="529" %}

### Fob Specifications

|Dimensions|55 × 24 × 6 mm|
|Weight|~9 g (with battery)|
|Communication|Bluetooth 5 (compatible BT 4.0+)|
|Range|Up to 15 metres|
|Battery|1× CR1632 (included)|
|Security|End-to-end encryption (online banking level)|
|Capacity|1 Fob → up to 100 Smart Locks|

{% picture posts/{{ page.guid }}/nuki-fob-telecommande-bluetooth-detail.png --alt Nuki Fob Bluetooth keychain remote control some details --img width="940" height="529" %}

> In my opinion, the Key Fob has a real advantage in daily use

### Practical Use

One press of the button and the door unlocks. It's **ideal for**:
- **children** who don't have a smartphone
- **elderly people** who aren't comfortable with technology
- **cleaning staff** or home helpers
- a **physical backup** in case of smartphone failure

Integrating accessories into the Nuki app is simple and intuitive

{% picture posts/{{ page.guid }}/application-nuki-smart-lock-ultra-integration-fob-et-parametres.png --alt Nuki app interface for the Fob remote control integration and settings --img width="940" height="529" %}

If lost, the authorisation can be **instantly revoked** from the Nuki app.

{% include product-embed.html image="nuki-fob-telecommande-porte-cle-bluetooth-pour-smart-lock-nuki.png" title="Nuki Fob" brand="Nuki" description="Nuki Fob Bluetooth keychain remote for Smart Lock, 15m range, end-to-end encryption, CR1632 battery" newamazlink="B0egEXM0A" domlink="controle-acces/4399-nuki-fob-telecommande-porte-cle-bluetooth-pour-smart-lock-nuki-9120072084058.html" %}

#### **Pros** Nuki Fob
{: .blue}

- Ultra compact and lightweight (9g)
- Works without a smartphone
- End-to-end encryption
- Easy pairing via app
- Instant revocation if lost
- Long-lasting CR1632 battery

#### **Cons** Nuki Fob
{: .red}

- Bluetooth range limited to 15m (must be nearby)
- Single button (no visual feedback)
- No GPS tracking if lost

{% include product-embed.html image="nuki-fob-telecommande-porte-cle-bluetooth-pour-smart-lock-nuki.png" title="Nuki Fob" brand="Nuki" description="Nuki Fob Bluetooth keychain remote for Smart Lock, 15m range, end-to-end encryption, CR1632 battery" newamazlink="B0egEXM0A" domlink="controle-acces/4399-nuki-fob-telecommande-porte-cle-bluetooth-pour-smart-lock-nuki-9120072084058.html" %}

## The Nuki Door Sensor

The **Nuki Door Sensor** is the ideal companion for the Smart Lock Ultra. This small sensor attaches **to the inside of your door** and tells you in real time whether the door is **open, closed or locked**. It's an accessory I consider essential for a complete installation.

{% picture posts/{{ page.guid }}/nuki-door-sensor-capteur-ouverture-porte.png --alt Nuki Door Sensor door opening sensor installed --img width="940" height="529" %}

### Door Sensor Specifications

|Dimensions|Compact (attaches to the door frame)|
|Communication|Bluetooth Low Energy|
|Power|Battery (long life)|
|Installation|3M adhesive (no drilling, no screws)|
|Compatibility|Nuki Smart Lock 3.0 and above (including Ultra)|
|Usage|Indoor only|
|Colour|White|

### Features

The Door Sensor provides valuable information:

- **Door state**: open or closed, in real time in the Nuki app
- **Lock detection**: knows if the door is locked (not just closed)
- **Smart notifications**: alert if the door remains open too long
- **Tamper detection**: alert if someone tries to remove the sensor
- **History**: complete log of openings/closings

{%- include alert.html type="info" text="The Door Sensor improves the reliability of <b>Auto Lock</b>. Without it, the Smart Lock locks after a fixed delay. With the Door Sensor, it only locks <b>when the door is actually closed</b>, avoiding locking on a half-open door." %}

> It's a detail that changes everything in daily use: you can see at a glance in Home Assistant whether your door is open, closed or locked. And automations become much more reliable.

{% include product-embed.html image="nuki-door-sensor.png" title="Nuki Door Sensor" brand="Nuki" description="Nuki Door Sensor, Bluetooth door opening sensor, open/closed/locked detection, adhesive installation without drilling" newamazlink="B0c8rjAKG" domlink="controle-acces/5980-nuki-detecteur-d-ouverture-bluetooth-nuki-door-sensor-9120072081873.html" %}

#### **Pros** Nuki Door Sensor
{: .blue}

- Real-time open/closed/locked door status
- Improves Auto Lock reliability
- Built-in tamper detection
- Ultra simple installation (adhesive, no drilling)
- Notifications if door left open

#### **Cons** Nuki Door Sensor
{: .red}

- Indoor use only
- **Extravagant dimensions**
- Bluetooth only (requires Smart Lock nearby)
- Adhesive may peel off on certain surfaces
- Price ~€59 for a door sensor

## The Nuki Keypad 2.0 (Key Accessory)

I haven't tested it personally but it deserves mention as it's **essential for holiday rental**. The **Nuki Keypad 2.0** allows opening by **PIN code** or **fingerprint** without a smartphone.

{% include product-embed.html image="nuki-keypad-2-0.png" title="Nuki Smart Lock Ultra" brand="Nuki" description="Nuki Keypad 2 NFC (2026) – Unlock your door using Apple Home Key, NFC, fingerprint, or a 6-digit code; Smart Home accessory for Nuki Smart Lock; Matter-compatible Bluetooth keypad." newamazlink="B07snvH9G" domlink="clavier-biometrique/9026-nuki-keypad-2-nfc-clavier-a-codes-nfc-et-fingerprint-bluetooth-pour-nuki-smart-lock-9120072084515.html" %}

|Dimensions|118 × 29 × 21 mm|
|Communication|Bluetooth 5.0|
|Protection|IP54 (outdoor use)|
|Fingerprints|Up to 20|
|PIN codes|Up to 200 6-digit codes|
|Power|4× AAA (~12 months)|
|Temperature|-20°C to +70°C|
|Price|~€159|

> It's the accessory that transforms the {{ page.ref }} into a complete solution for **Airbnb rental**: you generate a temporary code that automatically expires at the tenant's checkout. No smartphone, no key, no contact.

## Home Assistant Integration

This is a crucial point for haade.fr readers. The {{ page.ref }} offers **two excellent integration methods** for Home Assistant, **both 100% local.**

### Method 1: MQTT (Recommended)

This is the simplest and most proven method. The {{ page.ref }} natively integrates a **MQTT client with auto-discovery**.

**Configuration:**

1. In the Nuki app → **Functions & Configuration** → **Smart Home** → **MQTT**
2. Enter your Mosquitto broker IP, username and password
3. The lock appears **automatically** in Home Assistant via MQTT Discovery

You get:
- a **lock** entity (lock/unlock/open latch)
- **state** sensors (locked, unlocked, moving)
- **battery** level
- the latest **event**

{%- include alert.html type="info" text="MQTT is <b>entirely local</b>, ultra-fast and very stable. It's the preferred method by the Home Assistant community for Nuki products." %}

### Method 2: Matter over Thread

If you have a **Thread Border Router** (Home Assistant Connect ZBT-1/ZBT-2, Apple TV 4K, HomePod Mini, Google Nest Hub), you can integrate the {{ page.ref }} via **Matter**.

1. In the Nuki app, activate **Matter**
2. In Home Assistant → **Settings** → **Devices** → **Add** → **Matter**
3. Scan the QR code or enter the pairing code

{% include homeassistantlink.html integration="matter" %}

The advantage of Matter is interoperability: the same lock works with Home Assistant, Apple Home, Google Home and Alexa **simultaneously** without additional configuration.

> **My advice**: use **MQTT** if you're solely on Home Assistant (faster, more features). Use **Matter** if you have a multi-platform ecosystem (Apple Home + HA for example).

### Possible Automations

With the {{ page.ref }} in Home Assistant, the possibilities are vast:

- **Automatic locking** at bedtime
- **Notification** when the door remains unlocked for more than X minutes
- **Turning on lights** when the door unlocks at night
- **Disabling the alarm** when you unlock
- **Dashboard** with status of all locks and access history

## Airbnb and Holiday Rental

This is a use case where the {{ page.ref }} **truly excels**. The **Smart Lock Ultra + Keypad 2.0** combo is the ideal solution for owners doing short-term rental.

### Why Nuki for Rental?

1. **24/7 autonomous check-in**: no need to travel to hand over keys
2. **Temporary PIN codes** (via Keypad 2.0): you generate a code that **automatically expires** at the checkout date
3. **No app required** for the tenant: a code is enough
4. **Cleaning management**: you assign permanent access to cleaning staff with time slots
5. **Activity log**: you know exactly when the tenant arrived and left
6. **Remote access**: you manage everything from your sofa via the built-in WiFi

### Nuki Smart Hosting

Nuki offers the **Smart Hosting** service which integrates directly with rental platforms:

- **Airbnb**
- **BookingSync**
- **Smoobu**
- and other channel managers

The principle: you connect your booking calendar and **access codes are automatically generated and sent** to the tenant before arrival. No more manual management, it's fully automated.

### Nuki Web API for Developers

For Geeks, Nuki provides a **complete REST API** (api.nuki.io) which allows:
- remote locking/unlocking
- managing users and codes
- accessing activity logs
- integrating with any custom rental management system

{%- include alert.html type="info" text="The Nuki Smart Lock Ultra's built-in WiFi allows remote access <b>without a Bridge</b>. This is a considerable advantage over previous generations which required a Nuki Bridge at ~€99." %}

> **Comparison with Tedee for rental**: with Tedee, sharing access requires the guest to **install the Tedee app**. With the Nuki Keypad 2.0, **a simple PIN code is enough**. For holiday rental with frequent turnovers, it's incomparably more practical.

## Comparison {{ page.ref }} vs Tedee Go

Since I've tested both products, here's an honest and objective comparison.

|Feature|**{{ page.ref }}**|**Tedee Go**|
|**Price**|~€349 (cylinder included)|~€165 (alone)|
|**Material**|Brushed stainless steel|ABS Plastic|
|**Weight**|250 g|214 g|
|**Installation**|Cylinder replacement|Retrofit on existing cylinder|
|**Motor**|Brushless (< 1.5s Insane mode)|Standard motor (slower)|
|**Noise**|Discreet (Gentle mode = very quiet)|Noisy (~70dB)|
|**Battery**|Rechargeable Li-Po (~6 months)|3× CR123 batteries (~5 months, expensive)|
|**WiFi**|✅ Built-in|❌ Requires Bridge (€79)|
|**Thread/Matter**|✅ Yes|❌ No|
|**MQTT**|✅ Built-in|❌ No|
|**Home Assistant**|MQTT + Matter (local)|API via Bridge (cloud/local)|
|**App**|Excellent|Excellent|
|**Auto Unlock**|✅ Reliable|✅ Functional|
|**Cylinder**|SKG*** included|Uses existing|
|**Access without app**|Fob (€40) or Keypad 2 (€159)|Code keypad (€99)|

### Comparison Verdict

The {{ page.ref }} is **objectively superior** on all technical points: motor, noise, connectivity, battery life. But it also costs **twice as much** and requires changing the cylinder.

The Tedee Go remains relevant if:
- you have a **limited budget**
- you want a **retrofit without changing the cylinder**
- smart home connectivity isn't your priority

For all other cases, **the {{ page.ref }} is the best choice**.

{% include product-embed.html image="nuki-smart-lock-ultra-serrure-connectee.png" title="Nuki Smart Lock Ultra" brand="Nuki" description="Nuki Smart Lock Ultra smart lock, brushless motor, WiFi, Thread/Matter, MQTT, SKG*** universal cylinder, stainless steel" newamazlink="B06T45HCe" domlink="controle-d-acces-sans-fil/7882-nuki-smart-lock-ultra-serrure-intelligente-matter-alexa-google-home-homekit-smartthings-homey-9120072083969.html" %}

## Nuki Ecosystem Pricing

|Product|Price|
|**Nuki Smart Lock Ultra**|~€349|
|**Nuki Smart Lock Pro 5** (keeps existing cylinder)|~€289|
|**Nuki Fob**|~€49|
|**Nuki Door Sensor**|~€59|
|**Nuki Keypad 2.0**|~€159|
|**Nuki Bridge** (not needed with Ultra)|~€99|

> A complete **Ultra + Keypad 2.0** pack comes to approximately **€508**. It's a significant investment, but if you do holiday rental, the ROI is fast: no more locksmith bills, no more lost keys, no more trips for check-ins.

{% include product-embed.html image="nuki-smart-lock-ultra-serrure-connectee.png" title="Nuki Smart Lock Ultra" brand="Nuki" description="Nuki Smart Lock Ultra smart lock, brushless motor, WiFi, Thread/Matter, MQTT, SKG*** universal cylinder, stainless steel" newamazlink="B06T45HCe" domlink="controle-d-acces-sans-fil/7882-nuki-smart-lock-ultra-serrure-intelligente-matter-alexa-google-home-homekit-smartthings-homey-9120072083969.html" %}

## Conclusion

The **{{ page.ref }}** deserves its name. It is today **the most accomplished smart lock on the European market**. The brushless motor is a real revolution: fast, silent in Gentle mode, and durable. Built-in WiFi, Thread/Matter and MQTT make this lock a **dream for Home Assistant users** — no bridge needed, everything is local and instantaneous.

Where [the Tedee Go had disappointed me]({% post_url /en/2024-04-22-test-of-the-tedee-go-connected-lock-and-accessories %}) on noise and connectivity, the {{ page.ref }} **fills all the gaps**. The stainless steel design is premium, the app is exemplary, and the accessory ecosystem (Fob, Door Sensor, Keypad) covers all needs.

Points of friction exist: the **price** (€349), the **mandatory cylinder change** and the **proprietary charging cable** are the most legitimate criticisms. But these compromises are largely offset by the overall quality of the product.

**Who is it for?**
- You're a **home automation enthusiast** and want perfect Home Assistant integration → **go for it**
- You do **Airbnb rental** and want to automate check-ins → **this is THE solution** (with the Keypad 2.0)
- You simply want to **forget your keys** in daily life with reliability → **you won't be disappointed**

> If you're looking for **the best** and budget isn't your first criterion, the {{ page.ref }} is the smart lock for you. If the budget is tight, the Nuki Smart Lock Pro 5 (~€289) offers the same brushless motor without changing the cylinder — an excellent compromise.
