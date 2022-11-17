---
guid: 28
title: 'Utilisation des Filtres dans ZM'
date: '2022-11-08 09:25'
author: Nicolas
layout: post
published: false
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