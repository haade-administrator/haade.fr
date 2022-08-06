---
guid: 13
title: "Intégrer son compteur électrique ( téléinfo ) dans Home Assistant"
description: "téléinformation dans homeassistant comment intégrer son compteur edf"
author: Math67
layout: post
date: "2021-08-03"
categories: Domotique Haade-lab Home-Assistant
tags:
image: compteur-electrique-homeassistant
language: fr
locale: fr_FR
published: true
beforetoc:
toc: true
comments: true
---
Pour mon premier article sur le blog, je vous propose de voir ensemble comment intégrer les informations de votre compteur électrique ( téléinfo ) dans Home Assistant **pour environ 14€**. Ce tuto est valable pour les anciens compteurs électroniques ainsi que pour les nouveaux compteurs communicants "Linky". Pour récupérer les informations nous allons passer par une fonctionnalité utilisée par les fournisseurs d'énergie : la Télé-information.

### **Prérequis :**

- Home assistant installé avec ESPHome à jour
- Un module ESP8266 du type [Wemos D1 mini](https://fr.aliexpress.com/item/32651747570.html?spm=a2g0o.productlist.0.0.77694726yRAR17&algo_pvid=cd2ec6ef-58ee-4733-89fd-25627174ac51&algo_exp_id=cd2ec6ef-58ee-4733-89fd-25627174ac51-0){:target="_blank"} et son alimentation
- Un module [PiTInfo](https://www.tindie.com/products/Hallard/pitinfo/){:target="_blank"}

### Programmation ESPHome

[Un article est dédié à la programmation d'un ESP8266 ou 32 n'hésitez pas à le consulter en cliquant sur le lien](https://www.haade.fr/blog/domotique-smarthome-jeedom-homeassistant/protocoles/esphome-et-homeassistant/)

Le compteur électrique étant généralement distant de votre installation domotique je vous conseille de programmer et flasher d'abord votre ESP8266.

#### Récapitulatif des étapes d'intégrations à ESPhome:

- Pour commencer, rendez-vous dans ESPHome vous devez créer une nouvelle configuration en cliquant sur le bouton "+" vert situé en bas à droite de l'écran.
- Ensuite remplissez les différents champs avec le nom du device, le nom de votre réseau wifi (2.4 Ghz impérativement) ainsi que le mot de passe associé.
- la **plateforme** est bien-entendu ESP8266, pour un wemos d1 mini la **board** est d1\_mini
- Cliquez sur le bouton "Next" et branchez votre Wemos D1 mini en USB sur votre PC, puis cliquez sur "Connect" et choisissez le port COM correspondant à votre Wemos.

Le flash peut durer quelques minutes, laissez la page ouverte en attendant la fin de l'opération.

Après cette opération votre nouvelle configuration apparaîtra sur le Dashboard d'ESPHome, cliquez sur "EDIT", nous allons compléter le fichier de configuration avec les éléments nécessaire à la remontée des informations du compteur.

En dessous de "logger" ajoutez les lignes 27 à 29 :

<script src="https://emgithub.com/embed.js?target=https%3A%2F%2Fgithub.com%2Fhaade-administrator%2Fhaade-addons%2Fblob%2Fmaster%2Frepository.json%23L2-L5&style=atom-one-dark&showBorder=on&showLineNumbers=on&showFileMeta=on&showCopy=on"></script>

{% gist 1a1dcda522d69522b4ab4a70e771d262 %}

Enfin, en dessous de la ligne "captive\_portal" ajoutez le reste du code :

- Pour les abonnements Heures Pleines / Heures Creuses :

{% gist 1a1dcda522d69522b4ab4a70e771d262 %}

- Pour les abonnements au tarif de Base :

{% gist b65e5b346db054d736abe9657d13fd54 %}

Vous pouvez maintenant téléverser le fichier en cliquant sur "INSTALL".

Voilà pour la partie programmation, passons maintenant au branchement du montage.

### Branchement au compteur

![logo risque électrique]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/pngegg-150x150-820.webp{{ cachebuster }})

**Vous allez devoir travailler au voisinage d'une tension de 220V qui est dangereuse si vous entrez en contact avec un conducteur électrique.** **Prenez garde à vos manipulations, en cas de doute coupez l'alimentation électrique.**

Nous allons dans cette partie voir comment brancher notre montage, voici le schéma de câblage :

![schema branchement pitinfo, wemos et compteur électrique]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/branchement-820.webp{{ cachebuster }})

Schéma de branchement

- **Rx** du Wemos sur **TXD** du PiTInfo
- **G** du Wemos sur **GND** du PiTInfo
- **3v3** du Wemos sur **VCC** du PiTInfo
- Les deux **bornes d'entrées** du PiTInfo doivent être raccordées sur **I1** et **I2** sous le compteur (Ces bornes sont protégées par un cache), il n'y a pas de polarité de ce coté du montage

**Compteur Linky :** Pour que les infos remontent à Home Assistant le compteur doit être en mode "Historique". Vous pouvez vérifier cette information en appuyant sur les touches "+" ou "-".

Maintenant que le montage est réalisé, il ne reste plus qu'à mettre sous tension le Wemos et retourner sur HA pour configurer la carte Lovelace.

### Lovelace

De retour dans Home Assistant rendez-vous dans "Intégrations". Normalement votre nouveau Wemos devrait être reconnu par HA et vous être proposé à la configuration. Si ce n'est pas le cas, il vous faudra l'ajouter manuellement en cliquant sur "Ajouter l'intégration" en bas à droite. Puis chercher ESPHome dans la liste et enfin rentrer l'adresse IP du module.

![entité téléinfo homeassistant avec pitinfo et wemos]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/entite-teleinfo-homeassistant-820.webp{{ cachebuster }})

Carte des entités du compteur électrique

Ainsi vous obtenez cette carte que vous pouvez ajouter directement à Lovelace ou créer une carte personnalisée.

Voilà c'est maintenant terminé, vous avez toutes les informations de votre compteur qui arrivent sur votre HA. Libre à vous maintenant de gérer ces données, de créer des graphiques, des automatisations... !

EDIT : Suite à un conflit dans Home Assistant au niveau de la configuration pour le tarif "Base", il est nécessaire de modifier la ligne id: index par id: "index\_base" dans le code ESPHome :

```yaml
  - platform: teleinfo
    tag_name: "BASE"
    name: "Index"
    unit_of_measurement: "Wh"
    icon: mdi:gauge
    id: "index_base" # <- Ligne à modifier
```
