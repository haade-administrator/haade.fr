---
guid: 28
author: Nico
layout: post
title: 'Utilisation des Filtres dans ZM'
description: "l'utilisation des filtres dans zoneminder est un paramétrage incontournable pour ne pas stocjer trop d'évènements"
date: '2022-11-08 09:25'
last_modified_at: 
categories: [Securite, Domotique]
tags: []
image: 'utilisation-des-filtres-zoneminder.png'
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
addViews: 44
comments: true
rating:  
---


Les filtres dans ZoneMinder ont un rôle très important, ils permettent de classer, d’archiver de supprimer à peut près tout dans Zoneminder que ce soit les évènements, les vidéos ou les images.

Par défaut il existe deux filtres fonctionnels:

- PurgeWhenFull\*
- Updatediskspace\*

Premièrement l’astérisque en bout de titre indique à l’utilisateur que le filtre est lié à une tâche cron afin de fonctionner de façon répétitive en arrière plan il suffit de sélectionner l’option &gt;&gt;&gt; lancer les filtres en arrière plan.

PurgeWhenFull: [Doc oficielle](https://wiki.zoneminder.com/PurgeWhenFull){: target="_blank"}, permet de vider le disque dur

## Actions à sélectionner:

- Archive: archiver les évènements
- FilterUnarchiveEvents: Désarchiver les évènements
- Update used disk space: Mettre à jour l’espace disque utilisé
- Créer une video
- Execute une commande
- Effacer: Effacer les évènements
- FilterCopyEvents: Copier tous les évènements
- Move all Matches: déplacer tous les évènements

## Options à sélectionner

- lancer les filtres en arrière plan
- Run filter concurrently: Exécuter le filtre simultanément
- Filter lock rows: verouiller les lignes

## tester

Ensuite on clic sur **executer** et **list matches** afin de voir les *évènements concernés*.

## Conclusion

Bon ce tuto n'est pas complet, et je m'en excuse, j'ai tellement attendu pour faire cet article que maintenant je n'utilise plus Zoneminder, pourquoi !
Ce logiciel est complet mais la gestion des évènements, le paramétrage des caméras est complexe et franchement peut optimisés. 
> **De plus j'ai décidé d'arrêter d'utiliser ZM.**
Pourquoi ce basculement: depuis que zm a décidé d'arrêter l'évolution du programme ZMevenvnotification en Novembre 2021, du coup ça n'a plus de réel intérêts surtout qu'il existe depuis un petit moment un NVR gratuit pour Homeassistant, il s'agit de **[Frigate](https://frigate.video/)**{: target="_blank"}, **ce projet est jeune mais déjà très prometteur.**