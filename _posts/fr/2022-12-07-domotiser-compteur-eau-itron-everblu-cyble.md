---
guid: 33
title: "domotiser son compteur d'eau itron en fréquence radio"
description: "Domotiser pas à pas son compteur d'eau itron équipé d'un capteur 433mhz everblu cyble avec arduino dans homeassistant"
layout: post
author: Nico
date: 2022-12-05 13:08
last_modified_at: 
categories: [Domotique, Haade-lab]
tags: []
image: 'picture.png'
toc: true
beforetoc: ''
published: false
noindex: false
sitemap:
  changefreq: 'monthly'
  exclude: 'no'
  priority: 0.5 #between 0.0 to 1.0, 1.0 high priority
  lastmod:  # date to end modification
locale: fr_FR
comments: true
rating:  
sourcelink:
  - https://github.com/psykokwak-com/everblu-meters-esp8266
  - https://github.com/esp8266/Arduino
  - https://fr.macerobotics.com/developpeur/tutoriels/programmer-le-microcontroleur-esp8266-avec-lide-arduino/
---
Depuis peu la *version 2022.11 de Homeassistant prend en charge le compteur d'énergie eau*, il est possible de récupérer les données facilement à l'aide d'esp et ça **pour 10€ environs**. Dans mon cas le compteur est équipé d'un émetteur 433Mhz ce qui permet de récupérer les données à l'aide d'un récepteur CC1101 accouplé à un esp8266 facilement. J'ai repris un référentiel complet sur github qui a été édité par *psykokwak*, et je félicite son travail. Ce référentiel permet de réceptionner les données et de les transférer par mqtt à homeassistant.

## Prérequis
- une carte esp8266
- un controleur CC1101
- un compteur d'eau Itron équipé d'un émetteur Itron Everblu cyble Enhanced [Itron Everblu cyble](https://www.itron.com/fr/solutions/product-catalog/everblu-cyble-enhanced){: target="_blank"}
- home assistant v[2022.11.0 mini](https://www.home-assistant.io/blog/2022/11/02/release-202211/#getting-insights-into-water-usage){: target="_blank"}

## Préparation Arduino

### Installer Arduino, étant sur linux je choisis l'appimage
[Arduino Software](https://www.arduino.cc/en/software){: target="_blank"}

### Installation librairies nécessaires

#### 1. Librairie des cartes ESP8266 et ESP32

Commençons par installer la librairie de gestion de carte esp8266:

[http://arduino.esp8266.com/stable/package_esp8266com_index.json](http://arduino.esp8266.com/stable/package_esp8266com_index.json){: target="_blank"}

- Fichier > Préférences et collez l'url ci-dessus dans URL de gestionnaire de carte supplémentaire

{% picture posts/{{ page.guid }}/add-preference-card-arduino.png --alt Ajouter le référentiel des cartes esp8266 pour arduino --img width="796" height="533" %}

- Outils > carte > gestionnaires de carte, cherchez esp8266 et installez la dernière version

{% picture posts/{{ page.guid }}/add-esp8266-card.png --alt Installer librairies cartes esp8266 --img width="796" height="533" %}

#### 2. Installer la librairie espmqttclient

- Outils > Gérer les bibliothèques, cherchez espmqttclient et installez la dernière version

{% picture posts/{{ page.guid }}/add-esp-mqtt-client.png --alt Ajouter la librairie espmqttclient --img width="796" height="533" %}

### Sélectionner la bonne carte dans mon cas un wemos d1 mini pro sur port usb 

Dans le menu déroulant ajout carte /dev/USB0, commencez par sélectionner la carte et cochez le port correspondant.

{% picture posts/{{ page.guid }}/select-board-mcu.png --alt Sélectionner la carte esp8266 --img width="796" height="533" %}

### Créer un nouveau sketch et importer le dossier

**Methode 1:**
Téléchargez le git, l'extraire et le glisser dans le dossier du sketch sur l'interface Arduino, sinon déposez le dossier directement à la racine du dossier Arduino.

**Methode2:** En ligne de commande

{% highlight shell %}
cd /home/nicolas/Arduino  // placez-vous dans votre dossier arduino
git clone https://github.com/haade-administrator/watermeter2mqtt.git watermeter2mqtt
{% endhighlight %}

{%- include alert.html type="warning" text="Veuillez à transférer le dossier portant le nom: <b>watermeter2mqtt</b>" link="https://github.com/haade-administrator/watermeter2mqtt.git" textlink="cliquez ici le lien du git" %}

{% picture posts/{{ page.guid }}/folder-sketch-watermeter.png --alt Ajouter le dossier watermeter2mqtt au sketch arduino --img width="796" height="533" %}

### Pour terminer, Donnez les permissions au port usb

{% highlight shell %}
sudo chmod a+rw /dev/ttyUSB0
{% endhighlight %}

## Paramétrer les fichiers avant vérification

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


**2 trouver la bonne fréquence de votre emetteur CC1101**

Il suffit de décommenter le code ligne 272-291

{% highlight yaml %}
  /*
  // Use this piece of code to find the right frequency.
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
  {% endhighlight %}

**3 Paramétrer l'horloge sur sa région**

Aller à la ligne 190

{% highlight yaml %}
configTzTime("UTC0", "pool.ntp.org"); // exemple: remplacer UTC0 par UTC+1 pour paris
{% endhighlight %}

#### Fichier everblu_meters.h 

tout en bas du fichier ligne 53-60

{% highlight yaml %}
// Change these define according to your hardware

#define FREQUENCY 433.8683f

#define GDO0 5 //header  11 

#define METER_YEAR              15 // years
#define METER_SERIAL            886451 // serial numbers of counters REMOVE 0
{% endhighlight %}

## Dernière étape

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

## Foire aux questions

#### Caractéristiques et fréquences des données

ce référentiel permet de récupérer:
1. les volumes de consommations
2. le nivezau de la batterie de l'Everblu
3. le nombre de relevé
4. l'heure à laquelle ont été effectués les relevés.

L'appareil interroge le compteur une fois par jour, toutes les 24 heures et réessaye toutes les heures si la requête a échoué.
Votre compteur peut être configuré de telle sorte qu'il n'écoute les demandes que pendant les heures où les agents releveurs travaillent. Afin d'économiser les batteries des modules. Si vous ne parvenez pas à communiquer avec le compteur, veuillez réessayer pendant les heures ouvrables (de 8h00 à 16h00), du lundi au vendredi. En règle générale, essayez de configurer votre appareil uniquement pendant les heures ouvrables, vous éviterez ainsi toute confusion.

#### Etalonnage de la fréquence 433Mhz

Votre module émetteur-récepteur n'est peut-être pas calibré correctement, veuillez modifier la fréquence un peu plus bas ou plus haut et réessayez. Vous pouvez utiliser RTL-SDR pour mesurer le décalage nécessaire. Vous pouvez décommenter la partie du code dans le watermeter2mqtt.ino ( voir plus haut ), fichier qui analyse toutes les fréquences autour de la fréquence du compteur pour trouver la bonne.

## Conclusion

Voilà une méthode simple à mettre en place, pour ceux qui ne seont pas équipés d'un émetteur Itron Everblu Enhanced, il existe une autre méthode qui consiste à mettre un [capteur inductif](http://127.0.0.1:4000/fr/produit/capteur-inductif-5v-npn-LJ18A3-8Z){: target="_blank"} directement sur le compteur et de le relier à un esp8266, cette méthode est un peut plus contraignant car il faudra avoir une source d'énergie à proxilmité de ce compteur afin de pouvoir aliment en 5V l'esp et le capteur, le tarif de l'ensemble oscille aussi autour de 10€, un excellent article est disponible ici [pieterbrinkman.com](https://www.pieterbrinkman.com/2022/02/02/build-a-cheap-water-usage-sensor-using-esphome-home-assistant-and-a-proximity-sensor/){: target="_blank"}







