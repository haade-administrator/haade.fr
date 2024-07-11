---
guid: 82
title: "Built a Smartphone environment in HA with UI Minimalist"
description: "simple and quick tutorial to set up a dashboard under Home Assistant design for phone using UI Lovelace Minimalist"
ref: "UI Lovelace Minimalist"
layout: post
authors: Nico
date: 2023-10-08 16:06
last_modified_at: 
categories: [Automation, Haade-lab, Home-Assistant]
tags: []
image: 'tutos-tableaux-themes-telephone-home-assistant-ui-lovelace-minimalist.png'
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
  - https://ui-lovelace-minimalist.github.io/UI/
  - https://github.com/UI-Lovelace-Minimalist/UI
  - https://community.home-assistant.io/t/lovelace-ui-minimalist/322687
  - https://ui-lovelace-minimalist.netlify.app/index
  - https://github.com/benmac7/Home-Assistant
---

As everyone knows, Home-Assistant is, in my opinion, one of the best home automation software of the moment. Well, that's what I think. In this tutorial I will show you how to customize a dashboard with an ultra-designed theme called ... **UI Lovelace Minimalist**.

So why did I choose UI Lovelace Minimalist over [Mushroom Card and Theme](https://github.com/piitaya/lovelace-mushroom){: target="_blank"}. Well simply because **Ui Minimalist offers more cards and chips** than Mushroom.

**Mushroom's goal is not to provide a personalized map for in-depth customization.**

> Initially I wanted to settle for Mushroom because it was very practical, even if it was not for the installation, but I quickly encountered problems once I wanted to personalize the cards.

> Then comes everything else

## Prerequisites
- Hacs installed
- Text editor (file editor or VSC editor for example)

## Installation UI Lovelace Minimalist

Nothing more [simple, just read the official tutorial](https://ui-lovelace-minimalist.github.io/UI/setup/installation/#install-integration){: target="_blank"}

First of all, add this line if it is not already in the **configuration.yaml** file so the themes will be stored in the themes/ subfolder.

{% highlight yaml %}
# personnalised theme
frontend:
  themes: !include_dir_merge_named themes
{% endhighlight %}

### HACS
{{ page.ref }} is available in HACS (Home Assistant Community Store).

1. Install HACS if you don't already have it
2. Open HACS in Home Assistant
3. Go to the “Integrations” section
4. Click the button with the “+” icon
5. Search for "{{ page.ref }}

Once installed **Restart your Home Assistant instance**

**Then click on the button below** to add the {{ page.ref }} integration. If you don't know yet {{ page.ref }} is not a simple theme but rather a theme/module combo

{% include homeassistantlink.html integration="ui_lovelace_minimalist" %}

And configure {{ page.ref }}

I opted for a semi-manual installation **additional integrations** because I regularly encountered non-recognition error messages

**Integration required**
- [browser_mod](https://github.com/thomasloven/hass-**browser_mod**){: target="_blank"} by Thomas Loven **(attention! activated in two steps see the user manual facility)**

**Lovelace Resources Required**
- [button card](https://github.com/custom-cards/button-card){: target="_blank"} by RomRider
- [card-mod](https://github.com/thomasloven/lovelace-card-mod){: target="_blank"} by Thomas Loven
- [mini-graph card](https://github.com/kalkih/mini-graph-card){: target="_blank"} by Karl Kihlström
- [Mini Media Player](https://github.com/kalkih/mini-media-player){: target="_blank"} by Karl Kihlström
- [My Cards Pack](https://github.com/AnthonMS/my-cards){: target="_blank"} by AnthonMS** (requires installing an additional HACS directory)
- [Light Entity Card](https://github.com/ljmerza/light-entity-card){: target="_blank"} by Leonardo Merza
- [auto-entities](https://github.com/thomasloven/lovelace-auto-entities){: target="_blank"} by Thomas Loven

PS: After having encountered problems with the installation of automated add-ons, I advise you to install them manually in Hacs. I constantly had errors of modules not installed from one medium to another.

### Themes provided by Minimalist UI

**A strong point of this integration** are the themes provided with minimalist UI, no less than **4 themes**, *you will have to select one by default*, if you do not do so the Minimalist card display will not be done correctly.

1. minimalist-desktop (for use in an office environment)
2. minimalist-ios-tapbar (for an Ios environment with **only the "views" menu** at the footer)
3. minimalist-mobile (for mobile environment without **no menu**)
4. minimalist-mobile-tapbar (for mobile environment with only the “views” menu)

## configure custom cards

To configure a custom card that you would like to add, nothing could be simpler, click directly on the link below

{% include homeassistantlink.html configure_integration="ui_lovelace_minimalist" %}

then click on configure and at the bottom of the page **you can add the necessary customs cards**.


{% picture posts/{{ page.guid }}/ui-minimalist-custom-card.png --alt custom card ui minimalist settings for tablet and smartphone --img width="940" height="680" %}

## Where is the file to configure:

The file at ui-lovelace.yaml is the file to modify to configure the view you will find it in:
**config > ui_lovelace_minimalist > dashboard**

{% highlight shell %}
config
└── ui_lovelace_minimalist
    ├── custom_cards
    └── dashboard
        └── ui-lovelace.yaml
{% endhighlight %}

## Tablet display

{% picture posts/{{ page.guid }}/creation-affichage-tablette-telephone-ui-minimalist.png --alt minimalist ui display creation for tablet and smartphone --img width="940" height="593" %}

the display on tablet is done on 2 vertical columns, to do this you must create a card with a vertical-stack type display for each column. By default, if you do not include a vertical stack, the display will be in 3 columns.

## Result on smartphone

{% picture posts/{{ page.guid }}/rendu-ui-minimalist-smartphone-white.png --alt minimalist smartphone ui rendering for tablet and smartphone --img width="280" height="607" %}

**Example of a vertical column:**

{% highlight yaml %}
    cards:
      - type: vertical-stack
        cards:
          - type: horizontal-stack
            cards:
            ...
          - type: horizontal-stack
            cards:
            ...           
{% endhighlight %}

**Example for 2 vertical columns:**

{% highlight yaml %}
    cards:
      - type: vertical-stack
        cards:
          - type: horizontal-stack
            cards:
            ...
          - type: horizontal-stack
            cards:
            ...     
      - type: vertical-stack
        cards:
          - type: horizontal-stack
            cards:
            ...
          - type: horizontal-stack
            cards:
            ...         
{% endhighlight %}

### 1st step configuration of headers

{% picture posts/{{ page.guid }}/configuration-chips-tablette-telephone-ui-minimalist.png --alt configuration of headers in ui minimalist for tablet and smartphone --img width="940" height="593" %}

**You must:**
1. the go back button: [chips back button](https://ui-lovelace-minimalist.github.io/UI/usage/chips/chip_back/){: target="_blank"}
2. the temperature button: [chips temperature button](https://ui-lovelace-minimalist.github.io/UI/usage/chips/chip_temperature/){: target="_blank"}
3. the alarm button: [chips alarm button](https://ui-lovelace-minimalist.github.io/UI/usage/chips/chip_alarm/){: target="_blank"}

**the code below allows you to create spaces between the content**

{% highlight yaml %}
              - type: custom:button-card
                template: edge
{% endhighlight %}

**Embedded code:**

{% highlight yaml %}
    cards:
      - type: vertical-stack
        cards:
          - type: horizontal-stack
            cards:
              - type: "custom:button-card"
                template: chip_back
                variables:
                  ulm_chip_back_path: /profile
              - type: custom:button-card
                template: chip_temperature
                variables:
                  ulm_chip_temperature_inside: sensor.une_sonde_thermometre_interieur
                  ulm_chip_temperature_outside: sensor.une_sonde_thermometre_exterieur_temperature
                  ulm_chip_temperature_weather: weather.meteo_maison
              - type: custom:button-card
                template: edge
              - type: "custom:button-card"
                template: chip_alarm
                entity: alarm_control_panel.ton_alarme
              - type: custom:button-card
                template: edge
          - type: horizontal-stack
            cards:
            ...     
      - type: vertical-stack
        cards:
          - type: horizontal-stack
            cards:
            ...
          - type: horizontal-stack
            cards:
            ...         
{% endhighlight %}

### 2nd step configuration of titles

{% picture posts/{{ page.guid }}/configuration-titres-tablette-telephone-ui-minimalist.png --alt configuring titles in ui minimalist for tablet and smartphone --img width="940" height="593" %}

repeat the code as many times as you need to integrate a title, go to a horizontal display to put this title under the headers.

{% highlight yaml %}
          - type: horizontal-stack
            cards:
              - type: "custom:button-card"
                template: card_title
                name: Météo
                label: "La météo du Village"
              - type: custom:button-card
                template: edge
              - type: "custom:button-card"
                color_type: blank-card
{% endhighlight %}

**Embed Code**

{% highlight yaml %}
    cards:
      - type: vertical-stack
        cards:
          - type: horizontal-stack
            cards:
              - type: "custom:button-card"
                template: chip_back
                variables:
                  ulm_chip_back_path: /profile
              - type: custom:button-card
                template: chip_temperature
                variables:
                  ulm_chip_temperature_inside: sensor.une_sonde_thermometre_interieur
                  ulm_chip_temperature_outside: sensor.une_sonde_thermometre_exterieur_temperature
                  ulm_chip_temperature_weather: weather.meteo_maison
              - type: custom:button-card
                template: edge
              - type: "custom:button-card"
                template: chip_alarm
                entity: alarm_control_panel.ton_alarme
              - type: custom:button-card
                template: edge

          - type: horizontal-stack
            cards:
              - type: "custom:button-card"
                template: card_title
                name: Météo
                label: "La météo du Village"
              - type: custom:button-card
                template: edge
              - type: "custom:button-card"
                color_type: blank-card

          - type: horizontal-stack
            cards:
            ...     
      - type: vertical-stack
        cards:
          - type: horizontal-stack
            cards:
            ...
          - type: horizontal-stack
            cards:
            ...         
{% endhighlight %}

### 3rd step a weather bar

{% picture posts/{{ page.guid }}/configuration-carte-meteo-tablette-telephone-ui-minimalist.png --alt configuration of a weather map in ui minimalist for tablet and smartphone --img width="940" height="593" %}

There are several, I chose the simplest [the weather card](https://ui-lovelace-minimalist.github.io/UI/usage/cards/card_weather/#description){: target="_blank"}

**but there are others:**
1. [weather card ulm](https://ui-lovelace-minimalist.github.io/UI/usage/cards/card_weather_ulm/){: target="_blank"}
2. [in the custom cards, paddy's welcome card](https://ui-lovelace-minimalist.github.io/UI/usage/custom_cards/custom_card_paddy_welcome/){: target="_blank"}

{% highlight yaml %}
          - type: horizontal-stack
            cards:
              - type: "custom:button-card"
                template: card_weather
                entity: weather.ta_meteo
                variables:
                  ulm_card_weather_name: " "
                  ulm_card_weather_primary_info:
                    - wind_speed
                    - precipitation_probability
                  ulm_card_weather_backdrop:
                    fade: true
                  ulm_card_weather_custom:
                    - temp: sensor.temperature
  {% endhighlight %}

**Embed Code:**

{% highlight yaml %}
    cards:
      - type: vertical-stack
        cards:
          - type: horizontal-stack
            cards:
              - type: "custom:button-card"
                template: chip_back
                variables:
                  ulm_chip_back_path: /profile
              - type: custom:button-card
                template: chip_temperature
                variables:
                  ulm_chip_temperature_inside: sensor.une_sonde_thermometre_interieur
                  ulm_chip_temperature_outside: sensor.une_sonde_thermometre_exterieur_temperature
                  ulm_chip_temperature_weather: weather.meteo_maison
              - type: custom:button-card
                template: edge
              - type: "custom:button-card"
                template: chip_alarm
                entity: alarm_control_panel.ton_alarme
              - type: custom:button-card
                template: edge

          - type: horizontal-stack
            cards:
              - type: "custom:button-card"
                template: card_title
                name: Météo
                label: "La météo du Village"
              - type: custom:button-card
                template: edge
              - type: "custom:button-card"
                color_type: blank-card

          - type: horizontal-stack
            cards:
              - type: "custom:button-card"
                template: card_weather
                entity: weather.ta_meteo
                variables:
                  ulm_card_weather_name: " "
                  ulm_card_weather_primary_info:
                    - wind_speed
                    - precipitation_probability
                  ulm_card_weather_backdrop:
                    fade: true
                  ulm_card_weather_custom:
                    - temp: sensor.temperature
                         
      - type: vertical-stack
        cards:
          - type: horizontal-stack
            cards:
            ...
          - type: horizontal-stack
            cards:
            ...         
{% endhighlight %}

### 4th step presence

{% picture posts/{{ page.guid }}/configuration-presence-tablette-telephone-ui-minimalist.png --alt configuration of a presence card with battery charge monitoring and geolocation in minimalist ui for tablet and smartphone --img width="940" height="593" %}

One of the reasons that pushed me to choose between ui minimalist and mushroom is indeed the presence card, thanks to a minimalist custom card it is possible to easily integrate tracking, battery charging and more into a card. other options, something that Mushroom cannot do, at least without having to code the card itself.

you will need [the Person_info custom card](https://ui-lovelace-minimalist.github.io/UI/usage/custom_cards/custom_card_person_info/){: target="_blank"}

{% highlight yaml %}
          - type: horizontal-stack
            cards:
              - type: custom:button-card
                template: edge

              - type: "custom:button-card"
                template: card_person_info
                variables:
                  ulm_card_person_entity: person.john_doe
                  ulm_card_person_use_entity_picture: true
                  ulm_card_person_zone1: zone.home
                  ulm_card_person_zone2: zone.travail
                  ulm_multiline: true
                  ulm_card_person_battery_entity: sensor.john_doe_niveau_batterie
                  ulm_card_person_battery_state_entity: sensor.john_doe_etat_batterie
{% endhighlight %}

**Embed code:**

{% highlight yaml %}
    cards:
      - type: vertical-stack
        cards:
          - type: horizontal-stack
            cards:
              - type: "custom:button-card"
                template: chip_back
                variables:
                  ulm_chip_back_path: /profile
              - type: custom:button-card
                template: chip_temperature
                variables:
                  ulm_chip_temperature_inside: sensor.une_sonde_thermometre_interieur
                  ulm_chip_temperature_outside: sensor.une_sonde_thermometre_exterieur_temperature
                  ulm_chip_temperature_weather: weather.meteo_maison
              - type: custom:button-card
                template: edge
              - type: "custom:button-card"
                template: chip_alarm
                entity: alarm_control_panel.ton_alarme
              - type: custom:button-card
                template: edge

          - type: horizontal-stack
            cards:
              - type: "custom:button-card"
                template: card_title
                name: Météo
                label: "La météo du Village"
              - type: custom:button-card
                template: edge
              - type: "custom:button-card"
                color_type: blank-card

          - type: horizontal-stack
            cards:
              - type: "custom:button-card"
                template: card_weather
                entity: weather.ta_meteo
                variables:
                  ulm_card_weather_name: " "
                  ulm_card_weather_primary_info:
                    - wind_speed
                    - precipitation_probability
                  ulm_card_weather_backdrop:
                    fade: true
                  ulm_card_weather_custom:
                    - temp: sensor.temperature

          - type: horizontal-stack
            cards:
              - type: custom:button-card
                template: edge

              - type: "custom:button-card"
                template: card_person_info
                variables:
                  ulm_card_person_entity: person.john_doe
                  ulm_card_person_use_entity_picture: true
                  ulm_card_person_zone1: zone.home
                  ulm_card_person_zone2: zone.travail
                  ulm_multiline: true
                  ulm_card_person_battery_entity: sensor.john_doe_niveau_batterie
                  ulm_card_person_battery_state_entity: sensor.john_doe_etat_batterie

      - type: vertical-stack
        cards:
          - type: horizontal-stack
            cards:
            ...
          - type: horizontal-stack
            cards:
            ...         
{% endhighlight %}

### 5th step creation of opening orders

{% picture posts/{{ page.guid }}/configuration-cover-tablette-telephone-ui-minimalist.png --alt configuration of a shutter and garage cover card in minimalist ui for tablet and smartphone --img width="940" height="593" %}

you will need the [card cover](https://ui-lovelace-minimalist.github.io/UI/usage/cards/card_cover/){: target="_blank"}

{% highlight yaml %}
          - type: horizontal-stack
            cards:
              - type: "custom:button-card"
                template: card_cover
                entity: cover.volets
                variables:
                  ulm_card_cover_enable_controls: true

              - type: "custom:button-card"
                template: card_cover
                entity: cover.garage
                variables:
                  ulm_card_cover_enable_controls: true
                  ulm_card_tap_action: "none"
                  ulm_icon_double_tap_action: "toggle"
                  ulm_name_tap_action: "more-info"
{% endhighlight %}

**Embed code:**

{% highlight yaml %}
    cards:
      - type: vertical-stack
        cards:
          - type: horizontal-stack
            cards:
              - type: "custom:button-card"
                template: chip_back
                variables:
                  ulm_chip_back_path: /profile
              - type: custom:button-card
                template: chip_temperature
                variables:
                  ulm_chip_temperature_inside: sensor.une_sonde_thermometre_interieur
                  ulm_chip_temperature_outside: sensor.une_sonde_thermometre_exterieur_temperature
                  ulm_chip_temperature_weather: weather.meteo_maison
              - type: custom:button-card
                template: edge
              - type: "custom:button-card"
                template: chip_alarm
                entity: alarm_control_panel.ton_alarme
              - type: custom:button-card
                template: edge

          - type: horizontal-stack
            cards:
              - type: "custom:button-card"
                template: card_title
                name: Météo
                label: "La météo du Village"
              - type: custom:button-card
                template: edge
              - type: "custom:button-card"
                color_type: blank-card

          - type: horizontal-stack
            cards:
              - type: "custom:button-card"
                template: card_weather
                entity: weather.ta_meteo
                variables:
                  ulm_card_weather_name: " "
                  ulm_card_weather_primary_info:
                    - wind_speed
                    - precipitation_probability
                  ulm_card_weather_backdrop:
                    fade: true
                  ulm_card_weather_custom:
                    - temp: sensor.temperature

          - type: horizontal-stack
            cards:
              - type: custom:button-card
                template: edge

              - type: "custom:button-card"
                template: card_person_info
                variables:
                  ulm_card_person_entity: person.john_doe
                  ulm_card_person_use_entity_picture: true
                  ulm_card_person_zone1: zone.home
                  ulm_card_person_zone2: zone.travail
                  ulm_multiline: true
                  ulm_card_person_battery_entity: sensor.john_doe_niveau_batterie
                  ulm_card_person_battery_state_entity: sensor.john_doe_etat_batterie

          - type: horizontal-stack
            cards:
              - type: "custom:button-card"
                template: card_cover
                entity: cover.volets
                variables:
                  ulm_card_cover_enable_controls: true

              - type: "custom:button-card"
                template: card_cover
                entity: cover.garage
                variables:
                  ulm_card_cover_enable_controls: true
                  ulm_card_tap_action: "none"
                  ulm_icon_double_tap_action: "toggle"
                  ulm_name_tap_action: "more-info"

      - type: vertical-stack
        cards:
          - type: horizontal-stack
            cards:
            ...
          - type: horizontal-stack
            cards:
            ...         
{% endhighlight %}

## Let's move on to the Second column

to create the second column you have to start again on a new vertical-stack

{% highlight yaml %}
      - type: vertical-stack
        cards:
          - type: horizontal-stack
            cards:
{% endhighlight %}  

{% picture posts/{{ page.guid }}/configuration-2rd-column-tablette-telephone-ui-minimalist.png --alt configuration of a second column in ui minimalist for tablet and smartphone --img width="940" height="593" %}

Dans la seconde colonne on aura:
1. One [carte titre](personnaliser-affichage-tablette-home-assistant#2ème-étape-configuration-des-titres)
2. 4 x [Room Card](https://ui-lovelace-minimalist.github.io/UI/usage/cards/card_room/){: target="_blank"}
3. One [carte light](https://ui-lovelace-minimalist.github.io/UI/usage/cards/card_light/){: target="_blank"}

### 1. Setting up the title
{% highlight yaml %}
      - type: vertical-stack # création seconde colonne
        cards:
          - type: horizontal-stack # mise en place du titre
            cards:
              - type: "custom:button-card"
                template: card_title
                name: Lumières
                label: "Contrôle les lumières par pièce"
{% endhighlight %}  

### 2. Setting up the Room Card

{% highlight yaml %}
          - type: horizontal-stack # mise en place de la roomcard
            cards:
              - type: "custom:button-card"
                template:
                  - card_room
                  - red_no_state
                name: Cuisine
                entity: light.all_cuisine # création d'un entité regroupant toutes les lumières de la cuisine
                icon: mdi:countertop
                tap_action:
                  action: navigate
                  navigation_path: "/ui-lovelace-minimalist/bathroom"
                variables:
                  label_use_temperature: false
                  label_use_brightness: true
                  entity_1:
                    entity_id: light.all_cuisine
                    templates:
                      - yellow_on
                    tap_action:
                      action: toggle
                  entity_2:
                    entity_id: binary_sensor.toutes_portes_cuisine
                    templates:
                      - blue_on
                    tap_action:
                      action: none
{% endhighlight %} 

### 3. Adding a light map

{% highlight yaml %}
          - type: horizontal-stack
            cards:
              - type: "custom:button-card"
                template: card_light_slider_horizontal
                entity: light.lumiere_ambiance_salon
                variables:
                  ulm_card_light_enable_slider: true
                  ulm_card_light_enable_color: true
                  ulm_card_light_force_background_color: true
{% endhighlight %} 

### Minimalist UI dashboard example

Here you will be able to realize that the Minimalist UI theme is relatively powerful to find tips you can follow the thread: [Minimalit UI Community](https://community.home-assistant.io/t/lovelace-ui-minimalist/322687/2418){: target="_blank"}

{% picture posts/{{ page.guid }}/exemple-integration-minimalist-ui.png --alt example of a configurable dashboard with minimalist UI --img width="940" height="407" %}

{% picture posts/{{ page.guid }}/exemple-integration-minimalist-ui-2.png --alt example of a configurable dashboard with minimalist UI --img width="940" height="407" %}


## Adaptive View Bonus

{%- include alert.html type="warning" text="the <strong>state-switch</strong> module must be installed in <strong>version 1.9.3</strong>, otherwise the adaptive popup will not work correctly, to find out more you can consult the post which talks about it" link="https://community.home-assistant.io/t/lovelace-ui-minimalist/322687/2418" textlink="lovelace Ui Minimalist Community" %}

### Folder architecture

{% highlight shell %}
config
└── ui_lovelace_minimalist
    ├── custom_cards
    └── dashboard
        └── ui-lovelace.yaml
        └── adaptive-dash
            └── adaptive-ui.yaml
            └── popup
                └── popup.yaml
            └── views
                └── livingroom.yaml
                └── main.yaml
{% endhighlight %}

### Info {{ page.ref }} Adaptive

The adaptive view is an extra bonus especially dedicated to tablet displays. You will need to install two additional modules, you just need to consult the official instructions which are very detailed.

[adaptive view installation instructions](https://ui-lovelace-minimalist.github.io/UI/setup/adaptive_dash/#add-adaptive-dashboard){: target="_blank"}

![Capturing an image of minimalist.ui's adaptive display]({{ site.baseurl}}/assets/images/posts/{{ page.guid }}/minimalist_adaptive_dash.webp{{ cachebuster }}){: width="480" height="270" class="lazyload pictaninpost"}

[example adaptive dashboard code by Basbruss](https://github.com/basbruss/Minimalist-Dashboards){: target="_blank"}

{%- include alert.html type="info" text="Currently minimalist UI adaptive supports the following device types: <strong>lights, mediaplayers, thermostats, sensors</strong>" %}

### Activation

Activation of this view is done in the module configuration

{% picture posts/{{ page.guid }}/hacs_adaptive_dashboard.png --alt setting adaptive view in ui minimalist for tablet and smartphone --img width="400" height="622" %}

### to start: 3 files to modify

#### configuration.yaml

add an input_select to the names you choose

{% highlight yaml %}
# Minimalist UI adaptative dashboard
input_select:
  adaptive_dashboard:
    name: Select popup/view
    options:
      - light 1
      - light 2
      - mediaplayer 1
      - mediaplayer 2
      - climate 1
      - climate 2
      - power 1
      - power 2
      - livingroom
{% endhighlight %} 

then it will be necessary to adapt the generated codes **main.yaml, popup.yaml**

**for me the main.yaml gives this result:**

{% highlight yaml %}
---
type: "custom:layout-card"
layout_type: "custom:grid-layout"
layout:
  # Tablet portrait
  grid-template-columns: "1fr 1fr 1fr 1fr 1fr 1fr"
  grid-template-areas: |
    "text text text weather weather weather"
    "welcome welcome welcome welcome welcome welcome"
    "title1 title1 title1 title1 title1 title1"
    "card1 card1 card2 card2 card3 card3"
    "title2 title2 title2 title2 title2 title2"
    "card4 card4 card5 card5 card6 card6"
  mediaquery:
    # Mobile
    "(max-width: 800px)":
      grid-template-columns: "1fr 1fr"
      grid-template-areas: |
        "welcome welcome"
        "person person"
        "title1 title1"
        "card1 card2"
        "card3 card4"
        "title2 title2"
        "card5 card6"
        "card7 card8"
view_layout:
  grid-area: "main"
cards:
  - view_layout:
      grid-area: "text"
    type: "custom:button-card"
    template: "card_title"
    name: "Bienvenue Chez Nous"
    label: "Estamos Locos"

  - view_layout:
      grid-area: "weather"
    type: "custom:button-card"
    template: card_weather
    entity: weather.maison
    variables:
      ulm_card_weather_name: "Meteo Maison"
      ulm_card_weather_backdrop:
        fade: true
      ulm_card_weather_custom:
        - temp: sensor.netatmo_exterieur_temperature
    label: "grid-area: weather"

  - view_layout:
      grid-area: "welcome"
    type: "custom:button-card"
    template: "card_welcome_scenes"
    #triggers_update: input_boolean.<Your_boolean>
    #entity: input_boolean.<Your_boolean>
    variables:
      #  ulm_card_welcome_scenes_collapse: input_boolean.collapse_card
      ulm_weather: "weather.maison"
      entity_1:
        entity_id: "person.rodriguez_nicolas"
        name: "Nicolas" #OPTIONAL
        color: "blue"
      entity_2:
        entity_id: "person.audrey"
        name: "Audrey" #OPTIONAL
        color: "red"
      entity_3:
        entity_id: "person.leane"
        name: "Léane" #OPTIONAL
        color: "green"
      entity_4:
        entity_id: "person.lola"
        name: "Lola" #OPTIONAL
        color: "purple"

  - view_layout:
      grid-area: "title1"
    type: "custom:button-card"
    template: "card_title"
    name: "Contrôle la maison"
    label: "tu Esta"

  - view_layout:
      grid-area: "card1"
    type: "custom:button-card"
    template: card_light
    label: "grid-area: card1"
    entity: light.lumiere_ambiance_salon
    variables:
      ulm_icon_tap_action: "adaptive"
      ulm_card_light_enable_slider: true
      ulm_card_light_enable_color: true
      ulm_card_light_enable_popup: true
      ulm_input_select_option: light 1
      ulm_input_select: input_select.adaptive_dashboard

  - view_layout:
      grid-area: "card2"
    type: "custom:button-card"
    template: card_thermostat
    label: "grid-area: card2"
    entity: climate.bureau_ac
    variables:
      ulm_icon_tap_action: "adaptive"
      ulm_card_thermostat_enable_collapse: true
      ulm_card_thermostat_enable_controls: true
      ulm_card_thermostat_enable_hvac_modes: true
      ulm_card_thermostat_enable_popup: true
      ulm_input_select_option: climate 1
      ulm_input_select: input_select.adaptive_dashboard

  - view_layout:
      grid-area: "card3"
    type: "custom:button-card"
    template: card_media_player
    entity: media_player.spotify_nicoxygen
    label: "grid-area: card3"
    variables:
      ulm_icon_tap_action: "adaptive"
      ulm_card_media_player_name: Spotify
      ulm_card_media_player_enable_popup: true
      ulm_card_media_player_enable_controls: true
      ulm_card_media_player_enable_art: true
      ulm_card_media_player_enable_volume_slider: true
      ulm_input_select_option: mediaplayer 1
      ulm_input_select: input_select.adaptive_dashboard

{% endhighlight %} 

**and the popup.yaml**

{% highlight yaml %}
---
type: "custom:state-switch"
view_layout:
  grid-area: "popup"
  show:
    # only show when screen-width is larger than 1100px
    mediaquery: "(min-width: 810px)"
# add your input_select
entity: input_select.adaptive_dashboard
default: "default"
transition: "slide-down"
transition_time: 500
# options set in the input_select
states:
  #Devices
  ##  Lights
  light 1: &popup_light
    type: "custom:button-card"
    template: "popup_light_brightness"
    entity: light.lumiere_ambiance_salon

  light 2:
    <<: *popup_light
    entity: light.luminaire_plante_salix

  ###  Mediaplayers
  mediaplayer 1:
    type: "custom:button-card"
    template: "popup_media_player_infos"
    entity: media_player.spotify_nicoxygen

  ### Thermostats
  climate 1:
    type: "custom:button-card"
    template: "popup_thermostat_temperature"
    entity: climate.bureau_ac

{% endhighlight %} 

> to **refresh the frontend** you will need to force the page **adaptive_ui.yaml** by making a modification and saving

### Result
![Capture an image of minimalist.ui adaptive display]({{ site.baseurl}}/assets/images/posts/{{ page.guid }}/capture-minimalist-ui-adaptive-dashboard.webp{{ cachebuster }}){: width="940" height="479" class="lazyload pictaninpost"}

## Conclusion {{ page.ref }}

{{ page.ref }} provides a complete frontend interface that is quite simple to set up. Less simple than Mushroom but much more customizable thanks to the additional maps provided by the community. Once you understand the mechanism, {{ page.ref }} will seem obvious to you.




