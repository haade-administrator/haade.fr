---
id: 9782
title: 'Fonctionnement des Modes dans Zoneminder:'
date: '2022-01-04T20:15:10+00:00'
author: Nicolas
layout: post
guid: 'https://www.haade.fr/?p=9782'
permalink: '/?p=9782'
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

- **<span class="has-inline-color has-vivid-cyan-blue-color">Aucun:</span>** Le moniteur est actuellement désactivé. Aucun flux ne peut être visualisé ni aucun événement généré. Rien n’est enregistré.
- **<span class="has-inline-color has-vivid-cyan-blue-color">Nodect:</span><span class="has-inline-color has-vivid-red-color"> </span>**Il s’agit d’un mode spécial conçu pour être utilisé avec des **déclencheurs externes.** Dans Nodect, aucune détection de mouvement n’a lieu mais les événements sont enregistrés si des déclencheurs externes l’exigent.
- **<span class="has-inline-color has-vivid-cyan-blue-color">Monitor:</span>** Le moniteur n’est disponible que pour la diffusion en direct. **Aucune analyse d’image n’est effectuée,** donc aucune alarme ou événement ( analyse par machine learning ) ne sera généré et rien ne sera enregistré. C’est le mode utilisé quand tu es à ton domicile.
- **<span class="has-inline-color has-vivid-cyan-blue-color">Mocord: </span>Le moniteur sera enregistré en continu**, tout mouvement étant mis en évidence dans ces événements.
- **<span class="has-inline-color has-vivid-cyan-blue-color">Modect:</span>** Toutes les images capturées seront analysées et les événements générés avec la vidéo enregistrée **durant un temps déterminé** quand un mouvement est détecté. **C’est le mode le plus utilisé en domotique<span class="has-inline-color has-vivid-red-color"> il permet d’utiliser les machine learning</span>** en analysant les images.
- **<span class="has-inline-color has-vivid-cyan-blue-color">Record:</span>**<span class="has-inline-color has-vivid-red-color"> **Le moniteur sera enregistré en continu.**</span> Des événements d’une durée fixe seront générés quel que soit le mouvement, de la même manière qu’un enregistreur vidéo à intervalle de temps conventionnel. **Aucune détection de mouvement n’a lieu dans ce mode.** Il ne permet pas d’utiliser le machine learning.