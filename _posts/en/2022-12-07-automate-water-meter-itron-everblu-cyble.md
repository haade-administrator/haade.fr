---
guid: 33
title: "Domotizes the Itron water meter with esp and cc1101 in ha for 10€"
description: "Automate your itron water meter step by step equipped with a 433mhz everblu cyble sensor with arduino in homeassistant thanks to an esp8266/esp32 module and a TI cc1101 transmitter/receiver"
layout: post
author: Nico
date: 2022-12-21 13:08
last_modified_at: 
categories: [Haade-lab, Home-assistant, Esp]
tags: []
image: 'domotize-water-meter-itron-everblu-energy-homeassistant-mqtt.png'
toc: true
beforetoc: ''
published: false
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
  - https://github.com/psykokwak-com/everblu-meters-esp8266
  - https://fr.macerobotics.com/developpeur/tutoriels/programmer-le-microcontroleur-esp8266-avec-lide-arduino/
  - https://sites.google.com/a/usapiens.com/opnode/time-zones
---
Recently *version 2022.11 of Homeassistant supports the water energy meter*, it is possible to recover the data easily using esp and that **for around 10€**. In my case the meter is equipped with a 433Mhz Itron Everblu Cyble 2.1 transmitter. This makes it easy to retrieve data using a CC1101 receiver coupled to an esp8266/esp32. I picked up and **modified** a complete repository on github that was edited by *psykokwak*, and I commend his work. [This repository allows data to be received and transferred by mqtt to homeassistant](https://github.com/haade-administrator/watermeter2mqtt.git){: target="_blank"}.

# Prerequisites
- an [esp8266 card]({% link _products/{{ page.locale | slice: 0,2 }}/2022-11-29-wemos-d1-mini-pro-with-antenna.md %})
- a [CC1101 controller]({% link _products/{{ page.locale | slice: 0,2 }}/2022-12-09-cc1101-receiver-radio-frequency-433mhz.md %})
- an Itron water meter equipped with an Itron Everblu cyble Enhanced transmitter [Itron Everblu cyble](https://www.itron.com/fr/solutions/product-catalog/everblu-cyble-enhanced){: target="_blank"}
- home assistant [v2022.11.0 mini](https://www.home-assistant.io/blog/2022/11/02/release-202211/#getting-insights-into-water-usage){: target="_blank"}

{% include product-embed.html guid="2131" %}
{% include product-embed.html guid="2132" %}



# Arduino preparation

### Install Arduino, being on linux I choose the appimage
[Arduino Software](https://www.arduino.cc/en/software){: target="_blank"}

### Installation of necessary libraries

#### 1. Library of ESP8266 and ESP32 cards

Let's start by installing the esp8266 and esp32 card management library:

[http://arduino.esp8266.com/stable/package_esp8266com_index.json](http://arduino.esp8266.com/stable/package_esp8266com_index.json){: target="_blank"}
[https://dl.espressif.com/dl/package_esp32_index.json](https://dl.espressif.com/dl/package_esp32_index.json){: target="_blank"}

- File > Preferences and paste the above url in Additional Map Manager URL

![Map library installations]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/add-preference-card-arduino.webp{{ cachebuster }}){: width="796" height="533"}

- Tools > map > map managers, search for **esp8266 and esp32** and install the latest Espressif version
{% picture posts/{{ page.guid }}/add-esp8266-card.png --alt Installer librairies cartes esp8266 --img width="796" height="533" %}

#### 2. Install the espmqttclient library

- Tools > Manage Libraries, search for espmqttclient and install the latest version

{% picture posts/{{ page.guid }}/add-esp-mqtt-client.png --alt Add the espmqttclient library --img width="796" height="533" %}

### Select the right card in my case a wemos d1 mini pro on usb port
1. Connect your esp controller to USB
2. In the add /dev/USB0 card drop-down menu, start by selecting the card and checking the corresponding port.
3. Finally, **Give permissions to the usb port**

{% highlight shell %}
sudo usermod -a -G dialout #USER
sudo chmod a+rw /dev/ttyUSB0
{% endhighlight %}

{% picture posts/{{ page.guid }}/select-board-mcu.png --alt Select the esp8266 card --img width="796" height="533" %}

### Créer un nouveau sketch et importer le dossier

**Method 1:**
[Download the git](https://github.com/haade-administrator/watermeter2mqtt.git){: target="_blank"}, extract it and drag it to the sketch folder on the Arduino interface, otherwise drop the folder directly at the root of the Arduino folder.

**Method 2:** Command line

{% highlight shell %}
cd /home/nicolas/Arduino // go to your arduino folder
git clone https://github.com/haade-administrator/watermeter2mqtt.git watermeter2mqtt
{% endhighlight %}

{%- include alert.html type="warning" text="Please upload the folder with name: <b>watermeter2mqtt</b>" link="https://github.com/haade-administrator/watermeter2mqtt.git" textlink="click here git link" %}

{% picture posts/{{ page.guid }}/folder-sketch-watermeter.png --alt Add watermeter2mqtt folder to arduino sketch --img width="796" height="533" %}

# Connection esp866 to CC011 in my case a Wemos D1 Mini

|[CC1101](https://s.click.aliexpress.com/e/_DEK1jt9){: target="_blank"}|[Wemos D1 mini](https://s.click.aliexpress.com/e/_Dc6fzTD){: target="_blank"}|[NodeMCU](https://s.click.aliexpress.com/e/_DBOXniR){: target="_blank"}|[ESP32](https://s.click.aliexpress.com/e/_DBOXniR){: target="_blank"}|
|------|-------------|-------|-----|
|VCC|3v3|3v3|3v3|
|GOD0 (GDO0)|D1, GPIO 5|GPIO 5|GPIO 22|
|CSN (SPI chip select CS or SS)|D8, GPIO 15|GPIO 15|GPIO 5 ou GPIO 15|
|SCK (SPI clock)|D5, GPIO 14|GPIO 14|GPIO 18 ou GPIO 14|
|MOSI (SPI MOSI)|D7, GPIO 13|GPIO 13|GPIO 23 ou GPIO 13|
|GOD1 (SPI MISO)|D6, GPIO 12|GPIO 12|GPIO 19 ou GPIO 12|
|GOD2 (GDO2)|D2, GPIO 4|GPIO 4|GPIO 21|
|GND (ground)|G|GND|GND|

{% picture posts/{{ page.guid }}/d1-mini-gpio.png --alt GPIO Wemos d1 mini pin --img width="891" height="430" %}

1. [Pictures link NodeMcu Esp8266 GPIO](https://raw.githubusercontent.com/AchimPieters/ESP8266-12F---Power-Mode/master/Node-MCU-Pinout.png)
2. [Pictures link Gpio Esp32-30 pin](https://raw.githubusercontent.com/AchimPieters/esp32-homekit-camera/master/Images/ESP32-30PIN-DEVBOARD.png)
3. [Pictures link Gpio Esp32-30 pin](https://raw.githubusercontent.com/AchimPieters/esp32-homekit-camera/master/Images/ESP32-38%20PIN-DEVBOARD.png)


# Let's set up the files before verification

#### watermeter2mqtt.ino file

**1 wifi and mqtt settings**

{% highlight yaml %}
EspMQTTClient mqtt(
  "MyESSID",            // Your Wifi SSID
  "MyWiFiKey",          // Your WiFi key
  "mqtt.server.com",    // MQTT Broker server ip
  "MQTTUsername",       // Can be omitted if not needed
  "MQTTPassword",       // Can be omitted if not needed
  "watermetter2mqtt",      // Client name that uniquely identify your device
  1883                  // MQTT Broker server port
);
{% endhighlight %}

**2 line 88-90 reading adjustment**
> As a reminder, this code collects consumption data once a day during meter reader working hours.
** Below I have set 2 p.m. UTC which corresponds to 3 p.m. France **

{% highlight yaml %}
 // At 14:00 UTC
  if (ptm->tm_hour == 14 && ptm->tm_min == 0 && ptm->tm_sec == 0)
{% endhighlight %}

**3 find the right frequency for your CC1101 transmitter**

Just uncomment the code line 272-291

{% highlight yaml %}
   // Use this piece of code to find the right frequency.
  /*
  for (float i = 433.76f; i < 433.890f; i += 0.0005f) {
    Serial.printf("Test frequency : %f\n", i);
    cc1101_init(i);

    struct tmeter_data meter_data;
    meter_data = get_meter_data();

    if (meter_data.reads_counter != 0 || meter_data.liters != 0) {
      Serial.printf("\n------------------------------\nGot frequency : %f\n------------------------------\n", i);

      Serial.printf("Liters : %d\nBattery (in months) : %d\nCounter : %d\n\n", meter_data.liters, meter_data.battery_left, meter_data.reads_counter);

      digitalWrite(LED_BUILTIN, LOW); // turned on

      while (42);
    }
  }
  */



  cc1101_init(FREQUENCY);

  /*
  // Use this piece of code to test
  struct tmeter_data meter_data;
  meter_data = get_meter_data();
  Serial.printf("\nLiters : %d\nBattery (in months) : %d\nCounter : %d\nTime start : %d\nTime end : %d\n\n", meter_data.liters, meter_data.battery_left, meter_data.reads_counter, meter_data.time_start, meter_data.time_end);
  while (42);
  */
}
  {% endhighlight %}

![Find the right frequency corresponding to the Everblu module]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/frequence-found.webp{{ cachebuster }}){: width="838" height="613"}

Push the code to your module then select Serial Monitor:

{% picture posts/{{ page.guid }}/select-monitor-serie.png --alt Select serial monitor on arduino ide --img width="1115" height="577" %}


the result should look like the image below:

{% picture posts/{{ page.guid }}/found-good-frequence.png --alt Finding the right connection frequency to the itron everblu cyble module --img width="323" height="363" %}

> Once the code has been retrieved, remember to comment on these codes, otherwise you will not be able to upload the data later.


**4 Set the clock to your region** *(Optional)*

Go to line 188-190 *if necessary*

{% highlight yaml %}
  configTzTime("CET-1CEST-2,M3.5.0/02:00:00,M10.5.0/03:00:00", "pool.ntp.org");
{% endhighlight %}

*The clock is set to Paris*, to modify according to your region [copy/paste the code available on this site](https://sites.google.com/a/usapiens.com/opnode/time-zones){: target="_blank"}

#### cc1101.cpp file

Important step, match the connections of the CC1001 to the GPIO of the esp module:

Let's start by going back to [the diagram available above]({{ site.baseurl }}/{{ page.locale | slice: 0,2 }}/blog/domotiser-compteur-eau-itron-everblu-cyble#connection-esp866-au-cc011-dans-mon-cas-un-wemos-d1-mini), you will be able to realize that on a Wemos D1 for example that SCK corresponds to the GPIO14, Miso 12 etc... knowing that modifies lines 94 to 100 of the code available in this file. See the animated GIF below:

![Configure the connections of the CC1101 to the Wemos]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/define-pin-cc1101-esp8266.webp{{ cachebuster }}){: width="529" height="298"}

#### everblu_meters.h file

Code available on your itron module **remember not to use the first 0**.

{% picture posts/{{ page.guid }}/itron-everblu-code.png --alt Find itron Everblu codes --img width="550" height="448" %}

at the very bottom of the file line 53-60

{% highlight yaml %}
// Change these define according to your hardware

#define FREQUENCY 433.8683f  // frequency found above keep 4 digits after the dot and add f

#define GDO0 5 // gpio 5 on GDO0

#define METER_YEAR              15 // meter year
#define METER_SERIAL            886451 // Serial code without the 0
{% endhighlight %}



# Push the project to the esp8266/esp32 module

All that remains is to validate the sketch project > check/compile or Ctrl+R, and if everything went well you should have the result

{% highlight shell %}
Executable segment sizes:
ICACHE : 32768           - flash instruction cache 
IROM   : 331192          - code in flash         (default or ICACHE_FLASH_ATTR) 
IRAM   : 28877   / 32768 - code in IRAM          (IRAM_ATTR, ISRs...) 
DATA   : 1620  )         - initialized variables (global, static) in RAM/HEAP 
RODATA : 6680  ) / 81920 - constants             (global, static) in RAM/HEAP 
BSS    : 26968 )         - zeroed variables      (global, static) in RAM/HEAP 
Le croquis utilise 368369 octets (35%) de l'espace de stockage de programmes. Le maximum est de 1044464 octets.
Les variables globales utilisent 35268 octets (43%) de mémoire dynamique, ce qui laisse 46652 octets pour les variables locales. Le maximum est de 81920 octets.
{% endhighlight %}

Then click upload: sketch > upload or Ctrl+U

result:
{% highlight shell %}
Wrote 372528 bytes (266139 compressed) at 0x00000000 in 23.5 seconds (effective 126.9 kbit/s)...
Hash of data verified.

Leaving...
Hard resetting via RTS pin...
{% endhighlight %}

**Check serial monitor**

# Last step upload the info in the energy meter

1. In homeassistant go to Settings > Dashboards > Energies
2. Add a water source
3. Select Water meter index

![Configure Water consumption in ha energy]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/parameter-watermeter-energy-ha.webp{{ cachebuster }}){: width="657" height="287"}

### Final result in energy consumption

{% picture posts/{{ page.guid }}/conso-energie-ha.png --alt Final result in energy consumption tab --img width="600" height="400" %}

# Frequently Asked Questions

### Data characteristics and frequencies

this repository allows to retrieve:
1. consumption volumes
2. Everblu battery level
3. the number of statements
4. the time at which the readings were taken.

The device polls the counter once a day, every 24 hours, and retries every hour if the query fails.
Your counter can be configured in such a way that it only listens to requests during the hours when the meter readers are working. **This is to save the batteries of the modules**. If you are unable to communicate with the meter, please try again during business hours (8:00 a.m. to 4:00 p.m.), Monday through Friday. As a general rule, try to set up your device only during business hours to avoid confusion.

#### Frequency Calibration 433Mhz

Your transceiver module may not be calibrated correctly, please change the frequency a little lower or higher and try again. You can use RTL-SDR to measure the necessary offset. You can uncomment the part of the code in the watermeter2mqtt.ino (see above), file which analyzes all frequencies around the meter frequency to find the correct one.

{% include product-embed.html guid="2131" %}
{% include product-embed.html guid="2132" %}

# Conclusion

This is a simple method to set up, for those who are not equipped with an Itron Everblu Enhanced transmitter, there is another method which consists of putting an [inductive sensor]({% link _products/{{ page.locale | slice: 0.2 }}/2022-11-29-inductive-sensor-5v-npn-LJ18A3-8Z.md %}){: target="_blank"} directly on the meter and connect it to an esp8266, this method is a little more restrictive because it will be necessary to have a source of energy near this meter in order to be able to supply the esp and the sensor with 5V, the price of the whole also oscillates around 10€, an excellent article is available here [pieterbrinkman.com](https://www.pieterbrinkman.com/2022/02/02/build-a-cheap-water-usage-sensor-using-esphome-home-assistant-and-a-proximity-sensor/){: target="_blank"}







