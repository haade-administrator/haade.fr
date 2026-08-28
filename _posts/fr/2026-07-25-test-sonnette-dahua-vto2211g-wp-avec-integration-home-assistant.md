---
guid: 180
title: "Test de la sonnette connectée Dahua VTO2211G-WP avec intégration Home Assistant"
description: "Test complet de la sonnette connectée Dahua VTO2211G-WP avec intégration Home Assistant via MQTT, ONVIF et OpenWrt. Installation, configuration avancée et résultats détaillés."
ref: "VTO2211G-WP"
layout: post
authors: [Nico]
date: 2026-07-25 12:42
last_modified_at: 
categories: [Tests, Domotique, Home-Assistant, Haade-lab]
tags: [Dahua, Sonnette, Interphone, Home Assistant, MQTT, OpenWrt, ONVIF, Frigate, Test]
video: 
image: 'assets/images/posts/sonnette_dahua_vto2211g_wp/sonnette_dahua_vto2211g_wp.jpg'
toc: true
beforetoc: ''
published: false
noindex: false
sitemap:
  changefreq: 'monthly'
  exclude: 'no'
  priority: 0.5
locale: fr_FR
comments: true
sourcelink:
  - https://www.dahuasecurity.com/fr/product/4578280716.html
  - https://www.dahuasecurity.com/cdn/download/usermanual/4578280716/315131/VTO2211G-WP-V1.7.0.4_FR.pdf
  - https://www.dahuasecurity.com/support/developer
---

# Test de la sonnette connectée Dahua VTO2211G-WP avec intégration Home Assistant

La **sonnette connectée Dahua VTO2211G-WP** est une sonnette d'extérieur avec caméra et interphone qui permet de recevoir des appels vidéo sur votre smartphone ou votre serveur domotique. Dans ce test complet, nous allons l'intégrer à **Home Assistant** via **MQTT**, **ONVIF** et **OpenWrt** pour une gestion complète de votre interphone, avec une qualité d'image exceptionnelle et des fonctionnalités avancées de sécurité.

## Pourquoi Choisir la Dahua VTO2211G-WP ?

Cette sonnette se distingue par plusieurs caractéristiques uniques :

- **Construction IP66** : Résistante aux intempéries, poussière et jets d'eau
- **Alimentation PoE** : Simplifie considérablement l'installation
- **Qualité d'image exceptionnelle** : Capteur haute résolution avec vision nocturne avancée
- **Compatibilité ONVIF** : Intégration parfaite avec les systèmes de surveillance modernes
- **Intégration Home Assistant** : Support complet via MQTT et ONVIF

## Caractéristiques Techniques Détaillées

### Spécifications Vidéo

| Paramètre | Valeur |
|-----------|--------|
| Résolution | 2560 × 1920 (5MP) |
| Capteur | CMOS 1/2.7" |
| Format vidéo | H.265+/H.265/H.264+/H.264 |
| FPS | Jusqu'à 25 fps |
| Vision nocturne | IR jusqu'à 20m |
| WDR | 120dB |
| BLC | Supporté |

### Fonctionnalités Audio

- **Audio bidirectionnel** : Communication claire dans les deux sens
- **Compression audio** : G.711a, G.711Mu, G.711, G.726, AAC, PCM
- **MIC intégré** : Haute sensibilité
- **Sortie audio** : Line out avec connecteur approprié

### Connectivité et Alimentation

- **Alimentation** : 
  - PoE (802.3af) : 48V
  - Adaptateur : 12VDC ±25%, 1.5A
  - Consommation : 8W max
- **Connectivité** :
  - Ethernet RJ45 10M/100M
  - Port de sortie audio (Line out)
  - Connecteur micro (MIC)
- **Protocoles réseau** :
  - ONVIF (Profil S, Profil T)
  - RTSP
  - MQTT
  - IPv4

### Dimensions et Caractéristiques Physiques

- **Dimensions** : 170,8 (H) × 121,1 (L) × 80 (P) mm
- **Matériau** : Métal avec revêtement résistant aux UV
- **Indice de protection** : IP66
- **Température de fonctionnement** : -40°C à +60°C
- **Humidité** : 0% à 95% (sans condensation)
- **Poids** : ~1.2 kg

### Fonctionnalités Intelligence Artificielle

- **Détection deviser humaine** : Identification précise des personnes
- **Analyse de l'objet abandonné/disparu** : Sécurité améliorée
- **Traitement Edge** : Analyse locale sans cloud

## Installation Physique Complète

### Matériel Nécessaire

| Équipement | Quantité | Notes |
|-----------|----------|-------|
| Sonnette Dahua VTO2211G-WP | 1 | |
| Cache-murs pour VTO2211 | 1 | Indispensable pour fixation au mur |
| Cache-murs pour VTO5211WA | 1 | Alternative si nécessaire |
| Cache-murs pour VTO2211G-WP | 1 | Spécifique à ce modèle |
| Cache-murs pour VTO2211G-AP | 1 | Pour version intérieure |
| Cache-murs pour VTO3221 | 1 | Si besoin d'adaptateur |
| Cache-murs pour VTO3321 | 1 | Alternative |
| Câble Ethernet Cat5e/Cat6 | 5-10m | Selon distance du routeur |
| Alimentation PoE ou switch PoE | 1 | Ou injecteur PoE |
| Kit de fixation | 1 | Généralement inclus |
| Outils | - | Perceuse, visseuse, multimètre |

### Étapes d'Installation Détaillées

#### 1. Préparation et Planification

**Emplacement idéal :**
- Hauteur : 120-150 cm du sol
- Éviter l'exposition directe au soleil
- Assurer une couverture IR efficace la nuit
- Être à portée du réseau Ethernet

**Vérifications préalables :**
- [ ] Vérifier la couverture réseau Ethernet
- [ ] Tester le câble avant installation
- [ ] Vérifier la compatibilité PoE
- [ ] S'assurer de l'accès aux outils

#### 2. Montage du Cache-Murs

1. **Positionner le cache-murs**
   - Marquer les trous de perçage
   - Vérifier l'alignement horizontal

2. **Perçage et fixation**
   - Percer avec mèche adaptée
   - Insérer les chevilles fournies
   - Visser solidement mais sans forcer excessivement

#### 3. Installation de la Sonnette

1. **Connecter les câbles**
   - Brancher le câble Ethernet
   - Connecter les câbles audio si utilisés
   - Vérifier les connexions

2. **Fixer la sonnette au cache-murs**
   - Aligner avec les supports
   - Visser solidement
   - Vérifier l'alignement

#### 4. Câblage et Alimentation

**Configuration PoE recommandée :**
- Utiliser un switch PoE compatible 802.3af
- Ou un injecteur PoE si pas de switch disponible
- Câble Cat5e minimum pour stabilité

**Alternative alimentation 12V :**
- Utiliser l'adaptateur 12VDC/1.5A fourni
- Vérifier la polarité (+/-)
- S'assurer d'une alimentation stable

### Configuration Réseau Initiale

#### Attribution IP Statique

**Via le routeur OpenWrt :**
1. Accéder à l'interface LuCI (http://192.168.1.1)
2. Aller dans **Réseau > DHCP et DNS**
3. Trouver la MAC address de la sonnette (étiquette)
4. Créer un bail DHCP statique
5. Assigner une IP fixe (ex: 192.168.1.100)

**Ou directement sur la sonnette :**
1. Accéder à l'interface web par défaut
2. Aller dans **Configuration > Réseau**
3. Configurer une IP statique manuellement

#### Ouverture des Ports Pare-feu

**Sur OpenWrt, autoriser les protocoles essentiels :**

```bash
# Autoriser ONVIF (port 8080)
iptables -A INPUT -p tcp --dport 8080 -j ACCEPT

# Autoriser RTSP (port 554)
iptables -A INPUT -p tcp --dport 554 -j ACCEPT

# Autoriser MQTT (port 1883)
iptables -A INPUT -p tcp --dport 1883 -j ACCEPT

# Redémarrer le pare-feu
/etc/init.d/firewall restart
```

**Ou via LuCI :**
1. **Réseau > Pare-feu > Règles de pare-feu**
2. Créer une règle pour chaque port
3. Autoriser le trafic entrant depuis le réseau local

## Intégration Home Assistant Complète

### Configuration ONVIF

**Dans `configuration.yaml` :**

```yaml
# Configuration ONVIF pour la sonnette
onvif:
  - host: 192.168.1.100
    port: 8080
    username: admin
    password: votre_mot_de_passe
    profile: Profile_1
```

**Configuration du flux vidéo ONVIF :**

```yaml
# Flux vidéo principal via ONVIF
camera:
  - platform: onvif
    name: "Sonnette Dahua Principale"
    host: 192.168.1.100
    port: 8080
    username: admin
    password: votre_mot_de_passe
    profile: Profile_1
```

**Configuration du flux secondaire :**

```yaml
# Flux secondaire pour détection
camera:
  - platform: onvif
    name: "Sonnette Dahua Détection"
    host: 192.168.1.100
    port: 8080
    username: admin
    password: votre_mot_de_passe
    profile: Profile_2
```

### Configuration MQTT Avancée

#### Installation et Configuration de Mosquitto

**Sur serveur OpenWrt ou NAS :**

1. **Installation de Mosquitto**
   ```bash
   # Sur Debian/Ubuntu
   sudo apt update
   sudo apt install mosquitto mosquitto-clients
   
   # Sur OpenWrt
   opkg update
   opkg install mosquitto
   ```

2. **Configuration de Mosquitto avec authentification**
   ```bash
   # Créer un utilisateur MQTT
   sudo mosquitto_passwd -c /etc/mosquitto/passwd votre_utilisateur
   ```

   **Fichier `/etc/mosquitto/conf.d/custom.conf` :**
   ```
   listener 1883
   allow_anonymous false
   password_file /etc/mosquitto/passwd
   per_listener_permissions true
   
   # Autoriser l'écriture pour l'écriture MQTT
   acl_file /etc/mosquitto/acl.conf
   ```

   **Fichier `/etc/mosquitto/acl.conf` :**
   ```
   user votre_utilisateur
   topic write dahua/vto2211g/#
   topic read dahua/vto2211g/#
   
   user homeassistant
   topic read dahua/vto2211g/#
   ```

3. **Redémarrer Mosquitto**
   ```bash
   sudo systemctl restart mosquitto
   ```

#### Configuration de la Sonnette Dahua pour MQTT

**Via l'interface web de la sonnette :**

1. **Accéder à l'interface**
   - URL : http://192.168.1.100
   - Identifiants : admin / votre_mot_de_passe

2. **Configurer MQTT**
   - Aller dans **Configuration > Réseau > MQTT**
   - Server : `192.168.1.50` (adresse du broker MQTT)
   - Port : `1883`
   - Client ID : `VTO2211G-WP`
   - Username : `votre_utilisateur`
   - Password : `votre_mot_de_passe`
   - Topic base : `dahua/vto2211g`

3. **Configurer les événements MQTT**
   - **Détection de mouvement** : `dahua/vto2211g/motion`
   - **Appel sonnette** : `dahua/vto2211g/doorbell`
   - **État** : `dahua/vto2211g/state`
   - **Image événement** : `dahua/vto2211g/event_image`

#### Configuration Home Assistant pour MQTT

**Dans `configuration.yaml` :**

```yaml
# Configuration MQTT pour Home Assistant
mqtt:
  broker: 192.168.1.50
  port: 1883
  username: votre_utilisateur
  password: votre_mot_de_passe
  client_id: home-assistant
  keepalive: 60
  protocol: 3.1.1

# Capteurs MQTT pour la sonnette
sensor:
  - platform: mqtt
    name: "Sonnette Dahua - État"
    state_topic: "dahua/vto2211g/state"
    value_template: "{{ value_json.state }}"
    icon: "mdi:doorbell"
  
  - platform: mqtt
    name: "Sonnette Dahua - Température"
    state_topic: "dahua/vto2211g/temperature"
    unit_of_measurement: "°C"
    icon: "mdi:thermometer"

# Binaire capteur pour détection de mouvement
binary_sensor:
  - platform: mqtt
    name: "Sonnette Dahua - Détecteur de Mouvement"
    state_topic: "dahua/vto2211g/motion"
    payload_on: "true"
    payload_off: "false"
    device_class: motion
    icon: "mdi:motion-sensor"

# Entité sonnette pour appels
input_boolean:
  sonnette_dahua_appel:
    name: "Sonnette Dahua - Appel"
    initial: off

# Alarme pour sonnette
alarm_control_panel:
  - platform: mqtt
    name: "Sonnette Dahua"
    state_topic: "dahua/vto2211g/state"
    command_topic: "dahua/vto2211g/command"
    code_arm_required: false
```

### Automatisation Home Assistant Complète

#### Automatisation pour les Appels Sonnette

```yaml
automation:
  # Alerte mobile quand quelqu'un sonne
  - alias: "Sonnette Dahua - Alert Mobile"
    trigger:
      platform: state
      entity_id: input_boolean.sonnette_dahua_appel
      to: "on"
    action:
      - service: notify.mobile_app_votre_phone
        data:
          message: "Quelqu'un sonne à la porte!"
          title: "Sonnette Dahua"
          data:
            image: /local/snapshots/sonnette_dahua.jpg
            push:
              sound:
                name: default
                critical: 1
                volume: 1.0
      - service: camera.snapshot
        data:
          entity_id: camera.sonnette_dahua_principale
          filename: /local/snapshots/sonnette_dahua.jpg
      - service: media_player.select_source
        data:
          entity_id: media_player.audioplayer
          source: "Sonnette"
      - delay: '00:00:05'
      - service: input_boolean.turn_off
        data:
          entity_id: input_boolean.sonnette_dahua_appel

  # Enregistrement automatique lors d'un appel
  - alias: "Sonnette Dahua - Enregistrement Appel"
    trigger:
      platform: state
      entity_id: input_boolean.sonnette_dahua_appel
      to: "on"
    action:
      - service: camera.record
        data:
          entity_id: camera.sonnette_dahua_principale
          filename: /media/recordings/sonnette_dahua_{{ now().strftime('%Y%m%d_%H%M%S') }}.mp4
          duration: 30
      - delay: '00:00:05'
      - service: input_boolean.turn_off
        data:
          entity_id: input_boolean.sonnette_dahua_appel

  # Notification quand mouvement détecté (hors heures de nuit)
  - alias: "Sonnette Dahua - Mouvement Jour"
    trigger:
      platform: state
      entity_id: binary_sensor.sonnette_dahua_detacteur_de_mouvement
      to: "on"
    condition:
      - condition: time
        after: '06:00:00'
        before: '23:00:00'
    action:
      - service: notify.mobile_app_votre_phone
        data:
          message: "Mouvement détecté près de la porte!"
          title: "Sonnette Dahua"
          data:
            image: /local/snapshots/sonnette_dahua_mouvement.jpg
```

#### Automatisation pour la Vision Nocturne

```yaml
# Activation vision nocturne automatique
automation:
  - alias: "Sonnette Dahua - Vision Nocturne Auto"
    trigger:
      platform: numeric_state
      entity_id: sensor.lumiere_exterieure_lux
      below: 10
    condition:
      - condition: sun
        after: sunset
    action:
      - service: input_boolean.turn_on
        data:
          entity_id: input_boolean.vision_nocturne_activee
      - service: notify.mobile_app_votre_phone
        data:
          message: "Mode nocturne activé pour la sonnette"
          title: "Sonnette Dahua"

  # Désactivation vision nocturne automatique
  - alias: "Sonnette Dahua - Fin Vision Nocturne"
    trigger:
      platform: numeric_state
      entity_id: sensor.lumiere_exterieure_lux
      above: 20
    condition:
      - condition: sun
        before: sunrise
    action:
      - service: input_boolean.turn_off
        data:
          entity_id: input_boolean.vision_nocturne_activee

  # Répondre à l'appel sonnette
  - alias: "Sonnette Dahua - Répondre Appel"
    trigger:
      platform: state
      entity_id: input_boolean.sonnette_dahua_appel
      to: "on"
    action:
      - service: mqtt.publish
        data:
          topic: "dahua/vto2211g/command"
          payload: '{"action":"answer_call"}'
      - delay: '00:00:02'
      - service: mqtt.publish
        data:
          topic: "dahua/vto2211g/command"
          payload: '{"action":"open_door"}'
      - delay: '00:00:03'
      - service: mqtt.publish
        data:
          topic: "dahua/vto2211g/command"
          payload: '{"action":"hang_up"}'

  # Notification mensuelle pour mise à jour firmware
  - alias: "Sonnette Dahua - Rappel Mise à Jour Firmware"
    trigger:
      platform: calendar
      event: start
      entity_id: calendar.mise_a_jour_firmware
    action:
      - service: notify.mobile_app_votre_phone
        data:
          message: "Pensez à vérifier les mises à jour firmware de votre sonnette Dahua"
          title: "Sonnette Dahua - Maintenance"

---

## Sources

- [Fiche officielle Dahua VTO2211G-WP](https://www.dahuasecurity.com/fr/product/4578280716.html)
- [Guide d'installation VTO2211G-WP](https://www.dahuasecurity.com/cdn/download/usermanual/4578280716/315131/VTO2211G-WP-V1.7.0.4_FR.pdf)
- [Documentation protocol HTTP Dahua](https://www.dahuasecurity.com/support/developer)
- [Fiche technique Dahua VTO2211G-WP (PDF)](https://www.dahuasecurity.com/cdn/download/product/4578280716/315227/VTO2211G-WP_V1.7_FR.pdf)
- [GitHub haade-administrator/haade.fr](https://github.com/haade-administrator/haade.fr)
