---
guid: 178
title: "Test du Kincony B8M contrôleur ESP32 8 canaux MOSFET pour l'irrigation"
description: "Test complet du Kincony B8M contrôleur ESP32-S3 8 canaux MOSFET avec intégration ESPHome et Home Assistant pour piloter un système d'irrigation, comparatif avec le Waveshare ESP32-S3-ETH-8DI-8RO"
ref: "Kincony B8M"
layout: post
authors: [Nico]
date: 2026-07-13 08:00
last_modified_at: 
categories: [Tests, Domotique, Home-Assistant, Haade-lab]
tags: []
video: 
image: 'test-kincony-b8m-mosfet-centre-irrigation-intelligent.png'
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
  - https://www.kincony.com/esp32-smart-controller-b8m-8ch-mosfet.html
  - https://www.kincony.com/forum/showthread.php?tid=8210
  - https://www.waveshare.com/esp32-s3-eth-8di-8ro-c.htm
  - https://esphome.io/
---

Cela fait un bon moment que je cherchais un contrôleur **multi-canaux compact et silencieux** pour piloter mon système d'irrigation en **DC 24V**. Après avoir testé des solutions Zigbee comme le [Sonoff SWV]({% post_url /fr/2025-06-25-test-du-programmateur-arrosage-zigbee-sonoff-swv %}) ou le [Woox R7060]({% post_url /fr/2023-03-29-test-controleur-arrosage-intelligent-zigbee-woox-r7060 %}), je voulais passer à une solution **filaire, fiable et entièrement personnalisable**. Mon choix s'est porté sur le **{{ page.ref }}**, un contrôleur ESP32-S3 avec **8 sorties MOSFET** parfait pour piloter des électrovannes 24V DC d'irrigation.

Dans cet article je te présente en détail ce produit, son intégration complète dans **ESPHome** et **Home Assistant**, et je le compare avec son concurrent direct le **Waveshare ESP32-S3-ETH-8DI-8RO** pour t'aider à faire le bon choix.

{% include product-embed.html image="kincony-b8m-esp32-mosfet-8ch.png" title="Kincony B8M" brand="Kincony" description="Contrôleur ESP32-S3 8 canaux MOSFET DC 12-24V, Ethernet, RS485, 8 entrées digitales, 4 entrées analogiques, RTC DS3231, écran OLED" affiliate="_c3LSscYB"  %}

## La marque Kincony

**Kincony** (Hangzhou Kincony Electronics Co., Ltd.) est un fabricant chinois fondé en **2007 à Hangzhou** par Xu Wei. La société est spécialisée dans les **contrôleurs IoT pour la domotique et l'automatisation industrielle**. Leur gamme phare, la série **KC868**, comprend des cartes relais, des contrôleurs DIN-rail et des passerelles basées sur ESP32 et Raspberry Pi CM.

Ce qui différencie Kincony de beaucoup de fabricants chinois, c'est leur **philosophie open-source friendly**. Ils fournissent les schémas, les configurations ESPHome, les exemples Arduino et une communauté active sur leur forum. Le matériel est reconnu comme **fiable et bien construit**, représentant une alternative sérieuse et abordable aux systèmes propriétaires comme KNX ou Loxone.

{%- include alert.html type="info" text="Kincony cible les <b>ingénieurs, les passionnés de DIY et les intégrateurs systèmes</b>. Ce n'est pas du plug-and-play grand public, il faudra mettre les mains dans le cambouis avec ESPHome ou Arduino." %}

> Le point faible souvent mentionné par la communauté c'est le **support après-vente** qui est limité (WhatsApp, forum, YouTube). La documentation est parfois fragmentée, mais les configurations ESPHome sont fournies.

## Déballage

Le {{ page.ref }} est livré dans un **boîtier DIN-rail en plastique ABS** prêt à installer dans un tableau électrique. À l'intérieur du colis tu retrouves :

- le contrôleur {{ page.ref }} dans son boîtier DIN-rail
- un câble USB-C pour la programmation
- une notice rapide avec les schémas de câblage

{% picture posts/{{ page.guid }}/deballage-kincony-b8m-esp32-mosfet.png --alt déballage du contrôleur Kincony B8M ESP32-S3 8 canaux MOSFET --img width="940" height="687" %}

La première impression est celle d'un produit **sérieux et bien fini**. Le boîtier DIN-rail est compact et robuste, les borniers à vis sont bien identifiés et de bonne qualité. On sent un produit conçu pour un usage professionnel.

{% picture posts/{{ page.guid }}/detail-connecteurs-kincony-b8m.png --alt détail des connecteurs et borniers du Kincony B8M --img width="940" height="932" %}

Les dimensions sont compactes : **122 × 83 × 59 mm**, parfait pour s'intégrer dans un tableau électrique aux côtés de l'alimentation 24V.

## Le contrôleur {{ page.ref }}

Le {{ page.ref }} est bâti autour d'un **ESP32-S3-WROOM-1U (N16R8)** avec 16MB de Flash et 8MB de PSRAM, ce qui en fait un module puissant capable de gérer de nombreuses entités ESPHome sans broncher.

{% picture posts/{{ page.guid }}/circuit-imprime-kincony-b8m-composants.png --alt circuit imprimé du Kincony B8M avec les composants identifiés --img width="940" height="627" %}

### Ce qui est embarqué

Le {{ page.ref }} ne se contente pas de 8 sorties MOSFET. C'est un **véritable couteau suisse** de l'automatisation :

- **8 sorties MOSFET** : DC 12-24V, 10A par canal (piloté via PCF8574/PCF8575 en I2C)
- **8 entrées digitales** : contact sec optocouplé, câbles jusqu'à **500 mètres** !
- **4 entrées analogiques** : via ADS1115 16 bits (2× 0-5V + 2× 4-20mA)
- **Ethernet** : RJ45 100Mbps via W5500
- **WiFi & Bluetooth** : natif ESP32-S3
- **RS485** : pour les capteurs industriels (Modbus)
- **RTC DS3231** : horloge haute précision avec pile (les planifications fonctionnent même sans internet)
- **Écran OLED SSD1306** : affiche l'adresse IP et l'état de connexion
- **Slot carte SD** : pour le stockage local
- **Port I2C** : extensible avec des capteurs additionnels
- **USB-C** : pour la programmation et l'alimentation

{%- include alert.html type="warning" text="<b>Attention !</b> Les sorties MOSFET ne fonctionnent qu'en <b>DC (12-24V)</b>. Impossible de commuter du 220V AC directement. Pour du 220V il faudra ajouter un module relais externe ou se tourner vers le Waveshare." %}

### Caractéristiques techniques {{ page.ref }}

**Processeur et Mémoire**

|MCU|ESP32-S3-WROOM-1U (N16R8)|
|Flash|16 MB|
|PSRAM|8 MB|
|Frameworks|ESPHome, Tasmota, Arduino, MicroPython, ESP-IDF|

**Sorties**

|Type|MOSFET (commutation DC uniquement)|
|Nombre|8 canaux|
|Courant max|10A par canal|
|Tension charge|DC 12-24V|
|Commutation|Silencieuse, rapide (µs), durée de vie illimitée|

**Entrées**

|Entrées digitales|8× contact sec optocouplé (jusqu'à 500m de câble)|
|Entrées analogiques|4× via ADS1115 16 bits (2× 0-5V, 2× 4-20mA)|

**Connectivité**

|Ethernet|RJ45 100Mbps (W5500 SPI)|
|WiFi|2.4GHz 802.11 b/g/n|
|Bluetooth|BLE natif ESP32-S3|
|RS485|TX: GPIO39, RX: GPIO38|
|USB-C|Programmation / alimentation|
|I2C|SDA: GPIO8, SCL: GPIO18|

**Périphériques embarqués**

|RTC|DS3231 haute précision (adresse I2C 0x68)|
|Écran|SSD1306 OLED (adresse I2C 0x3C)|
|Stockage|Slot carte SD (SPI)|

**Alimentation et Dimensions**

|Alimentation|DC 12-24V|
|Dimensions|122 × 83 × 59 mm|
|Montage|Rail DIN|

#### **les + du produit** {{ page.ref }}
{: .blue}

- 8 sorties MOSFET silencieuses (durée de vie illimitée)
- ESP32-S3 puissant (16MB Flash, 8MB PSRAM)
- 4 entrées analogiques ADS1115 (capteurs d'humidité du sol, pression...)
- RTC DS3231 avec pile (planifications hors-ligne)
- Écran OLED intégré
- Ethernet + WiFi + Bluetooth
- RS485 pour capteurs industriels
- Entrées digitales optocouplées jusqu'à 500m
- Boîtier DIN-rail professionnel
- ESPHome et Tasmota supportés

#### **les - du produit** {{ page.ref }}
{: .red}

- DC uniquement (pas de 220V AC)
- Documentation fragmentée
- Support après-vente limité
- Pas de PoE
- Adresses I2C variables selon les révisions de carte
- Prix plus élevé que la concurrence relais (~80$ vs ~50$)

## Pourquoi le {{ page.ref }} pour l'irrigation ?

Mon système d'irrigation fonctionne avec des **électrovannes 24V DC**, c'est le standard pour les systèmes d'arrosage professionnels (Hunter, Rain Bird, etc.). Le {{ page.ref }} est **parfait pour cet usage** :

1. **8 zones d'irrigation** : chaque sortie MOSFET pilote une électrovanne 24V DC
2. **Commutation silencieuse** : pas de cliquetis de relais dans le tableau
3. **Durée de vie illimitée** : les MOSFET n'ont pas de pièces mécaniques qui s'usent
4. **Entrées analogiques** : je peux brancher des **capteurs d'humidité du sol** (0-5V) pour automatiser l'arrosage en fonction de l'humidité réelle
5. **RTC DS3231** : les planifications fonctionnent même si Home Assistant ou le réseau tombe
6. **Ethernet** : connexion filaire fiable, pas de problème WiFi dans le jardin

{% picture posts/{{ page.guid }}/schema-cablage-irrigation-kincony-b8m.png --alt schéma de câblage du système d'irrigation avec le Kincony B8M et les électrovannes 24V --img width="717" height="649" %}

> L'alimentation 24V DC qui alimente le {{ page.ref }} alimente aussi directement les électrovannes via les sorties MOSFET. Un seul câble d'alimentation et un câble Ethernet, le reste c'est du câblage d'électrovannes. Ultra simple.

## Intégration ESPHome

C'est là que ça devient intéressant. **ESPHome supporte parfaitement le {{ page.ref }}** et c'est la méthode que je recommande pour l'intégration dans Home Assistant.

### Flash initial

Le premier flash se fait par **USB-C**. Il y a une subtilité importante :

{%- include alert.html type="warning" text="Lors du premier flash, tu dois maintenir le bouton <b>DW (Download)</b> enfoncé pendant la mise sous tension pour entrer en mode bootloader. Sans cette manipulation, le flash échouera avec l'erreur 'download data fail'." %}

Une fois le premier flash réussi, toutes les mises à jour suivantes se font en **OTA** (Over-The-Air) via le réseau.

### Configuration ESPHome complète

Ci-dessous ma configuration **complète et fonctionnelle** pour le {{ page.ref }} adaptée à l'irrigation. Les 8 sorties sont configurées en switches, les 8 entrées en capteurs binaires, et les 4 entrées analogiques sont actives pour les capteurs d'humidité du sol :

{% highlight yaml %}
{% raw %}

esphome:
  name: irrigation
  friendly_name: Irrigation

esp32:
  variant: esp32s3
  framework:
    type: arduino

api:
  encryption:
    key: !secret encryption_key

ota:
  - platform: esphome
    id: my_ota
    password: !secret ota_password

ethernet:
  type: W5500
  clk_pin: GPIO1
  mosi_pin: GPIO2
  miso_pin: GPIO41
  cs_pin: GPIO42
  interrupt_pin: GPIO43
  reset_pin: GPIO44
  manual_ip:
    static_ip: 192.168.1.X
    gateway: 192.168.1.1
    subnet: 255.255.255.0

#wifi:
#  ssid: !secret wifi_ssid
#  password: !secret wifi_password

i2c:
  - id: bus_a
    sda: GPIO8
    scl: GPIO18
    scan: true
    frequency: 400kHz

pcf8574:
  - id: pcf8574_hub_out_1 # for output channel 0-7| input channel 8-15
    i2c_id: bus_a
    address: 0x22
    pcf8575: true

uart:
  - id: uart_1 #RS485
    baud_rate: 9600
    debug:
      direction: BOTH
      dummy_receiver: true
      after:
        timeout: 10ms
    tx_pin: GPIO39
    rx_pin: GPIO38

switch:
  - platform: uart
    uart_id: uart_1
    name: "RS485 Bouton"
    data: [0x11, 0x22, 0x33, 0x44, 0x55]

  - platform: gpio
    name: "irrigation-output01"
    id: "irrigation_output01"
    pin:
      pcf8574: pcf8574_hub_out_1
      number: 0
      mode: OUTPUT
      inverted: true
  - platform: gpio
    name: "irrigation-output02"
    id: "irrigation_output02"
    pin:
      pcf8574: pcf8574_hub_out_1
      number: 1
      mode: OUTPUT
      inverted: true
  - platform: gpio
    name: "irrigation-output03"
    id: "irrigation_output03"
    pin:
      pcf8574: pcf8574_hub_out_1
      number: 2
      mode: OUTPUT
      inverted: true
  - platform: gpio
    name: "irrigation-output04"
    id: "irrigation_output04"
    pin:
      pcf8574: pcf8574_hub_out_1
      number: 3
      mode: OUTPUT
      inverted: true
  - platform: gpio
    name: "irrigation-output05"
    id: "irrigation_output05"
    pin:
      pcf8574: pcf8574_hub_out_1
      number: 4
      mode: OUTPUT
      inverted: true
  - platform: gpio
    name: "irrigation-output06"
    id: "irrigation_output06"
    pin:
      pcf8574: pcf8574_hub_out_1
      number: 5
      mode: OUTPUT
      inverted: true
  - platform: gpio
    name: "irrigation-output07"
    id: "irrigation_output07"
    pin:
      pcf8574: pcf8574_hub_out_1
      number: 6
      mode: OUTPUT
      inverted: true
  - platform: gpio
    name: "irrigation-output08"
    id: "irrigation_output08"
    pin:
      pcf8574: pcf8574_hub_out_1
      number: 7
      mode: OUTPUT
      inverted: true

binary_sensor:
  - platform: gpio
    name: "irrigation-input01"
    id: "irrigation_input01"
    pin:
      pcf8574: pcf8574_hub_out_1
      number: 8
      mode: INPUT
      inverted: true
  - platform: gpio
    name: "irrigation-input02"
    id: "irrigation_input02"
    pin:
      pcf8574: pcf8574_hub_out_1
      number: 9
      mode: INPUT
      inverted: true
  - platform: gpio
    name: "irrigation-input03"
    id: "irrigation_input03"
    pin:
      pcf8574: pcf8574_hub_out_1
      number: 10
      mode: INPUT
      inverted: true
  - platform: gpio
    name: "irrigation-input04"
    id: "irrigation_input04"
    pin:
      pcf8574: pcf8574_hub_out_1
      number: 11
      mode: INPUT
      inverted: true
  - platform: gpio
    name: "irrigation-input05"
    id: "irrigation_input05"
    pin:
      pcf8574: pcf8574_hub_out_1
      number: 12
      mode: INPUT
      inverted: true
  - platform: gpio
    name: "irrigation-input06"
    id: "irrigation_input06"
    pin:
      pcf8574: pcf8574_hub_out_1
      number: 13
      mode: INPUT
      inverted: true
  - platform: gpio
    name: "irrigation-input07"
    id: "irrigation_input07"
    pin:
      pcf8574: pcf8574_hub_out_1
      number: 14
      mode: INPUT
      inverted: true
  - platform: gpio
    name: "irrigation-input08"
    id: "irrigation_input08"
    pin:
      pcf8574: pcf8574_hub_out_1
      number: 15
      mode: INPUT
      inverted: true

  ## pull-up resistance on PCB
  - platform: gpio
    name: "irrigation-W1-io47"
    pin:
      number: GPIO47
      inverted: true

  - platform: gpio
    name: "irrigation-W1-io48"
    pin:
      number: GPIO48
      inverted: true

  - platform: gpio
    name: "irrigation-W1-io7"
    pin:
      number: GPIO7
      inverted: true

  - platform: gpio
    name: "irrigation-W1-io40"
    pin:
      number: GPIO40
      inverted: true
  ## without resistance on PCB
  - platform: gpio
    name: "irrigation-13"
    pin:
      number: GPIO13
      inverted: false
  - platform: gpio
    name: "irrigation-14"
    pin:
      number: GPIO14
      inverted: false
  - platform: gpio
    name: "irrigation-21"
    pin:
      number: GPIO21
      inverted: false
  - platform: gpio
    name: "irrigation-0"
    pin:
      number: GPIO0
      inverted: false
      ignore_strapping_warning: true

ads1115:
  - address: 0x48

globals:
  - id: display_page
    type: int
    restore_value: no
    initial_value: '0'

sensor:
#  - platform: wifi_signal
#    name: "WiFi Signal Sensor"
#    id: wifi_signal_sensor
#    update_interval: 60s
  - platform: internal_temperature
    name: "Internal Temperature"
  - platform: uptime
    name: "Uptime"
    id: uptime_sensor
    update_interval: 60s
  - platform: ads1115
    multiplexer: A0_GND
    id: ads_a0
    gain: 6.144
    resolution: 16_BITS
    name: "ADS1115 Channel A0-GND"
    update_interval: 5s
  - platform: ads1115
    multiplexer: A1_GND
    id: ads_a1
    gain: 6.144
    name: "ADS1115 Channel A1-GND"
    update_interval: 5s
  - platform: ads1115
    multiplexer: A2_GND
    id: ads_a2
    gain: 6.144
    name: "ADS1115 Channel A2-GND"
    update_interval: 5s
  - platform: ads1115
    multiplexer: A3_GND
    id: ads_a3
    gain: 6.144
    name: "ADS1115 Channel A3-GND"
    update_interval: 5s

text_sensor:
#  - platform: wifi_info
#    ip_address:
#      id: wifi_ip
#    ssid:
#      name: "WiFi SSID"
#      id: wifi_ssid

  - platform: ethernet_info
    ip_address:
      id: eth_ip
      name: ESP IP Address
    dns_address:
      name: ESP DNS Address
    mac_address:
      name: ESP MAC Address

interval:
  - interval: 5s
    then:
      - lambda: |-
          id(display_page) = (id(display_page) + 1) % 3;

font:
  - file: "gfonts://Roboto"
    id: roboto
    size: 20

logger:
  level: INFO

display:
  - platform: ssd1306_i2c
    i2c_id: bus_a
    model: "SSD1306 128x64"
    address: 0x3C

    lambda: |-
      it.fill(COLOR_OFF);

      // ======================================================
      // PAGE 0 : SYSTEM
      // ======================================================
      if (id(display_page) == 0) {
        
        // ================= RESEAU =================
        
        if (id(eth_ip).has_state()) {
          it.printf(2, 0, id(roboto), "Ethernet");
        } else {
          it.printf(2, 0, id(roboto), "Attention !");
        }

        // ================= IP ETHERNET =================
        if (id(eth_ip).has_state()) {
          it.printf(2, 20, id(roboto), "%s", id(eth_ip).state.c_str());
        } else {
          it.printf(2, 20, id(roboto), "Eth Absent");
        }
        
        // ================= WIFI (COMMENTÉ) =================
        /*
        if (id(wifi_ssid).has_state()) {

          std::string ssid = id(wifi_ssid).state;

          if (ssid.length() > 3) {
            ssid = ssid.substr(0, 3) + ".";
          }

          it.printf(2, 0, id(roboto), "WiFi: %s", ssid.c_str());

        } else {
          it.printf(2, 0, id(roboto), "Attention !");
        }
        
        // ================= IP WIFI =================
        if (id(wifi_ip).has_state()) {
          it.printf(2, 20, id(roboto), "%s", id(wifi_ip).state.c_str());
          } else {
          it.printf(2, 20, id(roboto), "Wifi Absent");
        }
        
        */
        // ================= UPTIME =================
          int sec = id(uptime_sensor).state;
          int h = sec / 3600;
          int m = (sec % 3600) / 60;

          it.printf(2, 40, id(roboto), "Up %dh%02d", h, m);

          // ================= HEARTBEAT =================
          static bool dot = false;
          dot = !dot;

          if (dot) {
            it.filled_circle(122, 52, 2);
          } else {
            it.circle(122, 52, 2);
          }

          // ================= HA + MQTT (COMMENTÉ) =================
          /*
          if (id(api_server).is_connected()) {
            it.printf(2, 40, id(roboto), "HA:OK");
          } else {
            it.printf(2, 40, id(roboto), "HA:--");
          }

        #ifdef USE_MQTT
          if (id(mqtt_client).is_connected()) {
            it.printf(60, 40, id(roboto), "MQTT:OK");
          } else {
            it.printf(60, 40, id(roboto), "MQTT:KO");
          }
        #endif
          */
        }

        // ======================================================
        // PAGE 1 : INPUTS
        // ======================================================
        else if (id(display_page) == 1) {

        it.printf(2, 0, id(roboto), "ENTREES");

        bool in[8] = {
          id(irrigation_input01).state,
          id(irrigation_input02).state,
          id(irrigation_input03).state,
          id(irrigation_input04).state,
          id(irrigation_input05).state,
          id(irrigation_input06).state,
          id(irrigation_input07).state,
          id(irrigation_input08).state
        };

        int offset_x = 2;   // 👈 cohérence globale

        for (int i = 0; i < 8; i++) {

          int x = (i % 4) * 30 + offset_x;
          int y = 16 + (i / 4) * 20;

          int box_y = y + 6;   // 👈 carré descendu
          int text_y = y;      // 👈 texte reste en haut

          it.rectangle(x, box_y, 20, 15);

          if (in[i]) {
            it.filled_rectangle(x, box_y, 20, 15);
          }

          it.printf(x + 6, text_y + 2, id(roboto), "%d", i + 1);
        }
      }

        // ======================================================
        // PAGE 2 : DIAGNOSTIC
        // ======================================================
        else if (id(display_page) == 2) {

          it.printf(0, 0, id(roboto), "Diagnostic");

          it.printf(0, 20, id(roboto), "Run OK");
          
          // ========= ETH =====================================
          
          if (id(eth_ip).has_state()) {
            it.printf(0, 40, id(roboto), "Net OK");
          } else {
            it.printf(0, 40, id(roboto), "Net KO");
          }
          
          // ========= WIFI =====================================
          /*
          if (id(wifi_ip).has_state()) {
            it.printf(0, 40, id(roboto), "Net OK");

            if (id(wifi_signal_sensor).has_state()) {
              it.printf(80, 40, id(roboto), "%.0f dBm", id(wifi_signal_sensor).state);
            }

          } else {
            it.printf(0, 40, id(roboto), "Net KO");
          }
          */
        }

{% endraw %}
{% endhighlight %}

{%- include alert.html type="help" text="Les adresses I2C des PCF8574 (0x22 et 0x24) peuvent varier selon les révisions de carte. Active <b>scan: true</b> sur le bus I2C et vérifie les adresses dans les logs ESPHome au démarrage." %}

### Résultat dans Home Assistant

Une fois le firmware flashé, le {{ page.ref }} est **automatiquement découvert** par Home Assistant via l'intégration ESPHome. Tu retrouves instantanément :

- 8 switches (zones d'irrigation)
- 8 capteurs binaires (entrées)
- 4 capteurs analogiques (humidité sol, pression, débit)

{% picture posts/{{ page.guid }}/integration-esphome-kincony-b8m-home-assistant-entites.png --alt intégration ESPHome du Kincony B8M dans Home Assistant avec toutes les entités --img width="940" height="658" %}

{% include homeassistantlink.html integration="esphome" %}

### Automatisation d'irrigation

Grâce aux entités remontées dans Home Assistant, tu peux créer des **automatisations d'irrigation intelligentes**. Par exemple :

- **Arrosage par zone** avec durées programmées
- **Arrêt automatique** si le capteur d'humidité du sol indique un sol suffisamment humide
- **Interdiction d'arrosage** si la pluie est annoncée (via intégration météo)
- **Planification saisonnière** avec des durées variables selon la période

Mais plutôt que de tout recréer à la main avec des automatisations natives, je te recommande fortement d'utiliser le composant **Irrigation V5** disponible dans HACS.

### Irrigation V5 : le module HACS indispensable

[**Irrigation V5**](https://github.com/petergridge/Irrigation-V5){: target="_blank"} est un composant custom développé par **petergridge** qui transforme Home Assistant en un **contrôleur d'irrigation professionnel**. Couplé aux 8 sorties MOSFET du {{ page.ref }}, c'est la combinaison parfaite.

{% picture posts/{{ page.guid }}/irrigation-v5-hacs-home-assistant-kincony-b8m.png --alt interface Irrigation V5 HACS dans Home Assistant avec les zones du Kincony B8M --img width="940" height="529" %}

#### Installation

1. Ouvre **HACS** dans Home Assistant
2. Recherche **"Irrigation Controller Component"**
3. Installe le composant et redémarre Home Assistant
4. Va dans **Paramètres → Appareils et services → Ajouter une intégration → Irrigation**
5. Configure ton premier programme d'arrosage

{%- include alert.html type="help" text="La carte Lovelace personnalisée <b>irrigation-card</b> est incluse avec le composant. Elle te donne une interface visuelle complète pour gérer tes zones directement depuis le dashboard." %}

#### Fonctionnalités clés d'Irrigation V5

Ce qui rend ce composant redoutable avec le {{ page.ref }} :

- **Programmes multi-zones** : configure chaque sortie MOSFET du B8M comme une zone d'irrigation indépendante avec sa propre durée d'arrosage
- **Planification flexible** : démarrage par heure fixe, lever/coucher du soleil, ou déclenchement manuel
- **Mode ECO** : cycle arrosage/pause/reprise qui laisse l'eau s'infiltrer dans le sol entre les passages, réduisant le ruissellement. Idéal pour les sols argileux
- **Capteur de pluie** : associe un capteur binaire (ou les données météo) pour **suspendre automatiquement** l'arrosage quand il pleut. Configurable **zone par zone** (tu peux exclure la terrasse couverte par exemple)
- **Capteur de source d'eau** : arrête l'arrosage si le niveau du puits ou de la cuve est trop bas
- **Ajustement automatique** : augmente ou diminue la durée d'arrosage en fonction de facteurs externes (température, humidité du sol via les entrées analogiques ADS1115 du B8M)
- **Multi-programmes** : tu peux ajouter l'intégration plusieurs fois pour créer des programmes séparés (pelouse le matin, potager le soir)

#### Configuration avec le {{ page.ref }}

Voici comment associer les zones d'Irrigation V5 aux sorties MOSFET du {{ page.ref }} :

{% highlight yaml %}
# Exemple de configuration Irrigation V5
# Les switches ESPHome du B8M servent de zones

# Dans la configuration Irrigation V5 (via l'interface) :
# Zone 1 → switch.zone_1_pelouse_avant
# Zone 2 → switch.zone_2_pelouse_arriere
# Zone 3 → switch.zone_3_massifs_fleurs
# Zone 4 → switch.zone_4_potager
# Zone 5 → switch.zone_5_haies
# Zone 6 → switch.zone_6_goutte_a_goutte

# Capteur de pluie (optionnel) :
# binary_sensor.rain_sensor (via intégration météo ou capteur physique)

# Ajustement par humidité du sol (optionnel) :
# sensor.humidite_sol_zone_1_0_5v (entrée analogique ADS1115 du B8M)
{% endhighlight %}

> L'avantage d'Irrigation V5 par rapport aux automatisations natives c'est la **gestion centralisée** : tu as une seule carte Lovelace qui affiche toutes tes zones, les prochains arrosages programmés, l'état du capteur de pluie et la durée restante de chaque zone active. Plus besoin de jongler entre 15 automatisations différentes.

{% picture posts/{{ page.guid }}/automatisation-irrigation-home-assistant-kincony-b8m.png --alt automatisation d'irrigation dans Home Assistant avec le Kincony B8M et Irrigation V5 --img width="940" height="529" %}

{%- include alert.html type="info" text="Le mode <b>ECO</b> est particulièrement intéressant avec les sorties MOSFET du B8M : la commutation silencieuse et ultra-rapide permet des cycles arrosage/pause très courts sans usure mécanique, là où un relais classique s'userait prématurément." %}

## Autres méthodes d'intégration

Outre ESPHome, le {{ page.ref }} supporte d'autres méthodes :

|Méthode|Effort|Description|
|**ESPHome** (recommandée)|Moyen|Flash via USB-C, intégration native HA, entités auto-découvertes|
|**KCS v3 + MQTT**|Faible|Firmware d'usine, MQTT auto-discovery dans HA, supporte aussi Apple HomeKit|
|**Tasmota**|Moyen|Flash Tasmota, intégration via MQTT ou native|
|**Arduino / MicroPython**|Élevé|Firmware custom, communication via MQTT ou API REST|

{% picture posts/{{ page.guid }}/integration-kincony-b8m-esphome-home-assistant.png --alt Intégration du Kincony b8m dans esphome --img width="940" height="516" %}

{%- include alert.html type="info" text="Le firmware d'usine <b>KCS v3</b> supporte le MQTT auto-discovery et Apple HomeKit. Si tu ne veux pas mettre les mains dans ESPHome, c'est une option clé en main." %}

## Comparatif : {{ page.ref }} vs Waveshare ESP32-S3-ETH-8DI-8RO

Maintenant comparons le {{ page.ref }} avec son concurrent le plus direct : le **Waveshare ESP32-S3-ETH-8DI-8RO**. Waveshare est un fabricant reconnu basé à Shenzhen, fondé en 2007, spécialisé dans les modules de développement, les écrans et les cartes IoT. Leur réputation de qualité industrielle est solide.

{%- include alert.html type="warning" text="<b>Différence fondamentale :</b> le Kincony B8M utilise des <b>sorties MOSFET</b> (DC uniquement, silencieuses) tandis que le Waveshare utilise des <b>relais mécaniques</b> (AC et DC, avec cliquetis). Ce choix impacte directement les cas d'usage !" %}

{% include product-embed.html image="waveshare-ESP32-S3-POE-ETH-8DI-8RO-C.png" title="Waveshare ESP32-S3-POE-ETH-8DI-8RO-C" brand="Waveshare" description="Module de relais WiFi industriel ESP32-S3 à 8 canaux, avec interface CAN isolée intégrée, processeur Xtensa 32 bits LX7 double cœur et multiples circuits de protection par isolation." affiliate="_c32q2aKj" amazlink="4yoMRFk"  %}

### Tableau comparatif détaillé

|Caractéristique|**Kincony B8M**|**Waveshare ESP32-S3-ETH-8DI-8RO**|
|**Type de sortie**|**MOSFET** (état solide)|**Relais mécanique** (NO/COM/NC)|
|**Charge AC 220V**|❌ Non (DC uniquement)|✅ Oui (jusqu'à 250V AC 10A)|
|**Charge DC**|✅ 12-24V DC 10A|✅ Jusqu'à 30V DC 10A|
|**Commutation silencieuse**|✅ Oui|❌ Non (cliquetis)|
|**PWM / Dimming**|✅ Possible (LED, moteur)|❌ Non (on/off uniquement)|
|**Durée de vie**|Illimitée (pas de pièce mécanique)|Limitée (~100K-1M cycles)|
|**Processeur**|ESP32-S3-WROOM-1U (N16R8)|ESP32-S3|
|**Mémoire**|16MB Flash / 8MB PSRAM|16MB Flash / 8MB PSRAM|
|**Ethernet**|✅ W5500 100Mbps|✅ W5500 100Mbps|
|**WiFi / BT**|✅ / ✅|✅ / ✅ BLE 5.0|
|**Entrées digitales**|8× optocouplées (500m)|8× optocouplées|
|**Entrées analogiques**|✅ 4× ADS1115 (0-5V, 4-20mA)|❌ Aucune|
|**RS485**|✅ Oui|✅ Oui (ou CAN sur variante "-C")|
|**CAN Bus**|❌ Non|✅ Sur variante "-C"|
|**PoE**|❌ Non|✅ Sur variante POE (~+15$)|
|**RTC**|✅ DS3231 haute précision + pile|✅ RTC basique|
|**Écran OLED**|✅ SSD1306 intégré|❌ Non|
|**Carte SD**|✅ Oui|✅ Oui|
|**Alimentation**|DC 12-24V|DC 7-36V (plus large)|
|**Boîtier DIN-rail**|✅ Oui|✅ Oui|
|**ESPHome**|✅ Supporté|✅ Supporté (devices.esphome.io)|
|**Prix approximatif**|**~80$ / 75€**|**~50$ / 45€**|

### MOSFET vs Relais : quel impact ?

**Les sorties MOSFET** (Kincony B8M) :
- ✅ Commutation **silencieuse** et **ultra-rapide** (microsecondes)
- ✅ **Durée de vie illimitée** (pas de pièces mécaniques)
- ✅ **PWM possible** pour le dimming LED ou le contrôle de vitesse moteur
- ❌ **DC uniquement** (12-24V) — impossible de commuter du 220V AC

**Les relais mécaniques** (Waveshare) :
- ✅ Commutent **AC et DC** (jusqu'à 250V AC !)
- ✅ Contacts **NO/COM/NC** (normalement ouvert ou fermé)
- ✅ **Isolation galvanique** naturelle
- ❌ **Cliquetis audible** à chaque commutation
- ❌ **Durée de vie limitée** (usure mécanique)
- ❌ Pas de PWM/dimming

### Le Waveshare en détail

Le Waveshare existe en **4 variantes** :

|Modèle|PoE|Bus|Prix approx.|
|ESP32-S3-ETH-8DI-8RO|❌|RS485|~45-50$|
|ESP32-S3-ETH-8DI-8RO-C|❌|CAN isolé|~45-50$|
|ESP32-S3-POE-ETH-8DI-8RO|✅|RS485|~55-65$|
|ESP32-S3-POE-ETH-8DI-8RO-C|✅|CAN isolé|~55-65$|

> Le point fort du Waveshare c'est clairement le **prix** (~30-45% moins cher) et la **polyvalence des relais** qui commutent AC et DC. De plus la variante PoE est un vrai plus pour une installation simplifiée.

## Lequel choisir ?

### Choisis le Kincony {{ page.ref }} si :

- Tu pilotes des charges **DC uniquement** (électrovannes 24V, LED strips, moteurs DC)
- Tu as besoin d'**entrées analogiques** (capteurs d'humidité, pression, débit)
- Tu veux une commutation **silencieuse**
- Tu as besoin d'un **RTC précis** pour des planifications hors-ligne
- Tu veux un **écran OLED** intégré pour le diagnostic
- Tu fais de l'**irrigation** avec des électrovannes 24V DC → **c'est le meilleur choix**

### Choisis le Waveshare ESP32-S3-ETH-8DI-8RO si :

- Tu dois commuter du **220V AC** (éclairage, pompes, appareils ménagers)
- Tu as un **budget serré** (~50$ vs ~80$)
- Tu as besoin de **PoE** pour une alimentation par câble réseau
- Tu as besoin d'un **bus CAN** (automatisation industrielle)
- Le **cliquetis des relais** ne te dérange pas
- Tu veux une **plage d'alimentation plus large** (7-36V vs 12-24V)

{%- include alert.html type="info" text="Pour mon usage en <b>irrigation 24V DC</b>, le choix du <b>Kincony B8M</b> s'est imposé naturellement : sorties MOSFET silencieuses, entrées analogiques pour les capteurs d'humidité du sol, et RTC haute précision pour les planifications autonomes." %}

{% include product-embed.html image="kincony-b8m-esp32-mosfet-8ch.png" title="Kincony B8M" brand="Kincony" description="Contrôleur ESP32-S3 8 canaux MOSFET DC 12-24V, Ethernet, RS485, 8 entrées digitales, 4 entrées analogiques, RTC DS3231, écran OLED" affiliate="_c3LSscYB"  %}

## Conclusion

Le {{ page.ref }} est un **contrôleur remarquable** pour qui a besoin de piloter des charges DC en domotique. Pour mon système d'irrigation en 24V DC, c'est la solution idéale : **silencieux, fiable, bourré de fonctionnalités** (entrées analogiques, RTC, écran OLED) et parfaitement intégré dans l'écosystème **ESPHome / Home Assistant**.

Face au Waveshare, le choix est avant tout **dicté par le type de charge** : MOSFET (DC) vs Relais (AC/DC). Les deux produits sont de qualité, bien supportés par ESPHome, et montés en boîtier DIN-rail professionnel. **Le Waveshare gagne sur le prix et la polyvalence AC, le Kincony gagne sur les fonctionnalités embarquées et le silence.**

> Si comme moi tu cherches un contrôleur multi-zones pour l'irrigation en DC, **le {{ page.ref }} est le choix que je te recommande**. Si tu as besoin de commuter du 220V AC, tourne-toi vers le Waveshare.
