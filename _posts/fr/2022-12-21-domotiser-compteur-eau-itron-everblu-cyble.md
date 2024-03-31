---
guid: 33
title: "Domotise le compteur d'eau Itron avec esp et cc1101 dans ha pour 10€"
description: "Domotiser pas à pas son compteur d'eau itron équipé d'un capteur 433mhz everblu cyble avec arduino dans homeassistant grâce un un module esp8266/esp32 et un émetteur/récepteur TI cc1101"
layout: post
authors: Nico
date: 2022-12-21 13:08
last_modified_at: 2022-12-28 17:43
categories: [Haade-lab, Home-Assistant, Esp]
tags: []
image: 'domotize-water-meter-itron-everblu-energy-homeassistant-mqtt.png'
toc: true
beforetoc: ''
published: true
noindex: false
sitemap:
  changefreq: 'monthly'
  exclude: 'no'
  priority: 0.5 #between 0.0 to 1.0, 1.0 high priority
  lastmod:  # date to end modification
locale: fr_FR
addViews: 639
comments: true
rating:  
sourcelink:
  - https://github.com/psykokwak-com/everblu-meters-esp8266
  - https://fr.macerobotics.com/developpeur/tutoriels/programmer-le-microcontroleur-esp8266-avec-lide-arduino/
  - https://sites.google.com/a/usapiens.com/opnode/time-zones
  - https://www.pieterbrinkman.com/2022/02/02/build-a-cheap-water-usage-sensor-using-esphome-home-assistant-and-a-proximity-sensor
---
Depuis peu la *version 2022.11 de Homeassistant prend en charge le compteur d'énergie eau*, il est possible de récupérer les données facilement à l'aide d'esp et ça **pour 10€ environs**. Dans mon cas le compteur est équipé d'un émetteur 433Mhz Itron Everblu Cyble 2.1. Ce qui permet de récupérer les données à l'aide d'un récepteur CC1101 accouplé à un esp8266/esp32 facilement. J'ai repris et **modifié** un référentiel complet sur github qui a été édité par *psykokwak*, et je félicite son travail. [Ce référentiel permet de réceptionner les données et de les transférer par mqtt à homeassistant](https://github.com/haade-administrator/watermeter2mqtt.git){: target="_blank"}.

# Prérequis
- une [carte esp8266]({% link _products/{{ page.locale | slice: 0,2 }}/2022-11-29-wemos-d1-mini-pro-plus-antenne.md %})
- un [controleur CC1101]({% link _products/{{ page.locale | slice: 0,2 }}/2022-12-09-cc1101-recepteur-frequence-radio-433mhz.md %})
- un compteur d'eau Itron équipé d'un émetteur [Itron Everblu cyble Enhanced](https://www.itron.com/fr/solutions/product-catalog/everblu-cyble-enhanced){: target="_blank"}
- home assistant [v2022.11.0 mini](https://www.home-assistant.io/blog/2022/11/02/release-202211/#getting-insights-into-water-usage){: target="_blank"}

{% include product-embed.html guid="2131" %}
{% include product-embed.html guid="2132" %}



# Préparation Arduino

### Installer Arduino, étant sur linux je choisis l'appimage
[Arduino Software](https://www.arduino.cc/en/software){: target="_blank"}

### Installation librairies nécessaires

#### 1. Librairie des cartes ESP8266 et ESP32

Commençons par installer la librairie de gestion des cartes esp8266 et esp32:

[librairie carte esp8266](http://arduino.esp8266.com/stable/package_esp8266com_index.json){: target="_blank"}
[Librairie carte esp32](https://dl.espressif.com/dl/package_esp32_index.json){: target="_blank"}

- Fichier > Préférences et collez l'url ci-dessus dans URL de gestionnaire de carte supplémentaire

![Installations des librairies de cartes]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/add-preference-card-arduino.webp{{ cachebuster }}){: width="796" height="533"}

- Outils > carte > gestionnaires de carte, cherchez **esp8266 et esp32** et installez la dernière version Espressif

{% picture posts/{{ page.guid }}/add-esp8266-card.png --alt Installer librairies cartes esp8266 --img width="796" height="533" %}

#### 2. Installer la librairie espmqttclient

- Outils > Gérer les bibliothèques, cherchez espmqttclient et installez la dernière version

{% picture posts/{{ page.guid }}/add-esp-mqtt-client.png --alt Ajouter la librairie espmqttclient --img width="796" height="533" %}

### Sélectionner la bonne carte dans mon cas un wemos d1 mini pro sur port usb 
1. Branchez votre controlleur esp sur USB
2. Dans le menu déroulant ajout carte /dev/USB0, commencez par sélectionner la carte et cochez le port correspondant.
3. Pour terminer, **Donne les permissions au port usb**

{% highlight shell %}
sudo usermod -a -G dialout #USER
sudo chmod a+rw /dev/ttyUSB0
{% endhighlight %}

{% picture posts/{{ page.guid }}/select-board-mcu.png --alt Sélectionner la carte esp8266 --img width="796" height="533" %}

### Créer un nouveau sketch et importer le dossier

**Methode 1:**
[Téléchargez le git](https://github.com/haade-administrator/watermeter2mqtt.git){: target="_blank"}, l'extraire et le glisser dans le dossier du sketch sur l'interface Arduino, sinon déposez le dossier directement à la racine du dossier Arduino.

**Methode2:** En ligne de commande

{% highlight shell %}
cd /home/nicolas/Arduino  // placez-vous dans votre dossier arduino
git clone https://github.com/haade-administrator/watermeter2mqtt.git watermeter2mqtt
{% endhighlight %}

{%- include alert.html type="warning" text="Veuillez à transférer le dossier portant le nom: <b>watermeter2mqtt</b>" link="https://github.com/haade-administrator/watermeter2mqtt.git" textlink="cliquez ici le lien du git" %}

{% picture posts/{{ page.guid }}/folder-sketch-watermeter.png --alt Ajouter le dossier watermeter2mqtt au sketch arduino --img width="796" height="533" %}

# Connection esp866 au CC011 dans mon cas un Wemos D1 Mini

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

1. [Lien image NodeMcu Esp8266 GPIO](https://raw.githubusercontent.com/AchimPieters/ESP8266-12F---Power-Mode/master/Node-MCU-Pinout.png)
2. [Lien image Gpio Esp32 - 30 pin](https://raw.githubusercontent.com/AchimPieters/esp32-homekit-camera/master/Images/ESP32-30PIN-DEVBOARD.png)
3. [Lien image Gpio Esp32 - 30 pin](https://raw.githubusercontent.com/AchimPieters/esp32-homekit-camera/master/Images/ESP32-38%20PIN-DEVBOARD.png)


# Paramétrons les fichiers avant vérification

#### Fichier watermeter2mqtt.ino

**1 Paramétrage wifi et mqtt**

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

**2 ligne 88-90 réglage du relevé programmé**
> Pour rappel ce code relève une fois par jour dans les heures ouvrés du releveur les données de consos.
**ci dessous j'ai réglé sur 14h UTC ce qui correspond à 15h France**

{% highlight yaml %}
 // At 14:00 UTC
  if (ptm->tm_hour == 14 && ptm->tm_min == 0 && ptm->tm_sec == 0)
{% endhighlight %}

**3 choix du relevé programmé ou à chaque mise à jour des données**

Par défaut le script met à jour dès le changement de données modifier il suffit de décommenter onScheduled ligne 257 à 259 et de commenter onUpdateData

{% highlight yaml %}
// Note: on scheduled allows you to read the information once a day, onUpdateData allows you to read each time information changes
 // onScheduled();
  onUpdateData();
{% endhighlight %}

**4 trouver la bonne fréquence de votre emetteur CC1101**

Il suffit de décommenter le code ligne 272-291

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

![Trouver la bonne fréquence correspondant au module Everblu]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/frequence-found.webp{{ cachebuster }}){: width="838" height="613"}

Poussez le code sur votre module ensuite sélectionne Monitor série:

{% picture posts/{{ page.guid }}/select-monitor-serie.png --alt Sélectionne monitor serie sur arduino ide --img width="1115" height="577" %}


le résultat doit être comme sur l'image ci-dessous:

{% picture posts/{{ page.guid }}/found-good-frequence.png --alt Trouver la bonne fréquence de connection au module itron everblu cyble --img width="323" height="363" %}

> Une fois le code récupéré pense à commenter ces codes sinon tu ne pourras faire remonter les données ultérieurement.


**5 Paramétrer l'horloge sur sa région** *(Optionnel)*

Aller à la ligne 188-190 *si nécessaire*

{% highlight yaml %}
configTzTime("CET-1CEST-2,M3.5.0/02:00:00,M10.5.0/03:00:00", "pool.ntp.org");
{% endhighlight %}

*L'horloge est réglé sur paris*, pour modifier en fonction de votre région [copiez/collez le code dispo sur ce site](https://sites.google.com/a/usapiens.com/opnode/time-zones){: target="_blank"}

#### Fichier cc1101.cpp

Étape importante, faire correspondre les branchements du CC1001 au GPIO du module esp:

Commençons par reprendre [le schéma dispo plus haut]({{ site.baseurl }}/{{ page.locale | slice: 0,2 }}/blog/domotiser-compteur-eau-itron-everblu-cyble#connection-esp866-au-cc011-dans-mon-cas-un-wemos-d1-mini), tu pourras te rendre compte que sur un Wemos D1 par exemple que SCK correspond au GPIO14, Miso 12 etc... sachant que ça modifie les lignes 94 à 100 du code dispo dans ce fichier. Voir le Gif animé ci-dessous:

![Paramétrer les branchements du CC1101 au Wemos]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/define-pin-cc1101-esp8266.webp{{ cachebuster }}){: width="529" height="298"}

#### Fichier everblu_meters.h 

Code dispo sur votre module itron **pensez à ne pas reprendre le premier 0**.

{% picture posts/{{ page.guid }}/itron-everblu-code.png --alt Trouver les codes itron Everblu --img width="550" height="448" %}

tout en bas du fichier ligne 53-60

{% highlight yaml %}
// Change these define according to your hardware

#define FREQUENCY 433.8683f  // fréquence trouvée plus haut garde 4 chiffres après le point et rajoute f

#define GDO0 5 // gpio 5 sur GDO0

#define METER_YEAR              15 // année compteur  
#define METER_SERIAL            886451 // Code série sans le 0
{% endhighlight %}



# Pousser le projet sur le module esp8266/esp32

Il ne reste plus qu'à valider le projet croquis > vérifier/compiler ou Ctrl+R, et si tout c'est bien passé vous devrier avoir en résultat

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

Ensuite cliquez sur téléverser: croquis > téléverser ou Ctrl+U

résultat:
{% highlight shell %}
Wrote 372528 bytes (266139 compressed) at 0x00000000 in 23.5 seconds (effective 126.9 kbit/s)...
Hash of data verified.

Leaving...
Hard resetting via RTS pin...
{% endhighlight %}

**Vérifie le monitor série**

# Dernière étape faire remonter l'info dans le compteur d'énergie

1. Dans homeassistant va dans Paramètres > Tableaux de bords > Energies
2. Ajouter une source d'eau
3. Sélectionne Water meter index

![Paramétrer Consommation eau dans ha energie]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/parameter-watermeter-energy-ha.webp{{ cachebuster }}){: width="657" height="287"}

### Résultat final dans conso Energie

{% picture posts/{{ page.guid }}/conso-energie-ha.png --alt Résultat final dans onglet conso energie --img width="600" height="400" %}



# Foire aux questions

#### Caractéristiques et fréquences des données

ce référentiel permet de récupérer:
1. les volumes de consommations
2. le niveau de la batterie de l'Everblu
3. le nombre de relevé
4. l'heure à laquelle ont été effectués les relevés.

L'appareil interroge le compteur une fois par jour, toutes les 24 heures et réessaye toutes les heures si la requête a échoué.
Votre compteur peut être configuré de telle sorte qu'il n'écoute les demandes que pendant les heures où les agents releveurs travaillent.**Ceci fin d'économiser les batteries des modules**. Si vous ne parvenez pas à communiquer avec le compteur, veuillez réessayer pendant les heures ouvrables (de 8h00 à 16h00), du lundi au vendredi. En règle générale, essayez de configurer votre appareil uniquement pendant les heures ouvrables, vous éviterez ainsi toute confusion.

#### Etalonnage de la fréquence 433Mhz

Votre module émetteur-récepteur n'est peut-être pas calibré correctement, veuillez modifier la fréquence un peu plus bas ou plus haut et réessayez. Vous pouvez utiliser RTL-SDR pour mesurer le décalage nécessaire. Vous pouvez décommenter la partie du code dans le watermeter2mqtt.ino ( voir plus haut ), fichier qui analyse toutes les fréquences autour de la fréquence du compteur pour trouver la bonne.

{% include product-embed.html guid="2131" %}
{% include product-embed.html guid="2132" %}

# Conclusion

Voilà une méthode simple à mettre en place, pour ceux qui ne seont pas équipés d'un émetteur Itron Everblu Enhanced, il existe une autre méthode qui consiste à mettre un [capteur inductif]({% link _products/{{ page.locale | slice: 0,2 }}/2022-11-29-capteur-inductif-5v-npn-LJ18A3-8Z.md %}){: target="_blank"} directement sur le compteur et de le relier à un esp8266, cette méthode est un peut plus contraignant car il faudra avoir une source d'énergie à proxilmité de ce compteur afin de pouvoir aliment en 5V l'esp et le capteur, le tarif de l'ensemble oscille autour de 10€, un excellent article est disponible ici [pieterbrinkman.com](https://www.pieterbrinkman.com/2022/02/02/build-a-cheap-water-usage-sensor-using-esphome-home-assistant-and-a-proximity-sensor/){: target="_blank"}







