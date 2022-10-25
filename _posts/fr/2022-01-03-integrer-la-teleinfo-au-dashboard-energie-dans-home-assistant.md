---
guid: 25
title: "La téléinfo dans le dashboard Energie de Home Assistant"
description: "Teleinfo Home Assistant : Intégrer les informations du compteurs électrique dans le dashboard Energie dans HA"
layout: post
author: Math67
date: "2022-01-03T13:23:45+00:00"
last_modified_at: "2022-01-03T13:23:47+00:00"
categories: Domotique Haade-lab Home-Assistant
tags: téléinformation
image: integration-dashboard-energie-ha.png
toc: true
beforetoc:
published: true
sitemap:
  changefreq: #always hourly daily weekly monthly yearly never
  exclude: #'yes' or 'no'
  priority: #between 0.0 to 1.0, 1.0 high priority
  lastmod: # date to end modification
locale: fr_FR
comments: true
redirect_from:
  - /blog/home-automation-smarthome-jeedom-homeassistant/tutos-haade-lab/home-assistant/integrer-la-teleinfo-au-dashboard-energie-dans-home-assistant
---


Dans cet article, nous allons voir comment intégrer dans le dashboard "Energie" les données de la [téléinfo]({% post_url /fr/2021-08-03-integrer-son-compteur-electrique-teleinfo-dans-home-assistant %}).

## Prérequis :

- Home assistant installé avec la version 2021.8.0 minimum
- Avoir accès à des données de consommation électrique

## Création des compteurs
Dans un premier temps il faudra créer différents compteurs afin de récolter la quantité d'énergie consommée, pour cela nous utiliserons une intégration native d'HA : [Utility Meter](https://www.home-assistant.io/integrations/utility_meter/){:target="_blank"}.

Ayant un abonnement Heures creuses / Heures pleines, j'ai décidé de créer des compteurs pour les deux tarifs, mais vous pouvez simplement n'en créer qu'un seul en fonction de votre contrat.  
Ci-dessous mon code, à placer dans le fichier configuration.yaml :

```yaml
utility_meter:
  heures_creuses:
    source: sensor.hchc
    cycle: daily
  heures_pleines:
    source: sensor.hchp
    cycle: daily
```

La "source" correspond au sensor "Index HC" ou "Index HP" créé dans ESPHome, il alimentera en temps réel votre compteur.  

La variable "cycle" correspond à la période, vous avez le choix entre : _quarter-hourly, hourly, daily, weekly, monthly, bimonthly, quarterly_ et _yearly_.  
Ces variables sont toutes documentées dans la doc de l'intégration, libre à vous de créer les compteurs de votre choix. Pour notre besoin _daily_ suffira.

Voici le genre d'entité que vous obtiendrez après redémarrage de Home Assistant :

{% picture posts/{{ page.guid }}/grille-heure-pleine.png --alt entité sensor.heures\_pleines --img width="390" height="539" %}

Maintenant que nous avons nos compteurs de consommation, nous allons passer à la configuration du dashboard "Energie".

## Configuration du dashboard Energie

Rendez-vous dans "Configuration" puis "Energie".  
Là vous allez découvrir plusieurs tableaux vous permettant de monitorer la consommation, la production ainsi que le stockage de l'énergie (Plus d'infos [dans la doc officielle](https://www.home-assistant.io/docs/energy/electricity-grid/){:target="_blank"}).


Ensuite dans "Réseau électrique", cliquez sur "Ajouter la consommation" et sélectionnez le sensor créé auparavant, dans notre cas : **sensor.heures\_pleines**.  
Répétez l'opération pour le sensor heures creuses si nécessaire.  

{% picture posts/{{ page.guid }}/integration-heure-creuse-pleine.png --img width="393" height="564" --alt Configuration du dashboard Energie %}

Configuration du dashboard Energie

Vous avez la possibilité d'inclure le calcul du coût de votre consommation, soit en indiquant un tarif fixe, soit en faisant appel à une entité indiquant le tarif (ex : [une entrée nombre](https://www.home-assistant.io/integrations/input_number/){:target="_blank"}).

{% picture posts/{{ page.guid }}/ajout-compteur.png --alt Ajouter un compteur --img width="415" height="561" %}

Une fois la configuration terminée consultez votre dashboard Energie, vous devriez après quelques jours de fonctionnement obtenir ce genre de graphique.

{% picture posts/{{ page.guid }}/integration-dashboard-energie-ha.png --alt Dashboard Energie --img width="820" height="461" %}

L'article touche à sa fin, vous savez maintenant comment configurer le dashboard Energie.
