---
guid: 8601
title: 'Mise en place interface zigbee home assistant'
date: '2020-05-31T11:08:54+00:00'
author: Nico
layout: post
---

prérequis

<div class="wp-block-advgb-list">- Avoir homeassistant core min 0.106.0 ou hassio (homeassistant) d’installé
- Connaître le système et la hiérarchie fichier d’homeassistant

</div>créer un dossier nommé packages à la racine des dossiers homeassistant

Crée un fichier nommé zigbee2mqtt.yaml

coller dans ce fichier le code ci-dessous adapté aux version 0.110+ d’homeassistant:

{% highlight yaml %}
docker exec -it zoneminder sh
{% endhighlight %}

{% highlight yaml %}
# Input select for Zigbee2mqtt debug level
input_select:
  zigbee2mqtt_log_level:
    name: Niveau de log
    options:
      - debug
      - info
      - warn
      - error
    initial: info
    icon: mdi:format-list-bulleted

# Input text to input Zigbee2mqtt friendly_name for scripts
input_text:
  zigbee2mqtt_old_name:
    name: Ancien nom
  zigbee2mqtt_new_name:
    name: Nouveau nom
  zigbee2mqtt_remove:
    name: Device à retirer

# Scripts for renaming & removing devices
script:
  zigbee2mqtt_rename:
    alias: Renommer le device
    sequence:
      service: mqtt.publish
      data_template:
        topic: zigbee2mqtt/bridge/config/rename
        payload_template: >-
          {
            "old": "{{ states.input_text.zigbee2mqtt_old_name.state | string }}",
            "new": "{{ states.input_text.zigbee2mqtt_new_name.state | string }}"
          }
  zigbee2mqtt_remove:
    alias: Retirer le device
    sequence:
      service: mqtt.publish
      data_template:
        topic: zigbee2mqtt/bridge/config/remove
        payload_template: "{{ states.input_text.zigbee2mqtt_remove.state | string }}"

# Timer for joining time remaining (120 sec = 2 min)
timer:
  zigbee_permit_join:
    name: Temps restant
    duration: 120

sensor:
  # Sensor for monitoring the bridge state
  - platform: mqtt
    name: Bridge state
    state_topic: "zigbee2mqtt/bridge/state"
    icon: mdi:router-wireless
  # Sensor for Showing the Zigbee2mqtt Version
  - platform: mqtt
    name: Zigbee2mqtt Version
    state_topic: "zigbee2mqtt/bridge/config"
    value_template: "{{ value_json.version }}"
    icon: mdi:zigbee
  # Sensor for Showing the Coordinator Version
  - platform: mqtt
    name: Coordinator Version
    state_topic: "zigbee2mqtt/bridge/config"
    value_template: "{{ value_json.coordinator }}"
    icon: mdi:chip
  - platform: mqtt
    name: Zigbee2mqtt Networkmap
    # if you change base_topic of Zigbee2mqtt, change state_topic accordingly
    state_topic: zigbee2mqtt/bridge/networkmap/raw
    value_template: >-
      {{ now().strftime('%Y-%m-%d %H:%M:%S') }}
    # again, if you change base_topic of Zigbee2mqtt, change json_attributes_topic accordingly
    json_attributes_topic: zigbee2mqtt/bridge/networkmap/raw

# Switch for enabling joining
switch:
  - platform: mqtt
    name: "Zigbee2mqtt Main join"
    state_topic: "zigbee2mqtt/bridge/config/permit_join"
    command_topic: "zigbee2mqtt/bridge/config/permit_join"
    payload_on: "true"
    payload_off: "false"

automation:
  # Automation for sending MQTT message on input select change
  - alias: Zigbee2mqtt Log Level
    initial_state: "on"
    trigger:
      platform: state
      entity_id: input_select.zigbee2mqtt_log_level
    action:
      - service: mqtt.publish
        data:
          payload_template: "{{ states('input_select.zigbee2mqtt_log_level') }}"
          topic: zigbee2mqtt/bridge/config/log_level
  # Automation to start timer when enable join is turned on
  - id: zigbee_join_enabled
    alias: Zigbee Join Enabled
    trigger:
      platform: state
      entity_id: switch.zigbee2mqtt_main_join
      to: "on"
    action:
      service: timer.start
      entity_id: timer.zigbee_permit_join
  # Automation to stop timer when switch turned off and turn off switch when timer finished
  - id: zigbee_join_disabled
    alias: Zigbee Join Disabled
    trigger:
      - platform: event
        event_type: timer.finished
        event_data:
          entity_id: timer.zigbee_permit_join
      - platform: state
        entity_id: switch.zigbee2mqtt_main_join
        to: "off"
    action:
      - service: timer.cancel
        data:
          entity_id: timer.zigbee_permit_join
      - service: switch.turn_off
        entity_id: switch.zigbee2mqtt_main_join
  - id: "zigbee2mqtt_create_notification_on_successfull_interview"
    trigger:
      platform: mqtt
      topic: 'zigbee2mqtt/bridge/log'
    condition:
      condition: template
      value_template: '{{trigger.payload_json.type == "pairing" and trigger.payload_json.message == "interview_successful"}}'
    action:
      - service: persistent_notification.create
        data_template:
          title: Device joined the zigbee2mqtt network
          message: "Name: {{trigger.payload_json.meta.friendly_name}},
                    Vendor: {{trigger.payload_json.meta.vendor}},
                    Description: {{trigger.payload_json.meta.description}}"

{% endhighlight %}


Ensuite intégrer la redirection du package dans le fichier configuration.yaml

{% highlight yaml %}
homeassistant:
  customize: !include customize.yaml
  packages:
    zigbee2mqtt: !include packages/zigbee2mqtt.yaml
{% endhighlight %}


Intégration d’un onglet zigbee dans lovelace après title: …


{% highlight yaml %}
  - badges:
      - entity: sensor.bridge_state
      - entity: sensor.zigbee2mqtt_version
      - entity: switch.zigbee2mqtt_main_join
    cards:
      - cards:
          - entities:
              - input_select.zigbee2mqtt_log_level
              - switch.zigbee2mqtt_main_join
              - timer.zigbee_permit_join
            show_header_toggle: false
            title: Paramètres généraux
            type: entities
        type: vertical-stack
      - cards:
          - entity: sensor.zigbee2mqtt_networkmap
            type: 'custom:zigbee2mqtt-networkmap'
        type: vertical-stack
      - cards:
          - entities:
              - input_text.zigbee2mqtt_old_name
              - input_text.zigbee2mqtt_new_name
              - script.zigbee2mqtt_rename
              - type: divider
              - input_text.zigbee2mqtt_remove
              - script.zigbee2mqtt_remove
            show_header_toggle: false
            title: Boite à outils
            type: entities
        type: vertical-stack
    icon: 'mdi:zigbee'
    path: mqtt
    title: Mqtt
{% endhighlight %}


Intégrer l’affichage de la carte [zigbee2mqtt network map](https://github.com/azuwis/zigbee2mqtt-networkmap/) dans hassio, il y a deux façons de faire soit par l’intégration du playstore communautaire HACS que je conseil fortement soit directement comme suit: premièrement collez ce code dans configuration.yaml dans la sous catégorie sensor:

{% highlight yaml %}
sensor:
  - platform: mqtt
    name: Zigbee2mqtt Networkmap
    # if you change base_topic of Zigbee2mqtt, change state_topic accordingly
    state_topic: zigbee2mqtt/bridge/networkmap/raw
    value_template: >-
      {{ now().strftime('%Y-%m-%d %H:%M:%S') }}
    # again, if you change base_topic of Zigbee2mqtt, change json_attributes_topic accordingly
    json_attributes_topic: zigbee2mqtt/bridge/networkmap/raw
{% endhighlight %}


Téléchargez [zigbee2mqtt-networkmap.js](https://github.com/azuwis/zigbee2mqtt-networkmap/releases/download/v0.6.0/zigbee2mqtt-networkmap.js)

Collez ce fichier dans le dossier `www/`

Collez ce lien dans le fichier configuration.yaml sous lovelace: ( cette étape n’est pas à suivre si intégration par HACS )

{% highlight yaml %}
lovelace:
  mode: yaml
  resources:
    - url: /local/zigbee2mqtt-networkmap.js?v=0.6.0
      type: module
{% endhighlight %}


Voilà si tout s’est bien passé vous allez avoir une interface complète pour gérer votre réseau et module Zigbee

<style class="advgb-styles-renderer">.wp-block-advgb-list ul.advgblist-ef196ffb-8bc2-447f-8c60-42d9de21b213 > li{font-size:1em;}.wp-block-advgb-list ul.advgblist-ef196ffb-8bc2-447f-8c60-42d9de21b213 > li{padding-left:22px;margin-left:0;}.wp-block-advgb-list ul.advgblist-ef196ffb-8bc2-447f-8c60-42d9de21b213 > li:before{font-size:1.25em;color:#ff6900;line-height:18px;margin:2px;padding:2px;margin-left:-24px}</style>
