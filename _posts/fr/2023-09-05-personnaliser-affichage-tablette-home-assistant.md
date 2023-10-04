---
guid: 82
title: "Construit un envirronnement pour Smartphone dans HA avec UI Minimalist"
description: "tutoriel simple et rapide pour mettre en place un tableau de bord sous Home Assistant design pour téléphone grâce à UI Lovelace Minimalist"
ref: "UI Lovelace Minimalist"
layout: post
author: Nico
date: 2023-10-03 16:06
last_modified_at: 
categories: [Domotique, Haade-lab]
tags: []
image: 'tutos-tableaux-themes-telephone-home-assistant-ui-lovelace-minimalist.png'
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
  - https://ui-lovelace-minimalist.github.io/UI/
  - https://github.com/UI-Lovelace-Minimalist/UI
  - https://community.home-assistant.io/t/lovelace-ui-minimalist/322687
  - https://ui-lovelace-minimalist.netlify.app/index
  - https://github.com/benmac7/Home-Assistant
---

Comme tout le monde le sait Home-Assistant est selon moi l'un des meilleurs logiciels domotiques du moment. Enfin c'est ce que je pense. Dans ce tuto je vais te montrer comment personnaliser un tableau de bord avec thème ultra design nommé ... **UI Lovelace Minimalist**.

Alors pourquoi ai-je choisis UI Lovelace Minimalist plutôt que [Mushroom Card et thème](https://github.com/piitaya/lovelace-mushroom){: target="_blank"}. Et bien simplement parce que **Ui Minimalist propose plus de cartes et chips** que Mushroom.

> Le but de Mushroom n'est pas de fournir une carte personnalisée pour une personnalisation approfondie.

Au départ j'ai voulu me contenter de Mushroom car très pratique ne serais-ce de part l'installation, mais je me suis vite confronter à des problèmes une fois que j'ai voulu personnaliser les cartes.

## Comment fonctionne {{ page.ref }}

Tout d'abord {{ page.ref }} installe 4 thèmes que tu pourras et devras sélectionner facilement
1. minimalist-desktop ( pour utilisation dans un environnement bureau )
2. minimalist-ios-tapbar (pour un environnement Ios avec **uniquement le menu des "vues"** en pied de page  )
3. minimalist-mobile ( pour environnement mobile sans **aucun menu**)
4. minimalist-mobile-tapbar ( pour environnement mobile avec uniquement le menu des "vues" )

Ensuite vient tout le reste

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

### Il te faut
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

## Bonus vue Adaptative




