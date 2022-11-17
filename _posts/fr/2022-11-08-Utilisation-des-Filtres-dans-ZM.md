---
guid: 28
author: Nico
layout: post
title: 'Utilisation des Filtres dans ZM'
description: ""
date: '2022-11-08 09:25'
last_modified_at: 
categories: [Docker, Domotique, Haade-lab]
tags: []
image: ''
toc: true
beforetoc: ''
published: false
noindex: false
published: false
sitemap:
  changefreq: 'monthly'
  exclude: 'no'
  priority: 0.5 #between 0.0 to 1.0, 1.0 high priority
  lastmod:  # date to end modification
locale: fr_FR
comments: true
rating:  
---


Les filtres dans ZoneMinder ont un rôle très important, ils permettent de classer, d’archiver de supprimer à peut près tout dans Zoneminder que ce soit des évènements, les vidéos ou les images.

Par défaut il existe deux filtres fonctionnels:

- PurgeWhenFull\*
- Updatediskspace\*

Premièrement l’astérisque en bout de titre indique à l’utilisateur que le filtre est lié à une tâche cron afin de fonctionner de façon répétitive en arrière plan il suffit de sélectionner l’option &gt;&gt;&gt; lancer les filtres en arrière plan.

PurgeWhenFull: [Doc oficielle](https://wiki.zoneminder.com/PurgeWhenFull), permet de vider le disque dur

Actions à sélectionner:

- Archive: archiver les évènements
- FilterUnarchiveEvents: Désarchiver les évènements
- Update used disk space: Mettre à jour l’espace disque utilisé
- Créer une video
- Execute une commande
- Effacer: Effacer les évènements
- FilterCopyEvents: Copier tous les évènements
- Move all Matches: déplacer tous les évènements

Options à sélectionner

- lancer les filtres en arrière plan
- Run filter concurrently: Exécuter le filtre simultanément
- Filter lock rows: verouiller les lignes