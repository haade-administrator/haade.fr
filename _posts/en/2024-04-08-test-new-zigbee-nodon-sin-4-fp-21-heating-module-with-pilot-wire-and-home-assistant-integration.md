---
guid: 118
title: "Testing the new Nodon SIN-4-FP-21 heating module"
description: "I will test this nodon pilot wire module and above all show you how to integrate and control it in home assistant with the thermostat interface"
ref: "SIN-4-FP-21"
layout: post
authors: [Nico]
date: 2024-04-08 17:00
last_modified_at: 
categories: [Tests, Home-Assistant]
tags: []
image: 'test-nodon-module-wire-driver-sin-4fp-21-control-in-home-assistant.png'
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
rating: 4.0
sourcelink:
  - https://nodon.fr/nodon/module-chauffage-fil-pilote-zigbee/
---
A new arrival on the market for radiator control by pilot wire, the Nodon {{ page.ref }}, faithful to the manufacturing quality of the brand, promises simplified management of radiators with management by pilot wire.

The Nodon {{ page.ref }} demonstrates integration with Zigbee2mqtt and simplified radiator management which is very logical. But the integration into **Home Assistant with management by thermostat is natively impossible**. **Why?** quite simply because it does not include **on/off switches** which is essential for the integration of [generic thermostats](https://www.home-assistant.io/integrations/generic_thermostat/){: target="_blank"}. **Don't worry, I'll fix it almost transparently**

{% include product-embed.html guid="2192" %}

There is a [youtube video edited by Zatoufly](https://youtu.be/QXCnKB5NY_c?feature=shared){: target="_blank"} which explains to you how to integrate the pilot wire node into home-assistant and **control it with the generic thermostat by creating a virtual switch and a call by automation by creating a scenario**.

> That's good but I'm going to present you with a different approach where **you won't need** to create a **scenario**.

## Presentation of NodOn {{ page.ref }}

Dedicated to pilot wire electric radiators, the Zigbee Pilot Wire Heating Module allows them to be connected and automate heating management to **save energy**. It allows you to manage **up to six modes** and at least: Comfort, Eco, Frost Protection and Off. Paired with a compatible home automation system, heating management becomes intelligent and automatic.

{% picture posts/{{ page.guid }}/presentation-nodon-fil-pilote-sin-4-fp-21.png --alt presentation of the zigbee module nodon driver wire sin-4-fp-21 --img width="940" height="529" %}

### available functions {{ page.ref }}

The Pilot Wire Heating Module has 6 modes: **Comfort, Comfort -1°C, Comfort -2°C, Eco, Frost Protection and Off** allowing local or automatic control.

- Consumption measurement
- Instantaneous power and cumulative energy measurement functions, to save energy
- Installation without work
- At the cable outlet of the electric radiator pilot wire
- Over The Air Update (OTA)

The module is quick to update thanks to the **OTA function**. Updates can be carried out via a compatible home automation center or via the [NodOn Connect] application.(https://nodon.fr/nodon/application-nodon-connect/){: target="_blank"}

### Notices {{ page.ref }}

{% include doclink.html pdf="SIN-4-FP-21-NodOn-fiche-technique.pdf" title="NodOn pilot wire SIN-4-FP-21 data sheet" %}

{% include doclink.html pdf="NodOn-SIN-4-FP-21-UG-FR-EN-notice-utilisation.pdf" title="User manual NodOn pilot wire SIN-4-FP-21" %}


### Connection diagram {{ page.ref }}

> Simpler, you die!

{% picture posts/{{ page.guid }}/Schema-montage-SIN-4-FP-21-NodOn.jpg --alt connection diagram behind a radiator of the zigbee nodon module pilot wire sin-4-fp-21 --img width="473" height="473" %}


### Panel connection diagram

Add the Zigbee Driver Wire Heating Module to the electrical panel with the NodOn DIN Rail Box*.

{% picture posts/{{ page.guid }}/Schema-montage-DRB-2-SIN-4-FP-21-NodOn-1.jpg --alt connection diagram in an electrical panel of the zigbee nodon module pilot wire sin-4-fp-21 --img width="473" height="473" %}

### Technical characteristics {{ page.ref }}

|Power supply|230V AC ~ 50Hz|
|Consumption|<1W|
|Maximum power. heater|3680W|
|Counting instantaneous power|(W) and cumulative energy
(Wh)|
|Modes|6 orders Pilot Wire|
|Radio protocol|Zigbee 3.0|
|Frequency band used|2.4Ghz|
|Maximum radio power|+10dBm|
|Range|up to 40m indoors|
|Operating temperature|• Between -20 and 40° in the open air.<br>• Between -20 and 35°C in a recessed box.<br>• Between -20 and 40°C in the NodOn DRB (DIN Rail Box).<br>• Between -20 and 40°C in the NodOn BPS (Surface Mounting Box).|
|Protection index|IP 20|

## Legrand 064882 pilot wire

**The only pilot wire module currently competing with NodOn**, Legrand stands out **by its 100% functional integration** but also adds switch functions which makes it fully natively compatible with home-assistant via Zigbee2mqtt integration .

{% include product-embed.html image="legrand-064882-module-radiateur-fil-pilote.png" title="Legrand 064882 zigbee module radiator driver wire" brand="Legrand" description="Céliane Connected Cable Outlet - 230V - Pilot Wire Compatible - For Radiators and Electrical Appliances Up to 3000W - Made in France" amazlink="3J4zIZn" %}

### Zigbee2mqtt integration

{% picture posts/{{ page.guid }}/integration-legrand-zigbee2mqtt-064882-affichage-fonction.png --alt integration legrand pilot wire 064882 in home assistant with zigbee2mqtt --img width="940" height="844" %}

## Nodon integration {{ page.ref }}

### ZHA (Home Assistant)

Currently the NodOn module {{ page.ref }} is incompatible with ZHA, information comes up but does not correspond to this module, **it is recognized as the NodOn SIN-4-1-20 multifunction module**, which does not does not make it a native wire-driver module.

{% picture posts/{{ page.guid }}/integration-nodon-sin-4-fp-21-fil-pilote-zha-dysfonctionnement.png --alt nodon sin-4-fp-21 integration in home assistant with ZHA is incompatible --img width="940" height="823" %}

### Zigbee2mqtt

Integration into **Z2M is 200% functional** everything is supported

{% picture posts/{{ page.guid }}/module-zigbee-nodon-fil-pilote-sin-4-fp-21-integration-zigbee2mqtt.png --alt nodon sin-4-fp-21 integration in home assistant with zigbee2mqtt about tab --img width="940" height="761" %}

You can see the main functions in the tab:

- Power
- Energy (compatible with the Home Assistant energy tab)
- 6 modes
- link quality

{% picture posts/{{ page.guid }}/nodon-fil-pilote-expose-zigbee2mqtt.png --alt nodon sin-4-fp-21 integration in home assistant with zigbee2mqtt exposed tab --img width="747" height="680" %}

Power and energy can be fine-tuned and calibrated using additional settings.

{% picture posts/{{ page.guid }}/parametres-specifiques-nodon-fil-pilote-z2m.png --alt nodon sin-4-fp-21 integration in home assistant with zigbee2mqtt specific parameters --img width="940" height="322" %}

To finish displaying the functions reported in Home Assistant in mqtt.

{% picture posts/{{ page.guid }}/integration-totale-nodon-sin-4-fp-21-fil-pilote-zigbee2mqtt.png --alt integration nodon sin-4-fp-21 in home assistant final result --img width="940" height="811" %}

### Pairing

[NodOn official technical information {{ page.ref }}](https://nodon.fr/support/module-chauffage-fil-pilote-zigbee/){: target="_blank"}

When powered on, the module's LED flashes orange seeking to join a Zigbee network. Go to the application of your Zigbee control unit to activate module detection.

{% picture posts/{{ page.guid }}/Appairage_Zigbee_01.png --alt pairing function of the sin-4-fp-21 pilot wire nodon --img width="470" height="258" %}

If the module has successfully joined the network, the LED turns green. The module is ready to use.

{% picture posts/{{ page.guid }}/Appairage_Zigbee_02.png --alt pairing function of the sin-4-fp-21 pilot wire nodon --img width="470" height="265" %}

If the module has not joined a network within 15 minutes, the LED turns orange. Quickly press the module button and start the procedure again.

{% picture posts/{{ page.guid }}/Appairage_Zigbee_03.png --alt pairing function of the sin-4-fp-21 pilot wire nodon --img width="470" height="207" %}

### Procedure for resetting {{ page.ref }}

1. The module must be connected and powered on.
2. Press the module button for more than 5 seconds. The LED flashes orange.
3. Press the button again (short press), **to validate the reset**. If the reset takes place
correctly, **the LED flashes alternately in red and green**, then flashes in orange. Repeat if necessary.
4. Your module has **returned to its original configuration** and is ready to join a new Zigbee network.

## Home assistant integration

I chose the integration by **zigbee2mqtt** because the Nodon {{ page.ref }} is well recognized and as you already know Z2M is compatible with various boxes like Jeedom, Openhab and Gladys to name a few . Find information on the integration of the module in [Z2M directly on the official link](https://www.zigbee2mqtt.io/devices/064882.html){: target="_blank"}

{% picture posts/{{ page.guid }}/liste-fonction-fil-pilote-nodon-sin-4-fp-21.png --alt default function of the sin-4-fp-21 driver wire nodon in home assistant --img width="524" height="463" %}


### Prerequisites

In order to create the two files below and modify the **configuration.yaml** file you will need to install one of the two additional applications presented below, **personally if you are new to home-assistant I recommend file-editor **, to install it directly in your instance simply click on the link.

1. [File Editor](https://my.home-assistant.io/redirect/supervisor_addon/?addon=core_configurator){: target="_blank"}
2. [Visual Studio Code](https://my.home-assistant.io/redirect/supervisor_addon/?addon=a0d7b954_vscode){: target="_blank"}

> Also you will need to include the NodOn module {{ page.ref }} in HA before creating these scripts.

### switch.yaml

We will start to **create a switch.yaml file** which will group together all your virtual switches because yes you could have several like a **switch which would start your PC for example**.... So go to the root ```/config``` and creates a file named **switch.yaml**.

creating a [switch](https://www.home-assistant.io/integrations/switch.template/){: target="_blank"} in home assistant.

Copy the lines of code below without forgetting to fill in the correct lines.

{% highlight yaml %}
{% raw %}
- platform: template
  switches:
  # Switch entity name in HA
    inter_radiateur_salon:
    # Inter name in HA
      friendly_name: "Inter Radiateur salon"
    # Unique Name
      unique_id: inter_radiateur_salon
    # replace select.radiateur_salon_pilot_wire_mode with your integrated module
      value_template: "{{ is_state('select.radiateur_salon_pilot_wire_mode', 'comfort') }}"
      turn_on:
          service: select.select_option
          data:
              option: comfort
          target:
              entity_id: 
    # replace select.radiateur_salon_pilot_wire_mode with your integrated module
                  - select.radiateur_salon_pilot_wire_mode
      turn_off:
          service: select.select_option
          data:
              option: "off"
          target:
              entity_id: 
    # replace select.radiateur_salon_pilot_wire_mode with your integrated module
                  - select.radiateur_salon_pilot_wire_mode
{% endraw %}
{% endhighlight %}

in this switch we directly automate the functions of the nodon module {{ page.ref }} by the input **select.radiateur_salon_pilot_wire_mode** and we indicate, when the switch is **activated, it selects the comfort mode and deactivates the off** mode of the module so no need for a scenario.

> For the moment it is not possible to enter these options by creating a virtual switch via the interface directly in ha.

### thermostat.yaml

Now that the switch is created, repeat the same procedure to create a generic thermostat named thermostat.yaml.

Creating a [generic thermostat](https://www.home-assistant.io/integrations/generic_thermostat/){: target="_blank"} thermostat.yaml

To **configure** a generic thermostat in Home Assistant you will also need an **external temperature sensor**, I recommend for example the **Sonoff SNZB-02P** module, you can at the same time [ read the review article]({% post_url /en/2023-08-20-test-zigbee-sensor-temperature-humidity-sonoff-SNZB-02P %}) of this one

{% include product-embed.html guid="2172" %}

{% highlight yaml %}
{% raw %}
# nodon module living room
- platform: generic_thermostat
   # Name of our thermostat
   name: Living Room Heating
   # unique identity
   unique_id: thermostat_chauffage_salon
   # inter heating entity previously created
   heater: switch.inter_radiateur_salon
   # room temperature sensor entity (required)
   target_sensor: sensor.thermostat_salon_temperature
   # the minimum adjustable temperature of the thermostat
   min_temp: 16
   # the maximum adjustable temperature of the thermostat generally corresponds to the setpoint temperature set on the radiator in pilot wire mode
   max_temp: 23
   # operating mode of the “heater” system
   ac_mode: false
   # the default target temperature
   target_temp: 21
   # this is the low temperature tolerance for heating activation
   cold_tolerance: 0.5
   # temperature tolerance before heating is activated
   hot_tolerance: 0.5
   # this is the mode in which the thermostat first starts
   initial_hvac_mode: "off"
   # temperature in case of absent mode
   away_temp: 12
   # This is the precision for temperature setting
   accuracy: 0.5
   # the minimum time of an operating cycle
   min_cycle_duration:
     seconds: 5
   # keeps heating for at least 3 minutes if the thermostat does not receive a command
   keep_alive:
     minutes: 3
{% endraw %}
{% endhighlight %}

### configuration.yaml

Last step **creates a direction link** to the two files previously created in the Home-Assistant configuration.yaml file. after the following lines:

{% highlight yaml %}
{% raw %}
group: !include groups.yaml
automation: !include automations.yaml
script: !include scripts.yaml
scene: !include scenes.yaml
{% endraw %}
{% endhighlight %}

**Which gives the result:**

{% highlight yaml %}
{% raw %}
group: !include groups.yaml
automation: !include automations.yaml
script: !include scripts.yaml
scene: !include scenes.yaml
switch: !include switch.yaml
climate: !include thermostat.yaml
{% endraw %}
{% endhighlight %}

Now all you have to do is **restart home assistant** to discover the new entities created previously:
the switch *switch.inter_radiateur_salon* and the thermostat *climate.thermostat_chauffage_salon*.

> You will now be able to control your radiators with the thermostat function.

{% include product-embed.html guid="2192" %}

## Conclusion

**Of exemplary quality** this pilot wire module signed NodOn {{ page.ref }} does the job, it lacks the switch function which would allow it to be simply turned off, and mandatory to be able to control it in Home Assistant by the Thermostat card. But **with a few lines of code** you can make **the whole thing functional and transparent to use**. To finish the **Legrand 064882 pilot wire** allows you to do all this natively but you will have to put **your hand in your wallet because it is 10€ more expensive**, if you are no longer ready for that **I I recommend the Legrand**, otherwise the NodOn will do the trick and what's more you could integrate it directly into your electrical panel.