---
guid: 82
title: "Construit un environnement pour Smartphone dans HA avec UI Minimalist"
description: "tutoriel simple et rapide pour mettre en place un tableau de bord sous Home Assistant design pour téléphone grâce à UI Lovelace Minimalist"
ref: "UI Lovelace Minimalist"
layout: post
authors: Nico
date: 2023-10-08 16:06
last_modified_at: 
categories: [Domotique, Haade-lab, Home-Assistant]
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
locale: fr_FR
comments: true
rating:  
sourcelink:
  - https://ui-lovelace-minimalist.github.io/UI/
  - https://github.com/UI-Lovelace-Minimalist/UI
  - https://community.home-assistant.io/t/lovelace-ui-minimalist/322687
  - https://ui-lovelace-minimalist.netlify.app/index
  - https://github.com/benmac7/Home-Assistant
---

Comme tout le monde le sait Home-Assistant est selon moi l'un des meilleurs logiciels domotiques du moment. Enfin c'est ce que je pense. Dans ce tuto je vais te montrer comment personnaliser un tableau de bord avec thème ultra design nommé ... **UI Lovelace Minimalist**.

Alors pourquoi ai-je choisis UI Lovelace Minimalist plutôt que [Mushroom Card et thème](https://github.com/piitaya/lovelace-mushroom){: target="_blank"}. Et bien simplement parce que **Ui Minimalist propose plus de cartes et chips** que Mushroom.

**Le but de Mushroom n'est pas de fournir une carte personnalisée pour une personnalisation approfondie.**

> Au départ j'ai voulu me contenter de Mushroom car très pratique ne serais-ce de part l'installation, mais je me suis vite confronter à des problèmes une fois que j'ai voulu personnaliser les cartes.

> Ensuite vient tout le reste

## Prérequis
- Hacs d'installé
- Editeur de texte ( file editor ou VSC editor par exemple )

## Installation UI Lovelace Minimalist

Rien de plus [simple il te suffit de lire le tuto officiel](https://ui-lovelace-minimalist.github.io/UI/setup/installation/#install-integration){: target="_blank"}

Tout d'abord rajoute cette ligne si elle ne l'est pas déjà dans le fichier **configuration.yaml** ainsi les thèmes seront stockées dans le sous-dossier themes/

{% highlight yaml %}
# themes personnalisé
frontend:
  themes: !include_dir_merge_named themes
{% endhighlight %}

### HACS
{{ page.ref }} est disponible dans HACS (Home Assistant Community Store).

1. Installez HACS si vous ne l'avez pas déjà
2. Ouvrir HACS dans Home Assistant
3. Allez dans la rubrique "Intégrations"
4. Cliquez sur le bouton avec l'icône "+"
5. Rechercher "{{ page.ref }}

Une fois installé **Redémarre ton instance Home Assistant**

**Ensuite clic sur le bouton ci-dessous** pour ajouter l'intégration {{ page.ref }}. Si tu ne le sais pas encore {{ page.ref }} n'est pas un simple thème mais plutôt un combo thème/module

{% include homeassistantlink.html integration="ui_lovelace_minimalist" %}

Et configure {{ page.ref }}

J'ai opté pour une installation semi-manuelle **des intégrations supplémentaires** car je rencontrais régulièrement des messages d'erreurs de non reconnaissances

**Intégration requise**
- [browser_mod](https://github.com/thomasloven/hass-**browser_mod**){: target="_blank"} par Thomas Loven **(attention! s'active en deux étapes voir la notice d'installation)**

**Ressources Lovelace requises**
- [carte-bouton](https://github.com/custom-cards/button-card){: target="_blank"} par RomRider
- [carte-mod](https://github.com/thomasloven/lovelace-card-mod){: target="_blank"} par Thomas Loven
- [mini-carte graphique](https://github.com/kalkih/mini-graph-card){: target="_blank"} de Karl Kihlström
- [Mini lecteur multimédia](https://github.com/kalkih/mini-media-player){: target="_blank"} par Karl Kihlström
- [Mon pack de cartes](https://github.com/AnthonMS/my-cards){: target="_blank"} par AnthonMS** ( nécessite d'installer un répertoire supplémentaire de HACS)
- [Carte d'entité légère](https://github.com/ljmerza/light-entity-card){: target="_blank"} par Leonardo Merza
- [auto-entités](https://github.com/thomasloven/lovelace-auto-entities){: target="_blank"} par Thomas Loven

PS: Après avoir rencontré des soucis avec l'installation des modules complémentaires automatisés je te conseil de les installer manuellement dans Hacs. J'avais constemment des erreurs de modules non installés d'un support à l'autre.

### Les thèmes fournis par Minimalist UI

**Un point fort de cette intégration** sont les thèmes fournis avec minimalist UI, pas moins de **4 thèmes**, *il faudra en sélectionner un par défaut*, si tu ne le fait pas l'affichage des carte Minimalist ne se fera pas correctement.

1. minimalist-desktop ( pour utilisation dans un environnement bureau )
2. minimalist-ios-tapbar (pour un environnement Ios avec **uniquement le menu des "vues"** en pied de page  )
3. minimalist-mobile ( pour environnement mobile sans **aucun menu**)
4. minimalist-mobile-tapbar ( pour environnement mobile avec uniquement le menu des "vues" )

## configurer les custom card

pour configurer une custom card que tu voudrais ajouter rien de plus simple, clic directement sur le lien ci-dessous

{% include homeassistantlink.html configure_integration="ui_lovelace_minimalist" %}

ensuite clic sur configure et en bas de page **tu pourras ajouter les customs card** nécessaires.


{% picture posts/{{ page.guid }}/ui-minimalist-custom-card.png --alt paramétrage custom card ui minimalist pour tablette et smartphone --img width="940" height="680" %}

## Ou se trouve le fichier à configurer:

Le fichier à ui-lovelace.yaml est le fichier à modifier pour paramétrer la vue tu le trouvera dans:
**config > ui_lovelace_minimalist > dashboard** 

{% highlight shell %}
config
└── ui_lovelace_minimalist
    ├── custom_cards
    └── dashboard
        └── ui-lovelace.yaml
{% endhighlight %}

## Affichage pour tablette

{% picture posts/{{ page.guid }}/creation-affichage-tablette-telephone-ui-minimalist.png --alt creation affichage ui minimalist pour tablette et smartphone --img width="940" height="593" %}

l'affichage sur tablette se fait sur 2 colonnes verticales, pour se faire il faut créer une carte avec un affichage de type vertical-stack pour chaque colonne. Par défaut si tu n'intègres pas de vertical-stack l'affichage se fera sur 3 colonnes. 

## Résultat sur smartphone

{% picture posts/{{ page.guid }}/rendu-ui-minimalist-smartphone-white.png --alt rendu smartphone ui minimalist pour tablette et smartphone --img width="280" height="607" %}

**Exemple d'une colonne verticale:**
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

**Exemple pour 2 colonnes verticales:**

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

### 1ère étape configuration des entêtes

{% picture posts/{{ page.guid }}/configuration-chips-tablette-telephone-ui-minimalist.png --alt configuration des entêtes dans ui minimalist pour tablette et smartphone --img width="940" height="593" %}

**Il te faut:**
1. le bouton revenir en arrière: [bouton chips back](https://ui-lovelace-minimalist.github.io/UI/usage/chips/chip_back/){: target="_blank"}
2. le bouton température: [bouton chips température](https://ui-lovelace-minimalist.github.io/UI/usage/chips/chip_temperature/){: target="_blank"}
3. le bouton alarme: [bouton chips alarm](https://ui-lovelace-minimalist.github.io/UI/usage/chips/chip_alarm/){: target="_blank"}

**le code ci dessous permet de créer des espaces entre le contenu**

{% highlight yaml %}
              - type: custom:button-card
                template: edge
{% endhighlight %}

**Code intégré:**

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

### 2ème étape configuration des titres

{% picture posts/{{ page.guid }}/configuration-titres-tablette-telephone-ui-minimalist.png --alt configuration des titres dans ui minimalist pour tablette et smartphone --img width="940" height="593" %}

réitère le code autant de fois que tu as besoin d'intégrer un titre, pars sur un affichage horizontal pour mettre ce titre sous les entêtes.

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

**Code intégré:**

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

### 3ème étape une barre météo

{% picture posts/{{ page.guid }}/configuration-carte-meteo-tablette-telephone-ui-minimalist.png --alt configuration d'une carte meteo dans ui minimalist pour tablette et smartphone --img width="940" height="593" %}

Il en existe plusieurs j'ai choisi la plus simple [la weather card](https://ui-lovelace-minimalist.github.io/UI/usage/cards/card_weather/#description){: target="_blank"}

**mais il en existe d'autres:**
1. [weather card ulm](https://ui-lovelace-minimalist.github.io/UI/usage/cards/card_weather_ulm/){: target="_blank"}
2. [dans les custom card la welcome card de paddy](https://ui-lovelace-minimalist.github.io/UI/usage/custom_cards/custom_card_paddy_welcome/){: target="_blank"}

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

**Code intégré:**

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

### 4ème étape la présence

{% picture posts/{{ page.guid }}/configuration-presence-tablette-telephone-ui-minimalist.png --alt configuration d'une carte presence avec suivi charge batterie et géolocalisation dans ui minimalist pour tablette et smartphone --img width="940" height="593" %}

L'une des raisons qui m'ont pousser à choisir entre ui minimalist et mushroom est bel et bien la carte de présence, grâce à une custom card minimalist permet d'intégrer facilement dans une cartes le suivi, la charge batterie et encore d'autres options chose que n'arrive pas à faire Mushroom du moins sans avoir à coder la carte elle même.

il te faudra [la custom card Person_info](https://ui-lovelace-minimalist.github.io/UI/usage/custom_cards/custom_card_person_info/){: target="_blank"}

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

**Code intégré:**

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

### 5ème étape création des commandes d'ouvertures

{% picture posts/{{ page.guid }}/configuration-cover-tablette-telephone-ui-minimalist.png --alt configuration d'une carte cover volet et garage dans ui minimalist pour tablette et smartphone --img width="940" height="593" %}

il te faudra la [carte cover](https://ui-lovelace-minimalist.github.io/UI/usage/cards/card_cover/){: target="_blank"}

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

**Code intégré:**

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

## Passons à la Seconde colonne

pour créer la seconde colonne il faut repartir sur un nouveau vertical-stack

{% highlight yaml %}
      - type: vertical-stack
        cards:
          - type: horizontal-stack
            cards:
{% endhighlight %}  

{% picture posts/{{ page.guid }}/configuration-2rd-column-tablette-telephone-ui-minimalist.png --alt configuration d'une seconde colonne dans ui minimalist pour tablette et smartphone --img width="940" height="593" %}

Dans la seconde colonne on aura:
1. Une [carte titre](personnaliser-affichage-tablette-home-assistant#2ème-étape-configuration-des-titres)
2. 4 x [Room Card](https://ui-lovelace-minimalist.github.io/UI/usage/cards/card_room/){: target="_blank"}
3. Un [carte light](https://ui-lovelace-minimalist.github.io/UI/usage/cards/card_light/){: target="_blank"}

### 1. Mise en place du titre
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

### 2. Mise en place de la Room Card

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

### 3. Ajout d'une carte light

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

### Exemple de dashboard Minimalist UI

Voilà tu pourras te rendre compte que le thème Minimalist UI est relativement puissant pour trouver des astuces tu pourras suivre le fil: [Communauté Minimalit UI](https://community.home-assistant.io/t/lovelace-ui-minimalist/322687/2418){: target="_blank"}

{% picture posts/{{ page.guid }}/exemple-integration-minimalist-ui.png --alt exemple de dashboard paramétrable avec minimalist UI --img width="940" height="407" %}

{% picture posts/{{ page.guid }}/exemple-integration-minimalist-ui-2.png --alt exemple de dashboard paramétrable avec minimalist UI --img width="940" height="407" %}


## Bonus vue Adaptative

{%- include alert.html type="warning" text="le module <strong>state-switch</strong> doit être installé en <strong>version 1.9.3</strong>, sinon la popup adaptive ne fonctionnera pas correctement, pour en savoir plus tu peux consulter le post qui en parle" link="https://community.home-assistant.io/t/lovelace-ui-minimalist/322687/2418" textlink="lovelace Ui Minimalist Community" %}

### Architecture du dossier

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

### Infos {{ page.ref }} Adaptive

La vue adaptative est un bonus extra surtout dédié aux affichages sur tablette. Il faudra installer deux modules supplémentaires, il te suffit de consulter la notice officielle qui est très bien détaillée.

[notice d'installation de la vue adaptative](https://ui-lovelace-minimalist.github.io/UI/setup/adaptive_dash/#add-adaptive-dashboard){: target="_blank"}

![Capture d'une image de mise en fonction de l'affichage adaptatif de minimalist.ui]({{ site.baseurl}}/assets/images/posts/{{ page.guid }}/minimalist_adaptive_dash.webp{{ cachebuster }}){: width="480" height="270" class="lazy"}

[exemple code dashboard adaptive par Basbruss](https://github.com/basbruss/Minimalist-Dashboards){: target="_blank"}

{%- include alert.html type="info" text="Actuellement minimalist UI adaptive supporte les types d'appareils suivant: <strong>lights, mediaplayers, thermostats, sensors</strong>" %}

### Activation

L'activation de cette vue se fait dans la configuration du module

{% picture posts/{{ page.guid }}/hacs_adaptive_dashboard.png --alt paramétrage de la vue adaptative dans ui minimalist pour tablette et smartphone --img width="400" height="622" %}

###  pour commencer: 3 fichiers à modifier

#### configuration.yaml

ajoute un input_select aux noms que tu auras choisi

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

ensuite il faudra adapter les codes générés **main.yaml, popup.yaml**

**pour moi le main.yaml donne ce résultat:**

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

**et le popup.yaml**

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

> pour **rafraichir le frontend** il te faudra forcer la page **adaptive_ui.yaml** en y apportant une modif et en enregistrant

### Résultat
![Capture d'une image de mise en fonction de l'affichage adaptatif de minimalist.ui adaptive]({{ site.baseurl}}/assets/images/posts/{{ page.guid }}/capture-minimalist-ui-adaptive-dashboard.webp{{ cachebuster }}){: width="940" height="479" class="lazy"}

## Conclusion {{ page.ref }} 

{{ page.ref }} apporte une interface frontend complète et assez simple à mettre en place. Moins simple que Mushroom mais beaucoup plus personnalisable et ça grâce aux cartes supplémentaires fournis par la communauté. Une fois que tu auras compris le mécanisme, {{ page.ref }} te paraitra comme une évidence.




