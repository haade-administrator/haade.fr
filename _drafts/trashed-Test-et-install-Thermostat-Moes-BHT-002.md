---
id: 9496
title: '[Test] et [install] Thermostat Moes BHT-002'
date: '2021-08-12T11:44:03+00:00'
author: Administrateur
layout: post
guid: 'https://www.haade.fr/?p=9496'
permalink: '/?p=9496'
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
image: /wp-content/uploads/2021/08/thermostat-zigbee-moes-bht-002.png
---

Aujourd’hui je vais tester et installer le thermostat zigbee BHT-002 de la marque Moes, plus précisément la version chauffage électrique BHT-002-GBLZBW, celui-ci va remplacer par le [thermostat Atlantic 109519](https://www.rexel.fr/frx/Cat%C3%A9gorie/Chauffage-%C3%A9lectrique-climatisation-ventilation/Chauffage-domestique/C%C3%A2ble-chauffant/Plancher-Chauffant-Domocable---Thermostat-digital/ATL109519/p/62427465) ce thermostat des années 2005 coûte toujours plus de 40 euros l’unité avec des paramétrages très restreints.

<figure class="wp-block-image size-large">![](data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' viewBox%3D'0 0 1024 576'%2F%3E)</figure>Pour parler de la marque Moes, c’est le second matériel que je test, commandé tous deux chez le revendeur Moes Official Store d’aliexpress, et franchement la qualité est très bien fini, l’emballage est pro et la notice ( en Anglais ) est parfaitement détaillée. Alors n’hésitez pas à commander les produits de cette marque. D’ailleurs dans un prochain article Yann dit ( tonton ) va tester [le nouveau capteur 3 en 1 ( thermomètre, luminosité et humidité ) zigbee de la marque](https://fr.aliexpress.com/item/1005002522611717.html?spm=a2g0o.productlist.0.0.47147798UjVhU9&algo_pvid=760ce515-952e-453c-bdc1-465c7c3542f7&algo_exp_id=760ce515-952e-453c-bdc1-465c7c3542f7-41). Il est déjà compatible zigbee2mqtt donc multiplateforme, j’attends ça avec impatience donc à toi de jouer tonton.

<figure class="wp-block-image size-large">![](data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' viewBox%3D'0 0 1024 576'%2F%3E)</figure>Commençons par le déballage, comme je le disais plus haut l’emballage est top, le produit est bien protégé, à l’intérieur le thermostat ( un film de protection protège l’écran ), une sonde ntd, deux visses et la notice, rien d’extraordinaire. Le branchement sur chauffage électrique se fera sans soucis car disponible avec deux neutres/2 phases en entrée et sortie, de plus en option on peut brancher le thermostat en modbus, dans notre cas pas la peine, pour la sonde idem.

## Installation du module

Rien de bien compliqué, pour commencer la partie noir se déboîte facilement d’une main afin de pouvoir visser le module sur le boitier d’encastrement.

**De Gauche à droite:**

- Connectique Modbus blanc/rouge
- 1: phase fil souple sortie du radiateur
- 2: neutre fil souple sortie du radiateur
- 3: Neutre du disjoncteur
- 4 Phase du disjoncteur
- 5-6 fil de la sonde NTC de 2,5m branchée pour contrôler la température du sol.

<figure class="wp-block-image size-large">![](data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' viewBox%3D'0 0 1024 576'%2F%3E)</figure>Suit l’installation en lieu et place au thermostat d’ambiance Atlantic. Comme énoncé plus haut rien de bien compliqué.

<div class="wp-block-image"><figure class="alignleft is-resized">![logo risque électrique](data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' viewBox%3D'0 0 68 68'%2F%3E)</figure></div>**Vous allez devoir travailler au voisinage d’une tension de 220V qui est dangereuse si vous entrez en contact avec un conducteur électrique.** **Prenez garde à vos manipulations, en cas de doute coupez l’alimentation électrique.**

Ce qui est dommage la connectique est réalisé par des fils dupont, **la liaison aurait pu être prévu par emboîtement**

<figure class="wp-block-image size-large">![](data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' viewBox%3D'0 0 1024 576'%2F%3E)</figure>**La sonde NTC de 2,5m est une sonde de température numérique étanche externe** pratique pour déporter la sonde de température du thermostat Moes zigbee au niveau du sol par exemple.

## Notice Technique BHT-002

<figure class="wp-block-embed is-type-rich is-provider-google-docs wp-block-embed-google-docs"><div class="wp-block-embed__wrapper">> #### [NOTICE MOES THERMOSTAT BHT-002 ZIGBEE.pdf](https://drive.google.com/file/d/13ArYq5bkG5xbnuoVv76iHq4Rb2fCYrG5/view?usp=sharing)
> 
> Notice complète du thermostat zigbee BHT-002 de la marque Moes

<script async="" charset="UTF-8" src="//cdn.embedly.com/widgets/platform.js"></script></div><figcaption>Notice officielle du thermostat zigbee Moes BHT-002</figcaption></figure>## Partie Programmation

Bon je ne vais pas tout détailler, la notice est juste au dessus, la partie intéressante est la programmation qui diffère du thermostat Atlantic qui en est simplement dépourvu.

4 périodes horaires sont disponibles et programmable sur 3 périodes de la semaine ( lundi à vendredi, samedi et dimanche ).

l’intégration avec zigbee2mqtt et homeassistant est très simple. On ouvre le réseau, 8 secondes sur la flèche du bas et c’est inclus.

la partie homeassistant est relativement complète malheureusement la programmation des périodes horaires/jour n’est pas possible, elle s’affiche dans les attributs c’est déjà pas mal. Tout le reste est paramétrable via l’assistant.

<figure class="wp-block-image size-large">![](data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' viewBox%3D'0 0 504 545'%2F%3E)</figure>Aujourd’hui je vais tester et installer le thermostat zigbee BHT-002 de la marque Moes, plus précisément la version chauffage électrique BHT-002-GBLZBW, celui-ci va remplacer par le [thermostat Atlantic 109519](https://www.rexel.fr/frx/Cat%C3%A9gorie/Chauffage-%C3%A9lectrique-climatisation-ventilation/Chauffage-domestique/C%C3%A2ble-chauffant/Plancher-Chauffant-Domocable---Thermostat-digital/ATL109519/p/62427465) ce thermostat des années 2005 coûte toujours plus de 40 euros l’unité avec des paramétrages très restreints.

<figure class="wp-block-image size-large">![](data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' viewBox%3D'0 0 1024 576'%2F%3E)</figure>Pour parler de la marque Moes, c’est le second matériel que je test, commandé tous deux chez le revendeur Moes Official Store d’aliexpress, et franchement la qualité est très bien fini, l’emballage est pro et la notice ( en Anglais ) est parfaitement détaillée. Alors n’hésitez pas à commander les produits de cette marque. D’ailleurs dans un prochain article Yann dit ( tonton ) va tester [le nouveau capteur 3 en 1 ( thermomètre, luminosité et humidité ) zigbee de la marque](https://fr.aliexpress.com/item/1005002522611717.html?spm=a2g0o.productlist.0.0.47147798UjVhU9&algo_pvid=760ce515-952e-453c-bdc1-465c7c3542f7&algo_exp_id=760ce515-952e-453c-bdc1-465c7c3542f7-41). Il est déjà compatible zigbee2mqtt donc multiplateforme, j’attends ça avec impatience donc à toi de jouer tonton.

<figure class="wp-block-image size-large">![](data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' viewBox%3D'0 0 1024 576'%2F%3E)</figure>Commençons par le déballage, comme je le disais plus haut l’emballage est top, le produit est bien protégé, à l’intérieur le thermostat ( un film de protection protège l’écran ), une sonde ntd, deux visses et la notice, rien d’extraordinaire. Le branchement sur chauffage électrique se fera sans soucis car disponible avec deux neutres/2 phases en entrée et sortie, de plus en option on peut brancher le thermostat en modbus, dans notre cas pas la peine, pour la sonde idem.

## Installation du module

Rien de bien compliqué, pour commencer la partie noir se déboîte facilement d’une main afin de pouvoir visser le module sur le boitier d’encastrement.

**De Gauche à droite:**

- Connectique Modbus blanc/rouge
- 1: phase fil souple sortie du radiateur
- 2: neutre fil souple sortie du radiateur
- 3: Neutre du disjoncteur
- 4 Phase du disjoncteur
- 5-6 fil de la sonde NTC de 2,5m branchée pour contrôler la température du sol.

<figure class="wp-block-image size-large">![](data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' viewBox%3D'0 0 1024 576'%2F%3E)</figure>Suit l’installation en lieu et place au thermostat d’ambiance Atlantic. Comme énoncé plus haut rien de bien compliqué.

<div class="wp-block-image"><figure class="alignleft is-resized">![logo risque électrique](data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' viewBox%3D'0 0 68 68'%2F%3E)</figure></div>**Vous allez devoir travailler au voisinage d’une tension de 220V qui est dangereuse si vous entrez en contact avec un conducteur électrique.** **Prenez garde à vos manipulations, en cas de doute coupez l’alimentation électrique.**

Ce qui est dommage la connectique est réalisé par des fils dupont, **la liaison aurait pu être prévu par emboîtement**

<figure class="wp-block-image size-large">![](data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' viewBox%3D'0 0 1024 576'%2F%3E)</figure>**La sonde NTC de 2,5m est une sonde de température numérique étanche externe** pratique pour déporter la sonde de température du thermostat Moes zigbee au niveau du sol par exemple.

## Notice Technique BHT-002

<figure class="wp-block-embed is-type-rich is-provider-google-docs wp-block-embed-google-docs"><div class="wp-block-embed__wrapper">> #### [NOTICE MOES THERMOSTAT BHT-002 ZIGBEE.pdf](https://drive.google.com/file/d/13ArYq5bkG5xbnuoVv76iHq4Rb2fCYrG5/view?usp=sharing)
> 
> Notice complète du thermostat zigbee BHT-002 de la marque Moes

<script async="" charset="UTF-8" src="//cdn.embedly.com/widgets/platform.js"></script></div><figcaption>Notice officielle du thermostat zigbee Moes BHT-002</figcaption></figure>## Partie Programmation

Bon je ne vais pas tout détailler, la notice est juste au dessus, la partie intéressante est la programmation qui diffère du thermostat Atlantic qui en est simplement dépourvu.

4 périodes horaires sont disponibles et programmable sur 3 périodes de la semaine ( lundi à vendredi, samedi et dimanche ).

l’intégration avec zigbee2mqtt et homeassistant est très simple. On ouvre le réseau, 8 secondes sur la flèche du bas et c’est inclus.

la partie homeassistant est relativement complète malheureusement la programmation des périodes horaires/jour n’est pas possible, elle s’affiche dans les attributs c’est déjà pas mal. Tout le reste est paramétrable via l’assistant.

<figure class="wp-block-image size-large">![](data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' viewBox%3D'0 0 504 545'%2F%3E)</figure>