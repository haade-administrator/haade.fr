---
guid: 69
title: "Domotiser entièrement un radiateur éléctrique dans Home assistant"
description: "Article complet pour domotiser un radiateur électrique sur fil pilote et contrôler l'ordre confort/hors gel et arrêt avec inversion de commande on/off et intégration dans lovelace d'un thermostat générique, l'ensemble te permettra de faire de réels économies d'énergies"
layout: post
author: Nico
date: 2023-06-10 15:50
last_modified_at: 2023-06-15 08:00
categories: [Haade-lab, Home-Assistant]
tags: []
image: 'domotiser-un-radiateur-electrique-avec-inversion-de-commande-dans-home-assistant.png'
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
addViews: 1057
comments: true
rating:  
sourcelink:
  - https://programmation.surleweb-france.fr/home-assistant-utiliser-le-thermostat-generique/
---

Au début je voulais rédiger **un article tout simple concernant la création d'une entité sous home assistant** qui permettait d'inverser une commande switch on/off, particulièrement pratique dans la domotisation des radiateurs éléctriques d'une maison. Ensuite je me suis dit pourquoi pas rédiger un article plus complet sur l'intégration et la domotisation complète de ce type de radiateur. Le coût d'une telle installation te reviendra entre 20 et 30€ par radiateurs selon les modules utilisés.

C'est pourquoi je vais détailler la **façon de procéder** pour:
- installer en zigbee des radiateurs éléctriques
- inverser les commandes on/off
- intégrer dans lovelace une carte d'un thermostat générique pour contrôler l'ensemble.

## Prérequis:

- Home assistant installé ( de préférence HAOS )
- un radiateur éléctrique avec fil pilote
- un module zbmini
- une diode 1N4007
- du fil électrique 2.5mm pour la diode
- un controleur de température Orvibo

{%- include alert.html type="warning" text="Vous allez devoir travailler au voisinage d'une tension de 220V qui est dangereuse si vous entrez en contact avec un conducteur électrique. Prenez garde à vos manipulations, en cas de doute coupez l'alimentation électrique." %}

## Installation du module Zbmini

{% include product-embed.html image="sonoff-micromodule-commutateur-connecte-zigbee-zbmini.jpg" title="MICROMODULE COMMUTATEUR CONNECTÉ ZIGBEE - ZBMINI" brand="Sonoff" description="Le micromodule commutateur SONOFF ZBMINI ZIGBEE offre la possibilité de contrôler un appareil/éclairage de sa maison." domlink="peripheriques/5375-sonoff-micromodule-commutateur-connecte-zigbee-zbmini-6920075776133.html" %}

{% include product-embed.html image="diode-de-redressement-1n4007-1-a.jpg" brand="" description="La diode de redressement convient pour obtenir un courant unidirectionnel à partir d’un courant alternatif. Cette diode pourra donc vous être utile dans la gestion de chauffage par fil pilote." domlink="accessoires-electriques/108-diode-de-redressement-1n4007-1-a.html" %}

{%- include alert.html type="info" text="Si le module est assez loin du routeur zigbee, je te conseil de l'appairer proche de celui-ci avant de l'installer derrière le radiateur" %}

Brancher les fils AC 230V aux bornes d’entrée **(L-IN pour la phase et N pour le neutre)**, et brancher la diode fil pilote sur la sortie L-OUT. Deux sens sont possibles selon l’ordre que tu souhaites obtenir.

{% picture posts/{{page.guid}}/schema-installation-zbmini-fil-pilote-radiateur.png --alt schema installation du module zbmini avec diode pour piloter radiateur éléctrique --img width="940" height="529" %}

{% include doclink.html pdf="installation-zbmini-fil-pilote-radiateur.pdf" title="document rédigé par apitronic pour l'installation d'un zbmini sur radiateur fil pilote" %}

|**Signal électrique**|**Ordre fil pilote tranmis au chauffage**|
|Aucun signal / Absence de courant|Confort<br>*La consigne de thermostat du radiateur est suivie*|
|Demi-alternance négative|Hors Gel (Blanc coté module)<br>*La température reste au-dessus d'un certain seuil pour éviter le gel de l'eau dans les tuyaux*|
|Demi-alternance positive|Arrêt (Rouge coté module)<br>*Le chauffage s'éteint complétement*|

**Personnellement j'ai voulu exploiter l'ordre Confort/Arrêt** donc j'ai utilisé le branchement du premier schéma.

Une fois l'installation faite, il suffit de l'intégrer dans home Assistant. (je l'ai intégré dans Zigbee2mqtt), pour ce faire il te suffit d'activer le mode inclusion dans Z2M et ensuite monte le **disjoncteur du radiateur** afin de le mettre sous tension. Lors de la première utilisation le module ZBmini rentre en mode appairage automatiquement.

> Le module ZBmini renvoi en données une simple commande on/off 

{% picture posts/{{page.guid}}/expose-zbmini-zigbee2mqtt.png --alt integration zbmini dans zigbee2mqtt --img width="940" height="381" %}

## Inverser la commande on/off

Pourquoi inverser la commande on/off dans Home assistant pour domotiser un radiateur éléctrique. 
> Et bien tout simplement car en cas d'absence de courant le fil pilote envoi la commande confort au radiateur.
Ce qui veut dire que le radiateur sera sur ON quand le zbmini sera sur OFF. Comme j'ai voulu inclure la commande **générique thermostat** à Lovelace et par cohérence il a fallu inverser la commande du ZBmini.
> plus précisément j'ai voulu faire croire au générique thermostat qu'en enclanchant la commande off du ZBmini celà enclanchait le radiateur.

pour inverser la commande j'ai d'abord créé un fichier **switch.yaml**, dans ce fichier je mettrais toute les commandes inversées de chaque radiateur du bâtiment.

commence par mettre cette ligne dans le fichier configuration.yaml et **recharge la configuration**.

{% highlight yaml %}
switch: !include switch.yaml
{% endhighlight %}

Ensuite crée un fichier **switch.yaml** à la racine des fichiers ha. Et crée un template de ce type:

{% highlight yaml %}
{% raw %}
- platform: template
  switches:
    salon_inverted:
      friendly_name: Radiateur salon inversé
      value_template: "{{ is_state('switch.radiateur_salon', 'off') }}"
      turn_on:
        service: switch.turn_off
        data:
          entity_id: switch.radiateur_salon
      turn_off:
        service: switch.turn_on
        data:
          entity_id: switch.radiateur_salon
{% endraw %}
{% endhighlight %}

ce template va créer une entité **switch.salon_inverted** nommé Radiateur salon inversé.
Modifie en fonction de tes entités, le nom de l'entité du zbmini, **dans mon cas: switch.radiateur_salon**.

## Création de la [carte générique thermostat](https://www.home-assistant.io/integrations/generic_thermostat/){: target="_blank"}

Pour pouvoir utiliser la carte générique thermostat, il te faut un thermostat qui soit dans la même pièce que ton radiateur. Pour ce tuto j'ai utilisé un thermostat Orvibo sur pile que j'ai intégré dans Zigbee2mqtt.

{% include product-embed.html image="orvibo-capteur-de-temperature-et-humidite-zigbee.jpg" title="CAPTEUR DE TEMPÉRATURE ET HUMIDITÉ ZIGBEE" brand="ORVIBO" description="Le capteur ST30 mesure la température et humidité d'une zone de votre logement et informe l'utilisateur par son écran et via une passerelle domotique." domlink="peripheriques/5334-orvibo-capteur-de-temperature-et-humidite-zigbee-6928986703484.html" %}

Ci-dessous une capture des commandes exposées du thermostat Orvibo dans Z2M:

{% picture posts/{{page.guid}}/exposition-commandes-orvibo-thermostat-st30-zigbee2mqtt.png --alt exposition commandes Orvibo ST30 dans zigbee2mqtt --img width="940" height="367" %}

relève bien le nom des entités de la température pour la suite du tuto, pour moi: **sensor.thermostat_salon_cuisine_temperature**.

pour ce chapitre je me suis entièrement inspiré de [l'article rédigé par Zigomato](https://programmation.surleweb-france.fr/home-assistant-utiliser-le-thermostat-generique/){: target="_blank"}

commence par mettre dans le fichier **configuration.yaml** de ha cette ligne:

{% highlight yaml %}
climate: !include_dir_merge_list climate/
{% endhighlight %}

Ensuite recharge la configuration et à la racine des fichiers de home assistant crée:

- un dossier climate
- dans le dossier climate, créé un fichier generic_thermostat.yaml

et colle le code ci-dessous

{% highlight yaml %}
- platform: generic_thermostat
  # Nom de notre thermostat
  name: Chauffage Cuisine et Salon
  # entité du chauffage commande inversé
  heater: switch.salon_inverted
  # entité du capteur de température
  target_sensor: sensor.thermostat_salon_cuisine_temperature
  # la température réglable minimum du thermostat
  min_temp: 16
  # la température réglable maximum du thermostat
  max_temp: 21
  # mode de fonctionnement du système "heater"
  ac_mode: false
  # la température cible
  target_temp: 18
  # il s'agit de la tolérance de température basse pour l'activation de la chauffe
  cold_tolerance: 10
  # tolérance de la température avant que la chauffe ne soit activer
  hot_tolerance: 0.3
  # il s'agit du mode dans lequel le thermostat démarre la première fois
  initial_hvac_mode: "off"
  # température en cas de mode absent
  away_temp: 12
  # Il s'agit de la précision pour le réglage de la température
  precision: 0.5
  # le temps minimum d'un cycle de fonctionnement
  min_cycle_duration:
    seconds: 5
  # maintient en chauffe au moins 3 minutes si le thermostat ne reçoit pas de commande
  keep_alive:
    minutes: 3
{% endhighlight %}

Personnalise le selon tes besoins, il est commenté pour te faciliter la tâche. Voilà tu as pas mal modifier les fichiers dans ha je te **propose un redémarrage de l'ensemble**.

Dernière étape créer une carte thermostat dans Lovelace. Là rien de plus simple, va dans Lovelace et séléctionne la carte thermostat, et sélectionne l'entité créé dans mon cas **"Chauffage cuisine et Salon"**

![Mise en place thermostat generic dans home assistant]({{ site.baseurl }}/assets/images/posts/69/mise-en-place-generic-thermostat-lovelace-home-assistant.webp{{ cachebuster }}){: width="800" height="472"}{: target="_blank"}

## Conclusion

Voilà un **tuto complet** sur l'intégration d'un radiateur électrique dans home assistant. Il te permettra de piloter assez facilement l'ordre Arrêt et Confort du radiateur, de remonter correctement l'information grâce à la commande inversé et de contrôler l'ensemble avec une carte generic_thermostat dans Lovelace. 
> La domotisation du chauffage dans une maison est très importante elle te permettrra de réaliser de belles économies d'énergies.



