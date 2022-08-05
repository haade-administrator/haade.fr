---
id: 9849
title: 'Utilisation des Filtres dans ZM'
date: '2021-10-05T08:38:43+00:00'
author: Nicolas
layout: post
guid: 'https://www.haade.fr/?p=9849'
permalink: '/?p=9849'
classic-editor-remember:
    - block-editor
adace_disable:
    - 'a:4:{s:23:"adace_disable_all_slots";N;s:19:"adace_disable_slots";a:36:{s:20:"adace-before-content";N;s:21:"adace-after-paragraph";N;s:23:"adace-after-paragraph-2";N;s:23:"adace-after-paragraph-3";N;s:17:"adace-after-image";N;s:16:"adace-after-more";N;s:20:"adace-middle-content";N;s:27:"adace-before-last-paragraph";N;s:19:"adace-after-content";N;s:14:"adace_vignette";N;s:13:"adace-slideup";N;s:25:"adace-after-cace-comments";N;s:22:"adace-after-snax-items";N;s:28:"adace-after-x-bbpress-topics";N;s:29:"adace-after-x-bbpress-replies";N;s:18:"adace-mace-gallery";N;s:25:"adace-mace-inside-gallery";N;s:31:"bimber_before_header_theme_area";N;s:20:"bimber_inside_header";N;s:32:"bimber_before_content_theme_area";N;s:29:"bimber_after_featured_content";N;s:29:"bimber_before_related_entries";N;s:23:"bimber_before_more_from";N;s:22:"bimber_before_comments";N;s:23:"bimber_before_dont_miss";N;s:18:"bimber_inside_grid";N;s:20:"bimber_inside_grid_s";N;s:18:"bimber_inside_list";N;s:21:"bimber_inside_classic";N;s:20:"bimber_inside_stream";N;s:20:"bimber_inside_zigzag";N;s:18:"bimber_left_stream";N;s:19:"bimber_right_stream";N;s:16:"bimber_link_exit";N;s:24:"bimber_before_pagination";N;s:23:"bimber_after_pagination";N;}s:21:"adace_disable_widgets";N;s:24:"adace_disable_shortcodes";N;}'
adace_related_products:
    - 'a:0:{}'
adace_related_products_title:
    - 'Acheter le message'
adace_related_products_type:
    - woocommerce
adace_related_products_embed:
    - ''
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